# @backbench/ui

Shared React component primitives and design tokens for the BackbenchAI platform. Token-driven, type-safe, zero-CSS-dependency layout and typography components.

## Installation & Setup

```bash
npm install @backbench/ui
```

```typescript
import { Box, Stack, Inline, Text, Grid, Anchor, Image, Button, TextInput } from "@backbench/ui";
import { Spacing, FontSize, FontWeight, TextColor, BackgroundColor, BorderRadius } from "@backbench/ui";
import "@backbench/ui/styles.css"; // optional minimal reset
```

## Design Tokens

All styling uses token objects — no raw CSS values, no Tailwind classes.

### Spacing (8px grid)

```typescript
import { Spacing } from "@backbench/ui";

Spacing.None        // 0
Spacing.XXSmall      // 0.125rem (2px)
Spacing.XSmall       // 0.25rem  (4px)
Spacing.Small        // 0.375rem (6px)
Spacing.Medium       // 0.5rem   (8px)
Spacing.MediumLarge  // 0.75rem  (12px)
Spacing.Large        // 1rem     (16px)
Spacing.XLarge       // 1.25rem  (20px)
Spacing.XXLarge      // 1.5rem   (24px)
Spacing.XXXLarge     // 2rem     (32px)
Spacing.Huge         // 2.5rem   (40px)
Spacing.XHuge        // 3rem     (48px)
Spacing.XXHuge       // 4rem     (64px)
Spacing.XXXHuge      // 5rem     (80px)
Spacing.Size8        // 8rem     (128px)
Spacing.Size16       // 16rem    (256px)
```

### TextColor

```typescript
import { TextColor } from "@backbench/ui";

TextColor.Default    // #1f2937 (dark gray)
TextColor.Subtle     // #374151
TextColor.Subtlest   // #4b5563
TextColor.Disabled   // #6b7280
TextColor.Inverse    // #ffffff (white — use on dark backgrounds)
TextColor.Brand      // #15803d (green)
TextColor.Selected   // #166534
TextColor.Success    // #14532d
```

### BackgroundColor

```typescript
import { BackgroundColor } from "@backbench/ui";

BackgroundColor.Default    // #ffffff (white)
BackgroundColor.Subtle     // #f3f4f6
BackgroundColor.Neutral    // #e5e7eb
BackgroundColor.Brand      // #15803d (green)
BackgroundColor.BrandBold  // #166534
BackgroundColor.Success    // #bbf7d0
```

### FontSize

```typescript
import { FontSize } from "@backbench/ui";

FontSize.XXSmall   // 0.75rem  (12px)
FontSize.XSmall    // 0.875rem (14px)
FontSize.Small     // 1rem     (16px)
FontSize.Medium    // 1.125rem (18px)
FontSize.Large     // 1.25rem  (20px)
FontSize.XLarge    // 1.5rem   (24px)
FontSize.XXLarge   // 1.875rem (30px)
FontSize.XXXLarge  // 2.25rem  (36px)
```

### FontWeight

```typescript
import { FontWeight } from "@backbench/ui";

FontWeight.Regular   // 400
FontWeight.Medium    // 500
FontWeight.Semibold  // 600
FontWeight.Bold      // 700
```

### BorderRadius

```typescript
import { BorderRadius } from "@backbench/ui";

BorderRadius.None    // 0
BorderRadius.Small   // 0.25rem (4px)
BorderRadius.Medium  // 0.375rem (6px)
BorderRadius.Large   // 0.5rem  (8px)
BorderRadius.Full    // 9999px  (pill shape)
```

### BorderColor

```typescript
import { BorderColor } from "@backbench/ui";

BorderColor.Default  // #e5e7eb
BorderColor.Input    // #d1d5db
```

### Elevation

```typescript
import { Elevation } from "@backbench/ui";

Elevation.None    // no shadow
Elevation.Raised  // subtle drop shadow
```

### ContainerWidth

