import React, { forwardRef, useState, useEffect, useCallback } from "react";
import { Box } from "../primitives/Box";
import { Inline } from "../primitives/Inline";
import { Anchor } from "../primitives/Anchor";
import { Button } from "../primitives/Button";
import { Image } from "../primitives/Image";
import { Text } from "../primitives/Text";
import type {
  BackgroundColorToken,
  TextColorToken,
  BorderRadiusToken,
  BorderColorToken,
  SpaceToken,
  FontWeightToken,
} from "../tokens";
import {
  Spacing,
  TextColor,
  BackgroundColor,
  BorderRadius,
  BorderColor,
  Elevation,
} from "../tokens";

export interface NavLink {
  title: string;
  path: string;
}

export interface NavCta {
  label: string;
  path: string;
  icon?: React.ReactNode;
}

export interface NavbarLogo {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface NavbarProps {
  logo: NavbarLogo | React.ReactNode;
  navigation?: NavLink[];
  cta?: NavCta;
  /** Color for navigation links (default: TextColor.Subtle) */
  linkColor?: TextColorToken;
  /** Background color for CTA button (default: BackgroundColor.Dark) */
  ctaBackgroundColor?: BackgroundColorToken;
  /** Text color for CTA button (default: TextColor.Inverse) */
  ctaColor?: TextColorToken;
  /** Font weight for CTA button (default: FontWeight.Medium) */
  ctaWeight?: FontWeightToken;
  /** Border radius for CTA button (default: BorderRadius.Full) */
  ctaBorderRadius?: BorderRadiusToken;
  /** Horizontal padding for the nav container (default: Spacing.XXXLarge) */
  paddingInline?: SpaceToken;
  /** Vertical padding for the nav container (default: Spacing.XLarge) */
  paddingBlock?: SpaceToken;
  /** Gap between nav links (default: Spacing.XXLarge) */
  linkGap?: SpaceToken;
  /** Gap between logo and nav area (default: Spacing.Size3_5) */
  logoGap?: SpaceToken;
  /** Mobile menu background (default: BackgroundColor.Default) */
  mobileMenuBackground?: BackgroundColorToken;
  /** Mobile menu border color (default: BorderColor.Default) */
  mobileMenuBorderColor?: BorderColorToken;
  /** Mobile menu border radius (default: BorderRadius.Large) */
  mobileMenuBorderRadius?: BorderRadiusToken;
  /** Breakpoint in px at which mobile menu collapses (default: 768) */
  mobileBreakpoint?: number;
}

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    style={{ width: "1.5rem", height: "1.5rem" }}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    style={{ width: "1.5rem", height: "1.5rem" }}
  >
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    style={{ width: "1.25rem", height: "1.25rem" }}
  >
    <path
      fillRule="evenodd"
      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
      clipRule="evenodd"
    />
  </svg>
);

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  (
    {
      logo,
      navigation = [],
      cta,
      linkColor = TextColor.Subtle,
      ctaBackgroundColor = BackgroundColor.Dark,
      ctaColor = TextColor.Inverse,
      ctaWeight = 500,
      ctaBorderRadius = BorderRadius.Full,
      paddingInline = Spacing.XXXLarge,
      paddingBlock = Spacing.XLarge,
      linkGap = Spacing.XXLarge,
      logoGap = Spacing.Size3_5,
      mobileMenuBackground = BackgroundColor.Default,
      mobileMenuBorderColor = BorderColor.Default,
      mobileMenuBorderRadius = BorderRadius.Large,
      mobileBreakpoint = 768,
    },
    ref
  ) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const check = () => setIsMobile(window.innerWidth < mobileBreakpoint);
      check();
      window.addEventListener("resize", check);
      return () => window.removeEventListener("resize", check);
    }, [mobileBreakpoint]);

    const handleClickOutside = useCallback((e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-navbar-menu]")) {
        setMenuOpen(false);
      }
    }, []);

    useEffect(() => {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }, [handleClickOutside]);

    const logoElement = React.isValidElement(logo) ? (
      logo
    ) : (
      <Image
        src={(logo as NavbarLogo).src}
        alt={(logo as NavbarLogo).alt ?? "Logo"}
        style={{
          width: (logo as NavbarLogo).width ?? 120,
          height: (logo as NavbarLogo).height ?? "auto",
        }}
      />
    );

    const navLinks = (
      <>
        {navigation.map((item, idx) => (
          <Anchor
            key={idx}
            href={item.path}
            color={linkColor}
            display="block"
            style={{ textDecoration: "none" }}
          >
            {item.title}
          </Anchor>
        ))}
      </>
    );

    const ctaElement = cta ? (
      <Anchor
        href={cta.path}
        backgroundColor={ctaBackgroundColor}
        color={ctaColor}
        paddingBlock={Spacing.Medium}
        paddingInline={Spacing.Large}
        borderRadius={ctaBorderRadius}
        weight={ctaWeight}
        display="inline-block"
        style={{ textDecoration: "none" }}
      >
        <Inline space={Spacing.XSmall} alignBlock="center">
          <Text as="span" color={ctaColor} weight={ctaWeight}>
            {cta.label}
          </Text>
          {cta.icon ?? <ChevronIcon />}
        </Inline>
      </Anchor>
    ) : null;

    // Desktop layout
    if (!isMobile) {
      return (
        <Box as="header" ref={ref} style={{ width: "100%" }}>
          <Box
            as="nav"
            paddingInline={paddingInline}
            paddingBlock={paddingBlock}
            style={{ width: "100%" }}
          >
            <Inline alignBlock="center" spread="space-between">
              <Box>{logoElement}</Box>
              <Inline
                space={linkGap}
                alignBlock="center"
                grow="fill"
                style={{ marginInlineStart: logoGap }}
              >
                <Inline
                  space={linkGap}
                  alignBlock="center"
                  grow="fill"
                  alignInline="center"
                >
                  {navLinks}
                </Inline>
                {ctaElement && <Box>{ctaElement}</Box>}
              </Inline>
            </Inline>
          </Box>
        </Box>
      );
    }

    // Mobile layout
    return (
      <Box as="header" ref={ref} data-navbar-menu>
        <Box
          as="nav"
          paddingInline={Spacing.Large}
          paddingBlock={paddingBlock}
        >
          <Inline alignBlock="center" spread="space-between">
            <Box>{logoElement}</Box>
            <Button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                padding: 0,
                color: TextColor.Subtle,
              }}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </Button>
          </Inline>
        </Box>
        {menuOpen && (
          <Box
            backgroundColor={mobileMenuBackground}
            elevation={Elevation.Raised}
            borderRadius={mobileMenuBorderRadius}
            borderColor={mobileMenuBorderColor}
            borderSide="all"
            padding={Spacing.Large}
            style={{ margin: Spacing.Medium }}
          >
            <nav>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {navigation.map((item, idx) => (
                  <li key={idx} style={{ paddingBlock: Spacing.MediumLarge }}>
                    <Anchor
                      href={item.path}
                      color={linkColor}
                      display="block"
                      style={{ textDecoration: "none" }}
                    >
                      {item.title}
                    </Anchor>
                  </li>
                ))}
              </ul>
              {ctaElement && (
                <Box marginBlockStart={Spacing.XXLarge}>{ctaElement}</Box>
              )}
            </nav>
          </Box>
        )}
      </Box>
    );
  }
);

Navbar.displayName = "Navbar";
