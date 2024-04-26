// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SNIGDHA OS - DOCS',
  tagline: 'Be silent when it is time to hear!',
  favicon: 'img/snigdhaos-icon.ico',

  // Set the production url of your site here
  url: 'https://snigdhaos.org/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/documentation/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'snigdha-os', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          sidebarCollapsible: false,
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Snigdha-OS/documentation/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Snigdha-OS/documentation/tree/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'DOCUMENTATION | SNIGDHA OS',
        logo: {
          alt: 'Snigdha OS Docs Logo',
          src: 'img/snigdhaos-face.svg',
        },
        items: [
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://snigdhaos.org/',
            label: 'Home',
            position: 'right',
          },
          {
            href: 'https://cloud.snigdhaos.org/',
            label: 'Cloud',
            position: 'right',
          },
          {
            href: 'https://forum.snigdhaos.org/',
            label: 'Forum',
            position: 'right',
          },
          {
            href: 'https://uptime.snigdhaos.org/',
            label: 'Uptime',
            position: 'right',
          },
          {
            href: 'https://tools.snigdhaos.org/',
            label: 'Tools',
            position: 'right',
          },
          {
            href: 'https://snigdha-os.github.io/snigdhaos-status/',
            label: 'Status',
            position: 'right',
          },
          {
            href: 'https://github.com/Snigdha-OS/',
            // label: 'GitHub',
            position: 'right',
            className: 'navbar__icon navbar__github',
            html: '<i class="fa fa-github"></i>',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          
        ],
        copyright: `© ${new Date().getFullYear()} SNIGDHA OS. ALL RIGHTS RESERVED.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
