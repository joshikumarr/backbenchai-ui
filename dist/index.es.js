import ee, { forwardRef as X, useState as W, useEffect as K, Fragment as Ye, useCallback as V, useId as fe, createContext as Ve, useContext as _e, useMemo as me, useRef as Q } from "react";
import { jsxs as f, jsx as e, Fragment as xe } from "react/jsx-runtime";
import { createPortal as ke } from "react-dom";
const Le = "bbui-base-styles", Me = `
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
  const r = document.getElementById(Le);
  if (r)
    r.textContent = Me;
  else {
    const t = document.createElement("style");
    t.id = Le, t.textContent = Me, document.head.appendChild(t);
  }
}
const S = X(
  ({
    as: r = "div",
    padding: t,
    paddingBlock: n,
    paddingBlockStart: l,
    paddingBlockEnd: a,
    paddingInline: o,
    paddingInlineStart: d,
    paddingInlineEnd: s,
    marginBlock: b,
    marginBlockStart: g,
    marginBlockEnd: c,
    backgroundColor: m,
    borderRadius: h,
    borderColor: p,
    borderSide: y,
    borderWidth: v = "1px",
    overflow: B,
    elevation: L,
    maxWidth: O,
    style: M,
    children: $,
    ...N
  }, F) => {
    const A = p ? `${v} solid ${p}` : void 0, k = {};
    if (A && y)
      switch (y) {
        case "top":
          k.borderTop = A;
          break;
        case "bottom":
          k.borderBottom = A;
          break;
        case "left":
          k.borderLeft = A;
          break;
        case "right":
          k.borderRight = A;
          break;
        case "all":
          k.border = A;
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
      ...b && { marginBlock: b },
      ...g && { marginBlockStart: g },
      ...c && { marginBlockEnd: c },
      ...m && { backgroundColor: m },
      ...h && { borderRadius: h },
      ...k,
      ...B && { overflow: B },
      ...L && { boxShadow: L },
      ...O && { maxWidth: O, marginInline: "auto" },
      ...M
    };
    return ee.createElement(
      r,
      { ...N, ref: F, style: I },
      $
    );
  }
);
S.displayName = "Box";
const De = {
  /** 0–639px */
  Mobile: 0,
  /** 640–1023px */
  Tablet: 640,
  /** 1024px+ */
  Desktop: 1024
};
function Be(r) {
  return r >= De.Desktop ? "desktop" : r >= De.Tablet ? "tablet" : "mobile";
}
function Ne() {
  const [r, t] = W(
    () => typeof window < "u" ? Be(window.innerWidth) : "desktop"
  );
  return K(() => {
    const n = () => t(Be(window.innerWidth));
    return window.addEventListener("resize", n), () => window.removeEventListener("resize", n);
  }, []), r;
}
function Ue(r, t) {
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
  const t = Ne();
  return Ue(r, t);
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
    style: b,
    children: g,
    ...c
  }, m) => {
    const p = {
      display: "flex",
      flexDirection: "column",
      gap: be(t ?? "0"),
      ...n && { alignItems: Ie[n] },
      ...l && !a && { justifyContent: Ie[l] },
      ...a && { justifyContent: a },
      ...o === "fill" && { flex: "1 1 auto" },
      ...d && { marginBlockStart: d },
      ...s && { marginBlockEnd: s },
      ...b
    };
    return ee.createElement(
      r,
      { ...c, ref: m, style: p },
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
}, R = X(
  ({
    as: r = "div",
    space: t,
    rowSpace: n,
    alignBlock: l,
    alignInline: a,
    spread: o,
    shouldWrap: d,
    separator: s,
    grow: b = "hug",
    marginBlockStart: g,
    marginBlockEnd: c,
    borderRadius: m,
    overflow: h,
    elevation: p,
    style: y,
    children: v,
    ...B
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
      ...b === "fill" && { flex: "1 1 auto" },
      ...g && { marginBlockStart: g },
      ...c && { marginBlockEnd: c },
      ...m && { borderRadius: m },
      ...h && { overflow: h },
      ...p && { boxShadow: p },
      ...y
    };
    let $ = v;
    if (s) {
      const N = ee.Children.toArray(v).filter(Boolean);
      $ = N.map((F, A) => /* @__PURE__ */ f(Ye, { children: [
        F,
        A < N.length - 1 && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: s })
      ] }, A));
    }
    return ee.createElement(
      r,
      { ...B, ref: L, style: M },
      $
    );
  }
);
R.displayName = "Inline";
const D = X(
  ({
    as: r = "span",
    size: t,
    weight: n,
    color: l,
    fontFamily: a,
    letterSpacing: o,
    align: d,
    textTransform: s,
    lineHeight: b,
    opacity: g,
    style: c,
    children: m,
    ...h
  }, p) => {
    const y = {
      ...t && { fontSize: t },
      ...n && { fontWeight: n },
      ...l && { color: l },
      ...a && { fontFamily: a },
      ...o && { letterSpacing: o },
      ...d && { textAlign: d },
      ...s && { textTransform: s },
      ...b !== void 0 && { lineHeight: b },
      ...g !== void 0 && { opacity: g },
      ...c
    };
    return ee.createElement(
      r,
      { ...h, ref: p, style: y },
      m
    );
  }
);
D.displayName = "Text";
function Ge(r) {
  if (r !== void 0)
    return typeof r == "number" ? `repeat(${r}, 1fr)` : r.map((t) => `${t}fr`).join(" ");
}
const We = X(
  ({
    as: r = "div",
    columns: t,
    gap: n,
    rowGap: l,
    marginBlockStart: a,
    marginBlockEnd: o,
    borderRadius: d,
    overflow: s,
    elevation: b,
    style: g,
    children: c,
    ...m
  }, h) => {
    const p = be(t ?? 1), y = be(n ?? "0"), v = {
      display: "grid",
      gridTemplateColumns: Ge(p),
      gap: y,
      ...l && { rowGap: l },
      ...a && { marginBlockStart: a },
      ...o && { marginBlockEnd: o },
      ...d && { borderRadius: d },
      ...s && { overflow: s },
      ...b && { boxShadow: b },
      ...g
    };
    return ee.createElement(
      r,
      { ...m, ref: h, style: v },
      c
    );
  }
);
We.displayName = "Grid";
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
    borderRadius: b,
    textTransform: g,
    display: c,
    alignSelf: m,
    style: h,
    children: p,
    ...y
  }, v) => {
    const B = {
      ...r && { color: r },
      ...t && { fontWeight: t },
      ...n && { fontSize: n },
      ...l && { backgroundColor: l },
      ...a && { padding: a },
      ...o && { paddingBlock: o },
      ...d && { paddingBlockStart: d },
      ...s && { paddingInline: s },
      ...b && { borderRadius: b },
      ...g && { textTransform: g },
      ...c && { display: c },
      ...m && { alignSelf: m },
      ...h
    };
    return /* @__PURE__ */ e("a", { ref: v, style: B, ...y, children: p });
  }
);
ae.displayName = "Anchor";
const ye = X(
  ({ borderRadius: r, objectFit: t, width: n, height: l, fill: a, style: o, ...d }, s) => {
    const b = {
      display: "block",
      ...a ? { width: "100%", height: "100%" } : {
        ...n ? { width: n, flexShrink: 0 } : { width: "100%" },
        ...l && { height: l }
      },
      ...r && { borderRadius: r },
      ...t && { objectFit: t },
      ...o
    };
    return /* @__PURE__ */ e("img", { ref: s, style: b, ...d });
  }
);
ye.displayName = "Image";
const re = X(
  ({
    backgroundColor: r,
    gradient: t,
    color: n,
    fontFamily: l,
    padding: a,
    paddingBlock: o,
    paddingInline: d,
    borderRadius: s,
    style: b,
    children: g,
    ...c
  }, m) => {
    const h = {
      border: "none",
      cursor: "pointer",
      ...t ? { background: t } : r ? { backgroundColor: r } : {},
      ...n && { color: n },
      ...l && { fontFamily: l },
      ...a && { padding: a },
      ...o && { paddingBlock: o },
      ...d && { paddingInline: d },
      ...s && { borderRadius: s },
      ...b
    };
    return /* @__PURE__ */ e("button", { ref: m, style: h, ...c, children: g });
  }
);
re.displayName = "Button";
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
  }, b) => {
    const g = {
      ...r && { backgroundColor: r },
      ...t && { border: `1px solid ${t}` },
      ...n && { borderRadius: n },
      ...l && { padding: l },
      ...a && { paddingBlock: a },
      ...o && { paddingInline: o },
      ...d
    };
    return /* @__PURE__ */ e("input", { ref: b, style: g, ...s });
  }
);
Xe.displayName = "TextInput";
const Je = X(
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
Je.displayName = "Icon";
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
}, u = {
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
}, w = {
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
}, Ze = {
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
}, z = {
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
}, T = {
  Default: "var(--bbui-border-default)",
  Input: "var(--bbui-border-input)",
  Warning: "var(--bbui-border-warning)",
  Error: "var(--bbui-border-error)",
  Info: "var(--bbui-border-info)",
  Success: "var(--bbui-border-success)",
  Focus: "var(--bbui-color-primary)",
  Outline: "var(--bbui-border-outline)"
}, Yt = {
  Thin: "1px",
  Medium: "2px",
  Thick: "4px",
  XThick: "8px"
}, Vt = {
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
}, _t = {
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
}, Ut = {
  Small: "1rem",
  Medium: "1.25rem",
  Large: "1.5rem",
  XLarge: "2rem",
  XXLarge: "2.5rem"
}, te = {
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
function qe(r) {
  switch (r) {
    case q.Masters:
      return te.Masters;
    case q.Analyzes:
      return te.Analyzes;
    case q.Applies:
      return te.Applies;
    case q.Understands:
      return te.Understands;
    case q.Aware:
      return te.Aware;
    default:
      return te.NotAssessed;
  }
}
function Qe(r) {
  return r >= 90 ? q.Masters : r >= 80 ? q.Analyzes : r >= 60 ? q.Applies : r >= 40 ? q.Understands : r >= 20 ? q.Aware : q.NotAssessed;
}
function Gt(r) {
  return qe(Qe(r));
}
const Jt = {
  correct: te.Masters,
  partial: te.Applies,
  incorrect: "var(--bbui-color-error)",
  skipped: "var(--bbui-color-subtlest)"
}, Zt = {
  up: te.Masters,
  down: "var(--bbui-color-error)",
  unchanged: "var(--bbui-color-subtlest)"
}, qt = {
  Nova: "var(--bbui-persona-nova)",
  Maya: "var(--bbui-persona-maya)",
  Jordan: "var(--bbui-persona-jordan)",
  Custom: "var(--bbui-persona-custom)"
}, er = {
  default: { backgroundColor: w.NeutralBold, color: u.Default },
  success: { backgroundColor: w.Success, color: u.Inverse },
  warning: { backgroundColor: w.Warning, color: u.Warning },
  error: { backgroundColor: w.Error, color: u.Error },
  info: { backgroundColor: w.Info, color: u.Info },
  brand: { backgroundColor: w.Brand, color: u.Inverse },
  primaryTint: { backgroundColor: w.PrimaryTint, color: u.Brand },
  errorTint: { backgroundColor: w.ErrorTint, color: u.Error },
  warningTint: { backgroundColor: w.WarningTint, color: "#ea580c" },
  infoTint: { backgroundColor: w.InfoTint, color: "#2563eb" },
  accentTint: { backgroundColor: w.AccentTint, color: "#7c3aed" }
}, Fe = X(
  ({ variant: r = "default", uppercase: t = !1, style: n, children: l, ...a }, o) => {
    const d = er[r], s = {
      display: "inline-flex",
      alignItems: "center",
      lineHeight: 1,
      paddingBlock: i.XXSmall,
      paddingInline: t ? i.MediumLarge : i.Medium,
      borderRadius: C.Full,
      fontWeight: t ? z.Black : z.Medium,
      fontSize: t ? x.Micro : x.XXSmall,
      letterSpacing: t ? pe.Wider : void 0,
      textTransform: t ? "uppercase" : void 0,
      ...d,
      ...n
    };
    return /* @__PURE__ */ e("span", { ref: o, style: s, ...a, children: l });
  }
);
Fe.displayName = "Badge";
const rr = "2.5rem", tr = "1.5rem", ve = "1.25rem", Ee = i.XXSmall, nr = X(
  ({ checked: r, defaultChecked: t = !1, onChange: n, label: l, style: a, ...o }, d) => {
    const [s, b] = W(t), g = r !== void 0, c = g ? r : s, m = V(() => {
      const y = !c;
      g || b(y), n == null || n(y);
    }, [c, g, n]), h = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      width: rr,
      height: tr,
      borderRadius: C.Full,
      backgroundColor: c ? w.Brand : w.Neutral,
      border: "none",
      cursor: "pointer",
      padding: 0,
      transition: "background-color 150ms ease",
      ...a
    }, p = {
      position: "absolute",
      width: ve,
      height: ve,
      borderRadius: C.Full,
      backgroundColor: w.Default,
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
        onClick: m,
        style: h,
        ...o,
        children: /* @__PURE__ */ e("span", { style: p })
      }
    );
  }
);
nr.displayName = "Toggle";
const ir = X(
  ({
    backgroundColor: r,
    color: t,
    padding: n,
    paddingBlock: l,
    paddingInline: a,
    borderRadius: o,
    style: d,
    children: s,
    ...b
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
    return /* @__PURE__ */ e("a", { ref: g, style: c, ...b, children: s });
  }
);
ir.displayName = "LinkButton";
const G = X(
  ({ label: r, size: t, color: n, backgroundColor: l, padding: a, style: o, children: d, ...s }, b) => {
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
        ref: b,
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
const or = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64
}, lr = {
  xsmall: "0.625rem",
  small: "0.75rem",
  medium: "0.875rem",
  large: "1rem",
  xlarge: "1.5rem"
}, ar = {
  xsmall: 6,
  small: 8,
  medium: 10,
  large: 12,
  xlarge: 16
}, sr = {
  online: "#22c55e",
  offline: "#bccbb9",
  busy: "#ba1a1a",
  focus: "#3b82f6"
};
function dr(r) {
  var n;
  const t = r.trim().split(/\s+/);
  return t.length >= 2 ? (t[0][0] + t[t.length - 1][0]).toUpperCase() : (((n = t[0]) == null ? void 0 : n[0]) ?? "").toUpperCase();
}
const cr = X(
  ({
    src: r,
    name: t,
    size: n = "medium",
    appearance: l = "circle",
    status: a,
    fallbackBackground: o = w.NeutralBold,
    fallbackColor: d = u.Subtle
  }, s) => {
    const [b, g] = W(!1), c = or[n], m = r && !b, h = t ? dr(t) : "", p = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: c,
      height: c,
      borderRadius: l === "circle" ? C.Full : C.XLarge,
      overflow: "hidden",
      flexShrink: 0,
      ...m ? {} : { backgroundColor: o }
    }, y = ar[n], v = a ? {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: y,
      height: y,
      borderRadius: C.Full,
      backgroundColor: sr[a],
      border: "2px solid #ffffff",
      boxSizing: "border-box"
    } : void 0;
    return /* @__PURE__ */ f("span", { ref: s, style: p, role: "img", "aria-label": t ?? "Avatar", children: [
      m ? /* @__PURE__ */ e(
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
            fontSize: lr[n],
            fontWeight: z.Semibold,
            color: d,
            lineHeight: 1,
            userSelect: "none"
          },
          children: h
        }
      ),
      a && /* @__PURE__ */ e("span", { style: v })
    ] });
  }
);
cr.displayName = "Avatar";
const br = {
  xsmall: 16,
  small: 24,
  medium: 32,
  large: 48,
  xlarge: 64
}, ur = {
  xsmall: 2,
  small: 2,
  medium: 3,
  large: 3,
  xlarge: 4
}, Oe = X(
  ({ size: r = "medium", label: t = "Loading", color: n = u.Brand }, l) => {
    const a = fe().replace(/:/g, ""), o = br[r], d = ur[r], s = (o - d) / 2, b = 2 * Math.PI * s;
    return /* @__PURE__ */ f(
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
          /* @__PURE__ */ f(
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
                    strokeDasharray: b,
                    strokeDashoffset: b * 0.7,
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
Oe.displayName = "Spinner";
const gr = X(
  ({
    backgroundColor: r,
    borderColor: t,
    borderRadius: n,
    padding: l,
    paddingBlock: a,
    paddingInline: o,
    style: d,
    ...s
  }, b) => {
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
    return /* @__PURE__ */ e("textarea", { ref: b, style: g, ...s });
  }
);
gr.displayName = "TextArea";
function hr(r) {
  return "options" in r;
}
const He = X(
  ({
    options: r,
    placeholder: t,
    backgroundColor: n,
    borderColor: l,
    borderRadius: a,
    padding: o,
    paddingBlock: d,
    paddingInline: s,
    fontSize: b,
    color: g,
    style: c,
    ...m
  }, h) => {
    const p = {
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
      ...b && { fontSize: b },
      ...g && { color: g },
      ...c
    };
    return /* @__PURE__ */ f("select", { ref: h, style: p, ...m, children: [
      t && /* @__PURE__ */ e("option", { value: "", disabled: !0, hidden: !0, children: t }),
      r.map(
        (y) => hr(y) ? /* @__PURE__ */ e("optgroup", { label: y.label, children: y.options.map((v) => /* @__PURE__ */ e("option", { value: v.value, disabled: v.disabled, children: v.label }, v.value)) }, y.label) : /* @__PURE__ */ e("option", { value: y.value, disabled: y.disabled, children: y.label }, y.value)
      )
    ] });
  }
);
He.displayName = "Select";
const mr = {
  small: { box: "1rem", font: x.XXSmall, gap: i.XSmall },
  medium: { box: "1.25rem", font: x.XSmall, gap: i.Medium },
  large: { box: "1.5rem", font: x.Small, gap: i.Medium }
}, pr = ({ size: r }) => /* @__PURE__ */ e(
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
), fr = X(
  ({ label: r, size: t = "medium", checked: n, disabled: l, style: a, id: o, ...d }, s) => {
    const b = fe(), g = o ?? b, c = mr[t], m = !!n, h = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: c.box,
      height: c.box,
      borderRadius: C.Small,
      flexShrink: 0,
      border: m ? "none" : `2px solid ${T.Outline}`,
      backgroundColor: m ? l ? u.Disabled : w.Brand : w.Transparent,
      color: u.Inverse,
      cursor: l ? "default" : "pointer",
      opacity: l ? 0.5 : 1
    };
    return /* @__PURE__ */ f(
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
          /* @__PURE__ */ e("span", { style: h, "aria-hidden": "true", children: m && /* @__PURE__ */ e(pr, { size: `calc(${c.box} - 4px)` }) }),
          r && /* @__PURE__ */ e(
            "span",
            {
              style: {
                fontSize: c.font,
                color: l ? u.Disabled : u.Default
              },
              children: r
            }
          )
        ]
      }
    );
  }
);
fr.displayName = "Checkbox";
const yr = X(
  ({
    orientation: r = "horizontal",
    color: t = T.Default,
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
yr.displayName = "Divider";
const vr = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z", clipRule: "evenodd" }) }), wr = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ e("path", { d: "M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" }) }), Sr = X(
  ({
    value: r,
    onChange: t,
    min: n = 0,
    max: l = 99,
    step: a = 1,
    disabled: o = !1,
    backgroundColor: d = w.Subtle,
    padding: s = i.XSmall
  }, b) => {
    const g = r - a >= n, c = r + a <= l;
    return /* @__PURE__ */ f(
      "div",
      {
        ref: b,
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
              color: u.Brand,
              padding: i.XSmall,
              children: /* @__PURE__ */ e(vr, {})
            }
          ),
          /* @__PURE__ */ e(
            D,
            {
              as: "span",
              size: x.Medium,
              weight: z.Bold,
              color: u.Default,
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
              color: u.Brand,
              padding: i.XSmall,
              children: /* @__PURE__ */ e(wr, {})
            }
          )
        ]
      }
    );
  }
);
Sr.displayName = "Stepper";
const Pe = "bbui-page-size", Se = "medium", je = Ve(null);
function xr(r) {
  typeof document > "u" || document.documentElement.setAttribute("data-page-size", r);
}
function kr() {
  if (typeof localStorage > "u") return Se;
  const r = localStorage.getItem(Pe);
  return r === "small" || r === "medium" || r === "large" ? r : Se;
}
function Qt({
  defaultSize: r,
  persist: t = !0,
  children: n
}) {
  const [l, a] = W(
    () => t ? kr() : r ?? Se
  ), o = V(
    (s) => {
      a(s), t && typeof localStorage < "u" && localStorage.setItem(Pe, s);
    },
    [t]
  );
  K(() => {
    xr(l);
  }, [l]);
  const d = me(
    () => ({ pageSize: l, setPageSize: o }),
    [l, o]
  );
  return /* @__PURE__ */ e(je.Provider, { value: d, children: n });
}
function Xr() {
  const r = _e(je);
  if (!r)
    throw new Error("usePageSize must be used inside <PageSizeProvider>");
  return r;
}
const Cr = () => /* @__PURE__ */ e(
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
), Lr = () => /* @__PURE__ */ e(
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
), Mr = () => /* @__PURE__ */ e(
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
), Dr = X(
  ({
    logo: r,
    navigation: t = [],
    cta: n,
    linkColor: l = u.Subtle,
    ctaBackgroundColor: a = w.Dark,
    ctaColor: o = u.Inverse,
    ctaWeight: d = 500,
    ctaBorderRadius: s = C.Full,
    paddingInline: b = i.XXXLarge,
    paddingBlock: g = i.XLarge,
    linkGap: c = i.XXLarge,
    logoGap: m = i.Size3_5,
    mobileMenuBackground: h = w.Default,
    mobileMenuBorderColor: p = T.Default,
    mobileMenuBorderRadius: y = C.Large,
    mobileBreakpoint: v = 768
  }, B) => {
    const [L, O] = W(!1), [M, $] = W(!1);
    K(() => {
      const I = () => $(window.innerWidth < v);
      return I(), window.addEventListener("resize", I), () => window.removeEventListener("resize", I);
    }, [v]);
    const N = V((I) => {
      I.target.closest("[data-navbar-menu]") || O(!1);
    }, []);
    K(() => (document.addEventListener("click", N), () => document.removeEventListener("click", N)), [N]);
    const F = ee.isValidElement(r) ? r : /* @__PURE__ */ e(
      ye,
      {
        src: r.src,
        alt: r.alt ?? "Logo",
        style: {
          width: r.width ?? 120,
          height: r.height ?? "auto"
        }
      }
    ), A = /* @__PURE__ */ e(xe, { children: t.map((I, H) => /* @__PURE__ */ e(
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
        children: /* @__PURE__ */ f(R, { space: i.XSmall, alignBlock: "center", children: [
          /* @__PURE__ */ e(D, { as: "span", color: o, weight: d, children: n.label }),
          n.icon ?? /* @__PURE__ */ e(Mr, {})
        ] })
      }
    ) : null;
    return M ? /* @__PURE__ */ f(S, { as: "header", ref: B, "data-navbar-menu": !0, children: [
      /* @__PURE__ */ e(
        S,
        {
          as: "nav",
          paddingInline: i.Large,
          paddingBlock: g,
          children: /* @__PURE__ */ f(R, { alignBlock: "center", spread: "space-between", children: [
            /* @__PURE__ */ e(S, { children: F }),
            /* @__PURE__ */ e(
              re,
              {
                onClick: () => O(!L),
                style: {
                  background: "none",
                  padding: 0,
                  color: u.Subtle
                },
                children: L ? /* @__PURE__ */ e(Lr, {}) : /* @__PURE__ */ e(Cr, {})
              }
            )
          ] })
        }
      ),
      L && /* @__PURE__ */ e(
        S,
        {
          backgroundColor: h,
          elevation: ie.Raised,
          borderRadius: y,
          borderColor: p,
          borderSide: "all",
          padding: i.Large,
          style: { margin: i.Medium },
          children: /* @__PURE__ */ f("nav", { children: [
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
            k && /* @__PURE__ */ e(S, { marginBlockStart: i.XXLarge, children: k })
          ] })
        }
      )
    ] }) : /* @__PURE__ */ e(S, { as: "header", ref: B, style: { width: "100%" }, children: /* @__PURE__ */ e(
      S,
      {
        as: "nav",
        paddingInline: b,
        paddingBlock: g,
        style: { width: "100%" },
        children: /* @__PURE__ */ f(R, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ e(S, { children: F }),
          /* @__PURE__ */ f(
            R,
            {
              space: c,
              alignBlock: "center",
              grow: "fill",
              style: { marginInlineStart: m },
              children: [
                /* @__PURE__ */ e(
                  R,
                  {
                    space: c,
                    alignBlock: "center",
                    grow: "fill",
                    alignInline: "center",
                    children: A
                  }
                ),
                k && /* @__PURE__ */ e(S, { children: k })
              ]
            }
          )
        ] })
      }
    ) });
  }
);
Dr.displayName = "Navbar";
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
), Br = X(
  ({
    title: r,
    subtitle: t,
    badge: n,
    actions: l = [],
    image: a,
    children: o,
    titleSize: d = x.XXXLarge,
    titleSizeLarge: s = x.Huge,
    titleWeight: b = z.ExtraBold,
    titleColor: g = u.Default,
    subtitleSize: c = x.Small,
    subtitleColor: m = u.Subtlest,
    primaryCtaBackground: h = w.Dark,
    primaryCtaColor: p = u.Inverse,
    primaryCtaBorderRadius: y = C.Full,
    primaryCtaWeight: v = 500,
    secondaryCtaColor: B = u.Subtle,
    secondaryCtaWeight: L = 500,
    ctaGap: O = i.MediumLarge,
    paddingBlock: M = i.Size7,
    paddingInline: $ = i.XXXLarge,
    contentGap: N = i.XHuge,
    textGap: F = i.XLarge,
    textMaxWidth: A = "36rem",
    gradient: k,
    breakpoint: I = 768
  }, H) => {
    const [Y, P] = W(!1);
    K(() => {
      const Z = () => P(window.innerWidth >= I);
      return Z(), window.addEventListener("resize", Z), () => window.removeEventListener("resize", Z);
    }, [I]);
    const _ = (k == null ? void 0 : k.enabled) !== !1, U = (k == null ? void 0 : k.css) ?? "linear-gradient(143.6deg, rgba(192,132,252,0) 20.79%, rgba(232,121,249,0.26) 40.92%, rgba(204,171,238,0) 70.35%)", E = (k == null ? void 0 : k.height) ?? "580px", J = (n == null ? void 0 : n.borderColor) ?? T.Default, se = n ? /* @__PURE__ */ e(
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
        children: /* @__PURE__ */ f(R, { space: i.MediumLarge, alignBlock: "center", children: [
          /* @__PURE__ */ e(
            D,
            {
              as: "span",
              size: x.XSmall,
              color: n.labelColor ?? u.Inverse,
              style: {
                backgroundColor: n.labelBackgroundColor ?? w.Accent,
                borderRadius: C.Full,
                padding: `${i.XSmall} ${i.MediumLarge}`
              },
              children: n.label
            }
          ),
          /* @__PURE__ */ f(R, { space: i.XXSmall, alignBlock: "center", children: [
            /* @__PURE__ */ e(D, { as: "span", size: x.XSmall, children: n.text }),
            n.icon ?? /* @__PURE__ */ e(Te, {})
          ] })
        ] })
      }
    ) : null, oe = l.length > 0 ? /* @__PURE__ */ e(R, { space: O, alignBlock: "center", shouldWrap: !0, children: l.map((Z, ge) => {
      const ce = (Z.variant ?? (ge === 0 ? "primary" : "secondary")) === "primary", Ce = ce ? v : L;
      return /* @__PURE__ */ e(
        ae,
        {
          href: Z.path,
          backgroundColor: ce ? h : void 0,
          color: ce ? p : B,
          paddingBlock: i.Medium,
          paddingInline: i.Large,
          borderRadius: ce ? y : void 0,
          weight: Ce,
          display: "inline-block",
          style: { textDecoration: "none" },
          children: /* @__PURE__ */ f(R, { space: i.XSmall, alignBlock: "center", children: [
            /* @__PURE__ */ e(
              D,
              {
                as: "span",
                color: ce ? p : B,
                weight: Ce,
                children: Z.label
              }
            ),
            Z.icon ?? /* @__PURE__ */ e(Te, {})
          ] })
        },
        ge
      );
    }) }) : null, de = /* @__PURE__ */ f(
      j,
      {
        space: F,
        style: { maxWidth: A, flexShrink: 0 },
        children: [
          se,
          /* @__PURE__ */ e(
            D,
            {
              as: "h1",
              size: Y ? s : d,
              weight: b,
              color: g,
              lineHeight: 1.2,
              children: r
            }
          ),
          t && /* @__PURE__ */ e(
            D,
            {
              as: "p",
              color: m,
              size: c,
              lineHeight: 1.6,
              children: t
            }
          ),
          o,
          oe
        ]
      }
    ), le = a && Y ? /* @__PURE__ */ e(S, { style: { flex: "1 1 0%", minWidth: 0 }, children: /* @__PURE__ */ e(
      ye,
      {
        src: a.src,
        alt: a.alt ?? "",
        style: { maxWidth: a.maxWidth ?? "36rem" }
      }
    ) }) : null;
    return /* @__PURE__ */ f(S, { as: "section", ref: H, style: { position: "relative" }, children: [
      _ && /* @__PURE__ */ e(
        "div",
        {
          "aria-hidden": "true",
          style: {
            position: "absolute",
            inset: 0,
            height: E,
            background: U,
            filter: "blur(40px)",
            pointerEvents: "none"
          }
        }
      ),
      /* @__PURE__ */ e(
        S,
        {
          style: { position: "relative", overflow: "hidden" },
          maxWidth: "1280px",
          paddingInline: $,
          paddingBlock: M,
          children: Y ? /* @__PURE__ */ f(R, { space: N, alignBlock: "center", children: [
            de,
            le
          ] }) : /* @__PURE__ */ e(j, { space: N, children: de })
        }
      )
    ] });
  }
);
Br.displayName = "HeroSection";
const Ir = X(
  ({
    padding: r = i.Large,
    backgroundColor: t = w.Default,
    borderRadius: n = C.XXLarge,
    borderColor: l = T.Default,
    elevation: a = ie.Ambient,
    accentColor: o,
    accentWidth: d = "8px",
    header: s,
    footer: b,
    children: g
  }, c) => /* @__PURE__ */ e(
    S,
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
      children: /* @__PURE__ */ f(j, { children: [
        s && /* @__PURE__ */ e(
          S,
          {
            padding: r,
            style: { borderBottom: `1px solid ${l}` },
            children: s
          }
        ),
        /* @__PURE__ */ e(S, { padding: r, children: g }),
        b && /* @__PURE__ */ e(
          S,
          {
            padding: r,
            style: { borderTop: `1px solid ${l}` },
            children: b
          }
        )
      ] })
    }
  )
);
Ir.displayName = "Card";
const zr = X(
  ({
    label: r,
    helperText: t,
    errorText: n,
    id: l,
    labelColor: a = u.Default,
    labelSize: o = x.XSmall,
    labelWeight: d = z.Medium,
    labelTextTransform: s,
    labelLetterSpacing: b,
    inputBackground: g = w.Default,
    inputBorderColor: c = T.Input,
    inputBorderRadius: m = C.Medium,
    inputBorderSide: h = "all",
    inputPadding: p = i.Medium,
    startAdornment: y,
    endAdornment: v,
    name: B,
    type: L,
    placeholder: O,
    value: M,
    defaultValue: $,
    disabled: N,
    readOnly: F,
    required: A,
    autoFocus: k,
    autoComplete: I,
    onChange: H,
    onBlur: Y,
    onFocus: P
  }, _) => {
    const U = fe(), E = l ?? U, J = `${E}-helper`, se = `${E}-error`, oe = !!n, ue = oe ? T.Error : c, de = h === "bottom", le = de || !!(y || v), Z = /* @__PURE__ */ e(
      Xe,
      {
        ref: _,
        id: E,
        name: B,
        type: L,
        placeholder: O,
        value: M,
        defaultValue: $,
        disabled: N,
        readOnly: F,
        required: A,
        autoFocus: k,
        autoComplete: I,
        onChange: H,
        onBlur: Y,
        onFocus: P,
        backgroundColor: le ? "transparent" : g,
        borderColor: le ? void 0 : ue,
        borderRadius: le ? void 0 : m,
        padding: p,
        style: {
          width: "100%",
          ...le ? { flex: "1 1 auto", minWidth: 0 } : {}
        },
        "aria-describedby": oe ? se : t ? J : void 0,
        "aria-invalid": oe || void 0
      }
    ), ge = le ? /* @__PURE__ */ f("div", { style: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      backgroundColor: g,
      ...de ? { borderBottom: `2px solid ${ue}` } : { border: `1px solid ${ue}`, borderRadius: m }
    }, children: [
      y,
      Z,
      v
    ] }) : Z;
    return /* @__PURE__ */ f(j, { space: i.XSmall, children: [
      r && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: E,
          style: {
            fontSize: o,
            fontWeight: d,
            color: a,
            textTransform: s,
            letterSpacing: b
          },
          children: r
        }
      ),
      ge,
      oe && /* @__PURE__ */ e(D, { as: "span", size: x.XXSmall, color: u.Error, id: se, children: n }),
      !oe && t && /* @__PURE__ */ e(D, { as: "span", size: x.XXSmall, color: u.Subtle, id: J, children: t })
    ] });
  }
);
zr.displayName = "TextField";
const Er = {
  info: {
    bg: w.InfoTint,
    text: u.Info,
    border: T.Info
  },
  success: {
    bg: w.PrimaryTint,
    text: u.Success,
    border: T.Success
  },
  warning: {
    bg: w.WarningTint,
    text: u.Warning,
    border: T.Warning
  },
  error: {
    bg: w.ErrorTint,
    text: u.Error,
    border: T.Error
  }
}, Tr = () => /* @__PURE__ */ e(
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
), Rr = X(
  ({ variant: r = "info", icon: t, dismissible: n, onDismiss: l, children: a }, o) => {
    const d = Er[r];
    return /* @__PURE__ */ e(
      S,
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
        children: /* @__PURE__ */ f(R, { space: i.Medium, alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ f(R, { space: i.Medium, alignBlock: "center", grow: "fill", children: [
            t && /* @__PURE__ */ e(S, { style: { color: d.text, flexShrink: 0 }, children: t }),
            /* @__PURE__ */ e(D, { as: "span", size: x.XSmall, color: d.text, children: a })
          ] }),
          n && /* @__PURE__ */ e(
            G,
            {
              label: "Dismiss",
              onClick: l,
              color: d.text,
              padding: i.XXSmall,
              children: /* @__PURE__ */ e(Tr, {})
            }
          )
        ] })
      }
    );
  }
);
Rr.displayName = "Banner";
const Ke = X(
  ({
    sections: r,
    activeId: t,
    onSelect: n,
    activeColor: l = u.Brand,
    activeBackground: a = w.Subtle
  }, o) => /* @__PURE__ */ e(j, { ref: o, as: "nav", space: i.Small, children: r.map((d, s) => /* @__PURE__ */ f(j, { space: i.XXSmall, children: [
    d.title && /* @__PURE__ */ e(S, { paddingInline: i.Medium, paddingBlock: i.XSmall, children: /* @__PURE__ */ e(
      D,
      {
        as: "span",
        size: x.XXSmall,
        weight: 600,
        color: u.Subtlest,
        textTransform: "uppercase",
        children: d.title
      }
    ) }),
    /* @__PURE__ */ e(j, { as: "ul", style: { listStyle: "none", padding: 0, margin: 0 }, children: d.items.map((b) => {
      const g = b.id === t;
      return /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(
        re,
        {
          disabled: b.disabled,
          onClick: () => n == null ? void 0 : n(b.id),
          borderRadius: C.Medium,
          color: b.disabled ? u.Disabled : g ? l : u.Default,
          backgroundColor: g ? a : w.Transparent,
          paddingBlock: i.Medium,
          paddingInline: i.MediumLarge,
          style: {
            width: "100%",
            fontSize: x.XSmall,
            textAlign: "left",
            cursor: b.disabled ? "default" : "pointer"
          },
          children: /* @__PURE__ */ f(R, { space: i.Medium, alignBlock: "center", children: [
            b.icon && /* @__PURE__ */ e(S, { style: { flexShrink: 0 }, children: b.icon }),
            /* @__PURE__ */ e(D, { as: "span", size: x.XSmall, style: { color: "inherit" }, children: b.label })
          ] })
        }
      ) }, b.id);
    }) }),
    s < r.length - 1 && /* @__PURE__ */ e(
      S,
      {
        style: {
          borderTop: `1px solid ${T.Default}`,
          marginBlock: i.XSmall
        }
      }
    )
  ] }, s)) })
);
Ke.displayName = "Menu";
const Ar = X(
  ({
    tabs: r,
    activeId: t,
    defaultActiveId: n,
    onChange: l,
    variant: a = "underline",
    activeColor: o = u.Brand,
    inactiveColor: d = u.Subtle,
    pillBackground: s = w.Subtle,
    activePillBackground: b = w.Default,
    panelPadding: g = i.Large
  }, c) => {
    var O;
    const [m, h] = W(
      n ?? ((O = r[0]) == null ? void 0 : O.id)
    ), p = t !== void 0, y = p ? t : m, v = (M) => {
      p || h(M), l == null || l(M);
    }, B = r.find((M) => M.id === y);
    return /* @__PURE__ */ f(S, { ref: c, children: [
      a === "pill" ? /* @__PURE__ */ e(
        R,
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
            const $ = M.id === y;
            return /* @__PURE__ */ e(
              re,
              {
                role: "tab",
                "aria-selected": $,
                "aria-controls": `tabpanel-${M.id}`,
                id: `tab-${M.id}`,
                disabled: M.disabled,
                onClick: () => v(M.id),
                paddingBlock: i.Medium,
                paddingInline: i.XXLarge,
                borderRadius: C.XLarge,
                color: $ ? u.Default : M.disabled ? u.Disabled : d,
                backgroundColor: $ ? b : w.Transparent,
                style: {
                  fontWeight: $ ? z.Bold : z.Medium,
                  fontSize: x.XSmall,
                  boxShadow: $ ? ie.Raised : "none",
                  cursor: M.disabled ? "default" : "pointer"
                },
                children: M.label
              },
              M.id
            );
          })
        }
      ) : /* @__PURE__ */ e(
        R,
        {
          as: "div",
          role: "tablist",
          space: i.None,
          style: {
            borderBottom: `1px solid ${T.Default}`
          },
          children: r.map((M) => {
            const $ = M.id === y;
            return /* @__PURE__ */ e(
              re,
              {
                role: "tab",
                "aria-selected": $,
                "aria-controls": `tabpanel-${M.id}`,
                id: `tab-${M.id}`,
                disabled: M.disabled,
                onClick: () => v(M.id),
                paddingBlock: i.Medium,
                paddingInline: i.Large,
                borderRadius: C.None,
                color: $ ? o : M.disabled ? u.Disabled : d,
                style: {
                  background: "none",
                  fontWeight: $ ? z.Semibold : z.Regular,
                  fontSize: x.XSmall,
                  borderBottom: $ ? `2px solid ${o}` : "2px solid transparent",
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
      B && /* @__PURE__ */ e(
        S,
        {
          role: "tabpanel",
          id: `tabpanel-${B.id}`,
          "aria-labelledby": `tab-${B.id}`,
          padding: g,
          children: B.content
        }
      )
    ] });
  }
);
Ar.displayName = "Tabs";
const $r = X(
  ({
    title: r,
    subtitle: t,
    breadcrumbs: n,
    actions: l,
    titleSize: a = x.XLarge,
    titleWeight: o = z.Bold,
    titleColor: d = u.Default,
    subtitleColor: s = u.Subtle,
    breadcrumbLinkColor: b = u.Link,
    borderColor: g = T.Default,
    paddingBlock: c = i.Large
  }, m) => /* @__PURE__ */ e(
    S,
    {
      ref: m,
      as: "header",
      paddingBlock: c,
      style: {
        borderBottom: `1px solid ${g}`
      },
      children: /* @__PURE__ */ f(j, { space: i.Medium, children: [
        n && n.length > 0 && /* @__PURE__ */ e(R, { space: i.XSmall, alignBlock: "center", children: n.map((h, p) => /* @__PURE__ */ f(ee.Fragment, { children: [
          p > 0 && /* @__PURE__ */ e(D, { as: "span", color: u.Disabled, size: x.XSmall, children: "/" }),
          h.href ? /* @__PURE__ */ e(
            ae,
            {
              href: h.href,
              color: b,
              size: x.XSmall,
              style: { textDecoration: "none" },
              children: h.label
            }
          ) : /* @__PURE__ */ e(D, { as: "span", size: x.XSmall, color: u.Subtlest, children: h.label })
        ] }, p)) }),
        /* @__PURE__ */ f(R, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ f(j, { space: i.XXSmall, children: [
            /* @__PURE__ */ e(D, { as: "h1", size: a, weight: o, color: d, children: r }),
            t && /* @__PURE__ */ e(D, { as: "p", size: x.XSmall, color: s, children: t })
          ] }),
          l && /* @__PURE__ */ e(R, { space: i.Medium, alignBlock: "center", children: l })
        ] })
      ] })
    }
  )
);
$r.displayName = "Header";
const Nr = () => /* @__PURE__ */ e(
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
), Wr = X(
  ({ open: r, onClose: t, title: n, children: l, footer: a }, o) => {
    const d = V(
      (s) => {
        s.key === "Escape" && t();
      },
      [t]
    );
    return K(() => {
      if (r)
        return document.addEventListener("keydown", d), document.body.style.overflow = "hidden", () => {
          document.removeEventListener("keydown", d), document.body.style.overflow = "";
        };
    }, [r, d]), r ? ke(
      /* @__PURE__ */ e(
        S,
        {
          style: {
            position: "fixed",
            inset: 0,
            zIndex: ne.Modal,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: w.Overlay
          },
          onClick: (s) => {
            s.target === s.currentTarget && t();
          },
          children: /* @__PURE__ */ e(
            S,
            {
              ref: o,
              role: "dialog",
              "aria-modal": "true",
              "aria-label": n,
              backgroundColor: w.Default,
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
              children: /* @__PURE__ */ f(j, { children: [
                n && /* @__PURE__ */ e(
                  S,
                  {
                    padding: i.Large,
                    style: { borderBottom: `1px solid ${T.Default}` },
                    children: /* @__PURE__ */ f(R, { alignBlock: "center", spread: "space-between", children: [
                      /* @__PURE__ */ e(D, { as: "h2", size: x.Large, weight: z.Semibold, color: u.Default, children: n }),
                      /* @__PURE__ */ e(G, { label: "Close", onClick: t, color: u.Subtle, children: /* @__PURE__ */ e(Nr, {}) })
                    ] })
                  }
                ),
                /* @__PURE__ */ e(S, { padding: i.Large, overflow: "auto", style: { flex: "1 1 auto" }, children: l }),
                a && /* @__PURE__ */ e(
                  S,
                  {
                    padding: i.Large,
                    style: { borderTop: `1px solid ${T.Default}` },
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
Wr.displayName = "Modal";
const Fr = X(
  ({ trigger: r, sections: t, activeId: n, onSelect: l }, a) => {
    const [o, d] = W(!1), s = Q(null), b = () => d((h) => !h), g = (h) => {
      l == null || l(h), d(!1);
    }, c = V((h) => {
      h.key === "Escape" && d(!1);
    }, []), m = V((h) => {
      s.current && !s.current.contains(h.target) && d(!1);
    }, []);
    return K(() => {
      if (o)
        return document.addEventListener("keydown", c), document.addEventListener("mousedown", m), () => {
          document.removeEventListener("keydown", c), document.removeEventListener("mousedown", m);
        };
    }, [o, c, m]), /* @__PURE__ */ f(
      S,
      {
        ref: (h) => {
          s.current = h, typeof a == "function" ? a(h) : a && (a.current = h);
        },
        style: { position: "relative", display: "inline-block" },
        children: [
          /* @__PURE__ */ e(
            R,
            {
              style: { cursor: "pointer" },
              onClick: b,
              alignBlock: "center",
              children: r
            }
          ),
          o && /* @__PURE__ */ e(
            S,
            {
              backgroundColor: w.Default,
              borderColor: T.Default,
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
                Ke,
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
Fr.displayName = "DropdownMenu";
const Or = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), Hr = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), Pr = X(
  ({
    sections: r,
    activeId: t,
    onSelect: n,
    header: l,
    footer: a,
    collapsed: o = !1,
    onToggleCollapse: d,
    width: s = "16rem",
    collapsedWidth: b = "4rem",
    activeColor: g = u.Brand,
    activeBackground: c = w.Subtle,
    borderColor: m = T.Default
  }, h) => /* @__PURE__ */ f(
    S,
    {
      ref: h,
      as: "aside",
      backgroundColor: w.Default,
      style: {
        width: o ? b : s,
        height: "100vh",
        position: "sticky",
        top: 0,
        borderRight: `1px solid ${m}`,
        display: "flex",
        flexDirection: "column",
        transition: "width 200ms ease",
        overflow: "hidden",
        flexShrink: 0
      },
      children: [
        l && /* @__PURE__ */ e(
          S,
          {
            padding: i.Large,
            style: { borderBottom: `1px solid ${m}` },
            children: l
          }
        ),
        /* @__PURE__ */ e(
          j,
          {
            space: i.Small,
            grow: "fill",
            style: { padding: i.Medium, overflow: "auto" },
            children: r.map((p, y) => /* @__PURE__ */ f(j, { space: i.XXSmall, children: [
              p.title && !o && /* @__PURE__ */ e(S, { paddingInline: i.Medium, paddingBlock: i.XSmall, children: /* @__PURE__ */ e(
                D,
                {
                  as: "span",
                  size: x.XXSmall,
                  weight: 600,
                  color: u.Subtlest,
                  textTransform: "uppercase",
                  children: p.title
                }
              ) }),
              p.items.map((v) => {
                const B = v.id === t;
                return /* @__PURE__ */ f(
                  re,
                  {
                    onClick: () => n == null ? void 0 : n(v.id),
                    title: o ? v.label : void 0,
                    borderRadius: C.Medium,
                    color: B ? g : u.Default,
                    backgroundColor: B ? c : w.Transparent,
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
                      v.icon && /* @__PURE__ */ e(S, { style: { flexShrink: 0 }, children: v.icon }),
                      !o && /* @__PURE__ */ f(xe, { children: [
                        /* @__PURE__ */ e(D, { as: "span", style: { flex: "1 1 auto", color: "inherit" }, children: v.label }),
                        v.badge && /* @__PURE__ */ e(Fe, { variant: v.badgeVariant ?? "default", children: v.badge })
                      ] })
                    ]
                  },
                  v.id
                );
              })
            ] }, y))
          }
        ),
        d && /* @__PURE__ */ e(
          S,
          {
            padding: i.Medium,
            style: { borderTop: `1px solid ${m}` },
            children: /* @__PURE__ */ e(
              G,
              {
                label: o ? "Expand sidebar" : "Collapse sidebar",
                onClick: d,
                color: u.Subtle,
                padding: i.XSmall,
                children: o ? /* @__PURE__ */ e(Hr, {}) : /* @__PURE__ */ e(Or, {})
              }
            )
          }
        ),
        a && /* @__PURE__ */ e(
          S,
          {
            padding: i.Large,
            style: { borderTop: `1px solid ${m}` },
            children: a
          }
        )
      ]
    }
  )
);
Pr.displayName = "Sidebar";
const jr = () => /* @__PURE__ */ e(
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
), Kr = X(
  ({
    open: r,
    onClose: t,
    title: n,
    side: l = "right",
    mode: a = "overlay",
    width: o = "24rem",
    children: d
  }, s) => {
    const b = V(
      (c) => {
        c.key === "Escape" && t();
      },
      [t]
    );
    if (K(() => {
      if (r)
        return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
    }, [r, b]), !r) return null;
    const g = /* @__PURE__ */ f(
      S,
      {
        ref: s,
        backgroundColor: w.Default,
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
            S,
            {
              padding: i.Large,
              style: { borderBottom: `1px solid ${T.Default}` },
              children: /* @__PURE__ */ f(R, { alignBlock: "center", spread: "space-between", children: [
                /* @__PURE__ */ e(D, { as: "h2", size: x.Large, weight: z.Semibold, color: u.Default, children: n }),
                /* @__PURE__ */ e(G, { label: "Close panel", onClick: t, color: u.Subtle, children: /* @__PURE__ */ e(jr, {}) })
              ] })
            }
          ),
          /* @__PURE__ */ e(S, { padding: i.Large, overflow: "auto", style: { flex: "1 1 auto" }, children: d })
        ]
      }
    );
    return a === "overlay" ? ke(
      /* @__PURE__ */ e(
        S,
        {
          style: {
            position: "fixed",
            inset: 0,
            zIndex: ne.Modal,
            backgroundColor: w.Overlay
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
Kr.displayName = "Panel";
const Yr = X(
  ({
    padding: r = i.Large,
    color: t = u.Subtle,
    borderColor: n = T.Default,
    children: l
  }, a) => /* @__PURE__ */ e(
    S,
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
Yr.displayName = "Aside";
const Vr = X(
  ({
    topNav: r,
    sideNav: t,
    mobileNav: n,
    backgroundColor: l = w.Surface,
    children: a
  }, o) => {
    const s = Ne() === "mobile";
    return /* @__PURE__ */ f(
      S,
      {
        ref: o,
        style: {
          minHeight: "100vh",
          backgroundColor: l,
          display: "flex"
        },
        children: [
          !s && t,
          /* @__PURE__ */ f(
            S,
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
                  S,
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
const _r = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
function Re(r, t) {
  return r.getFullYear() === t.getFullYear() && r.getMonth() === t.getMonth() && r.getDate() === t.getDate();
}
function Ur(r, t) {
  return new Date(r, t + 1, 0).getDate();
}
function Gr(r, t) {
  return new Date(r, t, 1).getDay();
}
const Jr = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), Zr = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), qr = [
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
], Qr = X(
  ({
    value: r,
    defaultValue: t,
    onChange: n,
    min: l,
    max: a,
    selectedColor: o = u.Inverse,
    selectedBackground: d = w.Brand
  }, s) => {
    const b = /* @__PURE__ */ new Date(), [g, c] = W(t), m = r !== void 0, h = m ? r : g, [p, y] = W(
      (h ?? b).getFullYear()
    ), [v, B] = W(
      (h ?? b).getMonth()
    ), L = me(() => Ur(p, v), [p, v]), O = me(() => Gr(p, v), [p, v]), M = () => {
      v === 0 ? (B(11), y((k) => k - 1)) : B((k) => k - 1);
    }, $ = () => {
      v === 11 ? (B(0), y((k) => k + 1)) : B((k) => k + 1);
    }, N = (k) => {
      const I = new Date(p, v, k);
      m || c(I), n == null || n(I);
    }, F = (k) => {
      const I = new Date(p, v, k);
      return !!(l && I < new Date(l.getFullYear(), l.getMonth(), l.getDate()) || a && I > new Date(a.getFullYear(), a.getMonth(), a.getDate()));
    }, A = [];
    for (let k = 0; k < O; k++)
      A.push(/* @__PURE__ */ e(S, {}, `empty-${k}`));
    for (let k = 1; k <= L; k++) {
      const I = new Date(p, v, k), H = h ? Re(I, h) : !1, Y = Re(I, b), P = F(k);
      A.push(
        /* @__PURE__ */ e(
          re,
          {
            disabled: P,
            onClick: () => N(k),
            borderRadius: C.Medium,
            style: {
              width: "2.25rem",
              height: "2.25rem",
              padding: 0,
              fontSize: x.XSmall,
              fontWeight: H ? z.Semibold : z.Regular,
              backgroundColor: H ? d : "transparent",
              color: H ? o : P ? u.Disabled : u.Default,
              border: Y && !H ? `1px solid ${T.Default}` : "none",
              cursor: P ? "default" : "pointer"
            },
            children: k
          },
          k
        )
      );
    }
    return /* @__PURE__ */ f(
      S,
      {
        ref: s,
        padding: i.Large,
        borderRadius: C.XLarge,
        borderColor: T.Default,
        borderSide: "all",
        backgroundColor: w.Default,
        style: { width: "fit-content" },
        children: [
          /* @__PURE__ */ f(
            R,
            {
              alignBlock: "center",
              spread: "space-between",
              marginBlockEnd: i.Medium,
              children: [
                /* @__PURE__ */ e(G, { label: "Previous month", onClick: M, color: u.Subtle, padding: i.XSmall, children: /* @__PURE__ */ e(Jr, {}) }),
                /* @__PURE__ */ f(D, { as: "span", size: x.XSmall, weight: z.Semibold, color: u.Default, children: [
                  qr[v],
                  " ",
                  p
                ] }),
                /* @__PURE__ */ e(G, { label: "Next month", onClick: $, color: u.Subtle, padding: i.XSmall, children: /* @__PURE__ */ e(Zr, {}) })
              ]
            }
          ),
          /* @__PURE__ */ f(We, { columns: 7, gap: i.XXSmall, children: [
            _r.map((k) => /* @__PURE__ */ e(
              D,
              {
                as: "span",
                size: x.XXSmall,
                weight: z.Medium,
                color: u.Subtlest,
                align: "center",
                style: { padding: `${i.XSmall} 0` },
                children: k
              },
              k
            )),
            A
          ] })
        ]
      }
    );
  }
);
Qr.displayName = "Calendar";
const et = X(
  ({ header: r, description: t, image: n, primaryAction: l, secondaryAction: a }, o) => /* @__PURE__ */ f(
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
        /* @__PURE__ */ f(j, { space: i.Medium, alignInline: "center", children: [
          /* @__PURE__ */ e(
            D,
            {
              as: "h3",
              fontFamily: Ze.Display,
              size: x.XLarge,
              weight: z.Bold,
              color: u.Default,
              children: r
            }
          ),
          t && /* @__PURE__ */ e(D, { as: "p", size: x.XSmall, color: u.Subtle, lineHeight: 1.6, children: t })
        ] }),
        (l || a) && /* @__PURE__ */ f(R, { space: i.Medium, alignBlock: "center", children: [
          l,
          a
        ] })
      ]
    }
  )
);
et.displayName = "EmptyState";
const rt = ({ order: r }) => /* @__PURE__ */ e(
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
    children: r === "ASC" ? /* @__PURE__ */ e("path", { d: "M8 3l4 5H4l4-5z" }) : r === "DESC" ? /* @__PURE__ */ e("path", { d: "M8 13l4-5H4l4 5z" }) : /* @__PURE__ */ f(xe, { children: [
      /* @__PURE__ */ e("path", { d: "M8 3l3 4H5l3-4z" }),
      /* @__PURE__ */ e("path", { d: "M8 13l3-4H5l3 4z" })
    ] })
  }
), tt = X(
  ({
    caption: r,
    head: t,
    rows: n,
    rowsPerPage: l,
    page: a,
    defaultPage: o = 1,
    sortKey: d,
    sortOrder: s,
    defaultSortKey: b,
    defaultSortOrder: g = "ASC",
    onSort: c,
    onSetPage: m,
    isLoading: h = !1,
    isFixedSize: p = !1
  }, y) => {
    const [v, B] = W(o), [L, O] = W(b), [M, $] = W(g), N = a !== void 0, F = N ? a : v, A = d !== void 0, k = A ? d : L, I = A ? s ?? "ASC" : M, H = l ? Math.max(1, Math.ceil(n.length / l)) : 1, Y = me(() => {
      if (!l) return n;
      const E = (F - 1) * l;
      return n.slice(E, E + l);
    }, [n, l, F]), P = (E) => {
      const J = k === E && I === "ASC" ? "DESC" : "ASC";
      A || (O(E), $(J)), c == null || c(E, J);
    }, _ = (E) => {
      N || B(E), m == null || m(E);
    }, U = {
      padding: `${i.MediumLarge} ${i.Large}`
    };
    return /* @__PURE__ */ f(S, { style: { position: "relative" }, children: [
      h && /* @__PURE__ */ e(
        S,
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
          children: /* @__PURE__ */ e(Oe, { size: "large" })
        }
      ),
      /* @__PURE__ */ f(
        "table",
        {
          ref: y,
          style: {
            width: "100%",
            borderCollapse: "collapse",
            tableLayout: p ? "fixed" : "auto",
            fontSize: x.XSmall
          },
          children: [
            r && /* @__PURE__ */ e(
              "caption",
              {
                style: {
                  textAlign: "left",
                  paddingBlockEnd: i.Medium,
                  fontWeight: z.Semibold,
                  fontSize: x.Small,
                  color: u.Default
                },
                children: r
              }
            ),
            /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: t.map((E) => /* @__PURE__ */ e(
              "th",
              {
                style: {
                  ...U,
                  textAlign: "left",
                  fontWeight: z.Semibold,
                  fontSize: x.XXSmall,
                  color: u.Subtle,
                  borderBottom: `1px solid ${T.Default}`,
                  whiteSpace: "nowrap",
                  cursor: E.isSortable ? "pointer" : "default",
                  userSelect: E.isSortable ? "none" : void 0,
                  ...E.width ? { width: E.width } : {}
                },
                onClick: E.isSortable ? () => P(E.key) : void 0,
                children: /* @__PURE__ */ f("span", { style: { display: "inline-flex", alignItems: "center" }, children: [
                  E.label,
                  E.isSortable && /* @__PURE__ */ e(
                    rt,
                    {
                      order: k === E.key ? I : void 0
                    }
                  )
                ] })
              },
              E.key
            )) }) }),
            /* @__PURE__ */ f("tbody", { children: [
              Y.map((E) => /* @__PURE__ */ e(
                "tr",
                {
                  onClick: E.onClick,
                  style: {
                    cursor: E.onClick ? "pointer" : "default",
                    borderBottom: `1px solid ${T.Default}`
                  },
                  children: E.cells.map((J, se) => /* @__PURE__ */ e("td", { style: { ...U, color: u.Default }, children: J }, se))
                },
                E.key
              )),
              Y.length === 0 && /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e(
                "td",
                {
                  colSpan: t.length,
                  style: {
                    ...U,
                    textAlign: "center",
                    color: u.Subtle
                  },
                  children: "No data"
                }
              ) })
            ] })
          ]
        }
      ),
      l && H > 1 && /* @__PURE__ */ f(
        R,
        {
          space: i.Medium,
          alignBlock: "center",
          alignInline: "center",
          style: { paddingBlock: i.Large },
          children: [
            /* @__PURE__ */ e(
              re,
              {
                disabled: F <= 1,
                onClick: () => _(F - 1),
                paddingBlock: i.XSmall,
                paddingInline: i.Medium,
                borderRadius: C.Large,
                backgroundColor: w.Default,
                color: u.Default,
                style: { fontSize: x.XXSmall, border: `1px solid ${T.Default}` },
                children: "Previous"
              }
            ),
            /* @__PURE__ */ f(D, { size: x.XXSmall, color: u.Subtle, children: [
              "Page ",
              F,
              " of ",
              H
            ] }),
            /* @__PURE__ */ e(
              re,
              {
                disabled: F >= H,
                onClick: () => _(F + 1),
                paddingBlock: i.XSmall,
                paddingInline: i.Medium,
                borderRadius: C.Large,
                backgroundColor: w.Default,
                color: u.Default,
                style: { fontSize: x.XXSmall, border: `1px solid ${T.Default}` },
                children: "Next"
              }
            )
          ]
        }
      )
    ] });
  }
);
tt.displayName = "Table";
const nt = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z", clipRule: "evenodd" }) }), it = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ e("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" }) }), ot = X(
  ({
    defaultValue: r,
    label: t,
    editButtonLabel: n,
    editView: l,
    readView: a,
    onConfirm: o,
    onCancel: d
  }, s) => {
    const [b, g] = W(!1), [c, m] = W(r);
    Q(null), K(() => {
      m(r);
    }, [r]);
    const h = V(() => {
      g(!1), o(c);
    }, [c, o]), p = V(() => {
      m(r), g(!1), d == null || d();
    }, [r, d]), y = V(
      (L) => {
        L.key === "Enter" && h(), L.key === "Escape" && p();
      },
      [h, p]
    ), v = (L) => /* @__PURE__ */ e(
      S,
      {
        style: {
          paddingBlock: i.XSmall,
          paddingInline: i.Small,
          cursor: "pointer",
          borderRadius: C.Medium,
          wordBreak: "break-word",
          minHeight: "1.5em"
        },
        children: /* @__PURE__ */ e(D, { as: "span", size: x.Small, color: u.Default, children: L || " " })
      }
    ), B = (L) => /* @__PURE__ */ e(
      Xe,
      {
        value: L.value,
        onChange: L.onChange,
        onKeyDown: L.onKeyDown,
        autoFocus: L.autoFocus,
        backgroundColor: w.Default,
        borderColor: T.Focus,
        borderRadius: C.Medium,
        padding: i.XSmall,
        style: { fontSize: x.Small, width: "100%" }
      }
    );
    return /* @__PURE__ */ f("div", { ref: s, children: [
      t && /* @__PURE__ */ e(
        D,
        {
          as: "label",
          size: x.XXSmall,
          weight: 500,
          color: u.Subtle,
          style: { display: "block", marginBlockEnd: i.XSmall },
          children: t
        }
      ),
      b ? /* @__PURE__ */ f(R, { space: i.XSmall, alignBlock: "start", children: [
        /* @__PURE__ */ e(S, { style: { flex: "1 1 auto" }, children: (l ?? B)({
          value: c,
          onChange: (L) => m(L.target.value),
          onKeyDown: y,
          autoFocus: !0
        }) }),
        /* @__PURE__ */ e(
          G,
          {
            label: "Confirm",
            onClick: h,
            color: u.Success,
            padding: i.XSmall,
            children: /* @__PURE__ */ e(nt, {})
          }
        ),
        /* @__PURE__ */ e(
          G,
          {
            label: "Cancel",
            onClick: p,
            color: u.Error,
            padding: i.XSmall,
            children: /* @__PURE__ */ e(it, {})
          }
        )
      ] }) : /* @__PURE__ */ e(
        S,
        {
          onClick: () => g(!0),
          role: "button",
          tabIndex: 0,
          "aria-label": n ?? r ?? "Edit",
          onKeyDown: (L) => {
            (L.key === "Enter" || L.key === " ") && (L.preventDefault(), g(!0));
          },
          style: { cursor: "pointer" },
          children: (a ?? v)(r)
        }
      )
    ] });
  }
);
ot.displayName = "InlineEdit";
const lt = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "currentColor", style: { width: "0.875rem", height: "0.875rem" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z", clipRule: "evenodd" }) }), at = X(
  ({ trigger: r, groups: t, checked: n, onChange: l }, a) => {
    const [o, d] = W(!1), s = Q(null), b = V((c) => {
      c.key === "Escape" && d(!1);
    }, []), g = V((c) => {
      s.current && !s.current.contains(c.target) && d(!1);
    }, []);
    return K(() => {
      if (o)
        return document.addEventListener("keydown", b), document.addEventListener("mousedown", g), () => {
          document.removeEventListener("keydown", b), document.removeEventListener("mousedown", g);
        };
    }, [o, b, g]), /* @__PURE__ */ f(
      S,
      {
        ref: (c) => {
          s.current = c, typeof a == "function" ? a(c) : a && (a.current = c);
        },
        style: { position: "relative", display: "inline-block" },
        children: [
          /* @__PURE__ */ e(
            R,
            {
              style: { cursor: "pointer" },
              onClick: () => d((c) => !c),
              alignBlock: "center",
              children: r
            }
          ),
          o && /* @__PURE__ */ e(
            S,
            {
              backgroundColor: w.Default,
              borderColor: T.Default,
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
              children: /* @__PURE__ */ e(j, { space: i.XSmall, children: t.map((c, m) => /* @__PURE__ */ f(j, { space: i.XXSmall, children: [
                c.title && /* @__PURE__ */ e(S, { paddingInline: i.MediumLarge, paddingBlock: i.XSmall, children: /* @__PURE__ */ e(
                  D,
                  {
                    as: "span",
                    size: x.XXSmall,
                    weight: z.Semibold,
                    color: u.Subtlest,
                    textTransform: "uppercase",
                    children: c.title
                  }
                ) }),
                c.items.map((h) => {
                  const p = !!n[h.id];
                  return /* @__PURE__ */ f(
                    re,
                    {
                      onClick: () => l(h.id, !p),
                      borderRadius: C.Medium,
                      backgroundColor: w.Transparent,
                      color: u.Default,
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
                          S,
                          {
                            style: {
                              width: "1rem",
                              height: "1rem",
                              borderRadius: C.Small,
                              border: p ? "none" : `2px solid ${T.Outline}`,
                              backgroundColor: p ? w.Brand : w.Transparent,
                              color: u.Inverse,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0
                            },
                            children: p && /* @__PURE__ */ e(lt, {})
                          }
                        ),
                        /* @__PURE__ */ e(D, { as: "span", size: x.XSmall, style: { color: "inherit" }, children: h.label })
                      ]
                    },
                    h.id
                  );
                }),
                m < t.length - 1 && /* @__PURE__ */ e(
                  S,
                  {
                    style: {
                      borderTop: `1px solid ${T.Default}`,
                      marginBlock: i.XSmall
                    }
                  }
                )
              ] }, m)) })
            }
          )
        ]
      }
    );
  }
);
at.displayName = "DropdownCheckboxMenu";
const st = X(
  ({
    label: r,
    helperText: t,
    errorText: n,
    id: l,
    labelColor: a = u.Default,
    labelSize: o = x.XSmall,
    labelWeight: d = z.Medium,
    labelTextTransform: s,
    labelLetterSpacing: b,
    inputBackground: g = w.Subtle,
    inputBorderColor: c,
    inputBorderRadius: m = C.XXLarge,
    inputBorderSide: h = "all",
    inputPadding: p = i.MediumLarge,
    name: y,
    value: v,
    defaultValue: B,
    placeholder: L,
    options: O,
    disabled: M,
    required: $,
    onChange: N,
    onBlur: F
  }, A) => {
    const k = fe(), I = l ?? k, H = `${I}-helper`, Y = `${I}-error`, P = !!n, _ = P ? T.Error : c, U = h === "bottom", E = /* @__PURE__ */ e(
      He,
      {
        ref: A,
        id: I,
        name: y,
        value: v,
        defaultValue: B,
        placeholder: L,
        options: O,
        disabled: M,
        required: $,
        onChange: N,
        onBlur: F,
        backgroundColor: U ? "transparent" : g,
        borderColor: U ? void 0 : _,
        borderRadius: U ? void 0 : m,
        padding: p,
        fontSize: x.XSmall,
        color: u.Default,
        style: { width: "100%" },
        "aria-describedby": P ? Y : t ? H : void 0,
        "aria-invalid": P || void 0
      }
    ), J = U ? /* @__PURE__ */ e("div", { style: {
      width: "100%",
      backgroundColor: g,
      borderBottom: `2px solid ${_}`
    }, children: E }) : E;
    return /* @__PURE__ */ f(j, { space: i.XSmall, children: [
      r && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: I,
          style: {
            fontSize: o,
            fontWeight: d,
            color: a,
            textTransform: s,
            letterSpacing: b
          },
          children: r
        }
      ),
      J,
      P && /* @__PURE__ */ e(D, { as: "span", size: x.XXSmall, color: u.Error, id: Y, children: n }),
      !P && t && /* @__PURE__ */ e(D, { as: "span", size: x.XXSmall, color: u.Subtle, id: H, children: t })
    ] });
  }
);
st.displayName = "SelectField";
const dt = {
  info: { bg: w.Default, text: u.Info, accent: "#3b82f6" },
  success: { bg: w.Default, text: u.Success, accent: "#22c55e" },
  warning: { bg: w.Default, text: u.Warning, accent: "#f59e0b" },
  error: { bg: w.Default, text: u.Error, accent: "#ba1a1a" }
}, ct = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "0.875rem", height: "0.875rem" },
    children: /* @__PURE__ */ e("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  }
), bt = X(
  ({ open: r, onClose: t, duration: n = 5e3, variant: l = "info", icon: a, children: o }, d) => {
    if (K(() => {
      if (!r || n === 0) return;
      const b = setTimeout(t, n);
      return () => clearTimeout(b);
    }, [r, n, t]), !r) return null;
    const s = dt[l];
    return ke(
      /* @__PURE__ */ e(
        S,
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
          children: /* @__PURE__ */ f(R, { space: i.MediumLarge, alignBlock: "center", spread: "space-between", children: [
            /* @__PURE__ */ f(R, { space: i.MediumLarge, alignBlock: "center", grow: "fill", children: [
              a && /* @__PURE__ */ e(S, { style: { color: s.accent, flexShrink: 0 }, children: a }),
              /* @__PURE__ */ e(D, { as: "span", size: x.XSmall, weight: z.Medium, color: u.Default, children: o })
            ] }),
            /* @__PURE__ */ e(
              G,
              {
                label: "Dismiss",
                onClick: t,
                color: u.Subtle,
                padding: i.XXSmall,
                children: /* @__PURE__ */ e(ct, {})
              }
            )
          ] })
        }
      ),
      document.body
    );
  }
);
bt.displayName = "Toast";
const ut = X(
  ({ items: r, activeId: t, onSelect: n, fab: l }, a) => /* @__PURE__ */ e(
    S,
    {
      ref: a,
      as: "nav",
      style: {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: ne.Sticky,
        backgroundColor: w.Default,
        borderTop: `1px solid ${T.Default}`,
        backdropFilter: "blur(20px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingInline: i.Large,
        paddingBlock: i.Medium
      },
      children: r.map((o, d) => {
        const s = o.id === t, b = Math.floor(r.length / 2), g = l && d === b;
        return /* @__PURE__ */ f(ee.Fragment, { children: [
          g && /* @__PURE__ */ e(S, { style: { marginTop: `-${i.XXXLarge}` }, children: l }),
          /* @__PURE__ */ f(
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
                color: s ? u.Brand : u.Disabled
              },
              children: [
                /* @__PURE__ */ e(S, { style: { width: "1.5rem", height: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center" }, children: o.icon }),
                /* @__PURE__ */ e(
                  D,
                  {
                    as: "span",
                    size: x.Micro,
                    weight: z.Bold,
                    color: s ? u.Brand : u.Disabled,
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
ut.displayName = "MobileNav";
const gt = () => /* @__PURE__ */ e(
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
), ht = X(
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
        children: r.map((s, b) => {
          const g = s.status === "visited", c = s.status === "current";
          return r.length - 1, /* @__PURE__ */ f("div", { style: { display: "flex", flexDirection: "column", gap: i.Medium }, children: [
            /* @__PURE__ */ e("div", { style: {
              height: 6,
              borderRadius: C.Full,
              background: c ? he.Brand : "none",
              backgroundColor: c ? void 0 : g ? w.PrimaryContainer : w.NeutralBold,
              opacity: g ? 0.4 : 1,
              boxShadow: c ? "0 0 8px var(--bbui-color-primary), 0 0 20px var(--bbui-color-primary)" : "none",
              transition: "all 400ms ease",
              cursor: s.onClick ? "pointer" : "default"
            }, onClick: s.onClick }),
            a && /* @__PURE__ */ e(
              D,
              {
                as: "p",
                size: x.Micro,
                weight: c ? z.Bold : z.Medium,
                color: c ? u.Brand : g ? u.Subtle : u.Disabled,
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
    ) : /* @__PURE__ */ f(
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
          }, children: r.map((s, b) => {
            const g = b === r.length - 1, c = s.status === "visited", m = s.status === "current", h = s.status === "disabled", p = c ? he.Brand : m ? "transparent" : w.NeutralBold, y = /* @__PURE__ */ e(
              "div",
              {
                style: {
                  width: o,
                  height: o,
                  borderRadius: C.Full,
                  background: c ? he.Brand : p,
                  backgroundColor: c ? void 0 : p,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: c ? u.OnBrand : m ? u.Brand : h ? u.Disabled : u.Subtle,
                  fontSize: x.XSmall,
                  fontWeight: z.Bold,
                  border: m ? `2px solid ${u.Brand}` : "none",
                  cursor: s.onClick || s.href ? "pointer" : "default",
                  transition: "all 300ms ease"
                },
                onClick: s.onClick,
                children: c ? /* @__PURE__ */ e(gt, {}) : b + 1
              }
            ), v = s.href ? /* @__PURE__ */ e("a", { href: s.href, style: { textDecoration: "none", color: "inherit" }, children: y }) : y;
            return /* @__PURE__ */ f(ee.Fragment, { children: [
              v,
              !g && /* @__PURE__ */ e("div", { style: {
                flex: "1 1 auto",
                height: 2,
                backgroundColor: w.NeutralBold,
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
          }, children: r.map((s, b) => {
            const g = b === r.length - 1, c = s.status === "visited", m = s.status === "current", h = s.status === "disabled", p = c ? u.Brand : m ? u.Default : h ? u.Disabled : u.Subtle;
            return /* @__PURE__ */ f(ee.Fragment, { children: [
              /* @__PURE__ */ e("div", { style: {
                width: o,
                flexShrink: 0,
                display: "flex",
                justifyContent: "center"
              }, children: /* @__PURE__ */ e(
                D,
                {
                  as: "span",
                  size: x.XXSmall,
                  weight: m ? z.Bold : z.Medium,
                  color: p,
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
ht.displayName = "ProgressTracker";
const mt = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";
function pt(r) {
  const t = /* @__PURE__ */ f(R, { space: i.XSmall, alignBlock: "center", children: [
    /* @__PURE__ */ e(
      D,
      {
        size: x.XSmall,
        weight: z.Semibold,
        color: u.Brand,
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
function ft(r) {
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
const yt = X(
  ({
    icon: r,
    heading: t,
    description: n,
    action: l,
    media: a,
    padding: o = i.XXLarge,
    borderRadius: d = C.XXLarge,
    blur: s = 20,
    backgroundOpacity: b = 0.1,
    borderOpacity: g = 0.12,
    children: c
  }, m) => {
    const h = {
      position: "relative",
      overflow: "hidden",
      background: `rgba(255, 255, 255, ${b})`,
      backdropFilter: `blur(${s}px)`,
      WebkitBackdropFilter: `blur(${s}px)`,
      border: `1px solid rgba(255, 255, 255, ${g})`,
      borderRadius: d,
      transition: "background 200ms ease"
    }, p = {
      position: "absolute",
      inset: 0,
      backgroundImage: `url("${mt}")`,
      opacity: 0.03,
      pointerEvents: "none"
    }, y = /* @__PURE__ */ f(j, { space: i.Medium, style: { flex: 1 }, children: [
      r && /* @__PURE__ */ e(S, { marginBlockEnd: i.Medium, children: r }),
      /* @__PURE__ */ e(
        D,
        {
          as: "h3",
          size: x.Large,
          weight: z.Bold,
          color: u.Default,
          children: t
        }
      ),
      n && /* @__PURE__ */ e(
        D,
        {
          size: x.XSmall,
          color: u.OnSurfaceVariant,
          children: n
        }
      ),
      l && pt(l),
      c
    ] });
    return /* @__PURE__ */ f(S, { ref: m, padding: o, style: h, children: [
      /* @__PURE__ */ e("div", { style: p, "aria-hidden": "true" }),
      a ? /* @__PURE__ */ f(R, { space: i.XXLarge, alignBlock: "center", children: [
        y,
        /* @__PURE__ */ e("div", { style: { flexShrink: 0 }, children: ft(a) })
      ] }) : y
    ] });
  }
);
yt.displayName = "GlassCard";
const vt = [
  { value: "small", short: "S", long: "Small" },
  { value: "medium", short: "M", long: "Medium" },
  { value: "large", short: "L", long: "Large" }
], wt = X(
  ({ label: r = "Page Size", compact: t = !1 }, n) => {
    const { pageSize: l, setPageSize: a } = Xr();
    return /* @__PURE__ */ e(
      S,
      {
        ref: n,
        paddingBlock: t ? i.XXSmall : i.XSmall,
        paddingInline: t ? i.XSmall : i.Medium,
        backgroundColor: w.Default,
        borderColor: T.Default,
        borderSide: "all",
        borderRadius: C.Full,
        children: /* @__PURE__ */ f(R, { space: i.MediumLarge, alignBlock: "center", children: [
          !t && r && /* @__PURE__ */ e(
            D,
            {
              size: x.Micro,
              weight: z.Bold,
              color: u.Subtlest,
              textTransform: "uppercase",
              style: { letterSpacing: pe.Widest },
              children: r
            }
          ),
          /* @__PURE__ */ e(R, { space: i.XXSmall, alignBlock: "center", children: vt.map((o) => {
            const d = o.value === l;
            return /* @__PURE__ */ e(
              re,
              {
                onClick: () => a(o.value),
                "aria-pressed": d,
                "aria-label": `${o.long} page size`,
                title: o.long,
                backgroundColor: d ? w.PrimaryTint : w.Transparent,
                color: d ? u.Brand : u.Subtlest,
                borderRadius: C.Full,
                paddingBlock: i.XSmall,
                paddingInline: i.MediumLarge,
                style: {
                  fontSize: x.Micro,
                  fontWeight: d ? z.Bold : z.Semibold,
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
wt.displayName = "PageSizeControl";
const St = `
@keyframes bbui-pulse-down {
  0%, 100% { transform: translateY(0); opacity: 0.4 }
  50%      { transform: translateY(3px); opacity: 0.9 }
}
`, Ae = "2.25rem", xt = "1.125rem", kt = X(
  ({ items: r, onComplete: t, finishedLabel: n, maxHeight: l = "16rem" }, a) => {
    const [o, d] = W(() => /* @__PURE__ */ new Set()), s = Q(!1), b = Q(null), g = Q([]), c = o.size >= r.length;
    return K(() => {
      c && !s.current && (s.current = !0, t == null || t());
    }, [c, t]), K(() => {
      const m = b.current;
      if (!m) return;
      const h = new IntersectionObserver(
        (p) => {
          d((y) => {
            let v = y;
            for (const B of p) {
              if (!B.isIntersecting) continue;
              const L = Number(B.target.dataset.idx);
              y.has(L) || (v === y && (v = new Set(y)), v.add(L));
            }
            return v;
          });
        },
        { root: m, threshold: 0.6 }
      );
      return g.current.forEach((p) => p && h.observe(p)), () => h.disconnect();
    }, [r.length]), /* @__PURE__ */ f("div", { ref: a, style: { width: "100%", position: "relative" }, children: [
      /* @__PURE__ */ e("style", { children: St }),
      /* @__PURE__ */ e("div", { ref: b, style: Lt(l, c), children: /* @__PURE__ */ e(j, { space: i.MediumLarge, children: r.map((m, h) => {
        const p = o.has(h);
        return /* @__PURE__ */ f(
          "div",
          {
            ref: (y) => g.current[h] = y,
            "data-idx": h,
            style: Mt(p),
            children: [
              /* @__PURE__ */ e(Xt, { item: m }),
              h < r.length - 1 && /* @__PURE__ */ e("span", { "aria-hidden": "true", style: Et(p) })
            ]
          },
          m.id ?? h
        );
      }) }) }),
      /* @__PURE__ */ e("div", { style: Tt, children: c ? n : /* @__PURE__ */ e(Ct, {}) })
    ] });
  }
);
kt.displayName = "RevealSteps";
function Xt({ item: r }) {
  return /* @__PURE__ */ f("div", { style: Dt, children: [
    /* @__PURE__ */ e("span", { "aria-hidden": "true", style: Bt, children: r.icon }),
    /* @__PURE__ */ f("span", { style: It, children: [
      /* @__PURE__ */ e(D, { as: "span", size: x.Small, weight: z.Medium, children: r.label }),
      r.description && /* @__PURE__ */ e(D, { as: "span", size: x.XSmall, color: u.Subtle, children: r.description })
    ] }),
    r.meta && /* @__PURE__ */ e("span", { style: zt, children: r.meta })
  ] });
}
function Ct() {
  return /* @__PURE__ */ e("div", { style: Rt, "aria-hidden": "true", children: /* @__PURE__ */ e(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /* @__PURE__ */ e("polyline", { points: "6 9 12 15 18 9" })
    }
  ) });
}
const $e = "linear-gradient(to bottom, black 0%, black calc(100% - 2rem), transparent 100%)", Lt = (r, t) => ({
  maxHeight: r,
  overflowY: "auto",
  scrollBehavior: "smooth",
  maskImage: t ? "none" : $e,
  WebkitMaskImage: t ? "none" : $e,
  paddingRight: i.XSmall
}), Mt = (r) => ({
  position: "relative",
  opacity: r ? 1 : 0.15,
  transform: r ? "translateY(0)" : "translateY(8px)",
  filter: r ? "blur(0)" : "blur(2px)",
  transition: "opacity 420ms ease-out, transform 420ms cubic-bezier(0.22, 1, 0.36, 1), filter 420ms ease-out"
}), Dt = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: i.MediumLarge,
  padding: i.MediumLarge,
  background: w.Subtle,
  borderRadius: C.Large,
  border: `1px solid ${T.Default}`,
  color: u.Default
}, Bt = {
  width: Ae,
  height: Ae,
  flexShrink: 0,
  borderRadius: C.Medium,
  background: w.Subtle,
  color: u.Default,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
}, It = {
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: i.XXSmall
}, zt = {
  flexShrink: 0,
  display: "inline-flex",
  alignItems: "center"
}, Et = (r) => ({
  position: "absolute",
  left: `calc(${i.MediumLarge} + ${xt} - 1px)`,
  top: "100%",
  height: i.MediumLarge,
  width: "2px",
  background: T.Default,
  opacity: r ? 1 : 0,
  transition: "opacity 300ms ease-out",
  pointerEvents: "none"
}), Tt = {
  marginTop: i.Large,
  display: "flex",
  justifyContent: "center",
  minHeight: "1.25rem"
}, Rt = {
  color: u.Subtle,
  animation: "bbui-pulse-down 1500ms ease-in-out infinite",
  display: "inline-flex"
}, At = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree"
], $t = X(
  ({ value: r, onChange: t, labels: n = At }, l) => {
    const [a, o] = W(null);
    return /* @__PURE__ */ e("div", { ref: l, role: "radiogroup", style: Nt, children: n.map((d, s) => {
      const b = s + 1, g = r === b;
      return /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          role: "radio",
          "aria-checked": g,
          "aria-label": d,
          onClick: () => t(b),
          onMouseEnter: () => o(b),
          onMouseLeave: () => o(null),
          onFocus: () => o(b),
          onBlur: () => o(null),
          style: Wt(g, !g && a === b),
          children: d
        },
        b
      );
    }) });
  }
);
$t.displayName = "LikertScale";
const Nt = {
  display: "flex",
  flexDirection: "column",
  gap: i.Medium,
  width: "100%"
}, Wt = (r, t) => {
  const n = "var(--bbui-color-primary)", l = r ? "var(--bbui-bg-primary-container)" : t ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)", a = r || t ? n : "rgba(255,255,255,0.08)";
  return {
    width: "100%",
    height: "3rem",
    padding: `0 ${i.MediumLarge}`,
    borderRadius: C.Large,
    border: `1px solid ${a}`,
    background: l,
    color: "#ffffff",
    fontSize: x.Small,
    fontWeight: z.Medium,
    textAlign: "center",
    cursor: "pointer",
    transition: "background 180ms ease, border-color 180ms ease",
    font: "inherit"
  };
};
function en(r) {
  const [t, n] = W(
    () => typeof window < "u" ? window.matchMedia(r).matches : !1
  );
  return K(() => {
    const l = window.matchMedia(r), a = (o) => n(o.matches);
    return l.addEventListener("change", a), n(l.matches), () => l.removeEventListener("change", a);
  }, [r]), t;
}
function we() {
  return typeof window > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Ft(r) {
  typeof document > "u" || (r === "system" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", r));
}
function rn() {
  const [r, t] = W(() => typeof localStorage > "u" ? "system" : localStorage.getItem("bbui-theme") ?? "system"), [n, l] = W(
    () => r === "system" ? we() : r
  ), a = V((o) => {
    t(o), typeof localStorage < "u" && (o === "system" ? localStorage.removeItem("bbui-theme") : localStorage.setItem("bbui-theme", o));
  }, []);
  return K(() => {
    Ft(r), l(r === "system" ? we() : r);
  }, [r]), K(() => {
    if (r !== "system") return;
    const o = window.matchMedia("(prefers-color-scheme: dark)"), d = () => l(we());
    return o.addEventListener("change", d), () => o.removeEventListener("change", d);
  }, [r]), { theme: r, resolvedTheme: n, setTheme: a };
}
async function* Ot(r, t) {
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
        const b = a.slice(0, s);
        a = a.slice(s + 2);
        const g = [];
        for (const m of b.split(`
