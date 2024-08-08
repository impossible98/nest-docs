// import built-in modules
import * as path from 'path';
// import third-party modules
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'NestJS',
  description: 'About Nest',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/nestjs/nest',
      },
    ],
    footer: {
      message: `Copyright © 2020-${new Date().getFullYear()} My Project, Inc. Built with Rspress`,
    },
    sidebar: {
      '/': [
        {
          text: 'INTRODUCTION',
          link: '/index',
        },
        {
          text: 'OVERVIEW',
          collapsible: false,
          items: [
            {
              text: 'First steps',
              link: '/overview/first-steps',
            },
            {
              text: 'Controllers',
              link: '/overview/controllers',
            },
            {
              text: 'Providers',
              link: '/overview/providers',
            },
            {
              text: 'Modules',
              link: '/overview/modules',
            },
            {
              text: 'Middleware',
              link: '/overview/middleware',
            },
            {
              text: 'Exception filters',
              link: '/overview/exception-filters',
            },
            {
              text: 'Pipes',
              link: '/overview/pipes',
            },
            {
              text: 'Guards',
              link: '/overview/guards',
            },
            {
              text: 'Interceptors',
              link: '/overview/interceptors',
            },
            {
              text: 'Custom decorators',
              link: '/overview/custom-decorators',
            },
          ],
        },
        {
          text: 'FUNDAMENTALS',
          collapsible: false,
          items: [
            {
              text: 'Custom providers',
              link: '/fundamentals/custom-providers',
            },
            {
              text: 'Asynchronous providers',
              link: '/fundamentals/async-providers',
            },
          ],
        },
        {
          text: 'TECHNIQUES',
          collapsible: false,
          items: [
            {
              text: 'Configuration',
              link: '/techniques/configuration',
            },
            {
              text: 'Database',
              link: '/techniques/database',
            },
          ],
        },
      ],
    },
  },
});
