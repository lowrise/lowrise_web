<template>
  <div :class="$style.container">
    <div class="width-site">
      <a href="/" :class="$style.logo" />
      <a href="/#contact" :class="$style.link">contact</a>
      <a href="/#practise" :class="[$style.link, $style.hideOnMobile]">practise</a>
      <a href="/#commerical" :class="[$style.link, $style.hideOnMobile]">commercial</a>
      <a href="/#residential" :class="[$style.link, $style.hideOnMobile]">residential</a>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({

})
</script>

<style module>
@import '../assets/styles/index.css';

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
  padding: 0 10px;
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
  color: var(--text-nav);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 2.6px;
  margin-left: 38px;
  cursor: pointer;
  transition: 100ms all;
}

.link:hover {
  color: var(--color-primary);
}

.link.active {
  color: var(--color-primary);
  border-bottom: 2px solid #241b12;
  padding-bottom: 6px;
  position: relative;
  bottom: 2px;
}

@media (max-width: 800px) {
  .container {
    padding-right: 20px;
  }

  .link {
    position: relative;
    top: 2px;
  }

  .link.hideOnMobile {
    display: none;
  }
}
</style>
