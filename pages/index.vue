<template>
  <main :class="$style.container">
    <div class="hero js-section">
      <div class="img-hero" />
    </div>
    <div class="page-home width-full">
      <div class="section js-section" id="residential">
        <div class="section-title">Residential Work</div>
        <div class="grid">
          <div
            class="grid-three-item"
          >
            <div class="cover" />
            <div class="img-project-profile">
              <img />
            </div>
            <div class="title">Title</div>
            <div class="type">Type</div>
          </div>
        </div>
      </div>

      <div class="section js-section" id="commerical">
        <div class="section-title">Commerical Work</div>
        <div class="grid">
          <div
            class="grid-three-item"
          >
            <div class="cover" />
            <div class="img-project-profile">
              <img />
            </div>
            <div class="title">Title</div>
            <div class="type">Type</div>
          </div>
        </div>
      </div>

      <div class="section js-section" id="practise">
        <div class="section-title">Practise</div>
        <div class="grid practice">
          <div class="grid-three-item">
            <p>We are a small architectural design company based in Dunedin, New Zealand. We are licensed Building Practioners (D2 design license), and as our name suggests, we focus on low rise projects to 3 levels or 10 meters in height. We have extensive experience in residential and commercial new builds, renovations, fit-outs and historic re-use of existing structures.</p>
            <p>We are committed to a collaborative design process that is client centred, focused on ensuring our clients’ needs and aspirations are listened to and realised. You are assured of a personalised service throughout, and will deal with the same person from concept through to built design.</p>
            <p>We believe in calm, uncluttered design that responds directly to client needs, to site and to place. We achieve unique design solutions that achieve maximum value for clients and improve the quality of their lives.</p>
          </div>
        </div>
      </div>

      <div class="section js-section" id="contact">
        <div class="section-title">Get In Touch</div>
        <div class="grid">
          <table class="table-contact">
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

export default Vue.extend({

})
</script>

<style module lang='scss'>
.index
  .center
    position: absolute
    width: 200px
    height: 200px
    top: 50%
    left: 50%
    margin: -100px 0 0 -100px
    .logo
      background: image-url('assets/logo.svg')
      width: 198px
      height: 32px
      margin: 0 auto
    .text
      text-align: center
      margin-top: 40px
      color: rgb(80,80,80)
      line-height: 1.6

.hero
  background: black

.img-hero
  background: image-url('images/hero.jpg')
  background-size: cover
  background-position: 50% 50%
  height: 100px
  width: 100%

.page-home
  background: $color-page-bg
  padding: 80px 0 80px

  .type
    color: $color-secondary
    font-size: 13px
    text-transform: capitalize
    padding-top: 2px

.section
  @extend .width-site
  padding-bottom: 60px
  overflow: auto
  padding: 0 60px
  max-width: 1120px
  margin-bottom: 120px

.section-title
  clear: both
  margin-bottom: 36px
  font-size: 24px
  font-weight: 600

.practise
  .grid-three-item
    float: left

.table-contact
  margin-bottom: 100px
  tr
    padding-bottom: 20px
    border-bottom: 1px solid $color-tertiary
    td
      line-height: 26px
      vertical-align: top
      width: 32%
      padding: 40px 0
    td:first-child
      color: $color-secondary
      text-transform: uppercase
      border-spacing: 10px
      font-size: 13px
      letter-spacing: 2.4px
    &:last-of-type
      border-bottom: none
  input, textarea
    float: left
    width: 100%
    margin-bottom: 12px
    background: none
  input
    padding: 0 20px 14px 0
    border-bottom: 1px solid #E0DFDE
    &:focus
      border-bottom: 1px solid $color-primary
  textarea
    padding: 10px 18px 20px 0
    resize: none
  button
    background: none

</style>
