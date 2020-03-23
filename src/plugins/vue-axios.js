import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

const instance = axios.create({
  baseURL: "http://localhost:3000",
})

instance.interceptors.request.use(request => {
  request.headers['Authorization'] = `${localStorage.getItem('token')}`
  return request
})

instance.interceptors.response.use(response => {
  return response
}, error => {
  console.log(error)
  const { response: { status } } = error;
  // const originalRequest = config;

  if ([401,417].indexOf(status) !== -1) {
    localStorage.removeItem('token')
  }

  return Promise.reject(error)
})

Vue.use(VueAxios, instance)
