import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      token: localStorage.getItem("token")
    },
    campaign_id: "",
    quest_id: ""
  },
  getters: {
    auth(state) {
      return state.user
    }
  },
  mutations: {
    clearToken(state) {
      state.user.token = ""
    }
  },
  actions: {
  },
  modules: {
  }
})
