import React, { forwardRef } from "react";
import type { TextColorToken, FontSizeToken, FontWeightToken } from "../tokens";

type AllowedElements =
  | "span"
  | "p"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "strong"
  | "em"
  | "small"
  | "label"
  | "div";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: AllowedElements;
  size?: FontSizeToken;
  weight?: FontWeightToken;
  color?: TextColorToken;
  align?: React.CSSProperties["textAlign"];
  textTransform?: React.CSSProperties["textTransform"];
  lineHeight?: number | string;
  opacity?: number;
  children?: React.ReactNode;
}

export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      as: Component = "span",
      size,
      weight,
      color,
      align,
      textTransform,
      lineHeight,
      opacity,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const computedStyle: React.CSSProperties = {
      ...(size && { fontSize: size }),
      ...(weight && { fontWeight: weight }),
      ...(color && { color }),
      ...(align && { textAlign: align }),
      ...(textTransform && { textTransform }),
      ...(lineHeight !== undefined && { lineHeight }),
      ...(opacity !== undefined && { opacity }),
      ...style,
    };

    return React.createElement(
      Component,
      { ...rest, ref, style: computedStyle },
      children
    );
  }
);

Text.displayName = "Text";
