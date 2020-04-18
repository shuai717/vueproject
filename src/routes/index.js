// import seller from '../pages/seller.vue'
// import goods from '../pages/goods.vue'
// import ratings from '../pages/ratings.vue'
import login from '../pages/Login.vue'
import msite from '../pages/Msite.vue'
import order from '../pages/Order.vue'
import profile from '../pages/Profile.vue'
import search from '../pages/Search.vue'

export default[
    // {path:'/seller',component:seller},
    // {path:'/goods',component:goods},
    // {path:'/ratings',component:ratings},
    {path:'/Login',component:login,meta:{showFooter:false}},
    {path:'/Msite',component:msite,meta:{showFooter:true}},
    {path:'/Order',component:order,meta:{showFooter:true}},
    {path:'/Profile',component:profile,meta:{showFooter:true}},
    {path:'/Search',component:search,meta:{showFooter:true}},
    {path:'/',redirect:'/Msite'},
]