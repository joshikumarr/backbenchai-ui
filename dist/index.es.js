import ie, { useState as N, useEffect as Y, forwardRef as X, Fragment as _e, useCallback as _, useId as we, createContext as Ue, useContext as Ge, useMemo as pe, useRef as ne } from "react";
import { jsx as r, Fragment as te, jsxs as f } from "react/jsx-runtime";
import { createPortal as Ce } from "react-dom";
const De = "bbui-base-styles", Ie = `
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
  const e = document.getElementById(De);
  if (e)
    e.textContent = Ie;
  else {
    const n = document.createElement("style");
    n.id = De, n.textContent = Ie, document.head.appendChild(n);
  }
}
const ze = {
  /** 0–639px */
  Mobile: 0,
  /** 640–1023px */
  Tablet: 640,
  /** 1024px+ */
  Desktop: 1024
};
function Ee(e) {
  return e >= ze.Desktop ? "desktop" : e >= ze.Tablet ? "tablet" : "mobile";
}
function Se() {
  const [e, n] = N(
    () => typeof window < "u" ? Ee(window.innerWidth) : "desktop"
  );
  return Y(() => {
    const t = () => n(Ee(window.innerWidth));
    return window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
  }, []), e;
}
function Je(e, n) {
  if (e == null || typeof e != "object" || !("mobile" in e)) return e;
  const t = e;
  switch (n) {
    case "desktop":
      return t.desktop ?? t.tablet ?? t.mobile;
    case "tablet":
      return t.tablet ?? t.mobile;
    default:
      return t.mobile;
  }
}
function G(e) {
  const n = Se();
  return Je(e, n);
}
const S = X(
  ({
    as: e = "div",
    padding: n,
    paddingBlock: t,
    paddingBlockStart: o,
    paddingBlockEnd: a,
    paddingInline: l,
    paddingInlineStart: d,
    paddingInlineEnd: s,
    marginBlock: c,
    marginBlockStart: g,
    marginBlockEnd: b,
    backgroundColor: m,
    borderRadius: h,
    borderColor: p,
    borderSide: y,
    borderWidth: v = "1px",
    overflow: D,
    elevation: C,
    maxWidth: P,
    style: L,
    children: A,
    ...$
  }, H) => {
    const W = G(n), k = G(t), I = G(o), F = G(a), K = G(l), O = G(d), V = G(s), U = G(c), z = G(g), J = G(b), q = p ? `${v} solid ${p}` : void 0, Z = {};
    if (q && y)
      switch (y) {
        case "top":
          Z.borderTop = q;
          break;
        case "bottom":
          Z.borderBottom = q;
          break;
        case "left":
          Z.borderLeft = q;
          break;
        case "right":
          Z.borderRight = q;
          break;
        case "all":
          Z.border = q;
          break;
      }
    const be = {
      ...W && { padding: W },
      ...k && { paddingBlock: k },
      ...I && { paddingBlockStart: I },
      ...F && { paddingBlockEnd: F },
      ...K && { paddingInline: K },
      ...O && { paddingInlineStart: O },
      ...V && { paddingInlineEnd: V },
      ...U && { marginBlock: U },
      ...z && { marginBlockStart: z },
      ...J && { marginBlockEnd: J },
      ...m && { backgroundColor: m },
      ...h && { borderRadius: h },
      ...Z,
      ...D && { overflow: D },
      ...C && { boxShadow: C },
      ...P && { maxWidth: P, marginInline: "auto" },
      ...L
    };
    return ie.createElement(
      e,
      { ...$, ref: H, style: be },
      A
    );
  }
);
S.displayName = "Box";
const fe = ["mobile", "tablet", "desktop"];
function Ze(e, n) {
  return fe.indexOf(e) >= fe.indexOf(n);
}
function qe(e, n) {
  return fe.indexOf(e) < fe.indexOf(n);
}
function Qn({ on: e, above: n, below: t, children: o }) {
  const a = Se();
  return e != null ? (Array.isArray(e) ? e : [e]).includes(a) ? /* @__PURE__ */ r(te, { children: o }) : null : n != null ? Ze(a, n) ? /* @__PURE__ */ r(te, { children: o }) : null : t != null ? qe(a, t) ? /* @__PURE__ */ r(te, { children: o }) : null : /* @__PURE__ */ r(te, { children: o });
}
const ye = ["mobile", "tablet", "desktop"];
function Qe(e, n) {
  return ye.indexOf(e) >= ye.indexOf(n);
}
function er(e, n) {
  return ye.indexOf(e) < ye.indexOf(n);
}
function et({ on: e, above: n, below: t, children: o }) {
  const a = Se();
  return e != null ? (Array.isArray(e) ? e : [e]).includes(a) ? null : /* @__PURE__ */ r(te, { children: o }) : n != null ? Qe(a, n) ? null : /* @__PURE__ */ r(te, { children: o }) : t != null ? er(a, t) ? null : /* @__PURE__ */ r(te, { children: o }) : /* @__PURE__ */ r(te, { children: o });
}
const Te = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch"
}, j = X(
  ({
    as: e = "div",
    space: n,
    alignInline: t,
    alignBlock: o,
    spread: a,
    grow: l = "hug",
    marginBlockStart: d,
    marginBlockEnd: s,
    style: c,
    children: g,
    ...b
  }, m) => {
    const p = {
      display: "flex",
      flexDirection: "column",
      gap: G(n ?? "0"),
      ...t && { alignItems: Te[t] },
      ...o && !a && { justifyContent: Te[o] },
      ...a && { justifyContent: a },
      ...l === "fill" && { flex: "1 1 auto" },
      ...d && { marginBlockStart: d },
      ...s && { marginBlockEnd: s },
      ...c
    };
    return ie.createElement(
      e,
      { ...b, ref: m, style: p },
      g
    );
  }
);
j.displayName = "Stack";
const Re = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
  baseline: "baseline"
}, R = X(
  ({
    as: e = "div",
    space: n,
    rowSpace: t,
    alignBlock: o,
    alignInline: a,
    spread: l,
    shouldWrap: d,
    separator: s,
    grow: c = "hug",
    marginBlockStart: g,
    marginBlockEnd: b,
    borderRadius: m,
    overflow: h,
    elevation: p,
    style: y,
    children: v,
    ...D
  }, C) => {
    const P = G(n ?? "0"), L = {
      display: "flex",
      flexDirection: "row",
      columnGap: P,
      rowGap: t ?? P,
      ...o && { alignItems: Re[o] },
      ...a && !l && { justifyContent: Re[a] },
      ...l && { justifyContent: l },
      ...d && { flexWrap: "wrap" },
      ...c === "fill" && { flex: "1 1 auto" },
      ...g && { marginBlockStart: g },
      ...b && { marginBlockEnd: b },
      ...m && { borderRadius: m },
      ...h && { overflow: h },
      ...p && { boxShadow: p },
      ...y
    };
    let A = v;
    if (s) {
      const $ = ie.Children.toArray(v).filter(Boolean);
      A = $.map((H, W) => /* @__PURE__ */ f(_e, { children: [
        H,
        W < $.length - 1 && /* @__PURE__ */ r("span", { "aria-hidden": "true", children: s })
      ] }, W));
    }
    return ie.createElement(
      e,
      { ...D, ref: C, style: L },
      A
    );
  }
);
R.displayName = "Inline";
const B = X(
  ({
    as: e = "span",
    size: n,
    weight: t,
    color: o,
    fontFamily: a,
    letterSpacing: l,
    align: d,
    textTransform: s,
    lineHeight: c,
    opacity: g,
    style: b,
    children: m,
    ...h
  }, p) => {
    const y = {
      ...n && { fontSize: n },
      ...t && { fontWeight: t },
      ...o && { color: o },
      ...a && { fontFamily: a },
      ...l && { letterSpacing: l },
      ...d && { textAlign: d },
      ...s && { textTransform: s },
      ...c !== void 0 && { lineHeight: c },
      ...g !== void 0 && { opacity: g },
      ...b
    };
    return ie.createElement(
      e,
      { ...h, ref: p, style: y },
      m
    );
  }
);
B.displayName = "Text";
function rr(e) {
  if (e !== void 0)
    return typeof e == "number" ? `repeat(${e}, 1fr)` : e.map((n) => `${n}fr`).join(" ");
}
const Oe = X(
  ({
    as: e = "div",
    columns: n,
    gap: t,
    rowGap: o,
    marginBlockStart: a,
    marginBlockEnd: l,
    borderRadius: d,
    overflow: s,
    elevation: c,
    style: g,
    children: b,
    ...m
  }, h) => {
    const p = G(n ?? 1), y = G(t ?? "0"), v = {
      display: "grid",
      gridTemplateColumns: rr(p),
      gap: y,
      ...o && { rowGap: o },
      ...a && { marginBlockStart: a },
      ...l && { marginBlockEnd: l },
      ...d && { borderRadius: d },
      ...s && { overflow: s },
      ...c && { boxShadow: c },
      ...g
    };
    return ie.createElement(
      e,
      { ...m, ref: h, style: v },
      b
    );
  }
);
Oe.displayName = "Grid";
const ce = X(
  ({
    color: e,
    weight: n,
    size: t,
    backgroundColor: o,
    padding: a,
    paddingBlock: l,
    paddingBlockStart: d,
    paddingInline: s,
    borderRadius: c,
    textTransform: g,
    display: b,
    alignSelf: m,
    style: h,
    children: p,
    ...y
  }, v) => {
    const D = {
      ...e && { color: e },
      ...n && { fontWeight: n },
      ...t && { fontSize: t },
      ...o && { backgroundColor: o },
      ...a && { padding: a },
      ...l && { paddingBlock: l },
      ...d && { paddingBlockStart: d },
      ...s && { paddingInline: s },
      ...c && { borderRadius: c },
      ...g && { textTransform: g },
      ...b && { display: b },
      ...m && { alignSelf: m },
      ...h
    };
    return /* @__PURE__ */ r("a", { ref: v, style: D, ...y, children: p });
  }
);
ce.displayName = "Anchor";
const xe = X(
  ({ borderRadius: e, objectFit: n, width: t, height: o, fill: a, style: l, ...d }, s) => {
    const c = {
      display: "block",
      ...a ? { width: "100%", height: "100%" } : {
        ...t ? { width: t, flexShrink: 0 } : { width: "100%" },
        ...o && { height: o }
      },
      ...e && { borderRadius: e },
      ...n && { objectFit: n },
      ...l
    };
    return /* @__PURE__ */ r("img", { ref: s, style: c, ...d });
  }
);
xe.displayName = "Image";
const oe = X(
  ({
    backgroundColor: e,
    gradient: n,
    color: t,
    fontFamily: o,
    padding: a,
    paddingBlock: l,
    paddingInline: d,
    borderRadius: s,
    style: c,
    children: g,
    ...b
  }, m) => {
    const h = {
      border: "none",
      cursor: "pointer",
      ...n ? { background: n } : e ? { backgroundColor: e } : {},
      ...t && { color: t },
      ...o && { fontFamily: o },
      ...a && { padding: a },
      ...l && { paddingBlock: l },
      ...d && { paddingInline: d },
      ...s && { borderRadius: s },
      ...c
    };
    return /* @__PURE__ */ r("button", { ref: m, style: h, ...b, children: g });
  }
);
oe.displayName = "Button";
const Le = X(
  ({
    backgroundColor: e,
    borderColor: n,
    borderRadius: t,
    padding: o,
    paddingBlock: a,
    paddingInline: l,
    style: d,
    ...s
  }, c) => {
    const g = {
      ...e && { backgroundColor: e },
      ...n && { border: `1px solid ${n}` },
      ...t && { borderRadius: t },
      ...o && { padding: o },
      ...a && { paddingBlock: a },
      ...l && { paddingInline: l },
      ...d
    };
    return /* @__PURE__ */ r("input", { ref: c, style: g, ...s });
  }
);
Le.displayName = "TextInput";
const nr = X(
  ({ size: e, color: n, label: t, style: o, children: a, ...l }, d) => {
    const s = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      ...e && { width: e, height: e },
      ...n && { color: n },
      ...o
    };
    return /* @__PURE__ */ r(
      "span",
      {
        ref: d,
        role: t ? "img" : void 0,
        "aria-label": t,
        "aria-hidden": t ? void 0 : !0,
        style: s,
        ...l,
        children: a
      }
    );
  }
);
nr.displayName = "Icon";
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
}, tr = {
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
}, ve = {
  Tighter: "-0.05em",
  Tight: "-0.025em",
  Normal: "0",
  Wide: "0.05em",
  Wider: "0.075em",
  /** 0.1em — uppercase labels */
  Widest: "0.1em"
}, M = {
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
}, rt = {
  Thin: "1px",
  Medium: "2px",
  Thick: "4px",
  XThick: "8px"
}, nt = {
  Occupied: "var(--bbui-accent-occupied)",
  Vacant: "var(--bbui-accent-vacant)",
  Maintenance: "var(--bbui-accent-maintenance)",
  Reserved: "var(--bbui-accent-reserved)",
  Cleaning: "var(--bbui-accent-cleaning)",
  Primary: "var(--bbui-color-primary)",
  Error: "var(--bbui-color-error)"
}, se = {
  None: "none",
  Raised: "var(--bbui-shadow-raised)",
  Ambient: "var(--bbui-shadow-ambient)",
  Dropdown: "var(--bbui-shadow-dropdown)",
  Overlay: "var(--bbui-shadow-overlay)",
  CardHover: "var(--bbui-shadow-card-hover)"
}, me = {
  Brand: "var(--bbui-gradient-brand)"
}, tt = {
  Small: "640px",
  Medium: "768px",
  Large: "1024px",
  XLarge: "1280px",
  XXLarge: "1600px"
}, ae = {
  Dropdown: 100,
  Sticky: 200,
  Modal: 300,
  Banner: 400,
  FAB: 50
}, it = {
  Small: "1rem",
  Medium: "1.25rem",
  Large: "1.5rem",
  XLarge: "2rem",
  XXLarge: "2.5rem"
}, le = {
  NotAssessed: "var(--bbui-bloom-not-assessed)",
  Aware: "var(--bbui-bloom-aware)",
  Understands: "var(--bbui-bloom-understands)",
  Applies: "var(--bbui-bloom-applies)",
  Analyzes: "var(--bbui-bloom-analyzes)",
  Masters: "var(--bbui-bloom-masters)"
}, re = {
  NotAssessed: "NOT_ASSESSED",
  Aware: "AWARE",
  Understands: "UNDERSTANDS",
  Applies: "APPLIES",
  Analyzes: "ANALYZES",
  Masters: "MASTERS"
};
function ir(e) {
  switch (e) {
    case re.Masters:
      return le.Masters;
    case re.Analyzes:
      return le.Analyzes;
    case re.Applies:
      return le.Applies;
    case re.Understands:
      return le.Understands;
    case re.Aware:
      return le.Aware;
    default:
      return le.NotAssessed;
  }
}
function or(e) {
  return e >= 90 ? re.Masters : e >= 80 ? re.Analyzes : e >= 60 ? re.Applies : e >= 40 ? re.Understands : e >= 20 ? re.Aware : re.NotAssessed;
}
function ot(e) {
  return ir(or(e));
}
const lt = {
  correct: le.Masters,
  partial: le.Applies,
  incorrect: "var(--bbui-color-error)",
  skipped: "var(--bbui-color-subtlest)"
}, at = {
  up: le.Masters,
  down: "var(--bbui-color-error)",
  unchanged: "var(--bbui-color-subtlest)"
}, st = {
  Nova: "var(--bbui-persona-nova)",
  Maya: "var(--bbui-persona-maya)",
  Jordan: "var(--bbui-persona-jordan)",
  Custom: "var(--bbui-persona-custom)"
}, lr = {
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
}, He = X(
  ({ variant: e = "default", uppercase: n = !1, style: t, children: o, ...a }, l) => {
    const d = lr[e], s = {
      display: "inline-flex",
      alignItems: "center",
      lineHeight: 1,
      paddingBlock: i.XXSmall,
      paddingInline: n ? i.MediumLarge : i.Medium,
      borderRadius: M.Full,
      fontWeight: n ? E.Black : E.Medium,
      fontSize: n ? x.Micro : x.XXSmall,
      letterSpacing: n ? ve.Wider : void 0,
      textTransform: n ? "uppercase" : void 0,
      ...d,
      ...t
    };
    return /* @__PURE__ */ r("span", { ref: l, style: s, ...a, children: o });
  }
);
He.displayName = "Badge";
const ar = "2.5rem", sr = "1.5rem", ke = "1.25rem", Ae = i.XXSmall, dr = X(
  ({ checked: e, defaultChecked: n = !1, onChange: t, label: o, style: a, ...l }, d) => {
    const [s, c] = N(n), g = e !== void 0, b = g ? e : s, m = _(() => {
      const y = !b;
      g || c(y), t == null || t(y);
    }, [b, g, t]), h = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      width: ar,
      height: sr,
      borderRadius: M.Full,
      backgroundColor: b ? w.Brand : w.Neutral,
      border: "none",
      cursor: "pointer",
      padding: 0,
      transition: "background-color 150ms ease",
      ...a
    }, p = {
      position: "absolute",
      width: ke,
      height: ke,
      borderRadius: M.Full,
      backgroundColor: w.Default,
      transition: "left 150ms ease",
      left: b ? `calc(100% - ${ke} - ${Ae})` : Ae,
      boxShadow: "0 1px 3px rgba(0,0,0,.2)"
    };
    return /* @__PURE__ */ r(
      "button",
      {
        ref: d,
        type: "button",
        role: "switch",
        "aria-checked": b,
        "aria-label": o,
        onClick: m,
        style: h,
        ...l,
        children: /* @__PURE__ */ r("span", { style: p })
      }
    );
  }
);
dr.displayName = "Toggle";
const cr = X(
  ({
    backgroundColor: e,
    color: n,
    padding: t,
    paddingBlock: o,
    paddingInline: a,
    borderRadius: l,
    style: d,
    children: s,
    ...c
  }, g) => {
    const b = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      cursor: "pointer",
      border: "none",
      ...e && { backgroundColor: e },
      ...n && { color: n },
      ...t && { padding: t },
      ...o && { paddingBlock: o },
      ...a && { paddingInline: a },
      ...l && { borderRadius: l },
      ...d
    };
    return /* @__PURE__ */ r("a", { ref: g, style: b, ...c, children: s });
  }
);
cr.displayName = "LinkButton";
const Q = X(
  ({ label: e, size: n, color: t, backgroundColor: o, padding: a, style: l, children: d, ...s }, c) => {
    const g = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      cursor: "pointer",
      background: o ?? "none",
      ...n && { width: n, height: n },
      ...t && { color: t },
      ...a && { padding: a },
      ...l
    };
    return /* @__PURE__ */ r(
      "button",
      {
        ref: c,
        type: "button",
        "aria-label": e,
        style: g,
        ...s,
        children: d
      }
    );
  }
);
Q.displayName = "IconButton";
const br = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64
}, ur = {
  xsmall: "0.625rem",
  small: "0.75rem",
  medium: "0.875rem",
  large: "1rem",
  xlarge: "1.5rem"
}, gr = {
  xsmall: 6,
  small: 8,
  medium: 10,
  large: 12,
  xlarge: 16
}, hr = {
  online: "#22c55e",
  offline: "#bccbb9",
  busy: "#ba1a1a",
  focus: "#3b82f6"
};
function mr(e) {
  var t;
  const n = e.trim().split(/\s+/);
  return n.length >= 2 ? (n[0][0] + n[n.length - 1][0]).toUpperCase() : (((t = n[0]) == null ? void 0 : t[0]) ?? "").toUpperCase();
}
const pr = X(
  ({
    src: e,
    name: n,
    size: t = "medium",
    appearance: o = "circle",
    status: a,
    fallbackBackground: l = w.NeutralBold,
    fallbackColor: d = u.Subtle
  }, s) => {
    const [c, g] = N(!1), b = br[t], m = e && !c, h = n ? mr(n) : "", p = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: b,
      height: b,
      borderRadius: o === "circle" ? M.Full : M.XLarge,
      overflow: "hidden",
      flexShrink: 0,
      ...m ? {} : { backgroundColor: l }
    }, y = gr[t], v = a ? {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: y,
      height: y,
      borderRadius: M.Full,
      backgroundColor: hr[a],
      border: "2px solid #ffffff",
      boxSizing: "border-box"
    } : void 0;
    return /* @__PURE__ */ f("span", { ref: s, style: p, role: "img", "aria-label": n ?? "Avatar", children: [
      m ? /* @__PURE__ */ r(
        "img",
        {
          src: e,
          alt: n ?? "",
          onError: () => g(!0),
          style: { width: "100%", height: "100%", objectFit: "cover" }
        }
      ) : /* @__PURE__ */ r(
        "span",
        {
          style: {
            fontSize: ur[t],
            fontWeight: E.Semibold,
            color: d,
            lineHeight: 1,
            userSelect: "none"
          },
          children: h
        }
      ),
      a && /* @__PURE__ */ r("span", { style: v })
    ] });
  }
);
pr.displayName = "Avatar";
const fr = {
  xsmall: 16,
  small: 24,
  medium: 32,
  large: 48,
  xlarge: 64
}, yr = {
  xsmall: 2,
  small: 2,
  medium: 3,
  large: 3,
  xlarge: 4
}, Pe = X(
  ({ size: e = "medium", label: n = "Loading", color: t = u.Brand }, o) => {
    const a = we().replace(/:/g, ""), l = fr[e], d = yr[e], s = (l - d) / 2, c = 2 * Math.PI * s;
    return /* @__PURE__ */ f(
      "span",
      {
        ref: o,
        role: "status",
        "aria-label": n,
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: l,
          height: l
        },
        children: [
          /* @__PURE__ */ r("style", { children: `
          @keyframes bbui-spin-${a} {
            to { transform: rotate(360deg); }
          }
        ` }),
          /* @__PURE__ */ f(
            "svg",
            {
              width: l,
              height: l,
              viewBox: `0 0 ${l} ${l}`,
              fill: "none",
              style: {
                animation: `bbui-spin-${a} 0.8s linear infinite`
              },
              children: [
                /* @__PURE__ */ r(
                  "circle",
                  {
                    cx: l / 2,
                    cy: l / 2,
                    r: s,
                    stroke: t,
                    strokeWidth: d,
                    strokeLinecap: "round",
                    strokeDasharray: c,
                    strokeDashoffset: c * 0.7,
                    opacity: 0.9
                  }
                ),
                /* @__PURE__ */ r(
                  "circle",
                  {
                    cx: l / 2,
                    cy: l / 2,
                    r: s,
                    stroke: t,
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
Pe.displayName = "Spinner";
const vr = X(
  ({
    backgroundColor: e,
    borderColor: n,
    borderRadius: t,
    padding: o,
    paddingBlock: a,
    paddingInline: l,
    style: d,
    ...s
  }, c) => {
    const g = {
      fontFamily: "inherit",
      fontSize: "inherit",
      resize: "vertical",
      ...e && { backgroundColor: e },
      ...n ? { border: `1px solid ${n}` } : { border: "none" },
      ...t && { borderRadius: t },
      ...o && { padding: o },
      ...a && { paddingBlock: a },
      ...l && { paddingInline: l },
      ...d
    };
    return /* @__PURE__ */ r("textarea", { ref: c, style: g, ...s });
  }
);
vr.displayName = "TextArea";
function wr(e) {
  return "options" in e;
}
const je = X(
  ({
    options: e,
    placeholder: n,
    backgroundColor: t,
    borderColor: o,
    borderRadius: a,
    padding: l,
    paddingBlock: d,
    paddingInline: s,
    fontSize: c,
    color: g,
    style: b,
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
      ...t && { backgroundColor: t },
      ...o ? { border: `1px solid ${o}` } : { border: "none" },
      ...a && { borderRadius: a },
      ...l && { padding: l },
      ...d && { paddingBlock: d },
      ...s && { paddingInline: s },
      ...c && { fontSize: c },
      ...g && { color: g },
      ...b
    };
    return /* @__PURE__ */ f("select", { ref: h, style: p, ...m, children: [
      n && /* @__PURE__ */ r("option", { value: "", disabled: !0, hidden: !0, children: n }),
      e.map(
        (y) => wr(y) ? /* @__PURE__ */ r("optgroup", { label: y.label, children: y.options.map((v) => /* @__PURE__ */ r("option", { value: v.value, disabled: v.disabled, children: v.label }, v.value)) }, y.label) : /* @__PURE__ */ r("option", { value: y.value, disabled: y.disabled, children: y.label }, y.value)
      )
    ] });
  }
);
je.displayName = "Select";
const Sr = {
  small: { box: "1rem", font: x.XXSmall, gap: i.XSmall },
  medium: { box: "1.25rem", font: x.XSmall, gap: i.Medium },
  large: { box: "1.5rem", font: x.Small, gap: i.Medium }
}, xr = ({ size: e }) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    style: { width: e, height: e },
    children: /* @__PURE__ */ r(
      "path",
      {
        fillRule: "evenodd",
        d: "M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z",
        clipRule: "evenodd"
      }
    )
  }
), kr = X(
  ({ label: e, size: n = "medium", checked: t, disabled: o, style: a, id: l, ...d }, s) => {
    const c = we(), g = l ?? c, b = Sr[n], m = !!t, h = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: b.box,
      height: b.box,
      borderRadius: M.Small,
      flexShrink: 0,
      border: m ? "none" : `2px solid ${T.Outline}`,
      backgroundColor: m ? o ? u.Disabled : w.Brand : w.Transparent,
      color: u.Inverse,
      cursor: o ? "default" : "pointer",
      opacity: o ? 0.5 : 1
    };
    return /* @__PURE__ */ f(
      "label",
      {
        htmlFor: g,
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: b.gap,
          cursor: o ? "default" : "pointer",
          ...a
        },
        children: [
          /* @__PURE__ */ r(
            "input",
            {
              ref: s,
              id: g,
              type: "checkbox",
              checked: t,
              disabled: o,
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
          /* @__PURE__ */ r("span", { style: h, "aria-hidden": "true", children: m && /* @__PURE__ */ r(xr, { size: `calc(${b.box} - 4px)` }) }),
          e && /* @__PURE__ */ r(
            "span",
            {
              style: {
                fontSize: b.font,
                color: o ? u.Disabled : u.Default
              },
              children: e
            }
          )
        ]
      }
    );
  }
);
kr.displayName = "Checkbox";
const Xr = X(
  ({
    orientation: e = "horizontal",
    color: n = T.Default,
    spacing: t
  }, o) => /* @__PURE__ */ r(
    "hr",
    {
      ref: o,
      role: "separator",
      "aria-orientation": e,
      style: {
        border: "none",
        margin: 0,
        flexShrink: 0,
        ...e === "vertical" ? {
          borderLeft: `1px solid ${n}`,
          alignSelf: "stretch",
          ...t && { marginInline: t }
        } : {
          borderTop: `1px solid ${n}`,
          width: "100%",
          ...t && { marginBlock: t }
        }
      }
    }
  )
);
Xr.displayName = "Divider";
const Mr = () => /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ r("path", { fillRule: "evenodd", d: "M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z", clipRule: "evenodd" }) }), Cr = () => /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ r("path", { d: "M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" }) }), Lr = X(
  ({
    value: e,
    onChange: n,
    min: t = 0,
    max: o = 99,
    step: a = 1,
    disabled: l = !1,
    backgroundColor: d = w.Subtle,
    padding: s = i.XSmall
  }, c) => {
    const g = e - a >= t, b = e + a <= o;
    return /* @__PURE__ */ f(
      "div",
      {
        ref: c,
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: i.Medium,
          backgroundColor: d,
          borderRadius: M.Large,
          padding: s
        },
        children: [
          /* @__PURE__ */ r(
            Q,
            {
              label: "Decrease",
              onClick: () => g && n(e - a),
              disabled: l || !g,
              color: u.Brand,
              padding: i.XSmall,
              children: /* @__PURE__ */ r(Mr, {})
            }
          ),
          /* @__PURE__ */ r(
            B,
            {
              as: "span",
              size: x.Medium,
              weight: E.Bold,
              color: u.Default,
              style: { minWidth: "2rem", textAlign: "center" },
              children: e
            }
          ),
          /* @__PURE__ */ r(
            Q,
            {
              label: "Increase",
              onClick: () => b && n(e + a),
              disabled: l || !b,
              color: u.Brand,
              padding: i.XSmall,
              children: /* @__PURE__ */ r(Cr, {})
            }
          )
        ]
      }
    );
  }
);
Lr.displayName = "Stepper";
const Ke = "bbui-page-size", Me = "medium", Ye = Ue(null);
function Br(e) {
  typeof document > "u" || document.documentElement.setAttribute("data-page-size", e);
}
function Dr() {
  if (typeof localStorage > "u") return Me;
  const e = localStorage.getItem(Ke);
  return e === "small" || e === "medium" || e === "large" ? e : Me;
}
function dt({
  defaultSize: e,
  persist: n = !0,
  children: t
}) {
  const [o, a] = N(
    () => n ? Dr() : e ?? Me
  ), l = _(
    (s) => {
      a(s), n && typeof localStorage < "u" && localStorage.setItem(Ke, s);
    },
    [n]
  );
  Y(() => {
    Br(o);
  }, [o]);
  const d = pe(
    () => ({ pageSize: o, setPageSize: l }),
    [o, l]
  );
  return /* @__PURE__ */ r(Ye.Provider, { value: d, children: t });
}
function Ir() {
  const e = Ge(Ye);
  if (!e)
    throw new Error("usePageSize must be used inside <PageSizeProvider>");
  return e;
}
const zr = () => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    style: { width: "1.5rem", height: "1.5rem" },
    children: /* @__PURE__ */ r(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      }
    )
  }
), Er = () => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "1.5rem", height: "1.5rem" },
    children: /* @__PURE__ */ r(
      "path",
      {
        fillRule: "evenodd",
        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        clipRule: "evenodd"
      }
    )
  }
), Tr = () => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "1.25rem", height: "1.25rem" },
    children: /* @__PURE__ */ r(
      "path",
      {
        fillRule: "evenodd",
        d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
        clipRule: "evenodd"
      }
    )
  }
), Rr = X(
  ({
    logo: e,
    navigation: n = [],
    cta: t,
    linkColor: o = u.Subtle,
    ctaBackgroundColor: a = w.Dark,
    ctaColor: l = u.Inverse,
    ctaWeight: d = 500,
    ctaBorderRadius: s = M.Full,
    paddingInline: c = i.XXXLarge,
    paddingBlock: g = i.XLarge,
    linkGap: b = i.XXLarge,
    logoGap: m = i.Size3_5,
    mobileMenuBackground: h = w.Default,
    mobileMenuBorderColor: p = T.Default,
    mobileMenuBorderRadius: y = M.Large,
    mobileBreakpoint: v = 768
  }, D) => {
    const [C, P] = N(!1), [L, A] = N(!1);
    Y(() => {
      const I = () => A(window.innerWidth < v);
      return I(), window.addEventListener("resize", I), () => window.removeEventListener("resize", I);
    }, [v]);
    const $ = _((I) => {
      I.target.closest("[data-navbar-menu]") || P(!1);
    }, []);
    Y(() => (document.addEventListener("click", $), () => document.removeEventListener("click", $)), [$]);
    const H = ie.isValidElement(e) ? e : /* @__PURE__ */ r(
      xe,
      {
        src: e.src,
        alt: e.alt ?? "Logo",
        style: {
          width: e.width ?? 120,
          height: e.height ?? "auto"
        }
      }
    ), W = /* @__PURE__ */ r(te, { children: n.map((I, F) => /* @__PURE__ */ r(
      ce,
      {
        href: I.path,
        color: o,
        display: "block",
        style: { textDecoration: "none" },
        children: I.title
      },
      F
    )) }), k = t ? /* @__PURE__ */ r(
      ce,
      {
        href: t.path,
        backgroundColor: a,
        color: l,
        paddingBlock: i.Medium,
        paddingInline: i.Large,
        borderRadius: s,
        weight: d,
        display: "inline-block",
        style: { textDecoration: "none" },
        children: /* @__PURE__ */ f(R, { space: i.XSmall, alignBlock: "center", children: [
          /* @__PURE__ */ r(B, { as: "span", color: l, weight: d, children: t.label }),
          t.icon ?? /* @__PURE__ */ r(Tr, {})
        ] })
      }
    ) : null;
    return L ? /* @__PURE__ */ f(S, { as: "header", ref: D, "data-navbar-menu": !0, children: [
      /* @__PURE__ */ r(
        S,
        {
          as: "nav",
          paddingInline: i.Large,
          paddingBlock: g,
          children: /* @__PURE__ */ f(R, { alignBlock: "center", spread: "space-between", children: [
            /* @__PURE__ */ r(S, { children: H }),
            /* @__PURE__ */ r(
              oe,
              {
                onClick: () => P(!C),
                style: {
                  background: "none",
                  padding: 0,
                  color: u.Subtle
                },
                children: C ? /* @__PURE__ */ r(Er, {}) : /* @__PURE__ */ r(zr, {})
              }
            )
          ] })
        }
      ),
      C && /* @__PURE__ */ r(
        S,
        {
          backgroundColor: h,
          elevation: se.Raised,
          borderRadius: y,
          borderColor: p,
          borderSide: "all",
          padding: i.Large,
          style: { margin: i.Medium },
          children: /* @__PURE__ */ f("nav", { children: [
            /* @__PURE__ */ r("ul", { style: { listStyle: "none", padding: 0, margin: 0 }, children: n.map((I, F) => /* @__PURE__ */ r("li", { style: { paddingBlock: i.MediumLarge }, children: /* @__PURE__ */ r(
              ce,
              {
                href: I.path,
                color: o,
                display: "block",
                style: { textDecoration: "none" },
                children: I.title
              }
            ) }, F)) }),
            k && /* @__PURE__ */ r(S, { marginBlockStart: i.XXLarge, children: k })
          ] })
        }
      )
    ] }) : /* @__PURE__ */ r(S, { as: "header", ref: D, style: { width: "100%" }, children: /* @__PURE__ */ r(
      S,
      {
        as: "nav",
        paddingInline: c,
        paddingBlock: g,
        style: { width: "100%" },
        children: /* @__PURE__ */ f(R, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ r(S, { children: H }),
          /* @__PURE__ */ f(
            R,
            {
              space: b,
              alignBlock: "center",
              grow: "fill",
              style: { marginInlineStart: m },
              children: [
                /* @__PURE__ */ r(
                  R,
                  {
                    space: b,
                    alignBlock: "center",
                    grow: "fill",
                    alignInline: "center",
                    children: W
                  }
                ),
                k && /* @__PURE__ */ r(S, { children: k })
              ]
            }
          )
        ] })
      }
    ) });
  }
);
Rr.displayName = "Navbar";
const $e = () => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "1.25rem", height: "1.25rem" },
    children: /* @__PURE__ */ r(
      "path",
      {
        fillRule: "evenodd",
        d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
        clipRule: "evenodd"
      }
    )
  }
), Ar = X(
  ({
    title: e,
    subtitle: n,
    badge: t,
    actions: o = [],
    image: a,
    children: l,
    titleSize: d = x.XXXLarge,
    titleSizeLarge: s = x.Huge,
    titleWeight: c = E.ExtraBold,
    titleColor: g = u.Default,
    subtitleSize: b = x.Small,
    subtitleColor: m = u.Subtlest,
    primaryCtaBackground: h = w.Dark,
    primaryCtaColor: p = u.Inverse,
    primaryCtaBorderRadius: y = M.Full,
    primaryCtaWeight: v = 500,
    secondaryCtaColor: D = u.Subtle,
    secondaryCtaWeight: C = 500,
    ctaGap: P = i.MediumLarge,
    paddingBlock: L = i.Size7,
    paddingInline: A = i.XXXLarge,
    contentGap: $ = i.XHuge,
    textGap: H = i.XLarge,
    textMaxWidth: W = "36rem",
    gradient: k,
    breakpoint: I = 768
  }, F) => {
    const [K, O] = N(!1);
    Y(() => {
      const ee = () => O(window.innerWidth >= I);
      return ee(), window.addEventListener("resize", ee), () => window.removeEventListener("resize", ee);
    }, [I]);
    const V = (k == null ? void 0 : k.enabled) !== !1, U = (k == null ? void 0 : k.css) ?? "linear-gradient(143.6deg, rgba(192,132,252,0) 20.79%, rgba(232,121,249,0.26) 40.92%, rgba(204,171,238,0) 70.35%)", z = (k == null ? void 0 : k.height) ?? "580px", J = (t == null ? void 0 : t.borderColor) ?? T.Default, q = t ? /* @__PURE__ */ r(
      ce,
      {
        href: t.path ?? "#",
        borderRadius: M.Full,
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
          /* @__PURE__ */ r(
            B,
            {
              as: "span",
              size: x.XSmall,
              color: t.labelColor ?? u.Inverse,
              style: {
                backgroundColor: t.labelBackgroundColor ?? w.Accent,
                borderRadius: M.Full,
                padding: `${i.XSmall} ${i.MediumLarge}`
              },
              children: t.label
            }
          ),
          /* @__PURE__ */ f(R, { space: i.XXSmall, alignBlock: "center", children: [
            /* @__PURE__ */ r(B, { as: "span", size: x.XSmall, children: t.text }),
            t.icon ?? /* @__PURE__ */ r($e, {})
          ] })
        ] })
      }
    ) : null, Z = o.length > 0 ? /* @__PURE__ */ r(R, { space: P, alignBlock: "center", shouldWrap: !0, children: o.map((ee, he) => {
      const ge = (ee.variant ?? (he === 0 ? "primary" : "secondary")) === "primary", Be = ge ? v : C;
      return /* @__PURE__ */ r(
        ce,
        {
          href: ee.path,
          backgroundColor: ge ? h : void 0,
          color: ge ? p : D,
          paddingBlock: i.Medium,
          paddingInline: i.Large,
          borderRadius: ge ? y : void 0,
          weight: Be,
          display: "inline-block",
          style: { textDecoration: "none" },
          children: /* @__PURE__ */ f(R, { space: i.XSmall, alignBlock: "center", children: [
            /* @__PURE__ */ r(
              B,
              {
                as: "span",
                color: ge ? p : D,
                weight: Be,
                children: ee.label
              }
            ),
            ee.icon ?? /* @__PURE__ */ r($e, {})
          ] })
        },
        he
      );
    }) }) : null, ue = /* @__PURE__ */ f(
      j,
      {
        space: H,
        style: { maxWidth: W, flexShrink: 0 },
        children: [
          q,
          /* @__PURE__ */ r(
            B,
            {
              as: "h1",
              size: K ? s : d,
              weight: c,
              color: g,
              lineHeight: 1.2,
              children: e
            }
          ),
          n && /* @__PURE__ */ r(
            B,
            {
              as: "p",
              color: m,
              size: b,
              lineHeight: 1.6,
              children: n
            }
          ),
          l,
          Z
        ]
      }
    ), de = a && K ? /* @__PURE__ */ r(S, { style: { flex: "1 1 0%", minWidth: 0 }, children: /* @__PURE__ */ r(
      xe,
      {
        src: a.src,
        alt: a.alt ?? "",
        style: { maxWidth: a.maxWidth ?? "36rem" }
      }
    ) }) : null;
    return /* @__PURE__ */ f(S, { as: "section", ref: F, style: { position: "relative" }, children: [
      V && /* @__PURE__ */ r(
        "div",
        {
          "aria-hidden": "true",
          style: {
            position: "absolute",
            inset: 0,
            height: z,
            background: U,
            filter: "blur(40px)",
            pointerEvents: "none"
          }
        }
      ),
      /* @__PURE__ */ r(
        S,
        {
          style: { position: "relative", overflow: "hidden" },
          maxWidth: "1280px",
          paddingInline: A,
          paddingBlock: L,
          children: K ? /* @__PURE__ */ f(R, { space: $, alignBlock: "center", children: [
            ue,
            de
          ] }) : /* @__PURE__ */ r(j, { space: $, children: ue })
        }
      )
    ] });
  }
);
Ar.displayName = "HeroSection";
const $r = X(
  ({
    padding: e = i.Large,
    backgroundColor: n = w.Default,
    borderRadius: t = M.XXLarge,
    borderColor: o = T.Default,
    elevation: a = se.Ambient,
    accentColor: l,
    accentWidth: d = "8px",
    header: s,
    footer: c,
    children: g
  }, b) => /* @__PURE__ */ r(
    S,
    {
      ref: b,
      backgroundColor: n,
      borderRadius: t,
      borderColor: o,
      borderSide: "all",
      elevation: a,
      overflow: "hidden",
      style: {
        ...l && {
          borderTop: `${d} solid ${l}`
        }
      },
      children: /* @__PURE__ */ f(j, { children: [
        s && /* @__PURE__ */ r(
          S,
          {
            padding: e,
            style: { borderBottom: `1px solid ${o}` },
            children: s
          }
        ),
        /* @__PURE__ */ r(S, { padding: e, children: g }),
        c && /* @__PURE__ */ r(
          S,
          {
            padding: e,
            style: { borderTop: `1px solid ${o}` },
            children: c
          }
        )
      ] })
    }
  )
);
$r.displayName = "Card";
const Nr = X(
  ({
    label: e,
    helperText: n,
    errorText: t,
    id: o,
    labelColor: a = u.Default,
    labelSize: l = x.XSmall,
    labelWeight: d = E.Medium,
    labelTextTransform: s,
    labelLetterSpacing: c,
    inputBackground: g = w.Default,
    inputBorderColor: b = T.Input,
    inputBorderRadius: m = M.Medium,
    inputBorderSide: h = "all",
    inputPadding: p = i.Medium,
    startAdornment: y,
    endAdornment: v,
    name: D,
    type: C,
    placeholder: P,
    value: L,
    defaultValue: A,
    disabled: $,
    readOnly: H,
    required: W,
    autoFocus: k,
    autoComplete: I,
    onChange: F,
    onBlur: K,
    onFocus: O
  }, V) => {
    const U = we(), z = o ?? U, J = `${z}-helper`, q = `${z}-error`, Z = !!t, be = Z ? T.Error : b, ue = h === "bottom", de = ue || !!(y || v), ee = /* @__PURE__ */ r(
      Le,
      {
        ref: V,
        id: z,
        name: D,
        type: C,
        placeholder: P,
        value: L,
        defaultValue: A,
        disabled: $,
        readOnly: H,
        required: W,
        autoFocus: k,
        autoComplete: I,
        onChange: F,
        onBlur: K,
        onFocus: O,
        backgroundColor: de ? "transparent" : g,
        borderColor: de ? void 0 : be,
        borderRadius: de ? void 0 : m,
        padding: p,
        style: {
          width: "100%",
          ...de ? { flex: "1 1 auto", minWidth: 0 } : {}
        },
        "aria-describedby": Z ? q : n ? J : void 0,
        "aria-invalid": Z || void 0
      }
    ), he = de ? /* @__PURE__ */ f("div", { style: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      backgroundColor: g,
      ...ue ? { borderBottom: `2px solid ${be}` } : { border: `1px solid ${be}`, borderRadius: m }
    }, children: [
      y,
      ee,
      v
    ] }) : ee;
    return /* @__PURE__ */ f(j, { space: i.XSmall, children: [
      e && /* @__PURE__ */ r(
        "label",
        {
          htmlFor: z,
          style: {
            fontSize: l,
            fontWeight: d,
            color: a,
            textTransform: s,
            letterSpacing: c
          },
          children: e
        }
      ),
      he,
      Z && /* @__PURE__ */ r(B, { as: "span", size: x.XXSmall, color: u.Error, id: q, children: t }),
      !Z && n && /* @__PURE__ */ r(B, { as: "span", size: x.XXSmall, color: u.Subtle, id: J, children: n })
    ] });
  }
);
Nr.displayName = "TextField";
const Wr = {
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
}, Fr = () => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "1rem", height: "1rem" },
    children: /* @__PURE__ */ r(
      "path",
      {
        fillRule: "evenodd",
        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        clipRule: "evenodd"
      }
    )
  }
), Or = X(
  ({ variant: e = "info", icon: n, dismissible: t, onDismiss: o, children: a }, l) => {
    const d = Wr[e];
    return /* @__PURE__ */ r(
      S,
      {
        ref: l,
        role: "alert",
        padding: i.MediumLarge,
        borderRadius: M.Medium,
        style: {
          backgroundColor: d.bg,
          borderLeft: `4px solid ${d.border}`,
          position: "relative",
          zIndex: ae.Banner
        },
        children: /* @__PURE__ */ f(R, { space: i.Medium, alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ f(R, { space: i.Medium, alignBlock: "center", grow: "fill", children: [
            n && /* @__PURE__ */ r(S, { style: { color: d.text, flexShrink: 0 }, children: n }),
            /* @__PURE__ */ r(B, { as: "span", size: x.XSmall, color: d.text, children: a })
          ] }),
          t && /* @__PURE__ */ r(
            Q,
            {
              label: "Dismiss",
              onClick: o,
              color: d.text,
              padding: i.XXSmall,
              children: /* @__PURE__ */ r(Fr, {})
            }
          )
        ] })
      }
    );
  }
);
Or.displayName = "Banner";
const Ve = X(
  ({
    sections: e,
    activeId: n,
    onSelect: t,
    activeColor: o = u.Brand,
    activeBackground: a = w.Subtle
  }, l) => /* @__PURE__ */ r(j, { ref: l, as: "nav", space: i.Small, children: e.map((d, s) => /* @__PURE__ */ f(j, { space: i.XXSmall, children: [
    d.title && /* @__PURE__ */ r(S, { paddingInline: i.Medium, paddingBlock: i.XSmall, children: /* @__PURE__ */ r(
      B,
      {
        as: "span",
        size: x.XXSmall,
        weight: 600,
        color: u.Subtlest,
        textTransform: "uppercase",
        children: d.title
      }
    ) }),
    /* @__PURE__ */ r(j, { as: "ul", style: { listStyle: "none", padding: 0, margin: 0 }, children: d.items.map((c) => {
      const g = c.id === n;
      return /* @__PURE__ */ r("li", { children: /* @__PURE__ */ r(
        oe,
        {
          disabled: c.disabled,
          onClick: () => t == null ? void 0 : t(c.id),
          borderRadius: M.Medium,
          color: c.disabled ? u.Disabled : g ? o : u.Default,
          backgroundColor: g ? a : w.Transparent,
          paddingBlock: i.Medium,
          paddingInline: i.MediumLarge,
          style: {
            width: "100%",
            fontSize: x.XSmall,
            textAlign: "left",
            cursor: c.disabled ? "default" : "pointer"
          },
          children: /* @__PURE__ */ f(R, { space: i.Medium, alignBlock: "center", children: [
            c.icon && /* @__PURE__ */ r(S, { style: { flexShrink: 0 }, children: c.icon }),
            /* @__PURE__ */ r(B, { as: "span", size: x.XSmall, style: { color: "inherit" }, children: c.label })
          ] })
        }
      ) }, c.id);
    }) }),
    s < e.length - 1 && /* @__PURE__ */ r(
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
Ve.displayName = "Menu";
const Hr = X(
  ({
    tabs: e,
    activeId: n,
    defaultActiveId: t,
    onChange: o,
    variant: a = "underline",
    activeColor: l = u.Brand,
    inactiveColor: d = u.Subtle,
    pillBackground: s = w.Subtle,
    activePillBackground: c = w.Default,
    panelPadding: g = i.Large
  }, b) => {
    var P;
    const [m, h] = N(
      t ?? ((P = e[0]) == null ? void 0 : P.id)
    ), p = n !== void 0, y = p ? n : m, v = (L) => {
      p || h(L), o == null || o(L);
    }, D = e.find((L) => L.id === y);
    return /* @__PURE__ */ f(S, { ref: b, children: [
      a === "pill" ? /* @__PURE__ */ r(
        R,
        {
          role: "tablist",
          space: i.XSmall,
          alignBlock: "center",
          style: {
            backgroundColor: s,
            padding: i.Small,
            borderRadius: M.XXLarge,
            width: "fit-content"
          },
          children: e.map((L) => {
            const A = L.id === y;
            return /* @__PURE__ */ r(
              oe,
              {
                role: "tab",
                "aria-selected": A,
                "aria-controls": `tabpanel-${L.id}`,
                id: `tab-${L.id}`,
                disabled: L.disabled,
                onClick: () => v(L.id),
                paddingBlock: i.Medium,
                paddingInline: i.XXLarge,
                borderRadius: M.XLarge,
                color: A ? u.Default : L.disabled ? u.Disabled : d,
                backgroundColor: A ? c : w.Transparent,
                style: {
                  fontWeight: A ? E.Bold : E.Medium,
                  fontSize: x.XSmall,
                  boxShadow: A ? se.Raised : "none",
                  cursor: L.disabled ? "default" : "pointer"
                },
                children: L.label
              },
              L.id
            );
          })
        }
      ) : /* @__PURE__ */ r(
        R,
        {
          as: "div",
          role: "tablist",
          space: i.None,
          style: {
            borderBottom: `1px solid ${T.Default}`
          },
          children: e.map((L) => {
            const A = L.id === y;
            return /* @__PURE__ */ r(
              oe,
              {
                role: "tab",
                "aria-selected": A,
                "aria-controls": `tabpanel-${L.id}`,
                id: `tab-${L.id}`,
                disabled: L.disabled,
                onClick: () => v(L.id),
                paddingBlock: i.Medium,
                paddingInline: i.Large,
                borderRadius: M.None,
                color: A ? l : L.disabled ? u.Disabled : d,
                style: {
                  background: "none",
                  fontWeight: A ? E.Semibold : E.Regular,
                  fontSize: x.XSmall,
                  borderBottom: A ? `2px solid ${l}` : "2px solid transparent",
                  marginBottom: "-1px",
                  cursor: L.disabled ? "default" : "pointer"
                },
                children: L.label
              },
              L.id
            );
          })
        }
      ),
      D && /* @__PURE__ */ r(
        S,
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
Hr.displayName = "Tabs";
const Pr = X(
  ({
    title: e,
    subtitle: n,
    breadcrumbs: t,
    actions: o,
    titleSize: a = x.XLarge,
    titleWeight: l = E.Bold,
    titleColor: d = u.Default,
    subtitleColor: s = u.Subtle,
    breadcrumbLinkColor: c = u.Link,
    borderColor: g = T.Default,
    paddingBlock: b = i.Large
  }, m) => /* @__PURE__ */ r(
    S,
    {
      ref: m,
      as: "header",
      paddingBlock: b,
      style: {
        borderBottom: `1px solid ${g}`
      },
      children: /* @__PURE__ */ f(j, { space: i.Medium, children: [
        t && t.length > 0 && /* @__PURE__ */ r(R, { space: i.XSmall, alignBlock: "center", children: t.map((h, p) => /* @__PURE__ */ f(ie.Fragment, { children: [
          p > 0 && /* @__PURE__ */ r(B, { as: "span", color: u.Disabled, size: x.XSmall, children: "/" }),
          h.href ? /* @__PURE__ */ r(
            ce,
            {
              href: h.href,
              color: c,
              size: x.XSmall,
              style: { textDecoration: "none" },
              children: h.label
            }
          ) : /* @__PURE__ */ r(B, { as: "span", size: x.XSmall, color: u.Subtlest, children: h.label })
        ] }, p)) }),
        /* @__PURE__ */ f(R, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ f(j, { space: i.XXSmall, children: [
            /* @__PURE__ */ r(B, { as: "h1", size: a, weight: l, color: d, children: e }),
            n && /* @__PURE__ */ r(B, { as: "p", size: x.XSmall, color: s, children: n })
          ] }),
          o && /* @__PURE__ */ r(R, { space: i.Medium, alignBlock: "center", children: o })
        ] })
      ] })
    }
  )
);
Pr.displayName = "Header";
const jr = {
  XSmall: "320px",
  Small: "416px",
  Medium: "512px",
  Large: "704px",
  XLarge: "960px",
  Full: "min(96vw, 1440px)"
}, Kr = () => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "1.25rem", height: "1.25rem" },
    children: /* @__PURE__ */ r(
      "path",
      {
        fillRule: "evenodd",
        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        clipRule: "evenodd"
      }
    )
  }
), Yr = X(
  ({ open: e, onClose: n, title: t, children: o, footer: a, size: l = jr.Medium }, d) => {
    const s = _(
      (c) => {
        c.key === "Escape" && n();
      },
      [n]
    );
    return Y(() => {
      if (e)
        return document.addEventListener("keydown", s), document.body.style.overflow = "hidden", () => {
          document.removeEventListener("keydown", s), document.body.style.overflow = "";
        };
    }, [e, s]), e ? Ce(
      /* @__PURE__ */ r(
        S,
        {
          style: {
            position: "fixed",
            inset: 0,
            zIndex: ae.Modal,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: w.Overlay
          },
          onClick: (c) => {
            c.target === c.currentTarget && n();
          },
          children: /* @__PURE__ */ r(
            S,
            {
              ref: d,
              role: "dialog",
              "aria-modal": "true",
              "aria-label": t,
              backgroundColor: w.Default,
              borderRadius: M.XLarge,
              elevation: se.Overlay,
              overflow: "hidden",
              style: {
                width: "100%",
                maxWidth: l,
                maxHeight: "85vh",
                display: "flex",
                flexDirection: "column"
              },
              children: /* @__PURE__ */ f(j, { children: [
                t && /* @__PURE__ */ r(
                  S,
                  {
                    padding: i.Large,
                    style: { borderBottom: `1px solid ${T.Default}` },
                    children: /* @__PURE__ */ f(R, { alignBlock: "center", spread: "space-between", children: [
                      /* @__PURE__ */ r(B, { as: "h2", size: x.Large, weight: E.Semibold, color: u.Default, children: t }),
                      /* @__PURE__ */ r(Q, { label: "Close", onClick: n, color: u.Subtle, children: /* @__PURE__ */ r(Kr, {}) })
                    ] })
                  }
                ),
                /* @__PURE__ */ r(S, { padding: i.Large, overflow: "auto", style: { flex: "1 1 auto" }, children: o }),
                a && /* @__PURE__ */ r(
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
Yr.displayName = "Modal";
const Vr = X(
  ({ trigger: e, sections: n, activeId: t, onSelect: o }, a) => {
    const [l, d] = N(!1), s = ne(null), c = () => d((h) => !h), g = (h) => {
      o == null || o(h), d(!1);
    }, b = _((h) => {
      h.key === "Escape" && d(!1);
    }, []), m = _((h) => {
      s.current && !s.current.contains(h.target) && d(!1);
    }, []);
    return Y(() => {
      if (l)
        return document.addEventListener("keydown", b), document.addEventListener("mousedown", m), () => {
          document.removeEventListener("keydown", b), document.removeEventListener("mousedown", m);
        };
    }, [l, b, m]), /* @__PURE__ */ f(
      S,
      {
        ref: (h) => {
          s.current = h, typeof a == "function" ? a(h) : a && (a.current = h);
        },
        style: { position: "relative", display: "inline-block" },
        children: [
          /* @__PURE__ */ r(
            R,
            {
              style: { cursor: "pointer" },
              onClick: c,
              alignBlock: "center",
              children: e
            }
          ),
          l && /* @__PURE__ */ r(
            S,
            {
              backgroundColor: w.Default,
              borderColor: T.Default,
              borderSide: "all",
              borderRadius: M.Large,
              elevation: se.Dropdown,
              padding: i.XSmall,
              style: {
                position: "absolute",
                top: "100%",
                right: 0,
                marginTop: i.XSmall,
                minWidth: "12rem",
                zIndex: ae.Dropdown
              },
              children: /* @__PURE__ */ r(
                Ve,
                {
                  sections: n,
                  activeId: t,
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
Vr.displayName = "DropdownMenu";
const _r = () => /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ r("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), Ur = () => /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ r("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), Gr = X(
  ({
    sections: e,
    activeId: n,
    onSelect: t,
    header: o,
    footer: a,
    collapsed: l = !1,
    onToggleCollapse: d,
    width: s = "16rem",
    collapsedWidth: c = "4rem",
    activeColor: g = u.Brand,
    activeBackground: b = w.Subtle,
    borderColor: m = T.Default
  }, h) => /* @__PURE__ */ f(
    S,
    {
      ref: h,
      as: "aside",
      backgroundColor: w.Default,
      style: {
        width: l ? c : s,
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
        o && /* @__PURE__ */ r(
          S,
          {
            padding: i.Large,
            style: { borderBottom: `1px solid ${m}` },
            children: o
          }
        ),
        /* @__PURE__ */ r(
          j,
          {
            space: i.Small,
            grow: "fill",
            style: { padding: i.Medium, overflow: "auto" },
            children: e.map((p, y) => /* @__PURE__ */ f(j, { space: i.XXSmall, children: [
              p.title && !l && /* @__PURE__ */ r(S, { paddingInline: i.Medium, paddingBlock: i.XSmall, children: /* @__PURE__ */ r(
                B,
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
                const D = v.id === n;
                return /* @__PURE__ */ f(
                  oe,
                  {
                    onClick: () => t == null ? void 0 : t(v.id),
                    title: l ? v.label : void 0,
                    borderRadius: M.Medium,
                    color: D ? g : u.Default,
                    backgroundColor: D ? b : w.Transparent,
                    paddingBlock: i.Medium,
                    paddingInline: i.MediumLarge,
                    style: {
                      width: "100%",
                      fontSize: x.XSmall,
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      gap: l ? 0 : i.Medium,
                      justifyContent: l ? "center" : "flex-start"
                    },
                    children: [
                      v.icon && /* @__PURE__ */ r(S, { style: { flexShrink: 0 }, children: v.icon }),
                      !l && /* @__PURE__ */ f(te, { children: [
                        /* @__PURE__ */ r(B, { as: "span", style: { flex: "1 1 auto", color: "inherit" }, children: v.label }),
                        v.badge && /* @__PURE__ */ r(He, { variant: v.badgeVariant ?? "default", children: v.badge })
                      ] })
                    ]
                  },
                  v.id
                );
              })
            ] }, y))
          }
        ),
        d && /* @__PURE__ */ r(
          S,
          {
            padding: i.Medium,
            style: { borderTop: `1px solid ${m}` },
            children: /* @__PURE__ */ r(
              Q,
              {
                label: l ? "Expand sidebar" : "Collapse sidebar",
                onClick: d,
                color: u.Subtle,
                padding: i.XSmall,
                children: l ? /* @__PURE__ */ r(Ur, {}) : /* @__PURE__ */ r(_r, {})
              }
            )
          }
        ),
        a && /* @__PURE__ */ r(
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
Gr.displayName = "Sidebar";
const Jr = () => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "1.25rem", height: "1.25rem" },
    children: /* @__PURE__ */ r(
      "path",
      {
        fillRule: "evenodd",
        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        clipRule: "evenodd"
      }
    )
  }
), Zr = X(
  ({
    open: e,
    onClose: n,
    title: t,
    side: o = "right",
    mode: a = "overlay",
    width: l = "24rem",
    children: d
  }, s) => {
    const c = _(
      (b) => {
        b.key === "Escape" && n();
      },
      [n]
    );
    if (Y(() => {
      if (e)
        return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
    }, [e, c]), !e) return null;
    const g = /* @__PURE__ */ f(
      S,
      {
        ref: s,
        backgroundColor: w.Default,
        elevation: se.Overlay,
        style: {
          position: "fixed",
          top: 0,
          bottom: 0,
          [o]: 0,
          width: l,
          zIndex: ae.Modal,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden"
        },
        children: [
          t && /* @__PURE__ */ r(
            S,
            {
              padding: i.Large,
              style: { borderBottom: `1px solid ${T.Default}` },
              children: /* @__PURE__ */ f(R, { alignBlock: "center", spread: "space-between", children: [
                /* @__PURE__ */ r(B, { as: "h2", size: x.Large, weight: E.Semibold, color: u.Default, children: t }),
                /* @__PURE__ */ r(Q, { label: "Close panel", onClick: n, color: u.Subtle, children: /* @__PURE__ */ r(Jr, {}) })
              ] })
            }
          ),
          /* @__PURE__ */ r(S, { padding: i.Large, overflow: "auto", style: { flex: "1 1 auto" }, children: d })
        ]
      }
    );
    return a === "overlay" ? Ce(
      /* @__PURE__ */ r(
        S,
        {
          style: {
            position: "fixed",
            inset: 0,
            zIndex: ae.Modal,
            backgroundColor: w.Overlay
          },
          onClick: (b) => {
            b.target === b.currentTarget && n();
          },
          children: g
        }
      ),
      document.body
    ) : g;
  }
);
Zr.displayName = "Panel";
const qr = X(
  ({
    padding: e = i.Large,
    color: n = u.Subtle,
    borderColor: t = T.Default,
    children: o
  }, a) => /* @__PURE__ */ r(
    S,
    {
      ref: a,
      as: "aside",
      padding: e,
      style: {
        borderLeft: `3px solid ${t}`,
        color: n
      },
      children: o
    }
  )
);
qr.displayName = "Aside";
const Qr = X(
  ({
    topNav: e,
    sideNav: n,
    mobileNav: t,
    backgroundColor: o = w.Surface,
    children: a
  }, l) => {
    const s = Se() === "mobile";
    return /* @__PURE__ */ f(
      S,
      {
        ref: l,
        style: {
          minHeight: "100vh",
          backgroundColor: o,
          display: "flex"
        },
        children: [
          !s && n,
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
                e,
                /* @__PURE__ */ r(
                  S,
                  {
                    as: "main",
                    style: {
                      flex: "1 1 auto",
                      overflow: "auto",
                      paddingBlockEnd: s && t ? i.XXHuge : void 0
                    },
                    children: a
                  }
                )
              ]
            }
          ),
          s && t
        ]
      }
    );
  }
);
Qr.displayName = "Layout";
const en = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
function Ne(e, n) {
  return e.getFullYear() === n.getFullYear() && e.getMonth() === n.getMonth() && e.getDate() === n.getDate();
}
function rn(e, n) {
  return new Date(e, n + 1, 0).getDate();
}
function nn(e, n) {
  return new Date(e, n, 1).getDay();
}
const tn = () => /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ r("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), on = () => /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ r("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), ln = [
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
], an = X(
  ({
    value: e,
    defaultValue: n,
    onChange: t,
    min: o,
    max: a,
    selectedColor: l = u.Inverse,
    selectedBackground: d = w.Brand
  }, s) => {
    const c = /* @__PURE__ */ new Date(), [g, b] = N(n), m = e !== void 0, h = m ? e : g, [p, y] = N(
      (h ?? c).getFullYear()
    ), [v, D] = N(
      (h ?? c).getMonth()
    ), C = pe(() => rn(p, v), [p, v]), P = pe(() => nn(p, v), [p, v]), L = () => {
      v === 0 ? (D(11), y((k) => k - 1)) : D((k) => k - 1);
    }, A = () => {
      v === 11 ? (D(0), y((k) => k + 1)) : D((k) => k + 1);
    }, $ = (k) => {
      const I = new Date(p, v, k);
      m || b(I), t == null || t(I);
    }, H = (k) => {
      const I = new Date(p, v, k);
      return !!(o && I < new Date(o.getFullYear(), o.getMonth(), o.getDate()) || a && I > new Date(a.getFullYear(), a.getMonth(), a.getDate()));
    }, W = [];
    for (let k = 0; k < P; k++)
      W.push(/* @__PURE__ */ r(S, {}, `empty-${k}`));
    for (let k = 1; k <= C; k++) {
      const I = new Date(p, v, k), F = h ? Ne(I, h) : !1, K = Ne(I, c), O = H(k);
      W.push(
        /* @__PURE__ */ r(
          oe,
          {
            disabled: O,
            onClick: () => $(k),
            borderRadius: M.Medium,
            style: {
              width: "2.25rem",
              height: "2.25rem",
              padding: 0,
              fontSize: x.XSmall,
              fontWeight: F ? E.Semibold : E.Regular,
              backgroundColor: F ? d : "transparent",
              color: F ? l : O ? u.Disabled : u.Default,
              border: K && !F ? `1px solid ${T.Default}` : "none",
              cursor: O ? "default" : "pointer"
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
        borderRadius: M.XLarge,
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
                /* @__PURE__ */ r(Q, { label: "Previous month", onClick: L, color: u.Subtle, padding: i.XSmall, children: /* @__PURE__ */ r(tn, {}) }),
                /* @__PURE__ */ f(B, { as: "span", size: x.XSmall, weight: E.Semibold, color: u.Default, children: [
                  ln[v],
                  " ",
                  p
                ] }),
                /* @__PURE__ */ r(Q, { label: "Next month", onClick: A, color: u.Subtle, padding: i.XSmall, children: /* @__PURE__ */ r(on, {}) })
              ]
            }
          ),
          /* @__PURE__ */ f(Oe, { columns: 7, gap: i.XXSmall, children: [
            en.map((k) => /* @__PURE__ */ r(
              B,
              {
                as: "span",
                size: x.XXSmall,
                weight: E.Medium,
                color: u.Subtlest,
                align: "center",
                style: { padding: `${i.XSmall} 0` },
                children: k
              },
              k
            )),
            W
          ] })
        ]
      }
    );
  }
);
an.displayName = "Calendar";
const sn = X(
  ({ header: e, description: n, image: t, primaryAction: o, secondaryAction: a }, l) => /* @__PURE__ */ f(
    j,
    {
      ref: l,
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
        t && /* @__PURE__ */ r("div", { children: t }),
        /* @__PURE__ */ f(j, { space: i.Medium, alignInline: "center", children: [
          /* @__PURE__ */ r(
            B,
            {
              as: "h3",
              fontFamily: tr.Display,
              size: x.XLarge,
              weight: E.Bold,
              color: u.Default,
              children: e
            }
          ),
          n && /* @__PURE__ */ r(B, { as: "p", size: x.XSmall, color: u.Subtle, lineHeight: 1.6, children: n })
        ] }),
        (o || a) && /* @__PURE__ */ f(R, { space: i.Medium, alignBlock: "center", children: [
          o,
          a
        ] })
      ]
    }
  )
);
sn.displayName = "EmptyState";
const dn = ({ order: e }) => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    style: {
      width: "0.75rem",
      height: "0.75rem",
      marginInlineStart: "0.25rem",
      opacity: e ? 1 : 0.3
    },
    children: e === "ASC" ? /* @__PURE__ */ r("path", { d: "M8 3l4 5H4l4-5z" }) : e === "DESC" ? /* @__PURE__ */ r("path", { d: "M8 13l4-5H4l4 5z" }) : /* @__PURE__ */ f(te, { children: [
      /* @__PURE__ */ r("path", { d: "M8 3l3 4H5l3-4z" }),
      /* @__PURE__ */ r("path", { d: "M8 13l3-4H5l3 4z" })
    ] })
  }
), cn = X(
  ({
    caption: e,
    head: n,
    rows: t,
    rowsPerPage: o,
    page: a,
    defaultPage: l = 1,
    sortKey: d,
    sortOrder: s,
    defaultSortKey: c,
    defaultSortOrder: g = "ASC",
    onSort: b,
    onSetPage: m,
    isLoading: h = !1,
    isFixedSize: p = !1
  }, y) => {
    const [v, D] = N(l), [C, P] = N(c), [L, A] = N(g), $ = a !== void 0, H = $ ? a : v, W = d !== void 0, k = W ? d : C, I = W ? s ?? "ASC" : L, F = o ? Math.max(1, Math.ceil(t.length / o)) : 1, K = pe(() => {
      if (!o) return t;
      const z = (H - 1) * o;
      return t.slice(z, z + o);
    }, [t, o, H]), O = (z) => {
      const J = k === z && I === "ASC" ? "DESC" : "ASC";
      W || (P(z), A(J)), b == null || b(z, J);
    }, V = (z) => {
      $ || D(z), m == null || m(z);
    }, U = {
      padding: `${i.MediumLarge} ${i.Large}`
    };
    return /* @__PURE__ */ f(S, { style: { position: "relative" }, children: [
      h && /* @__PURE__ */ r(
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
            borderRadius: M.XXLarge
          },
          children: /* @__PURE__ */ r(Pe, { size: "large" })
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
            e && /* @__PURE__ */ r(
              "caption",
              {
                style: {
                  textAlign: "left",
                  paddingBlockEnd: i.Medium,
                  fontWeight: E.Semibold,
                  fontSize: x.Small,
                  color: u.Default
                },
                children: e
              }
            ),
            /* @__PURE__ */ r("thead", { children: /* @__PURE__ */ r("tr", { children: n.map((z) => /* @__PURE__ */ r(
              "th",
              {
                style: {
                  ...U,
                  textAlign: "left",
                  fontWeight: E.Semibold,
                  fontSize: x.XXSmall,
                  color: u.Subtle,
                  borderBottom: `1px solid ${T.Default}`,
                  whiteSpace: "nowrap",
                  cursor: z.isSortable ? "pointer" : "default",
                  userSelect: z.isSortable ? "none" : void 0,
                  ...z.width ? { width: z.width } : {}
                },
                onClick: z.isSortable ? () => O(z.key) : void 0,
                children: /* @__PURE__ */ f("span", { style: { display: "inline-flex", alignItems: "center" }, children: [
                  z.label,
                  z.isSortable && /* @__PURE__ */ r(
                    dn,
                    {
                      order: k === z.key ? I : void 0
                    }
                  )
                ] })
              },
              z.key
            )) }) }),
            /* @__PURE__ */ f("tbody", { children: [
              K.map((z) => /* @__PURE__ */ r(
                "tr",
                {
                  onClick: z.onClick,
                  style: {
                    cursor: z.onClick ? "pointer" : "default",
                    borderBottom: `1px solid ${T.Default}`
                  },
                  children: z.cells.map((J, q) => /* @__PURE__ */ r("td", { style: { ...U, color: u.Default }, children: J }, q))
                },
                z.key
              )),
              K.length === 0 && /* @__PURE__ */ r("tr", { children: /* @__PURE__ */ r(
                "td",
                {
                  colSpan: n.length,
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
      o && F > 1 && /* @__PURE__ */ f(
        R,
        {
          space: i.Medium,
          alignBlock: "center",
          alignInline: "center",
          style: { paddingBlock: i.Large },
          children: [
            /* @__PURE__ */ r(
              oe,
              {
                disabled: H <= 1,
                onClick: () => V(H - 1),
                paddingBlock: i.XSmall,
                paddingInline: i.Medium,
                borderRadius: M.Large,
                backgroundColor: w.Default,
                color: u.Default,
                style: { fontSize: x.XXSmall, border: `1px solid ${T.Default}` },
                children: "Previous"
              }
            ),
            /* @__PURE__ */ f(B, { size: x.XXSmall, color: u.Subtle, children: [
              "Page ",
              H,
              " of ",
              F
            ] }),
            /* @__PURE__ */ r(
              oe,
              {
                disabled: H >= F,
                onClick: () => V(H + 1),
                paddingBlock: i.XSmall,
                paddingInline: i.Medium,
                borderRadius: M.Large,
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
cn.displayName = "Table";
const bn = () => /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ r("path", { fillRule: "evenodd", d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z", clipRule: "evenodd" }) }), un = () => /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ r("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" }) }), gn = X(
  ({
    defaultValue: e,
    label: n,
    editButtonLabel: t,
    editView: o,
    readView: a,
    onConfirm: l,
    onCancel: d
  }, s) => {
    const [c, g] = N(!1), [b, m] = N(e);
    ne(null), Y(() => {
      m(e);
    }, [e]);
    const h = _(() => {
      g(!1), l(b);
    }, [b, l]), p = _(() => {
      m(e), g(!1), d == null || d();
    }, [e, d]), y = _(
      (C) => {
        C.key === "Enter" && h(), C.key === "Escape" && p();
      },
      [h, p]
    ), v = (C) => /* @__PURE__ */ r(
      S,
      {
        style: {
          paddingBlock: i.XSmall,
          paddingInline: i.Small,
          cursor: "pointer",
          borderRadius: M.Medium,
          wordBreak: "break-word",
          minHeight: "1.5em"
        },
        children: /* @__PURE__ */ r(B, { as: "span", size: x.Small, color: u.Default, children: C || " " })
      }
    ), D = (C) => /* @__PURE__ */ r(
      Le,
      {
        value: C.value,
        onChange: C.onChange,
        onKeyDown: C.onKeyDown,
        autoFocus: C.autoFocus,
        backgroundColor: w.Default,
        borderColor: T.Focus,
        borderRadius: M.Medium,
        padding: i.XSmall,
        style: { fontSize: x.Small, width: "100%" }
      }
    );
    return /* @__PURE__ */ f("div", { ref: s, children: [
      n && /* @__PURE__ */ r(
        B,
        {
          as: "label",
          size: x.XXSmall,
          weight: 500,
          color: u.Subtle,
          style: { display: "block", marginBlockEnd: i.XSmall },
          children: n
        }
      ),
      c ? /* @__PURE__ */ f(R, { space: i.XSmall, alignBlock: "start", children: [
        /* @__PURE__ */ r(S, { style: { flex: "1 1 auto" }, children: (o ?? D)({
          value: b,
          onChange: (C) => m(C.target.value),
          onKeyDown: y,
          autoFocus: !0
        }) }),
        /* @__PURE__ */ r(
          Q,
          {
            label: "Confirm",
            onClick: h,
            color: u.Success,
            padding: i.XSmall,
            children: /* @__PURE__ */ r(bn, {})
          }
        ),
        /* @__PURE__ */ r(
          Q,
          {
            label: "Cancel",
            onClick: p,
            color: u.Error,
            padding: i.XSmall,
            children: /* @__PURE__ */ r(un, {})
          }
        )
      ] }) : /* @__PURE__ */ r(
        S,
        {
          onClick: () => g(!0),
          role: "button",
          tabIndex: 0,
          "aria-label": t ?? e ?? "Edit",
          onKeyDown: (C) => {
            (C.key === "Enter" || C.key === " ") && (C.preventDefault(), g(!0));
          },
          style: { cursor: "pointer" },
          children: (a ?? v)(e)
        }
      )
    ] });
  }
);
gn.displayName = "InlineEdit";
const hn = () => /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "currentColor", style: { width: "0.875rem", height: "0.875rem" }, children: /* @__PURE__ */ r("path", { fillRule: "evenodd", d: "M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z", clipRule: "evenodd" }) }), mn = X(
  ({ trigger: e, groups: n, checked: t, onChange: o }, a) => {
    const [l, d] = N(!1), s = ne(null), c = _((b) => {
      b.key === "Escape" && d(!1);
    }, []), g = _((b) => {
      s.current && !s.current.contains(b.target) && d(!1);
    }, []);
    return Y(() => {
      if (l)
        return document.addEventListener("keydown", c), document.addEventListener("mousedown", g), () => {
          document.removeEventListener("keydown", c), document.removeEventListener("mousedown", g);
        };
    }, [l, c, g]), /* @__PURE__ */ f(
      S,
      {
        ref: (b) => {
          s.current = b, typeof a == "function" ? a(b) : a && (a.current = b);
        },
        style: { position: "relative", display: "inline-block" },
        children: [
          /* @__PURE__ */ r(
            R,
            {
              style: { cursor: "pointer" },
              onClick: () => d((b) => !b),
              alignBlock: "center",
              children: e
            }
          ),
          l && /* @__PURE__ */ r(
            S,
            {
              backgroundColor: w.Default,
              borderColor: T.Default,
              borderSide: "all",
              borderRadius: M.XLarge,
              elevation: se.Dropdown,
              padding: i.XSmall,
              style: {
                position: "absolute",
                top: "100%",
                left: 0,
                marginTop: i.XSmall,
                minWidth: "14rem",
                zIndex: ae.Dropdown
              },
              children: /* @__PURE__ */ r(j, { space: i.XSmall, children: n.map((b, m) => /* @__PURE__ */ f(j, { space: i.XXSmall, children: [
                b.title && /* @__PURE__ */ r(S, { paddingInline: i.MediumLarge, paddingBlock: i.XSmall, children: /* @__PURE__ */ r(
                  B,
                  {
                    as: "span",
                    size: x.XXSmall,
                    weight: E.Semibold,
                    color: u.Subtlest,
                    textTransform: "uppercase",
                    children: b.title
                  }
                ) }),
                b.items.map((h) => {
                  const p = !!t[h.id];
                  return /* @__PURE__ */ f(
                    oe,
                    {
                      onClick: () => o(h.id, !p),
                      borderRadius: M.Medium,
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
                        /* @__PURE__ */ r(
                          S,
                          {
                            style: {
                              width: "1rem",
                              height: "1rem",
                              borderRadius: M.Small,
                              border: p ? "none" : `2px solid ${T.Outline}`,
                              backgroundColor: p ? w.Brand : w.Transparent,
                              color: u.Inverse,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0
                            },
                            children: p && /* @__PURE__ */ r(hn, {})
                          }
                        ),
                        /* @__PURE__ */ r(B, { as: "span", size: x.XSmall, style: { color: "inherit" }, children: h.label })
                      ]
                    },
                    h.id
                  );
                }),
                m < n.length - 1 && /* @__PURE__ */ r(
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
mn.displayName = "DropdownCheckboxMenu";
const pn = X(
  ({
    label: e,
    helperText: n,
    errorText: t,
    id: o,
    labelColor: a = u.Default,
    labelSize: l = x.XSmall,
    labelWeight: d = E.Medium,
    labelTextTransform: s,
    labelLetterSpacing: c,
    inputBackground: g = w.Subtle,
    inputBorderColor: b,
    inputBorderRadius: m = M.XXLarge,
    inputBorderSide: h = "all",
    inputPadding: p = i.MediumLarge,
    name: y,
    value: v,
    defaultValue: D,
    placeholder: C,
    options: P,
    disabled: L,
    required: A,
    onChange: $,
    onBlur: H
  }, W) => {
    const k = we(), I = o ?? k, F = `${I}-helper`, K = `${I}-error`, O = !!t, V = O ? T.Error : b, U = h === "bottom", z = /* @__PURE__ */ r(
      je,
      {
        ref: W,
        id: I,
        name: y,
        value: v,
        defaultValue: D,
        placeholder: C,
        options: P,
        disabled: L,
        required: A,
        onChange: $,
        onBlur: H,
        backgroundColor: U ? "transparent" : g,
        borderColor: U ? void 0 : V,
        borderRadius: U ? void 0 : m,
        padding: p,
        fontSize: x.XSmall,
        color: u.Default,
        style: { width: "100%" },
        "aria-describedby": O ? K : n ? F : void 0,
        "aria-invalid": O || void 0
      }
    ), J = U ? /* @__PURE__ */ r("div", { style: {
      width: "100%",
      backgroundColor: g,
      borderBottom: `2px solid ${V}`
    }, children: z }) : z;
    return /* @__PURE__ */ f(j, { space: i.XSmall, children: [
      e && /* @__PURE__ */ r(
        "label",
        {
          htmlFor: I,
          style: {
            fontSize: l,
            fontWeight: d,
            color: a,
            textTransform: s,
            letterSpacing: c
          },
          children: e
        }
      ),
      J,
      O && /* @__PURE__ */ r(B, { as: "span", size: x.XXSmall, color: u.Error, id: K, children: t }),
      !O && n && /* @__PURE__ */ r(B, { as: "span", size: x.XXSmall, color: u.Subtle, id: F, children: n })
    ] });
  }
);
pn.displayName = "SelectField";
const fn = {
  info: { bg: w.Default, text: u.Info, accent: "#3b82f6" },
  success: { bg: w.Default, text: u.Success, accent: "#22c55e" },
  warning: { bg: w.Default, text: u.Warning, accent: "#f59e0b" },
  error: { bg: w.Default, text: u.Error, accent: "#ba1a1a" }
}, yn = () => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "0.875rem", height: "0.875rem" },
    children: /* @__PURE__ */ r("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  }
), vn = X(
  ({ open: e, onClose: n, duration: t = 5e3, variant: o = "info", icon: a, children: l }, d) => {
    if (Y(() => {
      if (!e || t === 0) return;
      const c = setTimeout(n, t);
      return () => clearTimeout(c);
    }, [e, t, n]), !e) return null;
    const s = fn[o];
    return Ce(
      /* @__PURE__ */ r(
        S,
        {
          ref: d,
          role: "alert",
          "aria-live": "assertive",
          backgroundColor: s.bg,
          borderRadius: M.XXLarge,
          elevation: se.Overlay,
          padding: i.Large,
          style: {
            position: "fixed",
            bottom: i.XXXLarge,
            right: i.XXXLarge,
            zIndex: ae.Banner,
            minWidth: "20rem",
            maxWidth: "28rem",
            borderLeft: `4px solid ${s.accent}`
          },
          children: /* @__PURE__ */ f(R, { space: i.MediumLarge, alignBlock: "center", spread: "space-between", children: [
            /* @__PURE__ */ f(R, { space: i.MediumLarge, alignBlock: "center", grow: "fill", children: [
              a && /* @__PURE__ */ r(S, { style: { color: s.accent, flexShrink: 0 }, children: a }),
              /* @__PURE__ */ r(B, { as: "span", size: x.XSmall, weight: E.Medium, color: u.Default, children: l })
            ] }),
            /* @__PURE__ */ r(
              Q,
              {
                label: "Dismiss",
                onClick: n,
                color: u.Subtle,
                padding: i.XXSmall,
                children: /* @__PURE__ */ r(yn, {})
              }
            )
          ] })
        }
      ),
      document.body
    );
  }
);
vn.displayName = "Toast";
const wn = X(
  ({ items: e, activeId: n, onSelect: t, fab: o }, a) => /* @__PURE__ */ r(
    S,
    {
      ref: a,
      as: "nav",
      style: {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: ae.Sticky,
        backgroundColor: w.Default,
        borderTop: `1px solid ${T.Default}`,
        backdropFilter: "blur(20px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingInline: i.Large,
        paddingBlock: i.Medium
      },
      children: e.map((l, d) => {
        const s = l.id === n, c = Math.floor(e.length / 2), g = o && d === c;
        return /* @__PURE__ */ f(ie.Fragment, { children: [
          g && /* @__PURE__ */ r(S, { style: { marginTop: `-${i.XXXLarge}` }, children: o }),
          /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: () => t == null ? void 0 : t(l.id),
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
                /* @__PURE__ */ r(S, { style: { width: "1.5rem", height: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center" }, children: l.icon }),
                /* @__PURE__ */ r(
                  B,
                  {
                    as: "span",
                    size: x.Micro,
                    weight: E.Bold,
                    color: s ? u.Brand : u.Disabled,
                    textTransform: "uppercase",
                    children: l.label
                  }
                )
              ]
            }
          )
        ] }, l.id);
      })
    }
  )
);
wn.displayName = "MobileNav";
const Sn = () => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    style: { width: "0.75rem", height: "0.75rem" },
    children: /* @__PURE__ */ r(
      "path",
      {
        fillRule: "evenodd",
        d: "M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z",
        clipRule: "evenodd"
      }
    )
  }
), xn = X(
  ({ items: e, showLabels: n, variant: t = "dot" }, o) => {
    const a = G(n ?? !0), l = 32, d = e.filter((s) => s.status === "visited").length;
    return t === "bar" ? /* @__PURE__ */ r(
      "div",
      {
        ref: o,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": e.length,
        "aria-valuenow": d,
        style: { display: "grid", gridTemplateColumns: `repeat(${e.length}, 1fr)`, gap: i.Medium, width: "100%" },
        children: e.map((s, c) => {
          const g = s.status === "visited", b = s.status === "current";
          return e.length - 1, /* @__PURE__ */ f("div", { style: { display: "flex", flexDirection: "column", gap: i.Medium }, children: [
            /* @__PURE__ */ r("div", { style: {
              height: 6,
              borderRadius: M.Full,
              background: b ? me.Brand : "none",
              backgroundColor: b ? void 0 : g ? w.PrimaryContainer : w.NeutralBold,
              opacity: g ? 0.4 : 1,
              boxShadow: b ? "0 0 8px var(--bbui-color-primary), 0 0 20px var(--bbui-color-primary)" : "none",
              transition: "all 400ms ease",
              cursor: s.onClick ? "pointer" : "default"
            }, onClick: s.onClick }),
            a && /* @__PURE__ */ r(
              B,
              {
                as: "p",
                size: x.Micro,
                weight: b ? E.Bold : E.Medium,
                color: b ? u.Brand : g ? u.Subtle : u.Disabled,
                textTransform: "uppercase",
                letterSpacing: ve.Widest,
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
        ref: o,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": e.length,
        "aria-valuenow": d,
        style: { width: "100%", padding: `0 ${i.Medium}` },
        children: [
          /* @__PURE__ */ r("div", { style: {
            display: "flex",
            alignItems: "center",
            width: "100%"
          }, children: e.map((s, c) => {
            const g = c === e.length - 1, b = s.status === "visited", m = s.status === "current", h = s.status === "disabled", p = b ? me.Brand : m ? "transparent" : w.NeutralBold, y = /* @__PURE__ */ r(
              "div",
              {
                style: {
                  width: l,
                  height: l,
                  borderRadius: M.Full,
                  background: b ? me.Brand : p,
                  backgroundColor: b ? void 0 : p,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: b ? u.OnBrand : m ? u.Brand : h ? u.Disabled : u.Subtle,
                  fontSize: x.XSmall,
                  fontWeight: E.Bold,
                  border: m ? `2px solid ${u.Brand}` : "none",
                  cursor: s.onClick || s.href ? "pointer" : "default",
                  transition: "all 300ms ease"
                },
                onClick: s.onClick,
                children: b ? /* @__PURE__ */ r(Sn, {}) : c + 1
              }
            ), v = s.href ? /* @__PURE__ */ r("a", { href: s.href, style: { textDecoration: "none", color: "inherit" }, children: y }) : y;
            return /* @__PURE__ */ f(ie.Fragment, { children: [
              v,
              !g && /* @__PURE__ */ r("div", { style: {
                flex: "1 1 auto",
                height: 2,
                backgroundColor: w.NeutralBold,
                position: "relative",
                marginInline: i.XSmall,
                borderRadius: M.Full,
                overflow: "hidden"
              }, children: /* @__PURE__ */ r("div", { style: {
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: `${b ? s.percentageComplete : 0}%`,
                background: me.Brand,
                borderRadius: M.Full,
                transition: "width 400ms ease"
              } }) })
            ] }, s.id);
          }) }),
          a && /* @__PURE__ */ r("div", { style: {
            display: "flex",
            alignItems: "flex-start",
            width: "100%",
            marginTop: i.Medium
          }, children: e.map((s, c) => {
            const g = c === e.length - 1, b = s.status === "visited", m = s.status === "current", h = s.status === "disabled", p = b ? u.Brand : m ? u.Default : h ? u.Disabled : u.Subtle;
            return /* @__PURE__ */ f(ie.Fragment, { children: [
              /* @__PURE__ */ r("div", { style: {
                width: l,
                flexShrink: 0,
                display: "flex",
                justifyContent: "center"
              }, children: /* @__PURE__ */ r(
                B,
                {
                  as: "span",
                  size: x.XXSmall,
                  weight: m ? E.Bold : E.Medium,
                  color: p,
                  align: "center",
                  style: {
                    whiteSpace: "nowrap"
                  },
                  children: s.label
                }
              ) }),
              !g && /* @__PURE__ */ r("div", { style: { flex: "1 1 auto" } })
            ] }, s.id);
          }) })
        ]
      }
    );
  }
);
xn.displayName = "ProgressTracker";
const kn = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";
function Xn(e) {
  const n = /* @__PURE__ */ f(R, { space: i.XSmall, alignBlock: "center", children: [
    /* @__PURE__ */ r(
      B,
      {
        size: x.XSmall,
        weight: E.Semibold,
        color: u.Brand,
        children: e.label
      }
    ),
    e.icon
  ] });
  return e.href ? /* @__PURE__ */ r(
    "a",
    {
      href: e.href,
      style: {
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center"
      },
      children: n
    }
  ) : /* @__PURE__ */ r(
    "button",
    {
      type: "button",
      onClick: e.onClick,
      style: {
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center"
      },
      children: n
    }
  );
}
function Mn(e) {
  return /* @__PURE__ */ r(
    xe,
    {
      src: e.src,
      alt: e.alt,
      width: e.width ?? i.Size8,
      height: e.height ?? i.Size8,
      objectFit: "cover",
      borderRadius: M.Medium,
      style: { opacity: 0.8 }
    }
  );
}
const Cn = X(
  ({
    icon: e,
    heading: n,
    description: t,
    action: o,
    media: a,
    padding: l = i.XXLarge,
    borderRadius: d = M.XXLarge,
    blur: s = 20,
    backgroundOpacity: c = 0.1,
    borderOpacity: g = 0.12,
    children: b
  }, m) => {
    const h = {
      position: "relative",
      overflow: "hidden",
      background: `rgba(255, 255, 255, ${c})`,
      backdropFilter: `blur(${s}px)`,
      WebkitBackdropFilter: `blur(${s}px)`,
      border: `1px solid rgba(255, 255, 255, ${g})`,
      borderRadius: d,
      transition: "background 200ms ease"
    }, p = {
      position: "absolute",
      inset: 0,
      backgroundImage: `url("${kn}")`,
      opacity: 0.03,
      pointerEvents: "none"
    }, y = /* @__PURE__ */ f(j, { space: i.Medium, style: { flex: 1 }, children: [
      e && /* @__PURE__ */ r(S, { marginBlockEnd: i.Medium, children: e }),
      /* @__PURE__ */ r(
        B,
        {
          as: "h3",
          size: x.Large,
          weight: E.Bold,
          color: u.Default,
          children: n
        }
      ),
      t && /* @__PURE__ */ r(
        B,
        {
          size: x.XSmall,
          color: u.OnSurfaceVariant,
          children: t
        }
      ),
      o && Xn(o),
      b
    ] });
    return /* @__PURE__ */ f(S, { ref: m, padding: l, style: h, children: [
      /* @__PURE__ */ r("div", { style: p, "aria-hidden": "true" }),
      a ? /* @__PURE__ */ f(R, { space: i.XXLarge, alignBlock: "center", children: [
        y,
        /* @__PURE__ */ r("div", { style: { flexShrink: 0 }, children: Mn(a) })
      ] }) : y
    ] });
  }
);
Cn.displayName = "GlassCard";
const Ln = [
  { value: "small", short: "S", long: "Small" },
  { value: "medium", short: "M", long: "Medium" },
  { value: "large", short: "L", long: "Large" }
], Bn = X(
  ({ label: e = "Page Size", compact: n = !1 }, t) => {
    const { pageSize: o, setPageSize: a } = Ir();
    return /* @__PURE__ */ r(
      S,
      {
        ref: t,
        paddingBlock: n ? i.XXSmall : i.XSmall,
        paddingInline: n ? i.XSmall : i.Medium,
        backgroundColor: w.Default,
        borderColor: T.Default,
        borderSide: "all",
        borderRadius: M.Full,
        children: /* @__PURE__ */ f(R, { space: i.MediumLarge, alignBlock: "center", children: [
          !n && e && /* @__PURE__ */ r(
            B,
            {
              size: x.Micro,
              weight: E.Bold,
              color: u.Subtlest,
              textTransform: "uppercase",
              style: { letterSpacing: ve.Widest },
              children: e
            }
          ),
          /* @__PURE__ */ r(R, { space: i.XXSmall, alignBlock: "center", children: Ln.map((l) => {
            const d = l.value === o;
            return /* @__PURE__ */ r(
              oe,
              {
                onClick: () => a(l.value),
                "aria-pressed": d,
                "aria-label": `${l.long} page size`,
                title: l.long,
                backgroundColor: d ? w.PrimaryTint : w.Transparent,
                color: d ? u.Brand : u.Subtlest,
                borderRadius: M.Full,
                paddingBlock: i.XSmall,
                paddingInline: i.MediumLarge,
                style: {
                  fontSize: x.Micro,
                  fontWeight: d ? E.Bold : E.Semibold,
                  letterSpacing: ve.Widest,
                  textTransform: "uppercase",
                  minWidth: "1.75rem",
                  lineHeight: 1
                },
                children: l.short
              },
              l.value
            );
          }) })
        ] })
      }
    );
  }
);
Bn.displayName = "PageSizeControl";
const Dn = `
@keyframes bbui-pulse-down {
  0%, 100% { transform: translateY(0); opacity: 0.4 }
  50%      { transform: translateY(3px); opacity: 0.9 }
}
`, We = "2.25rem", In = "1.125rem", zn = X(
  ({ items: e, onComplete: n, finishedLabel: t, maxHeight: o = "16rem" }, a) => {
    const [l, d] = N(() => /* @__PURE__ */ new Set()), s = ne(!1), c = ne(null), g = ne([]), b = l.size >= e.length;
    return Y(() => {
      b && !s.current && (s.current = !0, n == null || n());
    }, [b, n]), Y(() => {
      const m = c.current;
      if (!m) return;
      const h = new IntersectionObserver(
        (p) => {
          d((y) => {
            let v = y;
            for (const D of p) {
              if (!D.isIntersecting) continue;
              const C = Number(D.target.dataset.idx);
              y.has(C) || (v === y && (v = new Set(y)), v.add(C));
            }
            return v;
          });
        },
        { root: m, threshold: 0.6 }
      );
      return g.current.forEach((p) => p && h.observe(p)), () => h.disconnect();
    }, [e.length]), /* @__PURE__ */ f("div", { ref: a, style: { width: "100%", position: "relative" }, children: [
      /* @__PURE__ */ r("style", { children: Dn }),
      /* @__PURE__ */ r("div", { ref: c, style: Rn(o, b), children: /* @__PURE__ */ r(j, { space: i.MediumLarge, children: e.map((m, h) => {
        const p = l.has(h);
        return /* @__PURE__ */ f(
          "div",
          {
            ref: (y) => g.current[h] = y,
            "data-idx": h,
            style: An(p),
            children: [
              /* @__PURE__ */ r(En, { item: m }),
              h < e.length - 1 && /* @__PURE__ */ r("span", { "aria-hidden": "true", style: On(p) })
            ]
          },
          m.id ?? h
        );
      }) }) }),
      /* @__PURE__ */ r("div", { style: Hn, children: b ? t : /* @__PURE__ */ r(Tn, {}) })
    ] });
  }
);
zn.displayName = "RevealSteps";
function En({ item: e }) {
  return /* @__PURE__ */ f("div", { style: $n, children: [
    /* @__PURE__ */ r("span", { "aria-hidden": "true", style: Nn, children: e.icon }),
    /* @__PURE__ */ f("span", { style: Wn, children: [
      /* @__PURE__ */ r(B, { as: "span", size: x.Small, weight: E.Medium, children: e.label }),
      e.description && /* @__PURE__ */ r(B, { as: "span", size: x.XSmall, color: u.Subtle, children: e.description })
    ] }),
    e.meta && /* @__PURE__ */ r("span", { style: Fn, children: e.meta })
  ] });
}
function Tn() {
  return /* @__PURE__ */ r("div", { style: Pn, "aria-hidden": "true", children: /* @__PURE__ */ r(
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
      children: /* @__PURE__ */ r("polyline", { points: "6 9 12 15 18 9" })
    }
  ) });
}
const Fe = "linear-gradient(to bottom, black 0%, black calc(100% - 2rem), transparent 100%)", Rn = (e, n) => ({
  maxHeight: e,
  overflowY: "auto",
  scrollBehavior: "smooth",
  maskImage: n ? "none" : Fe,
  WebkitMaskImage: n ? "none" : Fe,
  paddingRight: i.XSmall
}), An = (e) => ({
  position: "relative",
  opacity: e ? 1 : 0.15,
  transform: e ? "translateY(0)" : "translateY(8px)",
  filter: e ? "blur(0)" : "blur(2px)",
  transition: "opacity 420ms ease-out, transform 420ms cubic-bezier(0.22, 1, 0.36, 1), filter 420ms ease-out"
}), $n = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: i.MediumLarge,
  padding: i.MediumLarge,
  background: w.Subtle,
  borderRadius: M.Large,
  border: `1px solid ${T.Default}`,
  color: u.Default
}, Nn = {
  width: We,
  height: We,
  flexShrink: 0,
  borderRadius: M.Medium,
  background: w.Subtle,
  color: u.Default,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
}, Wn = {
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: i.XXSmall
}, Fn = {
  flexShrink: 0,
  display: "inline-flex",
  alignItems: "center"
}, On = (e) => ({
  position: "absolute",
  left: `calc(${i.MediumLarge} + ${In} - 1px)`,
  top: "100%",
  height: i.MediumLarge,
  width: "2px",
  background: T.Default,
  opacity: e ? 1 : 0,
  transition: "opacity 300ms ease-out",
  pointerEvents: "none"
}), Hn = {
  marginTop: i.Large,
  display: "flex",
  justifyContent: "center",
  minHeight: "1.25rem"
}, Pn = {
  color: u.Subtle,
  animation: "bbui-pulse-down 1500ms ease-in-out infinite",
  display: "inline-flex"
}, jn = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree"
], Kn = X(
  ({ value: e, onChange: n, labels: t = jn }, o) => {
    const [a, l] = N(null);
    return /* @__PURE__ */ r("div", { ref: o, role: "radiogroup", style: Yn, children: t.map((d, s) => {
      const c = s + 1, g = e === c;
      return /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          role: "radio",
          "aria-checked": g,
          "aria-label": d,
          onClick: () => n(c),
          onMouseEnter: () => l(c),
          onMouseLeave: () => l(null),
          onFocus: () => l(c),
          onBlur: () => l(null),
          style: Vn(g, !g && a === c),
          children: d
        },
        c
      );
    }) });
  }
);
Kn.displayName = "LikertScale";
const Yn = {
  display: "flex",
  flexDirection: "column",
  gap: i.Medium,
  width: "100%"
}, Vn = (e, n) => {
  const t = "var(--bbui-color-primary)", o = e ? "var(--bbui-bg-primary-container)" : n ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)", a = e || n ? t : "rgba(255,255,255,0.08)";
  return {
    width: "100%",
    height: "3rem",
    padding: `0 ${i.MediumLarge}`,
    borderRadius: M.Large,
    border: `1px solid ${a}`,
    background: o,
    color: "#ffffff",
    fontSize: x.Small,
    fontWeight: E.Medium,
    textAlign: "center",
    cursor: "pointer",
    transition: "background 180ms ease, border-color 180ms ease",
    font: "inherit"
  };
};
function ct(e) {
  const [n, t] = N(
    () => typeof window < "u" ? window.matchMedia(e).matches : !1
  );
  return Y(() => {
    const o = window.matchMedia(e), a = (l) => t(l.matches);
    return o.addEventListener("change", a), t(o.matches), () => o.removeEventListener("change", a);
  }, [e]), n;
}
function Xe() {
  return typeof window > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function _n(e) {
  typeof document > "u" || (e === "system" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e));
}
function bt() {
  const [e, n] = N(() => typeof localStorage > "u" ? "system" : localStorage.getItem("bbui-theme") ?? "system"), [t, o] = N(
    () => e === "system" ? Xe() : e
  ), a = _((l) => {
    n(l), typeof localStorage < "u" && (l === "system" ? localStorage.removeItem("bbui-theme") : localStorage.setItem("bbui-theme", l));
  }, []);
  return Y(() => {
    _n(e), o(e === "system" ? Xe() : e);
  }, [e]), Y(() => {
    if (e !== "system") return;
    const l = window.matchMedia("(prefers-color-scheme: dark)"), d = () => o(Xe());
    return l.addEventListener("change", d), () => l.removeEventListener("change", d);
  }, [e]), { theme: e, resolvedTheme: t, setTheme: a };
}
async function* Un(e, n) {
  if (!e.body)
    throw new Error("SSE response has no readable body");
  const t = e.body.getReader(), o = new TextDecoder();
  let a = "";
  try {
    for (; ; ) {
      if (n != null && n.aborted) {
        await t.cancel().catch(() => {
        });
        return;
      }
      const { value: l, done: d } = await t.read();
      if (d) break;
      a += o.decode(l, { stream: !0 });
      let s;
      for (; (s = a.indexOf(`

