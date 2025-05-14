<template>
  <main :class="$style.container">
    <div :class="$style.title">Thanks for your enquiry</div>
    <div :class="$style.subtitle">We will be in touch soon</div>
  </main>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({

})
</script>

<style module>
.container {
  width: 300px;
  height: 66px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  text-align: center;
  color: #8a8a8a;
}

.title {
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 14px;
  color: #2bac00;
}

.subtitle {
}
</style>
