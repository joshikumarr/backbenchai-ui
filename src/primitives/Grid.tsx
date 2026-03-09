import React, { forwardRef } from "react";
import type { SpaceToken, BorderRadiusToken, ElevationToken } from "../tokens";

type GridElement = "div" | "section" | "main" | "ul" | "ol";

export interface GridProps extends React.HTMLAttributes<HTMLElement> {
  as?: GridElement;
  /** Number of equal columns, or array of fr proportions e.g. [3, 2] → "3fr 2fr" */
  columns?: number | number[];
  gap?: SpaceToken;
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
      columns,
      gap,
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
    const computedStyle: React.CSSProperties = {
      display: "grid",
      ...(columns !== undefined && {
        gridTemplateColumns: resolveColumns(columns),
      }),
      ...(gap && { gap }),
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
