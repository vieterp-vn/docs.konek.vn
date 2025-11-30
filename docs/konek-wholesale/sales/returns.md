---
sidebar_position: 4
title: Trả hàng
description: Xử lý hàng trả lại từ khách hàng
---

# Trả hàng (Returns)

Module trả hàng giúp xử lý các trường hợp khách hàng trả lại sản phẩm.

![Sales Returns](/img/screenshots/wholesale/sales-returns.png)

## Khi nào cần tạo trả hàng?

- Sản phẩm bị lỗi, hư hỏng
- Giao sai sản phẩm
- Khách hàng đổi ý
- Sản phẩm không đúng mô tả

## Tạo phiếu trả hàng

1. Vào **Bán hàng** > **Trả hàng**
2. Click **Tạo mới**
3. Điền thông tin:

### Thông tin cơ bản

```
Đơn hàng gốc: [Chọn đơn hàng cần trả]
Khách hàng: [Tự động điền]
Lý do trả: [Chọn từ danh sách]
Ghi chú: [Mô tả chi tiết]
```

### Sản phẩm trả

| Sản phẩm | SL đã bán | SL trả | Lý do |
|----------|-----------|--------|-------|
| SP001 | 100 | 10 | Hư hỏng |
| SP002 | 50 | 5 | Sai màu |

## Quy trình xử lý

```
Tạo phiếu → Duyệt → Nhận hàng → Kiểm tra → Xử lý
                                              ↓
                               ┌──────────────┼──────────────┐
                               ↓              ↓              ↓
                           Nhập kho      Hoàn tiền      Đổi hàng
```

## Cách xử lý hàng trả

### 1. Nhập lại kho
- Hàng còn tốt, có thể bán lại
- Tạo phiếu nhập kho từ trả hàng

### 2. Hoàn tiền
- Giảm công nợ khách hàng
- Hoặc hoàn tiền mặt nếu đã thanh toán

### 3. Đổi sản phẩm khác
- Tạo đơn hàng mới thay thế
- Bù trừ giá trị

## Trạng thái trả hàng

| Trạng thái | Mô tả |
|------------|-------|
| Nháp | Mới tạo, chưa duyệt |
| Chờ duyệt | Đang chờ phê duyệt |
| Đã duyệt | Sẵn sàng nhận hàng |
| Đã nhận | Hàng đã về kho |
| Hoàn thành | Đã xử lý xong |

:::info Chính sách trả hàng
Thiết lập chính sách trả hàng rõ ràng (thời gian, điều kiện) trong phần Cài đặt > Chính sách bán hàng.
:::
