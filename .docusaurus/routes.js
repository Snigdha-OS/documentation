import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/documentation/__docusaurus/debug',
    component: ComponentCreator('/documentation/__docusaurus/debug', '043'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/config',
    component: ComponentCreator('/documentation/__docusaurus/debug/config', 'd32'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/content',
    component: ComponentCreator('/documentation/__docusaurus/debug/content', 'f83'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/globalData',
    component: ComponentCreator('/documentation/__docusaurus/debug/globalData', '599'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/metadata',
    component: ComponentCreator('/documentation/__docusaurus/debug/metadata', 'b41'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/registry',
    component: ComponentCreator('/documentation/__docusaurus/debug/registry', '12e'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/routes',
    component: ComponentCreator('/documentation/__docusaurus/debug/routes', '073'),
    exact: true
  },
  {
    path: '/documentation/blog',
    component: ComponentCreator('/documentation/blog', '5bc'),
    exact: true
  },
  {
    path: '/documentation/blog/archive',
    component: ComponentCreator('/documentation/blog/archive', 'ea7'),
    exact: true
  },
  {
    path: '/documentation/blog/effective_bug_report',
    component: ComponentCreator('/documentation/blog/effective_bug_report', '386'),
    exact: true
  },
  {
    path: '/documentation/blog/tags',
    component: ComponentCreator('/documentation/blog/tags', 'e85'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/bug',
    component: ComponentCreator('/documentation/blog/tags/bug', 'cf7'),
    exact: true
  },
  {
    path: '/documentation/markdown-page',
    component: ComponentCreator('/documentation/markdown-page', '89b'),
    exact: true
  },
  {
    path: '/documentation/',
    component: ComponentCreator('/documentation/', '7d7'),
    routes: [
      {
        path: '/documentation/',
        component: ComponentCreator('/documentation/', '81d'),
        routes: [
          {
            path: '/documentation/',
            component: ComponentCreator('/documentation/', '42c'),
            routes: [
              {
                path: '/documentation/before_installation/imporatnt_notes',
                component: ComponentCreator('/documentation/before_installation/imporatnt_notes', '89a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/before_installation/internet_connection',
                component: ComponentCreator('/documentation/before_installation/internet_connection', 'fae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/before_installation/system_requirements',
                component: ComponentCreator('/documentation/before_installation/system_requirements', '65d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/category/before-installation',
                component: ComponentCreator('/documentation/category/before-installation', '3ba'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/category/developers-guide',
                component: ComponentCreator('/documentation/category/developers-guide', '73b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/category/installation',
                component: ComponentCreator('/documentation/category/installation', '665'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/category/introduction',
                component: ComponentCreator('/documentation/category/introduction', '2cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/category/packages',
                component: ComponentCreator('/documentation/category/packages', '0e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/category/post-installation',
                component: ComponentCreator('/documentation/category/post-installation', 'ee0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/category/tools',
                component: ComponentCreator('/documentation/category/tools', 'a35'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/category/troubleshoot',
                component: ComponentCreator('/documentation/category/troubleshoot', '11b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/category/user-guide',
                component: ComponentCreator('/documentation/category/user-guide', 'd5c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/dev_guide/build_source',
                component: ComponentCreator('/documentation/dev_guide/build_source', '81a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/dev_guide/deploy_packages',
                component: ComponentCreator('/documentation/dev_guide/deploy_packages', '61f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/dev_guide/docs_translate',
                component: ComponentCreator('/documentation/dev_guide/docs_translate', '964'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/dev_guide/gpg_key',
                component: ComponentCreator('/documentation/dev_guide/gpg_key', 'd30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/dev_guide/pkgbuild',
                component: ComponentCreator('/documentation/dev_guide/pkgbuild', '393'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/dev_guide/write',
                component: ComponentCreator('/documentation/dev_guide/write', '856'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/installation/download_snigdha_os',
                component: ComponentCreator('/documentation/installation/download_snigdha_os', '369'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/installation/live_env',
                component: ComponentCreator('/documentation/installation/live_env', 'd25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/installation/making_bootable_usb',
                component: ComponentCreator('/documentation/installation/making_bootable_usb', '298'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/installation/offline_install',
                component: ComponentCreator('/documentation/installation/offline_install', '274'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/installation/online_install',
                component: ComponentCreator('/documentation/installation/online_install', 'c8a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/installation/start_installation',
                component: ComponentCreator('/documentation/installation/start_installation', '0d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/installation/virtualbox_installation',
                component: ComponentCreator('/documentation/installation/virtualbox_installation', 'f71'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/introduction/code_of_conduct',
                component: ComponentCreator('/documentation/introduction/code_of_conduct', '1f7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/introduction/faqs',
                component: ComponentCreator('/documentation/introduction/faqs', '7af'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/introduction/inspiration',
                component: ComponentCreator('/documentation/introduction/inspiration', '67a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/introduction/release_notes',
                component: ComponentCreator('/documentation/introduction/release_notes', '590'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/introduction/reporting_bugs',
                component: ComponentCreator('/documentation/introduction/reporting_bugs', '974'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/packages/snigdhaos_blackbox',
                component: ComponentCreator('/documentation/packages/snigdhaos_blackbox', '3e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/packages/snigdhaos_welcome',
                component: ComponentCreator('/documentation/packages/snigdhaos_welcome', 'e46'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/post_installation/customization',
                component: ComponentCreator('/documentation/post_installation/customization', '35c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/post_installation/install_packages',
                component: ComponentCreator('/documentation/post_installation/install_packages', '557'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/post_installation/language',
                component: ComponentCreator('/documentation/post_installation/language', '861'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/post_installation/update',
                component: ComponentCreator('/documentation/post_installation/update', 'bd0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/tools/dns',
                component: ComponentCreator('/documentation/tools/dns', '2cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/troubleshoot/bluetooth',
                component: ComponentCreator('/documentation/troubleshoot/bluetooth', '269'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/troubleshoot/display',
                component: ComponentCreator('/documentation/troubleshoot/display', '9c2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/troubleshoot/sound',
                component: ComponentCreator('/documentation/troubleshoot/sound', '004'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/troubleshoot/wifi',
                component: ComponentCreator('/documentation/troubleshoot/wifi', '8fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/user_guide/aur',
                component: ComponentCreator('/documentation/user_guide/aur', '9b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/user_guide/cheetsheet',
                component: ComponentCreator('/documentation/user_guide/cheetsheet', '1e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/',
                component: ComponentCreator('/documentation/', '622'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
