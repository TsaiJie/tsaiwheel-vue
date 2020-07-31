module.exports = {
  base: '/tsaiwheel-vue/',
  title: 'Wheel UI',
  description: '一个简单的UI框架',
  themeConfig: {
    sidebar: [
      {
        title: '入门',
        children: ['/install/', '/get-start/'],
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/input',
          '/components/tabs',
          '/components/grid',
          '/components/layout',
          '/components/popover',
          '/components/toast',
        ],
      },
    ],
  },
};
