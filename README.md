# wheel 一个 Vue UI 组件
[![Build Status](https://www.travis-ci.org/TsaiJie/tsaiwheel-vue.svg?branch=master)](https://www.travis-ci.org/TsaiJie/tsaiwheel-vue) 
## 介绍
这是在学习vue的过程中 制作的一个ui框架
## 开始使用
1. 添加css样式
使用本框架前需要开启border-box
```css
* ， *::before, *::after{
    box-sizing: border-box;
}
```
你还需要设置默认颜色等变量（后续会使用SCSS）
```css
:root {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #999;
    --border-color: #999;
    --border-color-hover: #666;
}
````
2. 安装wheel
```bash
npm i --save tsaiwheel-vue
```
3. 引入wheel
```js
import { Button } from 'tsaiwheel-vue'
import 'tsaiwheel-vue/dist/index.css'
export default {
  name: 'App',
  components: {
    't-button': Button
  }
}
```
4. 引入svg symbols 已经手动引入了
```html
<script src="//at.alicdn.com/t/font_1900376_2wu5mcvtkj9.js"></script>
```

## 文档
## 提问
## 变更记录
## 联系方式
## 贡献代码
