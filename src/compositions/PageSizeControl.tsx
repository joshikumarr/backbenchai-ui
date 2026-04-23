import { forwardRef } from "react";
import { Box } from "../primitives/Box";
import { Inline } from "../primitives/Inline";
import { Text } from "../primitives/Text";
import { Button } from "../primitives/Button";
import { usePageSize } from "../contexts/PageSizeProvider";
import type { PageSize } from "../contexts/PageSizeProvider";
import {
  Spacing,
  FontSize,
  FontWeight,
  LetterSpacing,
  TextColor,
  BackgroundColor,
  BorderColor,
  BorderRadius,
} from "../tokens";

export interface PageSizeControlProps {
  /** Optional eyebrow label rendered above the buttons */
  label?: string;
  /** Compact (icon-only style) layout — hides label and tightens padding */
  compact?: boolean;
}

const SIZES: { value: PageSize; short: string; long: string }[] = [
  { value: "small", short: "S", long: "Small" },
  { value: "medium", short: "M", long: "Medium" },
  { value: "large", short: "L", long: "Large" },
];

/**
 * Three-button density switcher. Reads/writes the active page size from
 * `PageSizeProvider`, which sets `data-page-size` on `<html>` and rescales
 * every rem-based token globally (sidebar, header, content — everything).
 */
export const PageSizeControl = forwardRef<HTMLDivElement, PageSizeControlProps>(
  ({ label = "Page Size", compact = false }, ref) => {
    const { pageSize, setPageSize } = usePageSize();

    return (
      <Box
        ref={ref}
        paddingBlock={compact ? Spacing.XXSmall : Spacing.XSmall}
        paddingInline={compact ? Spacing.XSmall : Spacing.Medium}
        backgroundColor={BackgroundColor.Default}
        borderColor={BorderColor.Default}
        borderSide="all"
        borderRadius={BorderRadius.Full}
      >
        <Inline space={Spacing.MediumLarge} alignBlock="center">
          {!compact && label && (
            <Text
              size={FontSize.Micro}
              weight={FontWeight.Bold}
              color={TextColor.Subtlest}
              textTransform="uppercase"
              style={{ letterSpacing: LetterSpacing.Widest }}
            >
              {label}
            </Text>
          )}
          <Inline space={Spacing.XXSmall} alignBlock="center">
            {SIZES.map((s) => {
              const active = s.value === pageSize;
              return (
                <Button
                  key={s.value}
                  onClick={() => setPageSize(s.value)}
                  aria-pressed={active}
                  aria-label={`${s.long} page size`}
                  title={s.long}
                  backgroundColor={
                    active ? BackgroundColor.PrimaryTint : BackgroundColor.Transparent
                  }
                  color={active ? TextColor.Brand : TextColor.Subtlest}
                  borderRadius={BorderRadius.Full}
                  paddingBlock={Spacing.XSmall}
                  paddingInline={Spacing.MediumLarge}
                  style={{
                    fontSize: FontSize.Micro,
                    fontWeight: active ? FontWeight.Bold : FontWeight.Semibold,
                    letterSpacing: LetterSpacing.Widest,
                    textTransform: "uppercase",
                    minWidth: "1.75rem",
                    lineHeight: 1,
                  }}
                >
                  {s.short}
                </Button>
              );
            })}
          </Inline>
        </Inline>
      </Box>
    );
  },
);

PageSizeControl.displayName = "PageSizeControl";
