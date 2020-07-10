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

new Vue({
  el: '#app',
  data:{
    loading1: false,
    message: "1111"
  },
  methods:{
    inputChange(e){
      console.log(e.target.value)
    }
  }
})
