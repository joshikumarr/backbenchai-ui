import React, { forwardRef } from "react";
import type {
  SpaceToken,
  TextColorToken,
  BackgroundColorToken,
  BorderRadiusToken,
  BorderColorToken,
  BorderWidthToken,
  ElevationToken,
  ContainerWidthToken,
  DisplayToken,
  AlignItemsToken,
  JustifyContentToken,
  AlignSelfToken,
  FlexDirectionToken,
  FlexWrapToken,
  PositionToken,
  CursorToken,
  WhiteSpaceToken,
} from "../tokens";
import { useResponsiveValue, type Responsive } from "../hooks/useResponsive";

type AllowedElements =
  | "div"
  | "span"
  | "section"
  | "header"
  | "footer"
  | "nav"
  | "main"
  | "article"
  | "aside"
  | "ul"
  | "ol"
  | "li";

/**
 * Spacing values follow CSS shorthand:
 *   `Spacing.Medium`                         → all sides
 *   `[v, h]`                                 → vertical, horizontal
 *   `[t, h, b]`                              → top, horizontal, bottom
 *   `[t, r, b, l]`                           → top, right, bottom, left
 *
 * Each entry is a token; arrays are joined into a CSS shorthand string. The
 * single-axis props (`paddingBlock`, `paddingInline`, `marginBlock`,
 * `marginInline`) accept 1–2 tokens (`[start, end]`); the per-edge props
 * (`paddingBlockStart`, etc.) accept a single token only.
 *
 * Any of these may also be wrapped in a `Responsive` object to vary by
 * breakpoint:
 *   `padding={{ mobile: Spacing.Medium, desktop: [Spacing.Large, Spacing.XLarge] }}`
 */
type ShorthandSpace = SpaceToken | readonly SpaceToken[];

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: AllowedElements;
  padding?: Responsive<ShorthandSpace>;
  paddingBlock?: Responsive<ShorthandSpace>;
  paddingBlockStart?: Responsive<SpaceToken>;
  paddingBlockEnd?: Responsive<SpaceToken>;
  paddingInline?: Responsive<ShorthandSpace>;
  paddingInlineStart?: Responsive<SpaceToken>;
  paddingInlineEnd?: Responsive<SpaceToken>;
  margin?: Responsive<ShorthandSpace>;
  marginBlock?: Responsive<ShorthandSpace>;
  marginBlockStart?: Responsive<SpaceToken>;
  marginBlockEnd?: Responsive<SpaceToken>;
  marginInline?: Responsive<ShorthandSpace>;
  marginInlineStart?: Responsive<SpaceToken>;
  marginInlineEnd?: Responsive<SpaceToken>;
  backgroundColor?: BackgroundColorToken;
  borderRadius?: BorderRadiusToken;
  borderColor?: BorderColorToken;
  borderSide?: "top" | "bottom" | "left" | "right" | "all";
  borderWidth?: BorderWidthToken;
  overflow?: "hidden" | "auto" | "scroll" | "visible";
  elevation?: ElevationToken;

  // ── Sizing ────────────────────────────────────────────────────────
  /** CSS width — accepts ContainerWidth token or raw "100%" / "640px". */
  width?: ContainerWidthToken | string | number;
  /** CSS max-width — accepts ContainerWidth token or raw string. Auto-applies marginInline:auto when set as a ContainerWidth token. */
  maxWidth?: ContainerWidthToken | string;
  /** CSS height. */
  height?: string | number;
  /** CSS min-height. */
  minHeight?: string | number;
  /** CSS max-height. */
  maxHeight?: string | number;
  /**
   * CSS min-width. `0` is the canonical flex-shrink fix (lets this Box
   * shrink below its content size inside a flex parent).
   */
  minWidth?: 0 | "auto" | string | number;

  // ── Layout (display + flexbox) ────────────────────────────────────
  display?: Responsive<DisplayToken>;
  alignItems?: Responsive<AlignItemsToken>;
  justifyContent?: Responsive<JustifyContentToken>;
  alignSelf?: AlignSelfToken;
  flexDirection?: Responsive<FlexDirectionToken>;
  flexWrap?: FlexWrapToken;
  /** flex shorthand: number, "auto", or "none". */
  flex?: number | "auto" | "none" | string;
  flexGrow?: number;
  flexShrink?: number;
  /** Gap between flex/grid children. */
  gap?: SpaceToken;

  // ── Position ──────────────────────────────────────────────────────
  position?: PositionToken;
  inset?: 0 | string;
  /** CSS top — pass a number for px, a string for any other unit. */
  top?: number | string;
  right?: number | string;
  bottom?: number | string;
  left?: number | string;
  zIndex?: number;

  // ── Visual ────────────────────────────────────────────────────────
  /** CSS color (inherited by SVG icon children). */
  color?: TextColorToken | string;
  /** Opacity 0–1. */
  opacity?: number;
  /** Cursor style. */
  cursor?: CursorToken;
  /** white-space behavior. */
  whiteSpace?: WhiteSpaceToken;
  /** pointer-events — useful for non-interactive overlays. */
  pointerEvents?: "auto" | "none";
  /**
   * CSS `background` shorthand. Use for gradients, color-mix, or images.
   * For solid theme colors, prefer `backgroundColor` (token-typed).
   */
  background?: string;
  /** CSS `border` shorthand. For token-driven borders prefer `borderColor` + `borderSide`. */
  border?: string;
  /** CSS `box-shadow`. For tokenized shadows prefer `elevation`. */
  boxShadow?: string;
  /** CSS `transition` shorthand. */
  transition?: string;
  /** CSS `transform`. */
  transform?: string;
  /** CSS `aspect-ratio`. */
  aspectRatio?: string | number;
  /** CSS `filter` (e.g., `blur(8px)`). */
  filter?: string;
  /** CSS `backdrop-filter` (frosted-glass effects). */
  backdropFilter?: string;

  children?: React.ReactNode;
}

