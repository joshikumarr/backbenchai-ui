/**
 * Design tokens — NestOS Material Design 3 theme.
 *
 * All values are direct CSS strings/numbers.
 * Based on the NestOS portal design system:
 *   Primary: #006e2f (green)
 *   Surface: #faf8ff (blue-white)
 *   Fonts: Manrope (headlines), Inter (body)
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
  /** #131b2e — on-surface (main text) */
  Default: "#131b2e",
  /** #575e70 — secondary */
  Subtle: "#575e70",
  /** #6d7b6c — outline */
  Subtlest: "#6d7b6c",
  /** #bccbb9 — outline-variant */
  Disabled: "#bccbb9",
  /** #ffffff — on-primary / inverse */
  Inverse: "#ffffff",
  /** #006e2f — primary */
  Brand: "#006e2f",
  /** #004b1e — on-primary-container */
  Selected: "#004b1e",
  /** #006e2f — primary (matches brand in NestOS green theme) */
  Success: "#006e2f",
  /** #92400e */
  Warning: "#92400e",
  /** #ba1a1a — M3 error */
  Error: "#ba1a1a",
  /** #93000a — on-error-container */
  ErrorContainer: "#93000a",
  /** #1e40af */
  Info: "#1e40af",
  /** #006e2f — primary (links match brand) */
  Link: "#006e2f",
  /** #3d4a3d — on-surface-variant */
  OnSurfaceVariant: "#3d4a3d",
} as const;

export type TextColorToken = (typeof TextColor)[keyof typeof TextColor];

export const BackgroundColor = {
  Transparent: "transparent",
  /** #ffffff — surface-container-lowest (cards, inputs) */
  Default: "#ffffff",
  /** #faf8ff — surface (page background) */
  Surface: "#faf8ff",
  /** #f2f3ff — surface-container-low (tinted inputs, backgrounds) */
  Subtle: "#f2f3ff",
  /** #eaedff — surface-container */
  Neutral: "#eaedff",
  /** #e2e7ff — surface-container-high (chips, pills) */
  NeutralBold: "#e2e7ff",
  /** #dae2fd — surface-container-highest */
  NeutralBolder: "#dae2fd",
  /** #f8fafc — sidebar background (slate-50) */
  SidebarBg: "#f8fafc",
  /** #131b2e — on-surface (dark backgrounds) */
  Dark: "#131b2e",
  /** #283044 — inverse-surface */
  DarkHover: "#283044",
  /** #111827 */
  DarkActive: "#111827",
  /** #4f46e5 — accent (indigo) */
  Accent: "#4f46e5",
  /** #006e2f — primary */
  Brand: "#006e2f",
  /** #004b1e — on-primary-container */
  BrandBold: "#004b1e",
  /** #22c55e — primary-container (bright green) */
  PrimaryContainer: "#22c55e",
  /** #d9dff5 — secondary-container */
  SecondaryContainer: "#d9dff5",
  /** #22c55e — primary-container */
  Success: "#22c55e",
  /** #006e2f — primary */
  SuccessBold: "#006e2f",
  /** #fef3c7 */
  Warning: "#fef3c7",
  /** #f59e0b */
  WarningBold: "#f59e0b",
  /** #ffdad6 — error-container */
  Error: "#ffdad6",
  /** #ba1a1a — M3 error */
  ErrorBold: "#ba1a1a",
  /** #dbeafe */
  Info: "#dbeafe",
  /** #3b82f6 */
  InfoBold: "#3b82f6",
  /** rgba(0,0,0,0.5) */
  Overlay: "rgba(0,0,0,0.5)",
  // ── Tint variants (10% alpha for Badge/status backgrounds) ──
  /** rgba(0,110,47,0.1) — primary at 10% */
  PrimaryTint: "rgba(0,110,47,0.1)",
  /** rgba(186,26,26,0.1) — error at 10% */
  ErrorTint: "rgba(186,26,26,0.1)",
  /** rgba(87,94,112,0.1) — secondary at 10% */
  SecondaryTint: "rgba(87,94,112,0.1)",
  /** rgba(251,146,60,0.1) — orange at 10% */
  WarningTint: "rgba(251,146,60,0.1)",
  /** rgba(59,130,246,0.1) — blue at 10% */
  InfoTint: "rgba(59,130,246,0.1)",
  /** rgba(192,132,252,0.1) — purple at 10% */
  AccentTint: "rgba(192,132,252,0.1)",
} as const;

export type BackgroundColorToken =
  (typeof BackgroundColor)[keyof typeof BackgroundColor];

// ── Typography ───────────────────────────────────────────────────────

export const FontFamily = {
  /** SF Pro Display — headlines, display text */
  Display: "'SF Pro Display', 'SF Pro', -apple-system, BlinkMacSystemFont, sans-serif",
  /** SF Pro Text — body text, labels, UI */
  Body: "'SF Pro Text', 'SF Pro', -apple-system, BlinkMacSystemFont, sans-serif",
} as const;

