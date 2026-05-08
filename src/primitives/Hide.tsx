import type { ReactNode } from "react";
import { useBreakpoint, type BreakpointName } from "../hooks/useBreakpoint";

export interface HideProps {
  /** Hide children when the current breakpoint is one of these. */
  on?: BreakpointName | BreakpointName[];
  /** Hide children when viewport is at or above this breakpoint. */
  above?: BreakpointName;
  /** Hide children when viewport is below this breakpoint. */
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
 * Hide — inverse of Show. Renders children EXCEPT when the rule matches.
 *
 * ```tsx
 * <Hide on="mobile"><DesktopOnlyTooltip /></Hide>
 * <Hide above="tablet"><MobileOnlyDrawer /></Hide>
 * <Hide below="desktop"><FullWidthHero /></Hide>
 * ```
 */
export function Hide({ on, above, below, children }: HideProps) {
  const bp = useBreakpoint();

  if (on != null) {
    const blocked = Array.isArray(on) ? on : [on];
    return blocked.includes(bp) ? null : <>{children}</>;
  }
  if (above != null) {
    return isAtOrAbove(bp, above) ? null : <>{children}</>;
  }
  if (below != null) {
    return isBelow(bp, below) ? null : <>{children}</>;
  }
  return <>{children}</>;
}