`))
          m.startsWith("data:") && g.push(m.slice(5).trimStart());
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
async function* Ht(r, t = {}) {
  const n = await fetch(r, t);
  if (!n.ok) {
    const l = await n.text().catch(() => "");
    throw new Error(
      `SSE request failed ${n.status} ${n.statusText}: ${l}`
    );
  }
  yield* Ot(n, t.signal);
}
function tn(r = {}) {
  const { onEvent: t, onComplete: n, onError: l, retain: a = !0 } = r, [o, d] = W([]), [s, b] = W(null), [g, c] = W(!1), [m, h] = W(null), p = Q(null), y = Q(!0), v = Q(t), B = Q(n), L = Q(l);
  K(() => {
    v.current = t, B.current = n, L.current = l;
  }), K(() => (y.current = !0, () => {
    var N;
    y.current = !1, (N = p.current) == null || N.abort();
  }), []);
  const O = V(() => {
    var N;
    (N = p.current) == null || N.abort(), p.current = null;
  }, []), M = V(() => {
    d([]), b(null), h(null);
  }, []), $ = V(
    async (N, F = {}) => {
      var k, I, H, Y;
      (k = p.current) == null || k.abort();
      const A = new AbortController();
      p.current = A, y.current && (d([]), b(null), h(null), c(!0));
      try {
        for await (const P of Ht(N, {
          ...F,
          signal: A.signal
        })) {
          if (!y.current) return;
          a && d((_) => [..._, P]), b(P), (I = v.current) == null || I.call(v, P);
        }
        y.current && ((H = B.current) == null || H.call(B));
      } catch (P) {
        if (A.signal.aborted) return;
        const _ = P instanceof Error ? P : new Error(String(P));
        y.current && (h(_), (Y = L.current) == null || Y.call(L, _));
      } finally {
        y.current && p.current === A && (c(!1), p.current = null);
      }
    },
    [a]
  );
  return { events: o, lastEvent: s, isStreaming: g, error: m, start: $, abort: O, reset: M };
}
export {
  Vt as AccentColor,
  ae as Anchor,
  Yr as Aside,
  cr as Avatar,
  w as BackgroundColor,
  Fe as Badge,
  Rr as Banner,
  te as BloomColor,
  q as BloomLevel,
  T as BorderColor,
  C as BorderRadius,
  Yt as BorderWidth,
  S as Box,
  De as Breakpoint,
  re as Button,
  Qr as Calendar,
  Ir as Card,
  fr as Checkbox,
  _t as ContainerWidth,
  Zt as DirectionColor,
  yr as Divider,
  at as DropdownCheckboxMenu,
  Fr as DropdownMenu,
  ie as Elevation,
  et as EmptyState,
  Jt as EvaluationResultColor,
  Ze as FontFamily,
  x as FontSize,
  z as FontWeight,
  yt as GlassCard,
  he as Gradient,
  We as Grid,
  $r as Header,
  Br as HeroSection,
  Je as Icon,
  G as IconButton,
  Ut as IconSize,
  ye as Image,
  R as Inline,
  ot as InlineEdit,
  Vr as Layout,
  pe as LetterSpacing,
  $t as LikertScale,
  ir as LinkButton,
  Ke as Menu,
  ut as MobileNav,
  Wr as Modal,
  Dr as Navbar,
  wt as PageSizeControl,
  Qt as PageSizeProvider,
  Kr as Panel,
  qt as PersonaAccent,
  ht as ProgressTracker,
  kt as RevealSteps,
  He as Select,
  st as SelectField,
  Pr as Sidebar,
  i as Spacing,
  Oe as Spinner,
  j as Stack,
  Sr as Stepper,
  tt as Table,
  Ar as Tabs,
  D as Text,
  gr as TextArea,
  u as TextColor,
  zr as TextField,
  Xe as TextInput,
  bt as Toast,
  nr as Toggle,
  ne as ZIndex,
  qe as bloomColorFor,
  Qe as bloomLevelForScore,
  Ot as parseSSEStream,
  Gt as scoreColor,
  Ht as streamSSE,
  Ne as useBreakpoint,
  en as useMediaQuery,
  Xr as usePageSize,
  be as useResponsiveValue,
  tn as useSSEStream,
  rn as useTheme
};
