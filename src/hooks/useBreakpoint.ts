import { useState, useEffect } from "react";

export const Breakpoint = {
  /** 0–639px */
  Mobile: 0,
  /** 640–1023px */
  Tablet: 640,
  /** 1024px+ */
  Desktop: 1024,
} as const;

export type BreakpointName = "mobile" | "tablet" | "desktop";

function getBreakpoint(width: number): BreakpointName {
  if (width >= Breakpoint.Desktop) return "desktop";
  if (width >= Breakpoint.Tablet) return "tablet";
  return "mobile";
}

/**
 * Returns the current breakpoint name based on window width.
 *
 * ```tsx
 * const bp = useBreakpoint();
 * <Grid columns={bp === "mobile" ? 1 : bp === "tablet" ? 2 : 4}>
 * ```
 */
export function useBreakpoint(): BreakpointName {
  const [bp, setBp] = useState<BreakpointName>(() =>
    typeof window !== "undefined" ? getBreakpoint(window.innerWidth) : "desktop"
  );

  useEffect(() => {
    const onResize = () => setBp(getBreakpoint(window.innerWidth));
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return bp;
}
