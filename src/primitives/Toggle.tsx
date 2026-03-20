import React, { forwardRef, useState, useCallback } from "react";
import { BackgroundColor, BorderRadius, Spacing } from "../tokens";

export interface ToggleProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
}

const TRACK_WIDTH = "2.5rem";
const TRACK_HEIGHT = "1.5rem";
const THUMB_SIZE = "1.25rem";
const THUMB_OFFSET = Spacing.XXSmall;

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  ({ checked: controlledChecked, defaultChecked = false, onChange, label, style, ...rest }, ref) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isControlled = controlledChecked !== undefined;
    const isChecked = isControlled ? controlledChecked : internalChecked;

    const handleClick = useCallback(() => {
      const next = !isChecked;
      if (!isControlled) setInternalChecked(next);
      onChange?.(next);
    }, [isChecked, isControlled, onChange]);

    const trackStyle: React.CSSProperties = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      width: TRACK_WIDTH,
      height: TRACK_HEIGHT,
      borderRadius: BorderRadius.Full,
      backgroundColor: isChecked ? BackgroundColor.Brand : BackgroundColor.Neutral,
      border: "none",
      cursor: "pointer",
      padding: 0,
      transition: "background-color 150ms ease",
      ...style,
    };

    const thumbStyle: React.CSSProperties = {
      position: "absolute",
      width: THUMB_SIZE,
      height: THUMB_SIZE,
      borderRadius: BorderRadius.Full,
      backgroundColor: BackgroundColor.Default,
      transition: "left 150ms ease",
      left: isChecked ? `calc(100% - ${THUMB_SIZE} - ${THUMB_OFFSET})` : THUMB_OFFSET,
      boxShadow: "0 1px 3px rgba(0,0,0,.2)",
    };

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={isChecked}
        aria-label={label}
        onClick={handleClick}
        style={trackStyle}
        {...rest}
      >
        <span style={thumbStyle} />
      </button>
    );
  }
);

Toggle.displayName = "Toggle";
