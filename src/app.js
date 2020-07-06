import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
Vue.component('t-button', Button)
Vue.component('t-icon', Icon)
Vue.component('t-button-group', ButtonGroup)
Vue.component('t-input', Input)
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
