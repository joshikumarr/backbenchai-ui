const STYLE_ID = "bbui-base-styles";

const css = `
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

if (typeof document !== "undefined") {
  const existing = document.getElementById(STYLE_ID);
  if (existing) {
    existing.textContent = css;
  } else {
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = css;
    document.head.appendChild(style);
  }
}
