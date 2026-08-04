import React, { forwardRef } from "react";
import type { IconSizeToken, TextColorToken } from "../tokens";

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: IconSizeToken;
  color?: TextColorToken;
  label?: string;
  /** Material Symbols glyph name — renders the icon font when set. */
  name?: string;
  children?: React.ReactNode;
}

export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ size, color, label, name, style, className, children, ...rest }, ref) => {
    const computedStyle: React.CSSProperties = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      ...(size && (name ? { fontSize: size } : { width: size, height: size })),
      ...(color && { color }),
      ...style,
    };

    return (
      <span
        ref={ref}
        role={label ? "img" : undefined}
        aria-label={label}
        aria-hidden={label ? undefined : true}
        className={name ? ["material-symbols-outlined", className].filter(Boolean).join(" ") : className}
        style={computedStyle}
        {...rest}
      >
        {name ?? children}
      </span>
    );
  }
);

Icon.displayName = "Icon";
