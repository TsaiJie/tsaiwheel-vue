import Row from '../src/row'
import Col from '../src/col'
import Vue from 'vue'
const expect = chai.expect
Vue.config.productionTip = false
Vue.config.devtools = false

describe('col', () => {
  it("存在", () => {
    expect(Col).to.exist
  })
  it('接收 span 属性', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Col)
    const vm = new Constructor({
      propsData: {
        span: 1,
        offset:1,
        pc: {span:1, offset: 2},
        ipad: {span: 1, offset:2},
        narrowPc: {span: 1, offset:2},
        widePc: {span: 1, offset:2}
      }
    }).$mount(div)
    const element = vm.$el
    expect(element.classList.contains('col-1')).to.eq(true)
    expect(element.classList.contains('offset-1')).to.eq(true)
    expect(element.classList.contains('col-pc-1')).to.eq(true)
    expect(element.classList.contains('offset-pc-2')).to.eq(true)
    expect(element.classList.contains('col-ipad-1')).to.eq(true)
    expect(element.classList.contains('offset-ipad-2')).to.eq(true)
    expect(element.classList.contains('col-narrow-pc-1')).to.eq(true)
    expect(element.classList.contains('offset-narrow-pc-2')).to.eq(true)
    expect(element.classList.contains('col-wide-pc-1')).to.eq(true)
    expect(element.classList.contains('offset-wide-pc-2')).to.eq(true)
    div.remove()
    vm.$destroy()
  });
})