export type FontFamilyToken = (typeof FontFamily)[keyof typeof FontFamily];

export const FontSize = {
  /** 0.625rem / 10px — micro labels */
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
  /** 900 — used for large display numbers */
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
  /** 4px */
  Small: "0.25rem",
  /** 6px */
  Medium: "0.375rem",
  /** 8px */
  Large: "0.5rem",
  /** 12px */
  XLarge: "0.75rem",
  /** 16px — default card radius in NestOS */
  XXLarge: "1rem",
  /** 24px */
  XXXLarge: "1.5rem",
  /** 32px — large containers, sidebar */
  Huge: "2rem",
  /** 48px */
  XHuge: "3rem",
  /** 9999px — pills, circles */
  Full: "9999px",
} as const;

export type BorderRadiusToken =
  (typeof BorderRadius)[keyof typeof BorderRadius];

export const BorderColor = {
  /** #eaedff — surface-container */
  Default: "#eaedff",
  /** #e2e7ff — surface-container-high */
  Input: "#e2e7ff",
  /** #fbbf24 */
  Warning: "#fbbf24",
  /** #fca5a5 */
  Error: "#fca5a5",
  /** #93c5fd */
  Info: "#93c5fd",
  /** #86efac */
  Success: "#86efac",
  /** #006e2f — primary (focus rings) */
  Focus: "#006e2f",
  /** #bccbb9 — outline-variant */
  Outline: "#bccbb9",
} as const;

export type BorderColorToken =
  (typeof BorderColor)[keyof typeof BorderColor];

export const BorderWidth = {
  /** 1px — default borders */
  Thin: "1px",
  /** 2px — medium emphasis */
  Medium: "2px",
  /** 4px — accent borders */
  Thick: "4px",
  /** 8px — status stripe on cards */
  XThick: "8px",
} as const;

export type BorderWidthToken =
  (typeof BorderWidth)[keyof typeof BorderWidth];

// ── Accent / Status stripe colors (for Card top borders) ────────────

export const AccentColor = {
  /** #22c55e — occupied / active */
  Occupied: "#22c55e",
  /** #cbd5e1 — vacant (slate-300) */
  Vacant: "#cbd5e1",
  /** #fb923c — maintenance (orange-400) */
  Maintenance: "#fb923c",
  /** #3b82f6 — reserved (blue-500) */
  Reserved: "#3b82f6",
  /** #c084fc — cleaning (purple-400) */
  Cleaning: "#c084fc",
  /** #006e2f — primary */
  Primary: "#006e2f",
  /** #ba1a1a — error */
  Error: "#ba1a1a",
} as const;

export type AccentColorToken =
  (typeof AccentColor)[keyof typeof AccentColor];

// ── Elevation ────────────────────────────────────────────────────────

export const Elevation = {
  None: "none",
  /** Subtle card shadow */
  Raised: "0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.06)",
  /** NestOS ambient — wide, soft, barely-visible */
  Ambient: "0 40px 60px -15px rgba(19,27,46,0.04)",
  /** Dropdown menus */
  Dropdown: "0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1)",
  /** Modals, overlays */
  Overlay: "0 20px 25px -5px rgba(0,0,0,.1), 0 8px 10px -6px rgba(0,0,0,.1)",
  /** Card hover — green-tinted */
  CardHover: "0 20px 40px -15px rgba(0,110,47,0.08)",
} as const;

export type ElevationToken = (typeof Elevation)[keyof typeof Elevation];

// ── Gradient ─────────────────────────────────────────────────────────

export const Gradient = {
  /** Primary CTA gradient: bright green → dark green */
  Brand: "linear-gradient(135deg, #22c55e 0%, #006e2f 100%)",
} as const;

export type GradientToken = (typeof Gradient)[keyof typeof Gradient];

// ── Container Width ──────────────────────────────────────────────────

export const ContainerWidth = {
  Small: "640px",
  Medium: "768px",
  Large: "1024px",
  XLarge: "1280px",
  /** 1600px — wide content areas */
  XXLarge: "1600px",
} as const;

export type ContainerWidthToken =
  (typeof ContainerWidth)[keyof typeof ContainerWidth];

// ── Z-Index ─────────────────────────────────────────────────────────

export const ZIndex = {
  Dropdown: 100,
  Sticky: 200,
  Modal: 300,
  Banner: 400,
  FAB: 50,
} as const;

export type ZIndexToken = (typeof ZIndex)[keyof typeof ZIndex];

// ── Icon Size ───────────────────────────────────────────────────────

export const IconSize = {
  Small: "1rem",
  Medium: "1.25rem",
  Large: "1.5rem",
  XLarge: "2rem",
  /** 2.5rem — large display icons */
  XXLarge: "2.5rem",
} as const;

export type IconSizeToken = (typeof IconSize)[keyof typeof IconSize];
