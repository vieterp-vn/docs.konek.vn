import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Giới thiệu',
    },
    {
      type: 'category',
      label: 'Bắt đầu',
      collapsed: false,
      items: [
        'getting-started/quick-start',
        'getting-started/create-account',
        'getting-started/first-business',
      ],
    },
    {
      type: 'category',
      label: 'Quản lý doanh nghiệp',
      items: [
        'features/businesses/overview',
        'features/businesses/create',
        'features/businesses/settings',
      ],
    },
    {
      type: 'category',
      label: 'Quản lý nhóm',
      items: [
        'features/team/overview',
        'features/team/invite-members',
        'features/team/roles-permissions',
      ],
    },
    {
      type: 'category',
      label: 'Helpdesk',
      items: [
        'features/helpdesk/overview',
        'features/helpdesk/create-ticket',
        'features/helpdesk/manage-tickets',
      ],
    },
    {
      type: 'category',
      label: 'Hóa đơn',
      items: [
        'features/invoicing/overview',
        'features/invoicing/create-invoice',
        'features/invoicing/manage-invoices',
      ],
    },
    {
      type: 'category',
      label: 'Cài đặt',
      items: [
        'features/settings/profile',
        'features/settings/notifications',
        'features/settings/security',
      ],
    },
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
