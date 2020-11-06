class Slides {
  constructor (el, setting) {
    this.DOM = { el: el }
    this.DOM.left = this.DOM.el.querySelector('.slide__left')
    this.DOM.right = this.DOM.el.querySelector('.slide__right')
    this.DOM.slides = this.DOM.el.querySelectorAll('.slide')
    this.DOM.slidesCount = this.DOM.slides.length
    this.DOM.slidesBg = this.DOM.el.querySelectorAll('.bg-slide')
    this.DOM.slidesNavBtns = this.DOM.el.querySelectorAll('.slide__nav .js-nav')
    this.DOM.gotoBtns = this.DOM.el.querySelectorAll('[data-goto]')
    this.isAnimating = false
    this.touchStartX = 0
    this.init(setting)
    this._addEventListeners()
  }

  init (setting) {
    this.DOM.slides.forEach(slide => {
      const path = slide.querySelector('clipPath path')
      const animate = path.querySelector('animate')

      path.setAttributeNS(null, 'd', setting.paths[0])
      animate.setAttributeNS(null, 'values', arrayMirrorToString(setting.paths))
      animate.setAttributeNS(null, 'keySplines', arrayMirrorToString(setting.keySplines))
      animate.setAttributeNS(null, 'dur', `${setting.dur}ms`)
    })
  }

  _addEventListeners () {
    this.DOM.gotoBtns.forEach(nav => {
      nav.addEventListener('click', event => {
        if (this.isAnimating) return

        const goto = event.target.getAttribute('data-goto')
        const current = this.DOM.el.querySelector('.slide--active').getAttribute('data-slide')

        this.navigate(+current, +goto)
      })
    })
    this.DOM.slides.forEach(slide => {
      slide.nextElementSibling.addEventListener('touchstart', this.handleTouchStart.bind(this), false)
      slide.nextElementSibling.addEventListener('touchend', this.handleTouchEnd.bind(this), false)
    })
  }

  navigate (from, to) {
    this.isAnimating = true

    this.DOM.slidesNavBtns.forEach(nav => nav.classList.remove('btn--active'))

    this.DOM.left.setAttribute('data-goto', `${to === 0 ? this.DOM.slidesCount - 1 : +to - 1}`)
    this.DOM.right.setAttribute('data-goto', `${to === this.DOM.slidesCount - 1 ? 0 : +to + 1}`)

    const currentSlide = this.DOM.slides[from]
    const nextSlide = this.DOM.slides[to]
    const currentBg = this.DOM.slidesBg[from]
    const nextBg = this.DOM.slidesBg[to]

    const animate = nextSlide.querySelector('animate')

    animate.beginElement()
    setTimeout(() => {
      nextSlide.style.zIndex = 1
      nextSlide.classList.add('slide--active')

      animate.addEventListener('endEvent', () => {
        this.DOM.slidesNavBtns[to].classList.add('btn--active')
        nextSlide.style.zIndex = -1
        currentSlide.classList.remove('slide--active')
        currentBg.classList.remove('bg-slide--active')
        nextBg.classList.add('bg-slide--active')

        this.isAnimating = false
      })
    }, 1)
  }

  handleTouchStart (event) {
    this.touchStartX = event.touches[0].pageX
  }

  handleTouchEnd (event) {
    const moveX = event.changedTouches[event.changedTouches.length - 1].pageX - this.touchStartX
    if (moveX < -10) this.DOM.right.click()
    else if (moveX > 10) this.DOM.left.click()
  }
}

const arrayMirrorToString = arr => {
  const newArr = [...arr].reverse()
  if (newArr.length % 2 !== 0) newArr.shift()

  return arr.concat(newArr).join(';')
}

export default Slides
