<template lang="pug">
    .about.section
        .titlecontainer
            h3.titlecontainer__content
                span
                span I’m a 
                b Front-End Developer 
                span and 
                b Designer.
        .container
            h2.about__title
                span Felipe<br>Lira 
            h3.about__subtitle.about__subtitle--fake
                span
                span I’m a 
                b Front-End Developer 
                span and 
                b Designer.
            a.about__cta.about__cta--fake(href="#about", v-smooth-scroll="{ duration: 1200, offset: -50}") Check my Work
</template>

<script>
export default {
  name: "About"
};
</script>

<style lang="scss" scoped>
.about{
    .container {
      height: calc(100vh - 60px);
      margin-top: -119px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: baseline;
    }
    &__title {
      font-weight: 400;
      font-size: 135px;
      line-height: 150px;
      text-align: left;
      color: #ffffff;
      font-family: "Sarabun";
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
    &__cta {
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
      &:hover {
        background-color: $idGreenDarker;
      }
      &--fake{
          visibility: hidden;
      }
    }
}
</style>