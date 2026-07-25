import React, { forwardRef } from "react";
import {
  TextColor,
  BackgroundColor,
  BorderColor,
  FontSize,
  FontWeight,
  Spacing,
  BorderRadius,
  type FontSizeToken,
  type FontWeightToken,
} from "../tokens";
import type { BadgeVariant } from "./Badge";

/**
 * Visual treatment.
 *   filled    — solid Subtle background when unselected, Brand when selected.
 *   outlined  — transparent + Outline border when unselected, Brand when selected.
 *   glass     — frosted surface (glass tokens); hover fills with brand and
 *               flips inherited content to on-brand; selected = brand fill
 *               with glow (the screen's one primary action). Colors come
 *               from styles.css (.bbui-chip-glass), not inline styles, so
 *               interactive states can live in CSS.
 *
 * Ignored when `variant` is set — variants paint their own colors.
 */
export type ChipAppearance = "filled" | "outlined" | "glass";

/**
 * Padding density.
 *   compact     — XXSmall block, Small inline. Default. Hugs the label tight.
 *   comfortable — XSmall block, Medium inline. Roomier; for hero/nav rows.
 */
export type ChipDensity = "compact" | "comfortable";

export interface ChipProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color"> {
  /**
   * Selected/active state for interactive chips. Omit entirely for static
   * display chips — without `selected` AND without `onClick` the chip
   * renders as a `<span>` (no button semantics, no focus ring, no
   * aria-pressed).
   */
  selected?: boolean;
  /** Visual treatment. Default: "filled". Ignored when `variant` is set. */
  appearance?: ChipAppearance;
  /** Padding density. Default: "compact". */
  density?: ChipDensity;
  /**
   * Color preset matching the Badge palette. Use for static display chips
   * (status tags, property type labels, rating pills). When set, overrides
   * appearance + selected colors entirely.
   */
  variant?: BadgeVariant;
  /** Label font weight. Default: FontWeight.Medium. */
  fontWeight?: FontWeightToken;
  /** Label font size. Default: FontSize.XSmall. */
  fontSize?: FontSizeToken;
  /** Optional leading node (icon, avatar, etc.) rendered before the label. */
  icon?: React.ReactNode;
  /** When true, renders a Material check icon before the label while selected. */
  showCheckWhenSelected?: boolean;
  /** Click handler. Presence flips the chip from static to interactive. */
  onClick?: React.MouseEventHandler<HTMLElement>;
  /** Disabled state (only meaningful for interactive chips). */
  disabled?: boolean;
  children?: React.ReactNode;
}

const DENSITY_PADDING: Record<ChipDensity, { block: string; inline: string }> = {
  compact: { block: Spacing.XXSmall, inline: Spacing.Small },
  comfortable: { block: Spacing.XSmall, inline: Spacing.Medium },
};

/**
 * Variant color presets — mirrored from Badge so a single primitive can
 * cover both selectable chips and Badge-style display tags. Kept here
 * rather than imported so Chip stays self-contained if Badge is removed.
 */
const VARIANT_STYLES: Record<BadgeVariant, { backgroundColor: string; color: string }> = {
  default: { backgroundColor: BackgroundColor.NeutralBold, color: TextColor.Default },
  success: { backgroundColor: BackgroundColor.Success, color: TextColor.Inverse },
  warning: { backgroundColor: BackgroundColor.Warning, color: TextColor.Warning },
  error: { backgroundColor: BackgroundColor.Error, color: TextColor.Error },
  info: { backgroundColor: BackgroundColor.Info, color: TextColor.Info },
  brand: { backgroundColor: BackgroundColor.Brand, color: TextColor.Inverse },
  primaryTint: { backgroundColor: BackgroundColor.PrimaryTint, color: TextColor.Brand },
  errorTint: { backgroundColor: BackgroundColor.ErrorTint, color: TextColor.Error },
  warningTint: { backgroundColor: BackgroundColor.WarningTint, color: "#ea580c" },
  infoTint: { backgroundColor: BackgroundColor.InfoTint, color: "#2563eb" },
  accentTint: { backgroundColor: BackgroundColor.AccentTint, color: "#7c3aed" },
};

/**
 * Pill primitive — covers both selectable chips and Badge-style display tags.
 *
 * Interactive (button):
 *   <Chip selected={isOn} onClick={toggle}>PG</Chip>
 *   <Chip appearance="outlined" showCheckWhenSelected onClick={...}>Pet-friendly</Chip>
 *
 * Static display (span):
 *   <Chip variant="primaryTint">3BHK</Chip>
 *   <Chip variant="primaryTint" icon={<StarIcon />}>4.8</Chip>
 *
 * The element auto-switches: `<span>` by default, `<button>` once `onClick`
 * or `selected` is provided. Pass extra props through `...rest` either way.
 */
