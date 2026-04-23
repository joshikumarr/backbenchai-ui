import Q, { forwardRef as X, useState as W, useEffect as _, Fragment as je, useCallback as K, useId as fe, createContext as Ve, useContext as Ke, useMemo as me, useRef as te } from "react";
import { jsxs as p, jsx as e, Fragment as xe } from "react/jsx-runtime";
import { createPortal as ke } from "react-dom";
const Me = "bbui-base-styles", Le = `
:root, [data-theme="light"] {
  /* ── Fonts ── */
  --bbui-font-display: 'Manrope', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
  --bbui-font-body: 'Inter', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif;

  /* ── Text colors ── */
  --bbui-color-on-surface: #131b2e;
  --bbui-color-subtle: #575e70;
  --bbui-color-subtlest: #6d7b6c;
  --bbui-color-disabled: #bccbb9;
  --bbui-color-inverse: #ffffff;
  --bbui-color-on-brand: #ffffff;
  --bbui-color-primary: #006e2f;
  --bbui-color-primary-container: #22c55e;
  --bbui-color-on-primary-container: #004b1e;
  --bbui-color-error: #ba1a1a;
  --bbui-color-error-container: #93000a;
  --bbui-color-warning: #92400e;
  --bbui-color-info: #1e40af;
  --bbui-color-on-surface-variant: #3d4a3d;
  --bbui-color-surface: #faf8ff;
  --bbui-color-on-success: #004b1e;
  --bbui-color-on-error: #93000a;
  --bbui-color-on-warning: #92400e;
  --bbui-color-on-info: #1e40af;

  /* ── Backgrounds ── */
  --bbui-bg-default: #ffffff;
  --bbui-bg-surface: #faf8ff;
  --bbui-bg-subtle: #f2f3ff;
  --bbui-bg-neutral: #eaedff;
  --bbui-bg-neutral-bold: #e2e7ff;
  --bbui-bg-neutral-bolder: #dae2fd;
  --bbui-bg-sidebar: #f8fafc;
  --bbui-bg-dark: #131b2e;
  --bbui-bg-dark-hover: #283044;
  --bbui-bg-dark-active: #111827;
  --bbui-bg-accent: #4f46e5;
  --bbui-bg-brand: #006e2f;
  --bbui-bg-brand-bold: #004b1e;
  --bbui-bg-primary-container: #22c55e;
  --bbui-bg-secondary-container: #d9dff5;
  --bbui-bg-warning: #fef3c7;
  --bbui-bg-warning-bold: #f59e0b;
  --bbui-bg-error: #ffdad6;
  --bbui-bg-error-bold: #ba1a1a;
  --bbui-bg-info: #dbeafe;
  --bbui-bg-info-bold: #3b82f6;
  --bbui-bg-overlay: rgba(0,0,0,0.5);

  /* ── Tint backgrounds ── */
  --bbui-bg-primary-tint: rgba(0,110,47,0.1);
  --bbui-bg-error-tint: rgba(186,26,26,0.1);
  --bbui-bg-secondary-tint: rgba(87,94,112,0.1);
  --bbui-bg-warning-tint: rgba(251,146,60,0.1);
  --bbui-bg-info-tint: rgba(59,130,246,0.1);
  --bbui-bg-accent-tint: rgba(192,132,252,0.1);

  /* ── Interactive / selection states ── */
  --bbui-bg-selected: rgba(0,110,47,0.1);
  --bbui-bg-selected-bold: rgba(0,110,47,0.2);
  --bbui-border-selected: rgba(0,110,47,0.4);
  --bbui-color-selected: #006e2f;
  --bbui-bg-card-neutral: rgba(0,0,0,0.02);
  --bbui-border-card-neutral: rgba(0,0,0,0.06);
  --bbui-bg-progress-track: rgba(0,0,0,0.06);
  --bbui-color-chart-stroke: rgba(0,0,0,0.08);
  --bbui-color-chart-fill: rgba(0,110,47,0.15);
  --bbui-color-chart-line: rgba(0,110,47,0.6);

  /* ── Borders ── */
  --bbui-border-default: #eaedff;
  --bbui-border-input: #e2e7ff;
  --bbui-border-outline: #bccbb9;
  --bbui-border-warning: #fbbf24;
  --bbui-border-error: #fca5a5;
  --bbui-border-info: #93c5fd;
  --bbui-border-success: #86efac;

  /* ── Accent / status stripes ── */
  --bbui-accent-occupied: #22c55e;
  --bbui-accent-vacant: #cbd5e1;
  --bbui-accent-maintenance: #fb923c;
  --bbui-accent-reserved: #3b82f6;
  --bbui-accent-cleaning: #c084fc;

  /* ── TOAR: Bloom-level scale (light) ── */
  --bbui-bloom-not-assessed: #94a3b8;     /* slate-400 */
  --bbui-bloom-aware:        #ef4444;     /* red-500 */
  --bbui-bloom-understands:  #f97316;     /* orange-500 */
  --bbui-bloom-applies:      #eab308;     /* yellow-500 */
  --bbui-bloom-analyzes:     #22c55e;     /* green-500 */
  --bbui-bloom-masters:      #15803d;     /* green-700 */

  /* ── TOAR: Persona accents (light) ── */
  --bbui-persona-nova:   #6366f1;         /* indigo-500 */
  --bbui-persona-maya:   #ec4899;         /* pink-500 */
  --bbui-persona-jordan: #14b8a6;         /* teal-500 */
  --bbui-persona-custom: #c084fc;         /* purple-400 */

  /* ── Shadows ── */
  --bbui-shadow-ambient: 0 40px 60px -15px rgba(19,27,46,0.04);
  --bbui-shadow-raised: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.06);
  --bbui-shadow-dropdown: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1);
  --bbui-shadow-overlay: 0 20px 25px -5px rgba(0,0,0,.1), 0 8px 10px -6px rgba(0,0,0,.1);
  --bbui-shadow-card-hover: 0 20px 40px -15px rgba(0,110,47,0.08);

  /* ── Gradient ── */
  --bbui-gradient-brand: linear-gradient(135deg, #22c55e 0%, #006e2f 100%);

  /* ── Scrollbar ── */
  --bbui-scrollbar-thumb: rgba(19, 27, 46, 0.15);
  --bbui-scrollbar-thumb-hover: rgba(19, 27, 46, 0.25);
  --bbui-selection-bg: rgba(34, 197, 94, 0.2);

  color-scheme: light;
}

/* ── Dark theme: "Emerald Monolith" ── */
[data-theme="dark"] {
  /* ── Text colors ── */
  --bbui-color-on-surface: #e5e2e1;
  --bbui-color-subtle: #bdcabc;
  --bbui-color-subtlest: #879487;
  --bbui-color-disabled: rgba(229, 226, 225, 0.4);
  --bbui-color-inverse: #131313;
  --bbui-color-on-brand: #ffffff;
  --bbui-color-primary: #6ee591;
  --bbui-color-primary-container: #50c878;
  --bbui-color-on-primary-container: #005025;
  --bbui-color-error: #ffb4ab;
  --bbui-color-error-container: #ffdad6;
  --bbui-color-warning: #ffbeb5;
  --bbui-color-info: #66dd8b;
  --bbui-color-on-surface-variant: #bdcabc;
  --bbui-color-surface: #131313;
  --bbui-color-on-success: #005025;
  --bbui-color-on-error: #ffdad6;
  --bbui-color-on-warning: #ffdad5;
  --bbui-color-on-info: #005025;

  /* ── Backgrounds: surface hierarchy (smoked glass layers) ── */
  --bbui-bg-default: #1c1b1b;              /* surface-container-low */
  --bbui-bg-surface: #131313;              /* the void */
  --bbui-bg-subtle: #2a2a2a;              /* surface-container-high */
  --bbui-bg-neutral: #353534;             /* surface-container-highest */
  --bbui-bg-neutral-bold: #353534;
  --bbui-bg-neutral-bolder: #3a3939;      /* surface-bright */
  --bbui-bg-sidebar: #1c1b1b;
  --bbui-bg-dark: #353534;
  --bbui-bg-dark-hover: #3a3939;
  --bbui-bg-dark-active: #2a2a2a;
  --bbui-bg-accent: #4f46e5;
  --bbui-bg-brand: #006e2f;
  --bbui-bg-brand-bold: #005025;
  --bbui-bg-primary-container: #50c878;
  --bbui-bg-secondary-container: #40493f;
  --bbui-bg-warning: rgba(255,190,181,0.15);
  --bbui-bg-warning-bold: #fb923c;
  --bbui-bg-error: rgba(255,180,171,0.15);
  --bbui-bg-error-bold: #ff9587;
  --bbui-bg-info: rgba(110,229,145,0.15);
  --bbui-bg-info-bold: #66dd8b;
  --bbui-bg-overlay: rgba(0,0,0,0.7);

  /* ── Tint backgrounds (10% alpha, using dark-safe colors) ── */
  --bbui-bg-primary-tint: rgba(110, 229, 145, 0.1);
  --bbui-bg-error-tint: rgba(255, 180, 171, 0.1);
  --bbui-bg-secondary-tint: rgba(192, 201, 188, 0.1);
  --bbui-bg-warning-tint: rgba(255, 190, 181, 0.1);
  --bbui-bg-info-tint: rgba(102, 221, 139, 0.1);
  --bbui-bg-accent-tint: rgba(192, 132, 252, 0.1);

  /* ── Borders: ghost borders only (No-Line Rule) ── */
  --bbui-border-default: rgba(62, 74, 63, 0.15);
  --bbui-border-input: #3e4a3f;
  --bbui-border-outline: rgba(62, 74, 63, 0.15);
  --bbui-border-warning: rgba(255, 190, 181, 0.3);
  --bbui-border-error: rgba(255, 180, 171, 0.3);
  --bbui-border-info: rgba(102, 221, 139, 0.3);
  --bbui-border-success: rgba(110, 229, 145, 0.3);

  /* ── Accent / status stripes (same hues, work on dark) ── */
  --bbui-accent-occupied: #6ee591;
  --bbui-accent-vacant: #879487;
  --bbui-accent-maintenance: #fb923c;
  --bbui-accent-reserved: #66dd8b;
  --bbui-accent-cleaning: #c084fc;

  /* ── TOAR: Bloom-level scale (dark — slightly lifted for contrast) ── */
  --bbui-bloom-not-assessed: #64748b;     /* slate-500 */
  --bbui-bloom-aware:        #fb7185;     /* rose-400 */
  --bbui-bloom-understands:  #fb923c;     /* orange-400 */
  --bbui-bloom-applies:      #facc15;     /* yellow-400 */
  --bbui-bloom-analyzes:     #4ade80;     /* green-400 */
  --bbui-bloom-masters:      #6ee591;     /* emerald glow (matches dark brand) */

  /* ── TOAR: Persona accents (dark — lifted) ── */
  --bbui-persona-nova:   #818cf8;         /* indigo-400 */
  --bbui-persona-maya:   #f472b6;         /* pink-400 */
  --bbui-persona-jordan: #2dd4bf;         /* teal-400 */
  --bbui-persona-custom: #d8b4fe;         /* purple-300 */

  /* ── Shadows: tonal layering, suppress most shadows ── */
  --bbui-shadow-ambient: none;
  --bbui-shadow-raised: none;
  --bbui-shadow-dropdown: 0 4px 12px rgba(0,0,0,0.5);
  --bbui-shadow-overlay: 0 20px 40px rgba(0,0,0,0.6);
  --bbui-shadow-card-hover: none;

  /* ── Gradient: luminescent emerald ── */
  --bbui-gradient-brand: linear-gradient(135deg, #6ee591 0%, #50c878 100%);

  /* ── Scrollbar ── */
  --bbui-scrollbar-thumb: #3e4a3f;
  --bbui-scrollbar-thumb-hover: #879487;
  --bbui-selection-bg: rgba(110, 229, 145, 0.3);

  color-scheme: dark;
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    /* Inherit dark theme vars when no explicit data-theme is set */
    --bbui-color-on-surface: #e5e2e1;
    --bbui-color-subtle: #bdcabc;
    --bbui-color-subtlest: #879487;
    --bbui-color-disabled: rgba(229, 226, 225, 0.4);
    --bbui-color-inverse: #131313;
  --bbui-color-on-brand: #ffffff;
    --bbui-color-primary: #6ee591;
    --bbui-color-primary-container: #50c878;
    --bbui-color-on-primary-container: #005025;
    --bbui-color-error: #ffb4ab;
    --bbui-color-error-container: #ffdad6;
    --bbui-color-warning: #ffbeb5;
    --bbui-color-info: #66dd8b;
    --bbui-color-on-surface-variant: #bdcabc;
    --bbui-color-surface: #131313;
    --bbui-color-on-success: #005025;
    --bbui-color-on-error: #ffdad6;
    --bbui-color-on-warning: #ffdad5;
    --bbui-color-on-info: #005025;
    --bbui-bg-default: #1c1b1b;
    --bbui-bg-surface: #131313;
    --bbui-bg-subtle: #2a2a2a;
    --bbui-bg-neutral: #353534;
    --bbui-bg-neutral-bold: #353534;
    --bbui-bg-neutral-bolder: #3a3939;
    --bbui-bg-sidebar: #1c1b1b;
    --bbui-bg-dark: #353534;
    --bbui-bg-dark-hover: #3a3939;
    --bbui-bg-dark-active: #2a2a2a;
    --bbui-bg-brand: #006e2f;
    --bbui-bg-brand-bold: #005025;
    --bbui-bg-primary-container: #50c878;
    --bbui-bg-secondary-container: #40493f;
    --bbui-bg-warning: rgba(255,190,181,0.15);
    --bbui-bg-warning-bold: #fb923c;
    --bbui-bg-error: rgba(255,180,171,0.15);
    --bbui-bg-error-bold: #ff9587;
    --bbui-bg-info: rgba(110,229,145,0.15);
    --bbui-bg-info-bold: #66dd8b;
    --bbui-bg-overlay: rgba(0,0,0,0.7);
    --bbui-bg-primary-tint: rgba(110, 229, 145, 0.1);
    --bbui-bg-error-tint: rgba(255, 180, 171, 0.1);
    --bbui-bg-secondary-tint: rgba(192, 201, 188, 0.1);
    --bbui-bg-warning-tint: rgba(255, 190, 181, 0.1);
    --bbui-bg-info-tint: rgba(102, 221, 139, 0.1);
    --bbui-bg-accent-tint: rgba(192, 132, 252, 0.1);
    --bbui-border-default: rgba(62, 74, 63, 0.15);
    --bbui-border-input: #3e4a3f;
    --bbui-border-outline: rgba(62, 74, 63, 0.15);
    --bbui-border-warning: rgba(255, 190, 181, 0.3);
    --bbui-border-error: rgba(255, 180, 171, 0.3);
    --bbui-border-info: rgba(102, 221, 139, 0.3);
    --bbui-border-success: rgba(110, 229, 145, 0.3);
    --bbui-accent-occupied: #6ee591;
    --bbui-accent-vacant: #879487;
    --bbui-accent-maintenance: #fb923c;
    --bbui-accent-reserved: #66dd8b;
    --bbui-accent-cleaning: #c084fc;
    --bbui-bloom-not-assessed: #64748b;
    --bbui-bloom-aware: #fb7185;
    --bbui-bloom-understands: #fb923c;
    --bbui-bloom-applies: #facc15;
    --bbui-bloom-analyzes: #4ade80;
    --bbui-bloom-masters: #6ee591;
    --bbui-persona-nova: #818cf8;
    --bbui-persona-maya: #f472b6;
    --bbui-persona-jordan: #2dd4bf;
    --bbui-persona-custom: #d8b4fe;
    --bbui-shadow-ambient: none;
    --bbui-shadow-raised: none;
    --bbui-shadow-dropdown: 0 4px 12px rgba(0,0,0,0.5);
    --bbui-shadow-overlay: 0 20px 40px rgba(0,0,0,0.6);
    --bbui-shadow-card-hover: none;
    --bbui-gradient-brand: linear-gradient(135deg, #6ee591 0%, #50c878 100%);
    --bbui-scrollbar-thumb: #3e4a3f;
    --bbui-scrollbar-thumb-hover: #879487;
    --bbui-selection-bg: rgba(110, 229, 145, 0.3);
    color-scheme: dark;
  }
}

*, *::before, *::after { box-sizing: border-box; margin: 0; }
html { -webkit-text-size-adjust: 100%; scroll-behavior: smooth; }

/* ── Page size (density) ──
   All spacing/font tokens are rem-based, so animating the root font-size
   reflows every dimension off it for free. The curve is the standard
   "decelerate" easing — feels like the layout is settling, not snapping. */
html {
  font-size: 16px;
  transition: font-size 320ms cubic-bezier(0.2, 0.8, 0.2, 1);
}
html[data-page-size="small"]  { font-size: 14px; }
html[data-page-size="medium"] { font-size: 16px; }
html[data-page-size="large"]  { font-size: 18px; }
@media (prefers-reduced-motion: reduce) {
  html { transition: none; }
}
body {
  font-family: var(--bbui-font-body);
  font-size: 1rem;
  line-height: 1.5;
  color: var(--bbui-color-on-surface);
  background-color: var(--bbui-bg-surface);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1, h2, h3, h4, h5, h6 { font-family: var(--bbui-font-display); line-height: 1.2; }
img, svg { display: block; max-width: 100%; }
input, button, textarea, select { font: inherit; }
a { color: inherit; }
:focus-visible { outline: 2px solid var(--bbui-color-primary); outline-offset: 2px; }
:focus:not(:focus-visible) { outline: none; }
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--bbui-scrollbar-thumb); border-radius: 9999px; }
::-webkit-scrollbar-thumb:hover { background: var(--bbui-scrollbar-thumb-hover); }
button, a, input, select, textarea {
  transition: background-color 200ms ease, color 200ms ease, border-color 200ms ease, box-shadow 200ms ease, opacity 200ms ease;
}
::selection { background: var(--bbui-selection-bg); color: var(--bbui-color-on-surface); }
`;
if (typeof document < "u") {
  const r = document.getElementById(Me);
  if (r)
    r.textContent = Le;
  else {
    const t = document.createElement("style");
    t.id = Me, t.textContent = Le, document.head.appendChild(t);
  }
}
const y = X(
  ({
    as: r = "div",
    padding: t,
    paddingBlock: n,
    paddingBlockStart: l,
    paddingBlockEnd: a,
    paddingInline: o,
    paddingInlineStart: d,
    paddingInlineEnd: s,
    marginBlock: u,
    marginBlockStart: g,
    marginBlockEnd: c,
    backgroundColor: h,
    borderRadius: m,
    borderColor: f,
    borderSide: w,
    borderWidth: S = "1px",
    overflow: D,
    elevation: L,
    maxWidth: O,
    style: M,
    children: A,
    ...N
  }, F) => {
    const $ = f ? `${S} solid ${f}` : void 0, k = {};
    if ($ && w)
      switch (w) {
        case "top":
          k.borderTop = $;
          break;
        case "bottom":
          k.borderBottom = $;
          break;
        case "left":
          k.borderLeft = $;
          break;
        case "right":
          k.borderRight = $;
          break;
        case "all":
          k.border = $;
          break;
      }
    const I = {
      ...t && { padding: t },
      ...n && { paddingBlock: n },
      ...l && { paddingBlockStart: l },
      ...a && { paddingBlockEnd: a },
      ...o && { paddingInline: o },
      ...d && { paddingInlineStart: d },
      ...s && { paddingInlineEnd: s },
      ...u && { marginBlock: u },
      ...g && { marginBlockStart: g },
      ...c && { marginBlockEnd: c },
      ...h && { backgroundColor: h },
      ...m && { borderRadius: m },
      ...k,
      ...D && { overflow: D },
      ...L && { boxShadow: L },
      ...O && { maxWidth: O, marginInline: "auto" },
      ...M
    };
    return Q.createElement(
      r,
      { ...N, ref: F, style: I },
      A
    );
  }
);
y.displayName = "Box";
const Be = {
  /** 0–639px */
  Mobile: 0,
  /** 640–1023px */
  Tablet: 640,
  /** 1024px+ */
  Desktop: 1024
};
function De(r) {
  return r >= Be.Desktop ? "desktop" : r >= Be.Tablet ? "tablet" : "mobile";
}
function $e() {
  const [r, t] = W(
    () => typeof window < "u" ? De(window.innerWidth) : "desktop"
  );
  return _(() => {
    const n = () => t(De(window.innerWidth));
    return window.addEventListener("resize", n), () => window.removeEventListener("resize", n);
  }, []), r;
}
function _e(r, t) {
  if (r == null || typeof r != "object" || !("mobile" in r)) return r;
  const n = r;
  switch (t) {
    case "desktop":
      return n.desktop ?? n.tablet ?? n.mobile;
    case "tablet":
      return n.tablet ?? n.mobile;
    default:
      return n.mobile;
  }
}
function be(r) {
  const t = $e();
  return _e(r, t);
}
const Ie = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch"
}, j = X(
  ({
    as: r = "div",
    space: t,
    alignInline: n,
    alignBlock: l,
    spread: a,
    grow: o = "hug",
    marginBlockStart: d,
    marginBlockEnd: s,
    style: u,
    children: g,
    ...c
  }, h) => {
    const f = {
      display: "flex",
      flexDirection: "column",
      gap: be(t ?? "0"),
      ...n && { alignItems: Ie[n] },
      ...l && !a && { justifyContent: Ie[l] },
      ...a && { justifyContent: a },
      ...o === "fill" && { flex: "1 1 auto" },
      ...d && { marginBlockStart: d },
      ...s && { marginBlockEnd: s },
      ...u
    };
    return Q.createElement(
      r,
      { ...c, ref: h, style: f },
      g
    );
  }
);
j.displayName = "Stack";
const ze = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
  baseline: "baseline"
}, T = X(
  ({
    as: r = "div",
    space: t,
    rowSpace: n,
    alignBlock: l,
    alignInline: a,
    spread: o,
    shouldWrap: d,
    separator: s,
    grow: u = "hug",
    marginBlockStart: g,
    marginBlockEnd: c,
    borderRadius: h,
    overflow: m,
    elevation: f,
    style: w,
    children: S,
    ...D
  }, L) => {
    const O = be(t ?? "0"), M = {
      display: "flex",
      flexDirection: "row",
      columnGap: O,
      rowGap: n ?? O,
      ...l && { alignItems: ze[l] },
      ...a && !o && { justifyContent: ze[a] },
      ...o && { justifyContent: o },
      ...d && { flexWrap: "wrap" },
      ...u === "fill" && { flex: "1 1 auto" },
      ...g && { marginBlockStart: g },
      ...c && { marginBlockEnd: c },
      ...h && { borderRadius: h },
      ...m && { overflow: m },
      ...f && { boxShadow: f },
      ...w
    };
    let A = S;
    if (s) {
      const N = Q.Children.toArray(S).filter(Boolean);
      A = N.map((F, $) => /* @__PURE__ */ p(je, { children: [
        F,
        $ < N.length - 1 && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: s })
      ] }, $));
    }
    return Q.createElement(
      r,
      { ...D, ref: L, style: M },
      A
    );
  }
);
T.displayName = "Inline";
const B = X(
  ({
    as: r = "span",
    size: t,
    weight: n,
    color: l,
    fontFamily: a,
    letterSpacing: o,
    align: d,
    textTransform: s,
    lineHeight: u,
    opacity: g,
    style: c,
    children: h,
    ...m
  }, f) => {
    const w = {
      ...t && { fontSize: t },
      ...n && { fontWeight: n },
      ...l && { color: l },
      ...a && { fontFamily: a },
      ...o && { letterSpacing: o },
      ...d && { textAlign: d },
      ...s && { textTransform: s },
      ...u !== void 0 && { lineHeight: u },
      ...g !== void 0 && { opacity: g },
      ...c
    };
    return Q.createElement(
      r,
      { ...m, ref: f, style: w },
      h
    );
  }
);
B.displayName = "Text";
function Ue(r) {
  if (r !== void 0)
    return typeof r == "number" ? `repeat(${r}, 1fr)` : r.map((t) => `${t}fr`).join(" ");
}
const Ae = X(
  ({
    as: r = "div",
    columns: t,
    gap: n,
    rowGap: l,
    marginBlockStart: a,
    marginBlockEnd: o,
    borderRadius: d,
    overflow: s,
    elevation: u,
    style: g,
    children: c,
    ...h
  }, m) => {
    const f = be(t ?? 1), w = be(n ?? "0"), S = {
      display: "grid",
      gridTemplateColumns: Ue(f),
      gap: w,
      ...l && { rowGap: l },
      ...a && { marginBlockStart: a },
      ...o && { marginBlockEnd: o },
      ...d && { borderRadius: d },
      ...s && { overflow: s },
      ...u && { boxShadow: u },
      ...g
    };
    return Q.createElement(
      r,
      { ...h, ref: m, style: S },
      c
    );
  }
);
Ae.displayName = "Grid";
const ae = X(
  ({
    color: r,
    weight: t,
    size: n,
    backgroundColor: l,
    padding: a,
    paddingBlock: o,
    paddingBlockStart: d,
    paddingInline: s,
    borderRadius: u,
    textTransform: g,
    display: c,
    alignSelf: h,
    style: m,
    children: f,
    ...w
  }, S) => {
    const D = {
      ...r && { color: r },
      ...t && { fontWeight: t },
      ...n && { fontSize: n },
      ...l && { backgroundColor: l },
      ...a && { padding: a },
      ...o && { paddingBlock: o },
      ...d && { paddingBlockStart: d },
      ...s && { paddingInline: s },
      ...u && { borderRadius: u },
      ...g && { textTransform: g },
      ...c && { display: c },
      ...h && { alignSelf: h },
      ...m
    };
    return /* @__PURE__ */ e("a", { ref: S, style: D, ...w, children: f });
  }
);
ae.displayName = "Anchor";
const ye = X(
  ({ borderRadius: r, objectFit: t, width: n, height: l, fill: a, style: o, ...d }, s) => {
    const u = {
      display: "block",
      ...a ? { width: "100%", height: "100%" } : {
        ...n ? { width: n, flexShrink: 0 } : { width: "100%" },
        ...l && { height: l }
      },
      ...r && { borderRadius: r },
      ...t && { objectFit: t },
      ...o
    };
    return /* @__PURE__ */ e("img", { ref: s, style: u, ...d });
  }
);
ye.displayName = "Image";
const ee = X(
  ({
    backgroundColor: r,
    gradient: t,
    color: n,
    fontFamily: l,
    padding: a,
    paddingBlock: o,
    paddingInline: d,
    borderRadius: s,
    style: u,
    children: g,
    ...c
  }, h) => {
    const m = {
      border: "none",
      cursor: "pointer",
      ...t ? { background: t } : r ? { backgroundColor: r } : {},
      ...n && { color: n },
      ...l && { fontFamily: l },
      ...a && { padding: a },
      ...o && { paddingBlock: o },
      ...d && { paddingInline: d },
      ...s && { borderRadius: s },
      ...u
    };
    return /* @__PURE__ */ e("button", { ref: h, style: m, ...c, children: g });
  }
);
ee.displayName = "Button";
const Xe = X(
  ({
    backgroundColor: r,
    borderColor: t,
    borderRadius: n,
    padding: l,
    paddingBlock: a,
    paddingInline: o,
    style: d,
    ...s
  }, u) => {
    const g = {
      ...r && { backgroundColor: r },
      ...t && { border: `1px solid ${t}` },
      ...n && { borderRadius: n },
      ...l && { padding: l },
      ...a && { paddingBlock: a },
      ...o && { paddingInline: o },
      ...d
    };
    return /* @__PURE__ */ e("input", { ref: u, style: g, ...s });
  }
);
Xe.displayName = "TextInput";
const Ye = X(
  ({ size: r, color: t, label: n, style: l, children: a, ...o }, d) => {
    const s = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      ...r && { width: r, height: r },
      ...t && { color: t },
      ...l
    };
    return /* @__PURE__ */ e(
      "span",
      {
        ref: d,
        role: n ? "img" : void 0,
        "aria-label": n,
        "aria-hidden": n ? void 0 : !0,
        style: s,
        ...o,
        children: a
      }
    );
  }
);
Ye.displayName = "Icon";
const i = {
  /** 0px */
  None: "0",
  /** 2px */
  XXSmall: "0.125rem",
  /** 4px */
  XSmall: "0.25rem",
  /** 6px */
  Small: "0.375rem",
  /** 8px — base unit */
  Medium: "0.5rem",
  /** 12px */
  MediumLarge: "0.75rem",
  /** 16px */
  Large: "1rem",
  /** 20px */
  XLarge: "1.25rem",
  /** 24px */
  XXLarge: "1.5rem",
  /** 32px */
  XXXLarge: "2rem",
  /** 40px */
  Huge: "2.5rem",
  /** 48px */
  XHuge: "3rem",
  /** 64px */
  XXHuge: "4rem",
  /** 80px */
  XXXHuge: "5rem",
  /** 56px */
  Size3_5: "3.5rem",
  /** 112px */
  Size7: "7rem",
  /** 128px */
  Size8: "8rem",
  /** 256px */
  Size16: "16rem"
}, b = {
  Default: "var(--bbui-color-on-surface)",
  Subtle: "var(--bbui-color-subtle)",
  Subtlest: "var(--bbui-color-subtlest)",
  Disabled: "var(--bbui-color-disabled)",
  Inverse: "var(--bbui-color-inverse)",
  /** Always white — for text on brand/gradient/colored surfaces */
  OnBrand: "var(--bbui-color-on-brand)",
  Brand: "var(--bbui-color-primary)",
  Selected: "var(--bbui-color-on-primary-container)",
  Success: "var(--bbui-color-primary)",
  Warning: "var(--bbui-color-warning)",
  Error: "var(--bbui-color-error)",
  ErrorContainer: "var(--bbui-color-error-container)",
  Info: "var(--bbui-color-info)",
  Link: "var(--bbui-color-primary)",
  OnSurfaceVariant: "var(--bbui-color-on-surface-variant)",
  /** Text on success/green containers */
  OnSuccess: "var(--bbui-color-on-success)",
  /** Text on error containers */
  OnError: "var(--bbui-color-on-error)",
  /** Text on warning containers */
  OnWarning: "var(--bbui-color-on-warning)",
  /** Text on info containers */
  OnInfo: "var(--bbui-color-on-info)"
}, v = {
  Transparent: "transparent",
  Default: "var(--bbui-bg-default)",
  Surface: "var(--bbui-bg-surface)",
  Subtle: "var(--bbui-bg-subtle)",
  Neutral: "var(--bbui-bg-neutral)",
  NeutralBold: "var(--bbui-bg-neutral-bold)",
  NeutralBolder: "var(--bbui-bg-neutral-bolder)",
  SidebarBg: "var(--bbui-bg-sidebar)",
  Dark: "var(--bbui-bg-dark)",
  DarkHover: "var(--bbui-bg-dark-hover)",
  DarkActive: "var(--bbui-bg-dark-active)",
  Accent: "var(--bbui-bg-accent)",
  Brand: "var(--bbui-bg-brand)",
  BrandBold: "var(--bbui-bg-brand-bold)",
  PrimaryContainer: "var(--bbui-bg-primary-container)",
  SecondaryContainer: "var(--bbui-bg-secondary-container)",
  Success: "var(--bbui-bg-primary-container)",
  SuccessBold: "var(--bbui-bg-brand)",
  Warning: "var(--bbui-bg-warning)",
  WarningBold: "var(--bbui-bg-warning-bold)",
  Error: "var(--bbui-bg-error)",
  ErrorBold: "var(--bbui-bg-error-bold)",
  Info: "var(--bbui-bg-info)",
  InfoBold: "var(--bbui-bg-info-bold)",
  Overlay: "var(--bbui-bg-overlay)",
  // Tint variants
  PrimaryTint: "var(--bbui-bg-primary-tint)",
  ErrorTint: "var(--bbui-bg-error-tint)",
  SecondaryTint: "var(--bbui-bg-secondary-tint)",
  WarningTint: "var(--bbui-bg-warning-tint)",
  InfoTint: "var(--bbui-bg-info-tint)",
  AccentTint: "var(--bbui-bg-accent-tint)"
}, Ge = {
  Display: "var(--bbui-font-display)",
  Body: "var(--bbui-font-body)"
}, x = {
  /** 0.625rem / 10px */
  Micro: "0.625rem",
  /** 0.75rem / 12px */
  XXSmall: "0.75rem",
  /** 0.875rem / 14px */
  XSmall: "0.875rem",
  /** 1rem / 16px */
  Small: "1rem",
  /** 1.125rem / 18px */
  Medium: "1.125rem",
  /** 1.25rem / 20px */
  Large: "1.25rem",
  /** 1.5rem / 24px */
  XLarge: "1.5rem",
  /** 1.875rem / 30px */
  XXLarge: "1.875rem",
  /** 2.25rem / 36px */
  XXXLarge: "2.25rem",
  /** 3rem / 48px */
  Huge: "3rem"
}, E = {
  Regular: 400,
  Medium: 500,
  Semibold: 600,
  Bold: 700,
  ExtraBold: 800,
  /** 900 — large display numbers */
  Black: 900
}, pe = {
  Tighter: "-0.05em",
  Tight: "-0.025em",
  Normal: "0",
  Wide: "0.05em",
  Wider: "0.075em",
  /** 0.1em — uppercase labels */
  Widest: "0.1em"
}, C = {
  None: "0",
  Small: "0.25rem",
  Medium: "0.375rem",
  Large: "0.5rem",
  XLarge: "0.75rem",
  XXLarge: "1rem",
  XXXLarge: "1.5rem",
  Huge: "2rem",
  XHuge: "3rem",
  Full: "9999px"
}, R = {
  Default: "var(--bbui-border-default)",
  Input: "var(--bbui-border-input)",
  Warning: "var(--bbui-border-warning)",
  Error: "var(--bbui-border-error)",
  Info: "var(--bbui-border-info)",
  Success: "var(--bbui-border-success)",
  Focus: "var(--bbui-color-primary)",
  Outline: "var(--bbui-border-outline)"
}, Ct = {
  Thin: "1px",
  Medium: "2px",
  Thick: "4px",
  XThick: "8px"
}, Mt = {
  Occupied: "var(--bbui-accent-occupied)",
  Vacant: "var(--bbui-accent-vacant)",
  Maintenance: "var(--bbui-accent-maintenance)",
  Reserved: "var(--bbui-accent-reserved)",
  Cleaning: "var(--bbui-accent-cleaning)",
  Primary: "var(--bbui-color-primary)",
  Error: "var(--bbui-color-error)"
}, ie = {
  None: "none",
  Raised: "var(--bbui-shadow-raised)",
  Ambient: "var(--bbui-shadow-ambient)",
  Dropdown: "var(--bbui-shadow-dropdown)",
  Overlay: "var(--bbui-shadow-overlay)",
  CardHover: "var(--bbui-shadow-card-hover)"
}, he = {
  Brand: "var(--bbui-gradient-brand)"
}, Lt = {
  Small: "640px",
  Medium: "768px",
  Large: "1024px",
  XLarge: "1280px",
  XXLarge: "1600px"
}, ne = {
  Dropdown: 100,
  Sticky: 200,
  Modal: 300,
  Banner: 400,
  FAB: 50
}, Bt = {
  Small: "1rem",
  Medium: "1.25rem",
  Large: "1.5rem",
  XLarge: "2rem",
  XXLarge: "2.5rem"
}, re = {
  NotAssessed: "var(--bbui-bloom-not-assessed)",
  Aware: "var(--bbui-bloom-aware)",
  Understands: "var(--bbui-bloom-understands)",
  Applies: "var(--bbui-bloom-applies)",
  Analyzes: "var(--bbui-bloom-analyzes)",
  Masters: "var(--bbui-bloom-masters)"
}, q = {
  NotAssessed: "NOT_ASSESSED",
  Aware: "AWARE",
  Understands: "UNDERSTANDS",
  Applies: "APPLIES",
  Analyzes: "ANALYZES",
  Masters: "MASTERS"
};
function Je(r) {
  switch (r) {
    case q.Masters:
      return re.Masters;
    case q.Analyzes:
      return re.Analyzes;
    case q.Applies:
      return re.Applies;
    case q.Understands:
      return re.Understands;
    case q.Aware:
      return re.Aware;
    default:
      return re.NotAssessed;
  }
}
function Ze(r) {
  return r >= 90 ? q.Masters : r >= 80 ? q.Analyzes : r >= 60 ? q.Applies : r >= 40 ? q.Understands : r >= 20 ? q.Aware : q.NotAssessed;
}
function Dt(r) {
  return Je(Ze(r));
}
const It = {
  correct: re.Masters,
  partial: re.Applies,
  incorrect: "var(--bbui-color-error)",
  skipped: "var(--bbui-color-subtlest)"
}, zt = {
  up: re.Masters,
  down: "var(--bbui-color-error)",
  unchanged: "var(--bbui-color-subtlest)"
}, Et = {
  Nova: "var(--bbui-persona-nova)",
  Maya: "var(--bbui-persona-maya)",
  Jordan: "var(--bbui-persona-jordan)",
  Custom: "var(--bbui-persona-custom)"
}, qe = {
  default: { backgroundColor: v.NeutralBold, color: b.Default },
  success: { backgroundColor: v.Success, color: b.Inverse },
  warning: { backgroundColor: v.Warning, color: b.Warning },
  error: { backgroundColor: v.Error, color: b.Error },
  info: { backgroundColor: v.Info, color: b.Info },
  brand: { backgroundColor: v.Brand, color: b.Inverse },
  primaryTint: { backgroundColor: v.PrimaryTint, color: b.Brand },
  errorTint: { backgroundColor: v.ErrorTint, color: b.Error },
  warningTint: { backgroundColor: v.WarningTint, color: "#ea580c" },
  infoTint: { backgroundColor: v.InfoTint, color: "#2563eb" },
  accentTint: { backgroundColor: v.AccentTint, color: "#7c3aed" }
}, Ne = X(
  ({ variant: r = "default", uppercase: t = !1, style: n, children: l, ...a }, o) => {
    const d = qe[r], s = {
      display: "inline-flex",
      alignItems: "center",
      lineHeight: 1,
      paddingBlock: i.XXSmall,
      paddingInline: t ? i.MediumLarge : i.Medium,
      borderRadius: C.Full,
      fontWeight: t ? E.Black : E.Medium,
      fontSize: t ? x.Micro : x.XXSmall,
      letterSpacing: t ? pe.Wider : void 0,
      textTransform: t ? "uppercase" : void 0,
      ...d,
      ...n
    };
    return /* @__PURE__ */ e("span", { ref: o, style: s, ...a, children: l });
  }
);
Ne.displayName = "Badge";
const Qe = "2.5rem", er = "1.5rem", ve = "1.25rem", Ee = i.XXSmall, rr = X(
  ({ checked: r, defaultChecked: t = !1, onChange: n, label: l, style: a, ...o }, d) => {
    const [s, u] = W(t), g = r !== void 0, c = g ? r : s, h = K(() => {
      const w = !c;
      g || u(w), n == null || n(w);
    }, [c, g, n]), m = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      width: Qe,
      height: er,
      borderRadius: C.Full,
      backgroundColor: c ? v.Brand : v.Neutral,
      border: "none",
      cursor: "pointer",
      padding: 0,
      transition: "background-color 150ms ease",
      ...a
    }, f = {
      position: "absolute",
      width: ve,
      height: ve,
      borderRadius: C.Full,
      backgroundColor: v.Default,
      transition: "left 150ms ease",
      left: c ? `calc(100% - ${ve} - ${Ee})` : Ee,
      boxShadow: "0 1px 3px rgba(0,0,0,.2)"
    };
    return /* @__PURE__ */ e(
      "button",
      {
        ref: d,
        type: "button",
        role: "switch",
        "aria-checked": c,
        "aria-label": l,
        onClick: h,
        style: m,
        ...o,
        children: /* @__PURE__ */ e("span", { style: f })
      }
    );
  }
);
rr.displayName = "Toggle";
const tr = X(
  ({
    backgroundColor: r,
    color: t,
    padding: n,
    paddingBlock: l,
    paddingInline: a,
    borderRadius: o,
    style: d,
    children: s,
    ...u
  }, g) => {
    const c = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      cursor: "pointer",
      border: "none",
      ...r && { backgroundColor: r },
      ...t && { color: t },
      ...n && { padding: n },
      ...l && { paddingBlock: l },
      ...a && { paddingInline: a },
      ...o && { borderRadius: o },
      ...d
    };
    return /* @__PURE__ */ e("a", { ref: g, style: c, ...u, children: s });
  }
);
tr.displayName = "LinkButton";
const G = X(
  ({ label: r, size: t, color: n, backgroundColor: l, padding: a, style: o, children: d, ...s }, u) => {
    const g = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      cursor: "pointer",
      background: l ?? "none",
      ...t && { width: t, height: t },
      ...n && { color: n },
      ...a && { padding: a },
      ...o
    };
    return /* @__PURE__ */ e(
      "button",
      {
        ref: u,
        type: "button",
        "aria-label": r,
        style: g,
        ...s,
        children: d
      }
    );
  }
);
G.displayName = "IconButton";
const nr = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64
}, ir = {
  xsmall: "0.625rem",
  small: "0.75rem",
  medium: "0.875rem",
  large: "1rem",
  xlarge: "1.5rem"
}, or = {
  xsmall: 6,
  small: 8,
  medium: 10,
  large: 12,
  xlarge: 16
}, lr = {
  online: "#22c55e",
  offline: "#bccbb9",
  busy: "#ba1a1a",
  focus: "#3b82f6"
};
function ar(r) {
  var n;
  const t = r.trim().split(/\s+/);
  return t.length >= 2 ? (t[0][0] + t[t.length - 1][0]).toUpperCase() : (((n = t[0]) == null ? void 0 : n[0]) ?? "").toUpperCase();
}
const sr = X(
  ({
    src: r,
    name: t,
    size: n = "medium",
    appearance: l = "circle",
    status: a,
    fallbackBackground: o = v.NeutralBold,
    fallbackColor: d = b.Subtle
  }, s) => {
    const [u, g] = W(!1), c = nr[n], h = r && !u, m = t ? ar(t) : "", f = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: c,
      height: c,
      borderRadius: l === "circle" ? C.Full : C.XLarge,
      overflow: "hidden",
      flexShrink: 0,
      ...h ? {} : { backgroundColor: o }
    }, w = or[n], S = a ? {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: w,
      height: w,
      borderRadius: C.Full,
      backgroundColor: lr[a],
      border: "2px solid #ffffff",
      boxSizing: "border-box"
    } : void 0;
    return /* @__PURE__ */ p("span", { ref: s, style: f, role: "img", "aria-label": t ?? "Avatar", children: [
      h ? /* @__PURE__ */ e(
        "img",
        {
          src: r,
          alt: t ?? "",
          onError: () => g(!0),
          style: { width: "100%", height: "100%", objectFit: "cover" }
        }
      ) : /* @__PURE__ */ e(
        "span",
        {
          style: {
            fontSize: ir[n],
            fontWeight: E.Semibold,
            color: d,
            lineHeight: 1,
            userSelect: "none"
          },
          children: m
        }
      ),
      a && /* @__PURE__ */ e("span", { style: S })
    ] });
  }
);
sr.displayName = "Avatar";
const dr = {
  xsmall: 16,
  small: 24,
  medium: 32,
  large: 48,
  xlarge: 64
}, cr = {
  xsmall: 2,
  small: 2,
  medium: 3,
  large: 3,
  xlarge: 4
}, We = X(
  ({ size: r = "medium", label: t = "Loading", color: n = b.Brand }, l) => {
    const a = fe().replace(/:/g, ""), o = dr[r], d = cr[r], s = (o - d) / 2, u = 2 * Math.PI * s;
    return /* @__PURE__ */ p(
      "span",
      {
        ref: l,
        role: "status",
        "aria-label": t,
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: o,
          height: o
        },
        children: [
          /* @__PURE__ */ e("style", { children: `
          @keyframes bbui-spin-${a} {
            to { transform: rotate(360deg); }
          }
        ` }),
          /* @__PURE__ */ p(
            "svg",
            {
              width: o,
              height: o,
              viewBox: `0 0 ${o} ${o}`,
              fill: "none",
              style: {
                animation: `bbui-spin-${a} 0.8s linear infinite`
              },
              children: [
                /* @__PURE__ */ e(
                  "circle",
                  {
                    cx: o / 2,
                    cy: o / 2,
                    r: s,
                    stroke: n,
                    strokeWidth: d,
                    strokeLinecap: "round",
                    strokeDasharray: u,
                    strokeDashoffset: u * 0.7,
                    opacity: 0.9
                  }
                ),
                /* @__PURE__ */ e(
                  "circle",
                  {
                    cx: o / 2,
                    cy: o / 2,
                    r: s,
                    stroke: n,
                    strokeWidth: d,
                    opacity: 0.15
                  }
                )
              ]
            }
          )
        ]
      }
    );
  }
);
We.displayName = "Spinner";
const br = X(
  ({
    backgroundColor: r,
    borderColor: t,
    borderRadius: n,
    padding: l,
    paddingBlock: a,
    paddingInline: o,
    style: d,
    ...s
  }, u) => {
    const g = {
      fontFamily: "inherit",
      fontSize: "inherit",
      resize: "vertical",
      ...r && { backgroundColor: r },
      ...t ? { border: `1px solid ${t}` } : { border: "none" },
      ...n && { borderRadius: n },
      ...l && { padding: l },
      ...a && { paddingBlock: a },
      ...o && { paddingInline: o },
      ...d
    };
    return /* @__PURE__ */ e("textarea", { ref: u, style: g, ...s });
  }
);
br.displayName = "TextArea";
function ur(r) {
  return "options" in r;
}
const Fe = X(
  ({
    options: r,
    placeholder: t,
    backgroundColor: n,
    borderColor: l,
    borderRadius: a,
    padding: o,
    paddingBlock: d,
    paddingInline: s,
    fontSize: u,
    color: g,
    style: c,
    ...h
  }, m) => {
    const f = {
      appearance: "none",
      fontFamily: "inherit",
      width: "100%",
      cursor: "pointer",
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23575e70'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 0.75rem center",
      backgroundSize: "1rem",
      paddingRight: "2.5rem",
      ...n && { backgroundColor: n },
      ...l ? { border: `1px solid ${l}` } : { border: "none" },
      ...a && { borderRadius: a },
      ...o && { padding: o },
      ...d && { paddingBlock: d },
      ...s && { paddingInline: s },
      ...u && { fontSize: u },
      ...g && { color: g },
      ...c
    };
    return /* @__PURE__ */ p("select", { ref: m, style: f, ...h, children: [
      t && /* @__PURE__ */ e("option", { value: "", disabled: !0, hidden: !0, children: t }),
      r.map(
        (w) => ur(w) ? /* @__PURE__ */ e("optgroup", { label: w.label, children: w.options.map((S) => /* @__PURE__ */ e("option", { value: S.value, disabled: S.disabled, children: S.label }, S.value)) }, w.label) : /* @__PURE__ */ e("option", { value: w.value, disabled: w.disabled, children: w.label }, w.value)
      )
    ] });
  }
);
Fe.displayName = "Select";
const gr = {
  small: { box: "1rem", font: x.XXSmall, gap: i.XSmall },
  medium: { box: "1.25rem", font: x.XSmall, gap: i.Medium },
  large: { box: "1.5rem", font: x.Small, gap: i.Medium }
}, hr = ({ size: r }) => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    style: { width: r, height: r },
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        d: "M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z",
        clipRule: "evenodd"
      }
    )
  }
), mr = X(
  ({ label: r, size: t = "medium", checked: n, disabled: l, style: a, id: o, ...d }, s) => {
    const u = fe(), g = o ?? u, c = gr[t], h = !!n, m = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: c.box,
      height: c.box,
      borderRadius: C.Small,
      flexShrink: 0,
      border: h ? "none" : `2px solid ${R.Outline}`,
      backgroundColor: h ? l ? b.Disabled : v.Brand : v.Transparent,
      color: b.Inverse,
      cursor: l ? "default" : "pointer",
      opacity: l ? 0.5 : 1
    };
    return /* @__PURE__ */ p(
      "label",
      {
        htmlFor: g,
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: c.gap,
          cursor: l ? "default" : "pointer",
          ...a
        },
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: s,
              id: g,
              type: "checkbox",
              checked: n,
              disabled: l,
              style: {
                position: "absolute",
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0,0,0,0)",
                whiteSpace: "nowrap",
                border: 0
              },
              ...d
            }
          ),
          /* @__PURE__ */ e("span", { style: m, "aria-hidden": "true", children: h && /* @__PURE__ */ e(hr, { size: `calc(${c.box} - 4px)` }) }),
          r && /* @__PURE__ */ e(
            "span",
            {
              style: {
                fontSize: c.font,
                color: l ? b.Disabled : b.Default
              },
              children: r
            }
          )
        ]
      }
    );
  }
);
mr.displayName = "Checkbox";
const pr = X(
  ({
    orientation: r = "horizontal",
    color: t = R.Default,
    spacing: n
  }, l) => /* @__PURE__ */ e(
    "hr",
    {
      ref: l,
      role: "separator",
      "aria-orientation": r,
      style: {
        border: "none",
        margin: 0,
        flexShrink: 0,
        ...r === "vertical" ? {
          borderLeft: `1px solid ${t}`,
          alignSelf: "stretch",
          ...n && { marginInline: n }
        } : {
          borderTop: `1px solid ${t}`,
          width: "100%",
          ...n && { marginBlock: n }
        }
      }
    }
  )
);
pr.displayName = "Divider";
const fr = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z", clipRule: "evenodd" }) }), yr = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ e("path", { d: "M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" }) }), vr = X(
  ({
    value: r,
    onChange: t,
    min: n = 0,
    max: l = 99,
    step: a = 1,
    disabled: o = !1,
    backgroundColor: d = v.Subtle,
    padding: s = i.XSmall
  }, u) => {
    const g = r - a >= n, c = r + a <= l;
    return /* @__PURE__ */ p(
      "div",
      {
        ref: u,
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: i.Medium,
          backgroundColor: d,
          borderRadius: C.Large,
          padding: s
        },
        children: [
          /* @__PURE__ */ e(
            G,
            {
              label: "Decrease",
              onClick: () => g && t(r - a),
              disabled: o || !g,
              color: b.Brand,
              padding: i.XSmall,
              children: /* @__PURE__ */ e(fr, {})
            }
          ),
          /* @__PURE__ */ e(
            B,
            {
              as: "span",
              size: x.Medium,
              weight: E.Bold,
              color: b.Default,
              style: { minWidth: "2rem", textAlign: "center" },
              children: r
            }
          ),
          /* @__PURE__ */ e(
            G,
            {
              label: "Increase",
              onClick: () => c && t(r + a),
              disabled: o || !c,
              color: b.Brand,
              padding: i.XSmall,
              children: /* @__PURE__ */ e(yr, {})
            }
          )
        ]
      }
    );
  }
);
vr.displayName = "Stepper";
const Oe = "bbui-page-size", Se = "medium", He = Ve(null);
function wr(r) {
  typeof document > "u" || document.documentElement.setAttribute("data-page-size", r);
}
function Sr() {
  if (typeof localStorage > "u") return Se;
  const r = localStorage.getItem(Oe);
  return r === "small" || r === "medium" || r === "large" ? r : Se;
}
function Tt({
  defaultSize: r,
  persist: t = !0,
  children: n
}) {
  const [l, a] = W(
    () => t ? Sr() : r ?? Se
  ), o = K(
    (s) => {
      a(s), t && typeof localStorage < "u" && localStorage.setItem(Oe, s);
    },
    [t]
  );
  _(() => {
    wr(l);
  }, [l]);
  const d = me(
    () => ({ pageSize: l, setPageSize: o }),
    [l, o]
  );
  return /* @__PURE__ */ e(He.Provider, { value: d, children: n });
}
function xr() {
  const r = Ke(He);
  if (!r)
    throw new Error("usePageSize must be used inside <PageSizeProvider>");
  return r;
}
const kr = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    style: { width: "1.5rem", height: "1.5rem" },
    children: /* @__PURE__ */ e(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      }
    )
  }
), Xr = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "1.5rem", height: "1.5rem" },
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        clipRule: "evenodd"
      }
    )
  }
), Cr = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "1.25rem", height: "1.25rem" },
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
        clipRule: "evenodd"
      }
    )
  }
), Mr = X(
  ({
    logo: r,
    navigation: t = [],
    cta: n,
    linkColor: l = b.Subtle,
    ctaBackgroundColor: a = v.Dark,
    ctaColor: o = b.Inverse,
    ctaWeight: d = 500,
    ctaBorderRadius: s = C.Full,
    paddingInline: u = i.XXXLarge,
    paddingBlock: g = i.XLarge,
    linkGap: c = i.XXLarge,
    logoGap: h = i.Size3_5,
    mobileMenuBackground: m = v.Default,
    mobileMenuBorderColor: f = R.Default,
    mobileMenuBorderRadius: w = C.Large,
    mobileBreakpoint: S = 768
  }, D) => {
    const [L, O] = W(!1), [M, A] = W(!1);
    _(() => {
      const I = () => A(window.innerWidth < S);
      return I(), window.addEventListener("resize", I), () => window.removeEventListener("resize", I);
    }, [S]);
    const N = K((I) => {
      I.target.closest("[data-navbar-menu]") || O(!1);
    }, []);
    _(() => (document.addEventListener("click", N), () => document.removeEventListener("click", N)), [N]);
    const F = Q.isValidElement(r) ? r : /* @__PURE__ */ e(
      ye,
      {
        src: r.src,
        alt: r.alt ?? "Logo",
        style: {
          width: r.width ?? 120,
          height: r.height ?? "auto"
        }
      }
    ), $ = /* @__PURE__ */ e(xe, { children: t.map((I, H) => /* @__PURE__ */ e(
      ae,
      {
        href: I.path,
        color: l,
        display: "block",
        style: { textDecoration: "none" },
        children: I.title
      },
      H
    )) }), k = n ? /* @__PURE__ */ e(
      ae,
      {
        href: n.path,
        backgroundColor: a,
        color: o,
        paddingBlock: i.Medium,
        paddingInline: i.Large,
        borderRadius: s,
        weight: d,
        display: "inline-block",
        style: { textDecoration: "none" },
        children: /* @__PURE__ */ p(T, { space: i.XSmall, alignBlock: "center", children: [
          /* @__PURE__ */ e(B, { as: "span", color: o, weight: d, children: n.label }),
          n.icon ?? /* @__PURE__ */ e(Cr, {})
        ] })
      }
    ) : null;
    return M ? /* @__PURE__ */ p(y, { as: "header", ref: D, "data-navbar-menu": !0, children: [
      /* @__PURE__ */ e(
        y,
        {
          as: "nav",
          paddingInline: i.Large,
          paddingBlock: g,
          children: /* @__PURE__ */ p(T, { alignBlock: "center", spread: "space-between", children: [
            /* @__PURE__ */ e(y, { children: F }),
            /* @__PURE__ */ e(
              ee,
              {
                onClick: () => O(!L),
                style: {
                  background: "none",
                  padding: 0,
                  color: b.Subtle
                },
                children: L ? /* @__PURE__ */ e(Xr, {}) : /* @__PURE__ */ e(kr, {})
              }
            )
          ] })
        }
      ),
      L && /* @__PURE__ */ e(
        y,
        {
          backgroundColor: m,
          elevation: ie.Raised,
          borderRadius: w,
          borderColor: f,
          borderSide: "all",
          padding: i.Large,
          style: { margin: i.Medium },
          children: /* @__PURE__ */ p("nav", { children: [
            /* @__PURE__ */ e("ul", { style: { listStyle: "none", padding: 0, margin: 0 }, children: t.map((I, H) => /* @__PURE__ */ e("li", { style: { paddingBlock: i.MediumLarge }, children: /* @__PURE__ */ e(
              ae,
              {
                href: I.path,
                color: l,
                display: "block",
                style: { textDecoration: "none" },
                children: I.title
              }
            ) }, H)) }),
            k && /* @__PURE__ */ e(y, { marginBlockStart: i.XXLarge, children: k })
          ] })
        }
      )
    ] }) : /* @__PURE__ */ e(y, { as: "header", ref: D, style: { width: "100%" }, children: /* @__PURE__ */ e(
      y,
      {
        as: "nav",
        paddingInline: u,
        paddingBlock: g,
        style: { width: "100%" },
        children: /* @__PURE__ */ p(T, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ e(y, { children: F }),
          /* @__PURE__ */ p(
            T,
            {
              space: c,
              alignBlock: "center",
              grow: "fill",
              style: { marginInlineStart: h },
              children: [
                /* @__PURE__ */ e(
                  T,
                  {
                    space: c,
                    alignBlock: "center",
                    grow: "fill",
                    alignInline: "center",
                    children: $
                  }
                ),
                k && /* @__PURE__ */ e(y, { children: k })
              ]
            }
          )
        ] })
      }
    ) });
  }
);
Mr.displayName = "Navbar";
const Te = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "1.25rem", height: "1.25rem" },
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
        clipRule: "evenodd"
      }
    )
  }
), Lr = X(
  ({
    title: r,
    subtitle: t,
    badge: n,
    actions: l = [],
    image: a,
    children: o,
    titleSize: d = x.XXXLarge,
    titleSizeLarge: s = x.Huge,
    titleWeight: u = E.ExtraBold,
    titleColor: g = b.Default,
    subtitleSize: c = x.Small,
    subtitleColor: h = b.Subtlest,
    primaryCtaBackground: m = v.Dark,
    primaryCtaColor: f = b.Inverse,
    primaryCtaBorderRadius: w = C.Full,
    primaryCtaWeight: S = 500,
    secondaryCtaColor: D = b.Subtle,
    secondaryCtaWeight: L = 500,
    ctaGap: O = i.MediumLarge,
    paddingBlock: M = i.Size7,
    paddingInline: A = i.XXXLarge,
    contentGap: N = i.XHuge,
    textGap: F = i.XLarge,
    textMaxWidth: $ = "36rem",
    gradient: k,
    breakpoint: I = 768
  }, H) => {
    const [V, P] = W(!1);
    _(() => {
      const Z = () => P(window.innerWidth >= I);
      return Z(), window.addEventListener("resize", Z), () => window.removeEventListener("resize", Z);
    }, [I]);
    const U = (k == null ? void 0 : k.enabled) !== !1, Y = (k == null ? void 0 : k.css) ?? "linear-gradient(143.6deg, rgba(192,132,252,0) 20.79%, rgba(232,121,249,0.26) 40.92%, rgba(204,171,238,0) 70.35%)", z = (k == null ? void 0 : k.height) ?? "580px", J = (n == null ? void 0 : n.borderColor) ?? R.Default, se = n ? /* @__PURE__ */ e(
      ae,
      {
        href: n.path ?? "#",
        borderRadius: C.Full,
        paddingBlock: i.XSmall,
        paddingInline: i.Small,
        size: x.XSmall,
        weight: 500,
        display: "inline-block",
        style: {
          textDecoration: "none",
          border: `1px solid ${J}`,
          paddingRight: i.XXLarge
        },
        children: /* @__PURE__ */ p(T, { space: i.MediumLarge, alignBlock: "center", children: [
          /* @__PURE__ */ e(
            B,
            {
              as: "span",
              size: x.XSmall,
              color: n.labelColor ?? b.Inverse,
              style: {
                backgroundColor: n.labelBackgroundColor ?? v.Accent,
                borderRadius: C.Full,
                padding: `${i.XSmall} ${i.MediumLarge}`
              },
              children: n.label
            }
          ),
          /* @__PURE__ */ p(T, { space: i.XXSmall, alignBlock: "center", children: [
            /* @__PURE__ */ e(B, { as: "span", size: x.XSmall, children: n.text }),
            n.icon ?? /* @__PURE__ */ e(Te, {})
          ] })
        ] })
      }
    ) : null, oe = l.length > 0 ? /* @__PURE__ */ e(T, { space: O, alignBlock: "center", shouldWrap: !0, children: l.map((Z, ge) => {
      const ce = (Z.variant ?? (ge === 0 ? "primary" : "secondary")) === "primary", Ce = ce ? S : L;
      return /* @__PURE__ */ e(
        ae,
        {
          href: Z.path,
          backgroundColor: ce ? m : void 0,
          color: ce ? f : D,
          paddingBlock: i.Medium,
          paddingInline: i.Large,
          borderRadius: ce ? w : void 0,
          weight: Ce,
          display: "inline-block",
          style: { textDecoration: "none" },
          children: /* @__PURE__ */ p(T, { space: i.XSmall, alignBlock: "center", children: [
            /* @__PURE__ */ e(
              B,
              {
                as: "span",
                color: ce ? f : D,
                weight: Ce,
                children: Z.label
              }
            ),
            Z.icon ?? /* @__PURE__ */ e(Te, {})
          ] })
        },
        ge
      );
    }) }) : null, de = /* @__PURE__ */ p(
      j,
      {
        space: F,
        style: { maxWidth: $, flexShrink: 0 },
        children: [
          se,
          /* @__PURE__ */ e(
            B,
            {
              as: "h1",
              size: V ? s : d,
              weight: u,
              color: g,
              lineHeight: 1.2,
              children: r
            }
          ),
          t && /* @__PURE__ */ e(
            B,
            {
              as: "p",
              color: h,
              size: c,
              lineHeight: 1.6,
              children: t
            }
          ),
          o,
          oe
        ]
      }
    ), le = a && V ? /* @__PURE__ */ e(y, { style: { flex: "1 1 0%", minWidth: 0 }, children: /* @__PURE__ */ e(
      ye,
      {
        src: a.src,
        alt: a.alt ?? "",
        style: { maxWidth: a.maxWidth ?? "36rem" }
      }
    ) }) : null;
    return /* @__PURE__ */ p(y, { as: "section", ref: H, style: { position: "relative" }, children: [
      U && /* @__PURE__ */ e(
        "div",
        {
          "aria-hidden": "true",
          style: {
            position: "absolute",
            inset: 0,
            height: z,
            background: Y,
            filter: "blur(40px)",
            pointerEvents: "none"
          }
        }
      ),
      /* @__PURE__ */ e(
        y,
        {
          style: { position: "relative", overflow: "hidden" },
          maxWidth: "1280px",
          paddingInline: A,
          paddingBlock: M,
          children: V ? /* @__PURE__ */ p(T, { space: N, alignBlock: "center", children: [
            de,
            le
          ] }) : /* @__PURE__ */ e(j, { space: N, children: de })
        }
      )
    ] });
  }
);
Lr.displayName = "HeroSection";
const Br = X(
  ({
    padding: r = i.Large,
    backgroundColor: t = v.Default,
    borderRadius: n = C.XXLarge,
    borderColor: l = R.Default,
    elevation: a = ie.Ambient,
    accentColor: o,
    accentWidth: d = "8px",
    header: s,
    footer: u,
    children: g
  }, c) => /* @__PURE__ */ e(
    y,
    {
      ref: c,
      backgroundColor: t,
      borderRadius: n,
      borderColor: l,
      borderSide: "all",
      elevation: a,
      overflow: "hidden",
      style: {
        ...o && {
          borderTop: `${d} solid ${o}`
        }
      },
      children: /* @__PURE__ */ p(j, { children: [
        s && /* @__PURE__ */ e(
          y,
          {
            padding: r,
            style: { borderBottom: `1px solid ${l}` },
            children: s
          }
        ),
        /* @__PURE__ */ e(y, { padding: r, children: g }),
        u && /* @__PURE__ */ e(
          y,
          {
            padding: r,
            style: { borderTop: `1px solid ${l}` },
            children: u
          }
        )
      ] })
    }
  )
);
Br.displayName = "Card";
const Dr = X(
  ({
    label: r,
    helperText: t,
    errorText: n,
    id: l,
    labelColor: a = b.Default,
    labelSize: o = x.XSmall,
    labelWeight: d = E.Medium,
    labelTextTransform: s,
    labelLetterSpacing: u,
    inputBackground: g = v.Default,
    inputBorderColor: c = R.Input,
    inputBorderRadius: h = C.Medium,
    inputBorderSide: m = "all",
    inputPadding: f = i.Medium,
    startAdornment: w,
    endAdornment: S,
    name: D,
    type: L,
    placeholder: O,
    value: M,
    defaultValue: A,
    disabled: N,
    readOnly: F,
    required: $,
    autoFocus: k,
    autoComplete: I,
    onChange: H,
    onBlur: V,
    onFocus: P
  }, U) => {
    const Y = fe(), z = l ?? Y, J = `${z}-helper`, se = `${z}-error`, oe = !!n, ue = oe ? R.Error : c, de = m === "bottom", le = de || !!(w || S), Z = /* @__PURE__ */ e(
      Xe,
      {
        ref: U,
        id: z,
        name: D,
        type: L,
        placeholder: O,
        value: M,
        defaultValue: A,
        disabled: N,
        readOnly: F,
        required: $,
        autoFocus: k,
        autoComplete: I,
        onChange: H,
        onBlur: V,
        onFocus: P,
        backgroundColor: le ? "transparent" : g,
        borderColor: le ? void 0 : ue,
        borderRadius: le ? void 0 : h,
        padding: f,
        style: {
          width: "100%",
          ...le ? { flex: "1 1 auto", minWidth: 0 } : {}
        },
        "aria-describedby": oe ? se : t ? J : void 0,
        "aria-invalid": oe || void 0
      }
    ), ge = le ? /* @__PURE__ */ p("div", { style: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      backgroundColor: g,
      ...de ? { borderBottom: `2px solid ${ue}` } : { border: `1px solid ${ue}`, borderRadius: h }
    }, children: [
      w,
      Z,
      S
    ] }) : Z;
    return /* @__PURE__ */ p(j, { space: i.XSmall, children: [
      r && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: z,
          style: {
            fontSize: o,
            fontWeight: d,
            color: a,
            textTransform: s,
            letterSpacing: u
          },
          children: r
        }
      ),
      ge,
      oe && /* @__PURE__ */ e(B, { as: "span", size: x.XXSmall, color: b.Error, id: se, children: n }),
      !oe && t && /* @__PURE__ */ e(B, { as: "span", size: x.XXSmall, color: b.Subtle, id: J, children: t })
    ] });
  }
);
Dr.displayName = "TextField";
const Ir = {
  info: {
    bg: v.InfoTint,
    text: b.Info,
    border: R.Info
  },
  success: {
    bg: v.PrimaryTint,
    text: b.Success,
    border: R.Success
  },
  warning: {
    bg: v.WarningTint,
    text: b.Warning,
    border: R.Warning
  },
  error: {
    bg: v.ErrorTint,
    text: b.Error,
    border: R.Error
  }
}, zr = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "1rem", height: "1rem" },
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        clipRule: "evenodd"
      }
    )
  }
), Er = X(
  ({ variant: r = "info", icon: t, dismissible: n, onDismiss: l, children: a }, o) => {
    const d = Ir[r];
    return /* @__PURE__ */ e(
      y,
      {
        ref: o,
        role: "alert",
        padding: i.MediumLarge,
        borderRadius: C.Medium,
        style: {
          backgroundColor: d.bg,
          borderLeft: `4px solid ${d.border}`,
          position: "relative",
          zIndex: ne.Banner
        },
        children: /* @__PURE__ */ p(T, { space: i.Medium, alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ p(T, { space: i.Medium, alignBlock: "center", grow: "fill", children: [
            t && /* @__PURE__ */ e(y, { style: { color: d.text, flexShrink: 0 }, children: t }),
            /* @__PURE__ */ e(B, { as: "span", size: x.XSmall, color: d.text, children: a })
          ] }),
          n && /* @__PURE__ */ e(
            G,
            {
              label: "Dismiss",
              onClick: l,
              color: d.text,
              padding: i.XXSmall,
              children: /* @__PURE__ */ e(zr, {})
            }
          )
        ] })
      }
    );
  }
);
Er.displayName = "Banner";
const Pe = X(
  ({
    sections: r,
    activeId: t,
    onSelect: n,
    activeColor: l = b.Brand,
    activeBackground: a = v.Subtle
  }, o) => /* @__PURE__ */ e(j, { ref: o, as: "nav", space: i.Small, children: r.map((d, s) => /* @__PURE__ */ p(j, { space: i.XXSmall, children: [
    d.title && /* @__PURE__ */ e(y, { paddingInline: i.Medium, paddingBlock: i.XSmall, children: /* @__PURE__ */ e(
      B,
      {
        as: "span",
        size: x.XXSmall,
        weight: 600,
        color: b.Subtlest,
        textTransform: "uppercase",
        children: d.title
      }
    ) }),
    /* @__PURE__ */ e(j, { as: "ul", style: { listStyle: "none", padding: 0, margin: 0 }, children: d.items.map((u) => {
      const g = u.id === t;
      return /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(
        ee,
        {
          disabled: u.disabled,
          onClick: () => n == null ? void 0 : n(u.id),
          borderRadius: C.Medium,
          color: u.disabled ? b.Disabled : g ? l : b.Default,
          backgroundColor: g ? a : v.Transparent,
          paddingBlock: i.Medium,
          paddingInline: i.MediumLarge,
          style: {
            width: "100%",
            fontSize: x.XSmall,
            textAlign: "left",
            cursor: u.disabled ? "default" : "pointer"
          },
          children: /* @__PURE__ */ p(T, { space: i.Medium, alignBlock: "center", children: [
            u.icon && /* @__PURE__ */ e(y, { style: { flexShrink: 0 }, children: u.icon }),
            /* @__PURE__ */ e(B, { as: "span", size: x.XSmall, style: { color: "inherit" }, children: u.label })
          ] })
        }
      ) }, u.id);
    }) }),
    s < r.length - 1 && /* @__PURE__ */ e(
      y,
      {
        style: {
          borderTop: `1px solid ${R.Default}`,
          marginBlock: i.XSmall
        }
      }
    )
  ] }, s)) })
);
Pe.displayName = "Menu";
const Tr = X(
  ({
    tabs: r,
    activeId: t,
    defaultActiveId: n,
    onChange: l,
    variant: a = "underline",
    activeColor: o = b.Brand,
    inactiveColor: d = b.Subtle,
    pillBackground: s = v.Subtle,
    activePillBackground: u = v.Default,
    panelPadding: g = i.Large
  }, c) => {
    var O;
    const [h, m] = W(
      n ?? ((O = r[0]) == null ? void 0 : O.id)
    ), f = t !== void 0, w = f ? t : h, S = (M) => {
      f || m(M), l == null || l(M);
    }, D = r.find((M) => M.id === w);
    return /* @__PURE__ */ p(y, { ref: c, children: [
      a === "pill" ? /* @__PURE__ */ e(
        T,
        {
          role: "tablist",
          space: i.XSmall,
          alignBlock: "center",
          style: {
            backgroundColor: s,
            padding: i.Small,
            borderRadius: C.XXLarge,
            width: "fit-content"
          },
          children: r.map((M) => {
            const A = M.id === w;
            return /* @__PURE__ */ e(
              ee,
              {
                role: "tab",
                "aria-selected": A,
                "aria-controls": `tabpanel-${M.id}`,
                id: `tab-${M.id}`,
                disabled: M.disabled,
                onClick: () => S(M.id),
                paddingBlock: i.Medium,
                paddingInline: i.XXLarge,
                borderRadius: C.XLarge,
                color: A ? b.Default : M.disabled ? b.Disabled : d,
                backgroundColor: A ? u : v.Transparent,
                style: {
                  fontWeight: A ? E.Bold : E.Medium,
                  fontSize: x.XSmall,
                  boxShadow: A ? ie.Raised : "none",
                  cursor: M.disabled ? "default" : "pointer"
                },
                children: M.label
              },
              M.id
            );
          })
        }
      ) : /* @__PURE__ */ e(
        T,
        {
          as: "div",
          role: "tablist",
          space: i.None,
          style: {
            borderBottom: `1px solid ${R.Default}`
          },
          children: r.map((M) => {
            const A = M.id === w;
            return /* @__PURE__ */ e(
              ee,
              {
                role: "tab",
                "aria-selected": A,
                "aria-controls": `tabpanel-${M.id}`,
                id: `tab-${M.id}`,
                disabled: M.disabled,
                onClick: () => S(M.id),
                paddingBlock: i.Medium,
                paddingInline: i.Large,
                borderRadius: C.None,
                color: A ? o : M.disabled ? b.Disabled : d,
                style: {
                  background: "none",
                  fontWeight: A ? E.Semibold : E.Regular,
                  fontSize: x.XSmall,
                  borderBottom: A ? `2px solid ${o}` : "2px solid transparent",
                  marginBottom: "-1px",
                  cursor: M.disabled ? "default" : "pointer"
                },
                children: M.label
              },
              M.id
            );
          })
        }
      ),
      D && /* @__PURE__ */ e(
        y,
        {
          role: "tabpanel",
          id: `tabpanel-${D.id}`,
          "aria-labelledby": `tab-${D.id}`,
          padding: g,
          children: D.content
        }
      )
    ] });
  }
);
Tr.displayName = "Tabs";
const Rr = X(
  ({
    title: r,
    subtitle: t,
    breadcrumbs: n,
    actions: l,
    titleSize: a = x.XLarge,
    titleWeight: o = E.Bold,
    titleColor: d = b.Default,
    subtitleColor: s = b.Subtle,
    breadcrumbLinkColor: u = b.Link,
    borderColor: g = R.Default,
    paddingBlock: c = i.Large
  }, h) => /* @__PURE__ */ e(
    y,
    {
      ref: h,
      as: "header",
      paddingBlock: c,
      style: {
        borderBottom: `1px solid ${g}`
      },
      children: /* @__PURE__ */ p(j, { space: i.Medium, children: [
        n && n.length > 0 && /* @__PURE__ */ e(T, { space: i.XSmall, alignBlock: "center", children: n.map((m, f) => /* @__PURE__ */ p(Q.Fragment, { children: [
          f > 0 && /* @__PURE__ */ e(B, { as: "span", color: b.Disabled, size: x.XSmall, children: "/" }),
          m.href ? /* @__PURE__ */ e(
            ae,
            {
              href: m.href,
              color: u,
              size: x.XSmall,
              style: { textDecoration: "none" },
              children: m.label
            }
          ) : /* @__PURE__ */ e(B, { as: "span", size: x.XSmall, color: b.Subtlest, children: m.label })
        ] }, f)) }),
        /* @__PURE__ */ p(T, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ p(j, { space: i.XXSmall, children: [
            /* @__PURE__ */ e(B, { as: "h1", size: a, weight: o, color: d, children: r }),
            t && /* @__PURE__ */ e(B, { as: "p", size: x.XSmall, color: s, children: t })
          ] }),
          l && /* @__PURE__ */ e(T, { space: i.Medium, alignBlock: "center", children: l })
        ] })
      ] })
    }
  )
);
Rr.displayName = "Header";
const $r = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "1.25rem", height: "1.25rem" },
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        clipRule: "evenodd"
      }
    )
  }
), Ar = X(
  ({ open: r, onClose: t, title: n, children: l, footer: a }, o) => {
    const d = K(
      (s) => {
        s.key === "Escape" && t();
      },
      [t]
    );
    return _(() => {
      if (r)
        return document.addEventListener("keydown", d), document.body.style.overflow = "hidden", () => {
          document.removeEventListener("keydown", d), document.body.style.overflow = "";
        };
    }, [r, d]), r ? ke(
      /* @__PURE__ */ e(
        y,
        {
          style: {
            position: "fixed",
            inset: 0,
            zIndex: ne.Modal,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: v.Overlay
          },
          onClick: (s) => {
            s.target === s.currentTarget && t();
          },
          children: /* @__PURE__ */ e(
            y,
            {
              ref: o,
              role: "dialog",
              "aria-modal": "true",
              "aria-label": n,
              backgroundColor: v.Default,
              borderRadius: C.XLarge,
              elevation: ie.Overlay,
              overflow: "hidden",
              style: {
                width: "100%",
                maxWidth: "32rem",
                maxHeight: "85vh",
                display: "flex",
                flexDirection: "column"
              },
              children: /* @__PURE__ */ p(j, { children: [
                n && /* @__PURE__ */ e(
                  y,
                  {
                    padding: i.Large,
                    style: { borderBottom: `1px solid ${R.Default}` },
                    children: /* @__PURE__ */ p(T, { alignBlock: "center", spread: "space-between", children: [
                      /* @__PURE__ */ e(B, { as: "h2", size: x.Large, weight: E.Semibold, color: b.Default, children: n }),
                      /* @__PURE__ */ e(G, { label: "Close", onClick: t, color: b.Subtle, children: /* @__PURE__ */ e($r, {}) })
                    ] })
                  }
                ),
                /* @__PURE__ */ e(y, { padding: i.Large, overflow: "auto", style: { flex: "1 1 auto" }, children: l }),
                a && /* @__PURE__ */ e(
                  y,
                  {
                    padding: i.Large,
                    style: { borderTop: `1px solid ${R.Default}` },
                    children: a
                  }
                )
              ] })
            }
          )
        }
      ),
      document.body
    ) : null;
  }
);
Ar.displayName = "Modal";
const Nr = X(
  ({ trigger: r, sections: t, activeId: n, onSelect: l }, a) => {
    const [o, d] = W(!1), s = te(null), u = () => d((m) => !m), g = (m) => {
      l == null || l(m), d(!1);
    }, c = K((m) => {
      m.key === "Escape" && d(!1);
    }, []), h = K((m) => {
      s.current && !s.current.contains(m.target) && d(!1);
    }, []);
    return _(() => {
      if (o)
        return document.addEventListener("keydown", c), document.addEventListener("mousedown", h), () => {
          document.removeEventListener("keydown", c), document.removeEventListener("mousedown", h);
        };
    }, [o, c, h]), /* @__PURE__ */ p(
      y,
      {
        ref: (m) => {
          s.current = m, typeof a == "function" ? a(m) : a && (a.current = m);
        },
        style: { position: "relative", display: "inline-block" },
        children: [
          /* @__PURE__ */ e(
            T,
            {
              style: { cursor: "pointer" },
              onClick: u,
              alignBlock: "center",
              children: r
            }
          ),
          o && /* @__PURE__ */ e(
            y,
            {
              backgroundColor: v.Default,
              borderColor: R.Default,
              borderSide: "all",
              borderRadius: C.Large,
              elevation: ie.Dropdown,
              padding: i.XSmall,
              style: {
                position: "absolute",
                top: "100%",
                right: 0,
                marginTop: i.XSmall,
                minWidth: "12rem",
                zIndex: ne.Dropdown
              },
              children: /* @__PURE__ */ e(
                Pe,
                {
                  sections: t,
                  activeId: n,
                  onSelect: g
                }
              )
            }
          )
        ]
      }
    );
  }
);
Nr.displayName = "DropdownMenu";
const Wr = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), Fr = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), Or = X(
  ({
    sections: r,
    activeId: t,
    onSelect: n,
    header: l,
    footer: a,
    collapsed: o = !1,
    onToggleCollapse: d,
    width: s = "16rem",
    collapsedWidth: u = "4rem",
    activeColor: g = b.Brand,
    activeBackground: c = v.Subtle,
    borderColor: h = R.Default
  }, m) => /* @__PURE__ */ p(
    y,
    {
      ref: m,
      as: "aside",
      backgroundColor: v.Default,
      style: {
        width: o ? u : s,
        height: "100vh",
        position: "sticky",
        top: 0,
        borderRight: `1px solid ${h}`,
        display: "flex",
        flexDirection: "column",
        transition: "width 200ms ease",
        overflow: "hidden",
        flexShrink: 0
      },
      children: [
        l && /* @__PURE__ */ e(
          y,
          {
            padding: i.Large,
            style: { borderBottom: `1px solid ${h}` },
            children: l
          }
        ),
        /* @__PURE__ */ e(
          j,
          {
            space: i.Small,
            grow: "fill",
            style: { padding: i.Medium, overflow: "auto" },
            children: r.map((f, w) => /* @__PURE__ */ p(j, { space: i.XXSmall, children: [
              f.title && !o && /* @__PURE__ */ e(y, { paddingInline: i.Medium, paddingBlock: i.XSmall, children: /* @__PURE__ */ e(
                B,
                {
                  as: "span",
                  size: x.XXSmall,
                  weight: 600,
                  color: b.Subtlest,
                  textTransform: "uppercase",
                  children: f.title
                }
              ) }),
              f.items.map((S) => {
                const D = S.id === t;
                return /* @__PURE__ */ p(
                  ee,
                  {
                    onClick: () => n == null ? void 0 : n(S.id),
                    title: o ? S.label : void 0,
                    borderRadius: C.Medium,
                    color: D ? g : b.Default,
                    backgroundColor: D ? c : v.Transparent,
                    paddingBlock: i.Medium,
                    paddingInline: i.MediumLarge,
                    style: {
                      width: "100%",
                      fontSize: x.XSmall,
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      gap: o ? 0 : i.Medium,
                      justifyContent: o ? "center" : "flex-start"
                    },
                    children: [
                      S.icon && /* @__PURE__ */ e(y, { style: { flexShrink: 0 }, children: S.icon }),
                      !o && /* @__PURE__ */ p(xe, { children: [
                        /* @__PURE__ */ e(B, { as: "span", style: { flex: "1 1 auto", color: "inherit" }, children: S.label }),
                        S.badge && /* @__PURE__ */ e(Ne, { variant: S.badgeVariant ?? "default", children: S.badge })
                      ] })
                    ]
                  },
                  S.id
                );
              })
            ] }, w))
          }
        ),
        d && /* @__PURE__ */ e(
          y,
          {
            padding: i.Medium,
            style: { borderTop: `1px solid ${h}` },
            children: /* @__PURE__ */ e(
              G,
              {
                label: o ? "Expand sidebar" : "Collapse sidebar",
                onClick: d,
                color: b.Subtle,
                padding: i.XSmall,
                children: o ? /* @__PURE__ */ e(Fr, {}) : /* @__PURE__ */ e(Wr, {})
              }
            )
          }
        ),
        a && /* @__PURE__ */ e(
          y,
          {
            padding: i.Large,
            style: { borderTop: `1px solid ${h}` },
            children: a
          }
        )
      ]
    }
  )
);
Or.displayName = "Sidebar";
const Hr = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "1.25rem", height: "1.25rem" },
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        clipRule: "evenodd"
      }
    )
  }
), Pr = X(
  ({
    open: r,
    onClose: t,
    title: n,
    side: l = "right",
    mode: a = "overlay",
    width: o = "24rem",
    children: d
  }, s) => {
    const u = K(
      (c) => {
        c.key === "Escape" && t();
      },
      [t]
    );
    if (_(() => {
      if (r)
        return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
    }, [r, u]), !r) return null;
    const g = /* @__PURE__ */ p(
      y,
      {
        ref: s,
        backgroundColor: v.Default,
        elevation: ie.Overlay,
        style: {
          position: "fixed",
          top: 0,
          bottom: 0,
          [l]: 0,
          width: o,
          zIndex: ne.Modal,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden"
        },
        children: [
          n && /* @__PURE__ */ e(
            y,
            {
              padding: i.Large,
              style: { borderBottom: `1px solid ${R.Default}` },
              children: /* @__PURE__ */ p(T, { alignBlock: "center", spread: "space-between", children: [
                /* @__PURE__ */ e(B, { as: "h2", size: x.Large, weight: E.Semibold, color: b.Default, children: n }),
                /* @__PURE__ */ e(G, { label: "Close panel", onClick: t, color: b.Subtle, children: /* @__PURE__ */ e(Hr, {}) })
              ] })
            }
          ),
          /* @__PURE__ */ e(y, { padding: i.Large, overflow: "auto", style: { flex: "1 1 auto" }, children: d })
        ]
      }
    );
    return a === "overlay" ? ke(
      /* @__PURE__ */ e(
        y,
        {
          style: {
            position: "fixed",
            inset: 0,
            zIndex: ne.Modal,
            backgroundColor: v.Overlay
          },
          onClick: (c) => {
            c.target === c.currentTarget && t();
          },
          children: g
        }
      ),
      document.body
    ) : g;
  }
);
Pr.displayName = "Panel";
const jr = X(
  ({
    padding: r = i.Large,
    color: t = b.Subtle,
    borderColor: n = R.Default,
    children: l
  }, a) => /* @__PURE__ */ e(
    y,
    {
      ref: a,
      as: "aside",
      padding: r,
      style: {
        borderLeft: `3px solid ${n}`,
        color: t
      },
      children: l
    }
  )
);
jr.displayName = "Aside";
const Vr = X(
  ({
    topNav: r,
    sideNav: t,
    mobileNav: n,
    backgroundColor: l = v.Surface,
    children: a
  }, o) => {
    const s = $e() === "mobile";
    return /* @__PURE__ */ p(
      y,
      {
        ref: o,
        style: {
          minHeight: "100vh",
          backgroundColor: l,
          display: "flex"
        },
        children: [
          !s && t,
          /* @__PURE__ */ p(
            y,
            {
              style: {
                flex: "1 1 auto",
                display: "flex",
                flexDirection: "column",
                minWidth: 0
              },
              children: [
                r,
                /* @__PURE__ */ e(
                  y,
                  {
                    as: "main",
                    style: {
                      flex: "1 1 auto",
                      overflow: "auto",
                      paddingBlockEnd: s && n ? i.XXHuge : void 0
                    },
                    children: a
                  }
                )
              ]
            }
          ),
          s && n
        ]
      }
    );
  }
);
Vr.displayName = "Layout";
const Kr = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
function Re(r, t) {
  return r.getFullYear() === t.getFullYear() && r.getMonth() === t.getMonth() && r.getDate() === t.getDate();
}
function _r(r, t) {
  return new Date(r, t + 1, 0).getDate();
}
function Ur(r, t) {
  return new Date(r, t, 1).getDay();
}
const Yr = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), Gr = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), Jr = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], Zr = X(
  ({
    value: r,
    defaultValue: t,
    onChange: n,
    min: l,
    max: a,
    selectedColor: o = b.Inverse,
    selectedBackground: d = v.Brand
  }, s) => {
    const u = /* @__PURE__ */ new Date(), [g, c] = W(t), h = r !== void 0, m = h ? r : g, [f, w] = W(
      (m ?? u).getFullYear()
    ), [S, D] = W(
      (m ?? u).getMonth()
    ), L = me(() => _r(f, S), [f, S]), O = me(() => Ur(f, S), [f, S]), M = () => {
      S === 0 ? (D(11), w((k) => k - 1)) : D((k) => k - 1);
    }, A = () => {
      S === 11 ? (D(0), w((k) => k + 1)) : D((k) => k + 1);
    }, N = (k) => {
      const I = new Date(f, S, k);
      h || c(I), n == null || n(I);
    }, F = (k) => {
      const I = new Date(f, S, k);
      return !!(l && I < new Date(l.getFullYear(), l.getMonth(), l.getDate()) || a && I > new Date(a.getFullYear(), a.getMonth(), a.getDate()));
    }, $ = [];
    for (let k = 0; k < O; k++)
      $.push(/* @__PURE__ */ e(y, {}, `empty-${k}`));
    for (let k = 1; k <= L; k++) {
      const I = new Date(f, S, k), H = m ? Re(I, m) : !1, V = Re(I, u), P = F(k);
      $.push(
        /* @__PURE__ */ e(
          ee,
          {
            disabled: P,
            onClick: () => N(k),
            borderRadius: C.Medium,
            style: {
              width: "2.25rem",
              height: "2.25rem",
              padding: 0,
              fontSize: x.XSmall,
              fontWeight: H ? E.Semibold : E.Regular,
              backgroundColor: H ? d : "transparent",
              color: H ? o : P ? b.Disabled : b.Default,
              border: V && !H ? `1px solid ${R.Default}` : "none",
              cursor: P ? "default" : "pointer"
            },
            children: k
          },
          k
        )
      );
    }
    return /* @__PURE__ */ p(
      y,
      {
        ref: s,
        padding: i.Large,
        borderRadius: C.XLarge,
        borderColor: R.Default,
        borderSide: "all",
        backgroundColor: v.Default,
        style: { width: "fit-content" },
        children: [
          /* @__PURE__ */ p(
            T,
            {
              alignBlock: "center",
              spread: "space-between",
              marginBlockEnd: i.Medium,
              children: [
                /* @__PURE__ */ e(G, { label: "Previous month", onClick: M, color: b.Subtle, padding: i.XSmall, children: /* @__PURE__ */ e(Yr, {}) }),
                /* @__PURE__ */ p(B, { as: "span", size: x.XSmall, weight: E.Semibold, color: b.Default, children: [
                  Jr[S],
                  " ",
                  f
                ] }),
                /* @__PURE__ */ e(G, { label: "Next month", onClick: A, color: b.Subtle, padding: i.XSmall, children: /* @__PURE__ */ e(Gr, {}) })
              ]
            }
          ),
          /* @__PURE__ */ p(Ae, { columns: 7, gap: i.XXSmall, children: [
            Kr.map((k) => /* @__PURE__ */ e(
              B,
              {
                as: "span",
                size: x.XXSmall,
                weight: E.Medium,
                color: b.Subtlest,
                align: "center",
                style: { padding: `${i.XSmall} 0` },
                children: k
              },
              k
            )),
            $
          ] })
        ]
      }
    );
  }
);
Zr.displayName = "Calendar";
const qr = X(
  ({ header: r, description: t, image: n, primaryAction: l, secondaryAction: a }, o) => /* @__PURE__ */ p(
    j,
    {
      ref: o,
      space: i.Large,
      alignInline: "center",
      style: {
        paddingBlock: i.XXHuge,
        paddingInline: i.XXXLarge,
        maxWidth: "28rem",
        marginInline: "auto",
        textAlign: "center"
      },
      children: [
        n && /* @__PURE__ */ e("div", { children: n }),
        /* @__PURE__ */ p(j, { space: i.Medium, alignInline: "center", children: [
          /* @__PURE__ */ e(
            B,
            {
              as: "h3",
              fontFamily: Ge.Display,
              size: x.XLarge,
              weight: E.Bold,
              color: b.Default,
              children: r
            }
          ),
          t && /* @__PURE__ */ e(B, { as: "p", size: x.XSmall, color: b.Subtle, lineHeight: 1.6, children: t })
        ] }),
        (l || a) && /* @__PURE__ */ p(T, { space: i.Medium, alignBlock: "center", children: [
          l,
          a
        ] })
      ]
    }
  )
);
qr.displayName = "EmptyState";
const Qr = ({ order: r }) => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    style: {
      width: "0.75rem",
      height: "0.75rem",
      marginInlineStart: "0.25rem",
      opacity: r ? 1 : 0.3
    },
    children: r === "ASC" ? /* @__PURE__ */ e("path", { d: "M8 3l4 5H4l4-5z" }) : r === "DESC" ? /* @__PURE__ */ e("path", { d: "M8 13l4-5H4l4 5z" }) : /* @__PURE__ */ p(xe, { children: [
      /* @__PURE__ */ e("path", { d: "M8 3l3 4H5l3-4z" }),
      /* @__PURE__ */ e("path", { d: "M8 13l3-4H5l3 4z" })
    ] })
  }
), et = X(
  ({
    caption: r,
    head: t,
    rows: n,
    rowsPerPage: l,
    page: a,
    defaultPage: o = 1,
    sortKey: d,
    sortOrder: s,
    defaultSortKey: u,
    defaultSortOrder: g = "ASC",
    onSort: c,
    onSetPage: h,
    isLoading: m = !1,
    isFixedSize: f = !1
  }, w) => {
    const [S, D] = W(o), [L, O] = W(u), [M, A] = W(g), N = a !== void 0, F = N ? a : S, $ = d !== void 0, k = $ ? d : L, I = $ ? s ?? "ASC" : M, H = l ? Math.max(1, Math.ceil(n.length / l)) : 1, V = me(() => {
      if (!l) return n;
      const z = (F - 1) * l;
      return n.slice(z, z + l);
    }, [n, l, F]), P = (z) => {
      const J = k === z && I === "ASC" ? "DESC" : "ASC";
      $ || (O(z), A(J)), c == null || c(z, J);
    }, U = (z) => {
      N || D(z), h == null || h(z);
    }, Y = {
      padding: `${i.MediumLarge} ${i.Large}`
    };
    return /* @__PURE__ */ p(y, { style: { position: "relative" }, children: [
      m && /* @__PURE__ */ e(
        y,
        {
          style: {
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(255,255,255,0.7)",
            zIndex: 10,
            borderRadius: C.XXLarge
          },
          children: /* @__PURE__ */ e(We, { size: "large" })
        }
      ),
      /* @__PURE__ */ p(
        "table",
        {
          ref: w,
          style: {
            width: "100%",
            borderCollapse: "collapse",
            tableLayout: f ? "fixed" : "auto",
            fontSize: x.XSmall
          },
          children: [
            r && /* @__PURE__ */ e(
              "caption",
              {
                style: {
                  textAlign: "left",
                  paddingBlockEnd: i.Medium,
                  fontWeight: E.Semibold,
                  fontSize: x.Small,
                  color: b.Default
                },
                children: r
              }
            ),
            /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: t.map((z) => /* @__PURE__ */ e(
              "th",
              {
                style: {
                  ...Y,
                  textAlign: "left",
                  fontWeight: E.Semibold,
                  fontSize: x.XXSmall,
                  color: b.Subtle,
                  borderBottom: `1px solid ${R.Default}`,
                  whiteSpace: "nowrap",
                  cursor: z.isSortable ? "pointer" : "default",
                  userSelect: z.isSortable ? "none" : void 0,
                  ...z.width ? { width: z.width } : {}
                },
                onClick: z.isSortable ? () => P(z.key) : void 0,
                children: /* @__PURE__ */ p("span", { style: { display: "inline-flex", alignItems: "center" }, children: [
                  z.label,
                  z.isSortable && /* @__PURE__ */ e(
                    Qr,
                    {
                      order: k === z.key ? I : void 0
                    }
                  )
                ] })
              },
              z.key
            )) }) }),
            /* @__PURE__ */ p("tbody", { children: [
              V.map((z) => /* @__PURE__ */ e(
                "tr",
                {
                  onClick: z.onClick,
                  style: {
                    cursor: z.onClick ? "pointer" : "default",
                    borderBottom: `1px solid ${R.Default}`
                  },
                  children: z.cells.map((J, se) => /* @__PURE__ */ e("td", { style: { ...Y, color: b.Default }, children: J }, se))
                },
                z.key
              )),
              V.length === 0 && /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e(
                "td",
                {
                  colSpan: t.length,
                  style: {
                    ...Y,
                    textAlign: "center",
                    color: b.Subtle
                  },
                  children: "No data"
                }
              ) })
            ] })
          ]
        }
      ),
      l && H > 1 && /* @__PURE__ */ p(
        T,
        {
          space: i.Medium,
          alignBlock: "center",
          alignInline: "center",
          style: { paddingBlock: i.Large },
          children: [
            /* @__PURE__ */ e(
              ee,
              {
                disabled: F <= 1,
                onClick: () => U(F - 1),
                paddingBlock: i.XSmall,
                paddingInline: i.Medium,
                borderRadius: C.Large,
                backgroundColor: v.Default,
                color: b.Default,
                style: { fontSize: x.XXSmall, border: `1px solid ${R.Default}` },
                children: "Previous"
              }
            ),
            /* @__PURE__ */ p(B, { size: x.XXSmall, color: b.Subtle, children: [
              "Page ",
              F,
              " of ",
              H
            ] }),
            /* @__PURE__ */ e(
              ee,
              {
                disabled: F >= H,
                onClick: () => U(F + 1),
                paddingBlock: i.XSmall,
                paddingInline: i.Medium,
                borderRadius: C.Large,
                backgroundColor: v.Default,
                color: b.Default,
                style: { fontSize: x.XXSmall, border: `1px solid ${R.Default}` },
                children: "Next"
              }
            )
          ]
        }
      )
    ] });
  }
);
et.displayName = "Table";
const rt = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z", clipRule: "evenodd" }) }), tt = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ e("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" }) }), nt = X(
  ({
    defaultValue: r,
    label: t,
    editButtonLabel: n,
    editView: l,
    readView: a,
    onConfirm: o,
    onCancel: d
  }, s) => {
    const [u, g] = W(!1), [c, h] = W(r);
    te(null), _(() => {
      h(r);
    }, [r]);
    const m = K(() => {
      g(!1), o(c);
    }, [c, o]), f = K(() => {
      h(r), g(!1), d == null || d();
    }, [r, d]), w = K(
      (L) => {
        L.key === "Enter" && m(), L.key === "Escape" && f();
      },
      [m, f]
    ), S = (L) => /* @__PURE__ */ e(
      y,
      {
        style: {
          paddingBlock: i.XSmall,
          paddingInline: i.Small,
          cursor: "pointer",
          borderRadius: C.Medium,
          wordBreak: "break-word",
          minHeight: "1.5em"
        },
        children: /* @__PURE__ */ e(B, { as: "span", size: x.Small, color: b.Default, children: L || " " })
      }
    ), D = (L) => /* @__PURE__ */ e(
      Xe,
      {
        value: L.value,
        onChange: L.onChange,
        onKeyDown: L.onKeyDown,
        autoFocus: L.autoFocus,
        backgroundColor: v.Default,
        borderColor: R.Focus,
        borderRadius: C.Medium,
        padding: i.XSmall,
        style: { fontSize: x.Small, width: "100%" }
      }
    );
    return /* @__PURE__ */ p("div", { ref: s, children: [
      t && /* @__PURE__ */ e(
        B,
        {
          as: "label",
          size: x.XXSmall,
          weight: 500,
          color: b.Subtle,
          style: { display: "block", marginBlockEnd: i.XSmall },
          children: t
        }
      ),
      u ? /* @__PURE__ */ p(T, { space: i.XSmall, alignBlock: "start", children: [
        /* @__PURE__ */ e(y, { style: { flex: "1 1 auto" }, children: (l ?? D)({
          value: c,
          onChange: (L) => h(L.target.value),
          onKeyDown: w,
          autoFocus: !0
        }) }),
        /* @__PURE__ */ e(
          G,
          {
            label: "Confirm",
            onClick: m,
            color: b.Success,
            padding: i.XSmall,
            children: /* @__PURE__ */ e(rt, {})
          }
        ),
        /* @__PURE__ */ e(
          G,
          {
            label: "Cancel",
            onClick: f,
            color: b.Error,
            padding: i.XSmall,
            children: /* @__PURE__ */ e(tt, {})
          }
        )
      ] }) : /* @__PURE__ */ e(
        y,
        {
          onClick: () => g(!0),
          role: "button",
          tabIndex: 0,
          "aria-label": n ?? r ?? "Edit",
          onKeyDown: (L) => {
            (L.key === "Enter" || L.key === " ") && (L.preventDefault(), g(!0));
          },
          style: { cursor: "pointer" },
          children: (a ?? S)(r)
        }
      )
    ] });
  }
);
nt.displayName = "InlineEdit";
const it = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "currentColor", style: { width: "0.875rem", height: "0.875rem" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z", clipRule: "evenodd" }) }), ot = X(
  ({ trigger: r, groups: t, checked: n, onChange: l }, a) => {
    const [o, d] = W(!1), s = te(null), u = K((c) => {
      c.key === "Escape" && d(!1);
    }, []), g = K((c) => {
      s.current && !s.current.contains(c.target) && d(!1);
    }, []);
    return _(() => {
      if (o)
        return document.addEventListener("keydown", u), document.addEventListener("mousedown", g), () => {
          document.removeEventListener("keydown", u), document.removeEventListener("mousedown", g);
        };
    }, [o, u, g]), /* @__PURE__ */ p(
      y,
      {
        ref: (c) => {
          s.current = c, typeof a == "function" ? a(c) : a && (a.current = c);
        },
        style: { position: "relative", display: "inline-block" },
        children: [
          /* @__PURE__ */ e(
            T,
            {
              style: { cursor: "pointer" },
              onClick: () => d((c) => !c),
              alignBlock: "center",
              children: r
            }
          ),
          o && /* @__PURE__ */ e(
            y,
            {
              backgroundColor: v.Default,
              borderColor: R.Default,
              borderSide: "all",
              borderRadius: C.XLarge,
              elevation: ie.Dropdown,
              padding: i.XSmall,
              style: {
                position: "absolute",
                top: "100%",
                left: 0,
                marginTop: i.XSmall,
                minWidth: "14rem",
                zIndex: ne.Dropdown
              },
              children: /* @__PURE__ */ e(j, { space: i.XSmall, children: t.map((c, h) => /* @__PURE__ */ p(j, { space: i.XXSmall, children: [
                c.title && /* @__PURE__ */ e(y, { paddingInline: i.MediumLarge, paddingBlock: i.XSmall, children: /* @__PURE__ */ e(
                  B,
                  {
                    as: "span",
                    size: x.XXSmall,
                    weight: E.Semibold,
                    color: b.Subtlest,
                    textTransform: "uppercase",
                    children: c.title
                  }
                ) }),
                c.items.map((m) => {
                  const f = !!n[m.id];
                  return /* @__PURE__ */ p(
                    ee,
                    {
                      onClick: () => l(m.id, !f),
                      borderRadius: C.Medium,
                      backgroundColor: v.Transparent,
                      color: b.Default,
                      paddingBlock: i.Medium,
                      paddingInline: i.MediumLarge,
                      style: {
                        width: "100%",
                        textAlign: "left",
                        fontSize: x.XSmall,
                        display: "flex",
                        alignItems: "center",
                        gap: i.Medium
                      },
                      children: [
                        /* @__PURE__ */ e(
                          y,
                          {
                            style: {
                              width: "1rem",
                              height: "1rem",
                              borderRadius: C.Small,
                              border: f ? "none" : `2px solid ${R.Outline}`,
                              backgroundColor: f ? v.Brand : v.Transparent,
                              color: b.Inverse,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0
                            },
                            children: f && /* @__PURE__ */ e(it, {})
                          }
                        ),
                        /* @__PURE__ */ e(B, { as: "span", size: x.XSmall, style: { color: "inherit" }, children: m.label })
                      ]
                    },
                    m.id
                  );
                }),
                h < t.length - 1 && /* @__PURE__ */ e(
                  y,
                  {
                    style: {
                      borderTop: `1px solid ${R.Default}`,
                      marginBlock: i.XSmall
                    }
                  }
                )
              ] }, h)) })
            }
          )
        ]
      }
    );
  }
);
ot.displayName = "DropdownCheckboxMenu";
const lt = X(
  ({
    label: r,
    helperText: t,
    errorText: n,
    id: l,
    labelColor: a = b.Default,
    labelSize: o = x.XSmall,
    labelWeight: d = E.Medium,
    labelTextTransform: s,
    labelLetterSpacing: u,
    inputBackground: g = v.Subtle,
    inputBorderColor: c,
    inputBorderRadius: h = C.XXLarge,
    inputBorderSide: m = "all",
    inputPadding: f = i.MediumLarge,
    name: w,
    value: S,
    defaultValue: D,
    placeholder: L,
    options: O,
    disabled: M,
    required: A,
    onChange: N,
    onBlur: F
  }, $) => {
    const k = fe(), I = l ?? k, H = `${I}-helper`, V = `${I}-error`, P = !!n, U = P ? R.Error : c, Y = m === "bottom", z = /* @__PURE__ */ e(
      Fe,
      {
        ref: $,
        id: I,
        name: w,
        value: S,
        defaultValue: D,
        placeholder: L,
        options: O,
        disabled: M,
        required: A,
        onChange: N,
        onBlur: F,
        backgroundColor: Y ? "transparent" : g,
        borderColor: Y ? void 0 : U,
        borderRadius: Y ? void 0 : h,
        padding: f,
        fontSize: x.XSmall,
        color: b.Default,
        style: { width: "100%" },
        "aria-describedby": P ? V : t ? H : void 0,
        "aria-invalid": P || void 0
      }
    ), J = Y ? /* @__PURE__ */ e("div", { style: {
      width: "100%",
      backgroundColor: g,
      borderBottom: `2px solid ${U}`
    }, children: z }) : z;
    return /* @__PURE__ */ p(j, { space: i.XSmall, children: [
      r && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: I,
          style: {
            fontSize: o,
            fontWeight: d,
            color: a,
            textTransform: s,
            letterSpacing: u
          },
          children: r
        }
      ),
      J,
      P && /* @__PURE__ */ e(B, { as: "span", size: x.XXSmall, color: b.Error, id: V, children: n }),
      !P && t && /* @__PURE__ */ e(B, { as: "span", size: x.XXSmall, color: b.Subtle, id: H, children: t })
    ] });
  }
);
lt.displayName = "SelectField";
const at = {
  info: { bg: v.Default, text: b.Info, accent: "#3b82f6" },
  success: { bg: v.Default, text: b.Success, accent: "#22c55e" },
  warning: { bg: v.Default, text: b.Warning, accent: "#f59e0b" },
  error: { bg: v.Default, text: b.Error, accent: "#ba1a1a" }
}, st = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "0.875rem", height: "0.875rem" },
    children: /* @__PURE__ */ e("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  }
), dt = X(
  ({ open: r, onClose: t, duration: n = 5e3, variant: l = "info", icon: a, children: o }, d) => {
    if (_(() => {
      if (!r || n === 0) return;
      const u = setTimeout(t, n);
      return () => clearTimeout(u);
    }, [r, n, t]), !r) return null;
    const s = at[l];
    return ke(
      /* @__PURE__ */ e(
        y,
        {
          ref: d,
          role: "alert",
          "aria-live": "assertive",
          backgroundColor: s.bg,
          borderRadius: C.XXLarge,
          elevation: ie.Overlay,
          padding: i.Large,
          style: {
            position: "fixed",
            bottom: i.XXXLarge,
            right: i.XXXLarge,
            zIndex: ne.Banner,
            minWidth: "20rem",
            maxWidth: "28rem",
            borderLeft: `4px solid ${s.accent}`
          },
          children: /* @__PURE__ */ p(T, { space: i.MediumLarge, alignBlock: "center", spread: "space-between", children: [
            /* @__PURE__ */ p(T, { space: i.MediumLarge, alignBlock: "center", grow: "fill", children: [
              a && /* @__PURE__ */ e(y, { style: { color: s.accent, flexShrink: 0 }, children: a }),
              /* @__PURE__ */ e(B, { as: "span", size: x.XSmall, weight: E.Medium, color: b.Default, children: o })
            ] }),
            /* @__PURE__ */ e(
              G,
              {
                label: "Dismiss",
                onClick: t,
                color: b.Subtle,
                padding: i.XXSmall,
                children: /* @__PURE__ */ e(st, {})
              }
            )
          ] })
        }
      ),
      document.body
    );
  }
);
dt.displayName = "Toast";
const ct = X(
  ({ items: r, activeId: t, onSelect: n, fab: l }, a) => /* @__PURE__ */ e(
    y,
    {
      ref: a,
      as: "nav",
      style: {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: ne.Sticky,
        backgroundColor: v.Default,
        borderTop: `1px solid ${R.Default}`,
        backdropFilter: "blur(20px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingInline: i.Large,
        paddingBlock: i.Medium
      },
      children: r.map((o, d) => {
        const s = o.id === t, u = Math.floor(r.length / 2), g = l && d === u;
        return /* @__PURE__ */ p(Q.Fragment, { children: [
          g && /* @__PURE__ */ e(y, { style: { marginTop: `-${i.XXXLarge}` }, children: l }),
          /* @__PURE__ */ p(
            "button",
            {
              type: "button",
              onClick: () => n == null ? void 0 : n(o.id),
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: i.XXSmall,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: i.XSmall,
                color: s ? b.Brand : b.Disabled
              },
              children: [
                /* @__PURE__ */ e(y, { style: { width: "1.5rem", height: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center" }, children: o.icon }),
                /* @__PURE__ */ e(
                  B,
                  {
                    as: "span",
                    size: x.Micro,
                    weight: E.Bold,
                    color: s ? b.Brand : b.Disabled,
                    textTransform: "uppercase",
                    children: o.label
                  }
                )
              ]
            }
          )
        ] }, o.id);
      })
    }
  )
);
ct.displayName = "MobileNav";
const bt = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    style: { width: "0.75rem", height: "0.75rem" },
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        d: "M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z",
        clipRule: "evenodd"
      }
    )
  }
), ut = X(
  ({ items: r, showLabels: t, variant: n = "dot" }, l) => {
    const a = be(t ?? !0), o = 32, d = r.filter((s) => s.status === "visited").length;
    return n === "bar" ? /* @__PURE__ */ e(
      "div",
      {
        ref: l,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": r.length,
        "aria-valuenow": d,
        style: { display: "grid", gridTemplateColumns: `repeat(${r.length}, 1fr)`, gap: i.Medium, width: "100%" },
        children: r.map((s, u) => {
          const g = s.status === "visited", c = s.status === "current";
          return r.length - 1, /* @__PURE__ */ p("div", { style: { display: "flex", flexDirection: "column", gap: i.Medium }, children: [
            /* @__PURE__ */ e("div", { style: {
              height: 6,
              borderRadius: C.Full,
              background: c ? he.Brand : "none",
              backgroundColor: c ? void 0 : g ? v.PrimaryContainer : v.NeutralBold,
              opacity: g ? 0.4 : 1,
              boxShadow: c ? "0 0 8px var(--bbui-color-primary), 0 0 20px var(--bbui-color-primary)" : "none",
              transition: "all 400ms ease",
              cursor: s.onClick ? "pointer" : "default"
            }, onClick: s.onClick }),
            a && /* @__PURE__ */ e(
              B,
              {
                as: "p",
                size: x.Micro,
                weight: c ? E.Bold : E.Medium,
                color: c ? b.Brand : g ? b.Subtle : b.Disabled,
                textTransform: "uppercase",
                letterSpacing: pe.Widest,
                style: {
                  textAlign: "right",
                  cursor: s.onClick ? "pointer" : "default",
                  whiteSpace: "nowrap"
                },
                onClick: s.onClick,
                children: s.label
              }
            )
          ] }, s.id);
        })
      }
    ) : /* @__PURE__ */ p(
      "div",
      {
        ref: l,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": r.length,
        "aria-valuenow": d,
        style: { width: "100%", padding: `0 ${i.Medium}` },
        children: [
          /* @__PURE__ */ e("div", { style: {
            display: "flex",
            alignItems: "center",
            width: "100%"
          }, children: r.map((s, u) => {
            const g = u === r.length - 1, c = s.status === "visited", h = s.status === "current", m = s.status === "disabled", f = c ? he.Brand : h ? "transparent" : v.NeutralBold, w = /* @__PURE__ */ e(
              "div",
              {
                style: {
                  width: o,
                  height: o,
                  borderRadius: C.Full,
                  background: c ? he.Brand : f,
                  backgroundColor: c ? void 0 : f,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: c ? b.OnBrand : h ? b.Brand : m ? b.Disabled : b.Subtle,
                  fontSize: x.XSmall,
                  fontWeight: E.Bold,
                  border: h ? `2px solid ${b.Brand}` : "none",
                  cursor: s.onClick || s.href ? "pointer" : "default",
                  transition: "all 300ms ease"
                },
                onClick: s.onClick,
                children: c ? /* @__PURE__ */ e(bt, {}) : u + 1
              }
            ), S = s.href ? /* @__PURE__ */ e("a", { href: s.href, style: { textDecoration: "none", color: "inherit" }, children: w }) : w;
            return /* @__PURE__ */ p(Q.Fragment, { children: [
              S,
              !g && /* @__PURE__ */ e("div", { style: {
                flex: "1 1 auto",
                height: 2,
                backgroundColor: v.NeutralBold,
                position: "relative",
                marginInline: i.XSmall,
                borderRadius: C.Full,
                overflow: "hidden"
              }, children: /* @__PURE__ */ e("div", { style: {
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: `${c ? s.percentageComplete : 0}%`,
                background: he.Brand,
                borderRadius: C.Full,
                transition: "width 400ms ease"
              } }) })
            ] }, s.id);
          }) }),
          a && /* @__PURE__ */ e("div", { style: {
            display: "flex",
            alignItems: "flex-start",
            width: "100%",
            marginTop: i.Medium
          }, children: r.map((s, u) => {
            const g = u === r.length - 1, c = s.status === "visited", h = s.status === "current", m = s.status === "disabled", f = c ? b.Brand : h ? b.Default : m ? b.Disabled : b.Subtle;
            return /* @__PURE__ */ p(Q.Fragment, { children: [
              /* @__PURE__ */ e("div", { style: {
                width: o,
                flexShrink: 0,
                display: "flex",
                justifyContent: "center"
              }, children: /* @__PURE__ */ e(
                B,
                {
                  as: "span",
                  size: x.XXSmall,
                  weight: h ? E.Bold : E.Medium,
                  color: f,
                  align: "center",
                  style: {
                    whiteSpace: "nowrap"
                  },
                  children: s.label
                }
              ) }),
              !g && /* @__PURE__ */ e("div", { style: { flex: "1 1 auto" } })
            ] }, s.id);
          }) })
        ]
      }
    );
  }
);
ut.displayName = "ProgressTracker";
const gt = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";
function ht(r) {
  const t = /* @__PURE__ */ p(T, { space: i.XSmall, alignBlock: "center", children: [
    /* @__PURE__ */ e(
      B,
      {
        size: x.XSmall,
        weight: E.Semibold,
        color: b.Brand,
        children: r.label
      }
    ),
    r.icon
  ] });
  return r.href ? /* @__PURE__ */ e(
    "a",
    {
      href: r.href,
      style: {
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center"
      },
      children: t
    }
  ) : /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      onClick: r.onClick,
      style: {
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center"
      },
      children: t
    }
  );
}
function mt(r) {
  return /* @__PURE__ */ e(
    ye,
    {
      src: r.src,
      alt: r.alt,
      width: r.width ?? i.Size8,
      height: r.height ?? i.Size8,
      objectFit: "cover",
      borderRadius: C.Medium,
      style: { opacity: 0.8 }
    }
  );
}
const pt = X(
  ({
    icon: r,
    heading: t,
    description: n,
    action: l,
    media: a,
    padding: o = i.XXLarge,
    borderRadius: d = C.XXLarge,
    blur: s = 20,
    backgroundOpacity: u = 0.1,
    borderOpacity: g = 0.12,
    children: c
  }, h) => {
    const m = {
      position: "relative",
      overflow: "hidden",
      background: `rgba(255, 255, 255, ${u})`,
      backdropFilter: `blur(${s}px)`,
      WebkitBackdropFilter: `blur(${s}px)`,
      border: `1px solid rgba(255, 255, 255, ${g})`,
      borderRadius: d,
      transition: "background 200ms ease"
    }, f = {
      position: "absolute",
      inset: 0,
      backgroundImage: `url("${gt}")`,
      opacity: 0.03,
      pointerEvents: "none"
    }, w = /* @__PURE__ */ p(j, { space: i.Medium, style: { flex: 1 }, children: [
      r && /* @__PURE__ */ e(y, { marginBlockEnd: i.Medium, children: r }),
      /* @__PURE__ */ e(
        B,
        {
          as: "h3",
          size: x.Large,
          weight: E.Bold,
          color: b.Default,
          children: t
        }
      ),
      n && /* @__PURE__ */ e(
        B,
        {
          size: x.XSmall,
          color: b.OnSurfaceVariant,
          children: n
        }
      ),
      l && ht(l),
      c
    ] });
    return /* @__PURE__ */ p(y, { ref: h, padding: o, style: m, children: [
      /* @__PURE__ */ e("div", { style: f, "aria-hidden": "true" }),
      a ? /* @__PURE__ */ p(T, { space: i.XXLarge, alignBlock: "center", children: [
        w,
        /* @__PURE__ */ e("div", { style: { flexShrink: 0 }, children: mt(a) })
      ] }) : w
    ] });
  }
);
pt.displayName = "GlassCard";
const ft = [
  { value: "small", short: "S", long: "Small" },
  { value: "medium", short: "M", long: "Medium" },
  { value: "large", short: "L", long: "Large" }
], yt = X(
  ({ label: r = "Page Size", compact: t = !1 }, n) => {
    const { pageSize: l, setPageSize: a } = xr();
    return /* @__PURE__ */ e(
      y,
      {
        ref: n,
        paddingBlock: t ? i.XXSmall : i.XSmall,
        paddingInline: t ? i.XSmall : i.Medium,
        backgroundColor: v.Default,
        borderColor: R.Default,
        borderSide: "all",
        borderRadius: C.Full,
        children: /* @__PURE__ */ p(T, { space: i.MediumLarge, alignBlock: "center", children: [
          !t && r && /* @__PURE__ */ e(
            B,
            {
              size: x.Micro,
              weight: E.Bold,
              color: b.Subtlest,
              textTransform: "uppercase",
              style: { letterSpacing: pe.Widest },
              children: r
            }
          ),
          /* @__PURE__ */ e(T, { space: i.XXSmall, alignBlock: "center", children: ft.map((o) => {
            const d = o.value === l;
            return /* @__PURE__ */ e(
              ee,
              {
                onClick: () => a(o.value),
                "aria-pressed": d,
                "aria-label": `${o.long} page size`,
                title: o.long,
                backgroundColor: d ? v.PrimaryTint : v.Transparent,
                color: d ? b.Brand : b.Subtlest,
                borderRadius: C.Full,
                paddingBlock: i.XSmall,
                paddingInline: i.MediumLarge,
                style: {
                  fontSize: x.Micro,
                  fontWeight: d ? E.Bold : E.Semibold,
                  letterSpacing: pe.Widest,
                  textTransform: "uppercase",
                  minWidth: "1.75rem",
                  lineHeight: 1
                },
                children: o.short
              },
              o.value
            );
          }) })
        ] })
      }
    );
  }
);
yt.displayName = "PageSizeControl";
function Rt(r) {
  const [t, n] = W(
    () => typeof window < "u" ? window.matchMedia(r).matches : !1
  );
  return _(() => {
    const l = window.matchMedia(r), a = (o) => n(o.matches);
    return l.addEventListener("change", a), n(l.matches), () => l.removeEventListener("change", a);
  }, [r]), t;
}
function we() {
  return typeof window > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function vt(r) {
  typeof document > "u" || (r === "system" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", r));
}
function $t() {
  const [r, t] = W(() => typeof localStorage > "u" ? "system" : localStorage.getItem("bbui-theme") ?? "system"), [n, l] = W(
    () => r === "system" ? we() : r
  ), a = K((o) => {
    t(o), typeof localStorage < "u" && (o === "system" ? localStorage.removeItem("bbui-theme") : localStorage.setItem("bbui-theme", o));
  }, []);
  return _(() => {
    vt(r), l(r === "system" ? we() : r);
  }, [r]), _(() => {
    if (r !== "system") return;
    const o = window.matchMedia("(prefers-color-scheme: dark)"), d = () => l(we());
    return o.addEventListener("change", d), () => o.removeEventListener("change", d);
  }, [r]), { theme: r, resolvedTheme: n, setTheme: a };
}
async function* wt(r, t) {
  if (!r.body)
    throw new Error("SSE response has no readable body");
  const n = r.body.getReader(), l = new TextDecoder();
  let a = "";
  try {
    for (; ; ) {
      if (t != null && t.aborted) {
        await n.cancel().catch(() => {
        });
        return;
      }
      const { value: o, done: d } = await n.read();
      if (d) break;
      a += l.decode(o, { stream: !0 });
      let s;
      for (; (s = a.indexOf(`

`)) !== -1; ) {
        const u = a.slice(0, s);
        a = a.slice(s + 2);
        const g = [];
        for (const h of u.split(`
`))
          h.startsWith("data:") && g.push(h.slice(5).trimStart());
        if (g.length === 0) continue;
        const c = g.join(`
`);
        try {
          yield JSON.parse(c);
        } catch {
        }
      }
    }
  } finally {
    try {
      n.releaseLock();
    } catch {
    }
  }
}
async function* St(r, t = {}) {
  const n = await fetch(r, t);
  if (!n.ok) {
    const l = await n.text().catch(() => "");
    throw new Error(
      `SSE request failed ${n.status} ${n.statusText}: ${l}`
    );
  }
  yield* wt(n, t.signal);
}
function At(r = {}) {
  const { onEvent: t, onComplete: n, onError: l, retain: a = !0 } = r, [o, d] = W([]), [s, u] = W(null), [g, c] = W(!1), [h, m] = W(null), f = te(null), w = te(!0), S = te(t), D = te(n), L = te(l);
  _(() => {
    S.current = t, D.current = n, L.current = l;
  }), _(() => (w.current = !0, () => {
    var N;
    w.current = !1, (N = f.current) == null || N.abort();
  }), []);
  const O = K(() => {
    var N;
    (N = f.current) == null || N.abort(), f.current = null;
  }, []), M = K(() => {
    d([]), u(null), m(null);
  }, []), A = K(
    async (N, F = {}) => {
      var k, I, H, V;
      (k = f.current) == null || k.abort();
      const $ = new AbortController();
      f.current = $, w.current && (d([]), u(null), m(null), c(!0));
      try {
        for await (const P of St(N, {
          ...F,
          signal: $.signal
        })) {
          if (!w.current) return;
          a && d((U) => [...U, P]), u(P), (I = S.current) == null || I.call(S, P);
        }
        w.current && ((H = D.current) == null || H.call(D));
      } catch (P) {
        if ($.signal.aborted) return;
        const U = P instanceof Error ? P : new Error(String(P));
        w.current && (m(U), (V = L.current) == null || V.call(L, U));
      } finally {
        w.current && f.current === $ && (c(!1), f.current = null);
      }
    },
    [a]
  );
  return { events: o, lastEvent: s, isStreaming: g, error: h, start: A, abort: O, reset: M };
}
export {
  Mt as AccentColor,
  ae as Anchor,
  jr as Aside,
  sr as Avatar,
  v as BackgroundColor,
  Ne as Badge,
  Er as Banner,
  re as BloomColor,
  q as BloomLevel,
  R as BorderColor,
  C as BorderRadius,
  Ct as BorderWidth,
  y as Box,
  Be as Breakpoint,
  ee as Button,
  Zr as Calendar,
  Br as Card,
  mr as Checkbox,
  Lt as ContainerWidth,
  zt as DirectionColor,
  pr as Divider,
  ot as DropdownCheckboxMenu,
  Nr as DropdownMenu,
  ie as Elevation,
  qr as EmptyState,
  It as EvaluationResultColor,
  Ge as FontFamily,
  x as FontSize,
  E as FontWeight,
  pt as GlassCard,
  he as Gradient,
  Ae as Grid,
  Rr as Header,
  Lr as HeroSection,
  Ye as Icon,
  G as IconButton,
  Bt as IconSize,
  ye as Image,
  T as Inline,
  nt as InlineEdit,
  Vr as Layout,
  pe as LetterSpacing,
  tr as LinkButton,
  Pe as Menu,
  ct as MobileNav,
  Ar as Modal,
  Mr as Navbar,
  yt as PageSizeControl,
  Tt as PageSizeProvider,
  Pr as Panel,
  Et as PersonaAccent,
  ut as ProgressTracker,
  Fe as Select,
  lt as SelectField,
  Or as Sidebar,
  i as Spacing,
  We as Spinner,
  j as Stack,
  vr as Stepper,
  et as Table,
  Tr as Tabs,
  B as Text,
  br as TextArea,
  b as TextColor,
  Dr as TextField,
  Xe as TextInput,
  dt as Toast,
  rr as Toggle,
  ne as ZIndex,
  Je as bloomColorFor,
  Ze as bloomLevelForScore,
  wt as parseSSEStream,
  Dt as scoreColor,
  St as streamSSE,
  $e as useBreakpoint,
  Rt as useMediaQuery,
  xr as usePageSize,
  be as useResponsiveValue,
  At as useSSEStream,
  $t as useTheme
};
