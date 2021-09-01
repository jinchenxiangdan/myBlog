// nav
module.exports = [
  // { text: '首页', link: '/' },
  {
    text: 'Notes',
    link: '/notes/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: 'Algorithm',
        items: [
          { text: 'Sorting', link: '/algorithm/sorting/' },
          { text: 'Searching', link: '/algorithm/searching/' },
          { text: 'Data Structure', link: '/algorithm/data-structure/' }
          // { text: 'Vue', link: '/pages/5d463fbdb172d43b/' },
        ],
      },
      {
        text: 'Study Notes',
        items: [
          { text: '《Statistic cookbook》', link: '/notes/javascript/' },
          { text: '《Java高级程序设计》', link: '/notes/js/' },
          { text: 'Git', link: '/notes/git/'}

        ],
      },
    ],
  },
  {
    text: 'Algorithm',
    items: [
      { text: 'Sorting', link: '/algorithm/sorting/' },
      { text: 'Searching', link: '/algorithm/searching/' },
      { text: 'Data Structure', link: '/algorithm/data-structure/' }
      // { text: 'Vue', link: '/pages/5d463fbdb172d43b/' },
    ]
  },
  {
    text: 'Data Science',
    link: '/data-science/',
    items: [
      { text: 'Linear Algebra', link: '/data-science/9a7ee40fc232253e/' },
      { text: 'Statistic', link: '/data-science/4c778760be26d8b3/' },
      { 
        text: 'Machine Learning', 
        link: '/data-science/machine-learning/',
        items: [
          { text: 'Linear Modelling', link: '/data-science/machine-learning/linear-regression/' },
          { text: 'Bayesian Approach to ML', link: '/data-science/machine-learning/linear-regression/' },
          { text: 'Classification', link: '/data-science/machine-learning/linear-regression/' },
          { text: 'Clustering', link: '/data-science/machine-learning/linear-regression/' },
          { text: 'Nerual Networks', link: '/data-science/machine-learning/linear-regression/' },
        ]
      },
    ],
  },
  // {
  //   text: '更多',
  //   link: '/more/',
  //   items: [
  //     { text: '学习', link: '/pages/f2a556/' },
  //     { text: '面试', link: '/pages/aea6571b7a8bae86/' },
  //     { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
  //     { text: '实用技巧', link: '/pages/baaa02/' },
  //     { text: '友情链接', link: '/friends/' },
  //   ],
  // },
  { text: 'About', link: '/about/' },
  // {
  //   text: '收藏',
  //   link: '/pages/beb6c0bd8a66cea6/',
  //   // items: [
  //   //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
  //   //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
  //   //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
  //   // ],
  // },
  {
    text: 'Index',
    link: '/archives/',
    items: [
      { text: 'Category', link: '/categories/' },
      { text: 'Tag', link: '/tags/' },
      { text: 'Archive', link: '/archives/' },
    ],
  },
]