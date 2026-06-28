import React, { forwardRef } from "react";
import type {
  SpaceToken,
  TextColorToken,
  BackgroundColorToken,
  IconSizeToken,
} from "../tokens";

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  size?: IconSizeToken;
  color?: TextColorToken;
  backgroundColor?: BackgroundColorToken;
  padding?: SpaceToken;
  children?: React.ReactNode;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { label, size, color, backgroundColor, padding, style, className, children, ...rest },
    ref
  ) => {
    const computedStyle: React.CSSProperties = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      cursor: "pointer",
      background: backgroundColor ?? "none",
      ...(size && { width: size, height: size }),
      ...(color && { color }),
      ...(padding && { padding }),
      ...style,
    };

    return (
      <button
        ref={ref}
        type="button"
        aria-label={label}
        className={className ? `bbui-button ${className}` : "bbui-button"}
        style={computedStyle}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
