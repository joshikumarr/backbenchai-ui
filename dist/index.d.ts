import { default as default_2 } from 'react';

declare type AlignBlock = "start" | "center" | "end" | "stretch";

declare type AlignBlock_2 = "start" | "center" | "end" | "baseline" | "stretch";

declare type AlignInline = "start" | "center" | "end" | "stretch";

declare type AlignInline_2 = "start" | "center" | "end" | "stretch";

declare type AllowedElements = "div" | "span" | "section" | "header" | "footer" | "nav" | "main" | "article" | "aside" | "ul" | "ol" | "li";

declare type AllowedElements_2 = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "strong" | "em" | "small" | "label" | "div";

export declare const Anchor: default_2.ForwardRefExoticComponent<AnchorProps & default_2.RefAttributes<HTMLAnchorElement>>;

export declare interface AnchorProps extends default_2.AnchorHTMLAttributes<HTMLAnchorElement> {
    color?: TextColorToken;
    weight?: FontWeightToken;
    size?: FontSizeToken;
    backgroundColor?: BackgroundColorToken;
    padding?: SpaceToken;
    paddingBlock?: SpaceToken;
    paddingBlockStart?: SpaceToken;
    paddingInline?: SpaceToken;
    borderRadius?: BorderRadiusToken;
    textTransform?: default_2.CSSProperties["textTransform"];
    display?: "inline" | "inline-block" | "block";
    alignSelf?: default_2.CSSProperties["alignSelf"];
    children?: default_2.ReactNode;
}

export declare const BackgroundColor: {
    readonly Default: "#ffffff";
    readonly Subtle: "#f3f4f6";
    readonly Neutral: "#e5e7eb";
    readonly Brand: "#15803d";
    readonly BrandBold: "#166534";
    readonly Success: "#bbf7d0";
};

export declare type BackgroundColorToken = (typeof BackgroundColor)[keyof typeof BackgroundColor];

export declare const BorderColor: {
    readonly Default: "#e5e7eb";
    readonly Input: "#d1d5db";
};

export declare type BorderColorToken = (typeof BorderColor)[keyof typeof BorderColor];

export declare const BorderRadius: {
    readonly None: "0";
    readonly Small: "0.25rem";
    readonly Medium: "0.375rem";
    readonly Large: "0.5rem";
    readonly Full: "9999px";
};

export declare type BorderRadiusToken = (typeof BorderRadius)[keyof typeof BorderRadius];

export declare const Box: default_2.ForwardRefExoticComponent<BoxProps & default_2.RefAttributes<HTMLElement>>;

export declare interface BoxProps extends default_2.HTMLAttributes<HTMLElement> {
    as?: AllowedElements;
    padding?: SpaceToken;
    paddingBlock?: SpaceToken;
    paddingBlockStart?: SpaceToken;
    paddingBlockEnd?: SpaceToken;
    paddingInline?: SpaceToken;
    paddingInlineStart?: SpaceToken;
    paddingInlineEnd?: SpaceToken;
    marginBlock?: SpaceToken;
    marginBlockStart?: SpaceToken;
    marginBlockEnd?: SpaceToken;
    backgroundColor?: BackgroundColorToken;
    borderRadius?: BorderRadiusToken;
    borderColor?: BorderColorToken;
    borderSide?: "top" | "all";
    overflow?: "hidden" | "auto" | "scroll" | "visible";
    elevation?: ElevationToken;
    maxWidth?: ContainerWidthToken;
    children?: default_2.ReactNode;
}

export declare const Button: default_2.ForwardRefExoticComponent<ButtonProps & default_2.RefAttributes<HTMLButtonElement>>;

export declare interface ButtonProps extends default_2.ButtonHTMLAttributes<HTMLButtonElement> {
    backgroundColor?: BackgroundColorToken;
    color?: TextColorToken;
    padding?: SpaceToken;
    paddingBlock?: SpaceToken;
    paddingInline?: SpaceToken;
    borderRadius?: BorderRadiusToken;
    children?: default_2.ReactNode;
}

