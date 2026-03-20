import React, { forwardRef } from "react";
import type { SpaceToken, BorderColorToken } from "../tokens";
import { BorderColor } from "../tokens";

export interface DividerProps {
  /** Horizontal (default) or vertical */
  orientation?: "horizontal" | "vertical";
  /** Line color (default: BorderColor.Default) */
  color?: BorderColorToken;
  /** Spacing above and below (horizontal) or left and right (vertical) */
  spacing?: SpaceToken;
}

export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  (
    {
      orientation = "horizontal",
      color = BorderColor.Default,
      spacing,
    },
    ref
  ) => {
    const isVertical = orientation === "vertical";

    return (
      <hr
        ref={ref}
        role="separator"
        aria-orientation={orientation}
        style={{
          border: "none",
          margin: 0,
          flexShrink: 0,
          ...(isVertical
            ? {
                borderLeft: `1px solid ${color}`,
                alignSelf: "stretch",
                ...(spacing && { marginInline: spacing }),
              }
            : {
                borderTop: `1px solid ${color}`,
                width: "100%",
                ...(spacing && { marginBlock: spacing }),
              }),
        }}
      />
    );
  }
);

Divider.displayName = "Divider";
