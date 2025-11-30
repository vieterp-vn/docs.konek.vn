import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Giới thiệu',
    },
    // === KONEK PORTAL (konek.vn) ===
    {
      type: 'category',
      label: 'Konek Portal',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'konek-portal/overview',
      },
      items: [
        {
          type: 'category',
          label: 'Bắt đầu',
          collapsed: false,
          items: [
            'konek-portal/getting-started/create-account',
            'konek-portal/getting-started/choose-plan',
            'konek-portal/getting-started/setup-tenant',
          ],
        },
        {
          type: 'category',
          label: 'Thanh toán',
          items: [
            'konek-portal/billing/plans',
            'konek-portal/billing/payment',
            'konek-portal/billing/invoices',
          ],
        },
        {
          type: 'category',
          label: 'Tài khoản',
          items: [
            'konek-portal/account/profile',
            'konek-portal/account/security',
          ],
        },
      ],
    },
    // === KONEK WHOLESALE (beta.konek.vn) ===
    {
      type: 'category',
      label: 'Konek Wholesale',
      collapsed: false,
      link: {
        type: 'doc',
        id: 'konek-wholesale/overview',
      },
      items: [
        'konek-wholesale/setup-guide',
        {
          type: 'category',
          label: 'Khách hàng',
          items: [
            'konek-wholesale/customers/overview',
            'konek-wholesale/customers/create',
            'konek-wholesale/customers/b2b-customers',
            'konek-wholesale/customers/credit-limits',
          ],
        },
        {
          type: 'category',
          label: 'Bán hàng',
          items: [
            'konek-wholesale/sales/overview',
            'konek-wholesale/sales/quotations',
            'konek-wholesale/sales/orders',
            'konek-wholesale/sales/returns',
          ],
        },
        {
          type: 'category',
          label: 'Kho vận',
          items: [
            'konek-wholesale/inventory/overview',
            'konek-wholesale/inventory/products',
            'konek-wholesale/inventory/stock',
            'konek-wholesale/inventory/operations',
          ],
        },
        {
          type: 'category',
          label: 'Giao hàng',
          items: [
            'konek-wholesale/delivery/overview',
            'konek-wholesale/delivery/trips',
            'konek-wholesale/delivery/carriers',
          ],
        },
        {
          type: 'category',
          label: 'Giá cả',
          items: [
            'konek-wholesale/pricing/overview',
            'konek-wholesale/pricing/pricelists',
          ],
        },
        {
          type: 'category',
          label: 'Kế toán',
          items: [
            'konek-wholesale/accounting/overview',
            'konek-wholesale/accounting/payments',
          ],
        },
        {
          type: 'category',
          label: 'Báo cáo',
          items: [
            'konek-wholesale/reports/overview',
            'konek-wholesale/reports/sales',
            'konek-wholesale/reports/debt',
            'konek-wholesale/reports/inventory',
          ],
        },
      ],
    },
    // === HỖ TRỢ ===
    {
      type: 'category',
      label: 'Hỗ trợ',
      items: [
        'support/faq',
        'support/troubleshooting',
        'support/contact',
      ],
    },
  ],
};

export default sidebars;
