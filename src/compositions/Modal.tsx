import React, { forwardRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { Box } from "../primitives/Box";
import { Stack } from "../primitives/Stack";
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
  BorderRadius,
  Elevation,
  ZIndex,
} from "../tokens";

/**
 * Modal width tokens — six sizes from XSmall (confirm dialogs) to Full
 * (near-fullscreen overlays). Default is Medium. Accepts any CSS length
 * if a custom size is needed.
 */
export const ModalSize = {
  XSmall: "320px",
  Small: "416px",
  Medium: "512px",
  Large: "704px",
  XLarge: "960px",
  Full: "min(96vw, 1440px)",
} as const;

export type ModalSizeToken = (typeof ModalSize)[keyof typeof ModalSize];

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  /**
   * Modal width. Accepts a ModalSize token or any CSS length string
   * (e.g. "640px", "70%"). Default ModalSize.Medium (512px). The inner
   * `width: 100%` keeps narrow viewports from overflowing regardless of
   * the size chosen.
   */
  size?: ModalSizeToken | string;
}

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    style={{ width: "20px", height: "20px" }}
  >
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ open, onClose, title, children, footer, size = ModalSize.Medium }, ref) => {
    const handleKeyDown = useCallback(
      (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      },
      [onClose]
    );

    useEffect(() => {
      if (!open) return;
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }, [open, handleKeyDown]);

    if (!open) return null;

    return createPortal(
      <Box
        style={{
          position: "fixed",
          inset: 0,
          zIndex: ZIndex.Modal,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: BackgroundColor.Overlay,
        }}
        onClick={(e: React.MouseEvent) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <Box
          ref={ref}
          role="dialog"
          aria-modal="true"
          aria-label={title}
          backgroundColor={BackgroundColor.Default}
          borderRadius={BorderRadius.XLarge}
          elevation={Elevation.Overlay}
          overflow="hidden"
          style={{
            width: "100%",
            maxWidth: size,
            maxHeight: "85vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Stack>
            {title && (
              <Box
                padding={Spacing.Large}
                style={{ borderBottom: `1px solid ${BorderColor.Default}` }}
              >
                <Inline alignBlock="center" spread="space-between">
                  <Text as="h2" size={FontSize.Large} weight={FontWeight.Semibold} color={TextColor.Default}>
                    {title}
                  </Text>
                  <IconButton label="Close" onClick={onClose} color={TextColor.Subtle}>
                    <CloseIcon />
                  </IconButton>
                </Inline>
              </Box>
            )}
            <Box padding={Spacing.Large} overflow="auto" style={{ flex: "1 1 auto" }}>
              {children}
            </Box>
            {footer && (
              <Box
                padding={Spacing.Large}
                style={{ borderTop: `1px solid ${BorderColor.Default}` }}
              >
                {footer}
              </Box>
            )}
          </Stack>
        </Box>
      </Box>,
      document.body
    );
  }
);

Modal.displayName = "Modal";
