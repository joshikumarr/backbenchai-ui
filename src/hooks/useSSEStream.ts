import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Low-level SSE parser. Reads a `Response.body` ReadableStream, splits
 * on the SSE event boundary (`\n\n`), collects `data:` lines, and yields
 * one parsed JSON payload per event block.
 *
 * cuepilot-agent emits `data: {"event": "<name>", "data": {...}}` — type
 * lives in the JSON `event` field, not the SSE `event:` line.
 */
export async function* parseSSEStream<TEvent>(
  response: Response,
  signal?: AbortSignal,
): AsyncGenerator<TEvent> {
  if (!response.body) {
    throw new Error("SSE response has no readable body");
  }
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  let buffer = "";

  try {
    while (true) {
      if (signal?.aborted) {
        await reader.cancel().catch(() => {});
        return;
      }
      const { value, done } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });

      let boundary: number;
      while ((boundary = buffer.indexOf("\n\n")) !== -1) {
        const block = buffer.slice(0, boundary);
        buffer = buffer.slice(boundary + 2);

        const dataLines: string[] = [];
        for (const line of block.split("\n")) {
          if (line.startsWith("data:")) {
            dataLines.push(line.slice(5).trimStart());
          }
        }
        if (dataLines.length === 0) continue;
        const payload = dataLines.join("\n");
        try {
          yield JSON.parse(payload) as TEvent;
        } catch {
          // Malformed event — skip rather than abort the whole stream
        }
      }
    }
  } finally {
    try {
      reader.releaseLock();
    } catch {
      /* already released */
    }
  }
}

/**
 * Mid-level: fetch + parse in one call. Use this from non-React code
 * (e.g., API client functions). Aborting via the signal cancels the
 * underlying fetch and stops yielding.
 */
export async function* streamSSE<TEvent>(
  input: RequestInfo,
  init: RequestInit & { signal?: AbortSignal } = {},
): AsyncGenerator<TEvent> {
  const response = await fetch(input, init);
  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(
      `SSE request failed ${response.status} ${response.statusText}: ${text}`,
    );
  }
  yield* parseSSEStream<TEvent>(response, init.signal);
}

// ─── React hook ─────────────────────────────────────────────────────────

export interface UseSSEStreamOptions<TEvent> {
  /** Fired for every parsed event as it arrives */
  onEvent?: (event: TEvent) => void;
  /** Fired once when the stream closes naturally */
  onComplete?: () => void;
  /** Fired on fetch failure or aborted stream */
  onError?: (error: Error) => void;
  /** When true, accumulated `events` array is kept (default: true) */
  retain?: boolean;
}

export interface UseSSEStreamResult<TEvent> {
  /** All events received this run (cleared on `start` / `reset`) */
  events: TEvent[];
  /** Most recent event, or null */
  lastEvent: TEvent | null;
  /** True between `start` resolving the fetch and the stream closing */
  isStreaming: boolean;
  /** Set if the stream errored or aborted */
  error: Error | null;
  /** Begin a new stream. Aborts any in-flight stream first. */
  start: (input: RequestInfo, init?: RequestInit) => Promise<void>;
  /** Abort the current stream, if any */
  abort: () => void;
  /** Clear events / error state without starting a new stream */
  reset: () => void;
}

/**
 * React hook wrapping `streamSSE`. Manages an AbortController per run,
 * cancels in-flight streams on unmount, and surfaces events as state.
 *
 * ```tsx
 * const stream = useSSEStream<DiagnosticAnswerEvent>({
 *   onEvent: (e) => { if (e.event === "mastery_update") patchMastery(e.data); },
 * });
 * stream.start("/api/toar/assessments/abc/answers", {
 *   method: "POST",
 *   body: JSON.stringify(payload),
 * });
 * ```
 */
export function useSSEStream<TEvent>(
  options: UseSSEStreamOptions<TEvent> = {},
): UseSSEStreamResult<TEvent> {
  const { onEvent, onComplete, onError, retain = true } = options;

  const [events, setEvents] = useState<TEvent[]>([]);
  const [lastEvent, setLastEvent] = useState<TEvent | null>(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const controllerRef = useRef<AbortController | null>(null);
  const mountedRef = useRef(true);

  // Stable refs to callbacks so `start` doesn't re-create on every render
  const onEventRef = useRef(onEvent);
  const onCompleteRef = useRef(onComplete);
  const onErrorRef = useRef(onError);
  useEffect(() => {
    onEventRef.current = onEvent;
    onCompleteRef.current = onComplete;
    onErrorRef.current = onError;
  });

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      controllerRef.current?.abort();
    };
  }, []);

  const abort = useCallback(() => {
    controllerRef.current?.abort();
    controllerRef.current = null;
  }, []);

  const reset = useCallback(() => {
    setEvents([]);
    setLastEvent(null);
    setError(null);
  }, []);

  const start = useCallback(
    async (input: RequestInfo, init: RequestInit = {}) => {
      controllerRef.current?.abort();
      const controller = new AbortController();
      controllerRef.current = controller;

      if (mountedRef.current) {
        setEvents([]);
        setLastEvent(null);
        setError(null);
        setIsStreaming(true);
      }

      try {
        for await (const event of streamSSE<TEvent>(input, {
          ...init,
          signal: controller.signal,
        })) {
          if (!mountedRef.current) return;
          if (retain) setEvents((prev) => [...prev, event]);
          setLastEvent(event);
          onEventRef.current?.(event);
        }
        if (mountedRef.current) onCompleteRef.current?.();
      } catch (err) {
        if (controller.signal.aborted) return;
        const e = err instanceof Error ? err : new Error(String(err));
        if (mountedRef.current) {
          setError(e);
          onErrorRef.current?.(e);
        }
      } finally {
        if (mountedRef.current && controllerRef.current === controller) {
          setIsStreaming(false);
          controllerRef.current = null;
        }
      }
    },
    [retain],
  );

  return { events, lastEvent, isStreaming, error, start, abort, reset };
}
