import React, { forwardRef } from "react";
import type { SpaceToken, BackgroundColorToken, BorderRadiusToken, BorderColorToken } from "../tokens";

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  backgroundColor?: BackgroundColorToken;
  borderColor?: BorderColorToken;
  borderRadius?: BorderRadiusToken;
  padding?: SpaceToken;
  paddingBlock?: SpaceToken;
  paddingInline?: SpaceToken;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
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
      fontFamily: "inherit",
      fontSize: "inherit",
      resize: "vertical",
      ...(backgroundColor && { backgroundColor }),
      ...(borderColor ? { border: `1px solid ${borderColor}` } : { border: "none" }),
      ...(borderRadius && { borderRadius }),
      ...(padding && { padding }),
      ...(paddingBlock && { paddingBlock }),
      ...(paddingInline && { paddingInline }),
      ...style,
    };

    return <textarea ref={ref} style={computedStyle} {...rest} />;
  }
);

TextArea.displayName = "TextArea";
