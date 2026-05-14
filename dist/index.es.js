import le, { useState as j, useEffect as Y, forwardRef as X, Fragment as Pe, useMemo as me, useCallback as G, useId as xe, useRef as re } from "react";
import { jsx as e, Fragment as ne, jsxs as f } from "react/jsx-runtime";
import { createPortal as Xe } from "react-dom";
const Me = {
  /** 0–639px */
  Mobile: 0,
  /** 640–1023px */
  Tablet: 640,
  /** 1024px+ */
  Desktop: 1024
};
function Be(t) {
  return t >= Me.Desktop ? "desktop" : t >= Me.Tablet ? "tablet" : "mobile";
}
function ve() {
  const [t, r] = j(
    () => typeof window < "u" ? Be(window.innerWidth) : "desktop"
  );
  return Y(() => {
    const n = () => r(Be(window.innerWidth));
    return window.addEventListener("resize", n), () => window.removeEventListener("resize", n);
  }, []), t;
}
function _e(t, r) {
  if (t == null || typeof t != "object" || !("mobile" in t)) return t;
  const n = t;
  switch (r) {
    case "desktop":
      return n.desktop ?? n.tablet ?? n.mobile;
    case "tablet":
      return n.tablet ?? n.mobile;
    default:
      return n.mobile;
  }
}
function U(t) {
  const r = ve();
  return _e(t, r);
}
const S = X(
  ({
    as: t = "div",
    padding: r,
    paddingBlock: n,
    paddingBlockStart: l,
    paddingBlockEnd: o,
    paddingInline: a,
    paddingInlineStart: d,
    paddingInlineEnd: s,
    marginBlock: c,
    marginBlockStart: h,
    marginBlockEnd: p,
    backgroundColor: g,
    borderRadius: b,
    borderColor: m,
    borderSide: y,
    borderWidth: v = "1px",
    overflow: M,
    elevation: C,
    maxWidth: F,
    minWidth: L,
    style: A,
    children: R,
    ...N
  }, W) => {
    const k = U(r), I = U(n), O = U(l), _ = U(o), H = U(a), V = U(d), K = U(s), E = U(c), q = U(h), oe = U(p), J = m ? `${v} solid ${m}` : void 0, Q = {};
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
      ...O && { paddingBlockStart: O },
      ..._ && { paddingBlockEnd: _ },
      ...H && { paddingInline: H },
      ...V && { paddingInlineStart: V },
      ...K && { paddingInlineEnd: K },
      ...E && { marginBlock: E },
      ...q && { marginBlockStart: q },
      ...oe && { marginBlockEnd: oe },
      ...g && { backgroundColor: g },
      ...b && { borderRadius: b },
      ...Q,
      ...M && { overflow: M },
      ...C && { boxShadow: C },
      ...F && { maxWidth: F, marginInline: "auto" },
      ...L !== void 0 && { minWidth: L },
      ...A
    };
    return le.createElement(
      t,
      { ...N, ref: W, style: ce },
      R
    );
  }
);
S.displayName = "Box";
const fe = ["mobile", "tablet", "desktop"];
function Ve(t, r) {
  return fe.indexOf(t) >= fe.indexOf(r);
}
function Ye(t, r) {
  return fe.indexOf(t) < fe.indexOf(r);
}
function Ur({ on: t, above: r, below: n, children: l }) {
  const o = ve();
  return t != null ? (Array.isArray(t) ? t : [t]).includes(o) ? /* @__PURE__ */ e(ne, { children: l }) : null : r != null ? Ve(o, r) ? /* @__PURE__ */ e(ne, { children: l }) : null : n != null ? Ye(o, n) ? /* @__PURE__ */ e(ne, { children: l }) : null : /* @__PURE__ */ e(ne, { children: l });
}
const ye = ["mobile", "tablet", "desktop"];
function Ke(t, r) {
  return ye.indexOf(t) >= ye.indexOf(r);
}
function Ue(t, r) {
  return ye.indexOf(t) < ye.indexOf(r);
}
function Gr({ on: t, above: r, below: n, children: l }) {
  const o = ve();
  return t != null ? (Array.isArray(t) ? t : [t]).includes(o) ? null : /* @__PURE__ */ e(ne, { children: l }) : r != null ? Ke(o, r) ? null : /* @__PURE__ */ e(ne, { children: l }) : n != null ? Ue(o, n) ? null : /* @__PURE__ */ e(ne, { children: l }) : /* @__PURE__ */ e(ne, { children: l });
}
const De = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch"
}, P = X(
  ({
    as: t = "div",
    space: r,
    alignInline: n,
    alignBlock: l,
    spread: o,
    grow: a = "hug",
    marginBlockStart: d,
    marginBlockEnd: s,
    style: c,
    children: h,
    ...p
  }, g) => {
    const m = {
      display: "flex",
      flexDirection: "column",
      gap: U(r ?? "0"),
      ...n && { alignItems: De[n] },
      ...l && !o && { justifyContent: De[l] },
      ...o && { justifyContent: o },
      ...a === "fill" && { flex: "1 1 auto" },
      ...d && { marginBlockStart: d },
      ...s && { marginBlockEnd: s },
      ...c
    };
    return le.createElement(
      t,
      { ...p, ref: g, style: m },
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
}, $ = X(
  ({
    as: t = "div",
    space: r,
    rowSpace: n,
    alignBlock: l,
    alignInline: o,
    spread: a,
    shouldWrap: d,
    separator: s,
    grow: c = "hug",
    marginBlockStart: h,
    marginBlockEnd: p,
    borderRadius: g,
    overflow: b,
    elevation: m,
    minWidth: y,
    style: v,
    children: M,
    ...C
  }, F) => {
    const L = U(r ?? "0"), A = {
      display: "flex",
      flexDirection: "row",
      columnGap: L,
      rowGap: n ?? L,
      ...l && { alignItems: Ie[l] },
      ...o && !a && { justifyContent: Ie[o] },
      ...a && { justifyContent: a },
      ...d && { flexWrap: "wrap" },
      ...c === "fill" && { flex: "1 1 auto" },
      ...h && { marginBlockStart: h },
      ...p && { marginBlockEnd: p },
      ...g && { borderRadius: g },
      ...b && { overflow: b },
      ...m && { boxShadow: m },
      ...y !== void 0 && { minWidth: y },
      ...v
    };
    let R = M;
    if (s) {
      const N = le.Children.toArray(M).filter(Boolean);
      R = N.map((W, k) => /* @__PURE__ */ f(Pe, { children: [
        W,
        k < N.length - 1 && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: s })
      ] }, k));
    }
    return le.createElement(
      t,
      { ...C, ref: F, style: A },
      R
    );
  }
);
$.displayName = "Inline";
const D = X(
  ({
    as: t = "span",
    size: r,
    weight: n,
    color: l,
    fontFamily: o,
    letterSpacing: a,
    align: d,
    textTransform: s,
    lineHeight: c,
    opacity: h,
    truncate: p,
    noWrap: g,
    noShrink: b,
    style: m,
    children: y,
    ...v
  }, M) => {
    const C = {
      ...r && { fontSize: r },
      ...n && { fontWeight: n },
      ...l && { color: l },
      ...o && { fontFamily: o },
      ...a && { letterSpacing: a },
      ...d && { textAlign: d },
      ...s && { textTransform: s },
      ...c !== void 0 && { lineHeight: c },
      ...h !== void 0 && { opacity: h },
      ...p && {
        display: "block",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        minWidth: 0
      },
      ...g && !p && { whiteSpace: "nowrap" },
      ...b && { flexShrink: 0 },
      ...m
    };
    return le.createElement(
      t,
      { ...v, ref: M, style: C },
      y
    );
  }
);
D.displayName = "Text";
function Ge(t) {
  if (t !== void 0)
    return typeof t == "number" ? `repeat(${t}, 1fr)` : t.map((r) => `${r}fr`).join(" ");
}
const Ne = X(
  ({
    as: t = "div",
    columns: r,
    gap: n,
    rowGap: l,
    marginBlockStart: o,
    marginBlockEnd: a,
    borderRadius: d,
    overflow: s,
    elevation: c,
    style: h,
    children: p,
    ...g
  }, b) => {
    const m = U(r ?? 1), y = U(n ?? "0"), v = {
      display: "grid",
      gridTemplateColumns: Ge(m),
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
      p
    );
  }
);
Ne.displayName = "Grid";
const pe = X(
  ({
    color: t,
    weight: r,
    size: n,
    backgroundColor: l,
    padding: o,
    paddingBlock: a,
    paddingBlockStart: d,
    paddingInline: s,
    borderRadius: c,
    textTransform: h,
    display: p,
    alignSelf: g,
    style: b,
    children: m,
    ...y
  }, v) => {
    const M = {
      ...t && { color: t },
      ...r && { fontWeight: r },
      ...n && { fontSize: n },
      ...l && { backgroundColor: l },
      ...o && { padding: o },
      ...a && { paddingBlock: a },
      ...d && { paddingBlockStart: d },
      ...s && { paddingInline: s },
      ...c && { borderRadius: c },
      ...h && { textTransform: h },
      ...p && { display: p },
      ...g && { alignSelf: g },
      ...b
    };
    return /* @__PURE__ */ e("a", { ref: v, style: M, ...y, children: m });
  }
);
pe.displayName = "Anchor";
const Se = X(
  ({ borderRadius: t, objectFit: r, width: n, height: l, fill: o, style: a, ...d }, s) => {
    const c = {
      display: "block",
      ...o ? { width: "100%", height: "100%" } : {
        ...n ? { width: n, flexShrink: 0 } : { width: "100%" },
        ...l && { height: l }
      },
      ...t && { borderRadius: t },
      ...r && { objectFit: r },
      ...a
    };
    return /* @__PURE__ */ e("img", { ref: s, style: c, ...d });
  }
);
Se.displayName = "Image";
const ie = X(
  ({
    backgroundColor: t,
    gradient: r,
    color: n,
    fontFamily: l,
    padding: o,
    paddingBlock: a,
    paddingInline: d,
    borderRadius: s,
    style: c,
    children: h,
    ...p
  }, g) => {
    const b = {
      border: "none",
      cursor: "pointer",
      ...r ? { background: r } : t ? { backgroundColor: t } : {},
      ...n && { color: n },
      ...l && { fontFamily: l },
      ...o && { padding: o },
      ...a && { paddingBlock: a },
      ...d && { paddingInline: d },
      ...s && { borderRadius: s },
      ...c
    };
    return /* @__PURE__ */ e("button", { ref: g, style: b, ...p, children: h });
  }
);
ie.displayName = "Button";
const Ce = X(
  ({
    backgroundColor: t,
    borderColor: r,
    borderRadius: n,
    padding: l,
    paddingBlock: o,
    paddingInline: a,
    style: d,
    ...s
  }, c) => {
    const h = {
      ...t && { backgroundColor: t },
      ...r && { border: `1px solid ${r}` },
      ...n && { borderRadius: n },
      ...l && { padding: l },
      ...o && { paddingBlock: o },
      ...a && { paddingInline: a },
      ...d
    };
    return /* @__PURE__ */ e("input", { ref: c, style: h, ...s });
  }
);
Ce.displayName = "TextInput";
const qe = X(
  ({ size: t, color: r, label: n, style: l, children: o, ...a }, d) => {
    const s = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      ...t && { width: t, height: t },
      ...r && { color: r },
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
        ...a,
        children: o
      }
    );
  }
);
qe.displayName = "Icon";
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
}, We = {
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
}, qr = {
  Thin: "1px",
  Medium: "2px",
  Thick: "4px",
  XThick: "8px"
}, Jr = {
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
}, Zr = {
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
}, Qr = {
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
function Ze(t) {
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
function Qe(t) {
  return t >= 90 ? te.Masters : t >= 80 ? te.Analyzes : t >= 60 ? te.Applies : t >= 40 ? te.Understands : t >= 20 ? te.Aware : te.NotAssessed;
}
function en(t) {
  return Ze(Qe(t));
}
const tn = {
  correct: ae.Masters,
  partial: ae.Applies,
  incorrect: "var(--bbui-color-error)",
  skipped: "var(--bbui-color-subtlest)"
}, rn = {
  up: ae.Masters,
  down: "var(--bbui-color-error)",
  unchanged: "var(--bbui-color-subtlest)"
}, nn = {
  Nova: "var(--bbui-persona-nova)",
  Maya: "var(--bbui-persona-maya)",
  Jordan: "var(--bbui-persona-jordan)",
  Custom: "var(--bbui-persona-custom)"
}, et = {
  default: { backgroundColor: x.NeutralBold, color: u.Default },
  success: { backgroundColor: x.Success, color: u.Inverse },
  warning: { backgroundColor: x.Warning, color: u.Warning },
  error: { backgroundColor: x.Error, color: u.Error },
  info: { backgroundColor: x.Info, color: u.Info },
  brand: { backgroundColor: x.Brand, color: u.Inverse },
  primaryTint: { backgroundColor: x.PrimaryTint, color: u.Brand },
  errorTint: { backgroundColor: x.ErrorTint, color: u.Error },
  warningTint: { backgroundColor: x.WarningTint, color: "#ea580c" },
  infoTint: { backgroundColor: x.InfoTint, color: "#2563eb" },
  accentTint: { backgroundColor: x.AccentTint, color: "#7c3aed" }
}, Fe = X(
  ({ variant: t = "default", uppercase: r = !1, style: n, children: l, ...o }, a) => {
    const d = et[t], s = {
      display: "inline-flex",
      alignItems: "center",
      lineHeight: 1,
      paddingBlock: i.XXSmall,
      paddingInline: r ? i.MediumLarge : i.Medium,
      borderRadius: B.Full,
      fontWeight: r ? T.Black : T.Medium,
      fontSize: r ? w.Micro : w.XXSmall,
      letterSpacing: r ? We.Wider : void 0,
      textTransform: r ? "uppercase" : void 0,
      ...d,
      ...n
    };
    return /* @__PURE__ */ e("span", { ref: a, style: s, ...o, children: l });
  }
);
Fe.displayName = "Badge";
const tt = {
  compact: { block: i.XXSmall, inline: i.Small },
  comfortable: { block: i.XSmall, inline: i.Medium }
}, rt = {
  default: { backgroundColor: x.NeutralBold, color: u.Default },
  success: { backgroundColor: x.Success, color: u.Inverse },
  warning: { backgroundColor: x.Warning, color: u.Warning },
  error: { backgroundColor: x.Error, color: u.Error },
  info: { backgroundColor: x.Info, color: u.Info },
  brand: { backgroundColor: x.Brand, color: u.Inverse },
  primaryTint: { backgroundColor: x.PrimaryTint, color: u.Brand },
  errorTint: { backgroundColor: x.ErrorTint, color: u.Error },
  warningTint: { backgroundColor: x.WarningTint, color: "#ea580c" },
  infoTint: { backgroundColor: x.InfoTint, color: "#2563eb" },
  accentTint: { backgroundColor: x.AccentTint, color: "#7c3aed" }
}, nt = X(
  ({
    selected: t,
    appearance: r = "filled",
    density: n = "compact",
    variant: l,
    fontWeight: o = T.Medium,
    fontSize: a,
    icon: d,
    showCheckWhenSelected: s = !1,
    onClick: c,
    disabled: h,
    style: p,
    children: g,
    ...b
  }, m) => {
    const y = c !== void 0 || t !== void 0, v = t === !0, M = a ?? (l ? w.XXSmall : w.XSmall), C = l ? { block: i.XXSmall, inline: i.XSmall } : tt[n];
    let F, L;
    if (l) {
      const W = rt[l];
      F = W.backgroundColor, L = W.color;
    } else
      F = v ? x.Brand : r === "outlined" ? x.Transparent : x.Subtle, L = v ? u.OnBrand : u.Default;
    const A = !l && r === "outlined" && !v ? `1px solid ${z.Outline}` : "1px solid transparent", R = {
      display: "inline-flex",
      alignItems: "center",
      gap: i.XSmall,
      paddingBlock: C.block,
      paddingInline: C.inline,
      borderRadius: B.Full,
      backgroundColor: F,
      color: L,
      border: A,
      fontFamily: "inherit",
      fontWeight: o,
      fontSize: M,
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
      ...p
    }, N = s && v ? /* @__PURE__ */ e(
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
          N,
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
nt.displayName = "Chip";
const Ee = {
  sm: "4px",
  md: "12px",
  lg: "16px",
  xl: "24px"
}, lt = {
  none: "inset 0 0 0 0 rgba(255, 255, 255, 0)",
  xs: "inset 1px 1px 1px 0 rgba(255, 255, 255, 0.3), inset -1px -1px 1px 0 rgba(255, 255, 255, 0.3)",
  sm: "inset 2px 2px 2px 0 rgba(255, 255, 255, 0.35), inset -2px -2px 2px 0 rgba(255, 255, 255, 0.35)",
  md: "inset 3px 3px 3px 0 rgba(255, 255, 255, 0.45), inset -3px -3px 3px 0 rgba(255, 255, 255, 0.45)",
  lg: "inset 4px 4px 4px 0 rgba(255, 255, 255, 0.5), inset -4px -4px 4px 0 rgba(255, 255, 255, 0.5)",
  xl: "inset 6px 6px 6px 0 rgba(255, 255, 255, 0.55), inset -6px -6px 6px 0 rgba(255, 255, 255, 0.55)"
}, it = {
  none: "0 4px 4px rgba(0, 0, 0, 0.05), 0 0 12px rgba(0, 0, 0, 0.05)",
  xs: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 16px rgba(255, 255, 255, 0.05)",
  sm: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 24px rgba(255, 255, 255, 0.1)",
  md: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 32px rgba(255, 255, 255, 0.15)",
  lg: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 40px rgba(255, 255, 255, 0.2)",
  xl: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 48px rgba(255, 255, 255, 0.25)"
};
let ot = 0;
const at = X(
  ({
    children: t,
    borderRadius: r = B.XLarge,
    blurIntensity: n = "xl",
    glowIntensity: l = "sm",
    shadowIntensity: o = "md",
    borderGradient: a,
    borderWidth: d = 1,
    width: s,
    height: c,
    style: h,
    ...p
  }, g) => {
    const b = me(() => `bbui-liquid-glass-${++ot}`, []), m = {
      position: "relative",
      borderRadius: r,
      ...s && { width: s },
      ...c && { height: c },
      ...h
    }, y = {
      position: "absolute",
      inset: 0,
      borderRadius: r,
      pointerEvents: "none"
    };
    return /* @__PURE__ */ f("div", { ref: g, style: m, ...p, children: [
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
            backdropFilter: `blur(${Ee[n]})`,
            WebkitBackdropFilter: `blur(${Ee[n]})`,
            filter: `url(#${b})`
          }
        }
      ),
      /* @__PURE__ */ e("div", { style: { ...y, zIndex: 1, boxShadow: it[l] } }),
      /* @__PURE__ */ e("div", { style: { ...y, zIndex: 2, boxShadow: lt[o] } }),
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
at.displayName = "LiquidGlass";
const st = "40px", dt = "24px", we = "20px", ze = i.XXSmall, ct = X(
  ({ checked: t, defaultChecked: r = !1, onChange: n, label: l, style: o, ...a }, d) => {
    const [s, c] = j(r), h = t !== void 0, p = h ? t : s, g = G(() => {
      const y = !p;
      h || c(y), n == null || n(y);
    }, [p, h, n]), b = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      width: st,
      height: dt,
      borderRadius: B.Full,
      backgroundColor: p ? x.Brand : x.Neutral,
      border: "none",
      cursor: "pointer",
      padding: 0,
      transition: "background-color 150ms ease",
      ...o
    }, m = {
      position: "absolute",
      width: we,
      height: we,
      borderRadius: B.Full,
      backgroundColor: x.Default,
      transition: "left 150ms ease",
      left: p ? `calc(100% - ${we} - ${ze})` : ze,
      boxShadow: "0 1px 3px rgba(0,0,0,.2)"
    };
    return /* @__PURE__ */ e(
      "button",
      {
        ref: d,
        type: "button",
        role: "switch",
        "aria-checked": p,
        "aria-label": l,
        onClick: g,
        style: b,
        ...a,
        children: /* @__PURE__ */ e("span", { style: m })
      }
    );
  }
);
ct.displayName = "Toggle";
const ut = X(
  ({
    backgroundColor: t,
    color: r,
    padding: n,
    paddingBlock: l,
    paddingInline: o,
    borderRadius: a,
    style: d,
    children: s,
    ...c
  }, h) => {
    const p = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      cursor: "pointer",
      border: "none",
      ...t && { backgroundColor: t },
      ...r && { color: r },
      ...n && { padding: n },
      ...l && { paddingBlock: l },
      ...o && { paddingInline: o },
      ...a && { borderRadius: a },
      ...d
    };
    return /* @__PURE__ */ e("a", { ref: h, style: p, ...c, children: s });
  }
);
ut.displayName = "LinkButton";
const Z = X(
  ({ label: t, size: r, color: n, backgroundColor: l, padding: o, style: a, children: d, ...s }, c) => {
    const h = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      cursor: "pointer",
      background: l ?? "none",
      ...r && { width: r, height: r },
      ...n && { color: n },
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
const pt = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64
}, ht = {
  xsmall: "10px",
  small: "12px",
  medium: "14px",
  large: "16px",
  xlarge: "24px"
}, bt = {
  xsmall: 6,
  small: 8,
  medium: 10,
  large: 12,
  xlarge: 16
}, gt = {
  online: "#22c55e",
  offline: "#bccbb9",
  busy: "#ba1a1a",
  focus: "#3b82f6"
};
function mt(t) {
  var n;
  const r = t.trim().split(/\s+/);
  return r.length >= 2 ? (r[0][0] + r[r.length - 1][0]).toUpperCase() : (((n = r[0]) == null ? void 0 : n[0]) ?? "").toUpperCase();
}
const ft = X(
  ({
    src: t,
    name: r,
    size: n = "medium",
    appearance: l = "circle",
    status: o,
    fallbackBackground: a = x.NeutralBold,
    fallbackColor: d = u.Subtle
  }, s) => {
    const [c, h] = j(!1), p = pt[n], g = t && !c, b = r ? mt(r) : "", m = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: p,
      height: p,
      borderRadius: l === "circle" ? B.Full : B.XLarge,
      overflow: "hidden",
      flexShrink: 0,
      ...g ? {} : { backgroundColor: a }
    }, y = bt[n], v = o ? {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: y,
      height: y,
      borderRadius: B.Full,
      backgroundColor: gt[o],
      border: "2px solid #ffffff",
      boxSizing: "border-box"
    } : void 0;
    return /* @__PURE__ */ f("span", { ref: s, style: m, role: "img", "aria-label": r ?? "Avatar", children: [
      g ? /* @__PURE__ */ e(
        "img",
        {
          src: t,
          alt: r ?? "",
          onError: () => h(!0),
          style: { width: "100%", height: "100%", objectFit: "cover" }
        }
      ) : /* @__PURE__ */ e(
        "span",
        {
          style: {
            fontSize: ht[n],
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
ft.displayName = "Avatar";
const yt = {
  xsmall: 16,
  small: 24,
  medium: 32,
  large: 48,
  xlarge: 64
}, xt = {
  xsmall: 2,
  small: 2,
  medium: 3,
  large: 3,
  xlarge: 4
}, Oe = X(
  ({ size: t = "medium", label: r = "Loading", color: n = u.Brand }, l) => {
    const o = xe().replace(/:/g, ""), a = yt[t], d = xt[t], s = (a - d) / 2, c = 2 * Math.PI * s;
    return /* @__PURE__ */ f(
      "span",
      {
        ref: l,
        role: "status",
        "aria-label": r,
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
                    stroke: n,
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
const vt = X(
  ({
    backgroundColor: t,
    borderColor: r,
    borderRadius: n,
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
      ...r ? { border: `1px solid ${r}` } : { border: "none" },
      ...n && { borderRadius: n },
      ...l && { padding: l },
      ...o && { paddingBlock: o },
      ...a && { paddingInline: a },
      ...d
    };
    return /* @__PURE__ */ e("textarea", { ref: c, style: h, ...s });
  }
);
vt.displayName = "TextArea";
function St(t) {
  return "options" in t;
}
const He = X(
  ({
    options: t,
    placeholder: r,
    backgroundColor: n,
    borderColor: l,
    borderRadius: o,
    padding: a,
    paddingBlock: d,
    paddingInline: s,
    fontSize: c,
    color: h,
    style: p,
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
      ...n && { backgroundColor: n },
      ...l ? { border: `1px solid ${l}` } : { border: "none" },
      ...o && { borderRadius: o },
      ...a && { padding: a },
      ...d && { paddingBlock: d },
      ...s && { paddingInline: s },
      ...c && { fontSize: c },
      ...h && { color: h },
      ...p
    };
    return /* @__PURE__ */ f("select", { ref: b, style: m, ...g, children: [
      r && /* @__PURE__ */ e("option", { value: "", disabled: !0, hidden: !0, children: r }),
      t.map(
        (y) => St(y) ? /* @__PURE__ */ e("optgroup", { label: y.label, children: y.options.map((v) => /* @__PURE__ */ e("option", { value: v.value, disabled: v.disabled, children: v.label }, v.value)) }, y.label) : /* @__PURE__ */ e("option", { value: y.value, disabled: y.disabled, children: y.label }, y.value)
      )
    ] });
  }
);
He.displayName = "Select";
const wt = {
  small: { box: "16px", font: w.XXSmall, gap: i.XSmall },
  medium: { box: "20px", font: w.XSmall, gap: i.Medium },
  large: { box: "24px", font: w.Small, gap: i.Medium }
}, kt = ({ size: t }) => /* @__PURE__ */ e(
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
), Xt = X(
  ({ label: t, size: r = "medium", checked: n, disabled: l, style: o, id: a, ...d }, s) => {
    const c = xe(), h = a ?? c, p = wt[r], g = !!n, b = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: p.box,
      height: p.box,
      borderRadius: B.Small,
      flexShrink: 0,
      border: g ? "none" : `2px solid ${z.Outline}`,
      backgroundColor: g ? l ? u.Disabled : x.Brand : x.Transparent,
      color: u.Inverse,
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
          gap: p.gap,
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
          /* @__PURE__ */ e("span", { style: b, "aria-hidden": "true", children: g && /* @__PURE__ */ e(kt, { size: `calc(${p.box} - 4px)` }) }),
          t && /* @__PURE__ */ e(
            "span",
            {
              style: {
                fontSize: p.font,
                color: l ? u.Disabled : u.Default
              },
              children: t
            }
          )
        ]
      }
    );
  }
);
Xt.displayName = "Checkbox";
const Ct = X(
  ({
    orientation: t = "horizontal",
    color: r = z.Default,
    spacing: n
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
          borderLeft: `1px solid ${r}`,
          alignSelf: "stretch",
          ...n && { marginInline: n }
        } : {
          borderTop: `1px solid ${r}`,
          width: "100%",
          ...n && { marginBlock: n }
        }
      }
    }
  )
);
Ct.displayName = "Divider";
const Lt = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z", clipRule: "evenodd" }) }), Mt = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { d: "M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" }) }), Bt = X(
  ({
    value: t,
    onChange: r,
    min: n = 0,
    max: l = 99,
    step: o = 1,
    disabled: a = !1,
    backgroundColor: d = x.Subtle,
    padding: s = i.XSmall
  }, c) => {
    const h = t - o >= n, p = t + o <= l;
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
              onClick: () => h && r(t - o),
              disabled: a || !h,
              color: u.Brand,
              padding: i.XSmall,
              children: /* @__PURE__ */ e(Lt, {})
            }
          ),
          /* @__PURE__ */ e(
            D,
            {
              as: "span",
              size: w.Medium,
              weight: T.Bold,
              color: u.Default,
              style: { minWidth: "32px", textAlign: "center" },
              children: t
            }
          ),
          /* @__PURE__ */ e(
            Z,
            {
              label: "Increase",
              onClick: () => p && r(t + o),
              disabled: a || !p,
              color: u.Brand,
              padding: i.XSmall,
              children: /* @__PURE__ */ e(Mt, {})
            }
          )
        ]
      }
    );
  }
);
Bt.displayName = "Stepper";
const Dt = () => /* @__PURE__ */ e(
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
), It = () => /* @__PURE__ */ e(
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
), Et = () => /* @__PURE__ */ e(
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
), zt = X(
  ({
    logo: t,
    navigation: r = [],
    cta: n,
    linkColor: l = u.Subtle,
    ctaBackgroundColor: o = x.Dark,
    ctaColor: a = u.Inverse,
    ctaWeight: d = 500,
    ctaBorderRadius: s = B.Full,
    paddingInline: c = i.XXXLarge,
    paddingBlock: h = i.XLarge,
    linkGap: p = i.XXLarge,
    logoGap: g = i.Size3_5,
    mobileMenuBackground: b = x.Default,
    mobileMenuBorderColor: m = z.Default,
    mobileMenuBorderRadius: y = B.Large,
    mobileBreakpoint: v = 768
  }, M) => {
    const [C, F] = j(!1), [L, A] = j(!1);
    Y(() => {
      const I = () => A(window.innerWidth < v);
      return I(), window.addEventListener("resize", I), () => window.removeEventListener("resize", I);
    }, [v]);
    const R = G((I) => {
      I.target.closest("[data-navbar-menu]") || F(!1);
    }, []);
    Y(() => (document.addEventListener("click", R), () => document.removeEventListener("click", R)), [R]);
    const N = le.isValidElement(t) ? t : /* @__PURE__ */ e(
      Se,
      {
        src: t.src,
        alt: t.alt ?? "Logo",
        style: {
          width: t.width ?? 120,
          height: t.height ?? "auto"
        }
      }
    ), W = /* @__PURE__ */ e(ne, { children: r.map((I, O) => /* @__PURE__ */ e(
      pe,
      {
        href: I.path,
        color: l,
        display: "block",
        style: { textDecoration: "none" },
        children: I.title
      },
      O
    )) }), k = n ? /* @__PURE__ */ e(
      pe,
      {
        href: n.path,
        backgroundColor: o,
        color: a,
        paddingBlock: i.Medium,
        paddingInline: i.Large,
        borderRadius: s,
        weight: d,
        display: "inline-block",
        style: { textDecoration: "none" },
        children: /* @__PURE__ */ f($, { space: i.XSmall, alignBlock: "center", children: [
          /* @__PURE__ */ e(D, { as: "span", color: a, weight: d, children: n.label }),
          n.icon ?? /* @__PURE__ */ e(Et, {})
        ] })
      }
    ) : null;
    return L ? /* @__PURE__ */ f(S, { as: "header", ref: M, "data-navbar-menu": !0, children: [
      /* @__PURE__ */ e(
        S,
        {
          as: "nav",
          paddingInline: i.Large,
          paddingBlock: h,
          children: /* @__PURE__ */ f($, { alignBlock: "center", spread: "space-between", children: [
            /* @__PURE__ */ e(S, { children: N }),
            /* @__PURE__ */ e(
              ie,
              {
                onClick: () => F(!C),
                style: {
                  background: "none",
                  padding: 0,
                  color: u.Subtle
                },
                children: C ? /* @__PURE__ */ e(It, {}) : /* @__PURE__ */ e(Dt, {})
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
            /* @__PURE__ */ e("ul", { style: { listStyle: "none", padding: 0, margin: 0 }, children: r.map((I, O) => /* @__PURE__ */ e("li", { style: { paddingBlock: i.MediumLarge }, children: /* @__PURE__ */ e(
              pe,
              {
                href: I.path,
                color: l,
                display: "block",
                style: { textDecoration: "none" },
                children: I.title
              }
            ) }, O)) }),
            k && /* @__PURE__ */ e(S, { marginBlockStart: i.XXLarge, children: k })
          ] })
        }
      )
    ] }) : /* @__PURE__ */ e(S, { as: "header", ref: M, style: { width: "100%" }, children: /* @__PURE__ */ e(
      S,
      {
        as: "nav",
        paddingInline: c,
        paddingBlock: h,
        style: { width: "100%" },
        children: /* @__PURE__ */ f($, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ e(S, { children: N }),
          /* @__PURE__ */ f(
            $,
            {
              space: p,
              alignBlock: "center",
              grow: "fill",
              style: { marginInlineStart: g },
              children: [
                /* @__PURE__ */ e(
                  $,
                  {
                    space: p,
                    alignBlock: "center",
                    grow: "fill",
                    alignInline: "center",
                    children: W
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
zt.displayName = "Navbar";
const Te = () => /* @__PURE__ */ e(
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
), Tt = X(
  ({
    title: t,
    subtitle: r,
    badge: n,
    actions: l = [],
    image: o,
    children: a,
    titleSize: d = w.XXXLarge,
    titleSizeLarge: s = w.Huge,
    titleWeight: c = T.ExtraBold,
    titleColor: h = u.Default,
    subtitleSize: p = w.Small,
    subtitleColor: g = u.Subtlest,
    primaryCtaBackground: b = x.Dark,
    primaryCtaColor: m = u.Inverse,
    primaryCtaBorderRadius: y = B.Full,
    primaryCtaWeight: v = 500,
    secondaryCtaColor: M = u.Subtle,
    secondaryCtaWeight: C = 500,
    ctaGap: F = i.MediumLarge,
    paddingBlock: L = i.Size7,
    paddingInline: A = i.XXXLarge,
    contentGap: R = i.XHuge,
    textGap: N = i.XLarge,
    textMaxWidth: W = "576px",
    gradient: k,
    breakpoint: I = 768
  }, O) => {
    const [_, H] = j(!1);
    Y(() => {
      const ee = () => H(window.innerWidth >= I);
      return ee(), window.addEventListener("resize", ee), () => window.removeEventListener("resize", ee);
    }, [I]);
    const V = (k == null ? void 0 : k.enabled) !== !1, K = (k == null ? void 0 : k.css) ?? "linear-gradient(143.6deg, rgba(192,132,252,0) 20.79%, rgba(232,121,249,0.26) 40.92%, rgba(204,171,238,0) 70.35%)", E = (k == null ? void 0 : k.height) ?? "580px", q = (n == null ? void 0 : n.borderColor) ?? z.Default, oe = n ? /* @__PURE__ */ e(
      pe,
      {
        href: n.path ?? "#",
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
              color: n.labelColor ?? u.Inverse,
              style: {
                backgroundColor: n.labelBackgroundColor ?? x.Accent,
                borderRadius: B.Full,
                padding: `${i.XSmall} ${i.MediumLarge}`
              },
              children: n.label
            }
          ),
          /* @__PURE__ */ f($, { space: i.XXSmall, alignBlock: "center", children: [
            /* @__PURE__ */ e(D, { as: "span", size: w.XSmall, children: n.text }),
            n.icon ?? /* @__PURE__ */ e(Te, {})
          ] })
        ] })
      }
    ) : null, J = l.length > 0 ? /* @__PURE__ */ e($, { space: F, alignBlock: "center", shouldWrap: !0, children: l.map((ee, be) => {
      const he = (ee.variant ?? (be === 0 ? "primary" : "secondary")) === "primary", Le = he ? v : C;
      return /* @__PURE__ */ e(
        pe,
        {
          href: ee.path,
          backgroundColor: he ? b : void 0,
          color: he ? m : M,
          paddingBlock: i.Medium,
          paddingInline: i.Large,
          borderRadius: he ? y : void 0,
          weight: Le,
          display: "inline-block",
          style: { textDecoration: "none" },
          children: /* @__PURE__ */ f($, { space: i.XSmall, alignBlock: "center", children: [
            /* @__PURE__ */ e(
              D,
              {
                as: "span",
                color: he ? m : M,
                weight: Le,
                children: ee.label
              }
            ),
            ee.icon ?? /* @__PURE__ */ e(Te, {})
          ] })
        },
        be
      );
    }) }) : null, ce = /* @__PURE__ */ f(
      P,
      {
        space: N,
        style: { maxWidth: W, flexShrink: 0 },
        children: [
          oe,
          /* @__PURE__ */ e(
            D,
            {
              as: "h1",
              size: _ ? s : d,
              weight: c,
              color: h,
              lineHeight: 1.2,
              children: t
            }
          ),
          r && /* @__PURE__ */ e(
            D,
            {
              as: "p",
              color: g,
              size: p,
              lineHeight: 1.6,
              children: r
            }
          ),
          a,
          J
        ]
      }
    ), ue = o && _ ? /* @__PURE__ */ e(S, { style: { flex: "1 1 0%", minWidth: 0 }, children: /* @__PURE__ */ e(
      Se,
      {
        src: o.src,
        alt: o.alt ?? "",
        style: { maxWidth: o.maxWidth ?? "576px" }
      }
    ) }) : null;
    return /* @__PURE__ */ f(S, { as: "section", ref: O, style: { position: "relative" }, children: [
      V && /* @__PURE__ */ e(
        "div",
        {
          "aria-hidden": "true",
          style: {
            position: "absolute",
            inset: 0,
            height: E,
            background: K,
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
          paddingBlock: L,
          children: _ ? /* @__PURE__ */ f($, { space: R, alignBlock: "center", children: [
            ce,
            ue
          ] }) : /* @__PURE__ */ e(P, { space: R, children: ce })
        }
      )
    ] });
  }
);
Tt.displayName = "HeroSection";
const Rt = X(
  ({
    padding: t = i.Large,
    backgroundColor: r = x.Default,
    borderRadius: n = B.XXLarge,
    borderColor: l = z.Default,
    elevation: o = de.Ambient,
    accentColor: a,
    accentWidth: d = "8px",
    header: s,
    footer: c,
    children: h
  }, p) => /* @__PURE__ */ e(
    S,
    {
      ref: p,
      backgroundColor: r,
      borderRadius: n,
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
Rt.displayName = "Card";
const $t = X(
  ({
    label: t,
    helperText: r,
    errorText: n,
    id: l,
    labelColor: o = u.Default,
    labelSize: a = w.XSmall,
    labelWeight: d = T.Medium,
    labelTextTransform: s,
    labelLetterSpacing: c,
    inputBackground: h = x.Default,
    inputBorderColor: p = z.Input,
    inputBorderRadius: g = B.Medium,
    inputBorderSide: b = "all",
    inputPadding: m = i.Medium,
    startAdornment: y,
    endAdornment: v,
    name: M,
    type: C,
    placeholder: F,
    value: L,
    defaultValue: A,
    disabled: R,
    readOnly: N,
    required: W,
    autoFocus: k,
    autoComplete: I,
    onChange: O,
    onBlur: _,
    onFocus: H
  }, V) => {
    const K = xe(), E = l ?? K, q = `${E}-helper`, oe = `${E}-error`, J = !!n, Q = J ? z.Error : p, ce = b === "bottom", ue = ce || !!(y || v), ee = /* @__PURE__ */ e(
      Ce,
      {
        ref: V,
        id: E,
        name: M,
        type: C,
        placeholder: F,
        value: L,
        defaultValue: A,
        disabled: R,
        readOnly: N,
        required: W,
        autoFocus: k,
        autoComplete: I,
        onChange: O,
        onBlur: _,
        onFocus: H,
        backgroundColor: ue ? "transparent" : h,
        borderColor: ue ? void 0 : Q,
        borderRadius: ue ? void 0 : g,
        padding: m,
        style: {
          width: "100%",
          ...ue ? { flex: "1 1 auto", minWidth: 0 } : {}
        },
        "aria-describedby": J ? oe : r ? q : void 0,
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
      J && /* @__PURE__ */ e(D, { as: "span", size: w.XXSmall, color: u.Error, id: oe, children: n }),
      !J && r && /* @__PURE__ */ e(D, { as: "span", size: w.XXSmall, color: u.Subtle, id: q, children: r })
    ] });
  }
);
$t.displayName = "TextField";
const At = {
  info: {
    bg: x.InfoTint,
    text: u.Info,
    border: z.Info
  },
  success: {
    bg: x.PrimaryTint,
    text: u.Success,
    border: z.Success
  },
  warning: {
    bg: x.WarningTint,
    text: u.Warning,
    border: z.Warning
  },
  error: {
    bg: x.ErrorTint,
    text: u.Error,
    border: z.Error
  }
}, Nt = () => /* @__PURE__ */ e(
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
), Wt = X(
  ({ variant: t = "info", icon: r, dismissible: n, onDismiss: l, children: o }, a) => {
    const d = At[t];
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
            r && /* @__PURE__ */ e(S, { style: { color: d.text, flexShrink: 0 }, children: r }),
            /* @__PURE__ */ e(D, { as: "span", size: w.XSmall, color: d.text, children: o })
          ] }),
          n && /* @__PURE__ */ e(
            Z,
            {
              label: "Dismiss",
              onClick: l,
              color: d.text,
              padding: i.XXSmall,
              children: /* @__PURE__ */ e(Nt, {})
            }
          )
        ] })
      }
    );
  }
);
Wt.displayName = "Banner";
const je = X(
  ({
    sections: t,
    activeId: r,
    onSelect: n,
    activeColor: l = u.Brand,
    activeBackground: o = x.Subtle
  }, a) => /* @__PURE__ */ e(P, { ref: a, as: "nav", space: i.Small, children: t.map((d, s) => /* @__PURE__ */ f(P, { space: i.XXSmall, children: [
    d.title && /* @__PURE__ */ e(S, { paddingInline: i.Medium, paddingBlock: i.XSmall, children: /* @__PURE__ */ e(
      D,
      {
        as: "span",
        size: w.XXSmall,
        weight: 600,
        color: u.Subtlest,
        textTransform: "uppercase",
        children: d.title
      }
    ) }),
    /* @__PURE__ */ e(P, { as: "ul", style: { listStyle: "none", padding: 0, margin: 0 }, children: d.items.map((c) => {
      const h = c.id === r;
      return /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(
        ie,
        {
          disabled: c.disabled,
          onClick: () => n == null ? void 0 : n(c.id),
          borderRadius: B.Medium,
          color: c.disabled ? u.Disabled : h ? l : u.Default,
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
je.displayName = "Menu";
const Ft = X(
  ({
    tabs: t,
    activeId: r,
    defaultActiveId: n,
    onChange: l,
    variant: o = "underline",
    activeColor: a = u.Brand,
    inactiveColor: d = u.Subtle,
    pillBackground: s = x.Subtle,
    activePillBackground: c = x.Default,
    panelPadding: h = i.Large
  }, p) => {
    var F;
    const [g, b] = j(
      n ?? ((F = t[0]) == null ? void 0 : F.id)
    ), m = r !== void 0, y = m ? r : g, v = (L) => {
      m || b(L), l == null || l(L);
    }, M = t.find((L) => L.id === y);
    return /* @__PURE__ */ f(S, { ref: p, children: [
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
          children: t.map((L) => {
            const A = L.id === y;
            return /* @__PURE__ */ e(
              ie,
              {
                role: "tab",
                "aria-selected": A,
                "aria-controls": `tabpanel-${L.id}`,
                id: `tab-${L.id}`,
                disabled: L.disabled,
                onClick: () => v(L.id),
                paddingBlock: i.Medium,
                paddingInline: i.XXLarge,
                borderRadius: B.XLarge,
                color: A ? u.Default : L.disabled ? u.Disabled : d,
                backgroundColor: A ? c : x.Transparent,
                style: {
                  fontWeight: A ? T.Bold : T.Medium,
                  fontSize: w.XSmall,
                  boxShadow: A ? de.Raised : "none",
                  cursor: L.disabled ? "default" : "pointer"
                },
                children: L.label
              },
              L.id
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
          children: t.map((L) => {
            const A = L.id === y;
            return /* @__PURE__ */ e(
              ie,
              {
                role: "tab",
                "aria-selected": A,
                "aria-controls": `tabpanel-${L.id}`,
                id: `tab-${L.id}`,
                disabled: L.disabled,
                onClick: () => v(L.id),
                paddingBlock: i.Medium,
                paddingInline: i.Large,
                borderRadius: B.None,
                color: A ? a : L.disabled ? u.Disabled : d,
                style: {
                  background: "none",
                  fontWeight: A ? T.Semibold : T.Regular,
                  fontSize: w.XSmall,
                  borderBottom: A ? `2px solid ${a}` : "2px solid transparent",
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
      M && /* @__PURE__ */ e(
        S,
        {
          role: "tabpanel",
          id: `tabpanel-${M.id}`,
          "aria-labelledby": `tab-${M.id}`,
          padding: h,
          children: M.content
        }
      )
    ] });
  }
);
Ft.displayName = "Tabs";
const Ot = X(
  ({
    title: t,
    subtitle: r,
    breadcrumbs: n,
    actions: l,
    titleSize: o = w.XLarge,
    titleWeight: a = T.Bold,
    titleColor: d = u.Default,
    subtitleColor: s = u.Subtle,
    breadcrumbLinkColor: c = u.Link,
    borderColor: h = z.Default,
    paddingBlock: p = i.Large
  }, g) => /* @__PURE__ */ e(
    S,
    {
      ref: g,
      as: "header",
      paddingBlock: p,
      style: {
        borderBottom: `1px solid ${h}`
      },
      children: /* @__PURE__ */ f(P, { space: i.Medium, children: [
        n && n.length > 0 && /* @__PURE__ */ e($, { space: i.XSmall, alignBlock: "center", children: n.map((b, m) => /* @__PURE__ */ f(le.Fragment, { children: [
          m > 0 && /* @__PURE__ */ e(D, { as: "span", color: u.Disabled, size: w.XSmall, children: "/" }),
          b.href ? /* @__PURE__ */ e(
            pe,
            {
              href: b.href,
              color: c,
              size: w.XSmall,
              style: { textDecoration: "none" },
              children: b.label
            }
          ) : /* @__PURE__ */ e(D, { as: "span", size: w.XSmall, color: u.Subtlest, children: b.label })
        ] }, m)) }),
        /* @__PURE__ */ f($, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ f(P, { space: i.XXSmall, children: [
            /* @__PURE__ */ e(D, { as: "h1", size: o, weight: a, color: d, children: t }),
            r && /* @__PURE__ */ e(D, { as: "p", size: w.XSmall, color: s, children: r })
          ] }),
          l && /* @__PURE__ */ e($, { space: i.Medium, alignBlock: "center", children: l })
        ] })
      ] })
    }
  )
);
Ot.displayName = "Header";
const Ht = {
  XSmall: "320px",
  Small: "416px",
  Medium: "512px",
  Large: "704px",
  XLarge: "960px",
  Full: "min(96vw, 1440px)"
}, jt = () => /* @__PURE__ */ e(
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
  ({ open: t, onClose: r, title: n, children: l, footer: o, size: a = Ht.Medium }, d) => {
    const s = G(
      (c) => {
        c.key === "Escape" && r();
      },
      [r]
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
            zIndex: se.Modal,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: x.Overlay
          },
          onClick: (c) => {
            c.target === c.currentTarget && r();
          },
          children: /* @__PURE__ */ e(
            S,
            {
              ref: d,
              role: "dialog",
              "aria-modal": "true",
              "aria-label": n,
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
                n && /* @__PURE__ */ e(
                  S,
                  {
                    padding: i.Large,
                    style: { borderBottom: `1px solid ${z.Default}` },
                    children: /* @__PURE__ */ f($, { alignBlock: "center", spread: "space-between", children: [
                      /* @__PURE__ */ e(D, { as: "h2", size: w.Large, weight: T.Semibold, color: u.Default, children: n }),
                      /* @__PURE__ */ e(Z, { label: "Close", onClick: r, color: u.Subtle, children: /* @__PURE__ */ e(jt, {}) })
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
Pt.displayName = "Modal";
const _t = X(
  ({ trigger: t, sections: r, activeId: n, onSelect: l }, o) => {
    const [a, d] = j(!1), s = re(null), c = () => d((b) => !b), h = (b) => {
      l == null || l(b), d(!1);
    }, p = G((b) => {
      b.key === "Escape" && d(!1);
    }, []), g = G((b) => {
      s.current && !s.current.contains(b.target) && d(!1);
    }, []);
    return Y(() => {
      if (a)
        return document.addEventListener("keydown", p), document.addEventListener("mousedown", g), () => {
          document.removeEventListener("keydown", p), document.removeEventListener("mousedown", g);
        };
    }, [a, p, g]), /* @__PURE__ */ f(
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
                je,
                {
                  sections: r,
                  activeId: n,
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
_t.displayName = "DropdownMenu";
const Vt = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), Yt = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), Kt = X(
  ({
    sections: t,
    activeId: r,
    onSelect: n,
    header: l,
    footer: o,
    collapsed: a = !1,
    onToggleCollapse: d,
    width: s = "256px",
    collapsedWidth: c = "64px",
    activeColor: h = u.Brand,
    activeBackground: p = x.Subtle,
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
                  color: u.Subtlest,
                  textTransform: "uppercase",
                  children: m.title
                }
              ) }),
              m.items.map((v) => {
                const M = v.id === r;
                return /* @__PURE__ */ f(
                  ie,
                  {
                    onClick: () => n == null ? void 0 : n(v.id),
                    title: a ? v.label : void 0,
                    borderRadius: B.Medium,
                    color: M ? h : u.Default,
                    backgroundColor: M ? p : x.Transparent,
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
                      !a && /* @__PURE__ */ f(ne, { children: [
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
            style: { borderTop: `1px solid ${g}` },
            children: /* @__PURE__ */ e(
              Z,
              {
                label: a ? "Expand sidebar" : "Collapse sidebar",
                onClick: d,
                color: u.Subtle,
                padding: i.XSmall,
                children: a ? /* @__PURE__ */ e(Yt, {}) : /* @__PURE__ */ e(Vt, {})
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
Kt.displayName = "Sidebar";
const Ut = () => /* @__PURE__ */ e(
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
), Gt = X(
  ({
    open: t,
    onClose: r,
    title: n,
    side: l = "right",
    mode: o = "overlay",
    width: a = "384px",
    children: d
  }, s) => {
    const c = G(
      (p) => {
        p.key === "Escape" && r();
      },
      [r]
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
          n && /* @__PURE__ */ e(
            S,
            {
              padding: i.Large,
              style: { borderBottom: `1px solid ${z.Default}` },
              children: /* @__PURE__ */ f($, { alignBlock: "center", spread: "space-between", children: [
                /* @__PURE__ */ e(D, { as: "h2", size: w.Large, weight: T.Semibold, color: u.Default, children: n }),
                /* @__PURE__ */ e(Z, { label: "Close panel", onClick: r, color: u.Subtle, children: /* @__PURE__ */ e(Ut, {}) })
              ] })
            }
          ),
          /* @__PURE__ */ e(S, { padding: i.Large, overflow: "auto", style: { flex: "1 1 auto" }, children: d })
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
            zIndex: se.Modal,
            backgroundColor: x.Overlay
          },
          onClick: (p) => {
            p.target === p.currentTarget && r();
          },
          children: h
        }
      ),
      document.body
    ) : h;
  }
);
Gt.displayName = "Panel";
const qt = X(
  ({
    padding: t = i.Large,
    color: r = u.Subtle,
    borderColor: n = z.Default,
    children: l
  }, o) => /* @__PURE__ */ e(
    S,
    {
      ref: o,
      as: "aside",
      padding: t,
      style: {
        borderLeft: `3px solid ${n}`,
        color: r
      },
      children: l
    }
  )
);
qt.displayName = "Aside";
const Jt = X(
  ({
    topNav: t,
    sideNav: r,
    mobileNav: n,
    backgroundColor: l = x.Surface,
    children: o
  }, a) => {
    const s = ve() === "mobile";
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
          !s && r,
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
                      paddingBlockEnd: s && n ? i.XXHuge : void 0
                    },
                    children: o
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
Jt.displayName = "Layout";
const Zt = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
function Re(t, r) {
  return t.getFullYear() === r.getFullYear() && t.getMonth() === r.getMonth() && t.getDate() === r.getDate();
}
function Qt(t, r) {
  return new Date(t, r + 1, 0).getDate();
}
function er(t, r) {
  return new Date(t, r, 1).getDay();
}
const tr = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), rr = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), nr = [
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
], lr = X(
  ({
    value: t,
    defaultValue: r,
    onChange: n,
    min: l,
    max: o,
    selectedColor: a = u.Inverse,
    selectedBackground: d = x.Brand
  }, s) => {
    const c = /* @__PURE__ */ new Date(), [h, p] = j(r), g = t !== void 0, b = g ? t : h, [m, y] = j(
      (b ?? c).getFullYear()
    ), [v, M] = j(
      (b ?? c).getMonth()
    ), C = me(() => Qt(m, v), [m, v]), F = me(() => er(m, v), [m, v]), L = () => {
      v === 0 ? (M(11), y((k) => k - 1)) : M((k) => k - 1);
    }, A = () => {
      v === 11 ? (M(0), y((k) => k + 1)) : M((k) => k + 1);
    }, R = (k) => {
      const I = new Date(m, v, k);
      g || p(I), n == null || n(I);
    }, N = (k) => {
      const I = new Date(m, v, k);
      return !!(l && I < new Date(l.getFullYear(), l.getMonth(), l.getDate()) || o && I > new Date(o.getFullYear(), o.getMonth(), o.getDate()));
    }, W = [];
    for (let k = 0; k < F; k++)
      W.push(/* @__PURE__ */ e(S, {}, `empty-${k}`));
    for (let k = 1; k <= C; k++) {
      const I = new Date(m, v, k), O = b ? Re(I, b) : !1, _ = Re(I, c), H = N(k);
      W.push(
        /* @__PURE__ */ e(
          ie,
          {
            disabled: H,
            onClick: () => R(k),
            borderRadius: B.Medium,
            style: {
              width: "36px",
              height: "36px",
              padding: 0,
              fontSize: w.XSmall,
              fontWeight: O ? T.Semibold : T.Regular,
              backgroundColor: O ? d : "transparent",
              color: O ? a : H ? u.Disabled : u.Default,
              border: _ && !O ? `1px solid ${z.Default}` : "none",
              cursor: H ? "default" : "pointer"
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
                /* @__PURE__ */ e(Z, { label: "Previous month", onClick: L, color: u.Subtle, padding: i.XSmall, children: /* @__PURE__ */ e(tr, {}) }),
                /* @__PURE__ */ f(D, { as: "span", size: w.XSmall, weight: T.Semibold, color: u.Default, children: [
                  nr[v],
                  " ",
                  m
                ] }),
                /* @__PURE__ */ e(Z, { label: "Next month", onClick: A, color: u.Subtle, padding: i.XSmall, children: /* @__PURE__ */ e(rr, {}) })
              ]
            }
          ),
          /* @__PURE__ */ f(Ne, { columns: 7, gap: i.XXSmall, children: [
            Zt.map((k) => /* @__PURE__ */ e(
              D,
              {
                as: "span",
                size: w.XXSmall,
                weight: T.Medium,
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
lr.displayName = "Calendar";
const ir = X(
  ({ header: t, description: r, image: n, primaryAction: l, secondaryAction: o }, a) => /* @__PURE__ */ f(
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
        n && /* @__PURE__ */ e("div", { children: n }),
        /* @__PURE__ */ f(P, { space: i.Medium, alignInline: "center", children: [
          /* @__PURE__ */ e(
            D,
            {
              as: "h3",
              fontFamily: Je.Display,
              size: w.XLarge,
              weight: T.Bold,
              color: u.Default,
              children: t
            }
          ),
          r && /* @__PURE__ */ e(D, { as: "p", size: w.XSmall, color: u.Subtle, lineHeight: 1.6, children: r })
        ] }),
        (l || o) && /* @__PURE__ */ f($, { space: i.Medium, alignBlock: "center", children: [
          l,
          o
        ] })
      ]
    }
  )
);
ir.displayName = "EmptyState";
const or = ({ order: t }) => /* @__PURE__ */ e(
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
    children: t === "ASC" ? /* @__PURE__ */ e("path", { d: "M8 3l4 5H4l4-5z" }) : t === "DESC" ? /* @__PURE__ */ e("path", { d: "M8 13l4-5H4l4 5z" }) : /* @__PURE__ */ f(ne, { children: [
      /* @__PURE__ */ e("path", { d: "M8 3l3 4H5l3-4z" }),
      /* @__PURE__ */ e("path", { d: "M8 13l3-4H5l3 4z" })
    ] })
  }
), ar = X(
  ({
    caption: t,
    head: r,
    rows: n,
    rowsPerPage: l,
    page: o,
    defaultPage: a = 1,
    sortKey: d,
    sortOrder: s,
    defaultSortKey: c,
    defaultSortOrder: h = "ASC",
    onSort: p,
    onSetPage: g,
    isLoading: b = !1,
    isFixedSize: m = !1
  }, y) => {
    const [v, M] = j(a), [C, F] = j(c), [L, A] = j(h), R = o !== void 0, N = R ? o : v, W = d !== void 0, k = W ? d : C, I = W ? s ?? "ASC" : L, O = l ? Math.max(1, Math.ceil(n.length / l)) : 1, _ = me(() => {
      if (!l) return n;
      const E = (N - 1) * l;
      return n.slice(E, E + l);
    }, [n, l, N]), H = (E) => {
      const q = k === E && I === "ASC" ? "DESC" : "ASC";
      W || (F(E), A(q)), p == null || p(E, q);
    }, V = (E) => {
      R || M(E), g == null || g(E);
    }, K = {
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
                  color: u.Default
                },
                children: t
              }
            ),
            /* @__PURE__ */ e("thead", { children: /* @__PURE__ */ e("tr", { children: r.map((E) => /* @__PURE__ */ e(
              "th",
              {
                style: {
                  ...K,
                  textAlign: "left",
                  fontWeight: T.Semibold,
                  fontSize: w.XXSmall,
                  color: u.Subtle,
                  borderBottom: `1px solid ${z.Default}`,
                  whiteSpace: "nowrap",
                  cursor: E.isSortable ? "pointer" : "default",
                  userSelect: E.isSortable ? "none" : void 0,
                  ...E.width ? { width: E.width } : {}
                },
                onClick: E.isSortable ? () => H(E.key) : void 0,
                children: /* @__PURE__ */ f("span", { style: { display: "inline-flex", alignItems: "center" }, children: [
                  E.label,
                  E.isSortable && /* @__PURE__ */ e(
                    or,
                    {
                      order: k === E.key ? I : void 0
                    }
                  )
                ] })
              },
              E.key
            )) }) }),
            /* @__PURE__ */ f("tbody", { children: [
              _.map((E) => /* @__PURE__ */ e(
                "tr",
                {
                  onClick: E.onClick,
                  style: {
                    cursor: E.onClick ? "pointer" : "default",
                    borderBottom: `1px solid ${z.Default}`
                  },
                  children: E.cells.map((q, oe) => /* @__PURE__ */ e("td", { style: { ...K, color: u.Default }, children: q }, oe))
                },
                E.key
              )),
              _.length === 0 && /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e(
                "td",
                {
                  colSpan: r.length,
                  style: {
                    ...K,
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
      l && O > 1 && /* @__PURE__ */ f(
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
                disabled: N <= 1,
                onClick: () => V(N - 1),
                paddingBlock: i.XSmall,
                paddingInline: i.Medium,
                borderRadius: B.Large,
                backgroundColor: x.Default,
                color: u.Default,
                style: { fontSize: w.XXSmall, border: `1px solid ${z.Default}` },
                children: "Previous"
              }
            ),
            /* @__PURE__ */ f(D, { size: w.XXSmall, color: u.Subtle, children: [
              "Page ",
              N,
              " of ",
              O
            ] }),
            /* @__PURE__ */ e(
              ie,
              {
                disabled: N >= O,
                onClick: () => V(N + 1),
                paddingBlock: i.XSmall,
                paddingInline: i.Medium,
                borderRadius: B.Large,
                backgroundColor: x.Default,
                color: u.Default,
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
ar.displayName = "Table";
const sr = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z", clipRule: "evenodd" }) }), dr = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" }) }), cr = X(
  ({
    defaultValue: t,
    label: r,
    editButtonLabel: n,
    editView: l,
    readView: o,
    onConfirm: a,
    onCancel: d
  }, s) => {
    const [c, h] = j(!1), [p, g] = j(t);
    re(null), Y(() => {
      g(t);
    }, [t]);
    const b = G(() => {
      h(!1), a(p);
    }, [p, a]), m = G(() => {
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
        children: /* @__PURE__ */ e(D, { as: "span", size: w.Small, color: u.Default, children: C || " " })
      }
    ), M = (C) => /* @__PURE__ */ e(
      Ce,
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
      r && /* @__PURE__ */ e(
        D,
        {
          as: "label",
          size: w.XXSmall,
          weight: 500,
          color: u.Subtle,
          style: { display: "block", marginBlockEnd: i.XSmall },
          children: r
        }
      ),
      c ? /* @__PURE__ */ f($, { space: i.XSmall, alignBlock: "start", children: [
        /* @__PURE__ */ e(S, { style: { flex: "1 1 auto" }, children: (l ?? M)({
          value: p,
          onChange: (C) => g(C.target.value),
          onKeyDown: y,
          autoFocus: !0
        }) }),
        /* @__PURE__ */ e(
          Z,
          {
            label: "Confirm",
            onClick: b,
            color: u.Success,
            padding: i.XSmall,
            children: /* @__PURE__ */ e(sr, {})
          }
        ),
        /* @__PURE__ */ e(
          Z,
          {
            label: "Cancel",
            onClick: m,
            color: u.Error,
            padding: i.XSmall,
            children: /* @__PURE__ */ e(dr, {})
          }
        )
      ] }) : /* @__PURE__ */ e(
        S,
        {
          onClick: () => h(!0),
          role: "button",
          tabIndex: 0,
          "aria-label": n ?? t ?? "Edit",
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
cr.displayName = "InlineEdit";
const ur = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "currentColor", style: { width: "14px", height: "14px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z", clipRule: "evenodd" }) }), pr = X(
  ({ trigger: t, groups: r, checked: n, onChange: l }, o) => {
    const [a, d] = j(!1), s = re(null), c = G((p) => {
      p.key === "Escape" && d(!1);
    }, []), h = G((p) => {
      s.current && !s.current.contains(p.target) && d(!1);
    }, []);
    return Y(() => {
      if (a)
        return document.addEventListener("keydown", c), document.addEventListener("mousedown", h), () => {
          document.removeEventListener("keydown", c), document.removeEventListener("mousedown", h);
        };
    }, [a, c, h]), /* @__PURE__ */ f(
      S,
      {
        ref: (p) => {
          s.current = p, typeof o == "function" ? o(p) : o && (o.current = p);
        },
        style: { position: "relative", display: "inline-block" },
        children: [
          /* @__PURE__ */ e(
            $,
            {
              style: { cursor: "pointer" },
              onClick: () => d((p) => !p),
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
              children: /* @__PURE__ */ e(P, { space: i.XSmall, children: r.map((p, g) => /* @__PURE__ */ f(P, { space: i.XXSmall, children: [
                p.title && /* @__PURE__ */ e(S, { paddingInline: i.MediumLarge, paddingBlock: i.XSmall, children: /* @__PURE__ */ e(
                  D,
                  {
                    as: "span",
                    size: w.XXSmall,
                    weight: T.Semibold,
                    color: u.Subtlest,
                    textTransform: "uppercase",
                    children: p.title
                  }
                ) }),
                p.items.map((b) => {
                  const m = !!n[b.id];
                  return /* @__PURE__ */ f(
                    ie,
                    {
                      onClick: () => l(b.id, !m),
                      borderRadius: B.Medium,
                      backgroundColor: x.Transparent,
                      color: u.Default,
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
                              color: u.Inverse,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0
                            },
                            children: m && /* @__PURE__ */ e(ur, {})
                          }
                        ),
                        /* @__PURE__ */ e(D, { as: "span", size: w.XSmall, style: { color: "inherit" }, children: b.label })
                      ]
                    },
                    b.id
                  );
                }),
                g < r.length - 1 && /* @__PURE__ */ e(
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
pr.displayName = "DropdownCheckboxMenu";
const hr = X(
  ({
    label: t,
    helperText: r,
    errorText: n,
    id: l,
    labelColor: o = u.Default,
    labelSize: a = w.XSmall,
    labelWeight: d = T.Medium,
    labelTextTransform: s,
    labelLetterSpacing: c,
    inputBackground: h = x.Subtle,
    inputBorderColor: p,
    inputBorderRadius: g = B.XXLarge,
    inputBorderSide: b = "all",
    inputPadding: m = i.MediumLarge,
    name: y,
    value: v,
    defaultValue: M,
    placeholder: C,
    options: F,
    disabled: L,
    required: A,
    onChange: R,
    onBlur: N
  }, W) => {
    const k = xe(), I = l ?? k, O = `${I}-helper`, _ = `${I}-error`, H = !!n, V = H ? z.Error : p, K = b === "bottom", E = /* @__PURE__ */ e(
      He,
      {
        ref: W,
        id: I,
        name: y,
        value: v,
        defaultValue: M,
        placeholder: C,
        options: F,
        disabled: L,
        required: A,
        onChange: R,
        onBlur: N,
        backgroundColor: K ? "transparent" : h,
        borderColor: K ? void 0 : V,
        borderRadius: K ? void 0 : g,
        padding: m,
        fontSize: w.XSmall,
        color: u.Default,
        style: { width: "100%" },
        "aria-describedby": H ? _ : r ? O : void 0,
        "aria-invalid": H || void 0
      }
    ), q = K ? /* @__PURE__ */ e("div", { style: {
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
      H && /* @__PURE__ */ e(D, { as: "span", size: w.XXSmall, color: u.Error, id: _, children: n }),
      !H && r && /* @__PURE__ */ e(D, { as: "span", size: w.XXSmall, color: u.Subtle, id: O, children: r })
    ] });
  }
);
hr.displayName = "SelectField";
const br = {
  info: { bg: x.Default, text: u.Info, accent: "#3b82f6" },
  success: { bg: x.Default, text: u.Success, accent: "#22c55e" },
  warning: { bg: x.Default, text: u.Warning, accent: "#f59e0b" },
  error: { bg: x.Default, text: u.Error, accent: "#ba1a1a" }
}, gr = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "14px", height: "14px" },
    children: /* @__PURE__ */ e("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  }
), mr = X(
  ({ open: t, onClose: r, duration: n = 5e3, variant: l = "info", icon: o, children: a }, d) => {
    if (Y(() => {
      if (!t || n === 0) return;
      const c = setTimeout(r, n);
      return () => clearTimeout(c);
    }, [t, n, r]), !t) return null;
    const s = br[l];
    return Xe(
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
              /* @__PURE__ */ e(D, { as: "span", size: w.XSmall, weight: T.Medium, color: u.Default, children: a })
            ] }),
            /* @__PURE__ */ e(
              Z,
              {
                label: "Dismiss",
                onClick: r,
                color: u.Subtle,
                padding: i.XXSmall,
                children: /* @__PURE__ */ e(gr, {})
              }
            )
          ] })
        }
      ),
      document.body
    );
  }
);
mr.displayName = "Toast";
const fr = X(
  ({ items: t, activeId: r, onSelect: n, fab: l }, o) => /* @__PURE__ */ e(
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
        const s = a.id === r, c = Math.floor(t.length / 2), h = l && d === c;
        return /* @__PURE__ */ f(le.Fragment, { children: [
          h && /* @__PURE__ */ e(S, { style: { marginTop: `-${i.XXXLarge}` }, children: l }),
          /* @__PURE__ */ f(
            "button",
            {
              type: "button",
              onClick: () => n == null ? void 0 : n(a.id),
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
                /* @__PURE__ */ e(S, { style: { width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center" }, children: a.icon }),
                /* @__PURE__ */ e(
                  D,
                  {
                    as: "span",
                    size: w.Micro,
                    weight: T.Bold,
                    color: s ? u.Brand : u.Disabled,
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
fr.displayName = "MobileNav";
const yr = () => /* @__PURE__ */ e(
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
), xr = X(
  ({ items: t, showLabels: r, variant: n = "dot" }, l) => {
    const o = U(r ?? !0), a = 32, d = t.filter((s) => s.status === "visited").length;
    return n === "bar" ? /* @__PURE__ */ e(
      "div",
      {
        ref: l,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": t.length,
        "aria-valuenow": d,
        style: { display: "grid", gridTemplateColumns: `repeat(${t.length}, 1fr)`, gap: i.Medium, width: "100%" },
        children: t.map((s, c) => {
          const h = s.status === "visited", p = s.status === "current";
          return t.length - 1, /* @__PURE__ */ f("div", { style: { display: "flex", flexDirection: "column", gap: i.Medium }, children: [
            /* @__PURE__ */ e("div", { style: {
              height: 6,
              borderRadius: B.Full,
              background: p ? ge.Brand : "none",
              backgroundColor: p ? void 0 : h ? x.PrimaryContainer : x.NeutralBold,
              opacity: h ? 0.4 : 1,
              boxShadow: p ? "0 0 8px var(--bbui-color-primary), 0 0 20px var(--bbui-color-primary)" : "none",
              transition: "all 400ms ease",
              cursor: s.onClick ? "pointer" : "default"
            }, onClick: s.onClick }),
            o && /* @__PURE__ */ e(
              D,
              {
                as: "p",
                size: w.Micro,
                weight: p ? T.Bold : T.Medium,
                color: p ? u.Brand : h ? u.Subtle : u.Disabled,
                textTransform: "uppercase",
                letterSpacing: We.Widest,
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
            const h = c === t.length - 1, p = s.status === "visited", g = s.status === "current", b = s.status === "disabled", m = p ? ge.Brand : g ? "transparent" : x.NeutralBold, y = /* @__PURE__ */ e(
              "div",
              {
                style: {
                  width: a,
                  height: a,
                  borderRadius: B.Full,
                  background: p ? ge.Brand : m,
                  backgroundColor: p ? void 0 : m,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: p ? u.OnBrand : g ? u.Brand : b ? u.Disabled : u.Subtle,
                  fontSize: w.XSmall,
                  fontWeight: T.Bold,
                  border: g ? `2px solid ${u.Brand}` : "none",
                  cursor: s.onClick || s.href ? "pointer" : "default",
                  transition: "all 300ms ease"
                },
                onClick: s.onClick,
                children: p ? /* @__PURE__ */ e(yr, {}) : c + 1
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
                width: `${p ? s.percentageComplete : 0}%`,
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
            const h = c === t.length - 1, p = s.status === "visited", g = s.status === "current", b = s.status === "disabled", m = p ? u.Brand : g ? u.Default : b ? u.Disabled : u.Subtle;
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
xr.displayName = "ProgressTracker";
const vr = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";
function Sr(t) {
  const r = /* @__PURE__ */ f($, { space: i.XSmall, alignBlock: "center", children: [
    /* @__PURE__ */ e(
      D,
      {
        size: w.XSmall,
        weight: T.Semibold,
        color: u.Brand,
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
      children: r
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
      children: r
    }
  );
}
function wr(t) {
  return /* @__PURE__ */ e(
    Se,
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
const kr = X(
  ({
    icon: t,
    heading: r,
    description: n,
    action: l,
    media: o,
    padding: a = i.XXLarge,
    borderRadius: d = B.XXLarge,
    blur: s = 20,
    backgroundOpacity: c = 0.1,
    borderOpacity: h = 0.12,
    children: p
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
      backgroundImage: `url("${vr}")`,
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
          color: u.Default,
          children: r
        }
      ),
      n && /* @__PURE__ */ e(
        D,
        {
          size: w.XSmall,
          color: u.OnSurfaceVariant,
          children: n
        }
      ),
      l && Sr(l),
      p
    ] });
    return /* @__PURE__ */ f(S, { ref: g, padding: a, style: b, children: [
      /* @__PURE__ */ e("div", { style: m, "aria-hidden": "true" }),
      o ? /* @__PURE__ */ f($, { space: i.XXLarge, alignBlock: "center", children: [
        y,
        /* @__PURE__ */ e("div", { style: { flexShrink: 0 }, children: wr(o) })
      ] }) : y
    ] });
  }
);
kr.displayName = "GlassCard";
const Xr = `
@keyframes bbui-pulse-down {
  0%, 100% { transform: translateY(0); opacity: 0.4 }
  50%      { transform: translateY(3px); opacity: 0.9 }
}
`, $e = "36px", Cr = "18px", Lr = X(
  ({ items: t, onComplete: r, finishedLabel: n, maxHeight: l = "256px" }, o) => {
    const [a, d] = j(() => /* @__PURE__ */ new Set()), s = re(!1), c = re(null), h = re([]), p = a.size >= t.length;
    return Y(() => {
      p && !s.current && (s.current = !0, r == null || r());
    }, [p, r]), Y(() => {
      const g = c.current;
      if (!g) return;
      const b = new IntersectionObserver(
        (m) => {
          d((y) => {
            let v = y;
            for (const M of m) {
              if (!M.isIntersecting) continue;
              const C = Number(M.target.dataset.idx);
              y.has(C) || (v === y && (v = new Set(y)), v.add(C));
            }
            return v;
          });
        },
        { root: g, threshold: 0.6 }
      );
      return h.current.forEach((m) => m && b.observe(m)), () => b.disconnect();
    }, [t.length]), /* @__PURE__ */ f("div", { ref: o, style: { width: "100%", position: "relative" }, children: [
      /* @__PURE__ */ e("style", { children: Xr }),
      /* @__PURE__ */ e("div", { ref: c, style: Dr(l, p), children: /* @__PURE__ */ e(P, { space: i.MediumLarge, children: t.map((g, b) => {
        const m = a.has(b);
        return /* @__PURE__ */ f(
          "div",
          {
            ref: (y) => h.current[b] = y,
            "data-idx": b,
            style: Ir(m),
            children: [
              /* @__PURE__ */ e(Mr, { item: g }),
              b < t.length - 1 && /* @__PURE__ */ e("span", { "aria-hidden": "true", style: $r(m) })
            ]
          },
          g.id ?? b
        );
      }) }) }),
      /* @__PURE__ */ e("div", { style: Ar, children: p ? n : /* @__PURE__ */ e(Br, {}) })
    ] });
  }
);
Lr.displayName = "RevealSteps";
function Mr({ item: t }) {
  return /* @__PURE__ */ f("div", { style: Er, children: [
    /* @__PURE__ */ e("span", { "aria-hidden": "true", style: zr, children: t.icon }),
    /* @__PURE__ */ f("span", { style: Tr, children: [
      /* @__PURE__ */ e(D, { as: "span", size: w.Small, weight: T.Medium, children: t.label }),
      t.description && /* @__PURE__ */ e(D, { as: "span", size: w.XSmall, color: u.Subtle, children: t.description })
    ] }),
    t.meta && /* @__PURE__ */ e("span", { style: Rr, children: t.meta })
  ] });
}
function Br() {
  return /* @__PURE__ */ e("div", { style: Nr, "aria-hidden": "true", children: /* @__PURE__ */ e(
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
const Ae = "linear-gradient(to bottom, black 0%, black calc(100% - 32px), transparent 100%)", Dr = (t, r) => ({
  maxHeight: t,
  overflowY: "auto",
  scrollBehavior: "smooth",
  maskImage: r ? "none" : Ae,
  WebkitMaskImage: r ? "none" : Ae,
  paddingRight: i.XSmall
}), Ir = (t) => ({
  position: "relative",
  opacity: t ? 1 : 0.15,
  transform: t ? "translateY(0)" : "translateY(8px)",
  filter: t ? "blur(0)" : "blur(2px)",
  transition: "opacity 420ms ease-out, transform 420ms cubic-bezier(0.22, 1, 0.36, 1), filter 420ms ease-out"
}), Er = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: i.MediumLarge,
  padding: i.MediumLarge,
  background: x.Subtle,
  borderRadius: B.Large,
  border: `1px solid ${z.Default}`,
  color: u.Default
}, zr = {
  width: $e,
  height: $e,
  flexShrink: 0,
  borderRadius: B.Medium,
  background: x.Subtle,
  color: u.Default,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
}, Tr = {
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: i.XXSmall
}, Rr = {
  flexShrink: 0,
  display: "inline-flex",
  alignItems: "center"
}, $r = (t) => ({
  position: "absolute",
  left: `calc(${i.MediumLarge} + ${Cr} - 1px)`,
  top: "100%",
  height: i.MediumLarge,
  width: "2px",
  background: z.Default,
  opacity: t ? 1 : 0,
  transition: "opacity 300ms ease-out",
  pointerEvents: "none"
}), Ar = {
  marginTop: i.Large,
  display: "flex",
  justifyContent: "center",
  minHeight: "20px"
}, Nr = {
  color: u.Subtle,
  animation: "bbui-pulse-down 1500ms ease-in-out infinite",
  display: "inline-flex"
}, Wr = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree"
], Fr = X(
  ({ value: t, onChange: r, labels: n = Wr }, l) => {
    const [o, a] = j(null);
    return /* @__PURE__ */ e("div", { ref: l, role: "radiogroup", style: Or, children: n.map((d, s) => {
      const c = s + 1, h = t === c;
      return /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          role: "radio",
          "aria-checked": h,
          "aria-label": d,
          onClick: () => r(c),
          onMouseEnter: () => a(c),
          onMouseLeave: () => a(null),
          onFocus: () => a(c),
          onBlur: () => a(null),
          style: Hr(h, !h && o === c),
          children: d
        },
        c
      );
    }) });
  }
);
Fr.displayName = "LikertScale";
const Or = {
  display: "flex",
  flexDirection: "column",
  gap: i.Medium,
  width: "100%"
}, Hr = (t, r) => {
  const n = "var(--bbui-color-primary)", l = t ? "var(--bbui-bg-primary-container)" : r ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)", o = t || r ? n : "rgba(255,255,255,0.08)";
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
function ln(t) {
  const [r, n] = j(
    () => typeof window < "u" ? window.matchMedia(t).matches : !1
  );
  return Y(() => {
    const l = window.matchMedia(t), o = (a) => n(a.matches);
    return l.addEventListener("change", o), n(l.matches), () => l.removeEventListener("change", o);
  }, [t]), r;
}
function ke() {
  return typeof window > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function jr(t) {
  typeof document > "u" || (t === "system" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", t));
}
function on() {
  const [t, r] = j(() => typeof localStorage > "u" ? "system" : localStorage.getItem("bbui-theme") ?? "system"), [n, l] = j(
    () => t === "system" ? ke() : t
  ), o = G((a) => {
    r(a), typeof localStorage < "u" && (a === "system" ? localStorage.removeItem("bbui-theme") : localStorage.setItem("bbui-theme", a));
  }, []);
  return Y(() => {
    jr(t), l(t === "system" ? ke() : t);
  }, [t]), Y(() => {
    if (t !== "system") return;
    const a = window.matchMedia("(prefers-color-scheme: dark)"), d = () => l(ke());
    return a.addEventListener("change", d), () => a.removeEventListener("change", d);
  }, [t]), { theme: t, resolvedTheme: n, setTheme: o };
}
async function* Pr(t, r) {
  if (!t.body)
    throw new Error("SSE response has no readable body");
  const n = t.body.getReader(), l = new TextDecoder();
  let o = "";
  try {
    for (; ; ) {
      if (r != null && r.aborted) {
        await n.cancel().catch(() => {
        });
        return;
      }
      const { value: a, done: d } = await n.read();
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
        const p = h.join(`
`);
        try {
          yield JSON.parse(p);
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
async function* _r(t, r = {}) {
  const n = await fetch(t, r);
  if (!n.ok) {
    const l = await n.text().catch(() => "");
    throw new Error(
      `SSE request failed ${n.status} ${n.statusText}: ${l}`
    );
  }
  yield* Pr(n, r.signal);
}
function an(t = {}) {
  const { onEvent: r, onComplete: n, onError: l, retain: o = !0 } = t, [a, d] = j([]), [s, c] = j(null), [h, p] = j(!1), [g, b] = j(null), m = re(null), y = re(!0), v = re(r), M = re(n), C = re(l);
  Y(() => {
    v.current = r, M.current = n, C.current = l;
  }), Y(() => (y.current = !0, () => {
    var R;
    y.current = !1, (R = m.current) == null || R.abort();
  }), []);
  const F = G(() => {
    var R;
    (R = m.current) == null || R.abort(), m.current = null;
  }, []), L = G(() => {
    d([]), c(null), b(null);
  }, []), A = G(
    async (R, N = {}) => {
      var k, I, O, _;
      (k = m.current) == null || k.abort();
      const W = new AbortController();
      m.current = W, y.current && (d([]), c(null), b(null), p(!0));
      try {
        for await (const H of _r(R, {
          ...N,
          signal: W.signal
        })) {
          if (!y.current) return;
          o && d((V) => [...V, H]), c(H), (I = v.current) == null || I.call(v, H);
        }
        y.current && ((O = M.current) == null || O.call(M));
      } catch (H) {
        if (W.signal.aborted) return;
        const V = H instanceof Error ? H : new Error(String(H));
        y.current && (b(V), (_ = C.current) == null || _.call(C, V));
      } finally {
        y.current && m.current === W && (p(!1), m.current = null);
      }
    },
    [o]
  );
  return { events: a, lastEvent: s, isStreaming: h, error: g, start: A, abort: F, reset: L };
}
export {
  Jr as AccentColor,
  pe as Anchor,
  qt as Aside,
  ft as Avatar,
  x as BackgroundColor,
  Fe as Badge,
  Wt as Banner,
  ae as BloomColor,
  te as BloomLevel,
  z as BorderColor,
  B as BorderRadius,
  qr as BorderWidth,
  S as Box,
  Me as Breakpoint,
  ie as Button,
  lr as Calendar,
  Rt as Card,
  Xt as Checkbox,
  nt as Chip,
  Zr as ContainerWidth,
  rn as DirectionColor,
  Ct as Divider,
  pr as DropdownCheckboxMenu,
  _t as DropdownMenu,
  de as Elevation,
  ir as EmptyState,
  tn as EvaluationResultColor,
  Je as FontFamily,
  w as FontSize,
  T as FontWeight,
  kr as GlassCard,
  ge as Gradient,
  Ne as Grid,
  Ot as Header,
  Tt as HeroSection,
  Gr as Hide,
  qe as Icon,
  Z as IconButton,
  Qr as IconSize,
  Se as Image,
  $ as Inline,
  cr as InlineEdit,
  Jt as Layout,
  We as LetterSpacing,
  Fr as LikertScale,
  ut as LinkButton,
  at as LiquidGlass,
  je as Menu,
  fr as MobileNav,
  Pt as Modal,
  Ht as ModalSize,
  zt as Navbar,
  Gt as Panel,
  nn as PersonaAccent,
  xr as ProgressTracker,
  Lr as RevealSteps,
  He as Select,
  hr as SelectField,
  Ur as Show,
  Kt as Sidebar,
  i as Spacing,
  Oe as Spinner,
  P as Stack,
  Bt as Stepper,
  ar as Table,
  Ft as Tabs,
  D as Text,
  vt as TextArea,
  u as TextColor,
  $t as TextField,
  Ce as TextInput,
  mr as Toast,
  ct as Toggle,
  se as ZIndex,
  Ze as bloomColorFor,
  Qe as bloomLevelForScore,
  Pr as parseSSEStream,
  en as scoreColor,
  _r as streamSSE,
  ve as useBreakpoint,
  ln as useMediaQuery,
  U as useResponsiveValue,
  an as useSSEStream,
  on as useTheme
};
