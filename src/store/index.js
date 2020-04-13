import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      token: localStorage.getItem("token")
    },
    campaign_id: ""
  },
  getters: {
    auth(state) {
      return state.user
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
