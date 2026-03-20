import React, { forwardRef, useState } from "react";
import type { BackgroundColorToken, TextColorToken } from "../tokens";
import { BackgroundColor, TextColor, FontWeight, BorderRadius } from "../tokens";

export type AvatarSize = "xsmall" | "small" | "medium" | "large" | "xlarge";
export type AvatarAppearance = "circle" | "square";
export type AvatarStatus = "online" | "offline" | "busy" | "focus";

export interface AvatarProps {
  src?: string;
  /** Full name — used for alt text and fallback initials */
  name?: string;
  size?: AvatarSize;
  appearance?: AvatarAppearance;
  /** Status indicator dot */
  status?: AvatarStatus;
  /** Fallback background when no image (default: BackgroundColor.NeutralBold) */
  fallbackBackground?: BackgroundColorToken;
  /** Fallback text color (default: TextColor.Subtle) */
  fallbackColor?: TextColorToken;
}

const sizeMap: Record<AvatarSize, number> = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64,
};

const fontSizeMap: Record<AvatarSize, string> = {
  xsmall: "0.625rem",
  small: "0.75rem",
  medium: "0.875rem",
  large: "1rem",
  xlarge: "1.5rem",
};

const statusSizeMap: Record<AvatarSize, number> = {
  xsmall: 6,
  small: 8,
  medium: 10,
  large: 12,
  xlarge: 16,
};

const statusColorMap: Record<AvatarStatus, string> = {
  online: "#22c55e",
  offline: "#bccbb9",
  busy: "#ba1a1a",
  focus: "#3b82f6",
};

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length >= 2) return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  return (parts[0]?.[0] ?? "").toUpperCase();
}

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  (
    {
      src,
      name,
      size = "medium",
      appearance = "circle",
      status,
      fallbackBackground = BackgroundColor.NeutralBold,
      fallbackColor = TextColor.Subtle,
    },
    ref
  ) => {
    const [imgError, setImgError] = useState(false);
    const px = sizeMap[size];
    const showImage = src && !imgError;
    const initials = name ? getInitials(name) : "";

    const containerStyle: React.CSSProperties = {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: px,
      height: px,
      borderRadius: appearance === "circle" ? BorderRadius.Full : BorderRadius.XLarge,
      overflow: "hidden",
      flexShrink: 0,
      ...(showImage ? {} : { backgroundColor: fallbackBackground }),
    };

    const statusDotSize = statusSizeMap[size];
    const statusDotStyle: React.CSSProperties | undefined = status
      ? {
          position: "absolute",
          bottom: 0,
          right: 0,
          width: statusDotSize,
          height: statusDotSize,
          borderRadius: BorderRadius.Full,
          backgroundColor: statusColorMap[status],
          border: "2px solid #ffffff",
          boxSizing: "border-box",
        }
      : undefined;

    return (
      <span ref={ref} style={containerStyle} role="img" aria-label={name ?? "Avatar"}>
        {showImage ? (
          <img
            src={src}
            alt={name ?? ""}
            onError={() => setImgError(true)}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <span
            style={{
              fontSize: fontSizeMap[size],
              fontWeight: FontWeight.Semibold,
              color: fallbackColor,
              lineHeight: 1,
              userSelect: "none",
            }}
          >
            {initials}
          </span>
        )}
        {status && <span style={statusDotStyle} />}
      </span>
    );
  }
);

Avatar.displayName = "Avatar";
