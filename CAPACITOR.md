# Capacitor and safe areas

This library ships one React bundle. The bundle runs in a web browser AND
inside the iOS and Android WebView that Capacitor provides. This document
states the rules that keep one bundle correct on both targets.

Read this before you write `env(safe-area-inset-*)` anywhere. The code that
applies these rules is in `src/safeArea.ts`.

## What a safe-area inset is

A safe-area inset is the distance from a viewport edge to the first pixel that
the system does not cover. Four things create one:

- the notch and the Dynamic Island, at the top of an iPhone
- the home indicator, at the bottom of an iPhone
- the Android status bar, at the top
- the Android navigation bar or gesture bar, at the bottom

The web reports every inset as `0`, because a browser tab has no system chrome
inside the viewport. So an expression that is correct on the device is also
correct on the web. The web layout does not move.

## Rule 1 — read the Capacitor variable first, then env()

Android WebView before version 140 has a bug. It returns wrong values from
`env(safe-area-inset-*)`. Capacitor 8.3.0 injects the true native insets as
`--safe-area-inset-*` custom properties. Capacitor 8.4.0 extends them to older
API levels.

So read the injected variable first. Fall back to `env()`. Fall back to `0px`.

```css
padding-bottom: var(--safe-area-inset-bottom, env(safe-area-inset-bottom, 0px));
```

Use `safeAreaInset("bottom")` from `src/safeArea.ts` instead of typing this.

**A consumer app needs `@capacitor/core` 8.4.0 or later.** An older version
does not inject the variables, and Android falls back to the buggy `env()`.

## Rule 2 — calc() on the block axis, max() on the inline axis

Both forms are correct. They do different jobs. This is the rule people get
wrong.

**Top and bottom ADD.** The home indicator sits below your bar's own padding,
so the bar needs both. MDN documents this form for a sticky footer:

```css
footer {
  position: sticky;
  bottom: 0;
  padding: 1em 1em calc(1em + env(safe-area-inset-bottom));
}
```

**Left and right REPLACE.** In landscape the notch eats the gutter you already
have, so you want the larger of the two. WebKit documents this form:

```css
padding-left: max(12px, env(safe-area-inset-left));
padding-right: max(12px, env(safe-area-inset-right));
```

`safeAreaBlock()` and `safeAreaInline()` apply the correct form for you.

## Rule 3 — the consumer app must set viewport-fit=cover

Every inset is `0` without it. Put this in `index.html`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
```

## Rule 4 — do not use StatusBar.setOverlaysWebView for top space

That call does nothing on Android 15 and later.

Android 15 (API 35) enforces edge-to-edge layout for any app that targets API
35 or higher. Android 15 still allowed an opt-out through
`windowOptOutEdgeToEdgeEnforcement`. **Android 16 removed the opt-out.**
Capacitor lists `setOverlaysWebView` and `backgroundColor` as unavailable on
Android 15+.

An app that calls `setOverlaysWebView({ overlay: false })` to push content below
the status bar works on iOS and fails silently on a current Samsung. Pad with
the safe-area insets instead. `Layout` does this for `topNav` already.

## Rule 5 — measure before you trust a number

The rules above are specifications. A specification does not tell you what
`--safe-area-inset-bottom` resolves to on one device with 3-button navigation
turned on. Print the resolved values on a real device before you fix a layout
against them.

## Where the library applies these rules

| Place | What it does |
| --- | --- |
| `src/safeArea.ts` | The helpers. One source of truth. |
| `Box` `safeArea` prop | Adds the inset on `top`/`bottom`, takes the larger on `inline`. |
| `MobileNav` | Adds the bottom inset, so the labels clear the home indicator. Takes the larger on the inline axis, for the notch in landscape. |
| `Layout` | Wraps `topNav` in a top safe area. Reserves `MOBILE_NAV_HEIGHT` plus the bottom inset on the content area. Uses `100dvh`, not `100vh`. |

A consumer that pads its own `topNav` for the notch now double-pads. Remove
that padding from the app.

## Sizes that come from a published scale

Do not pick a breakpoint. Use the Material 3 window size classes. Google
measured real devices against them and states the coverage.
`useWindowSizeClass()` returns them.

| Class | Width | Covers | Columns | Margin |
| --- | --- | --- | --- | --- |
| compact | < 600 | 99.96% of phones, portrait | 4 | 16px |
| medium | 600–839 | tablets portrait, unfolded | 8 | 24px |
| expanded | 840–1199 | tablets landscape | 12 | 24px |
| large | 1200–1599 | large tablets | 12 | 24px |
| extraLarge | >= 1600 | desktop | 12 | 24px |

There is a height scale too. Use it to find a phone in landscape.

| Class | Height | Covers |
| --- | --- | --- |
| compact | < 480 | 99.78% of phones, landscape |
| medium | 480–899 | tablets landscape, phones portrait |
| expanded | >= 900 | tablets portrait |

A landscape phone reads as **expanded** on width and **compact** on height.
Width alone says "give it a sidebar". That is wrong, because there is no
vertical room. Check the height class before you show tall chrome.

Other numbers this library holds to:

| Thing | Value | Source |
| --- | --- | --- |
| Minimum touch target | 44×44 pt | Apple |
| Minimum touch target | 48×48 dp | Material |
| iOS tab bar | 49 pt | Apple |
| iOS home indicator inset | 34 pt portrait, 21 pt landscape | Apple |
| iOS tab bar plus inset | 83 pt | Apple |
| Material navigation bar | 80 dp | Material |
| Baseline grid | 8 dp | Material |
| Narrowest common phone | 360px (Galaxy S) | design floor |

`MOBILE_NAV_HEIGHT` is 64px. The item button is 48px, which clears both
minimum touch targets. The bar adds 8px of padding on each side.

## Sources

- [WebKit — Designing Websites for iPhone X](https://webkit.org/blog/7929/designing-websites-for-iphone-x/)
- [MDN — `env()`](https://developer.mozilla.org/en-US/docs/Web/CSS/env)
- [Android — Window size classes](https://developer.android.com/develop/ui/compose/layouts/adaptive/use-window-size-classes)
- [Material 3 — Applying layout](https://m3.material.io/foundations/layout/applying-layout/window-size-classes)
- [Material 3 — Grids and spacing](https://m3.material.io/foundations/layout/grids-spacing/spacing)
- [Android — Display content edge-to-edge](https://developer.android.com/develop/ui/views/layout/edge-to-edge)
- [Android Accessibility — Touch target size](https://support.google.com/accessibility/android/answer/7101858)
- [Apple — Human Interface Guidelines, Layout](https://developer.apple.com/design/human-interface-guidelines/layout)
- [Capacitor — Status Bar plugin](https://capacitorjs.com/docs/apis/status-bar)
- [Capawesome — Capacitor edge-to-edge and safe areas](https://capawesome.io/blog/capacitor-edge-to-edge-and-safe-areas-guide/)
