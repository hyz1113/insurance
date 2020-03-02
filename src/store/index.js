import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hasChildNum: 0,
    failyType:'',
    formResponseData:null,
    formType:null,
  },
  mutations: {
    modifyNum(state, num) {
      state.hasChildNum = num;
    },
    modifyType(state, num) {
      state.failyType = num;
    },
    modifyFormRespData(state, data){
     state.formResponseData=data;
    },
    modifyFormType(state, data){
      state.formType=data;
    },
  },
  actions: {
    resiteChildNum({ commit }, num) {
      commit("modifyNum", num);
    },
    resiteType({ commit }, num) {
      commit("modifyType", num);
    },
    resiteFormData({commit},data) {
      commit('modifyFormRespData',data);
    },
    resiteFormType({commit},data) {
      commit('modifyFormType',data);
    },
  },
  modules: {}
});
