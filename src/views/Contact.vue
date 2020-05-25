<template lang="pug">
    .contact.section
        .titlecontainer.titlecontainer--left
            h3.titlecontainer__content
                span
                span Contact
        .container
            h2 felipelira1908@hotmail.com
                span
            .Redes
                a(href="https://www.linkedin.com/in/felipeliraf/", target="_blank")
                    I.fa.fa-linkedin
                a(href="https://www.facebook.com/felipeliraf", target="_blank")
                    I.fa.fa-facebook
                a(href="https://www.instagram.com/liraaf_/", target="_blank")
                    I.fa.fa-instagram
                a(href="https://twitter.com/liraf_", target="_blank")
                    I.fa.fa-twitter
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style lang="scss" scoped>
.contact {
  text-align: center;
  h2 {
    font-family: "Rajdhani";
    font-size: 45px;
    font-weight: bold;
    color: #ffffff;
    margin-bottom: 45px;
    position: relative;
    text-align: center;
    display: inline-block;
    margin-top: 40px;
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
  //   h2 {
  //     color: #fff;
  //     font-size: 44px;
  //     font-weight: bold;
  //     margin-top: 110px;
  //   }
  .Redes {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    a {
      color: #fff;
      margin: 0px 20px;
      font-size: 24px;
    }
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
}
</style>