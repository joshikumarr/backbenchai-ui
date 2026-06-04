import te, { useState as P, useEffect as K, forwardRef as L, Fragment as Pn, useMemo as ve, useCallback as Q, useId as ke, useRef as oe } from "react";
import { jsx as n, Fragment as ne, jsxs as f } from "react/jsx-runtime";
import { createPortal as Xe } from "react-dom";
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
}, c = {
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
}, Vn = {
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
}, R = {
  Regular: 400,
  Medium: 500,
  Semibold: 600,
  Bold: 700,
  ExtraBold: 800,
  /** 900 — large display numbers */
  Black: 900
}, Tn = {
  Tighter: "-0.05em",
  Tight: "-0.025em",
  Normal: "0",
  Wide: "0.05em",
  Wider: "0.075em",
  /** 0.1em — uppercase labels */
  Widest: "0.1em"
}, qr = {
  Normal: "normal",
  Italic: "italic",
  Oblique: "oblique"
}, Jr = {
  None: "none",
  Uppercase: "uppercase",
  Lowercase: "lowercase",
  Capitalize: "capitalize"
}, Zr = {
  Block: "block",
  InlineBlock: "inline-block",
  Inline: "inline",
  Flex: "flex",
  InlineFlex: "inline-flex",
  Grid: "grid",
  InlineGrid: "inline-grid",
  None: "none"
}, Qr = {
  Start: "flex-start",
  Center: "center",
  End: "flex-end",
  Stretch: "stretch",
  Baseline: "baseline"
}, el = {
  Start: "flex-start",
  Center: "center",
  End: "flex-end",
  SpaceBetween: "space-between",
  SpaceAround: "space-around",
  SpaceEvenly: "space-evenly"
}, nl = {
  Auto: "auto",
  Start: "flex-start",
  Center: "center",
  End: "flex-end",
  Stretch: "stretch",
  Baseline: "baseline"
}, tl = {
  Row: "row",
  Column: "column",
  RowReverse: "row-reverse",
  ColumnReverse: "column-reverse"
}, rl = {
  NoWrap: "nowrap",
  Wrap: "wrap",
  WrapReverse: "wrap-reverse"
}, ll = {
  Static: "static",
  Relative: "relative",
  Absolute: "absolute",
  Fixed: "fixed",
  Sticky: "sticky"
}, il = {
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
}, ol = {
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
}, T = {
  Default: "var(--bbui-border-default)",
  Input: "var(--bbui-border-input)",
  Warning: "var(--bbui-border-warning)",
  Error: "var(--bbui-border-error)",
  Info: "var(--bbui-border-info)",
  Success: "var(--bbui-border-success)",
  Focus: "var(--bbui-color-primary)",
  Outline: "var(--bbui-border-outline)"
}, al = {
  Thin: "1px",
  Medium: "2px",
  Thick: "4px",
  XThick: "8px"
}, sl = {
  Occupied: "var(--bbui-accent-occupied)",
  Vacant: "var(--bbui-accent-vacant)",
  Maintenance: "var(--bbui-accent-maintenance)",
  Reserved: "var(--bbui-accent-reserved)",
  Cleaning: "var(--bbui-accent-cleaning)",
  Primary: "var(--bbui-color-primary)",
  Error: "var(--bbui-color-error)"
}, be = {
  None: "none",
  Raised: "var(--bbui-shadow-raised)",
  Ambient: "var(--bbui-shadow-ambient)",
  Dropdown: "var(--bbui-shadow-dropdown)",
  Overlay: "var(--bbui-shadow-overlay)",
  CardHover: "var(--bbui-shadow-card-hover)"
}, xe = {
  Brand: "var(--bbui-gradient-brand)"
}, dl = {
  Small: "640px",
  Medium: "768px",
  Large: "1024px",
  XLarge: "1280px",
  XXLarge: "1600px"
}, pe = {
  Dropdown: 100,
  Sticky: 200,
  Modal: 300,
  Banner: 400,
  FAB: 50
}, cl = {
  XSmall: "14px",
  Small: "16px",
  Medium: "20px",
  Large: "24px",
  XLarge: "32px",
  XXLarge: "40px"
}, ue = {
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
function Gn(e) {
  switch (e) {
    case ie.Masters:
      return ue.Masters;
    case ie.Analyzes:
      return ue.Analyzes;
    case ie.Applies:
      return ue.Applies;
    case ie.Understands:
      return ue.Understands;
    case ie.Aware:
      return ue.Aware;
    default:
      return ue.NotAssessed;
  }
}
function _n(e) {
  return e >= 90 ? ie.Masters : e >= 80 ? ie.Analyzes : e >= 60 ? ie.Applies : e >= 40 ? ie.Understands : e >= 20 ? ie.Aware : ie.NotAssessed;
}
function ul(e) {
  return Gn(_n(e));
}
const pl = {
  correct: ue.Masters,
  partial: ue.Applies,
  incorrect: "var(--bbui-color-error)",
  skipped: "var(--bbui-color-subtlest)"
}, bl = {
  up: ue.Masters,
  down: "var(--bbui-color-error)",
  unchanged: "var(--bbui-color-subtlest)"
}, hl = {
  Nova: "var(--bbui-persona-nova)",
  Maya: "var(--bbui-persona-maya)",
  Jordan: "var(--bbui-persona-jordan)",
  Custom: "var(--bbui-persona-custom)"
}, wn = {
  /** 0–639px */
  Mobile: 0,
  /** 640–1023px */
  Tablet: 640,
  /** 1024px+ */
  Desktop: 1024
};
function kn(e) {
  return e >= wn.Desktop ? "desktop" : e >= wn.Tablet ? "tablet" : "mobile";
}
function Ce() {
  const [e, t] = P(
    () => typeof window < "u" ? kn(window.innerWidth) : "desktop"
  );
  return K(() => {
    const r = () => t(kn(window.innerWidth));
    return window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []), e;
}
function Yn(e, t) {
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
  const t = Ce();
  return Yn(e, t);
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
    margin: u,
    marginBlock: b,
    marginBlockStart: p,
    marginBlockEnd: g,
    marginInline: h,
    marginInlineStart: m,
    marginInlineEnd: x,
    marginTop: v,
    marginRight: C,
    marginBottom: B,
    marginLeft: H,
    backgroundColor: X,
    borderRadius: A,
    borderColor: z,
    borderSide: F,
    borderWidth: O = "1px",
    overflow: k,
    elevation: I,
    width: N,
    maxWidth: G,
    height: j,
    minHeight: Y,
    maxHeight: U,
    minWidth: E,
    display: V,
    alignItems: Z,
    justifyContent: q,
    alignSelf: se,
    flexDirection: de,
    flexWrap: ee,
    flex: J,
    flexGrow: ce,
    flexShrink: le,
    gap: ge,
    position: Te,
    inset: ze,
    top: Re,
    right: Ae,
    bottom: Ne,
    left: $e,
    zIndex: We,
    color: Fe,
    opacity: Oe,
    cursor: He,
    whiteSpace: je,
    lineHeight: Pe,
    pointerEvents: Ve,
    background: Ge,
    border: _e,
    boxShadow: Ye,
    transition: Ke,
    transform: Ue,
    aspectRatio: qe,
    filter: Je,
    backdropFilter: Ze,
    style: Wn,
    children: Fn,
    ...On
  }, Hn) => {
    const Qe = ye($(t)), en = ye($(r)), nn = $(l), tn = $(o), rn = ye($(a)), ln = $(d), on = $(s), an = ye($(u)), sn = ye($(b)), dn = $(p), cn = $(g), un = ye($(h)), pn = $(m), bn = $(x), hn = $(v), gn = $(C), mn = $(B), fn = $(H), yn = $(V), xn = $(Z), vn = $(q), Sn = $(de), me = z ? `${O} solid ${z}` : void 0, fe = {};
    if (me && F)
      switch (F) {
        case "top":
          fe.borderTop = me;
          break;
        case "bottom":
          fe.borderBottom = me;
          break;
        case "left":
          fe.borderLeft = me;
          break;
        case "right":
          fe.borderRight = me;
          break;
        case "all":
          fe.border = me;
          break;
      }
    const jn = {
      ...Qe && { padding: Qe },
      ...en && { paddingBlock: en },
      ...nn && { paddingBlockStart: nn },
      ...tn && { paddingBlockEnd: tn },
      ...rn && { paddingInline: rn },
      ...ln && { paddingInlineStart: ln },
      ...on && { paddingInlineEnd: on },
      ...an && { margin: an },
      ...sn && { marginBlock: sn },
      ...dn && { marginBlockStart: dn },
      ...cn && { marginBlockEnd: cn },
      ...un && { marginInline: un },
      ...pn && { marginInlineStart: pn },
      ...bn && { marginInlineEnd: bn },
      ...hn && { marginTop: hn },
      ...gn && { marginRight: gn },
      ...mn && { marginBottom: mn },
      ...fn && { marginLeft: fn },
      ...X && (X === y.Gradient ? { background: X } : { backgroundColor: X }),
      ...A && { borderRadius: A },
      ...fe,
      ...k && { overflow: k },
      ...I && { boxShadow: I },
      ...N !== void 0 && { width: N },
      ...G && { maxWidth: G, marginInline: "auto" },
      ...j !== void 0 && { height: j },
      ...Y !== void 0 && { minHeight: Y },
      ...U !== void 0 && { maxHeight: U },
      ...E !== void 0 && { minWidth: E },
      ...yn && { display: yn },
      ...xn && { alignItems: xn },
      ...vn && { justifyContent: vn },
      ...se && { alignSelf: se },
      ...Sn && { flexDirection: Sn },
      ...ee && { flexWrap: ee },
      ...J !== void 0 && { flex: J },
      ...ce !== void 0 && { flexGrow: ce },
      ...le !== void 0 && { flexShrink: le },
      ...ge && { gap: ge },
      ...Te && { position: Te },
      ...ze !== void 0 && { inset: ze },
      ...Re !== void 0 && { top: Re },
      ...Ae !== void 0 && { right: Ae },
      ...Ne !== void 0 && { bottom: Ne },
      ...$e !== void 0 && { left: $e },
      ...We !== void 0 && { zIndex: We },
      ...Fe && { color: Fe },
      ...Oe !== void 0 && { opacity: Oe },
      ...He && { cursor: He },
      ...je && { whiteSpace: je },
      ...Pe !== void 0 && { lineHeight: Pe },
      ...Ve && { pointerEvents: Ve },
      ...Ge && { background: Ge },
      ..._e && { border: _e },
      ...Ye && { boxShadow: Ye },
      ...Ke && { transition: Ke },
      ...Ue && { transform: Ue },
      ...qe !== void 0 && { aspectRatio: qe },
      ...Je && { filter: Je },
      ...Ze && { backdropFilter: Ze },
      ...Wn
    };
    return te.createElement(
      e,
      { ...On, ref: Hn, style: jn },
      Fn
    );
  }
);
S.displayName = "Box";
const Se = ["mobile", "tablet", "desktop"];
function Kn(e, t) {
  return Se.indexOf(e) >= Se.indexOf(t);
}
function Un(e, t) {
  return Se.indexOf(e) < Se.indexOf(t);
}
function gl({ on: e, above: t, below: r, children: l }) {
  const o = Ce();
  return e != null ? (Array.isArray(e) ? e : [e]).includes(o) ? /* @__PURE__ */ n(ne, { children: l }) : null : t != null ? Kn(o, t) ? /* @__PURE__ */ n(ne, { children: l }) : null : r != null ? Un(o, r) ? /* @__PURE__ */ n(ne, { children: l }) : null : /* @__PURE__ */ n(ne, { children: l });
}
const we = ["mobile", "tablet", "desktop"];
function qn(e, t) {
  return we.indexOf(e) >= we.indexOf(t);
}
function Jn(e, t) {
  return we.indexOf(e) < we.indexOf(t);
}
function ml({ on: e, above: t, below: r, children: l }) {
  const o = Ce();
  return e != null ? (Array.isArray(e) ? e : [e]).includes(o) ? null : /* @__PURE__ */ n(ne, { children: l }) : t != null ? qn(o, t) ? null : /* @__PURE__ */ n(ne, { children: l }) : r != null ? Jn(o, r) ? null : /* @__PURE__ */ n(ne, { children: l }) : /* @__PURE__ */ n(ne, { children: l });
}
const Xn = {
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
    style: u,
    children: b,
    ...p
  }, g) => {
    const m = {
      display: "flex",
      flexDirection: "column",
      gap: $(t ?? "0"),
      ...r && { alignItems: Xn[r] },
      ...l && !o && { justifyContent: Xn[l] },
      ...o && { justifyContent: o },
      ...a === "fill" && { flex: "1 1 auto" },
      ...d && { marginBlockStart: d },
      ...s && { marginBlockEnd: s },
      ...u
    };
    return te.createElement(
      e,
      { ...p, ref: g, style: m },
      b
    );
  }
);
_.displayName = "Stack";
const Cn = {
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
    grow: u = "hug",
    marginBlockStart: b,
    marginBlockEnd: p,
    borderRadius: g,
    overflow: h,
    elevation: m,
    minWidth: x,
    style: v,
    children: C,
    ...B
  }, H) => {
    const X = $(t ?? "0"), [A, z] = Array.isArray(X) ? [X[0], X[1]] : [X, X], F = {
      display: "flex",
      flexDirection: "row",
      columnGap: z,
      rowGap: r ?? A,
      ...l && { alignItems: Cn[l] },
      ...o && !a && { justifyContent: Cn[o] },
      ...a && { justifyContent: a },
      ...d && { flexWrap: "wrap" },
      ...u === "fill" && { flex: "1 1 auto" },
      ...b && { marginBlockStart: b },
      ...p && { marginBlockEnd: p },
      ...g && { borderRadius: g },
      ...h && { overflow: h },
      ...m && { boxShadow: m },
      ...x !== void 0 && { minWidth: x },
      ...v
    };
    let O = C;
    if (s) {
      const k = te.Children.toArray(C).filter(Boolean);
      O = k.map((I, N) => /* @__PURE__ */ f(Pn, { children: [
        I,
        N < k.length - 1 && /* @__PURE__ */ n("span", { "aria-hidden": "true", children: s })
      ] }, N));
    }
    return te.createElement(
      e,
      { ...B, ref: H, style: F },
      O
    );
  }
);
W.displayName = "Inline";
const Zn = L(
  ({ as: e = "div", space: t, block: r, inline: l, style: o, children: a, ...d }, s) => {
    const u = $(t), b = $(r), p = $(l), g = b ?? u, h = p ?? u, m = {
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
Zn.displayName = "Inset";
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
    lineHeight: u,
    opacity: b,
    fontStyle: p,
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
      ...l && (l === c.Gradient ? {
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
      ...u !== void 0 && { lineHeight: u },
      ...b !== void 0 && { opacity: b },
      ...p && { fontStyle: p },
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
function Qn(e) {
  if (e !== void 0)
    return typeof e == "number" ? `repeat(${e}, 1fr)` : e.map((t) => `${t}fr`).join(" ");
}
const zn = L(
  ({
    as: e = "div",
    columns: t,
    gap: r,
    rowGap: l,
    marginBlockStart: o,
    marginBlockEnd: a,
    borderRadius: d,
    overflow: s,
    elevation: u,
    style: b,
    children: p,
    ...g
  }, h) => {
    const m = $(t ?? 1), x = $(r ?? "0"), v = {
      display: "grid",
      gridTemplateColumns: Qn(m),
      gap: x,
      ...l && { rowGap: l },
      ...o && { marginBlockStart: o },
      ...a && { marginBlockEnd: a },
      ...d && { borderRadius: d },
      ...s && { overflow: s },
      ...u && { boxShadow: u },
      ...b
    };
    return te.createElement(
      e,
      { ...g, ref: h, style: v },
      p
    );
  }
);
zn.displayName = "Grid";
const he = L(
  ({
    color: e,
    weight: t,
    size: r,
    backgroundColor: l,
    padding: o,
    paddingBlock: a,
    paddingBlockStart: d,
    paddingInline: s,
    borderRadius: u,
    textTransform: b,
    display: p,
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
      ...u && { borderRadius: u },
      ...b && { textTransform: b },
      ...p && { display: p },
      ...g && { alignSelf: g },
      ...h
    };
    return /* @__PURE__ */ n("a", { ref: v, style: C, ...x, children: m });
  }
);
he.displayName = "Anchor";
const Be = L(
  ({ borderRadius: e, objectFit: t, width: r, height: l, fill: o, style: a, ...d }, s) => {
    const u = {
      display: "block",
      ...o ? { width: "100%", height: "100%" } : {
        ...r ? { width: r, flexShrink: 0 } : { width: "100%" },
        ...l && { height: l }
      },
      ...e && { borderRadius: e },
      ...t && { objectFit: t },
      ...a
    };
    return /* @__PURE__ */ n("img", { ref: s, style: u, ...d });
  }
);
Be.displayName = "Image";
const Le = (e) => {
  if (e !== void 0)
    return Array.isArray(e) ? e.join(" ") : e;
}, et = {
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
    borderColorHover: u,
    borderColorPressed: b,
    borderWidth: p = "1px",
    borderSide: g = "all",
    size: h,
    weight: m,
    letterSpacing: x,
    textTransform: v,
    fontFamily: C,
    gap: B,
    padding: H,
    paddingBlock: X,
    paddingInline: A,
    borderRadius: z,
    width: F,
    align: O = "center",
    label: k,
    iconStart: I,
    iconEnd: N,
    className: G,
    style: j,
    children: Y,
    ...U
  }, E) => {
    const V = {};
    e && (V["--bbui-btn-bg"] = e), t && (V["--bbui-btn-bg-hover"] = t), r && (V["--bbui-btn-bg-pressed"] = r), o && (V["--bbui-btn-color"] = o), a && (V["--bbui-btn-color-hover"] = a), d && (V["--bbui-btn-color-pressed"] = d), s && (V["--bbui-btn-border"] = s), u && (V["--bbui-btn-border-hover"] = u), b && (V["--bbui-btn-border-pressed"] = b);
    const Z = s ? `${p} solid var(--bbui-btn-border)` : void 0, q = {};
    if (Z)
      switch (g) {
        case "top":
          q.borderTop = Z;
          break;
        case "bottom":
          q.borderBottom = Z;
          break;
        case "left":
          q.borderLeft = Z;
          break;
        case "right":
          q.borderRight = Z;
          break;
        case "all":
          q.border = Z;
          break;
      }
    else
      q.border = "none";
    const se = Le(H), de = Le(X), ee = Le(A), J = {
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: et[O],
      ...q,
      ...F !== void 0 && { width: F },
      ...l && { background: l },
      ...h && { fontSize: h },
      ...m && { fontWeight: m },
      ...x && { letterSpacing: x },
      ...v && { textTransform: v },
      ...C && { fontFamily: C },
      ...B && { gap: B },
      ...se && { padding: se },
      ...de && { paddingBlock: de },
      ...ee && { paddingInline: ee },
      ...z && { borderRadius: z },
      ...V,
      ...j
    }, ce = G ? `bbui-button ${G}` : "bbui-button", le = k ?? Y;
    return /* @__PURE__ */ n("button", { ref: E, className: ce, style: J, ...U, children: I || N ? /* @__PURE__ */ f(ne, { children: [
      I,
      le,
      N
    ] }) : le });
  }
);
ae.displayName = "Button";
const Ee = L(
  ({
    backgroundColor: e,
    borderColor: t,
    borderRadius: r,
    padding: l,
    paddingBlock: o,
    paddingInline: a,
    style: d,
    ...s
  }, u) => {
    const b = {
      ...e && { backgroundColor: e },
      ...t && { border: `1px solid ${t}` },
      ...r && { borderRadius: r },
      ...l && { padding: l },
      ...o && { paddingBlock: o },
      ...a && { paddingInline: a },
      ...d
    };
    return /* @__PURE__ */ n("input", { ref: u, style: b, ...s });
  }
);
Ee.displayName = "TextInput";
const nt = L(
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
nt.displayName = "Icon";
const tt = {
  default: { backgroundColor: y.NeutralBold, color: c.Default },
  success: { backgroundColor: y.SuccessBold, color: c.OnBrand },
  warning: { backgroundColor: y.Warning, color: c.Warning },
  error: { backgroundColor: y.Error, color: c.Error },
  info: { backgroundColor: y.Info, color: c.Info },
  brand: { backgroundColor: y.Brand, color: c.Inverse },
  primaryTint: { backgroundColor: y.PrimaryTint, color: c.Brand },
  errorTint: { backgroundColor: y.ErrorTint, color: c.Error },
  warningTint: { backgroundColor: y.WarningTint, color: "#ea580c" },
  infoTint: { backgroundColor: y.InfoTint, color: "#2563eb" },
  accentTint: { backgroundColor: y.AccentTint, color: "#7c3aed" }
}, Rn = L(
  ({ variant: e = "default", uppercase: t = !1, style: r, children: l, ...o }, a) => {
    const d = tt[e], s = {
      display: "inline-flex",
      alignItems: "center",
      lineHeight: 1,
      paddingBlock: i.XXSmall,
      paddingInline: t ? i.MediumLarge : i.Medium,
      borderRadius: M.Full,
      fontWeight: t ? R.Black : R.Medium,
      fontSize: t ? w.Micro : w.XXSmall,
      letterSpacing: t ? Tn.Wider : void 0,
      textTransform: t ? "uppercase" : void 0,
      ...d,
      ...r
    };
    return /* @__PURE__ */ n("span", { ref: a, style: s, ...o, children: l });
  }
);
Rn.displayName = "Badge";
const rt = {
  compact: { block: i.XXSmall, inline: i.Small },
  comfortable: { block: i.XSmall, inline: i.Medium }
}, lt = {
  default: { backgroundColor: y.NeutralBold, color: c.Default },
  success: { backgroundColor: y.Success, color: c.Inverse },
  warning: { backgroundColor: y.Warning, color: c.Warning },
  error: { backgroundColor: y.Error, color: c.Error },
  info: { backgroundColor: y.Info, color: c.Info },
  brand: { backgroundColor: y.Brand, color: c.Inverse },
  primaryTint: { backgroundColor: y.PrimaryTint, color: c.Brand },
  errorTint: { backgroundColor: y.ErrorTint, color: c.Error },
  warningTint: { backgroundColor: y.WarningTint, color: "#ea580c" },
  infoTint: { backgroundColor: y.InfoTint, color: "#2563eb" },
  accentTint: { backgroundColor: y.AccentTint, color: "#7c3aed" }
}, it = L(
  ({
    selected: e,
    appearance: t = "filled",
    density: r = "compact",
    variant: l,
    fontWeight: o = R.Medium,
    fontSize: a,
    icon: d,
    showCheckWhenSelected: s = !1,
    onClick: u,
    disabled: b,
    style: p,
    children: g,
    ...h
  }, m) => {
    const x = u !== void 0 || e !== void 0, v = e === !0, C = a ?? (l ? w.XXSmall : w.XSmall), B = l ? { block: i.XXSmall, inline: i.XSmall } : rt[r];
    let H, X;
    if (l) {
      const O = lt[l];
      H = O.backgroundColor, X = O.color;
    } else
      H = v ? y.Brand : t === "outlined" ? y.Transparent : y.Subtle, X = v ? c.OnBrand : c.Default;
    const A = !l && t === "outlined" && !v ? `1px solid ${T.Outline}` : "1px solid transparent", z = {
      display: "inline-flex",
      alignItems: "center",
      gap: i.XSmall,
      paddingBlock: B.block,
      paddingInline: B.inline,
      borderRadius: M.Full,
      backgroundColor: H,
      color: X,
      border: A,
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
      ...p
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
        onClick: u,
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
it.displayName = "Chip";
const Bn = {
  sm: "4px",
  md: "12px",
  lg: "16px",
  xl: "24px"
}, ot = {
  none: "inset 0 0 0 0 rgba(255, 255, 255, 0)",
  xs: "inset 1px 1px 1px 0 rgba(255, 255, 255, 0.3), inset -1px -1px 1px 0 rgba(255, 255, 255, 0.3)",
  sm: "inset 2px 2px 2px 0 rgba(255, 255, 255, 0.35), inset -2px -2px 2px 0 rgba(255, 255, 255, 0.35)",
  md: "inset 3px 3px 3px 0 rgba(255, 255, 255, 0.45), inset -3px -3px 3px 0 rgba(255, 255, 255, 0.45)",
  lg: "inset 4px 4px 4px 0 rgba(255, 255, 255, 0.5), inset -4px -4px 4px 0 rgba(255, 255, 255, 0.5)",
  xl: "inset 6px 6px 6px 0 rgba(255, 255, 255, 0.55), inset -6px -6px 6px 0 rgba(255, 255, 255, 0.55)"
}, at = {
  none: "0 4px 4px rgba(0, 0, 0, 0.05), 0 0 12px rgba(0, 0, 0, 0.05)",
  xs: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 16px rgba(255, 255, 255, 0.05)",
  sm: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 24px rgba(255, 255, 255, 0.1)",
  md: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 32px rgba(255, 255, 255, 0.15)",
  lg: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 40px rgba(255, 255, 255, 0.2)",
  xl: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 48px rgba(255, 255, 255, 0.25)"
};
let st = 0;
const dt = L(
  ({
    children: e,
    borderRadius: t = M.XLarge,
    blurIntensity: r = "xl",
    glowIntensity: l = "sm",
    shadowIntensity: o = "md",
    borderGradient: a,
    borderWidth: d = 1,
    width: s,
    height: u,
    style: b,
    ...p
  }, g) => {
    const h = ve(() => `bbui-liquid-glass-${++st}`, []), m = {
      position: "relative",
      borderRadius: t,
      ...s && { width: s },
      ...u && { height: u },
      ...b
    }, x = {
      position: "absolute",
      inset: 0,
      borderRadius: t,
      pointerEvents: "none"
    };
    return /* @__PURE__ */ f("div", { ref: g, style: m, ...p, children: [
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
            backdropFilter: `blur(${Bn[r]})`,
            WebkitBackdropFilter: `blur(${Bn[r]})`,
            filter: `url(#${h})`
          }
        }
      ),
      /* @__PURE__ */ n("div", { style: { ...x, zIndex: 1, boxShadow: at[l] } }),
      /* @__PURE__ */ n("div", { style: { ...x, zIndex: 2, boxShadow: ot[o] } }),
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
dt.displayName = "LiquidGlass";
const ct = "40px", ut = "24px", Me = "20px", Ln = i.XXSmall, pt = L(
  ({ checked: e, defaultChecked: t = !1, onChange: r, label: l, style: o, ...a }, d) => {
    const [s, u] = P(t), b = e !== void 0, p = b ? e : s, g = Q(() => {
      const x = !p;
      b || u(x), r == null || r(x);
    }, [p, b, r]), h = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      width: ct,
      height: ut,
      borderRadius: M.Full,
      backgroundColor: p ? y.Brand : y.Neutral,
      border: "none",
      cursor: "pointer",
      padding: 0,
      transition: "background-color 150ms ease",
      ...o
    }, m = {
      position: "absolute",
      width: Me,
      height: Me,
      borderRadius: M.Full,
      backgroundColor: y.Default,
      transition: "left 150ms ease",
      left: p ? `calc(100% - ${Me} - ${Ln})` : Ln,
      boxShadow: "0 1px 3px rgba(0,0,0,.2)"
    };
    return /* @__PURE__ */ n(
      "button",
      {
        ref: d,
        type: "button",
        role: "switch",
        "aria-checked": p,
        "aria-label": l,
        onClick: g,
        style: h,
        ...a,
        children: /* @__PURE__ */ n("span", { style: m })
      }
    );
  }
);
pt.displayName = "Toggle";
const bt = L(
  ({
    backgroundColor: e,
    color: t,
    padding: r,
    paddingBlock: l,
    paddingInline: o,
    borderRadius: a,
    style: d,
    children: s,
    ...u
  }, b) => {
    const p = {
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
    return /* @__PURE__ */ n("a", { ref: b, style: p, ...u, children: s });
  }
);
bt.displayName = "LinkButton";
const re = L(
  ({ label: e, size: t, color: r, backgroundColor: l, padding: o, style: a, children: d, ...s }, u) => {
    const b = {
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
        ref: u,
        type: "button",
        "aria-label": e,
        style: b,
        ...s,
        children: d
      }
    );
  }
);
re.displayName = "IconButton";
const ht = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64
}, gt = {
  xsmall: "10px",
  small: "12px",
  medium: "14px",
  large: "16px",
  xlarge: "24px"
}, mt = {
  xsmall: 6,
  small: 8,
  medium: 10,
  large: 12,
  xlarge: 16
}, ft = {
  online: "#22c55e",
  offline: "#bccbb9",
  busy: "#ba1a1a",
  focus: "#3b82f6"
};
function yt(e) {
  var r;
  const t = e.trim().split(/\s+/);
  return t.length >= 2 ? (t[0][0] + t[t.length - 1][0]).toUpperCase() : (((r = t[0]) == null ? void 0 : r[0]) ?? "").toUpperCase();
}
const xt = L(
  ({
    src: e,
    name: t,
    size: r = "medium",
    appearance: l = "circle",
    status: o,
    fallbackBackground: a = y.NeutralBold,
    fallbackColor: d = c.Subtle
  }, s) => {
    const [u, b] = P(!1), p = ht[r], g = e && !u, h = t ? yt(t) : "", m = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: p,
      height: p,
      borderRadius: l === "circle" ? M.Full : M.XLarge,
      overflow: "hidden",
      flexShrink: 0,
      ...g ? {} : { backgroundColor: a }
    }, x = mt[r], v = o ? {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: x,
      height: x,
      borderRadius: M.Full,
      backgroundColor: ft[o],
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
            fontSize: gt[r],
            fontWeight: R.Semibold,
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
xt.displayName = "Avatar";
const vt = {
  xsmall: 16,
  small: 24,
  medium: 32,
  large: 48,
  xlarge: 64
}, St = {
  xsmall: 2,
  small: 2,
  medium: 3,
  large: 3,
  xlarge: 4
}, An = L(
  ({ size: e = "medium", label: t = "Loading", color: r = c.Brand }, l) => {
    const o = ke().replace(/:/g, ""), a = vt[e], d = St[e], s = (a - d) / 2, u = 2 * Math.PI * s;
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
                    strokeDasharray: u,
                    strokeDashoffset: u * 0.7,
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
An.displayName = "Spinner";
const wt = L(
  ({
    backgroundColor: e,
    borderColor: t,
    borderRadius: r,
    padding: l,
    paddingBlock: o,
    paddingInline: a,
    style: d,
    ...s
  }, u) => {
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
    return /* @__PURE__ */ n("textarea", { ref: u, style: b, ...s });
  }
);
wt.displayName = "TextArea";
function kt(e) {
  return "options" in e;
}
const Nn = L(
  ({
    options: e,
    placeholder: t,
    backgroundColor: r,
    borderColor: l,
    borderRadius: o,
    padding: a,
    paddingBlock: d,
    paddingInline: s,
    fontSize: u,
    color: b,
    style: p,
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
      ...u && { fontSize: u },
      ...b && { color: b },
      ...p
    };
    return /* @__PURE__ */ f("select", { ref: h, style: m, ...g, children: [
      t && /* @__PURE__ */ n("option", { value: "", disabled: !0, hidden: !0, children: t }),
      e.map(
        (x) => kt(x) ? /* @__PURE__ */ n("optgroup", { label: x.label, children: x.options.map((v) => /* @__PURE__ */ n("option", { value: v.value, disabled: v.disabled, children: v.label }, v.value)) }, x.label) : /* @__PURE__ */ n("option", { value: x.value, disabled: x.disabled, children: x.label }, x.value)
      )
    ] });
  }
);
Nn.displayName = "Select";
const Xt = {
  small: { box: "16px", font: w.XXSmall, gap: i.XSmall },
  medium: { box: "20px", font: w.XSmall, gap: i.Medium },
  large: { box: "24px", font: w.Small, gap: i.Medium }
}, Ct = ({ size: e }) => /* @__PURE__ */ n(
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
), Bt = L(
  ({ label: e, size: t = "medium", checked: r, disabled: l, style: o, id: a, ...d }, s) => {
    const u = ke(), b = a ?? u, p = Xt[t], g = !!r, h = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: p.box,
      height: p.box,
      borderRadius: M.Small,
      flexShrink: 0,
      border: g ? "none" : `2px solid ${T.Outline}`,
      backgroundColor: g ? l ? c.Disabled : y.Brand : y.Transparent,
      color: c.Inverse,
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
          gap: p.gap,
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
          /* @__PURE__ */ n("span", { style: h, "aria-hidden": "true", children: g && /* @__PURE__ */ n(Ct, { size: `calc(${p.box} - 4px)` }) }),
          e && /* @__PURE__ */ n(
            "span",
            {
              style: {
                fontSize: p.font,
                color: l ? c.Disabled : c.Default
              },
              children: e
            }
          )
        ]
      }
    );
  }
);
Bt.displayName = "Checkbox";
const Lt = L(
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
Lt.displayName = "Divider";
const Mt = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z", clipRule: "evenodd" }) }), It = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { d: "M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" }) }), Dt = L(
  ({
    value: e,
    onChange: t,
    min: r = 0,
    max: l = 99,
    step: o = 1,
    disabled: a = !1,
    backgroundColor: d = y.Subtle,
    padding: s = i.XSmall
  }, u) => {
    const b = e - o >= r, p = e + o <= l;
    return /* @__PURE__ */ f(
      "div",
      {
        ref: u,
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
              color: c.Brand,
              padding: i.XSmall,
              children: /* @__PURE__ */ n(Mt, {})
            }
          ),
          /* @__PURE__ */ n(
            D,
            {
              as: "span",
              size: w.Medium,
              weight: R.Bold,
              color: c.Default,
              style: { minWidth: "32px", textAlign: "center" },
              children: e
            }
          ),
          /* @__PURE__ */ n(
            re,
            {
              label: "Increase",
              onClick: () => p && t(e + o),
              disabled: a || !p,
              color: c.Brand,
              padding: i.XSmall,
              children: /* @__PURE__ */ n(It, {})
            }
          )
        ]
      }
    );
  }
);
Dt.displayName = "Stepper";
const Et = () => /* @__PURE__ */ n(
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
), Tt = () => /* @__PURE__ */ n(
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
), zt = () => /* @__PURE__ */ n(
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
), Rt = L(
  ({
    logo: e,
    navigation: t = [],
    cta: r,
    linkColor: l = c.Subtle,
    ctaBackgroundColor: o = y.Dark,
    ctaColor: a = c.Inverse,
    ctaWeight: d = 500,
    ctaBorderRadius: s = M.Full,
    paddingInline: u = i.XXXLarge,
    paddingBlock: b = i.XLarge,
    linkGap: p = i.XXLarge,
    logoGap: g = i.Size3_5,
    mobileMenuBackground: h = y.Default,
    mobileMenuBorderColor: m = T.Default,
    mobileMenuBorderRadius: x = M.Large,
    mobileBreakpoint: v = 768
  }, C) => {
    const [B, H] = P(!1), [X, A] = P(!1);
    K(() => {
      const I = () => A(window.innerWidth < v);
      return I(), window.addEventListener("resize", I), () => window.removeEventListener("resize", I);
    }, [v]);
    const z = Q((I) => {
      I.target.closest("[data-navbar-menu]") || H(!1);
    }, []);
    K(() => (document.addEventListener("click", z), () => document.removeEventListener("click", z)), [z]);
    const F = te.isValidElement(e) ? e : /* @__PURE__ */ n(
      Be,
      {
        src: e.src,
        alt: e.alt ?? "Logo",
        style: {
          width: e.width ?? 120,
          height: e.height ?? "auto"
        }
      }
    ), O = /* @__PURE__ */ n(ne, { children: t.map((I, N) => /* @__PURE__ */ n(
      he,
      {
        href: I.path,
        color: l,
        display: "block",
        style: { textDecoration: "none" },
        children: I.title
      },
      N
    )) }), k = r ? /* @__PURE__ */ n(
      he,
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
          r.icon ?? /* @__PURE__ */ n(zt, {})
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
                  color: c.Subtle
                },
                children: B ? /* @__PURE__ */ n(Tt, {}) : /* @__PURE__ */ n(Et, {})
              }
            )
          ] })
        }
      ),
      B && /* @__PURE__ */ n(
        S,
        {
          backgroundColor: h,
          elevation: be.Raised,
          borderRadius: x,
          borderColor: m,
          borderSide: "all",
          padding: i.Large,
          style: { margin: i.Medium },
          children: /* @__PURE__ */ f("nav", { children: [
            /* @__PURE__ */ n("ul", { style: { listStyle: "none", padding: 0, margin: 0 }, children: t.map((I, N) => /* @__PURE__ */ n("li", { style: { paddingBlock: i.MediumLarge }, children: /* @__PURE__ */ n(
              he,
              {
                href: I.path,
                color: l,
                display: "block",
                style: { textDecoration: "none" },
                children: I.title
              }
            ) }, N)) }),
            k && /* @__PURE__ */ n(S, { marginBlockStart: i.XXLarge, children: k })
          ] })
        }
      )
    ] }) : /* @__PURE__ */ n(S, { as: "header", ref: C, style: { width: "100%" }, children: /* @__PURE__ */ n(
      S,
      {
        as: "nav",
        paddingInline: u,
        paddingBlock: b,
        style: { width: "100%" },
        children: /* @__PURE__ */ f(W, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ n(S, { children: F }),
          /* @__PURE__ */ f(
            W,
            {
              space: p,
              alignBlock: "center",
              grow: "fill",
              style: { marginInlineStart: g },
              children: [
                /* @__PURE__ */ n(
                  W,
                  {
                    space: p,
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
Rt.displayName = "Navbar";
const Mn = () => /* @__PURE__ */ n(
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
), At = L(
  ({
    title: e,
    subtitle: t,
    badge: r,
    actions: l = [],
    image: o,
    children: a,
    titleSize: d = w.XXXLarge,
    titleSizeLarge: s = w.Huge,
    titleWeight: u = R.ExtraBold,
    titleColor: b = c.Default,
    subtitleSize: p = w.Small,
    subtitleColor: g = c.Subtlest,
    primaryCtaBackground: h = y.Dark,
    primaryCtaColor: m = c.Inverse,
    primaryCtaBorderRadius: x = M.Full,
    primaryCtaWeight: v = 500,
    secondaryCtaColor: C = c.Subtle,
    secondaryCtaWeight: B = 500,
    ctaGap: H = i.MediumLarge,
    paddingBlock: X = i.Size7,
    paddingInline: A = i.XXXLarge,
    contentGap: z = i.XHuge,
    textGap: F = i.XLarge,
    textMaxWidth: O = "576px",
    gradient: k,
    breakpoint: I = 768
  }, N) => {
    const [G, j] = P(!1);
    K(() => {
      const J = () => j(window.innerWidth >= I);
      return J(), window.addEventListener("resize", J), () => window.removeEventListener("resize", J);
    }, [I]);
    const Y = (k == null ? void 0 : k.enabled) !== !1, U = (k == null ? void 0 : k.css) ?? "linear-gradient(143.6deg, rgba(192,132,252,0) 20.79%, rgba(232,121,249,0.26) 40.92%, rgba(204,171,238,0) 70.35%)", E = (k == null ? void 0 : k.height) ?? "580px", V = (r == null ? void 0 : r.borderColor) ?? T.Default, Z = r ? /* @__PURE__ */ n(
      he,
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
        children: /* @__PURE__ */ f(W, { space: i.MediumLarge, alignBlock: "center", children: [
          /* @__PURE__ */ n(
            D,
            {
              as: "span",
              size: w.XSmall,
              color: r.labelColor ?? c.Inverse,
              style: {
                backgroundColor: r.labelBackgroundColor ?? y.Accent,
                borderRadius: M.Full,
                padding: `${i.XSmall} ${i.MediumLarge}`
              },
              children: r.label
            }
          ),
          /* @__PURE__ */ f(W, { space: i.XXSmall, alignBlock: "center", children: [
            /* @__PURE__ */ n(D, { as: "span", size: w.XSmall, children: r.text }),
            r.icon ?? /* @__PURE__ */ n(Mn, {})
          ] })
        ] })
      }
    ) : null, q = l.length > 0 ? /* @__PURE__ */ n(W, { space: H, alignBlock: "center", shouldWrap: !0, children: l.map((J, ce) => {
      const le = (J.variant ?? (ce === 0 ? "primary" : "secondary")) === "primary", ge = le ? v : B;
      return /* @__PURE__ */ n(
        he,
        {
          href: J.path,
          backgroundColor: le ? h : void 0,
          color: le ? m : C,
          paddingBlock: i.Medium,
          paddingInline: i.Large,
          borderRadius: le ? x : void 0,
          weight: ge,
          display: "inline-block",
          style: { textDecoration: "none" },
          children: /* @__PURE__ */ f(W, { space: i.XSmall, alignBlock: "center", children: [
            /* @__PURE__ */ n(
              D,
              {
                as: "span",
                color: le ? m : C,
                weight: ge,
                children: J.label
              }
            ),
            J.icon ?? /* @__PURE__ */ n(Mn, {})
          ] })
        },
        ce
      );
    }) }) : null, de = /* @__PURE__ */ f(
      _,
      {
        space: F,
        style: { maxWidth: O, flexShrink: 0 },
        children: [
          Z,
          /* @__PURE__ */ n(
            D,
            {
              as: "h1",
              size: G ? s : d,
              weight: u,
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
              size: p,
              lineHeight: 1.6,
              children: t
            }
          ),
          a,
          q
        ]
      }
    ), ee = o && G ? /* @__PURE__ */ n(S, { style: { flex: "1 1 0%", minWidth: 0 }, children: /* @__PURE__ */ n(
      Be,
      {
        src: o.src,
        alt: o.alt ?? "",
        style: { maxWidth: o.maxWidth ?? "576px" }
      }
    ) }) : null;
    return /* @__PURE__ */ f(S, { as: "section", ref: N, style: { position: "relative" }, children: [
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
          paddingInline: A,
          paddingBlock: X,
          children: G ? /* @__PURE__ */ f(W, { space: z, alignBlock: "center", children: [
            de,
            ee
          ] }) : /* @__PURE__ */ n(_, { space: z, children: de })
        }
      )
    ] });
  }
);
At.displayName = "HeroSection";
const Nt = L(
  ({
    padding: e = i.Large,
    backgroundColor: t = y.Default,
    borderRadius: r = M.XXLarge,
    borderColor: l = T.Default,
    elevation: o = be.Ambient,
    accentColor: a,
    accentWidth: d = "8px",
    header: s,
    footer: u,
    children: b,
    ...p
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
      ...p,
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
        u && /* @__PURE__ */ n(
          S,
          {
            padding: e,
            style: { borderTop: `1px solid ${l}` },
            children: u
          }
        )
      ] })
    }
  )
);
Nt.displayName = "Card";
const $t = L(
  ({
    label: e,
    helperText: t,
    errorText: r,
    id: l,
    labelColor: o = c.Default,
    labelSize: a = w.XSmall,
    labelWeight: d = R.Medium,
    labelTextTransform: s,
    labelLetterSpacing: u,
    inputBackground: b = y.Default,
    inputBorderColor: p = T.Input,
    inputBorderRadius: g = M.Medium,
    inputBorderSide: h = "all",
    inputPadding: m = i.Medium,
    startAdornment: x,
    endAdornment: v,
    name: C,
    type: B,
    placeholder: H,
    value: X,
    defaultValue: A,
    disabled: z,
    readOnly: F,
    required: O,
    autoFocus: k,
    autoComplete: I,
    onChange: N,
    onBlur: G,
    onFocus: j
  }, Y) => {
    const U = ke(), E = l ?? U, V = `${E}-helper`, Z = `${E}-error`, q = !!r, se = q ? T.Error : p, de = h === "bottom", ee = de || !!(x || v), J = /* @__PURE__ */ n(
      Ee,
      {
        ref: Y,
        id: E,
        name: C,
        type: B,
        placeholder: H,
        value: X,
        defaultValue: A,
        disabled: z,
        readOnly: F,
        required: O,
        autoFocus: k,
        autoComplete: I,
        onChange: N,
        onBlur: G,
        onFocus: j,
        backgroundColor: ee ? "transparent" : b,
        borderColor: ee ? void 0 : se,
        borderRadius: ee ? void 0 : g,
        padding: m,
        style: {
          width: "100%",
          ...ee ? { flex: "1 1 auto", minWidth: 0 } : {}
        },
        "aria-describedby": q ? Z : t ? V : void 0,
        "aria-invalid": q || void 0
      }
    ), ce = ee ? /* @__PURE__ */ f("div", { style: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      backgroundColor: b,
      ...de ? { borderBottom: `2px solid ${se}` } : { border: `1px solid ${se}`, borderRadius: g }
    }, children: [
      x,
      J,
      v
    ] }) : J;
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
            letterSpacing: u
          },
          children: e
        }
      ),
      ce,
      q && /* @__PURE__ */ n(D, { as: "span", size: w.XXSmall, color: c.Error, id: Z, children: r }),
      !q && t && /* @__PURE__ */ n(D, { as: "span", size: w.XXSmall, color: c.Subtle, id: V, children: t })
    ] });
  }
);
$t.displayName = "TextField";
const Wt = {
  info: {
    bg: y.InfoTint,
    text: c.Info,
    border: T.Info
  },
  success: {
    bg: y.PrimaryTint,
    text: c.Success,
    border: T.Success
  },
  warning: {
    bg: y.WarningTint,
    text: c.Warning,
    border: T.Warning
  },
  error: {
    bg: y.ErrorTint,
    text: c.Error,
    border: T.Error
  }
}, Ft = () => /* @__PURE__ */ n(
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
), Ot = L(
  ({ variant: e = "info", icon: t, dismissible: r, onDismiss: l, children: o }, a) => {
    const d = Wt[e];
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
          zIndex: pe.Banner
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
              children: /* @__PURE__ */ n(Ft, {})
            }
          )
        ] })
      }
    );
  }
);
Ot.displayName = "Banner";
const $n = L(
  ({
    sections: e,
    activeId: t,
    onSelect: r,
    activeColor: l = c.Brand,
    activeBackground: o = y.Subtle
  }, a) => /* @__PURE__ */ n(_, { ref: a, as: "nav", space: i.Small, children: e.map((d, s) => /* @__PURE__ */ f(_, { space: i.XXSmall, children: [
    d.title && /* @__PURE__ */ n(S, { paddingInline: i.Medium, paddingBlock: i.XSmall, children: /* @__PURE__ */ n(
      D,
      {
        as: "span",
        size: w.XXSmall,
        weight: 600,
        color: c.Subtlest,
        textTransform: "uppercase",
        children: d.title
      }
    ) }),
    /* @__PURE__ */ n(_, { as: "ul", style: { listStyle: "none", padding: 0, margin: 0 }, children: d.items.map((u) => {
      const b = u.id === t;
      return /* @__PURE__ */ n("li", { children: /* @__PURE__ */ n(
        ae,
        {
          disabled: u.disabled,
          onClick: () => r == null ? void 0 : r(u.id),
          borderRadius: M.Medium,
          color: u.disabled ? c.Disabled : b ? l : c.Default,
          backgroundColor: b ? o : y.Transparent,
          paddingBlock: i.Medium,
          paddingInline: i.MediumLarge,
          style: {
            width: "100%",
            fontSize: w.XSmall,
            textAlign: "left",
            cursor: u.disabled ? "default" : "pointer"
          },
          children: /* @__PURE__ */ f(W, { space: i.Medium, alignBlock: "center", children: [
            u.icon && /* @__PURE__ */ n(S, { style: { flexShrink: 0 }, children: u.icon }),
            /* @__PURE__ */ n(D, { as: "span", size: w.XSmall, style: { color: "inherit" }, children: u.label })
          ] })
        }
      ) }, u.id);
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
$n.displayName = "Menu";
const Ht = L(
  ({
    tabs: e,
    activeId: t,
    defaultActiveId: r,
    onChange: l,
    variant: o = "underline",
    activeColor: a = c.Brand,
    inactiveColor: d = c.Subtle,
    pillBackground: s = y.Subtle,
    activePillBackground: u = y.Default,
    panelPadding: b = i.Large
  }, p) => {
    var H;
    const [g, h] = P(
      r ?? ((H = e[0]) == null ? void 0 : H.id)
    ), m = t !== void 0, x = m ? t : g, v = (X) => {
      m || h(X), l == null || l(X);
    }, C = e.find((X) => X.id === x);
    return /* @__PURE__ */ f(S, { ref: p, children: [
      o === "pill" ? /* @__PURE__ */ n(
        W,
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
            const A = X.id === x;
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
                color: A ? c.Default : X.disabled ? c.Disabled : d,
                backgroundColor: A ? u : y.Transparent,
                style: {
                  fontWeight: A ? R.Bold : R.Medium,
                  fontSize: w.XSmall,
                  boxShadow: A ? be.Raised : "none",
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
            const A = X.id === x;
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
                color: A ? a : X.disabled ? c.Disabled : d,
                style: {
                  background: "none",
                  fontWeight: A ? R.Semibold : R.Regular,
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
Ht.displayName = "Tabs";
const jt = L(
  ({
    title: e,
    subtitle: t,
    breadcrumbs: r,
    actions: l,
    titleSize: o = w.XLarge,
    titleWeight: a = R.Bold,
    titleColor: d = c.Default,
    subtitleColor: s = c.Subtle,
    breadcrumbLinkColor: u = c.Link,
    borderColor: b = T.Default,
    paddingBlock: p = i.Large
  }, g) => /* @__PURE__ */ n(
    S,
    {
      ref: g,
      as: "header",
      paddingBlock: p,
      style: {
        borderBottom: `1px solid ${b}`
      },
      children: /* @__PURE__ */ f(_, { space: i.Medium, children: [
        r && r.length > 0 && /* @__PURE__ */ n(W, { space: i.XSmall, alignBlock: "center", children: r.map((h, m) => /* @__PURE__ */ f(te.Fragment, { children: [
          m > 0 && /* @__PURE__ */ n(D, { as: "span", color: c.Disabled, size: w.XSmall, children: "/" }),
          h.href ? /* @__PURE__ */ n(
            he,
            {
              href: h.href,
              color: u,
              size: w.XSmall,
              style: { textDecoration: "none" },
              children: h.label
            }
          ) : /* @__PURE__ */ n(D, { as: "span", size: w.XSmall, color: c.Subtlest, children: h.label })
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
jt.displayName = "Header";
const Pt = {
  XSmall: "320px",
  Small: "416px",
  Medium: "512px",
  Large: "704px",
  XLarge: "960px",
  Full: "min(96vw, 1440px)"
}, Vt = () => /* @__PURE__ */ n(
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
), Gt = L(
  ({ open: e, onClose: t, title: r, children: l, footer: o, size: a = Pt.Medium }, d) => {
    const s = Q(
      (u) => {
        u.key === "Escape" && t();
      },
      [t]
    );
    return K(() => {
      if (e)
        return document.addEventListener("keydown", s), document.body.style.overflow = "hidden", () => {
          document.removeEventListener("keydown", s), document.body.style.overflow = "";
        };
    }, [e, s]), e ? Xe(
      /* @__PURE__ */ n(
        S,
        {
          style: {
            position: "fixed",
            inset: 0,
            zIndex: pe.Modal,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: i.Large,
            backgroundColor: y.Overlay
          },
          onClick: (u) => {
            u.target === u.currentTarget && t();
          },
          children: /* @__PURE__ */ n(
            S,
            {
              ref: d,
              role: "dialog",
              "aria-modal": "true",
              "aria-label": r,
              backgroundColor: y.Default,
              borderRadius: M.XLarge,
              elevation: be.Overlay,
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
                      /* @__PURE__ */ n(D, { as: "h2", size: w.Large, weight: R.Semibold, color: c.Default, children: r }),
                      /* @__PURE__ */ n(re, { label: "Close", onClick: t, color: c.Subtle, children: /* @__PURE__ */ n(Vt, {}) })
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
Gt.displayName = "Modal";
const Ie = 200, _t = {
  start: "flex-start",
  center: "center",
  end: "flex-end"
};
function Yt({
  open: e,
  onClose: t,
  children: r,
  offsetTop: l = 0,
  padding: o = i.Large,
  maxWidth: a,
  align: d = "center",
  blur: s = !0,
  closeOnMouseLeave: u = !1
}) {
  const [b, p] = P(e), [g, h] = P(!1), m = $(l), x = $(d);
  if (K(() => {
    if (e) {
      p(!0);
      const B = requestAnimationFrame(() => h(!0));
      return () => cancelAnimationFrame(B);
    }
    h(!1);
    const C = window.setTimeout(() => p(!1), Ie);
    return () => window.clearTimeout(C);
  }, [e]), K(() => {
    if (!e) return;
    const C = (B) => {
      B.key === "Escape" && t();
    };
    return document.addEventListener("keydown", C), () => document.removeEventListener("keydown", C);
  }, [e, t]), !b) return null;
  const v = typeof m == "number" ? `${m}px` : m;
  return Xe(
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
          zIndex: pe.Modal,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          opacity: g ? 1 : 0,
          transition: `opacity ${Ie}ms ease`
        },
        children: [
          /* @__PURE__ */ n(
            S,
            {
              onClick: (C) => C.stopPropagation(),
              onMouseLeave: u ? t : void 0,
              backgroundColor: y.Default,
              padding: o,
              style: {
                display: "flex",
                justifyContent: _t[x],
                width: "100%",
                transform: g ? "translateY(0)" : "translateY(-12px)",
                transition: `transform ${Ie + 50}ms ease`
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
Yt.displayName = "Drawer";
const Kt = L(
  ({ trigger: e, sections: t, activeId: r, onSelect: l }, o) => {
    const [a, d] = P(!1), s = oe(null), u = () => d((h) => !h), b = (h) => {
      l == null || l(h), d(!1);
    }, p = Q((h) => {
      h.key === "Escape" && d(!1);
    }, []), g = Q((h) => {
      s.current && !s.current.contains(h.target) && d(!1);
    }, []);
    return K(() => {
      if (a)
        return document.addEventListener("keydown", p), document.addEventListener("mousedown", g), () => {
          document.removeEventListener("keydown", p), document.removeEventListener("mousedown", g);
        };
    }, [a, p, g]), /* @__PURE__ */ f(
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
              onClick: u,
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
              borderRadius: M.Large,
              elevation: be.Dropdown,
              padding: i.XSmall,
              style: {
                position: "absolute",
                top: "100%",
                right: 0,
                marginTop: i.XSmall,
                minWidth: "192px",
                zIndex: pe.Dropdown
              },
              children: /* @__PURE__ */ n(
                $n,
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
Kt.displayName = "DropdownMenu";
const Ut = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), qt = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), Jt = L(
  ({
    sections: e,
    activeId: t,
    onSelect: r,
    header: l,
    footer: o,
    collapsed: a = !1,
    onToggleCollapse: d,
    width: s = "256px",
    collapsedWidth: u = "64px",
    activeColor: b = c.Brand,
    activeBackground: p = y.Subtle,
    borderColor: g = T.Default
  }, h) => /* @__PURE__ */ f(
    S,
    {
      ref: h,
      as: "aside",
      backgroundColor: y.Default,
      style: {
        width: a ? u : s,
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
                  color: c.Subtlest,
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
                    color: C ? b : c.Default,
                    backgroundColor: C ? p : y.Transparent,
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
                        v.badge && /* @__PURE__ */ n(Rn, { variant: v.badgeVariant ?? "default", children: v.badge })
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
                color: c.Subtle,
                padding: i.XSmall,
                children: a ? /* @__PURE__ */ n(qt, {}) : /* @__PURE__ */ n(Ut, {})
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
Jt.displayName = "Sidebar";
const Zt = () => /* @__PURE__ */ n(
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
), Qt = L(
  ({
    open: e,
    onClose: t,
    title: r,
    side: l = "right",
    mode: o = "overlay",
    width: a = "384px",
    children: d
  }, s) => {
    const u = Q(
      (p) => {
        p.key === "Escape" && t();
      },
      [t]
    );
    if (K(() => {
      if (e)
        return document.addEventListener("keydown", u), () => document.removeEventListener("keydown", u);
    }, [e, u]), !e) return null;
    const b = /* @__PURE__ */ f(
      S,
      {
        ref: s,
        backgroundColor: y.Default,
        elevation: be.Overlay,
        style: {
          position: "fixed",
          top: 0,
          bottom: 0,
          [l]: 0,
          width: a,
          zIndex: pe.Modal,
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
                /* @__PURE__ */ n(D, { as: "h2", size: w.Large, weight: R.Semibold, color: c.Default, children: r }),
                /* @__PURE__ */ n(re, { label: "Close panel", onClick: t, color: c.Subtle, children: /* @__PURE__ */ n(Zt, {}) })
              ] })
            }
          ),
          /* @__PURE__ */ n(S, { padding: i.Large, overflow: "auto", style: { flex: "1 1 auto" }, children: d })
        ]
      }
    );
    return o === "overlay" ? Xe(
      /* @__PURE__ */ n(
        S,
        {
          style: {
            position: "fixed",
            inset: 0,
            zIndex: pe.Modal,
            backgroundColor: y.Overlay
          },
          onClick: (p) => {
            p.target === p.currentTarget && t();
          },
          children: b
        }
      ),
      document.body
    ) : b;
  }
);
Qt.displayName = "Panel";
const er = L(
  ({
    padding: e = i.Large,
    color: t = c.Subtle,
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
er.displayName = "Aside";
const nr = L(
  ({
    topNav: e,
    sideNav: t,
    mobileNav: r,
    backgroundColor: l = y.Surface,
    children: o
  }, a) => {
    const s = Ce() === "mobile";
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
nr.displayName = "Layout";
const tr = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
function In(e, t) {
  return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function rr(e, t) {
  return new Date(e, t + 1, 0).getDate();
}
function lr(e, t) {
  return new Date(e, t, 1).getDay();
}
const ir = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), or = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), ar = [
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
], sr = L(
  ({
    value: e,
    defaultValue: t,
    onChange: r,
    min: l,
    max: o,
    selectedColor: a = c.Inverse,
    selectedBackground: d = y.Brand
  }, s) => {
    const u = /* @__PURE__ */ new Date(), [b, p] = P(t), g = e !== void 0, h = g ? e : b, [m, x] = P(
      (h ?? u).getFullYear()
    ), [v, C] = P(
      (h ?? u).getMonth()
    ), B = ve(() => rr(m, v), [m, v]), H = ve(() => lr(m, v), [m, v]), X = () => {
      v === 0 ? (C(11), x((k) => k - 1)) : C((k) => k - 1);
    }, A = () => {
      v === 11 ? (C(0), x((k) => k + 1)) : C((k) => k + 1);
    }, z = (k) => {
      const I = new Date(m, v, k);
      g || p(I), r == null || r(I);
    }, F = (k) => {
      const I = new Date(m, v, k);
      return !!(l && I < new Date(l.getFullYear(), l.getMonth(), l.getDate()) || o && I > new Date(o.getFullYear(), o.getMonth(), o.getDate()));
    }, O = [];
    for (let k = 0; k < H; k++)
      O.push(/* @__PURE__ */ n(S, {}, `empty-${k}`));
    for (let k = 1; k <= B; k++) {
      const I = new Date(m, v, k), N = h ? In(I, h) : !1, G = In(I, u), j = F(k);
      O.push(
        /* @__PURE__ */ n(
          ae,
          {
            disabled: j,
            onClick: () => z(k),
            borderRadius: M.Medium,
            style: {
              width: "36px",
              height: "36px",
              padding: 0,
              fontSize: w.XSmall,
              fontWeight: N ? R.Semibold : R.Regular,
              backgroundColor: N ? d : "transparent",
              color: N ? a : j ? c.Disabled : c.Default,
              border: G && !N ? `1px solid ${T.Default}` : "none",
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
        borderRadius: M.XLarge,
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
                /* @__PURE__ */ n(re, { label: "Previous month", onClick: X, color: c.Subtle, padding: i.XSmall, children: /* @__PURE__ */ n(ir, {}) }),
                /* @__PURE__ */ f(D, { as: "span", size: w.XSmall, weight: R.Semibold, color: c.Default, children: [
                  ar[v],
                  " ",
                  m
                ] }),
                /* @__PURE__ */ n(re, { label: "Next month", onClick: A, color: c.Subtle, padding: i.XSmall, children: /* @__PURE__ */ n(or, {}) })
              ]
            }
          ),
          /* @__PURE__ */ f(zn, { columns: 7, gap: i.XXSmall, children: [
            tr.map((k) => /* @__PURE__ */ n(
              D,
              {
                as: "span",
                size: w.XXSmall,
                weight: R.Medium,
                color: c.Subtlest,
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
sr.displayName = "Calendar";
const dr = L(
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
              fontFamily: Vn.Display,
              size: w.XLarge,
              weight: R.Bold,
              color: c.Default,
              children: e
            }
          ),
          t && /* @__PURE__ */ n(D, { as: "p", size: w.XSmall, color: c.Subtle, lineHeight: 1.6, children: t })
        ] }),
        (l || o) && /* @__PURE__ */ f(W, { space: i.Medium, alignBlock: "center", children: [
          l,
          o
        ] })
      ]
    }
  )
);
dr.displayName = "EmptyState";
const cr = ({ order: e }) => /* @__PURE__ */ n(
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
), ur = L(
  ({
    caption: e,
    head: t,
    rows: r,
    rowsPerPage: l,
    page: o,
    defaultPage: a = 1,
    sortKey: d,
    sortOrder: s,
    defaultSortKey: u,
    defaultSortOrder: b = "ASC",
    onSort: p,
    onSetPage: g,
    isLoading: h = !1,
    isFixedSize: m = !1
  }, x) => {
    const [v, C] = P(a), [B, H] = P(u), [X, A] = P(b), z = o !== void 0, F = z ? o : v, O = d !== void 0, k = O ? d : B, I = O ? s ?? "ASC" : X, N = l ? Math.max(1, Math.ceil(r.length / l)) : 1, G = ve(() => {
      if (!l) return r;
      const E = (F - 1) * l;
      return r.slice(E, E + l);
    }, [r, l, F]), j = (E) => {
      const V = k === E && I === "ASC" ? "DESC" : "ASC";
      O || (H(E), A(V)), p == null || p(E, V);
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
            borderRadius: M.XXLarge
          },
          children: /* @__PURE__ */ n(An, { size: "large" })
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
                  fontWeight: R.Semibold,
                  fontSize: w.Small,
                  color: c.Default
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
                  fontWeight: R.Semibold,
                  fontSize: w.XXSmall,
                  color: c.Subtle,
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
                    cr,
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
                    borderBottom: `1px solid ${T.Default}`
                  },
                  children: E.cells.map((V, Z) => /* @__PURE__ */ n("td", { style: { ...U, color: c.Default }, children: V }, Z))
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
                    color: c.Subtle
                  },
                  children: "No data"
                }
              ) })
            ] })
          ]
        }
      ),
      l && N > 1 && /* @__PURE__ */ f(
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
                borderRadius: M.Large,
                backgroundColor: y.Default,
                color: c.Default,
                style: { fontSize: w.XXSmall, border: `1px solid ${T.Default}` },
                children: "Previous"
              }
            ),
            /* @__PURE__ */ f(D, { size: w.XXSmall, color: c.Subtle, children: [
              "Page ",
              F,
              " of ",
              N
            ] }),
            /* @__PURE__ */ n(
              ae,
              {
                disabled: F >= N,
                onClick: () => Y(F + 1),
                paddingBlock: i.XSmall,
                paddingInline: i.Medium,
                borderRadius: M.Large,
                backgroundColor: y.Default,
                color: c.Default,
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
ur.displayName = "Table";
const pr = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z", clipRule: "evenodd" }) }), br = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" }) }), hr = L(
  ({
    defaultValue: e,
    label: t,
    editButtonLabel: r,
    editView: l,
    readView: o,
    onConfirm: a,
    onCancel: d
  }, s) => {
    const [u, b] = P(!1), [p, g] = P(e);
    oe(null), K(() => {
      g(e);
    }, [e]);
    const h = Q(() => {
      b(!1), a(p);
    }, [p, a]), m = Q(() => {
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
          borderRadius: M.Medium,
          wordBreak: "break-word",
          minHeight: "1.5em"
        },
        children: /* @__PURE__ */ n(D, { as: "span", size: w.Small, color: c.Default, children: B || " " })
      }
    ), C = (B) => /* @__PURE__ */ n(
      Ee,
      {
        value: B.value,
        onChange: B.onChange,
        onKeyDown: B.onKeyDown,
        autoFocus: B.autoFocus,
        backgroundColor: y.Default,
        borderColor: T.Focus,
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
          color: c.Subtle,
          style: { display: "block", marginBlockEnd: i.XSmall },
          children: t
        }
      ),
      u ? /* @__PURE__ */ f(W, { space: i.XSmall, alignBlock: "start", children: [
        /* @__PURE__ */ n(S, { style: { flex: "1 1 auto" }, children: (l ?? C)({
          value: p,
          onChange: (B) => g(B.target.value),
          onKeyDown: x,
          autoFocus: !0
        }) }),
        /* @__PURE__ */ n(
          re,
          {
            label: "Confirm",
            onClick: h,
            color: c.Success,
            padding: i.XSmall,
            children: /* @__PURE__ */ n(pr, {})
          }
        ),
        /* @__PURE__ */ n(
          re,
          {
            label: "Cancel",
            onClick: m,
            color: c.Error,
            padding: i.XSmall,
            children: /* @__PURE__ */ n(br, {})
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
hr.displayName = "InlineEdit";
const gr = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "currentColor", style: { width: "14px", height: "14px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z", clipRule: "evenodd" }) }), mr = L(
  ({ trigger: e, groups: t, checked: r, onChange: l }, o) => {
    const [a, d] = P(!1), s = oe(null), u = Q((p) => {
      p.key === "Escape" && d(!1);
    }, []), b = Q((p) => {
      s.current && !s.current.contains(p.target) && d(!1);
    }, []);
    return K(() => {
      if (a)
        return document.addEventListener("keydown", u), document.addEventListener("mousedown", b), () => {
          document.removeEventListener("keydown", u), document.removeEventListener("mousedown", b);
        };
    }, [a, u, b]), /* @__PURE__ */ f(
      S,
      {
        ref: (p) => {
          s.current = p, typeof o == "function" ? o(p) : o && (o.current = p);
        },
        style: { position: "relative", display: "inline-block" },
        children: [
          /* @__PURE__ */ n(
            W,
            {
              style: { cursor: "pointer" },
              onClick: () => d((p) => !p),
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
              borderRadius: M.XLarge,
              elevation: be.Dropdown,
              padding: i.XSmall,
              style: {
                position: "absolute",
                top: "100%",
                left: 0,
                marginTop: i.XSmall,
                minWidth: "224px",
                zIndex: pe.Dropdown
              },
              children: /* @__PURE__ */ n(_, { space: i.XSmall, children: t.map((p, g) => /* @__PURE__ */ f(_, { space: i.XXSmall, children: [
                p.title && /* @__PURE__ */ n(S, { paddingInline: i.MediumLarge, paddingBlock: i.XSmall, children: /* @__PURE__ */ n(
                  D,
                  {
                    as: "span",
                    size: w.XXSmall,
                    weight: R.Semibold,
                    color: c.Subtlest,
                    textTransform: "uppercase",
                    children: p.title
                  }
                ) }),
                p.items.map((h) => {
                  const m = !!r[h.id];
                  return /* @__PURE__ */ f(
                    ae,
                    {
                      onClick: () => l(h.id, !m),
                      borderRadius: M.Medium,
                      backgroundColor: y.Transparent,
                      color: c.Default,
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
                              border: m ? "none" : `2px solid ${T.Outline}`,
                              backgroundColor: m ? y.Brand : y.Transparent,
                              color: c.Inverse,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0
                            },
                            children: m && /* @__PURE__ */ n(gr, {})
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
mr.displayName = "DropdownCheckboxMenu";
const fr = L(
  ({
    label: e,
    helperText: t,
    errorText: r,
    id: l,
    labelColor: o = c.Default,
    labelSize: a = w.XSmall,
    labelWeight: d = R.Medium,
    labelTextTransform: s,
    labelLetterSpacing: u,
    inputBackground: b = y.Subtle,
    inputBorderColor: p,
    inputBorderRadius: g = M.XXLarge,
    inputBorderSide: h = "all",
    inputPadding: m = i.MediumLarge,
    name: x,
    value: v,
    defaultValue: C,
    placeholder: B,
    options: H,
    disabled: X,
    required: A,
    onChange: z,
    onBlur: F
  }, O) => {
    const k = ke(), I = l ?? k, N = `${I}-helper`, G = `${I}-error`, j = !!r, Y = j ? T.Error : p, U = h === "bottom", E = /* @__PURE__ */ n(
      Nn,
      {
        ref: O,
        id: I,
        name: x,
        value: v,
        defaultValue: C,
        placeholder: B,
        options: H,
        disabled: X,
        required: A,
        onChange: z,
        onBlur: F,
        backgroundColor: U ? "transparent" : b,
        borderColor: U ? void 0 : Y,
        borderRadius: U ? void 0 : g,
        padding: m,
        fontSize: w.XSmall,
        color: c.Default,
        style: { width: "100%" },
        "aria-describedby": j ? G : t ? N : void 0,
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
          htmlFor: I,
          style: {
            fontSize: a,
            fontWeight: d,
            color: o,
            textTransform: s,
            letterSpacing: u
          },
          children: e
        }
      ),
      V,
      j && /* @__PURE__ */ n(D, { as: "span", size: w.XXSmall, color: c.Error, id: G, children: r }),
      !j && t && /* @__PURE__ */ n(D, { as: "span", size: w.XXSmall, color: c.Subtle, id: N, children: t })
    ] });
  }
);
fr.displayName = "SelectField";
const yr = {
  info: { bg: y.Default, text: c.Info, accent: "#3b82f6" },
  success: { bg: y.Default, text: c.Success, accent: "#22c55e" },
  warning: { bg: y.Default, text: c.Warning, accent: "#f59e0b" },
  error: { bg: y.Default, text: c.Error, accent: "#ba1a1a" }
}, xr = () => /* @__PURE__ */ n(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "14px", height: "14px" },
    children: /* @__PURE__ */ n("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  }
), vr = L(
  ({ open: e, onClose: t, duration: r = 5e3, variant: l = "info", icon: o, children: a }, d) => {
    if (K(() => {
      if (!e || r === 0) return;
      const u = setTimeout(t, r);
      return () => clearTimeout(u);
    }, [e, r, t]), !e) return null;
    const s = yr[l];
    return Xe(
      /* @__PURE__ */ n(
        S,
        {
          ref: d,
          role: "alert",
          "aria-live": "assertive",
          backgroundColor: s.bg,
          borderRadius: M.XXLarge,
          elevation: be.Overlay,
          padding: i.Large,
          style: {
            position: "fixed",
            bottom: i.XXXLarge,
            right: i.XXXLarge,
            zIndex: pe.Banner,
            minWidth: "320px",
            maxWidth: "448px",
            borderLeft: `4px solid ${s.accent}`
          },
          children: /* @__PURE__ */ f(W, { space: i.MediumLarge, alignBlock: "center", spread: "space-between", children: [
            /* @__PURE__ */ f(W, { space: i.MediumLarge, alignBlock: "center", grow: "fill", children: [
              o && /* @__PURE__ */ n(S, { style: { color: s.accent, flexShrink: 0 }, children: o }),
              /* @__PURE__ */ n(D, { as: "span", size: w.XSmall, weight: R.Medium, color: c.Default, children: a })
            ] }),
            /* @__PURE__ */ n(
              re,
              {
                label: "Dismiss",
                onClick: t,
                color: c.Subtle,
                padding: i.XXSmall,
                children: /* @__PURE__ */ n(xr, {})
              }
            )
          ] })
        }
      ),
      document.body
    );
  }
);
vr.displayName = "Toast";
const Sr = L(
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
        zIndex: pe.Sticky,
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
        const s = a.id === t, u = Math.floor(e.length / 2), b = l && d === u;
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
                color: s ? c.Brand : c.Disabled
              },
              children: [
                /* @__PURE__ */ n(S, { style: { width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center" }, children: a.icon }),
                /* @__PURE__ */ n(
                  D,
                  {
                    as: "span",
                    size: w.Micro,
                    weight: R.Bold,
                    color: s ? c.Brand : c.Disabled,
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
Sr.displayName = "MobileNav";
const wr = () => /* @__PURE__ */ n(
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
), kr = L(
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
        children: e.map((s, u) => {
          const b = s.status === "visited", p = s.status === "current";
          return e.length - 1, /* @__PURE__ */ f("div", { style: { display: "flex", flexDirection: "column", gap: i.Medium }, children: [
            /* @__PURE__ */ n("div", { style: {
              height: 6,
              borderRadius: M.Full,
              background: p ? xe.Brand : "none",
              backgroundColor: p ? void 0 : b ? y.PrimaryContainer : y.NeutralBold,
              opacity: b ? 0.4 : 1,
              boxShadow: p ? "0 0 8px var(--bbui-color-primary), 0 0 20px var(--bbui-color-primary)" : "none",
              transition: "all 400ms ease",
              cursor: s.onClick ? "pointer" : "default"
            }, onClick: s.onClick }),
            o && /* @__PURE__ */ n(
              D,
              {
                as: "p",
                size: w.Micro,
                weight: p ? R.Bold : R.Medium,
                color: p ? c.Brand : b ? c.Subtle : c.Disabled,
                textTransform: "uppercase",
                letterSpacing: Tn.Widest,
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
          }, children: e.map((s, u) => {
            const b = u === e.length - 1, p = s.status === "visited", g = s.status === "current", h = s.status === "disabled", m = p ? xe.Brand : g ? "transparent" : y.NeutralBold, x = /* @__PURE__ */ n(
              "div",
              {
                style: {
                  width: a,
                  height: a,
                  borderRadius: M.Full,
                  background: p ? xe.Brand : m,
                  backgroundColor: p ? void 0 : m,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: p ? c.OnBrand : g ? c.Brand : h ? c.Disabled : c.Subtle,
                  fontSize: w.XSmall,
                  fontWeight: R.Bold,
                  border: g ? `2px solid ${c.Brand}` : "none",
                  cursor: s.onClick || s.href ? "pointer" : "default",
                  transition: "all 300ms ease"
                },
                onClick: s.onClick,
                children: p ? /* @__PURE__ */ n(wr, {}) : u + 1
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
                borderRadius: M.Full,
                overflow: "hidden"
              }, children: /* @__PURE__ */ n("div", { style: {
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: `${p ? s.percentageComplete : 0}%`,
                background: xe.Brand,
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
          }, children: e.map((s, u) => {
            const b = u === e.length - 1, p = s.status === "visited", g = s.status === "current", h = s.status === "disabled", m = p ? c.Brand : g ? c.Default : h ? c.Disabled : c.Subtle;
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
                  weight: g ? R.Bold : R.Medium,
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
kr.displayName = "ProgressTracker";
const Xr = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";
function Cr(e) {
  const t = /* @__PURE__ */ f(W, { space: i.XSmall, alignBlock: "center", children: [
    /* @__PURE__ */ n(
      D,
      {
        size: w.XSmall,
        weight: R.Semibold,
        color: c.Brand,
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
function Br(e) {
  return /* @__PURE__ */ n(
    Be,
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
const Lr = L(
  ({
    icon: e,
    heading: t,
    description: r,
    action: l,
    media: o,
    padding: a = i.XXLarge,
    borderRadius: d = M.XXLarge,
    blur: s = 20,
    backgroundOpacity: u = 0.1,
    borderOpacity: b = 0.12,
    children: p
  }, g) => {
    const h = {
      position: "relative",
      overflow: "hidden",
      background: `rgba(255, 255, 255, ${u})`,
      backdropFilter: `blur(${s}px)`,
      WebkitBackdropFilter: `blur(${s}px)`,
      border: `1px solid rgba(255, 255, 255, ${b})`,
      borderRadius: d,
      transition: "background 200ms ease"
    }, m = {
      position: "absolute",
      inset: 0,
      backgroundImage: `url("${Xr}")`,
      opacity: 0.03,
      pointerEvents: "none"
    }, x = /* @__PURE__ */ f(_, { space: i.Medium, style: { flex: 1 }, children: [
      e && /* @__PURE__ */ n(S, { marginBlockEnd: i.Medium, children: e }),
      /* @__PURE__ */ n(
        D,
        {
          as: "h3",
          size: w.Large,
          weight: R.Bold,
          color: c.Default,
          children: t
        }
      ),
      r && /* @__PURE__ */ n(
        D,
        {
          size: w.XSmall,
          color: c.OnSurfaceVariant,
          children: r
        }
      ),
      l && Cr(l),
      p
    ] });
    return /* @__PURE__ */ f(S, { ref: g, padding: a, style: h, children: [
      /* @__PURE__ */ n("div", { style: m, "aria-hidden": "true" }),
      o ? /* @__PURE__ */ f(W, { space: i.XXLarge, alignBlock: "center", children: [
        x,
        /* @__PURE__ */ n("div", { style: { flexShrink: 0 }, children: Br(o) })
      ] }) : x
    ] });
  }
);
Lr.displayName = "GlassCard";
const Mr = `
@keyframes bbui-pulse-down {
  0%, 100% { transform: translateY(0); opacity: 0.4 }
  50%      { transform: translateY(3px); opacity: 0.9 }
}
`, Dn = "36px", Ir = "18px", Dr = L(
  ({ items: e, onComplete: t, finishedLabel: r, maxHeight: l = "256px" }, o) => {
    const [a, d] = P(() => /* @__PURE__ */ new Set()), s = oe(!1), u = oe(null), b = oe([]), p = a.size >= e.length;
    return K(() => {
      p && !s.current && (s.current = !0, t == null || t());
    }, [p, t]), K(() => {
      const g = u.current;
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
      /* @__PURE__ */ n("style", { children: Mr }),
      /* @__PURE__ */ n("div", { ref: u, style: zr(l, p), children: /* @__PURE__ */ n(_, { space: i.MediumLarge, children: e.map((g, h) => {
        const m = a.has(h);
        return /* @__PURE__ */ f(
          "div",
          {
            ref: (x) => b.current[h] = x,
            "data-idx": h,
            style: Rr(m),
            children: [
              /* @__PURE__ */ n(Er, { item: g }),
              h < e.length - 1 && /* @__PURE__ */ n("span", { "aria-hidden": "true", style: Fr(m) })
            ]
          },
          g.id ?? h
        );
      }) }) }),
      /* @__PURE__ */ n("div", { style: Or, children: p ? r : /* @__PURE__ */ n(Tr, {}) })
    ] });
  }
);
Dr.displayName = "RevealSteps";
function Er({ item: e }) {
  return /* @__PURE__ */ f("div", { style: Ar, children: [
    /* @__PURE__ */ n("span", { "aria-hidden": "true", style: Nr, children: e.icon }),
    /* @__PURE__ */ f("span", { style: $r, children: [
      /* @__PURE__ */ n(D, { as: "span", size: w.Small, weight: R.Medium, children: e.label }),
      e.description && /* @__PURE__ */ n(D, { as: "span", size: w.XSmall, color: c.Subtle, children: e.description })
    ] }),
    e.meta && /* @__PURE__ */ n("span", { style: Wr, children: e.meta })
  ] });
}
function Tr() {
  return /* @__PURE__ */ n("div", { style: Hr, "aria-hidden": "true", children: /* @__PURE__ */ n(
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
const En = "linear-gradient(to bottom, black 0%, black calc(100% - 32px), transparent 100%)", zr = (e, t) => ({
  maxHeight: e,
  overflowY: "auto",
  scrollBehavior: "smooth",
  maskImage: t ? "none" : En,
  WebkitMaskImage: t ? "none" : En,
  paddingRight: i.XSmall
}), Rr = (e) => ({
  position: "relative",
  opacity: e ? 1 : 0.15,
  transform: e ? "translateY(0)" : "translateY(8px)",
  filter: e ? "blur(0)" : "blur(2px)",
  transition: "opacity 420ms ease-out, transform 420ms cubic-bezier(0.22, 1, 0.36, 1), filter 420ms ease-out"
}), Ar = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: i.MediumLarge,
  padding: i.MediumLarge,
  background: y.Subtle,
  borderRadius: M.Large,
  border: `1px solid ${T.Default}`,
  color: c.Default
}, Nr = {
  width: Dn,
  height: Dn,
  flexShrink: 0,
  borderRadius: M.Medium,
  background: y.Subtle,
  color: c.Default,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
}, $r = {
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: i.XXSmall
}, Wr = {
  flexShrink: 0,
  display: "inline-flex",
  alignItems: "center"
}, Fr = (e) => ({
  position: "absolute",
  left: `calc(${i.MediumLarge} + ${Ir} - 1px)`,
  top: "100%",
  height: i.MediumLarge,
  width: "2px",
  background: T.Default,
  opacity: e ? 1 : 0,
  transition: "opacity 300ms ease-out",
  pointerEvents: "none"
}), Or = {
  marginTop: i.Large,
  display: "flex",
  justifyContent: "center",
  minHeight: "20px"
}, Hr = {
  color: c.Subtle,
  animation: "bbui-pulse-down 1500ms ease-in-out infinite",
  display: "inline-flex"
}, jr = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree"
], Pr = L(
  ({ value: e, onChange: t, labels: r = jr }, l) => /* @__PURE__ */ n(
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
            borderColor: T.Default,
            borderColorHover: T.Focus,
            borderColorPressed: T.Focus,
            backgroundColor: y.Transparent,
            hover: y.BrandBold,
            pressed: y.BrandBold,
            color: c.Default,
            colorHover: c.OnBrand,
            colorPressed: c.OnBrand,
            size: w.Small,
            weight: R.Medium
          },
          d
        );
      })
    }
  )
);
Pr.displayName = "LikertScale";
function fl(e) {
  const [t, r] = P(
    () => typeof window < "u" ? window.matchMedia(e).matches : !1
  );
  return K(() => {
    const l = window.matchMedia(e), o = (a) => r(a.matches);
    return l.addEventListener("change", o), r(l.matches), () => l.removeEventListener("change", o);
  }, [e]), t;
}
function De() {
  return typeof window > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Vr(e) {
  typeof document > "u" || (e === "system" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e));
}
function yl() {
  const [e, t] = P(() => typeof localStorage > "u" ? "system" : localStorage.getItem("bbui-theme") ?? "system"), [r, l] = P(
    () => e === "system" ? De() : e
  ), o = Q((a) => {
    t(a), typeof localStorage < "u" && (a === "system" ? localStorage.removeItem("bbui-theme") : localStorage.setItem("bbui-theme", a));
  }, []);
  return K(() => {
    Vr(e), l(e === "system" ? De() : e);
  }, [e]), K(() => {
    if (e !== "system") return;
    const a = window.matchMedia("(prefers-color-scheme: dark)"), d = () => l(De());
    return a.addEventListener("change", d), () => a.removeEventListener("change", d);
  }, [e]), { theme: e, resolvedTheme: r, setTheme: o };
}
async function* Gr(e, t) {
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
        const u = o.slice(0, s);
        o = o.slice(s + 2);
        const b = [];
        for (const g of u.split(`
`))
          g.startsWith("data:") && b.push(g.slice(5).trimStart());
        if (b.length === 0) continue;
        const p = b.join(`
`);
        try {
          yield JSON.parse(p);
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
async function* _r(e, t = {}) {
  const r = await fetch(e, t);
  if (!r.ok) {
    const l = await r.text().catch(() => "");
    throw new Error(
      `SSE request failed ${r.status} ${r.statusText}: ${l}`
    );
  }
  yield* Gr(r, t.signal);
}
function xl(e = {}) {
  const { onEvent: t, onComplete: r, onError: l, retain: o = !0 } = e, [a, d] = P([]), [s, u] = P(null), [b, p] = P(!1), [g, h] = P(null), m = oe(null), x = oe(!0), v = oe(t), C = oe(r), B = oe(l);
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
    d([]), u(null), h(null);
  }, []), A = Q(
    async (z, F = {}) => {
      var k, I, N, G;
      (k = m.current) == null || k.abort();
      const O = new AbortController();
      m.current = O, x.current && (d([]), u(null), h(null), p(!0));
      try {
        for await (const j of _r(z, {
          ...F,
          signal: O.signal
        })) {
          if (!x.current) return;
          o && d((Y) => [...Y, j]), u(j), (I = v.current) == null || I.call(v, j);
        }
        x.current && ((N = C.current) == null || N.call(C));
      } catch (j) {
        if (O.signal.aborted) return;
        const Y = j instanceof Error ? j : new Error(String(j));
        x.current && (h(Y), (G = B.current) == null || G.call(B, Y));
      } finally {
        x.current && m.current === O && (p(!1), m.current = null);
      }
    },
    [o]
  );
  return { events: a, lastEvent: s, isStreaming: b, error: g, start: A, abort: H, reset: X };
}
export {
  sl as AccentColor,
  Qr as AlignItems,
  nl as AlignSelf,
  he as Anchor,
  er as Aside,
  xt as Avatar,
  y as BackgroundColor,
  Rn as Badge,
  Ot as Banner,
  ue as BloomColor,
  ie as BloomLevel,
  T as BorderColor,
  M as BorderRadius,
  al as BorderWidth,
  S as Box,
  wn as Breakpoint,
  ae as Button,
  sr as Calendar,
  Nt as Card,
  Bt as Checkbox,
  it as Chip,
  dl as ContainerWidth,
  il as Cursor,
  bl as DirectionColor,
  Zr as Display,
  Lt as Divider,
  Yt as Drawer,
  mr as DropdownCheckboxMenu,
  Kt as DropdownMenu,
  be as Elevation,
  dr as EmptyState,
  pl as EvaluationResultColor,
  tl as FlexDirection,
  rl as FlexWrap,
  Vn as FontFamily,
  w as FontSize,
  qr as FontStyle,
  R as FontWeight,
  Lr as GlassCard,
  xe as Gradient,
  zn as Grid,
  jt as Header,
  At as HeroSection,
  ml as Hide,
  nt as Icon,
  re as IconButton,
  cl as IconSize,
  Be as Image,
  W as Inline,
  hr as InlineEdit,
  Zn as Inset,
  el as JustifyContent,
  nr as Layout,
  Tn as LetterSpacing,
  Pr as LikertScale,
  bt as LinkButton,
  dt as LiquidGlass,
  $n as Menu,
  Sr as MobileNav,
  Gt as Modal,
  Pt as ModalSize,
  Rt as Navbar,
  Qt as Panel,
  hl as PersonaAccent,
  ll as Position,
  kr as ProgressTracker,
  Dr as RevealSteps,
  Nn as Select,
  fr as SelectField,
  gl as Show,
  Jt as Sidebar,
  i as Spacing,
  An as Spinner,
  _ as Stack,
  Dt as Stepper,
  ur as Table,
  Ht as Tabs,
  D as Text,
  wt as TextArea,
  c as TextColor,
  $t as TextField,
  Ee as TextInput,
  Jr as TextTransform,
  vr as Toast,
  pt as Toggle,
  ol as WhiteSpace,
  pe as ZIndex,
  Gn as bloomColorFor,
  _n as bloomLevelForScore,
  Gr as parseSSEStream,
  ul as scoreColor,
  _r as streamSSE,
  Ce as useBreakpoint,
  fl as useMediaQuery,
  $ as useResponsiveValue,
  xl as useSSEStream,
  yl as useTheme
};
