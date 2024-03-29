import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '1d3'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'b6a'),
    exact: true
  },
  {
    path: '/blog/effective_bug_report',
    component: ComponentCreator('/blog/effective_bug_report', 'ab1'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '1c7'),
    exact: true
  },
  {
    path: '/blog/tags/bug',
    component: ComponentCreator('/blog/tags/bug', '150'),
    exact: true
  },
  {
    path: '/cookie-consent',
    component: ComponentCreator('/cookie-consent', '02d'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '9e6'),
    exact: true
  },
  {
    path: '/privacy_policy',
    component: ComponentCreator('/privacy_policy', 'aa5'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'b62'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '4cb'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '8af'),
            routes: [
              {
                path: '/before_installation/imporatnt_notes',
                component: ComponentCreator('/before_installation/imporatnt_notes', '582'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/before_installation/internet_connection',
                component: ComponentCreator('/before_installation/internet_connection', 'e08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/before_installation/system_requirements',
                component: ComponentCreator('/before_installation/system_requirements', 'f69'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/before-installation',
                component: ComponentCreator('/category/before-installation', '155'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/developers-guide',
                component: ComponentCreator('/category/developers-guide', 'e85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/installation',
                component: ComponentCreator('/category/installation', '264'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/introduction',
                component: ComponentCreator('/category/introduction', '69c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/packages',
                component: ComponentCreator('/category/packages', '435'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/post-installation',
                component: ComponentCreator('/category/post-installation', '72c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/tools',
                component: ComponentCreator('/category/tools', 'f66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/troubleshoot',
                component: ComponentCreator('/category/troubleshoot', '23d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/category/user-guide',
                component: ComponentCreator('/category/user-guide', 'dc1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dev_guide/build_source',
                component: ComponentCreator('/dev_guide/build_source', '490'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dev_guide/deploy_packages',
                component: ComponentCreator('/dev_guide/deploy_packages', '8ae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dev_guide/gpg_key',
                component: ComponentCreator('/dev_guide/gpg_key', '986'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dev_guide/install_keyring',
                component: ComponentCreator('/dev_guide/install_keyring', 'ef9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dev_guide/pkgbuild',
                component: ComponentCreator('/dev_guide/pkgbuild', '69d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/dev_guide/write',
                component: ComponentCreator('/dev_guide/write', '982'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/installation/download_snigdha_os',
                component: ComponentCreator('/installation/download_snigdha_os', 'bf6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/installation/live_env',
                component: ComponentCreator('/installation/live_env', '47b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/installation/making_bootable_usb',
                component: ComponentCreator('/installation/making_bootable_usb', '814'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/installation/offline_install',
                component: ComponentCreator('/installation/offline_install', 'b05'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/installation/online_install',
                component: ComponentCreator('/installation/online_install', '426'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/installation/start_installation',
                component: ComponentCreator('/installation/start_installation', 'f06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/installation/virtualbox_installation',
                component: ComponentCreator('/installation/virtualbox_installation', '082'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/code_of_conduct',
                component: ComponentCreator('/introduction/code_of_conduct', '928'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/faqs',
                component: ComponentCreator('/introduction/faqs', '6c6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/inspiration',
                component: ComponentCreator('/introduction/inspiration', 'f06'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/release_notes',
                component: ComponentCreator('/introduction/release_notes', '94b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/introduction/reporting_bugs',
                component: ComponentCreator('/introduction/reporting_bugs', 'e67'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/packages/snigdhaos_blackbox',
                component: ComponentCreator('/packages/snigdhaos_blackbox', '7b3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/packages/snigdhaos_welcome',
                component: ComponentCreator('/packages/snigdhaos_welcome', 'cc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/post_installation/customization',
                component: ComponentCreator('/post_installation/customization', 'a4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/post_installation/install_packages',
                component: ComponentCreator('/post_installation/install_packages', '44f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/post_installation/language',
                component: ComponentCreator('/post_installation/language', '88a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/post_installation/update',
                component: ComponentCreator('/post_installation/update', '96f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tools/dns',
                component: ComponentCreator('/tools/dns', '5cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/troubleshoot/bluetooth',
                component: ComponentCreator('/troubleshoot/bluetooth', '833'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/troubleshoot/display',
                component: ComponentCreator('/troubleshoot/display', 'd0c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/troubleshoot/sound',
                component: ComponentCreator('/troubleshoot/sound', '86c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/troubleshoot/wifi',
                component: ComponentCreator('/troubleshoot/wifi', '819'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/user_guide/aur',
                component: ComponentCreator('/user_guide/aur', '84e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/user_guide/cheetsheet',
                component: ComponentCreator('/user_guide/cheetsheet', '580'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'e43'),
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
