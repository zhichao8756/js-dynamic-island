import { createApp } from 'vue'
import FoldMessage from './index.vue'
function foldMessage({ title, message, avatar, type }) {
  // 实例化组件，createApp第二个参数是props
  const foldMessageInstance = createApp(FoldMessage, {
    message: message || '',
    type: type || 'success'
  })
  // 卸载组件
  window.setTimeout(() => {
    unmount()
  }, 4000)
  const unmount = () => {
    foldMessageInstance.unmount()
    document.body.removeChild(parentNode)
  }
  // 创建一个挂载容器
  const parentNode = document.createElement('div')
  document.body.appendChild(parentNode)
  // 挂载组件
  foldMessageInstance.mount(parentNode)
}
export default foldMessage
