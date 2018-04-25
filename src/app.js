import Vue from 'vue'
import App from './views/App'

//  eslint-disable-next-line
import normalizecss from 'normalize.css'
import './assets/css/iconfont.css'

new Vue({
  el: '#app',
  template: '<App />',
  components: { App }
})
