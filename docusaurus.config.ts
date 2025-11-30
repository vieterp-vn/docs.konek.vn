import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Konek Docs',
  tagline: 'Tài liệu hướng dẫn sử dụng Konek',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://docs.konek.vn',
  baseUrl: '/',

  organizationName: 'vieterp-vn',
  projectName: 'docs.konek.vn',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi', 'en'],
    localeConfigs: {
      vi: {
        label: 'Tiếng Việt',
        htmlLang: 'vi-VN',
      },
      en: {
        label: 'English',
        htmlLang: 'en-US',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/vieterp-vn/docs.konek.vn/edit/main/',
        },
        blog: false,
        pages: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/konek-social-card.png',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Konek Docs',
      logo: {
        alt: 'Konek Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Tài liệu',
        },
        {
          href: 'https://konek.vn',
          label: 'Konek VN',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/vieterp-vn/docs.konek.vn',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tài liệu',
          items: [
            {
              label: 'Konek Portal',
              to: '/konek-portal/overview',
            },
            {
              label: 'Konek Wholesale',
              to: '/konek-wholesale/overview',
            },
          ],
        },
        {
          title: 'Sản phẩm',
          items: [
            {
              label: 'Konek VN',
              href: 'https://konek.vn',
            },
          ],
        },
        {
          title: 'Hỗ trợ',
          items: [
            {
              label: 'Liên hệ',
              href: 'https://konek.vn/contact',
            },
            {
              label: 'FAQ',
              to: '/support/faq',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Konek. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
