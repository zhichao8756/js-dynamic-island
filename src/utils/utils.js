
const utils = {
  /**
     * 参数处理
     * @param {*} time  休眠时间
     */
  sleep: function(time) {
    return new Promise((resolve, reject) =>
      setTimeout(resolve, time))
  }
}
export default utils
