<template>
  <nuxt-link
    :class="$style.container"
    :to="`/projects/${project.fields.slug}`"
  >
    <div
      v-if="project.fields.hero"
      :class="$style.thumbnail"
      :style="{
        backgroundImage: `url(${project.fields.hero.fields.file.url}?w=600)`
      }"
    />
    <div :class="$style.title">{{ project.fields.title }}</div>
  </nuxt-link>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'project-card',
  props: {
    project: Object,
  },
})
</script>

<style module lang='scss'>
@import '@/assets/styles/index.scss';

.container {
  width: 100%;
  position: relative;

  &:hover {
    .title {
      color: $color-link;
    }
  }
}

.thumbnail {
  width: 100%;
  height: 200px;
  background-size: cover;
  margin-bottom: 16px;
}

.title {
  text-transform: uppercase;
  letter-spacing: 2.9px;
  font-size: 14px;
  margin-bottom: 13px;
  color: $color-primary;
  transition: 150ms all;
}

.subtitle {
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 12px;
  color: $color-secondary;
}
</style>
