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
  /**
   * "overlay" — frosted scrim circle for buttons floating over imagery
   * (save-to-shortlist hearts, close buttons on photo strips). Styled by
   * .bbui-icon-button-overlay in styles.css (--bbui-scrim token); position
   * and size stay at the call site.
   */
  variant?: "plain" | "overlay";
  children?: React.ReactNode;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { label, size, color, backgroundColor, padding, variant = "plain", style, className, children, ...rest },
    ref
  ) => {
    const isOverlay = variant === "overlay";
    const computedStyle: React.CSSProperties = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      cursor: "pointer",
      // overlay: background/color come from .bbui-icon-button-overlay
      ...(!isOverlay && { background: backgroundColor ?? "none" }),
      ...(size && { width: size, height: size }),
      ...(color && { color }),
      ...(padding && { padding }),
      ...style,
    };

    const classes = ["bbui-button", isOverlay && "bbui-icon-button-overlay", className]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        type="button"
        aria-label={label}
        className={classes}
        style={computedStyle}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
