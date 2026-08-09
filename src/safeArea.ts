/**
 * Safe-area insets — one source of truth.
 *
 * READ THIS BEFORE YOU WRITE SAFE-AREA CSS ANYWHERE IN THIS LIBRARY.
 * The long form, with sources, is in CAPACITOR.md at the repo root.
 *
 * A safe-area inset is the distance from a viewport edge to the first pixel
 * the system does not cover. The notch, the Dynamic Island, the iOS home
 * indicator, and the Android status and navigation bars all create one.
 *
 * ## Rule 1 — read the Capacitor variable first, then env()
 *
 * Android WebView before version 140 has a bug. It returns wrong values from
 * env(safe-area-inset-*). Capacitor 8.3.0 and later inject the true native
 * insets as --safe-area-inset-* custom properties, and 8.4.0 extends them to
 * older API levels. So read the injected variable first. Fall back to env()
 * for the web and for iOS. Fall back to 0px last.
 *
 *     var(--safe-area-inset-bottom, env(safe-area-inset-bottom, 0px))
 *
 * On the web the browser does not inject the variable and env() returns the
 * real value, so one expression is correct on both targets.
 *
 * ## Rule 2 — calc() on the block axis, max() on the inline axis
 *
 * Both forms are correct. They do different jobs.
 *
 * - Top and bottom are ADDITIVE. The home indicator sits below your bar's own
 *   padding, so you need both. Use calc(padding + inset).
 * - Left and right are REPLACING. In landscape the notch eats the gutter you
 *   already have, so you want the larger of the two. Use max(padding, inset).
 *
 * MDN documents the calc() form for a sticky footer. WebKit documents the
 * max() form for page gutters. See CAPACITOR.md.
 *
 * ## Rule 3 — the consumer app must set viewport-fit=cover
 *
 * All insets are 0 without it. Put this in index.html:
 *
 *     <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
 *
 * ## Rule 4 — do not use StatusBar.setOverlaysWebView to make top space
 *
 * That call does nothing on Android 15 and later. Android 15 enforces
 * edge-to-edge layout, and Android 16 removed the opt-out. Capacitor lists the
 * option as unavailable on Android 15+. Pad with these insets instead.
 */

/**
 * The four viewport edges that can carry a system inset. Box's `safeArea` prop
 * uses a different, axis-based type — see SafeAreaEdge in Box.tsx.
 */
export type SafeAreaInsetEdge = "top" | "right" | "bottom" | "left";

/**
 * The CSS value of one safe-area inset.
 *
 * ```ts
 * paddingBlockEnd: `calc(${Spacing.Medium} + ${safeAreaInset("bottom")})`
 * ```
 */
export function safeAreaInset(edge: SafeAreaInsetEdge): string {
  return `var(--safe-area-inset-${edge}, env(safe-area-inset-${edge}, 0px))`;
}

/**
 * Padding for the block axis (top, bottom). The inset ADDS to the padding.
 * Pass no padding to get the bare inset.
 */
export function safeAreaBlock(edge: "top" | "bottom", padding?: string): string {
  if (!padding) return safeAreaInset(edge);
  return `calc(${padding} + ${safeAreaInset(edge)})`;
}

/**
 * Padding for the inline axis (left, right). The inset REPLACES the padding
 * when the inset is larger.
 */
export function safeAreaInline(edge: "left" | "right", padding: string): string {
  return `max(${padding}, ${safeAreaInset(edge)})`;
}
