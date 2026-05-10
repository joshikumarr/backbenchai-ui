import React, { forwardRef, useState, useEffect } from "react";
import { Box } from "../primitives/Box";
import { Stack } from "../primitives/Stack";
import { Inline } from "../primitives/Inline";
import { Text } from "../primitives/Text";
import { Anchor } from "../primitives/Anchor";
import { Image } from "../primitives/Image";
import type {
  SpaceToken,
  TextColorToken,
  BackgroundColorToken,
  FontSizeToken,
  FontWeightToken,
  BorderRadiusToken,
  BorderColorToken,
} from "../tokens";
import {
  Spacing,
  TextColor,
  BackgroundColor,
  FontSize,
  FontWeight,
  BorderRadius,
  BorderColor,
} from "../tokens";

export interface HeroBadge {
  label: string;
  text: string;
  path?: string;
  /** Color of the badge label text (default: TextColor.Inverse) */
  labelColor?: TextColorToken;
  /** Background of the badge label pill (default: BackgroundColor.Accent) */
  labelBackgroundColor?: BackgroundColorToken;
  /** Border color of the badge pill (default: BorderColor.Default) */
  borderColor?: BorderColorToken;
  icon?: React.ReactNode;
}

export interface HeroCta {
  label: string;
  path: string;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
}

export interface HeroImage {
  src: string;
  alt?: string;
  /** Max width of the image (default: Spacing.Size16 + Spacing.Size8 = use token) */
  maxWidth?: SpaceToken | string;
}

export interface HeroGradient {
  enabled?: boolean;
  /** Full CSS gradient string */
  css?: string;
  /** Height of the gradient backdrop */
  height?: SpaceToken | string;
}

export interface HeroSectionProps {
  title: string;
  subtitle?: string;
  badge?: HeroBadge;
  actions?: HeroCta[];
  image?: HeroImage;
  /** Custom content below subtitle, above actions */
  children?: React.ReactNode;

  // Typography
  /** Title font size on narrow screens (default: FontSize.XXXLarge / 36px) */
  titleSize?: FontSizeToken;
  /** Title font size on wide screens (default: FontSize.Huge / 48px) */
  titleSizeLarge?: FontSizeToken;
  titleWeight?: FontWeightToken;
  titleColor?: TextColorToken;
  subtitleSize?: FontSizeToken;
  subtitleColor?: TextColorToken;

  // CTA styling
  primaryCtaBackground?: BackgroundColorToken;
  primaryCtaColor?: TextColorToken;
  primaryCtaBorderRadius?: BorderRadiusToken;
  primaryCtaWeight?: FontWeightToken;
  secondaryCtaColor?: TextColorToken;
  secondaryCtaWeight?: FontWeightToken;
  /** Gap between CTA buttons (default: Spacing.MediumLarge) */
  ctaGap?: SpaceToken;

  // Layout
  /** Vertical padding for the section (default: Spacing.Size7 / 112px) */
  paddingBlock?: SpaceToken;
  /** Horizontal padding (default: Spacing.XXXLarge) */
  paddingInline?: SpaceToken;
  /** Gap between text content and image (default: Spacing.XHuge) */
  contentGap?: SpaceToken;
  /** Vertical gap between text elements (default: Spacing.XLarge) */
  textGap?: SpaceToken;
  /** Max width of the text column */
  textMaxWidth?: SpaceToken | string;

  gradient?: HeroGradient;
  /** Breakpoint in px for responsive layout (default: 768) */
  breakpoint?: number;
}

const ChevronIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    style={{ width: "20px", height: "20px" }}
  >
    <path
      fillRule="evenodd"
      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
      clipRule="evenodd"
    />
  </svg>
);

