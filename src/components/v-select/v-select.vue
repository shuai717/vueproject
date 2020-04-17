<template>
    <div class="ratings-filter">
        <div class="rating-type border-1px">
      <span class="block" :class='active1?"active":""' @click="upDataRatingsAll">
        全部<span class="count" v-show="ratingslist2" >{{ratingslist2.length}}</span>
      </span>
            <span class="block " :class='active2?"active":""' @click="upDataRatingsTJ">
        推荐<span class="count">{{tj}}</span>
      </span>
            <span class="block" :class='active3?"active":""' @click="upDataRatingsTC" :a='start'>
        吐槽<span class="count">{{tc}}</span>
      </span>
        </div>
        <div class="switch " :class='flag?"on":""'>
            <span class="layout-check_circle" @click='upDataRatingsByNR'></span>
            <span class="text">只看有内容的评价</span>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {mapState} from "vuex";
    export default {
        name: "ele-select",
        data(){
            return {
                active1:true,
                active2:false,
                active3:false,
                flag:false,
                oldlist:[],
                ratingslist2:[],
            }
        },
        mounted(){
            
        },
        computed:{
              ...mapState(["ratings"]),
              start(){
                  
                  
                  this.ratingslist2=[...this.$store.state.ratings]
                  
              }
              ,
              tj(){
                  return this.ratingslist2.reduce((sum,item)=>{
                      if(item.rateType===0)
                      {
                          sum++;
                      }
                      return sum;
                  },0)
              },
              tc(){
                  return this.ratingslist2.reduce((sum,item)=>{
                      if(item.rateType===1)
                      {
                          sum++;
                      }
                      return sum;
                  },0)
              },
        },
        methods:{
            upDataRatingsAll(){
                this.active1=true;
                this.active2=false;
                this.active3=false;
                this.$bus.$emit('upDataRatings',this.ratings)
            },
             upDataRatingsTJ(){
                this.active1=false;
                this.active2=true;
                this.active3=false;
                let resulte=[];
                resulte=this.ratings.filter((item)=>{
                    if(this.flag){
                        return item.rateType===0&&item.text!==''
                    }else{
                         return item.rateType===0
                    }
                })
                this.$bus.$emit('upDataRatings',resulte)
            },
             upDataRatingsTC(){
                this.active1=false;
                this.active2=false;
                this.active3=true;
                 let resulte=[];
                resulte=this.ratings.filter((item)=>{
                    if(this.flag){
                        return item.rateType===1&&item.text!==''
                    }else{
                         return item.rateType===1
                    }
                    
                })
                this.$bus.$emit('upDataRatings',resulte)
            },
            async upDataRatingsByNR(){
                if(this.active1){
                    this.oldlist=[...this.$store.state.ratings];
                    if(!this.flag){
                    let resulte=[];
                   
                    // console.log(this.oldlist)
                    resulte=this.ratingslist.filter((item)=>{
                        return item.text!==''
                    })
                    this.$bus.$emit('upDataRatings',resulte)
                    this.flag=true;
                    this.ratingslist2=[...this.$store.state.ratings.filter((item)=>{
                        return item.text!==''
                    })]
                    }else{
                        this.$bus.$emit('upDataRatings',this.oldlist)
                        
                        
                        this.flag=false;
                        this.ratingslist2=[...this.$store.state.ratings]
                    }
                }else if(this.active2){
                    this.oldlist=[...this.$store.state.ratings.filter((item)=>{
                        return item.rateType===0
                    })];
                    console.log(this.oldlist)
                    if(!this.flag){
                    let resulte=[];
                    
                    // console.log(this.oldlist)
                    resulte=this.ratingslist.filter((item)=>{
                        return item.text!==''&&item.rateType===0
                    })
                    this.$bus.$emit('upDataRatings',resulte)
                    this.flag=true;
                    this.ratingslist2=[...this.$store.state.ratings.filter((item)=>{
                        return item.text!==''
                    })]
                    }else{
                        this.$bus.$emit('upDataRatings',this.oldlist)
                        
                        
                        this.flag=false;
                        this.ratingslist2=[...this.$store.state.ratings]
                    }
                }else if(this.active3){
                     this.oldlist=this.$store.state.ratings.filter((item)=>{
                        return item.rateType===1
                    });
                    console.log(this.oldlist,this.$store.state.ratings)
                    if(!this.flag){
                    let resulte=[];
                   
                    // console.log(this.oldlist)
                    resulte=this.ratingslist.filter((item)=>{
                        return item.text!==''&&item.rateType===1
                    })
                    this.$bus.$emit('upDataRatings',resulte)
                    this.flag=true;
                    this.ratingslist2=[...this.$store.state.ratings.filter((item)=>{
                        return item.text!==''
                    })]
                    }else{
                        await this.$bus.$emit('upDataRatings',this.oldlist)
                        
                        this.flag=false;
                        this.ratingslist2=[...this.$store.state.ratings]
                    }
                }
            },
           
        },
        props:{
                ratingslist:Array
            }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import "../../common/stylus/mixin.styl"

    .ratings-filter
        .rating-type
            padding: 18px 0
            margin: 0 18px
            one-px(rgba(7, 17, 27, 0.1))
            font-size: 0
            .block
                display: inline-block
                padding: 8px 12px
                margin-right: 8px
                line-height: 16px
                border-radius: 1px
                font-size: 12px
                color: rgb(77, 85, 93)
                background: rgba(77, 85, 93, 0.2)
                &.active
                    background: green
                    color: #fff
                .count
                    margin-left: 2px
                    font-size: 8px
        .switch
            padding: 12px 18px
            line-height: 24px
            border-bottom: 1px solid rgba(7, 17, 27, 0.1)
            color: rgb(147, 153, 159)
            font-size: 0
            &.on
                .layout-check_circle
                    color: green
            .layout-check_circle
                display: inline-block
                vertical-align: top
                margin-right: 4px
                font-size: 24px
            .text
                display: inline-block
                vertical-align: top
                font-size: 12px
</style>
