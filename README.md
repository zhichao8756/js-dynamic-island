# js-dynamic-island

本仓库是消息提示交互动效,灵感来源于出色的IOS dynamic island的动画交互
<img src="src/assets/exp.gif">
## Install

```bash
$ npm i js-dynamic-island
```
## Quick Start
```javascript
import { BubbleMessage, FoldMessage, MessageBox } from 'js-dynamic-island'
import "../node_modules/js-dynamic-island/style.css";

BubbleMessage({
    user: 'zack',
    message: 'ot take to heart every thing you hear. do not take to heart every thing you hear. do not spend all; Whenever you find your wrongdoing',
    avatar: 'https://joeschmoe.io/api/v1/random',
    type: 'success'
})
FoldMessage({
    message: 'ot take to heart every thing you hear. do not take to heart every thing you hear. do not spend all; Whenever you find your wrongdoing',
    type: 'success'
})
MessageBox({
    title: 'This is a title',
    content: 'ot take to heart every thing you hear. do not take to heart every thing you hear. do not spend all; Whenever you find your wrongdoing'
}).then(() => {
    console.log('confirm')
}).catch(() => {
    console.log('cancel')
})
```
## License

js-dynamic-island is open source software licensed as MIT.