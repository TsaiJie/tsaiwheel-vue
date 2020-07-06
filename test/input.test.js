const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false
// describe 和 it  是mocha提供的
// sinon-chai 提供fake
describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.be.exist
  })
  describe('props', ()=>{
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(()=>{
      vm.$destroy()
    })
    it('接收value', ()=>{
      vm = new Constructor({
        propsData: {
          value: '1234'
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.value).to.equal('1234')
    })
    it('接收disabled', ()=>{
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.disabled).to.equal(true)
    })
    it('接收readonly', ()=>{
      vm = new Constructor({
        propsData: {
          readOnly: true
        }
      }).$mount()
      const inputElement = vm.$el.querySelector('input')
      expect(inputElement.readOnly).to.equal(true)
    })
    it('接收error', ()=>{
      vm = new Constructor({
        propsData: {
          error: "hhh"
        }
      }).$mount()
      const useElement = vm.$el.querySelector('use')
      expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
      const errorMessage = vm.$el.querySelector('.error-message')
      expect(errorMessage.innerText).to.equal("hhh")
    })
  })

  describe('事件', ()=>{
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(()=>{
      vm.$destroy()
    })
    it('支持 change/input/focus/blur 事件',  () => {
      ['change', 'input', 'focus', 'blur'].forEach(EventName=>{
        vm = new Constructor().$mount()
        const callback = sinon.fake()
        vm.$on(EventName, callback)
        // 触发input change事件
        let event = new Event(EventName)
        let inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith(event)
      })

    });
  })

})
