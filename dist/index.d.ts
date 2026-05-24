import { default as default_2 } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { ReactNode } from 'react';
import { ReactPortal } from 'react';

export declare const AccentColor: {
    readonly Occupied: "var(--bbui-accent-occupied)";
    readonly Vacant: "var(--bbui-accent-vacant)";
    readonly Maintenance: "var(--bbui-accent-maintenance)";
    readonly Reserved: "var(--bbui-accent-reserved)";
    readonly Cleaning: "var(--bbui-accent-cleaning)";
    readonly Primary: "var(--bbui-color-primary)";
    readonly Error: "var(--bbui-color-error)";
};

export declare type AccentColorToken = (typeof AccentColor)[keyof typeof AccentColor];

declare type AlignBlock = "start" | "center" | "end" | "stretch";

declare type AlignBlock_2 = "start" | "center" | "end" | "baseline" | "stretch";

declare type AlignInline = "start" | "center" | "end" | "stretch";

declare type AlignInline_2 = "start" | "center" | "end" | "stretch";

export declare const AlignItems: {
    readonly Start: "flex-start";
    readonly Center: "center";
    readonly End: "flex-end";
    readonly Stretch: "stretch";
    readonly Baseline: "baseline";
};

export declare type AlignItemsToken = (typeof AlignItems)[keyof typeof AlignItems];

export declare const AlignSelf: {
    readonly Auto: "auto";
    readonly Start: "flex-start";
    readonly Center: "center";
    readonly End: "flex-end";
    readonly Stretch: "stretch";
    readonly Baseline: "baseline";
};

export declare type AlignSelfToken = (typeof AlignSelf)[keyof typeof AlignSelf];

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

export declare const Aside: default_2.ForwardRefExoticComponent<AsideProps & default_2.RefAttributes<HTMLElement>>;

export declare interface AsideProps {
    /** Padding inside the aside (default: Spacing.Large) */
    padding?: SpaceToken;
    /** Text color (default: TextColor.Subtle) */
    color?: TextColorToken;
    /** Left border color (default: BorderColor.Default) */
    borderColor?: BorderColorToken;
    children?: default_2.ReactNode;
}

export declare const Avatar: default_2.ForwardRefExoticComponent<AvatarProps & default_2.RefAttributes<HTMLSpanElement>>;

export declare type AvatarAppearance = "circle" | "square";

export declare interface AvatarProps {
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

export declare type AvatarSize = "xsmall" | "small" | "medium" | "large" | "xlarge";

export declare type AvatarStatus = "online" | "offline" | "busy" | "focus";

export declare const BackgroundColor: {
    readonly Transparent: "transparent";
    readonly Default: "var(--bbui-bg-default)";
    readonly Surface: "var(--bbui-bg-surface)";
    readonly Subtle: "var(--bbui-bg-subtle)";
    readonly Neutral: "var(--bbui-bg-neutral)";
    readonly NeutralBold: "var(--bbui-bg-neutral-bold)";
    readonly NeutralBolder: "var(--bbui-bg-neutral-bolder)";
    readonly SidebarBg: "var(--bbui-bg-sidebar)";
    readonly Dark: "var(--bbui-bg-dark)";
    readonly DarkHover: "var(--bbui-bg-dark-hover)";
    readonly DarkActive: "var(--bbui-bg-dark-active)";
    readonly Accent: "var(--bbui-bg-accent)";
    readonly Brand: "var(--bbui-bg-brand)";
    readonly BrandBold: "var(--bbui-bg-brand-bold)";
    readonly PrimaryContainer: "var(--bbui-bg-primary-container)";
    readonly SecondaryContainer: "var(--bbui-bg-secondary-container)";
    readonly Success: "var(--bbui-bg-primary-container)";
    readonly SuccessBold: "var(--bbui-bg-brand)";
    readonly Warning: "var(--bbui-bg-warning)";
    readonly WarningBold: "var(--bbui-bg-warning-bold)";
    readonly Error: "var(--bbui-bg-error)";
    readonly ErrorBold: "var(--bbui-bg-error-bold)";
    readonly Info: "var(--bbui-bg-info)";
    readonly InfoBold: "var(--bbui-bg-info-bold)";
    readonly Overlay: "var(--bbui-bg-overlay)";
    readonly PrimaryTint: "var(--bbui-bg-primary-tint)";
    readonly ErrorTint: "var(--bbui-bg-error-tint)";
    readonly SecondaryTint: "var(--bbui-bg-secondary-tint)";
    readonly WarningTint: "var(--bbui-bg-warning-tint)";
    readonly InfoTint: "var(--bbui-bg-info-tint)";
    readonly AccentTint: "var(--bbui-bg-accent-tint)";
};

export declare type BackgroundColorToken = (typeof BackgroundColor)[keyof typeof BackgroundColor];

export declare const Badge: default_2.ForwardRefExoticComponent<BadgeProps & default_2.RefAttributes<HTMLSpanElement>>;

export declare interface BadgeProps extends default_2.HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
    /** When true, uses micro font (10px), uppercase, tracking-widest — matches NestOS mockups */
    uppercase?: boolean;
    children?: default_2.ReactNode;
}

export declare type BadgeVariant = "default" | "success" | "warning" | "error" | "info" | "brand" | "primaryTint" | "errorTint" | "warningTint" | "infoTint" | "accentTint";

export declare const Banner: default_2.ForwardRefExoticComponent<BannerProps & default_2.RefAttributes<HTMLElement>>;

export declare interface BannerProps {
    variant?: BannerVariant;
    icon?: default_2.ReactNode;
    dismissible?: boolean;
    onDismiss?: () => void;
    children?: default_2.ReactNode;
}

declare type BannerVariant = "info" | "success" | "warning" | "error";

/**
 * Bloom-level color scale. Maps the backend `bloom_level` enum
 * (`NOT_ASSESSED` → `MASTERS`) to a 6-step accent palette. Used by
 * MasteryBar, MasteryGrid, ConceptVerdict cards, and the Gap Map.
 */
export declare const BloomColor: {
    readonly NotAssessed: "var(--bbui-bloom-not-assessed)";
    readonly Aware: "var(--bbui-bloom-aware)";
    readonly Understands: "var(--bbui-bloom-understands)";
    readonly Applies: "var(--bbui-bloom-applies)";
    readonly Analyzes: "var(--bbui-bloom-analyzes)";
    readonly Masters: "var(--bbui-bloom-masters)";
};

/** Map a backend `bloom_level` value to its color token. */
export declare function bloomColorFor(level: BloomLevelValue | string): BloomColorToken;

export declare type BloomColorToken = (typeof BloomColor)[keyof typeof BloomColor];

/** Backend `bloom_level` enum — verbatim from toar_models.py. */
export declare const BloomLevel: {
    readonly NotAssessed: "NOT_ASSESSED";
    readonly Aware: "AWARE";
    readonly Understands: "UNDERSTANDS";
    readonly Applies: "APPLIES";
    readonly Analyzes: "ANALYZES";
    readonly Masters: "MASTERS";
};

/**
 * Map a 0–100 mastery/readiness `score` to its bloom band — same
 * thresholds the backend uses (NOT_ASSESSED 0–19, AWARE 20–39,
 * UNDERSTANDS 40–59, APPLIES 60–79, ANALYZES 80–89, MASTERS 90–100).
 */
export declare function bloomLevelForScore(score: number): BloomLevelValue;

export declare type BloomLevelValue = (typeof BloomLevel)[keyof typeof BloomLevel];

export declare const BorderColor: {
    readonly Default: "var(--bbui-border-default)";
    readonly Input: "var(--bbui-border-input)";
    readonly Warning: "var(--bbui-border-warning)";
    readonly Error: "var(--bbui-border-error)";
    readonly Info: "var(--bbui-border-info)";
    readonly Success: "var(--bbui-border-success)";
    readonly Focus: "var(--bbui-color-primary)";
    readonly Outline: "var(--bbui-border-outline)";
};

export declare type BorderColorToken = (typeof BorderColor)[keyof typeof BorderColor];

export declare const BorderRadius: {
    readonly None: "0";
    readonly Small: "4px";
    readonly Medium: "6px";
    readonly Large: "8px";
    readonly XLarge: "12px";
    readonly XXLarge: "16px";
    readonly XXXLarge: "24px";
    readonly Huge: "32px";
    readonly XHuge: "48px";
    readonly Full: "9999px";
};

