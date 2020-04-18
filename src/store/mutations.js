import store from "."
import {GETGOODS,GETRATINGS,GETSELLER,GETADDRESS} from './mutations_type'
export default{
    [GETSELLER](state,val){
        state.seller=val;
    },
    [GETGOODS](state,val){
        state.goods=val;
    },
    [GETRATINGS](state,val){
        state.ratings=val;
    },
    [GETADDRESS](state,val){
        state.addressObj=val;
    },
}