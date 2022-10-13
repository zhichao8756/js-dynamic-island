<template>
  <div class="location">
    <button class="button cart-container" @click="start" ref="btn">
      <span ref="addBtn">{{ beforeTitle }}</span>
      <div class="cart">
        <svg viewBox="0 0 36 26">
          <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
          <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
        </svg>
      </div>
      <div class="complete-area" ref="completeArea">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.71 28.57">
          <path ref="tick1" class="tick-1" fill="none" stroke="#ffff" stroke-dasharray="52" stroke-dashoffset="52" d="M2,12.42,16.14,26.57,34.71,2" />
          <path ref="tick2" class="tick-2" fill="none" stroke="#fff8" stroke-dasharray="52" stroke-dashoffset="52" d="M18,12.42,32.14,26.57,50.71,2" />
        </svg>
        <p ref="doneText" style="margin: 0">{{ afterTitle }}</p>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'ToCart'
}
</script>
<script setup>
import { nextTick, onMounted, ref } from 'vue'
import anime from 'animejs'
import utils from '@/utils/utils.js'
const props = defineProps({
  beforeTitle: String,
  afterTitle: String,
  callback: Function
  /* title: String,
  content: String,
  callback: Function*/
})
const btn = ref()
const addBtn = ref()
const completeArea = ref()
const tick1 = ref()
const tick2 = ref()
const doneText = ref()
onMounted(async() => {
  await nextTick()
  start()
})
async function start() {
  const cart = document.getElementsByClassName('cart-container')[0]
  cart.classList.add('animateScale')
  await utils.sleep(1000)
  if (!btn.value.classList.contains('loading')) {
    btn.value.classList.add('loading')

    setTimeout(() => completeLoading(), 3700)
  }
  /* document.querySelectorAll('.button').forEach(button => button.addEventListener('click', e => {
    if (!button.classList.contains('loading')) {
      button.classList.add('loading')

      setTimeout(() => completeLoading(), 3700)
    }
    e.preventDefault()
  }))*/
}
function beforeLeave() {
  return new Promise((resolve, reject) => {
    anime({
      targets: '.cart-container',
      scaleY: [
        { value: 0.2, duration: 200 }
      ],
      scaleX: [
        { value: 0, duration: 150, delay: 250, easing: 'linear' }
      ],
      easing: 'linear',
      duration: 300,
      complete: function() {
        props.callback && props.callback('done')
      }
    })
    resolve()
  })
}
function completeLoading() {
  btn.value.classList.remove('loading')
  addBtn.value.style.display = 'none'
  completeArea.value.style.display = 'flex'
  anime({
    targets: tick1.value,
    strokeDashoffset: [52, 0],
    opacity: [0, 1],
    duration: 500,
    easing: 'cubicBezier(.5, .05, .3, .9)',
    delay: 500
  })

  anime({
    targets: tick2.value,
    strokeDashoffset: [52, 0],
    opacity: [0, 1],
    duration: 500,
    easing: 'cubicBezier(.5, .05, .3, .9)',
    delay: 750
  })
  anime({
    targets: doneText.value,
    opacity: [0, 1],
    translateY: ['25', '0'],
    duration: 1000,
    easing: 'easeOutQuad',
    delay: 750,
    complete: async function() {
      await utils.sleep(1000)
      beforeLeave()
    }
  })
  anime({
    targets: btn.value,
    background: ['#434343', '#1a1a1a'],
    duration: 500,
    delay: 750,
    easing: 'easeInQuad'
  })
}
</script>
<style lang="scss" scoped>
@keyframes scaleIn {
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.04);
  }
  100% {
    transform: scale(1);
  }
}
.animateScale {
  animation: scaleIn 600ms linear;
}
.complete-area {
  justify-content: space-around;
  display: none;

  svg {
    width: 40px;
    height: 20px;
    margin-right: 1rem;
    padding-right: 1rem;
    border-right: 1px solid #fff6;

    path {
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-width: 6px;
      opacity: 0;
    }
  }

  span {
    color: #fffd;
    padding-bottom: 1px;
    opacity: 0;
  }
}
.button {
  --background: #434343;
  --text: #fff;
  --cart: #fff;
  --tick: var(--background);
  position: relative;
  border: none;
  background: none;
  padding: 8px 28px;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  overflow: hidden;
  cursor: pointer;
  text-align: center;
  min-width: 160px;
  color: var(--text);
  background: var(--background);
  transform: scale(var(--scale, 1));
  transition: transform .4s cubic-bezier(.36, 1.01, .32, 1.27);
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 45%);
  border-radius: 20px;
&:active {
   --scale: .95;
 }
span {
  font-size: 14px;
  font-weight: 500;
  display: block;
  position: relative;
  padding-left: 24px;
  margin-left: -8px;
  line-height: 26px;
  transform: translateY(var(--span-y, 0));
  transition: transform .7s ease;
&:before,
&:after {
   content: '';
   width: var(--w, 2px);
   height: var(--h, 14px);
   border-radius: 1px;
   position: absolute;
   left: var(--l, 8px);
   top: var(--t, 6px);
   background: currentColor;
   transform: scale(.75) rotate(var(--icon-r, 0deg)) translateY(var(--icon-y, 0));
   transition: transform .65s ease .05s;
 }
&:after {
   --w: 14px;
   --h: 2px;
   --l: 2px;
   --t: 12px;
 }
}
.cart {
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -13px 0 0 -18px;
  transform-origin: 12px 23px;
  transform: translateX(-120px) rotate(-18deg);
&:before,
&:after {
   content: '';
   position: absolute;
 }
&:before {
   width: 6px;
   height: 6px;
   border-radius: 50%;
   box-shadow: inset 0 0 0 2px var(--cart);
   bottom: 0;
   left: 9px;
   filter: drop-shadow(11px 0 0 var(--cart));
 }
&:after {
   width: 16px;
   height: 9px;
   background: var(--cart);
   left: 9px;
   bottom: 7px;
   transform-origin: 50% 100%;
   transform: perspective(4px) rotateX(-6deg) scaleY(var(--fill, 0));
   transition: transform 1.2s ease var(--fill-d);
 }
svg {
  z-index: 1;
  width: 36px;
  height: 26px;
  display: block;
  position: relative;
  fill: none;
  stroke: var(--cart);
  stroke-width: 2px;
  stroke-linecap: round;
  stroke-linejoin: round;
polyline {
&:last-child {
   stroke: var(--tick);
   stroke-dasharray: 10px;
   stroke-dashoffset: var(--offset, 10px);
   transition: stroke-dashoffset .4s ease var(--offset-d);
 }
}
}
}
&.loading {
   --scale: .95;
   --span-y: -32px;
   --icon-r: 180deg;
   --fill: 1;
   --fill-d: .8s;
   --offset: 0;
   --offset-d: 1.73s;
.cart {
  animation: cart 3.4s linear forwards .2s;
}
}
}

@keyframes cart {
  12.5% {
    transform: translateX(-60px) rotate(-18deg);
  }
  25%,
  45%,
  55%,
  75% {
    transform: none;
  }
  50% {
    transform: scale(.9);
  }
  44%,
  56% {
    transform-origin: 12px 23px;
  }
  45%,
  55% {
    transform-origin: 50% 50%;
  }
  87.5% {
    transform: translateX(70px) rotate(-18deg);
  }
  100% {
    transform: translateX(140px) rotate(-18deg);
  }
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

* {
  box-sizing: inherit;
&:before,
&:after {
   box-sizing: inherit;
 }
}
</style>
