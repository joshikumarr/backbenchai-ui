# @backbench/ui - Shared UI Library

## Overview
Shared React component primitives and design tokens for the BackbenchAI platform.

## Quick Start
```bash
npm run build    # Build library
npm run dev      # Dev preview
```

## Components
- **Box** - Flexible container (padding, background, polymorphic)
- **Stack** - Vertical flexbox layout
- **Inline** - Horizontal flexbox layout (wrapping, separators)
- **Text** - Typography (size, weight, color, polymorphic)

## Design Tokens
- **Spacing** - 8px grid: None(0) to XXXHuge(80px)
- **TextColor** - Semantic: Default, Subtle, Brand, Success, etc.
- **BackgroundColor** - Semantic: Default, Neutral, Brand, etc.
- **FontSize** - XXSmall(0.75rem) to XXXLarge(2.25rem)
- **FontWeight** - Regular(400) to Bold(700)

## Consumer Usage
```typescript
import { Box, Stack, Text, Spacing, FontSize } from "@backbench/ui";
import "@backbench/ui/styles.css";
```

## Related Repositories
- **Electron App**: `C:\Users\joshi\backbench-ai` (consumer)
- **Python Backend**: `C:\Users\joshi\cuepilot-agent` (no direct dependency)

## Conventions
- forwardRef on all components
- Polymorphic `as` prop
- Token-based styling (no Tailwind)
- Strict TypeScript

## Capacitor, safe areas, breakpoints
Read **CAPACITOR.md** before you touch safe-area CSS, a breakpoint, or fixed
chrome. It states five rules and gives the sources. The short form:

- Never write bare `env(safe-area-inset-*)`. Use `safeAreaInset()`,
  `safeAreaBlock()`, or `safeAreaInline()` from `src/safeArea.ts`. Android
  WebView below 140 returns wrong values from `env()`.
- `calc(padding + inset)` on top and bottom. `max(padding, inset)` on left and
  right. The two axes work differently.
- Pick a breakpoint from `useWindowSizeClass()` (Material 3), not from a number
  you chose.
- `StatusBar.setOverlaysWebView` does nothing on Android 15+. Pad with insets.
