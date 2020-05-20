<template lang="pug">
  .homepage#homepage
    .home__scene#scene
      .home__scenefirstlayer(data-depth="0.2")
        img(src="~@/assets/img/Colchete_Esquerdo_Preto_Outline.png")
      .home__scenesecondlayer(data-depth="0.6")
        img(src="~@/assets/img/Colchete_Direito_Branco_Outline.png")
    .home
      .container
        h2.home__title
          span Felipe<br>Lira 
        h3.home__subtitle
          span
          span I’m a 
          b Front-End Developer 
          span and 
          b Designer.
        a.home__cta(href="#about", v-smooth-scroll="{ duration: 1200, offset: -50}") Check my Work
      a.home__arrow(href="#about", v-smooth-scroll="{ duration: 1200, offset: -50}")
        img(src="~@/assets/img/down_arrow.svg")
    .about#about
        h2.homepage__title ABOUT
        .container
          .about__image
            img(src="~@/assets/img/foto.jpg")
          .about__description
            p Hi! My name is Felipe, and I'm a Front-End Developer & Designer from Brazil, who's passionate about CSS and generating positive impact.
            p Since childhood, creating things and understanding problems is a passion. Working with user interaction in applications, when done well, is a way to generate positive impact on people's lives. For me, understanding how the process works from the start is essential for understanding the problem and creating the best possible solution.
    .skills
        //- h2.homepage__title SKILLS
        //- Skills(:tweetData="loadData")
        .container
          .skills__bar
            .skills__bartitle
              span CSS
              i.fab.fa-css3-alt
            .skills__barcontainer
              .skills__barcontainerprogress
          .skills__bar
            .skills__bartitle
              span HTML
              i.fab.fa-html5
            .skills__barcontainer
              .skills__barcontainerprogress
          .skills__bar
            .skills__bartitle
              span React
              i.fab.fa-react
            .skills__barcontainer
              .skills__barcontainerprogress
          .skills__bar
            .skills__bartitle
              span Vue
              i.fab.fa-vuejs
            .skills__barcontainer
              .skills__barcontainerprogress
          .skills__bar
            .skills__bartitle
              span Sass
              i.fab.fa-sass
            .skills__barcontainer
              .skills__barcontainerprogress
          .skills__bar
            .skills__bartitle
              span UX
              i.fas.fa-user
            .skills__barcontainer
              .skills__barcontainerprogress
          .skills__bar
            .skills__bartitle
              span UI Design
              i.fas.fa-mobile-alt
            .skills__barcontainer
              .skills__barcontainerprogress
          .skills__bar
            .skills__bartitle
              span Figma
              i.fab.fa-figma
            .skills__barcontainer
              .skills__barcontainerprogress
          .skills__bar
            .skills__bartitle
              span Adobe XD
              i.fab.fa-adobe
            .skills__barcontainer
              .skills__barcontainerprogress
    .portfolio
      h2.homepage__title PORTFOLIO
      <div class="controls">
          <button type="button" data-filter=".front-end">Front-End Development<span></span></button>
          <button type="button" data-filter=".web-design">UI/UX Design<span></span></button>
          <button type="button" data-filter=".react">React<span></span></button>
          <button type="button" data-filter=".vue">Vue.js<span></span></button>
          <button type="button" data-filter=".nuxt">Nuxt.js<span></span></button>
      </div>
      <div class="mixitupcontainer container">
        a.mix.front-end.react.items
          img(src="~@/assets/img/portfolio/startae.png")
          .overlay
          h3 Startaê Team
          p Front-End Development • React
          a.cta(href="https://startaeteam.felipelira.me", target='_blank') SEE MORE
        a.mix.front-end.react.items(href="http://app.desafiodedados.com.br", target='_blank')
          img(src="~@/assets/img/portfolio/ddd.png")
          h3 Data Challenge - Brazil's Biggest Datathon
          p Front-End Development • React
          a.cta(href="http://app.desafiodedados.com.br", target='_blank') SEE MORE
        a.mix.web-design.front-end.vue.nuxt.items
          img(src="~@/assets/img/portfolio/cslive.png")
          h3 CSLive
          p UI/UX Design • Front-End Development • Vue.js • Nuxt.js
          a.cta(href="https://cslivebr.com/", target='_blank') SEE MORE
        a.mix.front-end.vue.items
          img(src="~@/assets/img/portfolio/qubo.png")
          .overlay
          h3 Qubo Technologies - Data to Drive Innovation
          p Front-End Development • Vue.js
          a.cta(href="https://qubo.uno/", target='_blank') SEE MORE
        a.mix.front-end.vue.web-design.items
          img(src="~@/assets/img/portfolio/qbot.png")
          .overlay
          h3 Qbot - Decide with Confidence
          p UI/UX Design • Front-End Development • Vue.js
          a.cta(href="https://qubo.uno/qbot", target='_blank') SEE MORE
        a.mix.front-end.vue.items
          img(src="~@/assets/img/portfolio/beiramar.png")
          h3 Group Beiramar - Real Estate Agency
          p Front-End Development • Vue.js
          a.cta(href="https://beiramarimoveis.com.br/", target='_blank') SEE MORE
        a.mix.front-end.items
          img(src="~@/assets/img/portfolio/bm-anuncie.png")
          h3 Group Beiramar - Sell or Rent your Property
          p Front-End Development
          a.cta(href="https://beiramarimoveis.com.br/anuncie", target='_blank') SEE MORE
        a.mix.web-design.front-end.wordpress.items
          img(src="~@/assets/img/portfolio/vemares.png")
          h3 Vemares Band
          p UI/UX Design • Front-End Development • Wordpress
          a.cta(href="https://vemares.com.br/", target='_blank') SEE MORE
        a.mix.web-design.front-end.items
          img(src="~@/assets/img/portfolio/rbv.png")
          h3 RBV Engineering
          p UI/UX Design • Front-End Development
          a.cta(href="https://rbvengenharia.com/", target='_blank') SEE MORE
        //- a.mix.front-end.ecommerce.items
        //-   img(src="~@/assets/img/portfolio/orbi.png")
        //-   h3 RBV Engineering
        //-   p Front-End Development • Xtech Commerce
        //-   a.cta(href="https://rbvengenharia.com/", target='_blank') SEE MORE
      </div>
    .contact
      h2.homepage__title CONTACT
      .container
        a(href="mailto:felipelira1908@hotmail.com")
          i.fas.fa-envelope
          span felipelira1908@hotmail.com
        form(action="/thankyou")
          input(type="text", name="name", placeholder="Name", required)
          input(type="email", name="email", placeholder="Email", required)
          textarea(name="msg", placeholder="Message")
          button.sendform(type="submit") SUBMIT
    footer
      .container
        a(href="https://www.linkedin.com/in/felipeliraf/", target="_blank")
          i.fab.fa-linkedin-in
        a(href="https://www.instagram.com/liraaf_/", target="_blank")
          i.fab.fa-instagram
        a(href="https://twitter.com/liraf_", target="_blank")
          i.fab.fa-twitter
