import Vue from 'vue'
import Toast from '../src/toast/toast'

const expect = chai.expect

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {

  it("存在", () => {
    expect(Toast).to.exist
  })
  describe('props', function () {
    it('接收autoClose', (done) => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: 1,
        }
      }).$mount(div)
      vm.$on('close', ()=>{
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      })
    });
    it('接收 closeButton', (done) => {
      let callback = sinon.fake()
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: "关闭吧",
            callback
          }
        }
      }).$mount()
      let closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim()).to.eq('关闭吧')
      // 模拟用户点击 必须异步操作 如果不异步 还没有更新高度就被关掉了 会出现报错 style undefined的
      setTimeout(()=>{

        closeButton.click()
        expect(callback).to.have.been.called
        done()
      },200)

    });
    it('接收 enableHtml',  () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {enableHtml: true}
      })
      vm.$slots.default = ['<strong id="test">hi</strong>']
      vm.$mount()
      let strong = vm.$el.querySelector('#test')
      expect(strong).to.exist
    });
    it('接收 position',  () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {position: 'bottom'}
      })
      vm.$slots.default = ['<strong id="test">hi</strong>']
      vm.$mount()
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    });
  })
})
