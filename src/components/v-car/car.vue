<template>
<div>
        <div class="cart">
            <div class="left" style="color: white" >
                <div class="icon">
                    <div class="logo" @click='maskShow=!maskShow' :class='sumCount>0?"active":""'>
                        <i class="layout-shopping_cart"></i>
                    </div>
                    <span class="qipao" :class='sumCount>0?"active":""'>{{sumCount}}</span>
                </div>
                <div class="totalPrice "  :class='sumCount>0?"active":""'>
                    <span>¥{{sumMoeny}}</span>
                </div>
                <div class="deliveryPrice " @click='maskShow=!maskShow'>
                    <span>另需配送费¥{{deliveryPrice}}元</span>
                </div>
            </div>
            <div class="right " @click='maskShow=!maskShow' :class='sumMoeny>=minPrice?"active":""'>
                <span v-if='sumMoeny===0'>{{minPrice}}元起送</span>
                <span v-else-if='sumMoeny>0&&sumMoeny<minPrice'>还差{{minPrice-sumMoeny}}元起送</span>
                <span v-else-if='sumMoeny>=minPrice'>点击结算</span>
            </div>
        </div>
        <div class="list" v-show="maskShow" >
            <div class="header">
                <span class="cartText">购物车</span>
                <span class="clear" @click='clear'>清空</span>
            </div>
            <div class="content" ref='carlist'>
                <ul ref='cailistul' @click='ulclick'>
                    <li class="item" v-for='(item,index) in selectName' :key='index'>
                        <span class="left" > {{item.name}} </span>
                        <div class="right">
                            <span class="price">￥{{item.price}}</span>
                            <v-contorl :index1='item.index1' :index2='item.index2' :food='item.food'></v-contorl>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="mask" v-show="maskShow" @click='maskShow=!maskShow'></div>
    </div>
</template>

<script >
  import Vue from 'vue'
  import contorl from '../v-contorl/contorl'
  import BScroll from 'better-scroll'
  export default {
    data () {
      return {
          maskShow:false,

      }
    },
    components: {
        "v-contorl":contorl,
    },
    computed:{  
        
        sumCount(){
            return this.goods.reduce((total,item)=>{
                item.foods.forEach((food)=>{
                    if(food.count){
                        total+=food.count
                    }
                })
                
                return total
                
            },0)
        },
        sumMoeny(){
             return this.goods.reduce((total,item)=>{
                item.foods.forEach((food)=>{
                    if(food.count){
                        total+=food.count*food.price
                    }
                })
                
                return total
                
            },0)
        },
        deliveryPrice(){
            return this.$store.state.seller.deliveryPrice;
        },
        minPrice(){
            return this.$store.state.seller.minPrice;
        },
        selectName(){
             return this.goods.reduce((total,item,index1)=>{
                item.foods.forEach((food,index2)=>{
                    if(food.count){
                        total.push({name:food.name,price:food.price,index1,index2,food})
                    }
                })
                
                return total
                
            },[])
        },
       

    },
    props:{
        goods:Array
    },
    mounted(){
        new BScroll(this.$refs.carlist)
    },
    methods:{
        clear(){
            this.$bus.$emit('clear')
            this.maskShow=!this.maskShow;
        },
        ulclick(){
            setTimeout(() => {
                if(this.$refs.cailistul&&this.$refs.cailistul.offsetHeight===0){
                this.maskShow=!this.maskShow;
            }
            }, 0);
        }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixin.styl"
    .cart
        flex 0 0 0;
        position fixed
        z-index 12
        bottom 0
        left 0
        height 46px
        width 100%
        background #141d27
        display flex
        .left
            flex 1
            height 100%
            display flex
            .icon
                position relative
                bottom 15px
                width 56px
                height 56px
                border-radius 50%
                background #141d27
                margin-left 12px
                margin-right 12px
                display flex
                justify-content center
                align-items center
                .logo
                    display flex
                    justify-content center
                    align-items center
                    width 44px
                    height 44px
                    border-radius 50%
                    background rgba(255,255,255,0.4)
                    &.active
                        background rgba(0,160,220,1)
                        i
                            color white
                    i
                        color rgba(255,255,255,0.4)
                .qipao
                    position absolute
                    right 0
                    top 5px
                    width 24px
                    height 16px
                    line-height 16px
                    border-radius 6px
                    background rgba(255,255,255,0.4)
                    font-size 9px
                    font-weight 700
                    text-align center
                    &.active
                        background red
                    
            .totalPrice
                display flex
                justify-content center
                align-items center
                margin-right 12px
                font-size 16px
                line-height 24px
                font-weight 700
                color rgba(255,255,255,.4)
                &.active
                    color white
            .deliveryPrice
                display flex
                justify-content center
                align-items center
                font-size 14px
                line-height 24px
                font-weight 700
                color rgba(255,255,255,.4)
                padding-left 12px
                border-left 2px solid rgba(255,255,255,0.1)
        .right
            flex 0 0 105px
            height 100%
            background rgba(255,255,255,0.4)
            display flex
            justify-content center
            align-items center
            &.active
                background green
                span
                    color white
            span
                color rgba(255,255,255,0.6)
    .list
        margin 0
        max-height 255px
        position fixed
        z-index 11
        left 0
        bottom 45px
        width 100%
        background #f3f5f1
        padding-bottom 20px
        .header
            one-px(rgba(7,17,27,.1))
            height 40px
            background #f3f5f7
            display flex
            justify-content space-between
            align-items center
            .cartText
                margin-left 18px ;
                color rgba(7,17,27,1);
                font-weight 800
                font-size 14px
            .clear
                margin-right 18px
                color rgba(0,160,220,1);
                font-weight 800
                font-size 14px

        .content
            max-height 195px
            overflow hidden
            .item
                margin 6 18px
                
                 
                one-px(rgba(7,17,27,.1))
                display flex
                height 48px
                align-items center
                justify-content space-between
                .left
                    color black
                    padding-left 18px
                .right
                    display flex
                    align-items center
                    padding-right  22px
                    .price
                        margin-right 12px
                        color rgba(240,20,20,1)
                        font-size 10px
                        font-weight 700
    .mask
        position fixed
        z-index 10
        left 0
        right 0
        top 0
        bottom 0
        background rgba(7,17,27,.6)
        backdrop-filter blur(5px)
</style>