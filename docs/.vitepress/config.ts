import { defineConfig } from 'vitepress'
// @vitepress-demo-preview/plugin: 支持区块内的方式展示 demo 和示例代码
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
import { fileURLToPath, URL } from 'node:url'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Winter Admin UI',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: 'favicon.svg' }]],
  description: '基于 vite vue3 element-plus 组件库',
  lang: 'cn-ZH',
  base: '/',
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guild/index' },
      { text: '组件', link: '/components/button' }
    ],
    sidebar: [
      {
        text: '引入',
        items: [
          {
            text: '介绍',
            link: '/guild/index'
          },
          {
            text: '快速开始',
            link: '/guild/quickstart'
          }
        ]
      },
      {
        text: '基础',
        items: [
          { text: '按钮 Button', link: '/components/button' },
          { text: '布局容器 Container', link: '/components/container' },
          { text: '图标 Icon', link: 'components/icon' },
          { text: '链接 Link', link: '/components/link' },
          { text: '折叠面板 Collapse', link: '/components/collapse' }
        ]
      },
      {
        text: '反馈',
        items: [
          { text: '反馈 Alert', link: '/components/alert' },
          { text: '消息提示 Message', link: '/components/message' },
          { text: '消息弹出框 MessageBox', link: '/components/messagebox' },
          { text: '文字提示 Tooltip', link: '/components/tooltip' },
          { text: '下拉菜单 Dropdown', link: '/components/dropdown' }
        ]
      },
      {
        text: '数据输入',
        items: [
          { text: '开关 Switch', link: 'components/switch' },
          { text: '评分 Rate', link: 'components/rate' },
          { text: '输入框 Input', link: 'components/input' },
          { text: '选择框 Select', link: 'components/select' },
          { text: '表单 Form', link: '/components/form' }
          // { text: '日期选择器 DatePicker', link: 'components/datepicker' }
        ]
      }
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/Winter/Winter-Admin-UI' }],
    logo: '/logo.png'
  },
  markdown: {
    // @vitepress-demo-preview的配置
    // theme: {
    //   light: 'vitesse-light',
    //   dark: 'vitesse-dark'
    // },
    // lineNumbers: true,
    config(md) {
      // 支持区块内的方式展示 demo 和示例代码
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  base: '/Winter-Admin-UI/'
})
