import React, { forwardRef } from "react";
import type {
  SpaceToken,
  TextColorToken,
  BackgroundColorToken,
  BorderRadiusToken,
  BorderColorToken,
  BorderWidthToken,
  GradientToken,
  FontFamilyToken,
  FontSizeToken,
  FontWeightToken,
  LetterSpacingToken,
  TextTransformToken,
} from "../tokens";

type ShorthandSpace = SpaceToken | readonly SpaceToken[];

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Default background. */
  backgroundColor?: BackgroundColorToken;
  /** Background on hover. Falls back to backgroundColor. */
  hover?: BackgroundColorToken;
  /** Background on press/active. Falls back to hover, then backgroundColor. */
  pressed?: BackgroundColorToken;
  /** CSS gradient — overrides backgroundColor when set. */
  gradient?: GradientToken;

  /** Default text color. */
  color?: TextColorToken;
  /** Text color on hover. Falls back to color. */
  colorHover?: TextColorToken;
  /** Text color on press. Falls back to colorHover, then color. */
  colorPressed?: TextColorToken;

  /** Border color. */
  borderColor?: BorderColorToken;
  /** Border color on hover. */
  borderColorHover?: BorderColorToken;
  /** Border color on press. */
  borderColorPressed?: BorderColorToken;
  /** Border width (default: 1px if borderColor set, else none). */
  borderWidth?: BorderWidthToken;
  /** Which sides to apply the border to. Defaults to "all" when borderColor is set. */
  borderSide?: "top" | "bottom" | "left" | "right" | "all";

  /** Typography. */
  size?: FontSizeToken;
  weight?: FontWeightToken;
  letterSpacing?: LetterSpacingToken;
  textTransform?: TextTransformToken;
  fontFamily?: FontFamilyToken;

  /** Gap between iconStart, label, iconEnd. */
  gap?: SpaceToken;

  /**
   * Spacing — accepts shorthand arrays (`[v, h]`, `[t, h, b]`, `[t, r, b, l]`)
   * matching Box.padding semantics.
   */
  padding?: ShorthandSpace;
  paddingBlock?: ShorthandSpace;
  paddingInline?: ShorthandSpace;
  borderRadius?: BorderRadiusToken;

  /** Fixed width — pass "100%" for full-width menu-item buttons. */
  width?: string | number;
  /** Horizontal alignment of contents. Defaults to "center" (pill button); use "start" for menu items. */
  align?: "start" | "center" | "end";

  /** Text content shorthand (alternative to children). */
  label?: string;
  /** Icon before the label. */
  iconStart?: React.ReactNode;
  /** Icon after the label. */
  iconEnd?: React.ReactNode;

  children?: React.ReactNode;
}

const toCss = (v: ShorthandSpace | undefined): string | undefined => {
  if (v === undefined) return undefined;
  return Array.isArray(v) ? v.join(" ") : (v as string);
};

const ALIGN_MAP = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
} as const;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      backgroundColor,
      hover,
      pressed,
      gradient,
      color,
      colorHover,
      colorPressed,
      borderColor,
      borderColorHover,
      borderColorPressed,
      borderWidth = "1px",
      borderSide = "all",
      size,
      weight,
      letterSpacing,
      textTransform,
      fontFamily,
      gap,
      padding,
      paddingBlock,
      paddingInline,
      borderRadius,
      width,
      align = "center",
      label,
      iconStart,
      iconEnd,
      className,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const cssVars: Record<string, string> = {};
    if (backgroundColor) cssVars["--bbui-btn-bg"] = backgroundColor;
    if (hover) cssVars["--bbui-btn-bg-hover"] = hover;
    if (pressed) cssVars["--bbui-btn-bg-pressed"] = pressed;
    if (color) cssVars["--bbui-btn-color"] = color;
    if (colorHover) cssVars["--bbui-btn-color-hover"] = colorHover;
    if (colorPressed) cssVars["--bbui-btn-color-pressed"] = colorPressed;
    if (borderColor) cssVars["--bbui-btn-border"] = borderColor;
    if (borderColorHover) cssVars["--bbui-btn-border-hover"] = borderColorHover;
    if (borderColorPressed) cssVars["--bbui-btn-border-pressed"] = borderColorPressed;

    const borderValue = borderColor
      ? `${borderWidth} solid var(--bbui-btn-border)`
      : undefined;
    const borderStyles: React.CSSProperties = {};
    if (borderValue) {
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
    } else {
      borderStyles.border = "none";
    }

    const resolvedPadding = toCss(padding);
    const resolvedPaddingBlock = toCss(paddingBlock);
    const resolvedPaddingInline = toCss(paddingInline);

    const computedStyle: React.CSSProperties = {
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: ALIGN_MAP[align],
      ...borderStyles,
      ...(width !== undefined && { width }),
      ...(gradient && { background: gradient }),
      ...(size && { fontSize: size }),
      ...(weight && { fontWeight: weight }),
      ...(letterSpacing && { letterSpacing }),
      ...(textTransform && { textTransform }),
      ...(fontFamily && { fontFamily }),
      ...(gap && { gap }),
      ...(resolvedPadding && { padding: resolvedPadding }),
      ...(resolvedPaddingBlock && { paddingBlock: resolvedPaddingBlock }),
      ...(resolvedPaddingInline && { paddingInline: resolvedPaddingInline }),
      ...(borderRadius && { borderRadius }),
      ...(cssVars as React.CSSProperties),
      ...style,
    };

    const cls = className ? `bbui-button ${className}` : "bbui-button";

    const content = label ?? children;
    const hasIcons = iconStart || iconEnd;

    return (
      <button ref={ref} className={cls} style={computedStyle} {...rest}>
        {hasIcons ? (
          <>
            {iconStart}
            {content}
            {iconEnd}
          </>
        ) : (
          content
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
