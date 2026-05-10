import React, { forwardRef } from "react";
import { Box } from "../primitives/Box";
import { Text } from "../primitives/Text";
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
          paddingInline: Spacing.Large,
          paddingBlock: Spacing.Medium,
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
                  size={FontSize.Micro}
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
