import React, { forwardRef } from "react";
import { Box } from "../primitives/Box";
import { Spacing, TextColor, BorderColor } from "../tokens";
import type { SpaceToken, TextColorToken, BorderColorToken } from "../tokens";

export interface AsideProps {
  /** Padding inside the aside (default: Spacing.Large) */
  padding?: SpaceToken;
  /** Text color (default: TextColor.Subtle) */
  color?: TextColorToken;
  /** Left border color (default: BorderColor.Default) */
  borderColor?: BorderColorToken;
  children?: React.ReactNode;
}

export const Aside = forwardRef<HTMLElement, AsideProps>(
  (
    {
      padding = Spacing.Large,
      color = TextColor.Subtle,
      borderColor = BorderColor.Default,
      children,
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        as="aside"
        padding={padding}
        style={{
          borderLeft: `3px solid ${borderColor}`,
          color,
        }}
      >
        {children}
      </Box>
    );
  }
);

Aside.displayName = "Aside";
