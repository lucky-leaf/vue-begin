<template>
  <div>
    <div class="title">
      热门推荐
    </div>
    <ul>
      <li class="item" v-for="item in recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: 'HomeRecomend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201310/16/cc9b4dee97ae58dbc8d65eac.jpg_200x200_f43e7d90.jpg',
          title: '中国漕运博物馆',
          desc: '这是一个博物馆,呀哈哈'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201310/16/cc9b4dee97ae58dbc8d65eac.jpg_200x200_f43e7d90.jpg',
          title: '中国漕运博物馆',
          desc: '这是一个博物馆,呀哈哈'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201310/16/cc9b4dee97ae58dbc8d65eac.jpg_200x200_f43e7d90.jpg',
          title: '中国漕运博物馆',
          desc: '这是一个博物馆,呀哈哈'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/css/mixins.less';

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .title {
    margin-top: 0.2rem;
    font-size: 0.24rem;
    line-height: 0.8rem;
    background: #eee;
    text-indent: .2rem;
  }

  .item {
    overflow: hidden;
    display: flex;
    height: 1.9rem;
    .border-bottom(#eee);

    .item-img {
      width: 1.7rem;
      height: 1.7rem;
      padding: 0.1rem;
    }

    .item-info {
      flex: 1;
      padding: 0.1rem;
      min-width: 0;//  不设置ellipsis不生效，有待研究

      .item-title {
        margin: 0;
        padding: 0;
        line-height: 0.54rem;
        font-size: 0.32rem;
      }

      .item-desc {
        margin: 0;
        line-height: 0.4rem;
        color: #616161;
        font-size: 0.24rem;
        .ellipsis();
      }

      .item-button {
        line-height: 0.44rem;
        font-size: 0.24rem;
        display: block;//  很重要
        margin-top: 0.16rem;
        padding: 0 0.2rem;
        border-radius: 0.06rem;
        background: #ff9300;
        border-style: none;
      }
    }
  }
</style>
