<template>
<div class="foodproduct">
    <div class="left">
        <img :src="food.image?food.image:''" alt="">
    </div>
    <div class="right">
        <div class="one">{{food.name}}</div>
        <div class="two">{{food.description}}</div>
        <div class="three">
            <span class="three-1">月售{{food.sellCount}}份</span>
            <span class="three-2">好评率{{food.rating}}</span>
        </div>
        <div class="four">
            <span class="four-1">￥{{food.price}}</span>
            <s class="four-2" v-show='food.oldPrice!==""'>￥{{food.oldPrice}}</s>
        </div>
    </div>
</div>
</template>

<script >
  export default {
    data () {
      return {

      }
    },
    components: {

    },
    props:{
        food:Object
    }
  }
</script>

<style lang='stylus'>
@import '../../common/stylus/mixin.styl'
    .foodproduct
        display flex
        justify-content left
        .left
            width 64px
            height 64px
            margin-right 10px
            flex-shrink 0
            img 
               
                width 100%
                height 100%
        .right
            margin-top 2px
            .one
                font-size 14px
                color rgba(7,17,27,1)
                line-height 14px
            .two
                margin 8px 0
                font-size 10px
                color rgba(147,153,159,1)
                line-height 10px
            .three
                font-size 10px
                color rgba(147,153,159,1)
                line-height 10px
                .three-1
                    margin-right 12px
            .four
                margin-top 8px
                .four-1
                    font-size 10px
                    color red
                    font-weight normal
                    line-height 24px
                    margin-right 8px
                .four-2
                    font-size 10px
                    color rgba(147,153,159,1)
                    font-weight normal
                    line-height 24px
</style>