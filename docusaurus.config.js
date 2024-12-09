
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SNIGDHA OS - DOCS',
  tagline: 'Be silent when it is time to hear!',
  favicon: 'img/snigdhaos-ico.ico',

  // Set the production url of your site here
  url: 'https://snigdhaos.org/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/documentation/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Snigdha-OS', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          src: 'img/snigdhaos-docs.svg',
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
            href: 'https://snigdha-os.github.io/snigdhaos-status/',
            label: 'Status',
            position: 'right',
          },
          {
            href: 'http://snigdha-os.github.io/documentation/privacy_policy',
            label: 'Privacy Policy',
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
      metadata: [
        {name: 'google-site-verification', content: 'yn077F39pfs0VeUp9l09FZfw_uNegy4cXf7i0aPXJIc'},
      ],
    }),
};

export default config;