</template>

<script>
import Skills from "../components/Skills.vue";

import Parallax from 'parallax-js';
// import * as d3 from 'd3';
import mixitup from 'mixitup';

import ddd from '../assets/img/portfolio/ddd.png'


export default {
  name: 'HomeBkp',
  components: {
    Skills
  },
  data: function() {
    return {
      ddd
    };
  },
  mounted () {
    let scene = document.getElementById('scene')
    new Parallax(scene)

    var body = document.body
    var html = document.documentElement

    var height = Math.max( body.scrollHeight, body.offsetHeight, 
                          html.clientHeight, html.scrollHeight, html.offsetHeight )
    
    var elem_scene = document.querySelector('#scene')
    elem_scene.style.height = height/2 + 'px'

    var containerEl = document.querySelector('.mixitupcontainer')
    mixitup(containerEl, {
      animation: {
        easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
      },
      load: {
        filter: '.front-end'
      }
    })


    window.addEventListener('scroll', function () {
      var elem = document.querySelector('#homepage')

      if (window.pageYOffset > 350) {
        elem.style.backgroundColor = '#FFFFFF'
      } else {
        elem.style.backgroundColor = '#232323'
      }
    }, false)


    var elem = document.querySelector('#homepage')
    if (window.pageYOffset > 350) {
      elem.style.backgroundColor = '#FFFFFF'
    } else {
      elem.style.backgroundColor = '#232323'
    }
  }
}
</script>

