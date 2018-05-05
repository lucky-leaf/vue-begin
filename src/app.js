import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './views/App'
import router from './router'

import 'normalize.css'
import 'swiper/dist/css/swiper.css'
import './assets/css/iconfont.css'

Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  template: '<App />',
  router,
  components: { App }
})