```typescript
import { ContainerWidth } from "@backbench/ui";

ContainerWidth.Small   // 640px
ContainerWidth.Medium  // 768px
ContainerWidth.Large   // 1024px
ContainerWidth.XLarge  // 1280px
```

---

## Components

Every component uses `forwardRef` and accepts a polymorphic `as` prop to control the rendered HTML element.

### Box

Flexible container with padding, margins, background, borders, and elevation.

```tsx
import { Box, Spacing, BackgroundColor, BorderRadius, Elevation } from "@backbench/ui";

// Simple padded container
<Box padding={Spacing.Large}>
  <p>Content inside a padded box</p>
</Box>

// Card with background, border radius, and shadow
<Box
  padding={Spacing.XLarge}
  backgroundColor={BackgroundColor.Subtle}
  borderRadius={BorderRadius.Large}
  elevation={Elevation.Raised}
>
  <p>This looks like a card</p>
</Box>

// Directional padding
<Box
  paddingBlock={Spacing.Large}
  paddingInline={Spacing.XXLarge}
>
  <p>Different vertical/horizontal padding</p>
</Box>

// Semantic HTML element
<Box as="section" padding={Spacing.Large}>
  <h2>Section content</h2>
</Box>

// Constrained width container (auto-centered)
<Box maxWidth={ContainerWidth.Large} padding={Spacing.Large}>
  <p>Centered content with max width</p>
</Box>

// With border
<Box
  padding={Spacing.Large}
  borderColor={BorderColor.Default}
  borderSide="all"
  borderRadius={BorderRadius.Medium}
>
  <p>Bordered box</p>
</Box>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `"div" \| "span" \| "section" \| "header" \| "footer" \| "nav" \| "main" \| "article" \| "aside" \| "ul" \| "ol" \| "li"` | `"div"` | HTML element to render |
| `padding` | `SpaceToken` | — | Uniform padding |
| `paddingBlock` | `SpaceToken` | — | Vertical padding |
| `paddingBlockStart` | `SpaceToken` | — | Top padding |
| `paddingBlockEnd` | `SpaceToken` | — | Bottom padding |
| `paddingInline` | `SpaceToken` | — | Horizontal padding |
| `paddingInlineStart` | `SpaceToken` | — | Left padding (LTR) |
| `paddingInlineEnd` | `SpaceToken` | — | Right padding (LTR) |
| `marginBlock` | `SpaceToken` | — | Vertical margin |
| `marginBlockStart` | `SpaceToken` | — | Top margin |
| `marginBlockEnd` | `SpaceToken` | — | Bottom margin |
| `backgroundColor` | `BackgroundColorToken` | — | Background color |
| `borderRadius` | `BorderRadiusToken` | — | Border radius |
| `borderColor` | `BorderColorToken` | — | Border color (requires `borderSide`) |
| `borderSide` | `"top" \| "all"` | — | Which sides get the border |
| `overflow` | `"hidden" \| "auto" \| "scroll" \| "visible"` | — | Overflow behavior |
| `elevation` | `ElevationToken` | — | Box shadow |
| `maxWidth` | `ContainerWidthToken` | — | Max width (auto-centers with `margin-inline: auto`) |

---

### Stack

Vertical flexbox layout. Children are stacked top-to-bottom with consistent spacing.

```tsx
import { Stack, Spacing } from "@backbench/ui";

// Basic vertical stack with gap
<Stack space={Spacing.Large}>
  <div>First</div>
  <div>Second</div>
  <div>Third</div>
</Stack>

// Centered content
<Stack space={Spacing.Medium} alignInline="center">
  <h1>Centered Title</h1>
  <p>Centered paragraph</p>
</Stack>

// Full-height stack that fills its container
<Stack space={Spacing.Large} grow="fill">
  <div>Top content</div>
  <div>Bottom content</div>
</Stack>

// Push children apart (e.g., header + footer)
<Stack space={Spacing.Large} grow="fill" spread="space-between">
  <header>Top</header>
  <footer>Bottom</footer>
</Stack>

