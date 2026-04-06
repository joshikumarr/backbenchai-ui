import React, { forwardRef } from "react";
import { Box } from "../primitives/Box";
import { Stack } from "../primitives/Stack";
import { Inline } from "../primitives/Inline";
import { Text } from "../primitives/Text";
import { Image } from "../primitives/Image";
import {
  Spacing,
  BorderRadius,
  FontSize,
  FontWeight,
  TextColor,
} from "../tokens";
import type {
  SpaceToken,
  BorderRadiusToken,
} from "../tokens";

// ── Types ────────────────────────────────────────────────────────────

export interface GlassCardAction {
  /** Button / link label text */
  label: string;
  /** When provided, renders as an anchor element */
  href?: string;
  /** Callback fired on click — ignored when `href` is set */
  onClick?: () => void;
  /** Optional trailing icon rendered after the label */
  icon?: React.ReactNode;
}

export interface GlassCardMedia {
  /** Image source URL */
  src: string;
  /** Accessible alt text */
  alt: string;
  /** Media width (default: Spacing.Size8 / 128px) */
  width?: SpaceToken;
  /** Media height (default: Spacing.Size8 / 128px) */
  height?: SpaceToken;
}

export interface GlassCardProps {
  /** Leading icon or visual badge above the heading */
  icon?: React.ReactNode;
  /** Card heading text */
  heading: string;
  /** Supporting body text */
  description?: string;
  /** Call-to-action rendered at the bottom of the text region */
  action?: GlassCardAction;
  /** Structured media config displayed beside the text content */
  media?: GlassCardMedia;
  /** Inner padding (default: Spacing.XXLarge) */
  padding?: SpaceToken;
  /** Corner radius (default: BorderRadius.XXLarge) */
  borderRadius?: BorderRadiusToken;
  /** Backdrop blur intensity in px (default: 24) */
  blur?: number;
  /** Background opacity 0–1 (default: 0.08) */
  backgroundOpacity?: number;
  /** Border opacity 0–1 (default: 0.15) */
  borderOpacity?: number;
  children?: React.ReactNode;
}

// ── Helpers ──────────────────────────────────────────────────────────

const NOISE_SVG =
  "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

function renderAction(action: GlassCardAction): React.ReactElement {
  const content = (
    <Inline space={Spacing.XSmall} alignBlock="center">
      <Text
        size={FontSize.XSmall}
        weight={FontWeight.Semibold}
        color={TextColor.Brand}
      >
        {action.label}
      </Text>
      {action.icon}
    </Inline>
  );

  if (action.href) {
    return (
      <a
        href={action.href}
        style={{
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
        }}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={action.onClick}
      style={{
        background: "none",
        border: "none",
        padding: 0,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      {content}
    </button>
  );
}

function renderMedia(media: GlassCardMedia): React.ReactElement {
  return (
    <Image
      src={media.src}
      alt={media.alt}
      width={media.width ?? Spacing.Size8}
      height={media.height ?? Spacing.Size8}
      objectFit="cover"
      borderRadius={BorderRadius.Medium}
      style={{ opacity: 0.8 }}
    />
  );
}

// ── Component ────────────────────────────────────────────────────────

export const GlassCard = forwardRef<HTMLElement, GlassCardProps>(
  (
    {
      icon,
      heading,
      description,
      action,
      media,
      padding = Spacing.XXLarge,
      borderRadius = BorderRadius.XXLarge,
      blur = 20,
      backgroundOpacity = 0.1,
      borderOpacity = 0.12,
      children,
    },
    ref
  ) => {
    const containerStyle: React.CSSProperties = {
      position: "relative",
      overflow: "hidden",
      background: `rgba(255, 255, 255, ${backgroundOpacity})`,
      backdropFilter: `blur(${blur}px)`,
      WebkitBackdropFilter: `blur(${blur}px)`,
      border: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
      borderRadius,
      transition: "background 200ms ease",
    };

    const noiseOverlayStyle: React.CSSProperties = {
      position: "absolute",
      inset: 0,
      backgroundImage: `url("${NOISE_SVG}")`,
      opacity: 0.03,
      pointerEvents: "none",
    };

    const textContent = (
      <Stack space={Spacing.Medium} style={{ flex: 1 }}>
        {icon && <Box marginBlockEnd={Spacing.Medium}>{icon}</Box>}
        <Text
          as="h3"
          size={FontSize.Large}
          weight={FontWeight.Bold}
          color={TextColor.Default}
        >
          {heading}
        </Text>
        {description && (
          <Text
            size={FontSize.XSmall}
            color={TextColor.OnSurfaceVariant}
          >
            {description}
          </Text>
        )}
        {action && renderAction(action)}
        {children}
      </Stack>
    );

    return (
      <Box ref={ref} padding={padding} style={containerStyle}>
        <div style={noiseOverlayStyle} aria-hidden="true" />
        {media ? (
          <Inline space={Spacing.XXLarge} alignBlock="center">
            {textContent}
            <div style={{ flexShrink: 0 }}>{renderMedia(media)}</div>
          </Inline>
        ) : (
          textContent
        )}
      </Box>
    );
  }
);

GlassCard.displayName = "GlassCard";
