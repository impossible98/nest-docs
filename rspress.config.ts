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
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
    sidebar: {
      '/': [
        {
          text: 'INTRODUCTION',
          link: '/introduction',
        },
        {
          text: 'OVERVIEW',
          collapsible: false,
          items: [
            {
              text: 'First steps',
              link: '/overview/first-steps',
            },
          ],
        },
      ],
    },
  },
});
