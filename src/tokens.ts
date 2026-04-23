/**
 * Design tokens — theme-aware via CSS custom properties.
 *
 * Every color/shadow/gradient token outputs a `var(--bbui-...)` reference.
 * Light/dark values are defined in injectStyles.ts.
 * Spacing, typography, border-radius, and sizing remain static.
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

// ── Text Colors (CSS var-backed) ─────────────────────────────────────

export const TextColor = {
  Default: "var(--bbui-color-on-surface)",
  Subtle: "var(--bbui-color-subtle)",
  Subtlest: "var(--bbui-color-subtlest)",
  Disabled: "var(--bbui-color-disabled)",
  Inverse: "var(--bbui-color-inverse)",
  /** Always white — for text on brand/gradient/colored surfaces */
  OnBrand: "var(--bbui-color-on-brand)",
  Brand: "var(--bbui-color-primary)",
  Selected: "var(--bbui-color-on-primary-container)",
  Success: "var(--bbui-color-primary)",
  Warning: "var(--bbui-color-warning)",
  Error: "var(--bbui-color-error)",
  ErrorContainer: "var(--bbui-color-error-container)",
  Info: "var(--bbui-color-info)",
  Link: "var(--bbui-color-primary)",
  OnSurfaceVariant: "var(--bbui-color-on-surface-variant)",
  /** Text on success/green containers */
  OnSuccess: "var(--bbui-color-on-success)",
  /** Text on error containers */
  OnError: "var(--bbui-color-on-error)",
  /** Text on warning containers */
  OnWarning: "var(--bbui-color-on-warning)",
  /** Text on info containers */
  OnInfo: "var(--bbui-color-on-info)",
} as const;

export type TextColorToken = (typeof TextColor)[keyof typeof TextColor];

// ── Background Colors (CSS var-backed) ───────────────────────────────

export const BackgroundColor = {
  Transparent: "transparent",
  Default: "var(--bbui-bg-default)",
  Surface: "var(--bbui-bg-surface)",
  Subtle: "var(--bbui-bg-subtle)",
  Neutral: "var(--bbui-bg-neutral)",
  NeutralBold: "var(--bbui-bg-neutral-bold)",
  NeutralBolder: "var(--bbui-bg-neutral-bolder)",
  SidebarBg: "var(--bbui-bg-sidebar)",
  Dark: "var(--bbui-bg-dark)",
  DarkHover: "var(--bbui-bg-dark-hover)",
  DarkActive: "var(--bbui-bg-dark-active)",
  Accent: "var(--bbui-bg-accent)",
  Brand: "var(--bbui-bg-brand)",
  BrandBold: "var(--bbui-bg-brand-bold)",
  PrimaryContainer: "var(--bbui-bg-primary-container)",
  SecondaryContainer: "var(--bbui-bg-secondary-container)",
  Success: "var(--bbui-bg-primary-container)",
  SuccessBold: "var(--bbui-bg-brand)",
  Warning: "var(--bbui-bg-warning)",
  WarningBold: "var(--bbui-bg-warning-bold)",
  Error: "var(--bbui-bg-error)",
  ErrorBold: "var(--bbui-bg-error-bold)",
  Info: "var(--bbui-bg-info)",
  InfoBold: "var(--bbui-bg-info-bold)",
  Overlay: "var(--bbui-bg-overlay)",
  // Tint variants
  PrimaryTint: "var(--bbui-bg-primary-tint)",
  ErrorTint: "var(--bbui-bg-error-tint)",
  SecondaryTint: "var(--bbui-bg-secondary-tint)",
  WarningTint: "var(--bbui-bg-warning-tint)",
  InfoTint: "var(--bbui-bg-info-tint)",
  AccentTint: "var(--bbui-bg-accent-tint)",
} as const;

export type BackgroundColorToken =
  (typeof BackgroundColor)[keyof typeof BackgroundColor];

// ── Typography ───────────────────────────────────────────────────────

export const FontFamily = {
  Display: "var(--bbui-font-display)",
  Body: "var(--bbui-font-body)",
} as const;

export type FontFamilyToken = (typeof FontFamily)[keyof typeof FontFamily];