// As a semantic list
<Stack as="ul" space={Spacing.Small}>
  <li>Item one</li>
  <li>Item two</li>
  <li>Item three</li>
</Stack>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `"div" \| "span" \| "ul" \| "ol" \| "section" \| "nav"` | `"div"` | HTML element to render |
| `space` | `SpaceToken` | — | Gap between children (vertical) |
| `alignInline` | `"start" \| "center" \| "end" \| "stretch"` | — | Horizontal alignment of children |
| `alignBlock` | `"start" \| "center" \| "end" \| "stretch"` | — | Vertical alignment of children |
| `spread` | `"space-between"` | — | Distribute children along main axis |
| `grow` | `"hug" \| "fill"` | `"hug"` | `"fill"` = `flex: 1 1 auto` (expand to fill parent) |
| `marginBlockStart` | `SpaceToken` | — | Top margin |
| `marginBlockEnd` | `SpaceToken` | — | Bottom margin |

---

### Inline

Horizontal flexbox layout with wrapping and separator support.

```tsx
import { Inline, Spacing } from "@backbench/ui";

// Simple horizontal row
<Inline space={Spacing.Medium}>
  <span>Tag 1</span>
  <span>Tag 2</span>
  <span>Tag 3</span>
</Inline>

// Wrapping row (responsive)
<Inline space={Spacing.Medium} shouldWrap>
  <span>Item 1</span>
  <span>Item 2</span>
  <span>Item 3</span>
  <span>Item 4</span>
</Inline>

// With a separator between items
<Inline space={Spacing.Medium} separator={<span>·</span>}>
  <span>Home</span>
  <span>About</span>
  <span>Contact</span>
</Inline>

// Vertically centered items
<Inline space={Spacing.Large} alignBlock="center">
  <img src="avatar.png" />
  <span>Username</span>
</Inline>

// Space-between (e.g., navbar)
<Inline spread="space-between" alignBlock="center">
  <span>Logo</span>
  <nav>Links</nav>
</Inline>

// Different column and row gaps
<Inline space={Spacing.Large} rowSpace={Spacing.Small} shouldWrap>
  <span>A</span>
  <span>B</span>
  <span>C</span>
</Inline>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `"div" \| "span" \| "ul" \| "ol" \| "nav"` | `"div"` | HTML element to render |
| `space` | `SpaceToken` | — | Column gap (horizontal spacing) |
| `rowSpace` | `SpaceToken` | — | Row gap (defaults to `space` if omitted) |
| `alignBlock` | `"start" \| "center" \| "end" \| "baseline" \| "stretch"` | — | Vertical alignment |
| `alignInline` | `"start" \| "center" \| "end" \| "stretch"` | — | Horizontal alignment |
| `spread` | `"space-between"` | — | Distribute children along main axis |
| `shouldWrap` | `boolean` | `false` | Enable flex wrapping |
| `separator` | `ReactNode` | — | Element rendered between children (gets `aria-hidden`) |
| `grow` | `"hug" \| "fill"` | `"hug"` | `"fill"` = expand to fill parent |
| `marginBlockStart` | `SpaceToken` | — | Top margin |
| `marginBlockEnd` | `SpaceToken` | — | Bottom margin |
| `borderRadius` | `BorderRadiusToken` | — | Border radius |
| `overflow` | `"hidden" \| "auto" \| "scroll" \| "visible"` | — | Overflow behavior |
| `elevation` | `ElevationToken` | — | Box shadow |

---

### Text

Typography component for rendering styled text with semantic HTML.

```tsx
import { Text, FontSize, FontWeight, TextColor } from "@backbench/ui";

// Page title
<Text as="h1" size={FontSize.XXXLarge} weight={FontWeight.Bold}>
  Welcome
</Text>

// Subtitle
<Text as="h2" size={FontSize.XLarge} weight={FontWeight.Semibold} color={TextColor.Subtle}>
  A subtitle in subtle gray
</Text>

