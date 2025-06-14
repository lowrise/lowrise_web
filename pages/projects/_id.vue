<template>
  <div :class="$style.container">
    <div :class="$style.projectPage" class="width-full">
      <div :class="$style.topContainer" class="width-site">
        <img :class="$style.projectInfoImage" :src="project.fields.hero.fields.file.url"/>
        <div :class="$style.projectInfo">
          <div :class="$style.projectInfoTitle">{{ project.fields.title }}</div>
          <div :class="$style.projectInfoType">{{ project.fields.type }}</div>
          <div v-html="documentToHtmlString(project.fields.description)" :class="$style.projectInfoDescription" />
          <nuxt-link :class="$style.backButton" to="/">
            <div :class="$style.backButtonIcon" />
            Back to all projects
          </nuxt-link>
        </div>
        <div class="clear">
      </div>
    </div>

    <div :class="$style.imageContainer">
      <div
        v-for="projectImage in project.fields.images"
        :key="projectImage.sys.id"
        :class="$style.projectImage"
      >
        <img class="width-site" :src="projectImage.fields.file.url" />
      </div>
    </div>
  </div>

  <div :class="$style.footer" class="width-site">
    <div :class="[$style.footerBlock, $style.footerBlockLeft]">
      <div :class="$style.element">
        <a :class="$style.footerButton" href="/#contact">Get in touch</a>
      </div>
    </div>
    <div :class="[$style.footerBlock, $style.footerBlockRight]">
      <div :class="$style.element"></div>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import _ from 'lodash'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default Vue.extend({
  data() {
    return {
      project: null,
    }
  },
  head() {
    if (this.project && this.project.fields.title) {
      return {
        title: `Lowrise – ${this.project.fields.title}`,
      }
    }
  },
  methods: { documentToHtmlString },
  async asyncData(context) {
    const projects = await context.$contentful.getEntries({ content_type: 'project' })
    const slug = context.route.params.id

    return {
      project: projects.items.filter(project => project.fields.slug === slug)[0],
    }
  }
})
</script>

<style module>
@import "../../assets/styles/index.css";

.container {
}

@media (max-width: 800px) {
  .container {
    padding: 0 20px;
  }
}

.projectPage {
  background: var(--color-page-bg);
  margin-bottom: 270px;
  padding: 80px 30px 100px;
  z-index: 200;
  position: relative;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
}

@media (max-width: 800px) {
  .projectPage {
    padding: 0;
  }
}

.topContainer {
  padding: 60px 0 160px;
}

@media (max-width: 800px) {
  .topContainer {
    padding: 40px 20px 0;
  }
}

.projectInfo {
  float: left;
  width: 40%;
  margin-right: 5%;
}

@media (max-width: 800px) {
  .projectInfo {
    width: 100%;
  }
}

.projectInfoTitle {
  font-size: 36px;
  font-weight: 600;
  line-height: 40px;
}

@media (max-width: 800px) {
  .projectInfoTitle {
    font-size: 26px;
  }
}

.projectInfoType {
  padding: 15px 0 0;
  text-transform: uppercase;
  color: #96918d;
  letter-spacing: 2px;
  font-size: 13px;
}

@media (max-width: 800px) {
  .projectInfoType {
    font-size: 12px;
  }
}

.projectInfoDescription {
  padding-top: 14px;
  padding-bottom: 32px;
  margin: 0;
}

@media (max-width: 800px) {
  .projectInfoDescription p {
    font-size: 14px;
  }
}

.projectInfoImage {
  width: 55%;
  float: right;
}

@media (max-width: 800px) {
  .projectInfoImage {
    width: 100%;
    float: left;
    margin-bottom: 20px;
  }
}

.backButton {
  color: var(--color-link);
  font-weight: 600;
  font-size: 15px;
  position: relative;
}

.backButton:hover .backButtonIcon {
  transform: translateX(-2px);
}

.backButtonIcon {
  background: url('~assets/images/arrow-left.svg') 0 0 / 11px 12px;
  width: 11px;
  height: 12px;
  position: absolute;
  left: -17px;
  top: 4px;
  transition: 100ms all;
}

.imageContainer {
}

@media (max-width: 800px) {
  .imageContainer {
    padding: 40px 20px 0;
  }
}

.projectImage {
  margin-bottom: 40px;
  width: 100%;
}

.projectImage img {
  width: 100%;
  height: auto;
}

.projectSubtitle {
  padding: 40px 0;
  position: relative;
}

.subtitleText {
  font-size: 20px;
  color: #96918d;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.projectCaption {
  text-align: center;
  padding: 16px 0 20px;
  color: rgb(120, 120, 120);
  font-size: 15px;
}

.footer {
  z-index: 100;
  padding: 60px;
  position: fixed;
  bottom: 0;
  background: white;
}

.footerBlock {
  float: left;
  width: 50%;
  height: 150px;
  padding: 0 40px;
}

.footerBlock img {
  float: left;
  height: 100%;
}

.footerBlock .btn:hover {
  color: #448EB5;
}

.footerBlock .btn:hover .arrow-right {
  transform: translateX(4px);
}

.footerBlock .project-footer-subtitle {
  float: left;
  font-size: 15px;
  color: var(--color-secondary);
  clear: both;
}

.footerBlockleft {
  border-right: 1px solid rgb(242, 242, 242);
}

.footerBlockleft .btn-big {
  line-height: 150px;
  float: right;
}

.footerBlockRight .element {
  position: absolute;
  top: 50%;
}

.footerBlockRight .inner {
  height: 62px;
  position: relative;
  top: -32px;
}

.footerBlockRight .inner .btn-big {
  margin: 5px 0 0 28px;
}

@media (max-width: 800px) {
  .container {
    padding: 0 0 0;
  }
}
</style>
