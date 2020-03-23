import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

const instance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
})

Vue.use(VueAxios, instance)
