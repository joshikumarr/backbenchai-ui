import React, { forwardRef } from "react";
import { Box } from "./Box";
import { Text } from "./Text";
import { IconButton } from "./IconButton";
import { Inline } from "./Inline";
import {
  Spacing,
  FontSize,
  FontWeight,
  TextColor,
  BackgroundColor,
  BorderRadius,
} from "../tokens";
import type { BackgroundColorToken, SpaceToken } from "../tokens";

export interface StepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  /** Background for the control (default: BackgroundColor.Subtle) */
  backgroundColor?: BackgroundColorToken;
  /** Padding inside the control */
  padding?: SpaceToken;
}

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: "16px", height: "16px" }}>
    <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: "16px", height: "16px" }}>
    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
  </svg>
);

export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      value,
      onChange,
      min = 0,
      max = 99,
      step: stepSize = 1,
      disabled = false,
      backgroundColor = BackgroundColor.Subtle,
      padding = Spacing.XSmall,
    },
    ref
  ) => {
    const canDecrement = value - stepSize >= min;
    const canIncrement = value + stepSize <= max;

    return (
      <div
        ref={ref}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: Spacing.Medium,
          backgroundColor,
          borderRadius: BorderRadius.Large,
          padding,
        }}
      >
        <IconButton
          label="Decrease"
          onClick={() => canDecrement && onChange(value - stepSize)}
          disabled={disabled || !canDecrement}
          color={TextColor.Brand}
          padding={Spacing.XSmall}
        >
          <MinusIcon />
        </IconButton>
        <Text
          as="span"
          size={FontSize.Medium}
          weight={FontWeight.Bold}
          color={TextColor.Default}
          style={{ minWidth: "32px", textAlign: "center" }}
        >
          {value}
        </Text>
        <IconButton
          label="Increase"
          onClick={() => canIncrement && onChange(value + stepSize)}
          disabled={disabled || !canIncrement}
          color={TextColor.Brand}
          padding={Spacing.XSmall}
        >
          <PlusIcon />
        </IconButton>
      </div>
    );
  }
);

Stepper.displayName = "Stepper";
