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

/**
 * Visual treatment.
 *   filled    — solid Subtle background when unselected, Brand when selected.
 *   outlined  — transparent + Outline border when unselected, Brand when selected.
 */
export type ChipAppearance = "filled" | "outlined";

/**
 * Padding density.
 *   compact     — XSmall block, Medium inline. Default. Hugs the label.
 *   comfortable — Small block, MediumLarge inline. Roomier; close to the
 *                 pre-Chip Button-as-chip dimensions.
 */
export type ChipDensity = "compact" | "comfortable";

export interface ChipProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  /** Whether the chip is in the selected/active state. */
  selected?: boolean;
  /** Visual treatment. Default: "filled". */
  appearance?: ChipAppearance;
  /** Padding density. Default: "compact". */
  density?: ChipDensity;
  /** Label font weight. Default: FontWeight.Medium. */
  fontWeight?: FontWeightToken;
  /** Label font size. Default: FontSize.XSmall. */
  fontSize?: FontSizeToken;
  /** Optional leading node (icon, avatar, etc.) rendered before the label. */
  icon?: React.ReactNode;
  /** When true, renders a Material check icon before the label while selected. */
  showCheckWhenSelected?: boolean;
  children?: React.ReactNode;
}

const DENSITY_PADDING: Record<ChipDensity, { block: string; inline: string }> = {
  compact: { block: Spacing.XSmall, inline: Spacing.Medium },
  comfortable: { block: Spacing.Small, inline: Spacing.MediumLarge },
};

/**
 * Selectable pill. Lighter and tighter than `<Button borderRadius={Full}>` —
 * use for multi-select chip rows, category filters, and tag pickers. Renders
 * as a `<button>` with `aria-pressed` reflecting `selected`.
 *
 * Example:
 *   <Chip selected={isOn} onClick={toggle}>PG</Chip>
 *   <Chip appearance="outlined" showCheckWhenSelected ...>Pet-friendly</Chip>
 *   <Chip icon={<Icon name="restaurant" />}>Food</Chip>
 */
export const Chip = forwardRef<HTMLButtonElement, ChipProps>(
  (
    {
      selected = false,
      appearance = "filled",
      density = "compact",
      fontWeight = FontWeight.Medium,
      fontSize = FontSize.XSmall,
      icon,
      showCheckWhenSelected = false,
      disabled,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const padding = DENSITY_PADDING[density];

    const backgroundColor = selected
      ? BackgroundColor.Brand
      : appearance === "outlined"
        ? BackgroundColor.Transparent
        : BackgroundColor.Subtle;

    const color = selected ? TextColor.OnBrand : TextColor.Default;

    // Always reserve 1px of border so swapping between outlined/filled
    // doesn't shift adjacent chips.
    const border =
      appearance === "outlined" && !selected
        ? `1px solid ${BorderColor.Outline}`
        : "1px solid transparent";

    const computedStyle: React.CSSProperties = {
      display: "inline-flex",
      alignItems: "center",
      gap: Spacing.XSmall,
      paddingBlock: padding.block,
      paddingInline: padding.inline,
      borderRadius: BorderRadius.Full,
      backgroundColor,
      color,
      border,
      fontWeight,
      fontSize,
      lineHeight: 1.2,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      whiteSpace: "nowrap",
      ...style,
    };

    return (
      <button
        ref={ref}
        type="button"
        aria-pressed={selected}
        disabled={disabled}
        style={computedStyle}
        {...rest}
      >
        {icon}
        {showCheckWhenSelected && selected && (
          <span
            className="material-symbols-outlined"
            style={{ fontSize: 14 }}
            aria-hidden
          >
            check
          </span>
        )}
        {children}
      </button>
    );
  }
);

Chip.displayName = "Chip";
