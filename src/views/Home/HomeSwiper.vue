<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
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
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      },
      swiperList: [
        { id: '0001', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e9/55d3c7bd96007b02.jpg_640x200_3916b37f.jpg' },
        { id: '0002', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/fb/9140fd5178ae6b02.jpg_640x200_40ef818b.jpg' }
      ]
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