export declare type BorderRadiusToken = (typeof BorderRadius)[keyof typeof BorderRadius];

export declare const BorderWidth: {
    readonly Thin: "1px";
    readonly Medium: "2px";
    readonly Thick: "4px";
    readonly XThick: "8px";
};

export declare type BorderWidthToken = (typeof BorderWidth)[keyof typeof BorderWidth];

export declare const Box: default_2.ForwardRefExoticComponent<BoxProps & default_2.RefAttributes<HTMLElement>>;

export declare interface BoxProps extends default_2.HTMLAttributes<HTMLElement> {
    as?: AllowedElements;
    padding?: Responsive<ShorthandSpace>;
    paddingBlock?: Responsive<ShorthandSpace>;
    paddingBlockStart?: Responsive<SpaceToken>;
    paddingBlockEnd?: Responsive<SpaceToken>;
    paddingInline?: Responsive<ShorthandSpace>;
    paddingInlineStart?: Responsive<SpaceToken>;
    paddingInlineEnd?: Responsive<SpaceToken>;
    margin?: Responsive<ShorthandSpace>;
    marginBlock?: Responsive<ShorthandSpace>;
    marginBlockStart?: Responsive<SpaceToken>;
    marginBlockEnd?: Responsive<SpaceToken>;
    marginInline?: Responsive<ShorthandSpace>;
    marginInlineStart?: Responsive<SpaceToken>;
    marginInlineEnd?: Responsive<SpaceToken>;
    backgroundColor?: BackgroundColorToken;
    borderRadius?: BorderRadiusToken;
    borderColor?: BorderColorToken;
    borderSide?: "top" | "bottom" | "left" | "right" | "all";
    borderWidth?: BorderWidthToken;
    overflow?: "hidden" | "auto" | "scroll" | "visible";
    elevation?: ElevationToken;
    /** CSS width — accepts ContainerWidth token or raw "100%" / "640px". */
    width?: ContainerWidthToken | string | number;
    /** CSS max-width — accepts ContainerWidth token or raw string. Auto-applies marginInline:auto when set as a ContainerWidth token. */
    maxWidth?: ContainerWidthToken | string;
    /** CSS height. */
    height?: string | number;
    /** CSS min-height. */
    minHeight?: string | number;
    /** CSS max-height. */
    maxHeight?: string | number;
    /**
     * CSS min-width. `0` is the canonical flex-shrink fix (lets this Box
     * shrink below its content size inside a flex parent).
     */
    minWidth?: 0 | "auto" | string | number;
    display?: Responsive<DisplayToken>;
    alignItems?: Responsive<AlignItemsToken>;
    justifyContent?: Responsive<JustifyContentToken>;
    alignSelf?: AlignSelfToken;
    flexDirection?: Responsive<FlexDirectionToken>;
    flexWrap?: FlexWrapToken;
    /** flex shorthand: number, "auto", or "none". */
    flex?: number | "auto" | "none" | string;
    flexGrow?: number;
    flexShrink?: number;
    /** Gap between flex/grid children. */
    gap?: SpaceToken;
    position?: PositionToken;
    inset?: 0 | string;
    zIndex?: number;
    /** CSS color (inherited by SVG icon children). */
    color?: TextColorToken | string;
    /** Opacity 0–1. */
    opacity?: number;
    /** Cursor style. */
    cursor?: CursorToken;
    /** white-space behavior. */
    whiteSpace?: WhiteSpaceToken;
    /** pointer-events — useful for non-interactive overlays. */
    pointerEvents?: "auto" | "none";
    children?: default_2.ReactNode;
}

export declare interface Breadcrumb {
    label: string;
    href?: string;
}

export declare const Breakpoint: {
    /** 0–639px */
    readonly Mobile: 0;
    /** 640–1023px */
    readonly Tablet: 640;
    /** 1024px+ */
    readonly Desktop: 1024;
};

export declare type BreakpointName = "mobile" | "tablet" | "desktop";

export declare const Button: default_2.ForwardRefExoticComponent<ButtonProps & default_2.RefAttributes<HTMLButtonElement>>;

export declare interface ButtonProps extends default_2.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Default background. */
    backgroundColor?: BackgroundColorToken;
    /** Background on hover. Falls back to backgroundColor. */
    hover?: BackgroundColorToken;
    /** Background on press/active. Falls back to hover, then backgroundColor. */
    pressed?: BackgroundColorToken;
    /** CSS gradient — overrides backgroundColor when set. */
    gradient?: GradientToken;
    /** Default text color. */
    color?: TextColorToken;
    /** Text color on hover. Falls back to color. */
    colorHover?: TextColorToken;
    /** Text color on press. Falls back to colorHover, then color. */
    colorPressed?: TextColorToken;
    /** Border color. */
    borderColor?: BorderColorToken;
    /** Border color on hover. */
    borderColorHover?: BorderColorToken;
    /** Border color on press. */
    borderColorPressed?: BorderColorToken;
    /** Border width (default: 1px if borderColor set, else none). */
    borderWidth?: BorderWidthToken;
    /** Typography. */
    size?: FontSizeToken;
    weight?: FontWeightToken;
    letterSpacing?: LetterSpacingToken;
    textTransform?: TextTransformToken;
    fontFamily?: FontFamilyToken;
    /** Gap between iconStart, label, iconEnd. */
    gap?: SpaceToken;
    /** Spacing. */
    padding?: SpaceToken;
    paddingBlock?: SpaceToken;
    paddingInline?: SpaceToken;
    borderRadius?: BorderRadiusToken;
    /** Text content shorthand (alternative to children). */
    label?: string;
    /** Icon before the label. */
    iconStart?: default_2.ReactNode;
    /** Icon after the label. */
    iconEnd?: default_2.ReactNode;
    children?: default_2.ReactNode;
}

export declare const Calendar: default_2.ForwardRefExoticComponent<CalendarProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface CalendarProps {
    value?: Date;
    defaultValue?: Date;
    onChange?: (date: Date) => void;
    min?: Date;
    max?: Date;
    /** Color for the selected date (default: TextColor.Inverse) */
    selectedColor?: TextColorToken;
    /** Background for the selected date (default: BackgroundColor.Brand) */
    selectedBackground?: BackgroundColorToken;
}

export declare const Card: default_2.ForwardRefExoticComponent<CardProps & default_2.RefAttributes<HTMLElement>>;

export declare interface CardProps {
    /** Padding inside the card sections (default: Spacing.Large) */
    padding?: SpaceToken;
    /** Card background (default: BackgroundColor.Default) */
    backgroundColor?: BackgroundColorToken;
    /** Corner radius (default: BorderRadius.XXLarge / 16px) */
    borderRadius?: BorderRadiusToken;
    /** Border color (default: BorderColor.Default) */
    borderColor?: BorderColorToken;
    /** Shadow depth (default: Elevation.Ambient) */
    elevation?: ElevationToken;
    /** Thick accent stripe color on top of the card (e.g., room status) */
    accentColor?: AccentColorToken;
    /** Accent stripe width (default: BorderWidth.XThick / 8px) */
    accentWidth?: BorderWidthToken;
    /** Content rendered in the card header area */
    header?: default_2.ReactNode;
    /** Content rendered in the card footer area */
    footer?: default_2.ReactNode;
    children?: default_2.ReactNode;
}

export declare const Checkbox: default_2.ForwardRefExoticComponent<CheckboxProps & default_2.RefAttributes<HTMLInputElement>>;

export declare interface CheckboxGroup {
    title?: string;
    items: CheckboxItem[];
}

export declare interface CheckboxItem {
    id: string;
    label: string;
}

export declare interface CheckboxProps extends Omit<default_2.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
    label?: string;
    /** Visual size (default: "medium") */
    size?: "small" | "medium" | "large";
}

