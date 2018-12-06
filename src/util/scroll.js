class Scroll {
  constructor (callback) {
    this.callback = this.delay(callback)
    document.addEventListener('scroll', this.callback)
  }

  delay (callback) {
    let timer = false
    return function (e) {
      if (!timer) {
        timer = true
        setTimeout(() => {
          let scrollTop = document.body.scrollTop + document.documentElement.scrollTop + window.innerHeight
          callback(scrollTop)
          timer = false
        }, 300)
      }
    }
  }

  drop () {
    document.removeEventListener('scroll', this.callback)
  }
}

export default Scroll
