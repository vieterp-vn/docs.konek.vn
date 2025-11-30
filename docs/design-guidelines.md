# Design Guidelines - Konek Documentation

## Brand Identity

### Colors

**Primary Palette**
| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#2563eb` | Links, buttons, accents |
| Primary Dark | `#1d4ed8` | Hover states |
| Primary Light | `#3b82f6` | Backgrounds |

**Secondary Palette**
| Color | Hex | Usage |
|-------|-----|-------|
| Success | `#10b981` | Success messages |
| Warning | `#f59e0b` | Warnings |
| Error | `#ef4444` | Errors |
| Info | `#06b6d4` | Information |

**Neutral Palette**
| Color | Hex | Usage |
|-------|-----|-------|
| Text Primary | `#1f2937` | Body text |
| Text Secondary | `#6b7280` | Captions |
| Background | `#ffffff` | Main background |
| Surface | `#f9fafb` | Cards, sidebars |
| Border | `#e5e7eb` | Borders, dividers |

### Dark Mode
| Color | Hex | Usage |
|-------|-----|-------|
| Background | `#18181b` | Main background |
| Surface | `#27272a` | Cards, sidebars |
| Text Primary | `#f4f4f5` | Body text |
| Border | `#3f3f46` | Borders |

## Typography

### Font Family
- **Primary**: Inter (Google Fonts)
- **Monospace**: JetBrains Mono (code blocks)
- **Fallback**: system-ui, -apple-system, sans-serif

### Font Sizes
| Element | Size | Weight |
|---------|------|--------|
| H1 | 2.25rem (36px) | 700 |
| H2 | 1.875rem (30px) | 600 |
| H3 | 1.5rem (24px) | 600 |
| H4 | 1.25rem (20px) | 600 |
| Body | 1rem (16px) | 400 |
| Small | 0.875rem (14px) | 400 |
| Caption | 0.75rem (12px) | 400 |

### Line Height
- Headings: 1.25
- Body: 1.75
- Code: 1.5

## Spacing

### Base Unit: 4px

| Name | Value |
|------|-------|
| xs | 4px |
| sm | 8px |
| md | 16px |
| lg | 24px |
| xl | 32px |
| 2xl | 48px |
| 3xl | 64px |

## Components

### Buttons
- Border radius: 6px
- Padding: 8px 16px
- Font weight: 500

### Cards
- Border radius: 8px
- Shadow: 0 1px 3px rgba(0,0,0,0.1)
- Padding: 24px

### Code Blocks
- Background: #1e293b (dark)
- Border radius: 8px
- Padding: 16px
- Font: JetBrains Mono, 14px

### Admonitions (Notes/Tips/Warnings)
- Border-left: 4px solid [color]
- Border radius: 4px
- Padding: 16px
- Background: [color]/10

## Layout

### Max Width
- Content: 800px
- With sidebar: 1400px total

### Sidebar
- Width: 280px
- Background: Surface color

### Navigation
- Height: 60px
- Sticky on scroll
- Logo + nav items + search + language switcher

## Icons

Use **Lucide Icons** (consistent with konek.vn)

Common icons:
- Home: `home`
- Docs: `book-open`
- Guide: `compass`
- Settings: `settings`
- Search: `search`
- External link: `external-link`

## Responsive Breakpoints

| Name | Width |
|------|-------|
| Mobile | < 640px |
| Tablet | 640px - 996px |
| Desktop | > 996px |

## Accessibility

- Minimum contrast ratio: 4.5:1
- Focus states visible
- Alt text for all images
- Keyboard navigation support
- Skip to content link

## Writing Style

### Voice
- Professional but friendly
- Direct and clear
- Action-oriented

### Formatting
- Use numbered lists for steps
- Use bullet lists for options
- Bold for UI elements: "Click **Settings**"
- Code format for values: `true`, `false`

## Assets

### Screenshots
- Format: PNG or WebP
- Max width: 800px
- Add shadow/border
- Highlight interactive elements

### Diagrams
- Use Mermaid or Excalidraw
- Keep simple and focused
- Include alt text
