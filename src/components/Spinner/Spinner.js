import { createApp } from 'vue'
import SpinnerBall from './index.vue'
function Spinner() {
  this.spinner = null
  this.spinnerInstance = null
  this.parentNode = null
  this.init = function(title) {
    this.spinnerInstance = createApp(SpinnerBall, {
      title: title
    })
    this.parentNode = document.createElement('div')
    this.spinner = this.spinnerInstance.mount(this.parentNode)
  }
  // 挂载组件
  this.show = function(title) {
    // 创建一个挂载容器
    this.init(title)
    document.body.appendChild(this.parentNode)
    this.spinner.show()
  }
  this.done = async function() {
    await this.spinner.done()
    this.spinnerInstance.unmount()
    document.body.removeChild(this.parentNode)
  }
}
const SpinnerInst = new Spinner()
// SpinnerInst.init()
export default SpinnerInst
