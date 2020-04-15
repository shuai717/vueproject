<template>
<div class="list">
    <ul>
        <li v-for='(obj,index) in supports' :key='index'>
            <v-icon :size='type' :type='obj.type'></v-icon>
            <span>
                {{obj.content}}
            </span>
        </li>
        
    </ul>
</div>
</template>

<script >
import icon from '../v-icon/icon'
  export default {
    data () {
      return {

      }
    },
    components: {
        "v-icon":icon
    },
    props:{
        type:String,
        supports:Array
    }
  }
</script>

<style  lang='stylus'>
  @import '../../common/stylus/mixin.styl'
    .list
        margin-left 36px
        ul
            li 
                margin-bottom 12px
                height 16px
                font-size 12px
                font-weight 200
                color white
                line-height 12px
                display flex
                align-items center
                span 
                    margin-left 6px




</style>