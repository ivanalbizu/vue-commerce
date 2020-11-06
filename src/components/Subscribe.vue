<template>
  <section class="section subscribe velocity-down">
    <form class="subscribe__form">
      <legend><h3 class="t-subscribe"><span class="line-1">Subscribe </span>get 15 € disccount</h3></legend>
      <div class="label-submit">
        <label for="subscribe">
          <input class="input-text" id="subscribe" name="subscribe" type="text" placeholder="your@email.com">
        </label>
        <input class="input-submit" type="submit" value="subscribe">
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Subscribe'
}
</script>

<style scoped lang="scss">
.subscribe {
  display: flex;
  justify-content: center;
  background: url(~@/assets/banner.jpg) no-repeat center;
  background-size: cover;
  padding: 225px;
  padding: 30px 20px;
  @include interpolate((padding-top, padding-bottom), 840px, 1480px, 30px, 225px);
  @include interpolate((padding-left, padding-right), 840px, 1480px, 20px, 225px);
  &__form {
    width: 100%;
    max-width: 1038px;
    @include interpolate((padding-top, padding-bottom), 840px, 1480px, 30px, 145px);
    @include interpolate((padding-left, padding-right), 840px, 1480px, 20px, 30px);
    background-color: rgba(#000, .7);
    text-align: center;
  }
}
</style>
