import { createApp } from 'vue'
import ProgressBox from './index.vue'
function progressBox({ loadingTime }) {
  return new Promise((resolve, reject) => {
    const callback = ret => {
      if (ret === 'done') {
        unmount()
        resolve()
      }
    }
    // 实例化组件，createApp第二个参数是props
    const progressBoxInstance = createApp(ProgressBox, {
      loadingTime: loadingTime || 5500,
      callback: callback
    })
    // 卸载组件
    const unmount = () => {
      progressBoxInstance.unmount()
      document.body.removeChild(parentNode)
    }
    // 创建一个挂载容器
    const parentNode = document.createElement('div')
    document.body.appendChild(parentNode)
    // 挂载组件
    progressBoxInstance.mount(parentNode)
  })
}
export default progressBox
