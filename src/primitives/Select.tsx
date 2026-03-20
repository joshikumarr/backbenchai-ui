import React, { forwardRef } from "react";
import type {
  SpaceToken,
  BackgroundColorToken,
  BorderRadiusToken,
  BorderColorToken,
  FontSizeToken,
  TextColorToken,
} from "../tokens";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectOptionGroup {
  label: string;
  options: SelectOption[];
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  options: (SelectOption | SelectOptionGroup)[];
  placeholder?: string;
  backgroundColor?: BackgroundColorToken;
  borderColor?: BorderColorToken;
  borderRadius?: BorderRadiusToken;
  padding?: SpaceToken;
  paddingBlock?: SpaceToken;
  paddingInline?: SpaceToken;
  fontSize?: FontSizeToken;
  color?: TextColorToken;
}

function isGroup(opt: SelectOption | SelectOptionGroup): opt is SelectOptionGroup {
  return "options" in opt;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      options,
      placeholder,
      backgroundColor,
      borderColor,
      borderRadius,
      padding,
      paddingBlock,
      paddingInline,
      fontSize,
      color,
      style,
      ...rest
    },
    ref
  ) => {
    const computedStyle: React.CSSProperties = {
      appearance: "none",
      fontFamily: "inherit",
      width: "100%",
      cursor: "pointer",
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23575e70'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 0.75rem center",
      backgroundSize: "1rem",
      paddingRight: "2.5rem",
      ...(backgroundColor && { backgroundColor }),
      ...(borderColor ? { border: `1px solid ${borderColor}` } : { border: "none" }),
      ...(borderRadius && { borderRadius }),
      ...(padding && { padding }),
      ...(paddingBlock && { paddingBlock }),
      ...(paddingInline && { paddingInline }),
      ...(fontSize && { fontSize }),
      ...(color && { color }),
      ...style,
    };

    return (
      <select ref={ref} style={computedStyle} {...rest}>
        {placeholder && (
          <option value="" disabled hidden>
            {placeholder}
          </option>
        )}
        {options.map((opt) =>
          isGroup(opt) ? (
            <optgroup key={opt.label} label={opt.label}>
              {opt.options.map((o) => (
                <option key={o.value} value={o.value} disabled={o.disabled}>
                  {o.label}
                </option>
              ))}
            </optgroup>
          ) : (
            <option key={opt.value} value={opt.value} disabled={opt.disabled}>
              {opt.label}
            </option>
          )
        )}
      </select>
    );
  }
);

Select.displayName = "Select";
