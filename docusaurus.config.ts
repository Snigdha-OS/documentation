import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DOCUMENTATION | SNIGDHA OS',
  tagline: 'The official Documentation of Snigdha OS',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://snigdhaos.org/',
  baseUrl: '/documentation/',
  trailingSlash: false,

  organizationName: 'Snigdha-OS', // GitHub org/user name
  projectName: 'documentation', // Repo name
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Localization settings
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hi', 'bn'], // English, Hindi, Bengali
    localeConfigs: {
      en: { label: 'English' },
      hi: { label: 'हिन्दी' },
      bn: { label: 'বাংলা' },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          sidebarCollapsible: false,
          routeBasePath: '/', // Set docs as the homepage
          showLastUpdateTime: true,
          editUrl: 'https://github.com/Snigdha-OS/documentation/tree/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: false, // Disable the default sitemap plugin from the preset
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly',
        priority: 0.5,
        filename: 'sitemap.xml',
        ignorePatterns: ['/tags/**'],
        createSitemapItems: async (params) => {
          const {defaultCreateSitemapItems, ...rest} = params;
          const items = await defaultCreateSitemapItems(rest);
          return items.filter((item) => !item.url.includes('/page/'));
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/snigdhaos-og.png', // Social media preview image
    navbar: {
      title: 'Documentation | SNIGDHA OS',
      logo: {
        alt: 'Snigdha OS Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'localeDropdown', // Language switcher
          position: 'right',
        },
        {
          href: 'https://github.com/Snigdha-OS/',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Snigdha OS. Powered by TONMOY INFRASTRUCTURE™.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    metaTags: [
      {
        name: 'description',
        content: 'Snigdha OS is a lightweight, highly customizable Arch-based Linux distribution for general use and penetration testing.',
      },
      {
        name: 'keywords',
        content: 'Snigdha OS, lightweight Linux, Arch Linux, Linux distribution, penetration testing, cybersecurity, customizable OS, open-source OS, lightweight operating system',
      },
      {
        property: 'og:image',
        content: 'img/snigdhaos-og.png', // Social media preview image
      },
      {
        property: 'og:title',
        content: 'Documentation | SNIGDHA OS',
      },
      {
        property: 'og:description',
        content: 'Official documentation for Snigdha OS, a lightweight Linux distribution based on Arch Linux and designed for customization and penetration testing.',
      },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