/**
 * Pill primitive — covers both selectable chips and Badge-style display tags.
 *
 * Interactive (button):
 *   <Chip selected={isOn} onClick={toggle}>PG</Chip>
 *   <Chip appearance="outlined" showCheckWhenSelected onClick={...}>Pet-friendly</Chip>
 *
 * Static display (span):
 *   <Chip variant="primaryTint">3BHK</Chip>
 *   <Chip variant="primaryTint" icon={<StarIcon />}>4.8</Chip>
 *
 * The element auto-switches: `<span>` by default, `<button>` once `onClick`
 * or `selected` is provided. Pass extra props through `...rest` either way.
 */
export declare const Chip: default_2.ForwardRefExoticComponent<ChipProps & default_2.RefAttributes<HTMLElement>>;

/**
 * Visual treatment.
 *   filled    — solid Subtle background when unselected, Brand when selected.
 *   outlined  — transparent + Outline border when unselected, Brand when selected.
 *
 * Ignored when `variant` is set — variants paint their own colors.
 */
export declare type ChipAppearance = "filled" | "outlined";

/**
 * Padding density.
 *   compact     — XXSmall block, Small inline. Default. Hugs the label tight.
 *   comfortable — XSmall block, Medium inline. Roomier; for hero/nav rows.
 */
export declare type ChipDensity = "compact" | "comfortable";

export declare interface ChipProps extends Omit<default_2.HTMLAttributes<HTMLElement>, "color"> {
    /**
     * Selected/active state for interactive chips. Omit entirely for static
     * display chips — without `selected` AND without `onClick` the chip
     * renders as a `<span>` (no button semantics, no focus ring, no
     * aria-pressed).
     */
    selected?: boolean;
    /** Visual treatment. Default: "filled". Ignored when `variant` is set. */
    appearance?: ChipAppearance;
    /** Padding density. Default: "compact". */
    density?: ChipDensity;
    /**
     * Color preset matching the Badge palette. Use for static display chips
     * (status tags, property type labels, rating pills). When set, overrides
     * appearance + selected colors entirely.
     */
    variant?: BadgeVariant;
    /** Label font weight. Default: FontWeight.Medium. */
    fontWeight?: FontWeightToken;
    /** Label font size. Default: FontSize.XSmall. */
    fontSize?: FontSizeToken;
    /** Optional leading node (icon, avatar, etc.) rendered before the label. */
    icon?: default_2.ReactNode;
    /** When true, renders a Material check icon before the label while selected. */
    showCheckWhenSelected?: boolean;
    /** Click handler. Presence flips the chip from static to interactive. */
    onClick?: default_2.MouseEventHandler<HTMLElement>;
    /** Disabled state (only meaningful for interactive chips). */
    disabled?: boolean;
    children?: default_2.ReactNode;
}

export declare const ContainerWidth: {
    readonly Small: "640px";
    readonly Medium: "768px";
    readonly Large: "1024px";
    readonly XLarge: "1280px";
    readonly XXLarge: "1600px";
};

export declare type ContainerWidthToken = (typeof ContainerWidth)[keyof typeof ContainerWidth];

export declare const Cursor: {
    readonly Auto: "auto";
    readonly Default: "default";
    readonly Pointer: "pointer";
    readonly Text: "text";
    readonly Wait: "wait";
    readonly Help: "help";
    readonly NotAllowed: "not-allowed";
    readonly Grab: "grab";
    readonly Grabbing: "grabbing";
    readonly Move: "move";
    readonly ZoomIn: "zoom-in";
    readonly ZoomOut: "zoom-out";
    readonly None: "none";
};

export declare type CursorToken = (typeof Cursor)[keyof typeof Cursor];

/**
 * Mastery delta direction — bound to backend `mastery_update.direction`
 * and `ConceptDelta.direction`. Used by MasteryBar arrow flash.
 */
export declare const DirectionColor: {
    readonly up: "var(--bbui-bloom-masters)";
    readonly down: "var(--bbui-color-error)";
    readonly unchanged: "var(--bbui-color-subtlest)";
};

export declare type DirectionValue = keyof typeof DirectionColor;

export declare const Display: {
    readonly Block: "block";
    readonly InlineBlock: "inline-block";
    readonly Inline: "inline";
    readonly Flex: "flex";
    readonly InlineFlex: "inline-flex";
    readonly Grid: "grid";
    readonly InlineGrid: "inline-grid";
    readonly None: "none";
};

export declare type DisplayToken = (typeof Display)[keyof typeof Display];

export declare const Divider: default_2.ForwardRefExoticComponent<DividerProps & default_2.RefAttributes<HTMLHRElement>>;

export declare interface DividerProps {
    /** Horizontal (default) or vertical */
    orientation?: "horizontal" | "vertical";
    /** Line color (default: BorderColor.Default) */
    color?: BorderColorToken;
    /** Spacing above and below (horizontal) or left and right (vertical) */
    spacing?: SpaceToken;
}

export declare function Drawer({ open, onClose, children, offsetTop, padding, maxWidth, align, blur, closeOnMouseLeave, }: DrawerProps): ReactPortal | null;

export declare namespace Drawer {
    var displayName: string;
}

export declare type DrawerAlign = "start" | "center" | "end";

