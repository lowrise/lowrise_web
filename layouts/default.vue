<template>
  <div :class="$style.site">
    <div :class="$style.navigationContainer">
      <Navigation />
    </div>
    <div :class="$style.pageContainer">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Navigation from '@/components/navigation'

export default Vue.extend({
  components: {
    Navigation,
  },
  head() {
    return {
      title: 'Lowrise',
    }
  },
})
</script>

<style module>
.site {

}

.navigationContainer {

}

.pageContainer {
  margin-top: 80px;
}
</style>
