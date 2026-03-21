const STYLE_ID = "bbui-base-styles";

const css = `
:root, [data-theme="light"] {
  --bbui-font-display: 'SF Pro Display', 'SF Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  --bbui-font-body: 'SF Pro Text', 'SF Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;

  --bbui-color-surface: #faf8ff;
  --bbui-color-on-surface: #131b2e;
  --bbui-color-subtle: #575e70;
  --bbui-color-subtlest: #6d7b6c;
  --bbui-color-disabled: #bccbb9;
  --bbui-color-inverse: #ffffff;
  --bbui-color-primary: #006e2f;
  --bbui-color-primary-container: #22c55e;
  --bbui-color-on-primary-container: #004b1e;
  --bbui-color-error: #ba1a1a;
  --bbui-color-warning: #92400e;

  --bbui-bg-default: #ffffff;
  --bbui-bg-surface: #faf8ff;
  --bbui-bg-subtle: #f2f3ff;
  --bbui-bg-neutral: #eaedff;
  --bbui-bg-neutral-bold: #e2e7ff;
  --bbui-bg-neutral-bolder: #dae2fd;
  --bbui-bg-sidebar: #f8fafc;
  --bbui-bg-dark: #131b2e;
  --bbui-bg-overlay: rgba(0,0,0,0.5);

  --bbui-border-default: #eaedff;
  --bbui-border-input: #e2e7ff;
  --bbui-border-outline: #bccbb9;

  --bbui-shadow-ambient: 0 40px 60px -15px rgba(19, 27, 46, 0.04);
  --bbui-shadow-raised: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.06);

  --bbui-scrollbar-thumb: rgba(19, 27, 46, 0.15);
  --bbui-scrollbar-thumb-hover: rgba(19, 27, 46, 0.25);
  --bbui-selection-bg: rgba(34, 197, 94, 0.2);

  color-scheme: light;
}

[data-theme="dark"] {
  --bbui-color-surface: #0f1729;
  --bbui-color-on-surface: #e2e7ff;
  --bbui-color-subtle: #a0a7b8;
  --bbui-color-subtlest: #6d7b8d;
  --bbui-color-disabled: #3d4a5c;
  --bbui-color-inverse: #0f1729;
  --bbui-color-primary: #4ae176;
  --bbui-color-primary-container: #006e2f;
  --bbui-color-on-primary-container: #6bff8f;
  --bbui-color-error: #ffb4ab;
  --bbui-color-warning: #fbbf24;

  --bbui-bg-default: #1a2332;
  --bbui-bg-surface: #0f1729;
  --bbui-bg-subtle: #1e293b;
  --bbui-bg-neutral: #283044;
  --bbui-bg-neutral-bold: #334155;
  --bbui-bg-neutral-bolder: #3d4f67;
  --bbui-bg-sidebar: #111827;
  --bbui-bg-dark: #e2e7ff;
  --bbui-bg-overlay: rgba(0,0,0,0.7);

  --bbui-border-default: #283044;
  --bbui-border-input: #334155;
  --bbui-border-outline: #475569;

  --bbui-shadow-ambient: 0 40px 60px -15px rgba(0, 0, 0, 0.3);
  --bbui-shadow-raised: 0 1px 3px rgba(0,0,0,.4), 0 1px 2px rgba(0,0,0,.3);

  --bbui-scrollbar-thumb: rgba(255, 255, 255, 0.15);
  --bbui-scrollbar-thumb-hover: rgba(255, 255, 255, 0.25);
  --bbui-selection-bg: rgba(74, 225, 118, 0.2);

  color-scheme: dark;
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bbui-color-surface: #0f1729;
    --bbui-color-on-surface: #e2e7ff;
    --bbui-color-subtle: #a0a7b8;
    --bbui-color-subtlest: #6d7b8d;
    --bbui-color-disabled: #3d4a5c;
    --bbui-color-inverse: #0f1729;
    --bbui-color-primary: #4ae176;
    --bbui-color-primary-container: #006e2f;
    --bbui-color-on-primary-container: #6bff8f;
    --bbui-color-error: #ffb4ab;
    --bbui-color-warning: #fbbf24;

    --bbui-bg-default: #1a2332;
    --bbui-bg-surface: #0f1729;
    --bbui-bg-subtle: #1e293b;
    --bbui-bg-neutral: #283044;
    --bbui-bg-neutral-bold: #334155;
    --bbui-bg-neutral-bolder: #3d4f67;
    --bbui-bg-sidebar: #111827;
    --bbui-bg-dark: #e2e7ff;
    --bbui-bg-overlay: rgba(0,0,0,0.7);

    --bbui-border-default: #283044;
    --bbui-border-input: #334155;
    --bbui-border-outline: #475569;

    --bbui-shadow-ambient: 0 40px 60px -15px rgba(0, 0, 0, 0.3);
    --bbui-shadow-raised: 0 1px 3px rgba(0,0,0,.4), 0 1px 2px rgba(0,0,0,.3);

    --bbui-scrollbar-thumb: rgba(255, 255, 255, 0.15);
    --bbui-scrollbar-thumb-hover: rgba(255, 255, 255, 0.25);
    --bbui-selection-bg: rgba(74, 225, 118, 0.2);

    color-scheme: dark;
  }
}

*, *::before, *::after { box-sizing: border-box; margin: 0; }
html { -webkit-text-size-adjust: 100%; scroll-behavior: smooth; }
body {
  font-family: var(--bbui-font-body);
  font-size: 1rem;
  line-height: 1.5;
  color: var(--bbui-color-on-surface);
  background-color: var(--bbui-color-surface);
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
  transition: background-color 150ms ease, color 150ms ease, border-color 150ms ease, box-shadow 150ms ease, opacity 150ms ease;
}
::selection { background: var(--bbui-selection-bg); color: var(--bbui-color-on-surface); }
`;

if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = css;
  document.head.appendChild(style);
}
