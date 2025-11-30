---
sidebar_position: 3
title: Vai trò và quyền hạn
description: Chi tiết về các vai trò và quyền hạn trong Konek
---

# Vai trò và quyền hạn

## Tổng quan vai trò

### Owner (Chủ sở hữu)
- Người tạo doanh nghiệp
- Toàn quyền quản lý
- Có thể xóa doanh nghiệp

### Admin (Quản trị viên)
- Quản lý thành viên (mời, xóa)
- Cấu hình cài đặt doanh nghiệp
- Truy cập tất cả dữ liệu

### Member (Thành viên)
- Tạo và quản lý phiếu hỗ trợ được giao
- Xem hóa đơn liên quan
- Không thể mời/xóa thành viên khác

## Bảng quyền hạn chi tiết

| Chức năng | Owner | Admin | Member |
|-----------|:-----:|:-----:|:------:|
| Xem doanh nghiệp | ✅ | ✅ | ✅ |
| Chỉnh sửa doanh nghiệp | ✅ | ✅ | ❌ |
| Xóa doanh nghiệp | ✅ | ❌ | ❌ |
| Mời thành viên | ✅ | ✅ | ❌ |
| Xóa thành viên | ✅ | ✅ | ❌ |
| Thay đổi vai trò | ✅ | ❌ | ❌ |
| Tạo phiếu hỗ trợ | ✅ | ✅ | ✅ |
| Xem tất cả phiếu | ✅ | ✅ | ❌ |
| Tạo hóa đơn | ✅ | ✅ | ❌ |
| Xem tất cả hóa đơn | ✅ | ✅ | ❌ |

## Thay đổi vai trò

Chỉ **Owner** có thể thay đổi vai trò thành viên:

1. Vào **Thành viên**
2. Click menu **⋮** bên cạnh thành viên
3. Chọn **Thay đổi vai trò**
4. Chọn vai trò mới và xác nhận