export declare interface DrawerProps {
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

export declare const DropdownCheckboxMenu: default_2.ForwardRefExoticComponent<DropdownCheckboxMenuProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface DropdownCheckboxMenuProps {
    trigger: default_2.ReactNode;
    groups: CheckboxGroup[];
    /** Record of item id → checked state */
    checked: Record<string, boolean>;
    onChange: (id: string, checked: boolean) => void;
}

export declare const DropdownMenu: default_2.ForwardRefExoticComponent<DropdownMenuProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface DropdownMenuProps {
    trigger: default_2.ReactNode;
    sections: MenuSection[];
    activeId?: string;
    onSelect?: (id: string) => void;
}

export declare const Elevation: {
    readonly None: "none";
    readonly Raised: "var(--bbui-shadow-raised)";
    readonly Ambient: "var(--bbui-shadow-ambient)";
    readonly Dropdown: "var(--bbui-shadow-dropdown)";
    readonly Overlay: "var(--bbui-shadow-overlay)";
    readonly CardHover: "var(--bbui-shadow-card-hover)";
};

export declare type ElevationToken = (typeof Elevation)[keyof typeof Elevation];

export declare const EmptyState: default_2.ForwardRefExoticComponent<EmptyStateProps & default_2.RefAttributes<HTMLElement>>;

export declare interface EmptyStateProps {
    header: string;
    description?: string;
    /** Image or illustration rendered above the header */
    image?: default_2.ReactNode;
    /** Primary action button */
    primaryAction?: default_2.ReactNode;
    /** Secondary action button */
    secondaryAction?: default_2.ReactNode;
}

/**
 * Evaluation result color map — bound to backend
 * `evaluation_complete.result` enum. Used by EvaluationStream
 * result chips and SessionSummary tallies.
 */
export declare const EvaluationResultColor: {
    readonly correct: "var(--bbui-bloom-masters)";
    readonly partial: "var(--bbui-bloom-applies)";
    readonly incorrect: "var(--bbui-color-error)";
    readonly skipped: "var(--bbui-color-subtlest)";
};

export declare type EvaluationResultValue = keyof typeof EvaluationResultColor;

export declare const FlexDirection: {
    readonly Row: "row";
    readonly Column: "column";
    readonly RowReverse: "row-reverse";
    readonly ColumnReverse: "column-reverse";
};

export declare type FlexDirectionToken = (typeof FlexDirection)[keyof typeof FlexDirection];

export declare const FlexWrap: {
    readonly NoWrap: "nowrap";
    readonly Wrap: "wrap";
    readonly WrapReverse: "wrap-reverse";
};

export declare type FlexWrapToken = (typeof FlexWrap)[keyof typeof FlexWrap];

export declare const FontFamily: {
    readonly Display: "var(--bbui-font-display)";
    readonly Body: "var(--bbui-font-body)";
};

export declare type FontFamilyToken = (typeof FontFamily)[keyof typeof FontFamily];

export declare const FontSize: {
    readonly Micro: "10px";
    readonly XXSmall: "12px";
    readonly XSmall: "14px";
    readonly Small: "16px";
    readonly Medium: "18px";
    readonly Large: "20px";
    readonly XLarge: "24px";
    readonly XXLarge: "30px";
    readonly XXXLarge: "36px";
    readonly Huge: "48px";
};

export declare type FontSizeToken = (typeof FontSize)[keyof typeof FontSize];

export declare const FontWeight: {
    readonly Regular: 400;
    readonly Medium: 500;
    readonly Semibold: 600;
    readonly Bold: 700;
    readonly ExtraBold: 800;
    /** 900 — large display numbers */
    readonly Black: 900;
};

export declare type FontWeightToken = (typeof FontWeight)[keyof typeof FontWeight];

export declare const GlassCard: default_2.ForwardRefExoticComponent<GlassCardProps & default_2.RefAttributes<HTMLElement>>;

export declare interface GlassCardAction {
    /** Button / link label text */
    label: string;
    /** When provided, renders as an anchor element */
    href?: string;
    /** Callback fired on click — ignored when `href` is set */
    onClick?: () => void;
    /** Optional trailing icon rendered after the label */
    icon?: default_2.ReactNode;
}

export declare interface GlassCardMedia {
    /** Image source URL */
    src: string;
    /** Accessible alt text */
    alt: string;
    /** Media width (default: Spacing.Size8 / 128px) */
    width?: SpaceToken;
    /** Media height (default: Spacing.Size8 / 128px) */
    height?: SpaceToken;
}

export declare interface GlassCardProps {
    /** Leading icon or visual badge above the heading */
    icon?: default_2.ReactNode;
    /** Card heading text */
    heading: string;
    /** Supporting body text */
    description?: string;
    /** Call-to-action rendered at the bottom of the text region */
    action?: GlassCardAction;
    /** Structured media config displayed beside the text content */
    media?: GlassCardMedia;
    /** Inner padding (default: Spacing.XXLarge) */
    padding?: SpaceToken;
    /** Corner radius (default: BorderRadius.XXLarge) */
    borderRadius?: BorderRadiusToken;
    /** Backdrop blur intensity in px (default: 24) */
    blur?: number;
    /** Background opacity 0–1 (default: 0.08) */
    backgroundOpacity?: number;
    /** Border opacity 0–1 (default: 0.15) */
    borderOpacity?: number;
    children?: default_2.ReactNode;
}

export declare const Gradient: {
    readonly Brand: "var(--bbui-gradient-brand)";
};

export declare type GradientToken = (typeof Gradient)[keyof typeof Gradient];

export declare const Grid: default_2.ForwardRefExoticComponent<GridProps & default_2.RefAttributes<HTMLElement>>;

declare type GridElement = "div" | "section" | "main" | "ul" | "ol";

export declare interface GridProps extends default_2.HTMLAttributes<HTMLElement> {
    as?: GridElement;
    /** Responsive columns: number, fr array, or { mobile, tablet?, desktop? } */
    columns?: Responsive<number | number[]>;
    /** Responsive gap */
    gap?: Responsive<SpaceToken>;
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

export declare const Header: default_2.ForwardRefExoticComponent<HeaderProps & default_2.RefAttributes<HTMLElement>>;

export declare interface HeaderProps {
    title: string;
    subtitle?: string;
    breadcrumbs?: Breadcrumb[];
    actions?: default_2.ReactNode;
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

export declare interface HeroBadge {
    label: string;
    text: string;
    path?: string;
    /** Color of the badge label text (default: TextColor.Inverse) */
    labelColor?: TextColorToken;
    /** Background of the badge label pill (default: BackgroundColor.Accent) */
    labelBackgroundColor?: BackgroundColorToken;
    /** Border color of the badge pill (default: BorderColor.Default) */
    borderColor?: BorderColorToken;
    icon?: default_2.ReactNode;
}

export declare interface HeroCta {
    label: string;
    path: string;
    variant?: "primary" | "secondary";
    icon?: default_2.ReactNode;
}

export declare interface HeroGradient {
    enabled?: boolean;
    /** Full CSS gradient string */
    css?: string;
    /** Height of the gradient backdrop */
    height?: SpaceToken | string;
}

export declare interface HeroImage {
    src: string;
    alt?: string;
    /** Max width of the image (default: Spacing.Size16 + Spacing.Size8 = use token) */
    maxWidth?: SpaceToken | string;
}

export declare const HeroSection: default_2.ForwardRefExoticComponent<HeroSectionProps & default_2.RefAttributes<HTMLElement>>;

export declare interface HeroSectionProps {
    title: string;
    subtitle?: string;
    badge?: HeroBadge;
    actions?: HeroCta[];
    image?: HeroImage;
    /** Custom content below subtitle, above actions */
    children?: default_2.ReactNode;
    /** Title font size on narrow screens (default: FontSize.XXXLarge / 36px) */
    titleSize?: FontSizeToken;
    /** Title font size on wide screens (default: FontSize.Huge / 48px) */
    titleSizeLarge?: FontSizeToken;
    titleWeight?: FontWeightToken;
    titleColor?: TextColorToken;
    subtitleSize?: FontSizeToken;
    subtitleColor?: TextColorToken;
    primaryCtaBackground?: BackgroundColorToken;
    primaryCtaColor?: TextColorToken;
    primaryCtaBorderRadius?: BorderRadiusToken;
    primaryCtaWeight?: FontWeightToken;
    secondaryCtaColor?: TextColorToken;
    secondaryCtaWeight?: FontWeightToken;
    /** Gap between CTA buttons (default: Spacing.MediumLarge) */
    ctaGap?: SpaceToken;
    /** Vertical padding for the section (default: Spacing.Size7 / 112px) */
    paddingBlock?: SpaceToken;
    /** Horizontal padding (default: Spacing.XXXLarge) */
    paddingInline?: SpaceToken;
    /** Gap between text content and image (default: Spacing.XHuge) */
    contentGap?: SpaceToken;
    /** Vertical gap between text elements (default: Spacing.XLarge) */
    textGap?: SpaceToken;
    /** Max width of the text column */
    textMaxWidth?: SpaceToken | string;
    gradient?: HeroGradient;
    /** Breakpoint in px for responsive layout (default: 768) */
    breakpoint?: number;
}

/**
 * Hide — inverse of Show. Renders children EXCEPT when the rule matches.
 *
 * ```tsx
 * <Hide on="mobile"><DesktopOnlyTooltip /></Hide>
 * <Hide above="tablet"><MobileOnlyDrawer /></Hide>
 * <Hide below="desktop"><FullWidthHero /></Hide>
 * ```
 */
export declare function Hide({ on, above, below, children }: HideProps): JSX_2.Element | null;

export declare interface HideProps {
    /** Hide children when the current breakpoint is one of these. */
    on?: BreakpointName | BreakpointName[];
    /** Hide children when viewport is at or above this breakpoint. */
    above?: BreakpointName;
    /** Hide children when viewport is below this breakpoint. */
    below?: BreakpointName;
    children: ReactNode;
}

export declare const Icon: default_2.ForwardRefExoticComponent<IconProps & default_2.RefAttributes<HTMLSpanElement>>;

export declare const IconButton: default_2.ForwardRefExoticComponent<IconButtonProps & default_2.RefAttributes<HTMLButtonElement>>;

export declare interface IconButtonProps extends default_2.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    size?: IconSizeToken;
    color?: TextColorToken;
    backgroundColor?: BackgroundColorToken;
    padding?: SpaceToken;
    children?: default_2.ReactNode;
}

export declare interface IconProps extends default_2.HTMLAttributes<HTMLSpanElement> {
    size?: IconSizeToken;
    color?: TextColorToken;
    label?: string;
    children?: default_2.ReactNode;
}

export declare const IconSize: {
    readonly Small: "16px";
    readonly Medium: "20px";
    readonly Large: "24px";
    readonly XLarge: "32px";
    readonly XXLarge: "40px";
};

export declare type IconSizeToken = (typeof IconSize)[keyof typeof IconSize];

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

export declare const InlineEdit: default_2.ForwardRefExoticComponent<InlineEditProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface InlineEditProps {
    /** Current / default value */
    defaultValue: string;
    label?: string;
    /** Accessible label for the edit button (default: defaultValue) */
    editButtonLabel?: string;
    /** Custom edit view — receives field props. Defaults to a TextInput. */
    editView?: (props: {
        value: string;
        onChange: (e: default_2.ChangeEvent<HTMLInputElement>) => void;
        onKeyDown: (e: default_2.KeyboardEvent) => void;
        autoFocus: boolean;
    }) => default_2.ReactNode;
    /** Custom read view. Defaults to a Text span. */
    readView?: (value: string) => default_2.ReactNode;
    /** Called with the new value when the user confirms */
    onConfirm: (value: string) => void;
    /** Called when the user cancels editing */
    onCancel?: () => void;
}

declare type InlineElement = "div" | "span" | "ul" | "ol" | "nav";

export declare interface InlineProps extends default_2.HTMLAttributes<HTMLElement> {
    as?: InlineElement;
    /**
     * Responsive gap between children. Single token = both rows and columns;
     * `[rowGap, columnGap]` tuple sets each axis independently (CSS `gap`
     * shorthand). Tuple form supersedes `rowSpace`.
     */
    space?: Responsive<SpaceValue>;
    /**
     * @deprecated Pass `space={[rowGap, columnGap]}` instead. Kept for
     * backwards compatibility — overrides the row component of `space` when set.
     */
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
    /**
     * Override CSS min-width. Pass 0 to let this Inline shrink below its content
     * size inside a flex parent (the canonical fix for "ancestor doesn't allow
     * my truncating child to ellipsize"). Default behaviour is auto.
     */
    minWidth?: 0 | "auto";
    children?: default_2.ReactNode;
}

export declare const JustifyContent: {
    readonly Start: "flex-start";
    readonly Center: "center";
    readonly End: "flex-end";
    readonly SpaceBetween: "space-between";
    readonly SpaceAround: "space-around";
    readonly SpaceEvenly: "space-evenly";
};

export declare type JustifyContentToken = (typeof JustifyContent)[keyof typeof JustifyContent];

export declare const Layout: default_2.ForwardRefExoticComponent<LayoutProps & default_2.RefAttributes<HTMLElement>>;

export declare interface LayoutProps {
    topNav?: default_2.ReactNode;
    sideNav?: default_2.ReactNode;
    /** Mobile bottom navigation — shown only on mobile, hidden on tablet+ */
    mobileNav?: default_2.ReactNode;
    /** Background color of the layout (default: BackgroundColor.Surface) */
    backgroundColor?: BackgroundColorToken;
    children?: default_2.ReactNode;
}

export declare const LetterSpacing: {
    readonly Tighter: "-0.05em";
    readonly Tight: "-0.025em";
    readonly Normal: "0";
    readonly Wide: "0.05em";
    readonly Wider: "0.075em";
    /** 0.1em — uppercase labels */
    readonly Widest: "0.1em";
};

export declare type LetterSpacingToken = (typeof LetterSpacing)[keyof typeof LetterSpacing];

export declare const LikertScale: default_2.ForwardRefExoticComponent<LikertScaleProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface LikertScaleProps {
    value?: number;
    onChange: (value: number) => void;
    /** Labels for each option (length defines option count, default 5) */
    labels?: string[];
}

export declare const LinkButton: default_2.ForwardRefExoticComponent<LinkButtonProps & default_2.RefAttributes<HTMLAnchorElement>>;

export declare interface LinkButtonProps extends default_2.AnchorHTMLAttributes<HTMLAnchorElement> {
    backgroundColor?: BackgroundColorToken;
    color?: TextColorToken;
    padding?: SpaceToken;
    paddingBlock?: SpaceToken;
    paddingInline?: SpaceToken;
    borderRadius?: BorderRadiusToken;
    children?: default_2.ReactNode;
}

/**
 * LiquidGlass — frosted-glass panel with wobbly edge distortion.
 *
 * Three stacked layers inside one container:
 *   1. **Bend** — backdrop-blur + SVG turbulence/displacement
 *   2. **Glow** — outer drop-shadow
 *   3. **Edge** — inset highlight (glass rim)
 *
 * Pure visual primitive — no drag, no expand, no motion. Children render above
 * all decorative layers via stacking context.
 *
 * ```tsx
 * <LiquidGlass blurIntensity="xl" glowIntensity="sm">
 *   <Box padding={Spacing.XHuge}>…</Box>
 * </LiquidGlass>
 * ```
 */
export declare const LiquidGlass: default_2.ForwardRefExoticComponent<LiquidGlassProps & default_2.RefAttributes<HTMLDivElement>>;

export declare type LiquidGlassBlur = "sm" | "md" | "lg" | "xl";

export declare type LiquidGlassIntensity = "none" | "xs" | "sm" | "md" | "lg" | "xl";

export declare interface LiquidGlassProps extends default_2.HTMLAttributes<HTMLDivElement> {
    children?: default_2.ReactNode;
    /** CSS border-radius value (token or string). Default: BorderRadius.XLarge. */
    borderRadius?: string;
    /** Backdrop-filter blur intensity. Default: "xl". */
    blurIntensity?: LiquidGlassBlur;
    /** Outer glow shadow intensity. Default: "sm". */
    glowIntensity?: LiquidGlassIntensity;
    /** Inner edge-highlight intensity. Default: "md". */
    shadowIntensity?: LiquidGlassIntensity;
    /**
     * Optional CSS gradient string painted as a 1px rim around the panel
     * via mask-compositing. Visible against any background — use to add
     * brand colour to the glass edge on light or dark scenes.
     */
    borderGradient?: string;
    /** Border ring width in px when `borderGradient` is set. Default: 1. */
    borderWidth?: number;
    /** Optional explicit width / height. */
    width?: string;
    height?: string;
}

export declare const Menu: default_2.ForwardRefExoticComponent<MenuProps & default_2.RefAttributes<HTMLElement>>;

export declare interface MenuItem {
    id: string;
    label: string;
    icon?: default_2.ReactNode;
    disabled?: boolean;
}

export declare interface MenuProps {
    sections: MenuSection[];
    activeId?: string;
    onSelect?: (id: string) => void;
    /** Color for active item text (default: TextColor.Brand) */
    activeColor?: TextColorToken;
    /** Background for active item (default: BackgroundColor.Subtle) */
    activeBackground?: BackgroundColorToken;
}

export declare interface MenuSection {
    title?: string;
    items: MenuItem[];
}

export declare const MobileNav: default_2.ForwardRefExoticComponent<MobileNavProps & default_2.RefAttributes<HTMLElement>>;

export declare interface MobileNavItem {
    id: string;
    label: string;
    icon: default_2.ReactNode;
}

export declare interface MobileNavProps {
    items: MobileNavItem[];
    activeId?: string;
    onSelect?: (id: string) => void;
    /** Floating action button in the center */
    fab?: default_2.ReactNode;
}

export declare const Modal: default_2.ForwardRefExoticComponent<ModalProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface ModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    children?: default_2.ReactNode;
    footer?: default_2.ReactNode;
    /**
     * Modal width. Accepts a ModalSize token or any CSS length string
     * (e.g. "640px", "70%"). Default ModalSize.Medium (512px). The inner
     * `width: 100%` keeps narrow viewports from overflowing regardless of
     * the size chosen.
     */
    size?: ModalSizeToken | string;
}

/**
 * Modal width tokens — six sizes from XSmall (confirm dialogs) to Full
 * (near-fullscreen overlays). Default is Medium. Accepts any CSS length
 * if a custom size is needed.
 */
export declare const ModalSize: {
    readonly XSmall: "320px";
    readonly Small: "416px";
    readonly Medium: "512px";
    readonly Large: "704px";
    readonly XLarge: "960px";
    readonly Full: "min(96vw, 1440px)";
};

export declare type ModalSizeToken = (typeof ModalSize)[keyof typeof ModalSize];

export declare const Navbar: default_2.ForwardRefExoticComponent<NavbarProps & default_2.RefAttributes<HTMLElement>>;

export declare interface NavbarLogo {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
}

export declare interface NavbarProps {
    logo: NavbarLogo | default_2.ReactNode;
    navigation?: NavLink[];
    cta?: NavCta;
    /** Color for navigation links (default: TextColor.Subtle) */
    linkColor?: TextColorToken;
    /** Background color for CTA button (default: BackgroundColor.Dark) */
    ctaBackgroundColor?: BackgroundColorToken;
    /** Text color for CTA button (default: TextColor.Inverse) */
    ctaColor?: TextColorToken;
    /** Font weight for CTA button (default: FontWeight.Medium) */
    ctaWeight?: FontWeightToken;
    /** Border radius for CTA button (default: BorderRadius.Full) */
    ctaBorderRadius?: BorderRadiusToken;
    /** Horizontal padding for the nav container (default: Spacing.XXXLarge) */
    paddingInline?: SpaceToken;
    /** Vertical padding for the nav container (default: Spacing.XLarge) */
    paddingBlock?: SpaceToken;
    /** Gap between nav links (default: Spacing.XXLarge) */
    linkGap?: SpaceToken;
    /** Gap between logo and nav area (default: Spacing.Size3_5) */
    logoGap?: SpaceToken;
    /** Mobile menu background (default: BackgroundColor.Default) */
    mobileMenuBackground?: BackgroundColorToken;
    /** Mobile menu border color (default: BorderColor.Default) */
    mobileMenuBorderColor?: BorderColorToken;
    /** Mobile menu border radius (default: BorderRadius.Large) */
    mobileMenuBorderRadius?: BorderRadiusToken;
    /** Breakpoint in px at which mobile menu collapses (default: 768) */
    mobileBreakpoint?: number;
}

export declare interface NavCta {
    label: string;
    path: string;
    icon?: default_2.ReactNode;
}

export declare interface NavLink {
    title: string;
    path: string;
}

export declare const Panel: default_2.ForwardRefExoticComponent<PanelProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface PanelProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    side?: "left" | "right";
    mode?: "overlay" | "push";
    width?: string;
    children?: default_2.ReactNode;
}

