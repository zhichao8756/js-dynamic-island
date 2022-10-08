<template>
  <div class="location">
    <main class="progress-container">
      <div class="btn-area">
        <svg class="main-btn" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <rect ref="mainBtn" fill="#1a1a1a" stroke="#1a1a1a" stroke-width="1.5" x="1" y="1" rx="20" ry="20" />
        </svg>
        <svg class="frame-btn" xmlns="http://www.w3.org/2000/svg" version="1.1">
          <rect ref="frameBtn" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="525" stroke-dashoffset="525" x="1" y="1" rx="20" ry="20" />
        </svg>
        <div class="progress-area" ref="progressArea">
          <div class="area-left">
            <svg ref="loadingIcon" width="18" height="18" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 3C17.1 3 16.5 3.6 16.5 4.5V8.25C16.5 9.15 17.1 9.75 18 9.75C18.9 9.75 19.5 9.15 19.5 8.25V4.5C19.5 3.6 18.9 3 18 3Z" fill="#ffffff" />
              <path d="M10.0504 12.1504C10.3504 12.4504 10.8004 12.6004 11.1004 12.6004C11.4004 12.6004 11.8504 12.4504 12.1504 12.1504C12.7504 11.5504 12.7504 10.6504 12.1504 10.0504L9.45039 7.35039C8.85039 6.75039 7.95039 6.75039 7.35039 7.35039C6.75039 7.95039 6.75039 8.85039 7.35039 9.45039L10.0504 12.1504Z" fill="#ffffff" />
              <path d="M9.75 18C9.75 17.1 9.15 16.5 8.25 16.5H4.5C3.6 16.5 3 17.1 3 18C3 18.9 3.6 19.5 4.5 19.5H8.25C9 19.5 9.75 18.9 9.75 18Z" fill="#ffffff" />
              <path d="M10.0508 23.8504L7.50078 26.4004C6.90078 27.0004 6.90078 27.9004 7.50078 28.5004C7.80078 28.8004 8.25078 28.9504 8.55078 28.9504C8.85078 28.9504 9.30078 28.8004 9.60078 28.5004L12.1508 25.9504C12.7508 25.3504 12.7508 24.4504 12.1508 23.8504C11.5508 23.2504 10.6508 23.2504 10.0508 23.8504Z" fill="#ffffff" />
              <path d="M18 26.25C17.1 26.25 16.5 26.85 16.5 27.75V31.5C16.5 32.4 17.1 33 18 33C18.9 33 19.5 32.4 19.5 31.5V27.75C19.5 27 18.9 26.25 18 26.25Z" fill="#ffffff" />
              <path d="M25.9504 23.8504C25.3504 23.2504 24.4504 23.2504 23.8504 23.8504C23.2504 24.4504 23.2504 25.3504 23.8504 25.9504L26.4004 28.5004C26.7004 28.8004 27.1504 28.9504 27.4504 28.9504C27.7504 28.9504 28.2004 28.8004 28.5004 28.5004C29.1004 27.9004 29.1004 27.0004 28.5004 26.4004L25.9504 23.8504Z" fill="#ffffff" />
              <path d="M31.5 16.5H27.75C26.85 16.5 26.25 17.1 26.25 18C26.25 18.9 26.85 19.5 27.75 19.5H31.5C32.4 19.5 33 18.9 33 18C33 17.1 32.4 16.5 31.5 16.5Z" fill="#ffffff" />
              <path d="M24.9004 12.5998C25.3504 12.5998 25.6504 12.4498 25.9504 12.1498L28.5004 9.5998C29.1004 8.9998 29.1004 8.0998 28.5004 7.4998C27.9004 6.8998 27.0004 6.8998 26.4004 7.4998L23.8504 10.0498C23.2504 10.6498 23.2504 11.5498 23.8504 12.1498C24.1504 12.4498 24.6004 12.5998 24.9004 12.5998Z" fill="#ffffff" />
            </svg>
            <span ref="loadingProgress">0 %</span>
          </div>
