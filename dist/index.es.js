import ae, { useState as H, useEffect as G, forwardRef as M, Fragment as An, useMemo as ve, useCallback as Q, useId as ke, useRef as oe } from "react";
import { jsx as n, Fragment as ne, jsxs as f } from "react/jsx-runtime";
import { createPortal as Xe } from "react-dom";
const bn = {
  /** 0–639px */
  Mobile: 0,
  /** 640–1023px */
  Tablet: 640,
  /** 1024px+ */
  Desktop: 1024
};
function hn(e) {
  return e >= bn.Desktop ? "desktop" : e >= bn.Tablet ? "tablet" : "mobile";
}
function Ce() {
  const [e, t] = H(
    () => typeof window < "u" ? hn(window.innerWidth) : "desktop"
  );
  return G(() => {
    const r = () => t(hn(window.innerWidth));
    return window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []), e;
}
function Rn(e, t) {
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
function P(e) {
  const t = Ce();
  return Rn(e, t);
}
const ye = (e) => {
  if (e !== void 0)
    return Array.isArray(e) ? e.join(" ") : e;
}, S = M(
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
    marginBlockEnd: m,
    marginInline: h,
    marginInlineStart: g,
    marginInlineEnd: y,
    backgroundColor: x,
    borderRadius: X,
    borderColor: C,
    borderSide: F,
    borderWidth: L = "1px",
    overflow: R,
    elevation: T,
    width: O,
    maxWidth: $,
    height: k,
    minHeight: B,
    maxHeight: N,
    minWidth: _,
    display: j,
    alignItems: K,
    justifyContent: q,
    alignSelf: E,
    flexDirection: V,
    flexWrap: J,
    flex: U,
    flexGrow: se,
    flexShrink: re,
    gap: ee,
    position: Z,
    inset: ce,
    top: le,
    right: ge,
    bottom: ze,
    left: Te,
    zIndex: Ae,
    color: Re,
    opacity: Ne,
    cursor: $e,
    whiteSpace: We,
    pointerEvents: Fe,
    background: Oe,
    border: He,
    boxShadow: je,
    transition: Pe,
    transform: Ve,
    aspectRatio: _e,
    filter: Ye,
    backdropFilter: Ge,
    style: Bn,
    children: Dn,
    ...En
  }, zn) => {
    const Ke = ye(P(t)), Ue = ye(P(r)), qe = P(l), Je = P(o), Ze = ye(P(a)), Qe = P(d), en = P(s), nn = ye(P(c)), tn = ye(P(b)), rn = P(u), ln = P(m), on = ye(P(h)), an = P(g), sn = P(y), dn = P(j), cn = P(K), un = P(q), pn = P(V), me = C ? `${L} solid ${C}` : void 0, fe = {};
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
    const Tn = {
      ...Ke && { padding: Ke },
      ...Ue && { paddingBlock: Ue },
      ...qe && { paddingBlockStart: qe },
      ...Je && { paddingBlockEnd: Je },
      ...Ze && { paddingInline: Ze },
      ...Qe && { paddingInlineStart: Qe },
      ...en && { paddingInlineEnd: en },
      ...nn && { margin: nn },
      ...tn && { marginBlock: tn },
      ...rn && { marginBlockStart: rn },
      ...ln && { marginBlockEnd: ln },
      ...on && { marginInline: on },
      ...an && { marginInlineStart: an },
      ...sn && { marginInlineEnd: sn },
      ...x && { backgroundColor: x },
      ...X && { borderRadius: X },
      ...fe,
      ...R && { overflow: R },
      ...T && { boxShadow: T },
      ...O !== void 0 && { width: O },
      ...$ && { maxWidth: $, marginInline: "auto" },
      ...k !== void 0 && { height: k },
      ...B !== void 0 && { minHeight: B },
      ...N !== void 0 && { maxHeight: N },
      ..._ !== void 0 && { minWidth: _ },
      ...dn && { display: dn },
      ...cn && { alignItems: cn },
      ...un && { justifyContent: un },
      ...E && { alignSelf: E },
      ...pn && { flexDirection: pn },
      ...J && { flexWrap: J },
      ...U !== void 0 && { flex: U },
      ...se !== void 0 && { flexGrow: se },
      ...re !== void 0 && { flexShrink: re },
      ...ee && { gap: ee },
      ...Z && { position: Z },
      ...ce !== void 0 && { inset: ce },
      ...le !== void 0 && { top: le },
      ...ge !== void 0 && { right: ge },
      ...ze !== void 0 && { bottom: ze },
      ...Te !== void 0 && { left: Te },
      ...Ae !== void 0 && { zIndex: Ae },
      ...Re && { color: Re },
      ...Ne !== void 0 && { opacity: Ne },
      ...$e && { cursor: $e },
      ...We && { whiteSpace: We },
      ...Fe && { pointerEvents: Fe },
      ...Oe && { background: Oe },
      ...He && { border: He },
      ...je && { boxShadow: je },
      ...Pe && { transition: Pe },
      ...Ve && { transform: Ve },
      ..._e !== void 0 && { aspectRatio: _e },
      ...Ye && { filter: Ye },
      ...Ge && { backdropFilter: Ge },
      ...Bn
    };
    return ae.createElement(
      e,
      { ...En, ref: zn, style: Tn },
      Dn
    );
  }
);
S.displayName = "Box";
const Se = ["mobile", "tablet", "desktop"];
function Nn(e, t) {
  return Se.indexOf(e) >= Se.indexOf(t);
}
function $n(e, t) {
  return Se.indexOf(e) < Se.indexOf(t);
}
function jr({ on: e, above: t, below: r, children: l }) {
  const o = Ce();
  return e != null ? (Array.isArray(e) ? e : [e]).includes(o) ? /* @__PURE__ */ n(ne, { children: l }) : null : t != null ? Nn(o, t) ? /* @__PURE__ */ n(ne, { children: l }) : null : r != null ? $n(o, r) ? /* @__PURE__ */ n(ne, { children: l }) : null : /* @__PURE__ */ n(ne, { children: l });
}
const we = ["mobile", "tablet", "desktop"];
function Wn(e, t) {
  return we.indexOf(e) >= we.indexOf(t);
}
function Fn(e, t) {
  return we.indexOf(e) < we.indexOf(t);
}
function Pr({ on: e, above: t, below: r, children: l }) {
  const o = Ce();
  return e != null ? (Array.isArray(e) ? e : [e]).includes(o) ? null : /* @__PURE__ */ n(ne, { children: l }) : t != null ? Wn(o, t) ? null : /* @__PURE__ */ n(ne, { children: l }) : r != null ? Fn(o, r) ? null : /* @__PURE__ */ n(ne, { children: l }) : /* @__PURE__ */ n(ne, { children: l });
}
const gn = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch"
}, Y = M(
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
  }, m) => {
    const g = {
      display: "flex",
      flexDirection: "column",
      gap: P(t ?? "0"),
      ...r && { alignItems: gn[r] },
      ...l && !o && { justifyContent: gn[l] },
      ...o && { justifyContent: o },
      ...a === "fill" && { flex: "1 1 auto" },
      ...d && { marginBlockStart: d },
      ...s && { marginBlockEnd: s },
      ...c
    };
    return ae.createElement(
      e,
      { ...u, ref: m, style: g },
      b
    );
  }
);
Y.displayName = "Stack";
const mn = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
  baseline: "baseline"
}, W = M(
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
    borderRadius: m,
    overflow: h,
    elevation: g,
    minWidth: y,
    style: x,
    children: X,
    ...C
  }, F) => {
    const L = P(t ?? "0"), [R, T] = Array.isArray(L) ? [L[0], L[1]] : [L, L], O = {
      display: "flex",
      flexDirection: "row",
      columnGap: T,
      rowGap: r ?? R,
      ...l && { alignItems: mn[l] },
      ...o && !a && { justifyContent: mn[o] },
      ...a && { justifyContent: a },
      ...d && { flexWrap: "wrap" },
      ...c === "fill" && { flex: "1 1 auto" },
      ...b && { marginBlockStart: b },
      ...u && { marginBlockEnd: u },
      ...m && { borderRadius: m },
      ...h && { overflow: h },
      ...g && { boxShadow: g },
      ...y !== void 0 && { minWidth: y },
      ...x
    };
    let $ = X;
    if (s) {
      const k = ae.Children.toArray(X).filter(Boolean);
      $ = k.map((B, N) => /* @__PURE__ */ f(An, { children: [
        B,
        N < k.length - 1 && /* @__PURE__ */ n("span", { "aria-hidden": "true", children: s })
      ] }, N));
    }
    return ae.createElement(
      e,
      { ...C, ref: F, style: O },
      $
    );
  }
);
W.displayName = "Inline";
const D = M(
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
    clamp: m,
    truncate: h,
    noWrap: g,
    noShrink: y,
    style: x,
    children: X,
    ...C
  }, F) => {
    const L = {
      ...t && { fontSize: t },
      ...r && { fontWeight: r },
      ...l && { color: l },
      ...o && { fontFamily: o },
      ...a && { letterSpacing: a },
      ...d && { textAlign: d },
      ...s && { textTransform: s },
      ...c !== void 0 && { lineHeight: c },
      ...b !== void 0 && { opacity: b },
      ...u && { fontStyle: u },
      ...m !== void 0 && {
        display: "-webkit-box",
        WebkitLineClamp: m,
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
      ...g && !h && { whiteSpace: "nowrap" },
      ...y && { flexShrink: 0 },
      ...x
    };
    return ae.createElement(
      e,
      { ...C, ref: F, style: L },
      X
    );
  }
);
D.displayName = "Text";
function On(e) {
  if (e !== void 0)
    return typeof e == "number" ? `repeat(${e}, 1fr)` : e.map((t) => `${t}fr`).join(" ");
}
const kn = M(
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
    ...m
  }, h) => {
    const g = P(t ?? 1), y = P(r ?? "0"), x = {
      display: "grid",
      gridTemplateColumns: On(g),
      gap: y,
      ...l && { rowGap: l },
      ...o && { marginBlockStart: o },
      ...a && { marginBlockEnd: a },
      ...d && { borderRadius: d },
      ...s && { overflow: s },
      ...c && { boxShadow: c },
      ...b
    };
    return ae.createElement(
      e,
      { ...m, ref: h, style: x },
      u
    );
  }
);
kn.displayName = "Grid";
const he = M(
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
    alignSelf: m,
    style: h,
    children: g,
    ...y
  }, x) => {
    const X = {
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
      ...m && { alignSelf: m },
      ...h
    };
    return /* @__PURE__ */ n("a", { ref: x, style: X, ...y, children: g });
  }
);
he.displayName = "Anchor";
const Le = M(
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
Le.displayName = "Image";
const Me = (e) => {
  if (e !== void 0)
    return Array.isArray(e) ? e.join(" ") : e;
}, Hn = {
  start: "flex-start",
  center: "center",
  end: "flex-end"
}, de = M(
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
    borderSide: m = "all",
    size: h,
    weight: g,
    letterSpacing: y,
    textTransform: x,
    fontFamily: X,
    gap: C,
    padding: F,
    paddingBlock: L,
    paddingInline: R,
    borderRadius: T,
    width: O,
    align: $ = "center",
    label: k,
    iconStart: B,
    iconEnd: N,
    className: _,
    style: j,
    children: K,
    ...q
  }, E) => {
    const V = {};
    e && (V["--bbui-btn-bg"] = e), t && (V["--bbui-btn-bg-hover"] = t), r && (V["--bbui-btn-bg-pressed"] = r), o && (V["--bbui-btn-color"] = o), a && (V["--bbui-btn-color-hover"] = a), d && (V["--bbui-btn-color-pressed"] = d), s && (V["--bbui-btn-border"] = s), c && (V["--bbui-btn-border-hover"] = c), b && (V["--bbui-btn-border-pressed"] = b);
    const J = s ? `${u} solid var(--bbui-btn-border)` : void 0, U = {};
    if (J)
      switch (m) {
        case "top":
          U.borderTop = J;
          break;
        case "bottom":
          U.borderBottom = J;
          break;
        case "left":
          U.borderLeft = J;
          break;
        case "right":
          U.borderRight = J;
          break;
        case "all":
          U.border = J;
          break;
      }
    else
      U.border = "none";
    const se = Me(F), re = Me(L), ee = Me(R), Z = {
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: Hn[$],
      ...U,
      ...O !== void 0 && { width: O },
      ...l && { background: l },
      ...h && { fontSize: h },
      ...g && { fontWeight: g },
      ...y && { letterSpacing: y },
      ...x && { textTransform: x },
      ...X && { fontFamily: X },
      ...C && { gap: C },
      ...se && { padding: se },
      ...re && { paddingBlock: re },
      ...ee && { paddingInline: ee },
      ...T && { borderRadius: T },
      ...V,
      ...j
    }, ce = _ ? `bbui-button ${_}` : "bbui-button", le = k ?? K;
    return /* @__PURE__ */ n("button", { ref: E, className: ce, style: Z, ...q, children: B || N ? /* @__PURE__ */ f(ne, { children: [
      B,
      le,
      N
    ] }) : le });
  }
);
de.displayName = "Button";
const Ee = M(
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
Ee.displayName = "TextInput";
const jn = M(
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
jn.displayName = "Icon";
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
}, v = {
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
}, Pn = {
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
}, A = {
  Regular: 400,
  Medium: 500,
  Semibold: 600,
  Bold: 700,
  ExtraBold: 800,
  /** 900 — large display numbers */
  Black: 900
}, Xn = {
  Tighter: "-0.05em",
  Tight: "-0.025em",
  Normal: "0",
  Wide: "0.05em",
  Wider: "0.075em",
  /** 0.1em — uppercase labels */
  Widest: "0.1em"
}, Vr = {
  Normal: "normal",
  Italic: "italic",
  Oblique: "oblique"
}, _r = {
  None: "none",
  Uppercase: "uppercase",
  Lowercase: "lowercase",
  Capitalize: "capitalize"
}, Yr = {
  Block: "block",
  InlineBlock: "inline-block",
  Inline: "inline",
  Flex: "flex",
  InlineFlex: "inline-flex",
  Grid: "grid",
  InlineGrid: "inline-grid",
  None: "none"
}, Gr = {
  Start: "flex-start",
  Center: "center",
  End: "flex-end",
  Stretch: "stretch",
  Baseline: "baseline"
}, Kr = {
  Start: "flex-start",
  Center: "center",
  End: "flex-end",
  SpaceBetween: "space-between",
  SpaceAround: "space-around",
  SpaceEvenly: "space-evenly"
}, Ur = {
  Auto: "auto",
  Start: "flex-start",
  Center: "center",
  End: "flex-end",
  Stretch: "stretch",
  Baseline: "baseline"
}, qr = {
  Row: "row",
  Column: "column",
  RowReverse: "row-reverse",
  ColumnReverse: "column-reverse"
}, Jr = {
  NoWrap: "nowrap",
  Wrap: "wrap",
  WrapReverse: "wrap-reverse"
}, Zr = {
  Static: "static",
  Relative: "relative",
  Absolute: "absolute",
  Fixed: "fixed",
  Sticky: "sticky"
}, Qr = {
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
}, el = {
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
}, z = {
  Default: "var(--bbui-border-default)",
  Input: "var(--bbui-border-input)",
  Warning: "var(--bbui-border-warning)",
  Error: "var(--bbui-border-error)",
  Info: "var(--bbui-border-info)",
  Success: "var(--bbui-border-success)",
  Focus: "var(--bbui-color-primary)",
  Outline: "var(--bbui-border-outline)"
}, nl = {
  Thin: "1px",
  Medium: "2px",
  Thick: "4px",
  XThick: "8px"
}, tl = {
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
}, rl = {
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
}, ll = {
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
function Vn(e) {
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
function il(e) {
  return Vn(_n(e));
}
const ol = {
  correct: ue.Masters,
  partial: ue.Applies,
  incorrect: "var(--bbui-color-error)",
  skipped: "var(--bbui-color-subtlest)"
}, al = {
  up: ue.Masters,
  down: "var(--bbui-color-error)",
  unchanged: "var(--bbui-color-subtlest)"
}, sl = {
  Nova: "var(--bbui-persona-nova)",
  Maya: "var(--bbui-persona-maya)",
  Jordan: "var(--bbui-persona-jordan)",
  Custom: "var(--bbui-persona-custom)"
}, Yn = {
  default: { backgroundColor: v.NeutralBold, color: p.Default },
  success: { backgroundColor: v.Success, color: p.Inverse },
  warning: { backgroundColor: v.Warning, color: p.Warning },
  error: { backgroundColor: v.Error, color: p.Error },
  info: { backgroundColor: v.Info, color: p.Info },
  brand: { backgroundColor: v.Brand, color: p.Inverse },
  primaryTint: { backgroundColor: v.PrimaryTint, color: p.Brand },
  errorTint: { backgroundColor: v.ErrorTint, color: p.Error },
  warningTint: { backgroundColor: v.WarningTint, color: "#ea580c" },
  infoTint: { backgroundColor: v.InfoTint, color: "#2563eb" },
  accentTint: { backgroundColor: v.AccentTint, color: "#7c3aed" }
}, Cn = M(
  ({ variant: e = "default", uppercase: t = !1, style: r, children: l, ...o }, a) => {
    const d = Yn[e], s = {
      display: "inline-flex",
      alignItems: "center",
      lineHeight: 1,
      paddingBlock: i.XXSmall,
      paddingInline: t ? i.MediumLarge : i.Medium,
      borderRadius: I.Full,
      fontWeight: t ? A.Black : A.Medium,
      fontSize: t ? w.Micro : w.XXSmall,
      letterSpacing: t ? Xn.Wider : void 0,
      textTransform: t ? "uppercase" : void 0,
      ...d,
      ...r
    };
    return /* @__PURE__ */ n("span", { ref: a, style: s, ...o, children: l });
  }
);
Cn.displayName = "Badge";
const Gn = {
  compact: { block: i.XXSmall, inline: i.Small },
  comfortable: { block: i.XSmall, inline: i.Medium }
}, Kn = {
  default: { backgroundColor: v.NeutralBold, color: p.Default },
  success: { backgroundColor: v.Success, color: p.Inverse },
  warning: { backgroundColor: v.Warning, color: p.Warning },
  error: { backgroundColor: v.Error, color: p.Error },
  info: { backgroundColor: v.Info, color: p.Info },
  brand: { backgroundColor: v.Brand, color: p.Inverse },
  primaryTint: { backgroundColor: v.PrimaryTint, color: p.Brand },
  errorTint: { backgroundColor: v.ErrorTint, color: p.Error },
  warningTint: { backgroundColor: v.WarningTint, color: "#ea580c" },
  infoTint: { backgroundColor: v.InfoTint, color: "#2563eb" },
  accentTint: { backgroundColor: v.AccentTint, color: "#7c3aed" }
}, Un = M(
  ({
    selected: e,
    appearance: t = "filled",
    density: r = "compact",
    variant: l,
    fontWeight: o = A.Medium,
    fontSize: a,
    icon: d,
    showCheckWhenSelected: s = !1,
    onClick: c,
    disabled: b,
    style: u,
    children: m,
    ...h
  }, g) => {
    const y = c !== void 0 || e !== void 0, x = e === !0, X = a ?? (l ? w.XXSmall : w.XSmall), C = l ? { block: i.XXSmall, inline: i.XSmall } : Gn[r];
    let F, L;
    if (l) {
      const $ = Kn[l];
      F = $.backgroundColor, L = $.color;
    } else
      F = x ? v.Brand : t === "outlined" ? v.Transparent : v.Subtle, L = x ? p.OnBrand : p.Default;
    const R = !l && t === "outlined" && !x ? `1px solid ${z.Outline}` : "1px solid transparent", T = {
      display: "inline-flex",
      alignItems: "center",
      gap: i.XSmall,
      paddingBlock: C.block,
      paddingInline: C.inline,
      borderRadius: I.Full,
      backgroundColor: F,
      color: L,
      border: R,
      fontFamily: "inherit",
      fontWeight: o,
      fontSize: X,
      lineHeight: 1.2,
      cursor: y ? b ? "not-allowed" : "pointer" : "default",
      opacity: b ? 0.5 : 1,
      whiteSpace: "nowrap",
      width: "auto",
      flex: "0 0 auto",
      // Stop a flex parent (Stack/Inline with default align-items: stretch)
      // from stretching the chip to fill the cross-axis. Without this,
      // a <Chip> inside <Stack> renders edge-to-edge instead of fit-to-text.
      alignSelf: "flex-start",
      ...u
    }, O = s && x ? /* @__PURE__ */ n(
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
        ref: g,
        type: "button",
        "aria-pressed": e,
        disabled: b,
        onClick: c,
        style: T,
        ...h,
        children: [
          d,
          O,
          m
        ]
      }
    ) : /* @__PURE__ */ f(
      "span",
      {
        ref: g,
        style: T,
        ...h,
        children: [
          d,
          m
        ]
      }
    );
  }
);
Un.displayName = "Chip";
const fn = {
  sm: "4px",
  md: "12px",
  lg: "16px",
  xl: "24px"
}, qn = {
  none: "inset 0 0 0 0 rgba(255, 255, 255, 0)",
  xs: "inset 1px 1px 1px 0 rgba(255, 255, 255, 0.3), inset -1px -1px 1px 0 rgba(255, 255, 255, 0.3)",
  sm: "inset 2px 2px 2px 0 rgba(255, 255, 255, 0.35), inset -2px -2px 2px 0 rgba(255, 255, 255, 0.35)",
  md: "inset 3px 3px 3px 0 rgba(255, 255, 255, 0.45), inset -3px -3px 3px 0 rgba(255, 255, 255, 0.45)",
  lg: "inset 4px 4px 4px 0 rgba(255, 255, 255, 0.5), inset -4px -4px 4px 0 rgba(255, 255, 255, 0.5)",
  xl: "inset 6px 6px 6px 0 rgba(255, 255, 255, 0.55), inset -6px -6px 6px 0 rgba(255, 255, 255, 0.55)"
}, Jn = {
  none: "0 4px 4px rgba(0, 0, 0, 0.05), 0 0 12px rgba(0, 0, 0, 0.05)",
  xs: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 16px rgba(255, 255, 255, 0.05)",
  sm: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 24px rgba(255, 255, 255, 0.1)",
  md: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 32px rgba(255, 255, 255, 0.15)",
  lg: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 40px rgba(255, 255, 255, 0.2)",
  xl: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 48px rgba(255, 255, 255, 0.25)"
};
let Zn = 0;
const Qn = M(
  ({
    children: e,
    borderRadius: t = I.XLarge,
    blurIntensity: r = "xl",
    glowIntensity: l = "sm",
    shadowIntensity: o = "md",
    borderGradient: a,
    borderWidth: d = 1,
    width: s,
    height: c,
    style: b,
    ...u
  }, m) => {
    const h = ve(() => `bbui-liquid-glass-${++Zn}`, []), g = {
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
    return /* @__PURE__ */ f("div", { ref: m, style: g, ...u, children: [
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
            backdropFilter: `blur(${fn[r]})`,
            WebkitBackdropFilter: `blur(${fn[r]})`,
            filter: `url(#${h})`
          }
        }
      ),
      /* @__PURE__ */ n("div", { style: { ...y, zIndex: 1, boxShadow: Jn[l] } }),
      /* @__PURE__ */ n("div", { style: { ...y, zIndex: 2, boxShadow: qn[o] } }),
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
      /* @__PURE__ */ n("div", { style: { position: "relative", zIndex: 4 }, children: e })
    ] });
  }
);
Qn.displayName = "LiquidGlass";
const et = "40px", nt = "24px", Ie = "20px", yn = i.XXSmall, tt = M(
  ({ checked: e, defaultChecked: t = !1, onChange: r, label: l, style: o, ...a }, d) => {
    const [s, c] = H(t), b = e !== void 0, u = b ? e : s, m = Q(() => {
      const y = !u;
      b || c(y), r == null || r(y);
    }, [u, b, r]), h = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      width: et,
      height: nt,
      borderRadius: I.Full,
      backgroundColor: u ? v.Brand : v.Neutral,
      border: "none",
      cursor: "pointer",
      padding: 0,
      transition: "background-color 150ms ease",
      ...o
    }, g = {
      position: "absolute",
      width: Ie,
      height: Ie,
      borderRadius: I.Full,
      backgroundColor: v.Default,
      transition: "left 150ms ease",
      left: u ? `calc(100% - ${Ie} - ${yn})` : yn,
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
        onClick: m,
        style: h,
        ...a,
        children: /* @__PURE__ */ n("span", { style: g })
      }
    );
  }
);
tt.displayName = "Toggle";
const rt = M(
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
rt.displayName = "LinkButton";
const te = M(
  ({ label: e, size: t, color: r, backgroundColor: l, padding: o, style: a, children: d, ...s }, c) => {
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
        ref: c,
        type: "button",
        "aria-label": e,
        style: b,
        ...s,
        children: d
      }
    );
  }
);
te.displayName = "IconButton";
const lt = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64
}, it = {
  xsmall: "10px",
  small: "12px",
  medium: "14px",
  large: "16px",
  xlarge: "24px"
}, ot = {
  xsmall: 6,
  small: 8,
  medium: 10,
  large: 12,
  xlarge: 16
}, at = {
  online: "#22c55e",
  offline: "#bccbb9",
  busy: "#ba1a1a",
  focus: "#3b82f6"
};
function st(e) {
  var r;
  const t = e.trim().split(/\s+/);
  return t.length >= 2 ? (t[0][0] + t[t.length - 1][0]).toUpperCase() : (((r = t[0]) == null ? void 0 : r[0]) ?? "").toUpperCase();
}
const dt = M(
  ({
    src: e,
    name: t,
    size: r = "medium",
    appearance: l = "circle",
    status: o,
    fallbackBackground: a = v.NeutralBold,
    fallbackColor: d = p.Subtle
  }, s) => {
    const [c, b] = H(!1), u = lt[r], m = e && !c, h = t ? st(t) : "", g = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: u,
      height: u,
      borderRadius: l === "circle" ? I.Full : I.XLarge,
      overflow: "hidden",
      flexShrink: 0,
      ...m ? {} : { backgroundColor: a }
    }, y = ot[r], x = o ? {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: y,
      height: y,
      borderRadius: I.Full,
      backgroundColor: at[o],
      border: "2px solid #ffffff",
      boxSizing: "border-box"
    } : void 0;
    return /* @__PURE__ */ f("span", { ref: s, style: g, role: "img", "aria-label": t ?? "Avatar", children: [
      m ? /* @__PURE__ */ n(
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
            fontSize: it[r],
            fontWeight: A.Semibold,
            color: d,
            lineHeight: 1,
            userSelect: "none"
          },
          children: h
        }
      ),
      o && /* @__PURE__ */ n("span", { style: x })
    ] });
  }
);
dt.displayName = "Avatar";
const ct = {
  xsmall: 16,
  small: 24,
  medium: 32,
  large: 48,
  xlarge: 64
}, ut = {
  xsmall: 2,
  small: 2,
  medium: 3,
  large: 3,
  xlarge: 4
}, Ln = M(
  ({ size: e = "medium", label: t = "Loading", color: r = p.Brand }, l) => {
    const o = ke().replace(/:/g, ""), a = ct[e], d = ut[e], s = (a - d) / 2, c = 2 * Math.PI * s;
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
Ln.displayName = "Spinner";
const pt = M(
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
pt.displayName = "TextArea";
function bt(e) {
  return "options" in e;
}
const Mn = M(
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
    ...m
  }, h) => {
    const g = {
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
    return /* @__PURE__ */ f("select", { ref: h, style: g, ...m, children: [
      t && /* @__PURE__ */ n("option", { value: "", disabled: !0, hidden: !0, children: t }),
      e.map(
        (y) => bt(y) ? /* @__PURE__ */ n("optgroup", { label: y.label, children: y.options.map((x) => /* @__PURE__ */ n("option", { value: x.value, disabled: x.disabled, children: x.label }, x.value)) }, y.label) : /* @__PURE__ */ n("option", { value: y.value, disabled: y.disabled, children: y.label }, y.value)
      )
    ] });
  }
);
Mn.displayName = "Select";
const ht = {
  small: { box: "16px", font: w.XXSmall, gap: i.XSmall },
  medium: { box: "20px", font: w.XSmall, gap: i.Medium },
  large: { box: "24px", font: w.Small, gap: i.Medium }
}, gt = ({ size: e }) => /* @__PURE__ */ n(
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
), mt = M(
  ({ label: e, size: t = "medium", checked: r, disabled: l, style: o, id: a, ...d }, s) => {
    const c = ke(), b = a ?? c, u = ht[t], m = !!r, h = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: u.box,
      height: u.box,
      borderRadius: I.Small,
      flexShrink: 0,
      border: m ? "none" : `2px solid ${z.Outline}`,
      backgroundColor: m ? l ? p.Disabled : v.Brand : v.Transparent,
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
          /* @__PURE__ */ n("span", { style: h, "aria-hidden": "true", children: m && /* @__PURE__ */ n(gt, { size: `calc(${u.box} - 4px)` }) }),
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
mt.displayName = "Checkbox";
const ft = M(
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
ft.displayName = "Divider";
const yt = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z", clipRule: "evenodd" }) }), xt = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { d: "M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" }) }), vt = M(
  ({
    value: e,
    onChange: t,
    min: r = 0,
    max: l = 99,
    step: o = 1,
    disabled: a = !1,
    backgroundColor: d = v.Subtle,
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
          borderRadius: I.Large,
          padding: s
        },
        children: [
          /* @__PURE__ */ n(
            te,
            {
              label: "Decrease",
              onClick: () => b && t(e - o),
              disabled: a || !b,
              color: p.Brand,
              padding: i.XSmall,
              children: /* @__PURE__ */ n(yt, {})
            }
          ),
          /* @__PURE__ */ n(
            D,
            {
              as: "span",
              size: w.Medium,
              weight: A.Bold,
              color: p.Default,
              style: { minWidth: "32px", textAlign: "center" },
              children: e
            }
          ),
          /* @__PURE__ */ n(
            te,
            {
              label: "Increase",
              onClick: () => u && t(e + o),
              disabled: a || !u,
              color: p.Brand,
              padding: i.XSmall,
              children: /* @__PURE__ */ n(xt, {})
            }
          )
        ]
      }
    );
  }
);
vt.displayName = "Stepper";
const St = () => /* @__PURE__ */ n(
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
), wt = () => /* @__PURE__ */ n(
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
), kt = () => /* @__PURE__ */ n(
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
), Xt = M(
  ({
    logo: e,
    navigation: t = [],
    cta: r,
    linkColor: l = p.Subtle,
    ctaBackgroundColor: o = v.Dark,
    ctaColor: a = p.Inverse,
    ctaWeight: d = 500,
    ctaBorderRadius: s = I.Full,
    paddingInline: c = i.XXXLarge,
    paddingBlock: b = i.XLarge,
    linkGap: u = i.XXLarge,
    logoGap: m = i.Size3_5,
    mobileMenuBackground: h = v.Default,
    mobileMenuBorderColor: g = z.Default,
    mobileMenuBorderRadius: y = I.Large,
    mobileBreakpoint: x = 768
  }, X) => {
    const [C, F] = H(!1), [L, R] = H(!1);
    G(() => {
      const B = () => R(window.innerWidth < x);
      return B(), window.addEventListener("resize", B), () => window.removeEventListener("resize", B);
    }, [x]);
    const T = Q((B) => {
      B.target.closest("[data-navbar-menu]") || F(!1);
    }, []);
    G(() => (document.addEventListener("click", T), () => document.removeEventListener("click", T)), [T]);
    const O = ae.isValidElement(e) ? e : /* @__PURE__ */ n(
      Le,
      {
        src: e.src,
        alt: e.alt ?? "Logo",
        style: {
          width: e.width ?? 120,
          height: e.height ?? "auto"
        }
      }
    ), $ = /* @__PURE__ */ n(ne, { children: t.map((B, N) => /* @__PURE__ */ n(
      he,
      {
        href: B.path,
        color: l,
        display: "block",
        style: { textDecoration: "none" },
        children: B.title
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
          r.icon ?? /* @__PURE__ */ n(kt, {})
        ] })
      }
    ) : null;
    return L ? /* @__PURE__ */ f(S, { as: "header", ref: X, "data-navbar-menu": !0, children: [
      /* @__PURE__ */ n(
        S,
        {
          as: "nav",
          paddingInline: i.Large,
          paddingBlock: b,
          children: /* @__PURE__ */ f(W, { alignBlock: "center", spread: "space-between", children: [
            /* @__PURE__ */ n(S, { children: O }),
            /* @__PURE__ */ n(
              de,
              {
                onClick: () => F(!C),
                style: {
                  background: "none",
                  padding: 0,
                  color: p.Subtle
                },
                children: C ? /* @__PURE__ */ n(wt, {}) : /* @__PURE__ */ n(St, {})
              }
            )
          ] })
        }
      ),
      C && /* @__PURE__ */ n(
        S,
        {
          backgroundColor: h,
          elevation: be.Raised,
          borderRadius: y,
          borderColor: g,
          borderSide: "all",
          padding: i.Large,
          style: { margin: i.Medium },
          children: /* @__PURE__ */ f("nav", { children: [
            /* @__PURE__ */ n("ul", { style: { listStyle: "none", padding: 0, margin: 0 }, children: t.map((B, N) => /* @__PURE__ */ n("li", { style: { paddingBlock: i.MediumLarge }, children: /* @__PURE__ */ n(
              he,
              {
                href: B.path,
                color: l,
                display: "block",
                style: { textDecoration: "none" },
                children: B.title
              }
            ) }, N)) }),
            k && /* @__PURE__ */ n(S, { marginBlockStart: i.XXLarge, children: k })
          ] })
        }
      )
    ] }) : /* @__PURE__ */ n(S, { as: "header", ref: X, style: { width: "100%" }, children: /* @__PURE__ */ n(
      S,
      {
        as: "nav",
        paddingInline: c,
        paddingBlock: b,
        style: { width: "100%" },
        children: /* @__PURE__ */ f(W, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ n(S, { children: O }),
          /* @__PURE__ */ f(
            W,
            {
              space: u,
              alignBlock: "center",
              grow: "fill",
              style: { marginInlineStart: m },
              children: [
                /* @__PURE__ */ n(
                  W,
                  {
                    space: u,
                    alignBlock: "center",
                    grow: "fill",
                    alignInline: "center",
                    children: $
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
Xt.displayName = "Navbar";
const xn = () => /* @__PURE__ */ n(
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
), Ct = M(
  ({
    title: e,
    subtitle: t,
    badge: r,
    actions: l = [],
    image: o,
    children: a,
    titleSize: d = w.XXXLarge,
    titleSizeLarge: s = w.Huge,
    titleWeight: c = A.ExtraBold,
    titleColor: b = p.Default,
    subtitleSize: u = w.Small,
    subtitleColor: m = p.Subtlest,
    primaryCtaBackground: h = v.Dark,
    primaryCtaColor: g = p.Inverse,
    primaryCtaBorderRadius: y = I.Full,
    primaryCtaWeight: x = 500,
    secondaryCtaColor: X = p.Subtle,
    secondaryCtaWeight: C = 500,
    ctaGap: F = i.MediumLarge,
    paddingBlock: L = i.Size7,
    paddingInline: R = i.XXXLarge,
    contentGap: T = i.XHuge,
    textGap: O = i.XLarge,
    textMaxWidth: $ = "576px",
    gradient: k,
    breakpoint: B = 768
  }, N) => {
    const [_, j] = H(!1);
    G(() => {
      const Z = () => j(window.innerWidth >= B);
      return Z(), window.addEventListener("resize", Z), () => window.removeEventListener("resize", Z);
    }, [B]);
    const K = (k == null ? void 0 : k.enabled) !== !1, q = (k == null ? void 0 : k.css) ?? "linear-gradient(143.6deg, rgba(192,132,252,0) 20.79%, rgba(232,121,249,0.26) 40.92%, rgba(204,171,238,0) 70.35%)", E = (k == null ? void 0 : k.height) ?? "580px", V = (r == null ? void 0 : r.borderColor) ?? z.Default, J = r ? /* @__PURE__ */ n(
      he,
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
              color: r.labelColor ?? p.Inverse,
              style: {
                backgroundColor: r.labelBackgroundColor ?? v.Accent,
                borderRadius: I.Full,
                padding: `${i.XSmall} ${i.MediumLarge}`
              },
              children: r.label
            }
          ),
          /* @__PURE__ */ f(W, { space: i.XXSmall, alignBlock: "center", children: [
            /* @__PURE__ */ n(D, { as: "span", size: w.XSmall, children: r.text }),
            r.icon ?? /* @__PURE__ */ n(xn, {})
          ] })
        ] })
      }
    ) : null, U = l.length > 0 ? /* @__PURE__ */ n(W, { space: F, alignBlock: "center", shouldWrap: !0, children: l.map((Z, ce) => {
      const le = (Z.variant ?? (ce === 0 ? "primary" : "secondary")) === "primary", ge = le ? x : C;
      return /* @__PURE__ */ n(
        he,
        {
          href: Z.path,
          backgroundColor: le ? h : void 0,
          color: le ? g : X,
          paddingBlock: i.Medium,
          paddingInline: i.Large,
          borderRadius: le ? y : void 0,
          weight: ge,
          display: "inline-block",
          style: { textDecoration: "none" },
          children: /* @__PURE__ */ f(W, { space: i.XSmall, alignBlock: "center", children: [
            /* @__PURE__ */ n(
              D,
              {
                as: "span",
                color: le ? g : X,
                weight: ge,
                children: Z.label
              }
            ),
            Z.icon ?? /* @__PURE__ */ n(xn, {})
          ] })
        },
        ce
      );
    }) }) : null, re = /* @__PURE__ */ f(
      Y,
      {
        space: O,
        style: { maxWidth: $, flexShrink: 0 },
        children: [
          J,
          /* @__PURE__ */ n(
            D,
            {
              as: "h1",
              size: _ ? s : d,
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
              color: m,
              size: u,
              lineHeight: 1.6,
              children: t
            }
          ),
          a,
          U
        ]
      }
    ), ee = o && _ ? /* @__PURE__ */ n(S, { style: { flex: "1 1 0%", minWidth: 0 }, children: /* @__PURE__ */ n(
      Le,
      {
        src: o.src,
        alt: o.alt ?? "",
        style: { maxWidth: o.maxWidth ?? "576px" }
      }
    ) }) : null;
    return /* @__PURE__ */ f(S, { as: "section", ref: N, style: { position: "relative" }, children: [
      K && /* @__PURE__ */ n(
        "div",
        {
          "aria-hidden": "true",
          style: {
            position: "absolute",
            inset: 0,
            height: E,
            background: q,
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
          paddingInline: R,
          paddingBlock: L,
          children: _ ? /* @__PURE__ */ f(W, { space: T, alignBlock: "center", children: [
            re,
            ee
          ] }) : /* @__PURE__ */ n(Y, { space: T, children: re })
        }
      )
    ] });
  }
);
Ct.displayName = "HeroSection";
const Lt = M(
  ({
    padding: e = i.Large,
    backgroundColor: t = v.Default,
    borderRadius: r = I.XXLarge,
    borderColor: l = z.Default,
    elevation: o = be.Ambient,
    accentColor: a,
    accentWidth: d = "8px",
    header: s,
    footer: c,
    children: b
  }, u) => /* @__PURE__ */ n(
    S,
    {
      ref: u,
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
      children: /* @__PURE__ */ f(Y, { children: [
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
Lt.displayName = "Card";
const Mt = M(
  ({
    label: e,
    helperText: t,
    errorText: r,
    id: l,
    labelColor: o = p.Default,
    labelSize: a = w.XSmall,
    labelWeight: d = A.Medium,
    labelTextTransform: s,
    labelLetterSpacing: c,
    inputBackground: b = v.Default,
    inputBorderColor: u = z.Input,
    inputBorderRadius: m = I.Medium,
    inputBorderSide: h = "all",
    inputPadding: g = i.Medium,
    startAdornment: y,
    endAdornment: x,
    name: X,
    type: C,
    placeholder: F,
    value: L,
    defaultValue: R,
    disabled: T,
    readOnly: O,
    required: $,
    autoFocus: k,
    autoComplete: B,
    onChange: N,
    onBlur: _,
    onFocus: j
  }, K) => {
    const q = ke(), E = l ?? q, V = `${E}-helper`, J = `${E}-error`, U = !!r, se = U ? z.Error : u, re = h === "bottom", ee = re || !!(y || x), Z = /* @__PURE__ */ n(
      Ee,
      {
        ref: K,
        id: E,
        name: X,
        type: C,
        placeholder: F,
        value: L,
        defaultValue: R,
        disabled: T,
        readOnly: O,
        required: $,
        autoFocus: k,
        autoComplete: B,
        onChange: N,
        onBlur: _,
        onFocus: j,
        backgroundColor: ee ? "transparent" : b,
        borderColor: ee ? void 0 : se,
        borderRadius: ee ? void 0 : m,
        padding: g,
        style: {
          width: "100%",
          ...ee ? { flex: "1 1 auto", minWidth: 0 } : {}
        },
        "aria-describedby": U ? J : t ? V : void 0,
        "aria-invalid": U || void 0
      }
    ), ce = ee ? /* @__PURE__ */ f("div", { style: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      backgroundColor: b,
      ...re ? { borderBottom: `2px solid ${se}` } : { border: `1px solid ${se}`, borderRadius: m }
    }, children: [
      y,
      Z,
      x
    ] }) : Z;
    return /* @__PURE__ */ f(Y, { space: i.XSmall, children: [
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
      U && /* @__PURE__ */ n(D, { as: "span", size: w.XXSmall, color: p.Error, id: J, children: r }),
      !U && t && /* @__PURE__ */ n(D, { as: "span", size: w.XXSmall, color: p.Subtle, id: V, children: t })
    ] });
  }
);
Mt.displayName = "TextField";
const It = {
  info: {
    bg: v.InfoTint,
    text: p.Info,
    border: z.Info
  },
  success: {
    bg: v.PrimaryTint,
    text: p.Success,
    border: z.Success
  },
  warning: {
    bg: v.WarningTint,
    text: p.Warning,
    border: z.Warning
  },
  error: {
    bg: v.ErrorTint,
    text: p.Error,
    border: z.Error
  }
}, Bt = () => /* @__PURE__ */ n(
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
), Dt = M(
  ({ variant: e = "info", icon: t, dismissible: r, onDismiss: l, children: o }, a) => {
    const d = It[e];
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
          zIndex: pe.Banner
        },
        children: /* @__PURE__ */ f(W, { space: i.Medium, alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ f(W, { space: i.Medium, alignBlock: "center", grow: "fill", children: [
            t && /* @__PURE__ */ n(S, { style: { color: d.text, flexShrink: 0 }, children: t }),
            /* @__PURE__ */ n(D, { as: "span", size: w.XSmall, color: d.text, children: o })
          ] }),
          r && /* @__PURE__ */ n(
            te,
            {
              label: "Dismiss",
              onClick: l,
              color: d.text,
              padding: i.XXSmall,
              children: /* @__PURE__ */ n(Bt, {})
            }
          )
        ] })
      }
    );
  }
);
Dt.displayName = "Banner";
const In = M(
  ({
    sections: e,
    activeId: t,
    onSelect: r,
    activeColor: l = p.Brand,
    activeBackground: o = v.Subtle
  }, a) => /* @__PURE__ */ n(Y, { ref: a, as: "nav", space: i.Small, children: e.map((d, s) => /* @__PURE__ */ f(Y, { space: i.XXSmall, children: [
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
    /* @__PURE__ */ n(Y, { as: "ul", style: { listStyle: "none", padding: 0, margin: 0 }, children: d.items.map((c) => {
      const b = c.id === t;
      return /* @__PURE__ */ n("li", { children: /* @__PURE__ */ n(
        de,
        {
          disabled: c.disabled,
          onClick: () => r == null ? void 0 : r(c.id),
          borderRadius: I.Medium,
          color: c.disabled ? p.Disabled : b ? l : p.Default,
          backgroundColor: b ? o : v.Transparent,
          paddingBlock: i.Medium,
          paddingInline: i.MediumLarge,
          style: {
            width: "100%",
            fontSize: w.XSmall,
            textAlign: "left",
            cursor: c.disabled ? "default" : "pointer"
          },
          children: /* @__PURE__ */ f(W, { space: i.Medium, alignBlock: "center", children: [
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
In.displayName = "Menu";
const Et = M(
  ({
    tabs: e,
    activeId: t,
    defaultActiveId: r,
    onChange: l,
    variant: o = "underline",
    activeColor: a = p.Brand,
    inactiveColor: d = p.Subtle,
    pillBackground: s = v.Subtle,
    activePillBackground: c = v.Default,
    panelPadding: b = i.Large
  }, u) => {
    var F;
    const [m, h] = H(
      r ?? ((F = e[0]) == null ? void 0 : F.id)
    ), g = t !== void 0, y = g ? t : m, x = (L) => {
      g || h(L), l == null || l(L);
    }, X = e.find((L) => L.id === y);
    return /* @__PURE__ */ f(S, { ref: u, children: [
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
          children: e.map((L) => {
            const R = L.id === y;
            return /* @__PURE__ */ n(
              de,
              {
                role: "tab",
                "aria-selected": R,
                "aria-controls": `tabpanel-${L.id}`,
                id: `tab-${L.id}`,
                disabled: L.disabled,
                onClick: () => x(L.id),
                paddingBlock: i.Medium,
                paddingInline: i.XXLarge,
                borderRadius: I.XLarge,
                color: R ? p.Default : L.disabled ? p.Disabled : d,
                backgroundColor: R ? c : v.Transparent,
                style: {
                  fontWeight: R ? A.Bold : A.Medium,
                  fontSize: w.XSmall,
                  boxShadow: R ? be.Raised : "none",
                  cursor: L.disabled ? "default" : "pointer"
                },
                children: L.label
              },
              L.id
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
            borderBottom: `1px solid ${z.Default}`
          },
          children: e.map((L) => {
            const R = L.id === y;
            return /* @__PURE__ */ n(
              de,
              {
                role: "tab",
                "aria-selected": R,
                "aria-controls": `tabpanel-${L.id}`,
                id: `tab-${L.id}`,
                disabled: L.disabled,
                onClick: () => x(L.id),
                paddingBlock: i.Medium,
                paddingInline: i.Large,
                borderRadius: I.None,
                color: R ? a : L.disabled ? p.Disabled : d,
                style: {
                  background: "none",
                  fontWeight: R ? A.Semibold : A.Regular,
                  fontSize: w.XSmall,
                  borderBottom: R ? `2px solid ${a}` : "2px solid transparent",
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
      X && /* @__PURE__ */ n(
        S,
        {
          role: "tabpanel",
          id: `tabpanel-${X.id}`,
          "aria-labelledby": `tab-${X.id}`,
          padding: b,
          children: X.content
        }
      )
    ] });
  }
);
Et.displayName = "Tabs";
const zt = M(
  ({
    title: e,
    subtitle: t,
    breadcrumbs: r,
    actions: l,
    titleSize: o = w.XLarge,
    titleWeight: a = A.Bold,
    titleColor: d = p.Default,
    subtitleColor: s = p.Subtle,
    breadcrumbLinkColor: c = p.Link,
    borderColor: b = z.Default,
    paddingBlock: u = i.Large
  }, m) => /* @__PURE__ */ n(
    S,
    {
      ref: m,
      as: "header",
      paddingBlock: u,
      style: {
        borderBottom: `1px solid ${b}`
      },
      children: /* @__PURE__ */ f(Y, { space: i.Medium, children: [
        r && r.length > 0 && /* @__PURE__ */ n(W, { space: i.XSmall, alignBlock: "center", children: r.map((h, g) => /* @__PURE__ */ f(ae.Fragment, { children: [
          g > 0 && /* @__PURE__ */ n(D, { as: "span", color: p.Disabled, size: w.XSmall, children: "/" }),
          h.href ? /* @__PURE__ */ n(
            he,
            {
              href: h.href,
              color: c,
              size: w.XSmall,
              style: { textDecoration: "none" },
              children: h.label
            }
          ) : /* @__PURE__ */ n(D, { as: "span", size: w.XSmall, color: p.Subtlest, children: h.label })
        ] }, g)) }),
        /* @__PURE__ */ f(W, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ f(Y, { space: i.XXSmall, children: [
            /* @__PURE__ */ n(D, { as: "h1", size: o, weight: a, color: d, children: e }),
            t && /* @__PURE__ */ n(D, { as: "p", size: w.XSmall, color: s, children: t })
          ] }),
          l && /* @__PURE__ */ n(W, { space: i.Medium, alignBlock: "center", children: l })
        ] })
      ] })
    }
  )
);
zt.displayName = "Header";
const Tt = {
  XSmall: "320px",
  Small: "416px",
  Medium: "512px",
  Large: "704px",
  XLarge: "960px",
  Full: "min(96vw, 1440px)"
}, At = () => /* @__PURE__ */ n(
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
), Rt = M(
  ({ open: e, onClose: t, title: r, children: l, footer: o, size: a = Tt.Medium }, d) => {
    const s = Q(
      (c) => {
        c.key === "Escape" && t();
      },
      [t]
    );
    return G(() => {
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
            backgroundColor: v.Overlay
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
              backgroundColor: v.Default,
              borderRadius: I.XLarge,
              elevation: be.Overlay,
              overflow: "hidden",
              style: {
                width: "100%",
                maxWidth: a,
                maxHeight: "85vh",
                display: "flex",
                flexDirection: "column"
              },
              children: /* @__PURE__ */ f(Y, { children: [
                r && /* @__PURE__ */ n(
                  S,
                  {
                    padding: i.Large,
                    style: { borderBottom: `1px solid ${z.Default}` },
                    children: /* @__PURE__ */ f(W, { alignBlock: "center", spread: "space-between", children: [
                      /* @__PURE__ */ n(D, { as: "h2", size: w.Large, weight: A.Semibold, color: p.Default, children: r }),
                      /* @__PURE__ */ n(te, { label: "Close", onClick: t, color: p.Subtle, children: /* @__PURE__ */ n(At, {}) })
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
Rt.displayName = "Modal";
const Be = 200, Nt = {
  start: "flex-start",
  center: "center",
  end: "flex-end"
};
function $t({
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
  const [b, u] = H(e), [m, h] = H(!1), g = P(l), y = P(d);
  if (G(() => {
    if (e) {
      u(!0);
      const C = requestAnimationFrame(() => h(!0));
      return () => cancelAnimationFrame(C);
    }
    h(!1);
    const X = window.setTimeout(() => u(!1), Be);
    return () => window.clearTimeout(X);
  }, [e]), G(() => {
    if (!e) return;
    const X = (C) => {
      C.key === "Escape" && t();
    };
    return document.addEventListener("keydown", X), () => document.removeEventListener("keydown", X);
  }, [e, t]), !b) return null;
  const x = typeof g == "number" ? `${g}px` : g;
  return Xe(
    /* @__PURE__ */ f(
      S,
      {
        onClick: t,
        style: {
          position: "fixed",
          top: x,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: pe.Modal,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          opacity: m ? 1 : 0,
          transition: `opacity ${Be}ms ease`
        },
        children: [
          /* @__PURE__ */ n(
            S,
            {
              onClick: (X) => X.stopPropagation(),
              onMouseLeave: c ? t : void 0,
              backgroundColor: v.Default,
              padding: o,
              style: {
                display: "flex",
                justifyContent: Nt[y],
                width: "100%",
                transform: m ? "translateY(0)" : "translateY(-12px)",
                transition: `transform ${Be + 50}ms ease`
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
$t.displayName = "Drawer";
const Wt = M(
  ({ trigger: e, sections: t, activeId: r, onSelect: l }, o) => {
    const [a, d] = H(!1), s = oe(null), c = () => d((h) => !h), b = (h) => {
      l == null || l(h), d(!1);
    }, u = Q((h) => {
      h.key === "Escape" && d(!1);
    }, []), m = Q((h) => {
      s.current && !s.current.contains(h.target) && d(!1);
    }, []);
    return G(() => {
      if (a)
        return document.addEventListener("keydown", u), document.addEventListener("mousedown", m), () => {
          document.removeEventListener("keydown", u), document.removeEventListener("mousedown", m);
        };
    }, [a, u, m]), /* @__PURE__ */ f(
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
              onClick: c,
              alignBlock: "center",
              children: e
            }
          ),
          a && /* @__PURE__ */ n(
            S,
            {
              backgroundColor: v.Default,
              borderColor: z.Default,
              borderSide: "all",
              borderRadius: I.Large,
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
                In,
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
Wt.displayName = "DropdownMenu";
const Ft = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), Ot = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), Ht = M(
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
    activeBackground: u = v.Subtle,
    borderColor: m = z.Default
  }, h) => /* @__PURE__ */ f(
    S,
    {
      ref: h,
      as: "aside",
      backgroundColor: v.Default,
      style: {
        width: a ? c : s,
        height: "100vh",
        position: "sticky",
        top: 0,
        borderRight: `1px solid ${m}`,
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
            style: { borderBottom: `1px solid ${m}` },
            children: l
          }
        ),
        /* @__PURE__ */ n(
          Y,
          {
            space: i.Small,
            grow: "fill",
            style: { padding: i.Medium, overflow: "auto" },
            children: e.map((g, y) => /* @__PURE__ */ f(Y, { space: i.XXSmall, children: [
              g.title && !a && /* @__PURE__ */ n(S, { paddingInline: i.Medium, paddingBlock: i.XSmall, children: /* @__PURE__ */ n(
                D,
                {
                  as: "span",
                  size: w.XXSmall,
                  weight: 600,
                  color: p.Subtlest,
                  textTransform: "uppercase",
                  children: g.title
                }
              ) }),
              g.items.map((x) => {
                const X = x.id === t;
                return /* @__PURE__ */ f(
                  de,
                  {
                    onClick: () => r == null ? void 0 : r(x.id),
                    title: a ? x.label : void 0,
                    borderRadius: I.Medium,
                    color: X ? b : p.Default,
                    backgroundColor: X ? u : v.Transparent,
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
                      x.icon && /* @__PURE__ */ n(S, { style: { flexShrink: 0 }, children: x.icon }),
                      !a && /* @__PURE__ */ f(ne, { children: [
                        /* @__PURE__ */ n(D, { as: "span", style: { flex: "1 1 auto", color: "inherit" }, children: x.label }),
                        x.badge && /* @__PURE__ */ n(Cn, { variant: x.badgeVariant ?? "default", children: x.badge })
                      ] })
                    ]
                  },
                  x.id
                );
              })
            ] }, y))
          }
        ),
        d && /* @__PURE__ */ n(
          S,
          {
            padding: i.Medium,
            style: { borderTop: `1px solid ${m}` },
            children: /* @__PURE__ */ n(
              te,
              {
                label: a ? "Expand sidebar" : "Collapse sidebar",
                onClick: d,
                color: p.Subtle,
                padding: i.XSmall,
                children: a ? /* @__PURE__ */ n(Ot, {}) : /* @__PURE__ */ n(Ft, {})
              }
            )
          }
        ),
        o && /* @__PURE__ */ n(
          S,
          {
            padding: i.Large,
            style: { borderTop: `1px solid ${m}` },
            children: o
          }
        )
      ]
    }
  )
);
Ht.displayName = "Sidebar";
const jt = () => /* @__PURE__ */ n(
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
), Pt = M(
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
    if (G(() => {
      if (e)
        return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
    }, [e, c]), !e) return null;
    const b = /* @__PURE__ */ f(
      S,
      {
        ref: s,
        backgroundColor: v.Default,
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
              style: { borderBottom: `1px solid ${z.Default}` },
              children: /* @__PURE__ */ f(W, { alignBlock: "center", spread: "space-between", children: [
                /* @__PURE__ */ n(D, { as: "h2", size: w.Large, weight: A.Semibold, color: p.Default, children: r }),
                /* @__PURE__ */ n(te, { label: "Close panel", onClick: t, color: p.Subtle, children: /* @__PURE__ */ n(jt, {}) })
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
            backgroundColor: v.Overlay
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
Pt.displayName = "Panel";
const Vt = M(
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
Vt.displayName = "Aside";
const _t = M(
  ({
    topNav: e,
    sideNav: t,
    mobileNav: r,
    backgroundColor: l = v.Surface,
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
_t.displayName = "Layout";
const Yt = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
function vn(e, t) {
  return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function Gt(e, t) {
  return new Date(e, t + 1, 0).getDate();
}
function Kt(e, t) {
  return new Date(e, t, 1).getDay();
}
const Ut = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), qt = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), Jt = [
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
], Zt = M(
  ({
    value: e,
    defaultValue: t,
    onChange: r,
    min: l,
    max: o,
    selectedColor: a = p.Inverse,
    selectedBackground: d = v.Brand
  }, s) => {
    const c = /* @__PURE__ */ new Date(), [b, u] = H(t), m = e !== void 0, h = m ? e : b, [g, y] = H(
      (h ?? c).getFullYear()
    ), [x, X] = H(
      (h ?? c).getMonth()
    ), C = ve(() => Gt(g, x), [g, x]), F = ve(() => Kt(g, x), [g, x]), L = () => {
      x === 0 ? (X(11), y((k) => k - 1)) : X((k) => k - 1);
    }, R = () => {
      x === 11 ? (X(0), y((k) => k + 1)) : X((k) => k + 1);
    }, T = (k) => {
      const B = new Date(g, x, k);
      m || u(B), r == null || r(B);
    }, O = (k) => {
      const B = new Date(g, x, k);
      return !!(l && B < new Date(l.getFullYear(), l.getMonth(), l.getDate()) || o && B > new Date(o.getFullYear(), o.getMonth(), o.getDate()));
    }, $ = [];
    for (let k = 0; k < F; k++)
      $.push(/* @__PURE__ */ n(S, {}, `empty-${k}`));
    for (let k = 1; k <= C; k++) {
      const B = new Date(g, x, k), N = h ? vn(B, h) : !1, _ = vn(B, c), j = O(k);
      $.push(
        /* @__PURE__ */ n(
          de,
          {
            disabled: j,
            onClick: () => T(k),
            borderRadius: I.Medium,
            style: {
              width: "36px",
              height: "36px",
              padding: 0,
              fontSize: w.XSmall,
              fontWeight: N ? A.Semibold : A.Regular,
              backgroundColor: N ? d : "transparent",
              color: N ? a : j ? p.Disabled : p.Default,
              border: _ && !N ? `1px solid ${z.Default}` : "none",
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
        borderColor: z.Default,
        borderSide: "all",
        backgroundColor: v.Default,
        style: { width: "fit-content" },
        children: [
          /* @__PURE__ */ f(
            W,
            {
              alignBlock: "center",
              spread: "space-between",
              marginBlockEnd: i.Medium,
              children: [
                /* @__PURE__ */ n(te, { label: "Previous month", onClick: L, color: p.Subtle, padding: i.XSmall, children: /* @__PURE__ */ n(Ut, {}) }),
                /* @__PURE__ */ f(D, { as: "span", size: w.XSmall, weight: A.Semibold, color: p.Default, children: [
                  Jt[x],
                  " ",
                  g
                ] }),
                /* @__PURE__ */ n(te, { label: "Next month", onClick: R, color: p.Subtle, padding: i.XSmall, children: /* @__PURE__ */ n(qt, {}) })
              ]
            }
          ),
          /* @__PURE__ */ f(kn, { columns: 7, gap: i.XXSmall, children: [
            Yt.map((k) => /* @__PURE__ */ n(
              D,
              {
                as: "span",
                size: w.XXSmall,
                weight: A.Medium,
                color: p.Subtlest,
                align: "center",
                style: { padding: `${i.XSmall} 0` },
                children: k
              },
              k
            )),
            $
          ] })
        ]
      }
    );
  }
);
Zt.displayName = "Calendar";
const Qt = M(
  ({ header: e, description: t, image: r, primaryAction: l, secondaryAction: o }, a) => /* @__PURE__ */ f(
    Y,
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
        /* @__PURE__ */ f(Y, { space: i.Medium, alignInline: "center", children: [
          /* @__PURE__ */ n(
            D,
            {
              as: "h3",
              fontFamily: Pn.Display,
              size: w.XLarge,
              weight: A.Bold,
              color: p.Default,
              children: e
            }
          ),
          t && /* @__PURE__ */ n(D, { as: "p", size: w.XSmall, color: p.Subtle, lineHeight: 1.6, children: t })
        ] }),
        (l || o) && /* @__PURE__ */ f(W, { space: i.Medium, alignBlock: "center", children: [
          l,
          o
        ] })
      ]
    }
  )
);
Qt.displayName = "EmptyState";
const er = ({ order: e }) => /* @__PURE__ */ n(
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
), nr = M(
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
    onSetPage: m,
    isLoading: h = !1,
    isFixedSize: g = !1
  }, y) => {
    const [x, X] = H(a), [C, F] = H(c), [L, R] = H(b), T = o !== void 0, O = T ? o : x, $ = d !== void 0, k = $ ? d : C, B = $ ? s ?? "ASC" : L, N = l ? Math.max(1, Math.ceil(r.length / l)) : 1, _ = ve(() => {
      if (!l) return r;
      const E = (O - 1) * l;
      return r.slice(E, E + l);
    }, [r, l, O]), j = (E) => {
      const V = k === E && B === "ASC" ? "DESC" : "ASC";
      $ || (F(E), R(V)), u == null || u(E, V);
    }, K = (E) => {
      T || X(E), m == null || m(E);
    }, q = {
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
          children: /* @__PURE__ */ n(Ln, { size: "large" })
        }
      ),
      /* @__PURE__ */ f(
        "table",
        {
          ref: y,
          style: {
            width: "100%",
            borderCollapse: "collapse",
            tableLayout: g ? "fixed" : "auto",
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
                  color: p.Default
                },
                children: e
              }
            ),
            /* @__PURE__ */ n("thead", { children: /* @__PURE__ */ n("tr", { children: t.map((E) => /* @__PURE__ */ n(
              "th",
              {
                style: {
                  ...q,
                  textAlign: "left",
                  fontWeight: A.Semibold,
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
                  E.isSortable && /* @__PURE__ */ n(
                    er,
                    {
                      order: k === E.key ? B : void 0
                    }
                  )
                ] })
              },
              E.key
            )) }) }),
            /* @__PURE__ */ f("tbody", { children: [
              _.map((E) => /* @__PURE__ */ n(
                "tr",
                {
                  onClick: E.onClick,
                  style: {
                    cursor: E.onClick ? "pointer" : "default",
                    borderBottom: `1px solid ${z.Default}`
                  },
                  children: E.cells.map((V, J) => /* @__PURE__ */ n("td", { style: { ...q, color: p.Default }, children: V }, J))
                },
                E.key
              )),
              _.length === 0 && /* @__PURE__ */ n("tr", { children: /* @__PURE__ */ n(
                "td",
                {
                  colSpan: t.length,
                  style: {
                    ...q,
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
      l && N > 1 && /* @__PURE__ */ f(
        W,
        {
          space: i.Medium,
          alignBlock: "center",
          alignInline: "center",
          style: { paddingBlock: i.Large },
          children: [
            /* @__PURE__ */ n(
              de,
              {
                disabled: O <= 1,
                onClick: () => K(O - 1),
                paddingBlock: i.XSmall,
                paddingInline: i.Medium,
                borderRadius: I.Large,
                backgroundColor: v.Default,
                color: p.Default,
                style: { fontSize: w.XXSmall, border: `1px solid ${z.Default}` },
                children: "Previous"
              }
            ),
            /* @__PURE__ */ f(D, { size: w.XXSmall, color: p.Subtle, children: [
              "Page ",
              O,
              " of ",
              N
            ] }),
            /* @__PURE__ */ n(
              de,
              {
                disabled: O >= N,
                onClick: () => K(O + 1),
                paddingBlock: i.XSmall,
                paddingInline: i.Medium,
                borderRadius: I.Large,
                backgroundColor: v.Default,
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
nr.displayName = "Table";
const tr = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z", clipRule: "evenodd" }) }), rr = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" }) }), lr = M(
  ({
    defaultValue: e,
    label: t,
    editButtonLabel: r,
    editView: l,
    readView: o,
    onConfirm: a,
    onCancel: d
  }, s) => {
    const [c, b] = H(!1), [u, m] = H(e);
    oe(null), G(() => {
      m(e);
    }, [e]);
    const h = Q(() => {
      b(!1), a(u);
    }, [u, a]), g = Q(() => {
      m(e), b(!1), d == null || d();
    }, [e, d]), y = Q(
      (C) => {
        C.key === "Enter" && h(), C.key === "Escape" && g();
      },
      [h, g]
    ), x = (C) => /* @__PURE__ */ n(
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
        children: /* @__PURE__ */ n(D, { as: "span", size: w.Small, color: p.Default, children: C || " " })
      }
    ), X = (C) => /* @__PURE__ */ n(
      Ee,
      {
        value: C.value,
        onChange: C.onChange,
        onKeyDown: C.onKeyDown,
        autoFocus: C.autoFocus,
        backgroundColor: v.Default,
        borderColor: z.Focus,
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
          color: p.Subtle,
          style: { display: "block", marginBlockEnd: i.XSmall },
          children: t
        }
      ),
      c ? /* @__PURE__ */ f(W, { space: i.XSmall, alignBlock: "start", children: [
        /* @__PURE__ */ n(S, { style: { flex: "1 1 auto" }, children: (l ?? X)({
          value: u,
          onChange: (C) => m(C.target.value),
          onKeyDown: y,
          autoFocus: !0
        }) }),
        /* @__PURE__ */ n(
          te,
          {
            label: "Confirm",
            onClick: h,
            color: p.Success,
            padding: i.XSmall,
            children: /* @__PURE__ */ n(tr, {})
          }
        ),
        /* @__PURE__ */ n(
          te,
          {
            label: "Cancel",
            onClick: g,
            color: p.Error,
            padding: i.XSmall,
            children: /* @__PURE__ */ n(rr, {})
          }
        )
      ] }) : /* @__PURE__ */ n(
        S,
        {
          onClick: () => b(!0),
          role: "button",
          tabIndex: 0,
          "aria-label": r ?? e ?? "Edit",
          onKeyDown: (C) => {
            (C.key === "Enter" || C.key === " ") && (C.preventDefault(), b(!0));
          },
          style: { cursor: "pointer" },
          children: (o ?? x)(e)
        }
      )
    ] });
  }
);
lr.displayName = "InlineEdit";
const ir = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "currentColor", style: { width: "14px", height: "14px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z", clipRule: "evenodd" }) }), or = M(
  ({ trigger: e, groups: t, checked: r, onChange: l }, o) => {
    const [a, d] = H(!1), s = oe(null), c = Q((u) => {
      u.key === "Escape" && d(!1);
    }, []), b = Q((u) => {
      s.current && !s.current.contains(u.target) && d(!1);
    }, []);
    return G(() => {
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
            W,
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
              backgroundColor: v.Default,
              borderColor: z.Default,
              borderSide: "all",
              borderRadius: I.XLarge,
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
              children: /* @__PURE__ */ n(Y, { space: i.XSmall, children: t.map((u, m) => /* @__PURE__ */ f(Y, { space: i.XXSmall, children: [
                u.title && /* @__PURE__ */ n(S, { paddingInline: i.MediumLarge, paddingBlock: i.XSmall, children: /* @__PURE__ */ n(
                  D,
                  {
                    as: "span",
                    size: w.XXSmall,
                    weight: A.Semibold,
                    color: p.Subtlest,
                    textTransform: "uppercase",
                    children: u.title
                  }
                ) }),
                u.items.map((h) => {
                  const g = !!r[h.id];
                  return /* @__PURE__ */ f(
                    de,
                    {
                      onClick: () => l(h.id, !g),
                      borderRadius: I.Medium,
                      backgroundColor: v.Transparent,
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
                              borderRadius: I.Small,
                              border: g ? "none" : `2px solid ${z.Outline}`,
                              backgroundColor: g ? v.Brand : v.Transparent,
                              color: p.Inverse,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0
                            },
                            children: g && /* @__PURE__ */ n(ir, {})
                          }
                        ),
                        /* @__PURE__ */ n(D, { as: "span", size: w.XSmall, style: { color: "inherit" }, children: h.label })
                      ]
                    },
                    h.id
                  );
                }),
                m < t.length - 1 && /* @__PURE__ */ n(
                  S,
                  {
                    style: {
                      borderTop: `1px solid ${z.Default}`,
                      marginBlock: i.XSmall
                    }
                  }
                )
              ] }, m)) })
            }
          )
        ]
      }
    );
  }
);
or.displayName = "DropdownCheckboxMenu";
const ar = M(
  ({
    label: e,
    helperText: t,
    errorText: r,
    id: l,
    labelColor: o = p.Default,
    labelSize: a = w.XSmall,
    labelWeight: d = A.Medium,
    labelTextTransform: s,
    labelLetterSpacing: c,
    inputBackground: b = v.Subtle,
    inputBorderColor: u,
    inputBorderRadius: m = I.XXLarge,
    inputBorderSide: h = "all",
    inputPadding: g = i.MediumLarge,
    name: y,
    value: x,
    defaultValue: X,
    placeholder: C,
    options: F,
    disabled: L,
    required: R,
    onChange: T,
    onBlur: O
  }, $) => {
    const k = ke(), B = l ?? k, N = `${B}-helper`, _ = `${B}-error`, j = !!r, K = j ? z.Error : u, q = h === "bottom", E = /* @__PURE__ */ n(
      Mn,
      {
        ref: $,
        id: B,
        name: y,
        value: x,
        defaultValue: X,
        placeholder: C,
        options: F,
        disabled: L,
        required: R,
        onChange: T,
        onBlur: O,
        backgroundColor: q ? "transparent" : b,
        borderColor: q ? void 0 : K,
        borderRadius: q ? void 0 : m,
        padding: g,
        fontSize: w.XSmall,
        color: p.Default,
        style: { width: "100%" },
        "aria-describedby": j ? _ : t ? N : void 0,
        "aria-invalid": j || void 0
      }
    ), V = q ? /* @__PURE__ */ n("div", { style: {
      width: "100%",
      backgroundColor: b,
      borderBottom: `2px solid ${K}`
    }, children: E }) : E;
    return /* @__PURE__ */ f(Y, { space: i.XSmall, children: [
      e && /* @__PURE__ */ n(
        "label",
        {
          htmlFor: B,
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
      j && /* @__PURE__ */ n(D, { as: "span", size: w.XXSmall, color: p.Error, id: _, children: r }),
      !j && t && /* @__PURE__ */ n(D, { as: "span", size: w.XXSmall, color: p.Subtle, id: N, children: t })
    ] });
  }
);
ar.displayName = "SelectField";
const sr = {
  info: { bg: v.Default, text: p.Info, accent: "#3b82f6" },
  success: { bg: v.Default, text: p.Success, accent: "#22c55e" },
  warning: { bg: v.Default, text: p.Warning, accent: "#f59e0b" },
  error: { bg: v.Default, text: p.Error, accent: "#ba1a1a" }
}, dr = () => /* @__PURE__ */ n(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "14px", height: "14px" },
    children: /* @__PURE__ */ n("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  }
), cr = M(
  ({ open: e, onClose: t, duration: r = 5e3, variant: l = "info", icon: o, children: a }, d) => {
    if (G(() => {
      if (!e || r === 0) return;
      const c = setTimeout(t, r);
      return () => clearTimeout(c);
    }, [e, r, t]), !e) return null;
    const s = sr[l];
    return Xe(
      /* @__PURE__ */ n(
        S,
        {
          ref: d,
          role: "alert",
          "aria-live": "assertive",
          backgroundColor: s.bg,
          borderRadius: I.XXLarge,
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
              /* @__PURE__ */ n(D, { as: "span", size: w.XSmall, weight: A.Medium, color: p.Default, children: a })
            ] }),
            /* @__PURE__ */ n(
              te,
              {
                label: "Dismiss",
                onClick: t,
                color: p.Subtle,
                padding: i.XXSmall,
                children: /* @__PURE__ */ n(dr, {})
              }
            )
          ] })
        }
      ),
      document.body
    );
  }
);
cr.displayName = "Toast";
const ur = M(
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
        backgroundColor: v.Default,
        borderTop: `1px solid ${z.Default}`,
        backdropFilter: "blur(20px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingInline: i.Large,
        paddingBlock: i.Medium
      },
      children: e.map((a, d) => {
        const s = a.id === t, c = Math.floor(e.length / 2), b = l && d === c;
        return /* @__PURE__ */ f(ae.Fragment, { children: [
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
                    size: w.Micro,
                    weight: A.Bold,
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
ur.displayName = "MobileNav";
const pr = () => /* @__PURE__ */ n(
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
), br = M(
  ({ items: e, showLabels: t, variant: r = "dot" }, l) => {
    const o = P(t ?? !0), a = 32, d = e.filter((s) => s.status === "visited").length;
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
              borderRadius: I.Full,
              background: u ? xe.Brand : "none",
              backgroundColor: u ? void 0 : b ? v.PrimaryContainer : v.NeutralBold,
              opacity: b ? 0.4 : 1,
              boxShadow: u ? "0 0 8px var(--bbui-color-primary), 0 0 20px var(--bbui-color-primary)" : "none",
              transition: "all 400ms ease",
              cursor: s.onClick ? "pointer" : "default"
            }, onClick: s.onClick }),
            o && /* @__PURE__ */ n(
              D,
              {
                as: "p",
                size: w.Micro,
                weight: u ? A.Bold : A.Medium,
                color: u ? p.Brand : b ? p.Subtle : p.Disabled,
                textTransform: "uppercase",
                letterSpacing: Xn.Widest,
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
            const b = c === e.length - 1, u = s.status === "visited", m = s.status === "current", h = s.status === "disabled", g = u ? xe.Brand : m ? "transparent" : v.NeutralBold, y = /* @__PURE__ */ n(
              "div",
              {
                style: {
                  width: a,
                  height: a,
                  borderRadius: I.Full,
                  background: u ? xe.Brand : g,
                  backgroundColor: u ? void 0 : g,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: u ? p.OnBrand : m ? p.Brand : h ? p.Disabled : p.Subtle,
                  fontSize: w.XSmall,
                  fontWeight: A.Bold,
                  border: m ? `2px solid ${p.Brand}` : "none",
                  cursor: s.onClick || s.href ? "pointer" : "default",
                  transition: "all 300ms ease"
                },
                onClick: s.onClick,
                children: u ? /* @__PURE__ */ n(pr, {}) : c + 1
              }
            ), x = s.href ? /* @__PURE__ */ n("a", { href: s.href, style: { textDecoration: "none", color: "inherit" }, children: y }) : y;
            return /* @__PURE__ */ f(ae.Fragment, { children: [
              x,
              !b && /* @__PURE__ */ n("div", { style: {
                flex: "1 1 auto",
                height: 2,
                backgroundColor: v.NeutralBold,
                position: "relative",
                marginInline: i.XSmall,
                borderRadius: I.Full,
                overflow: "hidden"
              }, children: /* @__PURE__ */ n("div", { style: {
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: `${u ? s.percentageComplete : 0}%`,
                background: xe.Brand,
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
          }, children: e.map((s, c) => {
            const b = c === e.length - 1, u = s.status === "visited", m = s.status === "current", h = s.status === "disabled", g = u ? p.Brand : m ? p.Default : h ? p.Disabled : p.Subtle;
            return /* @__PURE__ */ f(ae.Fragment, { children: [
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
                  weight: m ? A.Bold : A.Medium,
                  color: g,
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
br.displayName = "ProgressTracker";
const hr = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";
function gr(e) {
  const t = /* @__PURE__ */ f(W, { space: i.XSmall, alignBlock: "center", children: [
    /* @__PURE__ */ n(
      D,
      {
        size: w.XSmall,
        weight: A.Semibold,
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
function mr(e) {
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
const fr = M(
  ({
    icon: e,
    heading: t,
    description: r,
    action: l,
    media: o,
    padding: a = i.XXLarge,
    borderRadius: d = I.XXLarge,
    blur: s = 20,
    backgroundOpacity: c = 0.1,
    borderOpacity: b = 0.12,
    children: u
  }, m) => {
    const h = {
      position: "relative",
      overflow: "hidden",
      background: `rgba(255, 255, 255, ${c})`,
      backdropFilter: `blur(${s}px)`,
      WebkitBackdropFilter: `blur(${s}px)`,
      border: `1px solid rgba(255, 255, 255, ${b})`,
      borderRadius: d,
      transition: "background 200ms ease"
    }, g = {
      position: "absolute",
      inset: 0,
      backgroundImage: `url("${hr}")`,
      opacity: 0.03,
      pointerEvents: "none"
    }, y = /* @__PURE__ */ f(Y, { space: i.Medium, style: { flex: 1 }, children: [
      e && /* @__PURE__ */ n(S, { marginBlockEnd: i.Medium, children: e }),
      /* @__PURE__ */ n(
        D,
        {
          as: "h3",
          size: w.Large,
          weight: A.Bold,
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
      l && gr(l),
      u
    ] });
    return /* @__PURE__ */ f(S, { ref: m, padding: a, style: h, children: [
      /* @__PURE__ */ n("div", { style: g, "aria-hidden": "true" }),
      o ? /* @__PURE__ */ f(W, { space: i.XXLarge, alignBlock: "center", children: [
        y,
        /* @__PURE__ */ n("div", { style: { flexShrink: 0 }, children: mr(o) })
      ] }) : y
    ] });
  }
);
fr.displayName = "GlassCard";
const yr = `
@keyframes bbui-pulse-down {
  0%, 100% { transform: translateY(0); opacity: 0.4 }
  50%      { transform: translateY(3px); opacity: 0.9 }
}
`, Sn = "36px", xr = "18px", vr = M(
  ({ items: e, onComplete: t, finishedLabel: r, maxHeight: l = "256px" }, o) => {
    const [a, d] = H(() => /* @__PURE__ */ new Set()), s = oe(!1), c = oe(null), b = oe([]), u = a.size >= e.length;
    return G(() => {
      u && !s.current && (s.current = !0, t == null || t());
    }, [u, t]), G(() => {
      const m = c.current;
      if (!m) return;
      const h = new IntersectionObserver(
        (g) => {
          d((y) => {
            let x = y;
            for (const X of g) {
              if (!X.isIntersecting) continue;
              const C = Number(X.target.dataset.idx);
              y.has(C) || (x === y && (x = new Set(y)), x.add(C));
            }
            return x;
          });
        },
        { root: m, threshold: 0.6 }
      );
      return b.current.forEach((g) => g && h.observe(g)), () => h.disconnect();
    }, [e.length]), /* @__PURE__ */ f("div", { ref: o, style: { width: "100%", position: "relative" }, children: [
      /* @__PURE__ */ n("style", { children: yr }),
      /* @__PURE__ */ n("div", { ref: c, style: kr(l, u), children: /* @__PURE__ */ n(Y, { space: i.MediumLarge, children: e.map((m, h) => {
        const g = a.has(h);
        return /* @__PURE__ */ f(
          "div",
          {
            ref: (y) => b.current[h] = y,
            "data-idx": h,
            style: Xr(g),
            children: [
              /* @__PURE__ */ n(Sr, { item: m }),
              h < e.length - 1 && /* @__PURE__ */ n("span", { "aria-hidden": "true", style: Br(g) })
            ]
          },
          m.id ?? h
        );
      }) }) }),
      /* @__PURE__ */ n("div", { style: Dr, children: u ? r : /* @__PURE__ */ n(wr, {}) })
    ] });
  }
);
vr.displayName = "RevealSteps";
function Sr({ item: e }) {
  return /* @__PURE__ */ f("div", { style: Cr, children: [
    /* @__PURE__ */ n("span", { "aria-hidden": "true", style: Lr, children: e.icon }),
    /* @__PURE__ */ f("span", { style: Mr, children: [
      /* @__PURE__ */ n(D, { as: "span", size: w.Small, weight: A.Medium, children: e.label }),
      e.description && /* @__PURE__ */ n(D, { as: "span", size: w.XSmall, color: p.Subtle, children: e.description })
    ] }),
    e.meta && /* @__PURE__ */ n("span", { style: Ir, children: e.meta })
  ] });
}
function wr() {
  return /* @__PURE__ */ n("div", { style: Er, "aria-hidden": "true", children: /* @__PURE__ */ n(
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
const wn = "linear-gradient(to bottom, black 0%, black calc(100% - 32px), transparent 100%)", kr = (e, t) => ({
  maxHeight: e,
  overflowY: "auto",
  scrollBehavior: "smooth",
  maskImage: t ? "none" : wn,
  WebkitMaskImage: t ? "none" : wn,
  paddingRight: i.XSmall
}), Xr = (e) => ({
  position: "relative",
  opacity: e ? 1 : 0.15,
  transform: e ? "translateY(0)" : "translateY(8px)",
  filter: e ? "blur(0)" : "blur(2px)",
  transition: "opacity 420ms ease-out, transform 420ms cubic-bezier(0.22, 1, 0.36, 1), filter 420ms ease-out"
}), Cr = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: i.MediumLarge,
  padding: i.MediumLarge,
  background: v.Subtle,
  borderRadius: I.Large,
  border: `1px solid ${z.Default}`,
  color: p.Default
}, Lr = {
  width: Sn,
  height: Sn,
  flexShrink: 0,
  borderRadius: I.Medium,
  background: v.Subtle,
  color: p.Default,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
}, Mr = {
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: i.XXSmall
}, Ir = {
  flexShrink: 0,
  display: "inline-flex",
  alignItems: "center"
}, Br = (e) => ({
  position: "absolute",
  left: `calc(${i.MediumLarge} + ${xr} - 1px)`,
  top: "100%",
  height: i.MediumLarge,
  width: "2px",
  background: z.Default,
  opacity: e ? 1 : 0,
  transition: "opacity 300ms ease-out",
  pointerEvents: "none"
}), Dr = {
  marginTop: i.Large,
  display: "flex",
  justifyContent: "center",
  minHeight: "20px"
}, Er = {
  color: p.Subtle,
  animation: "bbui-pulse-down 1500ms ease-in-out infinite",
  display: "inline-flex"
}, zr = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree"
], Tr = M(
  ({ value: e, onChange: t, labels: r = zr }, l) => {
    const [o, a] = H(null);
    return /* @__PURE__ */ n("div", { ref: l, role: "radiogroup", style: Ar, children: r.map((d, s) => {
      const c = s + 1, b = e === c;
      return /* @__PURE__ */ n(
        "button",
        {
          type: "button",
          role: "radio",
          "aria-checked": b,
          "aria-label": d,
          onClick: () => t(c),
          onMouseEnter: () => a(c),
          onMouseLeave: () => a(null),
          onFocus: () => a(c),
          onBlur: () => a(null),
          style: Rr(b, !b && o === c),
          children: d
        },
        c
      );
    }) });
  }
);
Tr.displayName = "LikertScale";
const Ar = {
  display: "flex",
  flexDirection: "column",
  gap: i.Medium,
  width: "100%"
}, Rr = (e, t) => {
  const r = "var(--bbui-color-primary)", l = e ? "var(--bbui-bg-primary-container)" : t ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)", o = e || t ? r : "rgba(255,255,255,0.08)";
  return {
    width: "100%",
    height: "48px",
    padding: `0 ${i.MediumLarge}`,
    borderRadius: I.Large,
    border: `1px solid ${o}`,
    background: l,
    color: "#ffffff",
    fontSize: w.Small,
    fontWeight: A.Medium,
    textAlign: "center",
    cursor: "pointer",
    transition: "background 180ms ease, border-color 180ms ease",
    font: "inherit"
  };
};
function dl(e) {
  const [t, r] = H(
    () => typeof window < "u" ? window.matchMedia(e).matches : !1
  );
  return G(() => {
    const l = window.matchMedia(e), o = (a) => r(a.matches);
    return l.addEventListener("change", o), r(l.matches), () => l.removeEventListener("change", o);
  }, [e]), t;
}
function De() {
  return typeof window > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Nr(e) {
  typeof document > "u" || (e === "system" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e));
}
function cl() {
  const [e, t] = H(() => typeof localStorage > "u" ? "system" : localStorage.getItem("bbui-theme") ?? "system"), [r, l] = H(
    () => e === "system" ? De() : e
  ), o = Q((a) => {
    t(a), typeof localStorage < "u" && (a === "system" ? localStorage.removeItem("bbui-theme") : localStorage.setItem("bbui-theme", a));
  }, []);
  return G(() => {
    Nr(e), l(e === "system" ? De() : e);
  }, [e]), G(() => {
    if (e !== "system") return;
    const a = window.matchMedia("(prefers-color-scheme: dark)"), d = () => l(De());
    return a.addEventListener("change", d), () => a.removeEventListener("change", d);
  }, [e]), { theme: e, resolvedTheme: r, setTheme: o };
}
async function* $r(e, t) {
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
        for (const m of c.split(`
`))
          m.startsWith("data:") && b.push(m.slice(5).trimStart());
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
async function* Wr(e, t = {}) {
  const r = await fetch(e, t);
  if (!r.ok) {
    const l = await r.text().catch(() => "");
    throw new Error(
      `SSE request failed ${r.status} ${r.statusText}: ${l}`
    );
  }
  yield* $r(r, t.signal);
}
function ul(e = {}) {
  const { onEvent: t, onComplete: r, onError: l, retain: o = !0 } = e, [a, d] = H([]), [s, c] = H(null), [b, u] = H(!1), [m, h] = H(null), g = oe(null), y = oe(!0), x = oe(t), X = oe(r), C = oe(l);
  G(() => {
    x.current = t, X.current = r, C.current = l;
  }), G(() => (y.current = !0, () => {
    var T;
    y.current = !1, (T = g.current) == null || T.abort();
  }), []);
  const F = Q(() => {
    var T;
    (T = g.current) == null || T.abort(), g.current = null;
  }, []), L = Q(() => {
    d([]), c(null), h(null);
  }, []), R = Q(
    async (T, O = {}) => {
      var k, B, N, _;
      (k = g.current) == null || k.abort();
      const $ = new AbortController();
      g.current = $, y.current && (d([]), c(null), h(null), u(!0));
      try {
        for await (const j of Wr(T, {
          ...O,
          signal: $.signal
        })) {
          if (!y.current) return;
          o && d((K) => [...K, j]), c(j), (B = x.current) == null || B.call(x, j);
        }
        y.current && ((N = X.current) == null || N.call(X));
      } catch (j) {
        if ($.signal.aborted) return;
        const K = j instanceof Error ? j : new Error(String(j));
        y.current && (h(K), (_ = C.current) == null || _.call(C, K));
      } finally {
        y.current && g.current === $ && (u(!1), g.current = null);
      }
    },
    [o]
  );
  return { events: a, lastEvent: s, isStreaming: b, error: m, start: R, abort: F, reset: L };
}
export {
  tl as AccentColor,
  Gr as AlignItems,
  Ur as AlignSelf,
  he as Anchor,
  Vt as Aside,
  dt as Avatar,
  v as BackgroundColor,
  Cn as Badge,
  Dt as Banner,
  ue as BloomColor,
  ie as BloomLevel,
  z as BorderColor,
  I as BorderRadius,
  nl as BorderWidth,
  S as Box,
  bn as Breakpoint,
  de as Button,
  Zt as Calendar,
  Lt as Card,
  mt as Checkbox,
  Un as Chip,
  rl as ContainerWidth,
  Qr as Cursor,
  al as DirectionColor,
  Yr as Display,
  ft as Divider,
  $t as Drawer,
  or as DropdownCheckboxMenu,
  Wt as DropdownMenu,
  be as Elevation,
  Qt as EmptyState,
  ol as EvaluationResultColor,
  qr as FlexDirection,
  Jr as FlexWrap,
  Pn as FontFamily,
  w as FontSize,
  Vr as FontStyle,
  A as FontWeight,
  fr as GlassCard,
  xe as Gradient,
  kn as Grid,
  zt as Header,
  Ct as HeroSection,
  Pr as Hide,
  jn as Icon,
  te as IconButton,
  ll as IconSize,
  Le as Image,
  W as Inline,
  lr as InlineEdit,
  Kr as JustifyContent,
  _t as Layout,
  Xn as LetterSpacing,
  Tr as LikertScale,
  rt as LinkButton,
  Qn as LiquidGlass,
  In as Menu,
  ur as MobileNav,
  Rt as Modal,
  Tt as ModalSize,
  Xt as Navbar,
  Pt as Panel,
  sl as PersonaAccent,
  Zr as Position,
  br as ProgressTracker,
  vr as RevealSteps,
  Mn as Select,
  ar as SelectField,
  jr as Show,
  Ht as Sidebar,
  i as Spacing,
  Ln as Spinner,
  Y as Stack,
  vt as Stepper,
  nr as Table,
  Et as Tabs,
  D as Text,
  pt as TextArea,
  p as TextColor,
  Mt as TextField,
  Ee as TextInput,
  _r as TextTransform,
  cr as Toast,
  tt as Toggle,
  el as WhiteSpace,
  pe as ZIndex,
  Vn as bloomColorFor,
  _n as bloomLevelForScore,
  $r as parseSSEStream,
  il as scoreColor,
  Wr as streamSSE,
  Ce as useBreakpoint,
  dl as useMediaQuery,
  P as useResponsiveValue,
  ul as useSSEStream,
  cl as useTheme
};
