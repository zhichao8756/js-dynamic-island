import { createApp } from 'vue'
import BubbleMessage from './components/BubbleMessage.vue'
import { ref } from 'vue'
function bubbleMessage({ title, message, avatar, type }) {
  // 实例化组件，createApp第二个参数是props
  const bubbleMessageInstance = createApp(BubbleMessage, {
    user: title || '',
    message: message || '',
    type: type || 'success',
    avatar: avatar || 'https://joeschmoe.io/api/v1/random'
    /* onConfirm: () => {
          unmount()
          resolve()
        },
        onCancel: () => {
          unmount()
          reject(new Error())
        }*/
  })
  /*  bubbleMessageInstance.success = () => {
    BubbleMessage.showIsland()
  }*/
  // 卸载组件
  window.setTimeout(() => {
    unmount()
  }, 8000)
  const unmount = () => {
    bubbleMessageInstance.unmount()
    // document.body.removeChild(parentNode)
  }
  // 创建一个挂载容器
  const parentNode = document.createElement('div')
  document.body.appendChild(parentNode)
  // 挂载组件
  bubbleMessageInstance.mount(parentNode)
}
export default bubbleMessage
