import React, { forwardRef, useState, useRef, useEffect, useCallback } from "react";
import { Box } from "../primitives/Box";
import { Inline } from "../primitives/Inline";
import { Menu } from "./Menu";
import type { MenuSection } from "./Menu";
import {
  Spacing,
  BackgroundColor,
  BorderColor,
  BorderRadius,
  Elevation,
  ZIndex,
} from "../tokens";

export interface DropdownMenuProps {
  trigger: React.ReactNode;
  sections: MenuSection[];
  activeId?: string;
  onSelect?: (id: string) => void;
}

export const DropdownMenu = forwardRef<HTMLDivElement, DropdownMenuProps>(
  ({ trigger, sections, activeId, onSelect }, ref) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => setOpen((prev) => !prev);

    const handleSelect = (id: string) => {
      onSelect?.(id);
      setOpen(false);
    };

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    }, []);

    const handleClickOutside = useCallback((e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
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
          onClick={handleToggle}
          alignBlock="center"
        >
          {trigger}
        </Inline>
        {open && (
          <Box
            backgroundColor={BackgroundColor.Default}
            borderColor={BorderColor.Default}
            borderSide="all"
            borderRadius={BorderRadius.Large}
            elevation={Elevation.Dropdown}
            padding={Spacing.XSmall}
            style={{
              position: "absolute",
              top: "100%",
              right: 0,
              marginTop: Spacing.XSmall,
              minWidth: "192px",
              zIndex: ZIndex.Dropdown,
            }}
          >
            <Menu
              sections={sections}
              activeId={activeId}
              onSelect={handleSelect}
            />
          </Box>
        )}
      </Box>
    );
  }
);

DropdownMenu.displayName = "DropdownMenu";
