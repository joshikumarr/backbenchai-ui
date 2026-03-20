import React, { forwardRef } from "react";
import type { SpaceToken, TextColorToken, BackgroundColorToken, BorderRadiusToken } from "../tokens";

export interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  backgroundColor?: BackgroundColorToken;
  color?: TextColorToken;
  padding?: SpaceToken;
  paddingBlock?: SpaceToken;
  paddingInline?: SpaceToken;
  borderRadius?: BorderRadiusToken;
  children?: React.ReactNode;
}

export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      backgroundColor,
      color,
      padding,
      paddingBlock,
      paddingInline,
      borderRadius,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const computedStyle: React.CSSProperties = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      textDecoration: "none",
      cursor: "pointer",
      border: "none",
      ...(backgroundColor && { backgroundColor }),
      ...(color && { color }),
      ...(padding && { padding }),
      ...(paddingBlock && { paddingBlock }),
      ...(paddingInline && { paddingInline }),
      ...(borderRadius && { borderRadius }),
      ...style,
    };

    return (
      <a ref={ref} style={computedStyle} {...rest}>
        {children}
      </a>
    );
  }
);

LinkButton.displayName = "LinkButton";
