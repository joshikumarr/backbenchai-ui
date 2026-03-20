import React, { forwardRef } from "react";
import { Box } from "../primitives/Box";
import { Stack } from "../primitives/Stack";
import {
  Spacing,
  BackgroundColor,
  BorderRadius,
  BorderColor,
  Elevation,
} from "../tokens";
import type {
  SpaceToken,
  BackgroundColorToken,
  BorderRadiusToken,
  BorderColorToken,
  ElevationToken,
  AccentColorToken,
  BorderWidthToken,
} from "../tokens";

export interface CardProps {
  /** Padding inside the card sections (default: Spacing.Large) */
  padding?: SpaceToken;
  /** Card background (default: BackgroundColor.Default) */
  backgroundColor?: BackgroundColorToken;
  /** Corner radius (default: BorderRadius.XXLarge / 1rem) */
  borderRadius?: BorderRadiusToken;
  /** Border color (default: BorderColor.Default) */
  borderColor?: BorderColorToken;
  /** Shadow depth (default: Elevation.Ambient) */
  elevation?: ElevationToken;
  /** Thick accent stripe color on top of the card (e.g., room status) */
  accentColor?: AccentColorToken;
  /** Accent stripe width (default: BorderWidth.XThick / 8px) */
  accentWidth?: BorderWidthToken;
  /** Content rendered in the card header area */
  header?: React.ReactNode;
  /** Content rendered in the card footer area */
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

export const Card = forwardRef<HTMLElement, CardProps>(
  (
    {
      padding = Spacing.Large,
      backgroundColor = BackgroundColor.Default,
      borderRadius = BorderRadius.XXLarge,
      borderColor = BorderColor.Default,
      elevation = Elevation.Ambient,
      accentColor,
      accentWidth = "8px",
      header,
      footer,
      children,
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        borderColor={borderColor}
        borderSide="all"
        elevation={elevation}
        overflow="hidden"
        style={{
          ...(accentColor && {
            borderTop: `${accentWidth} solid ${accentColor}`,
          }),
        }}
      >
        <Stack>
          {header && (
            <Box
              padding={padding}
              style={{ borderBottom: `1px solid ${borderColor}` }}
            >
              {header}
            </Box>
          )}
          <Box padding={padding}>{children}</Box>
          {footer && (
            <Box
              padding={padding}
              style={{ borderTop: `1px solid ${borderColor}` }}
            >
              {footer}
            </Box>
          )}
        </Stack>
      </Box>
    );
  }
);

Card.displayName = "Card";
