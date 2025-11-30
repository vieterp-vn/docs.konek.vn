---
sidebar_position: 2
title: Bảng giá
description: Thiết lập và quản lý bảng giá
---

# Bảng giá (Pricelists)

Bảng giá cho phép thiết lập giá bán khác nhau cho từng nhóm khách hàng.

![Pricelists](/img/screenshots/wholesale/pricing-pricelists.png)

## Tạo bảng giá

1. Vào **Giá cả** > **Bảng giá**
2. Click **Tạo mới**

### Thông tin cơ bản

```
Tên: [Tên bảng giá]
Loại tiền: VND
Áp dụng cho: [Chọn nhóm khách hàng]
```

### Quy tắc giá

| Loại | Mô tả | Ví dụ |
|------|-------|-------|
| Giá cố định | Giá cụ thể cho SP | SP001 = 50,000đ |
| % giảm | Giảm % từ giá gốc | -10% |
| Số tiền giảm | Giảm số tiền cố định | -5,000đ |
| Công thức | Tính theo công thức | Giá gốc x 0.9 |

## Giá theo số lượng

Thiết lập giá giảm dần theo số lượng mua:

| Số lượng | Đơn giá |
|----------|---------|
| 1-49 | 100,000đ |
| 50-99 | 95,000đ |
| 100+ | 90,000đ |

## Gán bảng giá cho khách hàng

1. Mở thông tin khách hàng
2. Tab **Bán hàng**
3. Chọn **Bảng giá** phù hợp

## Ưu tiên bảng giá

```
1. Giá trong bảng giá khách hàng
2. Giá theo chương trình khuyến mãi
3. Giá mặc định sản phẩm
```

:::tip Mẹo
Tạo bảng giá theo cấp độ đại lý để tự động áp dụng giá đúng khi tạo đơn hàng.
:::
