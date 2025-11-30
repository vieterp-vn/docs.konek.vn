---
sidebar_label: System Architecture
displayed_sidebar: null
---

# System Architecture

## Overview

```
┌─────────────────────────────────────────────────────────┐
│                    docs.konek.vn                        │
│                  (Docusaurus 3.x)                       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │   Content   │  │    Theme    │  │   Plugins   │     │
│  │  (Markdown) │  │   (React)   │  │  (Search,   │     │
│  │             │  │             │  │   i18n)     │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
│                                                         │
├─────────────────────────────────────────────────────────┤
│                    Build Output                         │
│                (Static HTML/CSS/JS)                     │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                      Hosting                            │
│              (Vercel / Netlify / GH Pages)              │
└─────────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────┐
│                        CDN                              │
│              (Global Edge Distribution)                 │
└─────────────────────────────────────────────────────────┘
```

## Technology Stack

### Core

| Layer | Technology | Version |
|-------|------------|---------|
| Framework | Docusaurus | 3.9.x |
| Runtime | Node.js | 22.x |
| Language | TypeScript | 5.x |
| Package Manager | pnpm | 10.x |

### Frontend

| Component | Technology |
|-----------|------------|
| UI Framework | React 19 |
| CSS Framework | Infima + Custom CSS |
| Code Highlighting | Prism |
| MDX Support | @mdx-js/react |

### Build & Deploy

| Component | Technology |
|-----------|------------|
| Bundler | Webpack (via Docusaurus) |
| Static Generation | SSG |
| Hosting | Vercel (recommended) |
| CDN | Vercel Edge Network |

## File Structure

```
docs.konek.vn/
├── docs/                    # Content (*.md)
├── i18n/                    # Translations
│   └── en/                  # English
├── src/
│   ├── css/                 # Custom styles
│   └── components/          # React components
├── static/                  # Static assets
│   └── img/                 # Images
├── docusaurus.config.ts     # Site config
├── sidebars.ts              # Navigation
└── package.json             # Dependencies
```

## i18n Architecture

```
docs/           → Vietnamese (default)
i18n/en/docs/   → English translation
```

Build generates:
- `/` → Vietnamese
- `/en/` → English

## Performance

### Optimizations

- Static Site Generation (SSG)
- Asset optimization (images, fonts)
- Code splitting
- Lazy loading

### Target Metrics

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Time to Interactive | < 3.5s |
| Lighthouse Performance | > 90 |

## Related Systems

```
┌─────────────────┐     ┌─────────────────┐
│   konek.vn      │     │ beta.konek.vn   │
│ (User Platform) │     │ (SaaS Platform) │
└────────┬────────┘     └────────┬────────┘
         │                       │
         └───────────┬───────────┘
                     │
                     ▼
            ┌─────────────────┐
            │  docs.konek.vn  │
            │ (Documentation) │
            └─────────────────┘
```
