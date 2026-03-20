const STYLE_ID = "bbui-base-styles";

const css = `
:root {
  --bbui-font-display: 'SF Pro Display', 'SF Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  --bbui-font-body: 'SF Pro Text', 'SF Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  --bbui-color-surface: #faf8ff;
  --bbui-color-on-surface: #131b2e;
  --bbui-color-primary: #006e2f;
  --bbui-color-primary-container: #22c55e;
  --bbui-radius-default: 1rem;
  --bbui-radius-full: 9999px;
  --bbui-shadow-ambient: 0 40px 60px -15px rgba(19, 27, 46, 0.04);
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
::-webkit-scrollbar-thumb { background: rgba(19, 27, 46, 0.15); border-radius: 9999px; }
::-webkit-scrollbar-thumb:hover { background: rgba(19, 27, 46, 0.25); }
button, a, input, select, textarea {
  transition: background-color 150ms ease, color 150ms ease, border-color 150ms ease, box-shadow 150ms ease, opacity 150ms ease;
}
::selection { background: rgba(34, 197, 94, 0.2); color: var(--bbui-color-on-surface); }
`;

if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = css;
  document.head.appendChild(style);
}
