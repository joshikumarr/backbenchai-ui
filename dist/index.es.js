import te, { useState as P, useEffect as Y, forwardRef as L, Fragment as Zn, useMemo as we, useCallback as Q, useId as Le, useRef as oe } from "react";
import { jsx as n, Fragment as ne, jsxs as f } from "react/jsx-runtime";
import { createPortal as Ie } from "react-dom";
function Ne(e) {
  return `var(--safe-area-inset-${e}, env(safe-area-inset-${e}, 0px))`;
}
function ke(e, t) {
  return t ? `calc(${t} + ${Ne(e)})` : Ne(e);
}
function Ce(e, t) {
  return `max(${t}, ${Ne(e)})`;
}
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
}, Qn = {
  Display: "var(--bbui-font-display)",
  Body: "var(--bbui-font-body)"
}, w = {
  /**
   * @deprecated 10px is below the readable floor for UI text. No component
   * defaults to it. Use XXSmall (12px) for labels, eyebrows and badges.
   * Kept only so existing call sites keep compiling.
   */
  Micro: "10px",
  /** 12px — labels, eyebrows, badges. The smallest size for real UI text. */
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
}, N = {
  Regular: 400,
  Medium: 500,
  Semibold: 600,
  Bold: 700,
  ExtraBold: 800,
  /** 900 — large display numbers */
  Black: 900
}, jn = {
  Tighter: "-0.05em",
  Tight: "-0.025em",
  Normal: "0",
  Wide: "0.05em",
  Wider: "0.075em",
  /** 0.1em — uppercase labels */
  Widest: "0.1em"
}, sl = {
  Normal: "normal",
  Italic: "italic",
  Oblique: "oblique"
}, dl = {
  None: "none",
  Uppercase: "uppercase",
  Lowercase: "lowercase",
  Capitalize: "capitalize"
}, cl = {
  Block: "block",
  InlineBlock: "inline-block",
  Inline: "inline",
  Flex: "flex",
  InlineFlex: "inline-flex",
  Grid: "grid",
  InlineGrid: "inline-grid",
  None: "none"
}, ul = {
  Start: "flex-start",
  Center: "center",
  End: "flex-end",
  Stretch: "stretch",
  Baseline: "baseline"
}, pl = {
  Start: "flex-start",
  Center: "center",
  End: "flex-end",
  SpaceBetween: "space-between",
  SpaceAround: "space-around",
  SpaceEvenly: "space-evenly"
}, bl = {
  Auto: "auto",
  Start: "flex-start",
  Center: "center",
  End: "flex-end",
  Stretch: "stretch",
  Baseline: "baseline"
}, hl = {
  Row: "row",
  Column: "column",
  RowReverse: "row-reverse",
  ColumnReverse: "column-reverse"
}, gl = {
  NoWrap: "nowrap",
  Wrap: "wrap",
  WrapReverse: "wrap-reverse"
}, ml = {
  Static: "static",
  Relative: "relative",
  Absolute: "absolute",
  Fixed: "fixed",
  Sticky: "sticky"
}, fl = {
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
}, xl = {
  Normal: "normal",
  NoWrap: "nowrap",
  Pre: "pre",
  PreWrap: "pre-wrap",
  PreLine: "pre-line",
  BreakSpaces: "break-spaces"
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
}, yl = {
  Thin: "1px",
  Medium: "2px",
  Thick: "4px",
  XThick: "8px"
}, vl = {
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
}, Sl = {
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
}, wl = {
  XSmall: "14px",
  Small: "16px",
  Medium: "20px",
  Large: "24px",
  XLarge: "32px",
  XXLarge: "40px",
  Huge: "48px"
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
function et(e) {
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
function nt(e) {
  return e >= 90 ? ie.Masters : e >= 80 ? ie.Analyzes : e >= 60 ? ie.Applies : e >= 40 ? ie.Understands : e >= 20 ? ie.Aware : ie.NotAssessed;
}
function kl(e) {
  return et(nt(e));
}
const Cl = {
  correct: pe.Masters,
  partial: pe.Applies,
  incorrect: "var(--bbui-color-error)",
  skipped: "var(--bbui-color-subtlest)"
}, Xl = {
  up: pe.Masters,
  down: "var(--bbui-color-error)",
  unchanged: "var(--bbui-color-subtlest)"
}, Bl = {
  Nova: "var(--bbui-persona-nova)",
  Maya: "var(--bbui-persona-maya)",
  Jordan: "var(--bbui-persona-jordan)",
  Custom: "var(--bbui-persona-custom)"
}, En = {
  /** 0–639px */
  Mobile: 0,
  /** 640–1023px */
  Tablet: 640,
  /** 1024px+ */
  Desktop: 1024
};
function zn(e) {
  return e >= En.Desktop ? "desktop" : e >= En.Tablet ? "tablet" : "mobile";
}
function Me() {
  const [e, t] = P(
    () => typeof window < "u" ? zn(window.innerWidth) : "desktop"
  );
  return Y(() => {
    const r = () => t(zn(window.innerWidth));
    return window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []), e;
}
const Se = {
  Compact: 0,
  Medium: 600,
  Expanded: 840,
  Large: 1200,
  ExtraLarge: 1600
}, Tn = {
  Compact: 0,
  Medium: 480,
  Expanded: 900
};
function tt(e) {
  return e >= Se.ExtraLarge ? "extraLarge" : e >= Se.Large ? "large" : e >= Se.Expanded ? "expanded" : e >= Se.Medium ? "medium" : "compact";
}
function rt(e) {
  return e >= Tn.Expanded ? "expanded" : e >= Tn.Medium ? "medium" : "compact";
}
function Ll() {
  const e = () => typeof window < "u" ? {
    width: tt(window.innerWidth),
    height: rt(window.innerHeight)
  } : { width: "expanded", height: "medium" }, [t, r] = P(e);
  return Y(() => {
    const l = () => r((o) => {
      const a = e();
      return o.width === a.width && o.height === a.height ? o : a;
    });
    return window.addEventListener("resize", l), () => window.removeEventListener("resize", l);
  }, []), t;
}
function lt(e, t) {
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
  const t = Me();
  return lt(e, t);
}
const ye = (e) => {
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
    margin: c,
    marginBlock: b,
    marginBlockStart: u,
    marginBlockEnd: g,
    marginInline: h,
    marginInlineStart: m,
    marginInlineEnd: y,
    marginTop: v,
    marginRight: C,
    marginBottom: B,
    marginLeft: j,
    backgroundColor: X,
    borderRadius: A,
    borderColor: R,
    borderSide: W,
    borderWidth: H = "1px",
    overflow: k,
    overscrollBehavior: I,
    safeArea: T,
    elevation: G,
    width: F,
    maxWidth: K,
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
    flexShrink: We,
    gap: Fe,
    position: Oe,
    inset: He,
    top: je,
    right: Pe,
    bottom: Ve,
    left: Ge,
    zIndex: _e,
    color: Ye,
    opacity: Ke,
    cursor: Ue,
    whiteSpace: qe,
    lineHeight: Je,
    pointerEvents: Ze,
    background: Qe,
    border: en,
    boxShadow: nn,
    transition: tn,
    transform: rn,
    aspectRatio: ln,
    filter: on,
    backdropFilter: an,
    style: Kn,
    children: Un,
    ...qn
  }, Jn) => {
    const sn = ye($(t)), dn = ye($(r)), cn = $(l), un = $(o), pn = ye($(a)), bn = $(d), hn = $(s), gn = ye($(c)), mn = ye($(b)), fn = $(u), xn = $(g), yn = ye($(h)), vn = $(m), Sn = $(y), wn = $(v), kn = $(C), Cn = $(B), Xn = $(j), Bn = $(q), Ln = $(de), In = $(se), Mn = $(Z), fe = R ? `${H} solid ${R}` : void 0, xe = {};
    if (fe && W)
      switch (W) {
        case "top":
          xe.borderTop = fe;
          break;
        case "bottom":
          xe.borderBottom = fe;
          break;
        case "left":
          xe.borderLeft = fe;
          break;
        case "right":
          xe.borderRight = fe;
          break;
        case "all":
          xe.border = fe;
          break;
      }
    const ue = {
      ...sn && { padding: sn },
      ...dn && { paddingBlock: dn },
      ...cn && { paddingBlockStart: cn },
      ...un && { paddingBlockEnd: un },
      ...pn && { paddingInline: pn },
      ...bn && { paddingInlineStart: bn },
      ...hn && { paddingInlineEnd: hn },
      ...gn && { margin: gn },
      ...mn && { marginBlock: mn },
      ...fn && { marginBlockStart: fn },
      ...xn && { marginBlockEnd: xn },
      ...yn && { marginInline: yn },
      ...vn && { marginInlineStart: vn },
      ...Sn && { marginInlineEnd: Sn },
      ...wn && { marginTop: wn },
      ...kn && { marginRight: kn },
      ...Cn && { marginBottom: Cn },
      ...Xn && { marginLeft: Xn },
      ...X && (X === x.Gradient ? { background: X } : { backgroundColor: X }),
      ...A && { borderRadius: A },
      ...xe,
      ...k && { overflow: k },
      ...G && { boxShadow: G },
      ...F !== void 0 && { width: F },
      ...K && { maxWidth: K, marginInline: "auto" },
      ...U !== void 0 && { height: U },
      ...E !== void 0 && { minHeight: E },
      ...V !== void 0 && { maxHeight: V },
      ...J !== void 0 && { minWidth: J },
      ...Bn && { display: Bn },
      ...Ln && { alignItems: Ln },
      ...In && { justifyContent: In },
      ...ee && { alignSelf: ee },
      ...Mn && { flexDirection: Mn },
      ...ce && { flexWrap: ce },
      ...le !== void 0 && { flex: le },
      ...me !== void 0 && { flexGrow: me },
      ...We !== void 0 && { flexShrink: We },
      ...Fe && { gap: Fe },
      ...Oe && { position: Oe },
      ...He !== void 0 && { inset: He },
      ...je !== void 0 && { top: je },
      ...Pe !== void 0 && { right: Pe },
      ...Ve !== void 0 && { bottom: Ve },
      ...Ge !== void 0 && { left: Ge },
      ..._e !== void 0 && { zIndex: _e },
      ...Ye && { color: Ye },
      ...Ke !== void 0 && { opacity: Ke },
      ...Ue && { cursor: Ue },
      ...qe && { whiteSpace: qe },
      ...Je !== void 0 && { lineHeight: Je },
      ...Ze && { pointerEvents: Ze },
      ...Qe && { background: Qe },
      ...en && { border: en },
      ...nn && { boxShadow: nn },
      ...tn && { transition: tn },
      ...rn && { transform: rn },
      ...ln !== void 0 && { aspectRatio: ln },
      ...on && { filter: on },
      ...an && { backdropFilter: an },
      ...I && { overscrollBehavior: I },
      ...Kn
    };
    if (T) {
      const Ee = Array.isArray(T) ? T : [T];
      if (Ee.includes("top") && (ue.paddingBlockStart = ke(
        "top",
        ue.paddingBlockStart ?? "0px"
      )), Ee.includes("bottom") && (ue.paddingBlockEnd = ke(
        "bottom",
        ue.paddingBlockEnd ?? "0px"
      )), Ee.includes("inline")) {
        const Dn = ue.paddingInline ?? "0px";
        delete ue.paddingInline, ue.paddingLeft = Ce("left", Dn), ue.paddingRight = Ce("right", Dn);
      }
    }
    return te.createElement(
      e,
      { ...qn, ref: Jn, style: ue },
      Un
    );
  }
);
S.displayName = "Box";
const Xe = ["mobile", "tablet", "desktop"];
function it(e, t) {
  return Xe.indexOf(e) >= Xe.indexOf(t);
}
function ot(e, t) {
  return Xe.indexOf(e) < Xe.indexOf(t);
}
function Il({ on: e, above: t, below: r, children: l }) {
  const o = Me();
  return e != null ? (Array.isArray(e) ? e : [e]).includes(o) ? /* @__PURE__ */ n(ne, { children: l }) : null : t != null ? it(o, t) ? /* @__PURE__ */ n(ne, { children: l }) : null : r != null ? ot(o, r) ? /* @__PURE__ */ n(ne, { children: l }) : null : /* @__PURE__ */ n(ne, { children: l });
}
const Be = ["mobile", "tablet", "desktop"];
function at(e, t) {
  return Be.indexOf(e) >= Be.indexOf(t);
}
function st(e, t) {
  return Be.indexOf(e) < Be.indexOf(t);
}
function Ml({ on: e, above: t, below: r, children: l }) {
  const o = Me();
  return e != null ? (Array.isArray(e) ? e : [e]).includes(o) ? null : /* @__PURE__ */ n(ne, { children: l }) : t != null ? at(o, t) ? null : /* @__PURE__ */ n(ne, { children: l }) : r != null ? st(o, r) ? null : /* @__PURE__ */ n(ne, { children: l }) : /* @__PURE__ */ n(ne, { children: l });
}
const An = {
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
    style: c,
    children: b,
    ...u
  }, g) => {
    const m = {
      display: "flex",
      flexDirection: "column",
      gap: $(t ?? "0"),
      ...r && { alignItems: An[r] },
      ...l && !o && { justifyContent: An[l] },
      ...o && { justifyContent: o },
      ...a === "fill" && { flex: "1 1 auto" },
      ...d && { marginBlockStart: d },
      ...s && { marginBlockEnd: s },
      ...c
    };
    return te.createElement(
      e,
      { ...u, ref: g, style: m },
      b
    );
  }
);
_.displayName = "Stack";
const Rn = {
  start: "flex-start",
  end: "flex-end",
  // AlignItems token values pass through unchanged
  "flex-start": "flex-start",
  "flex-end": "flex-end",
  center: "center",
  stretch: "stretch",
  baseline: "baseline"
}, O = L(
  ({
    as: e = "div",
    space: t,
    rowSpace: r,
    alignBlock: l,
    alignInline: o,
    spread: a,
    shouldWrap: d,
    separator: s,
    grow: c = "hug",
    marginBlockStart: b,
    marginBlockEnd: u,
    borderRadius: g,
    overflow: h,
    elevation: m,
    minWidth: y,
    style: v,
    children: C,
    ...B
  }, j) => {
    const X = $(t ?? "0"), [A, R] = Array.isArray(X) ? [X[0], X[1]] : [X, X], W = {
      display: "flex",
      flexDirection: "row",
      columnGap: R,
      rowGap: r ?? A,
      ...l && { alignItems: Rn[l] },
      ...o && !a && { justifyContent: Rn[o] },
      ...a && { justifyContent: a },
      ...d && { flexWrap: "wrap" },
      ...c === "fill" && { flex: "1 1 auto" },
      ...b && { marginBlockStart: b },
      ...u && { marginBlockEnd: u },
      ...g && { borderRadius: g },
      ...h && { overflow: h },
      ...m && { boxShadow: m },
      ...y !== void 0 && { minWidth: y },
      ...v
    };
    let H = C;
    if (s) {
      const k = te.Children.toArray(C).filter(Boolean);
      H = k.map((I, T) => /* @__PURE__ */ f(Zn, { children: [
        I,
        T < k.length - 1 && /* @__PURE__ */ n("span", { "aria-hidden": "true", children: s })
      ] }, T));
    }
    return te.createElement(
      e,
      { ...B, ref: j, style: W },
      H
    );
  }
);
O.displayName = "Inline";
const dt = L(
  ({ as: e = "div", space: t, block: r, inline: l, style: o, children: a, ...d }, s) => {
    const c = $(t), b = $(r), u = $(l), g = b ?? c, h = u ?? c, m = {
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
dt.displayName = "Inset";
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
    lineHeight: c,
    opacity: b,
    fontStyle: u,
    clamp: g,
    truncate: h,
    noWrap: m,
    noShrink: y,
    style: v,
    children: C,
    ...B
  }, j) => {
    const X = {
      ...t && { fontSize: t },
      ...r && { fontWeight: r },
      ...l && (l === p.Gradient ? {
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
      ...c !== void 0 && { lineHeight: c },
      ...b !== void 0 && { opacity: b },
      ...u && { fontStyle: u },
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
      ...y && { flexShrink: 0 },
      ...v
    };
    return te.createElement(
      e,
      { ...B, ref: j, style: X },
      C
    );
  }
);
D.displayName = "Text";
function ct(e) {
  if (e !== void 0)
    return typeof e == "number" ? `repeat(${e}, 1fr)` : e.map((t) => `${t}fr`).join(" ");
}
const Pn = L(
  ({
    as: e = "div",
    columns: t,
    gap: r,
    rowGap: l,
    marginBlockStart: o,
    marginBlockEnd: a,
    borderRadius: d,
    overflow: s,
    elevation: c,
    style: b,
    children: u,
    ...g
  }, h) => {
    const m = $(t ?? 1), y = $(r ?? "0"), v = {
      display: "grid",
      gridTemplateColumns: ct(m),
      gap: y,
      ...l && { rowGap: l },
      ...o && { marginBlockStart: o },
      ...a && { marginBlockEnd: a },
      ...d && { borderRadius: d },
      ...s && { overflow: s },
      ...c && { boxShadow: c },
      ...b
    };
    return te.createElement(
      e,
      { ...g, ref: h, style: v },
      u
    );
  }
);
Pn.displayName = "Grid";
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
    borderRadius: c,
    textTransform: b,
    display: u,
    alignSelf: g,
    style: h,
    children: m,
    ...y
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
      ...c && { borderRadius: c },
      ...b && { textTransform: b },
      ...u && { display: u },
      ...g && { alignSelf: g },
      ...h
    };
    return /* @__PURE__ */ n("a", { ref: v, style: C, ...y, children: m });
  }
);
ge.displayName = "Anchor";
const De = L(
  ({ borderRadius: e, objectFit: t, width: r, height: l, fill: o, style: a, ...d }, s) => {
    const c = {
      display: "block",
      ...o ? { width: "100%", height: "100%" } : {
        ...r ? { width: r, flexShrink: 0 } : { width: "100%" },
        ...l && { height: l }
      },
      ...e && { borderRadius: e },
      ...t && { objectFit: t },
      ...a
    };
    return /* @__PURE__ */ n("img", { ref: s, style: c, ...d });
  }
);
De.displayName = "Image";
const ze = (e) => {
  if (e !== void 0)
    return Array.isArray(e) ? e.join(" ") : e;
}, ut = {
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
    borderColorHover: c,
    borderColorPressed: b,
    borderWidth: u = "1px",
    borderSide: g = "all",
    size: h,
    weight: m,
    letterSpacing: y,
    textTransform: v,
    fontFamily: C,
    gap: B,
    padding: j,
    paddingBlock: X,
    paddingInline: A,
    borderRadius: R,
    width: W,
    align: H = "center",
    label: k,
    iconStart: I,
    iconEnd: T,
    className: G,
    style: F,
    children: K,
    ...U
  }, E) => {
    const V = {};
    e && (V["--bbui-btn-bg"] = e), t && (V["--bbui-btn-bg-hover"] = t), r && (V["--bbui-btn-bg-pressed"] = r), o && (V["--bbui-btn-color"] = o), a && (V["--bbui-btn-color-hover"] = a), d && (V["--bbui-btn-color-pressed"] = d), s && (V["--bbui-btn-border"] = s), c && (V["--bbui-btn-border-hover"] = c), b && (V["--bbui-btn-border-pressed"] = b);
    const J = s ? `${u} solid var(--bbui-btn-border)` : void 0, q = {};
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
    const de = ze(j), se = ze(X), ee = ze(A), Z = {
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: ut[H],
      ...q,
      ...W !== void 0 && { width: W },
      ...l && { background: l },
      ...h && { fontSize: h },
      ...m && { fontWeight: m },
      ...y && { letterSpacing: y },
      ...v && { textTransform: v },
      ...C && { fontFamily: C },
      ...B && { gap: B },
      ...de && { padding: de },
      ...se && { paddingBlock: se },
      ...ee && { paddingInline: ee },
      ...R && { borderRadius: R },
      ...V,
      ...F
    }, ce = G ? `bbui-button ${G}` : "bbui-button", le = k ?? K;
    return /* @__PURE__ */ n("button", { ref: E, className: ce, style: Z, ...U, children: I || T ? /* @__PURE__ */ f(ne, { children: [
      I,
      le,
      T
    ] }) : le });
  }
);
ae.displayName = "Button";
const $e = L(
  ({
    backgroundColor: e,
    borderColor: t,
    borderRadius: r,
    padding: l,
    paddingBlock: o,
    paddingInline: a,
    style: d,
    ...s
  }, c) => {
    const b = {
      ...e && { backgroundColor: e },
      ...t && { border: `1px solid ${t}` },
      ...r && { borderRadius: r },
      ...l && { padding: l },
      ...o && { paddingBlock: o },
      ...a && { paddingInline: a },
      ...d
    };
    return /* @__PURE__ */ n("input", { ref: c, style: b, ...s });
  }
);
$e.displayName = "TextInput";
const pt = L(
  ({ size: e, color: t, label: r, name: l, style: o, className: a, children: d, ...s }, c) => {
    const b = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      ...e && (l ? { fontSize: e } : { width: e, height: e }),
      ...t && { color: t },
      ...o
    };
    return /* @__PURE__ */ n(
      "span",
      {
        ref: c,
        role: r ? "img" : void 0,
        "aria-label": r,
        "aria-hidden": r ? void 0 : !0,
        className: l ? ["material-symbols-outlined", a].filter(Boolean).join(" ") : a,
        style: b,
        ...s,
        children: l ?? d
      }
    );
  }
);
pt.displayName = "Icon";
const bt = {
  default: { backgroundColor: x.NeutralBold, color: p.Default },
  success: { backgroundColor: x.SuccessBold, color: p.OnBrand },
  warning: { backgroundColor: x.Warning, color: p.Warning },
  error: { backgroundColor: x.Error, color: p.Error },
  info: { backgroundColor: x.Info, color: p.Info },
  brand: { backgroundColor: x.Brand, color: p.Inverse },
  primaryTint: { backgroundColor: x.PrimaryTint, color: p.Brand },
  errorTint: { backgroundColor: x.ErrorTint, color: p.Error },
  warningTint: { backgroundColor: x.WarningTint, color: "#ea580c" },
  infoTint: { backgroundColor: x.InfoTint, color: "#2563eb" },
  accentTint: { backgroundColor: x.AccentTint, color: "#7c3aed" }
}, Vn = L(
  ({ variant: e = "default", uppercase: t = !1, style: r, children: l, ...o }, a) => {
    const d = bt[e], s = {
      display: "inline-flex",
      alignItems: "center",
      lineHeight: 1,
      // Same box and same weight as a variant Chip — see the note in Chip.tsx.
      // Uppercase keeps its letter-spacing, which is a typographic need rather
      // than a second weight.
      paddingBlock: i.XSmall,
      paddingInline: i.MediumLarge,
      borderRadius: M.Full,
      fontWeight: N.Semibold,
      fontSize: w.XXSmall,
      letterSpacing: t ? jn.Wider : void 0,
      textTransform: t ? "uppercase" : void 0,
      ...d,
      ...r
    };
    return /* @__PURE__ */ n("span", { ref: a, style: s, ...o, children: l });
  }
);
Vn.displayName = "Badge";
const ht = {
  compact: { block: i.XXSmall, inline: i.Small },
  comfortable: { block: i.XSmall, inline: i.Medium }
}, gt = {
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
}, mt = L(
  ({
    selected: e,
    appearance: t = "filled",
    density: r = "compact",
    variant: l,
    fontWeight: o = N.Semibold,
    fontSize: a,
    icon: d,
    showCheckWhenSelected: s = !1,
    onClick: c,
    disabled: b,
    style: u,
    className: g,
    children: h,
    ...m
  }, y) => {
    const v = c !== void 0 || e !== void 0, C = e === !0, B = a ?? w.XXSmall, j = l ? { block: i.XSmall, inline: i.MediumLarge } : ht[r], X = !l && t === "glass";
    let A, R;
    if (l) {
      const F = gt[l];
      A = F.backgroundColor, R = F.color;
    } else X || (A = C ? x.Brand : t === "outlined" ? x.Transparent : x.Subtle, R = C ? p.OnBrand : p.Default);
    const W = X ? void 0 : !l && t === "outlined" && !C ? `1px solid ${z.Outline}` : "1px solid transparent", H = {
      display: "inline-flex",
      alignItems: "center",
      gap: i.XSmall,
      paddingBlock: j.block,
      paddingInline: j.inline,
      borderRadius: M.Full,
      ...A !== void 0 && { backgroundColor: A },
      ...R !== void 0 && { color: R },
      ...W !== void 0 && { border: W },
      fontFamily: "inherit",
      fontWeight: o,
      fontSize: B,
      lineHeight: 1.2,
      cursor: v ? b ? "not-allowed" : "pointer" : "default",
      opacity: b ? 0.5 : 1,
      whiteSpace: "nowrap",
      width: "auto",
      flex: "0 0 auto",
      // Stop a flex parent (Stack/Inline with default align-items: stretch)
      // from stretching the chip to fill the cross-axis. Without this,
      // a <Chip> inside <Stack> renders edge-to-edge instead of fit-to-text.
      alignSelf: "flex-start",
      ...u
    }, I = [X ? `bbui-chip-glass${C ? " bbui-chip-glass--selected" : ""}` : void 0, g].filter(Boolean).join(" ") || void 0, T = d ? /* @__PURE__ */ n(
      "span",
      {
        className: "bbui-chip-icon",
        style: { display: "inline-flex", alignItems: "center" },
        "aria-hidden": !0,
        children: d
      }
    ) : null, G = s && C ? /* @__PURE__ */ n(
      "span",
      {
        className: "material-symbols-outlined",
        style: { fontSize: 14 },
        "aria-hidden": !0,
        children: "check"
      }
    ) : null;
    return v ? /* @__PURE__ */ f(
      "button",
      {
        ref: y,
        type: "button",
        "aria-pressed": e,
        disabled: b,
        onClick: c,
        style: H,
        className: I,
        ...m,
        children: [
          T,
          G,
          h
        ]
      }
    ) : /* @__PURE__ */ f(
      "span",
      {
        ref: y,
        style: H,
        className: I,
        ...m,
        children: [
          T,
          h
        ]
      }
    );
  }
);
mt.displayName = "Chip";
const Nn = {
  sm: "4px",
  md: "12px",
  lg: "16px",
  xl: "24px"
}, ft = {
  none: "inset 0 0 0 0 rgba(255, 255, 255, 0)",
  xs: "inset 1px 1px 1px 0 rgba(255, 255, 255, 0.3), inset -1px -1px 1px 0 rgba(255, 255, 255, 0.3)",
  sm: "inset 2px 2px 2px 0 rgba(255, 255, 255, 0.35), inset -2px -2px 2px 0 rgba(255, 255, 255, 0.35)",
  md: "inset 3px 3px 3px 0 rgba(255, 255, 255, 0.45), inset -3px -3px 3px 0 rgba(255, 255, 255, 0.45)",
  lg: "inset 4px 4px 4px 0 rgba(255, 255, 255, 0.5), inset -4px -4px 4px 0 rgba(255, 255, 255, 0.5)",
  xl: "inset 6px 6px 6px 0 rgba(255, 255, 255, 0.55), inset -6px -6px 6px 0 rgba(255, 255, 255, 0.55)"
}, xt = {
  none: "0 4px 4px rgba(0, 0, 0, 0.05), 0 0 12px rgba(0, 0, 0, 0.05)",
  xs: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 16px rgba(255, 255, 255, 0.05)",
  sm: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 24px rgba(255, 255, 255, 0.1)",
  md: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 32px rgba(255, 255, 255, 0.15)",
  lg: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 40px rgba(255, 255, 255, 0.2)",
  xl: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 48px rgba(255, 255, 255, 0.25)"
};
let yt = 0;
const vt = L(
  ({
    children: e,
    borderRadius: t = M.XLarge,
    blurIntensity: r = "xl",
    glowIntensity: l = "sm",
    shadowIntensity: o = "md",
    borderGradient: a,
    borderWidth: d = 1,
    width: s,
    height: c,
    style: b,
    ...u
  }, g) => {
    const h = we(() => `bbui-liquid-glass-${++yt}`, []), m = {
      position: "relative",
      borderRadius: t,
      ...s && { width: s },
      ...c && { height: c },
      ...b
    }, y = {
      position: "absolute",
      inset: 0,
      borderRadius: t,
      pointerEvents: "none"
    };
    return /* @__PURE__ */ f("div", { ref: g, style: m, ...u, children: [
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
            ...y,
            zIndex: 0,
            backdropFilter: `blur(${Nn[r]})`,
            WebkitBackdropFilter: `blur(${Nn[r]})`,
            filter: `url(#${h})`
          }
        }
      ),
      /* @__PURE__ */ n("div", { style: { ...y, zIndex: 1, boxShadow: xt[l] } }),
      /* @__PURE__ */ n("div", { style: { ...y, zIndex: 2, boxShadow: ft[o] } }),
      a && /* @__PURE__ */ n(
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
      /* @__PURE__ */ n("div", { style: { position: "relative", zIndex: 4, height: "100%" }, children: e })
    ] });
  }
);
vt.displayName = "LiquidGlass";
const St = "40px", wt = "24px", Te = "20px", $n = i.XXSmall, kt = L(
  ({ checked: e, defaultChecked: t = !1, onChange: r, label: l, style: o, ...a }, d) => {
    const [s, c] = P(t), b = e !== void 0, u = b ? e : s, g = Q(() => {
      const y = !u;
      b || c(y), r == null || r(y);
    }, [u, b, r]), h = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      width: St,
      height: wt,
      borderRadius: M.Full,
      backgroundColor: u ? x.Brand : x.Neutral,
      border: "none",
      cursor: "pointer",
      padding: 0,
      transition: "background-color 150ms ease",
      ...o
    }, m = {
      position: "absolute",
      width: Te,
      height: Te,
      borderRadius: M.Full,
      backgroundColor: x.Default,
      transition: "left 150ms ease",
      left: u ? `calc(100% - ${Te} - ${$n})` : $n,
      boxShadow: "0 1px 3px rgba(0,0,0,.2)"
    };
    return /* @__PURE__ */ n(
      "button",
      {
        ref: d,
        type: "button",
        role: "switch",
        "aria-checked": u,
        "aria-label": l,
        onClick: g,
        style: h,
        ...a,
        children: /* @__PURE__ */ n("span", { style: m })
      }
    );
  }
);
kt.displayName = "Toggle";
const Ct = L(
  ({
    backgroundColor: e,
    color: t,
    padding: r,
    paddingBlock: l,
    paddingInline: o,
    borderRadius: a,
    style: d,
    children: s,
    ...c
  }, b) => {
    const u = {
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
    return /* @__PURE__ */ n("a", { ref: b, style: u, ...c, children: s });
  }
);
Ct.displayName = "LinkButton";
const re = L(
  ({ label: e, size: t, color: r, backgroundColor: l, padding: o, variant: a = "plain", style: d, className: s, children: c, ...b }, u) => {
    const g = a === "overlay", h = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      cursor: "pointer",
      // overlay: background/color come from .bbui-icon-button-overlay
      ...!g && { background: l ?? "none" },
      ...t && { width: t, height: t },
      ...r && { color: r },
      ...o && { padding: o },
      ...d
    }, m = ["bbui-button", g && "bbui-icon-button-overlay", s].filter(Boolean).join(" ");
    return /* @__PURE__ */ n(
      "button",
      {
        ref: u,
        type: "button",
        "aria-label": e,
        className: m,
        style: h,
        ...b,
        children: c
      }
    );
  }
);
re.displayName = "IconButton";
const Xt = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64
}, Bt = {
  xsmall: "12px",
  small: "12px",
  medium: "14px",
  large: "16px",
  xlarge: "24px"
}, Lt = {
  xsmall: 6,
  small: 8,
  medium: 10,
  large: 12,
  xlarge: 16
}, It = {
  online: "#22c55e",
  offline: "#bccbb9",
  busy: "#ba1a1a",
  focus: "#3b82f6"
};
function Mt(e) {
  var r;
  const t = e.trim().split(/\s+/);
  return t.length >= 2 ? (t[0][0] + t[t.length - 1][0]).toUpperCase() : (((r = t[0]) == null ? void 0 : r[0]) ?? "").toUpperCase();
}
const Dt = L(
  ({
    src: e,
    name: t,
    size: r = "medium",
    appearance: l = "circle",
    status: o,
    fallbackBackground: a = x.NeutralBold,
    fallbackColor: d = p.Subtle
  }, s) => {
    const [c, b] = P(!1), u = Xt[r], g = e && !c, h = t ? Mt(t) : "", m = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: u,
      height: u,
      borderRadius: l === "circle" ? M.Full : M.XLarge,
      overflow: "hidden",
      flexShrink: 0,
      ...g ? {} : { backgroundColor: a }
    }, y = Lt[r], v = o ? {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: y,
      height: y,
      borderRadius: M.Full,
      backgroundColor: It[o],
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
            fontSize: Bt[r],
            fontWeight: N.Semibold,
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
Dt.displayName = "Avatar";
const Et = {
  xsmall: 16,
  small: 24,
  medium: 32,
  large: 48,
  xlarge: 64
}, zt = {
  xsmall: 2,
  small: 2,
  medium: 3,
  large: 3,
  xlarge: 4
}, Gn = L(
  ({ size: e = "medium", label: t = "Loading", color: r = p.Brand }, l) => {
    const o = Le().replace(/:/g, ""), a = Et[e], d = zt[e], s = (a - d) / 2, c = 2 * Math.PI * s;
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
                    strokeDasharray: c,
                    strokeDashoffset: c * 0.7,
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
Gn.displayName = "Spinner";
const Tt = L(
  ({
    backgroundColor: e,
    borderColor: t,
    borderRadius: r,
    padding: l,
    paddingBlock: o,
    paddingInline: a,
    style: d,
    ...s
  }, c) => {
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
    return /* @__PURE__ */ n("textarea", { ref: c, style: b, ...s });
  }
);
Tt.displayName = "TextArea";
function At(e) {
  return "options" in e;
}
const _n = L(
  ({
    options: e,
    placeholder: t,
    backgroundColor: r,
    borderColor: l,
    borderRadius: o,
    padding: a,
    paddingBlock: d,
    paddingInline: s,
    fontSize: c,
    color: b,
    style: u,
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
      ...c && { fontSize: c },
      ...b && { color: b },
      ...u
    };
    return /* @__PURE__ */ f("select", { ref: h, style: m, ...g, children: [
      t && /* @__PURE__ */ n("option", { value: "", disabled: !0, hidden: !0, children: t }),
      e.map(
        (y) => At(y) ? /* @__PURE__ */ n("optgroup", { label: y.label, children: y.options.map((v) => /* @__PURE__ */ n("option", { value: v.value, disabled: v.disabled, children: v.label }, v.value)) }, y.label) : /* @__PURE__ */ n("option", { value: y.value, disabled: y.disabled, children: y.label }, y.value)
      )
    ] });
  }
);
_n.displayName = "Select";
const Rt = {
  small: { box: "16px", font: w.XXSmall, gap: i.XSmall },
  medium: { box: "20px", font: w.XSmall, gap: i.Medium },
  large: { box: "24px", font: w.Small, gap: i.Medium }
}, Nt = ({ size: e }) => /* @__PURE__ */ n(
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
), $t = L(
  ({ label: e, size: t = "medium", checked: r, disabled: l, style: o, id: a, ...d }, s) => {
    const c = Le(), b = a ?? c, u = Rt[t], g = !!r, h = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: u.box,
      height: u.box,
      borderRadius: M.Small,
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
        htmlFor: b,
        style: {
          display: "inline-flex",
          alignItems: "center",
          gap: u.gap,
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
          /* @__PURE__ */ n("span", { style: h, "aria-hidden": "true", children: g && /* @__PURE__ */ n(Nt, { size: `calc(${u.box} - 4px)` }) }),
          e && /* @__PURE__ */ n(
            "span",
            {
              style: {
                fontSize: u.font,
                color: l ? p.Disabled : p.Default
              },
              children: e
            }
          )
        ]
      }
    );
  }
);
$t.displayName = "Checkbox";
const Wt = L(
  ({
    orientation: e = "horizontal",
    color: t = z.Default,
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
Wt.displayName = "Divider";
const Ft = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z", clipRule: "evenodd" }) }), Ot = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { d: "M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" }) }), Ht = L(
  ({
    value: e,
    onChange: t,
    min: r = 0,
    max: l = 99,
    step: o = 1,
    disabled: a = !1,
    backgroundColor: d = x.Subtle,
    padding: s = i.XSmall
  }, c) => {
    const b = e - o >= r, u = e + o <= l;
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
          /* @__PURE__ */ n(
            re,
            {
              label: "Decrease",
              onClick: () => b && t(e - o),
              disabled: a || !b,
              color: p.Brand,
              padding: i.XSmall,
              children: /* @__PURE__ */ n(Ft, {})
            }
          ),
          /* @__PURE__ */ n(
            D,
            {
              as: "span",
              size: w.Medium,
              weight: N.Bold,
              color: p.Default,
              style: { minWidth: "32px", textAlign: "center" },
              children: e
            }
          ),
          /* @__PURE__ */ n(
            re,
            {
              label: "Increase",
              onClick: () => u && t(e + o),
              disabled: a || !u,
              color: p.Brand,
              padding: i.XSmall,
              children: /* @__PURE__ */ n(Ot, {})
            }
          )
        ]
      }
    );
  }
);
Ht.displayName = "Stepper";
const jt = () => /* @__PURE__ */ n(
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
), Pt = () => /* @__PURE__ */ n(
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
), Vt = () => /* @__PURE__ */ n(
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
), Gt = L(
  ({
    logo: e,
    navigation: t = [],
    cta: r,
    linkColor: l = p.Subtle,
    ctaBackgroundColor: o = x.Dark,
    ctaColor: a = p.Inverse,
    ctaWeight: d = 500,
    ctaBorderRadius: s = M.Full,
    paddingInline: c = i.XXXLarge,
    paddingBlock: b = i.XLarge,
    linkGap: u = i.XXLarge,
    logoGap: g = i.Size3_5,
    mobileMenuBackground: h = x.Default,
    mobileMenuBorderColor: m = z.Default,
    mobileMenuBorderRadius: y = M.Large,
    mobileBreakpoint: v = 768
  }, C) => {
    const [B, j] = P(!1), [X, A] = P(!1);
    Y(() => {
      const I = () => A(window.innerWidth < v);
      return I(), window.addEventListener("resize", I), () => window.removeEventListener("resize", I);
    }, [v]);
    const R = Q((I) => {
      I.target.closest("[data-navbar-menu]") || j(!1);
    }, []);
    Y(() => (document.addEventListener("click", R), () => document.removeEventListener("click", R)), [R]);
    const W = te.isValidElement(e) ? e : /* @__PURE__ */ n(
      De,
      {
        src: e.src,
        alt: e.alt ?? "Logo",
        style: {
          width: e.width ?? 120,
          height: e.height ?? "auto"
        }
      }
    ), H = /* @__PURE__ */ n(ne, { children: t.map((I, T) => /* @__PURE__ */ n(
      ge,
      {
        href: I.path,
        color: l,
        display: "block",
        style: { textDecoration: "none" },
        children: I.title
      },
      T
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
        children: /* @__PURE__ */ f(O, { space: i.XSmall, alignBlock: "center", children: [
          /* @__PURE__ */ n(D, { as: "span", color: a, weight: d, children: r.label }),
          r.icon ?? /* @__PURE__ */ n(Vt, {})
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
          children: /* @__PURE__ */ f(O, { alignBlock: "center", spread: "space-between", children: [
            /* @__PURE__ */ n(S, { children: W }),
            /* @__PURE__ */ n(
              ae,
              {
                onClick: () => j(!B),
                style: {
                  background: "none",
                  padding: 0,
                  color: p.Subtle
                },
                children: B ? /* @__PURE__ */ n(Pt, {}) : /* @__PURE__ */ n(jt, {})
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
          borderRadius: y,
          borderColor: m,
          borderSide: "all",
          padding: i.Large,
          style: { margin: i.Medium },
          children: /* @__PURE__ */ f("nav", { children: [
            /* @__PURE__ */ n("ul", { style: { listStyle: "none", padding: 0, margin: 0 }, children: t.map((I, T) => /* @__PURE__ */ n("li", { style: { paddingBlock: i.MediumLarge }, children: /* @__PURE__ */ n(
              ge,
              {
                href: I.path,
                color: l,
                display: "block",
                style: { textDecoration: "none" },
                children: I.title
              }
            ) }, T)) }),
            k && /* @__PURE__ */ n(S, { marginBlockStart: i.XXLarge, children: k })
          ] })
        }
      )
    ] }) : /* @__PURE__ */ n(S, { as: "header", ref: C, style: { width: "100%" }, children: /* @__PURE__ */ n(
      S,
      {
        as: "nav",
        paddingInline: c,
        paddingBlock: b,
        style: { width: "100%" },
        children: /* @__PURE__ */ f(O, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ n(S, { children: W }),
          /* @__PURE__ */ f(
            O,
            {
              space: u,
              alignBlock: "center",
              grow: "fill",
              style: { marginInlineStart: g },
              children: [
                /* @__PURE__ */ n(
                  O,
                  {
                    space: u,
                    alignBlock: "center",
                    grow: "fill",
                    alignInline: "center",
                    children: H
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
Gt.displayName = "Navbar";
const Wn = () => /* @__PURE__ */ n(
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
), _t = L(
  ({
    title: e,
    subtitle: t,
    badge: r,
    actions: l = [],
    image: o,
    children: a,
    titleSize: d = w.XXXLarge,
    titleSizeLarge: s = w.Huge,
    titleWeight: c = N.ExtraBold,
    titleColor: b = p.Default,
    subtitleSize: u = w.Small,
    subtitleColor: g = p.Subtlest,
    primaryCtaBackground: h = x.Dark,
    primaryCtaColor: m = p.Inverse,
    primaryCtaBorderRadius: y = M.Full,
    primaryCtaWeight: v = 500,
    secondaryCtaColor: C = p.Subtle,
    secondaryCtaWeight: B = 500,
    ctaGap: j = i.MediumLarge,
    paddingBlock: X = i.Size7,
    paddingInline: A = i.XXXLarge,
    contentGap: R = i.XHuge,
    textGap: W = i.XLarge,
    textMaxWidth: H = "576px",
    gradient: k,
    breakpoint: I = 768
  }, T) => {
    const [G, F] = P(!1);
    Y(() => {
      const Z = () => F(window.innerWidth >= I);
      return Z(), window.addEventListener("resize", Z), () => window.removeEventListener("resize", Z);
    }, [I]);
    const K = (k == null ? void 0 : k.enabled) !== !1, U = (k == null ? void 0 : k.css) ?? "linear-gradient(143.6deg, rgba(192,132,252,0) 20.79%, rgba(232,121,249,0.26) 40.92%, rgba(204,171,238,0) 70.35%)", E = (k == null ? void 0 : k.height) ?? "580px", V = (r == null ? void 0 : r.borderColor) ?? z.Default, J = r ? /* @__PURE__ */ n(
      ge,
      {
        href: r.path ?? "#",
        borderRadius: M.Full,
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
        children: /* @__PURE__ */ f(O, { space: i.MediumLarge, alignBlock: "center", children: [
          /* @__PURE__ */ n(
            D,
            {
              as: "span",
              size: w.XSmall,
              color: r.labelColor ?? p.Inverse,
              style: {
                backgroundColor: r.labelBackgroundColor ?? x.Accent,
                borderRadius: M.Full,
                padding: `${i.XSmall} ${i.MediumLarge}`
              },
              children: r.label
            }
          ),
          /* @__PURE__ */ f(O, { space: i.XXSmall, alignBlock: "center", children: [
            /* @__PURE__ */ n(D, { as: "span", size: w.XSmall, children: r.text }),
            r.icon ?? /* @__PURE__ */ n(Wn, {})
          ] })
        ] })
      }
    ) : null, q = l.length > 0 ? /* @__PURE__ */ n(O, { space: j, alignBlock: "center", shouldWrap: !0, children: l.map((Z, ce) => {
      const le = (Z.variant ?? (ce === 0 ? "primary" : "secondary")) === "primary", me = le ? v : B;
      return /* @__PURE__ */ n(
        ge,
        {
          href: Z.path,
          backgroundColor: le ? h : void 0,
          color: le ? m : C,
          paddingBlock: i.Medium,
          paddingInline: i.Large,
          borderRadius: le ? y : void 0,
          weight: me,
          display: "inline-block",
          style: { textDecoration: "none" },
          children: /* @__PURE__ */ f(O, { space: i.XSmall, alignBlock: "center", children: [
            /* @__PURE__ */ n(
              D,
              {
                as: "span",
                color: le ? m : C,
                weight: me,
                children: Z.label
              }
            ),
            Z.icon ?? /* @__PURE__ */ n(Wn, {})
          ] })
        },
        ce
      );
    }) }) : null, se = /* @__PURE__ */ f(
      _,
      {
        space: W,
        style: { maxWidth: H, flexShrink: 0 },
        children: [
          J,
          /* @__PURE__ */ n(
            D,
            {
              as: "h1",
              size: G ? s : d,
              weight: c,
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
              size: u,
              lineHeight: 1.6,
              children: t
            }
          ),
          a,
          q
        ]
      }
    ), ee = o && G ? /* @__PURE__ */ n(S, { style: { flex: "1 1 0%", minWidth: 0 }, children: /* @__PURE__ */ n(
      De,
      {
        src: o.src,
        alt: o.alt ?? "",
        style: { maxWidth: o.maxWidth ?? "576px" }
      }
    ) }) : null;
    return /* @__PURE__ */ f(S, { as: "section", ref: T, style: { position: "relative" }, children: [
      K && /* @__PURE__ */ n(
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
          paddingInline: A,
          paddingBlock: X,
          children: G ? /* @__PURE__ */ f(O, { space: R, alignBlock: "center", children: [
            se,
            ee
          ] }) : /* @__PURE__ */ n(_, { space: R, children: se })
        }
      )
    ] });
  }
);
_t.displayName = "HeroSection";
const Yt = L(
  ({
    padding: e = i.Large,
    backgroundColor: t = x.Default,
    borderRadius: r = M.XXLarge,
    borderColor: l = z.Default,
    elevation: o = he.Ambient,
    accentColor: a,
    accentWidth: d = "8px",
    header: s,
    footer: c,
    children: b,
    ...u
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
      ...u,
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
        c && /* @__PURE__ */ n(
          S,
          {
            padding: e,
            style: { borderTop: `1px solid ${l}` },
            children: c
          }
        )
      ] })
    }
  )
);
Yt.displayName = "Card";
const Kt = L(
  ({
    label: e,
    helperText: t,
    errorText: r,
    id: l,
    labelColor: o = p.Default,
    labelSize: a = w.XSmall,
    labelWeight: d = N.Medium,
    labelTextTransform: s,
    labelLetterSpacing: c,
    inputBackground: b = x.Default,
    inputBorderColor: u = z.Input,
    inputBorderRadius: g = M.Medium,
    inputBorderSide: h = "all",
    inputPadding: m = i.Medium,
    startAdornment: y,
    endAdornment: v,
    name: C,
    type: B,
    placeholder: j,
    value: X,
    defaultValue: A,
    disabled: R,
    readOnly: W,
    required: H,
    autoFocus: k,
    autoComplete: I,
    onChange: T,
    onBlur: G,
    onFocus: F
  }, K) => {
    const U = Le(), E = l ?? U, V = `${E}-helper`, J = `${E}-error`, q = !!r, de = q ? z.Error : u, se = h === "bottom", ee = se || !!(y || v), Z = /* @__PURE__ */ n(
      $e,
      {
        ref: K,
        id: E,
        name: C,
        type: B,
        placeholder: j,
        value: X,
        defaultValue: A,
        disabled: R,
        readOnly: W,
        required: H,
        autoFocus: k,
        autoComplete: I,
        onChange: T,
        onBlur: G,
        onFocus: F,
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
      y,
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
            letterSpacing: c
          },
          children: e
        }
      ),
      ce,
      q && /* @__PURE__ */ n(D, { as: "span", size: w.XXSmall, color: p.Error, id: J, children: r }),
      !q && t && /* @__PURE__ */ n(D, { as: "span", size: w.XXSmall, color: p.Subtle, id: V, children: t })
    ] });
  }
);
Kt.displayName = "TextField";
const Ut = {
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
}, qt = () => /* @__PURE__ */ n(
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
), Jt = L(
  ({ variant: e = "info", icon: t, dismissible: r, onDismiss: l, children: o }, a) => {
    const d = Ut[e];
    return /* @__PURE__ */ n(
      S,
      {
        ref: a,
        role: "alert",
        padding: i.MediumLarge,
        borderRadius: M.Medium,
        style: {
          backgroundColor: d.bg,
          borderLeft: `4px solid ${d.border}`,
          position: "relative",
          zIndex: be.Banner
        },
        children: /* @__PURE__ */ f(O, { space: i.Medium, alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ f(O, { space: i.Medium, alignBlock: "center", grow: "fill", children: [
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
              children: /* @__PURE__ */ n(qt, {})
            }
          )
        ] })
      }
    );
  }
);
Jt.displayName = "Banner";
const Yn = L(
  ({
    sections: e,
    activeId: t,
    onSelect: r,
    activeColor: l = p.Brand,
    activeBackground: o = x.Subtle
  }, a) => /* @__PURE__ */ n(_, { ref: a, as: "nav", space: i.Small, children: e.map((d, s) => /* @__PURE__ */ f(_, { space: i.XXSmall, children: [
    d.title && /* @__PURE__ */ n(S, { paddingInline: i.Medium, paddingBlock: i.XSmall, children: /* @__PURE__ */ n(
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
    /* @__PURE__ */ n(_, { as: "ul", style: { listStyle: "none", padding: 0, margin: 0 }, children: d.items.map((c) => {
      const b = c.id === t;
      return /* @__PURE__ */ n("li", { children: /* @__PURE__ */ n(
        ae,
        {
          disabled: c.disabled,
          onClick: () => r == null ? void 0 : r(c.id),
          borderRadius: M.Medium,
          color: c.disabled ? p.Disabled : b ? l : p.Default,
          backgroundColor: b ? o : x.Transparent,
          paddingBlock: i.Medium,
          paddingInline: i.MediumLarge,
          style: {
            width: "100%",
            fontSize: w.XSmall,
            textAlign: "left",
            cursor: c.disabled ? "default" : "pointer"
          },
          children: /* @__PURE__ */ f(O, { space: i.Medium, alignBlock: "center", children: [
            c.icon && /* @__PURE__ */ n(S, { style: { flexShrink: 0 }, children: c.icon }),
            /* @__PURE__ */ n(D, { as: "span", size: w.XSmall, style: { color: "inherit" }, children: c.label })
          ] })
        }
      ) }, c.id);
    }) }),
    s < e.length - 1 && /* @__PURE__ */ n(
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
Yn.displayName = "Menu";
const Zt = L(
  ({
    tabs: e,
    activeId: t,
    defaultActiveId: r,
    onChange: l,
    variant: o = "underline",
    activeColor: a = p.Brand,
    inactiveColor: d = p.Subtle,
    pillBackground: s = x.Subtle,
    activePillBackground: c = x.Default,
    panelPadding: b = i.Large
  }, u) => {
    var j;
    const [g, h] = P(
      r ?? ((j = e[0]) == null ? void 0 : j.id)
    ), m = t !== void 0, y = m ? t : g, v = (X) => {
      m || h(X), l == null || l(X);
    }, C = e.find((X) => X.id === y);
    return /* @__PURE__ */ f(S, { ref: u, children: [
      o === "pill" ? /* @__PURE__ */ n(
        O,
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
          children: e.map((X) => {
            const A = X.id === y;
            return /* @__PURE__ */ n(
              ae,
              {
                role: "tab",
                "aria-selected": A,
                "aria-controls": `tabpanel-${X.id}`,
                id: `tab-${X.id}`,
                disabled: X.disabled,
                onClick: () => v(X.id),
                paddingBlock: i.Medium,
                paddingInline: i.XXLarge,
                borderRadius: M.XLarge,
                color: A ? p.Default : X.disabled ? p.Disabled : d,
                backgroundColor: A ? c : x.Transparent,
                style: {
                  fontWeight: A ? N.Bold : N.Medium,
                  fontSize: w.XSmall,
                  boxShadow: A ? he.Raised : "none",
                  cursor: X.disabled ? "default" : "pointer"
                },
                children: X.label
              },
              X.id
            );
          })
        }
      ) : /* @__PURE__ */ n(
        O,
        {
          as: "div",
          role: "tablist",
          space: i.None,
          style: {
            borderBottom: `1px solid ${z.Default}`
          },
          children: e.map((X) => {
            const A = X.id === y;
            return /* @__PURE__ */ n(
              ae,
              {
                role: "tab",
                "aria-selected": A,
                "aria-controls": `tabpanel-${X.id}`,
                id: `tab-${X.id}`,
                disabled: X.disabled,
                onClick: () => v(X.id),
                paddingBlock: i.Medium,
                paddingInline: i.Large,
                borderRadius: M.None,
                color: A ? a : X.disabled ? p.Disabled : d,
                style: {
                  background: "none",
                  fontWeight: A ? N.Semibold : N.Regular,
                  fontSize: w.XSmall,
                  borderBottom: A ? `2px solid ${a}` : "2px solid transparent",
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
Zt.displayName = "Tabs";
const Qt = L(
  ({
    title: e,
    subtitle: t,
    breadcrumbs: r,
    actions: l,
    titleSize: o = w.XLarge,
    titleWeight: a = N.Bold,
    titleColor: d = p.Default,
    subtitleColor: s = p.Subtle,
    breadcrumbLinkColor: c = p.Link,
    borderColor: b = z.Default,
    paddingBlock: u = i.Large
  }, g) => /* @__PURE__ */ n(
    S,
    {
      ref: g,
      as: "header",
      paddingBlock: u,
      style: {
        borderBottom: `1px solid ${b}`
      },
      children: /* @__PURE__ */ f(_, { space: i.Medium, children: [
        r && r.length > 0 && /* @__PURE__ */ n(O, { space: i.XSmall, alignBlock: "center", children: r.map((h, m) => /* @__PURE__ */ f(te.Fragment, { children: [
          m > 0 && /* @__PURE__ */ n(D, { as: "span", color: p.Disabled, size: w.XSmall, children: "/" }),
          h.href ? /* @__PURE__ */ n(
            ge,
            {
              href: h.href,
              color: c,
              size: w.XSmall,
              style: { textDecoration: "none" },
              children: h.label
            }
          ) : /* @__PURE__ */ n(D, { as: "span", size: w.XSmall, color: p.Subtlest, children: h.label })
        ] }, m)) }),
        /* @__PURE__ */ f(O, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ f(_, { space: i.XXSmall, children: [
            /* @__PURE__ */ n(D, { as: "h1", size: o, weight: a, color: d, children: e }),
            t && /* @__PURE__ */ n(D, { as: "p", size: w.XSmall, color: s, children: t })
          ] }),
          l && /* @__PURE__ */ n(O, { space: i.Medium, alignBlock: "center", children: l })
        ] })
      ] })
    }
  )
);
Qt.displayName = "Header";
const er = {
  XSmall: "320px",
  Small: "416px",
  Medium: "512px",
  Large: "704px",
  XLarge: "960px",
  Full: "min(96vw, 1440px)"
}, nr = () => /* @__PURE__ */ n(
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
), tr = L(
  ({ open: e, onClose: t, title: r, children: l, footer: o, size: a = er.Medium }, d) => {
    const s = Q(
      (c) => {
        c.key === "Escape" && t();
      },
      [t]
    );
    return Y(() => {
      if (e)
        return document.addEventListener("keydown", s), document.body.style.overflow = "hidden", () => {
          document.removeEventListener("keydown", s), document.body.style.overflow = "";
        };
    }, [e, s]), e ? Ie(
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
            backgroundColor: x.Overlay
          },
          onClick: (c) => {
            c.target === c.currentTarget && t();
          },
          children: /* @__PURE__ */ n(
            S,
            {
              ref: d,
              role: "dialog",
              "aria-modal": "true",
              "aria-label": r,
              backgroundColor: x.Default,
              borderRadius: M.XLarge,
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
                    style: { borderBottom: `1px solid ${z.Default}` },
                    children: /* @__PURE__ */ f(O, { alignBlock: "center", spread: "space-between", children: [
                      /* @__PURE__ */ n(D, { as: "h2", size: w.Large, weight: N.Semibold, color: p.Default, children: r }),
                      /* @__PURE__ */ n(re, { label: "Close", onClick: t, color: p.Subtle, children: /* @__PURE__ */ n(nr, {}) })
                    ] })
                  }
                ),
                /* @__PURE__ */ n(S, { padding: i.Large, overflow: "auto", style: { flex: "1 1 auto" }, children: l }),
                o && /* @__PURE__ */ n(
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
tr.displayName = "Modal";
const Ae = 200, rr = {
  start: "flex-start",
  center: "center",
  end: "flex-end"
};
function lr({
  open: e,
  onClose: t,
  children: r,
  offsetTop: l = 0,
  padding: o = i.Large,
  maxWidth: a,
  align: d = "center",
  blur: s = !0,
  closeOnMouseLeave: c = !1
}) {
  const [b, u] = P(e), [g, h] = P(!1), m = $(l), y = $(d);
  if (Y(() => {
    if (e) {
      u(!0);
      const B = requestAnimationFrame(() => h(!0));
      return () => cancelAnimationFrame(B);
    }
    h(!1);
    const C = window.setTimeout(() => u(!1), Ae);
    return () => window.clearTimeout(C);
  }, [e]), Y(() => {
    if (!e) return;
    const C = (B) => {
      B.key === "Escape" && t();
    };
    return document.addEventListener("keydown", C), () => document.removeEventListener("keydown", C);
  }, [e, t]), !b) return null;
  const v = typeof m == "number" ? `${m}px` : m;
  return Ie(
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
          transition: `opacity ${Ae}ms ease`
        },
        children: [
          /* @__PURE__ */ n(
            S,
            {
              onClick: (C) => C.stopPropagation(),
              onMouseLeave: c ? t : void 0,
              backgroundColor: x.Default,
              padding: o,
              style: {
                display: "flex",
                justifyContent: rr[y],
                width: "100%",
                transform: g ? "translateY(0)" : "translateY(-12px)",
                transition: `transform ${Ae + 50}ms ease`
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
lr.displayName = "Drawer";
const ir = L(
  ({ trigger: e, sections: t, activeId: r, onSelect: l }, o) => {
    const [a, d] = P(!1), s = oe(null), c = () => d((h) => !h), b = (h) => {
      l == null || l(h), d(!1);
    }, u = Q((h) => {
      h.key === "Escape" && d(!1);
    }, []), g = Q((h) => {
      s.current && !s.current.contains(h.target) && d(!1);
    }, []);
    return Y(() => {
      if (a)
        return document.addEventListener("keydown", u), document.addEventListener("mousedown", g), () => {
          document.removeEventListener("keydown", u), document.removeEventListener("mousedown", g);
        };
    }, [a, u, g]), /* @__PURE__ */ f(
      S,
      {
        ref: (h) => {
          s.current = h, typeof o == "function" ? o(h) : o && (o.current = h);
        },
        style: { position: "relative", display: "inline-block" },
        children: [
          /* @__PURE__ */ n(
            O,
            {
              style: { cursor: "pointer" },
              onClick: c,
              alignBlock: "center",
              children: e
            }
          ),
          a && /* @__PURE__ */ n(
            S,
            {
              backgroundColor: x.Default,
              borderColor: z.Default,
              borderSide: "all",
              borderRadius: M.Large,
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
                Yn,
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
ir.displayName = "DropdownMenu";
const or = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), ar = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), sr = L(
  ({
    sections: e,
    activeId: t,
    onSelect: r,
    header: l,
    footer: o,
    collapsed: a = !1,
    onToggleCollapse: d,
    width: s = "256px",
    collapsedWidth: c = "64px",
    activeColor: b = p.Brand,
    activeBackground: u = x.Subtle,
    borderColor: g = z.Default
  }, h) => /* @__PURE__ */ f(
    S,
    {
      ref: h,
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
            children: e.map((m, y) => /* @__PURE__ */ f(_, { space: i.XXSmall, children: [
              m.title && !a && /* @__PURE__ */ n(S, { paddingInline: i.Medium, paddingBlock: i.XSmall, children: /* @__PURE__ */ n(
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
                const C = v.id === t;
                return /* @__PURE__ */ f(
                  ae,
                  {
                    onClick: () => r == null ? void 0 : r(v.id),
                    title: a ? v.label : void 0,
                    borderRadius: M.Medium,
                    color: C ? b : p.Default,
                    backgroundColor: C ? u : x.Transparent,
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
                        v.badge && /* @__PURE__ */ n(Vn, { variant: v.badgeVariant ?? "default", children: v.badge })
                      ] })
                    ]
                  },
                  v.id
                );
              })
            ] }, y))
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
                color: p.Subtle,
                padding: i.XSmall,
                children: a ? /* @__PURE__ */ n(ar, {}) : /* @__PURE__ */ n(or, {})
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
sr.displayName = "Sidebar";
const dr = () => /* @__PURE__ */ n(
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
), cr = L(
  ({
    open: e,
    onClose: t,
    title: r,
    side: l = "right",
    mode: o = "overlay",
    width: a = "384px",
    children: d
  }, s) => {
    const c = Q(
      (u) => {
        u.key === "Escape" && t();
      },
      [t]
    );
    if (Y(() => {
      if (e)
        return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
    }, [e, c]), !e) return null;
    const b = /* @__PURE__ */ f(
      S,
      {
        ref: s,
        backgroundColor: x.Default,
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
              style: { borderBottom: `1px solid ${z.Default}` },
              children: /* @__PURE__ */ f(O, { alignBlock: "center", spread: "space-between", children: [
                /* @__PURE__ */ n(D, { as: "h2", size: w.Large, weight: N.Semibold, color: p.Default, children: r }),
                /* @__PURE__ */ n(re, { label: "Close panel", onClick: t, color: p.Subtle, children: /* @__PURE__ */ n(dr, {}) })
              ] })
            }
          ),
          /* @__PURE__ */ n(S, { padding: i.Large, overflow: "auto", style: { flex: "1 1 auto" }, children: d })
        ]
      }
    );
    return o === "overlay" ? Ie(
      /* @__PURE__ */ n(
        S,
        {
          style: {
            position: "fixed",
            inset: 0,
            zIndex: be.Modal,
            backgroundColor: x.Overlay
          },
          onClick: (u) => {
            u.target === u.currentTarget && t();
          },
          children: b
        }
      ),
      document.body
    ) : b;
  }
);
cr.displayName = "Panel";
const ur = L(
  ({
    padding: e = i.Large,
    color: t = p.Subtle,
    borderColor: r = z.Default,
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
ur.displayName = "Aside";
const pr = "64px", br = L(
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
        backgroundColor: x.Default,
        borderTop: `1px solid ${z.Default}`,
        backdropFilter: "blur(20px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        // The bar is fixed to the bottom edge, so the iOS home indicator and
        // the Android gesture bar sit ON TOP of it. The bottom inset ADDS to
        // the bar's own padding — it does not replace it. The inline insets
        // REPLACE the gutter, for the notch in landscape. safeArea.ts states
        // why, and why env() alone is wrong on Android.
        paddingLeft: Ce("left", i.Large),
        paddingRight: Ce("right", i.Large),
        paddingBlockStart: i.Medium,
        paddingBlockEnd: ke("bottom", i.Medium)
      },
      children: e.map((a, d) => {
        const s = a.id === t, c = Math.floor(e.length / 2), b = l && d === c;
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
                color: s ? p.Brand : p.Disabled
              },
              children: [
                /* @__PURE__ */ n(S, { style: { width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center" }, children: a.icon }),
                /* @__PURE__ */ n(
                  D,
                  {
                    as: "span",
                    size: w.XXSmall,
                    weight: N.Bold,
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
br.displayName = "MobileNav";
const hr = L(
  ({
    topNav: e,
    sideNav: t,
    mobileNav: r,
    backgroundColor: l = x.Surface,
    children: o
  }, a) => {
    const s = Me() === "mobile";
    return /* @__PURE__ */ f(
      S,
      {
        ref: a,
        style: {
          // dvh, not vh. On mobile browsers the address bar grows and shrinks.
          // 100vh measures the LARGEST viewport, so the bottom of the page sits
          // under the address bar until the user scrolls. 100dvh follows the
          // live viewport. Capacitor has no address bar, so this only changes
          // the web build.
          minHeight: "100dvh",
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
                e && /* @__PURE__ */ n(S, { safeArea: "top", children: e }),
                /* @__PURE__ */ n(
                  S,
                  {
                    as: "main",
                    style: {
                      flex: "1 1 auto",
                      overflow: "auto",
                      // Reserve the REAL bar height plus the bottom inset. A flat
                      // 64px was too short by the inset (34pt on an iPhone with a home
                      // indicator), so the last row of every page hid behind the bar.
                      paddingBlockEnd: s && r ? ke("bottom", pr) : void 0
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
hr.displayName = "Layout";
const gr = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
function Fn(e, t) {
  return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function mr(e, t) {
  return new Date(e, t + 1, 0).getDate();
}
function fr(e, t) {
  return new Date(e, t, 1).getDay();
}
const xr = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), yr = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), vr = [
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
], Sr = L(
  ({
    value: e,
    defaultValue: t,
    onChange: r,
    min: l,
    max: o,
    selectedColor: a = p.Inverse,
    selectedBackground: d = x.Brand
  }, s) => {
    const c = /* @__PURE__ */ new Date(), [b, u] = P(t), g = e !== void 0, h = g ? e : b, [m, y] = P(
      (h ?? c).getFullYear()
    ), [v, C] = P(
      (h ?? c).getMonth()
    ), B = we(() => mr(m, v), [m, v]), j = we(() => fr(m, v), [m, v]), X = () => {
      v === 0 ? (C(11), y((k) => k - 1)) : C((k) => k - 1);
    }, A = () => {
      v === 11 ? (C(0), y((k) => k + 1)) : C((k) => k + 1);
    }, R = (k) => {
      const I = new Date(m, v, k);
      g || u(I), r == null || r(I);
    }, W = (k) => {
      const I = new Date(m, v, k);
      return !!(l && I < new Date(l.getFullYear(), l.getMonth(), l.getDate()) || o && I > new Date(o.getFullYear(), o.getMonth(), o.getDate()));
    }, H = [];
    for (let k = 0; k < j; k++)
      H.push(/* @__PURE__ */ n(S, {}, `empty-${k}`));
    for (let k = 1; k <= B; k++) {
      const I = new Date(m, v, k), T = h ? Fn(I, h) : !1, G = Fn(I, c), F = W(k);
      H.push(
        /* @__PURE__ */ n(
          ae,
          {
            disabled: F,
            onClick: () => R(k),
            borderRadius: M.Medium,
            style: {
              width: "36px",
              height: "36px",
              padding: 0,
              fontSize: w.XSmall,
              fontWeight: T ? N.Semibold : N.Regular,
              backgroundColor: T ? d : "transparent",
              color: T ? a : F ? p.Disabled : p.Default,
              border: G && !T ? `1px solid ${z.Default}` : "none",
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
        padding: i.Large,
        borderRadius: M.XLarge,
        borderColor: z.Default,
        borderSide: "all",
        backgroundColor: x.Default,
        style: { width: "fit-content" },
        children: [
          /* @__PURE__ */ f(
            O,
            {
              alignBlock: "center",
              spread: "space-between",
              marginBlockEnd: i.Medium,
              children: [
                /* @__PURE__ */ n(re, { label: "Previous month", onClick: X, color: p.Subtle, padding: i.XSmall, children: /* @__PURE__ */ n(xr, {}) }),
                /* @__PURE__ */ f(D, { as: "span", size: w.XSmall, weight: N.Semibold, color: p.Default, children: [
                  vr[v],
                  " ",
                  m
                ] }),
                /* @__PURE__ */ n(re, { label: "Next month", onClick: A, color: p.Subtle, padding: i.XSmall, children: /* @__PURE__ */ n(yr, {}) })
              ]
            }
          ),
          /* @__PURE__ */ f(Pn, { columns: 7, gap: i.XXSmall, children: [
            gr.map((k) => /* @__PURE__ */ n(
              D,
              {
                as: "span",
                size: w.XXSmall,
                weight: N.Medium,
                color: p.Subtlest,
                align: "center",
                style: { padding: `${i.XSmall} 0` },
                children: k
              },
              k
            )),
            H
          ] })
        ]
      }
    );
  }
);
Sr.displayName = "Calendar";
const wr = L(
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
              fontFamily: Qn.Display,
              size: w.XLarge,
              weight: N.Bold,
              color: p.Default,
              children: e
            }
          ),
          t && /* @__PURE__ */ n(D, { as: "p", size: w.XSmall, color: p.Subtle, lineHeight: 1.6, children: t })
        ] }),
        (l || o) && /* @__PURE__ */ f(O, { space: i.Medium, alignBlock: "center", children: [
          l,
          o
        ] })
      ]
    }
  )
);
wr.displayName = "EmptyState";
const kr = ({ order: e }) => /* @__PURE__ */ n(
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
), Cr = L(
  ({
    caption: e,
    head: t,
    rows: r,
    rowsPerPage: l,
    page: o,
    defaultPage: a = 1,
    sortKey: d,
    sortOrder: s,
    defaultSortKey: c,
    defaultSortOrder: b = "ASC",
    onSort: u,
    onSetPage: g,
    isLoading: h = !1,
    isFixedSize: m = !1
  }, y) => {
    const [v, C] = P(a), [B, j] = P(c), [X, A] = P(b), R = o !== void 0, W = R ? o : v, H = d !== void 0, k = H ? d : B, I = H ? s ?? "ASC" : X, T = l ? Math.max(1, Math.ceil(r.length / l)) : 1, G = we(() => {
      if (!l) return r;
      const E = (W - 1) * l;
      return r.slice(E, E + l);
    }, [r, l, W]), F = (E) => {
      const V = k === E && I === "ASC" ? "DESC" : "ASC";
      H || (j(E), A(V)), u == null || u(E, V);
    }, K = (E) => {
      R || C(E), g == null || g(E);
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
            borderRadius: M.XXLarge
          },
          children: /* @__PURE__ */ n(Gn, { size: "large" })
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
            e && /* @__PURE__ */ n(
              "caption",
              {
                style: {
                  textAlign: "left",
                  paddingBlockEnd: i.Medium,
                  fontWeight: N.Semibold,
                  fontSize: w.Small,
                  color: p.Default
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
                  fontWeight: N.Semibold,
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
                  E.isSortable && /* @__PURE__ */ n(
                    kr,
                    {
                      order: k === E.key ? I : void 0
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
                    borderBottom: `1px solid ${z.Default}`
                  },
                  children: E.cells.map((V, J) => /* @__PURE__ */ n("td", { style: { ...U, color: p.Default }, children: V }, J))
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
                    color: p.Subtle
                  },
                  children: "No data"
                }
              ) })
            ] })
          ]
        }
      ),
      l && T > 1 && /* @__PURE__ */ f(
        O,
        {
          space: i.Medium,
          alignBlock: "center",
          alignInline: "center",
          style: { paddingBlock: i.Large },
          children: [
            /* @__PURE__ */ n(
              ae,
              {
                disabled: W <= 1,
                onClick: () => K(W - 1),
                paddingBlock: i.XSmall,
                paddingInline: i.Medium,
                borderRadius: M.Large,
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
              T
            ] }),
            /* @__PURE__ */ n(
              ae,
              {
                disabled: W >= T,
                onClick: () => K(W + 1),
                paddingBlock: i.XSmall,
                paddingInline: i.Medium,
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
Cr.displayName = "Table";
const Xr = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z", clipRule: "evenodd" }) }), Br = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" }) }), Lr = L(
  ({
    defaultValue: e,
    label: t,
    editButtonLabel: r,
    editView: l,
    readView: o,
    onConfirm: a,
    onCancel: d
  }, s) => {
    const [c, b] = P(!1), [u, g] = P(e);
    oe(null), Y(() => {
      g(e);
    }, [e]);
    const h = Q(() => {
      b(!1), a(u);
    }, [u, a]), m = Q(() => {
      g(e), b(!1), d == null || d();
    }, [e, d]), y = Q(
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
          borderRadius: M.Medium,
          wordBreak: "break-word",
          minHeight: "1.5em"
        },
        children: /* @__PURE__ */ n(D, { as: "span", size: w.Small, color: p.Default, children: B || " " })
      }
    ), C = (B) => /* @__PURE__ */ n(
      $e,
      {
        value: B.value,
        onChange: B.onChange,
        onKeyDown: B.onKeyDown,
        autoFocus: B.autoFocus,
        backgroundColor: x.Default,
        borderColor: z.Focus,
        borderRadius: M.Medium,
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
          color: p.Subtle,
          style: { display: "block", marginBlockEnd: i.XSmall },
          children: t
        }
      ),
      c ? /* @__PURE__ */ f(O, { space: i.XSmall, alignBlock: "start", children: [
        /* @__PURE__ */ n(S, { style: { flex: "1 1 auto" }, children: (l ?? C)({
          value: u,
          onChange: (B) => g(B.target.value),
          onKeyDown: y,
          autoFocus: !0
        }) }),
        /* @__PURE__ */ n(
          re,
          {
            label: "Confirm",
            onClick: h,
            color: p.Success,
            padding: i.XSmall,
            children: /* @__PURE__ */ n(Xr, {})
          }
        ),
        /* @__PURE__ */ n(
          re,
          {
            label: "Cancel",
            onClick: m,
            color: p.Error,
            padding: i.XSmall,
            children: /* @__PURE__ */ n(Br, {})
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
Lr.displayName = "InlineEdit";
const Ir = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "currentColor", style: { width: "14px", height: "14px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z", clipRule: "evenodd" }) }), Mr = L(
  ({ trigger: e, groups: t, checked: r, onChange: l }, o) => {
    const [a, d] = P(!1), s = oe(null), c = Q((u) => {
      u.key === "Escape" && d(!1);
    }, []), b = Q((u) => {
      s.current && !s.current.contains(u.target) && d(!1);
    }, []);
    return Y(() => {
      if (a)
        return document.addEventListener("keydown", c), document.addEventListener("mousedown", b), () => {
          document.removeEventListener("keydown", c), document.removeEventListener("mousedown", b);
        };
    }, [a, c, b]), /* @__PURE__ */ f(
      S,
      {
        ref: (u) => {
          s.current = u, typeof o == "function" ? o(u) : o && (o.current = u);
        },
        style: { position: "relative", display: "inline-block" },
        children: [
          /* @__PURE__ */ n(
            O,
            {
              style: { cursor: "pointer" },
              onClick: () => d((u) => !u),
              alignBlock: "center",
              children: e
            }
          ),
          a && /* @__PURE__ */ n(
            S,
            {
              backgroundColor: x.Default,
              borderColor: z.Default,
              borderSide: "all",
              borderRadius: M.XLarge,
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
              children: /* @__PURE__ */ n(_, { space: i.XSmall, children: t.map((u, g) => /* @__PURE__ */ f(_, { space: i.XXSmall, children: [
                u.title && /* @__PURE__ */ n(S, { paddingInline: i.MediumLarge, paddingBlock: i.XSmall, children: /* @__PURE__ */ n(
                  D,
                  {
                    as: "span",
                    size: w.XXSmall,
                    weight: N.Semibold,
                    color: p.Subtlest,
                    textTransform: "uppercase",
                    children: u.title
                  }
                ) }),
                u.items.map((h) => {
                  const m = !!r[h.id];
                  return /* @__PURE__ */ f(
                    ae,
                    {
                      onClick: () => l(h.id, !m),
                      borderRadius: M.Medium,
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
                        /* @__PURE__ */ n(
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
                            children: m && /* @__PURE__ */ n(Ir, {})
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
Mr.displayName = "DropdownCheckboxMenu";
const Dr = L(
  ({
    label: e,
    helperText: t,
    errorText: r,
    id: l,
    labelColor: o = p.Default,
    labelSize: a = w.XSmall,
    labelWeight: d = N.Medium,
    labelTextTransform: s,
    labelLetterSpacing: c,
    inputBackground: b = x.Subtle,
    inputBorderColor: u,
    inputBorderRadius: g = M.XXLarge,
    inputBorderSide: h = "all",
    inputPadding: m = i.MediumLarge,
    name: y,
    value: v,
    defaultValue: C,
    placeholder: B,
    options: j,
    disabled: X,
    required: A,
    onChange: R,
    onBlur: W
  }, H) => {
    const k = Le(), I = l ?? k, T = `${I}-helper`, G = `${I}-error`, F = !!r, K = F ? z.Error : u, U = h === "bottom", E = /* @__PURE__ */ n(
      _n,
      {
        ref: H,
        id: I,
        name: y,
        value: v,
        defaultValue: C,
        placeholder: B,
        options: j,
        disabled: X,
        required: A,
        onChange: R,
        onBlur: W,
        backgroundColor: U ? "transparent" : b,
        borderColor: U ? void 0 : K,
        borderRadius: U ? void 0 : g,
        padding: m,
        fontSize: w.XSmall,
        color: p.Default,
        style: { width: "100%" },
        "aria-describedby": F ? G : t ? T : void 0,
        "aria-invalid": F || void 0
      }
    ), V = U ? /* @__PURE__ */ n("div", { style: {
      width: "100%",
      backgroundColor: b,
      borderBottom: `2px solid ${K}`
    }, children: E }) : E;
    return /* @__PURE__ */ f(_, { space: i.XSmall, children: [
      e && /* @__PURE__ */ n(
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
          children: e
        }
      ),
      V,
      F && /* @__PURE__ */ n(D, { as: "span", size: w.XXSmall, color: p.Error, id: G, children: r }),
      !F && t && /* @__PURE__ */ n(D, { as: "span", size: w.XXSmall, color: p.Subtle, id: T, children: t })
    ] });
  }
);
Dr.displayName = "SelectField";
const Er = {
  info: { bg: x.Default, text: p.Info, accent: "#3b82f6" },
  success: { bg: x.Default, text: p.Success, accent: "#22c55e" },
  warning: { bg: x.Default, text: p.Warning, accent: "#f59e0b" },
  error: { bg: x.Default, text: p.Error, accent: "#ba1a1a" }
}, zr = () => /* @__PURE__ */ n(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "14px", height: "14px" },
    children: /* @__PURE__ */ n("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  }
), Tr = L(
  ({ open: e, onClose: t, duration: r = 5e3, variant: l = "info", icon: o, children: a }, d) => {
    if (Y(() => {
      if (!e || r === 0) return;
      const c = setTimeout(t, r);
      return () => clearTimeout(c);
    }, [e, r, t]), !e) return null;
    const s = Er[l];
    return Ie(
      /* @__PURE__ */ n(
        S,
        {
          ref: d,
          role: "alert",
          "aria-live": "assertive",
          backgroundColor: s.bg,
          borderRadius: M.XXLarge,
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
          children: /* @__PURE__ */ f(O, { space: i.MediumLarge, alignBlock: "center", spread: "space-between", children: [
            /* @__PURE__ */ f(O, { space: i.MediumLarge, alignBlock: "center", grow: "fill", children: [
              o && /* @__PURE__ */ n(S, { style: { color: s.accent, flexShrink: 0 }, children: o }),
              /* @__PURE__ */ n(D, { as: "span", size: w.XSmall, weight: N.Medium, color: p.Default, children: a })
            ] }),
            /* @__PURE__ */ n(
              re,
              {
                label: "Dismiss",
                onClick: t,
                color: p.Subtle,
                padding: i.XXSmall,
                children: /* @__PURE__ */ n(zr, {})
              }
            )
          ] })
        }
      ),
      document.body
    );
  }
);
Tr.displayName = "Toast";
const Ar = () => /* @__PURE__ */ n(
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
), Rr = L(
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
        children: e.map((s, c) => {
          const b = s.status === "visited", u = s.status === "current";
          return e.length - 1, /* @__PURE__ */ f("div", { style: { display: "flex", flexDirection: "column", gap: i.Medium }, children: [
            /* @__PURE__ */ n("div", { style: {
              height: 6,
              borderRadius: M.Full,
              background: u ? ve.Brand : "none",
              backgroundColor: u ? void 0 : b ? x.PrimaryContainer : x.NeutralBold,
              opacity: b ? 0.4 : 1,
              boxShadow: u ? "0 0 8px var(--bbui-color-primary), 0 0 20px var(--bbui-color-primary)" : "none",
              transition: "all 400ms ease",
              cursor: s.onClick ? "pointer" : "default"
            }, onClick: s.onClick }),
            o && /* @__PURE__ */ n(
              D,
              {
                as: "p",
                size: w.XXSmall,
                weight: u ? N.Bold : N.Medium,
                color: u ? p.Brand : b ? p.Subtle : p.Disabled,
                textTransform: "uppercase",
                letterSpacing: jn.Widest,
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
          }, children: e.map((s, c) => {
            const b = c === e.length - 1, u = s.status === "visited", g = s.status === "current", h = s.status === "disabled", m = u ? ve.Brand : g ? "transparent" : x.NeutralBold, y = /* @__PURE__ */ n(
              "div",
              {
                style: {
                  width: a,
                  height: a,
                  borderRadius: M.Full,
                  background: u ? ve.Brand : m,
                  backgroundColor: u ? void 0 : m,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: u ? p.OnBrand : g ? p.Brand : h ? p.Disabled : p.Subtle,
                  fontSize: w.XSmall,
                  fontWeight: N.Bold,
                  border: g ? `2px solid ${p.Brand}` : "none",
                  cursor: s.onClick || s.href ? "pointer" : "default",
                  transition: "all 300ms ease"
                },
                onClick: s.onClick,
                children: u ? /* @__PURE__ */ n(Ar, {}) : c + 1
              }
            ), v = s.href ? /* @__PURE__ */ n("a", { href: s.href, style: { textDecoration: "none", color: "inherit" }, children: y }) : y;
            return /* @__PURE__ */ f(te.Fragment, { children: [
              v,
              !b && /* @__PURE__ */ n("div", { style: {
                flex: "1 1 auto",
                height: 2,
                backgroundColor: x.NeutralBold,
                position: "relative",
                marginInline: i.XSmall,
                borderRadius: M.Full,
                overflow: "hidden"
              }, children: /* @__PURE__ */ n("div", { style: {
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: `${u ? s.percentageComplete : 0}%`,
                background: ve.Brand,
                borderRadius: M.Full,
                transition: "width 400ms ease"
              } }) })
            ] }, s.id);
          }) }),
          o && /* @__PURE__ */ n("div", { style: {
            display: "flex",
            alignItems: "flex-start",
            width: "100%",
            marginTop: i.Medium
          }, children: e.map((s, c) => {
            const b = c === e.length - 1, u = s.status === "visited", g = s.status === "current", h = s.status === "disabled", m = u ? p.Brand : g ? p.Default : h ? p.Disabled : p.Subtle;
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
                  weight: g ? N.Bold : N.Medium,
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
Rr.displayName = "ProgressTracker";
const Nr = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";
function $r(e) {
  const t = /* @__PURE__ */ f(O, { space: i.XSmall, alignBlock: "center", children: [
    /* @__PURE__ */ n(
      D,
      {
        size: w.XSmall,
        weight: N.Semibold,
        color: p.Brand,
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
function Wr(e) {
  return /* @__PURE__ */ n(
    De,
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
const Fr = L(
  ({
    icon: e,
    heading: t,
    description: r,
    action: l,
    media: o,
    padding: a = i.XXLarge,
    borderRadius: d = M.XXLarge,
    blur: s = 20,
    backgroundOpacity: c = 0.1,
    borderOpacity: b = 0.12,
    children: u
  }, g) => {
    const h = {
      position: "relative",
      overflow: "hidden",
      background: `rgba(255, 255, 255, ${c})`,
      backdropFilter: `blur(${s}px)`,
      WebkitBackdropFilter: `blur(${s}px)`,
      border: `1px solid rgba(255, 255, 255, ${b})`,
      borderRadius: d,
      transition: "background 200ms ease"
    }, m = {
      position: "absolute",
      inset: 0,
      backgroundImage: `url("${Nr}")`,
      opacity: 0.03,
      pointerEvents: "none"
    }, y = /* @__PURE__ */ f(_, { space: i.Medium, style: { flex: 1 }, children: [
      e && /* @__PURE__ */ n(S, { marginBlockEnd: i.Medium, children: e }),
      /* @__PURE__ */ n(
        D,
        {
          as: "h3",
          size: w.Large,
          weight: N.Bold,
          color: p.Default,
          children: t
        }
      ),
      r && /* @__PURE__ */ n(
        D,
        {
          size: w.XSmall,
          color: p.OnSurfaceVariant,
          children: r
        }
      ),
      l && $r(l),
      u
    ] });
    return /* @__PURE__ */ f(S, { ref: g, padding: a, style: h, children: [
      /* @__PURE__ */ n("div", { style: m, "aria-hidden": "true" }),
      o ? /* @__PURE__ */ f(O, { space: i.XXLarge, alignBlock: "center", children: [
        y,
        /* @__PURE__ */ n("div", { style: { flexShrink: 0 }, children: Wr(o) })
      ] }) : y
    ] });
  }
);
Fr.displayName = "GlassCard";
const Or = `
@keyframes bbui-pulse-down {
  0%, 100% { transform: translateY(0); opacity: 0.4 }
  50%      { transform: translateY(3px); opacity: 0.9 }
}
`, On = "36px", Hr = "18px", jr = L(
  ({ items: e, onComplete: t, finishedLabel: r, maxHeight: l = "256px" }, o) => {
    const [a, d] = P(() => /* @__PURE__ */ new Set()), s = oe(!1), c = oe(null), b = oe([]), u = a.size >= e.length;
    return Y(() => {
      u && !s.current && (s.current = !0, t == null || t());
    }, [u, t]), Y(() => {
      const g = c.current;
      if (!g) return;
      const h = new IntersectionObserver(
        (m) => {
          d((y) => {
            let v = y;
            for (const C of m) {
              if (!C.isIntersecting) continue;
              const B = Number(C.target.dataset.idx);
              y.has(B) || (v === y && (v = new Set(y)), v.add(B));
            }
            return v;
          });
        },
        { root: g, threshold: 0.6 }
      );
      return b.current.forEach((m) => m && h.observe(m)), () => h.disconnect();
    }, [e.length]), /* @__PURE__ */ f("div", { ref: o, style: { width: "100%", position: "relative" }, children: [
      /* @__PURE__ */ n("style", { children: Or }),
      /* @__PURE__ */ n("div", { ref: c, style: Gr(l, u), children: /* @__PURE__ */ n(_, { space: i.MediumLarge, children: e.map((g, h) => {
        const m = a.has(h);
        return /* @__PURE__ */ f(
          "div",
          {
            ref: (y) => b.current[h] = y,
            "data-idx": h,
            style: _r(m),
            children: [
              /* @__PURE__ */ n(Pr, { item: g }),
              h < e.length - 1 && /* @__PURE__ */ n("span", { "aria-hidden": "true", style: Jr(m) })
            ]
          },
          g.id ?? h
        );
      }) }) }),
      /* @__PURE__ */ n("div", { style: Zr, children: u ? r : /* @__PURE__ */ n(Vr, {}) })
    ] });
  }
);
jr.displayName = "RevealSteps";
function Pr({ item: e }) {
  return /* @__PURE__ */ f("div", { style: Yr, children: [
    /* @__PURE__ */ n("span", { "aria-hidden": "true", style: Kr, children: e.icon }),
    /* @__PURE__ */ f("span", { style: Ur, children: [
      /* @__PURE__ */ n(D, { as: "span", size: w.Small, weight: N.Medium, children: e.label }),
      e.description && /* @__PURE__ */ n(D, { as: "span", size: w.XSmall, color: p.Subtle, children: e.description })
    ] }),
    e.meta && /* @__PURE__ */ n("span", { style: qr, children: e.meta })
  ] });
}
function Vr() {
  return /* @__PURE__ */ n("div", { style: Qr, "aria-hidden": "true", children: /* @__PURE__ */ n(
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
const Hn = "linear-gradient(to bottom, black 0%, black calc(100% - 32px), transparent 100%)", Gr = (e, t) => ({
  maxHeight: e,
  overflowY: "auto",
  scrollBehavior: "smooth",
  maskImage: t ? "none" : Hn,
  WebkitMaskImage: t ? "none" : Hn,
  paddingRight: i.XSmall
}), _r = (e) => ({
  position: "relative",
  opacity: e ? 1 : 0.15,
  transform: e ? "translateY(0)" : "translateY(8px)",
  filter: e ? "blur(0)" : "blur(2px)",
  transition: "opacity 420ms ease-out, transform 420ms cubic-bezier(0.22, 1, 0.36, 1), filter 420ms ease-out"
}), Yr = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: i.MediumLarge,
  padding: i.MediumLarge,
  background: x.Subtle,
  borderRadius: M.Large,
  border: `1px solid ${z.Default}`,
  color: p.Default
}, Kr = {
  width: On,
  height: On,
  flexShrink: 0,
  borderRadius: M.Medium,
  background: x.Subtle,
  color: p.Default,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
}, Ur = {
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: i.XXSmall
}, qr = {
  flexShrink: 0,
  display: "inline-flex",
  alignItems: "center"
}, Jr = (e) => ({
  position: "absolute",
  left: `calc(${i.MediumLarge} + ${Hr} - 1px)`,
  top: "100%",
  height: i.MediumLarge,
  width: "2px",
  background: z.Default,
  opacity: e ? 1 : 0,
  transition: "opacity 300ms ease-out",
  pointerEvents: "none"
}), Zr = {
  marginTop: i.Large,
  display: "flex",
  justifyContent: "center",
  minHeight: "20px"
}, Qr = {
  color: p.Subtle,
  animation: "bbui-pulse-down 1500ms ease-in-out infinite",
  display: "inline-flex"
}, el = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree"
], nl = L(
  ({ value: e, onChange: t, labels: r = el }, l) => /* @__PURE__ */ n(
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
            borderRadius: M.Large,
            borderColor: z.Default,
            borderColorHover: z.Focus,
            borderColorPressed: z.Focus,
            backgroundColor: x.Transparent,
            hover: x.BrandBold,
            pressed: x.BrandBold,
            color: p.Default,
            colorHover: p.OnBrand,
            colorPressed: p.OnBrand,
            size: w.Small,
            weight: N.Medium
          },
          d
        );
      })
    }
  )
);
nl.displayName = "LikertScale";
function Dl(e) {
  const [t, r] = P(
    () => typeof window < "u" ? window.matchMedia(e).matches : !1
  );
  return Y(() => {
    const l = window.matchMedia(e), o = (a) => r(a.matches);
    return l.addEventListener("change", o), r(l.matches), () => l.removeEventListener("change", o);
  }, [e]), t;
}
function Re() {
  return typeof window > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function tl(e) {
  typeof document > "u" || (e === "system" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e));
}
function El() {
  const [e, t] = P(() => typeof localStorage > "u" ? "system" : localStorage.getItem("bbui-theme") ?? "system"), [r, l] = P(
    () => e === "system" ? Re() : e
  ), o = Q((a) => {
    t(a), typeof localStorage < "u" && (a === "system" ? localStorage.removeItem("bbui-theme") : localStorage.setItem("bbui-theme", a));
  }, []);
  return Y(() => {
    tl(e), l(e === "system" ? Re() : e);
  }, [e]), Y(() => {
    if (e !== "system") return;
    const a = window.matchMedia("(prefers-color-scheme: dark)"), d = () => l(Re());
    return a.addEventListener("change", d), () => a.removeEventListener("change", d);
  }, [e]), { theme: e, resolvedTheme: r, setTheme: o };
}
async function* rl(e, t) {
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
        const c = o.slice(0, s);
        o = o.slice(s + 2);
        const b = [];
        for (const g of c.split(`
`))
          g.startsWith("data:") && b.push(g.slice(5).trimStart());
        if (b.length === 0) continue;
        const u = b.join(`
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
async function* ll(e, t = {}) {
  const r = await fetch(e, t);
  if (!r.ok) {
    const l = await r.text().catch(() => "");
    throw new Error(
      `SSE request failed ${r.status} ${r.statusText}: ${l}`
    );
  }
  yield* rl(r, t.signal);
}
function zl(e = {}) {
  const { onEvent: t, onComplete: r, onError: l, retain: o = !0 } = e, [a, d] = P([]), [s, c] = P(null), [b, u] = P(!1), [g, h] = P(null), m = oe(null), y = oe(!0), v = oe(t), C = oe(r), B = oe(l);
  Y(() => {
    v.current = t, C.current = r, B.current = l;
  }), Y(() => (y.current = !0, () => {
    var R;
    y.current = !1, (R = m.current) == null || R.abort();
  }), []);
  const j = Q(() => {
    var R;
    (R = m.current) == null || R.abort(), m.current = null;
  }, []), X = Q(() => {
    d([]), c(null), h(null);
  }, []), A = Q(
    async (R, W = {}) => {
      var k, I, T, G;
      (k = m.current) == null || k.abort();
      const H = new AbortController();
      m.current = H, y.current && (d([]), c(null), h(null), u(!0));
      try {
        for await (const F of ll(R, {
          ...W,
          signal: H.signal
        })) {
          if (!y.current) return;
          o && d((K) => [...K, F]), c(F), (I = v.current) == null || I.call(v, F);
        }
        y.current && ((T = C.current) == null || T.call(C));
      } catch (F) {
        if (H.signal.aborted) return;
        const K = F instanceof Error ? F : new Error(String(F));
        y.current && (h(K), (G = B.current) == null || G.call(B, K));
      } finally {
        y.current && m.current === H && (u(!1), m.current = null);
      }
    },
    [o]
  );
  return { events: a, lastEvent: s, isStreaming: b, error: g, start: A, abort: j, reset: X };
}
export {
  vl as AccentColor,
  ul as AlignItems,
  bl as AlignSelf,
  ge as Anchor,
  ur as Aside,
  Dt as Avatar,
  x as BackgroundColor,
  Vn as Badge,
  Jt as Banner,
  pe as BloomColor,
  ie as BloomLevel,
  z as BorderColor,
  M as BorderRadius,
  yl as BorderWidth,
  S as Box,
  En as Breakpoint,
  ae as Button,
  Sr as Calendar,
  Yt as Card,
  $t as Checkbox,
  mt as Chip,
  Sl as ContainerWidth,
  fl as Cursor,
  Xl as DirectionColor,
  cl as Display,
  Wt as Divider,
  lr as Drawer,
  Mr as DropdownCheckboxMenu,
  ir as DropdownMenu,
  he as Elevation,
  wr as EmptyState,
  Cl as EvaluationResultColor,
  hl as FlexDirection,
  gl as FlexWrap,
  Qn as FontFamily,
  w as FontSize,
  sl as FontStyle,
  N as FontWeight,
  Fr as GlassCard,
  ve as Gradient,
  Pn as Grid,
  Qt as Header,
  _t as HeroSection,
  Ml as Hide,
  pt as Icon,
  re as IconButton,
  wl as IconSize,
  De as Image,
  O as Inline,
  Lr as InlineEdit,
  dt as Inset,
  pl as JustifyContent,
  hr as Layout,
  jn as LetterSpacing,
  nl as LikertScale,
  Ct as LinkButton,
  vt as LiquidGlass,
  pr as MOBILE_NAV_HEIGHT,
  Yn as Menu,
  br as MobileNav,
  tr as Modal,
  er as ModalSize,
  Gt as Navbar,
  cr as Panel,
  Bl as PersonaAccent,
  ml as Position,
  Rr as ProgressTracker,
  jr as RevealSteps,
  _n as Select,
  Dr as SelectField,
  Il as Show,
  sr as Sidebar,
  i as Spacing,
  Gn as Spinner,
  _ as Stack,
  Ht as Stepper,
  Cr as Table,
  Zt as Tabs,
  D as Text,
  Tt as TextArea,
  p as TextColor,
  Kt as TextField,
  $e as TextInput,
  dl as TextTransform,
  Tr as Toast,
  kt as Toggle,
  xl as WhiteSpace,
  Tn as WindowHeightClass,
  Se as WindowSizeClass,
  be as ZIndex,
  et as bloomColorFor,
  nt as bloomLevelForScore,
  rl as parseSSEStream,
  ke as safeAreaBlock,
  Ce as safeAreaInline,
  Ne as safeAreaInset,
  kl as scoreColor,
  ll as streamSSE,
  Me as useBreakpoint,
  Dl as useMediaQuery,
  $ as useResponsiveValue,
  zl as useSSEStream,
  El as useTheme,
  Ll as useWindowSizeClass
};
