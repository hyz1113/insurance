import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hasChildNum: 0,
    failyType:''
  },
  mutations: {
    modifyNum(state, num) {
      state.hasChildNum = num;
    },
    modifyType(state, num) {
      state.failyType = num;
    },
  },
  actions: {
    resiteChildNum({ commit }, num) {
      commit("modifyNum", num);
    },
    resiteType({ commit }, num) {
      commit("modifyType", num);
    }
  },
  modules: {}
});