<!--          <div class="area-right" ref="loadingBtn">
            <svg width="18" height="18" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="btn-pause" ref="pauseBtn">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 6C6.97843 6 6 6.97843 6 8.25V27.75C6 29.0216 6.97843 30 8.25 30H10.65C11.7358 30 12.7805 29.0469 12.9 27.8353V8.25C12.9 6.97843 11.9216 6 10.65 6H8.25ZM3 8.25C3 5.32157 5.32157 3 8.25 3H10.65C13.5784 3 15.9 5.32157 15.9 8.25V27.9C15.9 27.9384 15.8985 27.9768 15.8956 28.015C15.6906 30.6796 13.4492 33 10.65 33H8.25C5.32157 33 3 30.6784 3 27.75V8.25Z" fill="#ff542b" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M25.3496 6C24.078 6 23.0996 6.97843 23.0996 8.25V27.75C23.0996 29.0216 24.078 30 25.3496 30H27.7496C29.0613 30 29.9996 28.982 29.9996 27.9V8.25C29.9996 6.97843 29.0212 6 27.7496 6H25.3496ZM20.0996 8.25C20.0996 5.32157 22.4212 3 25.3496 3H27.7496C30.678 3 32.9996 5.32157 32.9996 8.25V27.9C32.9996 30.718 30.6379 33 27.7496 33H25.3496C22.4212 33 20.0996 30.6784 20.0996 27.75V8.25Z" fill="#ff542b" />
            </svg>
            <svg width="18" height="18" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" class="btn-play" ref="playBtn">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M3 7.33761C3 2.58639 8.08368 0.177285 12.0217 2.27008C12.0446 2.28222 12.0671 2.29495 12.0893 2.30826L30.0453 13.0771C33.9849 15.2998 33.9849 20.6354 30.0453 22.8581L12.0893 33.627L12.0701 33.6383C8.06754 35.9588 3 33.3067 3 28.7474V7.33761ZM10.5822 4.90258C8.33198 3.73209 6 5.21176 6 7.33761V28.7474C6 30.7729 8.36369 32.3115 10.5566 31.048L28.5205 20.2745C28.5334 20.2667 28.5465 20.2591 28.5597 20.2518C30.4801 19.1775 30.4801 16.7578 28.5597 15.6835C28.5521 15.6792 28.5445 15.6749 28.537 15.6705C28.5315 15.6673 28.526 15.6641 28.5205 15.6608L10.5822 4.90258Z" fill="#1578ff" />
            </svg>
          </div>-->
        </div>
        <div class="complete-area" ref="completeArea">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52.71 28.57">
            <path ref="tick1" class="tick-1" fill="none" stroke="#ffff" stroke-dasharray="52" stroke-dashoffset="52" d="M2,12.42,16.14,26.57,34.71,2" />
            <path ref="tick2" class="tick-2" fill="none" stroke="#fff8" stroke-dasharray="52" stroke-dashoffset="52" d="M18,12.42,32.14,26.57,50.71,2" />
          </svg>
          <span ref="doneText">完成</span>
        </div>
      </div>
    </main>
    <a class="instagram-link" href="https://www.instagram.com/project.fung/" target="_top">
      <i class="fa-brands fa-instagram fa-xl"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'ProgressBox'
}
</script>
<script setup>
import anime from 'animejs/lib/anime.es.js'
import { onMounted, onBeforeUnmount, nextTick, ref, getCurrentInstance } from 'vue'
import utils from '@/utils/utils.js'

const { proxy } = getCurrentInstance()
// const loadingTime = ref(5500)
const props = defineProps({
  loadingTime: Number,
  callback: Function
  /* title: String,
  content: String,
  callback: Function*/
})
const progress = {
  value: '0 %'
}
const loadingStatus = true
const progressArea = ref()
const completeArea = ref()
const mainBtn = ref()
const frameBtn = ref()
const loadingIcon = ref()
const loadingProgress = ref()
const loadingBtn = ref()
const pauseBtn = ref()
const playBtn = ref()
const tick1 = ref()
const tick2 = ref()
const doneText = ref()