<style lang="scss" scoped>
.homepage{
  transition: 0.3s background-color ease-in-out;
  .contact{
    padding: 60px 0px;
    padding-bottom: 120px;
    h2{
      margin-bottom: 30px;
    }
    a{
      color: #232323;
      text-decoration: none !important;
      display: block;
      text-align: center;
      margin-bottom: 40px;
      i{
        font-size: 26px;
        display: inline-block;
        vertical-align: middle;
      }
      span{
        display: inline-block;
        vertical-align: middle;
        padding-left: 15px;
        line-height: 7px;
      }
    }
    form{
      width: 700px;
      max-width: 100%;
      display: block;
      margin: auto;
      input, textarea{
        width: calc(100% - 10px);
        border: 0px;
        font-size: 16px;
        color: #232323;
        height: 33px;
        border-bottom: 1px solid #b7b7b7;
        padding-left: 10px;
        margin-bottom: 40px;
        font-family: 'Sarabun';
      }
      button{
        background-color: $idGreen;
        color: #ffffff;
        text-decoration: none !important;
        font-weight: 500;
        padding: 15px 35px;
        display: inline-block;
        margin-top: 24px;
        border-radius: 7px;
        letter-spacing: 1px;
        font-size: 18px;
        transition: 0.3s all ease-in-out;
        box-shadow: none;
        border: 0px;
        width: 100%;
        &:hover{
          cursor: pointer;
          background-color: $idGreenDarker;
        }
      }
    }
  }
  &__title{
    font-size: 45px;
    text-align: center;
    color: #232323;
    font-weight: bold;
    letter-spacing: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    margin-bottom: 50px;
    background-size: 150px;
    background-repeat: no-repeat;
    background-position: 53%;
    background-image: url(~@/assets/img/Simbolo_Preto_Opacity.png);
  }
  .home__scene{
    position: absolute;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    z-index: 10000;
    &firstlayer{
      height: 100vh;
      width: 100vw;
      img{
        position: absolute;
        left: -40px;
        bottom: -100vh;
        width: 180px;
        @media screen and (max-width: 600px) {
          opacity: 0.2;
          bottom: -80vh;
        }
      }
    }
    &secondlayer{
      height: 100vh;
      width: 100vw;
      img{
        position: absolute;
        right: -90px;
        bottom: 80%;
        width: 450px;
        opacity: 0.5;
      }
    }
    &thirdlayer{
      height: 100vh;
      width: 100vw;
      img{
        position: absolute;
        left: -90px;
        bottom: 90%;
        width: 250px;
      }
    }
    &fourthlayer{
      height: 100vh;
      width: 100vw;
      img{
        position: absolute;
        right: 0px;
        bottom: 0px;
        width: 180px;
      }
    }
  }
  .home{
    width: 100%;
    height: 100vh;
    display: block;
    position: relative;
    @media screen and (max-width: 600px) {
      height: 90vh;
    }
    @keyframes move {
      0% { transform: translateY(0); }
      100% { transform: translateY(-30px); }
    }
    &__arrow{
      position: absolute;
      display: block;
      text-align: center;
      width: 110px;
      bottom: 50px;
      left: calc(50% - 55px);
      animation: move 0.8s infinite alternate;
      img{
        position: relative;
      }
    }
    .container{
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: baseline;
    }
    .home__title{
      font-weight: 400;
      font-size: 135px;
      line-height: 150px;
      text-align: left;
      color: #FFFFFF;
      font-family: 'Sarabun';
      @media screen and (max-width: 600px) {
        font-size: 80px;
        line-height: 96px;
      }
      span{
        color: #FFFFFF;
        font-weight: bold;
        font-family: 'Sarabun';
      }
    }
    .home__subtitle{
      font-style: normal;
      font-size: 28px;
      line-height: 36px;
      text-align: left;
      color: #FFFFFF;
      margin-top: 40px;
      margin-bottom: 20px;
      position: relative;
      span, b{
        z-index: 20;
        position: relative;
      }
      span:first-child{
        z-index: 10;
        width: 160%;
        max-width: 100vw;
        position: absolute;
        left: -50%;
        height: 130%;
        top: -15%;
        background-color: $idRed;
        @media screen and (max-width: 600px) {
          left: -10%;
          width: 95vw;
        }
      }
      b{
        font-weight: bold;
      }
    }
    .home__cta{
      color: #ffffff;
      text-decoration: none;
      background-color: $idGreen;
      padding: 20px 30px;
      display: block;
      margin-top: 30px;
      font-size: 22px;
      letter-spacing: 1px;
      font-weight: 600;
      transition: 0.3s all ease-in-out;
      &:hover{
        background-color: $idGreenDarker;
      }
    }
  }
  .about{
    padding: 20px 0px;
    // padding-top: 20px;
    .container{
      max-width: 950px;
    }
    &__image{
      width: 50%;
      display: inline-block;
      vertical-align: middle;
      text-align: center;
      @media screen and (max-width: 900px) {
        width: 80%;
        display: block;
        margin: auto;
      }
      img{
        border-radius: 700px;
        width: 400px;
        max-width: 100%;
      }
    }
    &__description{
      width: 50%;
      display: inline-block;
      vertical-align: middle;
      @media screen and (max-width: 900px) {
        width: 100%;
        display: block;
        margin: auto;
        margin-top: 50px;
      }
      p{
        font-size: 18px;
        line-height: 27px;
        text-align: center;
        margin-bottom: 14px;
        @media screen and (max-width: 900px) {
          font-size: 14px;
          line-height: 21px;
        }
      }
    }
  }
  .skills{
    padding-bottom: 140px;
    padding-top: 80px;
    &__bar{
      width: 50%;
      display: block;
      margin: auto;
      margin-top: 15px;
      position: relative;
      @media screen and (max-width: 900px) {
        width: 100%;
      }
      span{
        display: inline;
        vertical-align: middle;
      }
      i{
        font-size: 24px;
        display: inline-block;
        vertical-align: middle;
        padding-left: 10px;
        width: 30px;
        text-align: center;
      }
      &title{
        display: inline-block;
        vertical-align: middle;
        width: 135px;
        text-align: right;
        font-size: 18px;
        position: absolute;
        left: -135px;
        @media screen and (max-width: 900px) {
          width: 100%;
          text-align: left;
          display: block;
          position: relative;
          left: 0px;
        }
      }
      &container{
        width: calc(100%);
        display: inline-block;
        vertical-align: middle;
        height: 25px;
        margin-left: 15px;
        border-radius: 0px;
        background: #e8e8e8;
        // border: 2px solid #ececec;
        @media screen and (max-width: 900px) {
          width: 100%;
          text-align: left;
          display: block;
          margin: 0px;
          margin-top: 20px;
        }
        &progress{
          display: block;
          background: $idGreen;
          height: 25px;
          border-radius: 0px;
        }
      }
      &:nth-child(1){
        .skills__barcontainerprogress{
          width: 90%;
        }
      }
      &:nth-child(2){
        .skills__barcontainerprogress{
          width: 90%;
        }
      }
      &:nth-child(3){
        .skills__barcontainerprogress{
          width: 78%;
        }
      }
      &:nth-child(4){
        .skills__barcontainerprogress{
          width: 80%;
        }
      }
      &:nth-child(5){
        .skills__barcontainerprogress{
          width: 85%;
        }
      }
      &:nth-child(6){
        .skills__barcontainerprogress{
          width: 90%;
        }
      }
      &:nth-child(7){
        .skills__barcontainerprogress{
          width: 85%;
        }
      }
      &:nth-child(8){
        .skills__barcontainerprogress{
          width: 70%;
        }
      }
      &:nth-child(9){
        .skills__barcontainerprogress{
          width: 60%;
        }
      }
      &:nth-child(10){
        .skills__barcontainerprogress{
          width: 40%;
        }
      }
    }
  }
  .portfolio{
    /* Target Elements
      ---------------------------------------------------------------------- */
      .mix,
      .gap {
          display: inline-block;
          vertical-align: top;
      }
      .mix {
          background: #fff;
          border-radius: 2px;
          margin-bottom: 1rem;
          position: relative;
      }
      .mix:before {
          content: '';
          display: inline-block;
          padding-top: 56.25%;
      }
    .controls{
      text-align: center;
      margin-bottom: 80px;
      button{
        background: none !important;
        box-shadow: none !important;
        border: 0px;
        font-size: 17px;
        font-family: 'Sarabun';
        font-weight: 500;
        padding: 0px 30px;
        position: relative;
        @media screen and (max-width: 900px) {
          margin-bottom: 20px;
        }
        span{
          position: absolute;
          left: 0;
          width: 0%;
          background: $idRed;
          height: 2px;
          bottom: -15px;
          transition: 0.3s all ease-in-out;
          @media screen and (max-width: 900px) {
            bottom: -8px;
          }
        }
      }
      button.mixitup-control-active{
        span{
          width: 100%;
        }
      }
      button:hover{
        cursor: pointer;
      }
    }
    .items{
      width: calc(33.33333% - 80px);
      display: inline-block;
      vertical-align: top;
      padding: 10px 40px;
      margin-bottom: 80px;
      text-decoration: none;
      @media screen and (max-width: 900px) {
        width: calc(50% - 40px);
        padding: 10px 20px;
        margin-bottom: 40px;
      }
      @media screen and (max-width: 600px) {
        width: calc(100%);
        padding: 10px 0px;
        margin-bottom: 40px;
      }
      .cta{
        background-color: $idGreen;
        color: #ffffff;
        text-decoration: none !important;
        font-weight: 500;
        padding: 15px 35px;
        display: inline-block;
        margin-top: 24px;
        border-radius: 7px;
        letter-spacing: 1px;
        font-size: 18px;
        transition: 0.3s all ease-in-out;
        &:hover{
          background-color: $idGreenDarker;
        }
      }
      img{
        max-width: 100%;
        border-radius: 10px;
      }
      h3{
        color: #232323;
        font-size: 28px;
        line-height: 33.6px;
        margin-top: 20px;
        font-weight: bold;
      }
      p{
        color: $idGreen;
        font-size: 18px;
        line-height: 27px;
        margin-top: 12px;
        font-weight: 400;
      }
    }
  }
  footer{
    background: #232323;
    padding: 50px 0px;
    text-align: center;
    a{
      display: inline-block;
      position: relative;
      padding: 0px 10px;
      i{
        color: #fff;
        font-size: 32px;
      }
    }
  }
}
</style>