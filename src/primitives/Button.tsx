import React, { forwardRef } from "react";
import type { SpaceToken, TextColorToken, BackgroundColorToken, BorderRadiusToken } from "../tokens";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: BackgroundColorToken;
  color?: TextColorToken;
  padding?: SpaceToken;
  paddingBlock?: SpaceToken;
  paddingInline?: SpaceToken;
  borderRadius?: BorderRadiusToken;
  children?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
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
      border: "none",
      cursor: "pointer",
      ...(backgroundColor && { backgroundColor }),
      ...(color && { color }),
      ...(padding && { padding }),
      ...(paddingBlock && { paddingBlock }),
      ...(paddingInline && { paddingInline }),
      ...(borderRadius && { borderRadius }),
      ...style,
    };

    return (
      <button ref={ref} style={computedStyle} {...rest}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
