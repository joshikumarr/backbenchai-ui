import React, { forwardRef } from "react";
import { Box } from "../primitives/Box";
import { Text } from "../primitives/Text";
import {
  Spacing,
  FontSize,
  FontWeight,
  TextColor,
  BackgroundColor,
  BorderRadius,
  Gradient,
  LetterSpacing,
} from "../tokens";
import { useResponsiveValue } from "../hooks/useResponsive";
import type { Responsive } from "../hooks/useResponsive";

export type StageStatus = "unvisited" | "current" | "visited" | "disabled";

export interface Stage {
  id: string;
  label: string;
  /** 0–100 */
  percentageComplete: number;
  status: StageStatus;
  href?: string;
  onClick?: () => void;
}

export type Stages = Stage[];

export interface ProgressTrackerProps {
  items: Stages;
  /** Responsive: show labels or just dots on small screens */
  showLabels?: Responsive<boolean>;
  /** Visual variant: "dot" (default) or "bar" */
  variant?: "dot" | "bar";
}

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
    style={{ width: "0.75rem", height: "0.75rem" }}>
    <path fillRule="evenodd"
      d="M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z"
      clipRule="evenodd" />
  </svg>
);

export const ProgressTracker = forwardRef<HTMLDivElement, ProgressTrackerProps>(
  ({ items, showLabels: showLabelsProp, variant = "dot" }, ref) => {
    const showLabels = useResponsiveValue(showLabelsProp ?? true);
    const dotSize = 32;
    const visitedCount = items.filter(i => i.status === "visited").length;

    if (variant === "bar") {
      return (
        <div ref={ref} role="progressbar" aria-valuemin={0} aria-valuemax={items.length}
             aria-valuenow={visitedCount}
             style={{ display: "grid", gridTemplateColumns: `repeat(${items.length}, 1fr)`, gap: Spacing.Medium, width: "100%" }}>
          {items.map((stage, idx) => {
            const isVisited = stage.status === "visited";
            const isCurrent = stage.status === "current";
            const isFirst = idx === 0;
            const isLast = idx === items.length - 1;
            return (
              <div key={stage.id} style={{ display: "flex", flexDirection: "column", gap: Spacing.Medium }}>
                {/* Bar */}
                <div style={{
                  height: 6,
                  borderRadius: BorderRadius.Full,
                  background: isCurrent ? Gradient.Brand : "none",
                  backgroundColor: isCurrent ? undefined
                    : isVisited ? BackgroundColor.PrimaryContainer
                    : BackgroundColor.NeutralBold,
                  opacity: isVisited ? 0.4 : 1,
                  boxShadow: isCurrent
                    ? `0 0 8px var(--bbui-color-primary), 0 0 20px var(--bbui-color-primary)`
                    : "none",
                  transition: "all 400ms ease",
                  cursor: stage.onClick ? "pointer" : "default",
                }} onClick={stage.onClick} />
                {/* Label — aligned to start for first, end for last, center for middle */}
                {showLabels && (
                  <Text as="p"
                        size={FontSize.Micro}
                        weight={isCurrent ? FontWeight.Bold : FontWeight.Medium}
                        color={isCurrent ? TextColor.Brand : isVisited ? TextColor.Subtle : TextColor.Disabled}
                        textTransform="uppercase"
                        letterSpacing={LetterSpacing.Widest}
                        style={{
                          textAlign: "right",
                          cursor: stage.onClick ? "pointer" : "default",
                          whiteSpace: "nowrap",
                        }}
                        onClick={stage.onClick}>
                    {stage.label}
                  </Text>
                )}
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={items.length}
        aria-valuenow={visitedCount}
        style={{ width: "100%", padding: `0 ${Spacing.Medium}` }}
      >
        {/* Row of dots + lines */}
        <div style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}>
          {items.map((stage, idx) => {
            const isLast = idx === items.length - 1;
            const isVisited = stage.status === "visited";
            const isCurrent = stage.status === "current";
            const isDisabled = stage.status === "disabled";

            const dotBg = isVisited
              ? Gradient.Brand
              : isCurrent
              ? "transparent"
              : BackgroundColor.NeutralBold;

            const dotContent = (
              <div
                style={{
                  width: dotSize,
                  height: dotSize,
                  borderRadius: BorderRadius.Full,
                  background: isVisited ? Gradient.Brand : dotBg,
                  backgroundColor: isVisited ? undefined : dotBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  color: isVisited ? TextColor.OnBrand
                    : isCurrent ? TextColor.Brand
                    : isDisabled ? TextColor.Disabled
                    : TextColor.Subtle,
                  fontSize: FontSize.XSmall,
                  fontWeight: FontWeight.Bold,
                  border: isCurrent ? `2px solid ${TextColor.Brand}` : "none",
                  cursor: stage.onClick || stage.href ? "pointer" : "default",
                  transition: "all 300ms ease",
                }}
                onClick={stage.onClick}
              >
                {isVisited ? <CheckIcon /> : idx + 1}
              </div>
            );

            const dot = stage.href
              ? <a href={stage.href} style={{ textDecoration: "none", color: "inherit" }}>{dotContent}</a>
              : dotContent;

            return (
              <React.Fragment key={stage.id}>
                {dot}
                {/* Connecting line */}
                {!isLast && (
                  <div style={{
                    flex: "1 1 auto",
                    height: 2,
                    backgroundColor: BackgroundColor.NeutralBold,
                    position: "relative",
                    marginInline: Spacing.XSmall,
                    borderRadius: BorderRadius.Full,
                    overflow: "hidden",
                  }}>
                    <div style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      height: "100%",
                      width: `${isVisited ? stage.percentageComplete : 0}%`,
                      background: Gradient.Brand,
                      borderRadius: BorderRadius.Full,
                      transition: "width 400ms ease",
                    }} />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Labels row — positioned relative to dots */}
        {showLabels && (
          <div style={{
            display: "flex",
            alignItems: "flex-start",
            width: "100%",
            marginTop: Spacing.Medium,
          }}>
            {items.map((stage, idx) => {
              const isLast = idx === items.length - 1;
              const isVisited = stage.status === "visited";
              const isCurrent = stage.status === "current";
              const isDisabled = stage.status === "disabled";

              const labelColor = isVisited
                ? TextColor.Brand
                : isCurrent
                ? TextColor.Default
                : isDisabled
                ? TextColor.Disabled
                : TextColor.Subtle;

              return (
                <React.Fragment key={stage.id}>
                  {/* Label container — same width as dot, but text overflows */}
                  <div style={{
                    width: dotSize,
                    flexShrink: 0,
                    display: "flex",
                    justifyContent: "center",
                  }}>
                    <Text
                      as="span"
                      size={FontSize.XXSmall}
                      weight={isCurrent ? FontWeight.Bold : FontWeight.Medium}
                      color={labelColor}
                      align="center"
                      style={{
                        whiteSpace: "nowrap",
                      }}
                    >
                      {stage.label}
                    </Text>
                  </div>
                  {/* Spacer matching the line */}
                  {!isLast && <div style={{ flex: "1 1 auto" }} />}
                </React.Fragment>
              );
            })}
          </div>
        )}
      </div>
    );
  }
);

ProgressTracker.displayName = "ProgressTracker";
