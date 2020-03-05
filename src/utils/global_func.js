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

function dealTablef(data){
  let tableData=[];
  if(data.length){
    for(let i in  data){
      let item=data[i];
      let rowData=dealTypef(item);
      item.insure_ver=rowData.type;
      item.year_payment=rowData.time;
      let insuranceTime=item.insure_desc.includes('/')?item.insure_desc.split('/'):'';
      item.insure_endyear=insuranceTime?insuranceTime[0].replace('保障',''):"";
      item.paytotal_year=insuranceTime?insuranceTime[1].replace('缴费',''):"";
      tableData.push(item);
    }
  }
  return tableData;
}


function dealTypef(row){
  let obj={
    type:'',
    time:'',
  };
  switch (row.insure_version) {
    case 0:{obj.type='意外险'; obj.time=row.pay_year;}break;
    case 1:{obj.type='重疾险'; obj.time=row.pay_year;}break;
    case 2:{obj.type='百万医疗险'; obj.time=row.ensure_pay;}break;
    case 3:{obj.type='寿险'; obj.time=row.pay_year;}break;
    case 4:{obj.type='少儿小额医疗'; obj.time=row.pay_year;}break;
  }
  return obj;
}


export default {
  // Vue.js的插件应当有一个公开方法 install。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象。
  install: function (Vue) {
    Vue.prototype.resiteBsdetail = (param) => resiteBt(param)
    Vue.prototype.validateForm = (param) => validatef(param)
    Vue.prototype.dealTableData = (param) => dealTablef(param)
    Vue.prototype.dealType = (param) => dealTypef(param)


  }
}
