import React, { forwardRef } from "react";
import type {
  SpaceToken,
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
  maxWidth?: ContainerWidthToken;
  /**
   * Override CSS min-width. Pass 0 to let this Box shrink below its content
   * size inside a flex parent — the canonical fix for "ancestor doesn't allow
   * my truncating child to ellipsize". Default behaviour is auto.
   */
  minWidth?: 0 | "auto";

  // ── Layout (display + flexbox) ────────────────────────────────────
  display?: Responsive<DisplayToken>;
  alignItems?: Responsive<AlignItemsToken>;
  justifyContent?: Responsive<JustifyContentToken>;
  alignSelf?: AlignSelfToken;
  flexDirection?: Responsive<FlexDirectionToken>;
  flexWrap?: FlexWrapToken;
  /** flex shorthand: number, "auto", or "none". */
  flex?: number | "auto" | "none";
  flexGrow?: number;
  flexShrink?: number;
  /** Gap between flex/grid children. */
  gap?: SpaceToken;

  // ── Position ──────────────────────────────────────────────────────
  position?: PositionToken;
  inset?: 0 | string;
  zIndex?: number;

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
      maxWidth,
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
      zIndex,
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
      ...(maxWidth && { maxWidth, marginInline: "auto" }),
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
      ...(zIndex !== undefined && { zIndex }),
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
