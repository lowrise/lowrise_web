<template>
  <main :class="$style.container">
    <div :class="$style.hero">
      <div
        :class="$style.heroImage"
        :style="{
          background: `url('${ heroImage.file.url }')`
        }"
      />
    </div>

    <div :class="$style.page" class="width-full">
      <div :class="$style.section" class="width-site" id="residential">
        <div :class="$style.sectionTitle">Residential Work</div>
        <div :class="$style.grid" class="width-site">
          <div :class="$style.gridThreeItem">
            <project-card
              v-for="project in residentialProjects"
              :key="project.sys.id"
              :project="project"
            />
          </div>
        </div>
      </div>

      <div :class="$style.section" class="width-site" id="commerical">
        <div :class="$style.sectionTitle">Commerical Work</div>
        <div :class="$style.grid" class="width-site">
          <div :class="$style.gridThreeItem">
            <project-card
              v-for="project in commericalProjects"
              :key="project.sys.id"
              :project="project"
            />
          </div>
        </div>
      </div>

      <div :class="$style.section" class="width-site" id="practise">
        <div :class="$style.sectionTitle">Practise</div>
        <div :class="$style.grid" class="width-site">
          <div
            :class="$style.gridThreeItem"
            v-html="documentToHtmlString(practiceDescription)"
          />
        </div>
      </div>

      <div :class="$style.section" class="width-site" id="contact">
        <div :class="$style.sectionTitle">Get In Touch</div>
        <div :class="$style.grid" class="width-site">
          <table :class="$style.contactTable">
            <tbody>
              <tr>
                <td>Contact us</td>
                <td>
                  <div class="font-sc">021 205 6478</div>
                  <a href="mailto:geoff@lowrise.co.nz" target="_blank">geoff@lowrise.co.nz</a>
                </td>
              </tr>
              <tr>
                <td>Visit us</td>
                <td>
                  19 Claremont Street
                  <br />
                  Maori Hill
                  <br />
                  Dunedin 9010
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Vue from 'vue'
import ProjectCard from '@/components/project_card'
import _ from 'lodash'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
const util = require('util')

export default Vue.extend({
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: null,
      heroImage: null,
      practiceDescription: null,
    }
  },
  computed: {
    residentialProjects() {
      return this.projects.filter(project => project.fields.type === 'Residential')
    },
    commericalProjects() {
      return this.projects.filter(project => project.fields.type === 'Commerical')
    },
  },
  methods: { documentToHtmlString },
  async asyncData(context) {
    const projects = await context.$contentful.getEntries({ content_type: 'project' })
    const homePage = await context.$contentful.getEntries({ content_type: 'homePage' })

    return {
      projects: projects.items,
      heroImage: homePage.items[0].fields.heroImage.fields,
      practiceDescription: homePage.items[0].fields.practiceDescription,
    }
  }
})
</script>

<style module lang='scss'>
@import '@/assets/styles/index.scss';

.container {
}
// .center
//   position: absolute
//   width: 200px
//   height: 200px
//   top: 50%
//   left: 50%
//   margin: -100px 0 0 -100px
//   .logo
//     background: image-url('assets/logo.svg')
//     width: 198px
//     height: 32px
//     margin: 0 auto
//   .text
//     text-align: center
//     margin-top: 40px
//     color: rgb(80,80,80)
//     line-height: 1.6

// Hero

.hero {
  background: black;
}

.heroImage {
  background-size: cover;
  background-position: 50% 50%;
  height: 100px;
  width: 100%;
}

.page {
  background: $color-page-bg;
  padding: 80px 0 80px;
}

.type {
  color: $color-secondary;
  font-size: 13px;
  text-transform: capitalize;
  padding-top: 2px;
}


// Section

.section {
  padding-bottom: 60px;
  overflow: auto;
  padding: 0 60px;
  max-width: 1120px;
  margin-bottom: 120px;
}

.sectionTitle {
  clear: both;
  margin-bottom: 36px;
  font-size: 24px;
  font-weight: 600;
}


// Grid

.grid {

}

.gridThreeItem {
  width: 32%;
  margin: 0 2% 40px 0;
  float: left;
  position: relative;

  &.last {
    margin-right: 0;
  }
}

.practise {
  .grid-three-item {
    float: left;
  }
}


// Contact Table

.contactTable {
  margin-bottom: 100px;

  tr {
    padding-bottom: 20px;
    border-bottom: 1px solid $color-tertiary;

    td {
      line-height: 26px;
      vertical-align: top;
      width: 32%;
      padding: 40px 0;
    }

    td:first-child {
      color: $color-secondary;
      text-transform: uppercase;
      border-spacing: 10px;
      font-size: 13px;
      letter-spacing: 2.4px;
    }

    &:last-of-type {
      border-bottom: none;
    }
  }

  input, textarea {
    float: left;
    width: 100%;
    margin-bottom: 12px;
    background: none;
  }

  input {
    padding: 0 20px 14px 0;
    border-bottom: 1px solid #E0DFDE;

    &:focus {
      border-bottom: 1px solid $color-primary;
    }
  }

  textarea {
    padding: 10px 18px 20px 0;
    resize: none;
  }

  button {
    background: none;
  }
}
</style>