/**
 * Low-level SSE parser. Reads a `Response.body` ReadableStream, splits
 * on the SSE event boundary (`\n\n`), collects `data:` lines, and yields
 * one parsed JSON payload per event block.
 *
 * cuepilot-agent emits `data: {"event": "<name>", "data": {...}}` — type
 * lives in the JSON `event` field, not the SSE `event:` line.
 */
export declare function parseSSEStream<TEvent>(response: Response, signal?: AbortSignal): AsyncGenerator<TEvent>;

/**
 * Persona accent ring colors — Nova / Maya / Jordan from the live
 * copilot persona system. Allocated as fixed hue slots so any new
 * persona simply maps to one of the four slots.
 */
export declare const PersonaAccent: {
    readonly Nova: "var(--bbui-persona-nova)";
    readonly Maya: "var(--bbui-persona-maya)";
    readonly Jordan: "var(--bbui-persona-jordan)";
    readonly Custom: "var(--bbui-persona-custom)";
};

export declare type PersonaAccentToken = (typeof PersonaAccent)[keyof typeof PersonaAccent];

export declare const Position: {
    readonly Static: "static";
    readonly Relative: "relative";
    readonly Absolute: "absolute";
    readonly Fixed: "fixed";
    readonly Sticky: "sticky";
};

