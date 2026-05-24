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

  /** Typography. */
  size?: FontSizeToken;
  weight?: FontWeightToken;
  letterSpacing?: LetterSpacingToken;
  textTransform?: TextTransformToken;
  fontFamily?: FontFamilyToken;

  /** Gap between iconStart, label, iconEnd. */
  gap?: SpaceToken;

  /** Spacing. */
  padding?: SpaceToken;
  paddingBlock?: SpaceToken;
  paddingInline?: SpaceToken;
  borderRadius?: BorderRadiusToken;

  /** Text content shorthand (alternative to children). */
  label?: string;
  /** Icon before the label. */
  iconStart?: React.ReactNode;
  /** Icon after the label. */
  iconEnd?: React.ReactNode;

  children?: React.ReactNode;
}

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

    const computedStyle: React.CSSProperties = {
      cursor: "pointer",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: borderColor ? `${borderWidth} solid var(--bbui-btn-border)` : "none",
      ...(gradient && { background: gradient }),
      ...(size && { fontSize: size }),
      ...(weight && { fontWeight: weight }),
      ...(letterSpacing && { letterSpacing }),
      ...(textTransform && { textTransform }),
      ...(fontFamily && { fontFamily }),
      ...(gap && { gap }),
      ...(padding && { padding }),
      ...(paddingBlock && { paddingBlock }),
      ...(paddingInline && { paddingInline }),
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
