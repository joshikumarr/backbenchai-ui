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
