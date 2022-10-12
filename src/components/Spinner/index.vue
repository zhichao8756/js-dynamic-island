<template>
  <div class="location">
    <div ref="spin_container" class="spin-container" v-if="visible">
      <div class="rate-text">
        <p class="title">{{ title }}</p>
      </div>
      <svg class="pl" viewBox="0 0 64 64" width="64px" height="64px" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#000" />
            <stop offset="100%" stop-color="#fff" />
          </linearGradient>
          <mask id="grad-mask">
            <rect x="0" y="0" width="64" height="64" fill="url(#grad)" />
          </mask>
        </defs>
        <circle class="pl__ring"
                cx="32"
                cy="32"
                r="26"
                fill="none"
                stroke="hsl(0,2%,47%)"
                stroke-width="12"
                stroke-dasharray="169.65 169.65"
                stroke-dashoffset="-127.24"
                stroke-linecap="round"
                transform="rotate(135)" />
        <g fill="hsl(0,2%,47%)">
          <circle class="pl__ball1" cx="32" cy="45" r="6" transform="rotate(14)" />
          <circle class="pl__ball2" cx="32" cy="48" r="3" transform="rotate(-21)" />
        </g>
        <g mask="url(#grad-mask)">
          <circle class="pl__ring"
                  cx="32"
                  cy="32"
                  r="26"
                  fill="none"
                  stroke="hsl(0,0%,100%)"
                  stroke-width="12"
                  stroke-dasharray="169.65 169.65"
                  stroke-dashoffset="-127.24"
                  stroke-linecap="round"
                  transform="rotate(135)" />
          <g fill="hsl(0,0%,100%)">
            <circle class="pl__ball1" cx="32" cy="45" r="6" transform="rotate(14)" />
            <circle class="pl__ball2" cx="32" cy="48" r="3" transform="rotate(-21)" />
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpinnerBall'
}
</script>
<script setup>
import { nextTick, onMounted, ref, defineExpose } from 'vue'
import anime from 'animejs/lib/anime.es.js'
import utils from '../../utils/utils.js'

const visible = ref(true)
const spin_container = ref()
const props = defineProps({
  title: String,
  callback: Function
})

const show = (options) => {
  showIsland()
}

const done = (options) => {
  return new Promise(async(resolve, reject) => {
    await beforeLeave()
    visible.value = false
    resolve()
  })
}
async function showIsland() {
  visible.value = true
  const spin = document.getElementsByClassName('spin-container')[0]
  const text = document.getElementsByClassName('rate-text')[0]
  spin.classList.add('animateScale')
  text.classList.add('animateText')
}
function beforeLeave() {
  return new Promise((resolve, reject) => {
    anime({
      targets: spin_container.value,
      scaleY: [
        { value: 0.2, duration: 200 }
      ],
      scaleX: [
        { value: 0, duration: 150, delay: 250, easing: 'linear' }
      ],
      easing: 'linear',
      duration: 300,
      complete: function() {
        resolve()
        props.callback && props.callback('done')
      }
    })
  })
}
defineExpose({
  show,
  done
})
</script>
<style lang="scss" scoped>
@keyframes scaleIn {
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
.animateScale {
  animation: scaleIn 700ms ease-out	;
}
@keyframes messageFilter {
  0% {
    transform: scale(0);
    transform: translateY(-20px);
    filter: blur(10px);
  }
  100% {
    transform: scale(1);
  }
}
.animateText {
  animation: messageFilter 800ms linear;

}
.spin-container {
  background: #1a1a1a;
  width: 200px;
  min-height: 50px;
  border-radius: 24px;
  padding: 16px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 45%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.title {
  color: #ffffff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
}
:root {
  --hue: 223;
  --bg: hsl(var(--hue),10%,90%);
  --fg: hsl(var(--hue),10%,10%);
  --trans-dur: 0.3s;
  font-size: calc(16px + (24 - 16) * (100vw - 320px) / (1280 - 320));
}
body {
  background: var(--bg);
  color: var(--fg);
  font: 1em/1.5 sans-serif;
  height: 100vh;
  display: grid;
  place-items: center;
  transition:
      background-color var(--trans-dur),
      color var(--trans-dur);
}

.pl {
  display: block;
  width: 6em;
  height: 6em;
}
.pl__ring,
.pl__ball1,
.pl__ball2 {
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  transform-origin: 32px 32px;
}
.pl__ring {
  animation-name: ring;
}
.pl__ball1 {
  animation-name: ball1;
}
.pl__ball2 {
  animation-name: ball2;
}

/* Dark theme  */
@media (prefers-color-scheme: dark) {
  :root {
    --bg: hsl(var(--hue),10%,10%);
    --fg: hsl(var(--hue),10%,90%);
  }
}

/* Animation */
@keyframes ring {
  from {
    animation-timing-function: ease-in-out;
    stroke-dashoffset: -122.52;
    transform: rotate(135deg);
  }
  15% {
    animation-timing-function: ease-in;
    stroke-dashoffset: -122.52;
    transform: rotate(90deg);
  }
  35% {
    animation-timing-function: ease-out;
    stroke-dashoffset: -65.34;
    transform: rotate(297.5deg);
  }
  55% {
    animation-timing-function: ease-in-out;
    stroke-dashoffset: -122.52;
    transform: rotate(505deg);
  }
  70% {
    animation-timing-function: ease-in-out;
    stroke-dashoffset: -122.52;
    transform: rotate(490deg);
  }
  85%,
  to {
    stroke-dashoffset: -122.52;
    transform: rotate(497.5deg);
  }
}
@keyframes ball1 {
  from {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-7deg);
  }
  60% {
    transform: rotate(399deg);
  }
  75% {
    transform: rotate(361deg);
  }
  90%,
  to {
    transform: rotate(374deg);
  }
}
@keyframes ball2 {
  from {
    transform: rotate(-21deg);
  }
  25% {
    transform: rotate(-47deg);
  }
  60% {
    transform: rotate(364deg);
  }
  75% {
    transform: rotate(326deg);
  }
  90%,
  to {
    transform: rotate(339deg);
  }
}
</style>
