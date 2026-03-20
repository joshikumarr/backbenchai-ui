import React, { forwardRef } from "react";
import type { SpaceToken, BorderRadiusToken, ElevationToken } from "../tokens";
import { useResponsiveValue } from "../hooks/useResponsive";
import type { Responsive } from "../hooks/useResponsive";

type GridElement = "div" | "section" | "main" | "ul" | "ol";

export interface GridProps extends React.HTMLAttributes<HTMLElement> {
  as?: GridElement;
  /** Responsive columns: number, fr array, or { mobile, tablet?, desktop? } */
  columns?: Responsive<number | number[]>;
  /** Responsive gap */
  gap?: Responsive<SpaceToken>;
  rowGap?: SpaceToken;
  marginBlockStart?: SpaceToken;
  marginBlockEnd?: SpaceToken;
  borderRadius?: BorderRadiusToken;
  overflow?: "hidden" | "auto" | "scroll" | "visible";
  elevation?: ElevationToken;
  children?: React.ReactNode;
}

function resolveColumns(columns: number | number[] | undefined): string | undefined {
  if (columns === undefined) return undefined;
  if (typeof columns === "number") return `repeat(${columns}, 1fr)`;
  return columns.map((n) => `${n}fr`).join(" ");
}

export const Grid = forwardRef<HTMLElement, GridProps>(
  (
    {
      as: Component = "div",
      columns: columnsProp,
      gap: gapProp,
      rowGap,
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
    const columns = useResponsiveValue(columnsProp ?? 1);
    const gap = useResponsiveValue(gapProp ?? ("0" as SpaceToken));

    const computedStyle: React.CSSProperties = {
      display: "grid",
      gridTemplateColumns: resolveColumns(columns),
      gap,
      ...(rowGap && { rowGap }),
      ...(marginBlockStart && { marginBlockStart }),
      ...(marginBlockEnd && { marginBlockEnd }),
      ...(borderRadius && { borderRadius }),
      ...(overflow && { overflow }),
      ...(elevation && { boxShadow: elevation }),
      ...style,
    };

    return React.createElement(
      Component,
      { ...rest, ref, style: computedStyle },
      children
    );
  }
);

Grid.displayName = "Grid";
