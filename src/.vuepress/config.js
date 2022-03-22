module.exports = {
  title: 'CuttingMat',
  description: '面向大中型项目的开发脚手架，助你的Vue项目一臂之力',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  head: [
    ['meta', { name: 'keywords', content: 'CuttingMat,Vue框架,Vue模板,前端模板,Vue项目模板' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    [
      'link',
      {
        rel: 'icon',
        href: '/logo.png'
      }
    ],
    ["script",
      {
        src: "/assets/js/baidu.js"
      }
    ]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      {
        text: '首页',
        link: '/'
      }, {
        text: '指南',
        link: '/guide/about'
      }, {
        text: '功能',
        link: '/function/core/'
      }, {
        text: '演示',
        link: 'http://cutting-mat.refined-x.com/template-element-ui/'
      }, {
        text: '插件',
        items: [{
          text: '@cutting-mat/axios',
          link: 'http://cutting-mat.refined-x.com/axios/',
          target: '_blank'
        }, {
          text: '@cutting-mat/vue-store',
          link: 'http://cutting-mat.refined-x.com/vue-store/',
          target: '_blank'
        }, {
          text: '@cutting-mat/uploader',
          link: 'http://cutting-mat.refined-x.com/el-upload/',
          target: '_blank'
        }, {
          text: '@cutting-mat/animater',
          link: 'http://cutting-mat.refined-x.com/animater/',
          target: '_blank'
        }]
      }],
    repo: 'cutting-mat',
    editLinks: false,
    sidebarDepth: 2,
    sidebar: {
      collapsable: false,
      '/guide/': [
        {
          title: '介绍',
          collapsable: false,
          children: [
            '/guide/about',                   // 介绍
            '/guide/getting-started',         // 快速开始
            '/guide/community',              // 社区
          ]
        },
        {
          title: '指南',
          collapsable: false,
          children: [
            '/guide/intro-catalogue',         // 目录结构
            '/guide/intro-routes',            // 路由结构
            '/guide/intro-code',               // 代码组织
            '/guide/icon',   // 字体图标
            '/guide/guide-config',             // vue-cli 配置、babel 兼容性配置、eslint 代码检查配置、vue 全局功能配置、多环境配置
            '/guide/appointment-dev',          // 开发约定
          ]
        },
      ],
      '/function/': [
        {
          title: '核心能力',
          collapsable: false,
          children: [
            '/function/core',
          ]
        },
        {
          title: '核心插件',
          collapsable: false,
          children: [
            '/function/plugin',
          ]
        },
        {
          title: '内置组件',
          collapsable: false,
          children: [
            '/function/component',
          ]
        },
        {
          title: '功能封装',
          collapsable: false,
          children: [
            '/function/solution',
          ]
        },

      ]
    },
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/active-header-links',
    [
      'vuepress-plugin-container',
      {
        type: 'info',
        before: info =>
          `<div class="custom-block info"><p class="custom-block-title">${info}</p>`,
        after: '</div>'
      }
    ],
    ['sitemap', {
      hostname: "https://cutting-mat.refined-x.com",
      // 排除无实际内容的页面
      exclude: ["/404.html"]
    }
    ]
  ],
  markdown: {
    lineNumbers: true,
    /** @param {import('markdown-it')} md */
    extendMarkdown: md => {
      md.options.highlight = require('./markdown/highlight')(
        md.options.highlight
      )
    }
  },
  dest: 'docs'
}
