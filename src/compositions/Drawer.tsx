import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { Box } from "../primitives/Box";
import {
  Spacing,
  BackgroundColor,
  ZIndex,
  type SpaceToken,
  type ContainerWidthToken,
} from "../tokens";
import { useResponsiveValue, type Responsive } from "../hooks/useResponsive";

const TRANSITION_MS = 200;

export type DrawerAlign = "start" | "center" | "end";

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  /** Offset from viewport top — leaves room for a sticky navbar. */
  offsetTop?: Responsive<number | string>;
  /** Padding inside the content area. */
  padding?: Responsive<SpaceToken>;
  /** Clamp inner content width. */
  maxWidth?: ContainerWidthToken;
  /** Horizontal alignment of inner content. */
  align?: Responsive<DrawerAlign>;
  /** Render a blur band filling the viewport below the content. */
  blur?: boolean;
  /** Close when the mouse leaves the content area (hover-nav pattern). */
  closeOnMouseLeave?: boolean;
}

const alignToJustify: Record<DrawerAlign, "flex-start" | "center" | "flex-end"> = {
  start: "flex-start",
  center: "center",
  end: "flex-end",
};

export function Drawer({
  open,
  onClose,
  children,
  offsetTop = 0,
  padding = Spacing.Large,
  maxWidth,
  align = "center",
  blur = true,
  closeOnMouseLeave = false,
}: DrawerProps) {
  const [mounted, setMounted] = useState(open);
  const [shown, setShown] = useState(false);
  const offset = useResponsiveValue(offsetTop);
  const alignValue = useResponsiveValue(align);

  useEffect(() => {
    if (open) {
      setMounted(true);
      const id = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(id);
    }
    setShown(false);
    const id = window.setTimeout(() => setMounted(false), TRANSITION_MS);
    return () => window.clearTimeout(id);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!mounted) return null;

  const offsetCss = typeof offset === "number" ? `${offset}px` : offset;

  return createPortal(
    <Box
      onClick={onClose}
      style={{
        position: "fixed",
        top: offsetCss,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: ZIndex.Modal,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        opacity: shown ? 1 : 0,
        transition: `opacity ${TRANSITION_MS}ms ease`,
      }}
    >
      <Box
        onClick={(e) => e.stopPropagation()}
        onMouseLeave={closeOnMouseLeave ? onClose : undefined}
        backgroundColor={BackgroundColor.Default}
        padding={padding}
        style={{
          display: "flex",
          justifyContent: alignToJustify[alignValue],
          width: "100%",
          transform: shown ? "translateY(0)" : "translateY(-12px)",
          transition: `transform ${TRANSITION_MS + 50}ms ease`,
        }}
      >
        <Box style={{ width: "100%", maxWidth }}>{children}</Box>
      </Box>
      {blur && (
        <Box
          style={{
            flex: 1,
            pointerEvents: "none",
            backdropFilter: "blur(16px) saturate(180%)",
            WebkitBackdropFilter: "blur(16px) saturate(180%)",
          }}
        />
      )}
    </Box>,
    document.body,
  );
}

Drawer.displayName = "Drawer";
