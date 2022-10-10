import { createApp } from 'vue'
import RateBox from './index.vue'
function rate({ title }) {
  return new Promise((resolve, reject) => {
    const callback = ret => {
      if (ret === 'done') {
        unmount()
        resolve()
      }
    }
    // 实例化组件，createApp第二个参数是props
    const rateInstance = createApp(RateBox, {
      title: title || '',
      callback: callback
    })
    // 卸载组件
    const unmount = () => {
      rateInstance.unmount()
      document.body.removeChild(parentNode)
    }
    // 创建一个挂载容器
    const parentNode = document.createElement('div')
    document.body.appendChild(parentNode)
    // 挂载组件
    rateInstance.mount(parentNode)
  })
}
export default rate
