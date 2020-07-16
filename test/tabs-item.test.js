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

describe('Tabs-item', () => {

  it("存在", () => {
    expect(TabsItem).to.exist
  })
  it('接受 name 属性', () => {

  });

})
