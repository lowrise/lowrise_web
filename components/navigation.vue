<template>
  <div :class="$style.container">
    <div class="width-site">
      <a href="/" :class="$style.logo" />
      <a href="/#contact" :class="$style.link">contact</a>
      <a href="/#practise" :class="$style.link">practise</a>
      <a href="/#commerical" :class="$style.link">commercial</a>
      <a href="/#residential" :class="$style.link">residential</a>
    </div>
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
  transition: 70ms ease-in-out;
  display: block;
  margin: 0 auto;
  width: 100%;
  background: white;
  height: 80px;
  z-index: 400;
  position: fixed;
  top: 0;
}

.logo {
  transition: 70ms ease-in-out;
  margin-top: 28px;
  background: url('~assets/images/logo.svg') 0 0 / 148px 22px;
  width: 148px;
  height: 22px;
  float: left;
}

.link {
  margin-top: 31px;
  float: right;
  text-transform: uppercase;
  color: $text-nav;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 2.6px;
  margin-left: 38px;
  cursor: pointer;
  transition: 100ms all;

  &:hover {
    color: $color-primary;
  }

  &.active {
    color: $color-primary;
    border-bottom: 2px solid #241b12;
    padding-bottom: 6px;
    position: relative;
    bottom: 2px;
  }
}
</style>
