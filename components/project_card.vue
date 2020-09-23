<template>
  <nuxt-link
    :class="$style.container"
    :to="`/projects/${project.fields.slug}`"
  >
    <div :class="$style.cover" />
    <div :class="$style.imgProjectProfile">
      <img :src="`${project.fields.hero.fields.file.url}?w=600`" />
    </div>
    <div :class="$style.title">{{ project.fields.title }}</div>
    <div :class="$style.type">{{ project.fields.type }}</div>
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