export const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(
  (
    {
      title,
      subtitle,
      badge,
      actions = [],
      image,
      children,
      titleSize = FontSize.XXXLarge,
      titleSizeLarge = FontSize.Huge,
      titleWeight = FontWeight.ExtraBold,
      titleColor = TextColor.Default,
      subtitleSize = FontSize.Small,
      subtitleColor = TextColor.Subtlest,
      primaryCtaBackground = BackgroundColor.Dark,
      primaryCtaColor = TextColor.Inverse,
      primaryCtaBorderRadius = BorderRadius.Full,
      primaryCtaWeight = 500,
      secondaryCtaColor = TextColor.Subtle,
      secondaryCtaWeight = 500,
      ctaGap = Spacing.MediumLarge,
      paddingBlock = Spacing.Size7,
      paddingInline = Spacing.XXXLarge,
      contentGap = Spacing.XHuge,
      textGap = Spacing.XLarge,
      textMaxWidth = "576px",
      gradient,
      breakpoint = 768,
    },
    ref
  ) => {
    const [isWide, setIsWide] = useState(false);

    useEffect(() => {
      const check = () => setIsWide(window.innerWidth >= breakpoint);
      check();
      window.addEventListener("resize", check);
      return () => window.removeEventListener("resize", check);
    }, [breakpoint]);

    const gradientEnabled = gradient?.enabled !== false;
    const gradientCss =
      gradient?.css ??
      "linear-gradient(143.6deg, rgba(192,132,252,0) 20.79%, rgba(232,121,249,0.26) 40.92%, rgba(204,171,238,0) 70.35%)";
    const gradientHeight = gradient?.height ?? "580px";

    const badgeBorderColor = badge?.borderColor ?? BorderColor.Default;

    const badgeElement = badge ? (
      <Anchor
        href={badge.path ?? "#"}
        borderRadius={BorderRadius.Full}
        paddingBlock={Spacing.XSmall}
        paddingInline={Spacing.Small}
        size={FontSize.XSmall}
        weight={500}
        display="inline-block"
        style={{
          textDecoration: "none",
          border: `1px solid ${badgeBorderColor}`,
          paddingRight: Spacing.XXLarge,
        }}
      >
        <Inline space={Spacing.MediumLarge} alignBlock="center">
          <Text
            as="span"
            size={FontSize.XSmall}
            color={badge.labelColor ?? TextColor.Inverse}
            style={{
              backgroundColor:
                badge.labelBackgroundColor ?? BackgroundColor.Accent,
              borderRadius: BorderRadius.Full,
              padding: `${Spacing.XSmall} ${Spacing.MediumLarge}`,
            }}
          >
            {badge.label}
          </Text>
          <Inline space={Spacing.XXSmall} alignBlock="center">
            <Text as="span" size={FontSize.XSmall}>
              {badge.text}
            </Text>
            {badge.icon ?? <ChevronIcon />}
          </Inline>
        </Inline>
      </Anchor>
    ) : null;

    const ctaElements =
      actions.length > 0 ? (
        <Inline space={ctaGap} alignBlock="center" shouldWrap>
          {actions.map((action, idx) => {
            const isPrimary =
              (action.variant ?? (idx === 0 ? "primary" : "secondary")) ===
              "primary";
            const weight = isPrimary ? primaryCtaWeight : secondaryCtaWeight;
            return (
              <Anchor
                key={idx}
                href={action.path}
                backgroundColor={isPrimary ? primaryCtaBackground : undefined}
                color={isPrimary ? primaryCtaColor : secondaryCtaColor}
                paddingBlock={Spacing.Medium}
                paddingInline={Spacing.Large}
                borderRadius={isPrimary ? primaryCtaBorderRadius : undefined}
                weight={weight}
                display="inline-block"
                style={{ textDecoration: "none" }}
              >
                <Inline space={Spacing.XSmall} alignBlock="center">
                  <Text
                    as="span"
                    color={isPrimary ? primaryCtaColor : secondaryCtaColor}
                    weight={weight}
                  >
                    {action.label}
                  </Text>
                  {action.icon ?? <ChevronIcon />}
                </Inline>
              </Anchor>
            );
          })}
        </Inline>
      ) : null;

    const resolvedTitleSize = isWide ? titleSizeLarge : titleSize;

    const textContent = (
      <Stack
        space={textGap}
        style={{ maxWidth: textMaxWidth, flexShrink: 0 }}
      >
        {badgeElement}
        <Text
          as="h1"
          size={resolvedTitleSize}
          weight={titleWeight}
          color={titleColor}
          lineHeight={1.2}
        >
          {title}
        </Text>
        {subtitle && (
          <Text
            as="p"
            color={subtitleColor}
            size={subtitleSize}
            lineHeight={1.6}
          >
            {subtitle}
          </Text>
        )}
        {children}
        {ctaElements}
      </Stack>
    );

    const imageElement =
      image && isWide ? (
        <Box style={{ flex: "1 1 0%", minWidth: 0 }}>
          <Image
            src={image.src}
            alt={image.alt ?? ""}
            style={{ maxWidth: image.maxWidth ?? "576px" }}
          />
        </Box>
      ) : null;

    return (
      <Box as="section" ref={ref} style={{ position: "relative" }}>
        {gradientEnabled && (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              height: gradientHeight,
              background: gradientCss,
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />
        )}
        <Box
          style={{ position: "relative", overflow: "hidden" }}
          maxWidth="1280px"
          paddingInline={paddingInline}
          paddingBlock={paddingBlock}
        >
          {isWide ? (
            <Inline space={contentGap} alignBlock="center">
              {textContent}
              {imageElement}
            </Inline>
          ) : (
            <Stack space={contentGap}>{textContent}</Stack>
          )}
        </Box>
      </Box>
    );
  }
);

HeroSection.displayName = "HeroSection";
