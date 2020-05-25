<template lang="pug">
    .skills.section
        .titlecontainer.titlecontainer--left
            h3.titlecontainer__content
                span
                span Skills
        .container
            .container__col50.container__col50--middle
                p.skills__text I'm passionate about writing good and consistent Front-End code and also Design. I believe that interfaces have the power to have a positive impact on people's lives.
                p.skills__text My main design tool is Figma, and I love creating apps on Vue and React. SASS and BEM are also important tools - writing reusable code is essential for me.
                .skills__items
                    .skills__item
                        img(src="~@/assets/img/new/ruler.svg")
                        h4 Pixel-Perfect
                    .skills__item
                        img(src="~@/assets/img/new/timer.svg")
                        h4 Fast
                    .skills__item
                        img(src="~@/assets/img/new/lamp.svg")
                        h4 Intuitive
                router-link.cta(to="/contact") Contact Me
            .container__col50.container__col50--middle
                .skills__line
                    h3 Coding
                        span
                    .skills__lineitem.skills__lineitem--1 HTML 5
                    .skills__lineitem.skills__lineitem--1 CSS
                    .skills__lineitem.skills__lineitem--1 JavaScript
                    .skills__lineitem.skills__lineitem--1 SASS
                    .skills__lineitem.skills__lineitem--1 BEM
                    .skills__lineitem.skills__lineitem--1 Vue.js
                    .skills__lineitem.skills__lineitem--1 Vuex
                    .skills__lineitem.skills__lineitem--1 Nuxt.js
                    .skills__lineitem.skills__lineitem--1 React
                    .skills__lineitem.skills__lineitem--1 Redux
                    .skills__lineitem.skills__lineitem--1 Python
                    .skills__lineitem.skills__lineitem--1 PhP
                    .skills__lineitem.skills__lineitem--1 Wordpress
                    .skills__lineitem.skills__lineitem--1 Webpack
                    .skills__lineitem.skills__lineitem--1 Cypress
                    .skills__lineitem.skills__lineitem--1 NPM
                    .skills__lineitem.skills__lineitem--1 Git
                    .skills__lineitem.skills__lineitem--1 Bootstrap
                    .skills__lineitem.skills__lineitem--1 Materialize
                .skills__line
                    h3 Design
                        span
                    .skills__lineitem.skills__lineitem--1 Web Design
                    .skills__lineitem.skills__lineitem--1 Mobile Design
                    .skills__lineitem.skills__lineitem--1 UX
                    .skills__lineitem.skills__lineitem--1 Figma
</template>

<script>
export default {
  name: "Skills"
};
</script>

<style lang="scss" scoped>
.skills {
  .container {
    margin-top: 50px;
  }
  &__items {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__item {
    width: calc(33% - 40px);
    display: inline-block;
    vertical-align: top;
    padding: 10px 20px;
    margin-top: 40px;
    @media screen and (max-width: 900px) {
      padding: 10px 5px;
    }
    img {
      width: 75px;
      display: block;
      margin: auto;
      max-width: 100%;
    }
    h4 {
      font-family: Sarabun;
      font-style: normal;
      font-weight: bold;
      font-size: 22px;
      line-height: 26.4px;
      text-align: center;
      color: #fff;
      margin: 15px 0px;
      @media screen and (max-width: 900px) {
        font-size: 18px;
        line-height: 22.4px;
      }
    }
    p {
      font-size: 14px;
      line-height: 21px;
      text-align: center;
      color: #fff;
      margin-bottom: 0px;
    }
  }
  &__line {
    display: block;
    margin-bottom: 40px;
    @media screen and (max-width: 900px) {
      margin-top: 40px;
    }
    h3 {
      font-family: "Rajdhani";
      font-size: 45px;
      font-weight: bold;
      color: #ffffff;
      margin-bottom: 45px;
      position: relative;
      span {
        background: rgba(190, 65, 87, 0.5);
        display: block;
        width: 100%;
        height: 15px;
        bottom: 3px;
        position: absolute;
        z-index: -1;
      }
    }
    &item {
      padding-right: 50px;
      padding-bottom: 30px;
      display: inline-block;
      vertical-align: baseline;
      color: #ffffff;
      font-weight: bold;
      &:hover {
        cursor: pointer;
      }
      &--1 {
        font-family: "Sarabun";
        font-style: italic;
        font-size: 24px;
        @media screen and (max-width: 900px) {
          font-size: 18px;
        }
      }
      &--2 {
        font-family: "Rajdhani";
        font-style: normal;
        font-size: 30px;
      }
      &--3 {
        font-family: "Sarabun";
        font-style: italic;
        font-size: 60px;
      }
      &--4 {
        font-family: "Sarabun";
        font-style: normal;
        font-size: 45px;
      }
      &--5 {
        font-family: "Sarabun";
        font-style: italic;
        font-size: 30px;
      }
      &--green {
        color: #a6c541;
      }
    }
  }
}
</style>