import React, { forwardRef } from "react";
import { Box } from "../primitives/Box";
import { Stack } from "../primitives/Stack";
import { Inline } from "../primitives/Inline";
import { useBreakpoint } from "../hooks/useBreakpoint";
import type { BackgroundColorToken } from "../tokens";
import { BackgroundColor, Spacing } from "../tokens";

export interface LayoutProps {
  topNav?: React.ReactNode;
  sideNav?: React.ReactNode;
  /** Mobile bottom navigation — shown only on mobile, hidden on tablet+ */
  mobileNav?: React.ReactNode;
  /** Background color of the layout (default: BackgroundColor.Surface) */
  backgroundColor?: BackgroundColorToken;
  children?: React.ReactNode;
}

export const Layout = forwardRef<HTMLElement, LayoutProps>(
  (
    {
      topNav,
      sideNav,
      mobileNav,
      backgroundColor = BackgroundColor.Surface,
      children,
    },
    ref
  ) => {
    const bp = useBreakpoint();
    const isMobile = bp === "mobile";

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
          {!isMobile && sideNav}
          <Box
            as="main"
            style={{
              flex: "1 1 auto",
              overflow: "auto",
              paddingBlockEnd: isMobile && mobileNav ? Spacing.XXHuge : undefined,
            }}
          >
            {children}
          </Box>
        </Inline>
        {isMobile && mobileNav}
      </Stack>
    );
  }
);

Layout.displayName = "Layout";