export declare type PositionToken = (typeof Position)[keyof typeof Position];

export declare const ProgressTracker: default_2.ForwardRefExoticComponent<ProgressTrackerProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface ProgressTrackerProps {
    items: Stages;
    /** Responsive: show labels or just dots on small screens */
    showLabels?: Responsive<boolean>;
    /** Visual variant: "dot" (default) or "bar" */
    variant?: "dot" | "bar";
}

/**
 * A value that can vary by breakpoint.
 *
 * - Plain value: used at all breakpoints
 * - Object: mobile is required, tablet/desktop cascade from the previous
 *
 * ```tsx
 * columns={4}                          // always 4
 * columns={{ mobile: 1, desktop: 4 }} // 1 on mobile, 1 on tablet (inherits), 4 on desktop
 * ```
 */
export declare type Responsive<T> = T | {
    mobile: T;
    tablet?: T;
    desktop?: T;
};

export declare interface RevealStepItem {
    id?: string;
    icon: default_2.ReactNode;
    label: string;
    description?: string;
    meta?: default_2.ReactNode;
}

export declare const RevealSteps: default_2.ForwardRefExoticComponent<RevealStepsProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface RevealStepsProps {
    items: RevealStepItem[];
    onComplete?: () => void;
    finishedLabel?: default_2.ReactNode;
    /** Scroll-area max height (default 256px) */
    maxHeight?: string;
}

/** Convenience: 0–100 score → color token in one call. */
export declare function scoreColor(score: number): BloomColorToken;

export declare const Select: default_2.ForwardRefExoticComponent<SelectProps & default_2.RefAttributes<HTMLSelectElement>>;

export declare const SelectField: default_2.ForwardRefExoticComponent<SelectFieldProps & default_2.RefAttributes<HTMLSelectElement>>;

export declare interface SelectFieldProps {
    label?: string;
    helperText?: string;
    errorText?: string;
    id?: string;
    name?: string;
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    options: (SelectOption | SelectOptionGroup)[];
    disabled?: boolean;
    required?: boolean;
    onChange?: default_2.ChangeEventHandler<HTMLSelectElement>;
    onBlur?: default_2.FocusEventHandler<HTMLSelectElement>;
    /** Label text color (default: TextColor.Default) */
    labelColor?: TextColorToken;
    /** Label font size (default: FontSize.XSmall) */
    labelSize?: FontSizeToken;
    /** Label font weight (default: FontWeight.Medium) */
    labelWeight?: FontWeightToken;
    /** Select background (default: BackgroundColor.Subtle) */
    inputBackground?: BackgroundColorToken;
    /** Select border color (default: undefined — borderless) */
    inputBorderColor?: BorderColorToken;
    /** Select border radius (default: BorderRadius.XXLarge) */
    inputBorderRadius?: BorderRadiusToken;
    /** Select padding (default: Spacing.MediumLarge) */
    inputPadding?: SpaceToken;
    /** Label text-transform */
    labelTextTransform?: default_2.CSSProperties["textTransform"];
    /** Label letter-spacing */
    labelLetterSpacing?: string;
    /** Which sides get a border (default: "all") */
    inputBorderSide?: "all" | "bottom";
}

export declare interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}

export declare interface SelectOptionGroup {
    label: string;
    options: SelectOption[];
}

export declare interface SelectProps extends Omit<default_2.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
    options: (SelectOption | SelectOptionGroup)[];
    placeholder?: string;
    backgroundColor?: BackgroundColorToken;
    borderColor?: BorderColorToken;
    borderRadius?: BorderRadiusToken;
    padding?: SpaceToken;
    paddingBlock?: SpaceToken;
    paddingInline?: SpaceToken;
    fontSize?: FontSizeToken;
    color?: TextColorToken;
}

/**
 * Spacing values follow CSS shorthand:
 *   `Spacing.Medium`                         → all sides
 *   `[v, h]`                                 → vertical, horizontal
 *   `[t, h, b]`                              → top, horizontal, bottom
 *   `[t, r, b, l]`                           → top, right, bottom, left
 *
 * Each entry is a token; arrays are joined into a CSS shorthand string. The
 * single-axis props (`paddingBlock`, `paddingInline`, `marginBlock`,
 * `marginInline`) accept 1–2 tokens (`[start, end]`); the per-edge props
 * (`paddingBlockStart`, etc.) accept a single token only.
 *
 * Any of these may also be wrapped in a `Responsive` object to vary by
 * breakpoint:
 *   `padding={{ mobile: Spacing.Medium, desktop: [Spacing.Large, Spacing.XLarge] }}`
 */
declare type ShorthandSpace = SpaceToken | readonly SpaceToken[];

/**
 * Show — conditional render based on the current breakpoint.
 *
 * ```tsx
 * <Show on="mobile"><MobileNav /></Show>
 * <Show on={["tablet", "desktop"]}><DesktopHeader /></Show>
 * <Show above="tablet"><SideRail /></Show>
 * <Show below="desktop"><MobileBanner /></Show>
 * ```
 *
 * Renders nothing on the server and on the initial client render until
 * useBreakpoint resolves. For above-the-fold content where flicker matters,
 * prefer CSS media queries.
 */
export declare function Show({ on, above, below, children }: ShowProps): JSX_2.Element | null;

