<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="less" scoped>
  //  less无法识别>>>，使用/deep/深度作用选择器
  .wrapper /deep/ .swiper-pagination-bullet-active {
      background: white !important;
  }

  .wrapper {
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 31.25%;
    background: #eee;

    .swiper-img {
      width: 100%;
    }
  }

</style>
