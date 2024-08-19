// import built-in modules
import * as path from 'path';
// import third-party modules
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'NestJS',
  description: 'About NestJS',
  icon: '/favicon.png',
  logo: {
    light: '/nest-light-logo.png',
    dark: '/nest-dark-logo.png',
  },
  logoText: 'NestJS',
  head: [
    `<script type="text/javascript">(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "nnt9obihew");</script>`,
  ],
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
      message:
        '<p>Copyright © 2020-${new Date().getFullYear()} My Project, Inc. Built with Rspress</p>',
    },
    hideNavbar: 'auto',
    enableScrollToTop: true,
    sidebar: {
      '/': [
        {
          text: 'INTRODUCTION',
          link: '/index',
        },
        {
          text: 'OVERVIEW',
          collapsed: true,
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
          collapsed: true,
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
          collapsed: true,
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
            {
              text: 'File upload',
              link: '/techniques/file-upload',
            },
            {
              text: 'Streaming files',
              link: '/techniques/streaming-files',
            },
            {
              text: 'HTTP module',
              link: '/techniques/http-module',
            },
            {
              text: 'Session',
              link: '/techniques/session',
            },
            {
              text: 'Model-View-Controller',
              link: '/techniques/mvc',
            },
            {
              text: 'Performance (Fastify)',
              link: '/techniques/performance',
            },
            {
              text: 'Server-Sent Events',
              link: '/techniques/server-sent-events',
            },
          ],
        },
        {
          text: 'SECURITY',
          collapsed: true,
          items: [
            {
              text: 'Authentication',
              link: '/security/authentication',
            },
            {
              text: 'Authorization',
              link: '/security/authorization',
            },
            {
              text: 'Encryption and Hashing',
              link: '/security/encryption-and-hashing',
            },
            {
              text: 'Helmet',
              link: '/security/helmet',
            },
            {
              text: 'CORS',
              link: '/security/cors',
            },
            {
              text: 'CSRF Protection',
              link: '/security/csrf',
            },
            {
              text: 'Rate Limiting',
              link: '/security/rate-limiting',
            },
          ],
        },
        {
          text: 'WEBSOCKETS',
          collapsed: true,
          items: [
            {
              text: 'Gateways',
              link: '/websockets/gateways',
            },
            {
              text: 'Exception filters',
              link: '/websockets/exception-filters',
            },
            {
              text: 'Pipes',
              link: '/websockets/pipes',
            },
            {
              text: 'Guards',
              link: '/websockets/guards',
            },
            {
              text: 'Interceptors',
              link: '/websockets/interceptors',
            },
            {
              text: 'Adapters',
              link: '/websockets/adapter',
            },
          ],
        },
        {
          text: 'STANDALONR APPS',
          link: '/standalone-applications',
        },
        {
          text: 'OPENAPI',
          collapsed: true,
          items: [
            {
              text: 'Introduction',
              link: '/openapi/introduction',
            },
            {
              text: 'Types and parameters',
              link: '/openapi/types-and-parameters',
            },
            {
              text: 'Operations',
              link: '/openapi/operations',
            },
            {
              text: 'Security',
              link: '/openapi/security',
            },
            {
              text: 'Mapped types',
              link: '/openapi/mapped-types',
            },
            {
              text: 'Decorators',
              link: '/openapi/decorators',
            },
            {
              text: 'CLI Plugin',
              link: '/openapi/cli-plugin',
            },
            {
              text: 'Other features',
              link: '/openapi/other-features',
            },
            {
              text: 'Migration guide',
              link: '/openapi/migration-guide',
            },
          ],
        },
        {
          text: 'RECIPES',
          collapsed: true,
          items: [
            {
              text: 'REPL',
              link: 'recipes/repl',
            },
            {
              text: 'CRUD generator',
              link: 'recipes/crud-generator',
            },
            {
              text: 'SWC (fast compiler)',
              link: 'recipes/swc',
            },
            {
              text: 'Passport (auth)',
              link: 'recipes/passport',
            },
            {
              text: 'Hot Reload',
              link: 'recipes/hot-reload',
            },
          ],
        },
        {
          text: 'FAQ',
          collapsed: true,
          items: [
            {
              text: 'Serverless',
              link: '/faq/serverless',
            },
            {
              text: 'HTTP adapter',
              link: '/faq/http-adapter',
            },
            {
              text: 'Keep alive connections',
              link: '/faq/keep-alive-connections',
            },
            {
              text: 'Global prefix',
              link: '/faq/global-prefix',
            },
            {
              text: 'Raw body',
              link: '/faq/raw-body',
            },
            {
              text: 'Hybrid application',
              link: '/faq/hybrid-application',
            },
            {
              text: 'HTTPS',
              link: '/faq/multiple-servers',
            },
            {
              text: 'Request lifecycle',
              link: '/faq/request-lifecycle',
            },
            {
              text: 'Common errors',
              link: '/faq/common-errors',
            },
            {
              text: 'Examples',
              link: 'https://github.com/nestjs/nest/tree/master/sample',
            },
          ],
        },
        {
          text: 'DEVTOOLS',
          collapsed: true,
          items: [
            {
              text: 'Overview',
              link: '/devtools/overview',
            },
            {
              text: 'CI/CD integration',
              link: '/devtools/ci-cd-integration',
            },
          ],
        },
      ],
    },
  },
});
