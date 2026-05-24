import ne, { useState as H, useEffect as K, forwardRef as L, Fragment as vt, useMemo as ve, useCallback as J, useId as ke, useRef as te } from "react";
import { jsx as e, Fragment as Z, jsxs as f } from "react/jsx-runtime";
import { createPortal as Xe } from "react-dom";
const Qe = {
  /** 0–639px */
  Mobile: 0,
  /** 640–1023px */
  Tablet: 640,
  /** 1024px+ */
  Desktop: 1024
};
function et(t) {
  return t >= Qe.Desktop ? "desktop" : t >= Qe.Tablet ? "tablet" : "mobile";
}
function Ce() {
  const [t, n] = H(
    () => typeof window < "u" ? et(window.innerWidth) : "desktop"
  );
  return K(() => {
    const r = () => n(et(window.innerWidth));
    return window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []), t;
}
function St(t, n) {
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
function V(t) {
  const n = Ce();
  return St(t, n);
}
const fe = (t) => {
  if (t !== void 0)
    return Array.isArray(t) ? t.join(" ") : t;
}, S = L(
  ({
    as: t = "div",
    padding: n,
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
    borderSide: O,
    borderWidth: M = "1px",
    overflow: T,
    elevation: A,
    width: F,
    maxWidth: N,
    height: k,
    minHeight: B,
    maxHeight: $,
    minWidth: Y,
    display: j,
    alignItems: P,
    justifyContent: G,
    alignSelf: E,
    flexDirection: U,
    flexWrap: re,
    flex: le,
    flexGrow: pe,
    flexShrink: de,
    gap: ie,
    position: q,
    inset: be,
    zIndex: ce,
    color: ye,
    opacity: Ee,
    cursor: ze,
    whiteSpace: Te,
    pointerEvents: Re,
    style: gt,
    children: mt,
    ...ft
  }, yt) => {
    const Ae = fe(V(n)), Ne = fe(V(r)), $e = V(l), We = V(o), Fe = fe(V(a)), Oe = V(d), He = V(s), je = fe(V(c)), Pe = fe(V(b)), Ve = V(u), Ye = V(m), _e = fe(V(h)), Ke = V(g), Ge = V(y), Ue = V(j), Je = V(P), qe = V(G), Ze = V(U), ge = C ? `${M} solid ${C}` : void 0, me = {};
    if (ge && O)
      switch (O) {
        case "top":
          me.borderTop = ge;
          break;
        case "bottom":
          me.borderBottom = ge;
          break;
        case "left":
          me.borderLeft = ge;
          break;
        case "right":
          me.borderRight = ge;
          break;
        case "all":
          me.border = ge;
          break;
      }
    const xt = {
      ...Ae && { padding: Ae },
      ...Ne && { paddingBlock: Ne },
      ...$e && { paddingBlockStart: $e },
      ...We && { paddingBlockEnd: We },
      ...Fe && { paddingInline: Fe },
      ...Oe && { paddingInlineStart: Oe },
      ...He && { paddingInlineEnd: He },
      ...je && { margin: je },
      ...Pe && { marginBlock: Pe },
      ...Ve && { marginBlockStart: Ve },
      ...Ye && { marginBlockEnd: Ye },
      ..._e && { marginInline: _e },
      ...Ke && { marginInlineStart: Ke },
      ...Ge && { marginInlineEnd: Ge },
      ...x && { backgroundColor: x },
      ...X && { borderRadius: X },
      ...me,
      ...T && { overflow: T },
      ...A && { boxShadow: A },
      ...F !== void 0 && { width: F },
      ...N && { maxWidth: N, marginInline: "auto" },
      ...k !== void 0 && { height: k },
      ...B !== void 0 && { minHeight: B },
      ...$ !== void 0 && { maxHeight: $ },
      ...Y !== void 0 && { minWidth: Y },
      ...Ue && { display: Ue },
      ...Je && { alignItems: Je },
      ...qe && { justifyContent: qe },
      ...E && { alignSelf: E },
      ...Ze && { flexDirection: Ze },
      ...re && { flexWrap: re },
      ...le !== void 0 && { flex: le },
      ...pe !== void 0 && { flexGrow: pe },
      ...de !== void 0 && { flexShrink: de },
      ...ie && { gap: ie },
      ...q && { position: q },
      ...be !== void 0 && { inset: be },
      ...ce !== void 0 && { zIndex: ce },
      ...ye && { color: ye },
      ...Ee !== void 0 && { opacity: Ee },
      ...ze && { cursor: ze },
      ...Te && { whiteSpace: Te },
      ...Re && { pointerEvents: Re },
      ...gt
    };
    return ne.createElement(
      t,
      { ...ft, ref: yt, style: xt },
      mt
    );
  }
);
S.displayName = "Box";
const Se = ["mobile", "tablet", "desktop"];
function wt(t, n) {
  return Se.indexOf(t) >= Se.indexOf(n);
}
function kt(t, n) {
  return Se.indexOf(t) < Se.indexOf(n);
}
function Ir({ on: t, above: n, below: r, children: l }) {
  const o = Ce();
  return t != null ? (Array.isArray(t) ? t : [t]).includes(o) ? /* @__PURE__ */ e(Z, { children: l }) : null : n != null ? wt(o, n) ? /* @__PURE__ */ e(Z, { children: l }) : null : r != null ? kt(o, r) ? /* @__PURE__ */ e(Z, { children: l }) : null : /* @__PURE__ */ e(Z, { children: l });
}
const we = ["mobile", "tablet", "desktop"];
function Xt(t, n) {
  return we.indexOf(t) >= we.indexOf(n);
}
function Ct(t, n) {
  return we.indexOf(t) < we.indexOf(n);
}
function Br({ on: t, above: n, below: r, children: l }) {
  const o = Ce();
  return t != null ? (Array.isArray(t) ? t : [t]).includes(o) ? null : /* @__PURE__ */ e(Z, { children: l }) : n != null ? Xt(o, n) ? null : /* @__PURE__ */ e(Z, { children: l }) : r != null ? Ct(o, r) ? null : /* @__PURE__ */ e(Z, { children: l }) : /* @__PURE__ */ e(Z, { children: l });
}
const tt = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch"
}, _ = L(
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
    children: b,
    ...u
  }, m) => {
    const g = {
      display: "flex",
      flexDirection: "column",
      gap: V(n ?? "0"),
      ...r && { alignItems: tt[r] },
      ...l && !o && { justifyContent: tt[l] },
      ...o && { justifyContent: o },
      ...a === "fill" && { flex: "1 1 auto" },
      ...d && { marginBlockStart: d },
      ...s && { marginBlockEnd: s },
      ...c
    };
    return ne.createElement(
      t,
      { ...u, ref: m, style: g },
      b
    );
  }
);
_.displayName = "Stack";
const nt = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
  baseline: "baseline"
}, W = L(
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
    marginBlockStart: b,
    marginBlockEnd: u,
    borderRadius: m,
    overflow: h,
    elevation: g,
    minWidth: y,
    style: x,
    children: X,
    ...C
  }, O) => {
    const M = V(n ?? "0"), [T, A] = Array.isArray(M) ? [M[0], M[1]] : [M, M], F = {
      display: "flex",
      flexDirection: "row",
      columnGap: A,
      rowGap: r ?? T,
      ...l && { alignItems: nt[l] },
      ...o && !a && { justifyContent: nt[o] },
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
    let N = X;
    if (s) {
      const k = ne.Children.toArray(X).filter(Boolean);
      N = k.map((B, $) => /* @__PURE__ */ f(vt, { children: [
        B,
        $ < k.length - 1 && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: s })
      ] }, $));
    }
    return ne.createElement(
      t,
      { ...C, ref: O, style: F },
      N
    );
  }
);
W.displayName = "Inline";
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
    opacity: b,
    truncate: u,
    noWrap: m,
    noShrink: h,
    style: g,
    children: y,
    ...x
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
      ...b !== void 0 && { opacity: b },
      ...u && {
        display: "block",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        minWidth: 0
      },
      ...m && !u && { whiteSpace: "nowrap" },
      ...h && { flexShrink: 0 },
      ...g
    };
    return ne.createElement(
      t,
      { ...x, ref: X, style: C },
      y
    );
  }
);
D.displayName = "Text";
function Mt(t) {
  if (t !== void 0)
    return typeof t == "number" ? `repeat(${t}, 1fr)` : t.map((n) => `${n}fr`).join(" ");
}
const dt = L(
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
    style: b,
    children: u,
    ...m
  }, h) => {
    const g = V(n ?? 1), y = V(r ?? "0"), x = {
      display: "grid",
      gridTemplateColumns: Mt(g),
      gap: y,
      ...l && { rowGap: l },
      ...o && { marginBlockStart: o },
      ...a && { marginBlockEnd: a },
      ...d && { borderRadius: d },
      ...s && { overflow: s },
      ...c && { boxShadow: c },
      ...b
    };
    return ne.createElement(
      t,
      { ...m, ref: h, style: x },
      u
    );
  }
);
dt.displayName = "Grid";
const he = L(
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
    textTransform: b,
    display: u,
    alignSelf: m,
    style: h,
    children: g,
    ...y
  }, x) => {
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
      ...b && { textTransform: b },
      ...u && { display: u },
      ...m && { alignSelf: m },
      ...h
    };
    return /* @__PURE__ */ e("a", { ref: x, style: X, ...y, children: g });
  }
);
he.displayName = "Anchor";
const Me = L(
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
Me.displayName = "Image";
const oe = L(
  ({
    backgroundColor: t,
    hover: n,
    pressed: r,
    gradient: l,
    color: o,
    colorHover: a,
    colorPressed: d,
    borderColor: s,
    borderColorHover: c,
    borderColorPressed: b,
    borderWidth: u = "1px",
    size: m,
    weight: h,
    letterSpacing: g,
    textTransform: y,
    fontFamily: x,
    gap: X,
    padding: C,
    paddingBlock: O,
    paddingInline: M,
    borderRadius: T,
    label: A,
    iconStart: F,
    iconEnd: N,
    className: k,
    style: B,
    children: $,
    ...Y
  }, j) => {
    const P = {};
    t && (P["--bbui-btn-bg"] = t), n && (P["--bbui-btn-bg-hover"] = n), r && (P["--bbui-btn-bg-pressed"] = r), o && (P["--bbui-btn-color"] = o), a && (P["--bbui-btn-color-hover"] = a), d && (P["--bbui-btn-color-pressed"] = d), s && (P["--bbui-btn-border"] = s), c && (P["--bbui-btn-border-hover"] = c), b && (P["--bbui-btn-border-pressed"] = b);
    const G = {
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: s ? `${u} solid var(--bbui-btn-border)` : "none",
      ...l && { background: l },
      ...m && { fontSize: m },
      ...h && { fontWeight: h },
      ...g && { letterSpacing: g },
      ...y && { textTransform: y },
      ...x && { fontFamily: x },
      ...X && { gap: X },
      ...C && { padding: C },
      ...O && { paddingBlock: O },
      ...M && { paddingInline: M },
      ...T && { borderRadius: T },
      ...P,
      ...B
    }, E = k ? `bbui-button ${k}` : "bbui-button", U = A ?? $;
    return /* @__PURE__ */ e("button", { ref: j, className: E, style: G, ...Y, children: F || N ? /* @__PURE__ */ f(Z, { children: [
      F,
      U,
      N
    ] }) : U });
  }
);
oe.displayName = "Button";
const De = L(
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
    const b = {
      ...t && { backgroundColor: t },
      ...n && { border: `1px solid ${n}` },
      ...r && { borderRadius: r },
      ...l && { padding: l },
      ...o && { paddingBlock: o },
      ...a && { paddingInline: a },
      ...d
    };
    return /* @__PURE__ */ e("input", { ref: c, style: b, ...s });
  }
);
De.displayName = "TextInput";
const Lt = L(
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
Lt.displayName = "Icon";
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
}, It = {
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
}, ct = {
  Tighter: "-0.05em",
  Tight: "-0.025em",
  Normal: "0",
  Wide: "0.05em",
  Wider: "0.075em",
  /** 0.1em — uppercase labels */
  Widest: "0.1em"
}, Dr = {
  None: "none",
  Uppercase: "uppercase",
  Lowercase: "lowercase",
  Capitalize: "capitalize"
}, Er = {
  Block: "block",
  InlineBlock: "inline-block",
  Inline: "inline",
  Flex: "flex",
  InlineFlex: "inline-flex",
  Grid: "grid",
  InlineGrid: "inline-grid",
  None: "none"
}, zr = {
  Start: "flex-start",
  Center: "center",
  End: "flex-end",
  Stretch: "stretch",
  Baseline: "baseline"
}, Tr = {
  Start: "flex-start",
  Center: "center",
  End: "flex-end",
  SpaceBetween: "space-between",
  SpaceAround: "space-around",
  SpaceEvenly: "space-evenly"
}, Rr = {
  Auto: "auto",
  Start: "flex-start",
  Center: "center",
  End: "flex-end",
  Stretch: "stretch",
  Baseline: "baseline"
}, Ar = {
  Row: "row",
  Column: "column",
  RowReverse: "row-reverse",
  ColumnReverse: "column-reverse"
}, Nr = {
  NoWrap: "nowrap",
  Wrap: "wrap",
  WrapReverse: "wrap-reverse"
}, $r = {
  Static: "static",
  Relative: "relative",
  Absolute: "absolute",
  Fixed: "fixed",
  Sticky: "sticky"
}, Wr = {
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
}, Fr = {
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
}, Or = {
  Thin: "1px",
  Medium: "2px",
  Thick: "4px",
  XThick: "8px"
}, Hr = {
  Occupied: "var(--bbui-accent-occupied)",
  Vacant: "var(--bbui-accent-vacant)",
  Maintenance: "var(--bbui-accent-maintenance)",
  Reserved: "var(--bbui-accent-reserved)",
  Cleaning: "var(--bbui-accent-cleaning)",
  Primary: "var(--bbui-color-primary)",
  Error: "var(--bbui-color-error)"
}, ue = {
  None: "none",
  Raised: "var(--bbui-shadow-raised)",
  Ambient: "var(--bbui-shadow-ambient)",
  Dropdown: "var(--bbui-shadow-dropdown)",
  Overlay: "var(--bbui-shadow-overlay)",
  CardHover: "var(--bbui-shadow-card-hover)"
}, xe = {
  Brand: "var(--bbui-gradient-brand)"
}, jr = {
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
}, Pr = {
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
}, ee = {
  NotAssessed: "NOT_ASSESSED",
  Aware: "AWARE",
  Understands: "UNDERSTANDS",
  Applies: "APPLIES",
  Analyzes: "ANALYZES",
  Masters: "MASTERS"
};
function Bt(t) {
  switch (t) {
    case ee.Masters:
      return ae.Masters;
    case ee.Analyzes:
      return ae.Analyzes;
    case ee.Applies:
      return ae.Applies;
    case ee.Understands:
      return ae.Understands;
    case ee.Aware:
      return ae.Aware;
    default:
      return ae.NotAssessed;
  }
}
function Dt(t) {
  return t >= 90 ? ee.Masters : t >= 80 ? ee.Analyzes : t >= 60 ? ee.Applies : t >= 40 ? ee.Understands : t >= 20 ? ee.Aware : ee.NotAssessed;
}
function Vr(t) {
  return Bt(Dt(t));
}
const Yr = {
  correct: ae.Masters,
  partial: ae.Applies,
  incorrect: "var(--bbui-color-error)",
  skipped: "var(--bbui-color-subtlest)"
}, _r = {
  up: ae.Masters,
  down: "var(--bbui-color-error)",
  unchanged: "var(--bbui-color-subtlest)"
}, Kr = {
  Nova: "var(--bbui-persona-nova)",
  Maya: "var(--bbui-persona-maya)",
  Jordan: "var(--bbui-persona-jordan)",
  Custom: "var(--bbui-persona-custom)"
}, Et = {
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
}, ut = L(
  ({ variant: t = "default", uppercase: n = !1, style: r, children: l, ...o }, a) => {
    const d = Et[t], s = {
      display: "inline-flex",
      alignItems: "center",
      lineHeight: 1,
      paddingBlock: i.XXSmall,
      paddingInline: n ? i.MediumLarge : i.Medium,
      borderRadius: I.Full,
      fontWeight: n ? R.Black : R.Medium,
      fontSize: n ? w.Micro : w.XXSmall,
      letterSpacing: n ? ct.Wider : void 0,
      textTransform: n ? "uppercase" : void 0,
      ...d,
      ...r
    };
    return /* @__PURE__ */ e("span", { ref: a, style: s, ...o, children: l });
  }
);
ut.displayName = "Badge";
const zt = {
  compact: { block: i.XXSmall, inline: i.Small },
  comfortable: { block: i.XSmall, inline: i.Medium }
}, Tt = {
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
}, Rt = L(
  ({
    selected: t,
    appearance: n = "filled",
    density: r = "compact",
    variant: l,
    fontWeight: o = R.Medium,
    fontSize: a,
    icon: d,
    showCheckWhenSelected: s = !1,
    onClick: c,
    disabled: b,
    style: u,
    children: m,
    ...h
  }, g) => {
    const y = c !== void 0 || t !== void 0, x = t === !0, X = a ?? (l ? w.XXSmall : w.XSmall), C = l ? { block: i.XXSmall, inline: i.XSmall } : zt[r];
    let O, M;
    if (l) {
      const N = Tt[l];
      O = N.backgroundColor, M = N.color;
    } else
      O = x ? v.Brand : n === "outlined" ? v.Transparent : v.Subtle, M = x ? p.OnBrand : p.Default;
    const T = !l && n === "outlined" && !x ? `1px solid ${z.Outline}` : "1px solid transparent", A = {
      display: "inline-flex",
      alignItems: "center",
      gap: i.XSmall,
      paddingBlock: C.block,
      paddingInline: C.inline,
      borderRadius: I.Full,
      backgroundColor: O,
      color: M,
      border: T,
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
    }, F = s && x ? /* @__PURE__ */ e(
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
        "aria-pressed": t,
        disabled: b,
        onClick: c,
        style: A,
        ...h,
        children: [
          d,
          F,
          m
        ]
      }
    ) : /* @__PURE__ */ f(
      "span",
      {
        ref: g,
        style: A,
        ...h,
        children: [
          d,
          m
        ]
      }
    );
  }
);
Rt.displayName = "Chip";
const rt = {
  sm: "4px",
  md: "12px",
  lg: "16px",
  xl: "24px"
}, At = {
  none: "inset 0 0 0 0 rgba(255, 255, 255, 0)",
  xs: "inset 1px 1px 1px 0 rgba(255, 255, 255, 0.3), inset -1px -1px 1px 0 rgba(255, 255, 255, 0.3)",
  sm: "inset 2px 2px 2px 0 rgba(255, 255, 255, 0.35), inset -2px -2px 2px 0 rgba(255, 255, 255, 0.35)",
  md: "inset 3px 3px 3px 0 rgba(255, 255, 255, 0.45), inset -3px -3px 3px 0 rgba(255, 255, 255, 0.45)",
  lg: "inset 4px 4px 4px 0 rgba(255, 255, 255, 0.5), inset -4px -4px 4px 0 rgba(255, 255, 255, 0.5)",
  xl: "inset 6px 6px 6px 0 rgba(255, 255, 255, 0.55), inset -6px -6px 6px 0 rgba(255, 255, 255, 0.55)"
}, Nt = {
  none: "0 4px 4px rgba(0, 0, 0, 0.05), 0 0 12px rgba(0, 0, 0, 0.05)",
  xs: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 16px rgba(255, 255, 255, 0.05)",
  sm: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 24px rgba(255, 255, 255, 0.1)",
  md: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 32px rgba(255, 255, 255, 0.15)",
  lg: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 40px rgba(255, 255, 255, 0.2)",
  xl: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 48px rgba(255, 255, 255, 0.25)"
};
let $t = 0;
const Wt = L(
  ({
    children: t,
    borderRadius: n = I.XLarge,
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
    const h = ve(() => `bbui-liquid-glass-${++$t}`, []), g = {
      position: "relative",
      borderRadius: n,
      ...s && { width: s },
      ...c && { height: c },
      ...b
    }, y = {
      position: "absolute",
      inset: 0,
      borderRadius: n,
      pointerEvents: "none"
    };
    return /* @__PURE__ */ f("div", { ref: m, style: g, ...u, children: [
      /* @__PURE__ */ e("svg", { style: { position: "absolute", width: 0, height: 0 }, "aria-hidden": "true", children: /* @__PURE__ */ e("defs", { children: /* @__PURE__ */ f("filter", { id: h, x: "0", y: "0", width: "100%", height: "100%", filterUnits: "objectBoundingBox", children: [
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
            backdropFilter: `blur(${rt[r]})`,
            WebkitBackdropFilter: `blur(${rt[r]})`,
            filter: `url(#${h})`
          }
        }
      ),
      /* @__PURE__ */ e("div", { style: { ...y, zIndex: 1, boxShadow: Nt[l] } }),
      /* @__PURE__ */ e("div", { style: { ...y, zIndex: 2, boxShadow: At[o] } }),
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
Wt.displayName = "LiquidGlass";
const Ft = "40px", Ot = "24px", Le = "20px", lt = i.XXSmall, Ht = L(
  ({ checked: t, defaultChecked: n = !1, onChange: r, label: l, style: o, ...a }, d) => {
    const [s, c] = H(n), b = t !== void 0, u = b ? t : s, m = J(() => {
      const y = !u;
      b || c(y), r == null || r(y);
    }, [u, b, r]), h = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      width: Ft,
      height: Ot,
      borderRadius: I.Full,
      backgroundColor: u ? v.Brand : v.Neutral,
      border: "none",
      cursor: "pointer",
      padding: 0,
      transition: "background-color 150ms ease",
      ...o
    }, g = {
      position: "absolute",
      width: Le,
      height: Le,
      borderRadius: I.Full,
      backgroundColor: v.Default,
      transition: "left 150ms ease",
      left: u ? `calc(100% - ${Le} - ${lt})` : lt,
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
        onClick: m,
        style: h,
        ...a,
        children: /* @__PURE__ */ e("span", { style: g })
      }
    );
  }
);
Ht.displayName = "Toggle";
const jt = L(
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
  }, b) => {
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
    return /* @__PURE__ */ e("a", { ref: b, style: u, ...c, children: s });
  }
);
jt.displayName = "LinkButton";
const Q = L(
  ({ label: t, size: n, color: r, backgroundColor: l, padding: o, style: a, children: d, ...s }, c) => {
    const b = {
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
        style: b,
        ...s,
        children: d
      }
    );
  }
);
Q.displayName = "IconButton";
const Pt = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64
}, Vt = {
  xsmall: "10px",
  small: "12px",
  medium: "14px",
  large: "16px",
  xlarge: "24px"
}, Yt = {
  xsmall: 6,
  small: 8,
  medium: 10,
  large: 12,
  xlarge: 16
}, _t = {
  online: "#22c55e",
  offline: "#bccbb9",
  busy: "#ba1a1a",
  focus: "#3b82f6"
};
function Kt(t) {
  var r;
  const n = t.trim().split(/\s+/);
  return n.length >= 2 ? (n[0][0] + n[n.length - 1][0]).toUpperCase() : (((r = n[0]) == null ? void 0 : r[0]) ?? "").toUpperCase();
}
const Gt = L(
  ({
    src: t,
    name: n,
    size: r = "medium",
    appearance: l = "circle",
    status: o,
    fallbackBackground: a = v.NeutralBold,
    fallbackColor: d = p.Subtle
  }, s) => {
    const [c, b] = H(!1), u = Pt[r], m = t && !c, h = n ? Kt(n) : "", g = {
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
    }, y = Yt[r], x = o ? {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: y,
      height: y,
      borderRadius: I.Full,
      backgroundColor: _t[o],
      border: "2px solid #ffffff",
      boxSizing: "border-box"
    } : void 0;
    return /* @__PURE__ */ f("span", { ref: s, style: g, role: "img", "aria-label": n ?? "Avatar", children: [
      m ? /* @__PURE__ */ e(
        "img",
        {
          src: t,
          alt: n ?? "",
          onError: () => b(!0),
          style: { width: "100%", height: "100%", objectFit: "cover" }
        }
      ) : /* @__PURE__ */ e(
        "span",
        {
          style: {
            fontSize: Vt[r],
            fontWeight: R.Semibold,
            color: d,
            lineHeight: 1,
            userSelect: "none"
          },
          children: h
        }
      ),
      o && /* @__PURE__ */ e("span", { style: x })
    ] });
  }
);
Gt.displayName = "Avatar";
const Ut = {
  xsmall: 16,
  small: 24,
  medium: 32,
  large: 48,
  xlarge: 64
}, Jt = {
  xsmall: 2,
  small: 2,
  medium: 3,
  large: 3,
  xlarge: 4
}, pt = L(
  ({ size: t = "medium", label: n = "Loading", color: r = p.Brand }, l) => {
    const o = ke().replace(/:/g, ""), a = Ut[t], d = Jt[t], s = (a - d) / 2, c = 2 * Math.PI * s;
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
pt.displayName = "Spinner";
const qt = L(
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
    const b = {
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
    return /* @__PURE__ */ e("textarea", { ref: c, style: b, ...s });
  }
);
qt.displayName = "TextArea";
function Zt(t) {
  return "options" in t;
}
const bt = L(
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
      n && /* @__PURE__ */ e("option", { value: "", disabled: !0, hidden: !0, children: n }),
      t.map(
        (y) => Zt(y) ? /* @__PURE__ */ e("optgroup", { label: y.label, children: y.options.map((x) => /* @__PURE__ */ e("option", { value: x.value, disabled: x.disabled, children: x.label }, x.value)) }, y.label) : /* @__PURE__ */ e("option", { value: y.value, disabled: y.disabled, children: y.label }, y.value)
      )
    ] });
  }
);
bt.displayName = "Select";
const Qt = {
  small: { box: "16px", font: w.XXSmall, gap: i.XSmall },
  medium: { box: "20px", font: w.XSmall, gap: i.Medium },
  large: { box: "24px", font: w.Small, gap: i.Medium }
}, en = ({ size: t }) => /* @__PURE__ */ e(
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
), tn = L(
  ({ label: t, size: n = "medium", checked: r, disabled: l, style: o, id: a, ...d }, s) => {
    const c = ke(), b = a ?? c, u = Qt[n], m = !!r, h = {
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
          /* @__PURE__ */ e(
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
          /* @__PURE__ */ e("span", { style: h, "aria-hidden": "true", children: m && /* @__PURE__ */ e(en, { size: `calc(${u.box} - 4px)` }) }),
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
tn.displayName = "Checkbox";
const nn = L(
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
nn.displayName = "Divider";
const rn = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z", clipRule: "evenodd" }) }), ln = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { d: "M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" }) }), on = L(
  ({
    value: t,
    onChange: n,
    min: r = 0,
    max: l = 99,
    step: o = 1,
    disabled: a = !1,
    backgroundColor: d = v.Subtle,
    padding: s = i.XSmall
  }, c) => {
    const b = t - o >= r, u = t + o <= l;
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
          /* @__PURE__ */ e(
            Q,
            {
              label: "Decrease",
              onClick: () => b && n(t - o),
              disabled: a || !b,
              color: p.Brand,
              padding: i.XSmall,
              children: /* @__PURE__ */ e(rn, {})
            }
          ),
          /* @__PURE__ */ e(
            D,
            {
              as: "span",
              size: w.Medium,
              weight: R.Bold,
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
              padding: i.XSmall,
              children: /* @__PURE__ */ e(ln, {})
            }
          )
        ]
      }
    );
  }
);
on.displayName = "Stepper";
const an = () => /* @__PURE__ */ e(
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
), sn = () => /* @__PURE__ */ e(
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
), dn = () => /* @__PURE__ */ e(
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
), cn = L(
  ({
    logo: t,
    navigation: n = [],
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
    const [C, O] = H(!1), [M, T] = H(!1);
    K(() => {
      const B = () => T(window.innerWidth < x);
      return B(), window.addEventListener("resize", B), () => window.removeEventListener("resize", B);
    }, [x]);
    const A = J((B) => {
      B.target.closest("[data-navbar-menu]") || O(!1);
    }, []);
    K(() => (document.addEventListener("click", A), () => document.removeEventListener("click", A)), [A]);
    const F = ne.isValidElement(t) ? t : /* @__PURE__ */ e(
      Me,
      {
        src: t.src,
        alt: t.alt ?? "Logo",
        style: {
          width: t.width ?? 120,
          height: t.height ?? "auto"
        }
      }
    ), N = /* @__PURE__ */ e(Z, { children: n.map((B, $) => /* @__PURE__ */ e(
      he,
      {
        href: B.path,
        color: l,
        display: "block",
        style: { textDecoration: "none" },
        children: B.title
      },
      $
    )) }), k = r ? /* @__PURE__ */ e(
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
          /* @__PURE__ */ e(D, { as: "span", color: a, weight: d, children: r.label }),
          r.icon ?? /* @__PURE__ */ e(dn, {})
        ] })
      }
    ) : null;
    return M ? /* @__PURE__ */ f(S, { as: "header", ref: X, "data-navbar-menu": !0, children: [
      /* @__PURE__ */ e(
        S,
        {
          as: "nav",
          paddingInline: i.Large,
          paddingBlock: b,
          children: /* @__PURE__ */ f(W, { alignBlock: "center", spread: "space-between", children: [
            /* @__PURE__ */ e(S, { children: F }),
            /* @__PURE__ */ e(
              oe,
              {
                onClick: () => O(!C),
                style: {
                  background: "none",
                  padding: 0,
                  color: p.Subtle
                },
                children: C ? /* @__PURE__ */ e(sn, {}) : /* @__PURE__ */ e(an, {})
              }
            )
          ] })
        }
      ),
      C && /* @__PURE__ */ e(
        S,
        {
          backgroundColor: h,
          elevation: ue.Raised,
          borderRadius: y,
          borderColor: g,
          borderSide: "all",
          padding: i.Large,
          style: { margin: i.Medium },
          children: /* @__PURE__ */ f("nav", { children: [
            /* @__PURE__ */ e("ul", { style: { listStyle: "none", padding: 0, margin: 0 }, children: n.map((B, $) => /* @__PURE__ */ e("li", { style: { paddingBlock: i.MediumLarge }, children: /* @__PURE__ */ e(
              he,
              {
                href: B.path,
                color: l,
                display: "block",
                style: { textDecoration: "none" },
                children: B.title
              }
            ) }, $)) }),
            k && /* @__PURE__ */ e(S, { marginBlockStart: i.XXLarge, children: k })
          ] })
        }
      )
    ] }) : /* @__PURE__ */ e(S, { as: "header", ref: X, style: { width: "100%" }, children: /* @__PURE__ */ e(
      S,
      {
        as: "nav",
        paddingInline: c,
        paddingBlock: b,
        style: { width: "100%" },
        children: /* @__PURE__ */ f(W, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ e(S, { children: F }),
          /* @__PURE__ */ f(
            W,
            {
              space: u,
              alignBlock: "center",
              grow: "fill",
              style: { marginInlineStart: m },
              children: [
                /* @__PURE__ */ e(
                  W,
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
cn.displayName = "Navbar";
const it = () => /* @__PURE__ */ e(
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
), un = L(
  ({
    title: t,
    subtitle: n,
    badge: r,
    actions: l = [],
    image: o,
    children: a,
    titleSize: d = w.XXXLarge,
    titleSizeLarge: s = w.Huge,
    titleWeight: c = R.ExtraBold,
    titleColor: b = p.Default,
    subtitleSize: u = w.Small,
    subtitleColor: m = p.Subtlest,
    primaryCtaBackground: h = v.Dark,
    primaryCtaColor: g = p.Inverse,
    primaryCtaBorderRadius: y = I.Full,
    primaryCtaWeight: x = 500,
    secondaryCtaColor: X = p.Subtle,
    secondaryCtaWeight: C = 500,
    ctaGap: O = i.MediumLarge,
    paddingBlock: M = i.Size7,
    paddingInline: T = i.XXXLarge,
    contentGap: A = i.XHuge,
    textGap: F = i.XLarge,
    textMaxWidth: N = "576px",
    gradient: k,
    breakpoint: B = 768
  }, $) => {
    const [Y, j] = H(!1);
    K(() => {
      const q = () => j(window.innerWidth >= B);
      return q(), window.addEventListener("resize", q), () => window.removeEventListener("resize", q);
    }, [B]);
    const P = (k == null ? void 0 : k.enabled) !== !1, G = (k == null ? void 0 : k.css) ?? "linear-gradient(143.6deg, rgba(192,132,252,0) 20.79%, rgba(232,121,249,0.26) 40.92%, rgba(204,171,238,0) 70.35%)", E = (k == null ? void 0 : k.height) ?? "580px", U = (r == null ? void 0 : r.borderColor) ?? z.Default, re = r ? /* @__PURE__ */ e(
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
          border: `1px solid ${U}`,
          paddingRight: i.XXLarge
        },
        children: /* @__PURE__ */ f(W, { space: i.MediumLarge, alignBlock: "center", children: [
          /* @__PURE__ */ e(
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
            /* @__PURE__ */ e(D, { as: "span", size: w.XSmall, children: r.text }),
            r.icon ?? /* @__PURE__ */ e(it, {})
          ] })
        ] })
      }
    ) : null, le = l.length > 0 ? /* @__PURE__ */ e(W, { space: O, alignBlock: "center", shouldWrap: !0, children: l.map((q, be) => {
      const ce = (q.variant ?? (be === 0 ? "primary" : "secondary")) === "primary", ye = ce ? x : C;
      return /* @__PURE__ */ e(
        he,
        {
          href: q.path,
          backgroundColor: ce ? h : void 0,
          color: ce ? g : X,
          paddingBlock: i.Medium,
          paddingInline: i.Large,
          borderRadius: ce ? y : void 0,
          weight: ye,
          display: "inline-block",
          style: { textDecoration: "none" },
          children: /* @__PURE__ */ f(W, { space: i.XSmall, alignBlock: "center", children: [
            /* @__PURE__ */ e(
              D,
              {
                as: "span",
                color: ce ? g : X,
                weight: ye,
                children: q.label
              }
            ),
            q.icon ?? /* @__PURE__ */ e(it, {})
          ] })
        },
        be
      );
    }) }) : null, de = /* @__PURE__ */ f(
      _,
      {
        space: F,
        style: { maxWidth: N, flexShrink: 0 },
        children: [
          re,
          /* @__PURE__ */ e(
            D,
            {
              as: "h1",
              size: Y ? s : d,
              weight: c,
              color: b,
              lineHeight: 1.2,
              children: t
            }
          ),
          n && /* @__PURE__ */ e(
            D,
            {
              as: "p",
              color: m,
              size: u,
              lineHeight: 1.6,
              children: n
            }
          ),
          a,
          le
        ]
      }
    ), ie = o && Y ? /* @__PURE__ */ e(S, { style: { flex: "1 1 0%", minWidth: 0 }, children: /* @__PURE__ */ e(
      Me,
      {
        src: o.src,
        alt: o.alt ?? "",
        style: { maxWidth: o.maxWidth ?? "576px" }
      }
    ) }) : null;
    return /* @__PURE__ */ f(S, { as: "section", ref: $, style: { position: "relative" }, children: [
      P && /* @__PURE__ */ e(
        "div",
        {
          "aria-hidden": "true",
          style: {
            position: "absolute",
            inset: 0,
            height: E,
            background: G,
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
          paddingInline: T,
          paddingBlock: M,
          children: Y ? /* @__PURE__ */ f(W, { space: A, alignBlock: "center", children: [
            de,
            ie
          ] }) : /* @__PURE__ */ e(_, { space: A, children: de })
        }
      )
    ] });
  }
);
un.displayName = "HeroSection";
const pn = L(
  ({
    padding: t = i.Large,
    backgroundColor: n = v.Default,
    borderRadius: r = I.XXLarge,
    borderColor: l = z.Default,
    elevation: o = ue.Ambient,
    accentColor: a,
    accentWidth: d = "8px",
    header: s,
    footer: c,
    children: b
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
      children: /* @__PURE__ */ f(_, { children: [
        s && /* @__PURE__ */ e(
          S,
          {
            padding: t,
            style: { borderBottom: `1px solid ${l}` },
            children: s
          }
        ),
        /* @__PURE__ */ e(S, { padding: t, children: b }),
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
pn.displayName = "Card";
const bn = L(
  ({
    label: t,
    helperText: n,
    errorText: r,
    id: l,
    labelColor: o = p.Default,
    labelSize: a = w.XSmall,
    labelWeight: d = R.Medium,
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
    placeholder: O,
    value: M,
    defaultValue: T,
    disabled: A,
    readOnly: F,
    required: N,
    autoFocus: k,
    autoComplete: B,
    onChange: $,
    onBlur: Y,
    onFocus: j
  }, P) => {
    const G = ke(), E = l ?? G, U = `${E}-helper`, re = `${E}-error`, le = !!r, pe = le ? z.Error : u, de = h === "bottom", ie = de || !!(y || x), q = /* @__PURE__ */ e(
      De,
      {
        ref: P,
        id: E,
        name: X,
        type: C,
        placeholder: O,
        value: M,
        defaultValue: T,
        disabled: A,
        readOnly: F,
        required: N,
        autoFocus: k,
        autoComplete: B,
        onChange: $,
        onBlur: Y,
        onFocus: j,
        backgroundColor: ie ? "transparent" : b,
        borderColor: ie ? void 0 : pe,
        borderRadius: ie ? void 0 : m,
        padding: g,
        style: {
          width: "100%",
          ...ie ? { flex: "1 1 auto", minWidth: 0 } : {}
        },
        "aria-describedby": le ? re : n ? U : void 0,
        "aria-invalid": le || void 0
      }
    ), be = ie ? /* @__PURE__ */ f("div", { style: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      backgroundColor: b,
      ...de ? { borderBottom: `2px solid ${pe}` } : { border: `1px solid ${pe}`, borderRadius: m }
    }, children: [
      y,
      q,
      x
    ] }) : q;
    return /* @__PURE__ */ f(_, { space: i.XSmall, children: [
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
      le && /* @__PURE__ */ e(D, { as: "span", size: w.XXSmall, color: p.Error, id: re, children: r }),
      !le && n && /* @__PURE__ */ e(D, { as: "span", size: w.XXSmall, color: p.Subtle, id: U, children: n })
    ] });
  }
);
bn.displayName = "TextField";
const hn = {
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
}, gn = () => /* @__PURE__ */ e(
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
), mn = L(
  ({ variant: t = "info", icon: n, dismissible: r, onDismiss: l, children: o }, a) => {
    const d = hn[t];
    return /* @__PURE__ */ e(
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
          zIndex: se.Banner
        },
        children: /* @__PURE__ */ f(W, { space: i.Medium, alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ f(W, { space: i.Medium, alignBlock: "center", grow: "fill", children: [
            n && /* @__PURE__ */ e(S, { style: { color: d.text, flexShrink: 0 }, children: n }),
            /* @__PURE__ */ e(D, { as: "span", size: w.XSmall, color: d.text, children: o })
          ] }),
          r && /* @__PURE__ */ e(
            Q,
            {
              label: "Dismiss",
              onClick: l,
              color: d.text,
              padding: i.XXSmall,
              children: /* @__PURE__ */ e(gn, {})
            }
          )
        ] })
      }
    );
  }
);
mn.displayName = "Banner";
const ht = L(
  ({
    sections: t,
    activeId: n,
    onSelect: r,
    activeColor: l = p.Brand,
    activeBackground: o = v.Subtle
  }, a) => /* @__PURE__ */ e(_, { ref: a, as: "nav", space: i.Small, children: t.map((d, s) => /* @__PURE__ */ f(_, { space: i.XXSmall, children: [
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
    /* @__PURE__ */ e(_, { as: "ul", style: { listStyle: "none", padding: 0, margin: 0 }, children: d.items.map((c) => {
      const b = c.id === n;
      return /* @__PURE__ */ e("li", { children: /* @__PURE__ */ e(
        oe,
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
ht.displayName = "Menu";
const fn = L(
  ({
    tabs: t,
    activeId: n,
    defaultActiveId: r,
    onChange: l,
    variant: o = "underline",
    activeColor: a = p.Brand,
    inactiveColor: d = p.Subtle,
    pillBackground: s = v.Subtle,
    activePillBackground: c = v.Default,
    panelPadding: b = i.Large
  }, u) => {
    var O;
    const [m, h] = H(
      r ?? ((O = t[0]) == null ? void 0 : O.id)
    ), g = n !== void 0, y = g ? n : m, x = (M) => {
      g || h(M), l == null || l(M);
    }, X = t.find((M) => M.id === y);
    return /* @__PURE__ */ f(S, { ref: u, children: [
      o === "pill" ? /* @__PURE__ */ e(
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
          children: t.map((M) => {
            const T = M.id === y;
            return /* @__PURE__ */ e(
              oe,
              {
                role: "tab",
                "aria-selected": T,
                "aria-controls": `tabpanel-${M.id}`,
                id: `tab-${M.id}`,
                disabled: M.disabled,
                onClick: () => x(M.id),
                paddingBlock: i.Medium,
                paddingInline: i.XXLarge,
                borderRadius: I.XLarge,
                color: T ? p.Default : M.disabled ? p.Disabled : d,
                backgroundColor: T ? c : v.Transparent,
                style: {
                  fontWeight: T ? R.Bold : R.Medium,
                  fontSize: w.XSmall,
                  boxShadow: T ? ue.Raised : "none",
                  cursor: M.disabled ? "default" : "pointer"
                },
                children: M.label
              },
              M.id
            );
          })
        }
      ) : /* @__PURE__ */ e(
        W,
        {
          as: "div",
          role: "tablist",
          space: i.None,
          style: {
            borderBottom: `1px solid ${z.Default}`
          },
          children: t.map((M) => {
            const T = M.id === y;
            return /* @__PURE__ */ e(
              oe,
              {
                role: "tab",
                "aria-selected": T,
                "aria-controls": `tabpanel-${M.id}`,
                id: `tab-${M.id}`,
                disabled: M.disabled,
                onClick: () => x(M.id),
                paddingBlock: i.Medium,
                paddingInline: i.Large,
                borderRadius: I.None,
                color: T ? a : M.disabled ? p.Disabled : d,
                style: {
                  background: "none",
                  fontWeight: T ? R.Semibold : R.Regular,
                  fontSize: w.XSmall,
                  borderBottom: T ? `2px solid ${a}` : "2px solid transparent",
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
          padding: b,
          children: X.content
        }
      )
    ] });
  }
);
fn.displayName = "Tabs";
const yn = L(
  ({
    title: t,
    subtitle: n,
    breadcrumbs: r,
    actions: l,
    titleSize: o = w.XLarge,
    titleWeight: a = R.Bold,
    titleColor: d = p.Default,
    subtitleColor: s = p.Subtle,
    breadcrumbLinkColor: c = p.Link,
    borderColor: b = z.Default,
    paddingBlock: u = i.Large
  }, m) => /* @__PURE__ */ e(
    S,
    {
      ref: m,
      as: "header",
      paddingBlock: u,
      style: {
        borderBottom: `1px solid ${b}`
      },
      children: /* @__PURE__ */ f(_, { space: i.Medium, children: [
        r && r.length > 0 && /* @__PURE__ */ e(W, { space: i.XSmall, alignBlock: "center", children: r.map((h, g) => /* @__PURE__ */ f(ne.Fragment, { children: [
          g > 0 && /* @__PURE__ */ e(D, { as: "span", color: p.Disabled, size: w.XSmall, children: "/" }),
          h.href ? /* @__PURE__ */ e(
            he,
            {
              href: h.href,
              color: c,
              size: w.XSmall,
              style: { textDecoration: "none" },
              children: h.label
            }
          ) : /* @__PURE__ */ e(D, { as: "span", size: w.XSmall, color: p.Subtlest, children: h.label })
        ] }, g)) }),
        /* @__PURE__ */ f(W, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ f(_, { space: i.XXSmall, children: [
            /* @__PURE__ */ e(D, { as: "h1", size: o, weight: a, color: d, children: t }),
            n && /* @__PURE__ */ e(D, { as: "p", size: w.XSmall, color: s, children: n })
          ] }),
          l && /* @__PURE__ */ e(W, { space: i.Medium, alignBlock: "center", children: l })
        ] })
      ] })
    }
  )
);
yn.displayName = "Header";
const xn = {
  XSmall: "320px",
  Small: "416px",
  Medium: "512px",
  Large: "704px",
  XLarge: "960px",
  Full: "min(96vw, 1440px)"
}, vn = () => /* @__PURE__ */ e(
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
), Sn = L(
  ({ open: t, onClose: n, title: r, children: l, footer: o, size: a = xn.Medium }, d) => {
    const s = J(
      (c) => {
        c.key === "Escape" && n();
      },
      [n]
    );
    return K(() => {
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
            backgroundColor: v.Overlay
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
              backgroundColor: v.Default,
              borderRadius: I.XLarge,
              elevation: ue.Overlay,
              overflow: "hidden",
              style: {
                width: "100%",
                maxWidth: a,
                maxHeight: "85vh",
                display: "flex",
                flexDirection: "column"
              },
              children: /* @__PURE__ */ f(_, { children: [
                r && /* @__PURE__ */ e(
                  S,
                  {
                    padding: i.Large,
                    style: { borderBottom: `1px solid ${z.Default}` },
                    children: /* @__PURE__ */ f(W, { alignBlock: "center", spread: "space-between", children: [
                      /* @__PURE__ */ e(D, { as: "h2", size: w.Large, weight: R.Semibold, color: p.Default, children: r }),
                      /* @__PURE__ */ e(Q, { label: "Close", onClick: n, color: p.Subtle, children: /* @__PURE__ */ e(vn, {}) })
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
Sn.displayName = "Modal";
const Ie = 200, wn = {
  start: "flex-start",
  center: "center",
  end: "flex-end"
};
function kn({
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
  const [b, u] = H(t), [m, h] = H(!1), g = V(l), y = V(d);
  if (K(() => {
    if (t) {
      u(!0);
      const C = requestAnimationFrame(() => h(!0));
      return () => cancelAnimationFrame(C);
    }
    h(!1);
    const X = window.setTimeout(() => u(!1), Ie);
    return () => window.clearTimeout(X);
  }, [t]), K(() => {
    if (!t) return;
    const X = (C) => {
      C.key === "Escape" && n();
    };
    return document.addEventListener("keydown", X), () => document.removeEventListener("keydown", X);
  }, [t, n]), !b) return null;
  const x = typeof g == "number" ? `${g}px` : g;
  return Xe(
    /* @__PURE__ */ f(
      S,
      {
        onClick: n,
        style: {
          position: "fixed",
          top: x,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: se.Modal,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          opacity: m ? 1 : 0,
          transition: `opacity ${Ie}ms ease`
        },
        children: [
          /* @__PURE__ */ e(
            S,
            {
              onClick: (X) => X.stopPropagation(),
              onMouseLeave: c ? n : void 0,
              backgroundColor: v.Default,
              padding: o,
              style: {
                display: "flex",
                justifyContent: wn[y],
                width: "100%",
                transform: m ? "translateY(0)" : "translateY(-12px)",
                transition: `transform ${Ie + 50}ms ease`
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
kn.displayName = "Drawer";
const Xn = L(
  ({ trigger: t, sections: n, activeId: r, onSelect: l }, o) => {
    const [a, d] = H(!1), s = te(null), c = () => d((h) => !h), b = (h) => {
      l == null || l(h), d(!1);
    }, u = J((h) => {
      h.key === "Escape" && d(!1);
    }, []), m = J((h) => {
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
          /* @__PURE__ */ e(
            W,
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
              backgroundColor: v.Default,
              borderColor: z.Default,
              borderSide: "all",
              borderRadius: I.Large,
              elevation: ue.Dropdown,
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
                ht,
                {
                  sections: n,
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
Xn.displayName = "DropdownMenu";
const Cn = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), Mn = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), Ln = L(
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
        l && /* @__PURE__ */ e(
          S,
          {
            padding: i.Large,
            style: { borderBottom: `1px solid ${m}` },
            children: l
          }
        ),
        /* @__PURE__ */ e(
          _,
          {
            space: i.Small,
            grow: "fill",
            style: { padding: i.Medium, overflow: "auto" },
            children: t.map((g, y) => /* @__PURE__ */ f(_, { space: i.XXSmall, children: [
              g.title && !a && /* @__PURE__ */ e(S, { paddingInline: i.Medium, paddingBlock: i.XSmall, children: /* @__PURE__ */ e(
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
                const X = x.id === n;
                return /* @__PURE__ */ f(
                  oe,
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
                      x.icon && /* @__PURE__ */ e(S, { style: { flexShrink: 0 }, children: x.icon }),
                      !a && /* @__PURE__ */ f(Z, { children: [
                        /* @__PURE__ */ e(D, { as: "span", style: { flex: "1 1 auto", color: "inherit" }, children: x.label }),
                        x.badge && /* @__PURE__ */ e(ut, { variant: x.badgeVariant ?? "default", children: x.badge })
                      ] })
                    ]
                  },
                  x.id
                );
              })
            ] }, y))
          }
        ),
        d && /* @__PURE__ */ e(
          S,
          {
            padding: i.Medium,
            style: { borderTop: `1px solid ${m}` },
            children: /* @__PURE__ */ e(
              Q,
              {
                label: a ? "Expand sidebar" : "Collapse sidebar",
                onClick: d,
                color: p.Subtle,
                padding: i.XSmall,
                children: a ? /* @__PURE__ */ e(Mn, {}) : /* @__PURE__ */ e(Cn, {})
              }
            )
          }
        ),
        o && /* @__PURE__ */ e(
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
Ln.displayName = "Sidebar";
const In = () => /* @__PURE__ */ e(
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
), Bn = L(
  ({
    open: t,
    onClose: n,
    title: r,
    side: l = "right",
    mode: o = "overlay",
    width: a = "384px",
    children: d
  }, s) => {
    const c = J(
      (u) => {
        u.key === "Escape" && n();
      },
      [n]
    );
    if (K(() => {
      if (t)
        return document.addEventListener("keydown", c), () => document.removeEventListener("keydown", c);
    }, [t, c]), !t) return null;
    const b = /* @__PURE__ */ f(
      S,
      {
        ref: s,
        backgroundColor: v.Default,
        elevation: ue.Overlay,
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
              children: /* @__PURE__ */ f(W, { alignBlock: "center", spread: "space-between", children: [
                /* @__PURE__ */ e(D, { as: "h2", size: w.Large, weight: R.Semibold, color: p.Default, children: r }),
                /* @__PURE__ */ e(Q, { label: "Close panel", onClick: n, color: p.Subtle, children: /* @__PURE__ */ e(In, {}) })
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
            backgroundColor: v.Overlay
          },
          onClick: (u) => {
            u.target === u.currentTarget && n();
          },
          children: b
        }
      ),
      document.body
    ) : b;
  }
);
Bn.displayName = "Panel";
const Dn = L(
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
Dn.displayName = "Aside";
const En = L(
  ({
    topNav: t,
    sideNav: n,
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
En.displayName = "Layout";
const zn = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
function ot(t, n) {
  return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate();
}
function Tn(t, n) {
  return new Date(t, n + 1, 0).getDate();
}
function Rn(t, n) {
  return new Date(t, n, 1).getDay();
}
const An = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), Nn = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), $n = [
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
], Wn = L(
  ({
    value: t,
    defaultValue: n,
    onChange: r,
    min: l,
    max: o,
    selectedColor: a = p.Inverse,
    selectedBackground: d = v.Brand
  }, s) => {
    const c = /* @__PURE__ */ new Date(), [b, u] = H(n), m = t !== void 0, h = m ? t : b, [g, y] = H(
      (h ?? c).getFullYear()
    ), [x, X] = H(
      (h ?? c).getMonth()
    ), C = ve(() => Tn(g, x), [g, x]), O = ve(() => Rn(g, x), [g, x]), M = () => {
      x === 0 ? (X(11), y((k) => k - 1)) : X((k) => k - 1);
    }, T = () => {
      x === 11 ? (X(0), y((k) => k + 1)) : X((k) => k + 1);
    }, A = (k) => {
      const B = new Date(g, x, k);
      m || u(B), r == null || r(B);
    }, F = (k) => {
      const B = new Date(g, x, k);
      return !!(l && B < new Date(l.getFullYear(), l.getMonth(), l.getDate()) || o && B > new Date(o.getFullYear(), o.getMonth(), o.getDate()));
    }, N = [];
    for (let k = 0; k < O; k++)
      N.push(/* @__PURE__ */ e(S, {}, `empty-${k}`));
    for (let k = 1; k <= C; k++) {
      const B = new Date(g, x, k), $ = h ? ot(B, h) : !1, Y = ot(B, c), j = F(k);
      N.push(
        /* @__PURE__ */ e(
          oe,
          {
            disabled: j,
            onClick: () => A(k),
            borderRadius: I.Medium,
            style: {
              width: "36px",
              height: "36px",
              padding: 0,
              fontSize: w.XSmall,
              fontWeight: $ ? R.Semibold : R.Regular,
              backgroundColor: $ ? d : "transparent",
              color: $ ? a : j ? p.Disabled : p.Default,
              border: Y && !$ ? `1px solid ${z.Default}` : "none",
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
                /* @__PURE__ */ e(Q, { label: "Previous month", onClick: M, color: p.Subtle, padding: i.XSmall, children: /* @__PURE__ */ e(An, {}) }),
                /* @__PURE__ */ f(D, { as: "span", size: w.XSmall, weight: R.Semibold, color: p.Default, children: [
                  $n[x],
                  " ",
                  g
                ] }),
                /* @__PURE__ */ e(Q, { label: "Next month", onClick: T, color: p.Subtle, padding: i.XSmall, children: /* @__PURE__ */ e(Nn, {}) })
              ]
            }
          ),
          /* @__PURE__ */ f(dt, { columns: 7, gap: i.XXSmall, children: [
            zn.map((k) => /* @__PURE__ */ e(
              D,
              {
                as: "span",
                size: w.XXSmall,
                weight: R.Medium,
                color: p.Subtlest,
                align: "center",
                style: { padding: `${i.XSmall} 0` },
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
Wn.displayName = "Calendar";
const Fn = L(
  ({ header: t, description: n, image: r, primaryAction: l, secondaryAction: o }, a) => /* @__PURE__ */ f(
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
        r && /* @__PURE__ */ e("div", { children: r }),
        /* @__PURE__ */ f(_, { space: i.Medium, alignInline: "center", children: [
          /* @__PURE__ */ e(
            D,
            {
              as: "h3",
              fontFamily: It.Display,
              size: w.XLarge,
              weight: R.Bold,
              color: p.Default,
              children: t
            }
          ),
          n && /* @__PURE__ */ e(D, { as: "p", size: w.XSmall, color: p.Subtle, lineHeight: 1.6, children: n })
        ] }),
        (l || o) && /* @__PURE__ */ f(W, { space: i.Medium, alignBlock: "center", children: [
          l,
          o
        ] })
      ]
    }
  )
);
Fn.displayName = "EmptyState";
const On = ({ order: t }) => /* @__PURE__ */ e(
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
    children: t === "ASC" ? /* @__PURE__ */ e("path", { d: "M8 3l4 5H4l4-5z" }) : t === "DESC" ? /* @__PURE__ */ e("path", { d: "M8 13l4-5H4l4 5z" }) : /* @__PURE__ */ f(Z, { children: [
      /* @__PURE__ */ e("path", { d: "M8 3l3 4H5l3-4z" }),
      /* @__PURE__ */ e("path", { d: "M8 13l3-4H5l3 4z" })
    ] })
  }
), Hn = L(
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
    defaultSortOrder: b = "ASC",
    onSort: u,
    onSetPage: m,
    isLoading: h = !1,
    isFixedSize: g = !1
  }, y) => {
    const [x, X] = H(a), [C, O] = H(c), [M, T] = H(b), A = o !== void 0, F = A ? o : x, N = d !== void 0, k = N ? d : C, B = N ? s ?? "ASC" : M, $ = l ? Math.max(1, Math.ceil(r.length / l)) : 1, Y = ve(() => {
      if (!l) return r;
      const E = (F - 1) * l;
      return r.slice(E, E + l);
    }, [r, l, F]), j = (E) => {
      const U = k === E && B === "ASC" ? "DESC" : "ASC";
      N || (O(E), T(U)), u == null || u(E, U);
    }, P = (E) => {
      A || X(E), m == null || m(E);
    }, G = {
      padding: `${i.MediumLarge} ${i.Large}`
    };
    return /* @__PURE__ */ f(S, { style: { position: "relative" }, children: [
      h && /* @__PURE__ */ e(
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
          children: /* @__PURE__ */ e(pt, { size: "large" })
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
            t && /* @__PURE__ */ e(
              "caption",
              {
                style: {
                  textAlign: "left",
                  paddingBlockEnd: i.Medium,
                  fontWeight: R.Semibold,
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
                  ...G,
                  textAlign: "left",
                  fontWeight: R.Semibold,
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
                    On,
                    {
                      order: k === E.key ? B : void 0
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
                  children: E.cells.map((U, re) => /* @__PURE__ */ e("td", { style: { ...G, color: p.Default }, children: U }, re))
                },
                E.key
              )),
              Y.length === 0 && /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e(
                "td",
                {
                  colSpan: n.length,
                  style: {
                    ...G,
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
      l && $ > 1 && /* @__PURE__ */ f(
        W,
        {
          space: i.Medium,
          alignBlock: "center",
          alignInline: "center",
          style: { paddingBlock: i.Large },
          children: [
            /* @__PURE__ */ e(
              oe,
              {
                disabled: F <= 1,
                onClick: () => P(F - 1),
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
              F,
              " of ",
              $
            ] }),
            /* @__PURE__ */ e(
              oe,
              {
                disabled: F >= $,
                onClick: () => P(F + 1),
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
Hn.displayName = "Table";
const jn = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z", clipRule: "evenodd" }) }), Pn = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" }) }), Vn = L(
  ({
    defaultValue: t,
    label: n,
    editButtonLabel: r,
    editView: l,
    readView: o,
    onConfirm: a,
    onCancel: d
  }, s) => {
    const [c, b] = H(!1), [u, m] = H(t);
    te(null), K(() => {
      m(t);
    }, [t]);
    const h = J(() => {
      b(!1), a(u);
    }, [u, a]), g = J(() => {
      m(t), b(!1), d == null || d();
    }, [t, d]), y = J(
      (C) => {
        C.key === "Enter" && h(), C.key === "Escape" && g();
      },
      [h, g]
    ), x = (C) => /* @__PURE__ */ e(
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
        children: /* @__PURE__ */ e(D, { as: "span", size: w.Small, color: p.Default, children: C || " " })
      }
    ), X = (C) => /* @__PURE__ */ e(
      De,
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
      c ? /* @__PURE__ */ f(W, { space: i.XSmall, alignBlock: "start", children: [
        /* @__PURE__ */ e(S, { style: { flex: "1 1 auto" }, children: (l ?? X)({
          value: u,
          onChange: (C) => m(C.target.value),
          onKeyDown: y,
          autoFocus: !0
        }) }),
        /* @__PURE__ */ e(
          Q,
          {
            label: "Confirm",
            onClick: h,
            color: p.Success,
            padding: i.XSmall,
            children: /* @__PURE__ */ e(jn, {})
          }
        ),
        /* @__PURE__ */ e(
          Q,
          {
            label: "Cancel",
            onClick: g,
            color: p.Error,
            padding: i.XSmall,
            children: /* @__PURE__ */ e(Pn, {})
          }
        )
      ] }) : /* @__PURE__ */ e(
        S,
        {
          onClick: () => b(!0),
          role: "button",
          tabIndex: 0,
          "aria-label": r ?? t ?? "Edit",
          onKeyDown: (C) => {
            (C.key === "Enter" || C.key === " ") && (C.preventDefault(), b(!0));
          },
          style: { cursor: "pointer" },
          children: (o ?? x)(t)
        }
      )
    ] });
  }
);
Vn.displayName = "InlineEdit";
const Yn = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "currentColor", style: { width: "14px", height: "14px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z", clipRule: "evenodd" }) }), _n = L(
  ({ trigger: t, groups: n, checked: r, onChange: l }, o) => {
    const [a, d] = H(!1), s = te(null), c = J((u) => {
      u.key === "Escape" && d(!1);
    }, []), b = J((u) => {
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
          /* @__PURE__ */ e(
            W,
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
              backgroundColor: v.Default,
              borderColor: z.Default,
              borderSide: "all",
              borderRadius: I.XLarge,
              elevation: ue.Dropdown,
              padding: i.XSmall,
              style: {
                position: "absolute",
                top: "100%",
                left: 0,
                marginTop: i.XSmall,
                minWidth: "224px",
                zIndex: se.Dropdown
              },
              children: /* @__PURE__ */ e(_, { space: i.XSmall, children: n.map((u, m) => /* @__PURE__ */ f(_, { space: i.XXSmall, children: [
                u.title && /* @__PURE__ */ e(S, { paddingInline: i.MediumLarge, paddingBlock: i.XSmall, children: /* @__PURE__ */ e(
                  D,
                  {
                    as: "span",
                    size: w.XXSmall,
                    weight: R.Semibold,
                    color: p.Subtlest,
                    textTransform: "uppercase",
                    children: u.title
                  }
                ) }),
                u.items.map((h) => {
                  const g = !!r[h.id];
                  return /* @__PURE__ */ f(
                    oe,
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
                        /* @__PURE__ */ e(
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
                            children: g && /* @__PURE__ */ e(Yn, {})
                          }
                        ),
                        /* @__PURE__ */ e(D, { as: "span", size: w.XSmall, style: { color: "inherit" }, children: h.label })
                      ]
                    },
                    h.id
                  );
                }),
                m < n.length - 1 && /* @__PURE__ */ e(
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
_n.displayName = "DropdownCheckboxMenu";
const Kn = L(
  ({
    label: t,
    helperText: n,
    errorText: r,
    id: l,
    labelColor: o = p.Default,
    labelSize: a = w.XSmall,
    labelWeight: d = R.Medium,
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
    options: O,
    disabled: M,
    required: T,
    onChange: A,
    onBlur: F
  }, N) => {
    const k = ke(), B = l ?? k, $ = `${B}-helper`, Y = `${B}-error`, j = !!r, P = j ? z.Error : u, G = h === "bottom", E = /* @__PURE__ */ e(
      bt,
      {
        ref: N,
        id: B,
        name: y,
        value: x,
        defaultValue: X,
        placeholder: C,
        options: O,
        disabled: M,
        required: T,
        onChange: A,
        onBlur: F,
        backgroundColor: G ? "transparent" : b,
        borderColor: G ? void 0 : P,
        borderRadius: G ? void 0 : m,
        padding: g,
        fontSize: w.XSmall,
        color: p.Default,
        style: { width: "100%" },
        "aria-describedby": j ? Y : n ? $ : void 0,
        "aria-invalid": j || void 0
      }
    ), U = G ? /* @__PURE__ */ e("div", { style: {
      width: "100%",
      backgroundColor: b,
      borderBottom: `2px solid ${P}`
    }, children: E }) : E;
    return /* @__PURE__ */ f(_, { space: i.XSmall, children: [
      t && /* @__PURE__ */ e(
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
          children: t
        }
      ),
      U,
      j && /* @__PURE__ */ e(D, { as: "span", size: w.XXSmall, color: p.Error, id: Y, children: r }),
      !j && n && /* @__PURE__ */ e(D, { as: "span", size: w.XXSmall, color: p.Subtle, id: $, children: n })
    ] });
  }
);
Kn.displayName = "SelectField";
const Gn = {
  info: { bg: v.Default, text: p.Info, accent: "#3b82f6" },
  success: { bg: v.Default, text: p.Success, accent: "#22c55e" },
  warning: { bg: v.Default, text: p.Warning, accent: "#f59e0b" },
  error: { bg: v.Default, text: p.Error, accent: "#ba1a1a" }
}, Un = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "14px", height: "14px" },
    children: /* @__PURE__ */ e("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  }
), Jn = L(
  ({ open: t, onClose: n, duration: r = 5e3, variant: l = "info", icon: o, children: a }, d) => {
    if (K(() => {
      if (!t || r === 0) return;
      const c = setTimeout(n, r);
      return () => clearTimeout(c);
    }, [t, r, n]), !t) return null;
    const s = Gn[l];
    return Xe(
      /* @__PURE__ */ e(
        S,
        {
          ref: d,
          role: "alert",
          "aria-live": "assertive",
          backgroundColor: s.bg,
          borderRadius: I.XXLarge,
          elevation: ue.Overlay,
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
          children: /* @__PURE__ */ f(W, { space: i.MediumLarge, alignBlock: "center", spread: "space-between", children: [
            /* @__PURE__ */ f(W, { space: i.MediumLarge, alignBlock: "center", grow: "fill", children: [
              o && /* @__PURE__ */ e(S, { style: { color: s.accent, flexShrink: 0 }, children: o }),
              /* @__PURE__ */ e(D, { as: "span", size: w.XSmall, weight: R.Medium, color: p.Default, children: a })
            ] }),
            /* @__PURE__ */ e(
              Q,
              {
                label: "Dismiss",
                onClick: n,
                color: p.Subtle,
                padding: i.XXSmall,
                children: /* @__PURE__ */ e(Un, {})
              }
            )
          ] })
        }
      ),
      document.body
    );
  }
);
Jn.displayName = "Toast";
const qn = L(
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
        backgroundColor: v.Default,
        borderTop: `1px solid ${z.Default}`,
        backdropFilter: "blur(20px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        paddingInline: i.Large,
        paddingBlock: i.Medium
      },
      children: t.map((a, d) => {
        const s = a.id === n, c = Math.floor(t.length / 2), b = l && d === c;
        return /* @__PURE__ */ f(ne.Fragment, { children: [
          b && /* @__PURE__ */ e(S, { style: { marginTop: `-${i.XXXLarge}` }, children: l }),
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
                    weight: R.Bold,
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
qn.displayName = "MobileNav";
const Zn = () => /* @__PURE__ */ e(
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
), Qn = L(
  ({ items: t, showLabels: n, variant: r = "dot" }, l) => {
    const o = V(n ?? !0), a = 32, d = t.filter((s) => s.status === "visited").length;
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
          const b = s.status === "visited", u = s.status === "current";
          return t.length - 1, /* @__PURE__ */ f("div", { style: { display: "flex", flexDirection: "column", gap: i.Medium }, children: [
            /* @__PURE__ */ e("div", { style: {
              height: 6,
              borderRadius: I.Full,
              background: u ? xe.Brand : "none",
              backgroundColor: u ? void 0 : b ? v.PrimaryContainer : v.NeutralBold,
              opacity: b ? 0.4 : 1,
              boxShadow: u ? "0 0 8px var(--bbui-color-primary), 0 0 20px var(--bbui-color-primary)" : "none",
              transition: "all 400ms ease",
              cursor: s.onClick ? "pointer" : "default"
            }, onClick: s.onClick }),
            o && /* @__PURE__ */ e(
              D,
              {
                as: "p",
                size: w.Micro,
                weight: u ? R.Bold : R.Medium,
                color: u ? p.Brand : b ? p.Subtle : p.Disabled,
                textTransform: "uppercase",
                letterSpacing: ct.Widest,
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
            const b = c === t.length - 1, u = s.status === "visited", m = s.status === "current", h = s.status === "disabled", g = u ? xe.Brand : m ? "transparent" : v.NeutralBold, y = /* @__PURE__ */ e(
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
                  fontWeight: R.Bold,
                  border: m ? `2px solid ${p.Brand}` : "none",
                  cursor: s.onClick || s.href ? "pointer" : "default",
                  transition: "all 300ms ease"
                },
                onClick: s.onClick,
                children: u ? /* @__PURE__ */ e(Zn, {}) : c + 1
              }
            ), x = s.href ? /* @__PURE__ */ e("a", { href: s.href, style: { textDecoration: "none", color: "inherit" }, children: y }) : y;
            return /* @__PURE__ */ f(ne.Fragment, { children: [
              x,
              !b && /* @__PURE__ */ e("div", { style: {
                flex: "1 1 auto",
                height: 2,
                backgroundColor: v.NeutralBold,
                position: "relative",
                marginInline: i.XSmall,
                borderRadius: I.Full,
                overflow: "hidden"
              }, children: /* @__PURE__ */ e("div", { style: {
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
          o && /* @__PURE__ */ e("div", { style: {
            display: "flex",
            alignItems: "flex-start",
            width: "100%",
            marginTop: i.Medium
          }, children: t.map((s, c) => {
            const b = c === t.length - 1, u = s.status === "visited", m = s.status === "current", h = s.status === "disabled", g = u ? p.Brand : m ? p.Default : h ? p.Disabled : p.Subtle;
            return /* @__PURE__ */ f(ne.Fragment, { children: [
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
                  weight: m ? R.Bold : R.Medium,
                  color: g,
                  align: "center",
                  style: {
                    whiteSpace: "nowrap"
                  },
                  children: s.label
                }
              ) }),
              !b && /* @__PURE__ */ e("div", { style: { flex: "1 1 auto" } })
            ] }, s.id);
          }) })
        ]
      }
    );
  }
);
Qn.displayName = "ProgressTracker";
const er = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";
function tr(t) {
  const n = /* @__PURE__ */ f(W, { space: i.XSmall, alignBlock: "center", children: [
    /* @__PURE__ */ e(
      D,
      {
        size: w.XSmall,
        weight: R.Semibold,
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
function nr(t) {
  return /* @__PURE__ */ e(
    Me,
    {
      src: t.src,
      alt: t.alt,
      width: t.width ?? i.Size8,
      height: t.height ?? i.Size8,
      objectFit: "cover",
      borderRadius: I.Medium,
      style: { opacity: 0.8 }
    }
  );
}
const rr = L(
  ({
    icon: t,
    heading: n,
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
      backgroundImage: `url("${er}")`,
      opacity: 0.03,
      pointerEvents: "none"
    }, y = /* @__PURE__ */ f(_, { space: i.Medium, style: { flex: 1 }, children: [
      t && /* @__PURE__ */ e(S, { marginBlockEnd: i.Medium, children: t }),
      /* @__PURE__ */ e(
        D,
        {
          as: "h3",
          size: w.Large,
          weight: R.Bold,
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
      l && tr(l),
      u
    ] });
    return /* @__PURE__ */ f(S, { ref: m, padding: a, style: h, children: [
      /* @__PURE__ */ e("div", { style: g, "aria-hidden": "true" }),
      o ? /* @__PURE__ */ f(W, { space: i.XXLarge, alignBlock: "center", children: [
        y,
        /* @__PURE__ */ e("div", { style: { flexShrink: 0 }, children: nr(o) })
      ] }) : y
    ] });
  }
);
rr.displayName = "GlassCard";
const lr = `
@keyframes bbui-pulse-down {
  0%, 100% { transform: translateY(0); opacity: 0.4 }
  50%      { transform: translateY(3px); opacity: 0.9 }
}
`, at = "36px", ir = "18px", or = L(
  ({ items: t, onComplete: n, finishedLabel: r, maxHeight: l = "256px" }, o) => {
    const [a, d] = H(() => /* @__PURE__ */ new Set()), s = te(!1), c = te(null), b = te([]), u = a.size >= t.length;
    return K(() => {
      u && !s.current && (s.current = !0, n == null || n());
    }, [u, n]), K(() => {
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
    }, [t.length]), /* @__PURE__ */ f("div", { ref: o, style: { width: "100%", position: "relative" }, children: [
      /* @__PURE__ */ e("style", { children: lr }),
      /* @__PURE__ */ e("div", { ref: c, style: dr(l, u), children: /* @__PURE__ */ e(_, { space: i.MediumLarge, children: t.map((m, h) => {
        const g = a.has(h);
        return /* @__PURE__ */ f(
          "div",
          {
            ref: (y) => b.current[h] = y,
            "data-idx": h,
            style: cr(g),
            children: [
              /* @__PURE__ */ e(ar, { item: m }),
              h < t.length - 1 && /* @__PURE__ */ e("span", { "aria-hidden": "true", style: gr(g) })
            ]
          },
          m.id ?? h
        );
      }) }) }),
      /* @__PURE__ */ e("div", { style: mr, children: u ? r : /* @__PURE__ */ e(sr, {}) })
    ] });
  }
);
or.displayName = "RevealSteps";
function ar({ item: t }) {
  return /* @__PURE__ */ f("div", { style: ur, children: [
    /* @__PURE__ */ e("span", { "aria-hidden": "true", style: pr, children: t.icon }),
    /* @__PURE__ */ f("span", { style: br, children: [
      /* @__PURE__ */ e(D, { as: "span", size: w.Small, weight: R.Medium, children: t.label }),
      t.description && /* @__PURE__ */ e(D, { as: "span", size: w.XSmall, color: p.Subtle, children: t.description })
    ] }),
    t.meta && /* @__PURE__ */ e("span", { style: hr, children: t.meta })
  ] });
}
function sr() {
  return /* @__PURE__ */ e("div", { style: fr, "aria-hidden": "true", children: /* @__PURE__ */ e(
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
const st = "linear-gradient(to bottom, black 0%, black calc(100% - 32px), transparent 100%)", dr = (t, n) => ({
  maxHeight: t,
  overflowY: "auto",
  scrollBehavior: "smooth",
  maskImage: n ? "none" : st,
  WebkitMaskImage: n ? "none" : st,
  paddingRight: i.XSmall
}), cr = (t) => ({
  position: "relative",
  opacity: t ? 1 : 0.15,
  transform: t ? "translateY(0)" : "translateY(8px)",
  filter: t ? "blur(0)" : "blur(2px)",
  transition: "opacity 420ms ease-out, transform 420ms cubic-bezier(0.22, 1, 0.36, 1), filter 420ms ease-out"
}), ur = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: i.MediumLarge,
  padding: i.MediumLarge,
  background: v.Subtle,
  borderRadius: I.Large,
  border: `1px solid ${z.Default}`,
  color: p.Default
}, pr = {
  width: at,
  height: at,
  flexShrink: 0,
  borderRadius: I.Medium,
  background: v.Subtle,
  color: p.Default,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
}, br = {
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: i.XXSmall
}, hr = {
  flexShrink: 0,
  display: "inline-flex",
  alignItems: "center"
}, gr = (t) => ({
  position: "absolute",
  left: `calc(${i.MediumLarge} + ${ir} - 1px)`,
  top: "100%",
  height: i.MediumLarge,
  width: "2px",
  background: z.Default,
  opacity: t ? 1 : 0,
  transition: "opacity 300ms ease-out",
  pointerEvents: "none"
}), mr = {
  marginTop: i.Large,
  display: "flex",
  justifyContent: "center",
  minHeight: "20px"
}, fr = {
  color: p.Subtle,
  animation: "bbui-pulse-down 1500ms ease-in-out infinite",
  display: "inline-flex"
}, yr = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree"
], xr = L(
  ({ value: t, onChange: n, labels: r = yr }, l) => {
    const [o, a] = H(null);
    return /* @__PURE__ */ e("div", { ref: l, role: "radiogroup", style: vr, children: r.map((d, s) => {
      const c = s + 1, b = t === c;
      return /* @__PURE__ */ e(
        "button",
        {
          type: "button",
          role: "radio",
          "aria-checked": b,
          "aria-label": d,
          onClick: () => n(c),
          onMouseEnter: () => a(c),
          onMouseLeave: () => a(null),
          onFocus: () => a(c),
          onBlur: () => a(null),
          style: Sr(b, !b && o === c),
          children: d
        },
        c
      );
    }) });
  }
);
xr.displayName = "LikertScale";
const vr = {
  display: "flex",
  flexDirection: "column",
  gap: i.Medium,
  width: "100%"
}, Sr = (t, n) => {
  const r = "var(--bbui-color-primary)", l = t ? "var(--bbui-bg-primary-container)" : n ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)", o = t || n ? r : "rgba(255,255,255,0.08)";
  return {
    width: "100%",
    height: "48px",
    padding: `0 ${i.MediumLarge}`,
    borderRadius: I.Large,
    border: `1px solid ${o}`,
    background: l,
    color: "#ffffff",
    fontSize: w.Small,
    fontWeight: R.Medium,
    textAlign: "center",
    cursor: "pointer",
    transition: "background 180ms ease, border-color 180ms ease",
    font: "inherit"
  };
};
function Gr(t) {
  const [n, r] = H(
    () => typeof window < "u" ? window.matchMedia(t).matches : !1
  );
  return K(() => {
    const l = window.matchMedia(t), o = (a) => r(a.matches);
    return l.addEventListener("change", o), r(l.matches), () => l.removeEventListener("change", o);
  }, [t]), n;
}
function Be() {
  return typeof window > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function wr(t) {
  typeof document > "u" || (t === "system" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", t));
}
function Ur() {
  const [t, n] = H(() => typeof localStorage > "u" ? "system" : localStorage.getItem("bbui-theme") ?? "system"), [r, l] = H(
    () => t === "system" ? Be() : t
  ), o = J((a) => {
    n(a), typeof localStorage < "u" && (a === "system" ? localStorage.removeItem("bbui-theme") : localStorage.setItem("bbui-theme", a));
  }, []);
  return K(() => {
    wr(t), l(t === "system" ? Be() : t);
  }, [t]), K(() => {
    if (t !== "system") return;
    const a = window.matchMedia("(prefers-color-scheme: dark)"), d = () => l(Be());
    return a.addEventListener("change", d), () => a.removeEventListener("change", d);
  }, [t]), { theme: t, resolvedTheme: r, setTheme: o };
}
async function* kr(t, n) {
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
async function* Xr(t, n = {}) {
  const r = await fetch(t, n);
  if (!r.ok) {
    const l = await r.text().catch(() => "");
    throw new Error(
      `SSE request failed ${r.status} ${r.statusText}: ${l}`
    );
  }
  yield* kr(r, n.signal);
}
function Jr(t = {}) {
  const { onEvent: n, onComplete: r, onError: l, retain: o = !0 } = t, [a, d] = H([]), [s, c] = H(null), [b, u] = H(!1), [m, h] = H(null), g = te(null), y = te(!0), x = te(n), X = te(r), C = te(l);
  K(() => {
    x.current = n, X.current = r, C.current = l;
  }), K(() => (y.current = !0, () => {
    var A;
    y.current = !1, (A = g.current) == null || A.abort();
  }), []);
  const O = J(() => {
    var A;
    (A = g.current) == null || A.abort(), g.current = null;
  }, []), M = J(() => {
    d([]), c(null), h(null);
  }, []), T = J(
    async (A, F = {}) => {
      var k, B, $, Y;
      (k = g.current) == null || k.abort();
      const N = new AbortController();
      g.current = N, y.current && (d([]), c(null), h(null), u(!0));
      try {
        for await (const j of Xr(A, {
          ...F,
          signal: N.signal
        })) {
          if (!y.current) return;
          o && d((P) => [...P, j]), c(j), (B = x.current) == null || B.call(x, j);
        }
        y.current && (($ = X.current) == null || $.call(X));
      } catch (j) {
        if (N.signal.aborted) return;
        const P = j instanceof Error ? j : new Error(String(j));
        y.current && (h(P), (Y = C.current) == null || Y.call(C, P));
      } finally {
        y.current && g.current === N && (u(!1), g.current = null);
      }
    },
    [o]
  );
  return { events: a, lastEvent: s, isStreaming: b, error: m, start: T, abort: O, reset: M };
}
export {
  Hr as AccentColor,
  zr as AlignItems,
  Rr as AlignSelf,
  he as Anchor,
  Dn as Aside,
  Gt as Avatar,
  v as BackgroundColor,
  ut as Badge,
  mn as Banner,
  ae as BloomColor,
  ee as BloomLevel,
  z as BorderColor,
  I as BorderRadius,
  Or as BorderWidth,
  S as Box,
  Qe as Breakpoint,
  oe as Button,
  Wn as Calendar,
  pn as Card,
  tn as Checkbox,
  Rt as Chip,
  jr as ContainerWidth,
  Wr as Cursor,
  _r as DirectionColor,
  Er as Display,
  nn as Divider,
  kn as Drawer,
  _n as DropdownCheckboxMenu,
  Xn as DropdownMenu,
  ue as Elevation,
  Fn as EmptyState,
  Yr as EvaluationResultColor,
  Ar as FlexDirection,
  Nr as FlexWrap,
  It as FontFamily,
  w as FontSize,
  R as FontWeight,
  rr as GlassCard,
  xe as Gradient,
  dt as Grid,
  yn as Header,
  un as HeroSection,
  Br as Hide,
  Lt as Icon,
  Q as IconButton,
  Pr as IconSize,
  Me as Image,
  W as Inline,
  Vn as InlineEdit,
  Tr as JustifyContent,
  En as Layout,
  ct as LetterSpacing,
  xr as LikertScale,
  jt as LinkButton,
  Wt as LiquidGlass,
  ht as Menu,
  qn as MobileNav,
  Sn as Modal,
  xn as ModalSize,
  cn as Navbar,
  Bn as Panel,
  Kr as PersonaAccent,
  $r as Position,
  Qn as ProgressTracker,
  or as RevealSteps,
  bt as Select,
  Kn as SelectField,
  Ir as Show,
  Ln as Sidebar,
  i as Spacing,
  pt as Spinner,
  _ as Stack,
  on as Stepper,
  Hn as Table,
  fn as Tabs,
  D as Text,
  qt as TextArea,
  p as TextColor,
  bn as TextField,
  De as TextInput,
  Dr as TextTransform,
  Jn as Toast,
  Ht as Toggle,
  Fr as WhiteSpace,
  se as ZIndex,
  Bt as bloomColorFor,
  Dt as bloomLevelForScore,
  kr as parseSSEStream,
  Vr as scoreColor,
  Xr as streamSSE,
  Ce as useBreakpoint,
  Gr as useMediaQuery,
  V as useResponsiveValue,
  Jr as useSSEStream,
  Ur as useTheme
};
