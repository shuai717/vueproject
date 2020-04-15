<template>
<div class="goods">
        <div class="typeWrap" ref="typeWrap">
            <ul class="typeList">
                <li class="type" :class="{active:index===currentIndex}"
                    v-for="(good,index) in goods" :key="index" @click='currentIndex=index'>
                    <v-icon class="icon" v-show="good.type >= 0" size="3" :type="good.type"></v-icon>
                    <span>{{good.name}}</span>
                </li>
            </ul>
        </div>
        <div class="goodWrap" ref="goodWrap">
            <ul class="goodList">
                <li class="good" v-for="(good,index) in goods" :key="index">
                    <h2 class="goodName">{{good.name}}</h2>
                    <ul class="foodlist">
                        <li class="food" v-for="(food,index) in good.foods" :key="index">
                            
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script >
import {mapActions,mapState} from 'vuex'
import BScroll from 'better-scroll'
import icon from '../components/v-icon/icon'
const ACTSETGOODS='actSetGoods'
  export default {
    data () {
      return {
        currentIndex:0
      }
    },
    components: {
      "v-icon":icon
    },
    methods:{
     ...mapActions([ACTSETGOODS])
     
    },
     async mounted(){
      let resulte=await this.$http.seller.getGoods()
      this[ACTSETGOODS](resulte.data);
       new BScroll(this.$refs.typeWrap)
       new BScroll(this.$refs.goodWrap)
    },
    computed:{
      ...mapState(["goods"])
    }
  }
</script>

<style scoped lang="stylus">
    @import "../common/stylus/mixin.styl"
    .goods
        display flex
        position absolute
        top 174px
        bottom 50px
        left 0
        right 0
        .typeWrap
            flex 0 0 80px
            overflow hidden
            .typeList
                .type
                    center()
                    one-px(rgba(7,17,27,.1))
                    display flex 
                    justify-content center
                    align-items center
                    height 54px
                    padding 0 12px
                    font-size 12px
                    line-height 14px
                    color gray
                    background #f3f5f7
                    .icon
                        margin-right 3px
                    &.active
                        background #ffffff
                    &:after
                        width 56px
                        left 0px
                        right 0px
                        margin auto
                    &:last-child
                        border-none()
        .goodWrap
            flex 1
            overflow hidden
            .goodList
                .good
                    .goodName
                        height 26px
                        line-height 26px
                        font-size 12px
                        font-weight 800
                        background #f3f5f7
                        border-left 3px solid #d9dde1
                        padding-left 14px
                        color rgba(147,153,159,1)
                    .foodlist
                        .food
                            one-px(rgba(7,17,27,.1))
                            padding 18px
                            &:after
                                width 80%
                                left 0
                                right 0
                                margin auto
                            &:last-child
                                border-none()






</style>