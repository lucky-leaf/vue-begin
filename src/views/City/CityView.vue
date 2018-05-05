<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
  </div>
</template>

<script>
import CityHeader from './CityHeader'
import CitySearch from './CitySearch'
import CityList from './CityList'

export default {
  name: 'CityView',
  components: {
    CityHeader,
    CitySearch,
    CityList
  }
}
</script>
