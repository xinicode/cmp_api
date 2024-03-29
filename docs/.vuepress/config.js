module.exports = {
  title: 'CMP前端API文档',
  description: 'API',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    // lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav: [
      { text: '网站', link: 'http://10.202.34.147/?cmproot=bsip&_tocmp=1e' },
      { text: 'iview', link: 'https://docs.bingosoft.net/bingo/components/#/adminpro/introduce' },
    ],
    sidebar: [
      {
        title: '指南',
        path: '/guide/api',
      },
      {
        title: 'UI规范',
        path: '/style/api',
      },
      {
        title: '代码规范',
        path: '/rules/api',
      },
      {
        title: '公共方法API',
        path: '/cmpHelper/api',
      },
      {
        title: '框架API',
        path: '/cmpCore/api',
      },
      {
        title: '业务相关API',
        path: '/cmpIaas/api',
      },
      {
        title: '基础组件',
        path: '/cmpIaas/component',
      },
      {
        title: '业务组件',
        path: '/cmpIaas/bussiness',
      },
      {
        title: '元数据设计器',
        path: '/cmpMetaUI/metaui',
      },
    ]
  }
}