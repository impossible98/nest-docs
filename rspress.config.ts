// import built-in modules
import * as path from 'path';
// import third-party modules
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'NestJS',
  description: 'About Nest',
  icon: '/favicon.png',
  logo: {
    light: '/nest-light-logo.png',
    dark: '/nest-dark-logo.png',
  },
  themeConfig: {
    lastUpdated: true,
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
          items: [
            {
              text: 'Custom providers',
              link: '/fundamentals/custom-providers',
            },
            {
              text: 'Asynchronous providers',
              link: '/fundamentals/async-providers',
            },
            {
              text: 'Dynamic modules',
              link: '/fundamentals/dynamic-modules',
            },
            {
              text: 'Injection scopes',
              link: '/fundamentals/injection-scopes',
            },
            {
              text: 'Circular dependency',
              link: '/fundamentals/circular-dependency',
            },
            {
              text: 'Module reference',
              link: '/fundamentals/module-ref',
            },
            {
              text: 'Lazy loading modules',
              link: '/fundamentals/lazy-loading-modules',
            },
            {
              text: 'Execution context',
              link: '/fundamentals/execution-context',
            },
            {
              text: 'Lifecycle Events',
              link: '/fundamentals/lifecycle-events',
            },
            {
              text: 'Platform agnosticism',
              link: '/fundamentals/platform-agnosticism',
            },
            {
              text: 'Testing',
              link: '/fundamentals/testing',
            },
          ],
        },
        {
          text: 'TECHNIQUES',
          items: [
            {
              text: 'Configuration',
              link: '/techniques/configuration',
            },
            {
              text: 'Database',
              link: '/techniques/database',
            },
            {
              text: 'Mongo',
              link: '/techniques/mongodb',
            },
            {
              text: 'Validation',
              link: '/techniques/validation',
            },
            {
              text: 'Caching',
              link: '/techniques/caching',
            },
            {
              text: 'Serialization',
              link: '/techniques/serialization',
            },
            {
              text: 'Versioning',
              link: '/techniques/versioning',
            },
            {
              text: 'Task Scheduling',
              link: '/techniques/task-scheduling',
            },
            {
              text: 'Queues',
              link: '/techniques/queues',
            },
            {
              text: 'Logging',
              link: '/techniques/logger',
            },
            {
              text: 'Cookies',
              link: '/techniques/cookies',
            },
            {
              text: 'Events',
              link: '/techniques/events',
            },
            {
              text: 'Compression',
              link: '/techniques/compression',
            },
          ],
        },
        {
          text: 'STANDALONR APPS',
          link: '/standalone-applications',
        },
      ],
    },
  },
});
