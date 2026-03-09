import React, { forwardRef } from "react";
import type {
  SpaceToken,
  BackgroundColorToken,
  BorderRadiusToken,
  BorderColorToken,
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
  borderSide?: "top" | "all";
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
      ? `1px solid ${borderColor}`
      : undefined;

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
      ...(borderValue && borderSide === "top" && { borderTop: borderValue }),
      ...(borderValue && borderSide === "all" && { border: borderValue }),
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
