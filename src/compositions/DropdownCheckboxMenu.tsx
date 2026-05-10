import React, { forwardRef, useState, useRef, useEffect, useCallback } from "react";
import { Box } from "../primitives/Box";
import { Stack } from "../primitives/Stack";
import { Inline } from "../primitives/Inline";
import { Text } from "../primitives/Text";
import { Button } from "../primitives/Button";
import {
  Spacing,
  FontSize,
  FontWeight,
  TextColor,
  BackgroundColor,
  BorderColor,
  BorderRadius,
  Elevation,
  ZIndex,
} from "../tokens";

export interface CheckboxItem {
  id: string;
  label: string;
}

export interface CheckboxGroup {
  title?: string;
  items: CheckboxItem[];
}

export interface DropdownCheckboxMenuProps {
  trigger: React.ReactNode;
  groups: CheckboxGroup[];
  /** Record of item id → checked state */
  checked: Record<string, boolean>;
  onChange: (id: string, checked: boolean) => void;
}

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" style={{ width: "14px", height: "14px" }}>
    <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 01.208 1.04l-5 7.5a.75.75 0 01-1.154.114l-3-3a.75.75 0 011.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 011.04-.207z" clipRule="evenodd" />
  </svg>
);

export const DropdownCheckboxMenu = forwardRef<HTMLDivElement, DropdownCheckboxMenuProps>(
  ({ trigger, groups, checked, onChange }, ref) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    }, []);

    const handleClickOutside = useCallback((e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }, []);

    useEffect(() => {
      if (!open) return;
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [open, handleKeyDown, handleClickOutside]);

    return (
      <Box
        ref={(node: HTMLElement | null) => {
          (containerRef as React.MutableRefObject<HTMLDivElement | null>).current =
            node as HTMLDivElement | null;
          if (typeof ref === "function") ref(node as HTMLDivElement | null);
          else if (ref)
            (ref as React.MutableRefObject<HTMLDivElement | null>).current =
              node as HTMLDivElement | null;
        }}
        style={{ position: "relative", display: "inline-block" }}
      >
        <Inline
          style={{ cursor: "pointer" }}
          onClick={() => setOpen((v) => !v)}
          alignBlock="center"
        >
          {trigger}
        </Inline>
        {open && (
          <Box
            backgroundColor={BackgroundColor.Default}
            borderColor={BorderColor.Default}
            borderSide="all"
            borderRadius={BorderRadius.XLarge}
            elevation={Elevation.Dropdown}
            padding={Spacing.XSmall}
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              marginTop: Spacing.XSmall,
              minWidth: "224px",
              zIndex: ZIndex.Dropdown,
            }}
          >
            <Stack space={Spacing.XSmall}>
              {groups.map((group, gIdx) => (
                <Stack key={gIdx} space={Spacing.XXSmall}>
                  {group.title && (
                    <Box paddingInline={Spacing.MediumLarge} paddingBlock={Spacing.XSmall}>
                      <Text
                        as="span"
                        size={FontSize.XXSmall}
                        weight={FontWeight.Semibold}
                        color={TextColor.Subtlest}
                        textTransform="uppercase"
                      >
                        {group.title}
                      </Text>
                    </Box>
                  )}
                  {group.items.map((item) => {
                    const isChecked = !!checked[item.id];
                    return (
                      <Button
                        key={item.id}
                        onClick={() => onChange(item.id, !isChecked)}
                        borderRadius={BorderRadius.Medium}
                        backgroundColor={BackgroundColor.Transparent}
                        color={TextColor.Default}
                        paddingBlock={Spacing.Medium}
                        paddingInline={Spacing.MediumLarge}
                        style={{
                          width: "100%",
                          textAlign: "left",
                          fontSize: FontSize.XSmall,
                          display: "flex",
                          alignItems: "center",
                          gap: Spacing.Medium,
                        }}
                      >
                        <Box
                          style={{
                            width: "16px",
                            height: "16px",
                            borderRadius: BorderRadius.Small,
                            border: isChecked
                              ? "none"
                              : `2px solid ${BorderColor.Outline}`,
                            backgroundColor: isChecked
                              ? BackgroundColor.Brand
                              : BackgroundColor.Transparent,
                            color: TextColor.Inverse,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          {isChecked && <CheckIcon />}
                        </Box>
                        <Text as="span" size={FontSize.XSmall} style={{ color: "inherit" }}>
                          {item.label}
                        </Text>
                      </Button>
                    );
                  })}
                  {gIdx < groups.length - 1 && (
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
          </Box>
        )}
      </Box>
    );
  }
);

DropdownCheckboxMenu.displayName = "DropdownCheckboxMenu";
