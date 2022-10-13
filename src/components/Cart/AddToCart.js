import { createApp } from 'vue'
import ToCart from './index.vue'
function addToCart({ beforeTitle, afterTitle }) {
  return new Promise((resolve, reject) => {
    const callback = ret => {
      if (ret === 'done') {
        unmount()
        resolve()
      }
    }
    // 实例化组件，createApp第二个参数是props
    const cartInstance = createApp(ToCart, {
      beforeTitle: beforeTitle || '',
      afterTitle: afterTitle || '',
      callback: callback
    })
    // 卸载组件
    const unmount = () => {
      cartInstance.unmount()
      document.body.removeChild(parentNode)
    }
    // 创建一个挂载容器
    const parentNode = document.createElement('div')
    document.body.appendChild(parentNode)
    // 挂载组件
    cartInstance.mount(parentNode)
  })
}
export default addToCart
