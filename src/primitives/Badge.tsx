import React, { forwardRef } from "react";
import { TextColor, BackgroundColor, FontSize, FontWeight, Spacing, BorderRadius, LetterSpacing } from "../tokens";

export type BadgeVariant =
  | "default"
  | "success"
  | "warning"
  | "error"
  | "info"
  | "brand"
  | "primaryTint"
  | "errorTint"
  | "warningTint"
  | "infoTint"
  | "accentTint";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  /** When true, uses micro font (10px), uppercase, tracking-widest — matches NestOS mockups */
  uppercase?: boolean;
  children?: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, { backgroundColor: string; color: string }> = {
  default: { backgroundColor: BackgroundColor.NeutralBold, color: TextColor.Default },
  success: { backgroundColor: BackgroundColor.SuccessBold, color: TextColor.OnBrand },
  warning: { backgroundColor: BackgroundColor.Warning, color: TextColor.Warning },
  error: { backgroundColor: BackgroundColor.Error, color: TextColor.Error },
  info: { backgroundColor: BackgroundColor.Info, color: TextColor.Info },
  brand: { backgroundColor: BackgroundColor.Brand, color: TextColor.Inverse },
  primaryTint: { backgroundColor: BackgroundColor.PrimaryTint, color: TextColor.Brand },
  errorTint: { backgroundColor: BackgroundColor.ErrorTint, color: TextColor.Error },
  warningTint: { backgroundColor: BackgroundColor.WarningTint, color: "#ea580c" },
  infoTint: { backgroundColor: BackgroundColor.InfoTint, color: "#2563eb" },
  accentTint: { backgroundColor: BackgroundColor.AccentTint, color: "#7c3aed" },
};

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "default", uppercase = false, style, children, ...rest }, ref) => {
    const colors = variantStyles[variant];

    const computedStyle: React.CSSProperties = {
      display: "inline-flex",
      alignItems: "center",
      lineHeight: 1,
      paddingBlock: Spacing.XXSmall,
      paddingInline: uppercase ? Spacing.MediumLarge : Spacing.Medium,
      borderRadius: BorderRadius.Full,
      fontWeight: uppercase ? FontWeight.Black : FontWeight.Medium,
      fontSize: uppercase ? FontSize.Micro : FontSize.XXSmall,
      letterSpacing: uppercase ? LetterSpacing.Wider : undefined,
      textTransform: uppercase ? "uppercase" : undefined,
      ...colors,
      ...style,
    };

    return (
      <span ref={ref} style={computedStyle} {...rest}>
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
