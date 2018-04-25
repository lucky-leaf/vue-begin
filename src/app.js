import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './views/App'

import 'normalize.css'
import 'swiper/dist/css/swiper.css'
import './assets/css/iconfont.css'

Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  template: '<App />',
  components: { App }
})
