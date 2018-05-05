import Vue from 'vue'
import Router from 'vue-router'
import HomeView from '../views/Home/HomeView'
import CityView from '../views/City/CityView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/city',
      name: 'City',
      component: CityView
    }
  ]
})
