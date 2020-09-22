<template>
  <div :class="$style.container">
    <div :class="$style.cover" />
    <div :class="$style.imgProjectProfile">
      <img />
    </div>
    <div :class="$style.title">Title</div>
    <div :class="$style.type">Type</div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({

})
</script>

<style module lang='scss'>
@import '@/assets/styles/index.scss';

.container {
  width: 100%;
  height: 170px;
  overflow: hidden;

  &:hover {
    .cover {
      opacity: 0.42;
    }
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    overflow: hidden;
  }
}

.title {
  text-transform: uppercase;
  letter-spacing: 2.9px;
  font-size: 15px;
  padding-top: 13px;
}

.subtitle {
  text-transform: uppercase;
  letter-spacing: 2.9px;
  font-size: 15px;
  padding-top: 13px;
  color: $color-secondary;
}
</style>
