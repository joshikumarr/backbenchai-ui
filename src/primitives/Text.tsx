import React, { forwardRef } from "react";
import type { TextColorToken, FontSizeToken, FontWeightToken, FontFamilyToken, LetterSpacingToken } from "../tokens";

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
  fontFamily?: FontFamilyToken;
  letterSpacing?: LetterSpacingToken;
  align?: React.CSSProperties["textAlign"];
  textTransform?: React.CSSProperties["textTransform"];
  lineHeight?: number | string;
  opacity?: number;
  /**
   * Single-line ellipsis truncation. Applies overflow:hidden + text-overflow:ellipsis
   * + white-space:nowrap + min-width:0. Use on a label that should shrink inside a
   * flex parent; ensure the chain of ancestors also allows shrinking (Inline minWidth=0).
   */
  truncate?: boolean;
  /** white-space: nowrap. Useful for short tags or counts. */
  noWrap?: boolean;
  /** flex-shrink: 0. Keeps a sibling rigid while another truncates. */
  noShrink?: boolean;
  children?: React.ReactNode;
}

export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      as: Component = "span",
      size,
      weight,
      color,
      fontFamily,
      letterSpacing,
      align,
      textTransform,
      lineHeight,
      opacity,
      truncate,
      noWrap,
      noShrink,
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
      ...(fontFamily && { fontFamily }),
      ...(letterSpacing && { letterSpacing }),
      ...(align && { textAlign: align }),
      ...(textTransform && { textTransform }),
      ...(lineHeight !== undefined && { lineHeight }),
      ...(opacity !== undefined && { opacity }),
      ...(truncate && {
        display: "block",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        minWidth: 0,
      }),
      ...(noWrap && !truncate && { whiteSpace: "nowrap" }),
      ...(noShrink && { flexShrink: 0 }),
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
