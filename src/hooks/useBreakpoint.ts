import { useState, useEffect } from "react";

/**
 * The library's original three-step scale.
 *
 * Prefer WindowSizeClass below for new layout code. This scale stays because
 * Layout, Show, Hide, and every responsive prop read it, and a change here
 * moves the layout of every consumer app.
 */
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

/**
 * Material 3 window size classes — the published scale.
 *
 * Google measured real devices against these numbers and states the coverage,
 * so use them instead of a number you picked. Source: Android developer docs,
 * "Window size classes". CAPACITOR.md lists the URL.
 *
 * Width, with the column and margin the M3 grid pairs with each step:
 *
 * | Class       | Width         | Covers                        | Columns | Margin |
 * | ----------- | ------------- | ----------------------------- | ------- | ------ |
 * | compact     | < 600         | 99.96% of phones, portrait    | 4       | 16px   |
 * | medium      | 600–839       | tablets portrait, unfolded    | 8       | 24px   |
 * | expanded    | 840–1199      | tablets landscape             | 12      | 24px   |
 * | large       | 1200–1599     | large tablets                 | 12      | 24px   |
 * | extraLarge  | >= 1600       | desktop                       | 12      | 24px   |
 *
 * Design the phone case at 360px. That is the narrowest common Android phone
 * (Galaxy S series). Every iPhone is wider, from 375px up.
 */
export const WindowSizeClass = {
  Compact: 0,
  Medium: 600,
  Expanded: 840,
  Large: 1200,
  ExtraLarge: 1600,
} as const;

/**
 * Material 3 HEIGHT classes. Use these to find a phone in landscape.
 *
 * | Class    | Height    | Covers                       |
 * | -------- | --------- | ---------------------------- |
 * | compact  | < 480     | 99.78% of phones, landscape  |
 * | medium   | 480–899   | tablets landscape, phones portrait |
 * | expanded | >= 900    | tablets portrait             |
 *
 * A landscape phone reads as EXPANDED on width and COMPACT on height. Width
 * alone says "give it a sidebar", which is wrong — there is no vertical room.
 * Check the height class before you show tall chrome.
 */
export const WindowHeightClass = {
  Compact: 0,
  Medium: 480,
  Expanded: 900,
} as const;

export type WindowSizeClassName =
  | "compact"
  | "medium"
  | "expanded"
  | "large"
  | "extraLarge";

export type WindowHeightClassName = "compact" | "medium" | "expanded";

function getWidthClass(width: number): WindowSizeClassName {
  if (width >= WindowSizeClass.ExtraLarge) return "extraLarge";
  if (width >= WindowSizeClass.Large) return "large";
  if (width >= WindowSizeClass.Expanded) return "expanded";
  if (width >= WindowSizeClass.Medium) return "medium";
  return "compact";
}

function getHeightClass(height: number): WindowHeightClassName {
  if (height >= WindowHeightClass.Expanded) return "expanded";
  if (height >= WindowHeightClass.Medium) return "medium";
  return "compact";
}

export interface WindowSize {
  width: WindowSizeClassName;
  height: WindowHeightClassName;
}

/**
 * The current Material 3 window size class, for width and for height.
 *
 * ```tsx
 * const { width, height } = useWindowSizeClass();
 * const showRail = width !== "compact" && height !== "compact";
 * ```
 */
export function useWindowSizeClass(): WindowSize {
  const read = (): WindowSize =>
    typeof window !== "undefined"
      ? {
          width: getWidthClass(window.innerWidth),
          height: getHeightClass(window.innerHeight),
        }
      : { width: "expanded", height: "medium" };

  const [size, setSize] = useState<WindowSize>(read);

  useEffect(() => {
    const onResize = () =>
      setSize((prev) => {
        const next = read();
        // Same class on both axes → same object, so consumers do not re-render
        // on every pixel of a resize drag.
        return prev.width === next.width && prev.height === next.height
          ? prev
          : next;
      });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return size;
}
