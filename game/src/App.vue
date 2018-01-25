<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style lang="stylus">
  @import "../static/css/reset.styl";

  html
    width auto

  #app
    width: 100%
    height: 100%
</style>
