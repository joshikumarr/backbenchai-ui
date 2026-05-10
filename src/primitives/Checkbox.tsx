import React, { forwardRef, useId } from "react";
import { BackgroundColor, BorderColor, BorderRadius, TextColor, FontSize, Spacing } from "../tokens";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  label?: string;
  /** Visual size (default: "medium") */
  size?: "small" | "medium" | "large";
}

const sizeMap = {
  small: { box: "16px", font: FontSize.XXSmall, gap: Spacing.XSmall },
  medium: { box: "20px", font: FontSize.XSmall, gap: Spacing.Medium },
  large: { box: "24px", font: FontSize.Small, gap: Spacing.Medium },
};

const CheckIcon = ({ size }: { size: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    style={{ width: size, height: size }}
  >
    <path
      fillRule="evenodd"
      d="M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z"
      clipRule="evenodd"
    />
  </svg>
);

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, size = "medium", checked, disabled, style, id: providedId, ...rest }, ref) => {
    const generatedId = useId();
    const id = providedId ?? generatedId;
    const s = sizeMap[size];
    const isChecked = !!checked;

    const boxStyle: React.CSSProperties = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: s.box,
      height: s.box,
      borderRadius: BorderRadius.Small,
      flexShrink: 0,
      border: isChecked ? "none" : `2px solid ${BorderColor.Outline}`,
      backgroundColor: isChecked
        ? disabled
          ? TextColor.Disabled
          : BackgroundColor.Brand
        : BackgroundColor.Transparent,
      color: TextColor.Inverse,
      cursor: disabled ? "default" : "pointer",
      opacity: disabled ? 0.5 : 1,
    };

    return (
      <label
        htmlFor={id}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: s.gap,
          cursor: disabled ? "default" : "pointer",
          ...style,
        }}
      >
        <input
          ref={ref}
          id={id}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          style={{
            position: "absolute",
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0,0,0,0)",
            whiteSpace: "nowrap",
            border: 0,
          }}
          {...rest}
        />
        <span style={boxStyle} aria-hidden="true">
          {isChecked && <CheckIcon size={`calc(${s.box} - 4px)`} />}
        </span>
        {label && (
          <span
            style={{
              fontSize: s.font,
              color: disabled ? TextColor.Disabled : TextColor.Default,
            }}
          >
            {label}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
