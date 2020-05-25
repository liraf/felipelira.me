<template lang="pug">
    .projects.section
        .titlecontainer
            h3.titlecontainer__content
                span
                span Projetos
        .container
            .projects__list
                .projects__listblock
                    h2 Qbot - Decide With Confidence
                        span
                    p O QBot é um app/chatbot voltado para o mercado de franquias americano. Nele, o empreendedor é capaz de visualizar dados futuros do seu negócio e realizar predições utilizando inteligência artificial e machine learning.
                    carousel(:perPage="1", paginationActiveColor="#BE4157", :loop="true", :navigationEnabled="true", navigationPrevLabel="<svg width='32' height='23' viewBox='0 0 32 23' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M10.2738 0.343874C10.7178 -0.114625 11.4168 -0.114625 11.8608 0.343874C12.2898 0.786883 12.2898 1.5242 11.8608 1.96618L3.81375 10.276H30.3678C30.9868 10.276 31.4948 10.784 31.4948 11.4232C31.4948 12.0624 30.9868 12.587 30.3678 12.587H3.81375L11.8608 20.8813C12.2898 21.3398 12.2898 22.0782 11.8608 22.5201C11.4168 22.9786 10.7178 22.9786 10.2738 22.5201L0.32175 12.2432C-0.10725 11.8001 -0.10725 11.0628 0.32175 10.6209L10.2738 0.343874Z' fill='white'/></svg>", navigationNextLabel="<svg width='32' height='23' viewBox='0 0 32 23' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M21.221 22.5201C20.777 22.9786 20.078 22.9786 19.634 22.5201C19.205 22.0771 19.205 21.3398 19.634 20.8978L27.681 12.5881L1.127 12.5881C0.507997 12.5881 -1.84712e-06 12.08 -1.84712e-06 11.4408C-1.84712e-06 10.8016 0.507997 10.277 1.127 10.277L27.681 10.277L19.634 1.9827C19.205 1.5242 19.205 0.785851 19.634 0.343875C20.078 -0.114624 20.777 -0.114624 21.221 0.343875L31.173 10.6209C31.602 11.0639 31.602 11.8012 31.173 12.2432L21.221 22.5201Z' fill='white'/></svg>")
                        slide
                            .porfolioimg
                                img(src="~@/assets/img/portfolio/qbot/1.jpg")
                        slide
                            .porfolioimg
                                img(src="~@/assets/img/portfolio/qbot/2.jpg")
                        slide
                            .porfolioimg
                                img(src="~@/assets/img/portfolio/qbot/3.jpg")
                        slide
                            .porfolioimg
                                img(src="~@/assets/img/portfolio/qbot/4.jpg")
                .projects__listblock
                    h2 Beiramar Imóveis - Área do Cliente
                        span
                    p A área do cliente da Beiramar Imóveis permite que os clientes da imobiliária possam fazer pedidos de manutenção e gerenciem seus imóveis através de uma plataforma online. Nela, tanto inquilinos quanto proprietários acessam funções desde geração de boletos, extratos e pedidos de manutenção nos imóveis.
                    carousel(:perPage="1", paginationActiveColor="#BE4157", :loop="true", :navigationEnabled="true", navigationPrevLabel="<svg width='32' height='23' viewBox='0 0 32 23' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M10.2738 0.343874C10.7178 -0.114625 11.4168 -0.114625 11.8608 0.343874C12.2898 0.786883 12.2898 1.5242 11.8608 1.96618L3.81375 10.276H30.3678C30.9868 10.276 31.4948 10.784 31.4948 11.4232C31.4948 12.0624 30.9868 12.587 30.3678 12.587H3.81375L11.8608 20.8813C12.2898 21.3398 12.2898 22.0782 11.8608 22.5201C11.4168 22.9786 10.7178 22.9786 10.2738 22.5201L0.32175 12.2432C-0.10725 11.8001 -0.10725 11.0628 0.32175 10.6209L10.2738 0.343874Z' fill='white'/></svg>", navigationNextLabel="<svg width='32' height='23' viewBox='0 0 32 23' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M21.221 22.5201C20.777 22.9786 20.078 22.9786 19.634 22.5201C19.205 22.0771 19.205 21.3398 19.634 20.8978L27.681 12.5881L1.127 12.5881C0.507997 12.5881 -1.84712e-06 12.08 -1.84712e-06 11.4408C-1.84712e-06 10.8016 0.507997 10.277 1.127 10.277L27.681 10.277L19.634 1.9827C19.205 1.5242 19.205 0.785851 19.634 0.343875C20.078 -0.114624 20.777 -0.114624 21.221 0.343875L31.173 10.6209C31.602 11.0639 31.602 11.8012 31.173 12.2432L21.221 22.5201Z' fill='white'/></svg>")
                        slide
                            .porfolioimg
                                img(src="~@/assets/img/portfolio/areadocliente/5.jpg")
                        slide
                            .porfolioimg
                                img(src="~@/assets/img/portfolio/areadocliente/3.jpg")
                        slide
                            .porfolioimg
                                img(src="~@/assets/img/portfolio/areadocliente/4.jpg")
                        slide
                            .porfolioimg
                                img(src="~@/assets/img/portfolio/areadocliente/1.jpg")
                .projects__listblock
                    h2 CSLive - Bolão
                        span
                    p O bolão do CSLive é uma plataforma online onde fãs de Counter Strike podem apostar gratuitamente nos seus times preferidos.
                    carousel(:perPage="1", paginationActiveColor="#BE4157", :loop="true", :navigationEnabled="true", navigationPrevLabel="<svg width='32' height='23' viewBox='0 0 32 23' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M10.2738 0.343874C10.7178 -0.114625 11.4168 -0.114625 11.8608 0.343874C12.2898 0.786883 12.2898 1.5242 11.8608 1.96618L3.81375 10.276H30.3678C30.9868 10.276 31.4948 10.784 31.4948 11.4232C31.4948 12.0624 30.9868 12.587 30.3678 12.587H3.81375L11.8608 20.8813C12.2898 21.3398 12.2898 22.0782 11.8608 22.5201C11.4168 22.9786 10.7178 22.9786 10.2738 22.5201L0.32175 12.2432C-0.10725 11.8001 -0.10725 11.0628 0.32175 10.6209L10.2738 0.343874Z' fill='white'/></svg>", navigationNextLabel="<svg width='32' height='23' viewBox='0 0 32 23' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M21.221 22.5201C20.777 22.9786 20.078 22.9786 19.634 22.5201C19.205 22.0771 19.205 21.3398 19.634 20.8978L27.681 12.5881L1.127 12.5881C0.507997 12.5881 -1.84712e-06 12.08 -1.84712e-06 11.4408C-1.84712e-06 10.8016 0.507997 10.277 1.127 10.277L27.681 10.277L19.634 1.9827C19.205 1.5242 19.205 0.785851 19.634 0.343875C20.078 -0.114624 20.777 -0.114624 21.221 0.343875L31.173 10.6209C31.602 11.0639 31.602 11.8012 31.173 12.2432L21.221 22.5201Z' fill='white'/></svg>")
                        slide
                            .porfolioimg
                                img(src="~@/assets/img/portfolio/bolao/1.jpg")
                        slide
                            .porfolioimg
                                img(src="~@/assets/img/portfolio/bolao/4.jpg")
                        slide
                            .porfolioimg
                                img(src="~@/assets/img/portfolio/bolao/3.jpg")
                        slide
                            .porfolioimg
                                img(src="~@/assets/img/portfolio/bolao/5.jpg")
                        slide
                            .porfolioimg
                                img(src="~@/assets/img/portfolio/bolao/2.jpg")
                .projects__listblock
                    h2 Portal Beiramar Imóveis
                        span
                    p O Portal da Beiramar Imóveis permite que usuários de todo o DF realizem buscas de imóveis no site, agendem visitas e preencham formulários de dúvidas.
                    carousel(:perPage="1", paginationActiveColor="#BE4157", :loop="true", :navigationEnabled="true", navigationPrevLabel="<svg width='32' height='23' viewBox='0 0 32 23' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M10.2738 0.343874C10.7178 -0.114625 11.4168 -0.114625 11.8608 0.343874C12.2898 0.786883 12.2898 1.5242 11.8608 1.96618L3.81375 10.276H30.3678C30.9868 10.276 31.4948 10.784 31.4948 11.4232C31.4948 12.0624 30.9868 12.587 30.3678 12.587H3.81375L11.8608 20.8813C12.2898 21.3398 12.2898 22.0782 11.8608 22.5201C11.4168 22.9786 10.7178 22.9786 10.2738 22.5201L0.32175 12.2432C-0.10725 11.8001 -0.10725 11.0628 0.32175 10.6209L10.2738 0.343874Z' fill='white'/></svg>", navigationNextLabel="<svg width='32' height='23' viewBox='0 0 32 23' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M21.221 22.5201C20.777 22.9786 20.078 22.9786 19.634 22.5201C19.205 22.0771 19.205 21.3398 19.634 20.8978L27.681 12.5881L1.127 12.5881C0.507997 12.5881 -1.84712e-06 12.08 -1.84712e-06 11.4408C-1.84712e-06 10.8016 0.507997 10.277 1.127 10.277L27.681 10.277L19.634 1.9827C19.205 1.5242 19.205 0.785851 19.634 0.343875C20.078 -0.114624 20.777 -0.114624 21.221 0.343875L31.173 10.6209C31.602 11.0639 31.602 11.8012 31.173 12.2432L21.221 22.5201Z' fill='white'/></svg>")
                        slide
                            .porfolioimg
                                img(src="~@/assets/img/portfolio/bm/1.jpg")
                        //- slide
                        //-     .porfolioimg
                        //-         img(src="~@/assets/img/portfolio/areadocliente/2.jpg")
                        slide
                            .porfolioimg
                                img(src="~@/assets/img/portfolio/bm/2.jpg")
                        slide
                            .porfolioimg
                                img(src="~@/assets/img/portfolio/bm/3.jpg")
                        slide
                            .porfolioimg
                                img(src="~@/assets/img/portfolio/bm/4.jpg")
        .container
            .projects__list
                .projects__listblock
                    h2 Outros projetos/Sites
                        span
                    .container__col33(v-for="i in numberOfColumns")
                        template(v-for="(job, index) in jobs.slice(Math.ceil(jobs.length/numberOfColumns) * (i - 1), Math.ceil(jobs.length/numberOfColumns) * i)")
                            .projects__item(@click="handleJobChoose(index, i - 1)", :style="{ backgroundImage: `url(${job.image})` }")
                                .projects__itemoverlay
                                .projects__itemtitle {{job.name}}
                                    .projects__itemspan
        transition(name="fade")
            .projects__modal(v-if="showModal")
                .projects__modalcontainer
                    .projects__modalclose(@click="showModal = false")
                        i.fas.fa-times
                    img(:src="jobs[currentJob].image")
                    .projects__modalcontainerdescription
                        .projects__modalcontainerdescriptiontitle 
                            span {{jobs[currentJob].name}} 
                            b • 
                            span {{jobs[currentJob].tech}} 
                        a.projects__modalcontainerdescriptioncta(v-if="jobs[currentJob].link", :href="jobs[currentJob].link", target="_blank") Ver Mais