export declare const ContainerWidth: {
    readonly Small: "640px";
    readonly Medium: "768px";
    readonly Large: "1024px";
    readonly XLarge: "1280px";
};

export declare type ContainerWidthToken = (typeof ContainerWidth)[keyof typeof ContainerWidth];

export declare const Elevation: {
    readonly None: "none";
    readonly Raised: "0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.06)";
};

export declare type ElevationToken = (typeof Elevation)[keyof typeof Elevation];

export declare const FontSize: {
    readonly XXSmall: "0.75rem";
    readonly XSmall: "0.875rem";
    readonly Small: "1rem";
    readonly Medium: "1.125rem";
    readonly Large: "1.25rem";
    readonly XLarge: "1.5rem";
    readonly XXLarge: "1.875rem";
    readonly XXXLarge: "2.25rem";
};

export declare type FontSizeToken = (typeof FontSize)[keyof typeof FontSize];

export declare const FontWeight: {
    readonly Regular: 400;
    readonly Medium: 500;
    readonly Semibold: 600;
    readonly Bold: 700;
};

export declare type FontWeightToken = (typeof FontWeight)[keyof typeof FontWeight];

export declare const Grid: default_2.ForwardRefExoticComponent<GridProps & default_2.RefAttributes<HTMLElement>>;

declare type GridElement = "div" | "section" | "main" | "ul" | "ol";

export declare interface GridProps extends default_2.HTMLAttributes<HTMLElement> {
    as?: GridElement;
    /** Number of equal columns, or array of fr proportions e.g. [3, 2] → "3fr 2fr" */
    columns?: number | number[];
    gap?: SpaceToken;
    rowGap?: SpaceToken;
    marginBlockStart?: SpaceToken;
    marginBlockEnd?: SpaceToken;
    borderRadius?: BorderRadiusToken;
    overflow?: "hidden" | "auto" | "scroll" | "visible";
    elevation?: ElevationToken;
    children?: default_2.ReactNode;
}

declare type Grow = "hug" | "fill";

declare type Grow_2 = "hug" | "fill";

declare const Image_2: default_2.ForwardRefExoticComponent<ImageProps & default_2.RefAttributes<HTMLImageElement>>;
export { Image_2 as Image }

export declare interface ImageProps extends default_2.ImgHTMLAttributes<HTMLImageElement> {
    borderRadius?: BorderRadiusToken;
    objectFit?: default_2.CSSProperties["objectFit"];
    width?: SpaceToken;
    height?: SpaceToken;
    /** When true, fills parent container (width: 100%, height: 100%) */
    fill?: boolean;
}

/**
 * Inline — lays out children **horizontally** with consistent spacing.
 *
 * ```tsx
 * <Inline space={Spacing.Medium} alignBlock="center">
 *   <Button>Cancel</Button>
 *   <Button>Save</Button>
 * </Inline>
 * ```
 */
export declare const Inline: default_2.ForwardRefExoticComponent<InlineProps & default_2.RefAttributes<HTMLElement>>;

declare type InlineElement = "div" | "span" | "ul" | "ol" | "nav";

export declare interface InlineProps extends default_2.HTMLAttributes<HTMLElement> {
    as?: InlineElement;
    /** Gap between children (horizontal) */
    space?: SpaceToken;
    /** Gap between rows when wrapping */
    rowSpace?: SpaceToken;
    /** Align children on the cross axis (vertical) */
    alignBlock?: AlignBlock_2;
    /** Align children on the main axis (horizontal) */
    alignInline?: AlignInline_2;
    /** Distribute children along the main axis */
    spread?: "space-between";
    /** Whether children wrap */
    shouldWrap?: boolean;
    /** Separator rendered between children */
    separator?: default_2.ReactNode;
    /** Whether the container grows to fill available space */
    grow?: Grow_2;
    marginBlockStart?: SpaceToken;
    marginBlockEnd?: SpaceToken;
    borderRadius?: BorderRadiusToken;
    overflow?: "hidden" | "auto" | "scroll" | "visible";
    elevation?: ElevationToken;
    children?: default_2.ReactNode;
}

