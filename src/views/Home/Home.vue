<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
</div>
</template>

<script>
import HomeHeader from './HomeHeader'
import HomeSwiper from './HomeSwiper'
import HomeIcons from './HomeIcons'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>
