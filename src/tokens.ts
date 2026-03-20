/**
 * Design tokens — all values are direct CSS strings/numbers.
 *
 * Usage:
 *   <Stack space={Spacing.Large}>...</Stack>
 *   <Text color={TextColor.Brand} size={FontSize.Large}>Hello</Text>
 *   <Box borderRadius={BorderRadius.Medium} elevation={Elevation.Raised}>...</Box>
 */

// ── Spacing ──────────────────────────────────────────────────────────

export const Spacing = {
  /** 0px */
  None: "0",
  /** 2px */
  XXSmall: "0.125rem",
  /** 4px */
  XSmall: "0.25rem",
  /** 6px */
  Small: "0.375rem",
  /** 8px — base unit */
  Medium: "0.5rem",
  /** 12px */
  MediumLarge: "0.75rem",
  /** 16px */
  Large: "1rem",
  /** 20px */
  XLarge: "1.25rem",
  /** 24px */
  XXLarge: "1.5rem",
  /** 32px */
  XXXLarge: "2rem",
  /** 40px */
  Huge: "2.5rem",
  /** 48px */
  XHuge: "3rem",
  /** 64px */
  XXHuge: "4rem",
  /** 80px */
  XXXHuge: "5rem",
  /** 56px */
  Size3_5: "3.5rem",
  /** 112px */
  Size7: "7rem",
  /** 128px */
  Size8: "8rem",
  /** 256px */
  Size16: "16rem",
} as const;

export type SpaceToken = (typeof Spacing)[keyof typeof Spacing];

// ── Colors ───────────────────────────────────────────────────────────

export const TextColor = {
  Default: "#1f2937",
  Subtle: "#374151",
  Subtlest: "#4b5563",
  Disabled: "#6b7280",
  Inverse: "#ffffff",
  Brand: "#15803d",
  Selected: "#166534",
  Success: "#14532d",
} as const;

export type TextColorToken = (typeof TextColor)[keyof typeof TextColor];

export const BackgroundColor = {
  Default: "#ffffff",
  Subtle: "#f3f4f6",
  Neutral: "#e5e7eb",
  Dark: "#1f2937",
  DarkHover: "#374151",
  DarkActive: "#111827",
  Accent: "#4f46e5",
  Brand: "#15803d",
  BrandBold: "#166534",
  Success: "#bbf7d0",
} as const;

export type BackgroundColorToken =
  (typeof BackgroundColor)[keyof typeof BackgroundColor];

// ── Typography ───────────────────────────────────────────────────────

export const FontSize = {
  XXSmall: "0.75rem",
  XSmall: "0.875rem",
  Small: "1rem",
  Medium: "1.125rem",
  Large: "1.25rem",
  XLarge: "1.5rem",
  XXLarge: "1.875rem",
  XXXLarge: "2.25rem",
  /** 3rem / 48px */
  Huge: "3rem",
} as const;

export type FontSizeToken = (typeof FontSize)[keyof typeof FontSize];

export const FontWeight = {
  Regular: 400,
  Medium: 500,
  Semibold: 600,
  Bold: 700,
  ExtraBold: 800,
} as const;

export type FontWeightToken = (typeof FontWeight)[keyof typeof FontWeight];

// ── Border ───────────────────────────────────────────────────────────

export const BorderRadius = {
  None: "0",
  Small: "0.25rem",
  Medium: "0.375rem",
  Large: "0.5rem",
  Full: "9999px",
} as const;

export type BorderRadiusToken =
  (typeof BorderRadius)[keyof typeof BorderRadius];

export const BorderColor = {
  Default: "#e5e7eb",
  Input: "#d1d5db",
} as const;

export type BorderColorToken =
  (typeof BorderColor)[keyof typeof BorderColor];

// ── Elevation ────────────────────────────────────────────────────────

export const Elevation = {
  None: "none",
  Raised: "0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.06)",
} as const;

export type ElevationToken = (typeof Elevation)[keyof typeof Elevation];

// ── Container Width ──────────────────────────────────────────────────

export const ContainerWidth = {
  Small: "640px",
  Medium: "768px",
  Large: "1024px",
  XLarge: "1280px",
} as const;

export type ContainerWidthToken =
  (typeof ContainerWidth)[keyof typeof ContainerWidth];
