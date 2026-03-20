import React, { forwardRef } from "react";
import type { IconSizeToken, TextColorToken } from "../tokens";

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: IconSizeToken;
  color?: TextColorToken;
  label?: string;
  children?: React.ReactNode;
}

export const Icon = forwardRef<HTMLSpanElement, IconProps>(
  ({ size, color, label, style, children, ...rest }, ref) => {
    const computedStyle: React.CSSProperties = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      ...(size && { width: size, height: size }),
      ...(color && { color }),
      ...style,
    };

    return (
      <span
        ref={ref}
        role={label ? "img" : undefined}
        aria-label={label}
        aria-hidden={label ? undefined : true}
        style={computedStyle}
        {...rest}
      >
        {children}
      </span>
    );
  }
);

Icon.displayName = "Icon";
