---
sidebar_position: 2
title: Sản phẩm
description: Quản lý danh mục sản phẩm
---

# Quản lý sản phẩm

Hướng dẫn tạo và quản lý sản phẩm trong hệ thống.

![Products](/img/screenshots/wholesale/inventory-products.png)

## Tạo sản phẩm mới

1. Vào **Kho vận** > **Sản phẩm**
2. Click **Tạo mới**

### Thông tin cơ bản

| Trường | Mô tả | Bắt buộc |
|--------|-------|----------|
| Tên sản phẩm | Tên hiển thị | Có |
| Mã (SKU) | Mã định danh duy nhất | Có |
| Loại | Hàng hóa / Dịch vụ | Có |
| Danh mục | Nhóm sản phẩm | Không |

### Đơn vị tính

```
Đơn vị bán: Thùng
Đơn vị kho: Hộp
Tỷ lệ: 1 Thùng = 12 Hộp
```

### Giá bán

- **Giá bán**: Giá niêm yết
- **Giá vốn**: Chi phí mua vào
- Giá theo bảng giá được thiết lập riêng

## Biến thể sản phẩm

Một sản phẩm có thể có nhiều biến thể:

```
Áo thun ABC
├── Màu: Đỏ, Xanh, Trắng
├── Size: S, M, L, XL
└── Tổng: 12 biến thể
```

## Danh mục sản phẩm

Tổ chức sản phẩm theo cây danh mục:

```
Đồ uống
├── Nước ngọt
│   ├── Coca-Cola
│   └── Pepsi
├── Nước suối
└── Bia
```

## Import sản phẩm

1. Tải template Excel
2. Điền thông tin theo mẫu
3. Upload và xác nhận

:::tip Mẹo
Đặt mã SKU theo quy tắc để dễ quản lý, ví dụ: `CAT-BRAND-001` (Danh mục - Thương hiệu - Số).
:::
