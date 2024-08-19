import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import {useCookies} from 'vue-cookies'
import router from '@/router';
/* eslint-disable */

axios.defaults.withCredentials = true
axios.defaults.headers = $cookies.get('token')

export default createStore({
  state: {
    users: null,
    fruits: null
  },
  getters: {
  },
  mutations: {
    setFruit(state,payload){
    state.fruits = payload
    }
  },
  actions: {
    addUser({commit},info){
      let {data} = axios.post('http://localhost:5003/users',info)
      if(data){
        toast("Registered Successfully!!", {
          "theme": "auto",
          "type": "default",
          "position": "top-center",
          "dangerouslyHTMLString": true
        })
      }
    },
    async loginUser({commit}, info){
      let {data}= await axios.post('http://localhost:5003/users/login',info)
      console.log(data);
      $cookies.set('token',data.token)
      if (data.message){
        toast("Logged In Successfully!!", {
          "theme": "auto",
          "type": "default",
          "position": "top-center",
          "dangerouslyHTMLString": true
        })
      }
     await router.push('/') 
     location.reload()
    },
    async getFruits({commit}){
      let {data} = await axios.get('http://localhost:5003/fruit')
      console.log(data);
      commit('setFruit',data)
    },
    async addToCart({commit, fruit_id}){
      let {data} = await axios.post('http://localhost:5003/cart', {id:fruit_id})
      console.log(data);
      commit('addToCart', data)
    }
  },
  modules: {
  }
})

