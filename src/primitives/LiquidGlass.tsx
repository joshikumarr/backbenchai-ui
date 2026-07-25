import React, { forwardRef, useMemo } from "react";
import { BorderRadius } from "../tokens";

export type LiquidGlassBlur = "sm" | "md" | "lg" | "xl";
export type LiquidGlassIntensity = "none" | "xs" | "sm" | "md" | "lg" | "xl";

const BLUR_PX: Record<LiquidGlassBlur, string> = {
  sm: "4px",
  md: "12px",
  lg: "16px",
  xl: "24px",
};

const SHADOW_INSET: Record<LiquidGlassIntensity, string> = {
  none: "inset 0 0 0 0 rgba(255, 255, 255, 0)",
  xs: "inset 1px 1px 1px 0 rgba(255, 255, 255, 0.3), inset -1px -1px 1px 0 rgba(255, 255, 255, 0.3)",
  sm: "inset 2px 2px 2px 0 rgba(255, 255, 255, 0.35), inset -2px -2px 2px 0 rgba(255, 255, 255, 0.35)",
  md: "inset 3px 3px 3px 0 rgba(255, 255, 255, 0.45), inset -3px -3px 3px 0 rgba(255, 255, 255, 0.45)",
  lg: "inset 4px 4px 4px 0 rgba(255, 255, 255, 0.5), inset -4px -4px 4px 0 rgba(255, 255, 255, 0.5)",
  xl: "inset 6px 6px 6px 0 rgba(255, 255, 255, 0.55), inset -6px -6px 6px 0 rgba(255, 255, 255, 0.55)",
};

const GLOW_SHADOW: Record<LiquidGlassIntensity, string> = {
  none: "0 4px 4px rgba(0, 0, 0, 0.05), 0 0 12px rgba(0, 0, 0, 0.05)",
  xs: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 16px rgba(255, 255, 255, 0.05)",
  sm: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 24px rgba(255, 255, 255, 0.1)",
  md: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 32px rgba(255, 255, 255, 0.15)",
  lg: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 40px rgba(255, 255, 255, 0.2)",
  xl: "0 4px 4px rgba(0, 0, 0, 0.15), 0 0 12px rgba(0, 0, 0, 0.08), 0 0 48px rgba(255, 255, 255, 0.25)",
};

export interface LiquidGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /** CSS border-radius value (token or string). Default: BorderRadius.XLarge. */
  borderRadius?: string;
  /** Backdrop-filter blur intensity. Default: "xl". */
  blurIntensity?: LiquidGlassBlur;
  /** Outer glow shadow intensity. Default: "sm". */
  glowIntensity?: LiquidGlassIntensity;
  /** Inner edge-highlight intensity. Default: "md". */
  shadowIntensity?: LiquidGlassIntensity;
  /**
   * Optional CSS gradient string painted as a 1px rim around the panel
   * via mask-compositing. Visible against any background — use to add
   * brand colour to the glass edge on light or dark scenes.
   */
  borderGradient?: string;
  /** Border ring width in px when `borderGradient` is set. Default: 1. */
  borderWidth?: number;
  /** Optional explicit width / height. */
  width?: string;
  height?: string;
}

// Module-scoped counter ensures each LiquidGlass instance gets a unique SVG
// filter id so multiple panels on a page don't collide on `url(#...)` refs.
let filterIdCounter = 0;

/**
 * LiquidGlass — frosted-glass panel with wobbly edge distortion.
 *
 * Three stacked layers inside one container:
 *   1. **Bend** — backdrop-blur + SVG turbulence/displacement
 *   2. **Glow** — outer drop-shadow
 *   3. **Edge** — inset highlight (glass rim)
 *
 * Pure visual primitive — no drag, no expand, no motion. Children render above
 * all decorative layers via stacking context.
 *
 * ```tsx
 * <LiquidGlass blurIntensity="xl" glowIntensity="sm">
 *   <Box padding={Spacing.XHuge}>…</Box>
 * </LiquidGlass>
 * ```
 */
export const LiquidGlass = forwardRef<HTMLDivElement, LiquidGlassProps>(
  (
    {
      children,
      borderRadius = BorderRadius.XLarge,
      blurIntensity = "xl",
      glowIntensity = "sm",
      shadowIntensity = "md",
      borderGradient,
      borderWidth = 1,
      width,
      height,
      style,
      ...rest
    },
    ref
  ) => {
    const filterId = useMemo(() => `bbui-liquid-glass-${++filterIdCounter}`, []);

    const containerStyle: React.CSSProperties = {
      position: "relative",
      borderRadius,
      ...(width && { width }),
      ...(height && { height }),
      ...style,
    };

    const layerStyle: React.CSSProperties = {
      position: "absolute",
      inset: 0,
      borderRadius,
      pointerEvents: "none",
    };

    return (
      <div ref={ref} style={containerStyle} {...rest}>
        <svg style={{ position: "absolute", width: 0, height: 0 }} aria-hidden="true">
          <defs>
            <filter id={filterId} x="0" y="0" width="100%" height="100%" filterUnits="objectBoundingBox">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.003 0.007"
                numOctaves={1}
                result="turbulence"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="turbulence"
                scale={200}
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </defs>
        </svg>
        <div
          style={{
            ...layerStyle,
            zIndex: 0,
            backdropFilter: `blur(${BLUR_PX[blurIntensity]})`,
            WebkitBackdropFilter: `blur(${BLUR_PX[blurIntensity]})`,
            filter: `url(#${filterId})`,
          }}
        />
        <div style={{ ...layerStyle, zIndex: 1, boxShadow: GLOW_SHADOW[glowIntensity] }} />
        <div style={{ ...layerStyle, zIndex: 2, boxShadow: SHADOW_INSET[shadowIntensity] }} />
        {borderGradient && (
          <div
            aria-hidden="true"
            style={{
              ...layerStyle,
              zIndex: 3,
              padding: borderWidth,
              background: borderGradient,
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              maskComposite: "exclude",
            }}
          />
        )}
        {/* height:100% lets full-height panels (chat cards, drawers) run a
            flex column inside; resolves to auto when the panel is unsized. */}
        <div style={{ position: "relative", zIndex: 4, height: "100%" }}>{children}</div>
      </div>
    );
  }
);

LiquidGlass.displayName = "LiquidGlass";
