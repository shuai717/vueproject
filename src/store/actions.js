import {GETGOODS,GETRATINGS,GETSELLER,GETADDRESS} from './mutations_type'
export default{
    actSetSeller(store,val){
        store.commit(GETSELLER,val)
    },
    actSetGoods(store,val){
        store.commit(GETGOODS,val)
    },
    actSetRatings(store,val){
        store.commit(GETRATINGS,val)
    },
    actSetAddress(store,val){
        store.commit(GETADDRESS,val)
    },
}