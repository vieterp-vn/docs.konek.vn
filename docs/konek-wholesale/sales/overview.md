---
sidebar_position: 1
title: Tổng quan Bán hàng
description: Module bán hàng trên Konek Wholesale
---

# Module Bán hàng

Module Bán hàng giúp quản lý toàn bộ quy trình từ báo giá đến đơn hàng, xuất kho và giao hàng.

![Sales Orders](/img/screenshots/wholesale/sales-orders.png)

## Quy trình bán hàng

```
Báo giá → Đơn hàng → Xuất kho → Giao hàng → Thanh toán
   ↓          ↓          ↓          ↓          ↓
 Draft    Confirmed   Picking    Shipped     Done
```

## Tính năng chính

### Báo giá (Quotation)
- Tạo báo giá nhanh cho khách hàng
- Gửi báo giá qua email
- Chuyển đổi báo giá thành đơn hàng

### Đơn hàng (Sales Order)
- Tạo đơn hàng từ báo giá hoặc trực tiếp
- Tự động kiểm tra tồn kho
- Tự động kiểm tra hạn mức công nợ
- Quy trình duyệt nhiều cấp

### Trả hàng (Returns)
- Xử lý hàng trả lại
- Hoàn tiền hoặc ghi nhận công nợ
- Nhập kho hàng trả

## Trạng thái đơn hàng

| Trạng thái | Mô tả |
|------------|-------|
| **Nháp** | Đơn hàng mới tạo, chưa xác nhận |
| **Chờ duyệt** | Đang chờ phê duyệt từ quản lý |
| **Đã xác nhận** | Đã duyệt, sẵn sàng xuất kho |
| **Đang giao** | Hàng đang được vận chuyển |
| **Hoàn thành** | Đã giao hàng thành công |
| **Đã hủy** | Đơn hàng bị hủy |

## Menu chính

- **Báo giá**: Danh sách các báo giá
- **Đơn hàng**: Danh sách đơn hàng
- **Trả hàng**: Quản lý hàng trả lại

## Xem thêm

- [Tạo báo giá](./quotations)
- [Quản lý đơn hàng](./orders)
- [Xử lý trả hàng](./returns)
