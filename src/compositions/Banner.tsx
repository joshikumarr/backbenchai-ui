import React, { forwardRef } from "react";
import { Box } from "../primitives/Box";
import { Inline } from "../primitives/Inline";
import { Text } from "../primitives/Text";
import { IconButton } from "../primitives/IconButton";
import type { TextColorToken, BackgroundColorToken, BorderColorToken } from "../tokens";
import {
  Spacing,
  FontSize,
  TextColor,
  BackgroundColor,
  BorderColor,
  BorderRadius,
  ZIndex,
} from "../tokens";

type BannerVariant = "info" | "success" | "warning" | "error";

export interface BannerProps {
  variant?: BannerVariant;
  icon?: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  children?: React.ReactNode;
}

const variantMap: Record<
  BannerVariant,
  { bg: BackgroundColorToken; text: TextColorToken; border: BorderColorToken }
> = {
  info: {
    bg: BackgroundColor.InfoTint,
    text: TextColor.Info,
    border: BorderColor.Info,
  },
  success: {
    bg: BackgroundColor.PrimaryTint,
    text: TextColor.Success,
    border: BorderColor.Success,
  },
  warning: {
    bg: BackgroundColor.WarningTint,
    text: TextColor.Warning,
    border: BorderColor.Warning,
  },
  error: {
    bg: BackgroundColor.ErrorTint,
    text: TextColor.Error,
    border: BorderColor.Error,
  },
};

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    style={{ width: "16px", height: "16px" }}
  >
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export const Banner = forwardRef<HTMLElement, BannerProps>(
  ({ variant = "info", icon, dismissible, onDismiss, children }, ref) => {
    const colors = variantMap[variant];

    return (
      <Box
        ref={ref}
        role="alert"
        padding={Spacing.MediumLarge}
        borderRadius={BorderRadius.Medium}
        style={{
          backgroundColor: colors.bg,
          borderLeft: `4px solid ${colors.border}`,
          position: "relative",
          zIndex: ZIndex.Banner,
        }}
      >
        <Inline space={Spacing.Medium} alignBlock="center" spread="space-between">
          <Inline space={Spacing.Medium} alignBlock="center" grow="fill">
            {icon && (
              <Box style={{ color: colors.text, flexShrink: 0 }}>{icon}</Box>
            )}
            <Text as="span" size={FontSize.XSmall} color={colors.text}>
              {children}
            </Text>
          </Inline>
          {dismissible && (
            <IconButton
              label="Dismiss"
              onClick={onDismiss}
              color={colors.text}
              padding={Spacing.XXSmall}
            >
              <CloseIcon />
            </IconButton>
          )}
        </Inline>
      </Box>
    );
  }
);

Banner.displayName = "Banner";