export declare interface ShowProps {
    /**
     * Render children only when the current breakpoint is one of these.
     * Mutually exclusive with `above` / `below`.
     */
    on?: BreakpointName | BreakpointName[];
    /**
     * Render children only when the viewport is at or above this breakpoint.
     * `above="tablet"` means: tablet OR desktop.
     */
    above?: BreakpointName;
    /**
     * Render children only when the viewport is below this breakpoint.
     * `below="desktop"` means: mobile OR tablet.
     */
    below?: BreakpointName;
    children: ReactNode;
}

export declare const Sidebar: default_2.ForwardRefExoticComponent<SidebarProps & default_2.RefAttributes<HTMLElement>>;

export declare interface SidebarItem {
    id: string;
    label: string;
    icon?: default_2.ReactNode;
    badge?: string;
    badgeVariant?: BadgeVariant;
}

export declare interface SidebarProps {
    sections: SidebarSection[];
    activeId?: string;
    onSelect?: (id: string) => void;
    header?: default_2.ReactNode;
    footer?: default_2.ReactNode;
    collapsed?: boolean;
    onToggleCollapse?: () => void;
    /** Sidebar width when expanded (default: "256px") */
    width?: string;
    /** Sidebar width when collapsed (default: "64px") */
    collapsedWidth?: string;
    /** Active item text color (default: TextColor.Brand) */
    activeColor?: TextColorToken;
    /** Active item background (default: BackgroundColor.Subtle) */
    activeBackground?: BackgroundColorToken;
    /** Border color (default: BorderColor.Default) */
    borderColor?: BorderColorToken;
}

export declare interface SidebarSection {
    title?: string;
    items: SidebarItem[];
}

export declare type SortOrder = "ASC" | "DESC";

export declare type SpaceToken = (typeof Spacing)[keyof typeof Spacing];

/**
 * Gap value for `space`. Mirrors CSS `gap` shorthand:
 *   `Spacing.Medium`                    → same gap for rows and columns
 *   `[rowGap, columnGap]`               → distinct row + column gaps
 */
declare type SpaceValue = SpaceToken | readonly [SpaceToken, SpaceToken];

/**
 * Design tokens — theme-aware via CSS custom properties.
 *
 * Every color/shadow/gradient token outputs a `var(--bbui-...)` reference.
 * Light/dark values are defined in injectStyles.ts.
 * Spacing, typography, border-radius, and sizing remain static.
 */
export declare const Spacing: {
    readonly None: "0";
    readonly XXSmall: "2px";
    readonly XSmall: "4px";
    readonly Small: "6px";
    /** Base unit. */
    readonly Medium: "8px";
    readonly MediumLarge: "12px";
    readonly Large: "16px";
    readonly XLarge: "20px";
    readonly XXLarge: "24px";
    readonly XXXLarge: "32px";
    readonly Huge: "40px";
    readonly XHuge: "48px";
    readonly XXHuge: "64px";
    readonly XXXHuge: "80px";
    readonly Size3_5: "56px";
    readonly Size7: "112px";
    readonly Size8: "128px";
    readonly Size16: "256px";
};

export declare const Spinner: default_2.ForwardRefExoticComponent<SpinnerProps & default_2.RefAttributes<HTMLSpanElement>>;

export declare interface SpinnerProps {
    size?: SpinnerSize;
    /** Accessible label (default: "Loading") */
    label?: string;
    /** Spinner color (default: TextColor.Brand) */
    color?: TextColorToken;
}

export declare type SpinnerSize = "xsmall" | "small" | "medium" | "large" | "xlarge";

export declare const Stack: default_2.ForwardRefExoticComponent<StackProps & default_2.RefAttributes<HTMLElement>>;

declare type StackElement = "div" | "span" | "ul" | "ol" | "section" | "nav";

export declare interface StackProps extends default_2.HTMLAttributes<HTMLElement> {
    as?: StackElement;
    /** Responsive gap between children (vertical) */
    space?: Responsive<SpaceToken>;
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

export declare interface Stage {
    id: string;
    label: string;
    /** 0–100 */
    percentageComplete: number;
    status: StageStatus;
    href?: string;
    onClick?: () => void;
}

export declare type Stages = Stage[];

export declare type StageStatus = "unvisited" | "current" | "visited" | "disabled";

export declare const Stepper: default_2.ForwardRefExoticComponent<StepperProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface StepperProps {
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    /** Background for the control (default: BackgroundColor.Subtle) */
    backgroundColor?: BackgroundColorToken;
    /** Padding inside the control */
    padding?: SpaceToken;
}

/**
 * Mid-level: fetch + parse in one call. Use this from non-React code
 * (e.g., API client functions). Aborting via the signal cancels the
 * underlying fetch and stops yielding.
 */
export declare function streamSSE<TEvent>(input: RequestInfo, init?: RequestInit & {
    signal?: AbortSignal;
}): AsyncGenerator<TEvent>;

export declare interface Tab {
    id: string;
    label: string;
    content: default_2.ReactNode;
    disabled?: boolean;
}

export declare const Table: default_2.ForwardRefExoticComponent<TableProps & default_2.RefAttributes<HTMLTableElement>>;

export declare interface TableHeadCell {
    key: string;
    label: string;
    isSortable?: boolean;
    width?: string;
}

export declare interface TableProps {
    caption?: string;
    head: TableHeadCell[];
    rows: TableRow[];
    /** Rows shown per page (default: all rows) */
    rowsPerPage?: number;
    /** Current page (controlled) */
    page?: number;
    /** Default page for uncontrolled mode (default: 1) */
    defaultPage?: number;
    /** Current sort key (controlled) */
    sortKey?: string;
    /** Current sort order (controlled) */
    sortOrder?: SortOrder;
    /** Default sort key for uncontrolled mode */
    defaultSortKey?: string;
    /** Default sort order for uncontrolled mode */
    defaultSortOrder?: SortOrder;
    onSort?: (key: string, order: SortOrder) => void;
    onSetPage?: (page: number) => void;
    isLoading?: boolean;
    /** Fixed column widths (default: false) */
    isFixedSize?: boolean;
}

export declare interface TableRow {
    key: string;
    cells: default_2.ReactNode[];
    /** Callback when the row is clicked */
    onClick?: () => void;
}

export declare const Tabs: default_2.ForwardRefExoticComponent<TabsProps & default_2.RefAttributes<HTMLElement>>;

export declare interface TabsProps {
    tabs: Tab[];
    activeId?: string;
    defaultActiveId?: string;
    onChange?: (id: string) => void;
    /** Tab bar style: "underline" (default) or "pill" (NestOS style) */
    variant?: "underline" | "pill";
    /** Color for the active tab text (default: TextColor.Brand) */
    activeColor?: TextColorToken;
    /** Color for inactive tab text (default: TextColor.Subtle) */
    inactiveColor?: TextColorToken;
    /** Background of the pill container (default: BackgroundColor.Subtle) */
    pillBackground?: BackgroundColorToken;
    /** Background of the active pill (default: BackgroundColor.Default) */
    activePillBackground?: BackgroundColorToken;
    /** Padding inside the tab panel (default: Spacing.Large) */
    panelPadding?: SpaceToken;
}

declare const Text_2: default_2.ForwardRefExoticComponent<TextProps & default_2.RefAttributes<HTMLElement>>;
export { Text_2 as Text }

export declare const TextArea: default_2.ForwardRefExoticComponent<TextAreaProps & default_2.RefAttributes<HTMLTextAreaElement>>;

export declare interface TextAreaProps extends default_2.TextareaHTMLAttributes<HTMLTextAreaElement> {
    backgroundColor?: BackgroundColorToken;
    borderColor?: BorderColorToken;
    borderRadius?: BorderRadiusToken;
    padding?: SpaceToken;
    paddingBlock?: SpaceToken;
    paddingInline?: SpaceToken;
}

export declare const TextColor: {
    readonly Default: "var(--bbui-color-on-surface)";
    readonly Subtle: "var(--bbui-color-subtle)";
    readonly Subtlest: "var(--bbui-color-subtlest)";
    readonly Disabled: "var(--bbui-color-disabled)";
    readonly Inverse: "var(--bbui-color-inverse)";
    /** Always white — for text on brand/gradient/colored surfaces */
    readonly OnBrand: "var(--bbui-color-on-brand)";
    readonly Brand: "var(--bbui-color-primary)";
    readonly Selected: "var(--bbui-color-on-primary-container)";
    readonly Success: "var(--bbui-color-primary)";
    readonly Warning: "var(--bbui-color-warning)";
    readonly Error: "var(--bbui-color-error)";
    readonly ErrorContainer: "var(--bbui-color-error-container)";
    readonly Info: "var(--bbui-color-info)";
    readonly Link: "var(--bbui-color-primary)";
    readonly OnSurfaceVariant: "var(--bbui-color-on-surface-variant)";
    /** Text on success/green containers */
    readonly OnSuccess: "var(--bbui-color-on-success)";
    /** Text on error containers */
    readonly OnError: "var(--bbui-color-on-error)";
    /** Text on warning containers */
    readonly OnWarning: "var(--bbui-color-on-warning)";
    /** Text on info containers */
    readonly OnInfo: "var(--bbui-color-on-info)";
};

export declare type TextColorToken = (typeof TextColor)[keyof typeof TextColor];

export declare const TextField: default_2.ForwardRefExoticComponent<TextFieldProps & default_2.RefAttributes<HTMLInputElement>>;

export declare interface TextFieldProps {
    label?: string;
    helperText?: string;
    errorText?: string;
    id?: string;
    name?: string;
    type?: default_2.HTMLInputTypeAttribute;
    placeholder?: string;
    value?: string | number | readonly string[];
    defaultValue?: string | number | readonly string[];
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    autoFocus?: boolean;
    autoComplete?: string;
    onChange?: default_2.ChangeEventHandler<HTMLInputElement>;
    onBlur?: default_2.FocusEventHandler<HTMLInputElement>;
    onFocus?: default_2.FocusEventHandler<HTMLInputElement>;
    /** Label text color (default: TextColor.Default) */
    labelColor?: TextColorToken;
    /** Label font size (default: FontSize.XSmall) */
    labelSize?: FontSizeToken;
    /** Label font weight (default: FontWeight.Medium) */
    labelWeight?: FontWeightToken;
    /** Input background (default: BackgroundColor.Default) */
    inputBackground?: BackgroundColorToken;
    /** Input border color (default: BorderColor.Input) */
    inputBorderColor?: BorderColorToken;
    /** Input border radius (default: BorderRadius.Medium) */
    inputBorderRadius?: BorderRadiusToken;
    /** Input padding (default: Spacing.Medium) */
    inputPadding?: SpaceToken;
    /** Label text-transform */
    labelTextTransform?: default_2.CSSProperties["textTransform"];
    /** Label letter-spacing */
    labelLetterSpacing?: string;
    /** Which sides get a border (default: "all") */
    inputBorderSide?: "all" | "bottom";
    /** Element rendered before the input */
    startAdornment?: default_2.ReactNode;
    /** Element rendered after the input */
    endAdornment?: default_2.ReactNode;
}

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
    fontFamily?: FontFamilyToken;
    letterSpacing?: LetterSpacingToken;
    align?: default_2.CSSProperties["textAlign"];
    textTransform?: default_2.CSSProperties["textTransform"];
    lineHeight?: number | string;
    opacity?: number;
    /**
     * Single-line ellipsis truncation. Applies overflow:hidden + text-overflow:ellipsis
     * + white-space:nowrap + min-width:0. Use on a label that should shrink inside a
     * flex parent; ensure the chain of ancestors also allows shrinking (Inline minWidth=0).
     */
    truncate?: boolean;
    /** white-space: nowrap. Useful for short tags or counts. */
    noWrap?: boolean;
    /** flex-shrink: 0. Keeps a sibling rigid while another truncates. */
    noShrink?: boolean;
    children?: default_2.ReactNode;
}

