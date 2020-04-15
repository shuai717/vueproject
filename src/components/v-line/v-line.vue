<template>
<div class="line">
    <div class="line-left">

    </div>
    <slot > </slot>   
    <div class="line-right">

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

    }
  }
</script>

<style lang='stylus'>
    .line
        display flex
        justify-content center
        align-items center
        margin 0 36px 24px
        .line-left
            width 112px
            height 1px
            background-color rgba(255,255,255,0.2)
            margin-right 12px
        
        .line-right
            width 112px
            height 1px
            background-color rgba(255,255,255,0.2)
            margin-left 12px
</style>