onMounted(async() => {
  await nextTick()
  proxy.$utils = utils
  start()
})
function beforeLeave() {
  return new Promise((resolve, reject) => {
    anime({
      targets: '.progress-container',
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

function start() {
  const progressElement = document.getElementsByClassName('progress-container')[0]
  progressElement.classList.add('animateScale')
  anime({
    targets: loadingIcon.value,
    opacity: [0, 1],
    duration: 750,
    easing: 'easeOutQuad'
  })

  const aniLoadingIcon = anime({
    targets: loadingIcon.value,
    rotateZ: 360,
    duration: 2000,
    loop: true,
    easing: 'linear'
  })

  anime({
    targets: loadingProgress.value,
    translateY: ['15px', '0'],
    opacity: [0, 1],
    delay: 250,
    duration: 750,
    easing: 'easeOutQuart'
  })

  /* anime({
    targets: loadingBtn.value,
    translateY: ['15px', '0'],
    opacity: [0, 1],
    delay: 350,
    duration: 1000,
    easing: 'easeOutQuart'
  })*/

  const aniProgress = anime({
    targets: progress,
    value: '100 %',
    duration: props.loadingTime,
    easing: 'cubicBezier(.5, .05, .3, .9)',
    delay: 1000,
    round: 1,
    update: function() {
      console.log(progress)
      loadingProgress.value.innerHTML = JSON.stringify(progress.value).replace(/^"(.*)"$/, '$1')
    }
  })

  const aniFrameBtn = anime({
    targets: frameBtn.value,
    strokeDashoffset: [525, 0],
    duration: props.loadingTime,
    easing: 'cubicBezier(.5, .05, .3, .1)',
    delay: 1000,
    complete: async function() {
      completeLoading()
      await proxy.$utils.sleep(3000)
      beforeLeave()
    }
  })

  /* loadingBtn.value.addEventListener('click', () => {
    if (loadingStatus) {
      aniLoadingIcon.pause()
      aniProgress.pause()
      aniFrameBtn.pause()
      pauseBtn.value.style.transform = 'translateY(-40px)'
      playBtn.value.style.transform = 'translateY(0px)'
      loadingStatus = false
    } else {
      aniLoadingIcon.play()
      aniProgress.play()
      aniFrameBtn.play()
      pauseBtn.value.style.transform = 'translateY(0px)'
      playBtn.value.style.transform = 'translateY(40px)'
      loadingStatus = true
    }
  })*/
}

function completeLoading() {
  anime({
    targets: loadingIcon.value,
    translateX: [0, -20],
    opacity: [1, 0],
    duration: 500,
    delay: 0,
    easing: 'easeInQuad'
  })

  anime({
    targets: loadingProgress.value,
    translateY: [0, -20],
    opacity: [1, 0],
    duration: 500,
    delay: 250,
    easing: 'easeInQuad'
  })

  anime({
    targets: loadingBtn.value,
    translateY: [0, -20],
    opacity: [1, 0],
    duration: 500,
    delay: 500,
    easing: 'easeInQuad',
    complete: function() {
      progressArea.value.style.display = 'none'
      completeArea.value.style.display = 'flex'
    }
  })

  anime({
    targets: frameBtn.value,
    fill: ['#434343', '#1a1a1a'],
    duration: 500,
    delay: 750,
    easing: 'easeInQuad'
  })

  anime({
    targets: tick1.value,
    strokeDashoffset: [52, 0],
    opacity: [0, 1],
    duration: 500,
    easing: 'cubicBezier(.5, .05, .3, .9)',
    delay: 1000
  })

  anime({
    targets: tick2.value,
    strokeDashoffset: [52, 0],
    opacity: [0, 1],
    duration: 500,
    easing: 'cubicBezier(.5, .05, .3, .9)',
    delay: 1250
  })

  anime({
    targets: doneText.value,
    opacity: [0, 1],
    translateY: ['25', '0'],
    duration: 1000,
    easing: 'easeOutQuad',
    delay: 1250
  })
}
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
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
.progress-container {
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 45%);
  border-radius: 20px;
}
body {
main {
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  height: inherit;

.btn-area {
  position: relative;
  width: calc(210px + 2px);
  height: calc(40px + 2px);

&:hover .main-btn {
   opacity: .25;
 }

.main-btn {
  width: inherit;
  height: inherit;
  opacity: 0.8;
  transition: 250ms;

rect {
  width: 210px;
  height: 40px;
  transition: 250ms;
}
}

.progress-area,
.complete-area {
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  color: #ffffff;
  user-select: none;
  opacity: 1;

.area-left {
  display: flex;

svg {
  margin-right: 1rem;
  opacity: 0;
}

span {
  width: 50px;
  text-align: right;
}
}

.area-right {
  position: relative;
  display: flex;
  align-items: center;
  height: 20px;
  margin-right: -1rem;
  padding-left: 1rem;
  border-left: 1px solid #1578ff44;
  overflow: hidden;
  cursor: pointer;

&:hover {
   height: 40px;
   transition: 250ms height;

svg {
  opacity: 1;
}
}

svg {
  opacity: .5;
  transition: 250ms;
}

.btn-play {
  position: absolute;
  transform: translateY(40px);
}
}
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

.frame-btn {
  position: absolute;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;

rect {
  width: 210px;
  height: 40px;
  stroke-linecap: round;
  stroke-linejoin: round;
}
}
}

}

.instagram-link {
  position: absolute;
  right: 50px;
  bottom: 50px;

i {
  color: #1578ff;
  transition: 150ms;
  font-size: 2rem;
  opacity: .5;

&:hover {
   opacity: 1;
 }
}
}
}
</style>