export declare const TextTransform: {
    readonly None: "none";
    readonly Uppercase: "uppercase";
    readonly Lowercase: "lowercase";
    readonly Capitalize: "capitalize";
};

export declare type TextTransformToken = (typeof TextTransform)[keyof typeof TextTransform];

export declare type Theme = "light" | "dark" | "system";

export declare const Toast: default_2.ForwardRefExoticComponent<ToastProps & default_2.RefAttributes<HTMLDivElement>>;

export declare interface ToastProps {
    /** Whether the toast is visible */
    open: boolean;
    onClose: () => void;
    /** Auto-dismiss after ms (default: 5000, 0 = no auto-dismiss) */
    duration?: number;
    variant?: ToastVariant;
    /** Icon rendered before the message */
    icon?: default_2.ReactNode;
    children?: default_2.ReactNode;
}

declare type ToastVariant = "info" | "success" | "warning" | "error";

export declare const Toggle: default_2.ForwardRefExoticComponent<ToggleProps & default_2.RefAttributes<HTMLButtonElement>>;

export declare interface ToggleProps extends Omit<default_2.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
}

/**
 * Returns the current breakpoint name based on window width.
 *
 * ```tsx
 * const bp = useBreakpoint();
 * <Grid columns={bp === "mobile" ? 1 : bp === "tablet" ? 2 : 4}>
 * ```
 */
export declare function useBreakpoint(): BreakpointName;

/**
 * Evaluates a CSS media query and returns whether it matches.
 *
 * ```tsx
 * const isMobile = useMediaQuery("(max-width: 639px)");
 * const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
 * ```
 */
export declare function useMediaQuery(query: string): boolean;

/**
 * Hook that resolves a Responsive<T> value based on the current window width.
 */
export declare function useResponsiveValue<T>(value: Responsive<T>): T;

/**
 * React hook wrapping `streamSSE`. Manages an AbortController per run,
 * cancels in-flight streams on unmount, and surfaces events as state.
 *
 * ```tsx
 * const stream = useSSEStream<DiagnosticAnswerEvent>({
 *   onEvent: (e) => { if (e.event === "mastery_update") patchMastery(e.data); },
 * });
 * stream.start("/api/toar/assessments/abc/answers", {
 *   method: "POST",
 *   body: JSON.stringify(payload),
 * });
 * ```
 */
export declare function useSSEStream<TEvent>(options?: UseSSEStreamOptions<TEvent>): UseSSEStreamResult<TEvent>;

export declare interface UseSSEStreamOptions<TEvent> {
    /** Fired for every parsed event as it arrives */
    onEvent?: (event: TEvent) => void;
    /** Fired once when the stream closes naturally */
    onComplete?: () => void;
    /** Fired on fetch failure or aborted stream */
    onError?: (error: Error) => void;
    /** When true, accumulated `events` array is kept (default: true) */
    retain?: boolean;
}

export declare interface UseSSEStreamResult<TEvent> {
    /** All events received this run (cleared on `start` / `reset`) */
    events: TEvent[];
    /** Most recent event, or null */
    lastEvent: TEvent | null;
    /** True between `start` resolving the fetch and the stream closing */
    isStreaming: boolean;
    /** Set if the stream errored or aborted */
    error: Error | null;
    /** Begin a new stream. Aborts any in-flight stream first. */
    start: (input: RequestInfo, init?: RequestInit) => Promise<void>;
    /** Abort the current stream, if any */
    abort: () => void;
    /** Clear events / error state without starting a new stream */
    reset: () => void;
}

/**
 * Manages theme switching between light, dark, and system (auto).
 *
 * ```tsx
 * const { theme, resolvedTheme, setTheme } = useTheme();
 *
 * <Toggle
 *   label="Dark mode"
 *   checked={resolvedTheme === "dark"}
 *   onChange={(on) => setTheme(on ? "dark" : "light")}
 * />
 * ```
 */
export declare function useTheme(): {
    readonly theme: Theme;
    readonly resolvedTheme: "dark" | "light";
    readonly setTheme: (next: Theme) => void;
};

export declare const WhiteSpace: {
    readonly Normal: "normal";
    readonly NoWrap: "nowrap";
    readonly Pre: "pre";
    readonly PreWrap: "pre-wrap";
    readonly PreLine: "pre-line";
    readonly BreakSpaces: "break-spaces";
};

export declare type WhiteSpaceToken = (typeof WhiteSpace)[keyof typeof WhiteSpace];

export declare const ZIndex: {
    readonly Dropdown: 100;
    readonly Sticky: 200;
    readonly Modal: 300;
    readonly Banner: 400;
    readonly FAB: 50;
};

export declare type ZIndexToken = (typeof ZIndex)[keyof typeof ZIndex];

export { }
