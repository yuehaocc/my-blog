module.exports = {
  title: '浩',
  description: '东隅已逝，桑榆非晚',
  base: '/my-blog/',
  dest: './dist',
  themeConfig: {
    lastUpdated: '最后更新时间',
    repo: 'https://github.com/yuehaocc/my-blog',
    repoLabel: 'Github',
    sidebar: 'auto',
    head: [
      [
        'link',
        { rel: 'shortcut icon', type: 'image/x-icon', href: '/my-blog/favicon.ico' },
      ]
    ],
    nav: [
      {
        text: '前端面试',
        link: '/interview/',
      },
      {
        text: '前端基础',
        link: '/base/',
        items: [
          { text: 'html', link: '/base/html/' },
          { text: 'css', link: '/base/css/' },
          { text: 'js', link: '/base/js/' }
        ]
      },
      {
        text: 'React',
        link: '/react/',
      },
      {
        text: '英语',
        link: '/english/',
      },
    ],
    // sidebar: {
    //   ...vueSidebar,
    // },
  },
}