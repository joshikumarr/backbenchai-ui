import React, { forwardRef, useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { Box } from "../primitives/Box";
import { Inline } from "../primitives/Inline";
import { Text } from "../primitives/Text";
import { IconButton } from "../primitives/IconButton";
import type { TextColorToken, BackgroundColorToken } from "../tokens";
import {
  Spacing,
  FontSize,
  FontWeight,
  TextColor,
  BackgroundColor,
  BorderRadius,
  Elevation,
  ZIndex,
} from "../tokens";

type ToastVariant = "info" | "success" | "warning" | "error";

export interface ToastProps {
  /** Whether the toast is visible */
  open: boolean;
  onClose: () => void;
  /** Auto-dismiss after ms (default: 5000, 0 = no auto-dismiss) */
  duration?: number;
  variant?: ToastVariant;
  /** Icon rendered before the message */
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * The accent is the 4px rail and the icon colour. It takes the `*Bold` fill of
 * the same semantic family, so it follows the consumer's palette and flips with
 * the theme. It used to be four literal hexes, which meant the rail stayed a
 * light-theme colour in dark mode and ignored a themed palette entirely.
 */
const variantMap: Record<
  ToastVariant,
  { bg: BackgroundColorToken; text: TextColorToken; accent: BackgroundColorToken }
> = {
  info: { bg: BackgroundColor.Default, text: TextColor.Info, accent: BackgroundColor.InfoBold },
  success: { bg: BackgroundColor.Default, text: TextColor.Success, accent: BackgroundColor.SuccessBold },
  warning: { bg: BackgroundColor.Default, text: TextColor.Warning, accent: BackgroundColor.WarningBold },
  error: { bg: BackgroundColor.Default, text: TextColor.Error, accent: BackgroundColor.ErrorBold },
};

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    style={{ width: "14px", height: "14px" }}
  >
    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
  </svg>
);

export const Toast = forwardRef<HTMLDivElement, ToastProps>(
  ({ open, onClose, duration = 5000, variant = "info", icon, children }, ref) => {
    useEffect(() => {
      if (!open || duration === 0) return;
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }, [open, duration, onClose]);

    if (!open) return null;

    const colors = variantMap[variant];

    return createPortal(
      <Box
        ref={ref}
        role="alert"
        aria-live="assertive"
        backgroundColor={colors.bg}
        borderRadius={BorderRadius.XXLarge}
        elevation={Elevation.Overlay}
        padding={Spacing.Large}
        style={{
          position: "fixed",
          bottom: Spacing.XXXLarge,
          right: Spacing.XXXLarge,
          zIndex: ZIndex.Banner,
          minWidth: "320px",
          maxWidth: "448px",
          borderLeft: `4px solid ${colors.accent}`,
        }}
      >
        <Inline space={Spacing.MediumLarge} alignBlock="center" spread="space-between">
          <Inline space={Spacing.MediumLarge} alignBlock="center" grow="fill">
            {icon && (
              <Box style={{ color: colors.accent, flexShrink: 0 }}>{icon}</Box>
            )}
            <Text as="span" size={FontSize.XSmall} weight={FontWeight.Medium} color={TextColor.Default}>
              {children}
            </Text>
          </Inline>
          <IconButton
            label="Dismiss"
            onClick={onClose}
            color={TextColor.Subtle}
            padding={Spacing.XXSmall}
          >
            <CloseIcon />
          </IconButton>
        </Inline>
      </Box>,
      document.body
    );
  }
);

Toast.displayName = "Toast";
