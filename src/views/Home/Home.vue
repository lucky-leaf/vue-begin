<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
</div>
</template>

<script>
import axios from 'axios'
import HomeHeader from './HomeHeader'
import HomeSwiper from './HomeSwiper'
import HomeIcons from './HomeIcons'
import HomeRecommend from './HomeRecommend'
import HomeWeekend from './HomeWeekend'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then((res) => {
          res = res.data
          if (res.success && res.data) {
            const data = res.data
            this.city = data.city
            this.swiperList = data.swiperList
            this.iconList = data.iconList
            this.recommendList = data.recommendList
            this.weekendList = data.weekendList
          }
        })
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
