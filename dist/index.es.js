import le, { useState as O, useEffect as Y, forwardRef as X, Fragment as je, useCallback as G, useId as ye, useRef as ne, useMemo as ke } from "react";
import { jsx as e, Fragment as re, jsxs as f } from "react/jsx-runtime";
import { createPortal as Xe } from "react-dom";
const Ce = {
  /** 0–639px */
  Mobile: 0,
  /** 640–1023px */
  Tablet: 640,
  /** 1024px+ */
  Desktop: 1024
};
function Be(t) {
  return t >= Ce.Desktop ? "desktop" : t >= Ce.Tablet ? "tablet" : "mobile";
}
function ve() {
  const [t, n] = O(
    () => typeof window < "u" ? Be(window.innerWidth) : "desktop"
  );
  return Y(() => {
    const r = () => n(Be(window.innerWidth));
    return window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []), t;
}
function Pe(t, n) {
  if (t == null || typeof t != "object" || !("mobile" in t)) return t;
  const r = t;
  switch (n) {
    case "desktop":
      return r.desktop ?? r.tablet ?? r.mobile;
    case "tablet":
      return r.tablet ?? r.mobile;
    default:
      return r.mobile;
  }
}
function U(t) {
  const n = ve();
  return Pe(t, n);
}
const S = X(
  ({
    as: t = "div",
    padding: n,
    paddingBlock: r,
    paddingBlockStart: i,
    paddingBlockEnd: o,
    paddingInline: a,
    paddingInlineStart: d,
    paddingInlineEnd: s,
    marginBlock: c,
    marginBlockStart: h,
    marginBlockEnd: u,
    backgroundColor: g,
    borderRadius: b,
    borderColor: m,
    borderSide: y,
    borderWidth: v = "1px",
    overflow: L,
    elevation: C,
    maxWidth: j,
    style: B,
    children: $,
    ...A
  }, H) => {
    const N = U(n), k = U(r), I = U(i), W = U(o), K = U(a), F = U(d), V = U(s), _ = U(c), E = U(h), J = U(u), q = m ? `${v} solid ${m}` : void 0, Z = {};
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
    const ue = {
      ...N && { padding: N },
      ...k && { paddingBlock: k },
      ...I && { paddingBlockStart: I },
      ...W && { paddingBlockEnd: W },
      ...K && { paddingInline: K },
      ...F && { paddingInlineStart: F },
      ...V && { paddingInlineEnd: V },
      ..._ && { marginBlock: _ },
      ...E && { marginBlockStart: E },
      ...J && { marginBlockEnd: J },
      ...g && { backgroundColor: g },
      ...b && { borderRadius: b },
      ...Z,
      ...L && { overflow: L },
      ...C && { boxShadow: C },
      ...j && { maxWidth: j, marginInline: "auto" },
      ...B
    };
    return le.createElement(
      t,
      { ...A, ref: H, style: ue },
      $
    );
  }
);
S.displayName = "Box";
const me = ["mobile", "tablet", "desktop"];
function Ke(t, n) {
  return me.indexOf(t) >= me.indexOf(n);
}
function Ve(t, n) {
  return me.indexOf(t) < me.indexOf(n);
}
function Pn({ on: t, above: n, below: r, children: i }) {
  const o = ve();
  return t != null ? (Array.isArray(t) ? t : [t]).includes(o) ? /* @__PURE__ */ e(re, { children: i }) : null : n != null ? Ke(o, n) ? /* @__PURE__ */ e(re, { children: i }) : null : r != null ? Ve(o, r) ? /* @__PURE__ */ e(re, { children: i }) : null : /* @__PURE__ */ e(re, { children: i });
}
const fe = ["mobile", "tablet", "desktop"];
function Ye(t, n) {
  return fe.indexOf(t) >= fe.indexOf(n);
}
function _e(t, n) {
  return fe.indexOf(t) < fe.indexOf(n);
}
function Kn({ on: t, above: n, below: r, children: i }) {
  const o = ve();
  return t != null ? (Array.isArray(t) ? t : [t]).includes(o) ? null : /* @__PURE__ */ e(re, { children: i }) : n != null ? Ye(o, n) ? null : /* @__PURE__ */ e(re, { children: i }) : r != null ? _e(o, r) ? null : /* @__PURE__ */ e(re, { children: i }) : /* @__PURE__ */ e(re, { children: i });
}
const De = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch"
}, P = X(
  ({
    as: t = "div",
    space: n,
    alignInline: r,
    alignBlock: i,
    spread: o,
    grow: a = "hug",
    marginBlockStart: d,
    marginBlockEnd: s,
    style: c,
    children: h,
    ...u
  }, g) => {
    const m = {
      display: "flex",
      flexDirection: "column",
      gap: U(n ?? "0"),
      ...r && { alignItems: De[r] },
      ...i && !o && { justifyContent: De[i] },
      ...o && { justifyContent: o },
      ...a === "fill" && { flex: "1 1 auto" },
      ...d && { marginBlockStart: d },
      ...s && { marginBlockEnd: s },
      ...c
    };
    return le.createElement(
      t,
      { ...u, ref: g, style: m },
      h
    );
  }
);
P.displayName = "Stack";
const Ie = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
  baseline: "baseline"
}, R = X(
  ({
    as: t = "div",
    space: n,
    rowSpace: r,
    alignBlock: i,
    alignInline: o,
    spread: a,
    shouldWrap: d,
    separator: s,
    grow: c = "hug",
    marginBlockStart: h,
    marginBlockEnd: u,
    borderRadius: g,
    overflow: b,
    elevation: m,
    style: y,
    children: v,
    ...L
  }, C) => {
    const j = U(n ?? "0"), B = {
      display: "flex",
      flexDirection: "row",
      columnGap: j,
      rowGap: r ?? j,
      ...i && { alignItems: Ie[i] },
      ...o && !a && { justifyContent: Ie[o] },
      ...a && { justifyContent: a },
      ...d && { flexWrap: "wrap" },
      ...c === "fill" && { flex: "1 1 auto" },
      ...h && { marginBlockStart: h },
      ...u && { marginBlockEnd: u },
      ...g && { borderRadius: g },
      ...b && { overflow: b },
      ...m && { boxShadow: m },
      ...y
    };
    let $ = v;
    if (s) {
      const A = le.Children.toArray(v).filter(Boolean);
      $ = A.map((H, N) => /* @__PURE__ */ f(je, { children: [
        H,
        N < A.length - 1 && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: s })
      ] }, N));
    }
    return le.createElement(
      t,
      { ...L, ref: C, style: B },
      $
    );
  }
);
R.displayName = "Inline";
const D = X(
  ({
    as: t = "span",
    size: n,
    weight: r,
    color: i,
    fontFamily: o,
    letterSpacing: a,
    align: d,
    textTransform: s,
    lineHeight: c,
    opacity: h,
    style: u,
    children: g,
    ...b
  }, m) => {
    const y = {
      ...n && { fontSize: n },
      ...r && { fontWeight: r },
      ...i && { color: i },
      ...o && { fontFamily: o },
      ...a && { letterSpacing: a },
      ...d && { textAlign: d },
      ...s && { textTransform: s },
      ...c !== void 0 && { lineHeight: c },
      ...h !== void 0 && { opacity: h },
      ...u
    };
    return le.createElement(
      t,
      { ...b, ref: m, style: y },
      g
    );
  }
);
D.displayName = "Text";
function Ue(t) {
  if (t !== void 0)
    return typeof t == "number" ? `repeat(${t}, 1fr)` : t.map((n) => `${n}fr`).join(" ");
}
const Ae = X(
  ({
    as: t = "div",
    columns: n,
    gap: r,
    rowGap: i,
    marginBlockStart: o,
    marginBlockEnd: a,
    borderRadius: d,
    overflow: s,
    elevation: c,
    style: h,
    children: u,
    ...g
  }, b) => {
    const m = U(n ?? 1), y = U(r ?? "0"), v = {
      display: "grid",
      gridTemplateColumns: Ue(m),
      gap: y,
      ...i && { rowGap: i },
      ...o && { marginBlockStart: o },
      ...a && { marginBlockEnd: a },
      ...d && { borderRadius: d },
      ...s && { overflow: s },
      ...c && { boxShadow: c },
      ...h
    };
    return le.createElement(
      t,
      { ...g, ref: b, style: v },
      u
    );
  }
);
Ae.displayName = "Grid";
const ce = X(
  ({
    color: t,
    weight: n,
    size: r,
    backgroundColor: i,
    padding: o,
    paddingBlock: a,
    paddingBlockStart: d,
    paddingInline: s,
    borderRadius: c,
    textTransform: h,
    display: u,
    alignSelf: g,
    style: b,
    children: m,
    ...y
  }, v) => {
    const L = {
      ...t && { color: t },
      ...n && { fontWeight: n },
      ...r && { fontSize: r },
      ...i && { backgroundColor: i },
      ...o && { padding: o },
      ...a && { paddingBlock: a },
      ...d && { paddingBlockStart: d },
      ...s && { paddingInline: s },
      ...c && { borderRadius: c },
      ...h && { textTransform: h },
      ...u && { display: u },
      ...g && { alignSelf: g },
      ...b
    };
    return /* @__PURE__ */ e("a", { ref: v, style: L, ...y, children: m });
  }
);
ce.displayName = "Anchor";
const xe = X(
  ({ borderRadius: t, objectFit: n, width: r, height: i, fill: o, style: a, ...d }, s) => {
    const c = {
      display: "block",
      ...o ? { width: "100%", height: "100%" } : {
        ...r ? { width: r, flexShrink: 0 } : { width: "100%" },
        ...i && { height: i }
      },
      ...t && { borderRadius: t },
      ...n && { objectFit: n },
      ...a
    };
    return /* @__PURE__ */ e("img", { ref: s, style: c, ...d });
  }
);
xe.displayName = "Image";
const ie = X(
  ({
    backgroundColor: t,
    gradient: n,
    color: r,
    fontFamily: i,
    padding: o,
    paddingBlock: a,
    paddingInline: d,
    borderRadius: s,
    style: c,
    children: h,
    ...u
  }, g) => {
    const b = {
      border: "none",
      cursor: "pointer",
      ...n ? { background: n } : t ? { backgroundColor: t } : {},
      ...r && { color: r },
      ...i && { fontFamily: i },
      ...o && { padding: o },
      ...a && { paddingBlock: a },
      ...d && { paddingInline: d },
      ...s && { borderRadius: s },
      ...c
    };
    return /* @__PURE__ */ e("button", { ref: g, style: b, ...u, children: h });
  }
);
ie.displayName = "Button";
const Me = X(
  ({
    backgroundColor: t,
    borderColor: n,
    borderRadius: r,
    padding: i,
    paddingBlock: o,
    paddingInline: a,
    style: d,
    ...s
  }, c) => {
    const h = {
      ...t && { backgroundColor: t },
      ...n && { border: `1px solid ${n}` },
      ...r && { borderRadius: r },
      ...i && { padding: i },
      ...o && { paddingBlock: o },
      ...a && { paddingInline: a },
      ...d
    };
    return /* @__PURE__ */ e("input", { ref: c, style: h, ...s });
  }
);
Me.displayName = "TextInput";
const Ge = X(
  ({ size: t, color: n, label: r, style: i, children: o, ...a }, d) => {
    const s = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      ...t && { width: t, height: t },
      ...n && { color: n },
      ...i
    };
    return /* @__PURE__ */ e(
      "span",
      {
        ref: d,
        role: r ? "img" : void 0,
        "aria-label": r,
        "aria-hidden": r ? void 0 : !0,
        style: s,
        ...a,
        children: o
      }
    );
  }
);
Ge.displayName = "Icon";
const l = {
  None: "0",
  XXSmall: "2px",
  XSmall: "4px",
  Small: "6px",
  /** Base unit. */
  Medium: "8px",
  MediumLarge: "12px",
  Large: "16px",
  XLarge: "20px",
  XXLarge: "24px",
  XXXLarge: "32px",
  Huge: "40px",
  XHuge: "48px",
  XXHuge: "64px",
  XXXHuge: "80px",
  Size3_5: "56px",
  Size7: "112px",
  Size8: "128px",
  Size16: "256px"
}, p = {
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
}, x = {
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
}, Je = {
  Display: "var(--bbui-font-display)",
  Body: "var(--bbui-font-body)"
}, w = {
  Micro: "10px",
  XXSmall: "12px",
  XSmall: "14px",
  Small: "16px",
  Medium: "18px",
  Large: "20px",
  XLarge: "24px",
  XXLarge: "30px",
  XXXLarge: "36px",
  Huge: "48px"
}, T = {
  Regular: 400,
  Medium: 500,
  Semibold: 600,
  Bold: 700,
  ExtraBold: 800,
  /** 900 — large display numbers */
  Black: 900
}, Ne = {
  Tighter: "-0.05em",
  Tight: "-0.025em",
  Normal: "0",
  Wide: "0.05em",
  Wider: "0.075em",
  /** 0.1em — uppercase labels */
  Widest: "0.1em"
}, M = {
  None: "0",
  Small: "4px",
  Medium: "6px",
  Large: "8px",
  XLarge: "12px",
  XXLarge: "16px",
  XXXLarge: "24px",
  Huge: "32px",
  XHuge: "48px",
  Full: "9999px"
}, z = {
  Default: "var(--bbui-border-default)",
  Input: "var(--bbui-border-input)",
  Warning: "var(--bbui-border-warning)",
  Error: "var(--bbui-border-error)",
  Info: "var(--bbui-border-info)",
  Success: "var(--bbui-border-success)",
  Focus: "var(--bbui-color-primary)",
  Outline: "var(--bbui-border-outline)"
}, Vn = {
  Thin: "1px",
  Medium: "2px",
  Thick: "4px",
  XThick: "8px"
}, Yn = {
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
}, ge = {
  Brand: "var(--bbui-gradient-brand)"
}, _n = {
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
}, Un = {
  Small: "16px",
  Medium: "20px",
  Large: "24px",
  XLarge: "32px",
  XXLarge: "40px"
}, oe = {
  NotAssessed: "var(--bbui-bloom-not-assessed)",
  Aware: "var(--bbui-bloom-aware)",
  Understands: "var(--bbui-bloom-understands)",
  Applies: "var(--bbui-bloom-applies)",
  Analyzes: "var(--bbui-bloom-analyzes)",
  Masters: "var(--bbui-bloom-masters)"
}, te = {
  NotAssessed: "NOT_ASSESSED",
  Aware: "AWARE",
  Understands: "UNDERSTANDS",
  Applies: "APPLIES",
  Analyzes: "ANALYZES",
  Masters: "MASTERS"
};
function Ze(t) {
  switch (t) {
    case te.Masters:
      return oe.Masters;
    case te.Analyzes:
      return oe.Analyzes;
    case te.Applies:
      return oe.Applies;
    case te.Understands:
      return oe.Understands;
    case te.Aware:
      return oe.Aware;
    default:
      return oe.NotAssessed;
  }
}
function qe(t) {
  return t >= 90 ? te.Masters : t >= 80 ? te.Analyzes : t >= 60 ? te.Applies : t >= 40 ? te.Understands : t >= 20 ? te.Aware : te.NotAssessed;
}
function Gn(t) {
  return Ze(qe(t));
}
const Jn = {
  correct: oe.Masters,
  partial: oe.Applies,
  incorrect: "var(--bbui-color-error)",
  skipped: "var(--bbui-color-subtlest)"
}, Zn = {
  up: oe.Masters,
  down: "var(--bbui-color-error)",
  unchanged: "var(--bbui-color-subtlest)"
}, qn = {
  Nova: "var(--bbui-persona-nova)",
  Maya: "var(--bbui-persona-maya)",
  Jordan: "var(--bbui-persona-jordan)",
  Custom: "var(--bbui-persona-custom)"
}, Qe = {
  default: { backgroundColor: x.NeutralBold, color: p.Default },
  success: { backgroundColor: x.Success, color: p.Inverse },
  warning: { backgroundColor: x.Warning, color: p.Warning },
  error: { backgroundColor: x.Error, color: p.Error },
  info: { backgroundColor: x.Info, color: p.Info },
  brand: { backgroundColor: x.Brand, color: p.Inverse },
  primaryTint: { backgroundColor: x.PrimaryTint, color: p.Brand },
  errorTint: { backgroundColor: x.ErrorTint, color: p.Error },
  warningTint: { backgroundColor: x.WarningTint, color: "#ea580c" },
  infoTint: { backgroundColor: x.InfoTint, color: "#2563eb" },
  accentTint: { backgroundColor: x.AccentTint, color: "#7c3aed" }
}, We = X(
  ({ variant: t = "default", uppercase: n = !1, style: r, children: i, ...o }, a) => {
    const d = Qe[t], s = {
      display: "inline-flex",
      alignItems: "center",
      lineHeight: 1,
      paddingBlock: l.XXSmall,
      paddingInline: n ? l.MediumLarge : l.Medium,
      borderRadius: M.Full,
      fontWeight: n ? T.Black : T.Medium,
      fontSize: n ? w.Micro : w.XXSmall,
      letterSpacing: n ? Ne.Wider : void 0,
      textTransform: n ? "uppercase" : void 0,
      ...d,
      ...r
    };
    return /* @__PURE__ */ e("span", { ref: a, style: s, ...o, children: i });
  }
);
We.displayName = "Badge";
const et = {
  compact: { block: l.XXSmall, inline: l.Small },
  comfortable: { block: l.XSmall, inline: l.Medium }
}, tt = X(
  ({
    selected: t = !1,
    appearance: n = "filled",
    density: r = "compact",
    fontWeight: i = T.Medium,
    fontSize: o = w.XSmall,
    icon: a,
    showCheckWhenSelected: d = !1,
    disabled: s,
    style: c,
    children: h,
    ...u
  }, g) => {
    const b = et[r], m = t ? x.Brand : n === "outlined" ? x.Transparent : x.Subtle, y = t ? p.OnBrand : p.Default, v = n === "outlined" && !t ? `1px solid ${z.Outline}` : "1px solid transparent", L = {
      display: "inline-flex",
      alignItems: "center",
      gap: l.XSmall,
      paddingBlock: b.block,
      paddingInline: b.inline,
      borderRadius: M.Full,
      backgroundColor: m,
      color: y,
      border: v,
      fontFamily: "inherit",
      fontWeight: i,
      fontSize: o,
      lineHeight: 1.2,
      cursor: s ? "not-allowed" : "pointer",
      opacity: s ? 0.5 : 1,
      whiteSpace: "nowrap",
      width: "auto",
      flex: "0 0 auto",
      ...c
    };
    return /* @__PURE__ */ f(
      "button",
      {
        ref: g,
        type: "button",
        "aria-pressed": t,
        disabled: s,
        style: L,
        ...u,
        children: [
          a,
          d && t && /* @__PURE__ */ e(
            "span",
            {
              className: "material-symbols-outlined",
              style: { fontSize: 14 },
              "aria-hidden": !0,
              children: "check"
            }
          ),
          h
        ]
      }
    );
  }
);
tt.displayName = "Chip";
const nt = "40px", rt = "24px", Se = "20px", Ee = l.XXSmall, lt = X(
  ({ checked: t, defaultChecked: n = !1, onChange: r, label: i, style: o, ...a }, d) => {
    const [s, c] = O(n), h = t !== void 0, u = h ? t : s, g = G(() => {
      const y = !u;
      h || c(y), r == null || r(y);
    }, [u, h, r]), b = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      width: nt,
      height: rt,
      borderRadius: M.Full,
      backgroundColor: u ? x.Brand : x.Neutral,
      border: "none",
      cursor: "pointer",
      padding: 0,
      transition: "background-color 150ms ease",
      ...o
    }, m = {
      position: "absolute",
      width: Se,
      height: Se,
      borderRadius: M.Full,
      backgroundColor: x.Default,
      transition: "left 150ms ease",
      left: u ? `calc(100% - ${Se} - ${Ee})` : Ee,
      boxShadow: "0 1px 3px rgba(0,0,0,.2)"
    };
    return /* @__PURE__ */ e(
      "button",
      {
        ref: d,
        type: "button",
        role: "switch",
        "aria-checked": u,
        "aria-label": i,
        onClick: g,
        style: b,
        ...a,
        children: /* @__PURE__ */ e("span", { style: m })
      }
    );
  }
);
lt.displayName = "Toggle";
const it = X(
  ({
    backgroundColor: t,
    color: n,
    padding: r,
    paddingBlock: i,
    paddingInline: o,
    borderRadius: a,
    style: d,
    children: s,
    ...c
  }, h) => {
    const u = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      cursor: "pointer",
      border: "none",
      ...t && { backgroundColor: t },
      ...n && { color: n },
      ...r && { padding: r },
      ...i && { paddingBlock: i },
      ...o && { paddingInline: o },
      ...a && { borderRadius: a },
      ...d
    };
    return /* @__PURE__ */ e("a", { ref: h, style: u, ...c, children: s });
  }
);
it.displayName = "LinkButton";
const Q = X(
  ({ label: t, size: n, color: r, backgroundColor: i, padding: o, style: a, children: d, ...s }, c) => {
    const h = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      cursor: "pointer",
      background: i ?? "none",
      ...n && { width: n, height: n },
      ...r && { color: r },
      ...o && { padding: o },
      ...a
    };
    return /* @__PURE__ */ e(
      "button",
      {
        ref: c,
        type: "button",
        "aria-label": t,
        style: h,
        ...s,
        children: d
      }
    );
  }
);
Q.displayName = "IconButton";
const ot = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64
}, at = {
  xsmall: "10px",
  small: "12px",
  medium: "14px",
  large: "16px",
  xlarge: "24px"
}, st = {
  xsmall: 6,
  small: 8,
  medium: 10,
  large: 12,
  xlarge: 16
}, dt = {
  online: "#22c55e",
  offline: "#bccbb9",
  busy: "#ba1a1a",
  focus: "#3b82f6"
};
function ct(t) {
  var r;
  const n = t.trim().split(/\s+/);
  return n.length >= 2 ? (n[0][0] + n[n.length - 1][0]).toUpperCase() : (((r = n[0]) == null ? void 0 : r[0]) ?? "").toUpperCase();
}
const ut = X(
  ({
    src: t,
    name: n,
    size: r = "medium",
    appearance: i = "circle",
    status: o,
    fallbackBackground: a = x.NeutralBold,
    fallbackColor: d = p.Subtle
  }, s) => {
    const [c, h] = O(!1), u = ot[r], g = t && !c, b = n ? ct(n) : "", m = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: u,
      height: u,
      borderRadius: i === "circle" ? M.Full : M.XLarge,
      overflow: "hidden",
      flexShrink: 0,
      ...g ? {} : { backgroundColor: a }
    }, y = st[r], v = o ? {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: y,
      height: y,
      borderRadius: M.Full,
      backgroundColor: dt[o],
      border: "2px solid #ffffff",
      boxSizing: "border-box"
    } : void 0;
    return /* @__PURE__ */ f("span", { ref: s, style: m, role: "img", "aria-label": n ?? "Avatar", children: [
      g ? /* @__PURE__ */ e(
        "img",
        {
          src: t,
          alt: n ?? "",
          onError: () => h(!0),
          style: { width: "100%", height: "100%", objectFit: "cover" }
        }
      ) : /* @__PURE__ */ e(
        "span",
        {
          style: {
            fontSize: at[r],
            fontWeight: T.Semibold,
            color: d,
            lineHeight: 1,
            userSelect: "none"
          },
          children: b
        }
      ),
      o && /* @__PURE__ */ e("span", { style: v })
    ] });
  }
);
ut.displayName = "Avatar";
const pt = {
  xsmall: 16,
  small: 24,
  medium: 32,
  large: 48,
  xlarge: 64
}, ht = {
  xsmall: 2,
  small: 2,
  medium: 3,
  large: 3,
  xlarge: 4
}, Fe = X(
  ({ size: t = "medium", label: n = "Loading", color: r = p.Brand }, i) => {
    const o = ye().replace(/:/g, ""), a = pt[t], d = ht[t], s = (a - d) / 2, c = 2 * Math.PI * s;
    return /* @__PURE__ */ f(
      "span",
      {
        ref: i,
        role: "status",
        "aria-label": n,
        style: {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: a,
          height: a
        },
        children: [
          /* @__PURE__ */ e("style", { children: `
          @keyframes bbui-spin-${o} {
            to { transform: rotate(360deg); }
          }
        ` }),
          /* @__PURE__ */ f(
            "svg",
            {
              width: a,
              height: a,
              viewBox: `0 0 ${a} ${a}`,
              fill: "none",
              style: {
                animation: `bbui-spin-${o} 0.8s linear infinite`
              },
              children: [
                /* @__PURE__ */ e(
                  "circle",
                  {
                    cx: a / 2,
                    cy: a / 2,
                    r: s,
                    stroke: r,
                    strokeWidth: d,
                    strokeLinecap: "round",
                    strokeDasharray: c,
                    strokeDashoffset: c * 0.7,
                    opacity: 0.9
                  }
                ),
                /* @__PURE__ */ e(
                  "circle",
                  {
                    cx: a / 2,
                    cy: a / 2,
                    r: s,
                    stroke: r,
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
Fe.displayName = "Spinner";
const bt = X(
  ({
    backgroundColor: t,
    borderColor: n,
    borderRadius: r,
    padding: i,
    paddingBlock: o,
    paddingInline: a,
    style: d,
    ...s
  }, c) => {
    const h = {
      fontFamily: "inherit",
      fontSize: "inherit",
      resize: "vertical",
      ...t && { backgroundColor: t },
      ...n ? { border: `1px solid ${n}` } : { border: "none" },
      ...r && { borderRadius: r },
      ...i && { padding: i },
      ...o && { paddingBlock: o },
      ...a && { paddingInline: a },
      ...d
    };
    return /* @__PURE__ */ e("textarea", { ref: c, style: h, ...s });
  }
);
bt.displayName = "TextArea";
function gt(t) {
  return "options" in t;
}
const Oe = X(
  ({
    options: t,
    placeholder: n,
    backgroundColor: r,
    borderColor: i,
    borderRadius: o,
    padding: a,
    paddingBlock: d,
    paddingInline: s,
    fontSize: c,
    color: h,
    style: u,
    ...g
  }, b) => {
    const m = {
      appearance: "none",
      fontFamily: "inherit",
      width: "100%",
      cursor: "pointer",
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23575e70'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 12px center",
      backgroundSize: "16px",
      paddingRight: "40px",
      ...r && { backgroundColor: r },
      ...i ? { border: `1px solid ${i}` } : { border: "none" },
      ...o && { borderRadius: o },
      ...a && { padding: a },
      ...d && { paddingBlock: d },
      ...s && { paddingInline: s },
      ...c && { fontSize: c },
      ...h && { color: h },
      ...u
    };
    return /* @__PURE__ */ f("select", { ref: b, style: m, ...g, children: [
      n && /* @__PURE__ */ e("option", { value: "", disabled: !0, hidden: !0, children: n }),
      t.map(
        (y) => gt(y) ? /* @__PURE__ */ e("optgroup", { label: y.label, children: y.options.map((v) => /* @__PURE__ */ e("option", { value: v.value, disabled: v.disabled, children: v.label }, v.value)) }, y.label) : /* @__PURE__ */ e("option", { value: y.value, disabled: y.disabled, children: y.label }, y.value)
      )
    ] });
  }
);
Oe.displayName = "Select";
const mt = {
  small: { box: "16px", font: w.XXSmall, gap: l.XSmall },
  medium: { box: "20px", font: w.XSmall, gap: l.Medium },
  large: { box: "24px", font: w.Small, gap: l.Medium }
}, ft = ({ size: t }) => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    style: { width: t, height: t },
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        d: "M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z",
        clipRule: "evenodd"
      }
    )
  }
), yt = X(
  ({ label: t, size: n = "medium", checked: r, disabled: i, style: o, id: a, ...d }, s) => {
    const c = ye(), h = a ?? c, u = mt[n], g = !!r, b = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: u.box,
      height: u.box,
      borderRadius: M.Small,
      flexShrink: 0,
      border: g ? "none" : `2px solid ${z.Outline}`,
      backgroundColor: g ? i ? p.Disabled : x.Brand : x.Transparent,
      color: p.Inverse,
      cursor: i ? "default" : "pointer",
      opacity: i ? 0.5 : 1
    };
    return /* @__PURE__ */ f(
      "label",
      {
        htmlFor: h,
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: u.gap,
          cursor: i ? "default" : "pointer",
          ...o
        },
        children: [
          /* @__PURE__ */ e(
            "input",
            {
              ref: s,
              id: h,
              type: "checkbox",
              checked: r,
              disabled: i,
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
          /* @__PURE__ */ e("span", { style: b, "aria-hidden": "true", children: g && /* @__PURE__ */ e(ft, { size: `calc(${u.box} - 4px)` }) }),
          t && /* @__PURE__ */ e(
            "span",
            {
              style: {
                fontSize: u.font,
                color: i ? p.Disabled : p.Default
              },
              children: t
            }
          )
        ]
      }
    );
  }
);
yt.displayName = "Checkbox";
const vt = X(
  ({
    orientation: t = "horizontal",
    color: n = z.Default,
    spacing: r
  }, i) => /* @__PURE__ */ e(
    "hr",
    {
      ref: i,
      role: "separator",
      "aria-orientation": t,
      style: {
        border: "none",
        margin: 0,
        flexShrink: 0,
        ...t === "vertical" ? {
          borderLeft: `1px solid ${n}`,
          alignSelf: "stretch",
          ...r && { marginInline: r }
        } : {
          borderTop: `1px solid ${n}`,
          width: "100%",
          ...r && { marginBlock: r }
        }
      }
    }
  )
);
vt.displayName = "Divider";
const xt = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z", clipRule: "evenodd" }) }), St = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { d: "M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" }) }), wt = X(
  ({
    value: t,
    onChange: n,
    min: r = 0,
    max: i = 99,
    step: o = 1,
    disabled: a = !1,
    backgroundColor: d = x.Subtle,
    padding: s = l.XSmall
  }, c) => {
    const h = t - o >= r, u = t + o <= i;
    return /* @__PURE__ */ f(
      "div",
      {
        ref: c,
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: l.Medium,
          backgroundColor: d,
          borderRadius: M.Large,
          padding: s
        },
        children: [
          /* @__PURE__ */ e(
            Q,
            {
              label: "Decrease",
              onClick: () => h && n(t - o),
              disabled: a || !h,
              color: p.Brand,
              padding: l.XSmall,
              children: /* @__PURE__ */ e(xt, {})
            }
          ),
          /* @__PURE__ */ e(
            D,
            {
              as: "span",
              size: w.Medium,
              weight: T.Bold,
              color: p.Default,
              style: { minWidth: "32px", textAlign: "center" },
              children: t
            }
          ),
          /* @__PURE__ */ e(
            Q,
            {
              label: "Increase",
              onClick: () => u && n(t + o),
              disabled: a || !u,
              color: p.Brand,
              padding: l.XSmall,
              children: /* @__PURE__ */ e(St, {})
            }
          )
        ]
      }
    );
  }
);
wt.displayName = "Stepper";
const kt = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    style: { width: "24px", height: "24px" },
    children: /* @__PURE__ */ e(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      }
    )
  }
), Xt = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "24px", height: "24px" },
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        clipRule: "evenodd"
      }
    )
  }
), Mt = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "20px", height: "20px" },
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
        clipRule: "evenodd"
      }
    )
  }
), Lt = X(
  ({
    logo: t,
    navigation: n = [],
    cta: r,
    linkColor: i = p.Subtle,
    ctaBackgroundColor: o = x.Dark,
    ctaColor: a = p.Inverse,
    ctaWeight: d = 500,
    ctaBorderRadius: s = M.Full,
    paddingInline: c = l.XXXLarge,
    paddingBlock: h = l.XLarge,
    linkGap: u = l.XXLarge,
    logoGap: g = l.Size3_5,
    mobileMenuBackground: b = x.Default,
    mobileMenuBorderColor: m = z.Default,
    mobileMenuBorderRadius: y = M.Large,
    mobileBreakpoint: v = 768
  }, L) => {
    const [C, j] = O(!1), [B, $] = O(!1);
    Y(() => {
      const I = () => $(window.innerWidth < v);
      return I(), window.addEventListener("resize", I), () => window.removeEventListener("resize", I);
    }, [v]);
    const A = G((I) => {
      I.target.closest("[data-navbar-menu]") || j(!1);
    }, []);
    Y(() => (document.addEventListener("click", A), () => document.removeEventListener("click", A)), [A]);
    const H = le.isValidElement(t) ? t : /* @__PURE__ */ e(
      xe,
      {
        src: t.src,
        alt: t.alt ?? "Logo",
        style: {
          width: t.width ?? 120,
          height: t.height ?? "auto"
        }
      }
    ), N = /* @__PURE__ */ e(re, { children: n.map((I, W) => /* @__PURE__ */ e(
      ce,
      {
        href: I.path,
        color: i,
        display: "block",
        style: { textDecoration: "none" },
        children: I.title
      },
      W
    )) }), k = r ? /* @__PURE__ */ e(
      ce,
      {
        href: r.path,
        backgroundColor: o,
        color: a,
        paddingBlock: l.Medium,
        paddingInline: l.Large,
        borderRadius: s,
        weight: d,
        display: "inline-block",
        style: { textDecoration: "none" },
        children: /* @__PURE__ */ f(R, { space: l.XSmall, alignBlock: "center", children: [
          /* @__PURE__ */ e(D, { as: "span", color: a, weight: d, children: r.label }),
          r.icon ?? /* @__PURE__ */ e(Mt, {})
        ] })
      }
    ) : null;
    return B ? /* @__PURE__ */ f(S, { as: "header", ref: L, "data-navbar-menu": !0, children: [
      /* @__PURE__ */ e(
        S,
        {
          as: "nav",
          paddingInline: l.Large,
          paddingBlock: h,
          children: /* @__PURE__ */ f(R, { alignBlock: "center", spread: "space-between", children: [
            /* @__PURE__ */ e(S, { children: H }),
            /* @__PURE__ */ e(
              ie,
              {
                onClick: () => j(!C),
                style: {
                  background: "none",
                  padding: 0,
                  color: p.Subtle
                },
                children: C ? /* @__PURE__ */ e(Xt, {}) : /* @__PURE__ */ e(kt, {})
              }
            )
          ] })
        }
      ),
      C && /* @__PURE__ */ e(
        S,
        {
          backgroundColor: b,
          elevation: se.Raised,
          borderRadius: y,
          borderColor: m,
          borderSide: "all",
          padding: l.Large,
          style: { margin: l.Medium },
          children: /* @__PURE__ */ f("nav", { children: [
            /* @__PURE__ */ e("ul", { style: { listStyle: "none", padding: 0, margin: 0 }, children: n.map((I, W) => /* @__PURE__ */ e("li", { style: { paddingBlock: l.MediumLarge }, children: /* @__PURE__ */ e(
              ce,
              {
                href: I.path,
                color: i,
                display: "block",
                style: { textDecoration: "none" },
                children: I.title
              }
            ) }, W)) }),
            k && /* @__PURE__ */ e(S, { marginBlockStart: l.XXLarge, children: k })
          ] })
        }
      )
    ] }) : /* @__PURE__ */ e(S, { as: "header", ref: L, style: { width: "100%" }, children: /* @__PURE__ */ e(
      S,
      {
        as: "nav",
        paddingInline: c,
        paddingBlock: h,
        style: { width: "100%" },
        children: /* @__PURE__ */ f(R, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ e(S, { children: H }),
          /* @__PURE__ */ f(
            R,
            {
              space: u,
              alignBlock: "center",
              grow: "fill",
              style: { marginInlineStart: g },
              children: [
                /* @__PURE__ */ e(
                  R,
                  {
                    space: u,
                    alignBlock: "center",
                    grow: "fill",
                    alignInline: "center",
                    children: N
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
Lt.displayName = "Navbar";
const ze = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "20px", height: "20px" },
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
        clipRule: "evenodd"
      }
    )
  }
), Ct = X(
  ({
    title: t,
    subtitle: n,
    badge: r,
    actions: i = [],
    image: o,
    children: a,
    titleSize: d = w.XXXLarge,
    titleSizeLarge: s = w.Huge,
    titleWeight: c = T.ExtraBold,
    titleColor: h = p.Default,
    subtitleSize: u = w.Small,
    subtitleColor: g = p.Subtlest,
    primaryCtaBackground: b = x.Dark,
    primaryCtaColor: m = p.Inverse,
    primaryCtaBorderRadius: y = M.Full,
    primaryCtaWeight: v = 500,
    secondaryCtaColor: L = p.Subtle,
    secondaryCtaWeight: C = 500,
    ctaGap: j = l.MediumLarge,
    paddingBlock: B = l.Size7,
    paddingInline: $ = l.XXXLarge,
    contentGap: A = l.XHuge,
    textGap: H = l.XLarge,
    textMaxWidth: N = "576px",
    gradient: k,
    breakpoint: I = 768
  }, W) => {
    const [K, F] = O(!1);
    Y(() => {
      const ee = () => F(window.innerWidth >= I);
      return ee(), window.addEventListener("resize", ee), () => window.removeEventListener("resize", ee);
    }, [I]);
    const V = (k == null ? void 0 : k.enabled) !== !1, _ = (k == null ? void 0 : k.css) ?? "linear-gradient(143.6deg, rgba(192,132,252,0) 20.79%, rgba(232,121,249,0.26) 40.92%, rgba(204,171,238,0) 70.35%)", E = (k == null ? void 0 : k.height) ?? "580px", J = (r == null ? void 0 : r.borderColor) ?? z.Default, q = r ? /* @__PURE__ */ e(
      ce,
      {
        href: r.path ?? "#",
        borderRadius: M.Full,
        paddingBlock: l.XSmall,
        paddingInline: l.Small,
        size: w.XSmall,
        weight: 500,
        display: "inline-block",
        style: {
          textDecoration: "none",
          border: `1px solid ${J}`,
          paddingRight: l.XXLarge
        },
        children: /* @__PURE__ */ f(R, { space: l.MediumLarge, alignBlock: "center", children: [
          /* @__PURE__ */ e(
            D,
            {
              as: "span",
              size: w.XSmall,
              color: r.labelColor ?? p.Inverse,
              style: {
                backgroundColor: r.labelBackgroundColor ?? x.Accent,
                borderRadius: M.Full,
                padding: `${l.XSmall} ${l.MediumLarge}`
              },
              children: r.label
            }
          ),
          /* @__PURE__ */ f(R, { space: l.XXSmall, alignBlock: "center", children: [
            /* @__PURE__ */ e(D, { as: "span", size: w.XSmall, children: r.text }),
            r.icon ?? /* @__PURE__ */ e(ze, {})
          ] })
        ] })
      }
    ) : null, Z = i.length > 0 ? /* @__PURE__ */ e(R, { space: j, alignBlock: "center", shouldWrap: !0, children: i.map((ee, be) => {
      const he = (ee.variant ?? (be === 0 ? "primary" : "secondary")) === "primary", Le = he ? v : C;
      return /* @__PURE__ */ e(
        ce,
        {
          href: ee.path,
          backgroundColor: he ? b : void 0,
          color: he ? m : L,
          paddingBlock: l.Medium,
          paddingInline: l.Large,
          borderRadius: he ? y : void 0,
          weight: Le,
          display: "inline-block",
          style: { textDecoration: "none" },
          children: /* @__PURE__ */ f(R, { space: l.XSmall, alignBlock: "center", children: [
            /* @__PURE__ */ e(
              D,
              {
                as: "span",
                color: he ? m : L,
                weight: Le,
                children: ee.label
              }
            ),
            ee.icon ?? /* @__PURE__ */ e(ze, {})
          ] })
        },
        be
      );
    }) }) : null, pe = /* @__PURE__ */ f(
      P,
      {
        space: H,
        style: { maxWidth: N, flexShrink: 0 },
        children: [
          q,
          /* @__PURE__ */ e(
            D,
            {
              as: "h1",
              size: K ? s : d,
              weight: c,
              color: h,
              lineHeight: 1.2,
              children: t
            }
          ),
          n && /* @__PURE__ */ e(
            D,
            {
              as: "p",
              color: g,
              size: u,
              lineHeight: 1.6,
              children: n
            }
          ),
          a,
          Z
        ]
      }
    ), de = o && K ? /* @__PURE__ */ e(S, { style: { flex: "1 1 0%", minWidth: 0 }, children: /* @__PURE__ */ e(
      xe,
      {
        src: o.src,
        alt: o.alt ?? "",
        style: { maxWidth: o.maxWidth ?? "576px" }
      }
    ) }) : null;
    return /* @__PURE__ */ f(S, { as: "section", ref: W, style: { position: "relative" }, children: [
      V && /* @__PURE__ */ e(
        "div",
        {
          "aria-hidden": "true",
          style: {
            position: "absolute",
            inset: 0,
            height: E,
            background: _,
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
          paddingBlock: B,
          children: K ? /* @__PURE__ */ f(R, { space: A, alignBlock: "center", children: [
            pe,
            de
          ] }) : /* @__PURE__ */ e(P, { space: A, children: pe })
        }
      )
    ] });
  }
);
Ct.displayName = "HeroSection";
const Bt = X(
  ({
    padding: t = l.Large,
    backgroundColor: n = x.Default,
    borderRadius: r = M.XXLarge,
    borderColor: i = z.Default,
    elevation: o = se.Ambient,
    accentColor: a,
    accentWidth: d = "8px",
    header: s,
    footer: c,
    children: h
  }, u) => /* @__PURE__ */ e(
    S,
    {
      ref: u,
      backgroundColor: n,
      borderRadius: r,
      borderColor: i,
      borderSide: "all",
      elevation: o,
      overflow: "hidden",
      style: {
        ...a && {
          borderTop: `${d} solid ${a}`
        }
      },
      children: /* @__PURE__ */ f(P, { children: [
        s && /* @__PURE__ */ e(
          S,
          {
            padding: t,
            style: { borderBottom: `1px solid ${i}` },
            children: s
          }
        ),
        /* @__PURE__ */ e(S, { padding: t, children: h }),
        c && /* @__PURE__ */ e(
          S,
          {
            padding: t,
            style: { borderTop: `1px solid ${i}` },
            children: c
          }
        )
      ] })
    }
  )
);
Bt.displayName = "Card";
const Dt = X(
  ({
    label: t,
    helperText: n,
    errorText: r,
    id: i,
    labelColor: o = p.Default,
    labelSize: a = w.XSmall,
    labelWeight: d = T.Medium,
    labelTextTransform: s,
    labelLetterSpacing: c,
    inputBackground: h = x.Default,
    inputBorderColor: u = z.Input,
    inputBorderRadius: g = M.Medium,
    inputBorderSide: b = "all",
    inputPadding: m = l.Medium,
    startAdornment: y,
    endAdornment: v,
    name: L,
    type: C,
    placeholder: j,
    value: B,
    defaultValue: $,
    disabled: A,
    readOnly: H,
    required: N,
    autoFocus: k,
    autoComplete: I,
    onChange: W,
    onBlur: K,
    onFocus: F
  }, V) => {
    const _ = ye(), E = i ?? _, J = `${E}-helper`, q = `${E}-error`, Z = !!r, ue = Z ? z.Error : u, pe = b === "bottom", de = pe || !!(y || v), ee = /* @__PURE__ */ e(
      Me,
      {
        ref: V,
        id: E,
        name: L,
        type: C,
        placeholder: j,
        value: B,
        defaultValue: $,
        disabled: A,
        readOnly: H,
        required: N,
        autoFocus: k,
        autoComplete: I,
        onChange: W,
        onBlur: K,
        onFocus: F,
        backgroundColor: de ? "transparent" : h,
        borderColor: de ? void 0 : ue,
        borderRadius: de ? void 0 : g,
        padding: m,
        style: {
          width: "100%",
          ...de ? { flex: "1 1 auto", minWidth: 0 } : {}
        },
        "aria-describedby": Z ? q : n ? J : void 0,
        "aria-invalid": Z || void 0
      }
    ), be = de ? /* @__PURE__ */ f("div", { style: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      backgroundColor: h,
      ...pe ? { borderBottom: `2px solid ${ue}` } : { border: `1px solid ${ue}`, borderRadius: g }
    }, children: [
      y,
      ee,
      v
    ] }) : ee;
    return /* @__PURE__ */ f(P, { space: l.XSmall, children: [
      t && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: E,
          style: {
            fontSize: a,
            fontWeight: d,
            color: o,
            textTransform: s,
            letterSpacing: c
          },
          children: t
        }
      ),
      be,
      Z && /* @__PURE__ */ e(D, { as: "span", size: w.XXSmall, color: p.Error, id: q, children: r }),
      !Z && n && /* @__PURE__ */ e(D, { as: "span", size: w.XXSmall, color: p.Subtle, id: J, children: n })
    ] });
  }
);
Dt.displayName = "TextField";
const It = {
  info: {
    bg: x.InfoTint,
    text: p.Info,
    border: z.Info
  },
  success: {
    bg: x.PrimaryTint,
    text: p.Success,
    border: z.Success
  },
  warning: {
    bg: x.WarningTint,
    text: p.Warning,
    border: z.Warning
  },
  error: {
    bg: x.ErrorTint,
    text: p.Error,
    border: z.Error
  }
}, Et = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "16px", height: "16px" },
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        clipRule: "evenodd"
      }
    )
  }
), zt = X(
  ({ variant: t = "info", icon: n, dismissible: r, onDismiss: i, children: o }, a) => {
    const d = It[t];
    return /* @__PURE__ */ e(
      S,
      {
        ref: a,
        role: "alert",
        padding: l.MediumLarge,
        borderRadius: M.Medium,
        style: {
          backgroundColor: d.bg,
          borderLeft: `4px solid ${d.border}`,
          position: "relative",
          zIndex: ae.Banner
        },
        children: /* @__PURE__ */ f(R, { space: l.Medium, alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ f(R, { space: l.Medium, alignBlock: "center", grow: "fill", children: [
            n && /* @__PURE__ */ e(S, { style: { color: d.text, flexShrink: 0 }, children: n }),
            /* @__PURE__ */ e(D, { as: "span", size: w.XSmall, color: d.text, children: o })
          ] }),
          r && /* @__PURE__ */ e(
            Q,
            {
              label: "Dismiss",
              onClick: i,
              color: d.text,
              padding: l.XXSmall,
              children: /* @__PURE__ */ e(Et, {})
            }
          )
        ] })
      }
    );
  }
);
zt.displayName = "Banner";
const He = X(
  ({
    sections: t,
    activeId: n,
    onSelect: r,
    activeColor: i = p.Brand,
    activeBackground: o = x.Subtle
  }, a) => /* @__PURE__ */ e(P, { ref: a, as: "nav", space: l.Small, children: t.map((d, s) => /* @__PURE__ */ f(P, { space: l.XXSmall, children: [
    d.title && /* @__PURE__ */ e(S, { paddingInline: l.Medium, paddingBlock: l.XSmall, children: /* @__PURE__ */ e(
      D,
      {
        as: "span",
        size: w.XXSmall,
        weight: 600,
        color: p.Subtlest,
        textTransform: "uppercase",
        children: d.title
      }
    ) }),
    /* @__PURE__ */ e(P, { as: "ul", style: { listStyle: "none", padding: 0, margin: 0 }, children: d.items.map((c) => {
      const h = c.id === n;
      return /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(
        ie,
        {
          disabled: c.disabled,
          onClick: () => r == null ? void 0 : r(c.id),
          borderRadius: M.Medium,
          color: c.disabled ? p.Disabled : h ? i : p.Default,
          backgroundColor: h ? o : x.Transparent,
          paddingBlock: l.Medium,
          paddingInline: l.MediumLarge,
          style: {
            width: "100%",
            fontSize: w.XSmall,
            textAlign: "left",
            cursor: c.disabled ? "default" : "pointer"
          },
          children: /* @__PURE__ */ f(R, { space: l.Medium, alignBlock: "center", children: [
            c.icon && /* @__PURE__ */ e(S, { style: { flexShrink: 0 }, children: c.icon }),
            /* @__PURE__ */ e(D, { as: "span", size: w.XSmall, style: { color: "inherit" }, children: c.label })
          ] })
        }
      ) }, c.id);
    }) }),
    s < t.length - 1 && /* @__PURE__ */ e(
      S,
      {
        style: {
          borderTop: `1px solid ${z.Default}`,
          marginBlock: l.XSmall
        }
      }
    )
  ] }, s)) })
);
He.displayName = "Menu";
const Tt = X(
  ({
    tabs: t,
    activeId: n,
    defaultActiveId: r,
    onChange: i,
    variant: o = "underline",
    activeColor: a = p.Brand,
    inactiveColor: d = p.Subtle,
    pillBackground: s = x.Subtle,
    activePillBackground: c = x.Default,
    panelPadding: h = l.Large
  }, u) => {
    var j;
    const [g, b] = O(
      r ?? ((j = t[0]) == null ? void 0 : j.id)
    ), m = n !== void 0, y = m ? n : g, v = (B) => {
      m || b(B), i == null || i(B);
    }, L = t.find((B) => B.id === y);
    return /* @__PURE__ */ f(S, { ref: u, children: [
      o === "pill" ? /* @__PURE__ */ e(
        R,
        {
          role: "tablist",
          space: l.XSmall,
          alignBlock: "center",
          style: {
            backgroundColor: s,
            padding: l.Small,
            borderRadius: M.XXLarge,
            width: "fit-content"
          },
          children: t.map((B) => {
            const $ = B.id === y;
            return /* @__PURE__ */ e(
              ie,
              {
                role: "tab",
                "aria-selected": $,
                "aria-controls": `tabpanel-${B.id}`,
                id: `tab-${B.id}`,
                disabled: B.disabled,
                onClick: () => v(B.id),
                paddingBlock: l.Medium,
                paddingInline: l.XXLarge,
                borderRadius: M.XLarge,
                color: $ ? p.Default : B.disabled ? p.Disabled : d,
                backgroundColor: $ ? c : x.Transparent,
                style: {
                  fontWeight: $ ? T.Bold : T.Medium,
                  fontSize: w.XSmall,
                  boxShadow: $ ? se.Raised : "none",
                  cursor: B.disabled ? "default" : "pointer"
                },
                children: B.label
              },
              B.id
            );
          })
        }
      ) : /* @__PURE__ */ e(
        R,
        {
          as: "div",
          role: "tablist",
          space: l.None,
          style: {
            borderBottom: `1px solid ${z.Default}`
          },
          children: t.map((B) => {
            const $ = B.id === y;
            return /* @__PURE__ */ e(
              ie,
              {
                role: "tab",
                "aria-selected": $,
                "aria-controls": `tabpanel-${B.id}`,
                id: `tab-${B.id}`,
                disabled: B.disabled,
                onClick: () => v(B.id),
                paddingBlock: l.Medium,
                paddingInline: l.Large,
                borderRadius: M.None,
                color: $ ? a : B.disabled ? p.Disabled : d,
                style: {
                  background: "none",
                  fontWeight: $ ? T.Semibold : T.Regular,
                  fontSize: w.XSmall,
                  borderBottom: $ ? `2px solid ${a}` : "2px solid transparent",
                  marginBottom: "-1px",
                  cursor: B.disabled ? "default" : "pointer"
                },
                children: B.label
              },
              B.id
            );
          })
        }
      ),
      L && /* @__PURE__ */ e(
        S,
        {
          role: "tabpanel",
          id: `tabpanel-${L.id}`,
          "aria-labelledby": `tab-${L.id}`,
          padding: h,
          children: L.content
        }
      )
    ] });
  }
);
Tt.displayName = "Tabs";
const Rt = X(
  ({
    title: t,
    subtitle: n,
    breadcrumbs: r,
    actions: i,
    titleSize: o = w.XLarge,
    titleWeight: a = T.Bold,
    titleColor: d = p.Default,
    subtitleColor: s = p.Subtle,
    breadcrumbLinkColor: c = p.Link,
    borderColor: h = z.Default,
    paddingBlock: u = l.Large
  }, g) => /* @__PURE__ */ e(
    S,
    {
      ref: g,
      as: "header",
      paddingBlock: u,
      style: {
        borderBottom: `1px solid ${h}`
      },
      children: /* @__PURE__ */ f(P, { space: l.Medium, children: [
        r && r.length > 0 && /* @__PURE__ */ e(R, { space: l.XSmall, alignBlock: "center", children: r.map((b, m) => /* @__PURE__ */ f(le.Fragment, { children: [
          m > 0 && /* @__PURE__ */ e(D, { as: "span", color: p.Disabled, size: w.XSmall, children: "/" }),
          b.href ? /* @__PURE__ */ e(
            ce,
            {
              href: b.href,
              color: c,
              size: w.XSmall,
              style: { textDecoration: "none" },
              children: b.label
            }
          ) : /* @__PURE__ */ e(D, { as: "span", size: w.XSmall, color: p.Subtlest, children: b.label })
        ] }, m)) }),
        /* @__PURE__ */ f(R, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ f(P, { space: l.XXSmall, children: [
            /* @__PURE__ */ e(D, { as: "h1", size: o, weight: a, color: d, children: t }),
            n && /* @__PURE__ */ e(D, { as: "p", size: w.XSmall, color: s, children: n })
          ] }),
          i && /* @__PURE__ */ e(R, { space: l.Medium, alignBlock: "center", children: i })
        ] })
      ] })
    }
  )
);
Rt.displayName = "Header";
const $t = {
  XSmall: "320px",
  Small: "416px",
  Medium: "512px",
  Large: "704px",
  XLarge: "960px",
  Full: "min(96vw, 1440px)"
}, At = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "20px", height: "20px" },
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        clipRule: "evenodd"
      }
    )
  }
), Nt = X(
  ({ open: t, onClose: n, title: r, children: i, footer: o, size: a = $t.Medium }, d) => {
    const s = G(
      (c) => {
        c.key === "Escape" && n();
      },
      [n]
    );
    return Y(() => {
      if (t)
        return document.addEventListener("keydown", s), document.body.style.overflow = "hidden", () => {
          document.removeEventListener("keydown", s), document.body.style.overflow = "";
        };
    }, [t, s]), t ? Xe(
      /* @__PURE__ */ e(
        S,
        {
          style: {
            position: "fixed",
            inset: 0,
            zIndex: ae.Modal,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: x.Overlay
          },
          onClick: (c) => {
            c.target === c.currentTarget && n();
          },
          children: /* @__PURE__ */ e(
            S,
            {
              ref: d,
              role: "dialog",
              "aria-modal": "true",
              "aria-label": r,
              backgroundColor: x.Default,
              borderRadius: M.XLarge,
              elevation: se.Overlay,
              overflow: "hidden",
              style: {
                width: "100%",
                maxWidth: a,
                maxHeight: "85vh",
                display: "flex",
                flexDirection: "column"
              },
              children: /* @__PURE__ */ f(P, { children: [
                r && /* @__PURE__ */ e(
                  S,
                  {
                    padding: l.Large,
                    style: { borderBottom: `1px solid ${z.Default}` },
                    children: /* @__PURE__ */ f(R, { alignBlock: "center", spread: "space-between", children: [
                      /* @__PURE__ */ e(D, { as: "h2", size: w.Large, weight: T.Semibold, color: p.Default, children: r }),
                      /* @__PURE__ */ e(Q, { label: "Close", onClick: n, color: p.Subtle, children: /* @__PURE__ */ e(At, {}) })
                    ] })
                  }
                ),
                /* @__PURE__ */ e(S, { padding: l.Large, overflow: "auto", style: { flex: "1 1 auto" }, children: i }),
                o && /* @__PURE__ */ e(
                  S,
                  {
                    padding: l.Large,
                    style: { borderTop: `1px solid ${z.Default}` },
                    children: o
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
Nt.displayName = "Modal";
const Wt = X(
  ({ trigger: t, sections: n, activeId: r, onSelect: i }, o) => {
    const [a, d] = O(!1), s = ne(null), c = () => d((b) => !b), h = (b) => {
      i == null || i(b), d(!1);
    }, u = G((b) => {
      b.key === "Escape" && d(!1);
    }, []), g = G((b) => {
      s.current && !s.current.contains(b.target) && d(!1);
    }, []);
    return Y(() => {
      if (a)
        return document.addEventListener("keydown", u), document.addEventListener("mousedown", g), () => {
          document.removeEventListener("keydown", u), document.removeEventListener("mousedown", g);
        };
    }, [a, u, g]), /* @__PURE__ */ f(
      S,
      {
        ref: (b) => {
          s.current = b, typeof o == "function" ? o(b) : o && (o.current = b);
        },
        style: { position: "relative", display: "inline-block" },
        children: [
          /* @__PURE__ */ e(
            R,
            {
              style: { cursor: "pointer" },
              onClick: c,
              alignBlock: "center",
              children: t
            }
          ),
          a && /* @__PURE__ */ e(
            S,
            {
              backgroundColor: x.Default,
              borderColor: z.Default,
              borderSide: "all",
              borderRadius: M.Large,
              elevation: se.Dropdown,
              padding: l.XSmall,
              style: {
                position: "absolute",
                top: "100%",
                right: 0,
                marginTop: l.XSmall,
                minWidth: "192px",
                zIndex: ae.Dropdown
              },
              children: /* @__PURE__ */ e(
                He,
                {
                  sections: n,
                  activeId: r,
                  onSelect: h
                }
              )
            }
          )
        ]
      }
    );
  }
);
Wt.displayName = "DropdownMenu";
const Ft = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), Ot = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), Ht = X(
  ({
    sections: t,
    activeId: n,
    onSelect: r,
    header: i,
    footer: o,
    collapsed: a = !1,
    onToggleCollapse: d,
    width: s = "256px",
    collapsedWidth: c = "64px",
    activeColor: h = p.Brand,
    activeBackground: u = x.Subtle,
    borderColor: g = z.Default
  }, b) => /* @__PURE__ */ f(
    S,
    {
      ref: b,
      as: "aside",
      backgroundColor: x.Default,
      style: {
        width: a ? c : s,
        height: "100vh",
        position: "sticky",
        top: 0,
        borderRight: `1px solid ${g}`,
        display: "flex",
        flexDirection: "column",
        transition: "width 200ms ease",
        overflow: "hidden",
        flexShrink: 0
      },
      children: [
        i && /* @__PURE__ */ e(
          S,
          {
            padding: l.Large,
            style: { borderBottom: `1px solid ${g}` },
            children: i
          }
        ),
        /* @__PURE__ */ e(
          P,
          {
            space: l.Small,
            grow: "fill",
            style: { padding: l.Medium, overflow: "auto" },
            children: t.map((m, y) => /* @__PURE__ */ f(P, { space: l.XXSmall, children: [
              m.title && !a && /* @__PURE__ */ e(S, { paddingInline: l.Medium, paddingBlock: l.XSmall, children: /* @__PURE__ */ e(
                D,
                {
                  as: "span",
                  size: w.XXSmall,
                  weight: 600,
                  color: p.Subtlest,
                  textTransform: "uppercase",
                  children: m.title
                }
              ) }),
              m.items.map((v) => {
                const L = v.id === n;
                return /* @__PURE__ */ f(
                  ie,
                  {
                    onClick: () => r == null ? void 0 : r(v.id),
                    title: a ? v.label : void 0,
                    borderRadius: M.Medium,
                    color: L ? h : p.Default,
                    backgroundColor: L ? u : x.Transparent,
                    paddingBlock: l.Medium,
                    paddingInline: l.MediumLarge,
                    style: {
                      width: "100%",
                      fontSize: w.XSmall,
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      gap: a ? 0 : l.Medium,
                      justifyContent: a ? "center" : "flex-start"
                    },
                    children: [
                      v.icon && /* @__PURE__ */ e(S, { style: { flexShrink: 0 }, children: v.icon }),
                      !a && /* @__PURE__ */ f(re, { children: [
                        /* @__PURE__ */ e(D, { as: "span", style: { flex: "1 1 auto", color: "inherit" }, children: v.label }),
                        v.badge && /* @__PURE__ */ e(We, { variant: v.badgeVariant ?? "default", children: v.badge })
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
            padding: l.Medium,
            style: { borderTop: `1px solid ${g}` },
            children: /* @__PURE__ */ e(
              Q,
              {
                label: a ? "Expand sidebar" : "Collapse sidebar",
                onClick: d,
                color: p.Subtle,
                padding: l.XSmall,
                children: a ? /* @__PURE__ */ e(Ot, {}) : /* @__PURE__ */ e(Ft, {})
              }
            )
          }
        ),
        o && /* @__PURE__ */ e(
          S,
          {
            padding: l.Large,
            style: { borderTop: `1px solid ${g}` },
            children: o
          }
        )
      ]
    }
  )
);
Ht.displayName = "Sidebar";
const jt = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "20px", height: "20px" },
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        clipRule: "evenodd"
      }
    )
  }
), Pt = X(
  ({
    open: t,
    onClose: n,
    title: r,
    side: i = "right",
    mode: o = "overlay",
    width: a = "384px",
    children: d
  }, s) => {
    const c = G(
      (u) => {
        u.key === "Escape" && n();
      },
      [n]
    );
    if (Y(() => {
      if (t)
        return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
    }, [t, c]), !t) return null;
    const h = /* @__PURE__ */ f(
      S,
      {
        ref: s,
        backgroundColor: x.Default,
        elevation: se.Overlay,
        style: {
          position: "fixed",
          top: 0,
          bottom: 0,
          [i]: 0,
          width: a,
          zIndex: ae.Modal,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden"
        },
        children: [
          r && /* @__PURE__ */ e(
            S,
            {
              padding: l.Large,
              style: { borderBottom: `1px solid ${z.Default}` },
              children: /* @__PURE__ */ f(R, { alignBlock: "center", spread: "space-between", children: [
                /* @__PURE__ */ e(D, { as: "h2", size: w.Large, weight: T.Semibold, color: p.Default, children: r }),
                /* @__PURE__ */ e(Q, { label: "Close panel", onClick: n, color: p.Subtle, children: /* @__PURE__ */ e(jt, {}) })
              ] })
            }
          ),
          /* @__PURE__ */ e(S, { padding: l.Large, overflow: "auto", style: { flex: "1 1 auto" }, children: d })
        ]
      }
    );
    return o === "overlay" ? Xe(
      /* @__PURE__ */ e(
        S,
        {
          style: {
            position: "fixed",
            inset: 0,
            zIndex: ae.Modal,
            backgroundColor: x.Overlay
          },
          onClick: (u) => {
            u.target === u.currentTarget && n();
          },
          children: h
        }
      ),
      document.body
    ) : h;
  }
);
Pt.displayName = "Panel";
const Kt = X(
  ({
    padding: t = l.Large,
    color: n = p.Subtle,
    borderColor: r = z.Default,
    children: i
  }, o) => /* @__PURE__ */ e(
    S,
    {
      ref: o,
      as: "aside",
      padding: t,
      style: {
        borderLeft: `3px solid ${r}`,
        color: n
      },
      children: i
    }
  )
);
Kt.displayName = "Aside";
const Vt = X(
  ({
    topNav: t,
    sideNav: n,
    mobileNav: r,
    backgroundColor: i = x.Surface,
    children: o
  }, a) => {
    const s = ve() === "mobile";
    return /* @__PURE__ */ f(
      S,
      {
        ref: a,
        style: {
          minHeight: "100vh",
          backgroundColor: i,
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
                t,
                /* @__PURE__ */ e(
                  S,
                  {
                    as: "main",
                    style: {
                      flex: "1 1 auto",
                      overflow: "auto",
                      paddingBlockEnd: s && r ? l.XXHuge : void 0
                    },
                    children: o
                  }
                )
              ]
            }
          ),
          s && r
        ]
      }
    );
  }
);
Vt.displayName = "Layout";
const Yt = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
function Te(t, n) {
  return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate();
}
function _t(t, n) {
  return new Date(t, n + 1, 0).getDate();
}
function Ut(t, n) {
  return new Date(t, n, 1).getDay();
}
const Gt = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), Jt = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), Zt = [
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
], qt = X(
  ({
    value: t,
    defaultValue: n,
    onChange: r,
    min: i,
    max: o,
    selectedColor: a = p.Inverse,
    selectedBackground: d = x.Brand
  }, s) => {
    const c = /* @__PURE__ */ new Date(), [h, u] = O(n), g = t !== void 0, b = g ? t : h, [m, y] = O(
      (b ?? c).getFullYear()
    ), [v, L] = O(
      (b ?? c).getMonth()
    ), C = ke(() => _t(m, v), [m, v]), j = ke(() => Ut(m, v), [m, v]), B = () => {
      v === 0 ? (L(11), y((k) => k - 1)) : L((k) => k - 1);
    }, $ = () => {
      v === 11 ? (L(0), y((k) => k + 1)) : L((k) => k + 1);
    }, A = (k) => {
      const I = new Date(m, v, k);
      g || u(I), r == null || r(I);
    }, H = (k) => {
      const I = new Date(m, v, k);
      return !!(i && I < new Date(i.getFullYear(), i.getMonth(), i.getDate()) || o && I > new Date(o.getFullYear(), o.getMonth(), o.getDate()));
    }, N = [];
    for (let k = 0; k < j; k++)
      N.push(/* @__PURE__ */ e(S, {}, `empty-${k}`));
    for (let k = 1; k <= C; k++) {
      const I = new Date(m, v, k), W = b ? Te(I, b) : !1, K = Te(I, c), F = H(k);
      N.push(
        /* @__PURE__ */ e(
          ie,
          {
            disabled: F,
            onClick: () => A(k),
            borderRadius: M.Medium,
            style: {
              width: "36px",
              height: "36px",
              padding: 0,
              fontSize: w.XSmall,
              fontWeight: W ? T.Semibold : T.Regular,
              backgroundColor: W ? d : "transparent",
              color: W ? a : F ? p.Disabled : p.Default,
              border: K && !W ? `1px solid ${z.Default}` : "none",
              cursor: F ? "default" : "pointer"
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
        padding: l.Large,
        borderRadius: M.XLarge,
        borderColor: z.Default,
        borderSide: "all",
        backgroundColor: x.Default,
        style: { width: "fit-content" },
        children: [
          /* @__PURE__ */ f(
            R,
            {
              alignBlock: "center",
              spread: "space-between",
              marginBlockEnd: l.Medium,
              children: [
                /* @__PURE__ */ e(Q, { label: "Previous month", onClick: B, color: p.Subtle, padding: l.XSmall, children: /* @__PURE__ */ e(Gt, {}) }),
                /* @__PURE__ */ f(D, { as: "span", size: w.XSmall, weight: T.Semibold, color: p.Default, children: [
                  Zt[v],
                  " ",
                  m
                ] }),
                /* @__PURE__ */ e(Q, { label: "Next month", onClick: $, color: p.Subtle, padding: l.XSmall, children: /* @__PURE__ */ e(Jt, {}) })
              ]
            }
          ),
          /* @__PURE__ */ f(Ae, { columns: 7, gap: l.XXSmall, children: [
            Yt.map((k) => /* @__PURE__ */ e(
              D,
              {
                as: "span",
                size: w.XXSmall,
                weight: T.Medium,
                color: p.Subtlest,
                align: "center",
                style: { padding: `${l.XSmall} 0` },
                children: k
              },
              k
            )),
            N
          ] })
        ]
      }
    );
  }
);
qt.displayName = "Calendar";
const Qt = X(
  ({ header: t, description: n, image: r, primaryAction: i, secondaryAction: o }, a) => /* @__PURE__ */ f(
    P,
    {
      ref: a,
      space: l.Large,
      alignInline: "center",
      style: {
        paddingBlock: l.XXHuge,
        paddingInline: l.XXXLarge,
        maxWidth: "448px",
        marginInline: "auto",
        textAlign: "center"
      },
      children: [
        r && /* @__PURE__ */ e("div", { children: r }),
        /* @__PURE__ */ f(P, { space: l.Medium, alignInline: "center", children: [
          /* @__PURE__ */ e(
            D,
            {
              as: "h3",
              fontFamily: Je.Display,
              size: w.XLarge,
              weight: T.Bold,
              color: p.Default,
              children: t
            }
          ),
          n && /* @__PURE__ */ e(D, { as: "p", size: w.XSmall, color: p.Subtle, lineHeight: 1.6, children: n })
        ] }),
        (i || o) && /* @__PURE__ */ f(R, { space: l.Medium, alignBlock: "center", children: [
          i,
          o
        ] })
      ]
    }
  )
);
Qt.displayName = "EmptyState";
const en = ({ order: t }) => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    style: {
      width: "12px",
      height: "12px",
      marginInlineStart: "4px",
      opacity: t ? 1 : 0.3
    },
    children: t === "ASC" ? /* @__PURE__ */ e("path", { d: "M8 3l4 5H4l4-5z" }) : t === "DESC" ? /* @__PURE__ */ e("path", { d: "M8 13l4-5H4l4 5z" }) : /* @__PURE__ */ f(re, { children: [
      /* @__PURE__ */ e("path", { d: "M8 3l3 4H5l3-4z" }),
      /* @__PURE__ */ e("path", { d: "M8 13l3-4H5l3 4z" })
    ] })
  }
), tn = X(
  ({
    caption: t,
    head: n,
    rows: r,
    rowsPerPage: i,
    page: o,
    defaultPage: a = 1,
    sortKey: d,
    sortOrder: s,
    defaultSortKey: c,
    defaultSortOrder: h = "ASC",
    onSort: u,
    onSetPage: g,
    isLoading: b = !1,
    isFixedSize: m = !1
  }, y) => {
    const [v, L] = O(a), [C, j] = O(c), [B, $] = O(h), A = o !== void 0, H = A ? o : v, N = d !== void 0, k = N ? d : C, I = N ? s ?? "ASC" : B, W = i ? Math.max(1, Math.ceil(r.length / i)) : 1, K = ke(() => {
      if (!i) return r;
      const E = (H - 1) * i;
      return r.slice(E, E + i);
    }, [r, i, H]), F = (E) => {
      const J = k === E && I === "ASC" ? "DESC" : "ASC";
      N || (j(E), $(J)), u == null || u(E, J);
    }, V = (E) => {
      A || L(E), g == null || g(E);
    }, _ = {
      padding: `${l.MediumLarge} ${l.Large}`
    };
    return /* @__PURE__ */ f(S, { style: { position: "relative" }, children: [
      b && /* @__PURE__ */ e(
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
          children: /* @__PURE__ */ e(Fe, { size: "large" })
        }
      ),
      /* @__PURE__ */ f(
        "table",
        {
          ref: y,
          style: {
            width: "100%",
            borderCollapse: "collapse",
            tableLayout: m ? "fixed" : "auto",
            fontSize: w.XSmall
          },
          children: [
            t && /* @__PURE__ */ e(
              "caption",
              {
                style: {
                  textAlign: "left",
                  paddingBlockEnd: l.Medium,
                  fontWeight: T.Semibold,
                  fontSize: w.Small,
                  color: p.Default
                },
                children: t
              }
            ),
            /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: n.map((E) => /* @__PURE__ */ e(
              "th",
              {
                style: {
                  ..._,
                  textAlign: "left",
                  fontWeight: T.Semibold,
                  fontSize: w.XXSmall,
                  color: p.Subtle,
                  borderBottom: `1px solid ${z.Default}`,
                  whiteSpace: "nowrap",
                  cursor: E.isSortable ? "pointer" : "default",
                  userSelect: E.isSortable ? "none" : void 0,
                  ...E.width ? { width: E.width } : {}
                },
                onClick: E.isSortable ? () => F(E.key) : void 0,
                children: /* @__PURE__ */ f("span", { style: { display: "inline-flex", alignItems: "center" }, children: [
                  E.label,
                  E.isSortable && /* @__PURE__ */ e(
                    en,
                    {
                      order: k === E.key ? I : void 0
                    }
                  )
                ] })
              },
              E.key
            )) }) }),
            /* @__PURE__ */ f("tbody", { children: [
              K.map((E) => /* @__PURE__ */ e(
                "tr",
                {
                  onClick: E.onClick,
                  style: {
                    cursor: E.onClick ? "pointer" : "default",
                    borderBottom: `1px solid ${z.Default}`
                  },
                  children: E.cells.map((J, q) => /* @__PURE__ */ e("td", { style: { ..._, color: p.Default }, children: J }, q))
                },
                E.key
              )),
              K.length === 0 && /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e(
                "td",
                {
                  colSpan: n.length,
                  style: {
                    ..._,
                    textAlign: "center",
                    color: p.Subtle
                  },
                  children: "No data"
                }
              ) })
            ] })
          ]
        }
      ),
      i && W > 1 && /* @__PURE__ */ f(
        R,
        {
          space: l.Medium,
          alignBlock: "center",
          alignInline: "center",
          style: { paddingBlock: l.Large },
          children: [
            /* @__PURE__ */ e(
              ie,
              {
                disabled: H <= 1,
                onClick: () => V(H - 1),
                paddingBlock: l.XSmall,
                paddingInline: l.Medium,
                borderRadius: M.Large,
                backgroundColor: x.Default,
                color: p.Default,
                style: { fontSize: w.XXSmall, border: `1px solid ${z.Default}` },
                children: "Previous"
              }
            ),
            /* @__PURE__ */ f(D, { size: w.XXSmall, color: p.Subtle, children: [
              "Page ",
              H,
              " of ",
              W
            ] }),
            /* @__PURE__ */ e(
              ie,
              {
                disabled: H >= W,
                onClick: () => V(H + 1),
                paddingBlock: l.XSmall,
                paddingInline: l.Medium,
                borderRadius: M.Large,
                backgroundColor: x.Default,
                color: p.Default,
                style: { fontSize: w.XXSmall, border: `1px solid ${z.Default}` },
                children: "Next"
              }
            )
          ]
        }
      )
    ] });
  }
);
tn.displayName = "Table";
const nn = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z", clipRule: "evenodd" }) }), rn = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" }) }), ln = X(
  ({
    defaultValue: t,
    label: n,
    editButtonLabel: r,
    editView: i,
    readView: o,
    onConfirm: a,
    onCancel: d
  }, s) => {
    const [c, h] = O(!1), [u, g] = O(t);
    ne(null), Y(() => {
      g(t);
    }, [t]);
    const b = G(() => {
      h(!1), a(u);
    }, [u, a]), m = G(() => {
      g(t), h(!1), d == null || d();
    }, [t, d]), y = G(
      (C) => {
        C.key === "Enter" && b(), C.key === "Escape" && m();
      },
      [b, m]
    ), v = (C) => /* @__PURE__ */ e(
      S,
      {
        style: {
          paddingBlock: l.XSmall,
          paddingInline: l.Small,
          cursor: "pointer",
          borderRadius: M.Medium,
          wordBreak: "break-word",
          minHeight: "1.5em"
        },
        children: /* @__PURE__ */ e(D, { as: "span", size: w.Small, color: p.Default, children: C || " " })
      }
    ), L = (C) => /* @__PURE__ */ e(
      Me,
      {
        value: C.value,
        onChange: C.onChange,
        onKeyDown: C.onKeyDown,
        autoFocus: C.autoFocus,
        backgroundColor: x.Default,
        borderColor: z.Focus,
        borderRadius: M.Medium,
        padding: l.XSmall,
        style: { fontSize: w.Small, width: "100%" }
      }
    );
    return /* @__PURE__ */ f("div", { ref: s, children: [
      n && /* @__PURE__ */ e(
        D,
        {
          as: "label",
          size: w.XXSmall,
          weight: 500,
          color: p.Subtle,
          style: { display: "block", marginBlockEnd: l.XSmall },
          children: n
        }
      ),
      c ? /* @__PURE__ */ f(R, { space: l.XSmall, alignBlock: "start", children: [
        /* @__PURE__ */ e(S, { style: { flex: "1 1 auto" }, children: (i ?? L)({
          value: u,
          onChange: (C) => g(C.target.value),
          onKeyDown: y,
          autoFocus: !0
        }) }),
        /* @__PURE__ */ e(
          Q,
          {
            label: "Confirm",
            onClick: b,
            color: p.Success,
            padding: l.XSmall,
            children: /* @__PURE__ */ e(nn, {})
          }
        ),
        /* @__PURE__ */ e(
          Q,
          {
            label: "Cancel",
            onClick: m,
            color: p.Error,
            padding: l.XSmall,
            children: /* @__PURE__ */ e(rn, {})
          }
        )
      ] }) : /* @__PURE__ */ e(
        S,
        {
          onClick: () => h(!0),
          role: "button",
          tabIndex: 0,
          "aria-label": r ?? t ?? "Edit",
          onKeyDown: (C) => {
            (C.key === "Enter" || C.key === " ") && (C.preventDefault(), h(!0));
          },
          style: { cursor: "pointer" },
          children: (o ?? v)(t)
        }
      )
    ] });
  }
);
ln.displayName = "InlineEdit";
const on = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "currentColor", style: { width: "14px", height: "14px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z", clipRule: "evenodd" }) }), an = X(
  ({ trigger: t, groups: n, checked: r, onChange: i }, o) => {
    const [a, d] = O(!1), s = ne(null), c = G((u) => {
      u.key === "Escape" && d(!1);
    }, []), h = G((u) => {
      s.current && !s.current.contains(u.target) && d(!1);
    }, []);
    return Y(() => {
      if (a)
        return document.addEventListener("keydown", c), document.addEventListener("mousedown", h), () => {
          document.removeEventListener("keydown", c), document.removeEventListener("mousedown", h);
        };
    }, [a, c, h]), /* @__PURE__ */ f(
      S,
      {
        ref: (u) => {
          s.current = u, typeof o == "function" ? o(u) : o && (o.current = u);
        },
        style: { position: "relative", display: "inline-block" },
        children: [
          /* @__PURE__ */ e(
            R,
            {
              style: { cursor: "pointer" },
              onClick: () => d((u) => !u),
              alignBlock: "center",
              children: t
            }
          ),
          a && /* @__PURE__ */ e(
            S,
            {
              backgroundColor: x.Default,
              borderColor: z.Default,
              borderSide: "all",
              borderRadius: M.XLarge,
              elevation: se.Dropdown,
              padding: l.XSmall,
              style: {
                position: "absolute",
                top: "100%",
                left: 0,
                marginTop: l.XSmall,
                minWidth: "224px",
                zIndex: ae.Dropdown
              },
              children: /* @__PURE__ */ e(P, { space: l.XSmall, children: n.map((u, g) => /* @__PURE__ */ f(P, { space: l.XXSmall, children: [
                u.title && /* @__PURE__ */ e(S, { paddingInline: l.MediumLarge, paddingBlock: l.XSmall, children: /* @__PURE__ */ e(
                  D,
                  {
                    as: "span",
                    size: w.XXSmall,
                    weight: T.Semibold,
                    color: p.Subtlest,
                    textTransform: "uppercase",
                    children: u.title
                  }
                ) }),
                u.items.map((b) => {
                  const m = !!r[b.id];
                  return /* @__PURE__ */ f(
                    ie,
                    {
                      onClick: () => i(b.id, !m),
                      borderRadius: M.Medium,
                      backgroundColor: x.Transparent,
                      color: p.Default,
                      paddingBlock: l.Medium,
                      paddingInline: l.MediumLarge,
                      style: {
                        width: "100%",
                        textAlign: "left",
                        fontSize: w.XSmall,
                        display: "flex",
                        alignItems: "center",
                        gap: l.Medium
                      },
                      children: [
                        /* @__PURE__ */ e(
                          S,
                          {
                            style: {
                              width: "16px",
                              height: "16px",
                              borderRadius: M.Small,
                              border: m ? "none" : `2px solid ${z.Outline}`,
                              backgroundColor: m ? x.Brand : x.Transparent,
                              color: p.Inverse,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0
                            },
                            children: m && /* @__PURE__ */ e(on, {})
                          }
                        ),
                        /* @__PURE__ */ e(D, { as: "span", size: w.XSmall, style: { color: "inherit" }, children: b.label })
                      ]
                    },
                    b.id
                  );
                }),
                g < n.length - 1 && /* @__PURE__ */ e(
                  S,
                  {
                    style: {
                      borderTop: `1px solid ${z.Default}`,
                      marginBlock: l.XSmall
                    }
                  }
                )
              ] }, g)) })
            }
          )
        ]
      }
    );
  }
);
an.displayName = "DropdownCheckboxMenu";
const sn = X(
  ({
    label: t,
    helperText: n,
    errorText: r,
    id: i,
    labelColor: o = p.Default,
    labelSize: a = w.XSmall,
    labelWeight: d = T.Medium,
    labelTextTransform: s,
    labelLetterSpacing: c,
    inputBackground: h = x.Subtle,
    inputBorderColor: u,
    inputBorderRadius: g = M.XXLarge,
    inputBorderSide: b = "all",
    inputPadding: m = l.MediumLarge,
    name: y,
    value: v,
    defaultValue: L,
    placeholder: C,
    options: j,
    disabled: B,
    required: $,
    onChange: A,
    onBlur: H
  }, N) => {
    const k = ye(), I = i ?? k, W = `${I}-helper`, K = `${I}-error`, F = !!r, V = F ? z.Error : u, _ = b === "bottom", E = /* @__PURE__ */ e(
      Oe,
      {
        ref: N,
        id: I,
        name: y,
        value: v,
        defaultValue: L,
        placeholder: C,
        options: j,
        disabled: B,
        required: $,
        onChange: A,
        onBlur: H,
        backgroundColor: _ ? "transparent" : h,
        borderColor: _ ? void 0 : V,
        borderRadius: _ ? void 0 : g,
        padding: m,
        fontSize: w.XSmall,
        color: p.Default,
        style: { width: "100%" },
        "aria-describedby": F ? K : n ? W : void 0,
        "aria-invalid": F || void 0
      }
    ), J = _ ? /* @__PURE__ */ e("div", { style: {
      width: "100%",
      backgroundColor: h,
      borderBottom: `2px solid ${V}`
    }, children: E }) : E;
    return /* @__PURE__ */ f(P, { space: l.XSmall, children: [
      t && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: I,
          style: {
            fontSize: a,
            fontWeight: d,
            color: o,
            textTransform: s,
            letterSpacing: c
          },
          children: t
        }
      ),
      J,
      F && /* @__PURE__ */ e(D, { as: "span", size: w.XXSmall, color: p.Error, id: K, children: r }),
      !F && n && /* @__PURE__ */ e(D, { as: "span", size: w.XXSmall, color: p.Subtle, id: W, children: n })
    ] });
  }
);
sn.displayName = "SelectField";
const dn = {
  info: { bg: x.Default, text: p.Info, accent: "#3b82f6" },
  success: { bg: x.Default, text: p.Success, accent: "#22c55e" },
  warning: { bg: x.Default, text: p.Warning, accent: "#f59e0b" },
  error: { bg: x.Default, text: p.Error, accent: "#ba1a1a" }
}, cn = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "14px", height: "14px" },
    children: /* @__PURE__ */ e("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  }
), un = X(
  ({ open: t, onClose: n, duration: r = 5e3, variant: i = "info", icon: o, children: a }, d) => {
    if (Y(() => {
      if (!t || r === 0) return;
      const c = setTimeout(n, r);
      return () => clearTimeout(c);
    }, [t, r, n]), !t) return null;
    const s = dn[i];
    return Xe(
      /* @__PURE__ */ e(
        S,
        {
          ref: d,
          role: "alert",
          "aria-live": "assertive",
          backgroundColor: s.bg,
          borderRadius: M.XXLarge,
          elevation: se.Overlay,
          padding: l.Large,
          style: {
            position: "fixed",
            bottom: l.XXXLarge,
            right: l.XXXLarge,
            zIndex: ae.Banner,
            minWidth: "320px",
            maxWidth: "448px",
            borderLeft: `4px solid ${s.accent}`
          },
          children: /* @__PURE__ */ f(R, { space: l.MediumLarge, alignBlock: "center", spread: "space-between", children: [
            /* @__PURE__ */ f(R, { space: l.MediumLarge, alignBlock: "center", grow: "fill", children: [
              o && /* @__PURE__ */ e(S, { style: { color: s.accent, flexShrink: 0 }, children: o }),
              /* @__PURE__ */ e(D, { as: "span", size: w.XSmall, weight: T.Medium, color: p.Default, children: a })
            ] }),
            /* @__PURE__ */ e(
              Q,
              {
                label: "Dismiss",
                onClick: n,
                color: p.Subtle,
                padding: l.XXSmall,
                children: /* @__PURE__ */ e(cn, {})
              }
            )
          ] })
        }
      ),
      document.body
    );
  }
);
un.displayName = "Toast";
const pn = X(
  ({ items: t, activeId: n, onSelect: r, fab: i }, o) => /* @__PURE__ */ e(
    S,
    {
      ref: o,
      as: "nav",
      style: {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: ae.Sticky,
        backgroundColor: x.Default,
        borderTop: `1px solid ${z.Default}`,
        backdropFilter: "blur(20px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingInline: l.Large,
        paddingBlock: l.Medium
      },
      children: t.map((a, d) => {
        const s = a.id === n, c = Math.floor(t.length / 2), h = i && d === c;
        return /* @__PURE__ */ f(le.Fragment, { children: [
          h && /* @__PURE__ */ e(S, { style: { marginTop: `-${l.XXXLarge}` }, children: i }),
          /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: () => r == null ? void 0 : r(a.id),
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: l.XXSmall,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: l.XSmall,
                color: s ? p.Brand : p.Disabled
              },
              children: [
                /* @__PURE__ */ e(S, { style: { width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center" }, children: a.icon }),
                /* @__PURE__ */ e(
                  D,
                  {
                    as: "span",
                    size: w.Micro,
                    weight: T.Bold,
                    color: s ? p.Brand : p.Disabled,
                    textTransform: "uppercase",
                    children: a.label
                  }
                )
              ]
            }
          )
        ] }, a.id);
      })
    }
  )
);
pn.displayName = "MobileNav";
const hn = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    style: { width: "12px", height: "12px" },
    children: /* @__PURE__ */ e(
      "path",
      {
        fillRule: "evenodd",
        d: "M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z",
        clipRule: "evenodd"
      }
    )
  }
), bn = X(
  ({ items: t, showLabels: n, variant: r = "dot" }, i) => {
    const o = U(n ?? !0), a = 32, d = t.filter((s) => s.status === "visited").length;
    return r === "bar" ? /* @__PURE__ */ e(
      "div",
      {
        ref: i,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": t.length,
        "aria-valuenow": d,
        style: { display: "grid", gridTemplateColumns: `repeat(${t.length}, 1fr)`, gap: l.Medium, width: "100%" },
        children: t.map((s, c) => {
          const h = s.status === "visited", u = s.status === "current";
          return t.length - 1, /* @__PURE__ */ f("div", { style: { display: "flex", flexDirection: "column", gap: l.Medium }, children: [
            /* @__PURE__ */ e("div", { style: {
              height: 6,
              borderRadius: M.Full,
              background: u ? ge.Brand : "none",
              backgroundColor: u ? void 0 : h ? x.PrimaryContainer : x.NeutralBold,
              opacity: h ? 0.4 : 1,
              boxShadow: u ? "0 0 8px var(--bbui-color-primary), 0 0 20px var(--bbui-color-primary)" : "none",
              transition: "all 400ms ease",
              cursor: s.onClick ? "pointer" : "default"
            }, onClick: s.onClick }),
            o && /* @__PURE__ */ e(
              D,
              {
                as: "p",
                size: w.Micro,
                weight: u ? T.Bold : T.Medium,
                color: u ? p.Brand : h ? p.Subtle : p.Disabled,
                textTransform: "uppercase",
                letterSpacing: Ne.Widest,
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
        ref: i,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": t.length,
        "aria-valuenow": d,
        style: { width: "100%", padding: `0 ${l.Medium}` },
        children: [
          /* @__PURE__ */ e("div", { style: {
            display: "flex",
            alignItems: "center",
            width: "100%"
          }, children: t.map((s, c) => {
            const h = c === t.length - 1, u = s.status === "visited", g = s.status === "current", b = s.status === "disabled", m = u ? ge.Brand : g ? "transparent" : x.NeutralBold, y = /* @__PURE__ */ e(
              "div",
              {
                style: {
                  width: a,
                  height: a,
                  borderRadius: M.Full,
                  background: u ? ge.Brand : m,
                  backgroundColor: u ? void 0 : m,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: u ? p.OnBrand : g ? p.Brand : b ? p.Disabled : p.Subtle,
                  fontSize: w.XSmall,
                  fontWeight: T.Bold,
                  border: g ? `2px solid ${p.Brand}` : "none",
                  cursor: s.onClick || s.href ? "pointer" : "default",
                  transition: "all 300ms ease"
                },
                onClick: s.onClick,
                children: u ? /* @__PURE__ */ e(hn, {}) : c + 1
              }
            ), v = s.href ? /* @__PURE__ */ e("a", { href: s.href, style: { textDecoration: "none", color: "inherit" }, children: y }) : y;
            return /* @__PURE__ */ f(le.Fragment, { children: [
              v,
              !h && /* @__PURE__ */ e("div", { style: {
                flex: "1 1 auto",
                height: 2,
                backgroundColor: x.NeutralBold,
                position: "relative",
                marginInline: l.XSmall,
                borderRadius: M.Full,
                overflow: "hidden"
              }, children: /* @__PURE__ */ e("div", { style: {
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: `${u ? s.percentageComplete : 0}%`,
                background: ge.Brand,
                borderRadius: M.Full,
                transition: "width 400ms ease"
              } }) })
            ] }, s.id);
          }) }),
          o && /* @__PURE__ */ e("div", { style: {
            display: "flex",
            alignItems: "flex-start",
            width: "100%",
            marginTop: l.Medium
          }, children: t.map((s, c) => {
            const h = c === t.length - 1, u = s.status === "visited", g = s.status === "current", b = s.status === "disabled", m = u ? p.Brand : g ? p.Default : b ? p.Disabled : p.Subtle;
            return /* @__PURE__ */ f(le.Fragment, { children: [
              /* @__PURE__ */ e("div", { style: {
                width: a,
                flexShrink: 0,
                display: "flex",
                justifyContent: "center"
              }, children: /* @__PURE__ */ e(
                D,
                {
                  as: "span",
                  size: w.XXSmall,
                  weight: g ? T.Bold : T.Medium,
                  color: m,
                  align: "center",
                  style: {
                    whiteSpace: "nowrap"
                  },
                  children: s.label
                }
              ) }),
              !h && /* @__PURE__ */ e("div", { style: { flex: "1 1 auto" } })
            ] }, s.id);
          }) })
        ]
      }
    );
  }
);
bn.displayName = "ProgressTracker";
const gn = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";
function mn(t) {
  const n = /* @__PURE__ */ f(R, { space: l.XSmall, alignBlock: "center", children: [
    /* @__PURE__ */ e(
      D,
      {
        size: w.XSmall,
        weight: T.Semibold,
        color: p.Brand,
        children: t.label
      }
    ),
    t.icon
  ] });
  return t.href ? /* @__PURE__ */ e(
    "a",
    {
      href: t.href,
      style: {
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center"
      },
      children: n
    }
  ) : /* @__PURE__ */ e(
    "button",
    {
      type: "button",
      onClick: t.onClick,
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
function fn(t) {
  return /* @__PURE__ */ e(
    xe,
    {
      src: t.src,
      alt: t.alt,
      width: t.width ?? l.Size8,
      height: t.height ?? l.Size8,
      objectFit: "cover",
      borderRadius: M.Medium,
      style: { opacity: 0.8 }
    }
  );
}
const yn = X(
  ({
    icon: t,
    heading: n,
    description: r,
    action: i,
    media: o,
    padding: a = l.XXLarge,
    borderRadius: d = M.XXLarge,
    blur: s = 20,
    backgroundOpacity: c = 0.1,
    borderOpacity: h = 0.12,
    children: u
  }, g) => {
    const b = {
      position: "relative",
      overflow: "hidden",
      background: `rgba(255, 255, 255, ${c})`,
      backdropFilter: `blur(${s}px)`,
      WebkitBackdropFilter: `blur(${s}px)`,
      border: `1px solid rgba(255, 255, 255, ${h})`,
      borderRadius: d,
      transition: "background 200ms ease"
    }, m = {
      position: "absolute",
      inset: 0,
      backgroundImage: `url("${gn}")`,
      opacity: 0.03,
      pointerEvents: "none"
    }, y = /* @__PURE__ */ f(P, { space: l.Medium, style: { flex: 1 }, children: [
      t && /* @__PURE__ */ e(S, { marginBlockEnd: l.Medium, children: t }),
      /* @__PURE__ */ e(
        D,
        {
          as: "h3",
          size: w.Large,
          weight: T.Bold,
          color: p.Default,
          children: n
        }
      ),
      r && /* @__PURE__ */ e(
        D,
        {
          size: w.XSmall,
          color: p.OnSurfaceVariant,
          children: r
        }
      ),
      i && mn(i),
      u
    ] });
    return /* @__PURE__ */ f(S, { ref: g, padding: a, style: b, children: [
      /* @__PURE__ */ e("div", { style: m, "aria-hidden": "true" }),
      o ? /* @__PURE__ */ f(R, { space: l.XXLarge, alignBlock: "center", children: [
        y,
        /* @__PURE__ */ e("div", { style: { flexShrink: 0 }, children: fn(o) })
      ] }) : y
    ] });
  }
);
yn.displayName = "GlassCard";
const vn = `
@keyframes bbui-pulse-down {
  0%, 100% { transform: translateY(0); opacity: 0.4 }
  50%      { transform: translateY(3px); opacity: 0.9 }
}
`, Re = "36px", xn = "18px", Sn = X(
  ({ items: t, onComplete: n, finishedLabel: r, maxHeight: i = "256px" }, o) => {
    const [a, d] = O(() => /* @__PURE__ */ new Set()), s = ne(!1), c = ne(null), h = ne([]), u = a.size >= t.length;
    return Y(() => {
      u && !s.current && (s.current = !0, n == null || n());
    }, [u, n]), Y(() => {
      const g = c.current;
      if (!g) return;
      const b = new IntersectionObserver(
        (m) => {
          d((y) => {
            let v = y;
            for (const L of m) {
              if (!L.isIntersecting) continue;
              const C = Number(L.target.dataset.idx);
              y.has(C) || (v === y && (v = new Set(y)), v.add(C));
            }
            return v;
          });
        },
        { root: g, threshold: 0.6 }
      );
      return h.current.forEach((m) => m && b.observe(m)), () => b.disconnect();
    }, [t.length]), /* @__PURE__ */ f("div", { ref: o, style: { width: "100%", position: "relative" }, children: [
      /* @__PURE__ */ e("style", { children: vn }),
      /* @__PURE__ */ e("div", { ref: c, style: Xn(i, u), children: /* @__PURE__ */ e(P, { space: l.MediumLarge, children: t.map((g, b) => {
        const m = a.has(b);
        return /* @__PURE__ */ f(
          "div",
          {
            ref: (y) => h.current[b] = y,
            "data-idx": b,
            style: Mn(m),
            children: [
              /* @__PURE__ */ e(wn, { item: g }),
              b < t.length - 1 && /* @__PURE__ */ e("span", { "aria-hidden": "true", style: In(m) })
            ]
          },
          g.id ?? b
        );
      }) }) }),
      /* @__PURE__ */ e("div", { style: En, children: u ? r : /* @__PURE__ */ e(kn, {}) })
    ] });
  }
);
Sn.displayName = "RevealSteps";
function wn({ item: t }) {
  return /* @__PURE__ */ f("div", { style: Ln, children: [
    /* @__PURE__ */ e("span", { "aria-hidden": "true", style: Cn, children: t.icon }),
    /* @__PURE__ */ f("span", { style: Bn, children: [
      /* @__PURE__ */ e(D, { as: "span", size: w.Small, weight: T.Medium, children: t.label }),
      t.description && /* @__PURE__ */ e(D, { as: "span", size: w.XSmall, color: p.Subtle, children: t.description })
    ] }),
    t.meta && /* @__PURE__ */ e("span", { style: Dn, children: t.meta })
  ] });
}
function kn() {
  return /* @__PURE__ */ e("div", { style: zn, "aria-hidden": "true", children: /* @__PURE__ */ e(
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
const $e = "linear-gradient(to bottom, black 0%, black calc(100% - 32px), transparent 100%)", Xn = (t, n) => ({
  maxHeight: t,
  overflowY: "auto",
  scrollBehavior: "smooth",
  maskImage: n ? "none" : $e,
  WebkitMaskImage: n ? "none" : $e,
  paddingRight: l.XSmall
}), Mn = (t) => ({
  position: "relative",
  opacity: t ? 1 : 0.15,
  transform: t ? "translateY(0)" : "translateY(8px)",
  filter: t ? "blur(0)" : "blur(2px)",
  transition: "opacity 420ms ease-out, transform 420ms cubic-bezier(0.22, 1, 0.36, 1), filter 420ms ease-out"
}), Ln = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: l.MediumLarge,
  padding: l.MediumLarge,
  background: x.Subtle,
  borderRadius: M.Large,
  border: `1px solid ${z.Default}`,
  color: p.Default
}, Cn = {
  width: Re,
  height: Re,
  flexShrink: 0,
  borderRadius: M.Medium,
  background: x.Subtle,
  color: p.Default,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
}, Bn = {
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: l.XXSmall
}, Dn = {
  flexShrink: 0,
  display: "inline-flex",
  alignItems: "center"
}, In = (t) => ({
  position: "absolute",
  left: `calc(${l.MediumLarge} + ${xn} - 1px)`,
  top: "100%",
  height: l.MediumLarge,
  width: "2px",
  background: z.Default,
  opacity: t ? 1 : 0,
  transition: "opacity 300ms ease-out",
  pointerEvents: "none"
}), En = {
  marginTop: l.Large,
  display: "flex",
  justifyContent: "center",
  minHeight: "20px"
}, zn = {
  color: p.Subtle,
  animation: "bbui-pulse-down 1500ms ease-in-out infinite",
  display: "inline-flex"
}, Tn = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree"
], Rn = X(
  ({ value: t, onChange: n, labels: r = Tn }, i) => {
    const [o, a] = O(null);
    return /* @__PURE__ */ e("div", { ref: i, role: "radiogroup", style: $n, children: r.map((d, s) => {
      const c = s + 1, h = t === c;
      return /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          role: "radio",
          "aria-checked": h,
          "aria-label": d,
          onClick: () => n(c),
          onMouseEnter: () => a(c),
          onMouseLeave: () => a(null),
          onFocus: () => a(c),
          onBlur: () => a(null),
          style: An(h, !h && o === c),
          children: d
        },
        c
      );
    }) });
  }
);
Rn.displayName = "LikertScale";
const $n = {
  display: "flex",
  flexDirection: "column",
  gap: l.Medium,
  width: "100%"
}, An = (t, n) => {
  const r = "var(--bbui-color-primary)", i = t ? "var(--bbui-bg-primary-container)" : n ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)", o = t || n ? r : "rgba(255,255,255,0.08)";
  return {
    width: "100%",
    height: "48px",
    padding: `0 ${l.MediumLarge}`,
    borderRadius: M.Large,
    border: `1px solid ${o}`,
    background: i,
    color: "#ffffff",
    fontSize: w.Small,
    fontWeight: T.Medium,
    textAlign: "center",
    cursor: "pointer",
    transition: "background 180ms ease, border-color 180ms ease",
    font: "inherit"
  };
};
function Qn(t) {
  const [n, r] = O(
    () => typeof window < "u" ? window.matchMedia(t).matches : !1
  );
  return Y(() => {
    const i = window.matchMedia(t), o = (a) => r(a.matches);
    return i.addEventListener("change", o), r(i.matches), () => i.removeEventListener("change", o);
  }, [t]), n;
}
function we() {
  return typeof window > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Nn(t) {
  typeof document > "u" || (t === "system" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", t));
}
function er() {
  const [t, n] = O(() => typeof localStorage > "u" ? "system" : localStorage.getItem("bbui-theme") ?? "system"), [r, i] = O(
    () => t === "system" ? we() : t
  ), o = G((a) => {
    n(a), typeof localStorage < "u" && (a === "system" ? localStorage.removeItem("bbui-theme") : localStorage.setItem("bbui-theme", a));
  }, []);
  return Y(() => {
    Nn(t), i(t === "system" ? we() : t);
  }, [t]), Y(() => {
    if (t !== "system") return;
    const a = window.matchMedia("(prefers-color-scheme: dark)"), d = () => i(we());
    return a.addEventListener("change", d), () => a.removeEventListener("change", d);
  }, [t]), { theme: t, resolvedTheme: r, setTheme: o };
}
async function* Wn(t, n) {
  if (!t.body)
    throw new Error("SSE response has no readable body");
  const r = t.body.getReader(), i = new TextDecoder();
  let o = "";
  try {
    for (; ; ) {
      if (n != null && n.aborted) {
        await r.cancel().catch(() => {
        });
        return;
      }
      const { value: a, done: d } = await r.read();
      if (d) break;
      o += i.decode(a, { stream: !0 });
      let s;
      for (; (s = o.indexOf(`

`)) !== -1; ) {
        const c = o.slice(0, s);
        o = o.slice(s + 2);
        const h = [];
        for (const g of c.split(`
`))
          g.startsWith("data:") && h.push(g.slice(5).trimStart());
        if (h.length === 0) continue;
        const u = h.join(`
`);
        try {
          yield JSON.parse(u);
        } catch {
        }
      }
    }
  } finally {
    try {
      r.releaseLock();
    } catch {
    }
  }
}
async function* Fn(t, n = {}) {
  const r = await fetch(t, n);
  if (!r.ok) {
    const i = await r.text().catch(() => "");
    throw new Error(
      `SSE request failed ${r.status} ${r.statusText}: ${i}`
    );
  }
  yield* Wn(r, n.signal);
}
function tr(t = {}) {
  const { onEvent: n, onComplete: r, onError: i, retain: o = !0 } = t, [a, d] = O([]), [s, c] = O(null), [h, u] = O(!1), [g, b] = O(null), m = ne(null), y = ne(!0), v = ne(n), L = ne(r), C = ne(i);
  Y(() => {
    v.current = n, L.current = r, C.current = i;
  }), Y(() => (y.current = !0, () => {
    var A;
    y.current = !1, (A = m.current) == null || A.abort();
  }), []);
  const j = G(() => {
    var A;
    (A = m.current) == null || A.abort(), m.current = null;
  }, []), B = G(() => {
    d([]), c(null), b(null);
  }, []), $ = G(
    async (A, H = {}) => {
      var k, I, W, K;
      (k = m.current) == null || k.abort();
      const N = new AbortController();
      m.current = N, y.current && (d([]), c(null), b(null), u(!0));
      try {
        for await (const F of Fn(A, {
          ...H,
          signal: N.signal
        })) {
          if (!y.current) return;
          o && d((V) => [...V, F]), c(F), (I = v.current) == null || I.call(v, F);
        }
        y.current && ((W = L.current) == null || W.call(L));
      } catch (F) {
        if (N.signal.aborted) return;
        const V = F instanceof Error ? F : new Error(String(F));
        y.current && (b(V), (K = C.current) == null || K.call(C, V));
      } finally {
        y.current && m.current === N && (u(!1), m.current = null);
      }
    },
    [o]
  );
  return { events: a, lastEvent: s, isStreaming: h, error: g, start: $, abort: j, reset: B };
}
export {
  Yn as AccentColor,
  ce as Anchor,
  Kt as Aside,
  ut as Avatar,
  x as BackgroundColor,
  We as Badge,
  zt as Banner,
  oe as BloomColor,
  te as BloomLevel,
  z as BorderColor,
  M as BorderRadius,
  Vn as BorderWidth,
  S as Box,
  Ce as Breakpoint,
  ie as Button,
  qt as Calendar,
  Bt as Card,
  yt as Checkbox,
  tt as Chip,
  _n as ContainerWidth,
  Zn as DirectionColor,
  vt as Divider,
  an as DropdownCheckboxMenu,
  Wt as DropdownMenu,
  se as Elevation,
  Qt as EmptyState,
  Jn as EvaluationResultColor,
  Je as FontFamily,
  w as FontSize,
  T as FontWeight,
  yn as GlassCard,
  ge as Gradient,
  Ae as Grid,
  Rt as Header,
  Ct as HeroSection,
  Kn as Hide,
  Ge as Icon,
  Q as IconButton,
  Un as IconSize,
  xe as Image,
  R as Inline,
  ln as InlineEdit,
  Vt as Layout,
  Ne as LetterSpacing,
  Rn as LikertScale,
  it as LinkButton,
  He as Menu,
  pn as MobileNav,
  Nt as Modal,
  $t as ModalSize,
  Lt as Navbar,
  Pt as Panel,
  qn as PersonaAccent,
  bn as ProgressTracker,
  Sn as RevealSteps,
  Oe as Select,
  sn as SelectField,
  Pn as Show,
  Ht as Sidebar,
  l as Spacing,
  Fe as Spinner,
  P as Stack,
  wt as Stepper,
  tn as Table,
  Tt as Tabs,
  D as Text,
  bt as TextArea,
  p as TextColor,
  Dt as TextField,
  Me as TextInput,
  un as Toast,
  lt as Toggle,
  ae as ZIndex,
  Ze as bloomColorFor,
  qe as bloomLevelForScore,
  Wn as parseSSEStream,
  Gn as scoreColor,
  Fn as streamSSE,
  ve as useBreakpoint,
  Qn as useMediaQuery,
  U as useResponsiveValue,
  tr as useSSEStream,
  er as useTheme
};