</template>

<script>
import startae from "../assets/img/portfolio/startae.png";
// import beiramar from "../assets/img/portfolio/beiramar.png";
import bmanuncie from "../assets/img/portfolio/bm-anuncie.png";
import cslive from "../assets/img/portfolio/cslive.png";
import ddd from "../assets/img/portfolio/ddd.png";
import orbi from "../assets/img/portfolio/orbi.png";
// import qbot from "../assets/img/portfolio/qbot.png";
import qubo from "../assets/img/portfolio/qubo.png";
import rbv from "../assets/img/portfolio/rbv.png";
import under from "../assets/img/portfolio/under.png";
import vemares from "../assets/img/portfolio/vemares.png";

import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Projects",
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      currentJob: 0,
      numberOfColumns: 3,
      showModal: false,
      jobs: [
        {
          image: startae,
          name: "Startaê Team",
          link: "https://startaeteam.felipelira.me/",
          tech: "React"
        },
        // {
        //   image: beiramar,
        //   name: "Beiramar Group",
        //   link: "https://beiramarimoveis.com.br/",
        //   tech: "Vue.js, Vuex"
        // },
        {
          image: bmanuncie,
          name: "Beiramar - Anuncie",
          link: "https://beiramarimoveis.com.br/anuncie",
          tech: "HTML, CSS, JS"
        },
        {
          image: cslive,
          name: "CSLive",
          link: "https://cslivebr.com/",
          tech: "Vue, Nuxt, UI/UX, Figma"
        },
        {
          image: ddd,
          name: "Data Challenge",
          link: "http://app.desafiodedados.com.br",
          tech: "React, UI/UX, Figma"
        },
        {
          image: orbi,
          name: "Orbi - Dress Your Own Universe",
          link: null,
          tech: "HTML, CSS, JS"
        },
        // {
        //   image: qbot,
        //   name: "Qbot",
        //   link: "https://qubo.uno/qbot",
        //   tech: "Vue, UI/UX, Figma"
        // },
        {
          image: qubo,
          name: "Qubo",
          link: "https://qubo.uno",
          tech: "Vue, UI/UX, Figma"
        },
        {
          image: rbv,
          name: "RBV Engineering",
          link: "https://rbvengenharia.com",
          tech: "HTML, CSS, JS"
        },
        {
          image: under,
          name: "Under Digital",
          link: "https://under.digital/",
          tech: "HTML, CSS, JS"
        },
        {
          image: vemares,
          name: "Vemares",
          link: "https://vemares.com.br/",
          tech: "Wordpress, HTML, CSS, JS"
        }
      ]
    };
  },
  methods: {
    handleJobChoose(index, offset) {
      this.showModal = true;
      this.currentJob =
        index + offset * Math.ceil(this.jobs.length / this.numberOfColumns);
    }
  }
};
</script>

