---
sidebar_position: 3
title: Đơn vị vận chuyển
description: Quản lý đơn vị vận chuyển
---

# Đơn vị vận chuyển (Carriers)

Quản lý các đơn vị vận chuyển nội bộ và đối tác bên ngoài.

![Carriers](/img/screenshots/wholesale/delivery-carriers.png)

## Loại đơn vị vận chuyển

### 1. Đội xe nội bộ
- Xe công ty
- Tài xế nhân viên
- Kiểm soát hoàn toàn

### 2. Đối tác vận chuyển
- Giao hàng nhanh (GHN, GHTK...)
- Đối tác địa phương
- Tính phí theo đơn

## Thiết lập đơn vị vận chuyển

1. Vào **Giao hàng** > **Đơn vị vận chuyển**
2. Click **Tạo mới**

### Thông tin cơ bản

```
Tên: [Tên đơn vị]
Loại: [Nội bộ / Đối tác]
Liên hệ: [SĐT, Email]
```

### Phí vận chuyển

| Phương thức | Mô tả |
|-------------|-------|
| Cố định | Phí cố định mỗi đơn |
| Theo khoảng cách | Tính theo km |
| Theo khối lượng | Tính theo kg |
| Miễn phí | Không tính phí |

## Quy tắc chọn vận chuyển

Thiết lập quy tắc tự động chọn đơn vị:

```
Nếu: Đơn hàng > 10 triệu
  → Giao nội bộ (miễn phí)

Nếu: Khu vực = Nội thành
  → GHN (phí cố định 30k)

Mặc định:
  → GHTK (tính theo kg)
```

:::info Tích hợp
Konek hỗ trợ tích hợp API với các đơn vị vận chuyển phổ biến để tự động tạo vận đơn và theo dõi.
:::
