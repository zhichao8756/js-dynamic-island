import BubbleMessage from './BubbleMessage/BubbleMessage.js'
import FoldMessage from './FoldMessage/FoldMessage.js'
import MessageBox from './MessageBox/MessageBox.js'

// 按需引入
export { BubbleMessage, FoldMessage, MessageBox }

/* const component = [BubbleMessage, FoldMessage]

const DynamicIsland = {
  install(App) {
    component.forEach((item) => {
      App.component(item.name, BubbleMessage)
    })
  }
}

export default DynamicIsland*/
