export default {
    name:'seller',
    api:{
        getSeller:{
            url:"/api/seller",
            method:"get",
            toast:true
        },
        
    },
    
    timeout:3000,
    hooks:{
        beforeReq(){},
        afterReqSuccess(data){data.xxx="模块级别的处理";},
        afterReqFail(){},
      }
}