<template>
  <section class="section we">
    <article class="we-article" :class="{ 'we-article--reverse': w.reverse}" v-for="w in we" :key="w.id">
      <figure class="we-article__img velocity-down">
        <img :src="require('@/assets/we/'+w.image)" :alt="w.alt">
      </figure>
      <div class="we-article__content">
        <h3 class="t-we">{{w.title}}</h3>
        <div v-html="w.content"></div>
        <a class="btn btn--angle-right" :href="w.href">{{w.button_txt}}</a>
      </div>
    </article>
  </section>
</template>

<script>
import we from '@/static/we'

export default {
  name: 'We',

  data () {
    return {
      we
    }
  }
}
</script>

<style scoped lang="scss">
.we {
  width: 1266px;
  padding: 0 13px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  &-article {
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    grid-template-rows: 2fr;
    grid-gap: 0;
    align-items: center;
    &:first-of-type {
      @include interpolate(margin-bottom, 320px, 1480px, 20px, 34px);
    }
    &__img {
      grid-area: 1 / 1 / 2 / 25;
    }
    &__content {
      grid-area: 2 / 2 / 3 / 24;
      background-color: #fff;
      border: 1px solid #E5E5E5;
      z-index: 1;
      @include interpolate(margin-top, 320px, 840px, -20px, -60px);
      @include interpolate((padding-top, padding-bottom), 840px, 1480px, 30px, 40px);
      @include interpolate((padding-left, padding-right), 840px, 1480px, 20px, 40px);
    }
    @media (min-width: 840px) {
      grid-template-rows: 1fr;
      &__img {
        grid-area: 1 / 1 / 2 / 18;
      }
      &__content {
        margin-top: 0;
        grid-area: 1 / 10 / 2 / 25;
      }
      &--reverse {
        .we-article__img {
          grid-area: 1 / 8 / 2 / 25;
        }
        .we-article__content {
          grid-area: 1 / 1 / 2 / 16;
        }
      }
    }
  }
}
</style>
