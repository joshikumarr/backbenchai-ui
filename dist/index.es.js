import le, { useState as N, useEffect as V, forwardRef as X, Fragment as Ve, useCallback as _, useId as Se, createContext as Ye, useContext as _e, useMemo as be, useRef as te } from "react";
import { jsx as r, Fragment as ne, jsxs as f } from "react/jsx-runtime";
import { createPortal as Le } from "react-dom";
const De = {
  /** 0–639px */
  Mobile: 0,
  /** 640–1023px */
  Tablet: 640,
  /** 1024px+ */
  Desktop: 1024
};
function Ie(e) {
  return e >= De.Desktop ? "desktop" : e >= De.Tablet ? "tablet" : "mobile";
}
function we() {
  const [e, t] = N(
    () => typeof window < "u" ? Ie(window.innerWidth) : "desktop"
  );
  return V(() => {
    const n = () => t(Ie(window.innerWidth));
    return window.addEventListener("resize", n), () => window.removeEventListener("resize", n);
  }, []), e;
}
function Ue(e, t) {
  if (e == null || typeof e != "object" || !("mobile" in e)) return e;
  const n = e;
  switch (t) {
    case "desktop":
      return n.desktop ?? n.tablet ?? n.mobile;
    case "tablet":
      return n.tablet ?? n.mobile;
    default:
      return n.mobile;
  }
}
function G(e) {
  const t = we();
  return Ue(e, t);
}
const w = X(
  ({
    as: e = "div",
    padding: t,
    paddingBlock: n,
    paddingBlockStart: i,
    paddingBlockEnd: a,
    paddingInline: o,
    paddingInlineStart: d,
    paddingInlineEnd: s,
    marginBlock: c,
    marginBlockStart: m,
    marginBlockEnd: u,
    backgroundColor: g,
    borderRadius: p,
    borderColor: b,
    borderSide: y,
    borderWidth: v = "1px",
    overflow: D,
    elevation: L,
    maxWidth: P,
    style: C,
    children: $,
    ...A
  }, H) => {
    const W = G(t), k = G(n), I = G(i), F = G(a), K = G(o), O = G(d), Y = G(s), U = G(c), E = G(m), J = G(u), q = b ? `${v} solid ${b}` : void 0, Z = {};
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
      ...W && { padding: W },
      ...k && { paddingBlock: k },
      ...I && { paddingBlockStart: I },
      ...F && { paddingBlockEnd: F },
      ...K && { paddingInline: K },
      ...O && { paddingInlineStart: O },
      ...Y && { paddingInlineEnd: Y },
      ...U && { marginBlock: U },
      ...E && { marginBlockStart: E },
      ...J && { marginBlockEnd: J },
      ...g && { backgroundColor: g },
      ...p && { borderRadius: p },
      ...Z,
      ...D && { overflow: D },
      ...L && { boxShadow: L },
      ...P && { maxWidth: P, marginInline: "auto" },
      ...C
    };
    return le.createElement(
      e,
      { ...A, ref: H, style: ue },
      $
    );
  }
);
w.displayName = "Box";
const fe = ["mobile", "tablet", "desktop"];
function Ge(e, t) {
  return fe.indexOf(e) >= fe.indexOf(t);
}
function Je(e, t) {
  return fe.indexOf(e) < fe.indexOf(t);
}
function Jt({ on: e, above: t, below: n, children: i }) {
  const a = we();
  return e != null ? (Array.isArray(e) ? e : [e]).includes(a) ? /* @__PURE__ */ r(ne, { children: i }) : null : t != null ? Ge(a, t) ? /* @__PURE__ */ r(ne, { children: i }) : null : n != null ? Je(a, n) ? /* @__PURE__ */ r(ne, { children: i }) : null : /* @__PURE__ */ r(ne, { children: i });
}
const ye = ["mobile", "tablet", "desktop"];
function Ze(e, t) {
  return ye.indexOf(e) >= ye.indexOf(t);
}
function qe(e, t) {
  return ye.indexOf(e) < ye.indexOf(t);
}
function Zt({ on: e, above: t, below: n, children: i }) {
  const a = we();
  return e != null ? (Array.isArray(e) ? e : [e]).includes(a) ? null : /* @__PURE__ */ r(ne, { children: i }) : t != null ? Ze(a, t) ? null : /* @__PURE__ */ r(ne, { children: i }) : n != null ? qe(a, n) ? null : /* @__PURE__ */ r(ne, { children: i }) : /* @__PURE__ */ r(ne, { children: i });
}
const Ee = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch"
}, j = X(
  ({
    as: e = "div",
    space: t,
    alignInline: n,
    alignBlock: i,
    spread: a,
    grow: o = "hug",
    marginBlockStart: d,
    marginBlockEnd: s,
    style: c,
    children: m,
    ...u
  }, g) => {
    const b = {
      display: "flex",
      flexDirection: "column",
      gap: G(t ?? "0"),
      ...n && { alignItems: Ee[n] },
      ...i && !a && { justifyContent: Ee[i] },
      ...a && { justifyContent: a },
      ...o === "fill" && { flex: "1 1 auto" },
      ...d && { marginBlockStart: d },
      ...s && { marginBlockEnd: s },
      ...c
    };
    return le.createElement(
      e,
      { ...u, ref: g, style: b },
      m
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
    as: e = "div",
    space: t,
    rowSpace: n,
    alignBlock: i,
    alignInline: a,
    spread: o,
    shouldWrap: d,
    separator: s,
    grow: c = "hug",
    marginBlockStart: m,
    marginBlockEnd: u,
    borderRadius: g,
    overflow: p,
    elevation: b,
    style: y,
    children: v,
    ...D
  }, L) => {
    const P = G(t ?? "0"), C = {
      display: "flex",
      flexDirection: "row",
      columnGap: P,
      rowGap: n ?? P,
      ...i && { alignItems: ze[i] },
      ...a && !o && { justifyContent: ze[a] },
      ...o && { justifyContent: o },
      ...d && { flexWrap: "wrap" },
      ...c === "fill" && { flex: "1 1 auto" },
      ...m && { marginBlockStart: m },
      ...u && { marginBlockEnd: u },
      ...g && { borderRadius: g },
      ...p && { overflow: p },
      ...b && { boxShadow: b },
      ...y
    };
    let $ = v;
    if (s) {
      const A = le.Children.toArray(v).filter(Boolean);
      $ = A.map((H, W) => /* @__PURE__ */ f(Ve, { children: [
        H,
        W < A.length - 1 && /* @__PURE__ */ r("span", { "aria-hidden": "true", children: s })
      ] }, W));
    }
    return le.createElement(
      e,
      { ...D, ref: L, style: C },
      $
    );
  }
);
R.displayName = "Inline";
const B = X(
  ({
    as: e = "span",
    size: t,
    weight: n,
    color: i,
    fontFamily: a,
    letterSpacing: o,
    align: d,
    textTransform: s,
    lineHeight: c,
    opacity: m,
    style: u,
    children: g,
    ...p
  }, b) => {
    const y = {
      ...t && { fontSize: t },
      ...n && { fontWeight: n },
      ...i && { color: i },
      ...a && { fontFamily: a },
      ...o && { letterSpacing: o },
      ...d && { textAlign: d },
      ...s && { textTransform: s },
      ...c !== void 0 && { lineHeight: c },
      ...m !== void 0 && { opacity: m },
      ...u
    };
    return le.createElement(
      e,
      { ...p, ref: b, style: y },
      g
    );
  }
);
B.displayName = "Text";
function Qe(e) {
  if (e !== void 0)
    return typeof e == "number" ? `repeat(${e}, 1fr)` : e.map((t) => `${t}fr`).join(" ");
}
const We = X(
  ({
    as: e = "div",
    columns: t,
    gap: n,
    rowGap: i,
    marginBlockStart: a,
    marginBlockEnd: o,
    borderRadius: d,
    overflow: s,
    elevation: c,
    style: m,
    children: u,
    ...g
  }, p) => {
    const b = G(t ?? 1), y = G(n ?? "0"), v = {
      display: "grid",
      gridTemplateColumns: Qe(b),
      gap: y,
      ...i && { rowGap: i },
      ...a && { marginBlockStart: a },
      ...o && { marginBlockEnd: o },
      ...d && { borderRadius: d },
      ...s && { overflow: s },
      ...c && { boxShadow: c },
      ...m
    };
    return le.createElement(
      e,
      { ...g, ref: p, style: v },
      u
    );
  }
);
We.displayName = "Grid";
const ce = X(
  ({
    color: e,
    weight: t,
    size: n,
    backgroundColor: i,
    padding: a,
    paddingBlock: o,
    paddingBlockStart: d,
    paddingInline: s,
    borderRadius: c,
    textTransform: m,
    display: u,
    alignSelf: g,
    style: p,
    children: b,
    ...y
  }, v) => {
    const D = {
      ...e && { color: e },
      ...t && { fontWeight: t },
      ...n && { fontSize: n },
      ...i && { backgroundColor: i },
      ...a && { padding: a },
      ...o && { paddingBlock: o },
      ...d && { paddingBlockStart: d },
      ...s && { paddingInline: s },
      ...c && { borderRadius: c },
      ...m && { textTransform: m },
      ...u && { display: u },
      ...g && { alignSelf: g },
      ...p
    };
    return /* @__PURE__ */ r("a", { ref: v, style: D, ...y, children: b });
  }
);
ce.displayName = "Anchor";
const xe = X(
  ({ borderRadius: e, objectFit: t, width: n, height: i, fill: a, style: o, ...d }, s) => {
    const c = {
      display: "block",
      ...a ? { width: "100%", height: "100%" } : {
        ...n ? { width: n, flexShrink: 0 } : { width: "100%" },
        ...i && { height: i }
      },
      ...e && { borderRadius: e },
      ...t && { objectFit: t },
      ...o
    };
    return /* @__PURE__ */ r("img", { ref: s, style: c, ...d });
  }
);
xe.displayName = "Image";
const ie = X(
  ({
    backgroundColor: e,
    gradient: t,
    color: n,
    fontFamily: i,
    padding: a,
    paddingBlock: o,
    paddingInline: d,
    borderRadius: s,
    style: c,
    children: m,
    ...u
  }, g) => {
    const p = {
      border: "none",
      cursor: "pointer",
      ...t ? { background: t } : e ? { backgroundColor: e } : {},
      ...n && { color: n },
      ...i && { fontFamily: i },
      ...a && { padding: a },
      ...o && { paddingBlock: o },
      ...d && { paddingInline: d },
      ...s && { borderRadius: s },
      ...c
    };
    return /* @__PURE__ */ r("button", { ref: g, style: p, ...u, children: m });
  }
);
ie.displayName = "Button";
const Ce = X(
  ({
    backgroundColor: e,
    borderColor: t,
    borderRadius: n,
    padding: i,
    paddingBlock: a,
    paddingInline: o,
    style: d,
    ...s
  }, c) => {
    const m = {
      ...e && { backgroundColor: e },
      ...t && { border: `1px solid ${t}` },
      ...n && { borderRadius: n },
      ...i && { padding: i },
      ...a && { paddingBlock: a },
      ...o && { paddingInline: o },
      ...d
    };
    return /* @__PURE__ */ r("input", { ref: c, style: m, ...s });
  }
);
Ce.displayName = "TextInput";
const er = X(
  ({ size: e, color: t, label: n, style: i, children: a, ...o }, d) => {
    const s = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      ...e && { width: e, height: e },
      ...t && { color: t },
      ...i
    };
    return /* @__PURE__ */ r(
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
er.displayName = "Icon";
const l = {
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
}, h = {
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
}, S = {
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
}, rr = {
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
}, qt = {
  Thin: "1px",
  Medium: "2px",
  Thick: "4px",
  XThick: "8px"
}, Qt = {
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
}, en = {
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
}, rn = {
  Small: "1rem",
  Medium: "1.25rem",
  Large: "1.5rem",
  XLarge: "2rem",
  XXLarge: "2.5rem"
}, oe = {
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
function tr(e) {
  switch (e) {
    case re.Masters:
      return oe.Masters;
    case re.Analyzes:
      return oe.Analyzes;
    case re.Applies:
      return oe.Applies;
    case re.Understands:
      return oe.Understands;
    case re.Aware:
      return oe.Aware;
    default:
      return oe.NotAssessed;
  }
}
function nr(e) {
  return e >= 90 ? re.Masters : e >= 80 ? re.Analyzes : e >= 60 ? re.Applies : e >= 40 ? re.Understands : e >= 20 ? re.Aware : re.NotAssessed;
}
function tn(e) {
  return tr(nr(e));
}
const nn = {
  correct: oe.Masters,
  partial: oe.Applies,
  incorrect: "var(--bbui-color-error)",
  skipped: "var(--bbui-color-subtlest)"
}, ln = {
  up: oe.Masters,
  down: "var(--bbui-color-error)",
  unchanged: "var(--bbui-color-subtlest)"
}, on = {
  Nova: "var(--bbui-persona-nova)",
  Maya: "var(--bbui-persona-maya)",
  Jordan: "var(--bbui-persona-jordan)",
  Custom: "var(--bbui-persona-custom)"
}, lr = {
  default: { backgroundColor: S.NeutralBold, color: h.Default },
  success: { backgroundColor: S.Success, color: h.Inverse },
  warning: { backgroundColor: S.Warning, color: h.Warning },
  error: { backgroundColor: S.Error, color: h.Error },
  info: { backgroundColor: S.Info, color: h.Info },
  brand: { backgroundColor: S.Brand, color: h.Inverse },
  primaryTint: { backgroundColor: S.PrimaryTint, color: h.Brand },
  errorTint: { backgroundColor: S.ErrorTint, color: h.Error },
  warningTint: { backgroundColor: S.WarningTint, color: "#ea580c" },
  infoTint: { backgroundColor: S.InfoTint, color: "#2563eb" },
  accentTint: { backgroundColor: S.AccentTint, color: "#7c3aed" }
}, Fe = X(
  ({ variant: e = "default", uppercase: t = !1, style: n, children: i, ...a }, o) => {
    const d = lr[e], s = {
      display: "inline-flex",
      alignItems: "center",
      lineHeight: 1,
      paddingBlock: l.XXSmall,
      paddingInline: t ? l.MediumLarge : l.Medium,
      borderRadius: M.Full,
      fontWeight: t ? z.Black : z.Medium,
      fontSize: t ? x.Micro : x.XXSmall,
      letterSpacing: t ? ve.Wider : void 0,
      textTransform: t ? "uppercase" : void 0,
      ...d,
      ...n
    };
    return /* @__PURE__ */ r("span", { ref: o, style: s, ...a, children: i });
  }
);
Fe.displayName = "Badge";
const ir = "2.5rem", or = "1.5rem", ke = "1.25rem", Te = l.XXSmall, ar = X(
  ({ checked: e, defaultChecked: t = !1, onChange: n, label: i, style: a, ...o }, d) => {
    const [s, c] = N(t), m = e !== void 0, u = m ? e : s, g = _(() => {
      const y = !u;
      m || c(y), n == null || n(y);
    }, [u, m, n]), p = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      width: ir,
      height: or,
      borderRadius: M.Full,
      backgroundColor: u ? S.Brand : S.Neutral,
      border: "none",
      cursor: "pointer",
      padding: 0,
      transition: "background-color 150ms ease",
      ...a
    }, b = {
      position: "absolute",
      width: ke,
      height: ke,
      borderRadius: M.Full,
      backgroundColor: S.Default,
      transition: "left 150ms ease",
      left: u ? `calc(100% - ${ke} - ${Te})` : Te,
      boxShadow: "0 1px 3px rgba(0,0,0,.2)"
    };
    return /* @__PURE__ */ r(
      "button",
      {
        ref: d,
        type: "button",
        role: "switch",
        "aria-checked": u,
        "aria-label": i,
        onClick: g,
        style: p,
        ...o,
        children: /* @__PURE__ */ r("span", { style: b })
      }
    );
  }
);
ar.displayName = "Toggle";
const sr = X(
  ({
    backgroundColor: e,
    color: t,
    padding: n,
    paddingBlock: i,
    paddingInline: a,
    borderRadius: o,
    style: d,
    children: s,
    ...c
  }, m) => {
    const u = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      cursor: "pointer",
      border: "none",
      ...e && { backgroundColor: e },
      ...t && { color: t },
      ...n && { padding: n },
      ...i && { paddingBlock: i },
      ...a && { paddingInline: a },
      ...o && { borderRadius: o },
      ...d
    };
    return /* @__PURE__ */ r("a", { ref: m, style: u, ...c, children: s });
  }
);
sr.displayName = "LinkButton";
const Q = X(
  ({ label: e, size: t, color: n, backgroundColor: i, padding: a, style: o, children: d, ...s }, c) => {
    const m = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      cursor: "pointer",
      background: i ?? "none",
      ...t && { width: t, height: t },
      ...n && { color: n },
      ...a && { padding: a },
      ...o
    };
    return /* @__PURE__ */ r(
      "button",
      {
        ref: c,
        type: "button",
        "aria-label": e,
        style: m,
        ...s,
        children: d
      }
    );
  }
);
Q.displayName = "IconButton";
const dr = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64
}, cr = {
  xsmall: "0.625rem",
  small: "0.75rem",
  medium: "0.875rem",
  large: "1rem",
  xlarge: "1.5rem"
}, ur = {
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
  var n;
  const t = e.trim().split(/\s+/);
  return t.length >= 2 ? (t[0][0] + t[t.length - 1][0]).toUpperCase() : (((n = t[0]) == null ? void 0 : n[0]) ?? "").toUpperCase();
}
const pr = X(
  ({
    src: e,
    name: t,
    size: n = "medium",
    appearance: i = "circle",
    status: a,
    fallbackBackground: o = S.NeutralBold,
    fallbackColor: d = h.Subtle
  }, s) => {
    const [c, m] = N(!1), u = dr[n], g = e && !c, p = t ? mr(t) : "", b = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: u,
      height: u,
      borderRadius: i === "circle" ? M.Full : M.XLarge,
      overflow: "hidden",
      flexShrink: 0,
      ...g ? {} : { backgroundColor: o }
    }, y = ur[n], v = a ? {
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
    return /* @__PURE__ */ f("span", { ref: s, style: b, role: "img", "aria-label": t ?? "Avatar", children: [
      g ? /* @__PURE__ */ r(
        "img",
        {
          src: e,
          alt: t ?? "",
          onError: () => m(!0),
          style: { width: "100%", height: "100%", objectFit: "cover" }
        }
      ) : /* @__PURE__ */ r(
        "span",
        {
          style: {
            fontSize: cr[n],
            fontWeight: z.Semibold,
            color: d,
            lineHeight: 1,
            userSelect: "none"
          },
          children: p
        }
      ),
      a && /* @__PURE__ */ r("span", { style: v })
    ] });
  }
);
pr.displayName = "Avatar";
const gr = {
  xsmall: 16,
  small: 24,
  medium: 32,
  large: 48,
  xlarge: 64
}, br = {
  xsmall: 2,
  small: 2,
  medium: 3,
  large: 3,
  xlarge: 4
}, Oe = X(
  ({ size: e = "medium", label: t = "Loading", color: n = h.Brand }, i) => {
    const a = Se().replace(/:/g, ""), o = gr[e], d = br[e], s = (o - d) / 2, c = 2 * Math.PI * s;
    return /* @__PURE__ */ f(
      "span",
      {
        ref: i,
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
          /* @__PURE__ */ r("style", { children: `
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
                /* @__PURE__ */ r(
                  "circle",
                  {
                    cx: o / 2,
                    cy: o / 2,
                    r: s,
                    stroke: n,
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
const fr = X(
  ({
    backgroundColor: e,
    borderColor: t,
    borderRadius: n,
    padding: i,
    paddingBlock: a,
    paddingInline: o,
    style: d,
    ...s
  }, c) => {
    const m = {
      fontFamily: "inherit",
      fontSize: "inherit",
      resize: "vertical",
      ...e && { backgroundColor: e },
      ...t ? { border: `1px solid ${t}` } : { border: "none" },
      ...n && { borderRadius: n },
      ...i && { padding: i },
      ...a && { paddingBlock: a },
      ...o && { paddingInline: o },
      ...d
    };
    return /* @__PURE__ */ r("textarea", { ref: c, style: m, ...s });
  }
);
fr.displayName = "TextArea";
function yr(e) {
  return "options" in e;
}
const He = X(
  ({
    options: e,
    placeholder: t,
    backgroundColor: n,
    borderColor: i,
    borderRadius: a,
    padding: o,
    paddingBlock: d,
    paddingInline: s,
    fontSize: c,
    color: m,
    style: u,
    ...g
  }, p) => {
    const b = {
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
      ...i ? { border: `1px solid ${i}` } : { border: "none" },
      ...a && { borderRadius: a },
      ...o && { padding: o },
      ...d && { paddingBlock: d },
      ...s && { paddingInline: s },
      ...c && { fontSize: c },
      ...m && { color: m },
      ...u
    };
    return /* @__PURE__ */ f("select", { ref: p, style: b, ...g, children: [
      t && /* @__PURE__ */ r("option", { value: "", disabled: !0, hidden: !0, children: t }),
      e.map(
        (y) => yr(y) ? /* @__PURE__ */ r("optgroup", { label: y.label, children: y.options.map((v) => /* @__PURE__ */ r("option", { value: v.value, disabled: v.disabled, children: v.label }, v.value)) }, y.label) : /* @__PURE__ */ r("option", { value: y.value, disabled: y.disabled, children: y.label }, y.value)
      )
    ] });
  }
);
He.displayName = "Select";
const vr = {
  small: { box: "1rem", font: x.XXSmall, gap: l.XSmall },
  medium: { box: "1.25rem", font: x.XSmall, gap: l.Medium },
  large: { box: "1.5rem", font: x.Small, gap: l.Medium }
}, Sr = ({ size: e }) => /* @__PURE__ */ r(
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
), wr = X(
  ({ label: e, size: t = "medium", checked: n, disabled: i, style: a, id: o, ...d }, s) => {
    const c = Se(), m = o ?? c, u = vr[t], g = !!n, p = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: u.box,
      height: u.box,
      borderRadius: M.Small,
      flexShrink: 0,
      border: g ? "none" : `2px solid ${T.Outline}`,
      backgroundColor: g ? i ? h.Disabled : S.Brand : S.Transparent,
      color: h.Inverse,
      cursor: i ? "default" : "pointer",
      opacity: i ? 0.5 : 1
    };
    return /* @__PURE__ */ f(
      "label",
      {
        htmlFor: m,
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: u.gap,
          cursor: i ? "default" : "pointer",
          ...a
        },
        children: [
          /* @__PURE__ */ r(
            "input",
            {
              ref: s,
              id: m,
              type: "checkbox",
              checked: n,
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
          /* @__PURE__ */ r("span", { style: p, "aria-hidden": "true", children: g && /* @__PURE__ */ r(Sr, { size: `calc(${u.box} - 4px)` }) }),
          e && /* @__PURE__ */ r(
            "span",
            {
              style: {
                fontSize: u.font,
                color: i ? h.Disabled : h.Default
              },
              children: e
            }
          )
        ]
      }
    );
  }
);
wr.displayName = "Checkbox";
const xr = X(
  ({
    orientation: e = "horizontal",
    color: t = T.Default,
    spacing: n
  }, i) => /* @__PURE__ */ r(
    "hr",
    {
      ref: i,
      role: "separator",
      "aria-orientation": e,
      style: {
        border: "none",
        margin: 0,
        flexShrink: 0,
        ...e === "vertical" ? {
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
xr.displayName = "Divider";
const kr = () => /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ r("path", { fillRule: "evenodd", d: "M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z", clipRule: "evenodd" }) }), Xr = () => /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ r("path", { d: "M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" }) }), Mr = X(
  ({
    value: e,
    onChange: t,
    min: n = 0,
    max: i = 99,
    step: a = 1,
    disabled: o = !1,
    backgroundColor: d = S.Subtle,
    padding: s = l.XSmall
  }, c) => {
    const m = e - a >= n, u = e + a <= i;
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
          /* @__PURE__ */ r(
            Q,
            {
              label: "Decrease",
              onClick: () => m && t(e - a),
              disabled: o || !m,
              color: h.Brand,
              padding: l.XSmall,
              children: /* @__PURE__ */ r(kr, {})
            }
          ),
          /* @__PURE__ */ r(
            B,
            {
              as: "span",
              size: x.Medium,
              weight: z.Bold,
              color: h.Default,
              style: { minWidth: "2rem", textAlign: "center" },
              children: e
            }
          ),
          /* @__PURE__ */ r(
            Q,
            {
              label: "Increase",
              onClick: () => u && t(e + a),
              disabled: o || !u,
              color: h.Brand,
              padding: l.XSmall,
              children: /* @__PURE__ */ r(Xr, {})
            }
          )
        ]
      }
    );
  }
);
Mr.displayName = "Stepper";
const Pe = "bbui-page-size", Me = "medium", je = Ye(null);
function Lr(e) {
  typeof document > "u" || document.documentElement.setAttribute("data-page-size", e);
}
function Cr() {
  if (typeof localStorage > "u") return Me;
  const e = localStorage.getItem(Pe);
  return e === "small" || e === "medium" || e === "large" ? e : Me;
}
function an({
  defaultSize: e,
  persist: t = !0,
  children: n
}) {
  const [i, a] = N(
    () => t ? Cr() : e ?? Me
  ), o = _(
    (s) => {
      a(s), t && typeof localStorage < "u" && localStorage.setItem(Pe, s);
    },
    [t]
  );
  V(() => {
    Lr(i);
  }, [i]);
  const d = be(
    () => ({ pageSize: i, setPageSize: o }),
    [i, o]
  );
  return /* @__PURE__ */ r(je.Provider, { value: d, children: n });
}
function Br() {
  const e = _e(je);
  if (!e)
    throw new Error("usePageSize must be used inside <PageSizeProvider>");
  return e;
}
const Dr = () => /* @__PURE__ */ r(
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
), Ir = () => /* @__PURE__ */ r(
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
), Er = () => /* @__PURE__ */ r(
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
), zr = X(
  ({
    logo: e,
    navigation: t = [],
    cta: n,
    linkColor: i = h.Subtle,
    ctaBackgroundColor: a = S.Dark,
    ctaColor: o = h.Inverse,
    ctaWeight: d = 500,
    ctaBorderRadius: s = M.Full,
    paddingInline: c = l.XXXLarge,
    paddingBlock: m = l.XLarge,
    linkGap: u = l.XXLarge,
    logoGap: g = l.Size3_5,
    mobileMenuBackground: p = S.Default,
    mobileMenuBorderColor: b = T.Default,
    mobileMenuBorderRadius: y = M.Large,
    mobileBreakpoint: v = 768
  }, D) => {
    const [L, P] = N(!1), [C, $] = N(!1);
    V(() => {
      const I = () => $(window.innerWidth < v);
      return I(), window.addEventListener("resize", I), () => window.removeEventListener("resize", I);
    }, [v]);
    const A = _((I) => {
      I.target.closest("[data-navbar-menu]") || P(!1);
    }, []);
    V(() => (document.addEventListener("click", A), () => document.removeEventListener("click", A)), [A]);
    const H = le.isValidElement(e) ? e : /* @__PURE__ */ r(
      xe,
      {
        src: e.src,
        alt: e.alt ?? "Logo",
        style: {
          width: e.width ?? 120,
          height: e.height ?? "auto"
        }
      }
    ), W = /* @__PURE__ */ r(ne, { children: t.map((I, F) => /* @__PURE__ */ r(
      ce,
      {
        href: I.path,
        color: i,
        display: "block",
        style: { textDecoration: "none" },
        children: I.title
      },
      F
    )) }), k = n ? /* @__PURE__ */ r(
      ce,
      {
        href: n.path,
        backgroundColor: a,
        color: o,
        paddingBlock: l.Medium,
        paddingInline: l.Large,
        borderRadius: s,
        weight: d,
        display: "inline-block",
        style: { textDecoration: "none" },
        children: /* @__PURE__ */ f(R, { space: l.XSmall, alignBlock: "center", children: [
          /* @__PURE__ */ r(B, { as: "span", color: o, weight: d, children: n.label }),
          n.icon ?? /* @__PURE__ */ r(Er, {})
        ] })
      }
    ) : null;
    return C ? /* @__PURE__ */ f(w, { as: "header", ref: D, "data-navbar-menu": !0, children: [
      /* @__PURE__ */ r(
        w,
        {
          as: "nav",
          paddingInline: l.Large,
          paddingBlock: m,
          children: /* @__PURE__ */ f(R, { alignBlock: "center", spread: "space-between", children: [
            /* @__PURE__ */ r(w, { children: H }),
            /* @__PURE__ */ r(
              ie,
              {
                onClick: () => P(!L),
                style: {
                  background: "none",
                  padding: 0,
                  color: h.Subtle
                },
                children: L ? /* @__PURE__ */ r(Ir, {}) : /* @__PURE__ */ r(Dr, {})
              }
            )
          ] })
        }
      ),
      L && /* @__PURE__ */ r(
        w,
        {
          backgroundColor: p,
          elevation: se.Raised,
          borderRadius: y,
          borderColor: b,
          borderSide: "all",
          padding: l.Large,
          style: { margin: l.Medium },
          children: /* @__PURE__ */ f("nav", { children: [
            /* @__PURE__ */ r("ul", { style: { listStyle: "none", padding: 0, margin: 0 }, children: t.map((I, F) => /* @__PURE__ */ r("li", { style: { paddingBlock: l.MediumLarge }, children: /* @__PURE__ */ r(
              ce,
              {
                href: I.path,
                color: i,
                display: "block",
                style: { textDecoration: "none" },
                children: I.title
              }
            ) }, F)) }),
            k && /* @__PURE__ */ r(w, { marginBlockStart: l.XXLarge, children: k })
          ] })
        }
      )
    ] }) : /* @__PURE__ */ r(w, { as: "header", ref: D, style: { width: "100%" }, children: /* @__PURE__ */ r(
      w,
      {
        as: "nav",
        paddingInline: c,
        paddingBlock: m,
        style: { width: "100%" },
        children: /* @__PURE__ */ f(R, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ r(w, { children: H }),
          /* @__PURE__ */ f(
            R,
            {
              space: u,
              alignBlock: "center",
              grow: "fill",
              style: { marginInlineStart: g },
              children: [
                /* @__PURE__ */ r(
                  R,
                  {
                    space: u,
                    alignBlock: "center",
                    grow: "fill",
                    alignInline: "center",
                    children: W
                  }
                ),
                k && /* @__PURE__ */ r(w, { children: k })
              ]
            }
          )
        ] })
      }
    ) });
  }
);
zr.displayName = "Navbar";
const Re = () => /* @__PURE__ */ r(
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
), Tr = X(
  ({
    title: e,
    subtitle: t,
    badge: n,
    actions: i = [],
    image: a,
    children: o,
    titleSize: d = x.XXXLarge,
    titleSizeLarge: s = x.Huge,
    titleWeight: c = z.ExtraBold,
    titleColor: m = h.Default,
    subtitleSize: u = x.Small,
    subtitleColor: g = h.Subtlest,
    primaryCtaBackground: p = S.Dark,
    primaryCtaColor: b = h.Inverse,
    primaryCtaBorderRadius: y = M.Full,
    primaryCtaWeight: v = 500,
    secondaryCtaColor: D = h.Subtle,
    secondaryCtaWeight: L = 500,
    ctaGap: P = l.MediumLarge,
    paddingBlock: C = l.Size7,
    paddingInline: $ = l.XXXLarge,
    contentGap: A = l.XHuge,
    textGap: H = l.XLarge,
    textMaxWidth: W = "36rem",
    gradient: k,
    breakpoint: I = 768
  }, F) => {
    const [K, O] = N(!1);
    V(() => {
      const ee = () => O(window.innerWidth >= I);
      return ee(), window.addEventListener("resize", ee), () => window.removeEventListener("resize", ee);
    }, [I]);
    const Y = (k == null ? void 0 : k.enabled) !== !1, U = (k == null ? void 0 : k.css) ?? "linear-gradient(143.6deg, rgba(192,132,252,0) 20.79%, rgba(232,121,249,0.26) 40.92%, rgba(204,171,238,0) 70.35%)", E = (k == null ? void 0 : k.height) ?? "580px", J = (n == null ? void 0 : n.borderColor) ?? T.Default, q = n ? /* @__PURE__ */ r(
      ce,
      {
        href: n.path ?? "#",
        borderRadius: M.Full,
        paddingBlock: l.XSmall,
        paddingInline: l.Small,
        size: x.XSmall,
        weight: 500,
        display: "inline-block",
        style: {
          textDecoration: "none",
          border: `1px solid ${J}`,
          paddingRight: l.XXLarge
        },
        children: /* @__PURE__ */ f(R, { space: l.MediumLarge, alignBlock: "center", children: [
          /* @__PURE__ */ r(
            B,
            {
              as: "span",
              size: x.XSmall,
              color: n.labelColor ?? h.Inverse,
              style: {
                backgroundColor: n.labelBackgroundColor ?? S.Accent,
                borderRadius: M.Full,
                padding: `${l.XSmall} ${l.MediumLarge}`
              },
              children: n.label
            }
          ),
          /* @__PURE__ */ f(R, { space: l.XXSmall, alignBlock: "center", children: [
            /* @__PURE__ */ r(B, { as: "span", size: x.XSmall, children: n.text }),
            n.icon ?? /* @__PURE__ */ r(Re, {})
          ] })
        ] })
      }
    ) : null, Z = i.length > 0 ? /* @__PURE__ */ r(R, { space: P, alignBlock: "center", shouldWrap: !0, children: i.map((ee, pe) => {
      const me = (ee.variant ?? (pe === 0 ? "primary" : "secondary")) === "primary", Be = me ? v : L;
      return /* @__PURE__ */ r(
        ce,
        {
          href: ee.path,
          backgroundColor: me ? p : void 0,
          color: me ? b : D,
          paddingBlock: l.Medium,
          paddingInline: l.Large,
          borderRadius: me ? y : void 0,
          weight: Be,
          display: "inline-block",
          style: { textDecoration: "none" },
          children: /* @__PURE__ */ f(R, { space: l.XSmall, alignBlock: "center", children: [
            /* @__PURE__ */ r(
              B,
              {
                as: "span",
                color: me ? b : D,
                weight: Be,
                children: ee.label
              }
            ),
            ee.icon ?? /* @__PURE__ */ r(Re, {})
          ] })
        },
        pe
      );
    }) }) : null, he = /* @__PURE__ */ f(
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
              color: m,
              lineHeight: 1.2,
              children: e
            }
          ),
          t && /* @__PURE__ */ r(
            B,
            {
              as: "p",
              color: g,
              size: u,
              lineHeight: 1.6,
              children: t
            }
          ),
          o,
          Z
        ]
      }
    ), de = a && K ? /* @__PURE__ */ r(w, { style: { flex: "1 1 0%", minWidth: 0 }, children: /* @__PURE__ */ r(
      xe,
      {
        src: a.src,
        alt: a.alt ?? "",
        style: { maxWidth: a.maxWidth ?? "36rem" }
      }
    ) }) : null;
    return /* @__PURE__ */ f(w, { as: "section", ref: F, style: { position: "relative" }, children: [
      Y && /* @__PURE__ */ r(
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
      /* @__PURE__ */ r(
        w,
        {
          style: { position: "relative", overflow: "hidden" },
          maxWidth: "1280px",
          paddingInline: $,
          paddingBlock: C,
          children: K ? /* @__PURE__ */ f(R, { space: A, alignBlock: "center", children: [
            he,
            de
          ] }) : /* @__PURE__ */ r(j, { space: A, children: he })
        }
      )
    ] });
  }
);
Tr.displayName = "HeroSection";
const Rr = X(
  ({
    padding: e = l.Large,
    backgroundColor: t = S.Default,
    borderRadius: n = M.XXLarge,
    borderColor: i = T.Default,
    elevation: a = se.Ambient,
    accentColor: o,
    accentWidth: d = "8px",
    header: s,
    footer: c,
    children: m
  }, u) => /* @__PURE__ */ r(
    w,
    {
      ref: u,
      backgroundColor: t,
      borderRadius: n,
      borderColor: i,
      borderSide: "all",
      elevation: a,
      overflow: "hidden",
      style: {
        ...o && {
          borderTop: `${d} solid ${o}`
        }
      },
      children: /* @__PURE__ */ f(j, { children: [
        s && /* @__PURE__ */ r(
          w,
          {
            padding: e,
            style: { borderBottom: `1px solid ${i}` },
            children: s
          }
        ),
        /* @__PURE__ */ r(w, { padding: e, children: m }),
        c && /* @__PURE__ */ r(
          w,
          {
            padding: e,
            style: { borderTop: `1px solid ${i}` },
            children: c
          }
        )
      ] })
    }
  )
);
Rr.displayName = "Card";
const $r = X(
  ({
    label: e,
    helperText: t,
    errorText: n,
    id: i,
    labelColor: a = h.Default,
    labelSize: o = x.XSmall,
    labelWeight: d = z.Medium,
    labelTextTransform: s,
    labelLetterSpacing: c,
    inputBackground: m = S.Default,
    inputBorderColor: u = T.Input,
    inputBorderRadius: g = M.Medium,
    inputBorderSide: p = "all",
    inputPadding: b = l.Medium,
    startAdornment: y,
    endAdornment: v,
    name: D,
    type: L,
    placeholder: P,
    value: C,
    defaultValue: $,
    disabled: A,
    readOnly: H,
    required: W,
    autoFocus: k,
    autoComplete: I,
    onChange: F,
    onBlur: K,
    onFocus: O
  }, Y) => {
    const U = Se(), E = i ?? U, J = `${E}-helper`, q = `${E}-error`, Z = !!n, ue = Z ? T.Error : u, he = p === "bottom", de = he || !!(y || v), ee = /* @__PURE__ */ r(
      Ce,
      {
        ref: Y,
        id: E,
        name: D,
        type: L,
        placeholder: P,
        value: C,
        defaultValue: $,
        disabled: A,
        readOnly: H,
        required: W,
        autoFocus: k,
        autoComplete: I,
        onChange: F,
        onBlur: K,
        onFocus: O,
        backgroundColor: de ? "transparent" : m,
        borderColor: de ? void 0 : ue,
        borderRadius: de ? void 0 : g,
        padding: b,
        style: {
          width: "100%",
          ...de ? { flex: "1 1 auto", minWidth: 0 } : {}
        },
        "aria-describedby": Z ? q : t ? J : void 0,
        "aria-invalid": Z || void 0
      }
    ), pe = de ? /* @__PURE__ */ f("div", { style: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      backgroundColor: m,
      ...he ? { borderBottom: `2px solid ${ue}` } : { border: `1px solid ${ue}`, borderRadius: g }
    }, children: [
      y,
      ee,
      v
    ] }) : ee;
    return /* @__PURE__ */ f(j, { space: l.XSmall, children: [
      e && /* @__PURE__ */ r(
        "label",
        {
          htmlFor: E,
          style: {
            fontSize: o,
            fontWeight: d,
            color: a,
            textTransform: s,
            letterSpacing: c
          },
          children: e
        }
      ),
      pe,
      Z && /* @__PURE__ */ r(B, { as: "span", size: x.XXSmall, color: h.Error, id: q, children: n }),
      !Z && t && /* @__PURE__ */ r(B, { as: "span", size: x.XXSmall, color: h.Subtle, id: J, children: t })
    ] });
  }
);
$r.displayName = "TextField";
const Ar = {
  info: {
    bg: S.InfoTint,
    text: h.Info,
    border: T.Info
  },
  success: {
    bg: S.PrimaryTint,
    text: h.Success,
    border: T.Success
  },
  warning: {
    bg: S.WarningTint,
    text: h.Warning,
    border: T.Warning
  },
  error: {
    bg: S.ErrorTint,
    text: h.Error,
    border: T.Error
  }
}, Nr = () => /* @__PURE__ */ r(
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
), Wr = X(
  ({ variant: e = "info", icon: t, dismissible: n, onDismiss: i, children: a }, o) => {
    const d = Ar[e];
    return /* @__PURE__ */ r(
      w,
      {
        ref: o,
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
            t && /* @__PURE__ */ r(w, { style: { color: d.text, flexShrink: 0 }, children: t }),
            /* @__PURE__ */ r(B, { as: "span", size: x.XSmall, color: d.text, children: a })
          ] }),
          n && /* @__PURE__ */ r(
            Q,
            {
              label: "Dismiss",
              onClick: i,
              color: d.text,
              padding: l.XXSmall,
              children: /* @__PURE__ */ r(Nr, {})
            }
          )
        ] })
      }
    );
  }
);
Wr.displayName = "Banner";
const Ke = X(
  ({
    sections: e,
    activeId: t,
    onSelect: n,
    activeColor: i = h.Brand,
    activeBackground: a = S.Subtle
  }, o) => /* @__PURE__ */ r(j, { ref: o, as: "nav", space: l.Small, children: e.map((d, s) => /* @__PURE__ */ f(j, { space: l.XXSmall, children: [
    d.title && /* @__PURE__ */ r(w, { paddingInline: l.Medium, paddingBlock: l.XSmall, children: /* @__PURE__ */ r(
      B,
      {
        as: "span",
        size: x.XXSmall,
        weight: 600,
        color: h.Subtlest,
        textTransform: "uppercase",
        children: d.title
      }
    ) }),
    /* @__PURE__ */ r(j, { as: "ul", style: { listStyle: "none", padding: 0, margin: 0 }, children: d.items.map((c) => {
      const m = c.id === t;
      return /* @__PURE__ */ r("li", { children: /* @__PURE__ */ r(
        ie,
        {
          disabled: c.disabled,
          onClick: () => n == null ? void 0 : n(c.id),
          borderRadius: M.Medium,
          color: c.disabled ? h.Disabled : m ? i : h.Default,
          backgroundColor: m ? a : S.Transparent,
          paddingBlock: l.Medium,
          paddingInline: l.MediumLarge,
          style: {
            width: "100%",
            fontSize: x.XSmall,
            textAlign: "left",
            cursor: c.disabled ? "default" : "pointer"
          },
          children: /* @__PURE__ */ f(R, { space: l.Medium, alignBlock: "center", children: [
            c.icon && /* @__PURE__ */ r(w, { style: { flexShrink: 0 }, children: c.icon }),
            /* @__PURE__ */ r(B, { as: "span", size: x.XSmall, style: { color: "inherit" }, children: c.label })
          ] })
        }
      ) }, c.id);
    }) }),
    s < e.length - 1 && /* @__PURE__ */ r(
      w,
      {
        style: {
          borderTop: `1px solid ${T.Default}`,
          marginBlock: l.XSmall
        }
      }
    )
  ] }, s)) })
);
Ke.displayName = "Menu";
const Fr = X(
  ({
    tabs: e,
    activeId: t,
    defaultActiveId: n,
    onChange: i,
    variant: a = "underline",
    activeColor: o = h.Brand,
    inactiveColor: d = h.Subtle,
    pillBackground: s = S.Subtle,
    activePillBackground: c = S.Default,
    panelPadding: m = l.Large
  }, u) => {
    var P;
    const [g, p] = N(
      n ?? ((P = e[0]) == null ? void 0 : P.id)
    ), b = t !== void 0, y = b ? t : g, v = (C) => {
      b || p(C), i == null || i(C);
    }, D = e.find((C) => C.id === y);
    return /* @__PURE__ */ f(w, { ref: u, children: [
      a === "pill" ? /* @__PURE__ */ r(
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
          children: e.map((C) => {
            const $ = C.id === y;
            return /* @__PURE__ */ r(
              ie,
              {
                role: "tab",
                "aria-selected": $,
                "aria-controls": `tabpanel-${C.id}`,
                id: `tab-${C.id}`,
                disabled: C.disabled,
                onClick: () => v(C.id),
                paddingBlock: l.Medium,
                paddingInline: l.XXLarge,
                borderRadius: M.XLarge,
                color: $ ? h.Default : C.disabled ? h.Disabled : d,
                backgroundColor: $ ? c : S.Transparent,
                style: {
                  fontWeight: $ ? z.Bold : z.Medium,
                  fontSize: x.XSmall,
                  boxShadow: $ ? se.Raised : "none",
                  cursor: C.disabled ? "default" : "pointer"
                },
                children: C.label
              },
              C.id
            );
          })
        }
      ) : /* @__PURE__ */ r(
        R,
        {
          as: "div",
          role: "tablist",
          space: l.None,
          style: {
            borderBottom: `1px solid ${T.Default}`
          },
          children: e.map((C) => {
            const $ = C.id === y;
            return /* @__PURE__ */ r(
              ie,
              {
                role: "tab",
                "aria-selected": $,
                "aria-controls": `tabpanel-${C.id}`,
                id: `tab-${C.id}`,
                disabled: C.disabled,
                onClick: () => v(C.id),
                paddingBlock: l.Medium,
                paddingInline: l.Large,
                borderRadius: M.None,
                color: $ ? o : C.disabled ? h.Disabled : d,
                style: {
                  background: "none",
                  fontWeight: $ ? z.Semibold : z.Regular,
                  fontSize: x.XSmall,
                  borderBottom: $ ? `2px solid ${o}` : "2px solid transparent",
                  marginBottom: "-1px",
                  cursor: C.disabled ? "default" : "pointer"
                },
                children: C.label
              },
              C.id
            );
          })
        }
      ),
      D && /* @__PURE__ */ r(
        w,
        {
          role: "tabpanel",
          id: `tabpanel-${D.id}`,
          "aria-labelledby": `tab-${D.id}`,
          padding: m,
          children: D.content
        }
      )
    ] });
  }
);
Fr.displayName = "Tabs";
const Or = X(
  ({
    title: e,
    subtitle: t,
    breadcrumbs: n,
    actions: i,
    titleSize: a = x.XLarge,
    titleWeight: o = z.Bold,
    titleColor: d = h.Default,
    subtitleColor: s = h.Subtle,
    breadcrumbLinkColor: c = h.Link,
    borderColor: m = T.Default,
    paddingBlock: u = l.Large
  }, g) => /* @__PURE__ */ r(
    w,
    {
      ref: g,
      as: "header",
      paddingBlock: u,
      style: {
        borderBottom: `1px solid ${m}`
      },
      children: /* @__PURE__ */ f(j, { space: l.Medium, children: [
        n && n.length > 0 && /* @__PURE__ */ r(R, { space: l.XSmall, alignBlock: "center", children: n.map((p, b) => /* @__PURE__ */ f(le.Fragment, { children: [
          b > 0 && /* @__PURE__ */ r(B, { as: "span", color: h.Disabled, size: x.XSmall, children: "/" }),
          p.href ? /* @__PURE__ */ r(
            ce,
            {
              href: p.href,
              color: c,
              size: x.XSmall,
              style: { textDecoration: "none" },
              children: p.label
            }
          ) : /* @__PURE__ */ r(B, { as: "span", size: x.XSmall, color: h.Subtlest, children: p.label })
        ] }, b)) }),
        /* @__PURE__ */ f(R, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ f(j, { space: l.XXSmall, children: [
            /* @__PURE__ */ r(B, { as: "h1", size: a, weight: o, color: d, children: e }),
            t && /* @__PURE__ */ r(B, { as: "p", size: x.XSmall, color: s, children: t })
          ] }),
          i && /* @__PURE__ */ r(R, { space: l.Medium, alignBlock: "center", children: i })
        ] })
      ] })
    }
  )
);
Or.displayName = "Header";
const Hr = {
  XSmall: "320px",
  Small: "416px",
  Medium: "512px",
  Large: "704px",
  XLarge: "960px",
  Full: "min(96vw, 1440px)"
}, Pr = () => /* @__PURE__ */ r(
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
), jr = X(
  ({ open: e, onClose: t, title: n, children: i, footer: a, size: o = Hr.Medium }, d) => {
    const s = _(
      (c) => {
        c.key === "Escape" && t();
      },
      [t]
    );
    return V(() => {
      if (e)
        return document.addEventListener("keydown", s), document.body.style.overflow = "hidden", () => {
          document.removeEventListener("keydown", s), document.body.style.overflow = "";
        };
    }, [e, s]), e ? Le(
      /* @__PURE__ */ r(
        w,
        {
          style: {
            position: "fixed",
            inset: 0,
            zIndex: ae.Modal,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: S.Overlay
          },
          onClick: (c) => {
            c.target === c.currentTarget && t();
          },
          children: /* @__PURE__ */ r(
            w,
            {
              ref: d,
              role: "dialog",
              "aria-modal": "true",
              "aria-label": n,
              backgroundColor: S.Default,
              borderRadius: M.XLarge,
              elevation: se.Overlay,
              overflow: "hidden",
              style: {
                width: "100%",
                maxWidth: o,
                maxHeight: "85vh",
                display: "flex",
                flexDirection: "column"
              },
              children: /* @__PURE__ */ f(j, { children: [
                n && /* @__PURE__ */ r(
                  w,
                  {
                    padding: l.Large,
                    style: { borderBottom: `1px solid ${T.Default}` },
                    children: /* @__PURE__ */ f(R, { alignBlock: "center", spread: "space-between", children: [
                      /* @__PURE__ */ r(B, { as: "h2", size: x.Large, weight: z.Semibold, color: h.Default, children: n }),
                      /* @__PURE__ */ r(Q, { label: "Close", onClick: t, color: h.Subtle, children: /* @__PURE__ */ r(Pr, {}) })
                    ] })
                  }
                ),
                /* @__PURE__ */ r(w, { padding: l.Large, overflow: "auto", style: { flex: "1 1 auto" }, children: i }),
                a && /* @__PURE__ */ r(
                  w,
                  {
                    padding: l.Large,
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
jr.displayName = "Modal";
const Kr = X(
  ({ trigger: e, sections: t, activeId: n, onSelect: i }, a) => {
    const [o, d] = N(!1), s = te(null), c = () => d((p) => !p), m = (p) => {
      i == null || i(p), d(!1);
    }, u = _((p) => {
      p.key === "Escape" && d(!1);
    }, []), g = _((p) => {
      s.current && !s.current.contains(p.target) && d(!1);
    }, []);
    return V(() => {
      if (o)
        return document.addEventListener("keydown", u), document.addEventListener("mousedown", g), () => {
          document.removeEventListener("keydown", u), document.removeEventListener("mousedown", g);
        };
    }, [o, u, g]), /* @__PURE__ */ f(
      w,
      {
        ref: (p) => {
          s.current = p, typeof a == "function" ? a(p) : a && (a.current = p);
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
          o && /* @__PURE__ */ r(
            w,
            {
              backgroundColor: S.Default,
              borderColor: T.Default,
              borderSide: "all",
              borderRadius: M.Large,
              elevation: se.Dropdown,
              padding: l.XSmall,
              style: {
                position: "absolute",
                top: "100%",
                right: 0,
                marginTop: l.XSmall,
                minWidth: "12rem",
                zIndex: ae.Dropdown
              },
              children: /* @__PURE__ */ r(
                Ke,
                {
                  sections: t,
                  activeId: n,
                  onSelect: m
                }
              )
            }
          )
        ]
      }
    );
  }
);
Kr.displayName = "DropdownMenu";
const Vr = () => /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ r("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), Yr = () => /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ r("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), _r = X(
  ({
    sections: e,
    activeId: t,
    onSelect: n,
    header: i,
    footer: a,
    collapsed: o = !1,
    onToggleCollapse: d,
    width: s = "16rem",
    collapsedWidth: c = "4rem",
    activeColor: m = h.Brand,
    activeBackground: u = S.Subtle,
    borderColor: g = T.Default
  }, p) => /* @__PURE__ */ f(
    w,
    {
      ref: p,
      as: "aside",
      backgroundColor: S.Default,
      style: {
        width: o ? c : s,
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
        i && /* @__PURE__ */ r(
          w,
          {
            padding: l.Large,
            style: { borderBottom: `1px solid ${g}` },
            children: i
          }
        ),
        /* @__PURE__ */ r(
          j,
          {
            space: l.Small,
            grow: "fill",
            style: { padding: l.Medium, overflow: "auto" },
            children: e.map((b, y) => /* @__PURE__ */ f(j, { space: l.XXSmall, children: [
              b.title && !o && /* @__PURE__ */ r(w, { paddingInline: l.Medium, paddingBlock: l.XSmall, children: /* @__PURE__ */ r(
                B,
                {
                  as: "span",
                  size: x.XXSmall,
                  weight: 600,
                  color: h.Subtlest,
                  textTransform: "uppercase",
                  children: b.title
                }
              ) }),
              b.items.map((v) => {
                const D = v.id === t;
                return /* @__PURE__ */ f(
                  ie,
                  {
                    onClick: () => n == null ? void 0 : n(v.id),
                    title: o ? v.label : void 0,
                    borderRadius: M.Medium,
                    color: D ? m : h.Default,
                    backgroundColor: D ? u : S.Transparent,
                    paddingBlock: l.Medium,
                    paddingInline: l.MediumLarge,
                    style: {
                      width: "100%",
                      fontSize: x.XSmall,
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      gap: o ? 0 : l.Medium,
                      justifyContent: o ? "center" : "flex-start"
                    },
                    children: [
                      v.icon && /* @__PURE__ */ r(w, { style: { flexShrink: 0 }, children: v.icon }),
                      !o && /* @__PURE__ */ f(ne, { children: [
                        /* @__PURE__ */ r(B, { as: "span", style: { flex: "1 1 auto", color: "inherit" }, children: v.label }),
                        v.badge && /* @__PURE__ */ r(Fe, { variant: v.badgeVariant ?? "default", children: v.badge })
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
          w,
          {
            padding: l.Medium,
            style: { borderTop: `1px solid ${g}` },
            children: /* @__PURE__ */ r(
              Q,
              {
                label: o ? "Expand sidebar" : "Collapse sidebar",
                onClick: d,
                color: h.Subtle,
                padding: l.XSmall,
                children: o ? /* @__PURE__ */ r(Yr, {}) : /* @__PURE__ */ r(Vr, {})
              }
            )
          }
        ),
        a && /* @__PURE__ */ r(
          w,
          {
            padding: l.Large,
            style: { borderTop: `1px solid ${g}` },
            children: a
          }
        )
      ]
    }
  )
);
_r.displayName = "Sidebar";
const Ur = () => /* @__PURE__ */ r(
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
), Gr = X(
  ({
    open: e,
    onClose: t,
    title: n,
    side: i = "right",
    mode: a = "overlay",
    width: o = "24rem",
    children: d
  }, s) => {
    const c = _(
      (u) => {
        u.key === "Escape" && t();
      },
      [t]
    );
    if (V(() => {
      if (e)
        return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
    }, [e, c]), !e) return null;
    const m = /* @__PURE__ */ f(
      w,
      {
        ref: s,
        backgroundColor: S.Default,
        elevation: se.Overlay,
        style: {
          position: "fixed",
          top: 0,
          bottom: 0,
          [i]: 0,
          width: o,
          zIndex: ae.Modal,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden"
        },
        children: [
          n && /* @__PURE__ */ r(
            w,
            {
              padding: l.Large,
              style: { borderBottom: `1px solid ${T.Default}` },
              children: /* @__PURE__ */ f(R, { alignBlock: "center", spread: "space-between", children: [
                /* @__PURE__ */ r(B, { as: "h2", size: x.Large, weight: z.Semibold, color: h.Default, children: n }),
                /* @__PURE__ */ r(Q, { label: "Close panel", onClick: t, color: h.Subtle, children: /* @__PURE__ */ r(Ur, {}) })
              ] })
            }
          ),
          /* @__PURE__ */ r(w, { padding: l.Large, overflow: "auto", style: { flex: "1 1 auto" }, children: d })
        ]
      }
    );
    return a === "overlay" ? Le(
      /* @__PURE__ */ r(
        w,
        {
          style: {
            position: "fixed",
            inset: 0,
            zIndex: ae.Modal,
            backgroundColor: S.Overlay
          },
          onClick: (u) => {
            u.target === u.currentTarget && t();
          },
          children: m
        }
      ),
      document.body
    ) : m;
  }
);
Gr.displayName = "Panel";
const Jr = X(
  ({
    padding: e = l.Large,
    color: t = h.Subtle,
    borderColor: n = T.Default,
    children: i
  }, a) => /* @__PURE__ */ r(
    w,
    {
      ref: a,
      as: "aside",
      padding: e,
      style: {
        borderLeft: `3px solid ${n}`,
        color: t
      },
      children: i
    }
  )
);
Jr.displayName = "Aside";
const Zr = X(
  ({
    topNav: e,
    sideNav: t,
    mobileNav: n,
    backgroundColor: i = S.Surface,
    children: a
  }, o) => {
    const s = we() === "mobile";
    return /* @__PURE__ */ f(
      w,
      {
        ref: o,
        style: {
          minHeight: "100vh",
          backgroundColor: i,
          display: "flex"
        },
        children: [
          !s && t,
          /* @__PURE__ */ f(
            w,
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
                  w,
                  {
                    as: "main",
                    style: {
                      flex: "1 1 auto",
                      overflow: "auto",
                      paddingBlockEnd: s && n ? l.XXHuge : void 0
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
Zr.displayName = "Layout";
const qr = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
function $e(e, t) {
  return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function Qr(e, t) {
  return new Date(e, t + 1, 0).getDate();
}
function et(e, t) {
  return new Date(e, t, 1).getDay();
}
const rt = () => /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ r("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), tt = () => /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ r("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), nt = [
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
], lt = X(
  ({
    value: e,
    defaultValue: t,
    onChange: n,
    min: i,
    max: a,
    selectedColor: o = h.Inverse,
    selectedBackground: d = S.Brand
  }, s) => {
    const c = /* @__PURE__ */ new Date(), [m, u] = N(t), g = e !== void 0, p = g ? e : m, [b, y] = N(
      (p ?? c).getFullYear()
    ), [v, D] = N(
      (p ?? c).getMonth()
    ), L = be(() => Qr(b, v), [b, v]), P = be(() => et(b, v), [b, v]), C = () => {
      v === 0 ? (D(11), y((k) => k - 1)) : D((k) => k - 1);
    }, $ = () => {
      v === 11 ? (D(0), y((k) => k + 1)) : D((k) => k + 1);
    }, A = (k) => {
      const I = new Date(b, v, k);
      g || u(I), n == null || n(I);
    }, H = (k) => {
      const I = new Date(b, v, k);
      return !!(i && I < new Date(i.getFullYear(), i.getMonth(), i.getDate()) || a && I > new Date(a.getFullYear(), a.getMonth(), a.getDate()));
    }, W = [];
    for (let k = 0; k < P; k++)
      W.push(/* @__PURE__ */ r(w, {}, `empty-${k}`));
    for (let k = 1; k <= L; k++) {
      const I = new Date(b, v, k), F = p ? $e(I, p) : !1, K = $e(I, c), O = H(k);
      W.push(
        /* @__PURE__ */ r(
          ie,
          {
            disabled: O,
            onClick: () => A(k),
            borderRadius: M.Medium,
            style: {
              width: "2.25rem",
              height: "2.25rem",
              padding: 0,
              fontSize: x.XSmall,
              fontWeight: F ? z.Semibold : z.Regular,
              backgroundColor: F ? d : "transparent",
              color: F ? o : O ? h.Disabled : h.Default,
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
      w,
      {
        ref: s,
        padding: l.Large,
        borderRadius: M.XLarge,
        borderColor: T.Default,
        borderSide: "all",
        backgroundColor: S.Default,
        style: { width: "fit-content" },
        children: [
          /* @__PURE__ */ f(
            R,
            {
              alignBlock: "center",
              spread: "space-between",
              marginBlockEnd: l.Medium,
              children: [
                /* @__PURE__ */ r(Q, { label: "Previous month", onClick: C, color: h.Subtle, padding: l.XSmall, children: /* @__PURE__ */ r(rt, {}) }),
                /* @__PURE__ */ f(B, { as: "span", size: x.XSmall, weight: z.Semibold, color: h.Default, children: [
                  nt[v],
                  " ",
                  b
                ] }),
                /* @__PURE__ */ r(Q, { label: "Next month", onClick: $, color: h.Subtle, padding: l.XSmall, children: /* @__PURE__ */ r(tt, {}) })
              ]
            }
          ),
          /* @__PURE__ */ f(We, { columns: 7, gap: l.XXSmall, children: [
            qr.map((k) => /* @__PURE__ */ r(
              B,
              {
                as: "span",
                size: x.XXSmall,
                weight: z.Medium,
                color: h.Subtlest,
                align: "center",
                style: { padding: `${l.XSmall} 0` },
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
lt.displayName = "Calendar";
const it = X(
  ({ header: e, description: t, image: n, primaryAction: i, secondaryAction: a }, o) => /* @__PURE__ */ f(
    j,
    {
      ref: o,
      space: l.Large,
      alignInline: "center",
      style: {
        paddingBlock: l.XXHuge,
        paddingInline: l.XXXLarge,
        maxWidth: "28rem",
        marginInline: "auto",
        textAlign: "center"
      },
      children: [
        n && /* @__PURE__ */ r("div", { children: n }),
        /* @__PURE__ */ f(j, { space: l.Medium, alignInline: "center", children: [
          /* @__PURE__ */ r(
            B,
            {
              as: "h3",
              fontFamily: rr.Display,
              size: x.XLarge,
              weight: z.Bold,
              color: h.Default,
              children: e
            }
          ),
          t && /* @__PURE__ */ r(B, { as: "p", size: x.XSmall, color: h.Subtle, lineHeight: 1.6, children: t })
        ] }),
        (i || a) && /* @__PURE__ */ f(R, { space: l.Medium, alignBlock: "center", children: [
          i,
          a
        ] })
      ]
    }
  )
);
it.displayName = "EmptyState";
const ot = ({ order: e }) => /* @__PURE__ */ r(
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
    children: e === "ASC" ? /* @__PURE__ */ r("path", { d: "M8 3l4 5H4l4-5z" }) : e === "DESC" ? /* @__PURE__ */ r("path", { d: "M8 13l4-5H4l4 5z" }) : /* @__PURE__ */ f(ne, { children: [
      /* @__PURE__ */ r("path", { d: "M8 3l3 4H5l3-4z" }),
      /* @__PURE__ */ r("path", { d: "M8 13l3-4H5l3 4z" })
    ] })
  }
), at = X(
  ({
    caption: e,
    head: t,
    rows: n,
    rowsPerPage: i,
    page: a,
    defaultPage: o = 1,
    sortKey: d,
    sortOrder: s,
    defaultSortKey: c,
    defaultSortOrder: m = "ASC",
    onSort: u,
    onSetPage: g,
    isLoading: p = !1,
    isFixedSize: b = !1
  }, y) => {
    const [v, D] = N(o), [L, P] = N(c), [C, $] = N(m), A = a !== void 0, H = A ? a : v, W = d !== void 0, k = W ? d : L, I = W ? s ?? "ASC" : C, F = i ? Math.max(1, Math.ceil(n.length / i)) : 1, K = be(() => {
      if (!i) return n;
      const E = (H - 1) * i;
      return n.slice(E, E + i);
    }, [n, i, H]), O = (E) => {
      const J = k === E && I === "ASC" ? "DESC" : "ASC";
      W || (P(E), $(J)), u == null || u(E, J);
    }, Y = (E) => {
      A || D(E), g == null || g(E);
    }, U = {
      padding: `${l.MediumLarge} ${l.Large}`
    };
    return /* @__PURE__ */ f(w, { style: { position: "relative" }, children: [
      p && /* @__PURE__ */ r(
        w,
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
          children: /* @__PURE__ */ r(Oe, { size: "large" })
        }
      ),
      /* @__PURE__ */ f(
        "table",
        {
          ref: y,
          style: {
            width: "100%",
            borderCollapse: "collapse",
            tableLayout: b ? "fixed" : "auto",
            fontSize: x.XSmall
          },
          children: [
            e && /* @__PURE__ */ r(
              "caption",
              {
                style: {
                  textAlign: "left",
                  paddingBlockEnd: l.Medium,
                  fontWeight: z.Semibold,
                  fontSize: x.Small,
                  color: h.Default
                },
                children: e
              }
            ),
            /* @__PURE__ */ r("thead", { children: /* @__PURE__ */ r("tr", { children: t.map((E) => /* @__PURE__ */ r(
              "th",
              {
                style: {
                  ...U,
                  textAlign: "left",
                  fontWeight: z.Semibold,
                  fontSize: x.XXSmall,
                  color: h.Subtle,
                  borderBottom: `1px solid ${T.Default}`,
                  whiteSpace: "nowrap",
                  cursor: E.isSortable ? "pointer" : "default",
                  userSelect: E.isSortable ? "none" : void 0,
                  ...E.width ? { width: E.width } : {}
                },
                onClick: E.isSortable ? () => O(E.key) : void 0,
                children: /* @__PURE__ */ f("span", { style: { display: "inline-flex", alignItems: "center" }, children: [
                  E.label,
                  E.isSortable && /* @__PURE__ */ r(
                    ot,
                    {
                      order: k === E.key ? I : void 0
                    }
                  )
                ] })
              },
              E.key
            )) }) }),
            /* @__PURE__ */ f("tbody", { children: [
              K.map((E) => /* @__PURE__ */ r(
                "tr",
                {
                  onClick: E.onClick,
                  style: {
                    cursor: E.onClick ? "pointer" : "default",
                    borderBottom: `1px solid ${T.Default}`
                  },
                  children: E.cells.map((J, q) => /* @__PURE__ */ r("td", { style: { ...U, color: h.Default }, children: J }, q))
                },
                E.key
              )),
              K.length === 0 && /* @__PURE__ */ r("tr", { children: /* @__PURE__ */ r(
                "td",
                {
                  colSpan: t.length,
                  style: {
                    ...U,
                    textAlign: "center",
                    color: h.Subtle
                  },
                  children: "No data"
                }
              ) })
            ] })
          ]
        }
      ),
      i && F > 1 && /* @__PURE__ */ f(
        R,
        {
          space: l.Medium,
          alignBlock: "center",
          alignInline: "center",
          style: { paddingBlock: l.Large },
          children: [
            /* @__PURE__ */ r(
              ie,
              {
                disabled: H <= 1,
                onClick: () => Y(H - 1),
                paddingBlock: l.XSmall,
                paddingInline: l.Medium,
                borderRadius: M.Large,
                backgroundColor: S.Default,
                color: h.Default,
                style: { fontSize: x.XXSmall, border: `1px solid ${T.Default}` },
                children: "Previous"
              }
            ),
            /* @__PURE__ */ f(B, { size: x.XXSmall, color: h.Subtle, children: [
              "Page ",
              H,
              " of ",
              F
            ] }),
            /* @__PURE__ */ r(
              ie,
              {
                disabled: H >= F,
                onClick: () => Y(H + 1),
                paddingBlock: l.XSmall,
                paddingInline: l.Medium,
                borderRadius: M.Large,
                backgroundColor: S.Default,
                color: h.Default,
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
at.displayName = "Table";
const st = () => /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ r("path", { fillRule: "evenodd", d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z", clipRule: "evenodd" }) }), dt = () => /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "1rem", height: "1rem" }, children: /* @__PURE__ */ r("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" }) }), ct = X(
  ({
    defaultValue: e,
    label: t,
    editButtonLabel: n,
    editView: i,
    readView: a,
    onConfirm: o,
    onCancel: d
  }, s) => {
    const [c, m] = N(!1), [u, g] = N(e);
    te(null), V(() => {
      g(e);
    }, [e]);
    const p = _(() => {
      m(!1), o(u);
    }, [u, o]), b = _(() => {
      g(e), m(!1), d == null || d();
    }, [e, d]), y = _(
      (L) => {
        L.key === "Enter" && p(), L.key === "Escape" && b();
      },
      [p, b]
    ), v = (L) => /* @__PURE__ */ r(
      w,
      {
        style: {
          paddingBlock: l.XSmall,
          paddingInline: l.Small,
          cursor: "pointer",
          borderRadius: M.Medium,
          wordBreak: "break-word",
          minHeight: "1.5em"
        },
        children: /* @__PURE__ */ r(B, { as: "span", size: x.Small, color: h.Default, children: L || " " })
      }
    ), D = (L) => /* @__PURE__ */ r(
      Ce,
      {
        value: L.value,
        onChange: L.onChange,
        onKeyDown: L.onKeyDown,
        autoFocus: L.autoFocus,
        backgroundColor: S.Default,
        borderColor: T.Focus,
        borderRadius: M.Medium,
        padding: l.XSmall,
        style: { fontSize: x.Small, width: "100%" }
      }
    );
    return /* @__PURE__ */ f("div", { ref: s, children: [
      t && /* @__PURE__ */ r(
        B,
        {
          as: "label",
          size: x.XXSmall,
          weight: 500,
          color: h.Subtle,
          style: { display: "block", marginBlockEnd: l.XSmall },
          children: t
        }
      ),
      c ? /* @__PURE__ */ f(R, { space: l.XSmall, alignBlock: "start", children: [
        /* @__PURE__ */ r(w, { style: { flex: "1 1 auto" }, children: (i ?? D)({
          value: u,
          onChange: (L) => g(L.target.value),
          onKeyDown: y,
          autoFocus: !0
        }) }),
        /* @__PURE__ */ r(
          Q,
          {
            label: "Confirm",
            onClick: p,
            color: h.Success,
            padding: l.XSmall,
            children: /* @__PURE__ */ r(st, {})
          }
        ),
        /* @__PURE__ */ r(
          Q,
          {
            label: "Cancel",
            onClick: b,
            color: h.Error,
            padding: l.XSmall,
            children: /* @__PURE__ */ r(dt, {})
          }
        )
      ] }) : /* @__PURE__ */ r(
        w,
        {
          onClick: () => m(!0),
          role: "button",
          tabIndex: 0,
          "aria-label": n ?? e ?? "Edit",
          onKeyDown: (L) => {
            (L.key === "Enter" || L.key === " ") && (L.preventDefault(), m(!0));
          },
          style: { cursor: "pointer" },
          children: (a ?? v)(e)
        }
      )
    ] });
  }
);
ct.displayName = "InlineEdit";
const ut = () => /* @__PURE__ */ r("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "currentColor", style: { width: "0.875rem", height: "0.875rem" }, children: /* @__PURE__ */ r("path", { fillRule: "evenodd", d: "M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z", clipRule: "evenodd" }) }), ht = X(
  ({ trigger: e, groups: t, checked: n, onChange: i }, a) => {
    const [o, d] = N(!1), s = te(null), c = _((u) => {
      u.key === "Escape" && d(!1);
    }, []), m = _((u) => {
      s.current && !s.current.contains(u.target) && d(!1);
    }, []);
    return V(() => {
      if (o)
        return document.addEventListener("keydown", c), document.addEventListener("mousedown", m), () => {
          document.removeEventListener("keydown", c), document.removeEventListener("mousedown", m);
        };
    }, [o, c, m]), /* @__PURE__ */ f(
      w,
      {
        ref: (u) => {
          s.current = u, typeof a == "function" ? a(u) : a && (a.current = u);
        },
        style: { position: "relative", display: "inline-block" },
        children: [
          /* @__PURE__ */ r(
            R,
            {
              style: { cursor: "pointer" },
              onClick: () => d((u) => !u),
              alignBlock: "center",
              children: e
            }
          ),
          o && /* @__PURE__ */ r(
            w,
            {
              backgroundColor: S.Default,
              borderColor: T.Default,
              borderSide: "all",
              borderRadius: M.XLarge,
              elevation: se.Dropdown,
              padding: l.XSmall,
              style: {
                position: "absolute",
                top: "100%",
                left: 0,
                marginTop: l.XSmall,
                minWidth: "14rem",
                zIndex: ae.Dropdown
              },
              children: /* @__PURE__ */ r(j, { space: l.XSmall, children: t.map((u, g) => /* @__PURE__ */ f(j, { space: l.XXSmall, children: [
                u.title && /* @__PURE__ */ r(w, { paddingInline: l.MediumLarge, paddingBlock: l.XSmall, children: /* @__PURE__ */ r(
                  B,
                  {
                    as: "span",
                    size: x.XXSmall,
                    weight: z.Semibold,
                    color: h.Subtlest,
                    textTransform: "uppercase",
                    children: u.title
                  }
                ) }),
                u.items.map((p) => {
                  const b = !!n[p.id];
                  return /* @__PURE__ */ f(
                    ie,
                    {
                      onClick: () => i(p.id, !b),
                      borderRadius: M.Medium,
                      backgroundColor: S.Transparent,
                      color: h.Default,
                      paddingBlock: l.Medium,
                      paddingInline: l.MediumLarge,
                      style: {
                        width: "100%",
                        textAlign: "left",
                        fontSize: x.XSmall,
                        display: "flex",
                        alignItems: "center",
                        gap: l.Medium
                      },
                      children: [
                        /* @__PURE__ */ r(
                          w,
                          {
                            style: {
                              width: "1rem",
                              height: "1rem",
                              borderRadius: M.Small,
                              border: b ? "none" : `2px solid ${T.Outline}`,
                              backgroundColor: b ? S.Brand : S.Transparent,
                              color: h.Inverse,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0
                            },
                            children: b && /* @__PURE__ */ r(ut, {})
                          }
                        ),
                        /* @__PURE__ */ r(B, { as: "span", size: x.XSmall, style: { color: "inherit" }, children: p.label })
                      ]
                    },
                    p.id
                  );
                }),
                g < t.length - 1 && /* @__PURE__ */ r(
                  w,
                  {
                    style: {
                      borderTop: `1px solid ${T.Default}`,
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
ht.displayName = "DropdownCheckboxMenu";
const mt = X(
  ({
    label: e,
    helperText: t,
    errorText: n,
    id: i,
    labelColor: a = h.Default,
    labelSize: o = x.XSmall,
    labelWeight: d = z.Medium,
    labelTextTransform: s,
    labelLetterSpacing: c,
    inputBackground: m = S.Subtle,
    inputBorderColor: u,
    inputBorderRadius: g = M.XXLarge,
    inputBorderSide: p = "all",
    inputPadding: b = l.MediumLarge,
    name: y,
    value: v,
    defaultValue: D,
    placeholder: L,
    options: P,
    disabled: C,
    required: $,
    onChange: A,
    onBlur: H
  }, W) => {
    const k = Se(), I = i ?? k, F = `${I}-helper`, K = `${I}-error`, O = !!n, Y = O ? T.Error : u, U = p === "bottom", E = /* @__PURE__ */ r(
      He,
      {
        ref: W,
        id: I,
        name: y,
        value: v,
        defaultValue: D,
        placeholder: L,
        options: P,
        disabled: C,
        required: $,
        onChange: A,
        onBlur: H,
        backgroundColor: U ? "transparent" : m,
        borderColor: U ? void 0 : Y,
        borderRadius: U ? void 0 : g,
        padding: b,
        fontSize: x.XSmall,
        color: h.Default,
        style: { width: "100%" },
        "aria-describedby": O ? K : t ? F : void 0,
        "aria-invalid": O || void 0
      }
    ), J = U ? /* @__PURE__ */ r("div", { style: {
      width: "100%",
      backgroundColor: m,
      borderBottom: `2px solid ${Y}`
    }, children: E }) : E;
    return /* @__PURE__ */ f(j, { space: l.XSmall, children: [
      e && /* @__PURE__ */ r(
        "label",
        {
          htmlFor: I,
          style: {
            fontSize: o,
            fontWeight: d,
            color: a,
            textTransform: s,
            letterSpacing: c
          },
          children: e
        }
      ),
      J,
      O && /* @__PURE__ */ r(B, { as: "span", size: x.XXSmall, color: h.Error, id: K, children: n }),
      !O && t && /* @__PURE__ */ r(B, { as: "span", size: x.XXSmall, color: h.Subtle, id: F, children: t })
    ] });
  }
);
mt.displayName = "SelectField";
const pt = {
  info: { bg: S.Default, text: h.Info, accent: "#3b82f6" },
  success: { bg: S.Default, text: h.Success, accent: "#22c55e" },
  warning: { bg: S.Default, text: h.Warning, accent: "#f59e0b" },
  error: { bg: S.Default, text: h.Error, accent: "#ba1a1a" }
}, gt = () => /* @__PURE__ */ r(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "0.875rem", height: "0.875rem" },
    children: /* @__PURE__ */ r("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  }
), bt = X(
  ({ open: e, onClose: t, duration: n = 5e3, variant: i = "info", icon: a, children: o }, d) => {
    if (V(() => {
      if (!e || n === 0) return;
      const c = setTimeout(t, n);
      return () => clearTimeout(c);
    }, [e, n, t]), !e) return null;
    const s = pt[i];
    return Le(
      /* @__PURE__ */ r(
        w,
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
            minWidth: "20rem",
            maxWidth: "28rem",
            borderLeft: `4px solid ${s.accent}`
          },
          children: /* @__PURE__ */ f(R, { space: l.MediumLarge, alignBlock: "center", spread: "space-between", children: [
            /* @__PURE__ */ f(R, { space: l.MediumLarge, alignBlock: "center", grow: "fill", children: [
              a && /* @__PURE__ */ r(w, { style: { color: s.accent, flexShrink: 0 }, children: a }),
              /* @__PURE__ */ r(B, { as: "span", size: x.XSmall, weight: z.Medium, color: h.Default, children: o })
            ] }),
            /* @__PURE__ */ r(
              Q,
              {
                label: "Dismiss",
                onClick: t,
                color: h.Subtle,
                padding: l.XXSmall,
                children: /* @__PURE__ */ r(gt, {})
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
const ft = X(
  ({ items: e, activeId: t, onSelect: n, fab: i }, a) => /* @__PURE__ */ r(
    w,
    {
      ref: a,
      as: "nav",
      style: {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: ae.Sticky,
        backgroundColor: S.Default,
        borderTop: `1px solid ${T.Default}`,
        backdropFilter: "blur(20px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingInline: l.Large,
        paddingBlock: l.Medium
      },
      children: e.map((o, d) => {
        const s = o.id === t, c = Math.floor(e.length / 2), m = i && d === c;
        return /* @__PURE__ */ f(le.Fragment, { children: [
          m && /* @__PURE__ */ r(w, { style: { marginTop: `-${l.XXXLarge}` }, children: i }),
          /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: () => n == null ? void 0 : n(o.id),
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: l.XXSmall,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: l.XSmall,
                color: s ? h.Brand : h.Disabled
              },
              children: [
                /* @__PURE__ */ r(w, { style: { width: "1.5rem", height: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center" }, children: o.icon }),
                /* @__PURE__ */ r(
                  B,
                  {
                    as: "span",
                    size: x.Micro,
                    weight: z.Bold,
                    color: s ? h.Brand : h.Disabled,
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
ft.displayName = "MobileNav";
const yt = () => /* @__PURE__ */ r(
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
), vt = X(
  ({ items: e, showLabels: t, variant: n = "dot" }, i) => {
    const a = G(t ?? !0), o = 32, d = e.filter((s) => s.status === "visited").length;
    return n === "bar" ? /* @__PURE__ */ r(
      "div",
      {
        ref: i,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": e.length,
        "aria-valuenow": d,
        style: { display: "grid", gridTemplateColumns: `repeat(${e.length}, 1fr)`, gap: l.Medium, width: "100%" },
        children: e.map((s, c) => {
          const m = s.status === "visited", u = s.status === "current";
          return e.length - 1, /* @__PURE__ */ f("div", { style: { display: "flex", flexDirection: "column", gap: l.Medium }, children: [
            /* @__PURE__ */ r("div", { style: {
              height: 6,
              borderRadius: M.Full,
              background: u ? ge.Brand : "none",
              backgroundColor: u ? void 0 : m ? S.PrimaryContainer : S.NeutralBold,
              opacity: m ? 0.4 : 1,
              boxShadow: u ? "0 0 8px var(--bbui-color-primary), 0 0 20px var(--bbui-color-primary)" : "none",
              transition: "all 400ms ease",
              cursor: s.onClick ? "pointer" : "default"
            }, onClick: s.onClick }),
            a && /* @__PURE__ */ r(
              B,
              {
                as: "p",
                size: x.Micro,
                weight: u ? z.Bold : z.Medium,
                color: u ? h.Brand : m ? h.Subtle : h.Disabled,
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
        ref: i,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": e.length,
        "aria-valuenow": d,
        style: { width: "100%", padding: `0 ${l.Medium}` },
        children: [
          /* @__PURE__ */ r("div", { style: {
            display: "flex",
            alignItems: "center",
            width: "100%"
          }, children: e.map((s, c) => {
            const m = c === e.length - 1, u = s.status === "visited", g = s.status === "current", p = s.status === "disabled", b = u ? ge.Brand : g ? "transparent" : S.NeutralBold, y = /* @__PURE__ */ r(
              "div",
              {
                style: {
                  width: o,
                  height: o,
                  borderRadius: M.Full,
                  background: u ? ge.Brand : b,
                  backgroundColor: u ? void 0 : b,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: u ? h.OnBrand : g ? h.Brand : p ? h.Disabled : h.Subtle,
                  fontSize: x.XSmall,
                  fontWeight: z.Bold,
                  border: g ? `2px solid ${h.Brand}` : "none",
                  cursor: s.onClick || s.href ? "pointer" : "default",
                  transition: "all 300ms ease"
                },
                onClick: s.onClick,
                children: u ? /* @__PURE__ */ r(yt, {}) : c + 1
              }
            ), v = s.href ? /* @__PURE__ */ r("a", { href: s.href, style: { textDecoration: "none", color: "inherit" }, children: y }) : y;
            return /* @__PURE__ */ f(le.Fragment, { children: [
              v,
              !m && /* @__PURE__ */ r("div", { style: {
                flex: "1 1 auto",
                height: 2,
                backgroundColor: S.NeutralBold,
                position: "relative",
                marginInline: l.XSmall,
                borderRadius: M.Full,
                overflow: "hidden"
              }, children: /* @__PURE__ */ r("div", { style: {
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
          a && /* @__PURE__ */ r("div", { style: {
            display: "flex",
            alignItems: "flex-start",
            width: "100%",
            marginTop: l.Medium
          }, children: e.map((s, c) => {
            const m = c === e.length - 1, u = s.status === "visited", g = s.status === "current", p = s.status === "disabled", b = u ? h.Brand : g ? h.Default : p ? h.Disabled : h.Subtle;
            return /* @__PURE__ */ f(le.Fragment, { children: [
              /* @__PURE__ */ r("div", { style: {
                width: o,
                flexShrink: 0,
                display: "flex",
                justifyContent: "center"
              }, children: /* @__PURE__ */ r(
                B,
                {
                  as: "span",
                  size: x.XXSmall,
                  weight: g ? z.Bold : z.Medium,
                  color: b,
                  align: "center",
                  style: {
                    whiteSpace: "nowrap"
                  },
                  children: s.label
                }
              ) }),
              !m && /* @__PURE__ */ r("div", { style: { flex: "1 1 auto" } })
            ] }, s.id);
          }) })
        ]
      }
    );
  }
);
vt.displayName = "ProgressTracker";
const St = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";
function wt(e) {
  const t = /* @__PURE__ */ f(R, { space: l.XSmall, alignBlock: "center", children: [
    /* @__PURE__ */ r(
      B,
      {
        size: x.XSmall,
        weight: z.Semibold,
        color: h.Brand,
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
      children: t
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
      children: t
    }
  );
}
function xt(e) {
  return /* @__PURE__ */ r(
    xe,
    {
      src: e.src,
      alt: e.alt,
      width: e.width ?? l.Size8,
      height: e.height ?? l.Size8,
      objectFit: "cover",
      borderRadius: M.Medium,
      style: { opacity: 0.8 }
    }
  );
}
const kt = X(
  ({
    icon: e,
    heading: t,
    description: n,
    action: i,
    media: a,
    padding: o = l.XXLarge,
    borderRadius: d = M.XXLarge,
    blur: s = 20,
    backgroundOpacity: c = 0.1,
    borderOpacity: m = 0.12,
    children: u
  }, g) => {
    const p = {
      position: "relative",
      overflow: "hidden",
      background: `rgba(255, 255, 255, ${c})`,
      backdropFilter: `blur(${s}px)`,
      WebkitBackdropFilter: `blur(${s}px)`,
      border: `1px solid rgba(255, 255, 255, ${m})`,
      borderRadius: d,
      transition: "background 200ms ease"
    }, b = {
      position: "absolute",
      inset: 0,
      backgroundImage: `url("${St}")`,
      opacity: 0.03,
      pointerEvents: "none"
    }, y = /* @__PURE__ */ f(j, { space: l.Medium, style: { flex: 1 }, children: [
      e && /* @__PURE__ */ r(w, { marginBlockEnd: l.Medium, children: e }),
      /* @__PURE__ */ r(
        B,
        {
          as: "h3",
          size: x.Large,
          weight: z.Bold,
          color: h.Default,
          children: t
        }
      ),
      n && /* @__PURE__ */ r(
        B,
        {
          size: x.XSmall,
          color: h.OnSurfaceVariant,
          children: n
        }
      ),
      i && wt(i),
      u
    ] });
    return /* @__PURE__ */ f(w, { ref: g, padding: o, style: p, children: [
      /* @__PURE__ */ r("div", { style: b, "aria-hidden": "true" }),
      a ? /* @__PURE__ */ f(R, { space: l.XXLarge, alignBlock: "center", children: [
        y,
        /* @__PURE__ */ r("div", { style: { flexShrink: 0 }, children: xt(a) })
      ] }) : y
    ] });
  }
);
kt.displayName = "GlassCard";
const Xt = [
  { value: "small", short: "S", long: "Small" },
  { value: "medium", short: "M", long: "Medium" },
  { value: "large", short: "L", long: "Large" }
], Mt = X(
  ({ label: e = "Page Size", compact: t = !1 }, n) => {
    const { pageSize: i, setPageSize: a } = Br();
    return /* @__PURE__ */ r(
      w,
      {
        ref: n,
        paddingBlock: t ? l.XXSmall : l.XSmall,
        paddingInline: t ? l.XSmall : l.Medium,
        backgroundColor: S.Default,
        borderColor: T.Default,
        borderSide: "all",
        borderRadius: M.Full,
        children: /* @__PURE__ */ f(R, { space: l.MediumLarge, alignBlock: "center", children: [
          !t && e && /* @__PURE__ */ r(
            B,
            {
              size: x.Micro,
              weight: z.Bold,
              color: h.Subtlest,
              textTransform: "uppercase",
              style: { letterSpacing: ve.Widest },
              children: e
            }
          ),
          /* @__PURE__ */ r(R, { space: l.XXSmall, alignBlock: "center", children: Xt.map((o) => {
            const d = o.value === i;
            return /* @__PURE__ */ r(
              ie,
              {
                onClick: () => a(o.value),
                "aria-pressed": d,
                "aria-label": `${o.long} page size`,
                title: o.long,
                backgroundColor: d ? S.PrimaryTint : S.Transparent,
                color: d ? h.Brand : h.Subtlest,
                borderRadius: M.Full,
                paddingBlock: l.XSmall,
                paddingInline: l.MediumLarge,
                style: {
                  fontSize: x.Micro,
                  fontWeight: d ? z.Bold : z.Semibold,
                  letterSpacing: ve.Widest,
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
Mt.displayName = "PageSizeControl";
const Lt = `
@keyframes bbui-pulse-down {
  0%, 100% { transform: translateY(0); opacity: 0.4 }
  50%      { transform: translateY(3px); opacity: 0.9 }
}
`, Ae = "2.25rem", Ct = "1.125rem", Bt = X(
  ({ items: e, onComplete: t, finishedLabel: n, maxHeight: i = "16rem" }, a) => {
    const [o, d] = N(() => /* @__PURE__ */ new Set()), s = te(!1), c = te(null), m = te([]), u = o.size >= e.length;
    return V(() => {
      u && !s.current && (s.current = !0, t == null || t());
    }, [u, t]), V(() => {
      const g = c.current;
      if (!g) return;
      const p = new IntersectionObserver(
        (b) => {
          d((y) => {
            let v = y;
            for (const D of b) {
              if (!D.isIntersecting) continue;
              const L = Number(D.target.dataset.idx);
              y.has(L) || (v === y && (v = new Set(y)), v.add(L));
            }
            return v;
          });
        },
        { root: g, threshold: 0.6 }
      );
      return m.current.forEach((b) => b && p.observe(b)), () => p.disconnect();
    }, [e.length]), /* @__PURE__ */ f("div", { ref: a, style: { width: "100%", position: "relative" }, children: [
      /* @__PURE__ */ r("style", { children: Lt }),
      /* @__PURE__ */ r("div", { ref: c, style: Et(i, u), children: /* @__PURE__ */ r(j, { space: l.MediumLarge, children: e.map((g, p) => {
        const b = o.has(p);
        return /* @__PURE__ */ f(
          "div",
          {
            ref: (y) => m.current[p] = y,
            "data-idx": p,
            style: zt(b),
            children: [
              /* @__PURE__ */ r(Dt, { item: g }),
              p < e.length - 1 && /* @__PURE__ */ r("span", { "aria-hidden": "true", style: Nt(b) })
            ]
          },
          g.id ?? p
        );
      }) }) }),
      /* @__PURE__ */ r("div", { style: Wt, children: u ? n : /* @__PURE__ */ r(It, {}) })
    ] });
  }
);
Bt.displayName = "RevealSteps";
function Dt({ item: e }) {
  return /* @__PURE__ */ f("div", { style: Tt, children: [
    /* @__PURE__ */ r("span", { "aria-hidden": "true", style: Rt, children: e.icon }),
    /* @__PURE__ */ f("span", { style: $t, children: [
      /* @__PURE__ */ r(B, { as: "span", size: x.Small, weight: z.Medium, children: e.label }),
      e.description && /* @__PURE__ */ r(B, { as: "span", size: x.XSmall, color: h.Subtle, children: e.description })
    ] }),
    e.meta && /* @__PURE__ */ r("span", { style: At, children: e.meta })
  ] });
}
function It() {
  return /* @__PURE__ */ r("div", { style: Ft, "aria-hidden": "true", children: /* @__PURE__ */ r(
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
const Ne = "linear-gradient(to bottom, black 0%, black calc(100% - 2rem), transparent 100%)", Et = (e, t) => ({
  maxHeight: e,
  overflowY: "auto",
  scrollBehavior: "smooth",
  maskImage: t ? "none" : Ne,
  WebkitMaskImage: t ? "none" : Ne,
  paddingRight: l.XSmall
}), zt = (e) => ({
  position: "relative",
  opacity: e ? 1 : 0.15,
  transform: e ? "translateY(0)" : "translateY(8px)",
  filter: e ? "blur(0)" : "blur(2px)",
  transition: "opacity 420ms ease-out, transform 420ms cubic-bezier(0.22, 1, 0.36, 1), filter 420ms ease-out"
}), Tt = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: l.MediumLarge,
  padding: l.MediumLarge,
  background: S.Subtle,
  borderRadius: M.Large,
  border: `1px solid ${T.Default}`,
  color: h.Default
}, Rt = {
  width: Ae,
  height: Ae,
  flexShrink: 0,
  borderRadius: M.Medium,
  background: S.Subtle,
  color: h.Default,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
}, $t = {
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: l.XXSmall
}, At = {
  flexShrink: 0,
  display: "inline-flex",
  alignItems: "center"
}, Nt = (e) => ({
  position: "absolute",
  left: `calc(${l.MediumLarge} + ${Ct} - 1px)`,
  top: "100%",
  height: l.MediumLarge,
  width: "2px",
  background: T.Default,
  opacity: e ? 1 : 0,
  transition: "opacity 300ms ease-out",
  pointerEvents: "none"
}), Wt = {
  marginTop: l.Large,
  display: "flex",
  justifyContent: "center",
  minHeight: "1.25rem"
}, Ft = {
  color: h.Subtle,
  animation: "bbui-pulse-down 1500ms ease-in-out infinite",
  display: "inline-flex"
}, Ot = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree"
], Ht = X(
  ({ value: e, onChange: t, labels: n = Ot }, i) => {
    const [a, o] = N(null);
    return /* @__PURE__ */ r("div", { ref: i, role: "radiogroup", style: Pt, children: n.map((d, s) => {
      const c = s + 1, m = e === c;
      return /* @__PURE__ */ r(
        "button",
        {
          type: "button",
          role: "radio",
          "aria-checked": m,
          "aria-label": d,
          onClick: () => t(c),
          onMouseEnter: () => o(c),
          onMouseLeave: () => o(null),
          onFocus: () => o(c),
          onBlur: () => o(null),
          style: jt(m, !m && a === c),
          children: d
        },
        c
      );
    }) });
  }
);
Ht.displayName = "LikertScale";
const Pt = {
  display: "flex",
  flexDirection: "column",
  gap: l.Medium,
  width: "100%"
}, jt = (e, t) => {
  const n = "var(--bbui-color-primary)", i = e ? "var(--bbui-bg-primary-container)" : t ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)", a = e || t ? n : "rgba(255,255,255,0.08)";
  return {
    width: "100%",
    height: "3rem",
    padding: `0 ${l.MediumLarge}`,
    borderRadius: M.Large,
    border: `1px solid ${a}`,
    background: i,
    color: "#ffffff",
    fontSize: x.Small,
    fontWeight: z.Medium,
    textAlign: "center",
    cursor: "pointer",
    transition: "background 180ms ease, border-color 180ms ease",
    font: "inherit"
  };
};
function sn(e) {
  const [t, n] = N(
    () => typeof window < "u" ? window.matchMedia(e).matches : !1
  );
  return V(() => {
    const i = window.matchMedia(e), a = (o) => n(o.matches);
    return i.addEventListener("change", a), n(i.matches), () => i.removeEventListener("change", a);
  }, [e]), t;
}
function Xe() {
  return typeof window > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Kt(e) {
  typeof document > "u" || (e === "system" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e));
}
function dn() {
  const [e, t] = N(() => typeof localStorage > "u" ? "system" : localStorage.getItem("bbui-theme") ?? "system"), [n, i] = N(
    () => e === "system" ? Xe() : e
  ), a = _((o) => {
    t(o), typeof localStorage < "u" && (o === "system" ? localStorage.removeItem("bbui-theme") : localStorage.setItem("bbui-theme", o));
  }, []);
  return V(() => {
    Kt(e), i(e === "system" ? Xe() : e);
  }, [e]), V(() => {
    if (e !== "system") return;
    const o = window.matchMedia("(prefers-color-scheme: dark)"), d = () => i(Xe());
    return o.addEventListener("change", d), () => o.removeEventListener("change", d);
  }, [e]), { theme: e, resolvedTheme: n, setTheme: a };
}
async function* Vt(e, t) {
  if (!e.body)
    throw new Error("SSE response has no readable body");
  const n = e.body.getReader(), i = new TextDecoder();
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
      a += i.decode(o, { stream: !0 });
      let s;
      for (; (s = a.indexOf(`

`)) !== -1; ) {
        const c = a.slice(0, s);
        a = a.slice(s + 2);
        const m = [];
        for (const g of c.split(`
`))
          g.startsWith("data:") && m.push(g.slice(5).trimStart());
        if (m.length === 0) continue;
        const u = m.join(`
`);
        try {
          yield JSON.parse(u);
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
async function* Yt(e, t = {}) {
  const n = await fetch(e, t);
  if (!n.ok) {
    const i = await n.text().catch(() => "");
    throw new Error(
      `SSE request failed ${n.status} ${n.statusText}: ${i}`
    );
  }
  yield* Vt(n, t.signal);
}
function cn(e = {}) {
  const { onEvent: t, onComplete: n, onError: i, retain: a = !0 } = e, [o, d] = N([]), [s, c] = N(null), [m, u] = N(!1), [g, p] = N(null), b = te(null), y = te(!0), v = te(t), D = te(n), L = te(i);
  V(() => {
    v.current = t, D.current = n, L.current = i;
  }), V(() => (y.current = !0, () => {
    var A;
    y.current = !1, (A = b.current) == null || A.abort();
  }), []);
  const P = _(() => {
    var A;
    (A = b.current) == null || A.abort(), b.current = null;
  }, []), C = _(() => {
    d([]), c(null), p(null);
  }, []), $ = _(
    async (A, H = {}) => {
      var k, I, F, K;
      (k = b.current) == null || k.abort();
      const W = new AbortController();
      b.current = W, y.current && (d([]), c(null), p(null), u(!0));
      try {
        for await (const O of Yt(A, {
          ...H,
          signal: W.signal
        })) {
          if (!y.current) return;
          a && d((Y) => [...Y, O]), c(O), (I = v.current) == null || I.call(v, O);
        }
        y.current && ((F = D.current) == null || F.call(D));
      } catch (O) {
        if (W.signal.aborted) return;
        const Y = O instanceof Error ? O : new Error(String(O));
        y.current && (p(Y), (K = L.current) == null || K.call(L, Y));
      } finally {
        y.current && b.current === W && (u(!1), b.current = null);
      }
    },
    [a]
  );
  return { events: o, lastEvent: s, isStreaming: m, error: g, start: $, abort: P, reset: C };
}
export {
  Qt as AccentColor,
  ce as Anchor,
  Jr as Aside,
  pr as Avatar,
  S as BackgroundColor,
  Fe as Badge,
  Wr as Banner,
  oe as BloomColor,
  re as BloomLevel,
  T as BorderColor,
  M as BorderRadius,
  qt as BorderWidth,
  w as Box,
  De as Breakpoint,
  ie as Button,
  lt as Calendar,
  Rr as Card,
  wr as Checkbox,
  en as ContainerWidth,
  ln as DirectionColor,
  xr as Divider,
  ht as DropdownCheckboxMenu,
  Kr as DropdownMenu,
  se as Elevation,
  it as EmptyState,
  nn as EvaluationResultColor,
  rr as FontFamily,
  x as FontSize,
  z as FontWeight,
  kt as GlassCard,
  ge as Gradient,
  We as Grid,
  Or as Header,
  Tr as HeroSection,
  Zt as Hide,
  er as Icon,
  Q as IconButton,
  rn as IconSize,
  xe as Image,
  R as Inline,
  ct as InlineEdit,
  Zr as Layout,
  ve as LetterSpacing,
  Ht as LikertScale,
  sr as LinkButton,
  Ke as Menu,
  ft as MobileNav,
  jr as Modal,
  Hr as ModalSize,
  zr as Navbar,
  Mt as PageSizeControl,
  an as PageSizeProvider,
  Gr as Panel,
  on as PersonaAccent,
  vt as ProgressTracker,
  Bt as RevealSteps,
  He as Select,
  mt as SelectField,
  Jt as Show,
  _r as Sidebar,
  l as Spacing,
  Oe as Spinner,
  j as Stack,
  Mr as Stepper,
  at as Table,
  Fr as Tabs,
  B as Text,
  fr as TextArea,
  h as TextColor,
  $r as TextField,
  Ce as TextInput,
  bt as Toast,
  ar as Toggle,
  ae as ZIndex,
  tr as bloomColorFor,
  nr as bloomLevelForScore,
  Vt as parseSSEStream,
  tn as scoreColor,
  Yt as streamSSE,
  we as useBreakpoint,
  sn as useMediaQuery,
  Br as usePageSize,
  G as useResponsiveValue,
  cn as useSSEStream,
  dn as useTheme
};
