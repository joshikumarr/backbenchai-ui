import { forwardRef } from "react";
import { Stack } from "../primitives/Stack";
import { Button } from "../primitives/Button";
import {
  Spacing,
  FontSize,
  FontWeight,
  BorderRadius,
  BorderColor,
  BackgroundColor,
  TextColor,
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
    return (
      <Stack
        ref={ref as never}
        space={Spacing.Medium}
        role="radiogroup"
      >
        {labels.map((label, i) => {
          const score = i + 1;
          const isSelected = value === score;
          return (
            <Button
              key={score}
              role="radio"
              aria-checked={isSelected}
              aria-label={label}
              onClick={() => onChange(score)}
              label={label}
              width="100%"
              align="center"
              paddingBlock={Spacing.MediumLarge}
              paddingInline={Spacing.MediumLarge}
              borderRadius={BorderRadius.Large}
              borderColor={BorderColor.Default}
              borderColorHover={BorderColor.Focus}
              borderColorPressed={BorderColor.Focus}
              backgroundColor={BackgroundColor.Transparent}
              hover={BackgroundColor.BrandBold}
              pressed={BackgroundColor.BrandBold}
              color={TextColor.Default}
              colorHover={TextColor.OnBrand}
              colorPressed={TextColor.OnBrand}
              size={FontSize.Small}
              weight={FontWeight.Medium}
            />
          );
        })}
      </Stack>
    );
  }
);

LikertScale.displayName = "LikertScale";
