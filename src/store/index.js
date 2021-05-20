import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    LastSearchedCity: ''
  },
  mutations: {
    SaveLastSearch: (state, SaveSearchedCity) => {
      state.LastSearchedCity = SaveSearchedCity;
    }
  },
  actions: {
  },
  modules: {
  }
})
