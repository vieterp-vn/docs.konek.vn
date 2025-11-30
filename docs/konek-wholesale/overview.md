---
sidebar_position: 1
title: Tổng quan Bán sỉ
description: Giới thiệu mô hình bán sỉ (Wholesale) trên Konek
---

# Bán sỉ (Wholesale)

Mô hình bán sỉ được thiết kế cho doanh nghiệp B2B - bán hàng cho các đại lý, nhà phân phối, và doanh nghiệp khác.

![Konek Wholesale](/img/screenshots/wholesale/customers-list.png)

## Tính năng chính

### Quản lý khách hàng B2B
- Phân loại khách hàng theo cấp độ (VIP, Đại lý cấp 1, Đại lý cấp 2...)
- Thiết lập hạn mức công nợ cho từng khách hàng
- Quản lý thông tin liên hệ, địa chỉ giao hàng

### Bán hàng
- Tạo báo giá và đơn hàng nhanh chóng
- Import đơn hàng hàng loạt từ Excel
- Quy trình duyệt đơn hàng nhiều cấp
- Quản lý trả hàng

### Kho vận
- Quản lý tồn kho đa kho
- Theo dõi số lượng theo trạng thái (có sẵn, đang giữ, đang vận chuyển)
- Điều chỉnh tồn kho

### Giao hàng
- Lập kế hoạch giao hàng theo chuyến
- Quản lý đơn vị vận chuyển
- Theo dõi trạng thái giao hàng

### Giá cả
- Bảng giá theo cấp độ khách hàng
- Chương trình khuyến mãi theo thời gian
- Giá theo số lượng (volume-based)

### Báo cáo
- Báo cáo doanh số theo nhiều chiều
- Báo cáo công nợ khách hàng
- Báo cáo tồn kho

## Quy trình bán sỉ

```
Khách hàng → Báo giá → Đơn hàng → Xuất kho → Giao hàng → Thanh toán
     ↓           ↓          ↓          ↓          ↓          ↓
  Hạn mức    Duyệt giá   Duyệt đơn  Kiểm tồn  Lập chuyến  Đối soát
```

## Bắt đầu

1. [Hướng dẫn cài đặt ban đầu](./setup-guide)
2. [Quản lý khách hàng](./customers/overview)
3. [Tạo đơn hàng](./sales/orders)

:::info Yêu cầu
Để sử dụng mô hình bán sỉ, bạn cần kích hoạt module **Konek Wholesale** trong tài khoản.
:::
