<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
</div>
</template>

<script>
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
  }
}
</script>
