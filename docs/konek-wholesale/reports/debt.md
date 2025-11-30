---
sidebar_position: 3
title: Báo cáo công nợ
description: Theo dõi công nợ khách hàng
---

# Báo cáo công nợ

Báo cáo chi tiết công nợ phải thu từ khách hàng.

![Debt Report](/img/screenshots/wholesale/reports-debt.png)

## Truy cập báo cáo

1. Vào **Báo cáo** > **Công nợ**
2. Chọn điều kiện lọc
3. Click **Xem báo cáo**

## Báo cáo tổng hợp công nợ

| Khách hàng | Hạn mức | Công nợ | % Hạn mức | Quá hạn |
|------------|---------|---------|-----------|---------|
| Công ty ABC | 100,000,000 | 85,000,000 | 85% | 0 |
| Đại lý XYZ | 50,000,000 | 55,000,000 | 110% | 15,000,000 |
| Cửa hàng 123 | 30,000,000 | 25,000,000 | 83% | 5,000,000 |

## Báo cáo tuổi nợ (Aging)

Phân loại công nợ theo thời gian quá hạn:

| Khách hàng | Chưa đến hạn | 1-30 ngày | 31-60 ngày | >60 ngày |
|------------|--------------|-----------|------------|----------|
| ABC | 50,000,000 | 20,000,000 | 10,000,000 | 5,000,000 |
| XYZ | 30,000,000 | 15,000,000 | 10,000,000 | 0 |

## Chi tiết theo hóa đơn

```
Khách hàng: Công ty ABC
├── INV001 (01/10) - 30,000,000 - Quá hạn 45 ngày
├── INV002 (15/10) - 25,000,000 - Quá hạn 30 ngày
└── INV003 (01/11) - 30,000,000 - Chưa đến hạn
```

## Cảnh báo

- **Vượt hạn mức**: Khách có công nợ > hạn mức
- **Quá hạn**: Hóa đơn quá hạn thanh toán
- **Rủi ro cao**: Công nợ quá hạn > 60 ngày

## Hành động

Từ báo cáo, có thể:
- Gọi điện nhắc nợ
- Gửi email nhắc nợ
- Tạm dừng bán cho KH quá hạn

:::warning Lưu ý
Theo dõi báo cáo công nợ thường xuyên để kiểm soát rủi ro và đảm bảo dòng tiền.
:::
