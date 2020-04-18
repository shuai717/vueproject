export default {
    name:'wrap',
    api:{
        getPosition:{
            url:"/position/40.10038,116.36867",
            method:"get",
            corsUrl:"/4000"
        }
    },
    timeout:3000,
    hooks:{
        beforeReq(){},
        afterReqSuccess(){},
        afterReqFail(){},
      }
}