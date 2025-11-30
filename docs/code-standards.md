---
sidebar_label: Code Standards
displayed_sidebar: null
---

# Code Standards

## Documentation Writing

### Vietnamese Style

- Sử dụng ngôn ngữ đơn giản, dễ hiểu
- Câu ngắn gọn (tối đa 15 từ)
- Active voice: "Click **Cài đặt**" thay vì "Nút Cài đặt nên được click"
- Nhất quán trong thuật ngữ

### Terminology

| Term | Vietnamese |
|------|------------|
| Dashboard | Bảng điều khiển |
| Settings | Cài đặt |
| Business | Doanh nghiệp |
| Team | Nhóm |
| Member | Thành viên |
| Ticket | Phiếu hỗ trợ |
| Invoice | Hóa đơn |

## Markdown Format

### Frontmatter

```yaml
---
sidebar_position: 1
title: Tiêu đề trang
description: Mô tả ngắn gọn cho SEO
---
```

### Admonitions

```markdown
:::tip Mẹo
Nội dung mẹo
:::

:::warning Cảnh báo
Nội dung cảnh báo
:::

:::danger Nguy hiểm
Nội dung nguy hiểm
:::

:::info Thông tin
Nội dung thông tin
:::
```

### Tables

```markdown
| Cột 1 | Cột 2 |
|-------|-------|
| A     | B     |
```

## File Structure

### Naming Convention

- Lowercase with hyphens: `create-account.md`
- Descriptive names
- No special characters

### Folder Structure

```
docs/
├── intro.md                 # Homepage
├── getting-started/         # Onboarding
│   ├── quick-start.md
│   └── ...
└── features/                # Feature docs
    ├── businesses/
    │   ├── overview.md
    │   └── ...
    └── ...
```

## Images

### Guidelines

- Format: PNG or WebP
- Max width: 800px
- Include alt text
- Store in `static/img/`

### Naming

```
static/img/
├── screenshots/
│   ├── dashboard-overview.png
│   └── create-business.png
└── diagrams/
    └── architecture.png
```

## Code Blocks

```typescript
// Use language identifier
const example = 'typescript';
```

```bash
# Shell commands
pnpm install
```
