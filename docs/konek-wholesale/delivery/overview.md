---
sidebar_position: 1
title: Tổng quan Giao hàng
description: Quản lý giao hàng và vận chuyển
---

# Module Giao hàng

Module Giao hàng giúp quản lý quy trình vận chuyển hàng hóa từ kho đến khách hàng.

![Delivery Trips](/img/screenshots/wholesale/delivery-trips.png)

## Tính năng chính

### Chuyến giao hàng (Delivery Trips)
- Gom nhiều đơn hàng vào một chuyến
- Tối ưu lộ trình giao hàng
- Theo dõi trạng thái chuyến

### Đơn vị vận chuyển (Carriers)
- Quản lý đội xe nội bộ
- Đối tác vận chuyển bên ngoài
- Phí vận chuyển theo đơn vị

## Quy trình giao hàng

```
Đơn hàng xác nhận → Xuất kho → Lập chuyến → Giao hàng → Xác nhận
        ↓              ↓           ↓           ↓          ↓
    Chờ xuất      Đã xuất    Đang giao    Đã giao    Hoàn thành
```

## Trạng thái chuyến giao

| Trạng thái | Mô tả |
|------------|-------|
| **Nháp** | Đang lập chuyến |
| **Sẵn sàng** | Chờ xuất phát |
| **Đang giao** | Đang vận chuyển |
| **Hoàn thành** | Đã giao xong |

## Xem thêm

- [Quản lý chuyến giao](./trips)
- [Đơn vị vận chuyển](./carriers)