export const FontSize = {
  /** 0.625rem / 10px */
  Micro: "0.625rem",
  /** 0.75rem / 12px */
  XXSmall: "0.75rem",
  /** 0.875rem / 14px */
  XSmall: "0.875rem",
  /** 1rem / 16px */
  Small: "1rem",
  /** 1.125rem / 18px */
  Medium: "1.125rem",
  /** 1.25rem / 20px */
  Large: "1.25rem",
  /** 1.5rem / 24px */
  XLarge: "1.5rem",
  /** 1.875rem / 30px */
  XXLarge: "1.875rem",
  /** 2.25rem / 36px */
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
  /** 900 — large display numbers */
  Black: 900,
} as const;

export type FontWeightToken = (typeof FontWeight)[keyof typeof FontWeight];

export const LetterSpacing = {
  Tighter: "-0.05em",
  Tight: "-0.025em",
  Normal: "0",
  Wide: "0.05em",
  Wider: "0.075em",
  /** 0.1em — uppercase labels */
  Widest: "0.1em",
} as const;

export type LetterSpacingToken =
  (typeof LetterSpacing)[keyof typeof LetterSpacing];

// ── Border ───────────────────────────────────────────────────────────

export const BorderRadius = {
  None: "0",
  Small: "0.25rem",
  Medium: "0.375rem",
  Large: "0.5rem",
  XLarge: "0.75rem",
  XXLarge: "1rem",
  XXXLarge: "1.5rem",
  Huge: "2rem",
  XHuge: "3rem",
  Full: "9999px",
} as const;

export type BorderRadiusToken =
  (typeof BorderRadius)[keyof typeof BorderRadius];

export const BorderColor = {
  Default: "var(--bbui-border-default)",
  Input: "var(--bbui-border-input)",
  Warning: "var(--bbui-border-warning)",
  Error: "var(--bbui-border-error)",
  Info: "var(--bbui-border-info)",
  Success: "var(--bbui-border-success)",
  Focus: "var(--bbui-color-primary)",
  Outline: "var(--bbui-border-outline)",
} as const;

export type BorderColorToken = (typeof BorderColor)[keyof typeof BorderColor];

export const BorderWidth = {
  Thin: "1px",
  Medium: "2px",
  Thick: "4px",
  XThick: "8px",
} as const;

export type BorderWidthToken = (typeof BorderWidth)[keyof typeof BorderWidth];

// ── Accent / Status stripe colors ────────────────────────────────────

export const AccentColor = {
  Occupied: "var(--bbui-accent-occupied)",
  Vacant: "var(--bbui-accent-vacant)",
  Maintenance: "var(--bbui-accent-maintenance)",
  Reserved: "var(--bbui-accent-reserved)",
  Cleaning: "var(--bbui-accent-cleaning)",
  Primary: "var(--bbui-color-primary)",
  Error: "var(--bbui-color-error)",
} as const;

export type AccentColorToken = (typeof AccentColor)[keyof typeof AccentColor];

// ── Elevation ────────────────────────────────────────────────────────

export const Elevation = {
  None: "none",
  Raised: "var(--bbui-shadow-raised)",
  Ambient: "var(--bbui-shadow-ambient)",
  Dropdown: "var(--bbui-shadow-dropdown)",
  Overlay: "var(--bbui-shadow-overlay)",
  CardHover: "var(--bbui-shadow-card-hover)",
} as const;

export type ElevationToken = (typeof Elevation)[keyof typeof Elevation];

// ── Gradient ─────────────────────────────────────────────────────────

export const Gradient = {
  Brand: "var(--bbui-gradient-brand)",
} as const;

export type GradientToken = (typeof Gradient)[keyof typeof Gradient];

// ── Container Width ──────────────────────────────────────────────────

export const ContainerWidth = {
  Small: "640px",
  Medium: "768px",
  Large: "1024px",
  XLarge: "1280px",
  XXLarge: "1600px",
} as const;

export type ContainerWidthToken =
  (typeof ContainerWidth)[keyof typeof ContainerWidth];

// ── Z-Index ──────────────────────────────────────────────────────────

export const ZIndex = {
  Dropdown: 100,
  Sticky: 200,
  Modal: 300,
  Banner: 400,
  FAB: 50,
} as const;

export type ZIndexToken = (typeof ZIndex)[keyof typeof ZIndex];

// ── Icon Size ────────────────────────────────────────────────────────

export const IconSize = {
  Small: "1rem",
  Medium: "1.25rem",
  Large: "1.5rem",
  XLarge: "2rem",
  XXLarge: "2.5rem",
} as const;

