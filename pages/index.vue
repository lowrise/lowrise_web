<template>
  <main :class="$style.container">
    <div :class="$style.hero">
      <div
        :class="$style.heroImage"
        :style="{
          'background-image': `url('${ heroImage.file.url }')`
        }"
      />
    </div>

    <div :class="$style.page" class="width-full">
      <div :class="$style.section" class="width-site" id="residential">
        <div :class="$style.sectionTitle">Residential Work</div>
        <div :class="$style.grid" class="width-site">
          <project-card
            v-for="project in residentialProjects"
            :key="project.sys.id"
            :project="project"
          />
        </div>
      </div>

      <div :class="$style.section" class="width-site" id="commerical">
        <div :class="$style.sectionTitle">Commerical Work</div>
        <div :class="$style.grid" class="width-site">
          <project-card
            v-for="project in commercialProjects"
            :key="project.sys.id"
            :project="project"
          />
        </div>
      </div>

      <div :class="$style.section" class="width-site" id="practise">
        <div :class="$style.sectionTitle">Practise</div>
        <div class="width-site">
          <div
            :class="$style.practiceDescription"
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
                  56 Heriot Row
                  <br />
                  Dunedin 9016
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
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

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
  methods: { documentToHtmlString },
  async asyncData(context) {
    const homePage = await context.$contentful.getEntries({ content_type: 'homePage' })
    const fields = homePage.items[0].fields

    return {
      heroImage: homePage.items[0].fields.heroImage.fields,
      residentialProjects: fields.residentialProjects,
      commercialProjects: fields.commercialProjects,
      practiceDescription: homePage.items[0].fields.practiceDescription,
    }
  }
})
</script>

<style module>
@import "../assets/styles/index.css";

.container {
}

/* Hero */

.hero {
  background: black;
}

.heroImage {
  background-size: cover;
  background-position: 50% 50%;
  height: 700px;
  width: 100%;
}

@media (max-width: 800px) {
  .heroImage {
    height: 500px;
  }
}

.page {
  background: var(--color-page-bg);
  padding: 80px 0 80px;
}

.type {
  color: var(--color-secondary);
  font-size: 13px;
  text-transform: capitalize;
  padding-top: 2px;
}

/* Section */

.section {
  padding-bottom: 60px;
  padding: 0 60px;
  max-width: 1120px;
  margin-bottom: 120px;
}

@media (max-width: 800px) {
  .section {
    padding: 0 20px;
  }
}

.sectionTitle {
  clear: both;
  margin-bottom: 36px;
  font-size: 24px;
  font-weight: 600;
}

/* Grid */

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 40px 30px;
}

@media (max-width: 800px) {
  .grid {
    grid-gap: 20px 10px;
  }
}

/* Practice Description */

.practiceDescription {
  column-count: 2;
  column-width: 250px;
}

/* Contact Table */

.contactTable {
  margin-bottom: 100px;
}

.contactTable tr {
  padding-bottom: 20px;
  border-bottom: 1px solid var(--color-tertiary);
}

.contactTable tr td {
  line-height: 26px;
  vertical-align: top;
  width: 32%;
  padding: 40px 0;
}

.contactTable tr td:first-child {
  color: var(--color-secondary);
  text-transform: uppercase;
  border-spacing: 10px;
  font-size: 13px;
  letter-spacing: 2.4px;
}

.contactTable tr:last-of-type {
  border-bottom: none;
}

.contactTable input,
.contactTable textarea {
  float: left;
  width: 100%;
  margin-bottom: 12px;
  background: none;
}

.contactTable input {
  padding: 0 20px 14px 0;
  border-bottom: 1px solid #E0DFDE;
}

.contactTable input:focus {
  border-bottom: 1px solid var(--color-primary);
}

.contactTable textarea {
  padding: 10px 18px 20px 0;
  resize: none;
}

.contactTable button {
  background: none;
}
</style>
