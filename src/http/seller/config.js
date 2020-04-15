export default {
    name:'seller',
    api:{
        getSeller:{
            url:"/api/seller",
            method:"get",
            toast:true
        },
        getGoods:{
            url:"/api/goods",
            method:"get",
            toast:true
        },
        getRatings:{
            url:"/api/ratings",
            method:"get",
            toast:true
        },
        
    },
    
    timeout:3000,
    hooks:{
        beforeReq(){},
        afterReqSuccess(){},
        afterReqFail(){},
      }
}