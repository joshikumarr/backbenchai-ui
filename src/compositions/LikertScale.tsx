import React, { forwardRef, useState } from "react";
import {
  Spacing,
  FontSize,
  FontWeight,
  BorderRadius,
} from "../tokens";

export interface LikertScaleProps {
  value?: number;
  onChange: (value: number) => void;
  /** Labels for each option (length defines option count, default 5) */
  labels?: string[];
}

const DEFAULT_LABELS = [
  "Strongly Disagree",
  "Disagree",
  "Neutral",
  "Agree",
  "Strongly Agree",
];

export const LikertScale = forwardRef<HTMLDivElement, LikertScaleProps>(
  ({ value, onChange, labels = DEFAULT_LABELS }, ref) => {
    const [hover, setHover] = useState<number | null>(null);

    return (
      <div ref={ref} role="radiogroup" style={rootStyle}>
        {labels.map((label, i) => {
          const score = i + 1;
          const isSelected = value === score;
          const isHover = !isSelected && hover === score;
          return (
            <button
              key={score}
              type="button"
              role="radio"
              aria-checked={isSelected}
              aria-label={label}
              onClick={() => onChange(score)}
              onMouseEnter={() => setHover(score)}
              onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(score)}
              onBlur={() => setHover(null)}
              style={tileStyle(isSelected, isHover)}
            >
              {label}
            </button>
          );
        })}
      </div>
    );
  }
);

LikertScale.displayName = "LikertScale";

const rootStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: Spacing.Medium,
  width: "100%",
};

const tileStyle = (isSelected: boolean, isHover: boolean): React.CSSProperties => {
  const brand = "var(--bbui-color-primary)";
  const bg = isSelected
    ? "var(--bbui-bg-primary-container)"
    : isHover
    ? "rgba(255,255,255,0.06)"
    : "rgba(255,255,255,0.03)";
  const border = isSelected || isHover ? brand : "rgba(255,255,255,0.08)";
  return {
    width: "100%",
    height: "48px",
    padding: `0 ${Spacing.MediumLarge}`,
    borderRadius: BorderRadius.Large,
    border: `1px solid ${border}`,
    background: bg,
    color: "#ffffff",
    fontSize: FontSize.Small,
    fontWeight: FontWeight.Medium,
    textAlign: "center",
    cursor: "pointer",
    transition: "background 180ms ease, border-color 180ms ease",
    font: "inherit",
  };
};
