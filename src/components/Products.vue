<template>
  <section class="section products">
    <header class="section__header">
      <h3 class="t-section">Title product section</h3>
      <p class="t-subsection">Subtitle section</p>
    </header>
    <article class="product" v-for="product in products" :key="product.id">
      <figure class="product__img velocity-down">
        <img :src="require('@/assets/products/'+product.image)" :alt="product.alt">
      </figure>
      <h4 class="product__title">
        <a :href="product.href">{{product.title}}</a>
      </h4>
      <div class="product__price">
        <p>{{product.current_price}} <span v-if="product.old_price" class="line-through">120,45 €</span></p>
      </div>
      <footer class="product__action">
        <button class="add-to-cart" type="button">{{product.button_txt}}</button>
      </footer>
    </article>
  </section>
</template>

<script>
import products from '@/static/products'

export default {
  name: 'Products',

  data () {
    return {
      products
    }
  }
}
</script>

<style scoped lang="scss">
.products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px,1fr));
  grid-gap: 0 13px;
  //width: 1240px;
  width: 1266px;
  padding: 0 13px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}
.product {
  display: flex;
  flex-direction: column;
  text-align: center;
  @include interpolate(margin-bottom, 320px, 1480px, 20px, 34px);
  &__img {
    margin-bottom: 7px;
    img {
      width: 100%;
      display: block;
    }
  }
  &__title {
    @include interpolate(font-size, 320px, 1480px, 14px, 18px);
    color: $color-black;
    @include interpolate(margin-bottom, 320px, 1480px, 4px, 8px);
    a {
      color: inherit;
    }
  }
  &__price {
    @include interpolate(font-size, 320px, 1480px, 14px, 16px);
    color: $color-red;
    @include interpolate(margin-bottom, 320px, 1480px, 10px, 20px);
    .line-through {
      text-decoration: line-through;
    }
  }
  &__action {
    margin-top: auto;
  }
}
</style>
