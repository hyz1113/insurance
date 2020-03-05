import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hasChildNum: 0,
    baseinfo: {
      people_age: "",
      people_sex: "",
      spouse_age: "",
      spouse_sex: "",
      childFirst_age: "",
      childFirst_sex: "",
      childSecond_age: "",
      childSecond_sex: ""
    },//存储人的年龄和性别信息
    formResponseData: null, //存储表单提交数据
    formType: null,//存储表单类型，个人，家庭，孩子
    failyType: "",//存储表单类型，个人，家庭，孩子
    childCasetableData: null,//孩子对应方案表格数据
    insurType: null,//推荐保险的类型
    showFontFg: false,//是否显示规划页面，红字部分
    familyincome: false//孩子家庭教育金规划
  },
  mutations: {
    modifyNum(state, num) {
      state.hasChildNum = num;
    },
    modifyType(state, num) {
      state.failyType = num;
    },
    modifyFormRespData(state, data) {
      state.formResponseData = data;
    },
    modifyFormType(state, data) {
      state.formType = data;
    },
    modifyBaseinfo(state, data) {

      switch (data[2]) {
        case 1: {
          state.baseinfo.people_age = data[0];
          state.baseinfo.people_sex = data[1];
        }
          break;
        case 2: {
          state.baseinfo.spouse_age = data[0];
          state.baseinfo.spouse_sex = data[1];
        }
          break;
        case 3: {
          state.baseinfo.childFirst_age = data[0];
          state.baseinfo.childFirst_sex = data[1];
        }
          break;
        case 4: {
          state.baseinfo.childSecond_age = data[0];
          state.baseinfo.childSecond_sex = data[1];
        }
          break;
      }
    },
    modifycaseTable(state, data) {
      state.childCasetableData = data;
    },
    modifyInsurType(state, data) {
      let str = "";
      switch (data) {
        case 1: {
          str = "豪华型";
        }
          break;
        case 2: {
          str = "进阶型";
        }
          break;
        case 3: {
          str = "经济型";
        }
          break;
      }
      state.insurType = str;
    },
    modifyShowffg(state, data) {
      state.showFontFg = data;
    },
    modifyFamilyincome(state, data) {
      data = parseFloat(data);
      if (data <= 20) {
        state.familyincome = "不推荐购买教育金";
      } else if (20 < data && data <= 60) {
        state.familyincome = "推荐国内上学方案";
      } else {
        state.familyincome = "推荐国外上学方案";
      }
    }
  },
  actions: {
    resitCaseTable({ commit }, data) {
      window.sessionStorage.childCasetableData = data;
      commit("modifycaseTable", data);
    },
    resiteChildNum({ commit }, num) {
      window.sessionStorage.hasChildNum = num;
      commit("modifyNum", num);
    },
    resiteType({ commit }, num) {
      window.sessionStorage.failyType = num;
      commit("modifyType", num);
    },
    resiteFormData({ commit }, data) {
      window.sessionStorage.formResponseData = data;
      commit("modifyFormRespData", data);
    },
    resiteFormType({ commit }, data) {
      window.sessionStorage.formType = data;
      commit("modifyFormType", data);
    },
    resiteBaseInfoPeople({ commit }, data) {
      window.sessionStorage.baseinfo = data;
      commit("modifyBaseinfo", data);
    },
    resiteInsurType({ commit }, data) {
      commit("modifyInsurType", data);
    },
    resiteShowFontFg({ commit }, data) {
      commit("modifyShowffg", data);
    },
    resiteFamilyincome({ commit }, data) {
      commit("modifyFamilyincome", data);
    }
  },
  getters: {
    getChildNum(state) {
      return state.hasChildNum;
      // if(state.hasChildNum!=0){
      //   return state.hasChildNum;
      // }else{
      //   return window.sessionStorage.hasChildNum;
      // }
    },
    getFomData(state) {
      return state.formResponseData;
    },
    getBaseInfo(state) {
      return state.baseinfo;
    },
    getFormType(state) {
      return state.formType;
    }
  },
  modules: {}
});
