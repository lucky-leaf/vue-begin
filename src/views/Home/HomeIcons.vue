<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
      <div class="icon" v-for="item in page" :key="item.id">
        <div class="icon-img">
          <img class="icon-img-content" :src="item.imgUrl">
        </div>
        <p class="icon-desc">{{ item.desc }}</p>
      </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/css/variables.less';
  @import '../../assets/css/mixins.less';

  .icons /deep/ .swiper-container{
    height: 0;
    padding-bottom: 50%;
  }

  .icons /deep/ .swiper-pagination {
    bottom: -0.1rem
  }

  .icon {
      margin-top: 0.1rem;
      position: relative;
      overflow: hidden;
      width: 25%;
      float: left;
      height: 0;
      padding-bottom: 25%;

      .icon-img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0.44rem;
        box-sizing: border-box;
        padding: 0.1rem;
        .icon-img-content {
          display: block;
          margin: 0 auto;
          height: 100%;
        }
      }

      .icon-desc {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 0.44rem;
        line-height: 0.44rem;
        text-align: center;
        color: @font-color-dark;
        font-size: 0.24rem;
        .ellipsis();
      }
    }
</style>
