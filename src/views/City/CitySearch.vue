<template>
  <div class="search">
    <input class="search-input" type="text" name="" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="less" scoped>
  @import '../../assets/css/variables.less';

  .search {
    padding:0 0.1rem;
    background: @background-color;
    height: 0.72rem;

    .search-input {
      box-sizing: border-box;
      height: 0.62rem;
      line-height: 0.62rem;
      width: 100%;
      padding: 0 0.2rem;
      text-align: center;
      border-radius: 0.05rem;
      border-style: none;
      color: #666;
      font-size: 0.24rem;
      display: block;
    }
  }
</style>
