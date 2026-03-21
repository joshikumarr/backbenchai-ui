import React, { forwardRef, useId } from "react";
import { Stack } from "../primitives/Stack";
import { Text } from "../primitives/Text";
import { Select } from "../primitives/Select";
import type { SelectOption, SelectOptionGroup } from "../primitives/Select";
import {
  Spacing,
  FontSize,
  FontWeight,
  TextColor,
  BackgroundColor,
  BorderRadius,
  BorderColor,
} from "../tokens";
import type {
  TextColorToken,
  BackgroundColorToken,
  BorderRadiusToken,
  BorderColorToken,
  FontSizeToken,
  FontWeightToken,
  SpaceToken,
} from "../tokens";

export interface SelectFieldProps {
  label?: string;
  helperText?: string;
  errorText?: string;
  id?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  options: (SelectOption | SelectOptionGroup)[];
  disabled?: boolean;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
  /** Label text color (default: TextColor.Default) */
  labelColor?: TextColorToken;
  /** Label font size (default: FontSize.XSmall) */
  labelSize?: FontSizeToken;
  /** Label font weight (default: FontWeight.Medium) */
  labelWeight?: FontWeightToken;
  /** Select background (default: BackgroundColor.Subtle) */
  inputBackground?: BackgroundColorToken;
  /** Select border color (default: undefined — borderless) */
  inputBorderColor?: BorderColorToken;
  /** Select border radius (default: BorderRadius.XXLarge) */
  inputBorderRadius?: BorderRadiusToken;
  /** Select padding (default: Spacing.MediumLarge) */
  inputPadding?: SpaceToken;
  /** Label text-transform */
  labelTextTransform?: React.CSSProperties["textTransform"];
  /** Label letter-spacing */
  labelLetterSpacing?: string;
  /** Which sides get a border (default: "all") */
  inputBorderSide?: "all" | "bottom";
}

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  (
    {
      label,
      helperText,
      errorText,
      id: providedId,
      labelColor = TextColor.Default,
      labelSize = FontSize.XSmall,
      labelWeight = FontWeight.Medium,
      labelTextTransform,
      labelLetterSpacing,
      inputBackground = BackgroundColor.Subtle,
      inputBorderColor,
      inputBorderRadius = BorderRadius.XXLarge,
      inputBorderSide = "all",
      inputPadding = Spacing.MediumLarge,
      name,
      value,
      defaultValue,
      placeholder,
      options,
      disabled,
      required,
      onChange,
      onBlur,
    },
    ref
  ) => {
    const generatedId = useId();
    const id = providedId ?? generatedId;
    const helperId = `${id}-helper`;
    const errorId = `${id}-error`;
    const hasError = !!errorText;
    const borderVal = hasError ? BorderColor.Error : inputBorderColor;
    const isBottomBorder = inputBorderSide === "bottom";

    const selectEl = (
      <Select
        ref={ref}
        id={id}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        options={options}
        disabled={disabled}
        required={required}
        onChange={onChange}
        onBlur={onBlur}
        backgroundColor={isBottomBorder ? "transparent" : inputBackground}
        borderColor={isBottomBorder ? undefined : borderVal}
        borderRadius={isBottomBorder ? undefined : inputBorderRadius}
        padding={inputPadding}
        fontSize={FontSize.XSmall}
        color={TextColor.Default}
        style={{ width: "100%" }}
        aria-describedby={hasError ? errorId : helperText ? helperId : undefined}
        aria-invalid={hasError || undefined}
      />
    );

    const wrappedSelect = isBottomBorder ? (
      <div style={{
        width: "100%",
        backgroundColor: inputBackground,
        borderBottom: `2px solid ${borderVal}`,
      }}>
        {selectEl}
      </div>
    ) : selectEl;

    return (
      <Stack space={Spacing.XSmall}>
        {label && (
          <label
            htmlFor={id}
            style={{
              fontSize: labelSize,
              fontWeight: labelWeight,
              color: labelColor,
              textTransform: labelTextTransform,
              letterSpacing: labelLetterSpacing,
            }}
          >
            {label}
          </label>
        )}
        {wrappedSelect}
        {hasError && (
          <Text as="span" size={FontSize.XXSmall} color={TextColor.Error} id={errorId}>
            {errorText}
          </Text>
        )}
        {!hasError && helperText && (
          <Text as="span" size={FontSize.XXSmall} color={TextColor.Subtle} id={helperId}>
            {helperText}
          </Text>
        )}
      </Stack>
    );
  }
);

SelectField.displayName = "SelectField";
