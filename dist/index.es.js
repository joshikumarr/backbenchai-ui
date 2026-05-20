import le, { useState as N, useEffect as _, forwardRef as L, Fragment as Ye, useMemo as me, useCallback as G, useId as xe, useRef as ne } from "react";
import { jsx as e, Fragment as re, jsxs as f } from "react/jsx-runtime";
import { createPortal as ve } from "react-dom";
const Be = {
  /** 0–639px */
  Mobile: 0,
  /** 640–1023px */
  Tablet: 640,
  /** 1024px+ */
  Desktop: 1024
};
function De(t) {
  return t >= Be.Desktop ? "desktop" : t >= Be.Tablet ? "tablet" : "mobile";
}
function Se() {
  const [t, n] = N(
    () => typeof window < "u" ? De(window.innerWidth) : "desktop"
  );
  return _(() => {
    const r = () => n(De(window.innerWidth));
    return window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []), t;
}
function _e(t, n) {
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
function K(t) {
  const n = Se();
  return _e(t, n);
}
const S = L(
  ({
    as: t = "div",
    padding: n,
    paddingBlock: r,
    paddingBlockStart: l,
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
    overflow: X,
    elevation: C,
    maxWidth: O,
    minWidth: M,
    style: A,
    children: R,
    ...W
  }, F) => {
    const k = K(n), I = K(r), H = K(l), Y = K(o), j = K(a), V = K(d), U = K(s), E = K(c), q = K(h), oe = K(u), J = m ? `${v} solid ${m}` : void 0, Q = {};
    if (J && y)
      switch (y) {
        case "top":
          Q.borderTop = J;
          break;
        case "bottom":
          Q.borderBottom = J;
          break;
        case "left":
          Q.borderLeft = J;
          break;
        case "right":
          Q.borderRight = J;
          break;
        case "all":
          Q.border = J;
          break;
      }
    const ce = {
      ...k && { padding: k },
      ...I && { paddingBlock: I },
      ...H && { paddingBlockStart: H },
      ...Y && { paddingBlockEnd: Y },
      ...j && { paddingInline: j },
      ...V && { paddingInlineStart: V },
      ...U && { paddingInlineEnd: U },
      ...E && { marginBlock: E },
      ...q && { marginBlockStart: q },
      ...oe && { marginBlockEnd: oe },
      ...g && { backgroundColor: g },
      ...b && { borderRadius: b },
      ...Q,
      ...X && { overflow: X },
      ...C && { boxShadow: C },
      ...O && { maxWidth: O, marginInline: "auto" },
      ...M !== void 0 && { minWidth: M },
      ...A
    };
    return le.createElement(
      t,
      { ...W, ref: F, style: ce },
      R
    );
  }
);
S.displayName = "Box";
const fe = ["mobile", "tablet", "desktop"];
function Ve(t, n) {
  return fe.indexOf(t) >= fe.indexOf(n);
}
function Ke(t, n) {
  return fe.indexOf(t) < fe.indexOf(n);
}
function Zn({ on: t, above: n, below: r, children: l }) {
  const o = Se();
  return t != null ? (Array.isArray(t) ? t : [t]).includes(o) ? /* @__PURE__ */ e(re, { children: l }) : null : n != null ? Ve(o, n) ? /* @__PURE__ */ e(re, { children: l }) : null : r != null ? Ke(o, r) ? /* @__PURE__ */ e(re, { children: l }) : null : /* @__PURE__ */ e(re, { children: l });
}
const ye = ["mobile", "tablet", "desktop"];
function Ue(t, n) {
  return ye.indexOf(t) >= ye.indexOf(n);
}
function Ge(t, n) {
  return ye.indexOf(t) < ye.indexOf(n);
}
function Qn({ on: t, above: n, below: r, children: l }) {
  const o = Se();
  return t != null ? (Array.isArray(t) ? t : [t]).includes(o) ? null : /* @__PURE__ */ e(re, { children: l }) : n != null ? Ue(o, n) ? null : /* @__PURE__ */ e(re, { children: l }) : r != null ? Ge(o, r) ? null : /* @__PURE__ */ e(re, { children: l }) : /* @__PURE__ */ e(re, { children: l });
}
const Ie = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch"
}, P = L(
  ({
    as: t = "div",
    space: n,
    alignInline: r,
    alignBlock: l,
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
      gap: K(n ?? "0"),
      ...r && { alignItems: Ie[r] },
      ...l && !o && { justifyContent: Ie[l] },
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
const Ee = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
  baseline: "baseline"
}, $ = L(
  ({
    as: t = "div",
    space: n,
    rowSpace: r,
    alignBlock: l,
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
    minWidth: y,
    style: v,
    children: X,
    ...C
  }, O) => {
    const M = K(n ?? "0"), A = {
      display: "flex",
      flexDirection: "row",
      columnGap: M,
      rowGap: r ?? M,
      ...l && { alignItems: Ee[l] },
      ...o && !a && { justifyContent: Ee[o] },
      ...a && { justifyContent: a },
      ...d && { flexWrap: "wrap" },
      ...c === "fill" && { flex: "1 1 auto" },
      ...h && { marginBlockStart: h },
      ...u && { marginBlockEnd: u },
      ...g && { borderRadius: g },
      ...b && { overflow: b },
      ...m && { boxShadow: m },
      ...y !== void 0 && { minWidth: y },
      ...v
    };
    let R = X;
    if (s) {
      const W = le.Children.toArray(X).filter(Boolean);
      R = W.map((F, k) => /* @__PURE__ */ f(Ye, { children: [
        F,
        k < W.length - 1 && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: s })
      ] }, k));
    }
    return le.createElement(
      t,
      { ...C, ref: O, style: A },
      R
    );
  }
);
$.displayName = "Inline";
const D = L(
  ({
    as: t = "span",
    size: n,
    weight: r,
    color: l,
    fontFamily: o,
    letterSpacing: a,
    align: d,
    textTransform: s,
    lineHeight: c,
    opacity: h,
    truncate: u,
    noWrap: g,
    noShrink: b,
    style: m,
    children: y,
    ...v
  }, X) => {
    const C = {
      ...n && { fontSize: n },
      ...r && { fontWeight: r },
      ...l && { color: l },
      ...o && { fontFamily: o },
      ...a && { letterSpacing: a },
      ...d && { textAlign: d },
      ...s && { textTransform: s },
      ...c !== void 0 && { lineHeight: c },
      ...h !== void 0 && { opacity: h },
      ...u && {
        display: "block",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        minWidth: 0
      },
      ...g && !u && { whiteSpace: "nowrap" },
      ...b && { flexShrink: 0 },
      ...m
    };
    return le.createElement(
      t,
      { ...v, ref: X, style: C },
      y
    );
  }
);
D.displayName = "Text";
function qe(t) {
  if (t !== void 0)
    return typeof t == "number" ? `repeat(${t}, 1fr)` : t.map((n) => `${n}fr`).join(" ");
}
const We = L(
  ({
    as: t = "div",
    columns: n,
    gap: r,
    rowGap: l,
    marginBlockStart: o,
    marginBlockEnd: a,
    borderRadius: d,
    overflow: s,
    elevation: c,
    style: h,
    children: u,
    ...g
  }, b) => {
    const m = K(n ?? 1), y = K(r ?? "0"), v = {
      display: "grid",
      gridTemplateColumns: qe(m),
      gap: y,
      ...l && { rowGap: l },
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
We.displayName = "Grid";
const pe = L(
  ({
    color: t,
    weight: n,
    size: r,
    backgroundColor: l,
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
    const X = {
      ...t && { color: t },
      ...n && { fontWeight: n },
      ...r && { fontSize: r },
      ...l && { backgroundColor: l },
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
    return /* @__PURE__ */ e("a", { ref: v, style: X, ...y, children: m });
  }
);
pe.displayName = "Anchor";
const we = L(
  ({ borderRadius: t, objectFit: n, width: r, height: l, fill: o, style: a, ...d }, s) => {
    const c = {
      display: "block",
      ...o ? { width: "100%", height: "100%" } : {
        ...r ? { width: r, flexShrink: 0 } : { width: "100%" },
        ...l && { height: l }
      },
      ...t && { borderRadius: t },
      ...n && { objectFit: n },
      ...a
    };
    return /* @__PURE__ */ e("img", { ref: s, style: c, ...d });
  }
);
we.displayName = "Image";
const ie = L(
  ({
    backgroundColor: t,
    gradient: n,
    color: r,
    fontFamily: l,
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
      ...l && { fontFamily: l },
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
const Le = L(
  ({
    backgroundColor: t,
    borderColor: n,
    borderRadius: r,
    padding: l,
    paddingBlock: o,
    paddingInline: a,
    style: d,
    ...s
  }, c) => {
    const h = {
      ...t && { backgroundColor: t },
      ...n && { border: `1px solid ${n}` },
      ...r && { borderRadius: r },
      ...l && { padding: l },
      ...o && { paddingBlock: o },
      ...a && { paddingInline: a },
      ...d
    };
    return /* @__PURE__ */ e("input", { ref: c, style: h, ...s });
  }
);
Le.displayName = "TextInput";
const Je = L(
  ({ size: t, color: n, label: r, style: l, children: o, ...a }, d) => {
    const s = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      ...t && { width: t, height: t },
      ...n && { color: n },
      ...l
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
Je.displayName = "Icon";
const i = {
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
}, Ze = {
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
}, Fe = {
  Tighter: "-0.05em",
  Tight: "-0.025em",
  Normal: "0",
  Wide: "0.05em",
  Wider: "0.075em",
  /** 0.1em — uppercase labels */
  Widest: "0.1em"
}, B = {
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
}, er = {
  Thin: "1px",
  Medium: "2px",
  Thick: "4px",
  XThick: "8px"
}, tr = {
  Occupied: "var(--bbui-accent-occupied)",
  Vacant: "var(--bbui-accent-vacant)",
  Maintenance: "var(--bbui-accent-maintenance)",
  Reserved: "var(--bbui-accent-reserved)",
  Cleaning: "var(--bbui-accent-cleaning)",
  Primary: "var(--bbui-color-primary)",
  Error: "var(--bbui-color-error)"
}, de = {
  None: "none",
  Raised: "var(--bbui-shadow-raised)",
  Ambient: "var(--bbui-shadow-ambient)",
  Dropdown: "var(--bbui-shadow-dropdown)",
  Overlay: "var(--bbui-shadow-overlay)",
  CardHover: "var(--bbui-shadow-card-hover)"
}, ge = {
  Brand: "var(--bbui-gradient-brand)"
}, nr = {
  Small: "640px",
  Medium: "768px",
  Large: "1024px",
  XLarge: "1280px",
  XXLarge: "1600px"
}, se = {
  Dropdown: 100,
  Sticky: 200,
  Modal: 300,
  Banner: 400,
  FAB: 50
}, rr = {
  Small: "16px",
  Medium: "20px",
  Large: "24px",
  XLarge: "32px",
  XXLarge: "40px"
}, ae = {
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
function Qe(t) {
  switch (t) {
    case te.Masters:
      return ae.Masters;
    case te.Analyzes:
      return ae.Analyzes;
    case te.Applies:
      return ae.Applies;
    case te.Understands:
      return ae.Understands;
    case te.Aware:
      return ae.Aware;
    default:
      return ae.NotAssessed;
  }
}
function et(t) {
  return t >= 90 ? te.Masters : t >= 80 ? te.Analyzes : t >= 60 ? te.Applies : t >= 40 ? te.Understands : t >= 20 ? te.Aware : te.NotAssessed;
}
function lr(t) {
  return Qe(et(t));
}
const ir = {
  correct: ae.Masters,
  partial: ae.Applies,
  incorrect: "var(--bbui-color-error)",
  skipped: "var(--bbui-color-subtlest)"
}, or = {
  up: ae.Masters,
  down: "var(--bbui-color-error)",
  unchanged: "var(--bbui-color-subtlest)"
}, ar = {
  Nova: "var(--bbui-persona-nova)",
  Maya: "var(--bbui-persona-maya)",
  Jordan: "var(--bbui-persona-jordan)",
  Custom: "var(--bbui-persona-custom)"
}, tt = {
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
}, Oe = L(
  ({ variant: t = "default", uppercase: n = !1, style: r, children: l, ...o }, a) => {
    const d = tt[t], s = {
      display: "inline-flex",
      alignItems: "center",
      lineHeight: 1,
      paddingBlock: i.XXSmall,
      paddingInline: n ? i.MediumLarge : i.Medium,
      borderRadius: B.Full,
      fontWeight: n ? T.Black : T.Medium,
      fontSize: n ? w.Micro : w.XXSmall,
      letterSpacing: n ? Fe.Wider : void 0,
      textTransform: n ? "uppercase" : void 0,
      ...d,
      ...r
    };
    return /* @__PURE__ */ e("span", { ref: a, style: s, ...o, children: l });
  }
);
Oe.displayName = "Badge";
const nt = {
  compact: { block: i.XXSmall, inline: i.Small },
  comfortable: { block: i.XSmall, inline: i.Medium }
}, rt = {
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
}, lt = L(
  ({
    selected: t,
    appearance: n = "filled",
    density: r = "compact",
    variant: l,
    fontWeight: o = T.Medium,
    fontSize: a,
    icon: d,
    showCheckWhenSelected: s = !1,
    onClick: c,
    disabled: h,
    style: u,
    children: g,
    ...b
  }, m) => {
    const y = c !== void 0 || t !== void 0, v = t === !0, X = a ?? (l ? w.XXSmall : w.XSmall), C = l ? { block: i.XXSmall, inline: i.XSmall } : nt[r];
    let O, M;
    if (l) {
      const F = rt[l];
      O = F.backgroundColor, M = F.color;
    } else
      O = v ? x.Brand : n === "outlined" ? x.Transparent : x.Subtle, M = v ? p.OnBrand : p.Default;
    const A = !l && n === "outlined" && !v ? `1px solid ${z.Outline}` : "1px solid transparent", R = {
      display: "inline-flex",
      alignItems: "center",
      gap: i.XSmall,
      paddingBlock: C.block,
      paddingInline: C.inline,
      borderRadius: B.Full,
      backgroundColor: O,
      color: M,
      border: A,
      fontFamily: "inherit",
      fontWeight: o,
      fontSize: X,
      lineHeight: 1.2,
      cursor: y ? h ? "not-allowed" : "pointer" : "default",
      opacity: h ? 0.5 : 1,
      whiteSpace: "nowrap",
      width: "auto",
      flex: "0 0 auto",
      // Stop a flex parent (Stack/Inline with default align-items: stretch)
      // from stretching the chip to fill the cross-axis. Without this,
      // a <Chip> inside <Stack> renders edge-to-edge instead of fit-to-text.
      alignSelf: "flex-start",
      ...u
    }, W = s && v ? /* @__PURE__ */ e(
      "span",
      {
        className: "material-symbols-outlined",
        style: { fontSize: 14 },
        "aria-hidden": !0,
        children: "check"
      }
    ) : null;
    return y ? /* @__PURE__ */ f(
      "button",
      {
        ref: m,
        type: "button",
        "aria-pressed": t,
        disabled: h,
        onClick: c,
        style: R,
        ...b,
        children: [
          d,
          W,
          g
        ]
      }
    ) : /* @__PURE__ */ f(
      "span",
      {
        ref: m,
        style: R,
        ...b,
        children: [
          d,
          g
        ]
      }
    );
  }
);
lt.displayName = "Chip";
const ze = {
  sm: "4px",
  md: "12px",
  lg: "16px",
  xl: "24px"
}, it = {
  none: "inset 0 0 0 0 rgba(255, 255, 255, 0)",
  xs: "inset 1px 1px 1px 0 rgba(255, 255, 255, 0.3), inset -1px -1px 1px 0 rgba(255, 255, 255, 0.3)",
  sm: "inset 2px 2px 2px 0 rgba(255, 255, 255, 0.35), inset -2px -2px 2px 0 rgba(255, 255, 255, 0.35)",
  md: "inset 3px 3px 3px 0 rgba(255, 255, 255, 0.45), inset -3px -3px 3px 0 rgba(255, 255, 255, 0.45)",
  lg: "inset 4px 4px 4px 0 rgba(255, 255, 255, 0.5), inset -4px -4px 4px 0 rgba(255, 255, 255, 0.5)",
  xl: "inset 6px 6px 6px 0 rgba(255, 255, 255, 0.55), inset -6px -6px 6px 0 rgba(255, 255, 255, 0.55)"
}, ot = {
  none: "0 4px 4px rgba(0, 0, 0, 0.05), 0 0 12px rgba(0, 0, 0, 0.05)",
  xs: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 16px rgba(255, 255, 255, 0.05)",
  sm: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 24px rgba(255, 255, 255, 0.1)",
  md: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 32px rgba(255, 255, 255, 0.15)",
  lg: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 40px rgba(255, 255, 255, 0.2)",
  xl: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 48px rgba(255, 255, 255, 0.25)"
};
let at = 0;
const st = L(
  ({
    children: t,
    borderRadius: n = B.XLarge,
    blurIntensity: r = "xl",
    glowIntensity: l = "sm",
    shadowIntensity: o = "md",
    borderGradient: a,
    borderWidth: d = 1,
    width: s,
    height: c,
    style: h,
    ...u
  }, g) => {
    const b = me(() => `bbui-liquid-glass-${++at}`, []), m = {
      position: "relative",
      borderRadius: n,
      ...s && { width: s },
      ...c && { height: c },
      ...h
    }, y = {
      position: "absolute",
      inset: 0,
      borderRadius: n,
      pointerEvents: "none"
    };
    return /* @__PURE__ */ f("div", { ref: g, style: m, ...u, children: [
      /* @__PURE__ */ e("svg", { style: { position: "absolute", width: 0, height: 0 }, "aria-hidden": "true", children: /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ f("filter", { id: b, x: "0", y: "0", width: "100%", height: "100%", filterUnits: "objectBoundingBox", children: [
        /* @__PURE__ */ e(
          "feTurbulence",
          {
            type: "fractalNoise",
            baseFrequency: "0.003 0.007",
            numOctaves: 1,
            result: "turbulence"
          }
        ),
        /* @__PURE__ */ e(
          "feDisplacementMap",
          {
            in: "SourceGraphic",
            in2: "turbulence",
            scale: 200,
            xChannelSelector: "R",
            yChannelSelector: "G"
          }
        )
      ] }) }) }),
      /* @__PURE__ */ e(
        "div",
        {
          style: {
            ...y,
            zIndex: 0,
            backdropFilter: `blur(${ze[r]})`,
            WebkitBackdropFilter: `blur(${ze[r]})`,
            filter: `url(#${b})`
          }
        }
      ),
      /* @__PURE__ */ e("div", { style: { ...y, zIndex: 1, boxShadow: ot[l] } }),
      /* @__PURE__ */ e("div", { style: { ...y, zIndex: 2, boxShadow: it[o] } }),
      a && /* @__PURE__ */ e(
        "div",
        {
          "aria-hidden": "true",
          style: {
            ...y,
            zIndex: 3,
            padding: d,
            background: a,
            WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            maskComposite: "exclude"
          }
        }
      ),
      /* @__PURE__ */ e("div", { style: { position: "relative", zIndex: 4 }, children: t })
    ] });
  }
);
st.displayName = "LiquidGlass";
const dt = "40px", ct = "24px", ke = "20px", Te = i.XXSmall, ut = L(
  ({ checked: t, defaultChecked: n = !1, onChange: r, label: l, style: o, ...a }, d) => {
    const [s, c] = N(n), h = t !== void 0, u = h ? t : s, g = G(() => {
      const y = !u;
      h || c(y), r == null || r(y);
    }, [u, h, r]), b = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      width: dt,
      height: ct,
      borderRadius: B.Full,
      backgroundColor: u ? x.Brand : x.Neutral,
      border: "none",
      cursor: "pointer",
      padding: 0,
      transition: "background-color 150ms ease",
      ...o
    }, m = {
      position: "absolute",
      width: ke,
      height: ke,
      borderRadius: B.Full,
      backgroundColor: x.Default,
      transition: "left 150ms ease",
      left: u ? `calc(100% - ${ke} - ${Te})` : Te,
      boxShadow: "0 1px 3px rgba(0,0,0,.2)"
    };
    return /* @__PURE__ */ e(
      "button",
      {
        ref: d,
        type: "button",
        role: "switch",
        "aria-checked": u,
        "aria-label": l,
        onClick: g,
        style: b,
        ...a,
        children: /* @__PURE__ */ e("span", { style: m })
      }
    );
  }
);
ut.displayName = "Toggle";
const pt = L(
  ({
    backgroundColor: t,
    color: n,
    padding: r,
    paddingBlock: l,
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
      ...l && { paddingBlock: l },
      ...o && { paddingInline: o },
      ...a && { borderRadius: a },
      ...d
    };
    return /* @__PURE__ */ e("a", { ref: h, style: u, ...c, children: s });
  }
);
pt.displayName = "LinkButton";
const Z = L(
  ({ label: t, size: n, color: r, backgroundColor: l, padding: o, style: a, children: d, ...s }, c) => {
    const h = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      cursor: "pointer",
      background: l ?? "none",
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
Z.displayName = "IconButton";
const ht = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64
}, bt = {
  xsmall: "10px",
  small: "12px",
  medium: "14px",
  large: "16px",
  xlarge: "24px"
}, gt = {
  xsmall: 6,
  small: 8,
  medium: 10,
  large: 12,
  xlarge: 16
}, mt = {
  online: "#22c55e",
  offline: "#bccbb9",
  busy: "#ba1a1a",
  focus: "#3b82f6"
};
function ft(t) {
  var r;
  const n = t.trim().split(/\s+/);
  return n.length >= 2 ? (n[0][0] + n[n.length - 1][0]).toUpperCase() : (((r = n[0]) == null ? void 0 : r[0]) ?? "").toUpperCase();
}
const yt = L(
  ({
    src: t,
    name: n,
    size: r = "medium",
    appearance: l = "circle",
    status: o,
    fallbackBackground: a = x.NeutralBold,
    fallbackColor: d = p.Subtle
  }, s) => {
    const [c, h] = N(!1), u = ht[r], g = t && !c, b = n ? ft(n) : "", m = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: u,
      height: u,
      borderRadius: l === "circle" ? B.Full : B.XLarge,
      overflow: "hidden",
      flexShrink: 0,
      ...g ? {} : { backgroundColor: a }
    }, y = gt[r], v = o ? {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: y,
      height: y,
      borderRadius: B.Full,
      backgroundColor: mt[o],
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
            fontSize: bt[r],
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
yt.displayName = "Avatar";
const xt = {
  xsmall: 16,
  small: 24,
  medium: 32,
  large: 48,
  xlarge: 64
}, vt = {
  xsmall: 2,
  small: 2,
  medium: 3,
  large: 3,
  xlarge: 4
}, He = L(
  ({ size: t = "medium", label: n = "Loading", color: r = p.Brand }, l) => {
    const o = xe().replace(/:/g, ""), a = xt[t], d = vt[t], s = (a - d) / 2, c = 2 * Math.PI * s;
    return /* @__PURE__ */ f(
      "span",
      {
        ref: l,
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
He.displayName = "Spinner";
const St = L(
  ({
    backgroundColor: t,
    borderColor: n,
    borderRadius: r,
    padding: l,
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
      ...l && { padding: l },
      ...o && { paddingBlock: o },
      ...a && { paddingInline: a },
      ...d
    };
    return /* @__PURE__ */ e("textarea", { ref: c, style: h, ...s });
  }
);
St.displayName = "TextArea";
function wt(t) {
  return "options" in t;
}
const je = L(
  ({
    options: t,
    placeholder: n,
    backgroundColor: r,
    borderColor: l,
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
      ...l ? { border: `1px solid ${l}` } : { border: "none" },
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
        (y) => wt(y) ? /* @__PURE__ */ e("optgroup", { label: y.label, children: y.options.map((v) => /* @__PURE__ */ e("option", { value: v.value, disabled: v.disabled, children: v.label }, v.value)) }, y.label) : /* @__PURE__ */ e("option", { value: y.value, disabled: y.disabled, children: y.label }, y.value)
      )
    ] });
  }
);
je.displayName = "Select";
const kt = {
  small: { box: "16px", font: w.XXSmall, gap: i.XSmall },
  medium: { box: "20px", font: w.XSmall, gap: i.Medium },
  large: { box: "24px", font: w.Small, gap: i.Medium }
}, Xt = ({ size: t }) => /* @__PURE__ */ e(
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
), Ct = L(
  ({ label: t, size: n = "medium", checked: r, disabled: l, style: o, id: a, ...d }, s) => {
    const c = xe(), h = a ?? c, u = kt[n], g = !!r, b = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: u.box,
      height: u.box,
      borderRadius: B.Small,
      flexShrink: 0,
      border: g ? "none" : `2px solid ${z.Outline}`,
      backgroundColor: g ? l ? p.Disabled : x.Brand : x.Transparent,
      color: p.Inverse,
      cursor: l ? "default" : "pointer",
      opacity: l ? 0.5 : 1
    };
    return /* @__PURE__ */ f(
      "label",
      {
        htmlFor: h,
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: u.gap,
          cursor: l ? "default" : "pointer",
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
          /* @__PURE__ */ e("span", { style: b, "aria-hidden": "true", children: g && /* @__PURE__ */ e(Xt, { size: `calc(${u.box} - 4px)` }) }),
          t && /* @__PURE__ */ e(
            "span",
            {
              style: {
                fontSize: u.font,
                color: l ? p.Disabled : p.Default
              },
              children: t
            }
          )
        ]
      }
    );
  }
);
Ct.displayName = "Checkbox";
const Lt = L(
  ({
    orientation: t = "horizontal",
    color: n = z.Default,
    spacing: r
  }, l) => /* @__PURE__ */ e(
    "hr",
    {
      ref: l,
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
Lt.displayName = "Divider";
const Mt = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z", clipRule: "evenodd" }) }), Bt = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { d: "M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" }) }), Dt = L(
  ({
    value: t,
    onChange: n,
    min: r = 0,
    max: l = 99,
    step: o = 1,
    disabled: a = !1,
    backgroundColor: d = x.Subtle,
    padding: s = i.XSmall
  }, c) => {
    const h = t - o >= r, u = t + o <= l;
    return /* @__PURE__ */ f(
      "div",
      {
        ref: c,
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: i.Medium,
          backgroundColor: d,
          borderRadius: B.Large,
          padding: s
        },
        children: [
          /* @__PURE__ */ e(
            Z,
            {
              label: "Decrease",
              onClick: () => h && n(t - o),
              disabled: a || !h,
              color: p.Brand,
              padding: i.XSmall,
              children: /* @__PURE__ */ e(Mt, {})
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
            Z,
            {
              label: "Increase",
              onClick: () => u && n(t + o),
              disabled: a || !u,
              color: p.Brand,
              padding: i.XSmall,
              children: /* @__PURE__ */ e(Bt, {})
            }
          )
        ]
      }
    );
  }
);
Dt.displayName = "Stepper";
const It = () => /* @__PURE__ */ e(
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
), Et = () => /* @__PURE__ */ e(
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
), zt = () => /* @__PURE__ */ e(
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
), Tt = L(
  ({
    logo: t,
    navigation: n = [],
    cta: r,
    linkColor: l = p.Subtle,
    ctaBackgroundColor: o = x.Dark,
    ctaColor: a = p.Inverse,
    ctaWeight: d = 500,
    ctaBorderRadius: s = B.Full,
    paddingInline: c = i.XXXLarge,
    paddingBlock: h = i.XLarge,
    linkGap: u = i.XXLarge,
    logoGap: g = i.Size3_5,
    mobileMenuBackground: b = x.Default,
    mobileMenuBorderColor: m = z.Default,
    mobileMenuBorderRadius: y = B.Large,
    mobileBreakpoint: v = 768
  }, X) => {
    const [C, O] = N(!1), [M, A] = N(!1);
    _(() => {
      const I = () => A(window.innerWidth < v);
      return I(), window.addEventListener("resize", I), () => window.removeEventListener("resize", I);
    }, [v]);
    const R = G((I) => {
      I.target.closest("[data-navbar-menu]") || O(!1);
    }, []);
    _(() => (document.addEventListener("click", R), () => document.removeEventListener("click", R)), [R]);
    const W = le.isValidElement(t) ? t : /* @__PURE__ */ e(
      we,
      {
        src: t.src,
        alt: t.alt ?? "Logo",
        style: {
          width: t.width ?? 120,
          height: t.height ?? "auto"
        }
      }
    ), F = /* @__PURE__ */ e(re, { children: n.map((I, H) => /* @__PURE__ */ e(
      pe,
      {
        href: I.path,
        color: l,
        display: "block",
        style: { textDecoration: "none" },
        children: I.title
      },
      H
    )) }), k = r ? /* @__PURE__ */ e(
      pe,
      {
        href: r.path,
        backgroundColor: o,
        color: a,
        paddingBlock: i.Medium,
        paddingInline: i.Large,
        borderRadius: s,
        weight: d,
        display: "inline-block",
        style: { textDecoration: "none" },
        children: /* @__PURE__ */ f($, { space: i.XSmall, alignBlock: "center", children: [
          /* @__PURE__ */ e(D, { as: "span", color: a, weight: d, children: r.label }),
          r.icon ?? /* @__PURE__ */ e(zt, {})
        ] })
      }
    ) : null;
    return M ? /* @__PURE__ */ f(S, { as: "header", ref: X, "data-navbar-menu": !0, children: [
      /* @__PURE__ */ e(
        S,
        {
          as: "nav",
          paddingInline: i.Large,
          paddingBlock: h,
          children: /* @__PURE__ */ f($, { alignBlock: "center", spread: "space-between", children: [
            /* @__PURE__ */ e(S, { children: W }),
            /* @__PURE__ */ e(
              ie,
              {
                onClick: () => O(!C),
                style: {
                  background: "none",
                  padding: 0,
                  color: p.Subtle
                },
                children: C ? /* @__PURE__ */ e(Et, {}) : /* @__PURE__ */ e(It, {})
              }
            )
          ] })
        }
      ),
      C && /* @__PURE__ */ e(
        S,
        {
          backgroundColor: b,
          elevation: de.Raised,
          borderRadius: y,
          borderColor: m,
          borderSide: "all",
          padding: i.Large,
          style: { margin: i.Medium },
          children: /* @__PURE__ */ f("nav", { children: [
            /* @__PURE__ */ e("ul", { style: { listStyle: "none", padding: 0, margin: 0 }, children: n.map((I, H) => /* @__PURE__ */ e("li", { style: { paddingBlock: i.MediumLarge }, children: /* @__PURE__ */ e(
              pe,
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
    ] }) : /* @__PURE__ */ e(S, { as: "header", ref: X, style: { width: "100%" }, children: /* @__PURE__ */ e(
      S,
      {
        as: "nav",
        paddingInline: c,
        paddingBlock: h,
        style: { width: "100%" },
        children: /* @__PURE__ */ f($, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ e(S, { children: W }),
          /* @__PURE__ */ f(
            $,
            {
              space: u,
              alignBlock: "center",
              grow: "fill",
              style: { marginInlineStart: g },
              children: [
                /* @__PURE__ */ e(
                  $,
                  {
                    space: u,
                    alignBlock: "center",
                    grow: "fill",
                    alignInline: "center",
                    children: F
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
Tt.displayName = "Navbar";
const Re = () => /* @__PURE__ */ e(
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
), Rt = L(
  ({
    title: t,
    subtitle: n,
    badge: r,
    actions: l = [],
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
    primaryCtaBorderRadius: y = B.Full,
    primaryCtaWeight: v = 500,
    secondaryCtaColor: X = p.Subtle,
    secondaryCtaWeight: C = 500,
    ctaGap: O = i.MediumLarge,
    paddingBlock: M = i.Size7,
    paddingInline: A = i.XXXLarge,
    contentGap: R = i.XHuge,
    textGap: W = i.XLarge,
    textMaxWidth: F = "576px",
    gradient: k,
    breakpoint: I = 768
  }, H) => {
    const [Y, j] = N(!1);
    _(() => {
      const ee = () => j(window.innerWidth >= I);
      return ee(), window.addEventListener("resize", ee), () => window.removeEventListener("resize", ee);
    }, [I]);
    const V = (k == null ? void 0 : k.enabled) !== !1, U = (k == null ? void 0 : k.css) ?? "linear-gradient(143.6deg, rgba(192,132,252,0) 20.79%, rgba(232,121,249,0.26) 40.92%, rgba(204,171,238,0) 70.35%)", E = (k == null ? void 0 : k.height) ?? "580px", q = (r == null ? void 0 : r.borderColor) ?? z.Default, oe = r ? /* @__PURE__ */ e(
      pe,
      {
        href: r.path ?? "#",
        borderRadius: B.Full,
        paddingBlock: i.XSmall,
        paddingInline: i.Small,
        size: w.XSmall,
        weight: 500,
        display: "inline-block",
        style: {
          textDecoration: "none",
          border: `1px solid ${q}`,
          paddingRight: i.XXLarge
        },
        children: /* @__PURE__ */ f($, { space: i.MediumLarge, alignBlock: "center", children: [
          /* @__PURE__ */ e(
            D,
            {
              as: "span",
              size: w.XSmall,
              color: r.labelColor ?? p.Inverse,
              style: {
                backgroundColor: r.labelBackgroundColor ?? x.Accent,
                borderRadius: B.Full,
                padding: `${i.XSmall} ${i.MediumLarge}`
              },
              children: r.label
            }
          ),
          /* @__PURE__ */ f($, { space: i.XXSmall, alignBlock: "center", children: [
            /* @__PURE__ */ e(D, { as: "span", size: w.XSmall, children: r.text }),
            r.icon ?? /* @__PURE__ */ e(Re, {})
          ] })
        ] })
      }
    ) : null, J = l.length > 0 ? /* @__PURE__ */ e($, { space: O, alignBlock: "center", shouldWrap: !0, children: l.map((ee, be) => {
      const he = (ee.variant ?? (be === 0 ? "primary" : "secondary")) === "primary", Me = he ? v : C;
      return /* @__PURE__ */ e(
        pe,
        {
          href: ee.path,
          backgroundColor: he ? b : void 0,
          color: he ? m : X,
          paddingBlock: i.Medium,
          paddingInline: i.Large,
          borderRadius: he ? y : void 0,
          weight: Me,
          display: "inline-block",
          style: { textDecoration: "none" },
          children: /* @__PURE__ */ f($, { space: i.XSmall, alignBlock: "center", children: [
            /* @__PURE__ */ e(
              D,
              {
                as: "span",
                color: he ? m : X,
                weight: Me,
                children: ee.label
              }
            ),
            ee.icon ?? /* @__PURE__ */ e(Re, {})
          ] })
        },
        be
      );
    }) }) : null, ce = /* @__PURE__ */ f(
      P,
      {
        space: W,
        style: { maxWidth: F, flexShrink: 0 },
        children: [
          oe,
          /* @__PURE__ */ e(
            D,
            {
              as: "h1",
              size: Y ? s : d,
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
          J
        ]
      }
    ), ue = o && Y ? /* @__PURE__ */ e(S, { style: { flex: "1 1 0%", minWidth: 0 }, children: /* @__PURE__ */ e(
      we,
      {
        src: o.src,
        alt: o.alt ?? "",
        style: { maxWidth: o.maxWidth ?? "576px" }
      }
    ) }) : null;
    return /* @__PURE__ */ f(S, { as: "section", ref: H, style: { position: "relative" }, children: [
      V && /* @__PURE__ */ e(
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
          paddingInline: A,
          paddingBlock: M,
          children: Y ? /* @__PURE__ */ f($, { space: R, alignBlock: "center", children: [
            ce,
            ue
          ] }) : /* @__PURE__ */ e(P, { space: R, children: ce })
        }
      )
    ] });
  }
);
Rt.displayName = "HeroSection";
const $t = L(
  ({
    padding: t = i.Large,
    backgroundColor: n = x.Default,
    borderRadius: r = B.XXLarge,
    borderColor: l = z.Default,
    elevation: o = de.Ambient,
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
      borderColor: l,
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
            style: { borderBottom: `1px solid ${l}` },
            children: s
          }
        ),
        /* @__PURE__ */ e(S, { padding: t, children: h }),
        c && /* @__PURE__ */ e(
          S,
          {
            padding: t,
            style: { borderTop: `1px solid ${l}` },
            children: c
          }
        )
      ] })
    }
  )
);
$t.displayName = "Card";
const At = L(
  ({
    label: t,
    helperText: n,
    errorText: r,
    id: l,
    labelColor: o = p.Default,
    labelSize: a = w.XSmall,
    labelWeight: d = T.Medium,
    labelTextTransform: s,
    labelLetterSpacing: c,
    inputBackground: h = x.Default,
    inputBorderColor: u = z.Input,
    inputBorderRadius: g = B.Medium,
    inputBorderSide: b = "all",
    inputPadding: m = i.Medium,
    startAdornment: y,
    endAdornment: v,
    name: X,
    type: C,
    placeholder: O,
    value: M,
    defaultValue: A,
    disabled: R,
    readOnly: W,
    required: F,
    autoFocus: k,
    autoComplete: I,
    onChange: H,
    onBlur: Y,
    onFocus: j
  }, V) => {
    const U = xe(), E = l ?? U, q = `${E}-helper`, oe = `${E}-error`, J = !!r, Q = J ? z.Error : u, ce = b === "bottom", ue = ce || !!(y || v), ee = /* @__PURE__ */ e(
      Le,
      {
        ref: V,
        id: E,
        name: X,
        type: C,
        placeholder: O,
        value: M,
        defaultValue: A,
        disabled: R,
        readOnly: W,
        required: F,
        autoFocus: k,
        autoComplete: I,
        onChange: H,
        onBlur: Y,
        onFocus: j,
        backgroundColor: ue ? "transparent" : h,
        borderColor: ue ? void 0 : Q,
        borderRadius: ue ? void 0 : g,
        padding: m,
        style: {
          width: "100%",
          ...ue ? { flex: "1 1 auto", minWidth: 0 } : {}
        },
        "aria-describedby": J ? oe : n ? q : void 0,
        "aria-invalid": J || void 0
      }
    ), be = ue ? /* @__PURE__ */ f("div", { style: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      backgroundColor: h,
      ...ce ? { borderBottom: `2px solid ${Q}` } : { border: `1px solid ${Q}`, borderRadius: g }
    }, children: [
      y,
      ee,
      v
    ] }) : ee;
    return /* @__PURE__ */ f(P, { space: i.XSmall, children: [
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
      J && /* @__PURE__ */ e(D, { as: "span", size: w.XXSmall, color: p.Error, id: oe, children: r }),
      !J && n && /* @__PURE__ */ e(D, { as: "span", size: w.XXSmall, color: p.Subtle, id: q, children: n })
    ] });
  }
);
At.displayName = "TextField";
const Nt = {
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
}, Wt = () => /* @__PURE__ */ e(
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
), Ft = L(
  ({ variant: t = "info", icon: n, dismissible: r, onDismiss: l, children: o }, a) => {
    const d = Nt[t];
    return /* @__PURE__ */ e(
      S,
      {
        ref: a,
        role: "alert",
        padding: i.MediumLarge,
        borderRadius: B.Medium,
        style: {
          backgroundColor: d.bg,
          borderLeft: `4px solid ${d.border}`,
          position: "relative",
          zIndex: se.Banner
        },
        children: /* @__PURE__ */ f($, { space: i.Medium, alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ f($, { space: i.Medium, alignBlock: "center", grow: "fill", children: [
            n && /* @__PURE__ */ e(S, { style: { color: d.text, flexShrink: 0 }, children: n }),
            /* @__PURE__ */ e(D, { as: "span", size: w.XSmall, color: d.text, children: o })
          ] }),
          r && /* @__PURE__ */ e(
            Z,
            {
              label: "Dismiss",
              onClick: l,
              color: d.text,
              padding: i.XXSmall,
              children: /* @__PURE__ */ e(Wt, {})
            }
          )
        ] })
      }
    );
  }
);
Ft.displayName = "Banner";
const Pe = L(
  ({
    sections: t,
    activeId: n,
    onSelect: r,
    activeColor: l = p.Brand,
    activeBackground: o = x.Subtle
  }, a) => /* @__PURE__ */ e(P, { ref: a, as: "nav", space: i.Small, children: t.map((d, s) => /* @__PURE__ */ f(P, { space: i.XXSmall, children: [
    d.title && /* @__PURE__ */ e(S, { paddingInline: i.Medium, paddingBlock: i.XSmall, children: /* @__PURE__ */ e(
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
          borderRadius: B.Medium,
          color: c.disabled ? p.Disabled : h ? l : p.Default,
          backgroundColor: h ? o : x.Transparent,
          paddingBlock: i.Medium,
          paddingInline: i.MediumLarge,
          style: {
            width: "100%",
            fontSize: w.XSmall,
            textAlign: "left",
            cursor: c.disabled ? "default" : "pointer"
          },
          children: /* @__PURE__ */ f($, { space: i.Medium, alignBlock: "center", children: [
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
          marginBlock: i.XSmall
        }
      }
    )
  ] }, s)) })
);
Pe.displayName = "Menu";
const Ot = L(
  ({
    tabs: t,
    activeId: n,
    defaultActiveId: r,
    onChange: l,
    variant: o = "underline",
    activeColor: a = p.Brand,
    inactiveColor: d = p.Subtle,
    pillBackground: s = x.Subtle,
    activePillBackground: c = x.Default,
    panelPadding: h = i.Large
  }, u) => {
    var O;
    const [g, b] = N(
      r ?? ((O = t[0]) == null ? void 0 : O.id)
    ), m = n !== void 0, y = m ? n : g, v = (M) => {
      m || b(M), l == null || l(M);
    }, X = t.find((M) => M.id === y);
    return /* @__PURE__ */ f(S, { ref: u, children: [
      o === "pill" ? /* @__PURE__ */ e(
        $,
        {
          role: "tablist",
          space: i.XSmall,
          alignBlock: "center",
          style: {
            backgroundColor: s,
            padding: i.Small,
            borderRadius: B.XXLarge,
            width: "fit-content"
          },
          children: t.map((M) => {
            const A = M.id === y;
            return /* @__PURE__ */ e(
              ie,
              {
                role: "tab",
                "aria-selected": A,
                "aria-controls": `tabpanel-${M.id}`,
                id: `tab-${M.id}`,
                disabled: M.disabled,
                onClick: () => v(M.id),
                paddingBlock: i.Medium,
                paddingInline: i.XXLarge,
                borderRadius: B.XLarge,
                color: A ? p.Default : M.disabled ? p.Disabled : d,
                backgroundColor: A ? c : x.Transparent,
                style: {
                  fontWeight: A ? T.Bold : T.Medium,
                  fontSize: w.XSmall,
                  boxShadow: A ? de.Raised : "none",
                  cursor: M.disabled ? "default" : "pointer"
                },
                children: M.label
              },
              M.id
            );
          })
        }
      ) : /* @__PURE__ */ e(
        $,
        {
          as: "div",
          role: "tablist",
          space: i.None,
          style: {
            borderBottom: `1px solid ${z.Default}`
          },
          children: t.map((M) => {
            const A = M.id === y;
            return /* @__PURE__ */ e(
              ie,
              {
                role: "tab",
                "aria-selected": A,
                "aria-controls": `tabpanel-${M.id}`,
                id: `tab-${M.id}`,
                disabled: M.disabled,
                onClick: () => v(M.id),
                paddingBlock: i.Medium,
                paddingInline: i.Large,
                borderRadius: B.None,
                color: A ? a : M.disabled ? p.Disabled : d,
                style: {
                  background: "none",
                  fontWeight: A ? T.Semibold : T.Regular,
                  fontSize: w.XSmall,
                  borderBottom: A ? `2px solid ${a}` : "2px solid transparent",
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
      X && /* @__PURE__ */ e(
        S,
        {
          role: "tabpanel",
          id: `tabpanel-${X.id}`,
          "aria-labelledby": `tab-${X.id}`,
          padding: h,
          children: X.content
        }
      )
    ] });
  }
);
Ot.displayName = "Tabs";
const Ht = L(
  ({
    title: t,
    subtitle: n,
    breadcrumbs: r,
    actions: l,
    titleSize: o = w.XLarge,
    titleWeight: a = T.Bold,
    titleColor: d = p.Default,
    subtitleColor: s = p.Subtle,
    breadcrumbLinkColor: c = p.Link,
    borderColor: h = z.Default,
    paddingBlock: u = i.Large
  }, g) => /* @__PURE__ */ e(
    S,
    {
      ref: g,
      as: "header",
      paddingBlock: u,
      style: {
        borderBottom: `1px solid ${h}`
      },
      children: /* @__PURE__ */ f(P, { space: i.Medium, children: [
        r && r.length > 0 && /* @__PURE__ */ e($, { space: i.XSmall, alignBlock: "center", children: r.map((b, m) => /* @__PURE__ */ f(le.Fragment, { children: [
          m > 0 && /* @__PURE__ */ e(D, { as: "span", color: p.Disabled, size: w.XSmall, children: "/" }),
          b.href ? /* @__PURE__ */ e(
            pe,
            {
              href: b.href,
              color: c,
              size: w.XSmall,
              style: { textDecoration: "none" },
              children: b.label
            }
          ) : /* @__PURE__ */ e(D, { as: "span", size: w.XSmall, color: p.Subtlest, children: b.label })
        ] }, m)) }),
        /* @__PURE__ */ f($, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ f(P, { space: i.XXSmall, children: [
            /* @__PURE__ */ e(D, { as: "h1", size: o, weight: a, color: d, children: t }),
            n && /* @__PURE__ */ e(D, { as: "p", size: w.XSmall, color: s, children: n })
          ] }),
          l && /* @__PURE__ */ e($, { space: i.Medium, alignBlock: "center", children: l })
        ] })
      ] })
    }
  )
);
Ht.displayName = "Header";
const jt = {
  XSmall: "320px",
  Small: "416px",
  Medium: "512px",
  Large: "704px",
  XLarge: "960px",
  Full: "min(96vw, 1440px)"
}, Pt = () => /* @__PURE__ */ e(
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
), Yt = L(
  ({ open: t, onClose: n, title: r, children: l, footer: o, size: a = jt.Medium }, d) => {
    const s = G(
      (c) => {
        c.key === "Escape" && n();
      },
      [n]
    );
    return _(() => {
      if (t)
        return document.addEventListener("keydown", s), document.body.style.overflow = "hidden", () => {
          document.removeEventListener("keydown", s), document.body.style.overflow = "";
        };
    }, [t, s]), t ? ve(
      /* @__PURE__ */ e(
        S,
        {
          style: {
            position: "fixed",
            inset: 0,
            zIndex: se.Modal,
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
              borderRadius: B.XLarge,
              elevation: de.Overlay,
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
                    padding: i.Large,
                    style: { borderBottom: `1px solid ${z.Default}` },
                    children: /* @__PURE__ */ f($, { alignBlock: "center", spread: "space-between", children: [
                      /* @__PURE__ */ e(D, { as: "h2", size: w.Large, weight: T.Semibold, color: p.Default, children: r }),
                      /* @__PURE__ */ e(Z, { label: "Close", onClick: n, color: p.Subtle, children: /* @__PURE__ */ e(Pt, {}) })
                    ] })
                  }
                ),
                /* @__PURE__ */ e(S, { padding: i.Large, overflow: "auto", style: { flex: "1 1 auto" }, children: l }),
                o && /* @__PURE__ */ e(
                  S,
                  {
                    padding: i.Large,
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
Yt.displayName = "Modal";
const Xe = 200, _t = {
  start: "flex-start",
  center: "center",
  end: "flex-end"
};
function Vt({
  open: t,
  onClose: n,
  children: r,
  offsetTop: l = 0,
  padding: o = i.Large,
  maxWidth: a,
  align: d = "center",
  blur: s = !0,
  closeOnMouseLeave: c = !1
}) {
  const [h, u] = N(t), [g, b] = N(!1), m = K(l), y = K(d);
  if (_(() => {
    if (t) {
      u(!0);
      const C = requestAnimationFrame(() => b(!0));
      return () => cancelAnimationFrame(C);
    }
    b(!1);
    const X = window.setTimeout(() => u(!1), Xe);
    return () => window.clearTimeout(X);
  }, [t]), _(() => {
    if (!t) return;
    const X = (C) => {
      C.key === "Escape" && n();
    };
    return document.addEventListener("keydown", X), () => document.removeEventListener("keydown", X);
  }, [t, n]), !h) return null;
  const v = typeof m == "number" ? `${m}px` : m;
  return ve(
    /* @__PURE__ */ f(
      S,
      {
        onClick: n,
        style: {
          position: "fixed",
          top: v,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: se.Modal,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          opacity: g ? 1 : 0,
          transition: `opacity ${Xe}ms ease`
        },
        children: [
          /* @__PURE__ */ e(
            S,
            {
              onClick: (X) => X.stopPropagation(),
              onMouseLeave: c ? n : void 0,
              backgroundColor: x.Default,
              padding: o,
              style: {
                display: "flex",
                justifyContent: _t[y],
                width: "100%",
                transform: g ? "translateY(0)" : "translateY(-12px)",
                transition: `transform ${Xe + 50}ms ease`
              },
              children: /* @__PURE__ */ e(S, { style: { width: "100%", maxWidth: a }, children: r })
            }
          ),
          s && /* @__PURE__ */ e(
            S,
            {
              style: {
                flex: 1,
                pointerEvents: "none",
                backdropFilter: "blur(16px) saturate(180%)",
                WebkitBackdropFilter: "blur(16px) saturate(180%)"
              }
            }
          )
        ]
      }
    ),
    document.body
  );
}
Vt.displayName = "Drawer";
const Kt = L(
  ({ trigger: t, sections: n, activeId: r, onSelect: l }, o) => {
    const [a, d] = N(!1), s = ne(null), c = () => d((b) => !b), h = (b) => {
      l == null || l(b), d(!1);
    }, u = G((b) => {
      b.key === "Escape" && d(!1);
    }, []), g = G((b) => {
      s.current && !s.current.contains(b.target) && d(!1);
    }, []);
    return _(() => {
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
            $,
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
              borderRadius: B.Large,
              elevation: de.Dropdown,
              padding: i.XSmall,
              style: {
                position: "absolute",
                top: "100%",
                right: 0,
                marginTop: i.XSmall,
                minWidth: "192px",
                zIndex: se.Dropdown
              },
              children: /* @__PURE__ */ e(
                Pe,
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
Kt.displayName = "DropdownMenu";
const Ut = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), Gt = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), qt = L(
  ({
    sections: t,
    activeId: n,
    onSelect: r,
    header: l,
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
        l && /* @__PURE__ */ e(
          S,
          {
            padding: i.Large,
            style: { borderBottom: `1px solid ${g}` },
            children: l
          }
        ),
        /* @__PURE__ */ e(
          P,
          {
            space: i.Small,
            grow: "fill",
            style: { padding: i.Medium, overflow: "auto" },
            children: t.map((m, y) => /* @__PURE__ */ f(P, { space: i.XXSmall, children: [
              m.title && !a && /* @__PURE__ */ e(S, { paddingInline: i.Medium, paddingBlock: i.XSmall, children: /* @__PURE__ */ e(
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
                const X = v.id === n;
                return /* @__PURE__ */ f(
                  ie,
                  {
                    onClick: () => r == null ? void 0 : r(v.id),
                    title: a ? v.label : void 0,
                    borderRadius: B.Medium,
                    color: X ? h : p.Default,
                    backgroundColor: X ? u : x.Transparent,
                    paddingBlock: i.Medium,
                    paddingInline: i.MediumLarge,
                    style: {
                      width: "100%",
                      fontSize: w.XSmall,
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      gap: a ? 0 : i.Medium,
                      justifyContent: a ? "center" : "flex-start"
                    },
                    children: [
                      v.icon && /* @__PURE__ */ e(S, { style: { flexShrink: 0 }, children: v.icon }),
                      !a && /* @__PURE__ */ f(re, { children: [
                        /* @__PURE__ */ e(D, { as: "span", style: { flex: "1 1 auto", color: "inherit" }, children: v.label }),
                        v.badge && /* @__PURE__ */ e(Oe, { variant: v.badgeVariant ?? "default", children: v.badge })
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
            style: { borderTop: `1px solid ${g}` },
            children: /* @__PURE__ */ e(
              Z,
              {
                label: a ? "Expand sidebar" : "Collapse sidebar",
                onClick: d,
                color: p.Subtle,
                padding: i.XSmall,
                children: a ? /* @__PURE__ */ e(Gt, {}) : /* @__PURE__ */ e(Ut, {})
              }
            )
          }
        ),
        o && /* @__PURE__ */ e(
          S,
          {
            padding: i.Large,
            style: { borderTop: `1px solid ${g}` },
            children: o
          }
        )
      ]
    }
  )
);
qt.displayName = "Sidebar";
const Jt = () => /* @__PURE__ */ e(
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
), Zt = L(
  ({
    open: t,
    onClose: n,
    title: r,
    side: l = "right",
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
    if (_(() => {
      if (t)
        return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
    }, [t, c]), !t) return null;
    const h = /* @__PURE__ */ f(
      S,
      {
        ref: s,
        backgroundColor: x.Default,
        elevation: de.Overlay,
        style: {
          position: "fixed",
          top: 0,
          bottom: 0,
          [l]: 0,
          width: a,
          zIndex: se.Modal,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden"
        },
        children: [
          r && /* @__PURE__ */ e(
            S,
            {
              padding: i.Large,
              style: { borderBottom: `1px solid ${z.Default}` },
              children: /* @__PURE__ */ f($, { alignBlock: "center", spread: "space-between", children: [
                /* @__PURE__ */ e(D, { as: "h2", size: w.Large, weight: T.Semibold, color: p.Default, children: r }),
                /* @__PURE__ */ e(Z, { label: "Close panel", onClick: n, color: p.Subtle, children: /* @__PURE__ */ e(Jt, {}) })
              ] })
            }
          ),
          /* @__PURE__ */ e(S, { padding: i.Large, overflow: "auto", style: { flex: "1 1 auto" }, children: d })
        ]
      }
    );
    return o === "overlay" ? ve(
      /* @__PURE__ */ e(
        S,
        {
          style: {
            position: "fixed",
            inset: 0,
            zIndex: se.Modal,
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
Zt.displayName = "Panel";
const Qt = L(
  ({
    padding: t = i.Large,
    color: n = p.Subtle,
    borderColor: r = z.Default,
    children: l
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
      children: l
    }
  )
);
Qt.displayName = "Aside";
const en = L(
  ({
    topNav: t,
    sideNav: n,
    mobileNav: r,
    backgroundColor: l = x.Surface,
    children: o
  }, a) => {
    const s = Se() === "mobile";
    return /* @__PURE__ */ f(
      S,
      {
        ref: a,
        style: {
          minHeight: "100vh",
          backgroundColor: l,
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
                      paddingBlockEnd: s && r ? i.XXHuge : void 0
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
en.displayName = "Layout";
const tn = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
function $e(t, n) {
  return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate();
}
function nn(t, n) {
  return new Date(t, n + 1, 0).getDate();
}
function rn(t, n) {
  return new Date(t, n, 1).getDay();
}
const ln = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), on = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), an = [
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
], sn = L(
  ({
    value: t,
    defaultValue: n,
    onChange: r,
    min: l,
    max: o,
    selectedColor: a = p.Inverse,
    selectedBackground: d = x.Brand
  }, s) => {
    const c = /* @__PURE__ */ new Date(), [h, u] = N(n), g = t !== void 0, b = g ? t : h, [m, y] = N(
      (b ?? c).getFullYear()
    ), [v, X] = N(
      (b ?? c).getMonth()
    ), C = me(() => nn(m, v), [m, v]), O = me(() => rn(m, v), [m, v]), M = () => {
      v === 0 ? (X(11), y((k) => k - 1)) : X((k) => k - 1);
    }, A = () => {
      v === 11 ? (X(0), y((k) => k + 1)) : X((k) => k + 1);
    }, R = (k) => {
      const I = new Date(m, v, k);
      g || u(I), r == null || r(I);
    }, W = (k) => {
      const I = new Date(m, v, k);
      return !!(l && I < new Date(l.getFullYear(), l.getMonth(), l.getDate()) || o && I > new Date(o.getFullYear(), o.getMonth(), o.getDate()));
    }, F = [];
    for (let k = 0; k < O; k++)
      F.push(/* @__PURE__ */ e(S, {}, `empty-${k}`));
    for (let k = 1; k <= C; k++) {
      const I = new Date(m, v, k), H = b ? $e(I, b) : !1, Y = $e(I, c), j = W(k);
      F.push(
        /* @__PURE__ */ e(
          ie,
          {
            disabled: j,
            onClick: () => R(k),
            borderRadius: B.Medium,
            style: {
              width: "36px",
              height: "36px",
              padding: 0,
              fontSize: w.XSmall,
              fontWeight: H ? T.Semibold : T.Regular,
              backgroundColor: H ? d : "transparent",
              color: H ? a : j ? p.Disabled : p.Default,
              border: Y && !H ? `1px solid ${z.Default}` : "none",
              cursor: j ? "default" : "pointer"
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
        borderRadius: B.XLarge,
        borderColor: z.Default,
        borderSide: "all",
        backgroundColor: x.Default,
        style: { width: "fit-content" },
        children: [
          /* @__PURE__ */ f(
            $,
            {
              alignBlock: "center",
              spread: "space-between",
              marginBlockEnd: i.Medium,
              children: [
                /* @__PURE__ */ e(Z, { label: "Previous month", onClick: M, color: p.Subtle, padding: i.XSmall, children: /* @__PURE__ */ e(ln, {}) }),
                /* @__PURE__ */ f(D, { as: "span", size: w.XSmall, weight: T.Semibold, color: p.Default, children: [
                  an[v],
                  " ",
                  m
                ] }),
                /* @__PURE__ */ e(Z, { label: "Next month", onClick: A, color: p.Subtle, padding: i.XSmall, children: /* @__PURE__ */ e(on, {}) })
              ]
            }
          ),
          /* @__PURE__ */ f(We, { columns: 7, gap: i.XXSmall, children: [
            tn.map((k) => /* @__PURE__ */ e(
              D,
              {
                as: "span",
                size: w.XXSmall,
                weight: T.Medium,
                color: p.Subtlest,
                align: "center",
                style: { padding: `${i.XSmall} 0` },
                children: k
              },
              k
            )),
            F
          ] })
        ]
      }
    );
  }
);
sn.displayName = "Calendar";
const dn = L(
  ({ header: t, description: n, image: r, primaryAction: l, secondaryAction: o }, a) => /* @__PURE__ */ f(
    P,
    {
      ref: a,
      space: i.Large,
      alignInline: "center",
      style: {
        paddingBlock: i.XXHuge,
        paddingInline: i.XXXLarge,
        maxWidth: "448px",
        marginInline: "auto",
        textAlign: "center"
      },
      children: [
        r && /* @__PURE__ */ e("div", { children: r }),
        /* @__PURE__ */ f(P, { space: i.Medium, alignInline: "center", children: [
          /* @__PURE__ */ e(
            D,
            {
              as: "h3",
              fontFamily: Ze.Display,
              size: w.XLarge,
              weight: T.Bold,
              color: p.Default,
              children: t
            }
          ),
          n && /* @__PURE__ */ e(D, { as: "p", size: w.XSmall, color: p.Subtle, lineHeight: 1.6, children: n })
        ] }),
        (l || o) && /* @__PURE__ */ f($, { space: i.Medium, alignBlock: "center", children: [
          l,
          o
        ] })
      ]
    }
  )
);
dn.displayName = "EmptyState";
const cn = ({ order: t }) => /* @__PURE__ */ e(
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
), un = L(
  ({
    caption: t,
    head: n,
    rows: r,
    rowsPerPage: l,
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
    const [v, X] = N(a), [C, O] = N(c), [M, A] = N(h), R = o !== void 0, W = R ? o : v, F = d !== void 0, k = F ? d : C, I = F ? s ?? "ASC" : M, H = l ? Math.max(1, Math.ceil(r.length / l)) : 1, Y = me(() => {
      if (!l) return r;
      const E = (W - 1) * l;
      return r.slice(E, E + l);
    }, [r, l, W]), j = (E) => {
      const q = k === E && I === "ASC" ? "DESC" : "ASC";
      F || (O(E), A(q)), u == null || u(E, q);
    }, V = (E) => {
      R || X(E), g == null || g(E);
    }, U = {
      padding: `${i.MediumLarge} ${i.Large}`
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
            borderRadius: B.XXLarge
          },
          children: /* @__PURE__ */ e(He, { size: "large" })
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
                  paddingBlockEnd: i.Medium,
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
                  ...U,
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
                onClick: E.isSortable ? () => j(E.key) : void 0,
                children: /* @__PURE__ */ f("span", { style: { display: "inline-flex", alignItems: "center" }, children: [
                  E.label,
                  E.isSortable && /* @__PURE__ */ e(
                    cn,
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
                    borderBottom: `1px solid ${z.Default}`
                  },
                  children: E.cells.map((q, oe) => /* @__PURE__ */ e("td", { style: { ...U, color: p.Default }, children: q }, oe))
                },
                E.key
              )),
              Y.length === 0 && /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e(
                "td",
                {
                  colSpan: n.length,
                  style: {
                    ...U,
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
      l && H > 1 && /* @__PURE__ */ f(
        $,
        {
          space: i.Medium,
          alignBlock: "center",
          alignInline: "center",
          style: { paddingBlock: i.Large },
          children: [
            /* @__PURE__ */ e(
              ie,
              {
                disabled: W <= 1,
                onClick: () => V(W - 1),
                paddingBlock: i.XSmall,
                paddingInline: i.Medium,
                borderRadius: B.Large,
                backgroundColor: x.Default,
                color: p.Default,
                style: { fontSize: w.XXSmall, border: `1px solid ${z.Default}` },
                children: "Previous"
              }
            ),
            /* @__PURE__ */ f(D, { size: w.XXSmall, color: p.Subtle, children: [
              "Page ",
              W,
              " of ",
              H
            ] }),
            /* @__PURE__ */ e(
              ie,
              {
                disabled: W >= H,
                onClick: () => V(W + 1),
                paddingBlock: i.XSmall,
                paddingInline: i.Medium,
                borderRadius: B.Large,
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
un.displayName = "Table";
const pn = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z", clipRule: "evenodd" }) }), hn = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" }) }), bn = L(
  ({
    defaultValue: t,
    label: n,
    editButtonLabel: r,
    editView: l,
    readView: o,
    onConfirm: a,
    onCancel: d
  }, s) => {
    const [c, h] = N(!1), [u, g] = N(t);
    ne(null), _(() => {
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
          paddingBlock: i.XSmall,
          paddingInline: i.Small,
          cursor: "pointer",
          borderRadius: B.Medium,
          wordBreak: "break-word",
          minHeight: "1.5em"
        },
        children: /* @__PURE__ */ e(D, { as: "span", size: w.Small, color: p.Default, children: C || " " })
      }
    ), X = (C) => /* @__PURE__ */ e(
      Le,
      {
        value: C.value,
        onChange: C.onChange,
        onKeyDown: C.onKeyDown,
        autoFocus: C.autoFocus,
        backgroundColor: x.Default,
        borderColor: z.Focus,
        borderRadius: B.Medium,
        padding: i.XSmall,
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
          style: { display: "block", marginBlockEnd: i.XSmall },
          children: n
        }
      ),
      c ? /* @__PURE__ */ f($, { space: i.XSmall, alignBlock: "start", children: [
        /* @__PURE__ */ e(S, { style: { flex: "1 1 auto" }, children: (l ?? X)({
          value: u,
          onChange: (C) => g(C.target.value),
          onKeyDown: y,
          autoFocus: !0
        }) }),
        /* @__PURE__ */ e(
          Z,
          {
            label: "Confirm",
            onClick: b,
            color: p.Success,
            padding: i.XSmall,
            children: /* @__PURE__ */ e(pn, {})
          }
        ),
        /* @__PURE__ */ e(
          Z,
          {
            label: "Cancel",
            onClick: m,
            color: p.Error,
            padding: i.XSmall,
            children: /* @__PURE__ */ e(hn, {})
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
bn.displayName = "InlineEdit";
const gn = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "currentColor", style: { width: "14px", height: "14px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z", clipRule: "evenodd" }) }), mn = L(
  ({ trigger: t, groups: n, checked: r, onChange: l }, o) => {
    const [a, d] = N(!1), s = ne(null), c = G((u) => {
      u.key === "Escape" && d(!1);
    }, []), h = G((u) => {
      s.current && !s.current.contains(u.target) && d(!1);
    }, []);
    return _(() => {
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
            $,
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
              borderRadius: B.XLarge,
              elevation: de.Dropdown,
              padding: i.XSmall,
              style: {
                position: "absolute",
                top: "100%",
                left: 0,
                marginTop: i.XSmall,
                minWidth: "224px",
                zIndex: se.Dropdown
              },
              children: /* @__PURE__ */ e(P, { space: i.XSmall, children: n.map((u, g) => /* @__PURE__ */ f(P, { space: i.XXSmall, children: [
                u.title && /* @__PURE__ */ e(S, { paddingInline: i.MediumLarge, paddingBlock: i.XSmall, children: /* @__PURE__ */ e(
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
                      onClick: () => l(b.id, !m),
                      borderRadius: B.Medium,
                      backgroundColor: x.Transparent,
                      color: p.Default,
                      paddingBlock: i.Medium,
                      paddingInline: i.MediumLarge,
                      style: {
                        width: "100%",
                        textAlign: "left",
                        fontSize: w.XSmall,
                        display: "flex",
                        alignItems: "center",
                        gap: i.Medium
                      },
                      children: [
                        /* @__PURE__ */ e(
                          S,
                          {
                            style: {
                              width: "16px",
                              height: "16px",
                              borderRadius: B.Small,
                              border: m ? "none" : `2px solid ${z.Outline}`,
                              backgroundColor: m ? x.Brand : x.Transparent,
                              color: p.Inverse,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0
                            },
                            children: m && /* @__PURE__ */ e(gn, {})
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
                      marginBlock: i.XSmall
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
mn.displayName = "DropdownCheckboxMenu";
const fn = L(
  ({
    label: t,
    helperText: n,
    errorText: r,
    id: l,
    labelColor: o = p.Default,
    labelSize: a = w.XSmall,
    labelWeight: d = T.Medium,
    labelTextTransform: s,
    labelLetterSpacing: c,
    inputBackground: h = x.Subtle,
    inputBorderColor: u,
    inputBorderRadius: g = B.XXLarge,
    inputBorderSide: b = "all",
    inputPadding: m = i.MediumLarge,
    name: y,
    value: v,
    defaultValue: X,
    placeholder: C,
    options: O,
    disabled: M,
    required: A,
    onChange: R,
    onBlur: W
  }, F) => {
    const k = xe(), I = l ?? k, H = `${I}-helper`, Y = `${I}-error`, j = !!r, V = j ? z.Error : u, U = b === "bottom", E = /* @__PURE__ */ e(
      je,
      {
        ref: F,
        id: I,
        name: y,
        value: v,
        defaultValue: X,
        placeholder: C,
        options: O,
        disabled: M,
        required: A,
        onChange: R,
        onBlur: W,
        backgroundColor: U ? "transparent" : h,
        borderColor: U ? void 0 : V,
        borderRadius: U ? void 0 : g,
        padding: m,
        fontSize: w.XSmall,
        color: p.Default,
        style: { width: "100%" },
        "aria-describedby": j ? Y : n ? H : void 0,
        "aria-invalid": j || void 0
      }
    ), q = U ? /* @__PURE__ */ e("div", { style: {
      width: "100%",
      backgroundColor: h,
      borderBottom: `2px solid ${V}`
    }, children: E }) : E;
    return /* @__PURE__ */ f(P, { space: i.XSmall, children: [
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
      q,
      j && /* @__PURE__ */ e(D, { as: "span", size: w.XXSmall, color: p.Error, id: Y, children: r }),
      !j && n && /* @__PURE__ */ e(D, { as: "span", size: w.XXSmall, color: p.Subtle, id: H, children: n })
    ] });
  }
);
fn.displayName = "SelectField";
const yn = {
  info: { bg: x.Default, text: p.Info, accent: "#3b82f6" },
  success: { bg: x.Default, text: p.Success, accent: "#22c55e" },
  warning: { bg: x.Default, text: p.Warning, accent: "#f59e0b" },
  error: { bg: x.Default, text: p.Error, accent: "#ba1a1a" }
}, xn = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "14px", height: "14px" },
    children: /* @__PURE__ */ e("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  }
), vn = L(
  ({ open: t, onClose: n, duration: r = 5e3, variant: l = "info", icon: o, children: a }, d) => {
    if (_(() => {
      if (!t || r === 0) return;
      const c = setTimeout(n, r);
      return () => clearTimeout(c);
    }, [t, r, n]), !t) return null;
    const s = yn[l];
    return ve(
      /* @__PURE__ */ e(
        S,
        {
          ref: d,
          role: "alert",
          "aria-live": "assertive",
          backgroundColor: s.bg,
          borderRadius: B.XXLarge,
          elevation: de.Overlay,
          padding: i.Large,
          style: {
            position: "fixed",
            bottom: i.XXXLarge,
            right: i.XXXLarge,
            zIndex: se.Banner,
            minWidth: "320px",
            maxWidth: "448px",
            borderLeft: `4px solid ${s.accent}`
          },
          children: /* @__PURE__ */ f($, { space: i.MediumLarge, alignBlock: "center", spread: "space-between", children: [
            /* @__PURE__ */ f($, { space: i.MediumLarge, alignBlock: "center", grow: "fill", children: [
              o && /* @__PURE__ */ e(S, { style: { color: s.accent, flexShrink: 0 }, children: o }),
              /* @__PURE__ */ e(D, { as: "span", size: w.XSmall, weight: T.Medium, color: p.Default, children: a })
            ] }),
            /* @__PURE__ */ e(
              Z,
              {
                label: "Dismiss",
                onClick: n,
                color: p.Subtle,
                padding: i.XXSmall,
                children: /* @__PURE__ */ e(xn, {})
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
const Sn = L(
  ({ items: t, activeId: n, onSelect: r, fab: l }, o) => /* @__PURE__ */ e(
    S,
    {
      ref: o,
      as: "nav",
      style: {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: se.Sticky,
        backgroundColor: x.Default,
        borderTop: `1px solid ${z.Default}`,
        backdropFilter: "blur(20px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingInline: i.Large,
        paddingBlock: i.Medium
      },
      children: t.map((a, d) => {
        const s = a.id === n, c = Math.floor(t.length / 2), h = l && d === c;
        return /* @__PURE__ */ f(le.Fragment, { children: [
          h && /* @__PURE__ */ e(S, { style: { marginTop: `-${i.XXXLarge}` }, children: l }),
          /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: () => r == null ? void 0 : r(a.id),
              style: {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: i.XXSmall,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: i.XSmall,
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
Sn.displayName = "MobileNav";
const wn = () => /* @__PURE__ */ e(
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
), kn = L(
  ({ items: t, showLabels: n, variant: r = "dot" }, l) => {
    const o = K(n ?? !0), a = 32, d = t.filter((s) => s.status === "visited").length;
    return r === "bar" ? /* @__PURE__ */ e(
      "div",
      {
        ref: l,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": t.length,
        "aria-valuenow": d,
        style: { display: "grid", gridTemplateColumns: `repeat(${t.length}, 1fr)`, gap: i.Medium, width: "100%" },
        children: t.map((s, c) => {
          const h = s.status === "visited", u = s.status === "current";
          return t.length - 1, /* @__PURE__ */ f("div", { style: { display: "flex", flexDirection: "column", gap: i.Medium }, children: [
            /* @__PURE__ */ e("div", { style: {
              height: 6,
              borderRadius: B.Full,
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
                letterSpacing: Fe.Widest,
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
        "aria-valuemax": t.length,
        "aria-valuenow": d,
        style: { width: "100%", padding: `0 ${i.Medium}` },
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
                  borderRadius: B.Full,
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
                children: u ? /* @__PURE__ */ e(wn, {}) : c + 1
              }
            ), v = s.href ? /* @__PURE__ */ e("a", { href: s.href, style: { textDecoration: "none", color: "inherit" }, children: y }) : y;
            return /* @__PURE__ */ f(le.Fragment, { children: [
              v,
              !h && /* @__PURE__ */ e("div", { style: {
                flex: "1 1 auto",
                height: 2,
                backgroundColor: x.NeutralBold,
                position: "relative",
                marginInline: i.XSmall,
                borderRadius: B.Full,
                overflow: "hidden"
              }, children: /* @__PURE__ */ e("div", { style: {
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: `${u ? s.percentageComplete : 0}%`,
                background: ge.Brand,
                borderRadius: B.Full,
                transition: "width 400ms ease"
              } }) })
            ] }, s.id);
          }) }),
          o && /* @__PURE__ */ e("div", { style: {
            display: "flex",
            alignItems: "flex-start",
            width: "100%",
            marginTop: i.Medium
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
kn.displayName = "ProgressTracker";
const Xn = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";
function Cn(t) {
  const n = /* @__PURE__ */ f($, { space: i.XSmall, alignBlock: "center", children: [
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
function Ln(t) {
  return /* @__PURE__ */ e(
    we,
    {
      src: t.src,
      alt: t.alt,
      width: t.width ?? i.Size8,
      height: t.height ?? i.Size8,
      objectFit: "cover",
      borderRadius: B.Medium,
      style: { opacity: 0.8 }
    }
  );
}
const Mn = L(
  ({
    icon: t,
    heading: n,
    description: r,
    action: l,
    media: o,
    padding: a = i.XXLarge,
    borderRadius: d = B.XXLarge,
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
      backgroundImage: `url("${Xn}")`,
      opacity: 0.03,
      pointerEvents: "none"
    }, y = /* @__PURE__ */ f(P, { space: i.Medium, style: { flex: 1 }, children: [
      t && /* @__PURE__ */ e(S, { marginBlockEnd: i.Medium, children: t }),
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
      l && Cn(l),
      u
    ] });
    return /* @__PURE__ */ f(S, { ref: g, padding: a, style: b, children: [
      /* @__PURE__ */ e("div", { style: m, "aria-hidden": "true" }),
      o ? /* @__PURE__ */ f($, { space: i.XXLarge, alignBlock: "center", children: [
        y,
        /* @__PURE__ */ e("div", { style: { flexShrink: 0 }, children: Ln(o) })
      ] }) : y
    ] });
  }
);
Mn.displayName = "GlassCard";
const Bn = `
@keyframes bbui-pulse-down {
  0%, 100% { transform: translateY(0); opacity: 0.4 }
  50%      { transform: translateY(3px); opacity: 0.9 }
}
`, Ae = "36px", Dn = "18px", In = L(
  ({ items: t, onComplete: n, finishedLabel: r, maxHeight: l = "256px" }, o) => {
    const [a, d] = N(() => /* @__PURE__ */ new Set()), s = ne(!1), c = ne(null), h = ne([]), u = a.size >= t.length;
    return _(() => {
      u && !s.current && (s.current = !0, n == null || n());
    }, [u, n]), _(() => {
      const g = c.current;
      if (!g) return;
      const b = new IntersectionObserver(
        (m) => {
          d((y) => {
            let v = y;
            for (const X of m) {
              if (!X.isIntersecting) continue;
              const C = Number(X.target.dataset.idx);
              y.has(C) || (v === y && (v = new Set(y)), v.add(C));
            }
            return v;
          });
        },
        { root: g, threshold: 0.6 }
      );
      return h.current.forEach((m) => m && b.observe(m)), () => b.disconnect();
    }, [t.length]), /* @__PURE__ */ f("div", { ref: o, style: { width: "100%", position: "relative" }, children: [
      /* @__PURE__ */ e("style", { children: Bn }),
      /* @__PURE__ */ e("div", { ref: c, style: Tn(l, u), children: /* @__PURE__ */ e(P, { space: i.MediumLarge, children: t.map((g, b) => {
        const m = a.has(b);
        return /* @__PURE__ */ f(
          "div",
          {
            ref: (y) => h.current[b] = y,
            "data-idx": b,
            style: Rn(m),
            children: [
              /* @__PURE__ */ e(En, { item: g }),
              b < t.length - 1 && /* @__PURE__ */ e("span", { "aria-hidden": "true", style: Fn(m) })
            ]
          },
          g.id ?? b
        );
      }) }) }),
      /* @__PURE__ */ e("div", { style: On, children: u ? r : /* @__PURE__ */ e(zn, {}) })
    ] });
  }
);
In.displayName = "RevealSteps";
function En({ item: t }) {
  return /* @__PURE__ */ f("div", { style: $n, children: [
    /* @__PURE__ */ e("span", { "aria-hidden": "true", style: An, children: t.icon }),
    /* @__PURE__ */ f("span", { style: Nn, children: [
      /* @__PURE__ */ e(D, { as: "span", size: w.Small, weight: T.Medium, children: t.label }),
      t.description && /* @__PURE__ */ e(D, { as: "span", size: w.XSmall, color: p.Subtle, children: t.description })
    ] }),
    t.meta && /* @__PURE__ */ e("span", { style: Wn, children: t.meta })
  ] });
}
function zn() {
  return /* @__PURE__ */ e("div", { style: Hn, "aria-hidden": "true", children: /* @__PURE__ */ e(
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
const Ne = "linear-gradient(to bottom, black 0%, black calc(100% - 32px), transparent 100%)", Tn = (t, n) => ({
  maxHeight: t,
  overflowY: "auto",
  scrollBehavior: "smooth",
  maskImage: n ? "none" : Ne,
  WebkitMaskImage: n ? "none" : Ne,
  paddingRight: i.XSmall
}), Rn = (t) => ({
  position: "relative",
  opacity: t ? 1 : 0.15,
  transform: t ? "translateY(0)" : "translateY(8px)",
  filter: t ? "blur(0)" : "blur(2px)",
  transition: "opacity 420ms ease-out, transform 420ms cubic-bezier(0.22, 1, 0.36, 1), filter 420ms ease-out"
}), $n = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: i.MediumLarge,
  padding: i.MediumLarge,
  background: x.Subtle,
  borderRadius: B.Large,
  border: `1px solid ${z.Default}`,
  color: p.Default
}, An = {
  width: Ae,
  height: Ae,
  flexShrink: 0,
  borderRadius: B.Medium,
  background: x.Subtle,
  color: p.Default,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
}, Nn = {
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: i.XXSmall
}, Wn = {
  flexShrink: 0,
  display: "inline-flex",
  alignItems: "center"
}, Fn = (t) => ({
  position: "absolute",
  left: `calc(${i.MediumLarge} + ${Dn} - 1px)`,
  top: "100%",
  height: i.MediumLarge,
  width: "2px",
  background: z.Default,
  opacity: t ? 1 : 0,
  transition: "opacity 300ms ease-out",
  pointerEvents: "none"
}), On = {
  marginTop: i.Large,
  display: "flex",
  justifyContent: "center",
  minHeight: "20px"
}, Hn = {
  color: p.Subtle,
  animation: "bbui-pulse-down 1500ms ease-in-out infinite",
  display: "inline-flex"
}, jn = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree"
], Pn = L(
  ({ value: t, onChange: n, labels: r = jn }, l) => {
    const [o, a] = N(null);
    return /* @__PURE__ */ e("div", { ref: l, role: "radiogroup", style: Yn, children: r.map((d, s) => {
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
          style: _n(h, !h && o === c),
          children: d
        },
        c
      );
    }) });
  }
);
Pn.displayName = "LikertScale";
const Yn = {
  display: "flex",
  flexDirection: "column",
  gap: i.Medium,
  width: "100%"
}, _n = (t, n) => {
  const r = "var(--bbui-color-primary)", l = t ? "var(--bbui-bg-primary-container)" : n ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)", o = t || n ? r : "rgba(255,255,255,0.08)";
  return {
    width: "100%",
    height: "48px",
    padding: `0 ${i.MediumLarge}`,
    borderRadius: B.Large,
    border: `1px solid ${o}`,
    background: l,
    color: "#ffffff",
    fontSize: w.Small,
    fontWeight: T.Medium,
    textAlign: "center",
    cursor: "pointer",
    transition: "background 180ms ease, border-color 180ms ease",
    font: "inherit"
  };
};
function sr(t) {
  const [n, r] = N(
    () => typeof window < "u" ? window.matchMedia(t).matches : !1
  );
  return _(() => {
    const l = window.matchMedia(t), o = (a) => r(a.matches);
    return l.addEventListener("change", o), r(l.matches), () => l.removeEventListener("change", o);
  }, [t]), n;
}
function Ce() {
  return typeof window > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Vn(t) {
  typeof document > "u" || (t === "system" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", t));
}
function dr() {
  const [t, n] = N(() => typeof localStorage > "u" ? "system" : localStorage.getItem("bbui-theme") ?? "system"), [r, l] = N(
    () => t === "system" ? Ce() : t
  ), o = G((a) => {
    n(a), typeof localStorage < "u" && (a === "system" ? localStorage.removeItem("bbui-theme") : localStorage.setItem("bbui-theme", a));
  }, []);
  return _(() => {
    Vn(t), l(t === "system" ? Ce() : t);
  }, [t]), _(() => {
    if (t !== "system") return;
    const a = window.matchMedia("(prefers-color-scheme: dark)"), d = () => l(Ce());
    return a.addEventListener("change", d), () => a.removeEventListener("change", d);
  }, [t]), { theme: t, resolvedTheme: r, setTheme: o };
}
async function* Kn(t, n) {
  if (!t.body)
    throw new Error("SSE response has no readable body");
  const r = t.body.getReader(), l = new TextDecoder();
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
      o += l.decode(a, { stream: !0 });
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
async function* Un(t, n = {}) {
  const r = await fetch(t, n);
  if (!r.ok) {
    const l = await r.text().catch(() => "");
    throw new Error(
      `SSE request failed ${r.status} ${r.statusText}: ${l}`
    );
  }
  yield* Kn(r, n.signal);
}
function cr(t = {}) {
  const { onEvent: n, onComplete: r, onError: l, retain: o = !0 } = t, [a, d] = N([]), [s, c] = N(null), [h, u] = N(!1), [g, b] = N(null), m = ne(null), y = ne(!0), v = ne(n), X = ne(r), C = ne(l);
  _(() => {
    v.current = n, X.current = r, C.current = l;
  }), _(() => (y.current = !0, () => {
    var R;
    y.current = !1, (R = m.current) == null || R.abort();
  }), []);
  const O = G(() => {
    var R;
    (R = m.current) == null || R.abort(), m.current = null;
  }, []), M = G(() => {
    d([]), c(null), b(null);
  }, []), A = G(
    async (R, W = {}) => {
      var k, I, H, Y;
      (k = m.current) == null || k.abort();
      const F = new AbortController();
      m.current = F, y.current && (d([]), c(null), b(null), u(!0));
      try {
        for await (const j of Un(R, {
          ...W,
          signal: F.signal
        })) {
          if (!y.current) return;
          o && d((V) => [...V, j]), c(j), (I = v.current) == null || I.call(v, j);
        }
        y.current && ((H = X.current) == null || H.call(X));
      } catch (j) {
        if (F.signal.aborted) return;
        const V = j instanceof Error ? j : new Error(String(j));
        y.current && (b(V), (Y = C.current) == null || Y.call(C, V));
      } finally {
        y.current && m.current === F && (u(!1), m.current = null);
      }
    },
    [o]
  );
  return { events: a, lastEvent: s, isStreaming: h, error: g, start: A, abort: O, reset: M };
}
export {
  tr as AccentColor,
  pe as Anchor,
  Qt as Aside,
  yt as Avatar,
  x as BackgroundColor,
  Oe as Badge,
  Ft as Banner,
  ae as BloomColor,
  te as BloomLevel,
  z as BorderColor,
  B as BorderRadius,
  er as BorderWidth,
  S as Box,
  Be as Breakpoint,
  ie as Button,
  sn as Calendar,
  $t as Card,
  Ct as Checkbox,
  lt as Chip,
  nr as ContainerWidth,
  or as DirectionColor,
  Lt as Divider,
  Vt as Drawer,
  mn as DropdownCheckboxMenu,
  Kt as DropdownMenu,
  de as Elevation,
  dn as EmptyState,
  ir as EvaluationResultColor,
  Ze as FontFamily,
  w as FontSize,
  T as FontWeight,
  Mn as GlassCard,
  ge as Gradient,
  We as Grid,
  Ht as Header,
  Rt as HeroSection,
  Qn as Hide,
  Je as Icon,
  Z as IconButton,
  rr as IconSize,
  we as Image,
  $ as Inline,
  bn as InlineEdit,
  en as Layout,
  Fe as LetterSpacing,
  Pn as LikertScale,
  pt as LinkButton,
  st as LiquidGlass,
  Pe as Menu,
  Sn as MobileNav,
  Yt as Modal,
  jt as ModalSize,
  Tt as Navbar,
  Zt as Panel,
  ar as PersonaAccent,
  kn as ProgressTracker,
  In as RevealSteps,
  je as Select,
  fn as SelectField,
  Zn as Show,
  qt as Sidebar,
  i as Spacing,
  He as Spinner,
  P as Stack,
  Dt as Stepper,
  un as Table,
  Ot as Tabs,
  D as Text,
  St as TextArea,
  p as TextColor,
  At as TextField,
  Le as TextInput,
  vn as Toast,
  ut as Toggle,
  se as ZIndex,
  Qe as bloomColorFor,
  et as bloomLevelForScore,
  Kn as parseSSEStream,
  lr as scoreColor,
  Un as streamSSE,
  Se as useBreakpoint,
  sr as useMediaQuery,
  K as useResponsiveValue,
  cr as useSSEStream,
  dr as useTheme
};
