import Vue from 'vue'

import Tabs from '../src/tabs/tabs'
import TabsHead from '../src/tabs/tabs-head'
import TabsBody from '../src/tabs/tabs-body'
import TabsItem from '../src/tabs/tabs-item'
import TabsPanel from '../src/tabs/tabs-panel'
Vue.component('t-tabs', Tabs)
Vue.component('t-tabs-head', TabsHead)
Vue.component('t-tabs-body', TabsBody)
Vue.component('t-tabs-item', TabsItem)
Vue.component('t-tabs-panel', TabsPanel)

Vue.config.productionTip = false
Vue.config.devtools = false

const expect = chai.expect

describe('Tabs', () => {

  it("存在", () => {
    expect(Tabs).to.exist
  })
  it('测试 selected 属性', (done)=>{
      const div = document.createElement('div')
        div.innerHTML = `
          <t-tabs selected="finance">
        <t-tabs-head >
          <template slot="actions">
            <button>设置</button>
          </template>
          <t-tabs-item name="woman">
            美女
          </t-tabs-item>
          <t-tabs-item name="finance">
            财经
          </t-tabs-item>
          <t-tabs-item name="sports">
            体育
          </t-tabs-item>
        </t-tabs-head>
        <t-tabs-body>
          <t-tabs-panel name="woman">美女相关咨询</t-tabs-panel>
          <t-tabs-panel name="finance">财经相关咨询</t-tabs-panel>
          <t-tabs-panel name="sports">体育相关咨询</t-tabs-panel>
        </t-tabs-body>
      </t-tabs>
      `
    let vm = new Vue({
      el: div
    })
    vm.$nextTick(()=>{
      let active = vm.$el.querySelector('.tabs-item:nth-child(2)');
      expect(active.classList.contains('active')).to.be.true
      done()
    })

  })
  it('可以接收 direction prop', () => {

  });
})