export type IconSizeToken = (typeof IconSize)[keyof typeof IconSize];

// ── TOAR domain tokens ───────────────────────────────────────────────
// These bind directly to backend `bloom_level`, `score`, `result`, and
// `direction` field values from /api/toar/* endpoints. Verbatim names
// from cuepilot-agent → tokens here. Density-safe (color only, no rem).

/**
 * Bloom-level color scale. Maps the backend `bloom_level` enum
 * (`NOT_ASSESSED` → `MASTERS`) to a 6-step accent palette. Used by
 * MasteryBar, MasteryGrid, ConceptVerdict cards, and the Gap Map.
 */
export const BloomColor = {
  NotAssessed: "var(--bbui-bloom-not-assessed)",
  Aware: "var(--bbui-bloom-aware)",
  Understands: "var(--bbui-bloom-understands)",
  Applies: "var(--bbui-bloom-applies)",
  Analyzes: "var(--bbui-bloom-analyzes)",
  Masters: "var(--bbui-bloom-masters)",
} as const;

export type BloomColorToken = (typeof BloomColor)[keyof typeof BloomColor];

/** Backend `bloom_level` enum — verbatim from toar_models.py. */
export const BloomLevel = {
  NotAssessed: "NOT_ASSESSED",
  Aware: "AWARE",
  Understands: "UNDERSTANDS",
  Applies: "APPLIES",
  Analyzes: "ANALYZES",
  Masters: "MASTERS",
} as const;

export type BloomLevelValue = (typeof BloomLevel)[keyof typeof BloomLevel];

/** Map a backend `bloom_level` value to its color token. */
export function bloomColorFor(level: BloomLevelValue | string): BloomColorToken {
  switch (level) {
    case BloomLevel.Masters:
      return BloomColor.Masters;
    case BloomLevel.Analyzes:
      return BloomColor.Analyzes;
    case BloomLevel.Applies:
      return BloomColor.Applies;
    case BloomLevel.Understands:
      return BloomColor.Understands;
    case BloomLevel.Aware:
      return BloomColor.Aware;
    default:
      return BloomColor.NotAssessed;
  }
}

/**
 * Map a 0–100 mastery/readiness `score` to its bloom band — same
 * thresholds the backend uses (NOT_ASSESSED 0–19, AWARE 20–39,
 * UNDERSTANDS 40–59, APPLIES 60–79, ANALYZES 80–89, MASTERS 90–100).
 */
export function bloomLevelForScore(score: number): BloomLevelValue {
  if (score >= 90) return BloomLevel.Masters;
  if (score >= 80) return BloomLevel.Analyzes;
  if (score >= 60) return BloomLevel.Applies;
  if (score >= 40) return BloomLevel.Understands;
  if (score >= 20) return BloomLevel.Aware;
  return BloomLevel.NotAssessed;
}

/** Convenience: 0–100 score → color token in one call. */
export function scoreColor(score: number): BloomColorToken {
  return bloomColorFor(bloomLevelForScore(score));
}

/**
 * Evaluation result color map — bound to backend
 * `evaluation_complete.result` enum. Used by EvaluationStream
 * result chips and SessionSummary tallies.
 */
export const EvaluationResultColor = {
  correct: BloomColor.Masters,
  partial: BloomColor.Applies,
  incorrect: "var(--bbui-color-error)",
  skipped: "var(--bbui-color-subtlest)",
} as const;

export type EvaluationResultValue = keyof typeof EvaluationResultColor;

/**
 * Mastery delta direction — bound to backend `mastery_update.direction`
 * and `ConceptDelta.direction`. Used by MasteryBar arrow flash.
 */
export const DirectionColor = {
  up: BloomColor.Masters,
  down: "var(--bbui-color-error)",
  unchanged: "var(--bbui-color-subtlest)",
} as const;

export type DirectionValue = keyof typeof DirectionColor;

/**
 * Persona accent ring colors — Nova / Maya / Jordan from the live
 * copilot persona system. Allocated as fixed hue slots so any new
 * persona simply maps to one of the four slots.
 */
export const PersonaAccent = {
  Nova: "var(--bbui-persona-nova)",
  Maya: "var(--bbui-persona-maya)",
  Jordan: "var(--bbui-persona-jordan)",
  Custom: "var(--bbui-persona-custom)",
} as const;

export type PersonaAccentToken = (typeof PersonaAccent)[keyof typeof PersonaAccent];
