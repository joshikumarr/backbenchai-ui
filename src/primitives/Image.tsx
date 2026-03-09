import React, { forwardRef } from "react";
import type { SpaceToken, BorderRadiusToken } from "../tokens";

export interface ImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  borderRadius?: BorderRadiusToken;
  objectFit?: React.CSSProperties["objectFit"];
  width?: SpaceToken;
  height?: SpaceToken;
  /** When true, fills parent container (width: 100%, height: 100%) */
  fill?: boolean;
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ borderRadius, objectFit, width, height, fill, style, ...rest }, ref) => {
    const computedStyle: React.CSSProperties = {
      display: "block",
      ...(fill
        ? { width: "100%", height: "100%" }
        : {
            ...(width ? { width, flexShrink: 0 } : { width: "100%" }),
            ...(height && { height }),
          }),
      ...(borderRadius && { borderRadius }),
      ...(objectFit && { objectFit }),
      ...style,
    };

    return <img ref={ref} style={computedStyle} {...rest} />;
  }
);

Image.displayName = "Image";
