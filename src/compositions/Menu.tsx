import React, { forwardRef } from "react";
import { Stack } from "../primitives/Stack";
import { Box } from "../primitives/Box";
import { Button } from "../primitives/Button";
import { Text } from "../primitives/Text";
import { Inline } from "../primitives/Inline";
import {
  Spacing,
  FontSize,
  TextColor,
  BackgroundColor,
  BorderRadius,
  BorderColor,
} from "../tokens";
import type { TextColorToken, BackgroundColorToken } from "../tokens";

export interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

export interface MenuSection {
  title?: string;
  items: MenuItem[];
}

export interface MenuProps {
  sections: MenuSection[];
  activeId?: string;
  onSelect?: (id: string) => void;
  /** Color for active item text (default: TextColor.Brand) */
  activeColor?: TextColorToken;
  /** Background for active item (default: BackgroundColor.Subtle) */
  activeBackground?: BackgroundColorToken;
}

export const Menu = forwardRef<HTMLElement, MenuProps>(
  (
    {
      sections,
      activeId,
      onSelect,
      activeColor = TextColor.Brand,
      activeBackground = BackgroundColor.Subtle,
    },
    ref
  ) => {
    return (
      <Stack ref={ref} as="nav" space={Spacing.Small}>
        {sections.map((section, sIdx) => (
          <Stack key={sIdx} space={Spacing.XXSmall}>
            {section.title && (
              <Box paddingInline={Spacing.Medium} paddingBlock={Spacing.XSmall}>
                <Text
                  as="span"
                  size={FontSize.XXSmall}
                  weight={600}
                  color={TextColor.Subtlest}
                  textTransform="uppercase"
                >
                  {section.title}
                </Text>
              </Box>
            )}
            <Stack as="ul" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {section.items.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <li key={item.id}>
                    <Button
                      disabled={item.disabled}
                      onClick={() => onSelect?.(item.id)}
                      borderRadius={BorderRadius.Medium}
                      color={
                        item.disabled
                          ? TextColor.Disabled
                          : isActive
                          ? activeColor
                          : TextColor.Default
                      }
                      backgroundColor={
                        isActive ? activeBackground : BackgroundColor.Transparent
                      }
                      paddingBlock={Spacing.Medium}
                      paddingInline={Spacing.MediumLarge}
                      style={{
                        width: "100%",
                        fontSize: FontSize.XSmall,
                        textAlign: "left",
                        cursor: item.disabled ? "default" : "pointer",
                      }}
                    >
                      <Inline space={Spacing.Medium} alignBlock="center">
                        {item.icon && (
                          <Box style={{ flexShrink: 0 }}>{item.icon}</Box>
                        )}
                        <Text as="span" size={FontSize.XSmall} style={{ color: "inherit" }}>
                          {item.label}
                        </Text>
                      </Inline>
                    </Button>
                  </li>
                );
              })}
            </Stack>
            {sIdx < sections.length - 1 && (
              <Box
                style={{
                  borderTop: `1px solid ${BorderColor.Default}`,
                  marginBlock: Spacing.XSmall,
                }}
              />
            )}
          </Stack>
        ))}
      </Stack>
    );
  }
);

Menu.displayName = "Menu";
