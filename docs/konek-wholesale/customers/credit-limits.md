---
sidebar_position: 4
title: Hạn mức công nợ
description: Quản lý hạn mức công nợ khách hàng
---

# Hạn mức công nợ

Hạn mức công nợ giúp kiểm soát rủi ro khi bán hàng trả chậm cho khách hàng B2B.

![Credit Limits](/img/screenshots/wholesale/customers-credit.png)

## Hạn mức công nợ là gì?

Hạn mức công nợ là số tiền tối đa mà khách hàng được phép nợ tại một thời điểm. Khi công nợ vượt hạn mức, hệ thống sẽ cảnh báo hoặc chặn đơn hàng mới.

## Thiết lập hạn mức

1. Vào **Khách hàng** > chọn khách hàng cần thiết lập
2. Tab **Bán hàng**
3. Điền **Hạn mức công nợ**

```
Hạn mức công nợ: 50,000,000 VNĐ
```

## Cơ chế kiểm soát

### Khi tạo đơn hàng

```
Công nợ hiện tại + Giá trị đơn mới ≤ Hạn mức?
├── Có → Cho phép tạo đơn
└── Không → Cảnh báo / Chặn
```

### Các mức cảnh báo

| Mức | Tỷ lệ | Hành động |
|-----|-------|-----------|
| Bình thường | < 80% | Không cảnh báo |
| Cảnh báo | 80-100% | Hiển thị cảnh báo |
| Vượt hạn | > 100% | Chặn đơn hàng mới |

## Xem báo cáo công nợ

1. Vào **Báo cáo** > **Báo cáo công nợ**
2. Xem danh sách khách hàng và công nợ hiện tại
3. Lọc theo:
   - Khách hàng vượt hạn mức
   - Công nợ quá hạn
   - Theo nhân viên phụ trách

## Điều chỉnh hạn mức

Hạn mức có thể được điều chỉnh dựa trên:
- Lịch sử thanh toán tốt → Tăng hạn mức
- Thanh toán chậm trễ → Giảm hạn mức
- Yêu cầu đặc biệt từ quản lý

:::warning Lưu ý
Việc tăng hạn mức công nợ cần được phê duyệt bởi quản lý để đảm bảo kiểm soát rủi ro.
:::
