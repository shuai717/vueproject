<template>
<div class="contorl">
        <div class="contorl">
            <transition name="contorlRemove">
                <i  v-show="food&&food.count"
                   class="layout-remove_circle_outline remove" @click="remove(index1,index2)"
                   ></i>
            </transition>
            <transition name="contorlRemove">
                <span class="remove" v-show='food&&food.count'>{{food&&food.count}}</span>
            </transition>
            <i class="layout-add_circle add" @click='add(index1,index2)'></i>
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
        food:Object,
        index1:Number,
        index2:Number,
    },
    methods:{
        remove(index1,index2){
            this.$bus.$emit('remove',{index1,index2})
        },
        add(index1,index2){
            this.$bus.$emit('add',{index1,index2})
        }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixin.styl"
    
    .contorl
        display flex
        align-items center
        i
            display inline-block
            font-size 24px
            vertical-align middle
            color rgba(0,160,220,1)
            &.add
                position relative
                z-index: 1
            &.remove
                display block
                opacity 1
                transform translate3d(0,0,0) rotate(-360deg)
        span
            display inline-block
            width 24px
            text-align center
            font-size 10px
            vertical-align middle
            color rgba(147,153,159,1)
            &.remove
                opacity 1
                transform translate3d(0,0,0) rotate(-360deg)
</style>