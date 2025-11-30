---
sidebar_position: 4
title: Hoạt động kho
description: Các nghiệp vụ xuất nhập kho
---

# Hoạt động kho

Quản lý các hoạt động xuất nhập kho: nhập hàng, xuất hàng, chuyển kho, điều chỉnh.

![Operations](/img/screenshots/wholesale/inventory-operations.png)

## Các loại hoạt động

### 1. Nhập kho

Nguồn hàng nhập:
- Mua hàng từ nhà cung cấp
- Hàng trả lại từ khách hàng
- Chuyển kho từ kho khác

### 2. Xuất kho

Lý do xuất:
- Giao hàng cho khách
- Trả hàng nhà cung cấp
- Chuyển kho đến kho khác

### 3. Chuyển kho

Di chuyển hàng giữa các kho:
```
Kho HN → Kho HCM: 100 SP001
```

### 4. Điều chỉnh tồn kho

Cập nhật khi kiểm kê:
- Hàng thừa: Điều chỉnh tăng
- Hàng thiếu: Điều chỉnh giảm

## Tạo phiếu xuất/nhập

1. Vào **Kho vận** > **Hoạt động**
2. Click **Tạo mới**
3. Chọn loại: Nhập / Xuất / Chuyển
4. Điền chi tiết sản phẩm

### Thông tin phiếu

```
Loại: [Nhập kho / Xuất kho / Chuyển kho]
Kho nguồn: [Chọn kho]
Kho đích: [Chọn kho - nếu chuyển kho]
Ngày: [Ngày thực hiện]
Ghi chú: [Lý do]
```

## Quy trình duyệt

```
Tạo phiếu → Duyệt → Xác nhận → Hoàn thành
   ↓          ↓         ↓          ↓
 Nháp    Chờ duyệt   Sẵn sàng   Cập nhật tồn
```

## Trạng thái phiếu

| Trạng thái | Mô tả |
|------------|-------|
| Nháp | Mới tạo, có thể sửa |
| Chờ duyệt | Đang chờ phê duyệt |
| Sẵn sàng | Đã duyệt, chờ thực hiện |
| Hoàn thành | Đã cập nhật tồn kho |
| Hủy | Phiếu bị hủy |

:::warning Lưu ý
Phiếu đã hoàn thành không thể sửa đổi. Nếu cần điều chỉnh, phải tạo phiếu mới.
:::