`)) !== -1; ) {
        const c = a.slice(0, s);
        a = a.slice(s + 2);
        const g = [];
        for (const m of c.split(`
`))
          m.startsWith("data:") && g.push(m.slice(5).trimStart());
        if (g.length === 0) continue;
        const b = g.join(`
`);
        try {
          yield JSON.parse(b);
        } catch {
        }
      }
    }
  } finally {
    try {
      t.releaseLock();
    } catch {
    }
  }
}
async function* Gn(e, n = {}) {
  const t = await fetch(e, n);
  if (!t.ok) {
    const o = await t.text().catch(() => "");
    throw new Error(
      `SSE request failed ${t.status} ${t.statusText}: ${o}`
    );
  }
  yield* Un(t, n.signal);
}
function ut(e = {}) {
  const { onEvent: n, onComplete: t, onError: o, retain: a = !0 } = e, [l, d] = N([]), [s, c] = N(null), [g, b] = N(!1), [m, h] = N(null), p = ne(null), y = ne(!0), v = ne(n), D = ne(t), C = ne(o);
  Y(() => {
    v.current = n, D.current = t, C.current = o;
  }), Y(() => (y.current = !0, () => {
    var $;
    y.current = !1, ($ = p.current) == null || $.abort();
  }), []);
  const P = _(() => {
    var $;
    ($ = p.current) == null || $.abort(), p.current = null;
  }, []), L = _(() => {
    d([]), c(null), h(null);
  }, []), A = _(
    async ($, H = {}) => {
      var k, I, F, K;
      (k = p.current) == null || k.abort();
      const W = new AbortController();
      p.current = W, y.current && (d([]), c(null), h(null), b(!0));
      try {
        for await (const O of Gn($, {
          ...H,
          signal: W.signal
        })) {
          if (!y.current) return;
          a && d((V) => [...V, O]), c(O), (I = v.current) == null || I.call(v, O);
        }
        y.current && ((F = D.current) == null || F.call(D));
      } catch (O) {
        if (W.signal.aborted) return;
        const V = O instanceof Error ? O : new Error(String(O));
        y.current && (h(V), (K = C.current) == null || K.call(C, V));
      } finally {
        y.current && p.current === W && (b(!1), p.current = null);
      }
    },
    [a]
  );
  return { events: l, lastEvent: s, isStreaming: g, error: m, start: A, abort: P, reset: L };
}
export {
  nt as AccentColor,
  ce as Anchor,
  qr as Aside,
  pr as Avatar,
  w as BackgroundColor,
  He as Badge,
  Or as Banner,
  le as BloomColor,
  re as BloomLevel,
  T as BorderColor,
  M as BorderRadius,
  rt as BorderWidth,
  S as Box,
  ze as Breakpoint,
  oe as Button,
  an as Calendar,
  $r as Card,
  kr as Checkbox,
  tt as ContainerWidth,
  at as DirectionColor,
  Xr as Divider,
  mn as DropdownCheckboxMenu,
  Vr as DropdownMenu,
  se as Elevation,
  sn as EmptyState,
  lt as EvaluationResultColor,
  tr as FontFamily,
  x as FontSize,
  E as FontWeight,
  Cn as GlassCard,
  me as Gradient,
  Oe as Grid,
  Pr as Header,
  Ar as HeroSection,
  et as Hide,
  nr as Icon,
  Q as IconButton,
  it as IconSize,
  xe as Image,
  R as Inline,
  gn as InlineEdit,
  Qr as Layout,
  ve as LetterSpacing,
  Kn as LikertScale,
  cr as LinkButton,
  Ve as Menu,
  wn as MobileNav,
  Yr as Modal,
  jr as ModalSize,
  Rr as Navbar,
  Bn as PageSizeControl,
  dt as PageSizeProvider,
  Zr as Panel,
  st as PersonaAccent,
  xn as ProgressTracker,
  zn as RevealSteps,
  je as Select,
  pn as SelectField,
  Qn as Show,
  Gr as Sidebar,
  i as Spacing,
  Pe as Spinner,
  j as Stack,
  Lr as Stepper,
  cn as Table,
  Hr as Tabs,
  B as Text,
  vr as TextArea,
  u as TextColor,
  Nr as TextField,
  Le as TextInput,
  vn as Toast,
  dr as Toggle,
  ae as ZIndex,
  ir as bloomColorFor,
  or as bloomLevelForScore,
  Un as parseSSEStream,
  ot as scoreColor,
  Gn as streamSSE,
  Se as useBreakpoint,
  ct as useMediaQuery,
  Ir as usePageSize,
  G as useResponsiveValue,
  ut as useSSEStream,
  bt as useTheme
};
