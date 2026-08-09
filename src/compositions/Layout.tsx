import React, { forwardRef } from "react";
import { Box } from "../primitives/Box";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { MOBILE_NAV_HEIGHT } from "./MobileNav";
import { safeAreaBlock } from "../safeArea";
import type { BackgroundColorToken } from "../tokens";
import { BackgroundColor } from "../tokens";

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
          // dvh, not vh. On mobile browsers the address bar grows and shrinks.
          // 100vh measures the LARGEST viewport, so the bottom of the page sits
          // under the address bar until the user scrolls. 100dvh follows the
          // live viewport. Capacitor has no address bar, so this only changes
          // the web build.
          minHeight: "100dvh",
          backgroundColor,
          display: "flex",
        }}
      >
        {/* Sidebar renders itself as sticky full-height */}
        {!isMobile && sideNav}

        {/* Right column: navbar on top, content below */}
        <Box
          style={{
            flex: "1 1 auto",
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
          }}
        >
          {/* The top inset lives HERE, once, not in each consumer's topNav.
              Android 15 and later force edge-to-edge layout, so the status bar
              covers the top of the WebView and StatusBar.setOverlaysWebView no
              longer pushes it down. A consumer that pads its own topNav for the
              notch now double-pads — remove that padding. See CAPACITOR.md. */}
          {topNav && <Box safeArea="top">{topNav}</Box>}
          <Box
            as="main"
            style={{
              flex: "1 1 auto",
              overflow: "auto",
              // Reserve the REAL bar height plus the bottom inset. A flat
              // 64px was too short by the inset (34pt on an iPhone with a home
              // indicator), so the last row of every page hid behind the bar.
              paddingBlockEnd:
                isMobile && mobileNav
                  ? safeAreaBlock("bottom", MOBILE_NAV_HEIGHT)
                  : undefined,
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
