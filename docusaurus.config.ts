import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'PlayBook | SNIGDHA OS',
  tagline: 'The official Documentation of Snigdha OS',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://snigdhaos.org/',
  baseUrl: '/playbook/',
  trailingSlash: false,

  organizationName: 'Snigdha-OS', // GitHub org/user name
  projectName: 'playbook', // Repo name
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
          editUrl: 'https://github.com/Snigdha-OS/playbook/tree/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg', // Social media preview image
    navbar: {
      title: 'PlayBook | SNIGDHA OS',
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
      // Remove all footer links
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Snigdha OS. Powered by Tonmoy Infrastructure.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    // SEO Configuration
  metaTags: [
    {
      name: 'description',
      content: 'Snigdha OS is a lightweight, highly customizable Arch-based Linux distribution for general use and penetration testing.'
    },
    {
      name: 'keywords',
      content: 'Snigdha OS, lightweight Linux, Arch Linux, Linux distribution, penetration testing, cybersecurity, customizable OS, open-source OS, lightweight operating system'
    },
    {
      property: 'og:image',
      content: 'img/docusaurus-social-card.jpg' // Social media preview image
    },
    {
      property: 'og:title',
      content: 'PlayBook | SNIGDHA OS'
    },
    {
      property: 'og:description',
      content: 'Official documentation for Snigdha OS, a lightweight Linux distribution based on Arch Linux and designed for customization and penetration testing.'
    },
  ],
  } satisfies Preset.ThemeConfig,
};

export default config;