// Body text
<Text as="p" size={FontSize.Small} color={TextColor.Default}>
  Regular paragraph text.
</Text>

// Small muted label
<Text as="small" size={FontSize.XXSmall} color={TextColor.Subtlest}>
  Last updated 2 hours ago
</Text>

// Centered heading
<Text as="h2" size={FontSize.XLarge} weight={FontWeight.Bold} align="center">
  Centered Title
</Text>

// Uppercase label
<Text as="label" size={FontSize.XXSmall} weight={FontWeight.Semibold} textTransform="uppercase">
  Form Label
</Text>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `"span" \| "p" \| "h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6" \| "strong" \| "em" \| "small" \| "label" \| "div"` | `"span"` | HTML element to render |
| `size` | `FontSizeToken` | — | Font size |
| `weight` | `FontWeightToken` | — | Font weight |
| `color` | `TextColorToken` | — | Text color |
| `align` | `CSSProperties["textAlign"]` | — | Text alignment |
| `textTransform` | `CSSProperties["textTransform"]` | — | Text transform (uppercase, capitalize, etc.) |
| `lineHeight` | `number \| string` | — | Line height |
| `opacity` | `number` | — | Opacity (0–1) |

---

### Grid

CSS Grid layout with flexible column configuration.

```tsx
import { Grid, Spacing } from "@backbench/ui";

// Equal 3-column grid
<Grid columns={3} gap={Spacing.Large}>
  <div>Col 1</div>
  <div>Col 2</div>
  <div>Col 3</div>
</Grid>

// Proportional columns (3fr 2fr — wider left, narrower right)
<Grid columns={[3, 2]} gap={Spacing.Large}>
  <div>Main content</div>
  <aside>Sidebar</aside>
</Grid>

// With separate row gap
<Grid columns={3} gap={Spacing.Large} rowGap={Spacing.XXLarge}>
  <div>A</div>
  <div>B</div>
  <div>C</div>
  <div>D</div>
  <div>E</div>
  <div>F</div>
</Grid>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `"div" \| "section" \| "main" \| "ul" \| "ol"` | `"div"` | HTML element to render |
| `columns` | `number \| number[]` | — | `3` = equal columns; `[3, 2]` = `3fr 2fr` |
| `gap` | `SpaceToken` | — | Grid gap |
| `rowGap` | `SpaceToken` | — | Row gap (overrides `gap` for rows) |
| `marginBlockStart` | `SpaceToken` | — | Top margin |
| `marginBlockEnd` | `SpaceToken` | — | Bottom margin |
| `borderRadius` | `BorderRadiusToken` | — | Border radius |
| `overflow` | `"hidden" \| "auto" \| "scroll" \| "visible"` | — | Overflow behavior |
| `elevation` | `ElevationToken` | — | Box shadow |

---

### Anchor

Styled link component with typography and spacing tokens.

```tsx
import { Anchor, TextColor, FontSize, FontWeight } from "@backbench/ui";

<Anchor href="/about" color={TextColor.Brand} weight={FontWeight.Medium}>
  About Us
</Anchor>

// Block-level link with padding and background
<Anchor
  href="/dashboard"
  display="block"
  padding={Spacing.Medium}
  backgroundColor={BackgroundColor.Subtle}
  borderRadius={BorderRadius.Medium}
>
  Go to Dashboard
</Anchor>
```

---

### Image

Image component with sizing and styling tokens.

```tsx
import { Image, Spacing, BorderRadius } from "@backbench/ui";

// Full-width image
<Image src="hero.jpg" alt="Hero" />

// Fixed-size avatar
<Image
  src="avatar.png"
  alt="User"
  width={Spacing.XXXLarge}
  height={Spacing.XXXLarge}
  borderRadius={BorderRadius.Full}
  objectFit="cover"
/>

// Fill container
<Image src="bg.jpg" alt="Background" fill objectFit="cover" />
```

---

### Button

Styled button with background, color, padding, and border radius.

```tsx
import { Button, BackgroundColor, TextColor, Spacing, BorderRadius } from "@backbench/ui";

