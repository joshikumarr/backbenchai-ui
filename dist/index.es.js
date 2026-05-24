import ne, { useState as H, useEffect as K, forwardRef as M, Fragment as zt, useMemo as ve, useCallback as J, useId as ke, useRef as te } from "react";
import { jsx as e, Fragment as Z, jsxs as f } from "react/jsx-runtime";
import { createPortal as Xe } from "react-dom";
const ut = {
  /** 0–639px */
  Mobile: 0,
  /** 640–1023px */
  Tablet: 640,
  /** 1024px+ */
  Desktop: 1024
};
function pt(t) {
  return t >= ut.Desktop ? "desktop" : t >= ut.Tablet ? "tablet" : "mobile";
}
function Ce() {
  const [t, n] = H(
    () => typeof window < "u" ? pt(window.innerWidth) : "desktop"
  );
  return K(() => {
    const r = () => n(pt(window.innerWidth));
    return window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []), t;
}
function Tt(t, n) {
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
  return Tt(t, n);
}
const fe = (t) => {
  if (t !== void 0)
    return Array.isArray(t) ? t.join(" ") : t;
}, S = M(
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
    marginBlockEnd: g,
    marginInline: h,
    marginInlineStart: m,
    marginInlineEnd: y,
    backgroundColor: x,
    borderRadius: X,
    borderColor: C,
    borderSide: $,
    borderWidth: L = "1px",
    overflow: T,
    elevation: A,
    width: O,
    maxWidth: N,
    height: k,
    minHeight: B,
    maxHeight: W,
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
    top: ce,
    right: ye,
    bottom: Ee,
    left: ze,
    zIndex: Te,
    color: Re,
    opacity: Ae,
    cursor: Ne,
    whiteSpace: $e,
    pointerEvents: We,
    background: Fe,
    border: Oe,
    boxShadow: He,
    transition: je,
    transform: Pe,
    aspectRatio: Ve,
    filter: Ye,
    backdropFilter: _e,
    style: Mt,
    children: It,
    ...Bt
  }, Dt) => {
    const Ke = fe(V(n)), Ge = fe(V(r)), Ue = V(l), Je = V(o), qe = fe(V(a)), Ze = V(d), Qe = V(s), et = fe(V(c)), tt = fe(V(b)), nt = V(u), rt = V(g), lt = fe(V(h)), it = V(m), ot = V(y), at = V(j), st = V(P), dt = V(G), ct = V(U), ge = C ? `${L} solid ${C}` : void 0, me = {};
    if (ge && $)
      switch ($) {
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
    const Et = {
      ...Ke && { padding: Ke },
      ...Ge && { paddingBlock: Ge },
      ...Ue && { paddingBlockStart: Ue },
      ...Je && { paddingBlockEnd: Je },
      ...qe && { paddingInline: qe },
      ...Ze && { paddingInlineStart: Ze },
      ...Qe && { paddingInlineEnd: Qe },
      ...et && { margin: et },
      ...tt && { marginBlock: tt },
      ...nt && { marginBlockStart: nt },
      ...rt && { marginBlockEnd: rt },
      ...lt && { marginInline: lt },
      ...it && { marginInlineStart: it },
      ...ot && { marginInlineEnd: ot },
      ...x && { backgroundColor: x },
      ...X && { borderRadius: X },
      ...me,
      ...T && { overflow: T },
      ...A && { boxShadow: A },
      ...O !== void 0 && { width: O },
      ...N && { maxWidth: N, marginInline: "auto" },
      ...k !== void 0 && { height: k },
      ...B !== void 0 && { minHeight: B },
      ...W !== void 0 && { maxHeight: W },
      ...Y !== void 0 && { minWidth: Y },
      ...at && { display: at },
      ...st && { alignItems: st },
      ...dt && { justifyContent: dt },
      ...E && { alignSelf: E },
      ...ct && { flexDirection: ct },
      ...re && { flexWrap: re },
      ...le !== void 0 && { flex: le },
      ...pe !== void 0 && { flexGrow: pe },
      ...de !== void 0 && { flexShrink: de },
      ...ie && { gap: ie },
      ...q && { position: q },
      ...be !== void 0 && { inset: be },
      ...ce !== void 0 && { top: ce },
      ...ye !== void 0 && { right: ye },
      ...Ee !== void 0 && { bottom: Ee },
      ...ze !== void 0 && { left: ze },
      ...Te !== void 0 && { zIndex: Te },
      ...Re && { color: Re },
      ...Ae !== void 0 && { opacity: Ae },
      ...Ne && { cursor: Ne },
      ...$e && { whiteSpace: $e },
      ...We && { pointerEvents: We },
      ...Fe && { background: Fe },
      ...Oe && { border: Oe },
      ...He && { boxShadow: He },
      ...je && { transition: je },
      ...Pe && { transform: Pe },
      ...Ve !== void 0 && { aspectRatio: Ve },
      ...Ye && { filter: Ye },
      ..._e && { backdropFilter: _e },
      ...Mt
    };
    return ne.createElement(
      t,
      { ...Bt, ref: Dt, style: Et },
      It
    );
  }
);
S.displayName = "Box";
const Se = ["mobile", "tablet", "desktop"];
function Rt(t, n) {
  return Se.indexOf(t) >= Se.indexOf(n);
}
function At(t, n) {
  return Se.indexOf(t) < Se.indexOf(n);
}
function Or({ on: t, above: n, below: r, children: l }) {
  const o = Ce();
  return t != null ? (Array.isArray(t) ? t : [t]).includes(o) ? /* @__PURE__ */ e(Z, { children: l }) : null : n != null ? Rt(o, n) ? /* @__PURE__ */ e(Z, { children: l }) : null : r != null ? At(o, r) ? /* @__PURE__ */ e(Z, { children: l }) : null : /* @__PURE__ */ e(Z, { children: l });
}
const we = ["mobile", "tablet", "desktop"];
function Nt(t, n) {
  return we.indexOf(t) >= we.indexOf(n);
}
function $t(t, n) {
  return we.indexOf(t) < we.indexOf(n);
}
function Hr({ on: t, above: n, below: r, children: l }) {
  const o = Ce();
  return t != null ? (Array.isArray(t) ? t : [t]).includes(o) ? null : /* @__PURE__ */ e(Z, { children: l }) : n != null ? Nt(o, n) ? null : /* @__PURE__ */ e(Z, { children: l }) : r != null ? $t(o, r) ? null : /* @__PURE__ */ e(Z, { children: l }) : /* @__PURE__ */ e(Z, { children: l });
}
const bt = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch"
}, _ = M(
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
  }, g) => {
    const m = {
      display: "flex",
      flexDirection: "column",
      gap: V(n ?? "0"),
      ...r && { alignItems: bt[r] },
      ...l && !o && { justifyContent: bt[l] },
      ...o && { justifyContent: o },
      ...a === "fill" && { flex: "1 1 auto" },
      ...d && { marginBlockStart: d },
      ...s && { marginBlockEnd: s },
      ...c
    };
    return ne.createElement(
      t,
      { ...u, ref: g, style: m },
      b
    );
  }
);
_.displayName = "Stack";
const ht = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
  baseline: "baseline"
}, F = M(
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
    borderRadius: g,
    overflow: h,
    elevation: m,
    minWidth: y,
    style: x,
    children: X,
    ...C
  }, $) => {
    const L = V(n ?? "0"), [T, A] = Array.isArray(L) ? [L[0], L[1]] : [L, L], O = {
      display: "flex",
      flexDirection: "row",
      columnGap: A,
      rowGap: r ?? T,
      ...l && { alignItems: ht[l] },
      ...o && !a && { justifyContent: ht[o] },
      ...a && { justifyContent: a },
      ...d && { flexWrap: "wrap" },
      ...c === "fill" && { flex: "1 1 auto" },
      ...b && { marginBlockStart: b },
      ...u && { marginBlockEnd: u },
      ...g && { borderRadius: g },
      ...h && { overflow: h },
      ...m && { boxShadow: m },
      ...y !== void 0 && { minWidth: y },
      ...x
    };
    let N = X;
    if (s) {
      const k = ne.Children.toArray(X).filter(Boolean);
      N = k.map((B, W) => /* @__PURE__ */ f(zt, { children: [
        B,
        W < k.length - 1 && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: s })
      ] }, W));
    }
    return ne.createElement(
      t,
      { ...C, ref: $, style: O },
      N
    );
  }
);
F.displayName = "Inline";
const D = M(
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
    italic: u,
    clamp: g,
    truncate: h,
    noWrap: m,
    noShrink: y,
    style: x,
    children: X,
    ...C
  }, $) => {
    const L = {
      ...n && { fontSize: n },
      ...r && { fontWeight: r },
      ...l && { color: l },
      ...o && { fontFamily: o },
      ...a && { letterSpacing: a },
      ...d && { textAlign: d },
      ...s && { textTransform: s },
      ...c !== void 0 && { lineHeight: c },
      ...b !== void 0 && { opacity: b },
      ...u && { fontStyle: "italic" },
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
      ...x
    };
    return ne.createElement(
      t,
      { ...C, ref: $, style: L },
      X
    );
  }
);
D.displayName = "Text";
function Wt(t) {
  if (t !== void 0)
    return typeof t == "number" ? `repeat(${t}, 1fr)` : t.map((n) => `${n}fr`).join(" ");
}
const St = M(
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
    ...g
  }, h) => {
    const m = V(n ?? 1), y = V(r ?? "0"), x = {
      display: "grid",
      gridTemplateColumns: Wt(m),
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
      { ...g, ref: h, style: x },
      u
    );
  }
);
St.displayName = "Grid";
const he = M(
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
    alignSelf: g,
    style: h,
    children: m,
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
      ...g && { alignSelf: g },
      ...h
    };
    return /* @__PURE__ */ e("a", { ref: x, style: X, ...y, children: m });
  }
);
he.displayName = "Anchor";
const Le = M(
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
Le.displayName = "Image";
const oe = M(
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
    size: g,
    weight: h,
    letterSpacing: m,
    textTransform: y,
    fontFamily: x,
    gap: X,
    padding: C,
    paddingBlock: $,
    paddingInline: L,
    borderRadius: T,
    label: A,
    iconStart: O,
    iconEnd: N,
    className: k,
    style: B,
    children: W,
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
      ...g && { fontSize: g },
      ...h && { fontWeight: h },
      ...m && { letterSpacing: m },
      ...y && { textTransform: y },
      ...x && { fontFamily: x },
      ...X && { gap: X },
      ...C && { padding: C },
      ...$ && { paddingBlock: $ },
      ...L && { paddingInline: L },
      ...T && { borderRadius: T },
      ...P,
      ...B
    }, E = k ? `bbui-button ${k}` : "bbui-button", U = A ?? W;
    return /* @__PURE__ */ e("button", { ref: j, className: E, style: G, ...Y, children: O || N ? /* @__PURE__ */ f(Z, { children: [
      O,
      U,
      N
    ] }) : U });
  }
);
oe.displayName = "Button";
const De = M(
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
const Ft = M(
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
Ft.displayName = "Icon";
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
}, Ot = {
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
}, wt = {
  Tighter: "-0.05em",
  Tight: "-0.025em",
  Normal: "0",
  Wide: "0.05em",
  Wider: "0.075em",
  /** 0.1em — uppercase labels */
  Widest: "0.1em"
}, jr = {
  None: "none",
  Uppercase: "uppercase",
  Lowercase: "lowercase",
  Capitalize: "capitalize"
}, Pr = {
  Block: "block",
  InlineBlock: "inline-block",
  Inline: "inline",
  Flex: "flex",
  InlineFlex: "inline-flex",
  Grid: "grid",
  InlineGrid: "inline-grid",
  None: "none"
}, Vr = {
  Start: "flex-start",
  Center: "center",
  End: "flex-end",
  Stretch: "stretch",
  Baseline: "baseline"
}, Yr = {
  Start: "flex-start",
  Center: "center",
  End: "flex-end",
  SpaceBetween: "space-between",
  SpaceAround: "space-around",
  SpaceEvenly: "space-evenly"
}, _r = {
  Auto: "auto",
  Start: "flex-start",
  Center: "center",
  End: "flex-end",
  Stretch: "stretch",
  Baseline: "baseline"
}, Kr = {
  Row: "row",
  Column: "column",
  RowReverse: "row-reverse",
  ColumnReverse: "column-reverse"
}, Gr = {
  NoWrap: "nowrap",
  Wrap: "wrap",
  WrapReverse: "wrap-reverse"
}, Ur = {
  Static: "static",
  Relative: "relative",
  Absolute: "absolute",
  Fixed: "fixed",
  Sticky: "sticky"
}, Jr = {
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
}, qr = {
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
}, Zr = {
  Thin: "1px",
  Medium: "2px",
  Thick: "4px",
  XThick: "8px"
}, Qr = {
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
}, el = {
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
}, tl = {
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
function Ht(t) {
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
function jt(t) {
  return t >= 90 ? ee.Masters : t >= 80 ? ee.Analyzes : t >= 60 ? ee.Applies : t >= 40 ? ee.Understands : t >= 20 ? ee.Aware : ee.NotAssessed;
}
function nl(t) {
  return Ht(jt(t));
}
const rl = {
  correct: ae.Masters,
  partial: ae.Applies,
  incorrect: "var(--bbui-color-error)",
  skipped: "var(--bbui-color-subtlest)"
}, ll = {
  up: ae.Masters,
  down: "var(--bbui-color-error)",
  unchanged: "var(--bbui-color-subtlest)"
}, il = {
  Nova: "var(--bbui-persona-nova)",
  Maya: "var(--bbui-persona-maya)",
  Jordan: "var(--bbui-persona-jordan)",
  Custom: "var(--bbui-persona-custom)"
}, Pt = {
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
}, kt = M(
  ({ variant: t = "default", uppercase: n = !1, style: r, children: l, ...o }, a) => {
    const d = Pt[t], s = {
      display: "inline-flex",
      alignItems: "center",
      lineHeight: 1,
      paddingBlock: i.XXSmall,
      paddingInline: n ? i.MediumLarge : i.Medium,
      borderRadius: I.Full,
      fontWeight: n ? R.Black : R.Medium,
      fontSize: n ? w.Micro : w.XXSmall,
      letterSpacing: n ? wt.Wider : void 0,
      textTransform: n ? "uppercase" : void 0,
      ...d,
      ...r
    };
    return /* @__PURE__ */ e("span", { ref: a, style: s, ...o, children: l });
  }
);
kt.displayName = "Badge";
const Vt = {
  compact: { block: i.XXSmall, inline: i.Small },
  comfortable: { block: i.XSmall, inline: i.Medium }
}, Yt = {
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
}, _t = M(
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
    children: g,
    ...h
  }, m) => {
    const y = c !== void 0 || t !== void 0, x = t === !0, X = a ?? (l ? w.XXSmall : w.XSmall), C = l ? { block: i.XXSmall, inline: i.XSmall } : Vt[r];
    let $, L;
    if (l) {
      const N = Yt[l];
      $ = N.backgroundColor, L = N.color;
    } else
      $ = x ? v.Brand : n === "outlined" ? v.Transparent : v.Subtle, L = x ? p.OnBrand : p.Default;
    const T = !l && n === "outlined" && !x ? `1px solid ${z.Outline}` : "1px solid transparent", A = {
      display: "inline-flex",
      alignItems: "center",
      gap: i.XSmall,
      paddingBlock: C.block,
      paddingInline: C.inline,
      borderRadius: I.Full,
      backgroundColor: $,
      color: L,
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
    }, O = s && x ? /* @__PURE__ */ e(
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
        disabled: b,
        onClick: c,
        style: A,
        ...h,
        children: [
          d,
          O,
          g
        ]
      }
    ) : /* @__PURE__ */ f(
      "span",
      {
        ref: m,
        style: A,
        ...h,
        children: [
          d,
          g
        ]
      }
    );
  }
);
_t.displayName = "Chip";
const gt = {
  sm: "4px",
  md: "12px",
  lg: "16px",
  xl: "24px"
}, Kt = {
  none: "inset 0 0 0 0 rgba(255, 255, 255, 0)",
  xs: "inset 1px 1px 1px 0 rgba(255, 255, 255, 0.3), inset -1px -1px 1px 0 rgba(255, 255, 255, 0.3)",
  sm: "inset 2px 2px 2px 0 rgba(255, 255, 255, 0.35), inset -2px -2px 2px 0 rgba(255, 255, 255, 0.35)",
  md: "inset 3px 3px 3px 0 rgba(255, 255, 255, 0.45), inset -3px -3px 3px 0 rgba(255, 255, 255, 0.45)",
  lg: "inset 4px 4px 4px 0 rgba(255, 255, 255, 0.5), inset -4px -4px 4px 0 rgba(255, 255, 255, 0.5)",
  xl: "inset 6px 6px 6px 0 rgba(255, 255, 255, 0.55), inset -6px -6px 6px 0 rgba(255, 255, 255, 0.55)"
}, Gt = {
  none: "0 4px 4px rgba(0, 0, 0, 0.05), 0 0 12px rgba(0, 0, 0, 0.05)",
  xs: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 16px rgba(255, 255, 255, 0.05)",
  sm: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 24px rgba(255, 255, 255, 0.1)",
  md: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 32px rgba(255, 255, 255, 0.15)",
  lg: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 40px rgba(255, 255, 255, 0.2)",
  xl: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 48px rgba(255, 255, 255, 0.25)"
};
let Ut = 0;
const Jt = M(
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
  }, g) => {
    const h = ve(() => `bbui-liquid-glass-${++Ut}`, []), m = {
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
    return /* @__PURE__ */ f("div", { ref: g, style: m, ...u, children: [
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
            backdropFilter: `blur(${gt[r]})`,
            WebkitBackdropFilter: `blur(${gt[r]})`,
            filter: `url(#${h})`
          }
        }
      ),
      /* @__PURE__ */ e("div", { style: { ...y, zIndex: 1, boxShadow: Gt[l] } }),
      /* @__PURE__ */ e("div", { style: { ...y, zIndex: 2, boxShadow: Kt[o] } }),
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
Jt.displayName = "LiquidGlass";
const qt = "40px", Zt = "24px", Me = "20px", mt = i.XXSmall, Qt = M(
  ({ checked: t, defaultChecked: n = !1, onChange: r, label: l, style: o, ...a }, d) => {
    const [s, c] = H(n), b = t !== void 0, u = b ? t : s, g = J(() => {
      const y = !u;
      b || c(y), r == null || r(y);
    }, [u, b, r]), h = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      width: qt,
      height: Zt,
      borderRadius: I.Full,
      backgroundColor: u ? v.Brand : v.Neutral,
      border: "none",
      cursor: "pointer",
      padding: 0,
      transition: "background-color 150ms ease",
      ...o
    }, m = {
      position: "absolute",
      width: Me,
      height: Me,
      borderRadius: I.Full,
      backgroundColor: v.Default,
      transition: "left 150ms ease",
      left: u ? `calc(100% - ${Me} - ${mt})` : mt,
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
        style: h,
        ...a,
        children: /* @__PURE__ */ e("span", { style: m })
      }
    );
  }
);
Qt.displayName = "Toggle";
const en = M(
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
en.displayName = "LinkButton";
const Q = M(
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
const tn = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64
}, nn = {
  xsmall: "10px",
  small: "12px",
  medium: "14px",
  large: "16px",
  xlarge: "24px"
}, rn = {
  xsmall: 6,
  small: 8,
  medium: 10,
  large: 12,
  xlarge: 16
}, ln = {
  online: "#22c55e",
  offline: "#bccbb9",
  busy: "#ba1a1a",
  focus: "#3b82f6"
};
function on(t) {
  var r;
  const n = t.trim().split(/\s+/);
  return n.length >= 2 ? (n[0][0] + n[n.length - 1][0]).toUpperCase() : (((r = n[0]) == null ? void 0 : r[0]) ?? "").toUpperCase();
}
const an = M(
  ({
    src: t,
    name: n,
    size: r = "medium",
    appearance: l = "circle",
    status: o,
    fallbackBackground: a = v.NeutralBold,
    fallbackColor: d = p.Subtle
  }, s) => {
    const [c, b] = H(!1), u = tn[r], g = t && !c, h = n ? on(n) : "", m = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: u,
      height: u,
      borderRadius: l === "circle" ? I.Full : I.XLarge,
      overflow: "hidden",
      flexShrink: 0,
      ...g ? {} : { backgroundColor: a }
    }, y = rn[r], x = o ? {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: y,
      height: y,
      borderRadius: I.Full,
      backgroundColor: ln[o],
      border: "2px solid #ffffff",
      boxSizing: "border-box"
    } : void 0;
    return /* @__PURE__ */ f("span", { ref: s, style: m, role: "img", "aria-label": n ?? "Avatar", children: [
      g ? /* @__PURE__ */ e(
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
            fontSize: nn[r],
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
an.displayName = "Avatar";
const sn = {
  xsmall: 16,
  small: 24,
  medium: 32,
  large: 48,
  xlarge: 64
}, dn = {
  xsmall: 2,
  small: 2,
  medium: 3,
  large: 3,
  xlarge: 4
}, Xt = M(
  ({ size: t = "medium", label: n = "Loading", color: r = p.Brand }, l) => {
    const o = ke().replace(/:/g, ""), a = sn[t], d = dn[t], s = (a - d) / 2, c = 2 * Math.PI * s;
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
Xt.displayName = "Spinner";
const cn = M(
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
cn.displayName = "TextArea";
function un(t) {
  return "options" in t;
}
const Ct = M(
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
      n && /* @__PURE__ */ e("option", { value: "", disabled: !0, hidden: !0, children: n }),
      t.map(
        (y) => un(y) ? /* @__PURE__ */ e("optgroup", { label: y.label, children: y.options.map((x) => /* @__PURE__ */ e("option", { value: x.value, disabled: x.disabled, children: x.label }, x.value)) }, y.label) : /* @__PURE__ */ e("option", { value: y.value, disabled: y.disabled, children: y.label }, y.value)
      )
    ] });
  }
);
Ct.displayName = "Select";
const pn = {
  small: { box: "16px", font: w.XXSmall, gap: i.XSmall },
  medium: { box: "20px", font: w.XSmall, gap: i.Medium },
  large: { box: "24px", font: w.Small, gap: i.Medium }
}, bn = ({ size: t }) => /* @__PURE__ */ e(
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
), hn = M(
  ({ label: t, size: n = "medium", checked: r, disabled: l, style: o, id: a, ...d }, s) => {
    const c = ke(), b = a ?? c, u = pn[n], g = !!r, h = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: u.box,
      height: u.box,
      borderRadius: I.Small,
      flexShrink: 0,
      border: g ? "none" : `2px solid ${z.Outline}`,
      backgroundColor: g ? l ? p.Disabled : v.Brand : v.Transparent,
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
          /* @__PURE__ */ e("span", { style: h, "aria-hidden": "true", children: g && /* @__PURE__ */ e(bn, { size: `calc(${u.box} - 4px)` }) }),
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
hn.displayName = "Checkbox";
const gn = M(
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
gn.displayName = "Divider";
const mn = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z", clipRule: "evenodd" }) }), fn = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { d: "M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" }) }), yn = M(
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
              children: /* @__PURE__ */ e(mn, {})
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
              children: /* @__PURE__ */ e(fn, {})
            }
          )
        ]
      }
    );
  }
);
yn.displayName = "Stepper";
const xn = () => /* @__PURE__ */ e(
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
), vn = () => /* @__PURE__ */ e(
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
), Sn = () => /* @__PURE__ */ e(
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
), wn = M(
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
    logoGap: g = i.Size3_5,
    mobileMenuBackground: h = v.Default,
    mobileMenuBorderColor: m = z.Default,
    mobileMenuBorderRadius: y = I.Large,
    mobileBreakpoint: x = 768
  }, X) => {
    const [C, $] = H(!1), [L, T] = H(!1);
    K(() => {
      const B = () => T(window.innerWidth < x);
      return B(), window.addEventListener("resize", B), () => window.removeEventListener("resize", B);
    }, [x]);
    const A = J((B) => {
      B.target.closest("[data-navbar-menu]") || $(!1);
    }, []);
    K(() => (document.addEventListener("click", A), () => document.removeEventListener("click", A)), [A]);
    const O = ne.isValidElement(t) ? t : /* @__PURE__ */ e(
      Le,
      {
        src: t.src,
        alt: t.alt ?? "Logo",
        style: {
          width: t.width ?? 120,
          height: t.height ?? "auto"
        }
      }
    ), N = /* @__PURE__ */ e(Z, { children: n.map((B, W) => /* @__PURE__ */ e(
      he,
      {
        href: B.path,
        color: l,
        display: "block",
        style: { textDecoration: "none" },
        children: B.title
      },
      W
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
        children: /* @__PURE__ */ f(F, { space: i.XSmall, alignBlock: "center", children: [
          /* @__PURE__ */ e(D, { as: "span", color: a, weight: d, children: r.label }),
          r.icon ?? /* @__PURE__ */ e(Sn, {})
        ] })
      }
    ) : null;
    return L ? /* @__PURE__ */ f(S, { as: "header", ref: X, "data-navbar-menu": !0, children: [
      /* @__PURE__ */ e(
        S,
        {
          as: "nav",
          paddingInline: i.Large,
          paddingBlock: b,
          children: /* @__PURE__ */ f(F, { alignBlock: "center", spread: "space-between", children: [
            /* @__PURE__ */ e(S, { children: O }),
            /* @__PURE__ */ e(
              oe,
              {
                onClick: () => $(!C),
                style: {
                  background: "none",
                  padding: 0,
                  color: p.Subtle
                },
                children: C ? /* @__PURE__ */ e(vn, {}) : /* @__PURE__ */ e(xn, {})
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
          borderColor: m,
          borderSide: "all",
          padding: i.Large,
          style: { margin: i.Medium },
          children: /* @__PURE__ */ f("nav", { children: [
            /* @__PURE__ */ e("ul", { style: { listStyle: "none", padding: 0, margin: 0 }, children: n.map((B, W) => /* @__PURE__ */ e("li", { style: { paddingBlock: i.MediumLarge }, children: /* @__PURE__ */ e(
              he,
              {
                href: B.path,
                color: l,
                display: "block",
                style: { textDecoration: "none" },
                children: B.title
              }
            ) }, W)) }),
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
        children: /* @__PURE__ */ f(F, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ e(S, { children: O }),
          /* @__PURE__ */ f(
            F,
            {
              space: u,
              alignBlock: "center",
              grow: "fill",
              style: { marginInlineStart: g },
              children: [
                /* @__PURE__ */ e(
                  F,
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
wn.displayName = "Navbar";
const ft = () => /* @__PURE__ */ e(
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
), kn = M(
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
    subtitleColor: g = p.Subtlest,
    primaryCtaBackground: h = v.Dark,
    primaryCtaColor: m = p.Inverse,
    primaryCtaBorderRadius: y = I.Full,
    primaryCtaWeight: x = 500,
    secondaryCtaColor: X = p.Subtle,
    secondaryCtaWeight: C = 500,
    ctaGap: $ = i.MediumLarge,
    paddingBlock: L = i.Size7,
    paddingInline: T = i.XXXLarge,
    contentGap: A = i.XHuge,
    textGap: O = i.XLarge,
    textMaxWidth: N = "576px",
    gradient: k,
    breakpoint: B = 768
  }, W) => {
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
        children: /* @__PURE__ */ f(F, { space: i.MediumLarge, alignBlock: "center", children: [
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
          /* @__PURE__ */ f(F, { space: i.XXSmall, alignBlock: "center", children: [
            /* @__PURE__ */ e(D, { as: "span", size: w.XSmall, children: r.text }),
            r.icon ?? /* @__PURE__ */ e(ft, {})
          ] })
        ] })
      }
    ) : null, le = l.length > 0 ? /* @__PURE__ */ e(F, { space: $, alignBlock: "center", shouldWrap: !0, children: l.map((q, be) => {
      const ce = (q.variant ?? (be === 0 ? "primary" : "secondary")) === "primary", ye = ce ? x : C;
      return /* @__PURE__ */ e(
        he,
        {
          href: q.path,
          backgroundColor: ce ? h : void 0,
          color: ce ? m : X,
          paddingBlock: i.Medium,
          paddingInline: i.Large,
          borderRadius: ce ? y : void 0,
          weight: ye,
          display: "inline-block",
          style: { textDecoration: "none" },
          children: /* @__PURE__ */ f(F, { space: i.XSmall, alignBlock: "center", children: [
            /* @__PURE__ */ e(
              D,
              {
                as: "span",
                color: ce ? m : X,
                weight: ye,
                children: q.label
              }
            ),
            q.icon ?? /* @__PURE__ */ e(ft, {})
          ] })
        },
        be
      );
    }) }) : null, de = /* @__PURE__ */ f(
      _,
      {
        space: O,
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
              color: g,
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
      Le,
      {
        src: o.src,
        alt: o.alt ?? "",
        style: { maxWidth: o.maxWidth ?? "576px" }
      }
    ) }) : null;
    return /* @__PURE__ */ f(S, { as: "section", ref: W, style: { position: "relative" }, children: [
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
          paddingBlock: L,
          children: Y ? /* @__PURE__ */ f(F, { space: A, alignBlock: "center", children: [
            de,
            ie
          ] }) : /* @__PURE__ */ e(_, { space: A, children: de })
        }
      )
    ] });
  }
);
kn.displayName = "HeroSection";
const Xn = M(
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
Xn.displayName = "Card";
const Cn = M(
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
    inputBorderRadius: g = I.Medium,
    inputBorderSide: h = "all",
    inputPadding: m = i.Medium,
    startAdornment: y,
    endAdornment: x,
    name: X,
    type: C,
    placeholder: $,
    value: L,
    defaultValue: T,
    disabled: A,
    readOnly: O,
    required: N,
    autoFocus: k,
    autoComplete: B,
    onChange: W,
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
        placeholder: $,
        value: L,
        defaultValue: T,
        disabled: A,
        readOnly: O,
        required: N,
        autoFocus: k,
        autoComplete: B,
        onChange: W,
        onBlur: Y,
        onFocus: j,
        backgroundColor: ie ? "transparent" : b,
        borderColor: ie ? void 0 : pe,
        borderRadius: ie ? void 0 : g,
        padding: m,
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
      ...de ? { borderBottom: `2px solid ${pe}` } : { border: `1px solid ${pe}`, borderRadius: g }
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
Cn.displayName = "TextField";
const Ln = {
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
}, Mn = () => /* @__PURE__ */ e(
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
), In = M(
  ({ variant: t = "info", icon: n, dismissible: r, onDismiss: l, children: o }, a) => {
    const d = Ln[t];
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
        children: /* @__PURE__ */ f(F, { space: i.Medium, alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ f(F, { space: i.Medium, alignBlock: "center", grow: "fill", children: [
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
              children: /* @__PURE__ */ e(Mn, {})
            }
          )
        ] })
      }
    );
  }
);
In.displayName = "Banner";
const Lt = M(
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
          children: /* @__PURE__ */ f(F, { space: i.Medium, alignBlock: "center", children: [
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
Lt.displayName = "Menu";
const Bn = M(
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
    var $;
    const [g, h] = H(
      r ?? (($ = t[0]) == null ? void 0 : $.id)
    ), m = n !== void 0, y = m ? n : g, x = (L) => {
      m || h(L), l == null || l(L);
    }, X = t.find((L) => L.id === y);
    return /* @__PURE__ */ f(S, { ref: u, children: [
      o === "pill" ? /* @__PURE__ */ e(
        F,
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
          children: t.map((L) => {
            const T = L.id === y;
            return /* @__PURE__ */ e(
              oe,
              {
                role: "tab",
                "aria-selected": T,
                "aria-controls": `tabpanel-${L.id}`,
                id: `tab-${L.id}`,
                disabled: L.disabled,
                onClick: () => x(L.id),
                paddingBlock: i.Medium,
                paddingInline: i.XXLarge,
                borderRadius: I.XLarge,
                color: T ? p.Default : L.disabled ? p.Disabled : d,
                backgroundColor: T ? c : v.Transparent,
                style: {
                  fontWeight: T ? R.Bold : R.Medium,
                  fontSize: w.XSmall,
                  boxShadow: T ? ue.Raised : "none",
                  cursor: L.disabled ? "default" : "pointer"
                },
                children: L.label
              },
              L.id
            );
          })
        }
      ) : /* @__PURE__ */ e(
        F,
        {
          as: "div",
          role: "tablist",
          space: i.None,
          style: {
            borderBottom: `1px solid ${z.Default}`
          },
          children: t.map((L) => {
            const T = L.id === y;
            return /* @__PURE__ */ e(
              oe,
              {
                role: "tab",
                "aria-selected": T,
                "aria-controls": `tabpanel-${L.id}`,
                id: `tab-${L.id}`,
                disabled: L.disabled,
                onClick: () => x(L.id),
                paddingBlock: i.Medium,
                paddingInline: i.Large,
                borderRadius: I.None,
                color: T ? a : L.disabled ? p.Disabled : d,
                style: {
                  background: "none",
                  fontWeight: T ? R.Semibold : R.Regular,
                  fontSize: w.XSmall,
                  borderBottom: T ? `2px solid ${a}` : "2px solid transparent",
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
Bn.displayName = "Tabs";
const Dn = M(
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
  }, g) => /* @__PURE__ */ e(
    S,
    {
      ref: g,
      as: "header",
      paddingBlock: u,
      style: {
        borderBottom: `1px solid ${b}`
      },
      children: /* @__PURE__ */ f(_, { space: i.Medium, children: [
        r && r.length > 0 && /* @__PURE__ */ e(F, { space: i.XSmall, alignBlock: "center", children: r.map((h, m) => /* @__PURE__ */ f(ne.Fragment, { children: [
          m > 0 && /* @__PURE__ */ e(D, { as: "span", color: p.Disabled, size: w.XSmall, children: "/" }),
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
        ] }, m)) }),
        /* @__PURE__ */ f(F, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ f(_, { space: i.XXSmall, children: [
            /* @__PURE__ */ e(D, { as: "h1", size: o, weight: a, color: d, children: t }),
            n && /* @__PURE__ */ e(D, { as: "p", size: w.XSmall, color: s, children: n })
          ] }),
          l && /* @__PURE__ */ e(F, { space: i.Medium, alignBlock: "center", children: l })
        ] })
      ] })
    }
  )
);
Dn.displayName = "Header";
const En = {
  XSmall: "320px",
  Small: "416px",
  Medium: "512px",
  Large: "704px",
  XLarge: "960px",
  Full: "min(96vw, 1440px)"
}, zn = () => /* @__PURE__ */ e(
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
), Tn = M(
  ({ open: t, onClose: n, title: r, children: l, footer: o, size: a = En.Medium }, d) => {
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
                    children: /* @__PURE__ */ f(F, { alignBlock: "center", spread: "space-between", children: [
                      /* @__PURE__ */ e(D, { as: "h2", size: w.Large, weight: R.Semibold, color: p.Default, children: r }),
                      /* @__PURE__ */ e(Q, { label: "Close", onClick: n, color: p.Subtle, children: /* @__PURE__ */ e(zn, {}) })
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
Tn.displayName = "Modal";
const Ie = 200, Rn = {
  start: "flex-start",
  center: "center",
  end: "flex-end"
};
function An({
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
  const [b, u] = H(t), [g, h] = H(!1), m = V(l), y = V(d);
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
  const x = typeof m == "number" ? `${m}px` : m;
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
          opacity: g ? 1 : 0,
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
                justifyContent: Rn[y],
                width: "100%",
                transform: g ? "translateY(0)" : "translateY(-12px)",
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
An.displayName = "Drawer";
const Nn = M(
  ({ trigger: t, sections: n, activeId: r, onSelect: l }, o) => {
    const [a, d] = H(!1), s = te(null), c = () => d((h) => !h), b = (h) => {
      l == null || l(h), d(!1);
    }, u = J((h) => {
      h.key === "Escape" && d(!1);
    }, []), g = J((h) => {
      s.current && !s.current.contains(h.target) && d(!1);
    }, []);
    return K(() => {
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
          /* @__PURE__ */ e(
            F,
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
                Lt,
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
Nn.displayName = "DropdownMenu";
const $n = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), Wn = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), Fn = M(
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
    borderColor: g = z.Default
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
          _,
          {
            space: i.Small,
            grow: "fill",
            style: { padding: i.Medium, overflow: "auto" },
            children: t.map((m, y) => /* @__PURE__ */ f(_, { space: i.XXSmall, children: [
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
              m.items.map((x) => {
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
                        x.badge && /* @__PURE__ */ e(kt, { variant: x.badgeVariant ?? "default", children: x.badge })
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
            style: { borderTop: `1px solid ${g}` },
            children: /* @__PURE__ */ e(
              Q,
              {
                label: a ? "Expand sidebar" : "Collapse sidebar",
                onClick: d,
                color: p.Subtle,
                padding: i.XSmall,
                children: a ? /* @__PURE__ */ e(Wn, {}) : /* @__PURE__ */ e($n, {})
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
Fn.displayName = "Sidebar";
const On = () => /* @__PURE__ */ e(
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
), Hn = M(
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
              children: /* @__PURE__ */ f(F, { alignBlock: "center", spread: "space-between", children: [
                /* @__PURE__ */ e(D, { as: "h2", size: w.Large, weight: R.Semibold, color: p.Default, children: r }),
                /* @__PURE__ */ e(Q, { label: "Close panel", onClick: n, color: p.Subtle, children: /* @__PURE__ */ e(On, {}) })
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
Hn.displayName = "Panel";
const jn = M(
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
jn.displayName = "Aside";
const Pn = M(
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
Pn.displayName = "Layout";
const Vn = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
function yt(t, n) {
  return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate();
}
function Yn(t, n) {
  return new Date(t, n + 1, 0).getDate();
}
function _n(t, n) {
  return new Date(t, n, 1).getDay();
}
const Kn = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), Gn = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), Un = [
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
], Jn = M(
  ({
    value: t,
    defaultValue: n,
    onChange: r,
    min: l,
    max: o,
    selectedColor: a = p.Inverse,
    selectedBackground: d = v.Brand
  }, s) => {
    const c = /* @__PURE__ */ new Date(), [b, u] = H(n), g = t !== void 0, h = g ? t : b, [m, y] = H(
      (h ?? c).getFullYear()
    ), [x, X] = H(
      (h ?? c).getMonth()
    ), C = ve(() => Yn(m, x), [m, x]), $ = ve(() => _n(m, x), [m, x]), L = () => {
      x === 0 ? (X(11), y((k) => k - 1)) : X((k) => k - 1);
    }, T = () => {
      x === 11 ? (X(0), y((k) => k + 1)) : X((k) => k + 1);
    }, A = (k) => {
      const B = new Date(m, x, k);
      g || u(B), r == null || r(B);
    }, O = (k) => {
      const B = new Date(m, x, k);
      return !!(l && B < new Date(l.getFullYear(), l.getMonth(), l.getDate()) || o && B > new Date(o.getFullYear(), o.getMonth(), o.getDate()));
    }, N = [];
    for (let k = 0; k < $; k++)
      N.push(/* @__PURE__ */ e(S, {}, `empty-${k}`));
    for (let k = 1; k <= C; k++) {
      const B = new Date(m, x, k), W = h ? yt(B, h) : !1, Y = yt(B, c), j = O(k);
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
              fontWeight: W ? R.Semibold : R.Regular,
              backgroundColor: W ? d : "transparent",
              color: W ? a : j ? p.Disabled : p.Default,
              border: Y && !W ? `1px solid ${z.Default}` : "none",
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
            F,
            {
              alignBlock: "center",
              spread: "space-between",
              marginBlockEnd: i.Medium,
              children: [
                /* @__PURE__ */ e(Q, { label: "Previous month", onClick: L, color: p.Subtle, padding: i.XSmall, children: /* @__PURE__ */ e(Kn, {}) }),
                /* @__PURE__ */ f(D, { as: "span", size: w.XSmall, weight: R.Semibold, color: p.Default, children: [
                  Un[x],
                  " ",
                  m
                ] }),
                /* @__PURE__ */ e(Q, { label: "Next month", onClick: T, color: p.Subtle, padding: i.XSmall, children: /* @__PURE__ */ e(Gn, {}) })
              ]
            }
          ),
          /* @__PURE__ */ f(St, { columns: 7, gap: i.XXSmall, children: [
            Vn.map((k) => /* @__PURE__ */ e(
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
Jn.displayName = "Calendar";
const qn = M(
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
              fontFamily: Ot.Display,
              size: w.XLarge,
              weight: R.Bold,
              color: p.Default,
              children: t
            }
          ),
          n && /* @__PURE__ */ e(D, { as: "p", size: w.XSmall, color: p.Subtle, lineHeight: 1.6, children: n })
        ] }),
        (l || o) && /* @__PURE__ */ f(F, { space: i.Medium, alignBlock: "center", children: [
          l,
          o
        ] })
      ]
    }
  )
);
qn.displayName = "EmptyState";
const Zn = ({ order: t }) => /* @__PURE__ */ e(
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
), Qn = M(
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
    onSetPage: g,
    isLoading: h = !1,
    isFixedSize: m = !1
  }, y) => {
    const [x, X] = H(a), [C, $] = H(c), [L, T] = H(b), A = o !== void 0, O = A ? o : x, N = d !== void 0, k = N ? d : C, B = N ? s ?? "ASC" : L, W = l ? Math.max(1, Math.ceil(r.length / l)) : 1, Y = ve(() => {
      if (!l) return r;
      const E = (O - 1) * l;
      return r.slice(E, E + l);
    }, [r, l, O]), j = (E) => {
      const U = k === E && B === "ASC" ? "DESC" : "ASC";
      N || ($(E), T(U)), u == null || u(E, U);
    }, P = (E) => {
      A || X(E), g == null || g(E);
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
          children: /* @__PURE__ */ e(Xt, { size: "large" })
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
                    Zn,
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
      l && W > 1 && /* @__PURE__ */ f(
        F,
        {
          space: i.Medium,
          alignBlock: "center",
          alignInline: "center",
          style: { paddingBlock: i.Large },
          children: [
            /* @__PURE__ */ e(
              oe,
              {
                disabled: O <= 1,
                onClick: () => P(O - 1),
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
              W
            ] }),
            /* @__PURE__ */ e(
              oe,
              {
                disabled: O >= W,
                onClick: () => P(O + 1),
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
Qn.displayName = "Table";
const er = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z", clipRule: "evenodd" }) }), tr = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" }) }), nr = M(
  ({
    defaultValue: t,
    label: n,
    editButtonLabel: r,
    editView: l,
    readView: o,
    onConfirm: a,
    onCancel: d
  }, s) => {
    const [c, b] = H(!1), [u, g] = H(t);
    te(null), K(() => {
      g(t);
    }, [t]);
    const h = J(() => {
      b(!1), a(u);
    }, [u, a]), m = J(() => {
      g(t), b(!1), d == null || d();
    }, [t, d]), y = J(
      (C) => {
        C.key === "Enter" && h(), C.key === "Escape" && m();
      },
      [h, m]
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
      c ? /* @__PURE__ */ f(F, { space: i.XSmall, alignBlock: "start", children: [
        /* @__PURE__ */ e(S, { style: { flex: "1 1 auto" }, children: (l ?? X)({
          value: u,
          onChange: (C) => g(C.target.value),
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
            children: /* @__PURE__ */ e(er, {})
          }
        ),
        /* @__PURE__ */ e(
          Q,
          {
            label: "Cancel",
            onClick: m,
            color: p.Error,
            padding: i.XSmall,
            children: /* @__PURE__ */ e(tr, {})
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
nr.displayName = "InlineEdit";
const rr = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "currentColor", style: { width: "14px", height: "14px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z", clipRule: "evenodd" }) }), lr = M(
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
            F,
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
              children: /* @__PURE__ */ e(_, { space: i.XSmall, children: n.map((u, g) => /* @__PURE__ */ f(_, { space: i.XXSmall, children: [
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
                  const m = !!r[h.id];
                  return /* @__PURE__ */ f(
                    oe,
                    {
                      onClick: () => l(h.id, !m),
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
                              border: m ? "none" : `2px solid ${z.Outline}`,
                              backgroundColor: m ? v.Brand : v.Transparent,
                              color: p.Inverse,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0
                            },
                            children: m && /* @__PURE__ */ e(rr, {})
                          }
                        ),
                        /* @__PURE__ */ e(D, { as: "span", size: w.XSmall, style: { color: "inherit" }, children: h.label })
                      ]
                    },
                    h.id
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
lr.displayName = "DropdownCheckboxMenu";
const ir = M(
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
    inputBorderRadius: g = I.XXLarge,
    inputBorderSide: h = "all",
    inputPadding: m = i.MediumLarge,
    name: y,
    value: x,
    defaultValue: X,
    placeholder: C,
    options: $,
    disabled: L,
    required: T,
    onChange: A,
    onBlur: O
  }, N) => {
    const k = ke(), B = l ?? k, W = `${B}-helper`, Y = `${B}-error`, j = !!r, P = j ? z.Error : u, G = h === "bottom", E = /* @__PURE__ */ e(
      Ct,
      {
        ref: N,
        id: B,
        name: y,
        value: x,
        defaultValue: X,
        placeholder: C,
        options: $,
        disabled: L,
        required: T,
        onChange: A,
        onBlur: O,
        backgroundColor: G ? "transparent" : b,
        borderColor: G ? void 0 : P,
        borderRadius: G ? void 0 : g,
        padding: m,
        fontSize: w.XSmall,
        color: p.Default,
        style: { width: "100%" },
        "aria-describedby": j ? Y : n ? W : void 0,
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
      !j && n && /* @__PURE__ */ e(D, { as: "span", size: w.XXSmall, color: p.Subtle, id: W, children: n })
    ] });
  }
);
ir.displayName = "SelectField";
const or = {
  info: { bg: v.Default, text: p.Info, accent: "#3b82f6" },
  success: { bg: v.Default, text: p.Success, accent: "#22c55e" },
  warning: { bg: v.Default, text: p.Warning, accent: "#f59e0b" },
  error: { bg: v.Default, text: p.Error, accent: "#ba1a1a" }
}, ar = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "14px", height: "14px" },
    children: /* @__PURE__ */ e("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  }
), sr = M(
  ({ open: t, onClose: n, duration: r = 5e3, variant: l = "info", icon: o, children: a }, d) => {
    if (K(() => {
      if (!t || r === 0) return;
      const c = setTimeout(n, r);
      return () => clearTimeout(c);
    }, [t, r, n]), !t) return null;
    const s = or[l];
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
          children: /* @__PURE__ */ f(F, { space: i.MediumLarge, alignBlock: "center", spread: "space-between", children: [
            /* @__PURE__ */ f(F, { space: i.MediumLarge, alignBlock: "center", grow: "fill", children: [
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
                children: /* @__PURE__ */ e(ar, {})
              }
            )
          ] })
        }
      ),
      document.body
    );
  }
);
sr.displayName = "Toast";
const dr = M(
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
dr.displayName = "MobileNav";
const cr = () => /* @__PURE__ */ e(
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
), ur = M(
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
                letterSpacing: wt.Widest,
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
            const b = c === t.length - 1, u = s.status === "visited", g = s.status === "current", h = s.status === "disabled", m = u ? xe.Brand : g ? "transparent" : v.NeutralBold, y = /* @__PURE__ */ e(
              "div",
              {
                style: {
                  width: a,
                  height: a,
                  borderRadius: I.Full,
                  background: u ? xe.Brand : m,
                  backgroundColor: u ? void 0 : m,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: u ? p.OnBrand : g ? p.Brand : h ? p.Disabled : p.Subtle,
                  fontSize: w.XSmall,
                  fontWeight: R.Bold,
                  border: g ? `2px solid ${p.Brand}` : "none",
                  cursor: s.onClick || s.href ? "pointer" : "default",
                  transition: "all 300ms ease"
                },
                onClick: s.onClick,
                children: u ? /* @__PURE__ */ e(cr, {}) : c + 1
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
            const b = c === t.length - 1, u = s.status === "visited", g = s.status === "current", h = s.status === "disabled", m = u ? p.Brand : g ? p.Default : h ? p.Disabled : p.Subtle;
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
                  weight: g ? R.Bold : R.Medium,
                  color: m,
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
ur.displayName = "ProgressTracker";
const pr = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";
function br(t) {
  const n = /* @__PURE__ */ f(F, { space: i.XSmall, alignBlock: "center", children: [
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
function hr(t) {
  return /* @__PURE__ */ e(
    Le,
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
const gr = M(
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
      backgroundImage: `url("${pr}")`,
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
      l && br(l),
      u
    ] });
    return /* @__PURE__ */ f(S, { ref: g, padding: a, style: h, children: [
      /* @__PURE__ */ e("div", { style: m, "aria-hidden": "true" }),
      o ? /* @__PURE__ */ f(F, { space: i.XXLarge, alignBlock: "center", children: [
        y,
        /* @__PURE__ */ e("div", { style: { flexShrink: 0 }, children: hr(o) })
      ] }) : y
    ] });
  }
);
gr.displayName = "GlassCard";
const mr = `
@keyframes bbui-pulse-down {
  0%, 100% { transform: translateY(0); opacity: 0.4 }
  50%      { transform: translateY(3px); opacity: 0.9 }
}
`, xt = "36px", fr = "18px", yr = M(
  ({ items: t, onComplete: n, finishedLabel: r, maxHeight: l = "256px" }, o) => {
    const [a, d] = H(() => /* @__PURE__ */ new Set()), s = te(!1), c = te(null), b = te([]), u = a.size >= t.length;
    return K(() => {
      u && !s.current && (s.current = !0, n == null || n());
    }, [u, n]), K(() => {
      const g = c.current;
      if (!g) return;
      const h = new IntersectionObserver(
        (m) => {
          d((y) => {
            let x = y;
            for (const X of m) {
              if (!X.isIntersecting) continue;
              const C = Number(X.target.dataset.idx);
              y.has(C) || (x === y && (x = new Set(y)), x.add(C));
            }
            return x;
          });
        },
        { root: g, threshold: 0.6 }
      );
      return b.current.forEach((m) => m && h.observe(m)), () => h.disconnect();
    }, [t.length]), /* @__PURE__ */ f("div", { ref: o, style: { width: "100%", position: "relative" }, children: [
      /* @__PURE__ */ e("style", { children: mr }),
      /* @__PURE__ */ e("div", { ref: c, style: Sr(l, u), children: /* @__PURE__ */ e(_, { space: i.MediumLarge, children: t.map((g, h) => {
        const m = a.has(h);
        return /* @__PURE__ */ f(
          "div",
          {
            ref: (y) => b.current[h] = y,
            "data-idx": h,
            style: wr(m),
            children: [
              /* @__PURE__ */ e(xr, { item: g }),
              h < t.length - 1 && /* @__PURE__ */ e("span", { "aria-hidden": "true", style: Mr(m) })
            ]
          },
          g.id ?? h
        );
      }) }) }),
      /* @__PURE__ */ e("div", { style: Ir, children: u ? r : /* @__PURE__ */ e(vr, {}) })
    ] });
  }
);
yr.displayName = "RevealSteps";
function xr({ item: t }) {
  return /* @__PURE__ */ f("div", { style: kr, children: [
    /* @__PURE__ */ e("span", { "aria-hidden": "true", style: Xr, children: t.icon }),
    /* @__PURE__ */ f("span", { style: Cr, children: [
      /* @__PURE__ */ e(D, { as: "span", size: w.Small, weight: R.Medium, children: t.label }),
      t.description && /* @__PURE__ */ e(D, { as: "span", size: w.XSmall, color: p.Subtle, children: t.description })
    ] }),
    t.meta && /* @__PURE__ */ e("span", { style: Lr, children: t.meta })
  ] });
}
function vr() {
  return /* @__PURE__ */ e("div", { style: Br, "aria-hidden": "true", children: /* @__PURE__ */ e(
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
const vt = "linear-gradient(to bottom, black 0%, black calc(100% - 32px), transparent 100%)", Sr = (t, n) => ({
  maxHeight: t,
  overflowY: "auto",
  scrollBehavior: "smooth",
  maskImage: n ? "none" : vt,
  WebkitMaskImage: n ? "none" : vt,
  paddingRight: i.XSmall
}), wr = (t) => ({
  position: "relative",
  opacity: t ? 1 : 0.15,
  transform: t ? "translateY(0)" : "translateY(8px)",
  filter: t ? "blur(0)" : "blur(2px)",
  transition: "opacity 420ms ease-out, transform 420ms cubic-bezier(0.22, 1, 0.36, 1), filter 420ms ease-out"
}), kr = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: i.MediumLarge,
  padding: i.MediumLarge,
  background: v.Subtle,
  borderRadius: I.Large,
  border: `1px solid ${z.Default}`,
  color: p.Default
}, Xr = {
  width: xt,
  height: xt,
  flexShrink: 0,
  borderRadius: I.Medium,
  background: v.Subtle,
  color: p.Default,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
}, Cr = {
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: i.XXSmall
}, Lr = {
  flexShrink: 0,
  display: "inline-flex",
  alignItems: "center"
}, Mr = (t) => ({
  position: "absolute",
  left: `calc(${i.MediumLarge} + ${fr} - 1px)`,
  top: "100%",
  height: i.MediumLarge,
  width: "2px",
  background: z.Default,
  opacity: t ? 1 : 0,
  transition: "opacity 300ms ease-out",
  pointerEvents: "none"
}), Ir = {
  marginTop: i.Large,
  display: "flex",
  justifyContent: "center",
  minHeight: "20px"
}, Br = {
  color: p.Subtle,
  animation: "bbui-pulse-down 1500ms ease-in-out infinite",
  display: "inline-flex"
}, Dr = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree"
], Er = M(
  ({ value: t, onChange: n, labels: r = Dr }, l) => {
    const [o, a] = H(null);
    return /* @__PURE__ */ e("div", { ref: l, role: "radiogroup", style: zr, children: r.map((d, s) => {
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
          style: Tr(b, !b && o === c),
          children: d
        },
        c
      );
    }) });
  }
);
Er.displayName = "LikertScale";
const zr = {
  display: "flex",
  flexDirection: "column",
  gap: i.Medium,
  width: "100%"
}, Tr = (t, n) => {
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
function ol(t) {
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
function Rr(t) {
  typeof document > "u" || (t === "system" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", t));
}
function al() {
  const [t, n] = H(() => typeof localStorage > "u" ? "system" : localStorage.getItem("bbui-theme") ?? "system"), [r, l] = H(
    () => t === "system" ? Be() : t
  ), o = J((a) => {
    n(a), typeof localStorage < "u" && (a === "system" ? localStorage.removeItem("bbui-theme") : localStorage.setItem("bbui-theme", a));
  }, []);
  return K(() => {
    Rr(t), l(t === "system" ? Be() : t);
  }, [t]), K(() => {
    if (t !== "system") return;
    const a = window.matchMedia("(prefers-color-scheme: dark)"), d = () => l(Be());
    return a.addEventListener("change", d), () => a.removeEventListener("change", d);
  }, [t]), { theme: t, resolvedTheme: r, setTheme: o };
}
async function* Ar(t, n) {
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
async function* Nr(t, n = {}) {
  const r = await fetch(t, n);
  if (!r.ok) {
    const l = await r.text().catch(() => "");
    throw new Error(
      `SSE request failed ${r.status} ${r.statusText}: ${l}`
    );
  }
  yield* Ar(r, n.signal);
}
function sl(t = {}) {
  const { onEvent: n, onComplete: r, onError: l, retain: o = !0 } = t, [a, d] = H([]), [s, c] = H(null), [b, u] = H(!1), [g, h] = H(null), m = te(null), y = te(!0), x = te(n), X = te(r), C = te(l);
  K(() => {
    x.current = n, X.current = r, C.current = l;
  }), K(() => (y.current = !0, () => {
    var A;
    y.current = !1, (A = m.current) == null || A.abort();
  }), []);
  const $ = J(() => {
    var A;
    (A = m.current) == null || A.abort(), m.current = null;
  }, []), L = J(() => {
    d([]), c(null), h(null);
  }, []), T = J(
    async (A, O = {}) => {
      var k, B, W, Y;
      (k = m.current) == null || k.abort();
      const N = new AbortController();
      m.current = N, y.current && (d([]), c(null), h(null), u(!0));
      try {
        for await (const j of Nr(A, {
          ...O,
          signal: N.signal
        })) {
          if (!y.current) return;
          o && d((P) => [...P, j]), c(j), (B = x.current) == null || B.call(x, j);
        }
        y.current && ((W = X.current) == null || W.call(X));
      } catch (j) {
        if (N.signal.aborted) return;
        const P = j instanceof Error ? j : new Error(String(j));
        y.current && (h(P), (Y = C.current) == null || Y.call(C, P));
      } finally {
        y.current && m.current === N && (u(!1), m.current = null);
      }
    },
    [o]
  );
  return { events: a, lastEvent: s, isStreaming: b, error: g, start: T, abort: $, reset: L };
}
export {
  Qr as AccentColor,
  Vr as AlignItems,
  _r as AlignSelf,
  he as Anchor,
  jn as Aside,
  an as Avatar,
  v as BackgroundColor,
  kt as Badge,
  In as Banner,
  ae as BloomColor,
  ee as BloomLevel,
  z as BorderColor,
  I as BorderRadius,
  Zr as BorderWidth,
  S as Box,
  ut as Breakpoint,
  oe as Button,
  Jn as Calendar,
  Xn as Card,
  hn as Checkbox,
  _t as Chip,
  el as ContainerWidth,
  Jr as Cursor,
  ll as DirectionColor,
  Pr as Display,
  gn as Divider,
  An as Drawer,
  lr as DropdownCheckboxMenu,
  Nn as DropdownMenu,
  ue as Elevation,
  qn as EmptyState,
  rl as EvaluationResultColor,
  Kr as FlexDirection,
  Gr as FlexWrap,
  Ot as FontFamily,
  w as FontSize,
  R as FontWeight,
  gr as GlassCard,
  xe as Gradient,
  St as Grid,
  Dn as Header,
  kn as HeroSection,
  Hr as Hide,
  Ft as Icon,
  Q as IconButton,
  tl as IconSize,
  Le as Image,
  F as Inline,
  nr as InlineEdit,
  Yr as JustifyContent,
  Pn as Layout,
  wt as LetterSpacing,
  Er as LikertScale,
  en as LinkButton,
  Jt as LiquidGlass,
  Lt as Menu,
  dr as MobileNav,
  Tn as Modal,
  En as ModalSize,
  wn as Navbar,
  Hn as Panel,
  il as PersonaAccent,
  Ur as Position,
  ur as ProgressTracker,
  yr as RevealSteps,
  Ct as Select,
  ir as SelectField,
  Or as Show,
  Fn as Sidebar,
  i as Spacing,
  Xt as Spinner,
  _ as Stack,
  yn as Stepper,
  Qn as Table,
  Bn as Tabs,
  D as Text,
  cn as TextArea,
  p as TextColor,
  Cn as TextField,
  De as TextInput,
  jr as TextTransform,
  sr as Toast,
  Qt as Toggle,
  qr as WhiteSpace,
  se as ZIndex,
  Ht as bloomColorFor,
  jt as bloomLevelForScore,
  Ar as parseSSEStream,
  nl as scoreColor,
  Nr as streamSSE,
  Ce as useBreakpoint,
  ol as useMediaQuery,
  V as useResponsiveValue,
  sl as useSSEStream,
  al as useTheme
};
