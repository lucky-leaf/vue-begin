<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">
        {{ city }}
        <span class="iconfont arrow-icon">&#xe639;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="less" scoped>
  @import '../../assets/css/variables.less';

  .header {
    font-size: 0.28rem;
    display: flex;
    line-height: 0.88rem;
    background: @background-color;
    color: #fff;

    .header-left {
      box-sizing: border-box;
      width: 0.8rem;
      height: 0.88rem;
      float: left;

      .back-icon {
        text-align: center;
        font-size: 0.32rem;
        font-weight: bold;
      }
    }

    .header-input {
      flex: 1;
      height: 0.6rem;
      line-height: 0.6rem;
      margin: 0.14rem auto;
      padding-left: 0.2rem;
      background: #fff;
      border-radius: 0.05rem;
      color: #ccc;
    }

    .header-right {
      width: 1.28rem;
      float: right;
      text-align: center;
      color: #fff;

      .arrow-icon {
        margin-left: -0.04rem;
        font-size: 0.24rem;
      }
    }
  }
</style>