export declare type SpaceToken = (typeof Spacing)[keyof typeof Spacing];

/**
 * Design tokens — all values are direct CSS strings/numbers.
 *
 * Usage:
 *   <Stack space={Spacing.Large}>...</Stack>
 *   <Text color={TextColor.Brand} size={FontSize.Large}>Hello</Text>
 *   <Box borderRadius={BorderRadius.Medium} elevation={Elevation.Raised}>...</Box>
 */
export declare const Spacing: {
    /** 0px */
    readonly None: "0";
    /** 2px */
    readonly XXSmall: "0.125rem";
    /** 4px */
    readonly XSmall: "0.25rem";
    /** 6px */
    readonly Small: "0.375rem";
    /** 8px — base unit */
    readonly Medium: "0.5rem";
    /** 12px */
    readonly MediumLarge: "0.75rem";
    /** 16px */
    readonly Large: "1rem";
    /** 20px */
    readonly XLarge: "1.25rem";
    /** 24px */
    readonly XXLarge: "1.5rem";
    /** 32px */
    readonly XXXLarge: "2rem";
    /** 40px */
    readonly Huge: "2.5rem";
    /** 48px */
    readonly XHuge: "3rem";
    /** 64px */
    readonly XXHuge: "4rem";
    /** 80px */
    readonly XXXHuge: "5rem";
    /** 128px */
    readonly Size8: "8rem";
    /** 256px */
    readonly Size16: "16rem";
};

/**
 * Stack — lays out children **vertically** with consistent spacing.
 *
 * ```tsx
 * <Stack space={Spacing.Large}>
 *   <Card />
 *   <Card />
 * </Stack>
 * ```
 */
export declare const Stack: default_2.ForwardRefExoticComponent<StackProps & default_2.RefAttributes<HTMLElement>>;

declare type StackElement = "div" | "span" | "ul" | "ol" | "section" | "nav";

export declare interface StackProps extends default_2.HTMLAttributes<HTMLElement> {
    as?: StackElement;
    /** Gap between children (vertical) */
    space?: SpaceToken;
    /** Align children along the cross axis (horizontal) */
    alignInline?: AlignInline;
    /** Align children along the main axis (vertical) */
    alignBlock?: AlignBlock;
    /** Distribute children along the main axis */
    spread?: "space-between";
    /** Whether the stack grows to fill available space */
    grow?: Grow;
    marginBlockStart?: SpaceToken;
    marginBlockEnd?: SpaceToken;
    children?: default_2.ReactNode;
}

declare const Text_2: default_2.ForwardRefExoticComponent<TextProps & default_2.RefAttributes<HTMLElement>>;
export { Text_2 as Text }

export declare const TextColor: {
    readonly Default: "#1f2937";
    readonly Subtle: "#374151";
    readonly Subtlest: "#4b5563";
    readonly Disabled: "#6b7280";
    readonly Inverse: "#ffffff";
    readonly Brand: "#15803d";
    readonly Selected: "#166534";
    readonly Success: "#14532d";
};

export declare type TextColorToken = (typeof TextColor)[keyof typeof TextColor];

export declare const TextInput: default_2.ForwardRefExoticComponent<TextInputProps & default_2.RefAttributes<HTMLInputElement>>;

export declare interface TextInputProps extends default_2.InputHTMLAttributes<HTMLInputElement> {
    backgroundColor?: BackgroundColorToken;
    borderColor?: BorderColorToken;
    borderRadius?: BorderRadiusToken;
    padding?: SpaceToken;
    paddingBlock?: SpaceToken;
    paddingInline?: SpaceToken;
}

export declare interface TextProps extends default_2.HTMLAttributes<HTMLElement> {
    as?: AllowedElements_2;
    size?: FontSizeToken;
    weight?: FontWeightToken;
    color?: TextColorToken;
    align?: default_2.CSSProperties["textAlign"];
    textTransform?: default_2.CSSProperties["textTransform"];
    lineHeight?: number | string;
    opacity?: number;
    children?: default_2.ReactNode;
}

export { }
