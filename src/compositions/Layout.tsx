import React, { forwardRef } from "react";
import { Box } from "../primitives/Box";
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
      <Box
        ref={ref}
        style={{
          minHeight: "100vh",
          backgroundColor,
          display: "flex",
        }}
      >
        {/* Sidebar: full viewport height, sticky */}
        {!isMobile && sideNav && (
          <Box
            as="aside"
            style={{
              position: "sticky",
              top: 0,
              height: "100vh",
              flexShrink: 0,
              zIndex: 10,
            }}
          >
            {sideNav}
          </Box>
        )}

        {/* Right side: navbar stacked above content */}
        <Box
          style={{
            flex: "1 1 auto",
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
          }}
        >
          {topNav}
          <Box
            as="main"
            style={{
              flex: "1 1 auto",
              overflow: "auto",
              paddingBlockEnd:
                isMobile && mobileNav ? Spacing.XXHuge : undefined,
            }}
          >
            {children}
          </Box>
        </Box>

        {isMobile && mobileNav}
      </Box>
    );
  }
);

Layout.displayName = "Layout";
