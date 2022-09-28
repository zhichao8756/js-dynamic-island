import { createApp } from 'vue'
import MessageBox from './index.vue'
function messageBox({ title, content }) {
  return new Promise((resolve, reject) => {
    const callback = ret => {
      if (ret === true) {
        unmount()
        resolve()
      } else if (ret === false) {
        unmount()
        reject()
      }
    }
    const confirmInstance = createApp(MessageBox, {
      title: title || '',
      content: content || '',
      callback: callback
    })
    // unmount component
    const unmount = () => {
      confirmInstance.unmount()
      document.body.removeChild(parentNode)
    }
    // create dom container
    const parentNode = document.createElement('div')
    document.body.appendChild(parentNode)
    // mount component
    confirmInstance.mount(parentNode)
  })
}

export default messageBox
