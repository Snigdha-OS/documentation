import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DOCUMENTATION | SNIGDHA OS',
  tagline: 'The official Documentation of Snigdha OS',
  favicon: 'img/favicon.ico',

  // Deployment and site configuration
  url: 'https://snigdhaos.org/', // Production URL
  baseUrl: '/documentation/', // Base URL for the site
  trailingSlash: false,
  organizationName: 'Snigdha-OS', // GitHub organization/user name
  projectName: 'documentation', // Repository name
  deploymentBranch: 'gh-pages', // Branch for deployment
  onBrokenLinks: 'throw', // Throw error for broken links
  onBrokenMarkdownLinks: 'warn', // Warn for broken Markdown links

  // Localization settings
  i18n: {
    defaultLocale: 'en', // Default language
    locales: ['en', 'hi', 'bn'], // Supported languages: English, Hindi, Bengali
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
          sidebarPath: './sidebars.ts', // Path to sidebar configuration
          sidebarCollapsible: false, // Sidebar items are not collapsible
          routeBasePath: '/', // Set docs as the homepage
          showLastUpdateTime: true, // Show last updated time for docs
          editUrl: 'https://github.com/Snigdha-OS/documentation/tree/master/', // URL for editing docs
        },
        theme: {
          customCss: './src/css/custom.css', // Custom CSS for styling
        },
        sitemap: false, // Disable default sitemap plugin
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly', // Frequency of updates in sitemap
        priority: 0.5, // Default priority for pages
        filename: 'sitemap.xml', // Sitemap filename
        ignorePatterns: ['/tags/**'], // Ignore tags pages
        createSitemapItems: async (params) => {
          const { defaultCreateSitemapItems, ...rest } = params;
          const items = await defaultCreateSitemapItems(rest);
          return items.filter((item) => !item.url.includes('/page/')); // Exclude pagination pages
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
          type: 'localeDropdown', // Language switcher dropdown
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
      links: [], // Customize footer links here
      copyright: `Copyright © ${new Date().getFullYear()} Snigdha OS. Powered by TONMOY INFRASTRUCTURE™.`,
    },
    prism: {
      theme: prismThemes.github, // Light theme
      darkTheme: prismThemes.dracula, // Dark theme
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
