function resiteBt(formName) {
  let keySel = Object.keys(formName.otherInMoneyList);
  keySel.forEach(item => {
    if (formName[item]) {
      formName[item] = "";
      //delete that.form[item];
    }
  });
  formName.bsdetail.seriousillness = "";
  formName.bsdetail.consumermedical = "";
  formName.bsdetail.accident = "";
  formName.bsdetail.life = "";
  formName.bsdetail.endowment = "";
  formName.insuranceType = [];
}



export default {
  // Vue.js的插件应当有一个公开方法 install。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象。
  install: function (Vue) {
    Vue.prototype.resiteBsdetail = (param) => resiteBt(param)

  }
}