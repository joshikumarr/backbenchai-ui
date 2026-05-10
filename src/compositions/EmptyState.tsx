import React, { forwardRef } from "react";
import { Stack } from "../primitives/Stack";
import { Text } from "../primitives/Text";
import { Inline } from "../primitives/Inline";
import {
  Spacing,
  FontSize,
  FontWeight,
  FontFamily,
  TextColor,
} from "../tokens";

export interface EmptyStateProps {
  header: string;
  description?: string;
  /** Image or illustration rendered above the header */
  image?: React.ReactNode;
  /** Primary action button */
  primaryAction?: React.ReactNode;
  /** Secondary action button */
  secondaryAction?: React.ReactNode;
}

export const EmptyState = forwardRef<HTMLElement, EmptyStateProps>(
  ({ header, description, image, primaryAction, secondaryAction }, ref) => {
    return (
      <Stack
        ref={ref}
        space={Spacing.Large}
        alignInline="center"
        style={{
          paddingBlock: Spacing.XXHuge,
          paddingInline: Spacing.XXXLarge,
          maxWidth: "448px",
          marginInline: "auto",
          textAlign: "center",
        }}
      >
        {image && <div>{image}</div>}
        <Stack space={Spacing.Medium} alignInline="center">
          <Text
            as="h3"
            fontFamily={FontFamily.Display}
            size={FontSize.XLarge}
            weight={FontWeight.Bold}
            color={TextColor.Default}
          >
            {header}
          </Text>
          {description && (
            <Text as="p" size={FontSize.XSmall} color={TextColor.Subtle} lineHeight={1.6}>
              {description}
            </Text>
          )}
        </Stack>
        {(primaryAction || secondaryAction) && (
          <Inline space={Spacing.Medium} alignBlock="center">
            {primaryAction}
            {secondaryAction}
          </Inline>
        )}
      </Stack>
    );
  }
);

EmptyState.displayName = "EmptyState";
