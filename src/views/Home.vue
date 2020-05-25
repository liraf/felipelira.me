<template lang="pug">
  .homepage.section
    .home__scene.DestroyBeforeRouteChange#scene
      .home__scenefirstlayer(data-depth="0.2")
        img(src="~@/assets/img/Colchete_Esquerdo_Preto_Outline.png")
      .home__scenesecondlayer(data-depth="0.6")
        img(src="~@/assets/img/Colchete_Direito_Branco_Outline.png")
    .home
      .container
        h2.home__title
          span Felipe<br>Lira 
        h3.home__subtitle
          span I’m a 
          b Front-End Developer 
          span and 
          b Designer.
        router-link.cta.DestroyBeforeRouteChange(to="/projects") Check my Work
</template>

<script>
import Parallax from "parallax-js";

export default {
  name: "Home",
  mounted() {
    let scene = document.getElementById("scene");
    new Parallax(scene);

    var body = document.body;
    var html = document.documentElement;

    var height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );

    var elem_scene = document.querySelector("#scene");
    elem_scene.style.height = height / 2 + "px";
  }
};
</script>

<style lang="scss">
.DestroyBeforeRouteChange {
  opacity: 1;
}
.homepage {
  &__title {
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
  .home__scene {
    position: absolute;
    width: 100%;
    height: calc(100vh - #{$menuHeight});
    overflow: hidden;
    z-index: 10000;
    &firstlayer {
      height: 100vh;
      width: 100vw;
      img {
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
    &secondlayer {
      height: 100vh;
      width: 100vw;
      img {
        position: absolute;
        right: -90px;
        bottom: 60%;
        width: 450px;
        opacity: 0.5;
      }
    }
    &thirdlayer {
      height: 100vh;
      width: 100vw;
      img {
        position: absolute;
        left: -90px;
        bottom: 90%;
        width: 250px;
      }
    }
    &fourthlayer {
      height: 100vh;
      width: 100vw;
      img {
        position: absolute;
        right: 0px;
        bottom: 0px;
        width: 180px;
      }
    }
  }
  .home {
    width: 100%;
    height: calc(100vh - #{$menuHeight});
    display: block;
    position: relative;
    @media screen and (max-width: 600px) {
      height: 90vh;
    }
    @keyframes move {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-30px);
      }
    }
    &__arrow {
      position: absolute;
      display: block;
      text-align: center;
      width: 110px;
      bottom: 50px;
      left: calc(50% - 55px);
      animation: move 0.8s infinite alternate;
      img {
        position: relative;
      }
    }
    .container {
      height: calc(100vh - #{$menuHeight});
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: baseline;
      @media screen and (max-width: 600px) {
        height: calc(100vh - 122px);
      }
    }
    .home__title {
      font-weight: 400;
      font-size: 135px;
      line-height: 150px;
      text-align: left;
      color: #ffffff;
      font-family: "Sarabun";
      @media screen and (min-width: 600px) and (max-height: 700px) {
        font-size: 80px;
        line-height: 96px;
      }
      @media screen and (max-width: 600px) {
        font-size: 80px;
        line-height: 96px;
      }
      span {
        color: #ffffff;
        font-weight: bold;
        font-family: "Sarabun";
      }
    }
    @keyframes example {
      100% {
        right: -20px;
        top: 40px;
        padding-left: 40px;
        padding-right: 60px;
      }
    }
    .home__subtitle {
      font-style: normal;
      font-size: 28px;
      line-height: 36px;
      text-align: left;
      color: #ffffff;
      margin-top: 40px;
      margin-bottom: 20px;
      position: relative;
      background-color: $idRed;
      padding: 10px 40px 10px 160px;
      margin-left: -150px;
      @media screen and (max-width: 600px) {
        font-size: 20px;
        line-height: 24px;
      }
      &--beforedestroy {
        animation-name: example;
        animation-duration: 2.5s;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
      }
      span,
      b {
        z-index: 20;
        position: relative;
      }
      b {
        font-weight: bold;
      }
    }
  }
}
</style>