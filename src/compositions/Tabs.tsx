import React, { forwardRef, useState } from "react";
import { Box } from "../primitives/Box";
import { Inline } from "../primitives/Inline";
import { Button } from "../primitives/Button";
import type { TextColorToken, BackgroundColorToken, SpaceToken } from "../tokens";
import {
  Spacing,
  FontSize,
  FontWeight,
  TextColor,
  BackgroundColor,
  BorderColor,
  BorderRadius,
  Elevation,
} from "../tokens";

export interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: Tab[];
  activeId?: string;
  defaultActiveId?: string;
  onChange?: (id: string) => void;
  /** Tab bar style: "underline" (default) or "pill" (NestOS style) */
  variant?: "underline" | "pill";
  /** Color for the active tab text (default: TextColor.Brand) */
  activeColor?: TextColorToken;
  /** Color for inactive tab text (default: TextColor.Subtle) */
  inactiveColor?: TextColorToken;
  /** Background of the pill container (default: BackgroundColor.Subtle) */
  pillBackground?: BackgroundColorToken;
  /** Background of the active pill (default: BackgroundColor.Default) */
  activePillBackground?: BackgroundColorToken;
  /** Padding inside the tab panel (default: Spacing.Large) */
  panelPadding?: SpaceToken;
}

export const Tabs = forwardRef<HTMLElement, TabsProps>(
  (
    {
      tabs,
      activeId: controlledId,
      defaultActiveId,
      onChange,
      variant = "underline",
      activeColor = TextColor.Brand,
      inactiveColor = TextColor.Subtle,
      pillBackground = BackgroundColor.Subtle,
      activePillBackground = BackgroundColor.Default,
      panelPadding = Spacing.Large,
    },
    ref
  ) => {
    const [internalId, setInternalId] = useState(
      defaultActiveId ?? tabs[0]?.id
    );
    const isControlled = controlledId !== undefined;
    const currentId = isControlled ? controlledId : internalId;

    const handleSelect = (id: string) => {
      if (!isControlled) setInternalId(id);
      onChange?.(id);
    };

    const activeTab = tabs.find((t) => t.id === currentId);

    const isPill = variant === "pill";

    return (
      <Box ref={ref}>
        {isPill ? (
          <Inline
            role="tablist"
            space={Spacing.XSmall}
            alignBlock="center"
            style={{
              backgroundColor: pillBackground,
              padding: Spacing.Small,
              borderRadius: BorderRadius.XXLarge,
              width: "fit-content",
            }}
          >
            {tabs.map((tab) => {
              const isActive = tab.id === currentId;
              return (
                <Button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tabpanel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  disabled={tab.disabled}
                  onClick={() => handleSelect(tab.id)}
                  paddingBlock={Spacing.Medium}
                  paddingInline={Spacing.XXLarge}
                  borderRadius={BorderRadius.XLarge}
                  color={
                    isActive
                      ? TextColor.Default
                      : tab.disabled
                      ? TextColor.Disabled
                      : inactiveColor
                  }
                  backgroundColor={
                    isActive ? activePillBackground : BackgroundColor.Transparent
                  }
                  style={{
                    fontWeight: isActive ? FontWeight.Bold : FontWeight.Medium,
                    fontSize: FontSize.XSmall,
                    boxShadow: isActive ? Elevation.Raised : "none",
                    cursor: tab.disabled ? "default" : "pointer",
                  }}
                >
                  {tab.label}
                </Button>
              );
            })}
          </Inline>
        ) : (
          <Inline
            as="div"
            role="tablist"
            space={Spacing.None}
            style={{
              borderBottom: `1px solid ${BorderColor.Default}`,
            }}
          >
            {tabs.map((tab) => {
              const isActive = tab.id === currentId;
              return (
                <Button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tabpanel-${tab.id}`}
                  id={`tab-${tab.id}`}
                  disabled={tab.disabled}
                  onClick={() => handleSelect(tab.id)}
                  paddingBlock={Spacing.Medium}
                  paddingInline={Spacing.Large}
                  borderRadius={BorderRadius.None}
                  color={
                    isActive
                      ? activeColor
                      : tab.disabled
                      ? TextColor.Disabled
                      : inactiveColor
                  }
                  style={{
                    background: "none",
                    fontWeight: isActive ? FontWeight.Semibold : FontWeight.Regular,
                    fontSize: FontSize.XSmall,
                    borderBottom: isActive
                      ? `2px solid ${activeColor}`
                      : "2px solid transparent",
                    marginBottom: "-1px",
                    cursor: tab.disabled ? "default" : "pointer",
                  }}
                >
                  {tab.label}
                </Button>
              );
            })}
          </Inline>
        )}
        {activeTab && (
          <Box
            role="tabpanel"
            id={`tabpanel-${activeTab.id}`}
            aria-labelledby={`tab-${activeTab.id}`}
            padding={panelPadding}
          >
            {activeTab.content}
          </Box>
        )}
      </Box>
    );
  }
);

Tabs.displayName = "Tabs";
