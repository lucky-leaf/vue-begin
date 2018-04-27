<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item in weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/css/mixins.less';

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .title {
    font-size: 0.24rem;
    line-height: 0.8rem;
    text-indent: 0.2rem;
    background: #eee;
  }

  .item {
    .item-img-wrapper {
      width: 100%;
      padding-bottom: 37%;
      overflow: hidden;
      position: relative;

      .item-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    .item-info {
      padding: 0.14rem 0.2rem 0.2rem;

      .item-title {
        margin: 0;
        font-size: 0.28rem;
        line-height: 0.48rem;
        .ellipsis();
      }
      .item-desc {
        margin: 0;
        font-size: 0.24rem;
        line-height: 0.42rem;
        color: #616161;
        .ellipsis();
      }
    }
  }
</style>
