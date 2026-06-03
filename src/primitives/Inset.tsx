import React, { forwardRef } from "react";
import type { SpaceToken } from "../tokens";
import { useResponsiveValue } from "../hooks/useResponsive";
import type { Responsive } from "../hooks/useResponsive";

type InsetElement = "div" | "span" | "section" | "article" | "header" | "footer";

export interface InsetProps extends React.HTMLAttributes<HTMLElement> {
  as?: InsetElement;
  /** Padding on all four sides — overridden per-axis by block/inline */
  space?: Responsive<SpaceToken>;
  /** Vertical padding (top + bottom) — overrides space on the block axis */
  block?: Responsive<SpaceToken>;
  /** Horizontal padding (left + right) — overrides space on the inline axis */
  inline?: Responsive<SpaceToken>;
  children?: React.ReactNode;
}

/**
 * Inset — the padding primitive, completing the spacing trio with Stack and
 * Inline. Where Stack/Inline space children apart, Inset adds even padding
 * around them. Symmetric only: reach for Box when you need per-side padding
 * or anything beyond padding (background, border, flex).
 */
export const Inset = forwardRef<HTMLElement, InsetProps>(
  (
    { as: Component = "div", space, block, inline, style, children, ...rest },
    ref
  ) => {
    const spaceValue = useResponsiveValue<SpaceToken | undefined>(space);
    const blockValue = useResponsiveValue<SpaceToken | undefined>(block);
    const inlineValue = useResponsiveValue<SpaceToken | undefined>(inline);

    const paddingBlock = blockValue ?? spaceValue;
    const paddingInline = inlineValue ?? spaceValue;

    const computedStyle: React.CSSProperties = {
      ...(paddingBlock && { paddingBlock }),
      ...(paddingInline && { paddingInline }),
      ...style,
    };

    return React.createElement(
      Component,
      { ...rest, ref, style: computedStyle },
      children
    );
  }
);

Inset.displayName = "Inset";
