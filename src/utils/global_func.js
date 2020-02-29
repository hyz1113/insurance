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

function validatef(formArr) {
  let fg=false;
  let arr='';
  if(formArr.length>1){
    formArr.forEach((item,index)=>{

      let a='';
      item.$refs['form'].validate((valid) => {
        arr+=`${valid},`;
        a+=`${valid},`;
      })
      console.log("第  "+(index+1)+'   '+a);
    })
  }else{
    formArr[0].$refs['form'].validate((valid) => {
      arr+=`${valid},`;
    })
  }

  if(!arr.includes('false')){
    fg=true;
  }
  return fg;
}




export default {
  // Vue.js的插件应当有一个公开方法 install。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象。
  install: function (Vue) {
    Vue.prototype.resiteBsdetail = (param) => resiteBt(param)
    Vue.prototype.validateForm = (param) => validatef(param)


  }
}
