import React, { forwardRef, Fragment } from "react";
import type {
  SpaceToken,
  BorderRadiusToken,
  ElevationToken,
  AlignItemsToken,
} from "../tokens";
import { useResponsiveValue } from "../hooks/useResponsive";
import type { Responsive } from "../hooks/useResponsive";

type InlineElement = "div" | "span" | "ul" | "ol" | "nav";
/**
 * Accepts AlignItems tokens (AlignItems.Start/.End/.Center/…) as well as the
 * bare `"start"`/`"end"` shorthands — both resolve to the same flex value.
 */
type Align = AlignItemsToken | "start" | "end";
type Grow = "hug" | "fill";

/**
 * Gap value for `space`. Mirrors CSS `gap` shorthand:
 *   `Spacing.Medium`                    → same gap for rows and columns
 *   `[rowGap, columnGap]`               → distinct row + column gaps
 */
type SpaceValue = SpaceToken | readonly [SpaceToken, SpaceToken];

export interface InlineProps extends React.HTMLAttributes<HTMLElement> {
  as?: InlineElement;
  /**
   * Responsive gap between children. Single token = both rows and columns;
   * `[rowGap, columnGap]` tuple sets each axis independently (CSS `gap`
   * shorthand). Tuple form supersedes `rowSpace`.
   */
  space?: Responsive<SpaceValue>;
  /**
   * @deprecated Pass `space={[rowGap, columnGap]}` instead. Kept for
   * backwards compatibility — overrides the row component of `space` when set.
   */
  rowSpace?: SpaceToken;
  /** Align children on the cross axis (vertical) */
  alignBlock?: Align;
  /** Align children on the main axis (horizontal) */
  alignInline?: Align;
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
  /**
   * Override CSS min-width. Pass 0 to let this Inline shrink below its content
   * size inside a flex parent (the canonical fix for "ancestor doesn't allow
   * my truncating child to ellipsize"). Default behaviour is auto.
   */
  minWidth?: 0 | "auto";
  children?: React.ReactNode;
}

const alignMap: Record<string, string> = {
  start: "flex-start",
  end: "flex-end",
  // AlignItems token values pass through unchanged
  "flex-start": "flex-start",
  "flex-end": "flex-end",
  center: "center",
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
      minWidth,
      style,
      children,
      ...rest
    },
    ref
  ) => {
    const resolvedSpace = useResponsiveValue(spaceProp ?? ("0" as SpaceToken));
    const [defaultRow, defaultCol] = Array.isArray(resolvedSpace)
      ? [resolvedSpace[0], resolvedSpace[1]]
      : [resolvedSpace as SpaceToken, resolvedSpace as SpaceToken];

    const computedStyle: React.CSSProperties = {
      display: "flex",
      flexDirection: "row",
      columnGap: defaultCol,
      rowGap: rowSpace ?? defaultRow,
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
      ...(minWidth !== undefined && { minWidth }),
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
