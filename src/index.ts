// Base styles — injected at runtime via <style> tag, no separate CSS import needed
import "./injectStyles";

// Primitives
export {
  Box,
  Stack,
  Inline,
  Text,
  Grid,
  Anchor,
  Image,
  Button,
  TextInput,
  TextArea,
  Icon,
  Badge,
  Toggle,
  LinkButton,
  IconButton,
  Avatar,
  Spinner,
  Select,
  Checkbox,
  Divider,
  Stepper,
} from "./primitives";
export type {
  BoxProps,
  StackProps,
  InlineProps,
  TextProps,
  GridProps,
  AnchorProps,
  ImageProps,
  ButtonProps,
  TextInputProps,
  TextAreaProps,
  IconProps,
  BadgeProps,
  BadgeVariant,
  ToggleProps,
  LinkButtonProps,
  IconButtonProps,
  AvatarProps,
  AvatarSize,
  AvatarAppearance,
  AvatarStatus,
  SpinnerProps,
  SpinnerSize,
  SelectProps,
  SelectOption,
  SelectOptionGroup,
  CheckboxProps,
  DividerProps,
  StepperProps,
} from "./primitives";

// Tokens
export { Spacing } from "./tokens";
export type { SpaceToken } from "./tokens";

export { TextColor, BackgroundColor } from "./tokens";
export type { TextColorToken, BackgroundColorToken } from "./tokens";

export { FontFamily, FontSize, FontWeight, LetterSpacing } from "./tokens";
export type {
  FontFamilyToken,
  FontSizeToken,
  FontWeightToken,
  LetterSpacingToken,
} from "./tokens";

export { BorderRadius, BorderColor, BorderWidth } from "./tokens";
export type {
  BorderRadiusToken,
  BorderColorToken,
  BorderWidthToken,
} from "./tokens";

export { AccentColor } from "./tokens";
export type { AccentColorToken } from "./tokens";

export {
  BloomColor,
  BloomLevel,
  bloomColorFor,
  bloomLevelForScore,
  scoreColor,
  EvaluationResultColor,
  DirectionColor,
  PersonaAccent,
} from "./tokens";
export type {
  BloomColorToken,
  BloomLevelValue,
  EvaluationResultValue,
  DirectionValue,
  PersonaAccentToken,
} from "./tokens";

export { Elevation } from "./tokens";
export type { ElevationToken } from "./tokens";

export { Gradient } from "./tokens";
export type { GradientToken } from "./tokens";

export { ContainerWidth } from "./tokens";
export type { ContainerWidthToken } from "./tokens";

export { ZIndex } from "./tokens";
export type { ZIndexToken } from "./tokens";

export { IconSize } from "./tokens";
export type { IconSizeToken } from "./tokens";

// Contexts
export { PageSizeProvider, usePageSize } from "./contexts";
export type { PageSize, PageSizeProviderProps } from "./contexts";

// Compositions
export {
  Navbar,
  HeroSection,
  Card,
  TextField,
  Banner,
  Menu,
  Tabs,
  Header,
  Modal,
  DropdownMenu,
  DropdownCheckboxMenu,
  SelectField,
  Toast,
  MobileNav,
  ProgressTracker,
  Sidebar,
  Panel,
  Aside,
  Layout,
  Calendar,
  EmptyState,
  Table,
  InlineEdit,
  GlassCard,
  PageSizeControl,
} from "./compositions";
export type {
  NavbarProps,
  NavLink,
  NavCta,
  NavbarLogo,
  HeroSectionProps,
  HeroBadge,
  HeroCta,
  HeroImage,
  HeroGradient,
  CardProps,
  TextFieldProps,
  BannerProps,
  MenuProps,
  MenuSection,
  MenuItem,
  TabsProps,
  Tab,
  HeaderProps,
  Breadcrumb,
  ModalProps,
  DropdownMenuProps,
  DropdownCheckboxMenuProps,
  CheckboxGroup,
  CheckboxItem,
  SelectFieldProps,
  ToastProps,
  MobileNavProps,
  MobileNavItem,
  ProgressTrackerProps,
  Stage,
  Stages,
  StageStatus,
  SidebarProps,
  SidebarSection,
  SidebarItem,
  PanelProps,
  AsideProps,
  LayoutProps,
  CalendarProps,
  EmptyStateProps,
  TableProps,
  TableHeadCell,
  TableRow,
  SortOrder,
  InlineEditProps,
  GlassCardProps,
  GlassCardAction,
  GlassCardMedia,
  PageSizeControlProps,
} from "./compositions";

// Hooks
export { useBreakpoint, Breakpoint } from "./hooks";
export type { BreakpointName } from "./hooks";

export { useMediaQuery } from "./hooks";

export { useResponsiveValue } from "./hooks";
export type { Responsive } from "./hooks";

export { useTheme } from "./hooks";
export type { Theme } from "./hooks";

export { useSSEStream, parseSSEStream, streamSSE } from "./hooks";
export type { UseSSEStreamOptions, UseSSEStreamResult } from "./hooks";
