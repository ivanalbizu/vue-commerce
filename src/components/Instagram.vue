<template>
  <section class="instagram">
    <header class="section__header">
      <h4 class="t-section">Social</h4>
    </header>
    <figure class="insta-img" v-for="insta in instagram" :key="insta.id">
      <img :src="require('@/assets/instagram/'+insta.image)" :alt="insta.alt">
    </figure>
  </section>
</template>

<script>
import instagram from '@/static/instagram'

export default {
  name: 'Instagram',

  data () {
    return {
      instagram
    }
  }
}
</script>

<style scoped lang="scss">
.instagram {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px,1fr));
  grid-gap: 0;
  width: 100%;
  img {
    width: 100%;
    display: block;
  }
}
</style>
