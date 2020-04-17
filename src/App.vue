<template>
  <div id="app">
    <v-header></v-header>
    <div id="nav">
      <div class='item'>
        <router-link to='/goods'>
          商品
        </router-link>
      </div>
       <div class='item'>
        <router-link  to='/ratings'>
          评价
        </router-link>
      </div>
       <div class='item'>
        <router-link  to='/seller'>
          商家
        </router-link>
      </div>
    </div>
   
   <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import header from './components/v-header/v-header.vue'

import {mapActions} from 'vuex'
const ACTSETSELLER='actSetSeller'
export default {
  name: 'App',
  components:{
    "v-header":header,
    
  },
  methods:{
    ...mapActions([ACTSETSELLER])
  },
  async mounted(){
    let resulte=await this.$http.seller.getSeller()
    this[ACTSETSELLER](resulte.data);
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './common/stylus/mixin.styl'
#app
  width 100%
  height 100%
#nav 
  one-px(rgba(7,17,27,0.1))
  height 40px
  display flex
  .item
     flex 1
     font-size 14px
     color rgba(77,85,93,1)
     line-height 14px
     a
        display flex
        justify-content center
        align-items  center
        width 100%
        height 100%
        
        &.active
          color rgba(240,20,20,1)
</style>
