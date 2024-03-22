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
    component: ComponentCreator('/documentation/blog', 'b25'),
    exact: true
  },
  {
    path: '/documentation/blog/archive',
    component: ComponentCreator('/documentation/blog/archive', 'ea7'),
    exact: true
  },
  {
    path: '/documentation/blog/first-blog-post',
    component: ComponentCreator('/documentation/blog/first-blog-post', 'e78'),
    exact: true
  },
  {
    path: '/documentation/blog/long-blog-post',
    component: ComponentCreator('/documentation/blog/long-blog-post', '86a'),
    exact: true
  },
  {
    path: '/documentation/blog/mdx-blog-post',
    component: ComponentCreator('/documentation/blog/mdx-blog-post', '3bf'),
    exact: true
  },
  {
    path: '/documentation/blog/tags',
    component: ComponentCreator('/documentation/blog/tags', 'e85'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/docusaurus',
    component: ComponentCreator('/documentation/blog/tags/docusaurus', 'ad1'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/facebook',
    component: ComponentCreator('/documentation/blog/tags/facebook', 'a2c'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/hello',
    component: ComponentCreator('/documentation/blog/tags/hello', '38b'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/hola',
    component: ComponentCreator('/documentation/blog/tags/hola', 'e7d'),
    exact: true
  },
  {
    path: '/documentation/blog/welcome',
    component: ComponentCreator('/documentation/blog/welcome', 'f41'),
    exact: true
  },
  {
    path: '/documentation/markdown-page',
    component: ComponentCreator('/documentation/markdown-page', '89b'),
    exact: true
  },
  {
    path: '/documentation/',
    component: ComponentCreator('/documentation/', '1ed'),
    routes: [
      {
        path: '/documentation/',
        component: ComponentCreator('/documentation/', '912'),
        routes: [
          {
            path: '/documentation/',
            component: ComponentCreator('/documentation/', '810'),
            routes: [
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
                path: '/documentation/category/introduction',
                component: ComponentCreator('/documentation/category/introduction', '2cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/category/tutorial---basics',
                component: ComponentCreator('/documentation/category/tutorial---basics', '954'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/category/tutorial---extras',
                component: ComponentCreator('/documentation/category/tutorial---extras', 'f25'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/tutorial-basics/congratulations',
                component: ComponentCreator('/documentation/tutorial-basics/congratulations', '011'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/documentation/tutorial-basics/create-a-blog-post', 'af7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/tutorial-basics/create-a-document',
                component: ComponentCreator('/documentation/tutorial-basics/create-a-document', '185'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/tutorial-basics/create-a-page',
                component: ComponentCreator('/documentation/tutorial-basics/create-a-page', 'c26'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/documentation/tutorial-basics/deploy-your-site', 'cd1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/tutorial-basics/markdown-features',
                component: ComponentCreator('/documentation/tutorial-basics/markdown-features', '405'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/documentation/tutorial-extras/manage-docs-versions', '196'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/documentation/tutorial-extras/translate-your-site',
                component: ComponentCreator('/documentation/tutorial-extras/translate-your-site', '368'),
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
