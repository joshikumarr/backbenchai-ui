import React, { forwardRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { Box } from "../primitives/Box";
import { Inline } from "../primitives/Inline";
import { Text } from "../primitives/Text";
import { IconButton } from "../primitives/IconButton";
import {
  Spacing,
  FontSize,
  FontWeight,
  TextColor,
  BackgroundColor,
  BorderColor,
  Elevation,
  ZIndex,
} from "../tokens";

export interface PanelProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  side?: "left" | "right";
  mode?: "overlay" | "push";
  width?: string;
  children?: React.ReactNode;
}

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    style={{ width: "1.25rem", height: "1.25rem" }}
  >
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export const Panel = forwardRef<HTMLDivElement, PanelProps>(
  (
    {
      open,
      onClose,
      title,
      side = "right",
      mode = "overlay",
      width = "24rem",
      children,
    },
    ref
  ) => {
    const handleKeyDown = useCallback(
      (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      },
      [onClose]
    );

    useEffect(() => {
      if (!open) return;
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open, handleKeyDown]);

    if (!open) return null;

    const panelContent = (
      <Box
        ref={ref}
        backgroundColor={BackgroundColor.Default}
        elevation={Elevation.Overlay}
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          [side]: 0,
          width,
          zIndex: ZIndex.Modal,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {title && (
          <Box
            padding={Spacing.Large}
            style={{ borderBottom: `1px solid ${BorderColor.Default}` }}
          >
            <Inline alignBlock="center" spread="space-between">
              <Text as="h2" size={FontSize.Large} weight={FontWeight.Semibold} color={TextColor.Default}>
                {title}
              </Text>
              <IconButton label="Close panel" onClick={onClose} color={TextColor.Subtle}>
                <CloseIcon />
              </IconButton>
            </Inline>
          </Box>
        )}
        <Box padding={Spacing.Large} overflow="auto" style={{ flex: "1 1 auto" }}>
          {children}
        </Box>
      </Box>
    );

    if (mode === "overlay") {
      return createPortal(
        <Box
          style={{
            position: "fixed",
            inset: 0,
            zIndex: ZIndex.Modal,
            backgroundColor: BackgroundColor.Overlay,
          }}
          onClick={(e: React.MouseEvent) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          {panelContent}
        </Box>,
        document.body
      );
    }

    return panelContent;
  }
);

Panel.displayName = "Panel";