const toCss = (value: ShorthandSpace | undefined): string | undefined => {
  if (value === undefined) return undefined;
  return Array.isArray(value) ? value.join(" ") : (value as string);
};

export const Box = forwardRef<HTMLElement, BoxProps>(
  (
    {
      as: Component = "div",
      padding,
      paddingBlock,
      paddingBlockStart,
      paddingBlockEnd,
      paddingInline,
      paddingInlineStart,
      paddingInlineEnd,
      margin,
      marginBlock,
      marginBlockStart,
      marginBlockEnd,
      marginInline,
      marginInlineStart,
      marginInlineEnd,
      backgroundColor,
      borderRadius,
      borderColor,
      borderSide,
      borderWidth = "1px",
      overflow,
      elevation,
      width,
      maxWidth,
      height,
      minHeight,
      maxHeight,
      minWidth,
      display,
      alignItems,
      justifyContent,
      alignSelf,
      flexDirection,
      flexWrap,
      flex,
      flexGrow,
      flexShrink,
      gap,
      position,
      inset,
      top,
      right,
      bottom,
      left,
      zIndex,
      color,
      opacity,
      cursor,
      whiteSpace,
      pointerEvents,
      background,
      border,
      boxShadow,
      transition,
      transform,
      aspectRatio,
      filter,
      backdropFilter,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const resolvedPadding = toCss(useResponsiveValue(padding));
    const resolvedPaddingBlock = toCss(useResponsiveValue(paddingBlock));
    const resolvedPaddingBlockStart = useResponsiveValue(paddingBlockStart);
    const resolvedPaddingBlockEnd = useResponsiveValue(paddingBlockEnd);
    const resolvedPaddingInline = toCss(useResponsiveValue(paddingInline));
    const resolvedPaddingInlineStart = useResponsiveValue(paddingInlineStart);
    const resolvedPaddingInlineEnd = useResponsiveValue(paddingInlineEnd);
    const resolvedMargin = toCss(useResponsiveValue(margin));
    const resolvedMarginBlock = toCss(useResponsiveValue(marginBlock));
    const resolvedMarginBlockStart = useResponsiveValue(marginBlockStart);
    const resolvedMarginBlockEnd = useResponsiveValue(marginBlockEnd);
    const resolvedMarginInline = toCss(useResponsiveValue(marginInline));
    const resolvedMarginInlineStart = useResponsiveValue(marginInlineStart);
    const resolvedMarginInlineEnd = useResponsiveValue(marginInlineEnd);
    const resolvedDisplay = useResponsiveValue(display);
    const resolvedAlignItems = useResponsiveValue(alignItems);
    const resolvedJustifyContent = useResponsiveValue(justifyContent);
    const resolvedFlexDirection = useResponsiveValue(flexDirection);

    const borderValue = borderColor
      ? `${borderWidth} solid ${borderColor}`
      : undefined;

    const borderStyles: React.CSSProperties = {};
    if (borderValue && borderSide) {
      switch (borderSide) {
        case "top":
          borderStyles.borderTop = borderValue;
          break;
        case "bottom":
          borderStyles.borderBottom = borderValue;
          break;
        case "left":
          borderStyles.borderLeft = borderValue;
          break;
        case "right":
          borderStyles.borderRight = borderValue;
          break;
        case "all":
          borderStyles.border = borderValue;
          break;
      }
    }

    const computedStyle: React.CSSProperties = {
      ...(resolvedPadding && { padding: resolvedPadding }),
      ...(resolvedPaddingBlock && { paddingBlock: resolvedPaddingBlock }),
      ...(resolvedPaddingBlockStart && { paddingBlockStart: resolvedPaddingBlockStart }),
      ...(resolvedPaddingBlockEnd && { paddingBlockEnd: resolvedPaddingBlockEnd }),
      ...(resolvedPaddingInline && { paddingInline: resolvedPaddingInline }),
      ...(resolvedPaddingInlineStart && { paddingInlineStart: resolvedPaddingInlineStart }),
      ...(resolvedPaddingInlineEnd && { paddingInlineEnd: resolvedPaddingInlineEnd }),
      ...(resolvedMargin && { margin: resolvedMargin }),
      ...(resolvedMarginBlock && { marginBlock: resolvedMarginBlock }),
      ...(resolvedMarginBlockStart && { marginBlockStart: resolvedMarginBlockStart }),
      ...(resolvedMarginBlockEnd && { marginBlockEnd: resolvedMarginBlockEnd }),
      ...(resolvedMarginInline && { marginInline: resolvedMarginInline }),
      ...(resolvedMarginInlineStart && { marginInlineStart: resolvedMarginInlineStart }),
      ...(resolvedMarginInlineEnd && { marginInlineEnd: resolvedMarginInlineEnd }),
      ...(backgroundColor && { backgroundColor }),
      ...(borderRadius && { borderRadius }),
      ...borderStyles,
      ...(overflow && { overflow }),
      ...(elevation && { boxShadow: elevation }),
      ...(width !== undefined && { width }),
      ...(maxWidth && { maxWidth, marginInline: "auto" }),
      ...(height !== undefined && { height }),
      ...(minHeight !== undefined && { minHeight }),
      ...(maxHeight !== undefined && { maxHeight }),
      ...(minWidth !== undefined && { minWidth }),
      ...(resolvedDisplay && { display: resolvedDisplay }),
      ...(resolvedAlignItems && { alignItems: resolvedAlignItems }),
      ...(resolvedJustifyContent && { justifyContent: resolvedJustifyContent }),
      ...(alignSelf && { alignSelf }),
      ...(resolvedFlexDirection && { flexDirection: resolvedFlexDirection }),
      ...(flexWrap && { flexWrap }),
      ...(flex !== undefined && { flex }),
      ...(flexGrow !== undefined && { flexGrow }),
      ...(flexShrink !== undefined && { flexShrink }),
      ...(gap && { gap }),
      ...(position && { position }),
      ...(inset !== undefined && { inset }),
      ...(top !== undefined && { top }),
      ...(right !== undefined && { right }),
      ...(bottom !== undefined && { bottom }),
      ...(left !== undefined && { left }),
      ...(zIndex !== undefined && { zIndex }),
      ...(color && { color }),
      ...(opacity !== undefined && { opacity }),
      ...(cursor && { cursor }),
      ...(whiteSpace && { whiteSpace }),
      ...(pointerEvents && { pointerEvents }),
      ...(background && { background }),
      ...(border && { border }),
      ...(boxShadow && { boxShadow }),
      ...(transition && { transition }),
      ...(transform && { transform }),
      ...(aspectRatio !== undefined && { aspectRatio }),
      ...(filter && { filter }),
      ...(backdropFilter && { backdropFilter }),
      ...style,
    };

    return React.createElement(
      Component,
      { ...rest, ref, style: computedStyle },
      children
    );
  }
);

Box.displayName = "Box";
