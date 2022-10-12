<template>
  <div class="location">
    <div class="rate-container" v-if="visible">
      <div class="rate-text">
        <p class="title">点个赞</p>
      </div>
      <div class="favorite">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
          <defs>
            <mask id="favorite__halo-mask">
              <rect width="100%" height="100%" fill="white"/>
              <circle class="favorite__halo-inner" cx="50" cy="50" r="0" fill="black"></circle>
            </mask>
          </defs>
          <circle class="favorite__halo-outer" ref="favorite__halo_outer" cx="50" cy="50" r="48" fill="#feb53c" mask="url(#favorite__halo-mask)"></circle>
          <path ref="favorite__inactive" class="favorite__inactive" d="M50.214 10.067c6.4.204 10.753 25.648 10.753 25.648s26.256-1.803 27.13 2.857c.874 4.66-20.04 16.642-20.04 16.642s9.537 24.303 5.523 26.817c-4.015 2.515-23.545-14.023-23.545-14.023S29.333 84.493 25.633 81.785c-3.7-2.71 6.657-26.472 6.657-26.472S11.234 43.94 12.383 39.108c1.15-4.832 26.55-3.393 26.55-3.393s4.88-25.853 11.28-25.648z" fill="#dbdedd" fill-rule="evenodd"/>
          <path class="favorite__active" d="M50.214 10.067c6.4.204 10.753 25.648 10.753 25.648s26.256-1.803 27.13 2.857c.874 4.66-20.04 16.642-20.04 16.642s9.537 24.303 5.523 26.817c-4.015 2.515-23.545-14.023-23.545-14.023S29.333 84.493 25.633 81.785c-3.7-2.71 6.657-26.472 6.657-26.472S11.234 43.94 12.383 39.108c1.15-4.832 26.55-3.393 26.55-3.393s4.88-25.853 11.28-25.648z" fill="#feb53c" fill-rule="evenodd"/>
        </svg>
        <div class="favorite__sprinkle" ref="favorite__sprinkle"><div class="favorite__sprinkle-circle"></div></div>
        <div class="favorite__sprinkle" ref="favorite__sprinkle"><div class="favorite__sprinkle-circle"></diV></div>
        <div class="favorite__sprinkle" ref="favorite__sprinkle"><div class="favorite__sprinkle-circle"></diV></div>
        <div class="favorite__sprinkle" ref="favorite__sprinkle"><div class="favorite__sprinkle-circle"></diV></div>
        <div class="favorite__sprinkle" ref="favorite__sprinkle"><div class="favorite__sprinkle-circle"></diV></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RateBox'
}
</script>
<script setup>
import { nextTick, onMounted, ref } from 'vue'
import anime from 'animejs/lib/anime.es.js'
import utils from '../../utils/utils.js'

const visible = ref(true)
const favorite__inactive = ref()
const favorite__halo_outer = ref()
const favorite__sprinkle = ref()
const props = defineProps({
  title: String,
  callback: Function
})
onMounted(async() => {
  await nextTick()
  await showIsland()
})
async function showIsland() {
  visible.value = true
  const fold = document.getElementsByClassName('rate-container')[0]
  const text = document.getElementsByClassName('rate-text')[0]
  fold.classList.add('animateScale')
  text.classList.add('animateText')
  await utils.sleep(1000)
  start()
  await utils.sleep(2500)
  disappearIsland()
}
async function disappearIsland() {
  await beforeLeave()
  await utils.sleep(1200).then((res) => {
    visible.value = false
  })
}
function beforeLeave() {
  return new Promise((resolve, reject) => {
    anime({
      targets: '.rate-container',
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
async function start() {
  // const timeline = anime.timeline({ autoplay: true, direction: 'normal', loop: true })
  anime({
    targets: favorite__inactive.value,
    scale: {
      value: [1, 0],
      duration: 400,
      delay: 1000,
      easing: 'easeInQuad'
    }
  })
  anime({
    targets: favorite__halo_outer.value,
    scale: {
      value: [0, 1],
      duration: 400,
      delay: 1400,
      easing: 'easeOutQuad'
    },
    offset: 0
  })
  anime({
    targets: '.favorite__halo-inner',
    r: {
      value: [0, 49],
      duration: 300,
      delay: 1500,
      easing: 'easeOutQuad'
    },
    offset: 0
  })
  anime({
    targets: '.favorite__active',
    scale: {
      value: [0, 1],
      duration: 500,
      delay: 1600,
      easing: 'easeOutQuad'
    },
    opacity: {
      value: 1,
      duration: 1500,
      delay: 2500
    },
    offset: 0
  })
  anime({
    targets: '.favorite__sprinkle',
    opacity: {
      value: [0, 1],
      duration: 150,
      delay: 1500
    },
    offset: 0
  })
  anime({
    targets: '.favorite__sprinkle-circle',
    height: {
      value: [5, 12],
      duration: 100,
      delay: 1600,
      easing: 'easeOutQuad'
    },
    offset: 0
  })
  anime({
    targets: '.favorite__sprinkle-circle',
    height: {
      value: [12, 5],
      duration: 100,
      delay: 1700,
      easing: 'easeOutQuad'
    },
    offset: 0
  })
  anime({
    targets: '.favorite__sprinkle-circle',
    opacity: {
      value: [1, 0],
      duration: 500,
      delay: 1800,
      easing: 'easeOutQuad'
    },
    offset: 0
  })
  anime({
    targets: '.favorite__sprinkle-circle',
    translateY: {
      value: [0, -28],
      duration: 500,
      delay: 1600,
      easing: 'easeOutQuad'
    },
    offset: 0
  })
}

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
.rate-container {
  background: #1a1a1a;
  width: 200px;
  min-height: 50px;
  border-radius: 24px;
  padding-top: 16px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 45%);
  text-align: center;
}
.title {
  color: #ffffff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
}
.favorite {
  position: relative;
  transform: scale(1);
  display: inline-block;
  transform-origin: 50% 0%;
}

.favorite__inactive {
  transform-origin: 50% 50%;
}

.favorite__active {
  transform-origin: 50% 50%;
  transform: scale(0);
  opacity: 1;
}

.favorite__halo-outer {
  transform-origin: 50% 50%;
  transform: scale(0);
}

.favorite__sprinkle {
  position: absolute;
  top: 50px;
  left: 52px;
  transform: rotate(36deg);
}

.favorite__sprinkle:nth-child(2) {
  transform: rotate(108deg);
}

.favorite__sprinkle:nth-child(3) {
  transform: rotate(180deg);
}

.favorite__sprinkle:nth-child(4) {
  transform: rotate(252deg);
}

.favorite__sprinkle:nth-child(5) {
  transform: rotate(324deg);
}

.favorite__sprinkle-circle {
  position: absolute;
  content: '';
  background: #F98247;
  border-radius: 50%;
  width: 5px;
  height: 5px;
  margin-top: -28px;
}
</style>
