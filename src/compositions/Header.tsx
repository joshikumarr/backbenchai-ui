import React, { forwardRef } from "react";
import { Box } from "../primitives/Box";
import { Inline } from "../primitives/Inline";
import { Stack } from "../primitives/Stack";
import { Text } from "../primitives/Text";
import { Anchor } from "../primitives/Anchor";
import type {
  TextColorToken,
  FontSizeToken,
  FontWeightToken,
  SpaceToken,
  BorderColorToken,
} from "../tokens";
import {
  Spacing,
  FontSize,
  FontWeight,
  TextColor,
  BorderColor,
} from "../tokens";

export interface Breadcrumb {
  label: string;
  href?: string;
}

export interface HeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: Breadcrumb[];
  actions?: React.ReactNode;
  /** Title font size (default: FontSize.XLarge) */
  titleSize?: FontSizeToken;
  /** Title font weight (default: FontWeight.Bold) */
  titleWeight?: FontWeightToken;
  /** Title text color (default: TextColor.Default) */
  titleColor?: TextColorToken;
  /** Subtitle text color (default: TextColor.Subtle) */
  subtitleColor?: TextColorToken;
  /** Breadcrumb link color (default: TextColor.Link) */
  breadcrumbLinkColor?: TextColorToken;
  /** Bottom border color (default: BorderColor.Default) */
  borderColor?: BorderColorToken;
  /** Vertical padding (default: Spacing.Large) */
  paddingBlock?: SpaceToken;
}

export const Header = forwardRef<HTMLElement, HeaderProps>(
  (
    {
      title,
      subtitle,
      breadcrumbs,
      actions,
      titleSize = FontSize.XLarge,
      titleWeight = FontWeight.Bold,
      titleColor = TextColor.Default,
      subtitleColor = TextColor.Subtle,
      breadcrumbLinkColor = TextColor.Link,
      borderColor = BorderColor.Default,
      paddingBlock = Spacing.Large,
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        as="header"
        paddingBlock={paddingBlock}
        style={{
          borderBottom: `1px solid ${borderColor}`,
        }}
      >
        <Stack space={Spacing.Medium}>
          {breadcrumbs && breadcrumbs.length > 0 && (
            <Inline space={Spacing.XSmall} alignBlock="center">
              {breadcrumbs.map((crumb, i) => (
                <React.Fragment key={i}>
                  {i > 0 && (
                    <Text as="span" color={TextColor.Disabled} size={FontSize.XSmall}>
                      /
                    </Text>
                  )}
                  {crumb.href ? (
                    <Anchor
                      href={crumb.href}
                      color={breadcrumbLinkColor}
                      size={FontSize.XSmall}
                      style={{ textDecoration: "none" }}
                    >
                      {crumb.label}
                    </Anchor>
                  ) : (
                    <Text as="span" size={FontSize.XSmall} color={TextColor.Subtlest}>
                      {crumb.label}
                    </Text>
                  )}
                </React.Fragment>
              ))}
            </Inline>
          )}
          <Inline alignBlock="center" spread="space-between">
            <Stack space={Spacing.XXSmall}>
              <Text as="h1" size={titleSize} weight={titleWeight} color={titleColor}>
                {title}
              </Text>
              {subtitle && (
                <Text as="p" size={FontSize.XSmall} color={subtitleColor}>
                  {subtitle}
                </Text>
              )}
            </Stack>
            {actions && <Inline space={Spacing.Medium} alignBlock="center">{actions}</Inline>}
          </Inline>
        </Stack>
      </Box>
    );
  }
);

Header.displayName = "Header";
