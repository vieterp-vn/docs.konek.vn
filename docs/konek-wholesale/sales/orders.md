---
sidebar_position: 3
title: Đơn hàng
description: Tạo và quản lý đơn hàng bán
---

# Đơn hàng bán (Sales Order)

Đơn hàng là cam kết bán hàng cho khách hàng. Sau khi xác nhận, đơn hàng kích hoạt quy trình xuất kho và giao hàng.

![Sales Orders](/img/screenshots/wholesale/sales-orders.png)

## Tạo đơn hàng

### Cách 1: Từ báo giá

1. Mở báo giá đã được khách đồng ý
2. Click **Xác nhận đơn hàng**

### Cách 2: Tạo trực tiếp

1. Vào **Bán hàng** > **Đơn hàng**
2. Click **Tạo mới**
3. Điền thông tin tương tự báo giá

## Thông tin đơn hàng

### Header

| Trường | Mô tả |
|--------|-------|
| Mã đơn | Tự động tạo (SO001, SO002...) |
| Khách hàng | Chọn từ danh sách |
| Ngày đặt | Ngày tạo đơn |
| Ngày giao | Ngày dự kiến giao hàng |

### Chi tiết sản phẩm

| Cột | Mô tả |
|-----|-------|
| Sản phẩm | Tên và mã sản phẩm |
| Số lượng | Số lượng đặt |
| Đơn giá | Giá theo bảng giá khách hàng |
| Chiết khấu | Giảm giá nếu có |
| Thành tiền | Số lượng x Đơn giá - Chiết khấu |

## Quy trình duyệt đơn

```
Nhân viên tạo đơn → Trưởng nhóm duyệt → Kế toán kiểm tra → Kho xuất hàng
```

### Các mức duyệt

| Giá trị đơn | Cấp duyệt |
|-------------|-----------|
| < 10 triệu | Tự động duyệt |
| 10-50 triệu | Trưởng nhóm |
| > 50 triệu | Quản lý |

## Kiểm tra trước khi xác nhận

Hệ thống tự động kiểm tra:

1. **Tồn kho**: Đủ hàng để giao?
2. **Công nợ**: Trong hạn mức?
3. **Giá**: Đúng theo bảng giá?

## Trạng thái đơn hàng

- **Nháp**: Đang soạn, chưa gửi
- **Chờ duyệt**: Đã gửi, chờ phê duyệt
- **Đã duyệt**: Sẵn sàng xuất kho
- **Đang xử lý**: Đang xuất kho
- **Hoàn thành**: Đã giao xong
- **Hủy**: Đơn bị hủy

:::warning Lưu ý
Đơn hàng đã xác nhận không thể sửa đổi. Nếu cần thay đổi, phải hủy và tạo đơn mới.
:::
