<template>
<div class="goods">
        <div class="typeWrap" ref="typeWrap">
            <ul class="typeList">
                <li class="type" :class="{active:currentIndex===index}"
                    v-for="(good,index) in goods" :key="index" @click='rightTo(index)' ref='goodtypes' :a='1===leftTo'>
                    <v-icon class="icon" v-show="good.type >= 0" size="3" :type="good.type"></v-icon>
                    <span>{{good.name}}</span>
                </li>
            </ul>
        </div>
        <div class="goodWrap" ref="goodWrap">
            <ul class="goodList" ref='good'>
                <li class="good" v-for="(good,index1) in goods" :key="index1">
                    <h2 class="goodName">{{good.name}}</h2>
                    <ul class="foodlist">
                        <li class="food" v-for="(food,index2) in good.foods" :key="index2">
                            <v-food :food='food' :index1='index1' :index2='index2'></v-food>
                            
                        </li>
                    </ul>
                    
                </li>
            </ul>
        </div>
         <v-car :goods='goods'></v-car>
    </div>
</template>

<script >
import Vue from 'vue'
import {mapActions,mapState} from 'vuex'
import BScroll from 'better-scroll'
import icon from '../components/v-icon/icon'
import food from '../components/v-food/food'
import car from '../components/v-car/car'
const ACTSETGOODS='actSetGoods'
  export default {
    data () {
      return {
        currentIndex:0,
        goodScrollList:[],
        scrollY:0,
        goodScrollObj:null,
        typeScrollObj:null,
      }
    },
    components: {
      "v-icon":icon,
      "v-food":food,
      "v-car":car
      
    },
    methods:{
     ...mapActions([ACTSETGOODS]),
     getLiScrollYList(){
         Vue.nextTick( () =>{
            // DOM 更新了
            this.$refs.good.children.forEach((item)=>{
                this.goodScrollList.push(item.offsetTop)
            })
            })
     },
    rightTo(index){
        this.currentIndex=index;
        this.goodScrollObj.scrollTo(0,-this.goodScrollList[index],0.3)
        console.log(this.goodScrollList[index])
    },
        
    },
     async mounted(){
        let resulte=await this.$http.seller.getGoods()
        this[ACTSETGOODS](resulte.data);
        this.typeScrollObj=new BScroll(this.$refs.typeWrap,{probeType:3,click:true})
        this.goodScrollObj=new BScroll(this.$refs.goodWrap,{probeType:3,click:true})
        this.goodScrollObj.on("scroll",({x,y})=>{
                            this.scrollY = Math.abs(y)
                        })
        this.getLiScrollYList()
        this.$bus.$on('add',({index1,index2})=>{
                    
                    if(this.goods[index1].foods[index2].count){
                        this.goods[index1].foods[index2].count++;
                    } else{
                        this.$set(this.goods[index1].foods[index2],"count",1)
                    }  
                }),
        this.$bus.$on('remove',({index1,index2})=>{
                    
                   if(this.goods[index1].foods[index2].count>1){
                       this.goods[index1].foods[index2].count--;
                   }
                   else if(this.goods[index1].foods[index2].count==1){
                       this.$delete(this.goods[index1].foods[index2],"count")
                   }

                }),
        this.$bus.$on('clear',()=>{
                    
                   this.goods.forEach((item1)=>{
                       item1.foods.forEach((item2)=>{
                       if(item2.count){
                           this.$delete(item2,"count")
                       }
                   })
                   })
                })
    },
    computed:{
      ...mapState(["goods"]),
     leftTo(){
         this.goodScrollList.find((item,index)=>{
             if(this.goodScrollList[index+1]){
                 if(item<=this.scrollY&&this.goodScrollList[index+1]>this.scrollY){
                     if(this.currentIndex!=index){
                         this.typeScrollObj.scrollToElement(this.$refs.goodtypes[index],0.3)
                     }
                  this.currentIndex=index;
                  
              }
             }else{
                 if(item<=this.scrollY){
                     if(this.currentIndex!=index){
                         this.typeScrollObj.scrollToElement(this.$refs.goodtypes[index],0.3)
                     }
                    this.currentIndex=index;
                    
                 }
             }
              
          })
     }
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