import Home from './components/Home'
import FoodDetails from './components/FoodDetails.vue'
import Cart from './components/Cart.vue'

export default[
    {path: '/', component:Home},
    {path: '/food-details',name: 'food-details', component:FoodDetails},
    {path: '/cart', component:Cart},
]