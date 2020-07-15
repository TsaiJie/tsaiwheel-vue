import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout/layout'
import Header from './layout/header'
import Content from './layout/content'
import Footer from './layout/footer'
import Sider from './layout/sider'
import plugin from './plugin/plugin'

import Tabs from './tabs/tabs'
import TabsHead from './tabs/tabs-head'
import TabsBody from './tabs/tabs-body'
import TabsItem from './tabs/tabs-item'
import TabsPanel from './tabs/tabs-panel'


Vue.component('t-button', Button)
Vue.component('t-icon', Icon)
Vue.component('t-button-group', ButtonGroup)
Vue.component('t-input', Input)
Vue.component('t-row', Row)
Vue.component('t-col', Col)
Vue.component('t-layout', Layout)
Vue.component('t-header', Header)
Vue.component('t-content', Content)
Vue.component('t-footer', Footer)
Vue.component('t-sider', Sider)

Vue.component('t-tabs', Tabs)
Vue.component('t-tabs-head', TabsHead)
Vue.component('t-tabs-body', TabsBody)
Vue.component('t-tabs-item', TabsItem)
Vue.component('t-tabs-panel', TabsPanel)


// 如何实现this.$toast(message)
// 首先创建vue组件
// 然后创建相应的plugin vue和plugin关联起来
// use方法会默认调用 plugin的install(Vue, options)方法 进行注册使用
Vue.use(plugin)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    message: "1111"
  },
  methods: {
    inputChange(e) {
      console.log(e.target.value)
    },
    showToast1(){
      this.showToast('top')
    },
    showToast2(){
       this.showToast('middle')
    },
    showToast3(){
      this.showToast('bottom')
    },
    showToast(position) {
      this.$toast("toast", {
        closeButton: {
          text: '知道了',
          callback() {
            console.log("用户说他知道了");
          }
        },
        position: position,
        autoClose: 1
      })
    }
  }
})
