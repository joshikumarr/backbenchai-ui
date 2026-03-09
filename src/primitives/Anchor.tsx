import React, { forwardRef } from "react";
import type {
  SpaceToken,
  TextColorToken,
  BackgroundColorToken,
  FontSizeToken,
  FontWeightToken,
  BorderRadiusToken,
} from "../tokens";

export interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  color?: TextColorToken;
  weight?: FontWeightToken;
  size?: FontSizeToken;
  backgroundColor?: BackgroundColorToken;
  padding?: SpaceToken;
  paddingBlock?: SpaceToken;
  paddingBlockStart?: SpaceToken;
  paddingInline?: SpaceToken;
  borderRadius?: BorderRadiusToken;
  textTransform?: React.CSSProperties["textTransform"];
  display?: "inline" | "inline-block" | "block";
  alignSelf?: React.CSSProperties["alignSelf"];
  children?: React.ReactNode;
}

export const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  (
    {
      color,
      weight,
      size,
      backgroundColor,
      padding,
      paddingBlock,
      paddingBlockStart,
      paddingInline,
      borderRadius,
      textTransform,
      display,
      alignSelf,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const computedStyle: React.CSSProperties = {
      ...(color && { color }),
      ...(weight && { fontWeight: weight }),
      ...(size && { fontSize: size }),
      ...(backgroundColor && { backgroundColor }),
      ...(padding && { padding }),
      ...(paddingBlock && { paddingBlock }),
      ...(paddingBlockStart && { paddingBlockStart }),
      ...(paddingInline && { paddingInline }),
      ...(borderRadius && { borderRadius }),
      ...(textTransform && { textTransform }),
      ...(display && { display }),
      ...(alignSelf && { alignSelf }),
      ...style,
    };

    return (
      <a ref={ref} style={computedStyle} {...rest}>
        {children}
      </a>
    );
  }
);

Anchor.displayName = "Anchor";