export const Chip = forwardRef<HTMLElement, ChipProps>(
  (
    {
      selected,
      appearance = "filled",
      density = "compact",
      variant,
      fontWeight = FontWeight.Medium,
      fontSize: fontSizeProp,
      icon,
      showCheckWhenSelected = false,
      onClick,
      disabled,
      style,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    const isInteractive = onClick !== undefined || selected !== undefined;
    const isSelected = selected === true;

    // Variant chips are display tags (Badge replacement) — match Badge's
    // tighter typography + padding so short labels like "Villa" hug the
    // text. Interactive chips keep the larger, more tappable defaults.
    const fontSize = fontSizeProp ?? (variant ? FontSize.XXSmall : FontSize.XSmall);
    const padding = variant
      ? { block: Spacing.XXSmall, inline: Spacing.XSmall }
      : DENSITY_PADDING[density];

    const isGlass = !variant && appearance === "glass";

    let backgroundColor: string | undefined;
    let color: string | undefined;
    if (variant) {
      const v = VARIANT_STYLES[variant];
      backgroundColor = v.backgroundColor;
      color = v.color;
    } else if (!isGlass) {
      backgroundColor = isSelected
        ? BackgroundColor.Brand
        : appearance === "outlined"
          ? BackgroundColor.Transparent
          : BackgroundColor.Subtle;
      color = isSelected ? TextColor.OnBrand : TextColor.Default;
    }
    // glass: background/color/border owned by .bbui-chip-glass in styles.css
    // so hover/active states work; inline values would override them.

    // Reserve 1px of border so swapping between outlined/filled (or between
    // unselected/selected) doesn't shift adjacent chips in a row.
    const border = isGlass
      ? undefined
      : !variant && appearance === "outlined" && !isSelected
        ? `1px solid ${BorderColor.Outline}`
        : "1px solid transparent";

    const computedStyle: React.CSSProperties = {
      display: "inline-flex",
      alignItems: "center",
      gap: Spacing.XSmall,
      paddingBlock: padding.block,
      paddingInline: padding.inline,
      borderRadius: BorderRadius.Full,
      ...(backgroundColor !== undefined && { backgroundColor }),
      ...(color !== undefined && { color }),
      ...(border !== undefined && { border }),
      fontFamily: "inherit",
      fontWeight,
      fontSize,
      lineHeight: 1.2,
      cursor: isInteractive ? (disabled ? "not-allowed" : "pointer") : "default",
      opacity: disabled ? 0.5 : 1,
      whiteSpace: "nowrap",
      width: "auto",
      flex: "0 0 auto",
      // Stop a flex parent (Stack/Inline with default align-items: stretch)
      // from stretching the chip to fill the cross-axis. Without this,
      // a <Chip> inside <Stack> renders edge-to-edge instead of fit-to-text.
      alignSelf: "flex-start",
      ...style,
    };

    const glassClass = isGlass
      ? `bbui-chip-glass${isSelected ? " bbui-chip-glass--selected" : ""}`
      : undefined;
    const composedClassName =
      [glassClass, className].filter(Boolean).join(" ") || undefined;

    // Icons/avatars ride in .bbui-chip-icon so the glass hover-fill can flip
    // their color along with the label (no-op for other appearances).
    const leading = icon ? (
      <span
        className="bbui-chip-icon"
        style={{ display: "inline-flex", alignItems: "center" }}
        aria-hidden
      >
        {icon}
      </span>
    ) : null;

    const checkIcon = showCheckWhenSelected && isSelected ? (
      <span
        className="material-symbols-outlined"
        style={{ fontSize: 14 }}
        aria-hidden
      >
        check
      </span>
    ) : null;

    if (isInteractive) {
      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          type="button"
          aria-pressed={selected}
          disabled={disabled}
          onClick={onClick}
          style={computedStyle}
          className={composedClassName}
          {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
        >
          {leading}
          {checkIcon}
          {children}
        </button>
      );
    }

    return (
      <span
        ref={ref as React.Ref<HTMLSpanElement>}
        style={computedStyle}
        className={composedClassName}
        {...(rest as React.HTMLAttributes<HTMLSpanElement>)}
      >
        {leading}
        {children}
      </span>
    );
  }
);

Chip.displayName = "Chip";
