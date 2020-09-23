<template>
  <div :class="$style.container" class="width-full">
    <div :class="$style.topContainer" class="width-site">
      <div :class="$style.projectInfo">
        <div :class="$style.projectInfoTitle">project.title</div>
        <div :class="$style.projectInfoType">project.type</div>
        <div :class="$style.projectInfoDescription">project.description</div>
        <nuxt-link :class="$style.backButton" to="/">
          <div :class="$style.backButtonIcon" />
          Back to all projects
        </nuxt-link>
      </div>
      <img :class="style.projectInfoImage" src="xxx"/>
      <div class="clear">
    </div>

    <div :class="$style.imageContainer">Images</div>

    <div :class="$style.footer">
      <div :class="$style.footerLeft">Get in touch</div>
      <div :class="$style.footerRight">Next project</div>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({

})
</script>

<style module lang='scss'>
@import '@/assets/styles/index.scss';

.container {
  background: $color-page-bg;
  margin-bottom: 270px;
  padding: 80px 0 100px;
  z-index: 200;
  position: relative;
  box-shadow: 0 1px 6px rgba(0,0,0,0.10);
}

.topContainer {
  padding: 100px 0 160px;
}

.projectInfo {
  float: left;
  width: 30%;
  margin-right: 5%;
}

.projectInfoTitle {
  font-size: 40px;
  font-weight: 600;
  line-height: 40px;
}

.projectInfoType {
  padding: 16px 0 0;
  text-transform: uppercase;
  color: #96918d;
  letter-spacing: 2px;
  font-size: 13px;
}

.projectInfoDescription {
  padding-top: 18px;
  padding-bottom: 32px;
  margin: 0;
}

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

// .block
//   float: left
//   width: 50%
//   height: 150px
//   padding: 0 40px
//   img
//     float: left
//     height: 100%
//   .btn:hover
//     color: #448EB5
//     .arrow-right
//       transform: translateX(4px)
//   .project-footer-subtitle
//     float: left
//     font-size: 15px
//     color: $color-secondary
//     clear: both
//   &.left
//     border-right: 1px solid rgb(242,242,242)
//     .btn-big
//       line-height: 150px
//       float: right

//   &.right
//     .element
//       position: absolute
//       top: 50%
//     .inner
//       height: 62px
//       position: relative
//       top: -32px
//       .btn-big
//         margin: 5px 0 0 28px

@media (max-width: 1000px) {
  .container {
    padding: 80px 60px 80px;
  }
}
</style>
