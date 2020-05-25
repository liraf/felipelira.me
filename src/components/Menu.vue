<template lang="pug">
    .Menu
        router-link.Menu__item(to="/")
            .Menu__itemtitle HOME
            .Menu__itemmarker
        router-link.Menu__item(to="/skills")
            .Menu__itemtitle SKILLS
            .Menu__itemmarker 
        router-link.Menu__item(to="/projects")
            .Menu__itemtitle PROJECTS
            .Menu__itemmarker 
        router-link.Menu__item(to="/contact")
            .Menu__itemtitle CONTACT
            .Menu__itemmarker 
        .Menu__social
            a(href="https://www.linkedin.com/in/felipeliraf/", target="_blank")
                I.fa.fa-linkedin
</template>

<script>
export default {
  name: "Menu",
  data: function() {
    return {
      currentTransition: ""
    };
  }
};
</script>

<style lang="scss" scoped>
$itemLineHeight: 26px;
.Menu {
  background-color: #2d2d2d;
  position: relative;
  text-align: center;
  height: $menuHeight;
  display: block;
  @media screen and (max-width: 900px) {
    height: 122px;
  }
  &__item {
    display: inline-block;
    vertical-align: middle;
    position: relative;
    text-decoration: none;
    padding: 17px 22px;
    overflow: hidden;
    @media screen and (max-width: 900px) {
      padding: calc((#{$menuHeight} - #{$itemLineHeight}) / 2) 34px;
    }
    &title {
      font-family: "Rajdhani";
      color: #ffffff;
      text-transform: uppercase;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: $itemLineHeight;
      color: #ffffff;
    }
    &marker {
      background-color: $idRed;
      width: 7px;
      height: 7px;
      display: block;
      position: absolute;
      border-radius: 8px;
      bottom: 10px;
      left: -10%;
      transform: translateX(-50%);
      opacity: 0;
      transition: left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
        opacity 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    &:hover,
    &.router-link-exact-active,
    &--transition {
      .Menu__itemmarker {
        left: 50%;
        opacity: 1;
      }
    }
  }
  &__social {
    position: absolute;
    right: 20px;
    top: calc((#{$menuHeight} - 15px) / 2);
    @media (max-width: $phone-upper-boundary) {
      display: none;
    }
    a {
      width: 15px;
      height: 15px;
      i {
        color: #828282;
      }
    }
  }
}
</style>