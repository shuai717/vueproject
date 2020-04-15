import seller from '../pages/seller.vue'
import goods from '../pages/goods.vue'
import ratings from '../pages/ratings.vue'
export default[
    {path:'/seller',component:seller},
    {path:'/goods',component:goods},
    {path:'/ratings',component:ratings},
    {path:'/',redirect:'/goods'}
]