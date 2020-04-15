import {GETGOODS,GETRATINGS,GETSELLER} from './mutations_type'
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
}