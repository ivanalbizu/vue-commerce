<template>
  <section class="section testimonials slider">
    <header class="section__header">
      <h3 class="t-section">Testimonial</h3>
      <p class="t-subsection">Testimonial subtitle</p>
    </header>
    <div class="slider__wrapper">
      <article class="testimonial" v-for="testimonial in testimonials" :key="testimonial.id">
        <img class="testimonial__img" :src="require('@/assets/testimonials/'+testimonial.image)" :alt="testimonial.alt">
        <p class="testimonial__title t-slider-title">{{testimonial.author}}</p>
        <p class="testimonial__content t-slider-content">{{testimonial.content}}</p>
      </article>
    </div>
    <div class="slider__nav">
      <button type="button">Previous slide</button>
      <button type="button">Next slide</button>
    </div>
    <div class="slider__pag">
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
    </div>
  </section>
</template>

<script>
import testimonials from '@/static/testimonials'

export default {
  name: 'Testimonials',

  data () {
    return {
      testimonials
    }
  }
}
</script>

<style lang="scss">
.testimonials {
  background: $color-gray;
  @include interpolate(padding-top, 320px, 1480px, 30px, 70px);
  @include interpolate(padding-bottom, 320px, 1480px, 20px, 40px);
  > * {
    width: 1266px;
    padding: 0 13px;
    max-width: 100%;
    margin: auto;
  }
}
.testimonial {
  text-align: center;
  width: 70%;
  &__img {
    margin: 0 auto 1em;
    max-block-size: 5em;
  }
  &__title {
    margin-bottom: .8em;
  }
  &__content {
    margin-bottom: .5em;
  }
}
</style>
