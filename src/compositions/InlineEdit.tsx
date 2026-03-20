import React, { forwardRef, useState, useRef, useEffect, useCallback } from "react";
import { Stack } from "../primitives/Stack";
import { Inline } from "../primitives/Inline";
import { Box } from "../primitives/Box";
import { Text } from "../primitives/Text";
import { TextInput } from "../primitives/TextInput";
import { IconButton } from "../primitives/IconButton";
import {
  Spacing,
  FontSize,
  TextColor,
  BackgroundColor,
  BorderColor,
  BorderRadius,
} from "../tokens";

export interface InlineEditProps {
  /** Current / default value */
  defaultValue: string;
  label?: string;
  /** Accessible label for the edit button (default: defaultValue) */
  editButtonLabel?: string;
  /** Custom edit view — receives field props. Defaults to a TextInput. */
  editView?: (props: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    autoFocus: boolean;
  }) => React.ReactNode;
  /** Custom read view. Defaults to a Text span. */
  readView?: (value: string) => React.ReactNode;
  /** Called with the new value when the user confirms */
  onConfirm: (value: string) => void;
  /** Called when the user cancels editing */
  onCancel?: () => void;
}

const ConfirmIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: "1rem", height: "1rem" }}>
    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
  </svg>
);

const CancelIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: "1rem", height: "1rem" }}>
    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
  </svg>
);

export const InlineEdit = forwardRef<HTMLDivElement, InlineEditProps>(
  (
    {
      defaultValue,
      label,
      editButtonLabel,
      editView,
      readView,
      onConfirm,
      onCancel,
    },
    ref
  ) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(defaultValue);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      setEditValue(defaultValue);
    }, [defaultValue]);

    const handleConfirm = useCallback(() => {
      setIsEditing(false);
      onConfirm(editValue);
    }, [editValue, onConfirm]);

    const handleCancel = useCallback(() => {
      setEditValue(defaultValue);
      setIsEditing(false);
      onCancel?.();
    }, [defaultValue, onCancel]);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === "Enter") handleConfirm();
        if (e.key === "Escape") handleCancel();
      },
      [handleConfirm, handleCancel]
    );

    const defaultReadView = (value: string) => (
      <Box
        style={{
          paddingBlock: Spacing.XSmall,
          paddingInline: Spacing.Small,
          cursor: "pointer",
          borderRadius: BorderRadius.Medium,
          wordBreak: "break-word",
          minHeight: "1.5em",
        }}
      >
        <Text as="span" size={FontSize.Small} color={TextColor.Default}>
          {value || "\u00A0"}
        </Text>
      </Box>
    );

    const defaultEditView = (props: {
      value: string;
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
      onKeyDown: (e: React.KeyboardEvent) => void;
      autoFocus: boolean;
    }) => (
      <TextInput
        value={props.value}
        onChange={props.onChange}
        onKeyDown={props.onKeyDown as any}
        autoFocus={props.autoFocus}
        backgroundColor={BackgroundColor.Default}
        borderColor={BorderColor.Focus}
        borderRadius={BorderRadius.Medium}
        padding={Spacing.XSmall}
        style={{ fontSize: FontSize.Small, width: "100%" }}
      />
    );

    return (
      <div ref={ref}>
        {label && (
          <Text
            as="label"
            size={FontSize.XXSmall}
            weight={500}
            color={TextColor.Subtle}
            style={{ display: "block", marginBlockEnd: Spacing.XSmall }}
          >
            {label}
          </Text>
        )}
        {isEditing ? (
          <Inline space={Spacing.XSmall} alignBlock="start">
            <Box style={{ flex: "1 1 auto" }}>
              {(editView ?? defaultEditView)({
                value: editValue,
                onChange: (e) => setEditValue(e.target.value),
                onKeyDown: handleKeyDown,
                autoFocus: true,
              })}
            </Box>
            <IconButton
              label="Confirm"
              onClick={handleConfirm}
              color={TextColor.Success}
              padding={Spacing.XSmall}
            >
              <ConfirmIcon />
            </IconButton>
            <IconButton
              label="Cancel"
              onClick={handleCancel}
              color={TextColor.Error}
              padding={Spacing.XSmall}
            >
              <CancelIcon />
            </IconButton>
          </Inline>
        ) : (
          <Box
            onClick={() => setIsEditing(true)}
            role="button"
            tabIndex={0}
            aria-label={editButtonLabel ?? defaultValue ?? "Edit"}
            onKeyDown={(e: React.KeyboardEvent) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setIsEditing(true);
              }
            }}
            style={{ cursor: "pointer" }}
          >
            {(readView ?? defaultReadView)(defaultValue)}
          </Box>
        )}
      </div>
    );
  }
);

InlineEdit.displayName = "InlineEdit";
