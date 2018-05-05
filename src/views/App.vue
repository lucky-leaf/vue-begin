<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import HomeView from './Home/HomeView'

export default {
  name: 'App',
  components: {
    HomeView
  }
}
</script>

<style lang="less">
  html {
    font-size: 50px;
  }
</style>
