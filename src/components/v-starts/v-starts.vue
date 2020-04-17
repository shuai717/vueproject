<template>
<div class="starts">
    <ul>
        <li v-for='(str,index) in starts' :key='index' :class=[str,abc] >

        </li>
    </ul>
</div>
</template>

<script >
  export default {
    data () {
      return {
          startArry:[],
         
      }
    },
    components: {

    },
    props:{
        score:Number,
        size:String
    },
    computed:{
        abc(){
            let abc=''
            switch (this.size) {
                case '24':
                    abc='a'
                    break;
                 case '36':
                    abc='b'
                    break;
                 case '48':
                    abc='c'
                    break;
            }
            return abc
        },
        onscore:{
            get(){
                return this.score;
            }
        },
        starts(){
        if(this.onscore!==undefined){
            if(this.onscore<0.5){
            this.startArry=['off','off','off','off','off']
            return this.startArry
        }
        
        if(this.onscore>4.5){
            this.startArry=['on','on','on','on','on']
            return this.startArry
        }
        
        this.startArry=[];
        let newscore=Math.floor(this.onscore*2)/2
        // console.log(newscore)
        let pullnum=Math.floor(newscore)
        let halfnum=(newscore % 1)?1:0
        for(let i=0;i<=pullnum-1;i++)
        {
            this.startArry.push('on')
        }
        if(halfnum===1)this.startArry.push('half')
        while (this.startArry.length<5) {
            this.startArry.push('off')
        }
        }else{
            this.startArry=['off','off','off','off','off']
        }
        return this.startArry;
        }
    },
 
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import '../../common/stylus/mixin.styl'
    .starts
        ul
            display flex 
            justify-content center
            li
                
                &.a
                    &.on
                        width 10px
                        height 10px
                        bg-img(star24_on)
                        margin-right 3px
                    &.half
                        width 10px
                        height 10px
                        bg-img(star24_half)
                        margin-right 3px
                    &.off
                        width 10px
                        height 10px
                        bg-img(star24_off)
                        margin-right 3px
                &.b
                    &.on
                        width 15px
                        height 15px
                        bg-img(star36_on)
                        margin-right 6px
                    &.half
                        width 15px
                        height 15px
                        bg-img(star36_half)
                        margin-right 6px
                    &.off
                        width 15px
                        height 15px
                        bg-img(star36_off)
                        margin-right 6px
                &.c
                    &.on
                        width 20px
                        height 19px
                        bg-img(star48_on)
                        margin-right 12px
                    &.half
                        width 20px
                        height 19px
                        bg-img(star48_half)
                        margin-right 12px
                    &.off
                        width 20px
                        height 19px
                        bg-img(star48_off)
                        margin-right 12px



</style>