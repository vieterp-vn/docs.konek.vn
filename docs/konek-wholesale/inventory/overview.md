---
sidebar_position: 1
title: Tổng quan Kho vận
description: Quản lý kho hàng và tồn kho
---

# Module Kho vận

Module Kho vận giúp quản lý sản phẩm, tồn kho, và các hoạt động xuất nhập kho.

![Inventory](/img/screenshots/wholesale/inventory-products.png)

## Tính năng chính

### Quản lý sản phẩm
- Danh mục sản phẩm theo nhóm
- Thông tin chi tiết: mã, tên, đơn vị, giá
- Biến thể sản phẩm (màu sắc, kích thước)
- Hình ảnh sản phẩm

### Quản lý tồn kho
- Theo dõi tồn kho theo kho
- Số lượng theo trạng thái
- Cảnh báo tồn kho tối thiểu

### Hoạt động kho
- Nhập kho (từ mua hàng, trả hàng)
- Xuất kho (cho đơn hàng)
- Chuyển kho (giữa các kho)
- Điều chỉnh tồn kho

## Trạng thái tồn kho

| Trạng thái | Mô tả |
|------------|-------|
| **Có sẵn** | Hàng trong kho, sẵn sàng bán |
| **Đang giữ** | Đã đặt cho đơn hàng, chờ xuất |
| **Đang vận chuyển** | Đang trên đường giao |

## Công thức tính

```
Tồn kho thực = Có sẵn + Đang giữ
Có thể bán = Có sẵn
```

## Xem thêm

- [Quản lý sản phẩm](./products)
- [Xem tồn kho](./stock)
- [Hoạt động kho](./operations)
