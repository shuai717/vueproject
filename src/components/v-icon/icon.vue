<template>
<div class='icon' :class="[`icon-${size}`,`${js}`]">
  
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
      imgname:String,
      size:String,
      type:Number,
    },
    computed:{
        js(){
            if(this.imgname===undefined)
            {
                let name='';
                switch (this.type) {
                    case 0:
                        name='decrease'
                        break;
                    case 1:
                        name='discount'
                        break;
                    case 2:
                        name='guarantee'
                        break;
                    case 3:
                        name='decrease'
                        break;
                    case 4:
                        name='special'
                        break;
                    default:
                        name='decrease'
                        break;
                }
                return name
            }
             
            if(this.type===undefined)
            return this.imgname
        }
    }
    
  }
</script>

<style lang="stylus">
  @import '../../common/stylus/mixin.styl'
  .icon
        &.icon-1
            width 12px
            height 12px
            &.decrease
                bg-img(decrease_1)
            &.discount
                bg-img(discount_1)
            &.guarantee
                bg-img(guarantee_1)
            &.invoice
                bg-img(invoice_1)
            &.special
                bg-img(special_1)
        &.icon-2
            width 16px
            height 16px
            &.decrease
                bg-img(decrease_2)
            &.discount
                bg-img(discount_2)
            &.guarantee
                bg-img(guarantee_2)
            &.invoice
                bg-img(invoice_2)
            &.special
                bg-img(special_2)
        &.icon-3
            width 12px
            height 12px
            &.decrease
                bg-img(decrease_3)
            &.discount
                bg-img(discount_3)
            &.guarantee
                bg-img(guarantee_3)
            &.invoice
                bg-img(invoice_3)
            &.special
                bg-img(special_3)
        &.icon-4
            width 16px
            height 16px
            &.decrease
                bg-img(decrease_4)
            &.discount
                bg-img(discount_4)
            &.guarantee
                bg-img(guarantee_4)
            &.invoice
                bg-img(invoice_4)
            &.special
                bg-img(special_4)

</style>