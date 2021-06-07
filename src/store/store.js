import Vue from 'vue'
import Vuex from 'vuex'

import cake from "../assets/arjun-kapoor-oqLnHkvny3U-unsplash.jpg"
import noodles from '../assets/carolyn-v-K-YlEjJDSEo-unsplash.jpg'
import fries from '../assets/hush-naidoo-yo01Z-9HQAw-unsplash.jpg'
import macroni from '../assets/kendal-L4iKccAChOc-unsplash.jpg'
import pizza from '../assets/luke-chesser-rCOWMC8qf8A-unsplash.jpg'
import salad from '../assets/marco-oriolesi-wqLGlhjr6Og-unsplash.jpg'
import samosa from '../assets/nicholas-green-rAsESO5Puqw-unsplash.jpg'
import soup from '../assets/vincent-van-zalinge-vUNQaTtZeOo-unsplash.jpg'
import tacos from '../assets/wright-brand-bacon-sOomKkiqmTY-unsplash.jpg'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    topRated:[
        {id:1, name: 'Cake', price:100, url: cake, desc:"Very Tasty Cake", rate: 4.1},
        {id:2, name: 'Noodles', price:200, url: noodles, desc:"Chilly", rate: 4.1},
        {id:3, name: 'Fries', price:70, url: fries, desc:"Crispy", rate: 4.2},
    ],
    allCategories:[
        {id:4, name: 'Macroni', price:150, url: macroni, desc:"Yummy", rate: 4.5},
        {id:5, name: 'Pizza', price:400, url: pizza, desc:"Very Tasty", rate: 4.0},
        {id:6, name: 'Salad', price:60, url: salad, desc:"Very Tasty", rate: 4.2},
    ],
    dishesNearYou:[
        {id:7, name: 'Samosa', price:20, url: samosa, desc:"Very Tasty", rate: 4.2},
        {id:8, name: 'Soup', price:50, url: soup, desc:"Delicious", rate: 4.2},
        {id:9, name: 'Tacos', price:110, url: tacos, desc:"Awesome", rate: 4.4},
    ],

    cartItemCount: 0,
    cartItems: [],

  },
  mutations:{
    addToCart(state,payload){
      let item = payload;
      item = {...item, quantity: 1}
      if(state.cartItems.length > 0){
        let bool = state.cartItems.some(i => i.id == item.id)
        if(bool){
          let itemIndex = state.cartItems.findIndex(el => el.id === item.id)
          state.cartItems[itemIndex]["quantity"] += 1;
        }else{
          state.cartItems.push(item)
        }
      }else{
        state.cartItems.push(item)
      }
      state.cartItemCount++
    },
    removeItem(state, payload){
      if(state.cartItems.length > 0){
        let bool = state.cartItems.some(i => i.id === payload.id)
        if(bool){
          let index = state.cartItems.findIndex(el => el.id === payload.id);
          if(state.cartItems[index]["quantity"] !== 0){
            state.cartItems[index]["quantity"] -= 1
            state.cartItemCount--;
          }
          if(state.cartItems[index]['quantity'] === 0){
            state.cartItems.splice(index,1)
          }
          
        }
      }
    }
  },
  actions: {
    addToCart: (context, payload) => {
      context.commit("addToCart",payload);
    },
    removeItem: (context, payload) => {
      context.commit("removeItem",payload);
    }
  }
})