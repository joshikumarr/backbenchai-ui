import d, { forwardRef as i, Fragment as $ } from "react";
import { jsxs as A, jsx as N } from "react/jsx-runtime";
const G = i(
  ({
    as: t = "div",
    padding: e,
    paddingBlock: r,
    paddingBlockStart: s,
    paddingBlockEnd: m,
    paddingInline: n,
    paddingInlineStart: o,
    paddingInlineEnd: l,
    marginBlock: u,
    marginBlockStart: f,
    marginBlockEnd: a,
    backgroundColor: c,
    borderRadius: y,
    borderColor: x,
    borderSide: X,
    overflow: p,
    elevation: h,
    maxWidth: b,
    style: v,
    children: L,
    ...M
  }, j) => {
    const S = x ? `1px solid ${x}` : void 0, T = {
      ...e && { padding: e },
      ...r && { paddingBlock: r },
      ...s && { paddingBlockStart: s },
      ...m && { paddingBlockEnd: m },
      ...n && { paddingInline: n },
      ...o && { paddingInlineStart: o },
      ...l && { paddingInlineEnd: l },
      ...u && { marginBlock: u },
      ...f && { marginBlockStart: f },
      ...a && { marginBlockEnd: a },
      ...c && { backgroundColor: c },
      ...y && { borderRadius: y },
      ...S && X === "top" && { borderTop: S },
      ...S && X === "all" && { border: S },
      ...p && { overflow: p },
      ...h && { boxShadow: h },
      ...b && { maxWidth: b, marginInline: "auto" },
      ...v
    };
    return d.createElement(
      t,
      { ...M, ref: j, style: T },
      L
    );
  }
);
G.displayName = "Box";
const D = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch"
}, W = i(
  ({
    as: t = "div",
    space: e,
    alignInline: r,
    alignBlock: s,
    spread: m,
    grow: n = "hug",
    marginBlockStart: o,
    marginBlockEnd: l,
    style: u,
    children: f,
    ...a
  }, c) => {
    const y = {
      display: "flex",
      flexDirection: "column",
      ...e && { gap: e },
      ...r && { alignItems: D[r] },
      ...s && !m && { justifyContent: D[s] },
      ...m && { justifyContent: m },
      ...n === "fill" && { flex: "1 1 auto" },
      ...o && { marginBlockStart: o },
      ...l && { marginBlockEnd: l },
      ...u
    };
    return d.createElement(
      t,
      { ...a, ref: c, style: y },
      f
    );
  }
);
W.displayName = "Stack";
const C = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
  baseline: "baseline"
}, z = i(
  ({
    as: t = "div",
    space: e,
    rowSpace: r,
    alignBlock: s,
    alignInline: m,
    spread: n,
    shouldWrap: o,
    separator: l,
    grow: u = "hug",
    marginBlockStart: f,
    marginBlockEnd: a,
    borderRadius: c,
    overflow: y,
    elevation: x,
    style: X,
    children: p,
    ...h
  }, b) => {
    const v = {
      display: "flex",
      flexDirection: "row",
      ...e && { columnGap: e },
      ...r ? { rowGap: r } : e ? { rowGap: e } : {},
      ...s && { alignItems: C[s] },
      ...m && !n && { justifyContent: C[m] },
      ...n && { justifyContent: n },
      ...o && { flexWrap: "wrap" },
      ...u === "fill" && { flex: "1 1 auto" },
      ...f && { marginBlockStart: f },
      ...a && { marginBlockEnd: a },
      ...c && { borderRadius: c },
      ...y && { overflow: y },
      ...x && { boxShadow: x },
      ...X
    };
    let L = p;
    if (l) {
      const M = d.Children.toArray(p).filter(Boolean);
      L = M.map((j, S) => /* @__PURE__ */ A($, { children: [
        j,
        S < M.length - 1 && /* @__PURE__ */ N("span", { "aria-hidden": "true", children: l })
      ] }, S));
    }
    return d.createElement(
      t,
      { ...h, ref: b, style: v },
      L
    );
  }
);
z.displayName = "Inline";
const F = i(
  ({
    as: t = "span",
    size: e,
    weight: r,
    color: s,
    align: m,
    textTransform: n,
    lineHeight: o,
    opacity: l,
    style: u,
    children: f,
    ...a
  }, c) => {
    const y = {
      ...e && { fontSize: e },
      ...r && { fontWeight: r },
      ...s && { color: s },
      ...m && { textAlign: m },
      ...n && { textTransform: n },
      ...o !== void 0 && { lineHeight: o },
      ...l !== void 0 && { opacity: l },
      ...u
    };
    return d.createElement(
      t,
      { ...a, ref: c, style: y },
      f
    );
  }
);
F.displayName = "Text";
function H(t) {
  if (t !== void 0)
    return typeof t == "number" ? `repeat(${t}, 1fr)` : t.map((e) => `${e}fr`).join(" ");
}
const I = i(
  ({
    as: t = "div",
    columns: e,
    gap: r,
    rowGap: s,
    marginBlockStart: m,
    marginBlockEnd: n,
    borderRadius: o,
    overflow: l,
    elevation: u,
    style: f,
    children: a,
    ...c
  }, y) => {
    const x = {
      display: "grid",
      ...e !== void 0 && {
        gridTemplateColumns: H(e)
      },
      ...r && { gap: r },
      ...s && { rowGap: s },
      ...m && { marginBlockStart: m },
      ...n && { marginBlockEnd: n },
      ...o && { borderRadius: o },
      ...l && { overflow: l },
      ...u && { boxShadow: u },
      ...f
    };
    return d.createElement(
      t,
      { ...c, ref: y, style: x },
      a
    );
  }
);
I.displayName = "Grid";
const w = i(
  ({
    color: t,
    weight: e,
    size: r,
    backgroundColor: s,
    padding: m,
    paddingBlock: n,
    paddingBlockStart: o,
    paddingInline: l,
    borderRadius: u,
    textTransform: f,
    display: a,
    alignSelf: c,
    style: y,
    children: x,
    ...X
  }, p) => {
    const h = {
      ...t && { color: t },
      ...e && { fontWeight: e },
      ...r && { fontSize: r },
      ...s && { backgroundColor: s },
      ...m && { padding: m },
      ...n && { paddingBlock: n },
      ...o && { paddingBlockStart: o },
      ...l && { paddingInline: l },
      ...u && { borderRadius: u },
      ...f && { textTransform: f },
      ...a && { display: a },
      ...c && { alignSelf: c },
      ...y
    };
    return /* @__PURE__ */ N("a", { ref: p, style: h, ...X, children: x });
  }
);
w.displayName = "Anchor";
const V = i(
  ({ borderRadius: t, objectFit: e, width: r, height: s, fill: m, style: n, ...o }, l) => {
    const u = {
      display: "block",
      ...m ? { width: "100%", height: "100%" } : {
        ...r ? { width: r, flexShrink: 0 } : { width: "100%" },
        ...s && { height: s }
      },
      ...t && { borderRadius: t },
      ...e && { objectFit: e },
      ...n
    };
    return /* @__PURE__ */ N("img", { ref: l, style: u, ...o });
  }
);
V.displayName = "Image";
const g = i(
  ({
    backgroundColor: t,
    color: e,
    padding: r,
    paddingBlock: s,
    paddingInline: m,
    borderRadius: n,
    style: o,
    children: l,
    ...u
  }, f) => {
    const a = {
      border: "none",
      cursor: "pointer",
      ...t && { backgroundColor: t },
      ...e && { color: e },
      ...r && { padding: r },
      ...s && { paddingBlock: s },
      ...m && { paddingInline: m },
      ...n && { borderRadius: n },
      ...o
    };
    return /* @__PURE__ */ N("button", { ref: f, style: a, ...u, children: l });
  }
);
g.displayName = "Button";
const q = i(
  ({
    backgroundColor: t,
    borderColor: e,
    borderRadius: r,
    padding: s,
    paddingBlock: m,
    paddingInline: n,
    style: o,
    ...l
  }, u) => {
    const f = {
      ...t && { backgroundColor: t },
      ...e && { border: `1px solid ${e}` },
      ...r && { borderRadius: r },
      ...s && { padding: s },
      ...m && { paddingBlock: m },
      ...n && { paddingInline: n },
      ...o
    };
    return /* @__PURE__ */ N("input", { ref: u, style: f, ...l });
  }
);
q.displayName = "TextInput";
const K = {
  /** 0px */
  None: "0",
  /** 2px */
  XXSmall: "0.125rem",
  /** 4px */
  XSmall: "0.25rem",
  /** 6px */
  Small: "0.375rem",
  /** 8px — base unit */
  Medium: "0.5rem",
  /** 12px */
  MediumLarge: "0.75rem",
  /** 16px */
  Large: "1rem",
  /** 20px */
  XLarge: "1.25rem",
  /** 24px */
  XXLarge: "1.5rem",
  /** 32px */
  XXXLarge: "2rem",
  /** 40px */
  Huge: "2.5rem",
  /** 48px */
  XHuge: "3rem",
  /** 64px */
  XXHuge: "4rem",
  /** 80px */
  XXXHuge: "5rem",
  /** 128px */
  Size8: "8rem",
  /** 256px */
  Size16: "16rem"
}, O = {
  Default: "#1f2937",
  Subtle: "#374151",
  Subtlest: "#4b5563",
  Disabled: "#6b7280",
  Inverse: "#ffffff",
  Brand: "#15803d",
  Selected: "#166534",
  Success: "#14532d"
}, P = {
  Default: "#ffffff",
  Subtle: "#f3f4f6",
  Neutral: "#e5e7eb",
  Brand: "#15803d",
  BrandBold: "#166534",
  Success: "#bbf7d0"
}, Q = {
  XXSmall: "0.75rem",
  XSmall: "0.875rem",
  Small: "1rem",
  Medium: "1.125rem",
  Large: "1.25rem",
  XLarge: "1.5rem",
  XXLarge: "1.875rem",
  XXXLarge: "2.25rem"
}, U = {
  Regular: 400,
  Medium: 500,
  Semibold: 600,
  Bold: 700
}, Y = {
  None: "0",
  Small: "0.25rem",
  Medium: "0.375rem",
  Large: "0.5rem",
  Full: "9999px"
}, Z = {
  Default: "#e5e7eb",
  Input: "#d1d5db"
}, _ = {
  None: "none",
  Raised: "0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.06)"
}, R = {
  Small: "640px",
  Medium: "768px",
  Large: "1024px",
  XLarge: "1280px"
};
export {
  w as Anchor,
  P as BackgroundColor,
  Z as BorderColor,
  Y as BorderRadius,
  G as Box,
  g as Button,
  R as ContainerWidth,
  _ as Elevation,
  Q as FontSize,
  U as FontWeight,
  I as Grid,
  V as Image,
  z as Inline,
  K as Spacing,
  W as Stack,
  F as Text,
  O as TextColor,
  q as TextInput
};
