/**
 * Design tokens — theme-aware via CSS custom properties.
 *
 * Every color/shadow/gradient token outputs a `var(--bbui-...)` reference.
 * Light/dark values are defined in injectStyles.ts.
 * Spacing, typography, border-radius, and sizing remain static.
 */

// ── Spacing ──────────────────────────────────────────────────────────

export const Spacing = {
  None: "0",
  XXSmall: "2px",
  XSmall: "4px",
  Small: "6px",
  /** Base unit. */
  Medium: "8px",
  MediumLarge: "12px",
  Large: "16px",
  XLarge: "20px",
  XXLarge: "24px",
  XXXLarge: "32px",
  Huge: "40px",
  XHuge: "48px",
  XXHuge: "64px",
  XXXHuge: "80px",
  Size3_5: "56px",
  Size7: "112px",
  Size8: "128px",
  Size16: "256px",
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
  /** Green — positive feedback (Correct, completed, success states). */
  Success: "var(--bbui-color-success)",
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
  /**
   * Brand gradient clipped to the glyphs (background-clip: text). Text
   * special-cases this value — it paints the gradient as the fill instead
   * of a flat color. Backed by the same `--bbui-gradient-brand` as Gradient.Brand.
   */
  Gradient: "var(--bbui-gradient-brand)",
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
  Success: "var(--bbui-bg-success)",
  SuccessBold: "var(--bbui-bg-success-bold)",
  SuccessTint: "var(--bbui-bg-success-tint)",
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
  /** Brand navy tint (#163255) — a fixed surface, independent of theme. */
  BrandTint: "#163255",
  /**
   * Brand blue→gold gradient. A gradient is NOT a valid `background-color`, so
   * Box special-cases this value and emits `background` instead. Theme-aware
   * via the primary/warning color vars.
   */
  Gradient: "linear-gradient(to right, #ffffff80, #16325580, color-mix(in srgb, var(--bbui-color-warning) 50%, transparent))",
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
  Micro: "10px",
  XXSmall: "12px",
  XSmall: "14px",
  Small: "16px",
  Medium: "18px",
  Large: "20px",
  XLarge: "24px",
  XXLarge: "30px",
  XXXLarge: "36px",
  Huge: "48px",
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

// ── Font style ───────────────────────────────────────────────────────

export const FontStyle = {
  Normal: "normal",
  Italic: "italic",
  Oblique: "oblique",
} as const;

export type FontStyleToken = (typeof FontStyle)[keyof typeof FontStyle];

// ── Text transform ───────────────────────────────────────────────────

export const TextTransform = {
  None: "none",
  Uppercase: "uppercase",
  Lowercase: "lowercase",
  Capitalize: "capitalize",
} as const;

export type TextTransformToken =
  (typeof TextTransform)[keyof typeof TextTransform];

// ── Layout (display + flexbox) ───────────────────────────────────────

export const Display = {
  Block: "block",
  InlineBlock: "inline-block",
  Inline: "inline",
  Flex: "flex",
  InlineFlex: "inline-flex",
  Grid: "grid",
  InlineGrid: "inline-grid",
  None: "none",
} as const;
export type DisplayToken = (typeof Display)[keyof typeof Display];

export const AlignItems = {
  Start: "flex-start",
  Center: "center",
  End: "flex-end",
  Stretch: "stretch",
  Baseline: "baseline",
} as const;
export type AlignItemsToken = (typeof AlignItems)[keyof typeof AlignItems];

export const JustifyContent = {
  Start: "flex-start",
  Center: "center",
  End: "flex-end",
  SpaceBetween: "space-between",
  SpaceAround: "space-around",
  SpaceEvenly: "space-evenly",
} as const;
export type JustifyContentToken =
  (typeof JustifyContent)[keyof typeof JustifyContent];

export const AlignSelf = {
  Auto: "auto",
  Start: "flex-start",
  Center: "center",
  End: "flex-end",
  Stretch: "stretch",
  Baseline: "baseline",
} as const;
export type AlignSelfToken = (typeof AlignSelf)[keyof typeof AlignSelf];

export const FlexDirection = {
  Row: "row",
  Column: "column",
  RowReverse: "row-reverse",
  ColumnReverse: "column-reverse",
} as const;
export type FlexDirectionToken =
  (typeof FlexDirection)[keyof typeof FlexDirection];

export const FlexWrap = {
  NoWrap: "nowrap",
  Wrap: "wrap",
  WrapReverse: "wrap-reverse",
} as const;
export type FlexWrapToken = (typeof FlexWrap)[keyof typeof FlexWrap];

export const Position = {
  Static: "static",
  Relative: "relative",
  Absolute: "absolute",
  Fixed: "fixed",
  Sticky: "sticky",
} as const;
export type PositionToken = (typeof Position)[keyof typeof Position];

export const Cursor = {
  Auto: "auto",
  Default: "default",
  Pointer: "pointer",
  Text: "text",
  Wait: "wait",
  Help: "help",
  NotAllowed: "not-allowed",
  Grab: "grab",
  Grabbing: "grabbing",
  Move: "move",
  ZoomIn: "zoom-in",
  ZoomOut: "zoom-out",
  None: "none",
} as const;
export type CursorToken = (typeof Cursor)[keyof typeof Cursor];

export const WhiteSpace = {
  Normal: "normal",
  NoWrap: "nowrap",
  Pre: "pre",
  PreWrap: "pre-wrap",
  PreLine: "pre-line",
  BreakSpaces: "break-spaces",
} as const;
export type WhiteSpaceToken = (typeof WhiteSpace)[keyof typeof WhiteSpace];

// ── Border ───────────────────────────────────────────────────────────

export const BorderRadius = {
  None: "0",
  Small: "4px",
  Medium: "6px",
  Large: "8px",
  XLarge: "12px",
  XXLarge: "16px",
  XXXLarge: "24px",
  Huge: "32px",
  XHuge: "48px",
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
  XSmall: "14px",
  Small: "16px",
  Medium: "20px",
  Large: "24px",
  XLarge: "32px",
  XXLarge: "40px",
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
