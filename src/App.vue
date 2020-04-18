<template>
  <div id="app">
    
    <router-view></router-view>
    <v-footerGuide v-show="$route.meta.showFooter"></v-footerGuide>
  </div>
</template>

<script>
import footerGuide from './components/FooterGuide/FooterGuide'
export default {
  name: 'App',
  components:{
      "v-footerGuide":footerGuide
  },
  methods:{
    
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width 100%
  height 100%
  overflow hidden
</style>
