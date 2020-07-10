import Toast from '../toast/toast'

let currentToast
export default {
  install(Vue, options) {
    Vue.prototype.$toast = function (message, toastOptions) {
      if(currentToast) {
        currentToast.close()

      }
      currentToast = createToast({
        Vue,
        message,
        propsData: toastOptions,
        OnClose(){
          currentToast = null
        }
      })
    }
  }
}


// helper
function createToast({Vue, message, propsData, OnClose}) {
  // 把Toast转换为构造函数
  let Constructor = Vue.extend(Toast)
  // 创建Toast组件
  let toast = new Constructor({propsData: propsData})
  // 给插槽添加默认内容
  toast.$slots.default = [message]
  // 组件进行挂载
  toast.$mount()
  toast.$on('close',OnClose)
  // 把组件添加到dom中
  document.body.appendChild(toast.$el)
  return toast
}
