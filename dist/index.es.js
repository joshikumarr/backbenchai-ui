import te, { useState as P, useEffect as K, forwardRef as L, Fragment as Yn, useMemo as Se, useCallback as Q, useId as Xe, useRef as oe } from "react";
import { jsx as n, Fragment as ne, jsxs as f } from "react/jsx-runtime";
import { createPortal as Ce } from "react-dom";
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
  /** Green — positive feedback (Correct, completed, success states). */
  Success: "var(--bbui-color-success)",
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
  OnInfo: "var(--bbui-color-on-info)",
  /**
   * Brand gradient clipped to the glyphs (background-clip: text). Text
   * special-cases this value — it paints the gradient as the fill instead
   * of a flat color. Backed by the same `--bbui-gradient-brand` as Gradient.Brand.
   */
  Gradient: "var(--bbui-gradient-brand)"
}, y = {
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
  Success: "var(--bbui-bg-success)",
  SuccessBold: "var(--bbui-bg-success-bold)",
  SuccessTint: "var(--bbui-bg-success-tint)",
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
  AccentTint: "var(--bbui-bg-accent-tint)",
  /** Brand navy tint (#163255) — a fixed surface, independent of theme. */
  BrandTint: "#163255",
  /**
   * Brand blue→gold gradient. A gradient is NOT a valid `background-color`, so
   * Box special-cases this value and emits `background` instead. Theme-aware
   * via the primary/warning color vars.
   */
  Gradient: "linear-gradient(to right, #ffffff80, #16325580, color-mix(in srgb, var(--bbui-color-warning) 50%, transparent))"
}, Kn = {
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
  Huge: "48px",
  /** Display tier — hero headlines */
  Display: "64px",
  Mega: "84px"
}, A = {
  Regular: 400,
  Medium: 500,
  Semibold: 600,
  Bold: 700,
  ExtraBold: 800,
  /** 900 — large display numbers */
  Black: 900
}, $n = {
  Tighter: "-0.05em",
  Tight: "-0.025em",
  Normal: "0",
  Wide: "0.05em",
  Wider: "0.075em",
  /** 0.1em — uppercase labels */
  Widest: "0.1em"
}, el = {
  Normal: "normal",
  Italic: "italic",
  Oblique: "oblique"
}, nl = {
  None: "none",
  Uppercase: "uppercase",
  Lowercase: "lowercase",
  Capitalize: "capitalize"
}, tl = {
  Block: "block",
  InlineBlock: "inline-block",
  Inline: "inline",
  Flex: "flex",
  InlineFlex: "inline-flex",
  Grid: "grid",
  InlineGrid: "inline-grid",
  None: "none"
}, rl = {
  Start: "flex-start",
  Center: "center",
  End: "flex-end",
  Stretch: "stretch",
  Baseline: "baseline"
}, ll = {
  Start: "flex-start",
  Center: "center",
  End: "flex-end",
  SpaceBetween: "space-between",
  SpaceAround: "space-around",
  SpaceEvenly: "space-evenly"
}, il = {
  Auto: "auto",
  Start: "flex-start",
  Center: "center",
  End: "flex-end",
  Stretch: "stretch",
  Baseline: "baseline"
}, ol = {
  Row: "row",
  Column: "column",
  RowReverse: "row-reverse",
  ColumnReverse: "column-reverse"
}, al = {
  NoWrap: "nowrap",
  Wrap: "wrap",
  WrapReverse: "wrap-reverse"
}, sl = {
  Static: "static",
  Relative: "relative",
  Absolute: "absolute",
  Fixed: "fixed",
  Sticky: "sticky"
}, dl = {
  Auto: "auto",
  Default: "default",
  Pointer: "pointer",
  Text: "text",
  Wait: "wait",
  Help: "help",
  NotAllowed: "not-allowed",
  Grab: "grab",
  Grabbing: "grabbing",
  Move: "move",
  ZoomIn: "zoom-in",
  ZoomOut: "zoom-out",
  None: "none"
}, cl = {
  Normal: "normal",
  NoWrap: "nowrap",
  Pre: "pre",
  PreWrap: "pre-wrap",
  PreLine: "pre-line",
  BreakSpaces: "break-spaces"
}, I = {
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
}, T = {
  Default: "var(--bbui-border-default)",
  Input: "var(--bbui-border-input)",
  Warning: "var(--bbui-border-warning)",
  Error: "var(--bbui-border-error)",
  Info: "var(--bbui-border-info)",
  Success: "var(--bbui-border-success)",
  Focus: "var(--bbui-color-primary)",
  Outline: "var(--bbui-border-outline)"
}, ul = {
  Thin: "1px",
  Medium: "2px",
  Thick: "4px",
  XThick: "8px"
}, pl = {
  Occupied: "var(--bbui-accent-occupied)",
  Vacant: "var(--bbui-accent-vacant)",
  Maintenance: "var(--bbui-accent-maintenance)",
  Reserved: "var(--bbui-accent-reserved)",
  Cleaning: "var(--bbui-accent-cleaning)",
  Primary: "var(--bbui-color-primary)",
  Error: "var(--bbui-color-error)"
}, he = {
  None: "none",
  Raised: "var(--bbui-shadow-raised)",
  Ambient: "var(--bbui-shadow-ambient)",
  Dropdown: "var(--bbui-shadow-dropdown)",
  Overlay: "var(--bbui-shadow-overlay)",
  CardHover: "var(--bbui-shadow-card-hover)"
}, ve = {
  Brand: "var(--bbui-gradient-brand)"
}, bl = {
  Small: "640px",
  Medium: "768px",
  Large: "1024px",
  XLarge: "1280px",
  XXLarge: "1600px",
  XXXLarge: "1800px"
}, be = {
  Dropdown: 100,
  Sticky: 200,
  Modal: 300,
  Banner: 400,
  FAB: 50
}, hl = {
  XSmall: "14px",
  Small: "16px",
  Medium: "20px",
  Large: "24px",
  XLarge: "32px",
  XXLarge: "40px"
}, pe = {
  NotAssessed: "var(--bbui-bloom-not-assessed)",
  Aware: "var(--bbui-bloom-aware)",
  Understands: "var(--bbui-bloom-understands)",
  Applies: "var(--bbui-bloom-applies)",
  Analyzes: "var(--bbui-bloom-analyzes)",
  Masters: "var(--bbui-bloom-masters)"
}, ie = {
  NotAssessed: "NOT_ASSESSED",
  Aware: "AWARE",
  Understands: "UNDERSTANDS",
  Applies: "APPLIES",
  Analyzes: "ANALYZES",
  Masters: "MASTERS"
};
function Un(e) {
  switch (e) {
    case ie.Masters:
      return pe.Masters;
    case ie.Analyzes:
      return pe.Analyzes;
    case ie.Applies:
      return pe.Applies;
    case ie.Understands:
      return pe.Understands;
    case ie.Aware:
      return pe.Aware;
    default:
      return pe.NotAssessed;
  }
}
function qn(e) {
  return e >= 90 ? ie.Masters : e >= 80 ? ie.Analyzes : e >= 60 ? ie.Applies : e >= 40 ? ie.Understands : e >= 20 ? ie.Aware : ie.NotAssessed;
}
function gl(e) {
  return Un(qn(e));
}
const ml = {
  correct: pe.Masters,
  partial: pe.Applies,
  incorrect: "var(--bbui-color-error)",
  skipped: "var(--bbui-color-subtlest)"
}, fl = {
  up: pe.Masters,
  down: "var(--bbui-color-error)",
  unchanged: "var(--bbui-color-subtlest)"
}, yl = {
  Nova: "var(--bbui-persona-nova)",
  Maya: "var(--bbui-persona-maya)",
  Jordan: "var(--bbui-persona-jordan)",
  Custom: "var(--bbui-persona-custom)"
}, Ln = {
  /** 0–639px */
  Mobile: 0,
  /** 640–1023px */
  Tablet: 640,
  /** 1024px+ */
  Desktop: 1024
};
function In(e) {
  return e >= Ln.Desktop ? "desktop" : e >= Ln.Tablet ? "tablet" : "mobile";
}
function Be() {
  const [e, t] = P(
    () => typeof window < "u" ? In(window.innerWidth) : "desktop"
  );
  return K(() => {
    const r = () => t(In(window.innerWidth));
    return window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []), e;
}
function Jn(e, t) {
  if (e == null || typeof e != "object" || !("mobile" in e)) return e;
  const r = e;
  switch (t) {
    case "desktop":
      return r.desktop ?? r.tablet ?? r.mobile;
    case "tablet":
      return r.tablet ?? r.mobile;
    default:
      return r.mobile;
  }
}
function $(e) {
  const t = Be();
  return Jn(e, t);
}
const xe = (e) => {
  if (e !== void 0)
    return Array.isArray(e) ? e.join(" ") : e;
}, S = L(
  ({
    as: e = "div",
    padding: t,
    paddingBlock: r,
    paddingBlockStart: l,
    paddingBlockEnd: o,
    paddingInline: a,
    paddingInlineStart: d,
    paddingInlineEnd: s,
    margin: p,
    marginBlock: b,
    marginBlockStart: c,
    marginBlockEnd: g,
    marginInline: h,
    marginInlineStart: m,
    marginInlineEnd: x,
    marginTop: v,
    marginRight: C,
    marginBottom: B,
    marginLeft: H,
    backgroundColor: X,
    borderRadius: N,
    borderColor: z,
    borderSide: F,
    borderWidth: O = "1px",
    overflow: k,
    overscrollBehavior: M,
    safeArea: R,
    elevation: G,
    width: j,
    maxWidth: Y,
    height: U,
    minHeight: E,
    maxHeight: V,
    minWidth: J,
    display: q,
    alignItems: de,
    justifyContent: se,
    alignSelf: ee,
    flexDirection: Z,
    flexWrap: ce,
    flex: le,
    flexGrow: me,
    flexShrink: Re,
    gap: Ae,
    position: Ne,
    inset: $e,
    top: We,
    right: Fe,
    bottom: Oe,
    left: He,
    zIndex: je,
    color: Pe,
    opacity: Ve,
    cursor: Ge,
    whiteSpace: _e,
    lineHeight: Ye,
    pointerEvents: Ke,
    background: Ue,
    border: qe,
    boxShadow: Je,
    transition: Ze,
    transform: Qe,
    aspectRatio: en,
    filter: nn,
    backdropFilter: tn,
    style: Pn,
    children: Vn,
    ...Gn
  }, _n) => {
    const rn = xe($(t)), ln = xe($(r)), on = $(l), an = $(o), sn = xe($(a)), dn = $(d), cn = $(s), un = xe($(p)), pn = xe($(b)), bn = $(c), hn = $(g), gn = xe($(h)), mn = $(m), fn = $(x), yn = $(v), xn = $(C), vn = $(B), Sn = $(H), wn = $(q), kn = $(de), Xn = $(se), Cn = $(Z), fe = z ? `${O} solid ${z}` : void 0, ye = {};
    if (fe && F)
      switch (F) {
        case "top":
          ye.borderTop = fe;
          break;
        case "bottom":
          ye.borderBottom = fe;
          break;
        case "left":
          ye.borderLeft = fe;
          break;
        case "right":
          ye.borderRight = fe;
          break;
        case "all":
          ye.border = fe;
          break;
      }
    const ue = {
      ...rn && { padding: rn },
      ...ln && { paddingBlock: ln },
      ...on && { paddingBlockStart: on },
      ...an && { paddingBlockEnd: an },
      ...sn && { paddingInline: sn },
      ...dn && { paddingInlineStart: dn },
      ...cn && { paddingInlineEnd: cn },
      ...un && { margin: un },
      ...pn && { marginBlock: pn },
      ...bn && { marginBlockStart: bn },
      ...hn && { marginBlockEnd: hn },
      ...gn && { marginInline: gn },
      ...mn && { marginInlineStart: mn },
      ...fn && { marginInlineEnd: fn },
      ...yn && { marginTop: yn },
      ...xn && { marginRight: xn },
      ...vn && { marginBottom: vn },
      ...Sn && { marginLeft: Sn },
      ...X && (X === y.Gradient ? { background: X } : { backgroundColor: X }),
      ...N && { borderRadius: N },
      ...ye,
      ...k && { overflow: k },
      ...G && { boxShadow: G },
      ...j !== void 0 && { width: j },
      ...Y && { maxWidth: Y, marginInline: "auto" },
      ...U !== void 0 && { height: U },
      ...E !== void 0 && { minHeight: E },
      ...V !== void 0 && { maxHeight: V },
      ...J !== void 0 && { minWidth: J },
      ...wn && { display: wn },
      ...kn && { alignItems: kn },
      ...Xn && { justifyContent: Xn },
      ...ee && { alignSelf: ee },
      ...Cn && { flexDirection: Cn },
      ...ce && { flexWrap: ce },
      ...le !== void 0 && { flex: le },
      ...me !== void 0 && { flexGrow: me },
      ...Re !== void 0 && { flexShrink: Re },
      ...Ae && { gap: Ae },
      ...Ne && { position: Ne },
      ...$e !== void 0 && { inset: $e },
      ...We !== void 0 && { top: We },
      ...Fe !== void 0 && { right: Fe },
      ...Oe !== void 0 && { bottom: Oe },
      ...He !== void 0 && { left: He },
      ...je !== void 0 && { zIndex: je },
      ...Pe && { color: Pe },
      ...Ve !== void 0 && { opacity: Ve },
      ...Ge && { cursor: Ge },
      ..._e && { whiteSpace: _e },
      ...Ye !== void 0 && { lineHeight: Ye },
      ...Ke && { pointerEvents: Ke },
      ...Ue && { background: Ue },
      ...qe && { border: qe },
      ...Je && { boxShadow: Je },
      ...Ze && { transition: Ze },
      ...Qe && { transform: Qe },
      ...en !== void 0 && { aspectRatio: en },
      ...nn && { filter: nn },
      ...tn && { backdropFilter: tn },
      ...M && { overscrollBehavior: M },
      ...Pn
    };
    if (R) {
      const Ie = Array.isArray(R) ? R : [R];
      if (Ie.includes("top") && (ue.paddingBlockStart = `calc(${ue.paddingBlockStart ?? "0px"} + env(safe-area-inset-top))`), Ie.includes("bottom") && (ue.paddingBlockEnd = `calc(${ue.paddingBlockEnd ?? "0px"} + env(safe-area-inset-bottom))`), Ie.includes("inline")) {
        const Bn = ue.paddingInline ?? "0px";
        delete ue.paddingInline, ue.paddingLeft = `max(${Bn}, env(safe-area-inset-left))`, ue.paddingRight = `max(${Bn}, env(safe-area-inset-right))`;
      }
    }
    return te.createElement(
      e,
      { ...Gn, ref: _n, style: ue },
      Vn
    );
  }
);
S.displayName = "Box";
const we = ["mobile", "tablet", "desktop"];
function Zn(e, t) {
  return we.indexOf(e) >= we.indexOf(t);
}
function Qn(e, t) {
  return we.indexOf(e) < we.indexOf(t);
}
function xl({ on: e, above: t, below: r, children: l }) {
  const o = Be();
  return e != null ? (Array.isArray(e) ? e : [e]).includes(o) ? /* @__PURE__ */ n(ne, { children: l }) : null : t != null ? Zn(o, t) ? /* @__PURE__ */ n(ne, { children: l }) : null : r != null ? Qn(o, r) ? /* @__PURE__ */ n(ne, { children: l }) : null : /* @__PURE__ */ n(ne, { children: l });
}
const ke = ["mobile", "tablet", "desktop"];
function et(e, t) {
  return ke.indexOf(e) >= ke.indexOf(t);
}
function nt(e, t) {
  return ke.indexOf(e) < ke.indexOf(t);
}
function vl({ on: e, above: t, below: r, children: l }) {
  const o = Be();
  return e != null ? (Array.isArray(e) ? e : [e]).includes(o) ? null : /* @__PURE__ */ n(ne, { children: l }) : t != null ? et(o, t) ? null : /* @__PURE__ */ n(ne, { children: l }) : r != null ? nt(o, r) ? null : /* @__PURE__ */ n(ne, { children: l }) : /* @__PURE__ */ n(ne, { children: l });
}
const Mn = {
  start: "flex-start",
  end: "flex-end",
  // AlignItems token values pass through unchanged
  "flex-start": "flex-start",
  "flex-end": "flex-end",
  center: "center",
  stretch: "stretch",
  baseline: "baseline"
}, _ = L(
  ({
    as: e = "div",
    space: t,
    alignInline: r,
    alignBlock: l,
    spread: o,
    grow: a = "hug",
    marginBlockStart: d,
    marginBlockEnd: s,
    style: p,
    children: b,
    ...c
  }, g) => {
    const m = {
      display: "flex",
      flexDirection: "column",
      gap: $(t ?? "0"),
      ...r && { alignItems: Mn[r] },
      ...l && !o && { justifyContent: Mn[l] },
      ...o && { justifyContent: o },
      ...a === "fill" && { flex: "1 1 auto" },
      ...d && { marginBlockStart: d },
      ...s && { marginBlockEnd: s },
      ...p
    };
    return te.createElement(
      e,
      { ...c, ref: g, style: m },
      b
    );
  }
);
_.displayName = "Stack";
const Dn = {
  start: "flex-start",
  end: "flex-end",
  // AlignItems token values pass through unchanged
  "flex-start": "flex-start",
  "flex-end": "flex-end",
  center: "center",
  stretch: "stretch",
  baseline: "baseline"
}, W = L(
  ({
    as: e = "div",
    space: t,
    rowSpace: r,
    alignBlock: l,
    alignInline: o,
    spread: a,
    shouldWrap: d,
    separator: s,
    grow: p = "hug",
    marginBlockStart: b,
    marginBlockEnd: c,
    borderRadius: g,
    overflow: h,
    elevation: m,
    minWidth: x,
    style: v,
    children: C,
    ...B
  }, H) => {
    const X = $(t ?? "0"), [N, z] = Array.isArray(X) ? [X[0], X[1]] : [X, X], F = {
      display: "flex",
      flexDirection: "row",
      columnGap: z,
      rowGap: r ?? N,
      ...l && { alignItems: Dn[l] },
      ...o && !a && { justifyContent: Dn[o] },
      ...a && { justifyContent: a },
      ...d && { flexWrap: "wrap" },
      ...p === "fill" && { flex: "1 1 auto" },
      ...b && { marginBlockStart: b },
      ...c && { marginBlockEnd: c },
      ...g && { borderRadius: g },
      ...h && { overflow: h },
      ...m && { boxShadow: m },
      ...x !== void 0 && { minWidth: x },
      ...v
    };
    let O = C;
    if (s) {
      const k = te.Children.toArray(C).filter(Boolean);
      O = k.map((M, R) => /* @__PURE__ */ f(Yn, { children: [
        M,
        R < k.length - 1 && /* @__PURE__ */ n("span", { "aria-hidden": "true", children: s })
      ] }, R));
    }
    return te.createElement(
      e,
      { ...B, ref: H, style: F },
      O
    );
  }
);
W.displayName = "Inline";
const tt = L(
  ({ as: e = "div", space: t, block: r, inline: l, style: o, children: a, ...d }, s) => {
    const p = $(t), b = $(r), c = $(l), g = b ?? p, h = c ?? p, m = {
      ...g && { paddingBlock: g },
      ...h && { paddingInline: h },
      ...o
    };
    return te.createElement(
      e,
      { ...d, ref: s, style: m },
      a
    );
  }
);
tt.displayName = "Inset";
const D = L(
  ({
    as: e = "span",
    size: t,
    weight: r,
    color: l,
    fontFamily: o,
    letterSpacing: a,
    align: d,
    textTransform: s,
    lineHeight: p,
    opacity: b,
    fontStyle: c,
    clamp: g,
    truncate: h,
    noWrap: m,
    noShrink: x,
    style: v,
    children: C,
    ...B
  }, H) => {
    const X = {
      ...t && { fontSize: t },
      ...r && { fontWeight: r },
      ...l && (l === u.Gradient ? {
        background: l,
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent"
      } : { color: l }),
      ...o && { fontFamily: o },
      ...a && { letterSpacing: a },
      ...d && { textAlign: d },
      ...s && { textTransform: s },
      ...p !== void 0 && { lineHeight: p },
      ...b !== void 0 && { opacity: b },
      ...c && { fontStyle: c },
      ...g !== void 0 && {
        display: "-webkit-box",
        WebkitLineClamp: g,
        WebkitBoxOrient: "vertical",
        overflow: "hidden"
      },
      ...h && {
        display: "block",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        minWidth: 0
      },
      ...m && !h && { whiteSpace: "nowrap" },
      ...x && { flexShrink: 0 },
      ...v
    };
    return te.createElement(
      e,
      { ...B, ref: H, style: X },
      C
    );
  }
);
D.displayName = "Text";
function rt(e) {
  if (e !== void 0)
    return typeof e == "number" ? `repeat(${e}, 1fr)` : e.map((t) => `${t}fr`).join(" ");
}
const Wn = L(
  ({
    as: e = "div",
    columns: t,
    gap: r,
    rowGap: l,
    marginBlockStart: o,
    marginBlockEnd: a,
    borderRadius: d,
    overflow: s,
    elevation: p,
    style: b,
    children: c,
    ...g
  }, h) => {
    const m = $(t ?? 1), x = $(r ?? "0"), v = {
      display: "grid",
      gridTemplateColumns: rt(m),
      gap: x,
      ...l && { rowGap: l },
      ...o && { marginBlockStart: o },
      ...a && { marginBlockEnd: a },
      ...d && { borderRadius: d },
      ...s && { overflow: s },
      ...p && { boxShadow: p },
      ...b
    };
    return te.createElement(
      e,
      { ...g, ref: h, style: v },
      c
    );
  }
);
Wn.displayName = "Grid";
const ge = L(
  ({
    color: e,
    weight: t,
    size: r,
    backgroundColor: l,
    padding: o,
    paddingBlock: a,
    paddingBlockStart: d,
    paddingInline: s,
    borderRadius: p,
    textTransform: b,
    display: c,
    alignSelf: g,
    style: h,
    children: m,
    ...x
  }, v) => {
    const C = {
      ...e && { color: e },
      ...t && { fontWeight: t },
      ...r && { fontSize: r },
      ...l && { backgroundColor: l },
      ...o && { padding: o },
      ...a && { paddingBlock: a },
      ...d && { paddingBlockStart: d },
      ...s && { paddingInline: s },
      ...p && { borderRadius: p },
      ...b && { textTransform: b },
      ...c && { display: c },
      ...g && { alignSelf: g },
      ...h
    };
    return /* @__PURE__ */ n("a", { ref: v, style: C, ...x, children: m });
  }
);
ge.displayName = "Anchor";
const Le = L(
  ({ borderRadius: e, objectFit: t, width: r, height: l, fill: o, style: a, ...d }, s) => {
    const p = {
      display: "block",
      ...o ? { width: "100%", height: "100%" } : {
        ...r ? { width: r, flexShrink: 0 } : { width: "100%" },
        ...l && { height: l }
      },
      ...e && { borderRadius: e },
      ...t && { objectFit: t },
      ...a
    };
    return /* @__PURE__ */ n("img", { ref: s, style: p, ...d });
  }
);
Le.displayName = "Image";
const Me = (e) => {
  if (e !== void 0)
    return Array.isArray(e) ? e.join(" ") : e;
}, lt = {
  start: "flex-start",
  center: "center",
  end: "flex-end"
}, ae = L(
  ({
    backgroundColor: e,
    hover: t,
    pressed: r,
    gradient: l,
    color: o,
    colorHover: a,
    colorPressed: d,
    borderColor: s,
    borderColorHover: p,
    borderColorPressed: b,
    borderWidth: c = "1px",
    borderSide: g = "all",
    size: h,
    weight: m,
    letterSpacing: x,
    textTransform: v,
    fontFamily: C,
    gap: B,
    padding: H,
    paddingBlock: X,
    paddingInline: N,
    borderRadius: z,
    width: F,
    align: O = "center",
    label: k,
    iconStart: M,
    iconEnd: R,
    className: G,
    style: j,
    children: Y,
    ...U
  }, E) => {
    const V = {};
    e && (V["--bbui-btn-bg"] = e), t && (V["--bbui-btn-bg-hover"] = t), r && (V["--bbui-btn-bg-pressed"] = r), o && (V["--bbui-btn-color"] = o), a && (V["--bbui-btn-color-hover"] = a), d && (V["--bbui-btn-color-pressed"] = d), s && (V["--bbui-btn-border"] = s), p && (V["--bbui-btn-border-hover"] = p), b && (V["--bbui-btn-border-pressed"] = b);
    const J = s ? `${c} solid var(--bbui-btn-border)` : void 0, q = {};
    if (J)
      switch (g) {
        case "top":
          q.borderTop = J;
          break;
        case "bottom":
          q.borderBottom = J;
          break;
        case "left":
          q.borderLeft = J;
          break;
        case "right":
          q.borderRight = J;
          break;
        case "all":
          q.border = J;
          break;
      }
    else
      q.border = "none";
    const de = Me(H), se = Me(X), ee = Me(N), Z = {
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: lt[O],
      ...q,
      ...F !== void 0 && { width: F },
      ...l && { background: l },
      ...h && { fontSize: h },
      ...m && { fontWeight: m },
      ...x && { letterSpacing: x },
      ...v && { textTransform: v },
      ...C && { fontFamily: C },
      ...B && { gap: B },
      ...de && { padding: de },
      ...se && { paddingBlock: se },
      ...ee && { paddingInline: ee },
      ...z && { borderRadius: z },
      ...V,
      ...j
    }, ce = G ? `bbui-button ${G}` : "bbui-button", le = k ?? Y;
    return /* @__PURE__ */ n("button", { ref: E, className: ce, style: Z, ...U, children: M || R ? /* @__PURE__ */ f(ne, { children: [
      M,
      le,
      R
    ] }) : le });
  }
);
ae.displayName = "Button";
const ze = L(
  ({
    backgroundColor: e,
    borderColor: t,
    borderRadius: r,
    padding: l,
    paddingBlock: o,
    paddingInline: a,
    style: d,
    ...s
  }, p) => {
    const b = {
      ...e && { backgroundColor: e },
      ...t && { border: `1px solid ${t}` },
      ...r && { borderRadius: r },
      ...l && { padding: l },
      ...o && { paddingBlock: o },
      ...a && { paddingInline: a },
      ...d
    };
    return /* @__PURE__ */ n("input", { ref: p, style: b, ...s });
  }
);
ze.displayName = "TextInput";
const it = L(
  ({ size: e, color: t, label: r, style: l, children: o, ...a }, d) => {
    const s = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      ...e && { width: e, height: e },
      ...t && { color: t },
      ...l
    };
    return /* @__PURE__ */ n(
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
it.displayName = "Icon";
const ot = {
  default: { backgroundColor: y.NeutralBold, color: u.Default },
  success: { backgroundColor: y.SuccessBold, color: u.OnBrand },
  warning: { backgroundColor: y.Warning, color: u.Warning },
  error: { backgroundColor: y.Error, color: u.Error },
  info: { backgroundColor: y.Info, color: u.Info },
  brand: { backgroundColor: y.Brand, color: u.Inverse },
  primaryTint: { backgroundColor: y.PrimaryTint, color: u.Brand },
  errorTint: { backgroundColor: y.ErrorTint, color: u.Error },
  warningTint: { backgroundColor: y.WarningTint, color: "#ea580c" },
  infoTint: { backgroundColor: y.InfoTint, color: "#2563eb" },
  accentTint: { backgroundColor: y.AccentTint, color: "#7c3aed" }
}, Fn = L(
  ({ variant: e = "default", uppercase: t = !1, style: r, children: l, ...o }, a) => {
    const d = ot[e], s = {
      display: "inline-flex",
      alignItems: "center",
      lineHeight: 1,
      paddingBlock: i.XXSmall,
      paddingInline: t ? i.MediumLarge : i.Medium,
      borderRadius: I.Full,
      fontWeight: t ? A.Black : A.Medium,
      fontSize: t ? w.Micro : w.XXSmall,
      letterSpacing: t ? $n.Wider : void 0,
      textTransform: t ? "uppercase" : void 0,
      ...d,
      ...r
    };
    return /* @__PURE__ */ n("span", { ref: a, style: s, ...o, children: l });
  }
);
Fn.displayName = "Badge";
const at = {
  compact: { block: i.XXSmall, inline: i.Small },
  comfortable: { block: i.XSmall, inline: i.Medium }
}, st = {
  default: { backgroundColor: y.NeutralBold, color: u.Default },
  success: { backgroundColor: y.Success, color: u.Inverse },
  warning: { backgroundColor: y.Warning, color: u.Warning },
  error: { backgroundColor: y.Error, color: u.Error },
  info: { backgroundColor: y.Info, color: u.Info },
  brand: { backgroundColor: y.Brand, color: u.Inverse },
  primaryTint: { backgroundColor: y.PrimaryTint, color: u.Brand },
  errorTint: { backgroundColor: y.ErrorTint, color: u.Error },
  warningTint: { backgroundColor: y.WarningTint, color: "#ea580c" },
  infoTint: { backgroundColor: y.InfoTint, color: "#2563eb" },
  accentTint: { backgroundColor: y.AccentTint, color: "#7c3aed" }
}, dt = L(
  ({
    selected: e,
    appearance: t = "filled",
    density: r = "compact",
    variant: l,
    fontWeight: o = A.Medium,
    fontSize: a,
    icon: d,
    showCheckWhenSelected: s = !1,
    onClick: p,
    disabled: b,
    style: c,
    children: g,
    ...h
  }, m) => {
    const x = p !== void 0 || e !== void 0, v = e === !0, C = a ?? (l ? w.XXSmall : w.XSmall), B = l ? { block: i.XXSmall, inline: i.XSmall } : at[r];
    let H, X;
    if (l) {
      const O = st[l];
      H = O.backgroundColor, X = O.color;
    } else
      H = v ? y.Brand : t === "outlined" ? y.Transparent : y.Subtle, X = v ? u.OnBrand : u.Default;
    const N = !l && t === "outlined" && !v ? `1px solid ${T.Outline}` : "1px solid transparent", z = {
      display: "inline-flex",
      alignItems: "center",
      gap: i.XSmall,
      paddingBlock: B.block,
      paddingInline: B.inline,
      borderRadius: I.Full,
      backgroundColor: H,
      color: X,
      border: N,
      fontFamily: "inherit",
      fontWeight: o,
      fontSize: C,
      lineHeight: 1.2,
      cursor: x ? b ? "not-allowed" : "pointer" : "default",
      opacity: b ? 0.5 : 1,
      whiteSpace: "nowrap",
      width: "auto",
      flex: "0 0 auto",
      // Stop a flex parent (Stack/Inline with default align-items: stretch)
      // from stretching the chip to fill the cross-axis. Without this,
      // a <Chip> inside <Stack> renders edge-to-edge instead of fit-to-text.
      alignSelf: "flex-start",
      ...c
    }, F = s && v ? /* @__PURE__ */ n(
      "span",
      {
        className: "material-symbols-outlined",
        style: { fontSize: 14 },
        "aria-hidden": !0,
        children: "check"
      }
    ) : null;
    return x ? /* @__PURE__ */ f(
      "button",
      {
        ref: m,
        type: "button",
        "aria-pressed": e,
        disabled: b,
        onClick: p,
        style: z,
        ...h,
        children: [
          d,
          F,
          g
        ]
      }
    ) : /* @__PURE__ */ f(
      "span",
      {
        ref: m,
        style: z,
        ...h,
        children: [
          d,
          g
        ]
      }
    );
  }
);
dt.displayName = "Chip";
const En = {
  sm: "4px",
  md: "12px",
  lg: "16px",
  xl: "24px"
}, ct = {
  none: "inset 0 0 0 0 rgba(255, 255, 255, 0)",
  xs: "inset 1px 1px 1px 0 rgba(255, 255, 255, 0.3), inset -1px -1px 1px 0 rgba(255, 255, 255, 0.3)",
  sm: "inset 2px 2px 2px 0 rgba(255, 255, 255, 0.35), inset -2px -2px 2px 0 rgba(255, 255, 255, 0.35)",
  md: "inset 3px 3px 3px 0 rgba(255, 255, 255, 0.45), inset -3px -3px 3px 0 rgba(255, 255, 255, 0.45)",
  lg: "inset 4px 4px 4px 0 rgba(255, 255, 255, 0.5), inset -4px -4px 4px 0 rgba(255, 255, 255, 0.5)",
  xl: "inset 6px 6px 6px 0 rgba(255, 255, 255, 0.55), inset -6px -6px 6px 0 rgba(255, 255, 255, 0.55)"
}, ut = {
  none: "0 4px 4px rgba(0, 0, 0, 0.05), 0 0 12px rgba(0, 0, 0, 0.05)",
  xs: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 16px rgba(255, 255, 255, 0.05)",
  sm: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 24px rgba(255, 255, 255, 0.1)",
  md: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 32px rgba(255, 255, 255, 0.15)",
  lg: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 40px rgba(255, 255, 255, 0.2)",
  xl: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 48px rgba(255, 255, 255, 0.25)"
};
let pt = 0;
const bt = L(
  ({
    children: e,
    borderRadius: t = I.XLarge,
    blurIntensity: r = "xl",
    glowIntensity: l = "sm",
    shadowIntensity: o = "md",
    borderGradient: a,
    borderWidth: d = 1,
    width: s,
    height: p,
    style: b,
    ...c
  }, g) => {
    const h = Se(() => `bbui-liquid-glass-${++pt}`, []), m = {
      position: "relative",
      borderRadius: t,
      ...s && { width: s },
      ...p && { height: p },
      ...b
    }, x = {
      position: "absolute",
      inset: 0,
      borderRadius: t,
      pointerEvents: "none"
    };
    return /* @__PURE__ */ f("div", { ref: g, style: m, ...c, children: [
      /* @__PURE__ */ n("svg", { style: { position: "absolute", width: 0, height: 0 }, "aria-hidden": "true", children: /* @__PURE__ */ n("defs", { children: /* @__PURE__ */ f("filter", { id: h, x: "0", y: "0", width: "100%", height: "100%", filterUnits: "objectBoundingBox", children: [
        /* @__PURE__ */ n(
          "feTurbulence",
          {
            type: "fractalNoise",
            baseFrequency: "0.003 0.007",
            numOctaves: 1,
            result: "turbulence"
          }
        ),
        /* @__PURE__ */ n(
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
      /* @__PURE__ */ n(
        "div",
        {
          style: {
            ...x,
            zIndex: 0,
            backdropFilter: `blur(${En[r]})`,
            WebkitBackdropFilter: `blur(${En[r]})`,
            filter: `url(#${h})`
          }
        }
      ),
      /* @__PURE__ */ n("div", { style: { ...x, zIndex: 1, boxShadow: ut[l] } }),
      /* @__PURE__ */ n("div", { style: { ...x, zIndex: 2, boxShadow: ct[o] } }),
      a && /* @__PURE__ */ n(
        "div",
        {
          "aria-hidden": "true",
          style: {
            ...x,
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
      /* @__PURE__ */ n("div", { style: { position: "relative", zIndex: 4 }, children: e })
    ] });
  }
);
bt.displayName = "LiquidGlass";
const ht = "40px", gt = "24px", De = "20px", Tn = i.XXSmall, mt = L(
  ({ checked: e, defaultChecked: t = !1, onChange: r, label: l, style: o, ...a }, d) => {
    const [s, p] = P(t), b = e !== void 0, c = b ? e : s, g = Q(() => {
      const x = !c;
      b || p(x), r == null || r(x);
    }, [c, b, r]), h = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      width: ht,
      height: gt,
      borderRadius: I.Full,
      backgroundColor: c ? y.Brand : y.Neutral,
      border: "none",
      cursor: "pointer",
      padding: 0,
      transition: "background-color 150ms ease",
      ...o
    }, m = {
      position: "absolute",
      width: De,
      height: De,
      borderRadius: I.Full,
      backgroundColor: y.Default,
      transition: "left 150ms ease",
      left: c ? `calc(100% - ${De} - ${Tn})` : Tn,
      boxShadow: "0 1px 3px rgba(0,0,0,.2)"
    };
    return /* @__PURE__ */ n(
      "button",
      {
        ref: d,
        type: "button",
        role: "switch",
        "aria-checked": c,
        "aria-label": l,
        onClick: g,
        style: h,
        ...a,
        children: /* @__PURE__ */ n("span", { style: m })
      }
    );
  }
);
mt.displayName = "Toggle";
const ft = L(
  ({
    backgroundColor: e,
    color: t,
    padding: r,
    paddingBlock: l,
    paddingInline: o,
    borderRadius: a,
    style: d,
    children: s,
    ...p
  }, b) => {
    const c = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      cursor: "pointer",
      border: "none",
      ...e && { backgroundColor: e },
      ...t && { color: t },
      ...r && { padding: r },
      ...l && { paddingBlock: l },
      ...o && { paddingInline: o },
      ...a && { borderRadius: a },
      ...d
    };
    return /* @__PURE__ */ n("a", { ref: b, style: c, ...p, children: s });
  }
);
ft.displayName = "LinkButton";
const re = L(
  ({ label: e, size: t, color: r, backgroundColor: l, padding: o, style: a, className: d, children: s, ...p }, b) => {
    const c = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      cursor: "pointer",
      background: l ?? "none",
      ...t && { width: t, height: t },
      ...r && { color: r },
      ...o && { padding: o },
      ...a
    };
    return /* @__PURE__ */ n(
      "button",
      {
        ref: b,
        type: "button",
        "aria-label": e,
        className: d ? `bbui-button ${d}` : "bbui-button",
        style: c,
        ...p,
        children: s
      }
    );
  }
);
re.displayName = "IconButton";
const yt = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64
}, xt = {
  xsmall: "10px",
  small: "12px",
  medium: "14px",
  large: "16px",
  xlarge: "24px"
}, vt = {
  xsmall: 6,
  small: 8,
  medium: 10,
  large: 12,
  xlarge: 16
}, St = {
  online: "#22c55e",
  offline: "#bccbb9",
  busy: "#ba1a1a",
  focus: "#3b82f6"
};
function wt(e) {
  var r;
  const t = e.trim().split(/\s+/);
  return t.length >= 2 ? (t[0][0] + t[t.length - 1][0]).toUpperCase() : (((r = t[0]) == null ? void 0 : r[0]) ?? "").toUpperCase();
}
const kt = L(
  ({
    src: e,
    name: t,
    size: r = "medium",
    appearance: l = "circle",
    status: o,
    fallbackBackground: a = y.NeutralBold,
    fallbackColor: d = u.Subtle
  }, s) => {
    const [p, b] = P(!1), c = yt[r], g = e && !p, h = t ? wt(t) : "", m = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: c,
      height: c,
      borderRadius: l === "circle" ? I.Full : I.XLarge,
      overflow: "hidden",
      flexShrink: 0,
      ...g ? {} : { backgroundColor: a }
    }, x = vt[r], v = o ? {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: x,
      height: x,
      borderRadius: I.Full,
      backgroundColor: St[o],
      border: "2px solid #ffffff",
      boxSizing: "border-box"
    } : void 0;
    return /* @__PURE__ */ f("span", { ref: s, style: m, role: "img", "aria-label": t ?? "Avatar", children: [
      g ? /* @__PURE__ */ n(
        "img",
        {
          src: e,
          alt: t ?? "",
          onError: () => b(!0),
          style: { width: "100%", height: "100%", objectFit: "cover" }
        }
      ) : /* @__PURE__ */ n(
        "span",
        {
          style: {
            fontSize: xt[r],
            fontWeight: A.Semibold,
            color: d,
            lineHeight: 1,
            userSelect: "none"
          },
          children: h
        }
      ),
      o && /* @__PURE__ */ n("span", { style: v })
    ] });
  }
);
kt.displayName = "Avatar";
const Xt = {
  xsmall: 16,
  small: 24,
  medium: 32,
  large: 48,
  xlarge: 64
}, Ct = {
  xsmall: 2,
  small: 2,
  medium: 3,
  large: 3,
  xlarge: 4
}, On = L(
  ({ size: e = "medium", label: t = "Loading", color: r = u.Brand }, l) => {
    const o = Xe().replace(/:/g, ""), a = Xt[e], d = Ct[e], s = (a - d) / 2, p = 2 * Math.PI * s;
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
          width: a,
          height: a
        },
        children: [
          /* @__PURE__ */ n("style", { children: `
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
                /* @__PURE__ */ n(
                  "circle",
                  {
                    cx: a / 2,
                    cy: a / 2,
                    r: s,
                    stroke: r,
                    strokeWidth: d,
                    strokeLinecap: "round",
                    strokeDasharray: p,
                    strokeDashoffset: p * 0.7,
                    opacity: 0.9
                  }
                ),
                /* @__PURE__ */ n(
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
On.displayName = "Spinner";
const Bt = L(
  ({
    backgroundColor: e,
    borderColor: t,
    borderRadius: r,
    padding: l,
    paddingBlock: o,
    paddingInline: a,
    style: d,
    ...s
  }, p) => {
    const b = {
      fontFamily: "inherit",
      fontSize: "inherit",
      resize: "vertical",
      ...e && { backgroundColor: e },
      ...t ? { border: `1px solid ${t}` } : { border: "none" },
      ...r && { borderRadius: r },
      ...l && { padding: l },
      ...o && { paddingBlock: o },
      ...a && { paddingInline: a },
      ...d
    };
    return /* @__PURE__ */ n("textarea", { ref: p, style: b, ...s });
  }
);
Bt.displayName = "TextArea";
function Lt(e) {
  return "options" in e;
}
const Hn = L(
  ({
    options: e,
    placeholder: t,
    backgroundColor: r,
    borderColor: l,
    borderRadius: o,
    padding: a,
    paddingBlock: d,
    paddingInline: s,
    fontSize: p,
    color: b,
    style: c,
    ...g
  }, h) => {
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
      ...p && { fontSize: p },
      ...b && { color: b },
      ...c
    };
    return /* @__PURE__ */ f("select", { ref: h, style: m, ...g, children: [
      t && /* @__PURE__ */ n("option", { value: "", disabled: !0, hidden: !0, children: t }),
      e.map(
        (x) => Lt(x) ? /* @__PURE__ */ n("optgroup", { label: x.label, children: x.options.map((v) => /* @__PURE__ */ n("option", { value: v.value, disabled: v.disabled, children: v.label }, v.value)) }, x.label) : /* @__PURE__ */ n("option", { value: x.value, disabled: x.disabled, children: x.label }, x.value)
      )
    ] });
  }
);
Hn.displayName = "Select";
const It = {
  small: { box: "16px", font: w.XXSmall, gap: i.XSmall },
  medium: { box: "20px", font: w.XSmall, gap: i.Medium },
  large: { box: "24px", font: w.Small, gap: i.Medium }
}, Mt = ({ size: e }) => /* @__PURE__ */ n(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    style: { width: e, height: e },
    children: /* @__PURE__ */ n(
      "path",
      {
        fillRule: "evenodd",
        d: "M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z",
        clipRule: "evenodd"
      }
    )
  }
), Dt = L(
  ({ label: e, size: t = "medium", checked: r, disabled: l, style: o, id: a, ...d }, s) => {
    const p = Xe(), b = a ?? p, c = It[t], g = !!r, h = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: c.box,
      height: c.box,
      borderRadius: I.Small,
      flexShrink: 0,
      border: g ? "none" : `2px solid ${T.Outline}`,
      backgroundColor: g ? l ? u.Disabled : y.Brand : y.Transparent,
      color: u.Inverse,
      cursor: l ? "default" : "pointer",
      opacity: l ? 0.5 : 1
    };
    return /* @__PURE__ */ f(
      "label",
      {
        htmlFor: b,
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: c.gap,
          cursor: l ? "default" : "pointer",
          ...o
        },
        children: [
          /* @__PURE__ */ n(
            "input",
            {
              ref: s,
              id: b,
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
          /* @__PURE__ */ n("span", { style: h, "aria-hidden": "true", children: g && /* @__PURE__ */ n(Mt, { size: `calc(${c.box} - 4px)` }) }),
          e && /* @__PURE__ */ n(
            "span",
            {
              style: {
                fontSize: c.font,
                color: l ? u.Disabled : u.Default
              },
              children: e
            }
          )
        ]
      }
    );
  }
);
Dt.displayName = "Checkbox";
const Et = L(
  ({
    orientation: e = "horizontal",
    color: t = T.Default,
    spacing: r
  }, l) => /* @__PURE__ */ n(
    "hr",
    {
      ref: l,
      role: "separator",
      "aria-orientation": e,
      style: {
        border: "none",
        margin: 0,
        flexShrink: 0,
        ...e === "vertical" ? {
          borderLeft: `1px solid ${t}`,
          alignSelf: "stretch",
          ...r && { marginInline: r }
        } : {
          borderTop: `1px solid ${t}`,
          width: "100%",
          ...r && { marginBlock: r }
        }
      }
    }
  )
);
Et.displayName = "Divider";
const Tt = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z", clipRule: "evenodd" }) }), zt = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { d: "M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" }) }), Rt = L(
  ({
    value: e,
    onChange: t,
    min: r = 0,
    max: l = 99,
    step: o = 1,
    disabled: a = !1,
    backgroundColor: d = y.Subtle,
    padding: s = i.XSmall
  }, p) => {
    const b = e - o >= r, c = e + o <= l;
    return /* @__PURE__ */ f(
      "div",
      {
        ref: p,
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: i.Medium,
          backgroundColor: d,
          borderRadius: I.Large,
          padding: s
        },
        children: [
          /* @__PURE__ */ n(
            re,
            {
              label: "Decrease",
              onClick: () => b && t(e - o),
              disabled: a || !b,
              color: u.Brand,
              padding: i.XSmall,
              children: /* @__PURE__ */ n(Tt, {})
            }
          ),
          /* @__PURE__ */ n(
            D,
            {
              as: "span",
              size: w.Medium,
              weight: A.Bold,
              color: u.Default,
              style: { minWidth: "32px", textAlign: "center" },
              children: e
            }
          ),
          /* @__PURE__ */ n(
            re,
            {
              label: "Increase",
              onClick: () => c && t(e + o),
              disabled: a || !c,
              color: u.Brand,
              padding: i.XSmall,
              children: /* @__PURE__ */ n(zt, {})
            }
          )
        ]
      }
    );
  }
);
Rt.displayName = "Stepper";
const At = () => /* @__PURE__ */ n(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    style: { width: "24px", height: "24px" },
    children: /* @__PURE__ */ n(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      }
    )
  }
), Nt = () => /* @__PURE__ */ n(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "24px", height: "24px" },
    children: /* @__PURE__ */ n(
      "path",
      {
        fillRule: "evenodd",
        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        clipRule: "evenodd"
      }
    )
  }
), $t = () => /* @__PURE__ */ n(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "20px", height: "20px" },
    children: /* @__PURE__ */ n(
      "path",
      {
        fillRule: "evenodd",
        d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
        clipRule: "evenodd"
      }
    )
  }
), Wt = L(
  ({
    logo: e,
    navigation: t = [],
    cta: r,
    linkColor: l = u.Subtle,
    ctaBackgroundColor: o = y.Dark,
    ctaColor: a = u.Inverse,
    ctaWeight: d = 500,
    ctaBorderRadius: s = I.Full,
    paddingInline: p = i.XXXLarge,
    paddingBlock: b = i.XLarge,
    linkGap: c = i.XXLarge,
    logoGap: g = i.Size3_5,
    mobileMenuBackground: h = y.Default,
    mobileMenuBorderColor: m = T.Default,
    mobileMenuBorderRadius: x = I.Large,
    mobileBreakpoint: v = 768
  }, C) => {
    const [B, H] = P(!1), [X, N] = P(!1);
    K(() => {
      const M = () => N(window.innerWidth < v);
      return M(), window.addEventListener("resize", M), () => window.removeEventListener("resize", M);
    }, [v]);
    const z = Q((M) => {
      M.target.closest("[data-navbar-menu]") || H(!1);
    }, []);
    K(() => (document.addEventListener("click", z), () => document.removeEventListener("click", z)), [z]);
    const F = te.isValidElement(e) ? e : /* @__PURE__ */ n(
      Le,
      {
        src: e.src,
        alt: e.alt ?? "Logo",
        style: {
          width: e.width ?? 120,
          height: e.height ?? "auto"
        }
      }
    ), O = /* @__PURE__ */ n(ne, { children: t.map((M, R) => /* @__PURE__ */ n(
      ge,
      {
        href: M.path,
        color: l,
        display: "block",
        style: { textDecoration: "none" },
        children: M.title
      },
      R
    )) }), k = r ? /* @__PURE__ */ n(
      ge,
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
        children: /* @__PURE__ */ f(W, { space: i.XSmall, alignBlock: "center", children: [
          /* @__PURE__ */ n(D, { as: "span", color: a, weight: d, children: r.label }),
          r.icon ?? /* @__PURE__ */ n($t, {})
        ] })
      }
    ) : null;
    return X ? /* @__PURE__ */ f(S, { as: "header", ref: C, "data-navbar-menu": !0, children: [
      /* @__PURE__ */ n(
        S,
        {
          as: "nav",
          paddingInline: i.Large,
          paddingBlock: b,
          children: /* @__PURE__ */ f(W, { alignBlock: "center", spread: "space-between", children: [
            /* @__PURE__ */ n(S, { children: F }),
            /* @__PURE__ */ n(
              ae,
              {
                onClick: () => H(!B),
                style: {
                  background: "none",
                  padding: 0,
                  color: u.Subtle
                },
                children: B ? /* @__PURE__ */ n(Nt, {}) : /* @__PURE__ */ n(At, {})
              }
            )
          ] })
        }
      ),
      B && /* @__PURE__ */ n(
        S,
        {
          backgroundColor: h,
          elevation: he.Raised,
          borderRadius: x,
          borderColor: m,
          borderSide: "all",
          padding: i.Large,
          style: { margin: i.Medium },
          children: /* @__PURE__ */ f("nav", { children: [
            /* @__PURE__ */ n("ul", { style: { listStyle: "none", padding: 0, margin: 0 }, children: t.map((M, R) => /* @__PURE__ */ n("li", { style: { paddingBlock: i.MediumLarge }, children: /* @__PURE__ */ n(
              ge,
              {
                href: M.path,
                color: l,
                display: "block",
                style: { textDecoration: "none" },
                children: M.title
              }
            ) }, R)) }),
            k && /* @__PURE__ */ n(S, { marginBlockStart: i.XXLarge, children: k })
          ] })
        }
      )
    ] }) : /* @__PURE__ */ n(S, { as: "header", ref: C, style: { width: "100%" }, children: /* @__PURE__ */ n(
      S,
      {
        as: "nav",
        paddingInline: p,
        paddingBlock: b,
        style: { width: "100%" },
        children: /* @__PURE__ */ f(W, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ n(S, { children: F }),
          /* @__PURE__ */ f(
            W,
            {
              space: c,
              alignBlock: "center",
              grow: "fill",
              style: { marginInlineStart: g },
              children: [
                /* @__PURE__ */ n(
                  W,
                  {
                    space: c,
                    alignBlock: "center",
                    grow: "fill",
                    alignInline: "center",
                    children: O
                  }
                ),
                k && /* @__PURE__ */ n(S, { children: k })
              ]
            }
          )
        ] })
      }
    ) });
  }
);
Wt.displayName = "Navbar";
const zn = () => /* @__PURE__ */ n(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "20px", height: "20px" },
    children: /* @__PURE__ */ n(
      "path",
      {
        fillRule: "evenodd",
        d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",
        clipRule: "evenodd"
      }
    )
  }
), Ft = L(
  ({
    title: e,
    subtitle: t,
    badge: r,
    actions: l = [],
    image: o,
    children: a,
    titleSize: d = w.XXXLarge,
    titleSizeLarge: s = w.Huge,
    titleWeight: p = A.ExtraBold,
    titleColor: b = u.Default,
    subtitleSize: c = w.Small,
    subtitleColor: g = u.Subtlest,
    primaryCtaBackground: h = y.Dark,
    primaryCtaColor: m = u.Inverse,
    primaryCtaBorderRadius: x = I.Full,
    primaryCtaWeight: v = 500,
    secondaryCtaColor: C = u.Subtle,
    secondaryCtaWeight: B = 500,
    ctaGap: H = i.MediumLarge,
    paddingBlock: X = i.Size7,
    paddingInline: N = i.XXXLarge,
    contentGap: z = i.XHuge,
    textGap: F = i.XLarge,
    textMaxWidth: O = "576px",
    gradient: k,
    breakpoint: M = 768
  }, R) => {
    const [G, j] = P(!1);
    K(() => {
      const Z = () => j(window.innerWidth >= M);
      return Z(), window.addEventListener("resize", Z), () => window.removeEventListener("resize", Z);
    }, [M]);
    const Y = (k == null ? void 0 : k.enabled) !== !1, U = (k == null ? void 0 : k.css) ?? "linear-gradient(143.6deg, rgba(192,132,252,0) 20.79%, rgba(232,121,249,0.26) 40.92%, rgba(204,171,238,0) 70.35%)", E = (k == null ? void 0 : k.height) ?? "580px", V = (r == null ? void 0 : r.borderColor) ?? T.Default, J = r ? /* @__PURE__ */ n(
      ge,
      {
        href: r.path ?? "#",
        borderRadius: I.Full,
        paddingBlock: i.XSmall,
        paddingInline: i.Small,
        size: w.XSmall,
        weight: 500,
        display: "inline-block",
        style: {
          textDecoration: "none",
          border: `1px solid ${V}`,
          paddingRight: i.XXLarge
        },
        children: /* @__PURE__ */ f(W, { space: i.MediumLarge, alignBlock: "center", children: [
          /* @__PURE__ */ n(
            D,
            {
              as: "span",
              size: w.XSmall,
              color: r.labelColor ?? u.Inverse,
              style: {
                backgroundColor: r.labelBackgroundColor ?? y.Accent,
                borderRadius: I.Full,
                padding: `${i.XSmall} ${i.MediumLarge}`
              },
              children: r.label
            }
          ),
          /* @__PURE__ */ f(W, { space: i.XXSmall, alignBlock: "center", children: [
            /* @__PURE__ */ n(D, { as: "span", size: w.XSmall, children: r.text }),
            r.icon ?? /* @__PURE__ */ n(zn, {})
          ] })
        ] })
      }
    ) : null, q = l.length > 0 ? /* @__PURE__ */ n(W, { space: H, alignBlock: "center", shouldWrap: !0, children: l.map((Z, ce) => {
      const le = (Z.variant ?? (ce === 0 ? "primary" : "secondary")) === "primary", me = le ? v : B;
      return /* @__PURE__ */ n(
        ge,
        {
          href: Z.path,
          backgroundColor: le ? h : void 0,
          color: le ? m : C,
          paddingBlock: i.Medium,
          paddingInline: i.Large,
          borderRadius: le ? x : void 0,
          weight: me,
          display: "inline-block",
          style: { textDecoration: "none" },
          children: /* @__PURE__ */ f(W, { space: i.XSmall, alignBlock: "center", children: [
            /* @__PURE__ */ n(
              D,
              {
                as: "span",
                color: le ? m : C,
                weight: me,
                children: Z.label
              }
            ),
            Z.icon ?? /* @__PURE__ */ n(zn, {})
          ] })
        },
        ce
      );
    }) }) : null, se = /* @__PURE__ */ f(
      _,
      {
        space: F,
        style: { maxWidth: O, flexShrink: 0 },
        children: [
          J,
          /* @__PURE__ */ n(
            D,
            {
              as: "h1",
              size: G ? s : d,
              weight: p,
              color: b,
              lineHeight: 1.2,
              children: e
            }
          ),
          t && /* @__PURE__ */ n(
            D,
            {
              as: "p",
              color: g,
              size: c,
              lineHeight: 1.6,
              children: t
            }
          ),
          a,
          q
        ]
      }
    ), ee = o && G ? /* @__PURE__ */ n(S, { style: { flex: "1 1 0%", minWidth: 0 }, children: /* @__PURE__ */ n(
      Le,
      {
        src: o.src,
        alt: o.alt ?? "",
        style: { maxWidth: o.maxWidth ?? "576px" }
      }
    ) }) : null;
    return /* @__PURE__ */ f(S, { as: "section", ref: R, style: { position: "relative" }, children: [
      Y && /* @__PURE__ */ n(
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
      /* @__PURE__ */ n(
        S,
        {
          style: { position: "relative", overflow: "hidden" },
          maxWidth: "1280px",
          paddingInline: N,
          paddingBlock: X,
          children: G ? /* @__PURE__ */ f(W, { space: z, alignBlock: "center", children: [
            se,
            ee
          ] }) : /* @__PURE__ */ n(_, { space: z, children: se })
        }
      )
    ] });
  }
);
Ft.displayName = "HeroSection";
const Ot = L(
  ({
    padding: e = i.Large,
    backgroundColor: t = y.Default,
    borderRadius: r = I.XXLarge,
    borderColor: l = T.Default,
    elevation: o = he.Ambient,
    accentColor: a,
    accentWidth: d = "8px",
    header: s,
    footer: p,
    children: b,
    ...c
  }, g) => /* @__PURE__ */ n(
    S,
    {
      ref: g,
      backgroundColor: t,
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
      ...c,
      children: /* @__PURE__ */ f(_, { children: [
        s && /* @__PURE__ */ n(
          S,
          {
            padding: e,
            style: { borderBottom: `1px solid ${l}` },
            children: s
          }
        ),
        /* @__PURE__ */ n(S, { padding: e, children: b }),
        p && /* @__PURE__ */ n(
          S,
          {
            padding: e,
            style: { borderTop: `1px solid ${l}` },
            children: p
          }
        )
      ] })
    }
  )
);
Ot.displayName = "Card";
const Ht = L(
  ({
    label: e,
    helperText: t,
    errorText: r,
    id: l,
    labelColor: o = u.Default,
    labelSize: a = w.XSmall,
    labelWeight: d = A.Medium,
    labelTextTransform: s,
    labelLetterSpacing: p,
    inputBackground: b = y.Default,
    inputBorderColor: c = T.Input,
    inputBorderRadius: g = I.Medium,
    inputBorderSide: h = "all",
    inputPadding: m = i.Medium,
    startAdornment: x,
    endAdornment: v,
    name: C,
    type: B,
    placeholder: H,
    value: X,
    defaultValue: N,
    disabled: z,
    readOnly: F,
    required: O,
    autoFocus: k,
    autoComplete: M,
    onChange: R,
    onBlur: G,
    onFocus: j
  }, Y) => {
    const U = Xe(), E = l ?? U, V = `${E}-helper`, J = `${E}-error`, q = !!r, de = q ? T.Error : c, se = h === "bottom", ee = se || !!(x || v), Z = /* @__PURE__ */ n(
      ze,
      {
        ref: Y,
        id: E,
        name: C,
        type: B,
        placeholder: H,
        value: X,
        defaultValue: N,
        disabled: z,
        readOnly: F,
        required: O,
        autoFocus: k,
        autoComplete: M,
        onChange: R,
        onBlur: G,
        onFocus: j,
        backgroundColor: ee ? "transparent" : b,
        borderColor: ee ? void 0 : de,
        borderRadius: ee ? void 0 : g,
        padding: m,
        style: {
          width: "100%",
          ...ee ? { flex: "1 1 auto", minWidth: 0 } : {}
        },
        "aria-describedby": q ? J : t ? V : void 0,
        "aria-invalid": q || void 0
      }
    ), ce = ee ? /* @__PURE__ */ f("div", { style: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      backgroundColor: b,
      ...se ? { borderBottom: `2px solid ${de}` } : { border: `1px solid ${de}`, borderRadius: g }
    }, children: [
      x,
      Z,
      v
    ] }) : Z;
    return /* @__PURE__ */ f(_, { space: i.XSmall, children: [
      e && /* @__PURE__ */ n(
        "label",
        {
          htmlFor: E,
          style: {
            fontSize: a,
            fontWeight: d,
            color: o,
            textTransform: s,
            letterSpacing: p
          },
          children: e
        }
      ),
      ce,
      q && /* @__PURE__ */ n(D, { as: "span", size: w.XXSmall, color: u.Error, id: J, children: r }),
      !q && t && /* @__PURE__ */ n(D, { as: "span", size: w.XXSmall, color: u.Subtle, id: V, children: t })
    ] });
  }
);
Ht.displayName = "TextField";
const jt = {
  info: {
    bg: y.InfoTint,
    text: u.Info,
    border: T.Info
  },
  success: {
    bg: y.PrimaryTint,
    text: u.Success,
    border: T.Success
  },
  warning: {
    bg: y.WarningTint,
    text: u.Warning,
    border: T.Warning
  },
  error: {
    bg: y.ErrorTint,
    text: u.Error,
    border: T.Error
  }
}, Pt = () => /* @__PURE__ */ n(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "16px", height: "16px" },
    children: /* @__PURE__ */ n(
      "path",
      {
        fillRule: "evenodd",
        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        clipRule: "evenodd"
      }
    )
  }
), Vt = L(
  ({ variant: e = "info", icon: t, dismissible: r, onDismiss: l, children: o }, a) => {
    const d = jt[e];
    return /* @__PURE__ */ n(
      S,
      {
        ref: a,
        role: "alert",
        padding: i.MediumLarge,
        borderRadius: I.Medium,
        style: {
          backgroundColor: d.bg,
          borderLeft: `4px solid ${d.border}`,
          position: "relative",
          zIndex: be.Banner
        },
        children: /* @__PURE__ */ f(W, { space: i.Medium, alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ f(W, { space: i.Medium, alignBlock: "center", grow: "fill", children: [
            t && /* @__PURE__ */ n(S, { style: { color: d.text, flexShrink: 0 }, children: t }),
            /* @__PURE__ */ n(D, { as: "span", size: w.XSmall, color: d.text, children: o })
          ] }),
          r && /* @__PURE__ */ n(
            re,
            {
              label: "Dismiss",
              onClick: l,
              color: d.text,
              padding: i.XXSmall,
              children: /* @__PURE__ */ n(Pt, {})
            }
          )
        ] })
      }
    );
  }
);
Vt.displayName = "Banner";
const jn = L(
  ({
    sections: e,
    activeId: t,
    onSelect: r,
    activeColor: l = u.Brand,
    activeBackground: o = y.Subtle
  }, a) => /* @__PURE__ */ n(_, { ref: a, as: "nav", space: i.Small, children: e.map((d, s) => /* @__PURE__ */ f(_, { space: i.XXSmall, children: [
    d.title && /* @__PURE__ */ n(S, { paddingInline: i.Medium, paddingBlock: i.XSmall, children: /* @__PURE__ */ n(
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
    /* @__PURE__ */ n(_, { as: "ul", style: { listStyle: "none", padding: 0, margin: 0 }, children: d.items.map((p) => {
      const b = p.id === t;
      return /* @__PURE__ */ n("li", { children: /* @__PURE__ */ n(
        ae,
        {
          disabled: p.disabled,
          onClick: () => r == null ? void 0 : r(p.id),
          borderRadius: I.Medium,
          color: p.disabled ? u.Disabled : b ? l : u.Default,
          backgroundColor: b ? o : y.Transparent,
          paddingBlock: i.Medium,
          paddingInline: i.MediumLarge,
          style: {
            width: "100%",
            fontSize: w.XSmall,
            textAlign: "left",
            cursor: p.disabled ? "default" : "pointer"
          },
          children: /* @__PURE__ */ f(W, { space: i.Medium, alignBlock: "center", children: [
            p.icon && /* @__PURE__ */ n(S, { style: { flexShrink: 0 }, children: p.icon }),
            /* @__PURE__ */ n(D, { as: "span", size: w.XSmall, style: { color: "inherit" }, children: p.label })
          ] })
        }
      ) }, p.id);
    }) }),
    s < e.length - 1 && /* @__PURE__ */ n(
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
jn.displayName = "Menu";
const Gt = L(
  ({
    tabs: e,
    activeId: t,
    defaultActiveId: r,
    onChange: l,
    variant: o = "underline",
    activeColor: a = u.Brand,
    inactiveColor: d = u.Subtle,
    pillBackground: s = y.Subtle,
    activePillBackground: p = y.Default,
    panelPadding: b = i.Large
  }, c) => {
    var H;
    const [g, h] = P(
      r ?? ((H = e[0]) == null ? void 0 : H.id)
    ), m = t !== void 0, x = m ? t : g, v = (X) => {
      m || h(X), l == null || l(X);
    }, C = e.find((X) => X.id === x);
    return /* @__PURE__ */ f(S, { ref: c, children: [
      o === "pill" ? /* @__PURE__ */ n(
        W,
        {
          role: "tablist",
          space: i.XSmall,
          alignBlock: "center",
          style: {
            backgroundColor: s,
            padding: i.Small,
            borderRadius: I.XXLarge,
            width: "fit-content"
          },
          children: e.map((X) => {
            const N = X.id === x;
            return /* @__PURE__ */ n(
              ae,
              {
                role: "tab",
                "aria-selected": N,
                "aria-controls": `tabpanel-${X.id}`,
                id: `tab-${X.id}`,
                disabled: X.disabled,
                onClick: () => v(X.id),
                paddingBlock: i.Medium,
                paddingInline: i.XXLarge,
                borderRadius: I.XLarge,
                color: N ? u.Default : X.disabled ? u.Disabled : d,
                backgroundColor: N ? p : y.Transparent,
                style: {
                  fontWeight: N ? A.Bold : A.Medium,
                  fontSize: w.XSmall,
                  boxShadow: N ? he.Raised : "none",
                  cursor: X.disabled ? "default" : "pointer"
                },
                children: X.label
              },
              X.id
            );
          })
        }
      ) : /* @__PURE__ */ n(
        W,
        {
          as: "div",
          role: "tablist",
          space: i.None,
          style: {
            borderBottom: `1px solid ${T.Default}`
          },
          children: e.map((X) => {
            const N = X.id === x;
            return /* @__PURE__ */ n(
              ae,
              {
                role: "tab",
                "aria-selected": N,
                "aria-controls": `tabpanel-${X.id}`,
                id: `tab-${X.id}`,
                disabled: X.disabled,
                onClick: () => v(X.id),
                paddingBlock: i.Medium,
                paddingInline: i.Large,
                borderRadius: I.None,
                color: N ? a : X.disabled ? u.Disabled : d,
                style: {
                  background: "none",
                  fontWeight: N ? A.Semibold : A.Regular,
                  fontSize: w.XSmall,
                  borderBottom: N ? `2px solid ${a}` : "2px solid transparent",
                  marginBottom: "-1px",
                  cursor: X.disabled ? "default" : "pointer"
                },
                children: X.label
              },
              X.id
            );
          })
        }
      ),
      C && /* @__PURE__ */ n(
        S,
        {
          role: "tabpanel",
          id: `tabpanel-${C.id}`,
          "aria-labelledby": `tab-${C.id}`,
          padding: b,
          children: C.content
        }
      )
    ] });
  }
);
Gt.displayName = "Tabs";
const _t = L(
  ({
    title: e,
    subtitle: t,
    breadcrumbs: r,
    actions: l,
    titleSize: o = w.XLarge,
    titleWeight: a = A.Bold,
    titleColor: d = u.Default,
    subtitleColor: s = u.Subtle,
    breadcrumbLinkColor: p = u.Link,
    borderColor: b = T.Default,
    paddingBlock: c = i.Large
  }, g) => /* @__PURE__ */ n(
    S,
    {
      ref: g,
      as: "header",
      paddingBlock: c,
      style: {
        borderBottom: `1px solid ${b}`
      },
      children: /* @__PURE__ */ f(_, { space: i.Medium, children: [
        r && r.length > 0 && /* @__PURE__ */ n(W, { space: i.XSmall, alignBlock: "center", children: r.map((h, m) => /* @__PURE__ */ f(te.Fragment, { children: [
          m > 0 && /* @__PURE__ */ n(D, { as: "span", color: u.Disabled, size: w.XSmall, children: "/" }),
          h.href ? /* @__PURE__ */ n(
            ge,
            {
              href: h.href,
              color: p,
              size: w.XSmall,
              style: { textDecoration: "none" },
              children: h.label
            }
          ) : /* @__PURE__ */ n(D, { as: "span", size: w.XSmall, color: u.Subtlest, children: h.label })
        ] }, m)) }),
        /* @__PURE__ */ f(W, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ f(_, { space: i.XXSmall, children: [
            /* @__PURE__ */ n(D, { as: "h1", size: o, weight: a, color: d, children: e }),
            t && /* @__PURE__ */ n(D, { as: "p", size: w.XSmall, color: s, children: t })
          ] }),
          l && /* @__PURE__ */ n(W, { space: i.Medium, alignBlock: "center", children: l })
        ] })
      ] })
    }
  )
);
_t.displayName = "Header";
const Yt = {
  XSmall: "320px",
  Small: "416px",
  Medium: "512px",
  Large: "704px",
  XLarge: "960px",
  Full: "min(96vw, 1440px)"
}, Kt = () => /* @__PURE__ */ n(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "20px", height: "20px" },
    children: /* @__PURE__ */ n(
      "path",
      {
        fillRule: "evenodd",
        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        clipRule: "evenodd"
      }
    )
  }
), Ut = L(
  ({ open: e, onClose: t, title: r, children: l, footer: o, size: a = Yt.Medium }, d) => {
    const s = Q(
      (p) => {
        p.key === "Escape" && t();
      },
      [t]
    );
    return K(() => {
      if (e)
        return document.addEventListener("keydown", s), document.body.style.overflow = "hidden", () => {
          document.removeEventListener("keydown", s), document.body.style.overflow = "";
        };
    }, [e, s]), e ? Ce(
      /* @__PURE__ */ n(
        S,
        {
          style: {
            position: "fixed",
            inset: 0,
            zIndex: be.Modal,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: i.Large,
            backgroundColor: y.Overlay
          },
          onClick: (p) => {
            p.target === p.currentTarget && t();
          },
          children: /* @__PURE__ */ n(
            S,
            {
              ref: d,
              role: "dialog",
              "aria-modal": "true",
              "aria-label": r,
              backgroundColor: y.Default,
              borderRadius: I.XLarge,
              elevation: he.Overlay,
              overflow: "hidden",
              style: {
                width: "100%",
                maxWidth: a,
                maxHeight: "85vh",
                display: "flex",
                flexDirection: "column"
              },
              children: /* @__PURE__ */ f(_, { children: [
                r && /* @__PURE__ */ n(
                  S,
                  {
                    padding: i.Large,
                    style: { borderBottom: `1px solid ${T.Default}` },
                    children: /* @__PURE__ */ f(W, { alignBlock: "center", spread: "space-between", children: [
                      /* @__PURE__ */ n(D, { as: "h2", size: w.Large, weight: A.Semibold, color: u.Default, children: r }),
                      /* @__PURE__ */ n(re, { label: "Close", onClick: t, color: u.Subtle, children: /* @__PURE__ */ n(Kt, {}) })
                    ] })
                  }
                ),
                /* @__PURE__ */ n(S, { padding: i.Large, overflow: "auto", style: { flex: "1 1 auto" }, children: l }),
                o && /* @__PURE__ */ n(
                  S,
                  {
                    padding: i.Large,
                    style: { borderTop: `1px solid ${T.Default}` },
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
Ut.displayName = "Modal";
const Ee = 200, qt = {
  start: "flex-start",
  center: "center",
  end: "flex-end"
};
function Jt({
  open: e,
  onClose: t,
  children: r,
  offsetTop: l = 0,
  padding: o = i.Large,
  maxWidth: a,
  align: d = "center",
  blur: s = !0,
  closeOnMouseLeave: p = !1
}) {
  const [b, c] = P(e), [g, h] = P(!1), m = $(l), x = $(d);
  if (K(() => {
    if (e) {
      c(!0);
      const B = requestAnimationFrame(() => h(!0));
      return () => cancelAnimationFrame(B);
    }
    h(!1);
    const C = window.setTimeout(() => c(!1), Ee);
    return () => window.clearTimeout(C);
  }, [e]), K(() => {
    if (!e) return;
    const C = (B) => {
      B.key === "Escape" && t();
    };
    return document.addEventListener("keydown", C), () => document.removeEventListener("keydown", C);
  }, [e, t]), !b) return null;
  const v = typeof m == "number" ? `${m}px` : m;
  return Ce(
    /* @__PURE__ */ f(
      S,
      {
        onClick: t,
        style: {
          position: "fixed",
          top: v,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: be.Modal,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          opacity: g ? 1 : 0,
          transition: `opacity ${Ee}ms ease`
        },
        children: [
          /* @__PURE__ */ n(
            S,
            {
              onClick: (C) => C.stopPropagation(),
              onMouseLeave: p ? t : void 0,
              backgroundColor: y.Default,
              padding: o,
              style: {
                display: "flex",
                justifyContent: qt[x],
                width: "100%",
                transform: g ? "translateY(0)" : "translateY(-12px)",
                transition: `transform ${Ee + 50}ms ease`
              },
              children: /* @__PURE__ */ n(S, { style: { width: "100%", maxWidth: a }, children: r })
            }
          ),
          s && /* @__PURE__ */ n(
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
Jt.displayName = "Drawer";
const Zt = L(
  ({ trigger: e, sections: t, activeId: r, onSelect: l }, o) => {
    const [a, d] = P(!1), s = oe(null), p = () => d((h) => !h), b = (h) => {
      l == null || l(h), d(!1);
    }, c = Q((h) => {
      h.key === "Escape" && d(!1);
    }, []), g = Q((h) => {
      s.current && !s.current.contains(h.target) && d(!1);
    }, []);
    return K(() => {
      if (a)
        return document.addEventListener("keydown", c), document.addEventListener("mousedown", g), () => {
          document.removeEventListener("keydown", c), document.removeEventListener("mousedown", g);
        };
    }, [a, c, g]), /* @__PURE__ */ f(
      S,
      {
        ref: (h) => {
          s.current = h, typeof o == "function" ? o(h) : o && (o.current = h);
        },
        style: { position: "relative", display: "inline-block" },
        children: [
          /* @__PURE__ */ n(
            W,
            {
              style: { cursor: "pointer" },
              onClick: p,
              alignBlock: "center",
              children: e
            }
          ),
          a && /* @__PURE__ */ n(
            S,
            {
              backgroundColor: y.Default,
              borderColor: T.Default,
              borderSide: "all",
              borderRadius: I.Large,
              elevation: he.Dropdown,
              padding: i.XSmall,
              style: {
                position: "absolute",
                top: "100%",
                right: 0,
                marginTop: i.XSmall,
                minWidth: "192px",
                zIndex: be.Dropdown
              },
              children: /* @__PURE__ */ n(
                jn,
                {
                  sections: t,
                  activeId: r,
                  onSelect: b
                }
              )
            }
          )
        ]
      }
    );
  }
);
Zt.displayName = "DropdownMenu";
const Qt = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), er = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), nr = L(
  ({
    sections: e,
    activeId: t,
    onSelect: r,
    header: l,
    footer: o,
    collapsed: a = !1,
    onToggleCollapse: d,
    width: s = "256px",
    collapsedWidth: p = "64px",
    activeColor: b = u.Brand,
    activeBackground: c = y.Subtle,
    borderColor: g = T.Default
  }, h) => /* @__PURE__ */ f(
    S,
    {
      ref: h,
      as: "aside",
      backgroundColor: y.Default,
      style: {
        width: a ? p : s,
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
        l && /* @__PURE__ */ n(
          S,
          {
            padding: i.Large,
            style: { borderBottom: `1px solid ${g}` },
            children: l
          }
        ),
        /* @__PURE__ */ n(
          _,
          {
            space: i.Small,
            grow: "fill",
            style: { padding: i.Medium, overflow: "auto" },
            children: e.map((m, x) => /* @__PURE__ */ f(_, { space: i.XXSmall, children: [
              m.title && !a && /* @__PURE__ */ n(S, { paddingInline: i.Medium, paddingBlock: i.XSmall, children: /* @__PURE__ */ n(
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
                const C = v.id === t;
                return /* @__PURE__ */ f(
                  ae,
                  {
                    onClick: () => r == null ? void 0 : r(v.id),
                    title: a ? v.label : void 0,
                    borderRadius: I.Medium,
                    color: C ? b : u.Default,
                    backgroundColor: C ? c : y.Transparent,
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
                      v.icon && /* @__PURE__ */ n(S, { style: { flexShrink: 0 }, children: v.icon }),
                      !a && /* @__PURE__ */ f(ne, { children: [
                        /* @__PURE__ */ n(D, { as: "span", style: { flex: "1 1 auto", color: "inherit" }, children: v.label }),
                        v.badge && /* @__PURE__ */ n(Fn, { variant: v.badgeVariant ?? "default", children: v.badge })
                      ] })
                    ]
                  },
                  v.id
                );
              })
            ] }, x))
          }
        ),
        d && /* @__PURE__ */ n(
          S,
          {
            padding: i.Medium,
            style: { borderTop: `1px solid ${g}` },
            children: /* @__PURE__ */ n(
              re,
              {
                label: a ? "Expand sidebar" : "Collapse sidebar",
                onClick: d,
                color: u.Subtle,
                padding: i.XSmall,
                children: a ? /* @__PURE__ */ n(er, {}) : /* @__PURE__ */ n(Qt, {})
              }
            )
          }
        ),
        o && /* @__PURE__ */ n(
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
nr.displayName = "Sidebar";
const tr = () => /* @__PURE__ */ n(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "20px", height: "20px" },
    children: /* @__PURE__ */ n(
      "path",
      {
        fillRule: "evenodd",
        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        clipRule: "evenodd"
      }
    )
  }
), rr = L(
  ({
    open: e,
    onClose: t,
    title: r,
    side: l = "right",
    mode: o = "overlay",
    width: a = "384px",
    children: d
  }, s) => {
    const p = Q(
      (c) => {
        c.key === "Escape" && t();
      },
      [t]
    );
    if (K(() => {
      if (e)
        return document.addEventListener("keydown", p), () => document.removeEventListener("keydown", p);
    }, [e, p]), !e) return null;
    const b = /* @__PURE__ */ f(
      S,
      {
        ref: s,
        backgroundColor: y.Default,
        elevation: he.Overlay,
        style: {
          position: "fixed",
          top: 0,
          bottom: 0,
          [l]: 0,
          width: a,
          zIndex: be.Modal,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden"
        },
        children: [
          r && /* @__PURE__ */ n(
            S,
            {
              padding: i.Large,
              style: { borderBottom: `1px solid ${T.Default}` },
              children: /* @__PURE__ */ f(W, { alignBlock: "center", spread: "space-between", children: [
                /* @__PURE__ */ n(D, { as: "h2", size: w.Large, weight: A.Semibold, color: u.Default, children: r }),
                /* @__PURE__ */ n(re, { label: "Close panel", onClick: t, color: u.Subtle, children: /* @__PURE__ */ n(tr, {}) })
              ] })
            }
          ),
          /* @__PURE__ */ n(S, { padding: i.Large, overflow: "auto", style: { flex: "1 1 auto" }, children: d })
        ]
      }
    );
    return o === "overlay" ? Ce(
      /* @__PURE__ */ n(
        S,
        {
          style: {
            position: "fixed",
            inset: 0,
            zIndex: be.Modal,
            backgroundColor: y.Overlay
          },
          onClick: (c) => {
            c.target === c.currentTarget && t();
          },
          children: b
        }
      ),
      document.body
    ) : b;
  }
);
rr.displayName = "Panel";
const lr = L(
  ({
    padding: e = i.Large,
    color: t = u.Subtle,
    borderColor: r = T.Default,
    children: l
  }, o) => /* @__PURE__ */ n(
    S,
    {
      ref: o,
      as: "aside",
      padding: e,
      style: {
        borderLeft: `3px solid ${r}`,
        color: t
      },
      children: l
    }
  )
);
lr.displayName = "Aside";
const ir = L(
  ({
    topNav: e,
    sideNav: t,
    mobileNav: r,
    backgroundColor: l = y.Surface,
    children: o
  }, a) => {
    const s = Be() === "mobile";
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
                e,
                /* @__PURE__ */ n(
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
ir.displayName = "Layout";
const or = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
function Rn(e, t) {
  return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function ar(e, t) {
  return new Date(e, t + 1, 0).getDate();
}
function sr(e, t) {
  return new Date(e, t, 1).getDay();
}
const dr = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), cr = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), ur = [
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
], pr = L(
  ({
    value: e,
    defaultValue: t,
    onChange: r,
    min: l,
    max: o,
    selectedColor: a = u.Inverse,
    selectedBackground: d = y.Brand
  }, s) => {
    const p = /* @__PURE__ */ new Date(), [b, c] = P(t), g = e !== void 0, h = g ? e : b, [m, x] = P(
      (h ?? p).getFullYear()
    ), [v, C] = P(
      (h ?? p).getMonth()
    ), B = Se(() => ar(m, v), [m, v]), H = Se(() => sr(m, v), [m, v]), X = () => {
      v === 0 ? (C(11), x((k) => k - 1)) : C((k) => k - 1);
    }, N = () => {
      v === 11 ? (C(0), x((k) => k + 1)) : C((k) => k + 1);
    }, z = (k) => {
      const M = new Date(m, v, k);
      g || c(M), r == null || r(M);
    }, F = (k) => {
      const M = new Date(m, v, k);
      return !!(l && M < new Date(l.getFullYear(), l.getMonth(), l.getDate()) || o && M > new Date(o.getFullYear(), o.getMonth(), o.getDate()));
    }, O = [];
    for (let k = 0; k < H; k++)
      O.push(/* @__PURE__ */ n(S, {}, `empty-${k}`));
    for (let k = 1; k <= B; k++) {
      const M = new Date(m, v, k), R = h ? Rn(M, h) : !1, G = Rn(M, p), j = F(k);
      O.push(
        /* @__PURE__ */ n(
          ae,
          {
            disabled: j,
            onClick: () => z(k),
            borderRadius: I.Medium,
            style: {
              width: "36px",
              height: "36px",
              padding: 0,
              fontSize: w.XSmall,
              fontWeight: R ? A.Semibold : A.Regular,
              backgroundColor: R ? d : "transparent",
              color: R ? a : j ? u.Disabled : u.Default,
              border: G && !R ? `1px solid ${T.Default}` : "none",
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
        borderRadius: I.XLarge,
        borderColor: T.Default,
        borderSide: "all",
        backgroundColor: y.Default,
        style: { width: "fit-content" },
        children: [
          /* @__PURE__ */ f(
            W,
            {
              alignBlock: "center",
              spread: "space-between",
              marginBlockEnd: i.Medium,
              children: [
                /* @__PURE__ */ n(re, { label: "Previous month", onClick: X, color: u.Subtle, padding: i.XSmall, children: /* @__PURE__ */ n(dr, {}) }),
                /* @__PURE__ */ f(D, { as: "span", size: w.XSmall, weight: A.Semibold, color: u.Default, children: [
                  ur[v],
                  " ",
                  m
                ] }),
                /* @__PURE__ */ n(re, { label: "Next month", onClick: N, color: u.Subtle, padding: i.XSmall, children: /* @__PURE__ */ n(cr, {}) })
              ]
            }
          ),
          /* @__PURE__ */ f(Wn, { columns: 7, gap: i.XXSmall, children: [
            or.map((k) => /* @__PURE__ */ n(
              D,
              {
                as: "span",
                size: w.XXSmall,
                weight: A.Medium,
                color: u.Subtlest,
                align: "center",
                style: { padding: `${i.XSmall} 0` },
                children: k
              },
              k
            )),
            O
          ] })
        ]
      }
    );
  }
);
pr.displayName = "Calendar";
const br = L(
  ({ header: e, description: t, image: r, primaryAction: l, secondaryAction: o }, a) => /* @__PURE__ */ f(
    _,
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
        r && /* @__PURE__ */ n("div", { children: r }),
        /* @__PURE__ */ f(_, { space: i.Medium, alignInline: "center", children: [
          /* @__PURE__ */ n(
            D,
            {
              as: "h3",
              fontFamily: Kn.Display,
              size: w.XLarge,
              weight: A.Bold,
              color: u.Default,
              children: e
            }
          ),
          t && /* @__PURE__ */ n(D, { as: "p", size: w.XSmall, color: u.Subtle, lineHeight: 1.6, children: t })
        ] }),
        (l || o) && /* @__PURE__ */ f(W, { space: i.Medium, alignBlock: "center", children: [
          l,
          o
        ] })
      ]
    }
  )
);
br.displayName = "EmptyState";
const hr = ({ order: e }) => /* @__PURE__ */ n(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    style: {
      width: "12px",
      height: "12px",
      marginInlineStart: "4px",
      opacity: e ? 1 : 0.3
    },
    children: e === "ASC" ? /* @__PURE__ */ n("path", { d: "M8 3l4 5H4l4-5z" }) : e === "DESC" ? /* @__PURE__ */ n("path", { d: "M8 13l4-5H4l4 5z" }) : /* @__PURE__ */ f(ne, { children: [
      /* @__PURE__ */ n("path", { d: "M8 3l3 4H5l3-4z" }),
      /* @__PURE__ */ n("path", { d: "M8 13l3-4H5l3 4z" })
    ] })
  }
), gr = L(
  ({
    caption: e,
    head: t,
    rows: r,
    rowsPerPage: l,
    page: o,
    defaultPage: a = 1,
    sortKey: d,
    sortOrder: s,
    defaultSortKey: p,
    defaultSortOrder: b = "ASC",
    onSort: c,
    onSetPage: g,
    isLoading: h = !1,
    isFixedSize: m = !1
  }, x) => {
    const [v, C] = P(a), [B, H] = P(p), [X, N] = P(b), z = o !== void 0, F = z ? o : v, O = d !== void 0, k = O ? d : B, M = O ? s ?? "ASC" : X, R = l ? Math.max(1, Math.ceil(r.length / l)) : 1, G = Se(() => {
      if (!l) return r;
      const E = (F - 1) * l;
      return r.slice(E, E + l);
    }, [r, l, F]), j = (E) => {
      const V = k === E && M === "ASC" ? "DESC" : "ASC";
      O || (H(E), N(V)), c == null || c(E, V);
    }, Y = (E) => {
      z || C(E), g == null || g(E);
    }, U = {
      padding: `${i.MediumLarge} ${i.Large}`
    };
    return /* @__PURE__ */ f(S, { style: { position: "relative" }, children: [
      h && /* @__PURE__ */ n(
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
            borderRadius: I.XXLarge
          },
          children: /* @__PURE__ */ n(On, { size: "large" })
        }
      ),
      /* @__PURE__ */ f(
        "table",
        {
          ref: x,
          style: {
            width: "100%",
            borderCollapse: "collapse",
            tableLayout: m ? "fixed" : "auto",
            fontSize: w.XSmall
          },
          children: [
            e && /* @__PURE__ */ n(
              "caption",
              {
                style: {
                  textAlign: "left",
                  paddingBlockEnd: i.Medium,
                  fontWeight: A.Semibold,
                  fontSize: w.Small,
                  color: u.Default
                },
                children: e
              }
            ),
            /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ n("tr", { children: t.map((E) => /* @__PURE__ */ n(
              "th",
              {
                style: {
                  ...U,
                  textAlign: "left",
                  fontWeight: A.Semibold,
                  fontSize: w.XXSmall,
                  color: u.Subtle,
                  borderBottom: `1px solid ${T.Default}`,
                  whiteSpace: "nowrap",
                  cursor: E.isSortable ? "pointer" : "default",
                  userSelect: E.isSortable ? "none" : void 0,
                  ...E.width ? { width: E.width } : {}
                },
                onClick: E.isSortable ? () => j(E.key) : void 0,
                children: /* @__PURE__ */ f("span", { style: { display: "inline-flex", alignItems: "center" }, children: [
                  E.label,
                  E.isSortable && /* @__PURE__ */ n(
                    hr,
                    {
                      order: k === E.key ? M : void 0
                    }
                  )
                ] })
              },
              E.key
            )) }) }),
            /* @__PURE__ */ f("tbody", { children: [
              G.map((E) => /* @__PURE__ */ n(
                "tr",
                {
                  onClick: E.onClick,
                  style: {
                    cursor: E.onClick ? "pointer" : "default",
                    borderBottom: `1px solid ${T.Default}`
                  },
                  children: E.cells.map((V, J) => /* @__PURE__ */ n("td", { style: { ...U, color: u.Default }, children: V }, J))
                },
                E.key
              )),
              G.length === 0 && /* @__PURE__ */ n("tr", { children: /* @__PURE__ */ n(
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
      l && R > 1 && /* @__PURE__ */ f(
        W,
        {
          space: i.Medium,
          alignBlock: "center",
          alignInline: "center",
          style: { paddingBlock: i.Large },
          children: [
            /* @__PURE__ */ n(
              ae,
              {
                disabled: F <= 1,
                onClick: () => Y(F - 1),
                paddingBlock: i.XSmall,
                paddingInline: i.Medium,
                borderRadius: I.Large,
                backgroundColor: y.Default,
                color: u.Default,
                style: { fontSize: w.XXSmall, border: `1px solid ${T.Default}` },
                children: "Previous"
              }
            ),
            /* @__PURE__ */ f(D, { size: w.XXSmall, color: u.Subtle, children: [
              "Page ",
              F,
              " of ",
              R
            ] }),
            /* @__PURE__ */ n(
              ae,
              {
                disabled: F >= R,
                onClick: () => Y(F + 1),
                paddingBlock: i.XSmall,
                paddingInline: i.Medium,
                borderRadius: I.Large,
                backgroundColor: y.Default,
                color: u.Default,
                style: { fontSize: w.XXSmall, border: `1px solid ${T.Default}` },
                children: "Next"
              }
            )
          ]
        }
      )
    ] });
  }
);
gr.displayName = "Table";
const mr = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z", clipRule: "evenodd" }) }), fr = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" }) }), yr = L(
  ({
    defaultValue: e,
    label: t,
    editButtonLabel: r,
    editView: l,
    readView: o,
    onConfirm: a,
    onCancel: d
  }, s) => {
    const [p, b] = P(!1), [c, g] = P(e);
    oe(null), K(() => {
      g(e);
    }, [e]);
    const h = Q(() => {
      b(!1), a(c);
    }, [c, a]), m = Q(() => {
      g(e), b(!1), d == null || d();
    }, [e, d]), x = Q(
      (B) => {
        B.key === "Enter" && h(), B.key === "Escape" && m();
      },
      [h, m]
    ), v = (B) => /* @__PURE__ */ n(
      S,
      {
        style: {
          paddingBlock: i.XSmall,
          paddingInline: i.Small,
          cursor: "pointer",
          borderRadius: I.Medium,
          wordBreak: "break-word",
          minHeight: "1.5em"
        },
        children: /* @__PURE__ */ n(D, { as: "span", size: w.Small, color: u.Default, children: B || " " })
      }
    ), C = (B) => /* @__PURE__ */ n(
      ze,
      {
        value: B.value,
        onChange: B.onChange,
        onKeyDown: B.onKeyDown,
        autoFocus: B.autoFocus,
        backgroundColor: y.Default,
        borderColor: T.Focus,
        borderRadius: I.Medium,
        padding: i.XSmall,
        style: { fontSize: w.Small, width: "100%" }
      }
    );
    return /* @__PURE__ */ f("div", { ref: s, children: [
      t && /* @__PURE__ */ n(
        D,
        {
          as: "label",
          size: w.XXSmall,
          weight: 500,
          color: u.Subtle,
          style: { display: "block", marginBlockEnd: i.XSmall },
          children: t
        }
      ),
      p ? /* @__PURE__ */ f(W, { space: i.XSmall, alignBlock: "start", children: [
        /* @__PURE__ */ n(S, { style: { flex: "1 1 auto" }, children: (l ?? C)({
          value: c,
          onChange: (B) => g(B.target.value),
          onKeyDown: x,
          autoFocus: !0
        }) }),
        /* @__PURE__ */ n(
          re,
          {
            label: "Confirm",
            onClick: h,
            color: u.Success,
            padding: i.XSmall,
            children: /* @__PURE__ */ n(mr, {})
          }
        ),
        /* @__PURE__ */ n(
          re,
          {
            label: "Cancel",
            onClick: m,
            color: u.Error,
            padding: i.XSmall,
            children: /* @__PURE__ */ n(fr, {})
          }
        )
      ] }) : /* @__PURE__ */ n(
        S,
        {
          onClick: () => b(!0),
          role: "button",
          tabIndex: 0,
          "aria-label": r ?? e ?? "Edit",
          onKeyDown: (B) => {
            (B.key === "Enter" || B.key === " ") && (B.preventDefault(), b(!0));
          },
          style: { cursor: "pointer" },
          children: (o ?? v)(e)
        }
      )
    ] });
  }
);
yr.displayName = "InlineEdit";
const xr = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "currentColor", style: { width: "14px", height: "14px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z", clipRule: "evenodd" }) }), vr = L(
  ({ trigger: e, groups: t, checked: r, onChange: l }, o) => {
    const [a, d] = P(!1), s = oe(null), p = Q((c) => {
      c.key === "Escape" && d(!1);
    }, []), b = Q((c) => {
      s.current && !s.current.contains(c.target) && d(!1);
    }, []);
    return K(() => {
      if (a)
        return document.addEventListener("keydown", p), document.addEventListener("mousedown", b), () => {
          document.removeEventListener("keydown", p), document.removeEventListener("mousedown", b);
        };
    }, [a, p, b]), /* @__PURE__ */ f(
      S,
      {
        ref: (c) => {
          s.current = c, typeof o == "function" ? o(c) : o && (o.current = c);
        },
        style: { position: "relative", display: "inline-block" },
        children: [
          /* @__PURE__ */ n(
            W,
            {
              style: { cursor: "pointer" },
              onClick: () => d((c) => !c),
              alignBlock: "center",
              children: e
            }
          ),
          a && /* @__PURE__ */ n(
            S,
            {
              backgroundColor: y.Default,
              borderColor: T.Default,
              borderSide: "all",
              borderRadius: I.XLarge,
              elevation: he.Dropdown,
              padding: i.XSmall,
              style: {
                position: "absolute",
                top: "100%",
                left: 0,
                marginTop: i.XSmall,
                minWidth: "224px",
                zIndex: be.Dropdown
              },
              children: /* @__PURE__ */ n(_, { space: i.XSmall, children: t.map((c, g) => /* @__PURE__ */ f(_, { space: i.XXSmall, children: [
                c.title && /* @__PURE__ */ n(S, { paddingInline: i.MediumLarge, paddingBlock: i.XSmall, children: /* @__PURE__ */ n(
                  D,
                  {
                    as: "span",
                    size: w.XXSmall,
                    weight: A.Semibold,
                    color: u.Subtlest,
                    textTransform: "uppercase",
                    children: c.title
                  }
                ) }),
                c.items.map((h) => {
                  const m = !!r[h.id];
                  return /* @__PURE__ */ f(
                    ae,
                    {
                      onClick: () => l(h.id, !m),
                      borderRadius: I.Medium,
                      backgroundColor: y.Transparent,
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
                        /* @__PURE__ */ n(
                          S,
                          {
                            style: {
                              width: "16px",
                              height: "16px",
                              borderRadius: I.Small,
                              border: m ? "none" : `2px solid ${T.Outline}`,
                              backgroundColor: m ? y.Brand : y.Transparent,
                              color: u.Inverse,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0
                            },
                            children: m && /* @__PURE__ */ n(xr, {})
                          }
                        ),
                        /* @__PURE__ */ n(D, { as: "span", size: w.XSmall, style: { color: "inherit" }, children: h.label })
                      ]
                    },
                    h.id
                  );
                }),
                g < t.length - 1 && /* @__PURE__ */ n(
                  S,
                  {
                    style: {
                      borderTop: `1px solid ${T.Default}`,
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
vr.displayName = "DropdownCheckboxMenu";
const Sr = L(
  ({
    label: e,
    helperText: t,
    errorText: r,
    id: l,
    labelColor: o = u.Default,
    labelSize: a = w.XSmall,
    labelWeight: d = A.Medium,
    labelTextTransform: s,
    labelLetterSpacing: p,
    inputBackground: b = y.Subtle,
    inputBorderColor: c,
    inputBorderRadius: g = I.XXLarge,
    inputBorderSide: h = "all",
    inputPadding: m = i.MediumLarge,
    name: x,
    value: v,
    defaultValue: C,
    placeholder: B,
    options: H,
    disabled: X,
    required: N,
    onChange: z,
    onBlur: F
  }, O) => {
    const k = Xe(), M = l ?? k, R = `${M}-helper`, G = `${M}-error`, j = !!r, Y = j ? T.Error : c, U = h === "bottom", E = /* @__PURE__ */ n(
      Hn,
      {
        ref: O,
        id: M,
        name: x,
        value: v,
        defaultValue: C,
        placeholder: B,
        options: H,
        disabled: X,
        required: N,
        onChange: z,
        onBlur: F,
        backgroundColor: U ? "transparent" : b,
        borderColor: U ? void 0 : Y,
        borderRadius: U ? void 0 : g,
        padding: m,
        fontSize: w.XSmall,
        color: u.Default,
        style: { width: "100%" },
        "aria-describedby": j ? G : t ? R : void 0,
        "aria-invalid": j || void 0
      }
    ), V = U ? /* @__PURE__ */ n("div", { style: {
      width: "100%",
      backgroundColor: b,
      borderBottom: `2px solid ${Y}`
    }, children: E }) : E;
    return /* @__PURE__ */ f(_, { space: i.XSmall, children: [
      e && /* @__PURE__ */ n(
        "label",
        {
          htmlFor: M,
          style: {
            fontSize: a,
            fontWeight: d,
            color: o,
            textTransform: s,
            letterSpacing: p
          },
          children: e
        }
      ),
      V,
      j && /* @__PURE__ */ n(D, { as: "span", size: w.XXSmall, color: u.Error, id: G, children: r }),
      !j && t && /* @__PURE__ */ n(D, { as: "span", size: w.XXSmall, color: u.Subtle, id: R, children: t })
    ] });
  }
);
Sr.displayName = "SelectField";
const wr = {
  info: { bg: y.Default, text: u.Info, accent: "#3b82f6" },
  success: { bg: y.Default, text: u.Success, accent: "#22c55e" },
  warning: { bg: y.Default, text: u.Warning, accent: "#f59e0b" },
  error: { bg: y.Default, text: u.Error, accent: "#ba1a1a" }
}, kr = () => /* @__PURE__ */ n(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "14px", height: "14px" },
    children: /* @__PURE__ */ n("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  }
), Xr = L(
  ({ open: e, onClose: t, duration: r = 5e3, variant: l = "info", icon: o, children: a }, d) => {
    if (K(() => {
      if (!e || r === 0) return;
      const p = setTimeout(t, r);
      return () => clearTimeout(p);
    }, [e, r, t]), !e) return null;
    const s = wr[l];
    return Ce(
      /* @__PURE__ */ n(
        S,
        {
          ref: d,
          role: "alert",
          "aria-live": "assertive",
          backgroundColor: s.bg,
          borderRadius: I.XXLarge,
          elevation: he.Overlay,
          padding: i.Large,
          style: {
            position: "fixed",
            bottom: i.XXXLarge,
            right: i.XXXLarge,
            zIndex: be.Banner,
            minWidth: "320px",
            maxWidth: "448px",
            borderLeft: `4px solid ${s.accent}`
          },
          children: /* @__PURE__ */ f(W, { space: i.MediumLarge, alignBlock: "center", spread: "space-between", children: [
            /* @__PURE__ */ f(W, { space: i.MediumLarge, alignBlock: "center", grow: "fill", children: [
              o && /* @__PURE__ */ n(S, { style: { color: s.accent, flexShrink: 0 }, children: o }),
              /* @__PURE__ */ n(D, { as: "span", size: w.XSmall, weight: A.Medium, color: u.Default, children: a })
            ] }),
            /* @__PURE__ */ n(
              re,
              {
                label: "Dismiss",
                onClick: t,
                color: u.Subtle,
                padding: i.XXSmall,
                children: /* @__PURE__ */ n(kr, {})
              }
            )
          ] })
        }
      ),
      document.body
    );
  }
);
Xr.displayName = "Toast";
const Cr = L(
  ({ items: e, activeId: t, onSelect: r, fab: l }, o) => /* @__PURE__ */ n(
    S,
    {
      ref: o,
      as: "nav",
      style: {
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: be.Sticky,
        backgroundColor: y.Default,
        borderTop: `1px solid ${T.Default}`,
        backdropFilter: "blur(20px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingInline: i.Large,
        paddingBlock: i.Medium
      },
      children: e.map((a, d) => {
        const s = a.id === t, p = Math.floor(e.length / 2), b = l && d === p;
        return /* @__PURE__ */ f(te.Fragment, { children: [
          b && /* @__PURE__ */ n(S, { style: { marginTop: `-${i.XXXLarge}` }, children: l }),
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
                color: s ? u.Brand : u.Disabled
              },
              children: [
                /* @__PURE__ */ n(S, { style: { width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center" }, children: a.icon }),
                /* @__PURE__ */ n(
                  D,
                  {
                    as: "span",
                    size: w.Micro,
                    weight: A.Bold,
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
Cr.displayName = "MobileNav";
const Br = () => /* @__PURE__ */ n(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    style: { width: "12px", height: "12px" },
    children: /* @__PURE__ */ n(
      "path",
      {
        fillRule: "evenodd",
        d: "M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z",
        clipRule: "evenodd"
      }
    )
  }
), Lr = L(
  ({ items: e, showLabels: t, variant: r = "dot" }, l) => {
    const o = $(t ?? !0), a = 32, d = e.filter((s) => s.status === "visited").length;
    return r === "bar" ? /* @__PURE__ */ n(
      "div",
      {
        ref: l,
        role: "progressbar",
        "aria-valuemin": 0,
        "aria-valuemax": e.length,
        "aria-valuenow": d,
        style: { display: "grid", gridTemplateColumns: `repeat(${e.length}, 1fr)`, gap: i.Medium, width: "100%" },
        children: e.map((s, p) => {
          const b = s.status === "visited", c = s.status === "current";
          return e.length - 1, /* @__PURE__ */ f("div", { style: { display: "flex", flexDirection: "column", gap: i.Medium }, children: [
            /* @__PURE__ */ n("div", { style: {
              height: 6,
              borderRadius: I.Full,
              background: c ? ve.Brand : "none",
              backgroundColor: c ? void 0 : b ? y.PrimaryContainer : y.NeutralBold,
              opacity: b ? 0.4 : 1,
              boxShadow: c ? "0 0 8px var(--bbui-color-primary), 0 0 20px var(--bbui-color-primary)" : "none",
              transition: "all 400ms ease",
              cursor: s.onClick ? "pointer" : "default"
            }, onClick: s.onClick }),
            o && /* @__PURE__ */ n(
              D,
              {
                as: "p",
                size: w.Micro,
                weight: c ? A.Bold : A.Medium,
                color: c ? u.Brand : b ? u.Subtle : u.Disabled,
                textTransform: "uppercase",
                letterSpacing: $n.Widest,
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
        "aria-valuemax": e.length,
        "aria-valuenow": d,
        style: { width: "100%", padding: `0 ${i.Medium}` },
        children: [
          /* @__PURE__ */ n("div", { style: {
            display: "flex",
            alignItems: "center",
            width: "100%"
          }, children: e.map((s, p) => {
            const b = p === e.length - 1, c = s.status === "visited", g = s.status === "current", h = s.status === "disabled", m = c ? ve.Brand : g ? "transparent" : y.NeutralBold, x = /* @__PURE__ */ n(
              "div",
              {
                style: {
                  width: a,
                  height: a,
                  borderRadius: I.Full,
                  background: c ? ve.Brand : m,
                  backgroundColor: c ? void 0 : m,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: c ? u.OnBrand : g ? u.Brand : h ? u.Disabled : u.Subtle,
                  fontSize: w.XSmall,
                  fontWeight: A.Bold,
                  border: g ? `2px solid ${u.Brand}` : "none",
                  cursor: s.onClick || s.href ? "pointer" : "default",
                  transition: "all 300ms ease"
                },
                onClick: s.onClick,
                children: c ? /* @__PURE__ */ n(Br, {}) : p + 1
              }
            ), v = s.href ? /* @__PURE__ */ n("a", { href: s.href, style: { textDecoration: "none", color: "inherit" }, children: x }) : x;
            return /* @__PURE__ */ f(te.Fragment, { children: [
              v,
              !b && /* @__PURE__ */ n("div", { style: {
                flex: "1 1 auto",
                height: 2,
                backgroundColor: y.NeutralBold,
                position: "relative",
                marginInline: i.XSmall,
                borderRadius: I.Full,
                overflow: "hidden"
              }, children: /* @__PURE__ */ n("div", { style: {
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: `${c ? s.percentageComplete : 0}%`,
                background: ve.Brand,
                borderRadius: I.Full,
                transition: "width 400ms ease"
              } }) })
            ] }, s.id);
          }) }),
          o && /* @__PURE__ */ n("div", { style: {
            display: "flex",
            alignItems: "flex-start",
            width: "100%",
            marginTop: i.Medium
          }, children: e.map((s, p) => {
            const b = p === e.length - 1, c = s.status === "visited", g = s.status === "current", h = s.status === "disabled", m = c ? u.Brand : g ? u.Default : h ? u.Disabled : u.Subtle;
            return /* @__PURE__ */ f(te.Fragment, { children: [
              /* @__PURE__ */ n("div", { style: {
                width: a,
                flexShrink: 0,
                display: "flex",
                justifyContent: "center"
              }, children: /* @__PURE__ */ n(
                D,
                {
                  as: "span",
                  size: w.XXSmall,
                  weight: g ? A.Bold : A.Medium,
                  color: m,
                  align: "center",
                  style: {
                    whiteSpace: "nowrap"
                  },
                  children: s.label
                }
              ) }),
              !b && /* @__PURE__ */ n("div", { style: { flex: "1 1 auto" } })
            ] }, s.id);
          }) })
        ]
      }
    );
  }
);
Lr.displayName = "ProgressTracker";
const Ir = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";
function Mr(e) {
  const t = /* @__PURE__ */ f(W, { space: i.XSmall, alignBlock: "center", children: [
    /* @__PURE__ */ n(
      D,
      {
        size: w.XSmall,
        weight: A.Semibold,
        color: u.Brand,
        children: e.label
      }
    ),
    e.icon
  ] });
  return e.href ? /* @__PURE__ */ n(
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
  ) : /* @__PURE__ */ n(
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
function Dr(e) {
  return /* @__PURE__ */ n(
    Le,
    {
      src: e.src,
      alt: e.alt,
      width: e.width ?? i.Size8,
      height: e.height ?? i.Size8,
      objectFit: "cover",
      borderRadius: I.Medium,
      style: { opacity: 0.8 }
    }
  );
}
const Er = L(
  ({
    icon: e,
    heading: t,
    description: r,
    action: l,
    media: o,
    padding: a = i.XXLarge,
    borderRadius: d = I.XXLarge,
    blur: s = 20,
    backgroundOpacity: p = 0.1,
    borderOpacity: b = 0.12,
    children: c
  }, g) => {
    const h = {
      position: "relative",
      overflow: "hidden",
      background: `rgba(255, 255, 255, ${p})`,
      backdropFilter: `blur(${s}px)`,
      WebkitBackdropFilter: `blur(${s}px)`,
      border: `1px solid rgba(255, 255, 255, ${b})`,
      borderRadius: d,
      transition: "background 200ms ease"
    }, m = {
      position: "absolute",
      inset: 0,
      backgroundImage: `url("${Ir}")`,
      opacity: 0.03,
      pointerEvents: "none"
    }, x = /* @__PURE__ */ f(_, { space: i.Medium, style: { flex: 1 }, children: [
      e && /* @__PURE__ */ n(S, { marginBlockEnd: i.Medium, children: e }),
      /* @__PURE__ */ n(
        D,
        {
          as: "h3",
          size: w.Large,
          weight: A.Bold,
          color: u.Default,
          children: t
        }
      ),
      r && /* @__PURE__ */ n(
        D,
        {
          size: w.XSmall,
          color: u.OnSurfaceVariant,
          children: r
        }
      ),
      l && Mr(l),
      c
    ] });
    return /* @__PURE__ */ f(S, { ref: g, padding: a, style: h, children: [
      /* @__PURE__ */ n("div", { style: m, "aria-hidden": "true" }),
      o ? /* @__PURE__ */ f(W, { space: i.XXLarge, alignBlock: "center", children: [
        x,
        /* @__PURE__ */ n("div", { style: { flexShrink: 0 }, children: Dr(o) })
      ] }) : x
    ] });
  }
);
Er.displayName = "GlassCard";
const Tr = `
@keyframes bbui-pulse-down {
  0%, 100% { transform: translateY(0); opacity: 0.4 }
  50%      { transform: translateY(3px); opacity: 0.9 }
}
`, An = "36px", zr = "18px", Rr = L(
  ({ items: e, onComplete: t, finishedLabel: r, maxHeight: l = "256px" }, o) => {
    const [a, d] = P(() => /* @__PURE__ */ new Set()), s = oe(!1), p = oe(null), b = oe([]), c = a.size >= e.length;
    return K(() => {
      c && !s.current && (s.current = !0, t == null || t());
    }, [c, t]), K(() => {
      const g = p.current;
      if (!g) return;
      const h = new IntersectionObserver(
        (m) => {
          d((x) => {
            let v = x;
            for (const C of m) {
              if (!C.isIntersecting) continue;
              const B = Number(C.target.dataset.idx);
              x.has(B) || (v === x && (v = new Set(x)), v.add(B));
            }
            return v;
          });
        },
        { root: g, threshold: 0.6 }
      );
      return b.current.forEach((m) => m && h.observe(m)), () => h.disconnect();
    }, [e.length]), /* @__PURE__ */ f("div", { ref: o, style: { width: "100%", position: "relative" }, children: [
      /* @__PURE__ */ n("style", { children: Tr }),
      /* @__PURE__ */ n("div", { ref: p, style: $r(l, c), children: /* @__PURE__ */ n(_, { space: i.MediumLarge, children: e.map((g, h) => {
        const m = a.has(h);
        return /* @__PURE__ */ f(
          "div",
          {
            ref: (x) => b.current[h] = x,
            "data-idx": h,
            style: Wr(m),
            children: [
              /* @__PURE__ */ n(Ar, { item: g }),
              h < e.length - 1 && /* @__PURE__ */ n("span", { "aria-hidden": "true", style: Pr(m) })
            ]
          },
          g.id ?? h
        );
      }) }) }),
      /* @__PURE__ */ n("div", { style: Vr, children: c ? r : /* @__PURE__ */ n(Nr, {}) })
    ] });
  }
);
Rr.displayName = "RevealSteps";
function Ar({ item: e }) {
  return /* @__PURE__ */ f("div", { style: Fr, children: [
    /* @__PURE__ */ n("span", { "aria-hidden": "true", style: Or, children: e.icon }),
    /* @__PURE__ */ f("span", { style: Hr, children: [
      /* @__PURE__ */ n(D, { as: "span", size: w.Small, weight: A.Medium, children: e.label }),
      e.description && /* @__PURE__ */ n(D, { as: "span", size: w.XSmall, color: u.Subtle, children: e.description })
    ] }),
    e.meta && /* @__PURE__ */ n("span", { style: jr, children: e.meta })
  ] });
}
function Nr() {
  return /* @__PURE__ */ n("div", { style: Gr, "aria-hidden": "true", children: /* @__PURE__ */ n(
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
      children: /* @__PURE__ */ n("polyline", { points: "6 9 12 15 18 9" })
    }
  ) });
}
const Nn = "linear-gradient(to bottom, black 0%, black calc(100% - 32px), transparent 100%)", $r = (e, t) => ({
  maxHeight: e,
  overflowY: "auto",
  scrollBehavior: "smooth",
  maskImage: t ? "none" : Nn,
  WebkitMaskImage: t ? "none" : Nn,
  paddingRight: i.XSmall
}), Wr = (e) => ({
  position: "relative",
  opacity: e ? 1 : 0.15,
  transform: e ? "translateY(0)" : "translateY(8px)",
  filter: e ? "blur(0)" : "blur(2px)",
  transition: "opacity 420ms ease-out, transform 420ms cubic-bezier(0.22, 1, 0.36, 1), filter 420ms ease-out"
}), Fr = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: i.MediumLarge,
  padding: i.MediumLarge,
  background: y.Subtle,
  borderRadius: I.Large,
  border: `1px solid ${T.Default}`,
  color: u.Default
}, Or = {
  width: An,
  height: An,
  flexShrink: 0,
  borderRadius: I.Medium,
  background: y.Subtle,
  color: u.Default,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
}, Hr = {
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: i.XXSmall
}, jr = {
  flexShrink: 0,
  display: "inline-flex",
  alignItems: "center"
}, Pr = (e) => ({
  position: "absolute",
  left: `calc(${i.MediumLarge} + ${zr} - 1px)`,
  top: "100%",
  height: i.MediumLarge,
  width: "2px",
  background: T.Default,
  opacity: e ? 1 : 0,
  transition: "opacity 300ms ease-out",
  pointerEvents: "none"
}), Vr = {
  marginTop: i.Large,
  display: "flex",
  justifyContent: "center",
  minHeight: "20px"
}, Gr = {
  color: u.Subtle,
  animation: "bbui-pulse-down 1500ms ease-in-out infinite",
  display: "inline-flex"
}, _r = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree"
], Yr = L(
  ({ value: e, onChange: t, labels: r = _r }, l) => /* @__PURE__ */ n(
    _,
    {
      ref: l,
      space: i.Medium,
      role: "radiogroup",
      children: r.map((o, a) => {
        const d = a + 1;
        return /* @__PURE__ */ n(
          ae,
          {
            role: "radio",
            "aria-checked": e === d,
            "aria-label": o,
            onClick: () => t(d),
            label: o,
            width: "100%",
            align: "center",
            paddingBlock: i.MediumLarge,
            paddingInline: i.MediumLarge,
            borderRadius: I.Large,
            borderColor: T.Default,
            borderColorHover: T.Focus,
            borderColorPressed: T.Focus,
            backgroundColor: y.Transparent,
            hover: y.BrandBold,
            pressed: y.BrandBold,
            color: u.Default,
            colorHover: u.OnBrand,
            colorPressed: u.OnBrand,
            size: w.Small,
            weight: A.Medium
          },
          d
        );
      })
    }
  )
);
Yr.displayName = "LikertScale";
function Sl(e) {
  const [t, r] = P(
    () => typeof window < "u" ? window.matchMedia(e).matches : !1
  );
  return K(() => {
    const l = window.matchMedia(e), o = (a) => r(a.matches);
    return l.addEventListener("change", o), r(l.matches), () => l.removeEventListener("change", o);
  }, [e]), t;
}
function Te() {
  return typeof window > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Kr(e) {
  typeof document > "u" || (e === "system" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e));
}
function wl() {
  const [e, t] = P(() => typeof localStorage > "u" ? "system" : localStorage.getItem("bbui-theme") ?? "system"), [r, l] = P(
    () => e === "system" ? Te() : e
  ), o = Q((a) => {
    t(a), typeof localStorage < "u" && (a === "system" ? localStorage.removeItem("bbui-theme") : localStorage.setItem("bbui-theme", a));
  }, []);
  return K(() => {
    Kr(e), l(e === "system" ? Te() : e);
  }, [e]), K(() => {
    if (e !== "system") return;
    const a = window.matchMedia("(prefers-color-scheme: dark)"), d = () => l(Te());
    return a.addEventListener("change", d), () => a.removeEventListener("change", d);
  }, [e]), { theme: e, resolvedTheme: r, setTheme: o };
}
async function* Ur(e, t) {
  if (!e.body)
    throw new Error("SSE response has no readable body");
  const r = e.body.getReader(), l = new TextDecoder();
  let o = "";
  try {
    for (; ; ) {
      if (t != null && t.aborted) {
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
        const p = o.slice(0, s);
        o = o.slice(s + 2);
        const b = [];
        for (const g of p.split(`
`))
          g.startsWith("data:") && b.push(g.slice(5).trimStart());
        if (b.length === 0) continue;
        const c = b.join(`
`);
        try {
          yield JSON.parse(c);
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
async function* qr(e, t = {}) {
  const r = await fetch(e, t);
  if (!r.ok) {
    const l = await r.text().catch(() => "");
    throw new Error(
      `SSE request failed ${r.status} ${r.statusText}: ${l}`
    );
  }
  yield* Ur(r, t.signal);
}
function kl(e = {}) {
  const { onEvent: t, onComplete: r, onError: l, retain: o = !0 } = e, [a, d] = P([]), [s, p] = P(null), [b, c] = P(!1), [g, h] = P(null), m = oe(null), x = oe(!0), v = oe(t), C = oe(r), B = oe(l);
  K(() => {
    v.current = t, C.current = r, B.current = l;
  }), K(() => (x.current = !0, () => {
    var z;
    x.current = !1, (z = m.current) == null || z.abort();
  }), []);
  const H = Q(() => {
    var z;
    (z = m.current) == null || z.abort(), m.current = null;
  }, []), X = Q(() => {
    d([]), p(null), h(null);
  }, []), N = Q(
    async (z, F = {}) => {
      var k, M, R, G;
      (k = m.current) == null || k.abort();
      const O = new AbortController();
      m.current = O, x.current && (d([]), p(null), h(null), c(!0));
      try {
        for await (const j of qr(z, {
          ...F,
          signal: O.signal
        })) {
          if (!x.current) return;
          o && d((Y) => [...Y, j]), p(j), (M = v.current) == null || M.call(v, j);
        }
        x.current && ((R = C.current) == null || R.call(C));
      } catch (j) {
        if (O.signal.aborted) return;
        const Y = j instanceof Error ? j : new Error(String(j));
        x.current && (h(Y), (G = B.current) == null || G.call(B, Y));
      } finally {
        x.current && m.current === O && (c(!1), m.current = null);
      }
    },
    [o]
  );
  return { events: a, lastEvent: s, isStreaming: b, error: g, start: N, abort: H, reset: X };
}
export {
  pl as AccentColor,
  rl as AlignItems,
  il as AlignSelf,
  ge as Anchor,
  lr as Aside,
  kt as Avatar,
  y as BackgroundColor,
  Fn as Badge,
  Vt as Banner,
  pe as BloomColor,
  ie as BloomLevel,
  T as BorderColor,
  I as BorderRadius,
  ul as BorderWidth,
  S as Box,
  Ln as Breakpoint,
  ae as Button,
  pr as Calendar,
  Ot as Card,
  Dt as Checkbox,
  dt as Chip,
  bl as ContainerWidth,
  dl as Cursor,
  fl as DirectionColor,
  tl as Display,
  Et as Divider,
  Jt as Drawer,
  vr as DropdownCheckboxMenu,
  Zt as DropdownMenu,
  he as Elevation,
  br as EmptyState,
  ml as EvaluationResultColor,
  ol as FlexDirection,
  al as FlexWrap,
  Kn as FontFamily,
  w as FontSize,
  el as FontStyle,
  A as FontWeight,
  Er as GlassCard,
  ve as Gradient,
  Wn as Grid,
  _t as Header,
  Ft as HeroSection,
  vl as Hide,
  it as Icon,
  re as IconButton,
  hl as IconSize,
  Le as Image,
  W as Inline,
  yr as InlineEdit,
  tt as Inset,
  ll as JustifyContent,
  ir as Layout,
  $n as LetterSpacing,
  Yr as LikertScale,
  ft as LinkButton,
  bt as LiquidGlass,
  jn as Menu,
  Cr as MobileNav,
  Ut as Modal,
  Yt as ModalSize,
  Wt as Navbar,
  rr as Panel,
  yl as PersonaAccent,
  sl as Position,
  Lr as ProgressTracker,
  Rr as RevealSteps,
  Hn as Select,
  Sr as SelectField,
  xl as Show,
  nr as Sidebar,
  i as Spacing,
  On as Spinner,
  _ as Stack,
  Rt as Stepper,
  gr as Table,
  Gt as Tabs,
  D as Text,
  Bt as TextArea,
  u as TextColor,
  Ht as TextField,
  ze as TextInput,
  nl as TextTransform,
  Xr as Toast,
  mt as Toggle,
  cl as WhiteSpace,
  be as ZIndex,
  Un as bloomColorFor,
  qn as bloomLevelForScore,
  Ur as parseSSEStream,
  gl as scoreColor,
  qr as streamSSE,
  Be as useBreakpoint,
  Sl as useMediaQuery,
  $ as useResponsiveValue,
  kl as useSSEStream,
  wl as useTheme
};
