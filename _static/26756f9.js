(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{336:function(t,e,o){t.exports={"font-sc":"_id_font-sc__3qoA","width-full":"_id_width-full__2Zg4","width-site":"_id_width-site__kIPr",clear:"_id_clear__Fa4Z","grid-three-item":"_id_grid-three-item__36Ai",last:"_id_last__z5q9",cover:"_id_cover__5NJz","img-project-profile":"_id_img-project-profile__2ojg",subtitle:"_id_subtitle__3wh8",title:"_id_title__3f-t",container:"_id_container__2LqC",projectPage:"_id_projectPage__enIh",topContainer:"_id_topContainer__2EAB",projectInfo:"_id_projectInfo__2507",projectInfoTitle:"_id_projectInfoTitle__JpGy",projectInfoType:"_id_projectInfoType__17Oh",projectInfoDescription:"_id_projectInfoDescription__3Qjz",projectInfoImage:"_id_projectInfoImage__1Mxz",backButton:"_id_backButton__37pa",backButtonIcon:"_id_backButtonIcon__3A-R",imageContainer:"_id_imageContainer__1AMd",projectImage:"_id_projectImage__2-Oy",projectSubtitle:"_id_projectSubtitle__2c4E",subtitleText:"_id_subtitleText__37po",projectCaption:"_id_projectCaption__1pB0",footer:"_id_footer__3fMK",footerBlock:"_id_footerBlock__3hOV",btn:"_id_btn__25OO","arrow-right":"_id_arrow-right__sh8k","project-footer-subtitle":"_id_project-footer-subtitle__1G63",footerBlockleft:"_id_footerBlockleft__cwm3","btn-big":"_id_btn-big__14WI",footerBlockRight:"_id_footerBlockRight__PQTg",element:"_id_element__3oZ4",inner:"_id_inner__2V5r"}},343:function(t,e,o){"use strict";var _=o(336),r=o.n(_);e.default=r.a},350:function(t,e,o){"use strict";o.r(e);o(56),o(39);var _=o(7),r=o(0),n=(o(339),o(340)),c=r.a.extend({data:function(){return{project:null}},methods:{documentToHtmlString:n.documentToHtmlString},asyncData:function(t){return Object(_.a)(regeneratorRuntime.mark((function e(){var o,_;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$contentful.getEntries({content_type:"project"});case 2:return o=e.sent,_=t.route.params.id,e.abrupt("return",{project:o.items.filter((function(t){return t.fields.slug===_}))[0]});case 5:case"end":return e.stop()}}),e)})))()}}),l=o(343),d=o(29);var component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:t.$style.container},[o("div",{staticClass:"width-full",class:t.$style.projectPage},[o("div",{staticClass:"width-site",class:t.$style.topContainer},[o("img",{class:t.$style.projectInfoImage,attrs:{src:t.project.fields.hero.fields.file.url}}),t._v(" "),o("div",{class:t.$style.projectInfo},[o("div",{class:t.$style.projectInfoTitle},[t._v(t._s(t.project.fields.title))]),t._v(" "),o("div",{class:t.$style.projectInfoType},[t._v(t._s(t.project.fields.type))]),t._v(" "),o("div",{class:t.$style.projectInfoDescription,domProps:{innerHTML:t._s(t.documentToHtmlString(t.project.fields.description))}}),t._v(" "),o("nuxt-link",{class:t.$style.backButton,attrs:{to:"/"}},[o("div",{class:t.$style.backButtonIcon}),t._v("\n            Back to all projects\n          ")])],1),t._v(" "),o("div",{staticClass:"clear"})]),t._v(" "),o("div",{class:t.$style.imageContainer},t._l(t.project.fields.images,(function(e){return o("div",{key:e.sys.id,class:t.$style.projectImage},[o("img",{staticClass:"width-site",attrs:{src:e.fields.file.url}})])})),0)]),t._v(" "),o("div",{staticClass:"width-site",class:t.$style.footer},[o("div",{class:[t.$style.footerBlock,t.$style.footerBlockLeft]},[o("div",{class:t.$style.element},[o("a",{class:t.$style.footerButton,attrs:{href:"/#contact"}},[t._v("Get in touch")])])]),t._v(" "),o("div",{class:[t.$style.footerBlock,t.$style.footerBlockRight]},[o("div",{class:t.$style.element})])])])}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);e.default=component.exports}}]);