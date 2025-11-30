---
sidebar_label: Project Roadmap
displayed_sidebar: null
---

# Project Roadmap

## Phase 1: Foundation (Current) ✅

**Status: Complete**

### Deliverables

- [x] Docusaurus 3.x setup with TypeScript
- [x] Custom branding (colors, fonts, logo)
- [x] Vietnamese i18n as default locale
- [x] 21 documentation pages covering all features
- [x] Responsive design with dark mode
- [x] Production build successful

### Documentation Coverage

| Section | Pages | Status |
|---------|-------|--------|
| Getting Started | 3 | ✅ |
| Business Management | 3 | ✅ |
| Team Management | 3 | ✅ |
| Helpdesk | 3 | ✅ |
| Invoicing | 3 | ✅ |
| Settings | 3 | ✅ |
| Support | 3 | ✅ |

---

## Phase 2: Enhancement

**Status: Planning**

### Goals

- [ ] English translation (i18n)
- [ ] Search integration (Algolia DocSearch)
- [ ] Screenshot gallery for each feature
- [ ] Video tutorials (embed from YouTube/Vimeo)

### Search Setup

1. Apply for Algolia DocSearch (free for open-source)
2. Configure in `docusaurus.config.ts`
3. Test search functionality

### Translation Workflow

```bash
# Generate translation files
pnpm run write-translations --locale en

# Translate files in i18n/en/
# Build and test
pnpm build
```

---

## Phase 3: Advanced Features

**Status: Future**

### Goals

- [ ] Interactive tutorials (step-by-step guides)
- [ ] API documentation (if public API released)
- [ ] Community contributions guide
- [ ] Changelog/Release notes section
- [ ] Feedback widget integration

### Technical Debt

- [ ] Add automated link checking (CI)
- [ ] Image optimization pipeline
- [ ] SEO audit and improvements
- [ ] Accessibility audit (WCAG 2.1)

---

## Phase 4: Scale

**Status: Future**

### Goals

- [ ] Documentation for beta.konek.vn (Odoo modules)
- [ ] Developer documentation (API, SDK)
- [ ] Partner/Integration documentation
- [ ] Multi-version documentation support

---

## Timeline (Estimated)

| Phase | Duration | Target |
|-------|----------|--------|
| Phase 1 | 1 day | ✅ Done |
| Phase 2 | 2 weeks | Next |
| Phase 3 | 1 month | Q1 2025 |
| Phase 4 | Ongoing | Q2+ 2025 |

---

## Success Metrics

### Quantitative

| Metric | Current | Phase 2 Target | Phase 3 Target |
|--------|---------|----------------|----------------|
| Pages | 21 | 30 | 50+ |
| Languages | 1 (vi) | 2 (vi, en) | 2+ |
| Lighthouse Score | TBD | > 90 | > 95 |
| Monthly Visitors | 0 | 500 | 2000 |

### Qualitative

- Support ticket reduction
- Positive user feedback
- SEO visibility for "konek hướng dẫn"
