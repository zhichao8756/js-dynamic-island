# js-dynamic-island
![U59dIv.png](https://m1.im5i.com/2022/12/07/U59dIv.png)
## Description
A message prompt interaction effect, inspired by the excellent IOS dynamic island animation interaction


### Live Demo
* [Demo](https://zhichao8756.github.io/deploy-demo/)

### Install

```bash
$ npm i js-dynamic-island
```
## Quick Start
```javascript
import { BubbleMessage, FoldMessage, MessageBox, ProgressBox, Rate, Spinner, AddToCart } from 'js-dynamic-island'
import "../node_modules/js-dynamic-island/style.css";

// BubbleMessage
BubbleMessage({
  user: 'zack',
  message: 'ot take to heart every thing you hear. do not take to heart every thing you hear. do not spend all; Whenever you find your wrongdoing',
  avatar: 'https://joeschmoe.io/api/v1/random',
  type: 'success'
})

// FoldMessage
FoldMessage({
  message: 'ot take to heart every thing you hear. do not take to heart every thing you hear. do not spend all; Whenever you find your wrongdoing',
  type: 'success'
})

// MessageBox
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

// ProgressBox
ProgressBox({
  loadingTime: 3000
}).then(() => {
  // done
  console.log('done')
})

// Rate
Rate({
  title: 'like me~'
})

// Spinner loading
Spinner.show('loading...')
// ...javascript code
// loading finish
Spinner.done()

// add to cart
AddToCart({
  beforeTitle: 'adding...',
  afterTitle: 'finish'
})
```
## API Docs
### BubbleMessage


| Attribute | Description     | type   | Accepted Values | default                            |
|-----------|-----------------|--------|-----------------|------------------------------------|
| user      | username        | String | -               | -                                  |
| message   | message content | String | -               | success                            |
| avatar    | user avatar     | String | -               | https://joeschmoe.io/api/v1/random |
| type      | message type    | String | success/error   | -                                  |

### FoldMessage


| Attribute | Description     | type   | Accepted Values | default |
|-----------|-----------------|--------|-----------------|---------|
| message   | message content | String | -               | -       |
| type      | message type    | String | success/error   | -       |

### MessageBox

    promise callback is supported

| Attribute | Description     | type   | Accepted Values | default |
|-----------|-----------------|--------|-----------------|---------|
| title     | title           | String | -               | -       |
| content   | message content | String | -               | -       |

### ProgressBox

     promise callback is supported

| Attribute   | Description  | type   | Accepted Values | default  |
|-------------|--------------|--------|-----------------|----------|
| loadingTime | loading time | Number | -               | 5500(ms) |

### Rate

| Attribute | Description | type   | Accepted Values | default |
|-----------|-------------|--------|-----------------|---------|
| title     | title       | String | -               | -       |

### Spinner
| Attribute | Description  | type   | Accepted Values | default |
|-----------|--------------|--------|-----------------|---------|
| title     | loading text | String | -               | -       |
    Spinner methods
| Attribute | Description           |
|-----------|-----------------------|
| show      | show spinner loading  |
| done      | close spinner loading |

### AddToCart

| Attribute   | Description    | type   | Accepted Values | default |
|-------------|----------------|--------|-----------------|---------|
| beforeTitle | title          | String | -               | -       |
| afterTitle  | complete title | String | -               | -       |

## License

js-dynamic-island is open source software licensed as MIT.