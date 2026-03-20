import React, { forwardRef, useId } from "react";
import type { TextColorToken } from "../tokens";
import { TextColor } from "../tokens";

export type SpinnerSize = "xsmall" | "small" | "medium" | "large" | "xlarge";

export interface SpinnerProps {
  size?: SpinnerSize;
  /** Accessible label (default: "Loading") */
  label?: string;
  /** Spinner color (default: TextColor.Brand) */
  color?: TextColorToken;
}

const sizeMap: Record<SpinnerSize, number> = {
  xsmall: 16,
  small: 24,
  medium: 32,
  large: 48,
  xlarge: 64,
};

const strokeMap: Record<SpinnerSize, number> = {
  xsmall: 2,
  small: 2,
  medium: 3,
  large: 3,
  xlarge: 4,
};

export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ size = "medium", label = "Loading", color = TextColor.Brand }, ref) => {
    const animId = useId().replace(/:/g, "");
    const px = sizeMap[size];
    const stroke = strokeMap[size];
    const radius = (px - stroke) / 2;
    const circumference = 2 * Math.PI * radius;

    return (
      <span
        ref={ref}
        role="status"
        aria-label={label}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: px,
          height: px,
        }}
      >
        <style>{`
          @keyframes bbui-spin-${animId} {
            to { transform: rotate(360deg); }
          }
        `}</style>
        <svg
          width={px}
          height={px}
          viewBox={`0 0 ${px} ${px}`}
          fill="none"
          style={{
            animation: `bbui-spin-${animId} 0.8s linear infinite`,
          }}
        >
          <circle
            cx={px / 2}
            cy={px / 2}
            r={radius}
            stroke={color}
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference * 0.7}
            opacity={0.9}
          />
          <circle
            cx={px / 2}
            cy={px / 2}
            r={radius}
            stroke={color}
            strokeWidth={stroke}
            opacity={0.15}
          />
        </svg>
      </span>
    );
  }
);

Spinner.displayName = "Spinner";
