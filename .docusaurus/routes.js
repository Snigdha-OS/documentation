import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/documents/blog',
    component: ComponentCreator('/documents/blog', 'b5d'),
    exact: true
  },
  {
    path: '/documents/blog/archive',
    component: ComponentCreator('/documents/blog/archive', '430'),
    exact: true
  },
  {
    path: '/documents/blog/first-blog-post',
    component: ComponentCreator('/documents/blog/first-blog-post', '0ad'),
    exact: true
  },
  {
    path: '/documents/blog/long-blog-post',
    component: ComponentCreator('/documents/blog/long-blog-post', 'd74'),
    exact: true
  },
  {
    path: '/documents/blog/mdx-blog-post',
    component: ComponentCreator('/documents/blog/mdx-blog-post', 'e0a'),
    exact: true
  },
  {
    path: '/documents/blog/tags',
    component: ComponentCreator('/documents/blog/tags', 'f46'),
    exact: true
  },
  {
    path: '/documents/blog/tags/docusaurus',
    component: ComponentCreator('/documents/blog/tags/docusaurus', '8ce'),
    exact: true
  },
  {
    path: '/documents/blog/tags/facebook',
    component: ComponentCreator('/documents/blog/tags/facebook', '442'),
    exact: true
  },
  {
    path: '/documents/blog/tags/hello',
    component: ComponentCreator('/documents/blog/tags/hello', 'f34'),
    exact: true
  },
  {
    path: '/documents/blog/tags/hola',
    component: ComponentCreator('/documents/blog/tags/hola', '0c7'),
    exact: true
  },
  {
    path: '/documents/blog/welcome',
    component: ComponentCreator('/documents/blog/welcome', 'bc5'),
    exact: true
  },
  {
    path: '/documents/markdown-page',
    component: ComponentCreator('/documents/markdown-page', '288'),
    exact: true
  },
  {
    path: '/documents/docs',
    component: ComponentCreator('/documents/docs', '612'),
    routes: [
      {
        path: '/documents/docs/category/tutorial---basics',
        component: ComponentCreator('/documents/docs/category/tutorial---basics', 'e78'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documents/docs/category/tutorial---extras',
        component: ComponentCreator('/documents/docs/category/tutorial---extras', '277'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documents/docs/intro',
        component: ComponentCreator('/documents/docs/intro', 'a91'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documents/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/documents/docs/tutorial-basics/congratulations', '4a2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documents/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/documents/docs/tutorial-basics/create-a-blog-post', '055'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documents/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/documents/docs/tutorial-basics/create-a-document', '6e3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documents/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/documents/docs/tutorial-basics/create-a-page', '9db'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documents/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/documents/docs/tutorial-basics/deploy-your-site', 'ca8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documents/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/documents/docs/tutorial-basics/markdown-features', '142'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documents/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/documents/docs/tutorial-extras/manage-docs-versions', 'ad0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documents/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/documents/docs/tutorial-extras/translate-your-site', '27d'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/documents/',
    component: ComponentCreator('/documents/', '9a7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
