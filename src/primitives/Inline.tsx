import React, { forwardRef, Fragment } from "react";
import type { SpaceToken, BorderRadiusToken, ElevationToken } from "../tokens";
import { useResponsiveValue } from "../hooks/useResponsive";
import type { Responsive } from "../hooks/useResponsive";

type InlineElement = "div" | "span" | "ul" | "ol" | "nav";
type AlignInline = "start" | "center" | "end" | "stretch";
type AlignBlock = "start" | "center" | "end" | "baseline" | "stretch";
type Grow = "hug" | "fill";

export interface InlineProps extends React.HTMLAttributes<HTMLElement> {
  as?: InlineElement;
  /** Responsive gap between children (horizontal) */
  space?: Responsive<SpaceToken>;
  /** Gap between rows when wrapping */
  rowSpace?: SpaceToken;
  /** Align children on the cross axis (vertical) */
  alignBlock?: AlignBlock;
  /** Align children on the main axis (horizontal) */
  alignInline?: AlignInline;
  /** Distribute children along the main axis */
  spread?: "space-between";
  /** Whether children wrap */
  shouldWrap?: boolean;
  /** Separator rendered between children */
  separator?: React.ReactNode;
  /** Whether the container grows to fill available space */
  grow?: Grow;
  marginBlockStart?: SpaceToken;
  marginBlockEnd?: SpaceToken;
  borderRadius?: BorderRadiusToken;
  overflow?: "hidden" | "auto" | "scroll" | "visible";
  elevation?: ElevationToken;
  children?: React.ReactNode;
}

const alignMap: Record<string, string> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
  stretch: "stretch",
  baseline: "baseline",
};

/**
 * Inline — lays out children **horizontally** with consistent spacing.
 *
 * ```tsx
 * <Inline space={Spacing.Medium} alignBlock="center">
 *   <Button>Cancel</Button>
 *   <Button>Save</Button>
 * </Inline>
 * ```
 */
export const Inline = forwardRef<HTMLElement, InlineProps>(
  (
    {
      as: Component = "div",
      space: spaceProp,
      rowSpace,
      alignBlock,
      alignInline,
      spread,
      shouldWrap,
      separator,
      grow = "hug",
      marginBlockStart,
      marginBlockEnd,
      borderRadius,
      overflow,
      elevation,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const space = useResponsiveValue(spaceProp ?? ("0" as SpaceToken));

    const computedStyle: React.CSSProperties = {
      display: "flex",
      flexDirection: "row",
      columnGap: space,
      rowGap: rowSpace ?? space,
      ...(alignBlock && { alignItems: alignMap[alignBlock] }),
      ...(alignInline && !spread && { justifyContent: alignMap[alignInline] }),
      ...(spread && { justifyContent: spread }),
      ...(shouldWrap && { flexWrap: "wrap" }),
      ...(grow === "fill" && { flex: "1 1 auto" }),
      ...(marginBlockStart && { marginBlockStart }),
      ...(marginBlockEnd && { marginBlockEnd }),
      ...(borderRadius && { borderRadius }),
      ...(overflow && { overflow }),
      ...(elevation && { boxShadow: elevation }),
      ...style,
    };

    let content = children;

    if (separator) {
      const items = React.Children.toArray(children).filter(Boolean);
      content = items.map((child, i) => (
        <Fragment key={i}>
          {child}
          {i < items.length - 1 && (
            <span aria-hidden="true">{separator}</span>
          )}
        </Fragment>
      ));
    }

    return React.createElement(
      Component,
      { ...rest, ref, style: computedStyle },
      content
    );
  }
);

Inline.displayName = "Inline";