<style lang="scss" scoped>
.projects {
  .container {
    width: 1200px;
  }
  &__list {
    &block {
      border-bottom: 1px solid #6b6b6b;
      margin-bottom: 80px;
      padding-bottom: 80px;
    }
    // h2 {
    //   color: #fff;
    //   margin-bottom: 30px;
    //   font-size: 32px;
    //   font-weight: 500;
    // }
    h2 {
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
    p {
      margin-bottom: 40px;
    }
    /deep/ .VueCarousel-navigation-button:focus, /deep/ .VueCarousel-dot:focus {
      outline: none;
    }
    /deep/ .VueCarousel-navigation-prev,
    /deep/ .VueCarousel-navigation-next {
      top: 44%;
    }
    @media screen and (max-width: 1300px) {
      /deep/ .VueCarousel-navigation-prev {
        left: 5%;
      }
      /deep/ .VueCarousel-navigation-next {
        right: 5%;
      }
    }
    @media screen and (max-width: 900px) {
      /deep/ .VueCarousel-navigation-prev {
        top: 110%;
        left: 50%;
      }
      /deep/ .VueCarousel-navigation-next {
        top: 110%;
        right: 50%;
      }
    }
    .porfolioimg {
      display: flex;
      align-items: center;
      height: 100%;
      margin: auto;
      width: calc(100% - 160px);
      padding: 0px 80px;
      @media screen and (max-width: 900px) {
        width: calc(100% - 40px);
        padding: 0px 20px;
      }
      img {
        width: 100%;
      }
    }
  }
  .container {
    margin-top: 50px;
    &__col33:nth-child(even) {
      padding-top: 80px;
      @media (max-width: $tablet-portrait-upper-boundary) {
        padding-top: 0px;
      }
    }
  }
  &__item {
    width: 100%;
    height: 350px;
    display: block;
    margin: auto;
    border-radius: 10px;
    background-color: #4a4a4a;
    margin-bottom: 40px;
    position: relative;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @media (max-width: $phone-upper-boundary) {
      margin-bottom: 20px;
    }
    &overlay {
      background: linear-gradient(
        180deg,
        rgba(35, 35, 35, 0.3) 0%,
        #0a0a0a 100%
      );
      width: 100%;
      height: 350px;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 9px;
    }
    &title {
      font-family: "Rajdhani";
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 23px;
      color: #ffffff;
      position: absolute;
      bottom: 40px;
      left: 20px;
    }
    &span {
      display: inline-block;
      vertical-align: middle;
      background: #fff;
      height: 1px;
      width: 0px;
      margin-left: 10px;
      transition: width 0.2s ease-in-out;
    }
    &:hover {
      cursor: pointer;
      .projects__itemspan {
        width: 50px;
      }
    }
  }
  &__modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000000;
    width: 100%;
    height: auto;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    &container {
      position: relative;
      max-width: 90%;
      img {
        max-width: 100%;
      }
      &description {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 24px;
        &title {
          color: #ffffff;
          font-weight: bold;
          font-size: 22px;
          line-height: 33px;
          b {
            color: $idRed;
          }
        }
        &cta {
          background: $idGreen;
          color: #ffffff;
          display: inline-block;
          vertical-align: middle;
          padding: 12px 30px;
          transition: 0.3s all ease-in-out;
          font-weight: bold;
          text-decoration: none;
          cursor: pointer;
          &:hover {
            background: $idGreenDarker;
          }
        }
      }
    }
    &close {
      position: absolute;
      top: -10px;
      right: -30px;
      cursor: pointer;
      i {
        color: #ffffff;
        font-size: 26px;
      }
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