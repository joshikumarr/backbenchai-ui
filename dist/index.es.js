import oe, { useState as P, useEffect as K, forwardRef as L, Fragment as Pn, useMemo as ve, useCallback as Q, useId as ke, useRef as ie } from "react";
import { jsx as n, Fragment as ne, jsxs as f } from "react/jsx-runtime";
import { createPortal as Xe } from "react-dom";
const wn = {
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
function Vn(e, t) {
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
function H(e) {
  const t = Ce();
  return Vn(e, t);
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
    marginBlockEnd: m,
    marginInline: h,
    marginInlineStart: g,
    marginInlineEnd: y,
    marginTop: v,
    marginRight: X,
    marginBottom: M,
    marginLeft: O,
    backgroundColor: C,
    borderRadius: R,
    borderColor: T,
    borderSide: W,
    borderWidth: F = "1px",
    overflow: k,
    elevation: I,
    width: N,
    maxWidth: _,
    height: j,
    minHeight: G,
    maxHeight: U,
    minWidth: E,
    display: V,
    alignItems: Z,
    justifyContent: q,
    alignSelf: ae,
    flexDirection: se,
    flexWrap: ee,
    flex: J,
    flexGrow: ce,
    flexShrink: re,
    gap: ge,
    position: ze,
    inset: Te,
    top: Ae,
    right: Re,
    bottom: Ne,
    left: $e,
    zIndex: We,
    color: Fe,
    opacity: Oe,
    cursor: He,
    whiteSpace: je,
    lineHeight: Pe,
    pointerEvents: Ve,
    background: _e,
    border: Ye,
    boxShadow: Ge,
    transition: Ke,
    transform: Ue,
    aspectRatio: qe,
    filter: Je,
    backdropFilter: Ze,
    style: Wn,
    children: Fn,
    ...On
  }, Hn) => {
    const Qe = ye(H(t)), en = ye(H(r)), nn = H(l), tn = H(o), rn = ye(H(a)), ln = H(d), on = H(s), an = ye(H(c)), sn = ye(H(b)), dn = H(u), cn = H(m), un = ye(H(h)), pn = H(g), bn = H(y), hn = H(v), gn = H(X), mn = H(M), fn = H(O), yn = H(V), xn = H(Z), vn = H(q), Sn = H(se), me = T ? `${F} solid ${T}` : void 0, fe = {};
    if (me && W)
      switch (W) {
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
      ...C && { backgroundColor: C },
      ...R && { borderRadius: R },
      ...fe,
      ...k && { overflow: k },
      ...I && { boxShadow: I },
      ...N !== void 0 && { width: N },
      ..._ && { maxWidth: _, marginInline: "auto" },
      ...j !== void 0 && { height: j },
      ...G !== void 0 && { minHeight: G },
      ...U !== void 0 && { maxHeight: U },
      ...E !== void 0 && { minWidth: E },
      ...yn && { display: yn },
      ...xn && { alignItems: xn },
      ...vn && { justifyContent: vn },
      ...ae && { alignSelf: ae },
      ...Sn && { flexDirection: Sn },
      ...ee && { flexWrap: ee },
      ...J !== void 0 && { flex: J },
      ...ce !== void 0 && { flexGrow: ce },
      ...re !== void 0 && { flexShrink: re },
      ...ge && { gap: ge },
      ...ze && { position: ze },
      ...Te !== void 0 && { inset: Te },
      ...Ae !== void 0 && { top: Ae },
      ...Re !== void 0 && { right: Re },
      ...Ne !== void 0 && { bottom: Ne },
      ...$e !== void 0 && { left: $e },
      ...We !== void 0 && { zIndex: We },
      ...Fe && { color: Fe },
      ...Oe !== void 0 && { opacity: Oe },
      ...He && { cursor: He },
      ...je && { whiteSpace: je },
      ...Pe !== void 0 && { lineHeight: Pe },
      ...Ve && { pointerEvents: Ve },
      ..._e && { background: _e },
      ...Ye && { border: Ye },
      ...Ge && { boxShadow: Ge },
      ...Ke && { transition: Ke },
      ...Ue && { transform: Ue },
      ...qe !== void 0 && { aspectRatio: qe },
      ...Je && { filter: Je },
      ...Ze && { backdropFilter: Ze },
      ...Wn
    };
    return oe.createElement(
      e,
      { ...On, ref: Hn, style: jn },
      Fn
    );
  }
);
S.displayName = "Box";
const Se = ["mobile", "tablet", "desktop"];
function _n(e, t) {
  return Se.indexOf(e) >= Se.indexOf(t);
}
function Yn(e, t) {
  return Se.indexOf(e) < Se.indexOf(t);
}
function Jr({ on: e, above: t, below: r, children: l }) {
  const o = Ce();
  return e != null ? (Array.isArray(e) ? e : [e]).includes(o) ? /* @__PURE__ */ n(ne, { children: l }) : null : t != null ? _n(o, t) ? /* @__PURE__ */ n(ne, { children: l }) : null : r != null ? Yn(o, r) ? /* @__PURE__ */ n(ne, { children: l }) : null : /* @__PURE__ */ n(ne, { children: l });
}
const we = ["mobile", "tablet", "desktop"];
function Gn(e, t) {
  return we.indexOf(e) >= we.indexOf(t);
}
function Kn(e, t) {
  return we.indexOf(e) < we.indexOf(t);
}
function Zr({ on: e, above: t, below: r, children: l }) {
  const o = Ce();
  return e != null ? (Array.isArray(e) ? e : [e]).includes(o) ? null : /* @__PURE__ */ n(ne, { children: l }) : t != null ? Gn(o, t) ? null : /* @__PURE__ */ n(ne, { children: l }) : r != null ? Kn(o, r) ? null : /* @__PURE__ */ n(ne, { children: l }) : /* @__PURE__ */ n(ne, { children: l });
}
const Xn = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch"
}, Y = L(
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
      gap: H(t ?? "0"),
      ...r && { alignItems: Xn[r] },
      ...l && !o && { justifyContent: Xn[l] },
      ...o && { justifyContent: o },
      ...a === "fill" && { flex: "1 1 auto" },
      ...d && { marginBlockStart: d },
      ...s && { marginBlockEnd: s },
      ...c
    };
    return oe.createElement(
      e,
      { ...u, ref: m, style: g },
      b
    );
  }
);
Y.displayName = "Stack";
const Cn = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
  baseline: "baseline"
}, $ = L(
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
    style: v,
    children: X,
    ...M
  }, O) => {
    const C = H(t ?? "0"), [R, T] = Array.isArray(C) ? [C[0], C[1]] : [C, C], W = {
      display: "flex",
      flexDirection: "row",
      columnGap: T,
      rowGap: r ?? R,
      ...l && { alignItems: Cn[l] },
      ...o && !a && { justifyContent: Cn[o] },
      ...a && { justifyContent: a },
      ...d && { flexWrap: "wrap" },
      ...c === "fill" && { flex: "1 1 auto" },
      ...b && { marginBlockStart: b },
      ...u && { marginBlockEnd: u },
      ...m && { borderRadius: m },
      ...h && { overflow: h },
      ...g && { boxShadow: g },
      ...y !== void 0 && { minWidth: y },
      ...v
    };
    let F = X;
    if (s) {
      const k = oe.Children.toArray(X).filter(Boolean);
      F = k.map((I, N) => /* @__PURE__ */ f(Pn, { children: [
        I,
        N < k.length - 1 && /* @__PURE__ */ n("span", { "aria-hidden": "true", children: s })
      ] }, N));
    }
    return oe.createElement(
      e,
      { ...M, ref: O, style: W },
      F
    );
  }
);
$.displayName = "Inline";
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
    clamp: m,
    truncate: h,
    noWrap: g,
    noShrink: y,
    style: v,
    children: X,
    ...M
  }, O) => {
    const C = {
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
      ...v
    };
    return oe.createElement(
      e,
      { ...M, ref: O, style: C },
      X
    );
  }
);
D.displayName = "Text";
function Un(e) {
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
    elevation: c,
    style: b,
    children: u,
    ...m
  }, h) => {
    const g = H(t ?? 1), y = H(r ?? "0"), v = {
      display: "grid",
      gridTemplateColumns: Un(g),
      gap: y,
      ...l && { rowGap: l },
      ...o && { marginBlockStart: o },
      ...a && { marginBlockEnd: a },
      ...d && { borderRadius: d },
      ...s && { overflow: s },
      ...c && { boxShadow: c },
      ...b
    };
    return oe.createElement(
      e,
      { ...m, ref: h, style: v },
      u
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
    borderRadius: c,
    textTransform: b,
    display: u,
    alignSelf: m,
    style: h,
    children: g,
    ...y
  }, v) => {
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
    return /* @__PURE__ */ n("a", { ref: v, style: X, ...y, children: g });
  }
);
he.displayName = "Anchor";
const Me = L(
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
Me.displayName = "Image";
const Le = (e) => {
  if (e !== void 0)
    return Array.isArray(e) ? e.join(" ") : e;
}, qn = {
  start: "flex-start",
  center: "center",
  end: "flex-end"
}, de = L(
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
    textTransform: v,
    fontFamily: X,
    gap: M,
    padding: O,
    paddingBlock: C,
    paddingInline: R,
    borderRadius: T,
    width: W,
    align: F = "center",
    label: k,
    iconStart: I,
    iconEnd: N,
    className: _,
    style: j,
    children: G,
    ...U
  }, E) => {
    const V = {};
    e && (V["--bbui-btn-bg"] = e), t && (V["--bbui-btn-bg-hover"] = t), r && (V["--bbui-btn-bg-pressed"] = r), o && (V["--bbui-btn-color"] = o), a && (V["--bbui-btn-color-hover"] = a), d && (V["--bbui-btn-color-pressed"] = d), s && (V["--bbui-btn-border"] = s), c && (V["--bbui-btn-border-hover"] = c), b && (V["--bbui-btn-border-pressed"] = b);
    const Z = s ? `${u} solid var(--bbui-btn-border)` : void 0, q = {};
    if (Z)
      switch (m) {
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
    const ae = Le(O), se = Le(C), ee = Le(R), J = {
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: qn[F],
      ...q,
      ...W !== void 0 && { width: W },
      ...l && { background: l },
      ...h && { fontSize: h },
      ...g && { fontWeight: g },
      ...y && { letterSpacing: y },
      ...v && { textTransform: v },
      ...X && { fontFamily: X },
      ...M && { gap: M },
      ...ae && { padding: ae },
      ...se && { paddingBlock: se },
      ...ee && { paddingInline: ee },
      ...T && { borderRadius: T },
      ...V,
      ...j
    }, ce = _ ? `bbui-button ${_}` : "bbui-button", re = k ?? G;
    return /* @__PURE__ */ n("button", { ref: E, className: ce, style: J, ...U, children: I || N ? /* @__PURE__ */ f(ne, { children: [
      I,
      re,
      N
    ] }) : re });
  }
);
de.displayName = "Button";
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
const Jn = L(
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
Jn.displayName = "Icon";
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
}, Zn = {
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
}, Tn = {
  Tighter: "-0.05em",
  Tight: "-0.025em",
  Normal: "0",
  Wide: "0.05em",
  Wider: "0.075em",
  /** 0.1em — uppercase labels */
  Widest: "0.1em"
}, Qr = {
  Normal: "normal",
  Italic: "italic",
  Oblique: "oblique"
}, el = {
  None: "none",
  Uppercase: "uppercase",
  Lowercase: "lowercase",
  Capitalize: "capitalize"
}, nl = {
  Block: "block",
  InlineBlock: "inline-block",
  Inline: "inline",
  Flex: "flex",
  InlineFlex: "inline-flex",
  Grid: "grid",
  InlineGrid: "inline-grid",
  None: "none"
}, tl = {
  Start: "flex-start",
  Center: "center",
  End: "flex-end",
  Stretch: "stretch",
  Baseline: "baseline"
}, rl = {
  Start: "flex-start",
  Center: "center",
  End: "flex-end",
  SpaceBetween: "space-between",
  SpaceAround: "space-around",
  SpaceEvenly: "space-evenly"
}, ll = {
  Auto: "auto",
  Start: "flex-start",
  Center: "center",
  End: "flex-end",
  Stretch: "stretch",
  Baseline: "baseline"
}, il = {
  Row: "row",
  Column: "column",
  RowReverse: "row-reverse",
  ColumnReverse: "column-reverse"
}, ol = {
  NoWrap: "nowrap",
  Wrap: "wrap",
  WrapReverse: "wrap-reverse"
}, al = {
  Static: "static",
  Relative: "relative",
  Absolute: "absolute",
  Fixed: "fixed",
  Sticky: "sticky"
}, sl = {
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
}, dl = {
  Normal: "normal",
  NoWrap: "nowrap",
  Pre: "pre",
  PreWrap: "pre-wrap",
  PreLine: "pre-line",
  BreakSpaces: "break-spaces"
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
}, cl = {
  Thin: "1px",
  Medium: "2px",
  Thick: "4px",
  XThick: "8px"
}, ul = {
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
}, pl = {
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
}, bl = {
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
}, le = {
  NotAssessed: "NOT_ASSESSED",
  Aware: "AWARE",
  Understands: "UNDERSTANDS",
  Applies: "APPLIES",
  Analyzes: "ANALYZES",
  Masters: "MASTERS"
};
function Qn(e) {
  switch (e) {
    case le.Masters:
      return ue.Masters;
    case le.Analyzes:
      return ue.Analyzes;
    case le.Applies:
      return ue.Applies;
    case le.Understands:
      return ue.Understands;
    case le.Aware:
      return ue.Aware;
    default:
      return ue.NotAssessed;
  }
}
function et(e) {
  return e >= 90 ? le.Masters : e >= 80 ? le.Analyzes : e >= 60 ? le.Applies : e >= 40 ? le.Understands : e >= 20 ? le.Aware : le.NotAssessed;
}
function hl(e) {
  return Qn(et(e));
}
const gl = {
  correct: ue.Masters,
  partial: ue.Applies,
  incorrect: "var(--bbui-color-error)",
  skipped: "var(--bbui-color-subtlest)"
}, ml = {
  up: ue.Masters,
  down: "var(--bbui-color-error)",
  unchanged: "var(--bbui-color-subtlest)"
}, fl = {
  Nova: "var(--bbui-persona-nova)",
  Maya: "var(--bbui-persona-maya)",
  Jordan: "var(--bbui-persona-jordan)",
  Custom: "var(--bbui-persona-custom)"
}, nt = {
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
}, An = L(
  ({ variant: e = "default", uppercase: t = !1, style: r, children: l, ...o }, a) => {
    const d = nt[e], s = {
      display: "inline-flex",
      alignItems: "center",
      lineHeight: 1,
      paddingBlock: i.XXSmall,
      paddingInline: t ? i.MediumLarge : i.Medium,
      borderRadius: B.Full,
      fontWeight: t ? A.Black : A.Medium,
      fontSize: t ? w.Micro : w.XXSmall,
      letterSpacing: t ? Tn.Wider : void 0,
      textTransform: t ? "uppercase" : void 0,
      ...d,
      ...r
    };
    return /* @__PURE__ */ n("span", { ref: a, style: s, ...o, children: l });
  }
);
An.displayName = "Badge";
const tt = {
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
    const y = c !== void 0 || e !== void 0, v = e === !0, X = a ?? (l ? w.XXSmall : w.XSmall), M = l ? { block: i.XXSmall, inline: i.XSmall } : tt[r];
    let O, C;
    if (l) {
      const F = rt[l];
      O = F.backgroundColor, C = F.color;
    } else
      O = v ? x.Brand : t === "outlined" ? x.Transparent : x.Subtle, C = v ? p.OnBrand : p.Default;
    const R = !l && t === "outlined" && !v ? `1px solid ${z.Outline}` : "1px solid transparent", T = {
      display: "inline-flex",
      alignItems: "center",
      gap: i.XSmall,
      paddingBlock: M.block,
      paddingInline: M.inline,
      borderRadius: B.Full,
      backgroundColor: O,
      color: C,
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
    }, W = s && v ? /* @__PURE__ */ n(
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
          W,
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
lt.displayName = "Chip";
const Mn = {
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
    children: e,
    borderRadius: t = B.XLarge,
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
    const h = ve(() => `bbui-liquid-glass-${++at}`, []), g = {
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
            backdropFilter: `blur(${Mn[r]})`,
            WebkitBackdropFilter: `blur(${Mn[r]})`,
            filter: `url(#${h})`
          }
        }
      ),
      /* @__PURE__ */ n("div", { style: { ...y, zIndex: 1, boxShadow: ot[l] } }),
      /* @__PURE__ */ n("div", { style: { ...y, zIndex: 2, boxShadow: it[o] } }),
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
st.displayName = "LiquidGlass";
const dt = "40px", ct = "24px", Be = "20px", Ln = i.XXSmall, ut = L(
  ({ checked: e, defaultChecked: t = !1, onChange: r, label: l, style: o, ...a }, d) => {
    const [s, c] = P(t), b = e !== void 0, u = b ? e : s, m = Q(() => {
      const y = !u;
      b || c(y), r == null || r(y);
    }, [u, b, r]), h = {
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
    }, g = {
      position: "absolute",
      width: Be,
      height: Be,
      borderRadius: B.Full,
      backgroundColor: x.Default,
      transition: "left 150ms ease",
      left: u ? `calc(100% - ${Be} - ${Ln})` : Ln,
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
ut.displayName = "Toggle";
const pt = L(
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
pt.displayName = "LinkButton";
const te = L(
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
const bt = {
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
function ft(e) {
  var r;
  const t = e.trim().split(/\s+/);
  return t.length >= 2 ? (t[0][0] + t[t.length - 1][0]).toUpperCase() : (((r = t[0]) == null ? void 0 : r[0]) ?? "").toUpperCase();
}
const yt = L(
  ({
    src: e,
    name: t,
    size: r = "medium",
    appearance: l = "circle",
    status: o,
    fallbackBackground: a = x.NeutralBold,
    fallbackColor: d = p.Subtle
  }, s) => {
    const [c, b] = P(!1), u = bt[r], m = e && !c, h = t ? ft(t) : "", g = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: u,
      height: u,
      borderRadius: l === "circle" ? B.Full : B.XLarge,
      overflow: "hidden",
      flexShrink: 0,
      ...m ? {} : { backgroundColor: a }
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
            fontSize: ht[r],
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
}, Rn = L(
  ({ size: e = "medium", label: t = "Loading", color: r = p.Brand }, l) => {
    const o = ke().replace(/:/g, ""), a = xt[e], d = vt[e], s = (a - d) / 2, c = 2 * Math.PI * s;
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
Rn.displayName = "Spinner";
const St = L(
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
St.displayName = "TextArea";
function wt(e) {
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
        (y) => wt(y) ? /* @__PURE__ */ n("optgroup", { label: y.label, children: y.options.map((v) => /* @__PURE__ */ n("option", { value: v.value, disabled: v.disabled, children: v.label }, v.value)) }, y.label) : /* @__PURE__ */ n("option", { value: y.value, disabled: y.disabled, children: y.label }, y.value)
      )
    ] });
  }
);
Nn.displayName = "Select";
const kt = {
  small: { box: "16px", font: w.XXSmall, gap: i.XSmall },
  medium: { box: "20px", font: w.XSmall, gap: i.Medium },
  large: { box: "24px", font: w.Small, gap: i.Medium }
}, Xt = ({ size: e }) => /* @__PURE__ */ n(
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
), Ct = L(
  ({ label: e, size: t = "medium", checked: r, disabled: l, style: o, id: a, ...d }, s) => {
    const c = ke(), b = a ?? c, u = kt[t], m = !!r, h = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: u.box,
      height: u.box,
      borderRadius: B.Small,
      flexShrink: 0,
      border: m ? "none" : `2px solid ${z.Outline}`,
      backgroundColor: m ? l ? p.Disabled : x.Brand : x.Transparent,
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
          /* @__PURE__ */ n("span", { style: h, "aria-hidden": "true", children: m && /* @__PURE__ */ n(Xt, { size: `calc(${u.box} - 4px)` }) }),
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
Ct.displayName = "Checkbox";
const Mt = L(
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
Mt.displayName = "Divider";
const Lt = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z", clipRule: "evenodd" }) }), Bt = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { d: "M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" }) }), It = L(
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
          borderRadius: B.Large,
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
              children: /* @__PURE__ */ n(Lt, {})
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
              children: /* @__PURE__ */ n(Bt, {})
            }
          )
        ]
      }
    );
  }
);
It.displayName = "Stepper";
const Dt = () => /* @__PURE__ */ n(
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
), Et = () => /* @__PURE__ */ n(
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
), Tt = L(
  ({
    logo: e,
    navigation: t = [],
    cta: r,
    linkColor: l = p.Subtle,
    ctaBackgroundColor: o = x.Dark,
    ctaColor: a = p.Inverse,
    ctaWeight: d = 500,
    ctaBorderRadius: s = B.Full,
    paddingInline: c = i.XXXLarge,
    paddingBlock: b = i.XLarge,
    linkGap: u = i.XXLarge,
    logoGap: m = i.Size3_5,
    mobileMenuBackground: h = x.Default,
    mobileMenuBorderColor: g = z.Default,
    mobileMenuBorderRadius: y = B.Large,
    mobileBreakpoint: v = 768
  }, X) => {
    const [M, O] = P(!1), [C, R] = P(!1);
    K(() => {
      const I = () => R(window.innerWidth < v);
      return I(), window.addEventListener("resize", I), () => window.removeEventListener("resize", I);
    }, [v]);
    const T = Q((I) => {
      I.target.closest("[data-navbar-menu]") || O(!1);
    }, []);
    K(() => (document.addEventListener("click", T), () => document.removeEventListener("click", T)), [T]);
    const W = oe.isValidElement(e) ? e : /* @__PURE__ */ n(
      Me,
      {
        src: e.src,
        alt: e.alt ?? "Logo",
        style: {
          width: e.width ?? 120,
          height: e.height ?? "auto"
        }
      }
    ), F = /* @__PURE__ */ n(ne, { children: t.map((I, N) => /* @__PURE__ */ n(
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
        children: /* @__PURE__ */ f($, { space: i.XSmall, alignBlock: "center", children: [
          /* @__PURE__ */ n(D, { as: "span", color: a, weight: d, children: r.label }),
          r.icon ?? /* @__PURE__ */ n(zt, {})
        ] })
      }
    ) : null;
    return C ? /* @__PURE__ */ f(S, { as: "header", ref: X, "data-navbar-menu": !0, children: [
      /* @__PURE__ */ n(
        S,
        {
          as: "nav",
          paddingInline: i.Large,
          paddingBlock: b,
          children: /* @__PURE__ */ f($, { alignBlock: "center", spread: "space-between", children: [
            /* @__PURE__ */ n(S, { children: W }),
            /* @__PURE__ */ n(
              de,
              {
                onClick: () => O(!M),
                style: {
                  background: "none",
                  padding: 0,
                  color: p.Subtle
                },
                children: M ? /* @__PURE__ */ n(Et, {}) : /* @__PURE__ */ n(Dt, {})
              }
            )
          ] })
        }
      ),
      M && /* @__PURE__ */ n(
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
    ] }) : /* @__PURE__ */ n(S, { as: "header", ref: X, style: { width: "100%" }, children: /* @__PURE__ */ n(
      S,
      {
        as: "nav",
        paddingInline: c,
        paddingBlock: b,
        style: { width: "100%" },
        children: /* @__PURE__ */ f($, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ n(S, { children: W }),
          /* @__PURE__ */ f(
            $,
            {
              space: u,
              alignBlock: "center",
              grow: "fill",
              style: { marginInlineStart: m },
              children: [
                /* @__PURE__ */ n(
                  $,
                  {
                    space: u,
                    alignBlock: "center",
                    grow: "fill",
                    alignInline: "center",
                    children: F
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
Tt.displayName = "Navbar";
const Bn = () => /* @__PURE__ */ n(
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
    titleWeight: c = A.ExtraBold,
    titleColor: b = p.Default,
    subtitleSize: u = w.Small,
    subtitleColor: m = p.Subtlest,
    primaryCtaBackground: h = x.Dark,
    primaryCtaColor: g = p.Inverse,
    primaryCtaBorderRadius: y = B.Full,
    primaryCtaWeight: v = 500,
    secondaryCtaColor: X = p.Subtle,
    secondaryCtaWeight: M = 500,
    ctaGap: O = i.MediumLarge,
    paddingBlock: C = i.Size7,
    paddingInline: R = i.XXXLarge,
    contentGap: T = i.XHuge,
    textGap: W = i.XLarge,
    textMaxWidth: F = "576px",
    gradient: k,
    breakpoint: I = 768
  }, N) => {
    const [_, j] = P(!1);
    K(() => {
      const J = () => j(window.innerWidth >= I);
      return J(), window.addEventListener("resize", J), () => window.removeEventListener("resize", J);
    }, [I]);
    const G = (k == null ? void 0 : k.enabled) !== !1, U = (k == null ? void 0 : k.css) ?? "linear-gradient(143.6deg, rgba(192,132,252,0) 20.79%, rgba(232,121,249,0.26) 40.92%, rgba(204,171,238,0) 70.35%)", E = (k == null ? void 0 : k.height) ?? "580px", V = (r == null ? void 0 : r.borderColor) ?? z.Default, Z = r ? /* @__PURE__ */ n(
      he,
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
          border: `1px solid ${V}`,
          paddingRight: i.XXLarge
        },
        children: /* @__PURE__ */ f($, { space: i.MediumLarge, alignBlock: "center", children: [
          /* @__PURE__ */ n(
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
            /* @__PURE__ */ n(D, { as: "span", size: w.XSmall, children: r.text }),
            r.icon ?? /* @__PURE__ */ n(Bn, {})
          ] })
        ] })
      }
    ) : null, q = l.length > 0 ? /* @__PURE__ */ n($, { space: O, alignBlock: "center", shouldWrap: !0, children: l.map((J, ce) => {
      const re = (J.variant ?? (ce === 0 ? "primary" : "secondary")) === "primary", ge = re ? v : M;
      return /* @__PURE__ */ n(
        he,
        {
          href: J.path,
          backgroundColor: re ? h : void 0,
          color: re ? g : X,
          paddingBlock: i.Medium,
          paddingInline: i.Large,
          borderRadius: re ? y : void 0,
          weight: ge,
          display: "inline-block",
          style: { textDecoration: "none" },
          children: /* @__PURE__ */ f($, { space: i.XSmall, alignBlock: "center", children: [
            /* @__PURE__ */ n(
              D,
              {
                as: "span",
                color: re ? g : X,
                weight: ge,
                children: J.label
              }
            ),
            J.icon ?? /* @__PURE__ */ n(Bn, {})
          ] })
        },
        ce
      );
    }) }) : null, se = /* @__PURE__ */ f(
      Y,
      {
        space: W,
        style: { maxWidth: F, flexShrink: 0 },
        children: [
          Z,
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
          q
        ]
      }
    ), ee = o && _ ? /* @__PURE__ */ n(S, { style: { flex: "1 1 0%", minWidth: 0 }, children: /* @__PURE__ */ n(
      Me,
      {
        src: o.src,
        alt: o.alt ?? "",
        style: { maxWidth: o.maxWidth ?? "576px" }
      }
    ) }) : null;
    return /* @__PURE__ */ f(S, { as: "section", ref: N, style: { position: "relative" }, children: [
      G && /* @__PURE__ */ n(
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
          paddingInline: R,
          paddingBlock: C,
          children: _ ? /* @__PURE__ */ f($, { space: T, alignBlock: "center", children: [
            se,
            ee
          ] }) : /* @__PURE__ */ n(Y, { space: T, children: se })
        }
      )
    ] });
  }
);
At.displayName = "HeroSection";
const Rt = L(
  ({
    padding: e = i.Large,
    backgroundColor: t = x.Default,
    borderRadius: r = B.XXLarge,
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
Rt.displayName = "Card";
const Nt = L(
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
    inputBackground: b = x.Default,
    inputBorderColor: u = z.Input,
    inputBorderRadius: m = B.Medium,
    inputBorderSide: h = "all",
    inputPadding: g = i.Medium,
    startAdornment: y,
    endAdornment: v,
    name: X,
    type: M,
    placeholder: O,
    value: C,
    defaultValue: R,
    disabled: T,
    readOnly: W,
    required: F,
    autoFocus: k,
    autoComplete: I,
    onChange: N,
    onBlur: _,
    onFocus: j
  }, G) => {
    const U = ke(), E = l ?? U, V = `${E}-helper`, Z = `${E}-error`, q = !!r, ae = q ? z.Error : u, se = h === "bottom", ee = se || !!(y || v), J = /* @__PURE__ */ n(
      Ee,
      {
        ref: G,
        id: E,
        name: X,
        type: M,
        placeholder: O,
        value: C,
        defaultValue: R,
        disabled: T,
        readOnly: W,
        required: F,
        autoFocus: k,
        autoComplete: I,
        onChange: N,
        onBlur: _,
        onFocus: j,
        backgroundColor: ee ? "transparent" : b,
        borderColor: ee ? void 0 : ae,
        borderRadius: ee ? void 0 : m,
        padding: g,
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
      ...se ? { borderBottom: `2px solid ${ae}` } : { border: `1px solid ${ae}`, borderRadius: m }
    }, children: [
      y,
      J,
      v
    ] }) : J;
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
      q && /* @__PURE__ */ n(D, { as: "span", size: w.XXSmall, color: p.Error, id: Z, children: r }),
      !q && t && /* @__PURE__ */ n(D, { as: "span", size: w.XXSmall, color: p.Subtle, id: V, children: t })
    ] });
  }
);
Nt.displayName = "TextField";
const $t = {
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
}, Wt = () => /* @__PURE__ */ n(
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
), Ft = L(
  ({ variant: e = "info", icon: t, dismissible: r, onDismiss: l, children: o }, a) => {
    const d = $t[e];
    return /* @__PURE__ */ n(
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
          zIndex: pe.Banner
        },
        children: /* @__PURE__ */ f($, { space: i.Medium, alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ f($, { space: i.Medium, alignBlock: "center", grow: "fill", children: [
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
              children: /* @__PURE__ */ n(Wt, {})
            }
          )
        ] })
      }
    );
  }
);
Ft.displayName = "Banner";
const $n = L(
  ({
    sections: e,
    activeId: t,
    onSelect: r,
    activeColor: l = p.Brand,
    activeBackground: o = x.Subtle
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
          borderRadius: B.Medium,
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
          children: /* @__PURE__ */ f($, { space: i.Medium, alignBlock: "center", children: [
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
$n.displayName = "Menu";
const Ot = L(
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
    var O;
    const [m, h] = P(
      r ?? ((O = e[0]) == null ? void 0 : O.id)
    ), g = t !== void 0, y = g ? t : m, v = (C) => {
      g || h(C), l == null || l(C);
    }, X = e.find((C) => C.id === y);
    return /* @__PURE__ */ f(S, { ref: u, children: [
      o === "pill" ? /* @__PURE__ */ n(
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
          children: e.map((C) => {
            const R = C.id === y;
            return /* @__PURE__ */ n(
              de,
              {
                role: "tab",
                "aria-selected": R,
                "aria-controls": `tabpanel-${C.id}`,
                id: `tab-${C.id}`,
                disabled: C.disabled,
                onClick: () => v(C.id),
                paddingBlock: i.Medium,
                paddingInline: i.XXLarge,
                borderRadius: B.XLarge,
                color: R ? p.Default : C.disabled ? p.Disabled : d,
                backgroundColor: R ? c : x.Transparent,
                style: {
                  fontWeight: R ? A.Bold : A.Medium,
                  fontSize: w.XSmall,
                  boxShadow: R ? be.Raised : "none",
                  cursor: C.disabled ? "default" : "pointer"
                },
                children: C.label
              },
              C.id
            );
          })
        }
      ) : /* @__PURE__ */ n(
        $,
        {
          as: "div",
          role: "tablist",
          space: i.None,
          style: {
            borderBottom: `1px solid ${z.Default}`
          },
          children: e.map((C) => {
            const R = C.id === y;
            return /* @__PURE__ */ n(
              de,
              {
                role: "tab",
                "aria-selected": R,
                "aria-controls": `tabpanel-${C.id}`,
                id: `tab-${C.id}`,
                disabled: C.disabled,
                onClick: () => v(C.id),
                paddingBlock: i.Medium,
                paddingInline: i.Large,
                borderRadius: B.None,
                color: R ? a : C.disabled ? p.Disabled : d,
                style: {
                  background: "none",
                  fontWeight: R ? A.Semibold : A.Regular,
                  fontSize: w.XSmall,
                  borderBottom: R ? `2px solid ${a}` : "2px solid transparent",
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
Ot.displayName = "Tabs";
const Ht = L(
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
        r && r.length > 0 && /* @__PURE__ */ n($, { space: i.XSmall, alignBlock: "center", children: r.map((h, g) => /* @__PURE__ */ f(oe.Fragment, { children: [
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
        /* @__PURE__ */ f($, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ f(Y, { space: i.XXSmall, children: [
            /* @__PURE__ */ n(D, { as: "h1", size: o, weight: a, color: d, children: e }),
            t && /* @__PURE__ */ n(D, { as: "p", size: w.XSmall, color: s, children: t })
          ] }),
          l && /* @__PURE__ */ n($, { space: i.Medium, alignBlock: "center", children: l })
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
}, Pt = () => /* @__PURE__ */ n(
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
), Vt = L(
  ({ open: e, onClose: t, title: r, children: l, footer: o, size: a = jt.Medium }, d) => {
    const s = Q(
      (c) => {
        c.key === "Escape" && t();
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
              borderRadius: B.XLarge,
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
                    children: /* @__PURE__ */ f($, { alignBlock: "center", spread: "space-between", children: [
                      /* @__PURE__ */ n(D, { as: "h2", size: w.Large, weight: A.Semibold, color: p.Default, children: r }),
                      /* @__PURE__ */ n(te, { label: "Close", onClick: t, color: p.Subtle, children: /* @__PURE__ */ n(Pt, {}) })
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
Vt.displayName = "Modal";
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
  closeOnMouseLeave: c = !1
}) {
  const [b, u] = P(e), [m, h] = P(!1), g = H(l), y = H(d);
  if (K(() => {
    if (e) {
      u(!0);
      const M = requestAnimationFrame(() => h(!0));
      return () => cancelAnimationFrame(M);
    }
    h(!1);
    const X = window.setTimeout(() => u(!1), Ie);
    return () => window.clearTimeout(X);
  }, [e]), K(() => {
    if (!e) return;
    const X = (M) => {
      M.key === "Escape" && t();
    };
    return document.addEventListener("keydown", X), () => document.removeEventListener("keydown", X);
  }, [e, t]), !b) return null;
  const v = typeof g == "number" ? `${g}px` : g;
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
          opacity: m ? 1 : 0,
          transition: `opacity ${Ie}ms ease`
        },
        children: [
          /* @__PURE__ */ n(
            S,
            {
              onClick: (X) => X.stopPropagation(),
              onMouseLeave: c ? t : void 0,
              backgroundColor: x.Default,
              padding: o,
              style: {
                display: "flex",
                justifyContent: _t[y],
                width: "100%",
                transform: m ? "translateY(0)" : "translateY(-12px)",
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
const Gt = L(
  ({ trigger: e, sections: t, activeId: r, onSelect: l }, o) => {
    const [a, d] = P(!1), s = ie(null), c = () => d((h) => !h), b = (h) => {
      l == null || l(h), d(!1);
    }, u = Q((h) => {
      h.key === "Escape" && d(!1);
    }, []), m = Q((h) => {
      s.current && !s.current.contains(h.target) && d(!1);
    }, []);
    return K(() => {
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
            $,
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
              borderRadius: B.Large,
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
Gt.displayName = "DropdownMenu";
const Kt = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), Ut = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), qt = L(
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
    borderColor: m = z.Default
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
              g.items.map((v) => {
                const X = v.id === t;
                return /* @__PURE__ */ f(
                  de,
                  {
                    onClick: () => r == null ? void 0 : r(v.id),
                    title: a ? v.label : void 0,
                    borderRadius: B.Medium,
                    color: X ? b : p.Default,
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
                      v.icon && /* @__PURE__ */ n(S, { style: { flexShrink: 0 }, children: v.icon }),
                      !a && /* @__PURE__ */ f(ne, { children: [
                        /* @__PURE__ */ n(D, { as: "span", style: { flex: "1 1 auto", color: "inherit" }, children: v.label }),
                        v.badge && /* @__PURE__ */ n(An, { variant: v.badgeVariant ?? "default", children: v.badge })
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
            style: { borderTop: `1px solid ${m}` },
            children: /* @__PURE__ */ n(
              te,
              {
                label: a ? "Expand sidebar" : "Collapse sidebar",
                onClick: d,
                color: p.Subtle,
                padding: i.XSmall,
                children: a ? /* @__PURE__ */ n(Ut, {}) : /* @__PURE__ */ n(Kt, {})
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
qt.displayName = "Sidebar";
const Jt = () => /* @__PURE__ */ n(
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
), Zt = L(
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
    if (K(() => {
      if (e)
        return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
    }, [e, c]), !e) return null;
    const b = /* @__PURE__ */ f(
      S,
      {
        ref: s,
        backgroundColor: x.Default,
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
              children: /* @__PURE__ */ f($, { alignBlock: "center", spread: "space-between", children: [
                /* @__PURE__ */ n(D, { as: "h2", size: w.Large, weight: A.Semibold, color: p.Default, children: r }),
                /* @__PURE__ */ n(te, { label: "Close panel", onClick: t, color: p.Subtle, children: /* @__PURE__ */ n(Jt, {}) })
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
Zt.displayName = "Panel";
const Qt = L(
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
Qt.displayName = "Aside";
const er = L(
  ({
    topNav: e,
    sideNav: t,
    mobileNav: r,
    backgroundColor: l = x.Surface,
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
er.displayName = "Layout";
const nr = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
function In(e, t) {
  return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
function tr(e, t) {
  return new Date(e, t + 1, 0).getDate();
}
function rr(e, t) {
  return new Date(e, t, 1).getDay();
}
const lr = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), ir = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), or = [
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
], ar = L(
  ({
    value: e,
    defaultValue: t,
    onChange: r,
    min: l,
    max: o,
    selectedColor: a = p.Inverse,
    selectedBackground: d = x.Brand
  }, s) => {
    const c = /* @__PURE__ */ new Date(), [b, u] = P(t), m = e !== void 0, h = m ? e : b, [g, y] = P(
      (h ?? c).getFullYear()
    ), [v, X] = P(
      (h ?? c).getMonth()
    ), M = ve(() => tr(g, v), [g, v]), O = ve(() => rr(g, v), [g, v]), C = () => {
      v === 0 ? (X(11), y((k) => k - 1)) : X((k) => k - 1);
    }, R = () => {
      v === 11 ? (X(0), y((k) => k + 1)) : X((k) => k + 1);
    }, T = (k) => {
      const I = new Date(g, v, k);
      m || u(I), r == null || r(I);
    }, W = (k) => {
      const I = new Date(g, v, k);
      return !!(l && I < new Date(l.getFullYear(), l.getMonth(), l.getDate()) || o && I > new Date(o.getFullYear(), o.getMonth(), o.getDate()));
    }, F = [];
    for (let k = 0; k < O; k++)
      F.push(/* @__PURE__ */ n(S, {}, `empty-${k}`));
    for (let k = 1; k <= M; k++) {
      const I = new Date(g, v, k), N = h ? In(I, h) : !1, _ = In(I, c), j = W(k);
      F.push(
        /* @__PURE__ */ n(
          de,
          {
            disabled: j,
            onClick: () => T(k),
            borderRadius: B.Medium,
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
                /* @__PURE__ */ n(te, { label: "Previous month", onClick: C, color: p.Subtle, padding: i.XSmall, children: /* @__PURE__ */ n(lr, {}) }),
                /* @__PURE__ */ f(D, { as: "span", size: w.XSmall, weight: A.Semibold, color: p.Default, children: [
                  or[v],
                  " ",
                  g
                ] }),
                /* @__PURE__ */ n(te, { label: "Next month", onClick: R, color: p.Subtle, padding: i.XSmall, children: /* @__PURE__ */ n(ir, {}) })
              ]
            }
          ),
          /* @__PURE__ */ f(zn, { columns: 7, gap: i.XXSmall, children: [
            nr.map((k) => /* @__PURE__ */ n(
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
            F
          ] })
        ]
      }
    );
  }
);
ar.displayName = "Calendar";
const sr = L(
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
              fontFamily: Zn.Display,
              size: w.XLarge,
              weight: A.Bold,
              color: p.Default,
              children: e
            }
          ),
          t && /* @__PURE__ */ n(D, { as: "p", size: w.XSmall, color: p.Subtle, lineHeight: 1.6, children: t })
        ] }),
        (l || o) && /* @__PURE__ */ f($, { space: i.Medium, alignBlock: "center", children: [
          l,
          o
        ] })
      ]
    }
  )
);
sr.displayName = "EmptyState";
const dr = ({ order: e }) => /* @__PURE__ */ n(
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
), cr = L(
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
    const [v, X] = P(a), [M, O] = P(c), [C, R] = P(b), T = o !== void 0, W = T ? o : v, F = d !== void 0, k = F ? d : M, I = F ? s ?? "ASC" : C, N = l ? Math.max(1, Math.ceil(r.length / l)) : 1, _ = ve(() => {
      if (!l) return r;
      const E = (W - 1) * l;
      return r.slice(E, E + l);
    }, [r, l, W]), j = (E) => {
      const V = k === E && I === "ASC" ? "DESC" : "ASC";
      F || (O(E), R(V)), u == null || u(E, V);
    }, G = (E) => {
      T || X(E), m == null || m(E);
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
            borderRadius: B.XXLarge
          },
          children: /* @__PURE__ */ n(Rn, { size: "large" })
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
                  ...U,
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
                    dr,
                    {
                      order: k === E.key ? I : void 0
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
                  children: E.cells.map((V, Z) => /* @__PURE__ */ n("td", { style: { ...U, color: p.Default }, children: V }, Z))
                },
                E.key
              )),
              _.length === 0 && /* @__PURE__ */ n("tr", { children: /* @__PURE__ */ n(
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
      l && N > 1 && /* @__PURE__ */ f(
        $,
        {
          space: i.Medium,
          alignBlock: "center",
          alignInline: "center",
          style: { paddingBlock: i.Large },
          children: [
            /* @__PURE__ */ n(
              de,
              {
                disabled: W <= 1,
                onClick: () => G(W - 1),
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
              N
            ] }),
            /* @__PURE__ */ n(
              de,
              {
                disabled: W >= N,
                onClick: () => G(W + 1),
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
cr.displayName = "Table";
const ur = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z", clipRule: "evenodd" }) }), pr = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ n("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" }) }), br = L(
  ({
    defaultValue: e,
    label: t,
    editButtonLabel: r,
    editView: l,
    readView: o,
    onConfirm: a,
    onCancel: d
  }, s) => {
    const [c, b] = P(!1), [u, m] = P(e);
    ie(null), K(() => {
      m(e);
    }, [e]);
    const h = Q(() => {
      b(!1), a(u);
    }, [u, a]), g = Q(() => {
      m(e), b(!1), d == null || d();
    }, [e, d]), y = Q(
      (M) => {
        M.key === "Enter" && h(), M.key === "Escape" && g();
      },
      [h, g]
    ), v = (M) => /* @__PURE__ */ n(
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
        children: /* @__PURE__ */ n(D, { as: "span", size: w.Small, color: p.Default, children: M || " " })
      }
    ), X = (M) => /* @__PURE__ */ n(
      Ee,
      {
        value: M.value,
        onChange: M.onChange,
        onKeyDown: M.onKeyDown,
        autoFocus: M.autoFocus,
        backgroundColor: x.Default,
        borderColor: z.Focus,
        borderRadius: B.Medium,
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
      c ? /* @__PURE__ */ f($, { space: i.XSmall, alignBlock: "start", children: [
        /* @__PURE__ */ n(S, { style: { flex: "1 1 auto" }, children: (l ?? X)({
          value: u,
          onChange: (M) => m(M.target.value),
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
            children: /* @__PURE__ */ n(ur, {})
          }
        ),
        /* @__PURE__ */ n(
          te,
          {
            label: "Cancel",
            onClick: g,
            color: p.Error,
            padding: i.XSmall,
            children: /* @__PURE__ */ n(pr, {})
          }
        )
      ] }) : /* @__PURE__ */ n(
        S,
        {
          onClick: () => b(!0),
          role: "button",
          tabIndex: 0,
          "aria-label": r ?? e ?? "Edit",
          onKeyDown: (M) => {
            (M.key === "Enter" || M.key === " ") && (M.preventDefault(), b(!0));
          },
          style: { cursor: "pointer" },
          children: (o ?? v)(e)
        }
      )
    ] });
  }
);
br.displayName = "InlineEdit";
const hr = () => /* @__PURE__ */ n("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "currentColor", style: { width: "14px", height: "14px" }, children: /* @__PURE__ */ n("path", { fillRule: "evenodd", d: "M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z", clipRule: "evenodd" }) }), gr = L(
  ({ trigger: e, groups: t, checked: r, onChange: l }, o) => {
    const [a, d] = P(!1), s = ie(null), c = Q((u) => {
      u.key === "Escape" && d(!1);
    }, []), b = Q((u) => {
      s.current && !s.current.contains(u.target) && d(!1);
    }, []);
    return K(() => {
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
            $,
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
              borderRadius: B.XLarge,
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
                        /* @__PURE__ */ n(
                          S,
                          {
                            style: {
                              width: "16px",
                              height: "16px",
                              borderRadius: B.Small,
                              border: g ? "none" : `2px solid ${z.Outline}`,
                              backgroundColor: g ? x.Brand : x.Transparent,
                              color: p.Inverse,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0
                            },
                            children: g && /* @__PURE__ */ n(hr, {})
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
gr.displayName = "DropdownCheckboxMenu";
const mr = L(
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
    inputBackground: b = x.Subtle,
    inputBorderColor: u,
    inputBorderRadius: m = B.XXLarge,
    inputBorderSide: h = "all",
    inputPadding: g = i.MediumLarge,
    name: y,
    value: v,
    defaultValue: X,
    placeholder: M,
    options: O,
    disabled: C,
    required: R,
    onChange: T,
    onBlur: W
  }, F) => {
    const k = ke(), I = l ?? k, N = `${I}-helper`, _ = `${I}-error`, j = !!r, G = j ? z.Error : u, U = h === "bottom", E = /* @__PURE__ */ n(
      Nn,
      {
        ref: F,
        id: I,
        name: y,
        value: v,
        defaultValue: X,
        placeholder: M,
        options: O,
        disabled: C,
        required: R,
        onChange: T,
        onBlur: W,
        backgroundColor: U ? "transparent" : b,
        borderColor: U ? void 0 : G,
        borderRadius: U ? void 0 : m,
        padding: g,
        fontSize: w.XSmall,
        color: p.Default,
        style: { width: "100%" },
        "aria-describedby": j ? _ : t ? N : void 0,
        "aria-invalid": j || void 0
      }
    ), V = U ? /* @__PURE__ */ n("div", { style: {
      width: "100%",
      backgroundColor: b,
      borderBottom: `2px solid ${G}`
    }, children: E }) : E;
    return /* @__PURE__ */ f(Y, { space: i.XSmall, children: [
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
      j && /* @__PURE__ */ n(D, { as: "span", size: w.XXSmall, color: p.Error, id: _, children: r }),
      !j && t && /* @__PURE__ */ n(D, { as: "span", size: w.XXSmall, color: p.Subtle, id: N, children: t })
    ] });
  }
);
mr.displayName = "SelectField";
const fr = {
  info: { bg: x.Default, text: p.Info, accent: "#3b82f6" },
  success: { bg: x.Default, text: p.Success, accent: "#22c55e" },
  warning: { bg: x.Default, text: p.Warning, accent: "#f59e0b" },
  error: { bg: x.Default, text: p.Error, accent: "#ba1a1a" }
}, yr = () => /* @__PURE__ */ n(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "14px", height: "14px" },
    children: /* @__PURE__ */ n("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  }
), xr = L(
  ({ open: e, onClose: t, duration: r = 5e3, variant: l = "info", icon: o, children: a }, d) => {
    if (K(() => {
      if (!e || r === 0) return;
      const c = setTimeout(t, r);
      return () => clearTimeout(c);
    }, [e, r, t]), !e) return null;
    const s = fr[l];
    return Xe(
      /* @__PURE__ */ n(
        S,
        {
          ref: d,
          role: "alert",
          "aria-live": "assertive",
          backgroundColor: s.bg,
          borderRadius: B.XXLarge,
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
          children: /* @__PURE__ */ f($, { space: i.MediumLarge, alignBlock: "center", spread: "space-between", children: [
            /* @__PURE__ */ f($, { space: i.MediumLarge, alignBlock: "center", grow: "fill", children: [
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
                children: /* @__PURE__ */ n(yr, {})
              }
            )
          ] })
        }
      ),
      document.body
    );
  }
);
xr.displayName = "Toast";
const vr = L(
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
        backgroundColor: x.Default,
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
        return /* @__PURE__ */ f(oe.Fragment, { children: [
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
vr.displayName = "MobileNav";
const Sr = () => /* @__PURE__ */ n(
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
), wr = L(
  ({ items: e, showLabels: t, variant: r = "dot" }, l) => {
    const o = H(t ?? !0), a = 32, d = e.filter((s) => s.status === "visited").length;
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
              borderRadius: B.Full,
              background: u ? xe.Brand : "none",
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
                size: w.Micro,
                weight: u ? A.Bold : A.Medium,
                color: u ? p.Brand : b ? p.Subtle : p.Disabled,
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
          }, children: e.map((s, c) => {
            const b = c === e.length - 1, u = s.status === "visited", m = s.status === "current", h = s.status === "disabled", g = u ? xe.Brand : m ? "transparent" : x.NeutralBold, y = /* @__PURE__ */ n(
              "div",
              {
                style: {
                  width: a,
                  height: a,
                  borderRadius: B.Full,
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
                children: u ? /* @__PURE__ */ n(Sr, {}) : c + 1
              }
            ), v = s.href ? /* @__PURE__ */ n("a", { href: s.href, style: { textDecoration: "none", color: "inherit" }, children: y }) : y;
            return /* @__PURE__ */ f(oe.Fragment, { children: [
              v,
              !b && /* @__PURE__ */ n("div", { style: {
                flex: "1 1 auto",
                height: 2,
                backgroundColor: x.NeutralBold,
                position: "relative",
                marginInline: i.XSmall,
                borderRadius: B.Full,
                overflow: "hidden"
              }, children: /* @__PURE__ */ n("div", { style: {
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: `${u ? s.percentageComplete : 0}%`,
                background: xe.Brand,
                borderRadius: B.Full,
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
            return /* @__PURE__ */ f(oe.Fragment, { children: [
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
wr.displayName = "ProgressTracker";
const kr = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";
function Xr(e) {
  const t = /* @__PURE__ */ f($, { space: i.XSmall, alignBlock: "center", children: [
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
function Cr(e) {
  return /* @__PURE__ */ n(
    Me,
    {
      src: e.src,
      alt: e.alt,
      width: e.width ?? i.Size8,
      height: e.height ?? i.Size8,
      objectFit: "cover",
      borderRadius: B.Medium,
      style: { opacity: 0.8 }
    }
  );
}
const Mr = L(
  ({
    icon: e,
    heading: t,
    description: r,
    action: l,
    media: o,
    padding: a = i.XXLarge,
    borderRadius: d = B.XXLarge,
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
      backgroundImage: `url("${kr}")`,
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
      l && Xr(l),
      u
    ] });
    return /* @__PURE__ */ f(S, { ref: m, padding: a, style: h, children: [
      /* @__PURE__ */ n("div", { style: g, "aria-hidden": "true" }),
      o ? /* @__PURE__ */ f($, { space: i.XXLarge, alignBlock: "center", children: [
        y,
        /* @__PURE__ */ n("div", { style: { flexShrink: 0 }, children: Cr(o) })
      ] }) : y
    ] });
  }
);
Mr.displayName = "GlassCard";
const Lr = `
@keyframes bbui-pulse-down {
  0%, 100% { transform: translateY(0); opacity: 0.4 }
  50%      { transform: translateY(3px); opacity: 0.9 }
}
`, Dn = "36px", Br = "18px", Ir = L(
  ({ items: e, onComplete: t, finishedLabel: r, maxHeight: l = "256px" }, o) => {
    const [a, d] = P(() => /* @__PURE__ */ new Set()), s = ie(!1), c = ie(null), b = ie([]), u = a.size >= e.length;
    return K(() => {
      u && !s.current && (s.current = !0, t == null || t());
    }, [u, t]), K(() => {
      const m = c.current;
      if (!m) return;
      const h = new IntersectionObserver(
        (g) => {
          d((y) => {
            let v = y;
            for (const X of g) {
              if (!X.isIntersecting) continue;
              const M = Number(X.target.dataset.idx);
              y.has(M) || (v === y && (v = new Set(y)), v.add(M));
            }
            return v;
          });
        },
        { root: m, threshold: 0.6 }
      );
      return b.current.forEach((g) => g && h.observe(g)), () => h.disconnect();
    }, [e.length]), /* @__PURE__ */ f("div", { ref: o, style: { width: "100%", position: "relative" }, children: [
      /* @__PURE__ */ n("style", { children: Lr }),
      /* @__PURE__ */ n("div", { ref: c, style: zr(l, u), children: /* @__PURE__ */ n(Y, { space: i.MediumLarge, children: e.map((m, h) => {
        const g = a.has(h);
        return /* @__PURE__ */ f(
          "div",
          {
            ref: (y) => b.current[h] = y,
            "data-idx": h,
            style: Tr(g),
            children: [
              /* @__PURE__ */ n(Dr, { item: m }),
              h < e.length - 1 && /* @__PURE__ */ n("span", { "aria-hidden": "true", style: Wr(g) })
            ]
          },
          m.id ?? h
        );
      }) }) }),
      /* @__PURE__ */ n("div", { style: Fr, children: u ? r : /* @__PURE__ */ n(Er, {}) })
    ] });
  }
);
Ir.displayName = "RevealSteps";
function Dr({ item: e }) {
  return /* @__PURE__ */ f("div", { style: Ar, children: [
    /* @__PURE__ */ n("span", { "aria-hidden": "true", style: Rr, children: e.icon }),
    /* @__PURE__ */ f("span", { style: Nr, children: [
      /* @__PURE__ */ n(D, { as: "span", size: w.Small, weight: A.Medium, children: e.label }),
      e.description && /* @__PURE__ */ n(D, { as: "span", size: w.XSmall, color: p.Subtle, children: e.description })
    ] }),
    e.meta && /* @__PURE__ */ n("span", { style: $r, children: e.meta })
  ] });
}
function Er() {
  return /* @__PURE__ */ n("div", { style: Or, "aria-hidden": "true", children: /* @__PURE__ */ n(
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
}), Tr = (e) => ({
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
  background: x.Subtle,
  borderRadius: B.Large,
  border: `1px solid ${z.Default}`,
  color: p.Default
}, Rr = {
  width: Dn,
  height: Dn,
  flexShrink: 0,
  borderRadius: B.Medium,
  background: x.Subtle,
  color: p.Default,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
}, Nr = {
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: i.XXSmall
}, $r = {
  flexShrink: 0,
  display: "inline-flex",
  alignItems: "center"
}, Wr = (e) => ({
  position: "absolute",
  left: `calc(${i.MediumLarge} + ${Br} - 1px)`,
  top: "100%",
  height: i.MediumLarge,
  width: "2px",
  background: z.Default,
  opacity: e ? 1 : 0,
  transition: "opacity 300ms ease-out",
  pointerEvents: "none"
}), Fr = {
  marginTop: i.Large,
  display: "flex",
  justifyContent: "center",
  minHeight: "20px"
}, Or = {
  color: p.Subtle,
  animation: "bbui-pulse-down 1500ms ease-in-out infinite",
  display: "inline-flex"
}, Hr = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree"
], jr = L(
  ({ value: e, onChange: t, labels: r = Hr }, l) => {
    const [o, a] = P(null);
    return /* @__PURE__ */ n("div", { ref: l, role: "radiogroup", style: Pr, children: r.map((d, s) => {
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
          style: Vr(b, !b && o === c),
          children: d
        },
        c
      );
    }) });
  }
);
jr.displayName = "LikertScale";
const Pr = {
  display: "flex",
  flexDirection: "column",
  gap: i.Medium,
  width: "100%"
}, Vr = (e, t) => {
  const r = "var(--bbui-color-primary)", l = e ? "var(--bbui-bg-primary-container)" : t ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)", o = e || t ? r : "rgba(255,255,255,0.08)";
  return {
    width: "100%",
    height: "48px",
    padding: `0 ${i.MediumLarge}`,
    borderRadius: B.Large,
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
function yl(e) {
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
function _r(e) {
  typeof document > "u" || (e === "system" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", e));
}
function xl() {
  const [e, t] = P(() => typeof localStorage > "u" ? "system" : localStorage.getItem("bbui-theme") ?? "system"), [r, l] = P(
    () => e === "system" ? De() : e
  ), o = Q((a) => {
    t(a), typeof localStorage < "u" && (a === "system" ? localStorage.removeItem("bbui-theme") : localStorage.setItem("bbui-theme", a));
  }, []);
  return K(() => {
    _r(e), l(e === "system" ? De() : e);
  }, [e]), K(() => {
    if (e !== "system") return;
    const a = window.matchMedia("(prefers-color-scheme: dark)"), d = () => l(De());
    return a.addEventListener("change", d), () => a.removeEventListener("change", d);
  }, [e]), { theme: e, resolvedTheme: r, setTheme: o };
}
async function* Yr(e, t) {
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
async function* Gr(e, t = {}) {
  const r = await fetch(e, t);
  if (!r.ok) {
    const l = await r.text().catch(() => "");
    throw new Error(
      `SSE request failed ${r.status} ${r.statusText}: ${l}`
    );
  }
  yield* Yr(r, t.signal);
}
function vl(e = {}) {
  const { onEvent: t, onComplete: r, onError: l, retain: o = !0 } = e, [a, d] = P([]), [s, c] = P(null), [b, u] = P(!1), [m, h] = P(null), g = ie(null), y = ie(!0), v = ie(t), X = ie(r), M = ie(l);
  K(() => {
    v.current = t, X.current = r, M.current = l;
  }), K(() => (y.current = !0, () => {
    var T;
    y.current = !1, (T = g.current) == null || T.abort();
  }), []);
  const O = Q(() => {
    var T;
    (T = g.current) == null || T.abort(), g.current = null;
  }, []), C = Q(() => {
    d([]), c(null), h(null);
  }, []), R = Q(
    async (T, W = {}) => {
      var k, I, N, _;
      (k = g.current) == null || k.abort();
      const F = new AbortController();
      g.current = F, y.current && (d([]), c(null), h(null), u(!0));
      try {
        for await (const j of Gr(T, {
          ...W,
          signal: F.signal
        })) {
          if (!y.current) return;
          o && d((G) => [...G, j]), c(j), (I = v.current) == null || I.call(v, j);
        }
        y.current && ((N = X.current) == null || N.call(X));
      } catch (j) {
        if (F.signal.aborted) return;
        const G = j instanceof Error ? j : new Error(String(j));
        y.current && (h(G), (_ = M.current) == null || _.call(M, G));
      } finally {
        y.current && g.current === F && (u(!1), g.current = null);
      }
    },
    [o]
  );
  return { events: a, lastEvent: s, isStreaming: b, error: m, start: R, abort: O, reset: C };
}
export {
  ul as AccentColor,
  tl as AlignItems,
  ll as AlignSelf,
  he as Anchor,
  Qt as Aside,
  yt as Avatar,
  x as BackgroundColor,
  An as Badge,
  Ft as Banner,
  ue as BloomColor,
  le as BloomLevel,
  z as BorderColor,
  B as BorderRadius,
  cl as BorderWidth,
  S as Box,
  wn as Breakpoint,
  de as Button,
  ar as Calendar,
  Rt as Card,
  Ct as Checkbox,
  lt as Chip,
  pl as ContainerWidth,
  sl as Cursor,
  ml as DirectionColor,
  nl as Display,
  Mt as Divider,
  Yt as Drawer,
  gr as DropdownCheckboxMenu,
  Gt as DropdownMenu,
  be as Elevation,
  sr as EmptyState,
  gl as EvaluationResultColor,
  il as FlexDirection,
  ol as FlexWrap,
  Zn as FontFamily,
  w as FontSize,
  Qr as FontStyle,
  A as FontWeight,
  Mr as GlassCard,
  xe as Gradient,
  zn as Grid,
  Ht as Header,
  At as HeroSection,
  Zr as Hide,
  Jn as Icon,
  te as IconButton,
  bl as IconSize,
  Me as Image,
  $ as Inline,
  br as InlineEdit,
  rl as JustifyContent,
  er as Layout,
  Tn as LetterSpacing,
  jr as LikertScale,
  pt as LinkButton,
  st as LiquidGlass,
  $n as Menu,
  vr as MobileNav,
  Vt as Modal,
  jt as ModalSize,
  Tt as Navbar,
  Zt as Panel,
  fl as PersonaAccent,
  al as Position,
  wr as ProgressTracker,
  Ir as RevealSteps,
  Nn as Select,
  mr as SelectField,
  Jr as Show,
  qt as Sidebar,
  i as Spacing,
  Rn as Spinner,
  Y as Stack,
  It as Stepper,
  cr as Table,
  Ot as Tabs,
  D as Text,
  St as TextArea,
  p as TextColor,
  Nt as TextField,
  Ee as TextInput,
  el as TextTransform,
  xr as Toast,
  ut as Toggle,
  dl as WhiteSpace,
  pe as ZIndex,
  Qn as bloomColorFor,
  et as bloomLevelForScore,
  Yr as parseSSEStream,
  hl as scoreColor,
  Gr as streamSSE,
  Ce as useBreakpoint,
  yl as useMediaQuery,
  H as useResponsiveValue,
  vl as useSSEStream,
  xl as useTheme
};
