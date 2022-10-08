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
    // confirm
    console.log('confirm')
}).catch(() => {
    // cancel
    console.log('cancel')
})
ProgressBox({
    loadingTime: 3000
}).then(() => {
    // done
    console.log('done')
})
```
## API Docs
### BubbleMessage


| 参数      | 说明   | 类型     | 可选值  | 默认值                                |
|---------|------|--------|------------|------------------------------------|
| user    | 用户名  | String | -          | -                                  |
| message | 提示内容 | String | -          | success                            |
| avatar  | 用户头像 | String | -          | https://joeschmoe.io/api/v1/random |
| type    | 提示类型 | String | success/error | -                                  |

### FoldMessage


| 参数      | 说明   | 类型     | 可选值           | 默认值 |
|---------|------|--------|---------------|-----|
| message | 提示内容 | String | -             | - |
| type    | 提示类型 | String | success/error | -|

### MessageBox

    支持promise异步回调

| 参数      | 说明   | 类型     | 可选值 | 默认值 |
|---------|------|--------|-----|----|
| title   | 提示标题 | String | -   | -  |
| content | 提示内容 | String | -   |-|

### ProgressBox

    支持promise异步回调

| 参数          | 说明   | 类型     | 可选值 | 默认值      |
|-------------|------|--------|-----|----------|
| loadingTime | 加载时间 | Number | -   | 5500(ms) |
## License

js-dynamic-island is open source software licensed as MIT.