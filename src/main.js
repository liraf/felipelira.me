import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueSmoothScroll from 'vue2-smooth-scroll'
import VueCarousel from 'vue-carousel';

Vue.use(VueCarousel);

Vue.use(vueSmoothScroll)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
