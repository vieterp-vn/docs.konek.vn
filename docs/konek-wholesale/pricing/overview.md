---
sidebar_position: 1
title: Tổng quan Giá cả
description: Quản lý giá bán và bảng giá
---

# Module Giá cả

Module Giá cả giúp thiết lập và quản lý các bảng giá cho từng nhóm khách hàng.

![Pricelists](/img/screenshots/wholesale/pricing-pricelists.png)

## Tính năng chính

### Bảng giá (Pricelists)
- Nhiều bảng giá cho các nhóm khách hàng
- Giá theo cấp độ đại lý
- Giá theo số lượng mua

### Chương trình khuyến mãi
- Giảm giá theo thời gian
- Khuyến mãi theo sản phẩm
- Combo / Bundle

## Cấu trúc bảng giá

```
Bảng giá
├── Giá bán lẻ (mặc định)
├── Giá đại lý cấp 1 (-10%)
├── Giá đại lý cấp 2 (-5%)
└── Giá VIP (-15%)
```

## Cách tính giá

Khi tạo đơn hàng:
1. Lấy bảng giá của khách hàng
2. Tìm giá sản phẩm trong bảng giá
3. Áp dụng chiết khấu nếu có
4. Tính tổng tiền

## Xem thêm

- [Quản lý bảng giá](./pricelists)
