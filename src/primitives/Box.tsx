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

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: AllowedElements;
  padding?: SpaceToken;
  paddingBlock?: SpaceToken;
  paddingBlockStart?: SpaceToken;
  paddingBlockEnd?: SpaceToken;
  paddingInline?: SpaceToken;
  paddingInlineStart?: SpaceToken;
  paddingInlineEnd?: SpaceToken;
  marginBlock?: SpaceToken;
  marginBlockStart?: SpaceToken;
  marginBlockEnd?: SpaceToken;
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
      ...(padding && { padding }),
      ...(paddingBlock && { paddingBlock }),
      ...(paddingBlockStart && { paddingBlockStart }),
      ...(paddingBlockEnd && { paddingBlockEnd }),
      ...(paddingInline && { paddingInline }),
      ...(paddingInlineStart && { paddingInlineStart }),
      ...(paddingInlineEnd && { paddingInlineEnd }),
      ...(marginBlock && { marginBlock }),
      ...(marginBlockStart && { marginBlockStart }),
      ...(marginBlockEnd && { marginBlockEnd }),
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
