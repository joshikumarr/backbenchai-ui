import React, { forwardRef } from "react";
import { Box } from "../primitives/Box";
import { Text } from "../primitives/Text";
import { safeAreaBlock, safeAreaInline } from "../safeArea";
import {
  Spacing,
  FontSize,
  FontWeight,
  TextColor,
  BackgroundColor,
  BorderColor,
  ZIndex,
} from "../tokens";

export interface MobileNavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

export interface MobileNavProps {
  items: MobileNavItem[];
  activeId?: string;
  onSelect?: (id: string) => void;
  /** Floating action button in the center */
  fab?: React.ReactNode;
}

/**
 * The height of the bar, WITHOUT the bottom safe-area inset.
 *
 * It is the sum of the item button (24px icon + 2px gap + ~14px label + 4px
 * padding on each side = 48px) and the bar's own 8px block padding on each
 * side. 48px also clears both published minimum touch targets: 44pt (Apple)
 * and 48dp (Material).
 *
 * Layout reserves this plus the inset as bottom padding on the content area.
 * Any other fixed element above the bar must do the same, or the last row of
 * content hides behind the bar. See CAPACITOR.md.
 */
export const MOBILE_NAV_HEIGHT = "64px";

export const MobileNav = forwardRef<HTMLElement, MobileNavProps>(
  ({ items, activeId, onSelect, fab }, ref) => {
    return (
      <Box
        ref={ref}
        as="nav"
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: ZIndex.Sticky,
          backgroundColor: BackgroundColor.Default,
          borderTop: `1px solid ${BorderColor.Default}`,
          backdropFilter: "blur(20px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          // The bar is fixed to the bottom edge, so the iOS home indicator and
          // the Android gesture bar sit ON TOP of it. The bottom inset ADDS to
          // the bar's own padding — it does not replace it. The inline insets
          // REPLACE the gutter, for the notch in landscape. safeArea.ts states
          // why, and why env() alone is wrong on Android.
          paddingLeft: safeAreaInline("left", Spacing.Large),
          paddingRight: safeAreaInline("right", Spacing.Large),
          paddingBlockStart: Spacing.Medium,
          paddingBlockEnd: safeAreaBlock("bottom", Spacing.Medium),
        }}
      >
        {items.map((item, idx) => {
          const isActive = item.id === activeId;

          // Insert FAB in the middle
          const middleIdx = Math.floor(items.length / 2);
          const showFabBefore = fab && idx === middleIdx;

          return (
            <React.Fragment key={item.id}>
              {showFabBefore && (
                <Box style={{ marginTop: `-${Spacing.XXXLarge}` }}>
                  {fab}
                </Box>
              )}
              <button
                type="button"
                onClick={() => onSelect?.(item.id)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: Spacing.XXSmall,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: Spacing.XSmall,
                  color: isActive ? TextColor.Brand : TextColor.Disabled,
                }}
              >
                <Box style={{ width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {item.icon}
                </Box>
                <Text
                  as="span"
                  size={FontSize.XXSmall}
                  weight={FontWeight.Bold}
                  color={isActive ? TextColor.Brand : TextColor.Disabled}
                  textTransform="uppercase"
                >
                  {item.label}
                </Text>
              </button>
            </React.Fragment>
          );
        })}
      </Box>
    );
  }
);

MobileNav.displayName = "MobileNav";
