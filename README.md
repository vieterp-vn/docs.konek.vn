# Konek Documentation

Trang tài liệu hướng dẫn sử dụng cho các sản phẩm Konek.

[![Built with Docusaurus](https://img.shields.io/badge/Built%20with-Docusaurus-green.svg)](https://docusaurus.io/)

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm start

# Build for production
pnpm build

# Serve production build locally
pnpm serve
```

## Project Structure

```
docs.konek.vn/
├── docs/                    # Documentation content (Vietnamese)
│   ├── intro.md            # Homepage
│   ├── getting-started/    # Onboarding guides
│   ├── features/           # Feature documentation
│   │   ├── businesses/     # Business management
│   │   ├── team/           # Team management
│   │   ├── helpdesk/       # Helpdesk system
│   │   ├── invoicing/      # Invoicing
│   │   └── settings/       # Settings
│   └── support/            # Support & FAQ
├── i18n/                   # Translations (English)
├── static/                 # Static assets (images, favicon)
├── src/                    # Custom React components & CSS
├── docusaurus.config.ts    # Site configuration
└── sidebars.ts             # Sidebar navigation
```

## i18n (Internationalization)

Default locale: Vietnamese (`vi`)
Available locales: Vietnamese, English

### Adding translations

```bash
# Generate translation files
pnpm run write-translations --locale en

# Start dev server with specific locale
pnpm start --locale en
```

## Deployment

### Vercel (Recommended)

1. Connect repository to Vercel
2. Build command: `pnpm build`
3. Output directory: `build`

### Manual Deploy

```bash
pnpm build
# Upload 'build' folder to your hosting
```

## Configuration

### Site Config
Edit `docusaurus.config.ts` to change:
- Site title, tagline, favicon
- Navbar items
- Footer links
- i18n settings

### Sidebar
Edit `sidebars.ts` to modify navigation structure.

### Styling
Edit `src/css/custom.css` for custom styles.

## Related Projects

- [konek.vn](https://konek.vn) - User-facing platform
- [beta.konek.vn](https://beta.konek.vn) - SaaS business platform

## License

Private - Konek R&D Team
