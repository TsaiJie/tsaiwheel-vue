import Row from '../src/row'
import Col from '../src/col'
import Vue from 'vue'
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it("存在", () => {
    expect(Row).to.exist
  })
  it('接收 gutter 属性', (done) => {
    //如果测试里面有异步任务的需要进行done，在异步任务完成后进行调用，dom元素的挂载是异步的。
    Vue.component('t-row', Row)
    Vue.component('t-col', Col)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <t-row gutter="20">
        <t-col span="12"></t-col>
        <t-col span="12"></t-col>
      </t-row> 
    `
    const vm = new Vue({
      el: div
    })
    setTimeout(()=>{
      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
      done()
      vm.$el.remove()
      vm.$destroy()
    })
  })
  it('接收 algin 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Row)
    const vm = new Constructor({
      propsData: {
        algin: 'center'
      }
    }).$mount(div)
    const element = vm.$el
    expect(getComputedStyle(element).justifyContent).to.equal('center')
    div.remove()
    vm.$destroy()

  })
})
