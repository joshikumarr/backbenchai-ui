import ne, { useState as F, useEffect as _, forwardRef as L, Fragment as Ue, useMemo as ve, useCallback as G, useId as ke, useRef as ee } from "react";
import { jsx as e, Fragment as te, jsxs as f } from "react/jsx-runtime";
import { createPortal as Xe } from "react-dom";
const Ee = {
  /** 0–639px */
  Mobile: 0,
  /** 640–1023px */
  Tablet: 640,
  /** 1024px+ */
  Desktop: 1024
};
function ze(t) {
  return t >= Ee.Desktop ? "desktop" : t >= Ee.Tablet ? "tablet" : "mobile";
}
function Ce() {
  const [t, n] = F(
    () => typeof window < "u" ? ze(window.innerWidth) : "desktop"
  );
  return _(() => {
    const r = () => n(ze(window.innerWidth));
    return window.addEventListener("resize", r), () => window.removeEventListener("resize", r);
  }, []), t;
}
function Ge(t, n) {
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
function P(t) {
  const n = Ce();
  return Ge(t, n);
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
    marginBlock: h,
    marginBlockStart: u,
    marginBlockEnd: g,
    marginInline: b,
    marginInlineStart: m,
    marginInlineEnd: y,
    backgroundColor: v,
    borderRadius: X,
    borderColor: C,
    borderSide: H,
    borderWidth: M = "1px",
    overflow: R,
    elevation: A,
    maxWidth: O,
    minWidth: N,
    style: k,
    children: D,
    ...W
  }, V) => {
    const j = fe(P(n)), K = fe(P(r)), U = P(l), E = P(o), q = fe(P(a)), oe = P(d), re = P(s), pe = fe(P(c)), de = fe(P(h)), le = P(u), J = P(g), he = fe(P(b)), ce = P(m), ye = P(y), ge = C ? `${M} solid ${C}` : void 0, me = {};
    if (ge && H)
      switch (H) {
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
    const Ke = {
      ...j && { padding: j },
      ...K && { paddingBlock: K },
      ...U && { paddingBlockStart: U },
      ...E && { paddingBlockEnd: E },
      ...q && { paddingInline: q },
      ...oe && { paddingInlineStart: oe },
      ...re && { paddingInlineEnd: re },
      ...pe && { margin: pe },
      ...de && { marginBlock: de },
      ...le && { marginBlockStart: le },
      ...J && { marginBlockEnd: J },
      ...he && { marginInline: he },
      ...ce && { marginInlineStart: ce },
      ...ye && { marginInlineEnd: ye },
      ...v && { backgroundColor: v },
      ...X && { borderRadius: X },
      ...me,
      ...R && { overflow: R },
      ...A && { boxShadow: A },
      ...O && { maxWidth: O, marginInline: "auto" },
      ...N !== void 0 && { minWidth: N },
      ...k
    };
    return ne.createElement(
      t,
      { ...W, ref: V, style: Ke },
      D
    );
  }
);
S.displayName = "Box";
const Se = ["mobile", "tablet", "desktop"];
function qe(t, n) {
  return Se.indexOf(t) >= Se.indexOf(n);
}
function Je(t, n) {
  return Se.indexOf(t) < Se.indexOf(n);
}
function nr({ on: t, above: n, below: r, children: l }) {
  const o = Ce();
  return t != null ? (Array.isArray(t) ? t : [t]).includes(o) ? /* @__PURE__ */ e(te, { children: l }) : null : n != null ? qe(o, n) ? /* @__PURE__ */ e(te, { children: l }) : null : r != null ? Je(o, r) ? /* @__PURE__ */ e(te, { children: l }) : null : /* @__PURE__ */ e(te, { children: l });
}
const we = ["mobile", "tablet", "desktop"];
function Ze(t, n) {
  return we.indexOf(t) >= we.indexOf(n);
}
function Qe(t, n) {
  return we.indexOf(t) < we.indexOf(n);
}
function rr({ on: t, above: n, below: r, children: l }) {
  const o = Ce();
  return t != null ? (Array.isArray(t) ? t : [t]).includes(o) ? null : /* @__PURE__ */ e(te, { children: l }) : n != null ? Ze(o, n) ? null : /* @__PURE__ */ e(te, { children: l }) : r != null ? Qe(o, r) ? null : /* @__PURE__ */ e(te, { children: l }) : /* @__PURE__ */ e(te, { children: l });
}
const Te = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch"
}, Y = L(
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
      gap: P(n ?? "0"),
      ...r && { alignItems: Te[r] },
      ...l && !o && { justifyContent: Te[l] },
      ...o && { justifyContent: o },
      ...a === "fill" && { flex: "1 1 auto" },
      ...d && { marginBlockStart: d },
      ...s && { marginBlockEnd: s },
      ...c
    };
    return ne.createElement(
      t,
      { ...u, ref: g, style: m },
      h
    );
  }
);
Y.displayName = "Stack";
const Re = {
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
  }, H) => {
    const M = P(n ?? "0"), [R, A] = Array.isArray(M) ? [M[0], M[1]] : [M, M], O = {
      display: "flex",
      flexDirection: "row",
      columnGap: A,
      rowGap: r ?? R,
      ...l && { alignItems: Re[l] },
      ...o && !a && { justifyContent: Re[o] },
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
    let N = X;
    if (s) {
      const k = ne.Children.toArray(X).filter(Boolean);
      N = k.map((D, W) => /* @__PURE__ */ f(Ue, { children: [
        D,
        W < k.length - 1 && /* @__PURE__ */ e("span", { "aria-hidden": "true", children: s })
      ] }, W));
    }
    return ne.createElement(
      t,
      { ...C, ref: H, style: O },
      N
    );
  }
);
$.displayName = "Inline";
const I = L(
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
    return ne.createElement(
      t,
      { ...v, ref: X, style: C },
      y
    );
  }
);
I.displayName = "Text";
function et(t) {
  if (t !== void 0)
    return typeof t == "number" ? `repeat(${t}, 1fr)` : t.map((n) => `${n}fr`).join(" ");
}
const He = L(
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
    const m = P(n ?? 1), y = P(r ?? "0"), v = {
      display: "grid",
      gridTemplateColumns: et(m),
      gap: y,
      ...l && { rowGap: l },
      ...o && { marginBlockStart: o },
      ...a && { marginBlockEnd: a },
      ...d && { borderRadius: d },
      ...s && { overflow: s },
      ...c && { boxShadow: c },
      ...h
    };
    return ne.createElement(
      t,
      { ...g, ref: b, style: v },
      u
    );
  }
);
He.displayName = "Grid";
const be = L(
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
be.displayName = "Anchor";
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
De.displayName = "TextInput";
const tt = L(
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
tt.displayName = "Icon";
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
}, nt = {
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
}, je = {
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
}, lr = {
  Thin: "1px",
  Medium: "2px",
  Thick: "4px",
  XThick: "8px"
}, ir = {
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
}, or = {
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
}, ar = {
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
}, Q = {
  NotAssessed: "NOT_ASSESSED",
  Aware: "AWARE",
  Understands: "UNDERSTANDS",
  Applies: "APPLIES",
  Analyzes: "ANALYZES",
  Masters: "MASTERS"
};
function rt(t) {
  switch (t) {
    case Q.Masters:
      return ae.Masters;
    case Q.Analyzes:
      return ae.Analyzes;
    case Q.Applies:
      return ae.Applies;
    case Q.Understands:
      return ae.Understands;
    case Q.Aware:
      return ae.Aware;
    default:
      return ae.NotAssessed;
  }
}
function lt(t) {
  return t >= 90 ? Q.Masters : t >= 80 ? Q.Analyzes : t >= 60 ? Q.Applies : t >= 40 ? Q.Understands : t >= 20 ? Q.Aware : Q.NotAssessed;
}
function sr(t) {
  return rt(lt(t));
}
const dr = {
  correct: ae.Masters,
  partial: ae.Applies,
  incorrect: "var(--bbui-color-error)",
  skipped: "var(--bbui-color-subtlest)"
}, cr = {
  up: ae.Masters,
  down: "var(--bbui-color-error)",
  unchanged: "var(--bbui-color-subtlest)"
}, ur = {
  Nova: "var(--bbui-persona-nova)",
  Maya: "var(--bbui-persona-maya)",
  Jordan: "var(--bbui-persona-jordan)",
  Custom: "var(--bbui-persona-custom)"
}, it = {
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
}, Pe = L(
  ({ variant: t = "default", uppercase: n = !1, style: r, children: l, ...o }, a) => {
    const d = it[t], s = {
      display: "inline-flex",
      alignItems: "center",
      lineHeight: 1,
      paddingBlock: i.XXSmall,
      paddingInline: n ? i.MediumLarge : i.Medium,
      borderRadius: B.Full,
      fontWeight: n ? T.Black : T.Medium,
      fontSize: n ? w.Micro : w.XXSmall,
      letterSpacing: n ? je.Wider : void 0,
      textTransform: n ? "uppercase" : void 0,
      ...d,
      ...r
    };
    return /* @__PURE__ */ e("span", { ref: a, style: s, ...o, children: l });
  }
);
Pe.displayName = "Badge";
const ot = {
  compact: { block: i.XXSmall, inline: i.Small },
  comfortable: { block: i.XSmall, inline: i.Medium }
}, at = {
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
}, st = L(
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
    const y = c !== void 0 || t !== void 0, v = t === !0, X = a ?? (l ? w.XXSmall : w.XSmall), C = l ? { block: i.XXSmall, inline: i.XSmall } : ot[r];
    let H, M;
    if (l) {
      const N = at[l];
      H = N.backgroundColor, M = N.color;
    } else
      H = v ? x.Brand : n === "outlined" ? x.Transparent : x.Subtle, M = v ? p.OnBrand : p.Default;
    const R = !l && n === "outlined" && !v ? `1px solid ${z.Outline}` : "1px solid transparent", A = {
      display: "inline-flex",
      alignItems: "center",
      gap: i.XSmall,
      paddingBlock: C.block,
      paddingInline: C.inline,
      borderRadius: B.Full,
      backgroundColor: H,
      color: M,
      border: R,
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
    }, O = s && v ? /* @__PURE__ */ e(
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
        style: A,
        ...b,
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
        ...b,
        children: [
          d,
          g
        ]
      }
    );
  }
);
st.displayName = "Chip";
const Ae = {
  sm: "4px",
  md: "12px",
  lg: "16px",
  xl: "24px"
}, dt = {
  none: "inset 0 0 0 0 rgba(255, 255, 255, 0)",
  xs: "inset 1px 1px 1px 0 rgba(255, 255, 255, 0.3), inset -1px -1px 1px 0 rgba(255, 255, 255, 0.3)",
  sm: "inset 2px 2px 2px 0 rgba(255, 255, 255, 0.35), inset -2px -2px 2px 0 rgba(255, 255, 255, 0.35)",
  md: "inset 3px 3px 3px 0 rgba(255, 255, 255, 0.45), inset -3px -3px 3px 0 rgba(255, 255, 255, 0.45)",
  lg: "inset 4px 4px 4px 0 rgba(255, 255, 255, 0.5), inset -4px -4px 4px 0 rgba(255, 255, 255, 0.5)",
  xl: "inset 6px 6px 6px 0 rgba(255, 255, 255, 0.55), inset -6px -6px 6px 0 rgba(255, 255, 255, 0.55)"
}, ct = {
  none: "0 4px 4px rgba(0, 0, 0, 0.05), 0 0 12px rgba(0, 0, 0, 0.05)",
  xs: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 16px rgba(255, 255, 255, 0.05)",
  sm: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 24px rgba(255, 255, 255, 0.1)",
  md: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 32px rgba(255, 255, 255, 0.15)",
  lg: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 40px rgba(255, 255, 255, 0.2)",
  xl: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 48px rgba(255, 255, 255, 0.25)"
};
let ut = 0;
const pt = L(
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
    const b = ve(() => `bbui-liquid-glass-${++ut}`, []), m = {
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
            backdropFilter: `blur(${Ae[r]})`,
            WebkitBackdropFilter: `blur(${Ae[r]})`,
            filter: `url(#${b})`
          }
        }
      ),
      /* @__PURE__ */ e("div", { style: { ...y, zIndex: 1, boxShadow: ct[l] } }),
      /* @__PURE__ */ e("div", { style: { ...y, zIndex: 2, boxShadow: dt[o] } }),
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
pt.displayName = "LiquidGlass";
const ht = "40px", bt = "24px", Le = "20px", $e = i.XXSmall, gt = L(
  ({ checked: t, defaultChecked: n = !1, onChange: r, label: l, style: o, ...a }, d) => {
    const [s, c] = F(n), h = t !== void 0, u = h ? t : s, g = G(() => {
      const y = !u;
      h || c(y), r == null || r(y);
    }, [u, h, r]), b = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      width: ht,
      height: bt,
      borderRadius: B.Full,
      backgroundColor: u ? x.Brand : x.Neutral,
      border: "none",
      cursor: "pointer",
      padding: 0,
      transition: "background-color 150ms ease",
      ...o
    }, m = {
      position: "absolute",
      width: Le,
      height: Le,
      borderRadius: B.Full,
      backgroundColor: x.Default,
      transition: "left 150ms ease",
      left: u ? `calc(100% - ${Le} - ${$e})` : $e,
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
gt.displayName = "Toggle";
const mt = L(
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
mt.displayName = "LinkButton";
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
const ft = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64
}, yt = {
  xsmall: "10px",
  small: "12px",
  medium: "14px",
  large: "16px",
  xlarge: "24px"
}, xt = {
  xsmall: 6,
  small: 8,
  medium: 10,
  large: 12,
  xlarge: 16
}, vt = {
  online: "#22c55e",
  offline: "#bccbb9",
  busy: "#ba1a1a",
  focus: "#3b82f6"
};
function St(t) {
  var r;
  const n = t.trim().split(/\s+/);
  return n.length >= 2 ? (n[0][0] + n[n.length - 1][0]).toUpperCase() : (((r = n[0]) == null ? void 0 : r[0]) ?? "").toUpperCase();
}
const wt = L(
  ({
    src: t,
    name: n,
    size: r = "medium",
    appearance: l = "circle",
    status: o,
    fallbackBackground: a = x.NeutralBold,
    fallbackColor: d = p.Subtle
  }, s) => {
    const [c, h] = F(!1), u = ft[r], g = t && !c, b = n ? St(n) : "", m = {
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
    }, y = xt[r], v = o ? {
      position: "absolute",
      bottom: 0,
      right: 0,
      width: y,
      height: y,
      borderRadius: B.Full,
      backgroundColor: vt[o],
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
            fontSize: yt[r],
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
wt.displayName = "Avatar";
const kt = {
  xsmall: 16,
  small: 24,
  medium: 32,
  large: 48,
  xlarge: 64
}, Xt = {
  xsmall: 2,
  small: 2,
  medium: 3,
  large: 3,
  xlarge: 4
}, Ye = L(
  ({ size: t = "medium", label: n = "Loading", color: r = p.Brand }, l) => {
    const o = ke().replace(/:/g, ""), a = kt[t], d = Xt[t], s = (a - d) / 2, c = 2 * Math.PI * s;
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
Ye.displayName = "Spinner";
const Ct = L(
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
Ct.displayName = "TextArea";
function Mt(t) {
  return "options" in t;
}
const _e = L(
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
        (y) => Mt(y) ? /* @__PURE__ */ e("optgroup", { label: y.label, children: y.options.map((v) => /* @__PURE__ */ e("option", { value: v.value, disabled: v.disabled, children: v.label }, v.value)) }, y.label) : /* @__PURE__ */ e("option", { value: y.value, disabled: y.disabled, children: y.label }, y.value)
      )
    ] });
  }
);
_e.displayName = "Select";
const Lt = {
  small: { box: "16px", font: w.XXSmall, gap: i.XSmall },
  medium: { box: "20px", font: w.XSmall, gap: i.Medium },
  large: { box: "24px", font: w.Small, gap: i.Medium }
}, Bt = ({ size: t }) => /* @__PURE__ */ e(
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
), It = L(
  ({ label: t, size: n = "medium", checked: r, disabled: l, style: o, id: a, ...d }, s) => {
    const c = ke(), h = a ?? c, u = Lt[n], g = !!r, b = {
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
          /* @__PURE__ */ e("span", { style: b, "aria-hidden": "true", children: g && /* @__PURE__ */ e(Bt, { size: `calc(${u.box} - 4px)` }) }),
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
It.displayName = "Checkbox";
const Dt = L(
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
Dt.displayName = "Divider";
const Et = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z", clipRule: "evenodd" }) }), zt = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { d: "M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" }) }), Tt = L(
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
              children: /* @__PURE__ */ e(Et, {})
            }
          ),
          /* @__PURE__ */ e(
            I,
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
              children: /* @__PURE__ */ e(zt, {})
            }
          )
        ]
      }
    );
  }
);
Tt.displayName = "Stepper";
const Rt = () => /* @__PURE__ */ e(
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
), At = () => /* @__PURE__ */ e(
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
), $t = () => /* @__PURE__ */ e(
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
), Nt = L(
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
    const [C, H] = F(!1), [M, R] = F(!1);
    _(() => {
      const D = () => R(window.innerWidth < v);
      return D(), window.addEventListener("resize", D), () => window.removeEventListener("resize", D);
    }, [v]);
    const A = G((D) => {
      D.target.closest("[data-navbar-menu]") || H(!1);
    }, []);
    _(() => (document.addEventListener("click", A), () => document.removeEventListener("click", A)), [A]);
    const O = ne.isValidElement(t) ? t : /* @__PURE__ */ e(
      Me,
      {
        src: t.src,
        alt: t.alt ?? "Logo",
        style: {
          width: t.width ?? 120,
          height: t.height ?? "auto"
        }
      }
    ), N = /* @__PURE__ */ e(te, { children: n.map((D, W) => /* @__PURE__ */ e(
      be,
      {
        href: D.path,
        color: l,
        display: "block",
        style: { textDecoration: "none" },
        children: D.title
      },
      W
    )) }), k = r ? /* @__PURE__ */ e(
      be,
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
          /* @__PURE__ */ e(I, { as: "span", color: a, weight: d, children: r.label }),
          r.icon ?? /* @__PURE__ */ e($t, {})
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
            /* @__PURE__ */ e(S, { children: O }),
            /* @__PURE__ */ e(
              ie,
              {
                onClick: () => H(!C),
                style: {
                  background: "none",
                  padding: 0,
                  color: p.Subtle
                },
                children: C ? /* @__PURE__ */ e(At, {}) : /* @__PURE__ */ e(Rt, {})
              }
            )
          ] })
        }
      ),
      C && /* @__PURE__ */ e(
        S,
        {
          backgroundColor: b,
          elevation: ue.Raised,
          borderRadius: y,
          borderColor: m,
          borderSide: "all",
          padding: i.Large,
          style: { margin: i.Medium },
          children: /* @__PURE__ */ f("nav", { children: [
            /* @__PURE__ */ e("ul", { style: { listStyle: "none", padding: 0, margin: 0 }, children: n.map((D, W) => /* @__PURE__ */ e("li", { style: { paddingBlock: i.MediumLarge }, children: /* @__PURE__ */ e(
              be,
              {
                href: D.path,
                color: l,
                display: "block",
                style: { textDecoration: "none" },
                children: D.title
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
        paddingBlock: h,
        style: { width: "100%" },
        children: /* @__PURE__ */ f($, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ e(S, { children: O }),
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
Nt.displayName = "Navbar";
const Ne = () => /* @__PURE__ */ e(
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
), Wt = L(
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
    ctaGap: H = i.MediumLarge,
    paddingBlock: M = i.Size7,
    paddingInline: R = i.XXXLarge,
    contentGap: A = i.XHuge,
    textGap: O = i.XLarge,
    textMaxWidth: N = "576px",
    gradient: k,
    breakpoint: D = 768
  }, W) => {
    const [V, j] = F(!1);
    _(() => {
      const J = () => j(window.innerWidth >= D);
      return J(), window.addEventListener("resize", J), () => window.removeEventListener("resize", J);
    }, [D]);
    const K = (k == null ? void 0 : k.enabled) !== !1, U = (k == null ? void 0 : k.css) ?? "linear-gradient(143.6deg, rgba(192,132,252,0) 20.79%, rgba(232,121,249,0.26) 40.92%, rgba(204,171,238,0) 70.35%)", E = (k == null ? void 0 : k.height) ?? "580px", q = (r == null ? void 0 : r.borderColor) ?? z.Default, oe = r ? /* @__PURE__ */ e(
      be,
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
            I,
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
            /* @__PURE__ */ e(I, { as: "span", size: w.XSmall, children: r.text }),
            r.icon ?? /* @__PURE__ */ e(Ne, {})
          ] })
        ] })
      }
    ) : null, re = l.length > 0 ? /* @__PURE__ */ e($, { space: H, alignBlock: "center", shouldWrap: !0, children: l.map((J, he) => {
      const ce = (J.variant ?? (he === 0 ? "primary" : "secondary")) === "primary", ye = ce ? v : C;
      return /* @__PURE__ */ e(
        be,
        {
          href: J.path,
          backgroundColor: ce ? b : void 0,
          color: ce ? m : X,
          paddingBlock: i.Medium,
          paddingInline: i.Large,
          borderRadius: ce ? y : void 0,
          weight: ye,
          display: "inline-block",
          style: { textDecoration: "none" },
          children: /* @__PURE__ */ f($, { space: i.XSmall, alignBlock: "center", children: [
            /* @__PURE__ */ e(
              I,
              {
                as: "span",
                color: ce ? m : X,
                weight: ye,
                children: J.label
              }
            ),
            J.icon ?? /* @__PURE__ */ e(Ne, {})
          ] })
        },
        he
      );
    }) }) : null, de = /* @__PURE__ */ f(
      Y,
      {
        space: O,
        style: { maxWidth: N, flexShrink: 0 },
        children: [
          oe,
          /* @__PURE__ */ e(
            I,
            {
              as: "h1",
              size: V ? s : d,
              weight: c,
              color: h,
              lineHeight: 1.2,
              children: t
            }
          ),
          n && /* @__PURE__ */ e(
            I,
            {
              as: "p",
              color: g,
              size: u,
              lineHeight: 1.6,
              children: n
            }
          ),
          a,
          re
        ]
      }
    ), le = o && V ? /* @__PURE__ */ e(S, { style: { flex: "1 1 0%", minWidth: 0 }, children: /* @__PURE__ */ e(
      Me,
      {
        src: o.src,
        alt: o.alt ?? "",
        style: { maxWidth: o.maxWidth ?? "576px" }
      }
    ) }) : null;
    return /* @__PURE__ */ f(S, { as: "section", ref: W, style: { position: "relative" }, children: [
      K && /* @__PURE__ */ e(
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
          paddingInline: R,
          paddingBlock: M,
          children: V ? /* @__PURE__ */ f($, { space: A, alignBlock: "center", children: [
            de,
            le
          ] }) : /* @__PURE__ */ e(Y, { space: A, children: de })
        }
      )
    ] });
  }
);
Wt.displayName = "HeroSection";
const Ft = L(
  ({
    padding: t = i.Large,
    backgroundColor: n = x.Default,
    borderRadius: r = B.XXLarge,
    borderColor: l = z.Default,
    elevation: o = ue.Ambient,
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
      children: /* @__PURE__ */ f(Y, { children: [
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
Ft.displayName = "Card";
const Ot = L(
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
    placeholder: H,
    value: M,
    defaultValue: R,
    disabled: A,
    readOnly: O,
    required: N,
    autoFocus: k,
    autoComplete: D,
    onChange: W,
    onBlur: V,
    onFocus: j
  }, K) => {
    const U = ke(), E = l ?? U, q = `${E}-helper`, oe = `${E}-error`, re = !!r, pe = re ? z.Error : u, de = b === "bottom", le = de || !!(y || v), J = /* @__PURE__ */ e(
      De,
      {
        ref: K,
        id: E,
        name: X,
        type: C,
        placeholder: H,
        value: M,
        defaultValue: R,
        disabled: A,
        readOnly: O,
        required: N,
        autoFocus: k,
        autoComplete: D,
        onChange: W,
        onBlur: V,
        onFocus: j,
        backgroundColor: le ? "transparent" : h,
        borderColor: le ? void 0 : pe,
        borderRadius: le ? void 0 : g,
        padding: m,
        style: {
          width: "100%",
          ...le ? { flex: "1 1 auto", minWidth: 0 } : {}
        },
        "aria-describedby": re ? oe : n ? q : void 0,
        "aria-invalid": re || void 0
      }
    ), he = le ? /* @__PURE__ */ f("div", { style: {
      display: "flex",
      alignItems: "center",
      width: "100%",
      backgroundColor: h,
      ...de ? { borderBottom: `2px solid ${pe}` } : { border: `1px solid ${pe}`, borderRadius: g }
    }, children: [
      y,
      J,
      v
    ] }) : J;
    return /* @__PURE__ */ f(Y, { space: i.XSmall, children: [
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
      he,
      re && /* @__PURE__ */ e(I, { as: "span", size: w.XXSmall, color: p.Error, id: oe, children: r }),
      !re && n && /* @__PURE__ */ e(I, { as: "span", size: w.XXSmall, color: p.Subtle, id: q, children: n })
    ] });
  }
);
Ot.displayName = "TextField";
const Ht = {
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
}, jt = () => /* @__PURE__ */ e(
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
), Pt = L(
  ({ variant: t = "info", icon: n, dismissible: r, onDismiss: l, children: o }, a) => {
    const d = Ht[t];
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
            /* @__PURE__ */ e(I, { as: "span", size: w.XSmall, color: d.text, children: o })
          ] }),
          r && /* @__PURE__ */ e(
            Z,
            {
              label: "Dismiss",
              onClick: l,
              color: d.text,
              padding: i.XXSmall,
              children: /* @__PURE__ */ e(jt, {})
            }
          )
        ] })
      }
    );
  }
);
Pt.displayName = "Banner";
const Ve = L(
  ({
    sections: t,
    activeId: n,
    onSelect: r,
    activeColor: l = p.Brand,
    activeBackground: o = x.Subtle
  }, a) => /* @__PURE__ */ e(Y, { ref: a, as: "nav", space: i.Small, children: t.map((d, s) => /* @__PURE__ */ f(Y, { space: i.XXSmall, children: [
    d.title && /* @__PURE__ */ e(S, { paddingInline: i.Medium, paddingBlock: i.XSmall, children: /* @__PURE__ */ e(
      I,
      {
        as: "span",
        size: w.XXSmall,
        weight: 600,
        color: p.Subtlest,
        textTransform: "uppercase",
        children: d.title
      }
    ) }),
    /* @__PURE__ */ e(Y, { as: "ul", style: { listStyle: "none", padding: 0, margin: 0 }, children: d.items.map((c) => {
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
            /* @__PURE__ */ e(I, { as: "span", size: w.XSmall, style: { color: "inherit" }, children: c.label })
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
Ve.displayName = "Menu";
const Yt = L(
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
    var H;
    const [g, b] = F(
      r ?? ((H = t[0]) == null ? void 0 : H.id)
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
            const R = M.id === y;
            return /* @__PURE__ */ e(
              ie,
              {
                role: "tab",
                "aria-selected": R,
                "aria-controls": `tabpanel-${M.id}`,
                id: `tab-${M.id}`,
                disabled: M.disabled,
                onClick: () => v(M.id),
                paddingBlock: i.Medium,
                paddingInline: i.XXLarge,
                borderRadius: B.XLarge,
                color: R ? p.Default : M.disabled ? p.Disabled : d,
                backgroundColor: R ? c : x.Transparent,
                style: {
                  fontWeight: R ? T.Bold : T.Medium,
                  fontSize: w.XSmall,
                  boxShadow: R ? ue.Raised : "none",
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
            const R = M.id === y;
            return /* @__PURE__ */ e(
              ie,
              {
                role: "tab",
                "aria-selected": R,
                "aria-controls": `tabpanel-${M.id}`,
                id: `tab-${M.id}`,
                disabled: M.disabled,
                onClick: () => v(M.id),
                paddingBlock: i.Medium,
                paddingInline: i.Large,
                borderRadius: B.None,
                color: R ? a : M.disabled ? p.Disabled : d,
                style: {
                  background: "none",
                  fontWeight: R ? T.Semibold : T.Regular,
                  fontSize: w.XSmall,
                  borderBottom: R ? `2px solid ${a}` : "2px solid transparent",
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
Yt.displayName = "Tabs";
const _t = L(
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
      children: /* @__PURE__ */ f(Y, { space: i.Medium, children: [
        r && r.length > 0 && /* @__PURE__ */ e($, { space: i.XSmall, alignBlock: "center", children: r.map((b, m) => /* @__PURE__ */ f(ne.Fragment, { children: [
          m > 0 && /* @__PURE__ */ e(I, { as: "span", color: p.Disabled, size: w.XSmall, children: "/" }),
          b.href ? /* @__PURE__ */ e(
            be,
            {
              href: b.href,
              color: c,
              size: w.XSmall,
              style: { textDecoration: "none" },
              children: b.label
            }
          ) : /* @__PURE__ */ e(I, { as: "span", size: w.XSmall, color: p.Subtlest, children: b.label })
        ] }, m)) }),
        /* @__PURE__ */ f($, { alignBlock: "center", spread: "space-between", children: [
          /* @__PURE__ */ f(Y, { space: i.XXSmall, children: [
            /* @__PURE__ */ e(I, { as: "h1", size: o, weight: a, color: d, children: t }),
            n && /* @__PURE__ */ e(I, { as: "p", size: w.XSmall, color: s, children: n })
          ] }),
          l && /* @__PURE__ */ e($, { space: i.Medium, alignBlock: "center", children: l })
        ] })
      ] })
    }
  )
);
_t.displayName = "Header";
const Vt = {
  XSmall: "320px",
  Small: "416px",
  Medium: "512px",
  Large: "704px",
  XLarge: "960px",
  Full: "min(96vw, 1440px)"
}, Kt = () => /* @__PURE__ */ e(
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
), Ut = L(
  ({ open: t, onClose: n, title: r, children: l, footer: o, size: a = Vt.Medium }, d) => {
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
              elevation: ue.Overlay,
              overflow: "hidden",
              style: {
                width: "100%",
                maxWidth: a,
                maxHeight: "85vh",
                display: "flex",
                flexDirection: "column"
              },
              children: /* @__PURE__ */ f(Y, { children: [
                r && /* @__PURE__ */ e(
                  S,
                  {
                    padding: i.Large,
                    style: { borderBottom: `1px solid ${z.Default}` },
                    children: /* @__PURE__ */ f($, { alignBlock: "center", spread: "space-between", children: [
                      /* @__PURE__ */ e(I, { as: "h2", size: w.Large, weight: T.Semibold, color: p.Default, children: r }),
                      /* @__PURE__ */ e(Z, { label: "Close", onClick: n, color: p.Subtle, children: /* @__PURE__ */ e(Kt, {}) })
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
Ut.displayName = "Modal";
const Be = 200, Gt = {
  start: "flex-start",
  center: "center",
  end: "flex-end"
};
function qt({
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
  const [h, u] = F(t), [g, b] = F(!1), m = P(l), y = P(d);
  if (_(() => {
    if (t) {
      u(!0);
      const C = requestAnimationFrame(() => b(!0));
      return () => cancelAnimationFrame(C);
    }
    b(!1);
    const X = window.setTimeout(() => u(!1), Be);
    return () => window.clearTimeout(X);
  }, [t]), _(() => {
    if (!t) return;
    const X = (C) => {
      C.key === "Escape" && n();
    };
    return document.addEventListener("keydown", X), () => document.removeEventListener("keydown", X);
  }, [t, n]), !h) return null;
  const v = typeof m == "number" ? `${m}px` : m;
  return Xe(
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
          transition: `opacity ${Be}ms ease`
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
                justifyContent: Gt[y],
                width: "100%",
                transform: g ? "translateY(0)" : "translateY(-12px)",
                transition: `transform ${Be + 50}ms ease`
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
qt.displayName = "Drawer";
const Jt = L(
  ({ trigger: t, sections: n, activeId: r, onSelect: l }, o) => {
    const [a, d] = F(!1), s = ee(null), c = () => d((b) => !b), h = (b) => {
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
                Ve,
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
Jt.displayName = "DropdownMenu";
const Zt = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), Qt = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), en = L(
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
          Y,
          {
            space: i.Small,
            grow: "fill",
            style: { padding: i.Medium, overflow: "auto" },
            children: t.map((m, y) => /* @__PURE__ */ f(Y, { space: i.XXSmall, children: [
              m.title && !a && /* @__PURE__ */ e(S, { paddingInline: i.Medium, paddingBlock: i.XSmall, children: /* @__PURE__ */ e(
                I,
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
                      !a && /* @__PURE__ */ f(te, { children: [
                        /* @__PURE__ */ e(I, { as: "span", style: { flex: "1 1 auto", color: "inherit" }, children: v.label }),
                        v.badge && /* @__PURE__ */ e(Pe, { variant: v.badgeVariant ?? "default", children: v.badge })
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
                children: a ? /* @__PURE__ */ e(Qt, {}) : /* @__PURE__ */ e(Zt, {})
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
en.displayName = "Sidebar";
const tn = () => /* @__PURE__ */ e(
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
), nn = L(
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
              children: /* @__PURE__ */ f($, { alignBlock: "center", spread: "space-between", children: [
                /* @__PURE__ */ e(I, { as: "h2", size: w.Large, weight: T.Semibold, color: p.Default, children: r }),
                /* @__PURE__ */ e(Z, { label: "Close panel", onClick: n, color: p.Subtle, children: /* @__PURE__ */ e(tn, {}) })
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
nn.displayName = "Panel";
const rn = L(
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
rn.displayName = "Aside";
const ln = L(
  ({
    topNav: t,
    sideNav: n,
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
ln.displayName = "Layout";
const on = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
function We(t, n) {
  return t.getFullYear() === n.getFullYear() && t.getMonth() === n.getMonth() && t.getDate() === n.getDate();
}
function an(t, n) {
  return new Date(t, n + 1, 0).getDate();
}
function sn(t, n) {
  return new Date(t, n, 1).getDay();
}
const dn = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z", clipRule: "evenodd" }) }), cn = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z", clipRule: "evenodd" }) }), un = [
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
], pn = L(
  ({
    value: t,
    defaultValue: n,
    onChange: r,
    min: l,
    max: o,
    selectedColor: a = p.Inverse,
    selectedBackground: d = x.Brand
  }, s) => {
    const c = /* @__PURE__ */ new Date(), [h, u] = F(n), g = t !== void 0, b = g ? t : h, [m, y] = F(
      (b ?? c).getFullYear()
    ), [v, X] = F(
      (b ?? c).getMonth()
    ), C = ve(() => an(m, v), [m, v]), H = ve(() => sn(m, v), [m, v]), M = () => {
      v === 0 ? (X(11), y((k) => k - 1)) : X((k) => k - 1);
    }, R = () => {
      v === 11 ? (X(0), y((k) => k + 1)) : X((k) => k + 1);
    }, A = (k) => {
      const D = new Date(m, v, k);
      g || u(D), r == null || r(D);
    }, O = (k) => {
      const D = new Date(m, v, k);
      return !!(l && D < new Date(l.getFullYear(), l.getMonth(), l.getDate()) || o && D > new Date(o.getFullYear(), o.getMonth(), o.getDate()));
    }, N = [];
    for (let k = 0; k < H; k++)
      N.push(/* @__PURE__ */ e(S, {}, `empty-${k}`));
    for (let k = 1; k <= C; k++) {
      const D = new Date(m, v, k), W = b ? We(D, b) : !1, V = We(D, c), j = O(k);
      N.push(
        /* @__PURE__ */ e(
          ie,
          {
            disabled: j,
            onClick: () => A(k),
            borderRadius: B.Medium,
            style: {
              width: "36px",
              height: "36px",
              padding: 0,
              fontSize: w.XSmall,
              fontWeight: W ? T.Semibold : T.Regular,
              backgroundColor: W ? d : "transparent",
              color: W ? a : j ? p.Disabled : p.Default,
              border: V && !W ? `1px solid ${z.Default}` : "none",
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
                /* @__PURE__ */ e(Z, { label: "Previous month", onClick: M, color: p.Subtle, padding: i.XSmall, children: /* @__PURE__ */ e(dn, {}) }),
                /* @__PURE__ */ f(I, { as: "span", size: w.XSmall, weight: T.Semibold, color: p.Default, children: [
                  un[v],
                  " ",
                  m
                ] }),
                /* @__PURE__ */ e(Z, { label: "Next month", onClick: R, color: p.Subtle, padding: i.XSmall, children: /* @__PURE__ */ e(cn, {}) })
              ]
            }
          ),
          /* @__PURE__ */ f(He, { columns: 7, gap: i.XXSmall, children: [
            on.map((k) => /* @__PURE__ */ e(
              I,
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
            N
          ] })
        ]
      }
    );
  }
);
pn.displayName = "Calendar";
const hn = L(
  ({ header: t, description: n, image: r, primaryAction: l, secondaryAction: o }, a) => /* @__PURE__ */ f(
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
        r && /* @__PURE__ */ e("div", { children: r }),
        /* @__PURE__ */ f(Y, { space: i.Medium, alignInline: "center", children: [
          /* @__PURE__ */ e(
            I,
            {
              as: "h3",
              fontFamily: nt.Display,
              size: w.XLarge,
              weight: T.Bold,
              color: p.Default,
              children: t
            }
          ),
          n && /* @__PURE__ */ e(I, { as: "p", size: w.XSmall, color: p.Subtle, lineHeight: 1.6, children: n })
        ] }),
        (l || o) && /* @__PURE__ */ f($, { space: i.Medium, alignBlock: "center", children: [
          l,
          o
        ] })
      ]
    }
  )
);
hn.displayName = "EmptyState";
const bn = ({ order: t }) => /* @__PURE__ */ e(
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
    children: t === "ASC" ? /* @__PURE__ */ e("path", { d: "M8 3l4 5H4l4-5z" }) : t === "DESC" ? /* @__PURE__ */ e("path", { d: "M8 13l4-5H4l4 5z" }) : /* @__PURE__ */ f(te, { children: [
      /* @__PURE__ */ e("path", { d: "M8 3l3 4H5l3-4z" }),
      /* @__PURE__ */ e("path", { d: "M8 13l3-4H5l3 4z" })
    ] })
  }
), gn = L(
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
    const [v, X] = F(a), [C, H] = F(c), [M, R] = F(h), A = o !== void 0, O = A ? o : v, N = d !== void 0, k = N ? d : C, D = N ? s ?? "ASC" : M, W = l ? Math.max(1, Math.ceil(r.length / l)) : 1, V = ve(() => {
      if (!l) return r;
      const E = (O - 1) * l;
      return r.slice(E, E + l);
    }, [r, l, O]), j = (E) => {
      const q = k === E && D === "ASC" ? "DESC" : "ASC";
      N || (H(E), R(q)), u == null || u(E, q);
    }, K = (E) => {
      A || X(E), g == null || g(E);
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
          children: /* @__PURE__ */ e(Ye, { size: "large" })
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
                    bn,
                    {
                      order: k === E.key ? D : void 0
                    }
                  )
                ] })
              },
              E.key
            )) }) }),
            /* @__PURE__ */ f("tbody", { children: [
              V.map((E) => /* @__PURE__ */ e(
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
              V.length === 0 && /* @__PURE__ */ e("tr", { children: /* @__PURE__ */ e(
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
      l && W > 1 && /* @__PURE__ */ f(
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
                disabled: O <= 1,
                onClick: () => K(O - 1),
                paddingBlock: i.XSmall,
                paddingInline: i.Medium,
                borderRadius: B.Large,
                backgroundColor: x.Default,
                color: p.Default,
                style: { fontSize: w.XXSmall, border: `1px solid ${z.Default}` },
                children: "Previous"
              }
            ),
            /* @__PURE__ */ f(I, { size: w.XXSmall, color: p.Subtle, children: [
              "Page ",
              O,
              " of ",
              W
            ] }),
            /* @__PURE__ */ e(
              ie,
              {
                disabled: O >= W,
                onClick: () => K(O + 1),
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
gn.displayName = "Table";
const mn = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z", clipRule: "evenodd" }) }), fn = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", style: { width: "16px", height: "16px" }, children: /* @__PURE__ */ e("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" }) }), yn = L(
  ({
    defaultValue: t,
    label: n,
    editButtonLabel: r,
    editView: l,
    readView: o,
    onConfirm: a,
    onCancel: d
  }, s) => {
    const [c, h] = F(!1), [u, g] = F(t);
    ee(null), _(() => {
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
        children: /* @__PURE__ */ e(I, { as: "span", size: w.Small, color: p.Default, children: C || " " })
      }
    ), X = (C) => /* @__PURE__ */ e(
      De,
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
        I,
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
            children: /* @__PURE__ */ e(mn, {})
          }
        ),
        /* @__PURE__ */ e(
          Z,
          {
            label: "Cancel",
            onClick: m,
            color: p.Error,
            padding: i.XSmall,
            children: /* @__PURE__ */ e(fn, {})
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
yn.displayName = "InlineEdit";
const xn = () => /* @__PURE__ */ e("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16", fill: "currentColor", style: { width: "14px", height: "14px" }, children: /* @__PURE__ */ e("path", { fillRule: "evenodd", d: "M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z", clipRule: "evenodd" }) }), vn = L(
  ({ trigger: t, groups: n, checked: r, onChange: l }, o) => {
    const [a, d] = F(!1), s = ee(null), c = G((u) => {
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
              children: /* @__PURE__ */ e(Y, { space: i.XSmall, children: n.map((u, g) => /* @__PURE__ */ f(Y, { space: i.XXSmall, children: [
                u.title && /* @__PURE__ */ e(S, { paddingInline: i.MediumLarge, paddingBlock: i.XSmall, children: /* @__PURE__ */ e(
                  I,
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
                            children: m && /* @__PURE__ */ e(xn, {})
                          }
                        ),
                        /* @__PURE__ */ e(I, { as: "span", size: w.XSmall, style: { color: "inherit" }, children: b.label })
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
vn.displayName = "DropdownCheckboxMenu";
const Sn = L(
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
    options: H,
    disabled: M,
    required: R,
    onChange: A,
    onBlur: O
  }, N) => {
    const k = ke(), D = l ?? k, W = `${D}-helper`, V = `${D}-error`, j = !!r, K = j ? z.Error : u, U = b === "bottom", E = /* @__PURE__ */ e(
      _e,
      {
        ref: N,
        id: D,
        name: y,
        value: v,
        defaultValue: X,
        placeholder: C,
        options: H,
        disabled: M,
        required: R,
        onChange: A,
        onBlur: O,
        backgroundColor: U ? "transparent" : h,
        borderColor: U ? void 0 : K,
        borderRadius: U ? void 0 : g,
        padding: m,
        fontSize: w.XSmall,
        color: p.Default,
        style: { width: "100%" },
        "aria-describedby": j ? V : n ? W : void 0,
        "aria-invalid": j || void 0
      }
    ), q = U ? /* @__PURE__ */ e("div", { style: {
      width: "100%",
      backgroundColor: h,
      borderBottom: `2px solid ${K}`
    }, children: E }) : E;
    return /* @__PURE__ */ f(Y, { space: i.XSmall, children: [
      t && /* @__PURE__ */ e(
        "label",
        {
          htmlFor: D,
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
      j && /* @__PURE__ */ e(I, { as: "span", size: w.XXSmall, color: p.Error, id: V, children: r }),
      !j && n && /* @__PURE__ */ e(I, { as: "span", size: w.XXSmall, color: p.Subtle, id: W, children: n })
    ] });
  }
);
Sn.displayName = "SelectField";
const wn = {
  info: { bg: x.Default, text: p.Info, accent: "#3b82f6" },
  success: { bg: x.Default, text: p.Success, accent: "#22c55e" },
  warning: { bg: x.Default, text: p.Warning, accent: "#f59e0b" },
  error: { bg: x.Default, text: p.Error, accent: "#ba1a1a" }
}, kn = () => /* @__PURE__ */ e(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    style: { width: "14px", height: "14px" },
    children: /* @__PURE__ */ e("path", { d: "M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" })
  }
), Xn = L(
  ({ open: t, onClose: n, duration: r = 5e3, variant: l = "info", icon: o, children: a }, d) => {
    if (_(() => {
      if (!t || r === 0) return;
      const c = setTimeout(n, r);
      return () => clearTimeout(c);
    }, [t, r, n]), !t) return null;
    const s = wn[l];
    return Xe(
      /* @__PURE__ */ e(
        S,
        {
          ref: d,
          role: "alert",
          "aria-live": "assertive",
          backgroundColor: s.bg,
          borderRadius: B.XXLarge,
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
          children: /* @__PURE__ */ f($, { space: i.MediumLarge, alignBlock: "center", spread: "space-between", children: [
            /* @__PURE__ */ f($, { space: i.MediumLarge, alignBlock: "center", grow: "fill", children: [
              o && /* @__PURE__ */ e(S, { style: { color: s.accent, flexShrink: 0 }, children: o }),
              /* @__PURE__ */ e(I, { as: "span", size: w.XSmall, weight: T.Medium, color: p.Default, children: a })
            ] }),
            /* @__PURE__ */ e(
              Z,
              {
                label: "Dismiss",
                onClick: n,
                color: p.Subtle,
                padding: i.XXSmall,
                children: /* @__PURE__ */ e(kn, {})
              }
            )
          ] })
        }
      ),
      document.body
    );
  }
);
Xn.displayName = "Toast";
const Cn = L(
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
        return /* @__PURE__ */ f(ne.Fragment, { children: [
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
                  I,
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
Cn.displayName = "MobileNav";
const Mn = () => /* @__PURE__ */ e(
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
), Ln = L(
  ({ items: t, showLabels: n, variant: r = "dot" }, l) => {
    const o = P(n ?? !0), a = 32, d = t.filter((s) => s.status === "visited").length;
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
              background: u ? xe.Brand : "none",
              backgroundColor: u ? void 0 : h ? x.PrimaryContainer : x.NeutralBold,
              opacity: h ? 0.4 : 1,
              boxShadow: u ? "0 0 8px var(--bbui-color-primary), 0 0 20px var(--bbui-color-primary)" : "none",
              transition: "all 400ms ease",
              cursor: s.onClick ? "pointer" : "default"
            }, onClick: s.onClick }),
            o && /* @__PURE__ */ e(
              I,
              {
                as: "p",
                size: w.Micro,
                weight: u ? T.Bold : T.Medium,
                color: u ? p.Brand : h ? p.Subtle : p.Disabled,
                textTransform: "uppercase",
                letterSpacing: je.Widest,
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
            const h = c === t.length - 1, u = s.status === "visited", g = s.status === "current", b = s.status === "disabled", m = u ? xe.Brand : g ? "transparent" : x.NeutralBold, y = /* @__PURE__ */ e(
              "div",
              {
                style: {
                  width: a,
                  height: a,
                  borderRadius: B.Full,
                  background: u ? xe.Brand : m,
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
                children: u ? /* @__PURE__ */ e(Mn, {}) : c + 1
              }
            ), v = s.href ? /* @__PURE__ */ e("a", { href: s.href, style: { textDecoration: "none", color: "inherit" }, children: y }) : y;
            return /* @__PURE__ */ f(ne.Fragment, { children: [
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
                background: xe.Brand,
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
            return /* @__PURE__ */ f(ne.Fragment, { children: [
              /* @__PURE__ */ e("div", { style: {
                width: a,
                flexShrink: 0,
                display: "flex",
                justifyContent: "center"
              }, children: /* @__PURE__ */ e(
                I,
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
Ln.displayName = "ProgressTracker";
const Bn = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";
function In(t) {
  const n = /* @__PURE__ */ f($, { space: i.XSmall, alignBlock: "center", children: [
    /* @__PURE__ */ e(
      I,
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
function Dn(t) {
  return /* @__PURE__ */ e(
    Me,
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
const En = L(
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
      backgroundImage: `url("${Bn}")`,
      opacity: 0.03,
      pointerEvents: "none"
    }, y = /* @__PURE__ */ f(Y, { space: i.Medium, style: { flex: 1 }, children: [
      t && /* @__PURE__ */ e(S, { marginBlockEnd: i.Medium, children: t }),
      /* @__PURE__ */ e(
        I,
        {
          as: "h3",
          size: w.Large,
          weight: T.Bold,
          color: p.Default,
          children: n
        }
      ),
      r && /* @__PURE__ */ e(
        I,
        {
          size: w.XSmall,
          color: p.OnSurfaceVariant,
          children: r
        }
      ),
      l && In(l),
      u
    ] });
    return /* @__PURE__ */ f(S, { ref: g, padding: a, style: b, children: [
      /* @__PURE__ */ e("div", { style: m, "aria-hidden": "true" }),
      o ? /* @__PURE__ */ f($, { space: i.XXLarge, alignBlock: "center", children: [
        y,
        /* @__PURE__ */ e("div", { style: { flexShrink: 0 }, children: Dn(o) })
      ] }) : y
    ] });
  }
);
En.displayName = "GlassCard";
const zn = `
@keyframes bbui-pulse-down {
  0%, 100% { transform: translateY(0); opacity: 0.4 }
  50%      { transform: translateY(3px); opacity: 0.9 }
}
`, Fe = "36px", Tn = "18px", Rn = L(
  ({ items: t, onComplete: n, finishedLabel: r, maxHeight: l = "256px" }, o) => {
    const [a, d] = F(() => /* @__PURE__ */ new Set()), s = ee(!1), c = ee(null), h = ee([]), u = a.size >= t.length;
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
      /* @__PURE__ */ e("style", { children: zn }),
      /* @__PURE__ */ e("div", { ref: c, style: Nn(l, u), children: /* @__PURE__ */ e(Y, { space: i.MediumLarge, children: t.map((g, b) => {
        const m = a.has(b);
        return /* @__PURE__ */ f(
          "div",
          {
            ref: (y) => h.current[b] = y,
            "data-idx": b,
            style: Wn(m),
            children: [
              /* @__PURE__ */ e(An, { item: g }),
              b < t.length - 1 && /* @__PURE__ */ e("span", { "aria-hidden": "true", style: Pn(m) })
            ]
          },
          g.id ?? b
        );
      }) }) }),
      /* @__PURE__ */ e("div", { style: Yn, children: u ? r : /* @__PURE__ */ e($n, {}) })
    ] });
  }
);
Rn.displayName = "RevealSteps";
function An({ item: t }) {
  return /* @__PURE__ */ f("div", { style: Fn, children: [
    /* @__PURE__ */ e("span", { "aria-hidden": "true", style: On, children: t.icon }),
    /* @__PURE__ */ f("span", { style: Hn, children: [
      /* @__PURE__ */ e(I, { as: "span", size: w.Small, weight: T.Medium, children: t.label }),
      t.description && /* @__PURE__ */ e(I, { as: "span", size: w.XSmall, color: p.Subtle, children: t.description })
    ] }),
    t.meta && /* @__PURE__ */ e("span", { style: jn, children: t.meta })
  ] });
}
function $n() {
  return /* @__PURE__ */ e("div", { style: _n, "aria-hidden": "true", children: /* @__PURE__ */ e(
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
const Oe = "linear-gradient(to bottom, black 0%, black calc(100% - 32px), transparent 100%)", Nn = (t, n) => ({
  maxHeight: t,
  overflowY: "auto",
  scrollBehavior: "smooth",
  maskImage: n ? "none" : Oe,
  WebkitMaskImage: n ? "none" : Oe,
  paddingRight: i.XSmall
}), Wn = (t) => ({
  position: "relative",
  opacity: t ? 1 : 0.15,
  transform: t ? "translateY(0)" : "translateY(8px)",
  filter: t ? "blur(0)" : "blur(2px)",
  transition: "opacity 420ms ease-out, transform 420ms cubic-bezier(0.22, 1, 0.36, 1), filter 420ms ease-out"
}), Fn = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: i.MediumLarge,
  padding: i.MediumLarge,
  background: x.Subtle,
  borderRadius: B.Large,
  border: `1px solid ${z.Default}`,
  color: p.Default
}, On = {
  width: Fe,
  height: Fe,
  flexShrink: 0,
  borderRadius: B.Medium,
  background: x.Subtle,
  color: p.Default,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
}, Hn = {
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: i.XXSmall
}, jn = {
  flexShrink: 0,
  display: "inline-flex",
  alignItems: "center"
}, Pn = (t) => ({
  position: "absolute",
  left: `calc(${i.MediumLarge} + ${Tn} - 1px)`,
  top: "100%",
  height: i.MediumLarge,
  width: "2px",
  background: z.Default,
  opacity: t ? 1 : 0,
  transition: "opacity 300ms ease-out",
  pointerEvents: "none"
}), Yn = {
  marginTop: i.Large,
  display: "flex",
  justifyContent: "center",
  minHeight: "20px"
}, _n = {
  color: p.Subtle,
  animation: "bbui-pulse-down 1500ms ease-in-out infinite",
  display: "inline-flex"
}, Vn = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree"
], Kn = L(
  ({ value: t, onChange: n, labels: r = Vn }, l) => {
    const [o, a] = F(null);
    return /* @__PURE__ */ e("div", { ref: l, role: "radiogroup", style: Un, children: r.map((d, s) => {
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
          style: Gn(h, !h && o === c),
          children: d
        },
        c
      );
    }) });
  }
);
Kn.displayName = "LikertScale";
const Un = {
  display: "flex",
  flexDirection: "column",
  gap: i.Medium,
  width: "100%"
}, Gn = (t, n) => {
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
function pr(t) {
  const [n, r] = F(
    () => typeof window < "u" ? window.matchMedia(t).matches : !1
  );
  return _(() => {
    const l = window.matchMedia(t), o = (a) => r(a.matches);
    return l.addEventListener("change", o), r(l.matches), () => l.removeEventListener("change", o);
  }, [t]), n;
}
function Ie() {
  return typeof window > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function qn(t) {
  typeof document > "u" || (t === "system" ? document.documentElement.removeAttribute("data-theme") : document.documentElement.setAttribute("data-theme", t));
}
function hr() {
  const [t, n] = F(() => typeof localStorage > "u" ? "system" : localStorage.getItem("bbui-theme") ?? "system"), [r, l] = F(
    () => t === "system" ? Ie() : t
  ), o = G((a) => {
    n(a), typeof localStorage < "u" && (a === "system" ? localStorage.removeItem("bbui-theme") : localStorage.setItem("bbui-theme", a));
  }, []);
  return _(() => {
    qn(t), l(t === "system" ? Ie() : t);
  }, [t]), _(() => {
    if (t !== "system") return;
    const a = window.matchMedia("(prefers-color-scheme: dark)"), d = () => l(Ie());
    return a.addEventListener("change", d), () => a.removeEventListener("change", d);
  }, [t]), { theme: t, resolvedTheme: r, setTheme: o };
}
async function* Jn(t, n) {
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
async function* Zn(t, n = {}) {
  const r = await fetch(t, n);
  if (!r.ok) {
    const l = await r.text().catch(() => "");
    throw new Error(
      `SSE request failed ${r.status} ${r.statusText}: ${l}`
    );
  }
  yield* Jn(r, n.signal);
}
function br(t = {}) {
  const { onEvent: n, onComplete: r, onError: l, retain: o = !0 } = t, [a, d] = F([]), [s, c] = F(null), [h, u] = F(!1), [g, b] = F(null), m = ee(null), y = ee(!0), v = ee(n), X = ee(r), C = ee(l);
  _(() => {
    v.current = n, X.current = r, C.current = l;
  }), _(() => (y.current = !0, () => {
    var A;
    y.current = !1, (A = m.current) == null || A.abort();
  }), []);
  const H = G(() => {
    var A;
    (A = m.current) == null || A.abort(), m.current = null;
  }, []), M = G(() => {
    d([]), c(null), b(null);
  }, []), R = G(
    async (A, O = {}) => {
      var k, D, W, V;
      (k = m.current) == null || k.abort();
      const N = new AbortController();
      m.current = N, y.current && (d([]), c(null), b(null), u(!0));
      try {
        for await (const j of Zn(A, {
          ...O,
          signal: N.signal
        })) {
          if (!y.current) return;
          o && d((K) => [...K, j]), c(j), (D = v.current) == null || D.call(v, j);
        }
        y.current && ((W = X.current) == null || W.call(X));
      } catch (j) {
        if (N.signal.aborted) return;
        const K = j instanceof Error ? j : new Error(String(j));
        y.current && (b(K), (V = C.current) == null || V.call(C, K));
      } finally {
        y.current && m.current === N && (u(!1), m.current = null);
      }
    },
    [o]
  );
  return { events: a, lastEvent: s, isStreaming: h, error: g, start: R, abort: H, reset: M };
}
export {
  ir as AccentColor,
  be as Anchor,
  rn as Aside,
  wt as Avatar,
  x as BackgroundColor,
  Pe as Badge,
  Pt as Banner,
  ae as BloomColor,
  Q as BloomLevel,
  z as BorderColor,
  B as BorderRadius,
  lr as BorderWidth,
  S as Box,
  Ee as Breakpoint,
  ie as Button,
  pn as Calendar,
  Ft as Card,
  It as Checkbox,
  st as Chip,
  or as ContainerWidth,
  cr as DirectionColor,
  Dt as Divider,
  qt as Drawer,
  vn as DropdownCheckboxMenu,
  Jt as DropdownMenu,
  ue as Elevation,
  hn as EmptyState,
  dr as EvaluationResultColor,
  nt as FontFamily,
  w as FontSize,
  T as FontWeight,
  En as GlassCard,
  xe as Gradient,
  He as Grid,
  _t as Header,
  Wt as HeroSection,
  rr as Hide,
  tt as Icon,
  Z as IconButton,
  ar as IconSize,
  Me as Image,
  $ as Inline,
  yn as InlineEdit,
  ln as Layout,
  je as LetterSpacing,
  Kn as LikertScale,
  mt as LinkButton,
  pt as LiquidGlass,
  Ve as Menu,
  Cn as MobileNav,
  Ut as Modal,
  Vt as ModalSize,
  Nt as Navbar,
  nn as Panel,
  ur as PersonaAccent,
  Ln as ProgressTracker,
  Rn as RevealSteps,
  _e as Select,
  Sn as SelectField,
  nr as Show,
  en as Sidebar,
  i as Spacing,
  Ye as Spinner,
  Y as Stack,
  Tt as Stepper,
  gn as Table,
  Yt as Tabs,
  I as Text,
  Ct as TextArea,
  p as TextColor,
  Ot as TextField,
  De as TextInput,
  Xn as Toast,
  gt as Toggle,
  se as ZIndex,
  rt as bloomColorFor,
  lt as bloomLevelForScore,
  Jn as parseSSEStream,
  sr as scoreColor,
  Zn as streamSSE,
  Ce as useBreakpoint,
  pr as useMediaQuery,
  P as useResponsiveValue,
  br as useSSEStream,
  hr as useTheme
};
