import Vue from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'

const instance = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    'Accept':       'application/json',
    'Content-Type': 'application/json',
  }
})

instance.interceptors.request.use(request => {
  request.headers['Authorization'] = `${localStorage.getItem('token')}`
  return request
})

instance.interceptors.response.use(response => {
  return response
}, error => {
  console.log(error)
  const { response: { status } } = error
  const { response: { data } } = error
  // const originalRequest = config;

  console.log(status)
  console.log(data)

  if ([401,417].indexOf(status) !== -1) {
    if (data.error == 'Token is already revoked' ||
        data.error == 'token invalid' ||
        data.error == 'Token is expired') {
      localStorage.removeItem('token')
    }
  }

  return Promise.reject(error)
})

Vue.use(VueAxios, instance)
