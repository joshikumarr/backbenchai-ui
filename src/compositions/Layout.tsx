import React, { forwardRef } from "react";
import { Box } from "../primitives/Box";
import { Stack } from "../primitives/Stack";
import { Inline } from "../primitives/Inline";
import type { BackgroundColorToken } from "../tokens";
import { BackgroundColor } from "../tokens";

export interface LayoutProps {
  topNav?: React.ReactNode;
  sideNav?: React.ReactNode;
  /** Background color of the layout (default: BackgroundColor.Subtle) */
  backgroundColor?: BackgroundColorToken;
  children?: React.ReactNode;
}

export const Layout = forwardRef<HTMLElement, LayoutProps>(
  (
    {
      topNav,
      sideNav,
      backgroundColor = BackgroundColor.Subtle,
      children,
    },
    ref
  ) => {
    return (
      <Stack
        ref={ref}
        style={{
          minHeight: "100vh",
          backgroundColor,
        }}
      >
        {topNav}
        <Inline grow="fill" style={{ flex: "1 1 auto" }}>
          {sideNav}
          <Box as="main" style={{ flex: "1 1 auto", overflow: "auto" }}>
            {children}
          </Box>
        </Inline>
      </Stack>
    );
  }
);

Layout.displayName = "Layout";