<Button
  backgroundColor={BackgroundColor.Brand}
  color={TextColor.Inverse}
  paddingBlock={Spacing.Medium}
  paddingInline={Spacing.XLarge}
  borderRadius={BorderRadius.Medium}
  onClick={() => console.log("clicked")}
>
  Subscribe
</Button>
```

---

### TextInput

Styled input with border, background, padding, and border radius.

```tsx
import { TextInput, BackgroundColor, BorderColor, Spacing, BorderRadius } from "@backbench/ui";

<TextInput
  placeholder="Enter your email"
  backgroundColor={BackgroundColor.Default}
  borderColor={BorderColor.Input}
  borderRadius={BorderRadius.Medium}
  paddingBlock={Spacing.Medium}
  paddingInline={Spacing.Large}
/>
```

---

## Common Layout Patterns

### Page Layout with Header and Content

```tsx
<Stack grow="fill">
  <Box as="header" padding={Spacing.Large} backgroundColor={BackgroundColor.Subtle}>
    <Inline spread="space-between" alignBlock="center">
      <Text as="h1" size={FontSize.Large} weight={FontWeight.Bold}>My App</Text>
      <Inline as="nav" space={Spacing.Large}>
        <Anchor href="/">Home</Anchor>
        <Anchor href="/about">About</Anchor>
      </Inline>
    </Inline>
  </Box>

  <Box as="main" padding={Spacing.XXLarge} maxWidth={ContainerWidth.Large}>
    <Stack space={Spacing.Large}>
      <Text as="h2" size={FontSize.XXLarge} weight={FontWeight.Bold}>
        Page Title
      </Text>
      <Text as="p" color={TextColor.Subtle}>
        Page description goes here.
      </Text>
    </Stack>
  </Box>
</Stack>
```

### Card Grid

```tsx
<Grid columns={3} gap={Spacing.Large}>
  {items.map((item) => (
    <Box
      key={item.id}
      padding={Spacing.XLarge}
      backgroundColor={BackgroundColor.Default}
      borderRadius={BorderRadius.Large}
      elevation={Elevation.Raised}
    >
      <Stack space={Spacing.Medium}>
        <Text as="h3" size={FontSize.Large} weight={FontWeight.Semibold}>
          {item.title}
        </Text>
        <Text as="p" size={FontSize.XSmall} color={TextColor.Subtle}>
          {item.description}
        </Text>
      </Stack>
    </Box>
  ))}
</Grid>
```

### Form Layout

```tsx
<Stack space={Spacing.Large}>
  <Stack space={Spacing.XSmall}>
    <Text as="label" size={FontSize.XSmall} weight={FontWeight.Medium}>
      Email
    </Text>
    <TextInput
      type="email"
      placeholder="you@example.com"
      borderColor={BorderColor.Input}
      borderRadius={BorderRadius.Medium}
      paddingBlock={Spacing.Medium}
      paddingInline={Spacing.Large}
    />
  </Stack>

  <Button
    backgroundColor={BackgroundColor.Brand}
    color={TextColor.Inverse}
    paddingBlock={Spacing.Medium}
    paddingInline={Spacing.XLarge}
    borderRadius={BorderRadius.Medium}
  >
    Submit
  </Button>
</Stack>
```

---

## How Styling Works

This library uses **inline styles with token values** — no CSS classes, no CSS-in-JS, no Tailwind.

```tsx
// This:
<Box padding={Spacing.Large} backgroundColor={BackgroundColor.Subtle} />

// Produces:
<div style={{ padding: "1rem", backgroundColor: "#f3f4f6" }} />
```

- Tokens are plain objects with CSS-compatible string/number values
- Styles are computed and applied inline via `React.CSSProperties`
- You can pass a `style` prop to any component — it merges last and takes highest precedence
- No external CSS is required for components to work

## Build

```bash
npm run build    # Build library (outputs to dist/)
npm run dev      # Dev preview with demo
```
