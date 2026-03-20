import { useBreakpoint } from "./useBreakpoint";
import type { BreakpointName } from "./useBreakpoint";

/**
 * A value that can vary by breakpoint.
 *
 * - Plain value: used at all breakpoints
 * - Object: mobile is required, tablet/desktop cascade from the previous
 *
 * ```tsx
 * columns={4}                          // always 4
 * columns={{ mobile: 1, desktop: 4 }} // 1 on mobile, 1 on tablet (inherits), 4 on desktop
 * ```
 */
export type Responsive<T> = T | { mobile: T; tablet?: T; desktop?: T };

/**
 * Resolves a Responsive<T> value to a concrete T based on the current breakpoint.
 */
export function resolveResponsive<T>(value: Responsive<T>, bp: BreakpointName): T {
  if (value === null || value === undefined) return value;
  if (typeof value !== "object" || !("mobile" in (value as object))) return value as T;

  const obj = value as { mobile: T; tablet?: T; desktop?: T };

  switch (bp) {
    case "desktop":
      return obj.desktop ?? obj.tablet ?? obj.mobile;
    case "tablet":
      return obj.tablet ?? obj.mobile;
    default:
      return obj.mobile;
  }
}

/**
 * Hook that resolves a Responsive<T> value based on the current window width.
 */
export function useResponsiveValue<T>(value: Responsive<T>): T {
  const bp = useBreakpoint();
  return resolveResponsive(value, bp);
}
