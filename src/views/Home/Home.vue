<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
</div>
</template>

<script>
import HomeHeader from './HomeHeader'
import HomeSwiper from './HomeSwiper'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>
