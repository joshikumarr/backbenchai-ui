import type { ReactNode } from "react";
import { useBreakpoint, type BreakpointName } from "../hooks/useBreakpoint";

export interface ShowProps {
  /**
   * Render children only when the current breakpoint is one of these.
   * Mutually exclusive with `above` / `below`.
   */
  on?: BreakpointName | BreakpointName[];
  /**
   * Render children only when the viewport is at or above this breakpoint.
   * `above="tablet"` means: tablet OR desktop.
   */
  above?: BreakpointName;
  /**
   * Render children only when the viewport is below this breakpoint.
   * `below="desktop"` means: mobile OR tablet.
   */
  below?: BreakpointName;
  children: ReactNode;
}

const ORDER: BreakpointName[] = ["mobile", "tablet", "desktop"];

function isAtOrAbove(current: BreakpointName, target: BreakpointName): boolean {
  return ORDER.indexOf(current) >= ORDER.indexOf(target);
}

function isBelow(current: BreakpointName, target: BreakpointName): boolean {
  return ORDER.indexOf(current) < ORDER.indexOf(target);
}

/**
 * Show — conditional render based on the current breakpoint.
 *
 * ```tsx
 * <Show on="mobile"><MobileNav /></Show>
 * <Show on={["tablet", "desktop"]}><DesktopHeader /></Show>
 * <Show above="tablet"><SideRail /></Show>
 * <Show below="desktop"><MobileBanner /></Show>
 * ```
 *
 * Renders nothing on the server and on the initial client render until
 * useBreakpoint resolves. For above-the-fold content where flicker matters,
 * prefer CSS media queries.
 */
export function Show({ on, above, below, children }: ShowProps) {
  const bp = useBreakpoint();

  if (on != null) {
    const allowed = Array.isArray(on) ? on : [on];
    return allowed.includes(bp) ? <>{children}</> : null;
  }
  if (above != null) {
    return isAtOrAbove(bp, above) ? <>{children}</> : null;
  }
  if (below != null) {
    return isBelow(bp, below) ? <>{children}</> : null;
  }
  return <>{children}</>;
}
