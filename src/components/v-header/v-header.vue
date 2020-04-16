<template>
<div id='top'  >
    <div class="top-main">
        <div class="top-left">
          <img :src="bgImg">
        </div>
        <div class="top-right">
          <div class="t-r-t">
            <div class="img">

            </div>
            <span>{{name}}</span>
          </div>
          <div class="t-r-m">
            <span>{{description}}/{{deliveryTime}}分钟送达</span>
          </div>
          <div class="t-r-b">
            <v-icon class='icon' imgname='decrease' size='1'></v-icon>
            <span>在线支付满{{minPrice}}减{{deliveryPrice}}，满{{sellCount}}减{{ratingCount}}</span>
          </div>
        </div>
        <div class="bz" @click="maskIsShow=true" v-if='supports!==undefined'>
          <div class="bz-number">
            {{supportsLegth.length}}个
          </div>
          <span class="layout-keyboard_arrow_right arrow bz-span" ></span>
        </div>
      </div>
    <div class="top-bottom" @click='maskIsShow=true'>
      <div class="bulletin">

      </div>
      <span>
        {{bulletin}}
      </span>
      <i class="layout-keyboard_arrow_right arrow"></i>
    </div>
    <div class="dc">
      <img :src="bgImg">
    </div>
    
    <transition name='mask'>
      <div class="mask " ref='mask' v-show='maskIsShow'>
              <div class="main-warp" >
                  <div class="main">
                    <div class="title">
                     {{name}}
                    </div>
                    <div class="starts-warp">
                      <v-start :score='score' size='48'></v-start>
                    </div>
                    <v-line>
                      <span class='v-line'>
                        优惠信息
                      </span>
                    </v-line>
                    <v-list type='2' class='v-list' :supports="supports">

                    </v-list>
                    <v-line>
                      <span class='v-line'>
                        商家公告
                      </span>
                    </v-line>
                    <div class="notice">
                      {{bulletin}}
                    </div>
                  </div>
              </div>
              <div class="footer">
                  <i class="layout-close" @click='maskIsShow=false'></i>
              </div>
     </div>
    </transition>
</div>
</template>

<script >
// import BScroll from 'better-scroll'
import icon from '../v-icon/icon'
import line from '../v-line/v-line'
import list from '../v-list/v-list'
import start from '../v-srarts/v-starts'
  export default {
    data () {
      return {
          maskIsShow:false,
         
          // scroll:null
      }
    },
    components: {
      "v-icon":icon,
      "v-line":line,
      "v-list":list,
      "v-start":start,
    },
    mounted(){
      // this.scroll=new BScroll(this.$refs.mask)
    },
    computed:{
      name:{
          get(){return this.$store.state.seller.name}
      },
       description:{
          get(){return this.$store.state.seller.description}
      },
       deliveryTime:{
          get(){return this.$store.state.seller.deliveryTime}
      },
       bgImg:{
          get(){return this.$store.state.seller.bgImg}
      },
       minPrice:{
          get(){return this.$store.state.seller.minPrice}
      },
       deliveryPrice:{
          get(){return this.$store.state.seller.deliveryPrice}
      },
      sellCount:{
          get(){return this.$store.state.seller.sellCount}
      },
      ratingCount:{
          get(){return this.$store.state.seller.ratingCount}
      },
      bulletin:{
          get(){return this.$store.state.seller.bulletin}
      },
       supportsLegth:{
          get(){return this.$store.state.seller.supports}
      },
       supports:{
          get(){return this.$store.state.seller.supports}
      },
       score:{
          get(){
            
            return this.$store.state.seller.score}
      },

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import '../../common/stylus/mixin.styl'
    @import '../../common/stylus/transition.styl'
    #top
      position relative
      height 134px
      width 100%
      background rgba(7,17,27,0.5)
      padding 24px 0px 0px 0px
      box-sizing border-box
      .mask
        position fixed 
        left 0
        top 0
        z-index 9
        width 100%
        height 100%
        background-color rgba(7,17,27,0.8)
        backdrop-filter blur(10px)
        overflow hidden
        .main-warp
          min-height 100%

          .main
            overflow hidden
            padding-bottom 96px
            .title
              margin-top 64px
              font-size 16px
              font-weight bold
              color white
              line-height 16px
              text-align center
            .starts-warp
              width 80%
              height 24px
              
              margin 0 auto
              margin-top 16px
              margin-bottom 28px
            .v-line
              color white
              font-size 14px
              white-space nowrap
            .v-list 
              margin-bottom 28px
            .notice
              padding 0 48px
              box-sizing border-box
              color white
              font-size 12px
              font-weight 200
              line-height 24px
        .footer
          font-size 32px
          color rgba(255,255,255,0.5)
          text-align center
          margin-top -96px
          height 96px
          line-height 96px   
      .dc
        position absolute
        left 0
        top 0
        width 100%
        height 100%
        z-index  -1
        img 
          width 100%
          height 100%
          -webkit-filter blur(4px);

      .top-main
        &::after
          zoom 1
          content ''
          display block
          clear both
        position relative
        .top-left
          float left
          width 64px
          height 64px
          background black
          margin-right 16px 
          margin-left 24px
          & > img 
            width 100%
            height 100%
            border-radius 4px
      
        .top-right
          float left
          padding-top 2px
          box-sizing border-box
          .t-r-t
            margin-bottom 8px
            & > .img
              margin-right 6px
              float left
              width 30px 
              height 18px
              background-size cover
              bg-img(brand)
            & > span 
            float left
              font-size 16px
              color rgba(255,255,255,1)
              font-weight bold
              line-height 18px
          .t-r-m
            margin-bottom 10px
            & > span
              display block 
              height 12px
              font-size 12px
              color rgba(255,255,255,1)
              font-weight 100
              line-height 12px
          .t-r-b
            margin-bottom 2px 
            overflow hidden
            display flex
            align-items center
            & > .icon
              float left
              margin-right 4px
              background-repeat no-repeat
              background-size 100%
            & > span 
              float left
              display block
              height 12px
              font-size 10px
              color rgba(255,255,255,1)
              font-weight 200
              line-height 12px
      .bz
        width 48px
        height 24px
        position absolute 
        right 12px
        bottom -5px
        background-color rgba(0,0,0,0.2)
        padding 7px 8px
        border-radius 16px
        box-sizing border-box
        display flex
        justify-content center
        @media screen and (max-width 325px)
          bottom 17px
        .bz-number
          font-size 10px
          color white
          font-weight 200
          line-height 12px
          margin-right 4px
          white-space nowrap
        .bz-span
          font-size 10px
          color white
          font-weight 200
          line-height 12px  

      .top-bottom
        margin-top 18px
        float left
        width 100%
        height 28px
        padding 0 12px
        line-height  28px
        display flex
        align-items center
        box-sizing  border-box
        background-color rgba(7,17,27,0.2)
        
        & > .bulletin
          bg-img(bulletin)
          width 22px 
          height 12px
          background-repeat no-repeat
          background-size 100%
          margin-right 4px
          
          flex-shrink 0
        & > span 
          font-size 10px
          color rgba(255,255,255,1)
          font-weight 200
          line-height 28px
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          margin-right 4px
        & > i 
          color white
          font-weight 200
</style>