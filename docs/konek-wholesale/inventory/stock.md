---
sidebar_position: 3
title: Tồn kho
description: Theo dõi và quản lý tồn kho
---

# Quản lý tồn kho

Theo dõi số lượng tồn kho theo sản phẩm và kho hàng.

## Xem tồn kho

1. Vào **Kho vận** > **Tồn kho**
2. Xem danh sách tồn theo sản phẩm

### Thông tin hiển thị

| Cột | Mô tả |
|-----|-------|
| Sản phẩm | Tên và mã sản phẩm |
| Kho | Vị trí kho |
| Có sẵn | Số lượng có thể bán |
| Đang giữ | Đã đặt, chờ xuất |
| Tổng | Tồn kho thực |

## Lọc và tìm kiếm

- **Theo kho**: Chọn kho cần xem
- **Theo danh mục**: Lọc theo nhóm sản phẩm
- **Cảnh báo**: Sản phẩm dưới tồn tối thiểu

## Tồn kho tối thiểu

Thiết lập mức tồn kho tối thiểu để nhận cảnh báo:

1. Mở sản phẩm cần thiết lập
2. Tab **Kho vận**
3. Điền **Tồn kho tối thiểu**

```
Tồn kho hiện tại < Tồn kho tối thiểu → Cảnh báo
```

## Đa kho

Nếu có nhiều kho, tồn kho được theo dõi riêng:

| Sản phẩm | Kho HN | Kho HCM | Tổng |
|----------|--------|---------|------|
| SP001 | 100 | 50 | 150 |
| SP002 | 80 | 120 | 200 |

## Xuất báo cáo

1. Click **Xuất Excel** để tải báo cáo tồn kho
2. Chọn các cột cần xuất
3. Lọc theo điều kiện nếu cần

:::info Cập nhật tồn kho
Tồn kho được cập nhật tự động khi:
- Nhập hàng (tăng)
- Xuất hàng (giảm)
- Điều chỉnh (tăng/giảm)
:::
