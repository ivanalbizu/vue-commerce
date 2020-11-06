<template>
  <section id="slide" class="section slider slider--home">
    <section class="slides">

      <template v-for="slide in slides">
        <article :key="slide.id" :data-slide="slide.dataSlide" class="slide" :class="slide.active ? `slide--${slide.class} slide--active` : `slide--${slide.class}`">
          <svg class="svg" viewBox="0 0 1920 650">
            <clipPath :id="slide.clipPath">
              <path d="">
                <animate
                  dur=""
                  repeatCount=".5"
                  attributeName="d"
                  restart="whenNotActive"
                  values=""
                  keySplines=""
                  calcMode="spline"
                  fill="freeze" />
                </path>
            </clipPath>
            <image :clip-path="`url(#${slide.clipPath})`" height="100%" width="100%" :xlink:href="require('@/assets/slides/'+slide.href)" />
          </svg>
        </article>
        <div :key="slide.href" class="bg-slide" style="background-image: require('@/assets/slides/'+slide.href)"></div>
      </template>

    </section>

    <nav class="nav">
      <button class="slide__left btn" data-goto="3" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H6M12 5l-7 7 7 7"/></svg>
      </button>
      <ul class="slide__nav">
        <li><button class="btn btn--active js-nav" data-goto="0" type="button"><span class="visually-hidden">Slide </span>1</button></li>
        <li><button class="btn js-nav" data-goto="1" type="button"><span class="visually-hidden">Slide </span>2</button></li>
        <li><button class="btn js-nav" data-goto="2" type="button"><span class="visually-hidden">Slide </span>3</button></li>
        <li><button class="btn js-nav" data-goto="3" type="button"><span class="visually-hidden">Slide </span>4</button></li>
        <li><button class="btn js-nav" data-goto="4" type="button"><span class="visually-hidden">Slide </span>5</button></li>
      </ul>
      <button class="slide__right btn" data-goto="1" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h13M12 5l7 7-7 7"/></svg>
      </button>
    </nav>
  </section>
</template>

<script>
import Slides from '@/classes/Slides.js'

export default {
  name: 'SliderHome',

  data () {
    return {
      slides: [
        {
          id: 0,
          dataSlide: 0,
          class: 'beauty',
          clipPath: 'clip-00',
          href: 'shoes-00.jpg',
          active: true
        },
        {
          id: 1,
          dataSlide: 1,
          class: 'girl',
          clipPath: 'clip-01',
          href: 'shoes-01.jpg',
          active: false
        },
        {
          id: 2,
          dataSlide: 2,
          class: 'model',
          clipPath: 'clip-02',
          href: 'shoes-02.jpg',
          active: false
        },
        {
          id: 3,
          dataSlide: 3,
          class: 'snow',
          clipPath: 'clip-03',
          href: 'shoes-03.jpg',
          active: false
        },
        {
          id: 4,
          dataSlide: 4,
          class: 'woman',
          clipPath: 'clip-04',
          href: 'shoes-04.png',
          active: false
        }
      ],
      setting01: {
        dur: 1800,
        paths: [
          'M 0 750 Q 150 750 200 750 Q 250 750 300 750 Q 350 750 400 750 C 500 750 750 750 1500 750 L 1500 750 L 0 750 Z',
          'M 0 300 Q 150 100 200 300 Q 250 600 300 300 Q 350 50 400 300 C 500 750 750 50 1500 300 L 1500 750 L 0 750 Z',
          'M 0 0 Q 150 0 200 0 Q 250 0 300 0 Q 350 0 400 0 C 500 0 750 0 1500 0 L 1500 750 L 0 750 Z'
        ],
        keySplines: [
          '0.57 0.63 0.51 0.39',
          '0.57 0.63 0.51 0.39'
        ]
      }
    }
  },

  mounted () {
    return new Slides(document.querySelector('#slide'), this.setting01)
  }

}
</script>

<style scoped lang="scss">
button,
[type="button"],
[type="reset"],
[type="submit"] {
  cursor: pointer;
  border: 0;
  padding: 0;
  background-color: transparent;
  -webkit-appearance: button;
}

.visually-hidden {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.slides {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-gap: 0;
}
.slide {
  grid-area: 1 / 1 / 1 / 1;
  visibility: hidden;

  &--active {
    visibility: visible;
  }

  &__nav {
    display: flex;
    justify-content: center;
    z-index: 2;
    margin: 0 .7em;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  &__left,
  &__right {
    svg {
      width: 1.2em;
      height: 1.2em;
      pointer-events: none;
    }
  }
  .svg {
    display: block;
    margin: auto;
  }
}
.bg-slide {
  grid-area: 1 / 1 / 1 / 1;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  visibility: hidden;

  &--active {
    visibility: visible;
  }
}
.nav {
  display: flex;
  justify-content: center;
}
.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .9);
  color: #fff;
  border: 1px solid rgba(0, 0, 0, .9);
  width: 2em;
  height: 2em;
  margin: 0.5em .2em;
  transition: all .7s ease-in 0s;
  &--active {
    background-color: #fff;
    color: rgba(0, 0, 0, 0.9);
    transition: all .2s ease-in 0s;
    pointer-events: none;
  }
}

</style>
