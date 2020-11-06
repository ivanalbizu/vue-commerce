<template>
  <section class="section blogs slider">
    <header class="section__header">
      <h3 class="t-section">Blogs</h3>
    </header>
    <div class="slider__wrapper">
      <article class="blog-card" v-for="blog in blogs" :key="blog.id">
        <figure class="blog-card__img velocity-down">
          <img :src="require('@/assets/blogs/'+blog.image)" :alt="blog.alt">
        </figure>
        <h4 class="blog-card__title t-slider-title">{{blog.title}}</h4>
        <p class="blog-card__content t-slider-content">{{blog.excerpt}}</p>
        <footer class="blog-card__footer">
          <p class="blog-card__footer-date t-slider-date">{{blog.date}}</p>
          <p class="blog-card__footer-tags t-slider-tags"><span v-for="(tag, index) in blog.tags" :key="index">{{tag}}</span></p>
          <button class="blog-card__footer-btn btn btn--outline" type="button">{{blog.button_txt}}</button>
        </footer>
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
import blogs from '@/static/blogs'

export default {
  name: 'Blog',

  data () {
    return {
      blogs
    }
  }
}
</script>

<style lang="scss">
.blogs {
  width: 1336px;
  padding: 0 48px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.blog-card {
  &__img {
    margin-bottom: 1em;
  }
  &__title {
    margin-bottom: 1.2em;
  }
  &__content {
    margin-bottom: 1.2em;
  }
  &__footer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px 30px;
    &-date { grid-area: 1 / 1 / 2 / 2; }
    &-tags {
      grid-area: 1 / 2 / 2 / 3;
      justify-self: flex-end;
    }
    &-btn {
      grid-area: 2 / 1 / 3 / 3;
      place-self: center;
    }
  }
}
</style>
