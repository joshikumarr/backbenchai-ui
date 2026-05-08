import React, { forwardRef } from "react";
import type {
  SpaceToken,
  BackgroundColorToken,
  BorderRadiusToken,
  BorderColorToken,
  BorderWidthToken,
  ElevationToken,
  ContainerWidthToken,
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
 * Padding and margin props on Box accept either a single SpaceToken (applied
 * at every breakpoint) or a Responsive<SpaceToken> object that varies the
 * value across mobile / tablet / desktop:
 *
 * ```tsx
 * <Box padding={Spacing.Large} />                           // always Large
 * <Box padding={{ mobile: Spacing.Medium, desktop: Spacing.XLarge }} />
 * ```
 *
 * Resolution happens at render via useResponsiveValue, which subscribes to
 * window.resize. SSR-safe (defaults to "desktop" when window is undefined).
 */
export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: AllowedElements;
  padding?: Responsive<SpaceToken>;
  paddingBlock?: Responsive<SpaceToken>;
  paddingBlockStart?: Responsive<SpaceToken>;
  paddingBlockEnd?: Responsive<SpaceToken>;
  paddingInline?: Responsive<SpaceToken>;
  paddingInlineStart?: Responsive<SpaceToken>;
  paddingInlineEnd?: Responsive<SpaceToken>;
  marginBlock?: Responsive<SpaceToken>;
  marginBlockStart?: Responsive<SpaceToken>;
  marginBlockEnd?: Responsive<SpaceToken>;
  backgroundColor?: BackgroundColorToken;
  borderRadius?: BorderRadiusToken;
  borderColor?: BorderColorToken;
  borderSide?: "top" | "bottom" | "left" | "right" | "all";
  borderWidth?: BorderWidthToken;
  overflow?: "hidden" | "auto" | "scroll" | "visible";
  elevation?: ElevationToken;
  maxWidth?: ContainerWidthToken;
  children?: React.ReactNode;
}

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
      marginBlock,
      marginBlockStart,
      marginBlockEnd,
      backgroundColor,
      borderRadius,
      borderColor,
      borderSide,
      borderWidth = "1px",
      overflow,
      elevation,
      maxWidth,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    // Resolve every responsive prop against the current breakpoint. Returns
    // the literal value when a non-responsive token is passed, so single-value
    // callers pay zero ergonomic cost.
    const resolvedPadding = useResponsiveValue(padding);
    const resolvedPaddingBlock = useResponsiveValue(paddingBlock);
    const resolvedPaddingBlockStart = useResponsiveValue(paddingBlockStart);
    const resolvedPaddingBlockEnd = useResponsiveValue(paddingBlockEnd);
    const resolvedPaddingInline = useResponsiveValue(paddingInline);
    const resolvedPaddingInlineStart = useResponsiveValue(paddingInlineStart);
    const resolvedPaddingInlineEnd = useResponsiveValue(paddingInlineEnd);
    const resolvedMarginBlock = useResponsiveValue(marginBlock);
    const resolvedMarginBlockStart = useResponsiveValue(marginBlockStart);
    const resolvedMarginBlockEnd = useResponsiveValue(marginBlockEnd);

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
      ...(resolvedMarginBlock && { marginBlock: resolvedMarginBlock }),
      ...(resolvedMarginBlockStart && { marginBlockStart: resolvedMarginBlockStart }),
      ...(resolvedMarginBlockEnd && { marginBlockEnd: resolvedMarginBlockEnd }),
      ...(backgroundColor && { backgroundColor }),
      ...(borderRadius && { borderRadius }),
      ...borderStyles,
      ...(overflow && { overflow }),
      ...(elevation && { boxShadow: elevation }),
      ...(maxWidth && { maxWidth, marginInline: "auto" }),
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
