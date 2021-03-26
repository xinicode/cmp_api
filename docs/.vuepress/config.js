module.exports = {
  title: 'CMP前端API文档',  
  description: '',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], 
  ],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav: [
      { text: '网站', link: 'http://10.202.34.147/?cmproot=bsip&_tocmp=1e' },
      { text: 'iview', link: 'https://docs.bingosoft.net/bingo/components/#/adminpro/introduce' },
    ],
    sidebar: {
    
    }
  },
}