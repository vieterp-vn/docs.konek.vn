---
sidebar_position: 2
title: Thanh toán
description: Ghi nhận và quản lý thanh toán
---

# Thanh toán (Payments)

Ghi nhận thanh toán từ khách hàng và đối soát công nợ.

![Payments](/img/screenshots/wholesale/accounting-payments.png)

## Tạo phiếu thu

1. Vào **Kế toán** > **Thanh toán**
2. Click **Tạo mới**

### Thông tin phiếu thu

```
Khách hàng: [Chọn khách hàng]
Số tiền: [Nhập số tiền thu]
Phương thức: [Tiền mặt / Chuyển khoản]
Ngày thu: [Ngày thực hiện]
Ghi chú: [Mô tả]
```

## Thanh toán nhiều hóa đơn

1. Chọn khách hàng
2. Tick chọn các hóa đơn cần thanh toán
3. Nhập số tiền thu
4. Hệ thống tự động phân bổ

### Quy tắc phân bổ

```
Ưu tiên: Hóa đơn cũ nhất trước (FIFO)
```

| Hóa đơn | Ngày | Còn nợ | Thanh toán |
|---------|------|--------|------------|
| INV001 | 01/11 | 5,000,000 | 5,000,000 |
| INV002 | 05/11 | 3,000,000 | 3,000,000 |
| INV003 | 10/11 | 4,000,000 | 2,000,000 |
| **Tổng** | | **12,000,000** | **10,000,000** |

## Xác nhận thanh toán

1. Kiểm tra thông tin
2. Click **Xác nhận**
3. Công nợ tự động cập nhật

## Đối soát ngân hàng

1. Import sao kê ngân hàng
2. Hệ thống tự động match với phiếu thu
3. Xác nhận các giao dịch khớp

:::tip Mẹo
Ghi nhận thanh toán ngay khi nhận được để công nợ luôn chính xác.
:::
