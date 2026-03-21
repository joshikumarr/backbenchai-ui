import React, { forwardRef, useId } from "react";
import { Stack } from "../primitives/Stack";
import { Text } from "../primitives/Text";
import { TextInput } from "../primitives/TextInput";
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

export interface TextFieldProps {
  label?: string;
  helperText?: string;
  errorText?: string;
  id?: string;
  name?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string | number | readonly string[];
  defaultValue?: string | number | readonly string[];
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  autoFocus?: boolean;
  autoComplete?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  /** Label text color (default: TextColor.Default) */
  labelColor?: TextColorToken;
  /** Label font size (default: FontSize.XSmall) */
  labelSize?: FontSizeToken;
  /** Label font weight (default: FontWeight.Medium) */
  labelWeight?: FontWeightToken;
  /** Input background (default: BackgroundColor.Default) */
  inputBackground?: BackgroundColorToken;
  /** Input border color (default: BorderColor.Input) */
  inputBorderColor?: BorderColorToken;
  /** Input border radius (default: BorderRadius.Medium) */
  inputBorderRadius?: BorderRadiusToken;
  /** Input padding (default: Spacing.Medium) */
  inputPadding?: SpaceToken;
  /** Label text-transform */
  labelTextTransform?: React.CSSProperties["textTransform"];
  /** Label letter-spacing */
  labelLetterSpacing?: string;
  /** Which sides get a border (default: "all") */
  inputBorderSide?: "all" | "bottom";
  /** Element rendered before the input */
  startAdornment?: React.ReactNode;
  /** Element rendered after the input */
  endAdornment?: React.ReactNode;
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
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
      inputBackground = BackgroundColor.Default,
      inputBorderColor = BorderColor.Input,
      inputBorderRadius = BorderRadius.Medium,
      inputBorderSide = "all",
      inputPadding = Spacing.Medium,
      startAdornment,
      endAdornment,
      name,
      type,
      placeholder,
      value,
      defaultValue,
      disabled,
      readOnly,
      required,
      autoFocus,
      autoComplete,
      onChange,
      onBlur,
      onFocus,
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

    const needsWrapper = isBottomBorder || !!(startAdornment || endAdornment);

    const inputEl = (
      <TextInput
        ref={ref}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        backgroundColor={needsWrapper ? "transparent" : inputBackground}
        borderColor={needsWrapper ? undefined : borderVal}
        borderRadius={needsWrapper ? undefined : inputBorderRadius}
        padding={inputPadding}
        style={{
          width: "100%",
          ...(needsWrapper ? { flex: "1 1 auto", minWidth: 0 } : {}),
        }}
        aria-describedby={hasError ? errorId : helperText ? helperId : undefined}
        aria-invalid={hasError || undefined}
      />
    );

    const wrappedInput = needsWrapper ? (
      <div style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        backgroundColor: inputBackground,
        ...(isBottomBorder
          ? { borderBottom: `2px solid ${borderVal}` }
          : { border: `1px solid ${borderVal}`, borderRadius: inputBorderRadius }),
      }}>
        {startAdornment}
        {inputEl}
        {endAdornment}
      </div>
    ) : inputEl;

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
        {wrappedInput}
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

TextField.displayName = "TextField";
