import React, { forwardRef } from "react";
import type { SpaceToken } from "../tokens";
import { useResponsiveValue } from "../hooks/useResponsive";
import type { Responsive } from "../hooks/useResponsive";

type StackElement = "div" | "span" | "ul" | "ol" | "section" | "nav";
type AlignInline = "start" | "center" | "end" | "stretch";
type AlignBlock = "start" | "center" | "end" | "stretch";
type Grow = "hug" | "fill";

export interface StackProps extends React.HTMLAttributes<HTMLElement> {
  as?: StackElement;
  /** Responsive gap between children (vertical) */
  space?: Responsive<SpaceToken>;
  /** Align children along the cross axis (horizontal) */
  alignInline?: AlignInline;
  /** Align children along the main axis (vertical) */
  alignBlock?: AlignBlock;
  /** Distribute children along the main axis */
  spread?: "space-between";
  /** Whether the stack grows to fill available space */
  grow?: Grow;
  marginBlockStart?: SpaceToken;
  marginBlockEnd?: SpaceToken;
  children?: React.ReactNode;
}

const alignMap = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
};

export const Stack = forwardRef<HTMLElement, StackProps>(
  (
    {
      as: Component = "div",
      space: spaceProp,
      alignInline,
      alignBlock,
      spread,
      grow = "hug",
      marginBlockStart,
      marginBlockEnd,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const space = useResponsiveValue(spaceProp ?? ("0" as SpaceToken));

    const computedStyle: React.CSSProperties = {
      display: "flex",
      flexDirection: "column",
      gap: space,
      ...(alignInline && { alignItems: alignMap[alignInline] }),
      ...(alignBlock && !spread && { justifyContent: alignMap[alignBlock] }),
      ...(spread && { justifyContent: spread }),
      ...(grow === "fill" && { flex: "1 1 auto" }),
      ...(marginBlockStart && { marginBlockStart }),
      ...(marginBlockEnd && { marginBlockEnd }),
      ...style,
    };

    return React.createElement(
      Component,
      { ...rest, ref, style: computedStyle },
      children
    );
  }
);

Stack.displayName = "Stack";
