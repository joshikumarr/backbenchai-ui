import React, { forwardRef, useEffect, useRef, useState } from "react";
import { Stack } from "../primitives/Stack";
import { Text } from "../primitives/Text";
import {
  Spacing,
  FontSize,
  FontWeight,
  TextColor,
  BackgroundColor,
  BorderRadius,
  BorderColor,
} from "../tokens";

export interface RevealStepItem {
  id?: string;
  icon: React.ReactNode;
  label: string;
  description?: string;
  meta?: React.ReactNode;
}

export interface RevealStepsProps {
  items: RevealStepItem[];
  onComplete?: () => void;
  finishedLabel?: React.ReactNode;
  /** Scroll-area max height (default 16rem) */
  maxHeight?: string;
}

const KEYFRAMES = `
@keyframes bbui-pulse-down {
  0%, 100% { transform: translateY(0); opacity: 0.4 }
  50%      { transform: translateY(3px); opacity: 0.9 }
}
`;

const ICON_TILE = "2.25rem";
const ICON_HALF = "1.125rem";

export const RevealSteps = forwardRef<HTMLDivElement, RevealStepsProps>(
  ({ items, onComplete, finishedLabel, maxHeight = "16rem" }, ref) => {
    const [revealed, setRevealed] = useState<Set<number>>(() => new Set());
    const completedRef = useRef(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const allRevealed = revealed.size >= items.length;

    useEffect(() => {
      if (allRevealed && !completedRef.current) {
        completedRef.current = true;
        onComplete?.();
      }
    }, [allRevealed, onComplete]);

    useEffect(() => {
      const root = scrollRef.current;
      if (!root) return;
      const observer = new IntersectionObserver(
        (entries) => {
          setRevealed((current) => {
            let next = current;
            for (const entry of entries) {
              if (!entry.isIntersecting) continue;
              const idx = Number((entry.target as HTMLElement).dataset.idx);
              if (current.has(idx)) continue;
              if (next === current) next = new Set(current);
              next.add(idx);
            }
            return next;
          });
        },
        { root, threshold: 0.6 }
      );
      itemRefs.current.forEach((el) => el && observer.observe(el));
      return () => observer.disconnect();
    }, [items.length]);

    return (
      <div ref={ref} style={{ width: "100%", position: "relative" }}>
        <style>{KEYFRAMES}</style>

        <div ref={scrollRef} style={scrollAreaStyle(maxHeight, allRevealed)}>
          <Stack space={Spacing.MediumLarge}>
            {items.map((item, idx) => {
              const isRevealed = revealed.has(idx);
              return (
                <div
                  key={item.id ?? idx}
                  ref={(el) => (itemRefs.current[idx] = el)}
                  data-idx={idx}
                  style={rowWrapStyle(isRevealed)}
                >
                  <Row item={item} />
                  {idx < items.length - 1 && (
                    <span aria-hidden="true" style={connectorStyle(isRevealed)} />
                  )}
                </div>
              );
            })}
          </Stack>
        </div>

        <div style={footerStyle}>
          {allRevealed
            ? finishedLabel
            : <ScrollHint />
          }
        </div>
      </div>
    );
  }
);

RevealSteps.displayName = "RevealSteps";

// ── Sub-components ───────────────────────────────────────────────────

function Row({ item }: { item: RevealStepItem }) {
  return (
    <div style={rowStyle}>
      <span aria-hidden="true" style={iconTileStyle}>{item.icon}</span>
      <span style={textBlockStyle}>
        <Text as="span" size={FontSize.Small} weight={FontWeight.Medium}>{item.label}</Text>
        {item.description && (
          <Text as="span" size={FontSize.XSmall} color={TextColor.Subtle}>{item.description}</Text>
        )}
      </span>
      {item.meta && <span style={metaStyle}>{item.meta}</span>}
    </div>
  );
}

function ScrollHint() {
  return (
    <div style={hintStyle} aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
           strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </div>
  );
}

// ── Styles ───────────────────────────────────────────────────────────

const FADE_MASK = "linear-gradient(to bottom, black 0%, black calc(100% - 2rem), transparent 100%)";

const scrollAreaStyle = (maxHeight: string, allRevealed: boolean): React.CSSProperties => ({
  maxHeight,
  overflowY: "auto",
  scrollBehavior: "smooth",
  maskImage: allRevealed ? "none" : FADE_MASK,
  WebkitMaskImage: allRevealed ? "none" : FADE_MASK,
  paddingRight: Spacing.XSmall,
});

const rowWrapStyle = (isRevealed: boolean): React.CSSProperties => ({
  position: "relative",
  opacity: isRevealed ? 1 : 0.15,
  transform: isRevealed ? "translateY(0)" : "translateY(8px)",
  filter: isRevealed ? "blur(0)" : "blur(2px)",
  transition: "opacity 420ms ease-out, transform 420ms cubic-bezier(0.22, 1, 0.36, 1), filter 420ms ease-out",
});

const rowStyle: React.CSSProperties = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: Spacing.MediumLarge,
  padding: Spacing.MediumLarge,
  background: BackgroundColor.Subtle,
  borderRadius: BorderRadius.Large,
  border: `1px solid ${BorderColor.Default}`,
  color: TextColor.Default,
};

const iconTileStyle: React.CSSProperties = {
  width: ICON_TILE,
  height: ICON_TILE,
  flexShrink: 0,
  borderRadius: BorderRadius.Medium,
  background: BackgroundColor.Subtle,
  color: TextColor.Default,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};

const textBlockStyle: React.CSSProperties = {
  flex: 1,
  minWidth: 0,
  display: "flex",
  flexDirection: "column",
  gap: Spacing.XXSmall,
};

const metaStyle: React.CSSProperties = {
  flexShrink: 0,
  display: "inline-flex",
  alignItems: "center",
};

const connectorStyle = (isRevealed: boolean): React.CSSProperties => ({
  position: "absolute",
  left: `calc(${Spacing.MediumLarge} + ${ICON_HALF} - 1px)`,
  top: "100%",
  height: Spacing.MediumLarge,
  width: "2px",
  background: BorderColor.Default,
  opacity: isRevealed ? 1 : 0,
  transition: "opacity 300ms ease-out",
  pointerEvents: "none",
});

const footerStyle: React.CSSProperties = {
  marginTop: Spacing.Large,
  display: "flex",
  justifyContent: "center",
  minHeight: "1.25rem",
};

const hintStyle: React.CSSProperties = {
  color: TextColor.Subtle,
  animation: "bbui-pulse-down 1500ms ease-in-out infinite",
  display: "inline-flex",
};
