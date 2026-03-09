import React, { forwardRef } from "react";
import type { SpaceToken, BackgroundColorToken, BorderRadiusToken, BorderColorToken } from "../tokens";

export interface TextInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  backgroundColor?: BackgroundColorToken;
  borderColor?: BorderColorToken;
  borderRadius?: BorderRadiusToken;
  padding?: SpaceToken;
  paddingBlock?: SpaceToken;
  paddingInline?: SpaceToken;
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      backgroundColor,
      borderColor,
      borderRadius,
      padding,
      paddingBlock,
      paddingInline,
      style,
      ...rest
    },
    ref
  ) => {
    const computedStyle: React.CSSProperties = {
      ...(backgroundColor && { backgroundColor }),
      ...(borderColor && { border: `1px solid ${borderColor}` }),
      ...(borderRadius && { borderRadius }),
      ...(padding && { padding }),
      ...(paddingBlock && { paddingBlock }),
      ...(paddingInline && { paddingInline }),
      ...style,
    };

    return <input ref={ref} style={computedStyle} {...rest} />;
  }
);

TextInput.displayName = "TextInput";
