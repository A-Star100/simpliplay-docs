// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SimpliPlay Docs',
  tagline: 'Official SimpliPlay documentation',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://simpliplay.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs/',

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
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
      image: 'img/logo.png',
      navbar: {
        title: 'SimpliPlay Docs',
        logo: {
          alt: 'SimpliPlay logo',
          src: 'img/logo.png',
        },
        items: [
          {to: '/docs/docs/intro', label: 'Docs', position: 'left'},
          {to: '/docs/blog/welcome', label: 'Blog', position: 'left'},
          {to: 'https://simpliplay.netlify.app', label: 'Main', position: 'left'},
          {
            href: 'https://github.com/search?q=owner%3AA-Star100+simpliplay&type=repositories',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Welcome!',
                to: '/docs/docs/intro',
              },
              {
                label: 'Developers',
                to: '/docs/docs/Developers/dev-install',
              },
              {
                label: 'General',
                to: '/docs/docs/General/user-install',
              },
            ],
          },
          {
            title: 'Blog',
            items: [
              {
                label: 'Welcome!',
                to: '/docs/blog/welcome',
              },
              {
                label: 'Lite Ver. Discontinued',
                to: '/docs/blog/lite-ver-end',
              },
              {
                label: 'More',
                to: '/docs/blog/',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Main',
                to: 'https://simpliplay.netlify.app',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/search?q=owner%3AA-Star100+simpliplay&type=repositories',
              },
            ],
          },
        ],
        copyright: `Copyright © 2025 Anirudh Sevugan | Built with Docusaurus`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
