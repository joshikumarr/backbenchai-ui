import React, { forwardRef } from "react";
import { Box } from "../primitives/Box";
import { Stack } from "../primitives/Stack";
import { Inline } from "../primitives/Inline";
import { Text } from "../primitives/Text";
import { Button } from "../primitives/Button";
import { IconButton } from "../primitives/IconButton";
import { Badge } from "../primitives/Badge";
import type { BadgeVariant } from "../primitives/Badge";
import type {
  TextColorToken,
  BackgroundColorToken,
  BorderColorToken,
} from "../tokens";
import {
  Spacing,
  FontSize,
  TextColor,
  BackgroundColor,
  BorderColor,
  BorderRadius,
} from "../tokens";

export interface SidebarItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string;
  badgeVariant?: BadgeVariant;
}

export interface SidebarSection {
  title?: string;
  items: SidebarItem[];
}

export interface SidebarProps {
  sections: SidebarSection[];
  activeId?: string;
  onSelect?: (id: string) => void;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  collapsed?: boolean;
  onToggleCollapse?: () => void;
  /** Sidebar width when expanded (default: "16rem") */
  width?: string;
  /** Sidebar width when collapsed (default: "4rem") */
  collapsedWidth?: string;
  /** Active item text color (default: TextColor.Brand) */
  activeColor?: TextColorToken;
  /** Active item background (default: BackgroundColor.Subtle) */
  activeBackground?: BackgroundColorToken;
  /** Border color (default: BorderColor.Default) */
  borderColor?: BorderColorToken;
}

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: "1rem", height: "1rem" }}>
    <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" style={{ width: "1rem", height: "1rem" }}>
    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
  </svg>
);

export const Sidebar = forwardRef<HTMLElement, SidebarProps>(
  (
    {
      sections,
      activeId,
      onSelect,
      header,
      footer,
      collapsed = false,
      onToggleCollapse,
      width = "16rem",
      collapsedWidth = "4rem",
      activeColor = TextColor.Brand,
      activeBackground = BackgroundColor.Subtle,
      borderColor = BorderColor.Default,
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        as="aside"
        backgroundColor={BackgroundColor.Default}
        style={{
          width: collapsed ? collapsedWidth : width,
          minHeight: "100%",
          borderRight: `1px solid ${borderColor}`,
          display: "flex",
          flexDirection: "column",
          transition: "width 200ms ease",
          overflow: "hidden",
        }}
      >
        {header && (
          <Box
            padding={Spacing.Large}
            style={{ borderBottom: `1px solid ${borderColor}` }}
          >
            {header}
          </Box>
        )}

        <Stack
          space={Spacing.Small}
          grow="fill"
          style={{ padding: Spacing.Medium, overflow: "auto" }}
        >
          {sections.map((section, sIdx) => (
            <Stack key={sIdx} space={Spacing.XXSmall}>
              {section.title && !collapsed && (
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
              {section.items.map((item) => {
                const isActive = item.id === activeId;
                return (
                  <Button
                    key={item.id}
                    onClick={() => onSelect?.(item.id)}
                    title={collapsed ? item.label : undefined}
                    borderRadius={BorderRadius.Medium}
                    color={isActive ? activeColor : TextColor.Default}
                    backgroundColor={
                      isActive ? activeBackground : BackgroundColor.Transparent
                    }
                    paddingBlock={Spacing.Medium}
                    paddingInline={Spacing.MediumLarge}
                    style={{
                      width: "100%",
                      fontSize: FontSize.XSmall,
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      gap: collapsed ? 0 : Spacing.Medium,
                      justifyContent: collapsed ? "center" : "flex-start",
                    }}
                  >
                    {item.icon && (
                      <Box style={{ flexShrink: 0 }}>{item.icon}</Box>
                    )}
                    {!collapsed && (
                      <>
                        <Text as="span" style={{ flex: "1 1 auto", color: "inherit" }}>
                          {item.label}
                        </Text>
                        {item.badge && (
                          <Badge variant={item.badgeVariant ?? "default"}>
                            {item.badge}
                          </Badge>
                        )}
                      </>
                    )}
                  </Button>
                );
              })}
            </Stack>
          ))}
        </Stack>

        {onToggleCollapse && (
          <Box
            padding={Spacing.Medium}
            style={{ borderTop: `1px solid ${borderColor}` }}
          >
            <IconButton
              label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              onClick={onToggleCollapse}
              color={TextColor.Subtle}
              padding={Spacing.XSmall}
            >
              {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </Box>
        )}

        {footer && (
          <Box
            padding={Spacing.Large}
            style={{ borderTop: `1px solid ${borderColor}` }}
          >
            {footer}
          </Box>
        )}
      </Box>
    );
  }
);

Sidebar.displayName = "Sidebar";
