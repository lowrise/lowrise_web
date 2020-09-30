<template>
  <div :class="$style.container">
    <div :class="$style.projectPage" class="width-full">
      <div :class="$style.topContainer" class="width-site">
        <div :class="$style.projectInfo">
          <div :class="$style.projectInfoTitle">{{ project.fields.title }}</div>
          <div :class="$style.projectInfoType">{{ project.fields.type }}</div>
          <div v-html="documentToHtmlString(project.fields.description)" :class="$style.projectInfoDescription" />
          <nuxt-link :class="$style.backButton" to="/">
            <div :class="$style.backButtonIcon" />
            Back to all projects
          </nuxt-link>
        </div>
        <img :class="$style.projectInfoImage" :src="project.fields.hero.fields.file.url"/>
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

<style module lang='scss'>
@import '@/assets/styles/index.scss';

.container {

}

.projectPage {
  background: $color-page-bg;
  margin-bottom: 270px;
  padding: 80px 0 100px;
  z-index: 200;
  position: relative;
  box-shadow: 0 1px 6px rgba(0,0,0,0.10);
}


// Header

.topContainer {
  padding: 100px 0 160px;
}

.projectInfo {
  float: left;
  width: 30%;
  margin-right: 5%;
}

.projectInfoTitle {
  font-size: 36px;
  font-weight: 600;
  line-height: 40px;
}

.projectInfoType {
  padding: 15px 0 0;
  text-transform: uppercase;
  color: #96918d;
  letter-spacing: 2px;
  font-size: 13px;
}

.projectInfoDescription {
  padding-top: 14px;
  padding-bottom: 32px;
  margin: 0;
}

.backButton {
  color: $color-link;
  font-weight: 600;
  font-size: 15px;
  position: relative;

  &:hover {
    .backButtonIcon {
      transform: translateX(-2px);
    }
  }
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


// Main

.projectInfoImage {
  width: 65%;
  float: right;
}

.projectImage {
  margin-bottom: 40px;
  width: 100%;

  img {
    width: 100%;
    height: auto;
  }
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
  color: rgb(120,120,120);
  font-size: 15px;
}


// Footer

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

  img {
    float: left;
    height: 100%;
  }

  .btn:hover {
    color: #448EB5;
    .arrow-right {
      transform: translateX(4px);
    }
  }

  .project-footer-subtitle {
    float: left;
    font-size: 15px;
    color: $color-secondary;
    clear: both;
  }
}

.footerBlockleft {
  border-right: 1px solid rgb(242,242,242);

  .btn-big {
    line-height: 150px;
    float: right;
  }
}

.footerBlockRight {
  .element {
    position: absolute;
    top: 50%;
  }

  .inner {
    height: 62px;
    position: relative;
    top: -32px;

    .btn-big {
      margin: 5px 0 0 28px;
    }
  }
}

@media (max-width: 1000px) {
  .container {
    padding: 80px 60px 80px;
  }
}
</style>
