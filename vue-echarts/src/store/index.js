import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const state = {
  cityList: [],
}
const mutations = {
  getAllCity (state, payload) {
    state.cityList = payload.cityList
  },
}
const actions = {
  async getAllCity ({ commit }) {
    console.log('哈哈哈')
    const res = await axios.get('/data/cityList.json')
    commit('getAllCity', {
      cityList: res.data,
    })
  },
}

const getters = {
  totalCount (state) {
    let total = 0
    state.cityList.forEach(item => {
      total += item.confirmedCount
    })
    return total + ''
  }
}
const store = new Vuex.Store({
  strict: true,
  state,
  actions,
  mutations,
  getters
})

export default store
