<template>
  <div class="header">
    <h1 class="header-title">城市选择</h1>
    <div class="header-left">
      <router-link to="/" tag="span">
        <span class="iconfont back-icon">&#xe624;</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  @import '../../assets/css/variables.less';

  .header {
    overflow: hidden;
    position: relative;
    font-size: 0.32rem;
    line-height: 0.88rem;
    background: @background-color;

    .header-title {
      margin: 0;
      padding: 0;
      text-align: center;
      font-weight: normal;
      font-size: 0.32rem;
      color: white;
    }

    .header-left {
      text-align: center;
      position: absolute;
      top: 0;
      left: 0;
      width: 0.8rem;

      .back-icon {
        color: white;
        font-size: 0.32rem;
        font-weight: bold;
        text-decoration: none;
      }
    }
  }
</style>
