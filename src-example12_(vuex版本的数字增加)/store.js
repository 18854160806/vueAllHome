/*
vuex的核心对象管理模块
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 状态
const state = {// 初始化状态
  count: 0
}
// 包含多个更新state函数的对象
const mutations = {
  // 增加的mutation
  INCREMENT (state) {
    state.count++
  },
  // 减少的mutation
  DECREMENT (state) {
    state.count--
  }
}
// 对应事件回调函数的包含的对象
const actions = {
  // 增加的action
  increment ({commit}) {
    // 提交mutation
    commit('INCREMENT')
  },
  decrement ({commit}) {
    commit('DECREMENT')
  },
  incrementIfOdd ({commit, state}) {
    if (state.count % 2 === 1) {
      commit('INCREMENT')
    }
  },
  incrementAsync ({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    },1000)
  }
}
// 包含多个getter计算属性的函数对象
const getters = {
  evenOrOdd (state) {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}

export default new Vuex.Store({
  state, // 状态
  mutations, // 包含多个更新state函数的对象
  actions, // 对应事件回调函数的包含的对象
  getters // 包含多个getter计算属性的函数对象
})
