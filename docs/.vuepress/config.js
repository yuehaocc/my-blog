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
        text: '前端基础',
        link: '/base/',
        items: [
          { text: 'JavaScript', link: '/base/js/' },
          { text: 'ES6', link: '/base/es6/' },
          { text: 'HTML', link: '/base/html/' },
          { text: 'CSS', link: '/base/html/' },
        ]
      },
      {
        text: '前端面试',
        link: '/interview/',
        items: [
          { text: '手写题', link: '/interview/handwriting/' },
          { text: '算法', link: '/interview/algorithm/' },
          // { text: 'JS', link: '/interview/JS/' }
        ]
      },
      {
        text: 'React',
        link: '/react/',
      },
      {
        text: 'TypeScript',
        link: '/ts/',
        items: [
          { text: 'TypeScript入门', link: '/ts/base/' },
          { text: 'TypeScript深入', link: '/ts/advance/' },
          { text: 'TypeScript实践问题', link: '/ts/apply/' },
        ]
      },
      {
        text: '问题记录',
        link: '/problems/',
      },
      {
        text: '其他',
        link: '/else/',
        items: [
          { text: '职业素养', link: '/else/quality/' },
          { text: '工作平台', link: '/else/platform/' },
          { text: '英语', link: '/else/english/' },
        ]
      },
    ],
    // sidebar: {
    //   ...vueSidebar,
    // },
  },
}