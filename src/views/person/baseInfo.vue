<template>
  <div>
    <div class="bgf p-10 ">
      <el-divider>
        <el-link type="info" plain size="mini">个人基本信息</el-link>
      </el-divider>
      <base-baseform
              :formConfig="formConfig"
              :formData="form"
              :rules="rules"
              labelWidth="130px"
      ></base-baseform>
    </div>
    <div class="bgf p-10 m-t-10 no-bottom">
      <base-baseform
              :formConfig="formConfigA"
              :formData="form"
              labelWidth="190px"
      ></base-baseform>
    </div>

    <div class="bgf p-10 m-t-10 no-bottom">
      <base-baseform
              :formConfig="formConfigB"
              :formData="form"
              labelWidth="190px"
      ></base-baseform>
    </div>

    <div class="bgf p-10 m-t-10 no-bottom">
      <base-baseform
              :formConfig="formConfigC"
              :formData="form"
              labelWidth="190px"
      ></base-baseform>
    </div>

    <div class="bgf p-10 m-t-10 no-bottom">
      <base-baseform
              :formConfig="formConfigD"
              :formData="form"
              labelWidth="180px"
      ></base-baseform>
    </div>

    <div class="clear ovh bgf" v-show="show">
      <div class="pull-left list-check-height" style="width: 140px;">
        <base-baseform
                :formConfig="formConfigD1"
                :formData="form"
                labelWidth="15px"
        ></base-baseform>
      </div>
      <div class="pull-left">
        <base-baseform
                :formConfig="formConfigD2"
                :formData="form"
                labelWidth="15px"
        ></base-baseform>
      </div>
    </div>

    <div class="bgf p-10 m-t-10 no-bottom">
      <base-baseform
              :formConfig="formConfigE"
              :formData="form"
              labelWidth="180px"
      ></base-baseform>
    </div>

    <div class="bgf p-10 m-t-10 no-bottom">
      <base-baseform
              :formConfig="formConfigF"
              :formData="form"
              labelWidth="180px"
      ></base-baseform>
    </div>

    <div class="bgf p-10 m-t-10 no-bottom">
      <base-inputTel></base-inputTel>

      <div class="m-t-10 row-align-center">
        <el-button
                class="row-align-center"
                size="mini"
                type="success"
                @click="submit"
        >提交
        </el-button>
        <el-button
                class="row-align-center"
                size="mini"
                type="info"
                @click="$router.back()"
        >返回
        </el-button>
      </div>
      <div class="f-12 m-t-10 g-6">
        规划结果查询,请在提交后,查询页输入,接收到内测短信的手机号码
      </div>
      <div class="f-12 m-t-10 g-6">
        本工具目前为公开内测版本,允许安心选跟踪联系表单满意度
      </div>
    </div>
  </div>
</template>

<script>
  const CheckInt = (rule, value, callback) => {
    //debugger;
    value = Number(value);
    debugger;
    if (!(value > 18 && value < 60)) {
      callback(new Error("年龄需大于18岁小于60岁!"));
    } else {
      callback();
    }
  };
  export default {
    name: "personbaseInfo",
    data: () => {
      return {
        ////个人项
        formConfig: [
          {
            type: "input",
            label: "昵称",
            value: "name",
            tip: "请输入昵称"
          },
          {
            type: "radio",
            label: "性别",
            value: "sex",
            tip: "请选择性别",
            option: {
              disabled: false,
              data: [
                {
                  label: "男",
                  value: 1
                },
                {
                  label: "女",
                  value: 2
                }
              ]
            }
          },
          {
            type: "input",
            label: "年龄",
            value: "age",
            tip: "请输入年龄"
          },
          {
            type: "select",
            label: "职业发展预期",
            value: "inComestable",
            tip: "请选择职业发展预期",
            hide: false,
            option: {
              disabled: false,
              data: [
                {
                  label: "非常稳定",
                  value: 1
                },
                {
                  label: "比较稳定",
                  value: 2
                },
                {
                  label: "不太稳定",
                  value: 3
                }
              ]
            }
          },
          {
            type: "input",
            label: "税后收入（万/年）",
            value: "income",
            tip: "请输入税后收入"
          }
        ],
        formConfigA: [
          {
            type: "radio",
            label: "有无社保/新农村医疗",
            value: "medicalSafe",
            option: {
              disabled: false,
              data: [
                {
                  label: "有",
                  value: 1
                },
                {
                  label: "无",
                  value: 2
                }
              ]
            }
          }
        ],
        formConfigB: [
          {
            type: "input",
            label: "房贷或房租支出（万/年）",
            value: "payHouse",
            tip: "请输入"
          }
        ],
        formConfigC: [
          {
            type: "input",
            label: "其他贷款偿付支出（万/年）",
            value: "otherPay",
            tip: "其他贷款偿付支出"
          }
        ],
        formConfigD: [
          {
            type: "radio",
            label: "有无买过商业保险",
            value: "otherInsurance",
            tip: "有无买过商业保险",
            option: {
              disabled: false,
              data: [
                {
                  label: "有",
                  value: 1
                },
                {
                  label: "无",
                  value: 2
                }
              ]
            }
          }
        ],
        formConfigD1: [
          {
            type: "checkbox",
            label: "",
            value: "insuranceType",
            tip: "",
            option: {
              disabled: false,
              data: [
                {
                  label: "重疾险",
                  value: 1
                },
                {
                  label: "消费型医疗险",
                  value: 2
                },
                {
                  label: "意外险",
                  value: 3
                },
                {
                  label: "寿险",
                  value: 4
                },
                {
                  label: "养老险",
                  value: 5
                }
              ]
            }
          }
        ],
        formConfigD2: [
          {
            type: "input",
            label: "",
            value: "otherInMoneyList.value1",
            tip: "保额（万）[保障上限]"
          },
          {
            type: "input",
            label: "",
            value: "otherInMoneyList.value2",
            tip: "保额（万）[保障上限]"
          },
          {
            type: "input",
            label: "",
            value: "otherInMoneyList.value3",
            tip: "保额（万）[保障上限]"
          },
          {
            type: "input",
            label: "",
            value: "otherInMoneyList.value4",
            tip: "保额（万）[保障上限]"
          },
          {
            type: "input",
            label: "",
            value: "otherInMoneyList.value5",
            tip: "保额（万）[保障上限]"
          }
        ],
        formConfigE: [
          {
            type: "radio",
            label: "有无慢性病或家族遗传病史",
            value: "othermedical",
            mesg: "（评估未来健康风险值）",
            option: {
              disabled: false,
              data: [
                {
                  label: "有",
                  value: 1
                },
                {
                  label: "无",
                  value: 2
                }
              ]
            }
          }
        ],
        formConfigF: [
          {
            type: "radio",
            label: "体检结果是否有异常",
            value: "healthCheck",
            mesg: "（最近一次）",
            option: {
              disabled: false,
              data: [
                {
                  label: "有",
                  value: 1
                },
                {
                  label: "无",
                  value: 2
                }
              ]
            }
          }
        ],
        form: {
          name: "",
          sex: 1,
          age: 1,
          salary: 1000, //工资
          medicalSafe: 1, //医保
          payHouse: 1, //买房支出
          otherPay: 1, //其他支出
          otherInsurance: 2, //有无买其他保险
          othermedical: 2, //有无其他疾病
          healthCheck: 1, //健康检查
          insuranceType: [], //商业保险类型
          inComestable: null, //职业规划
          otherInMoneyList: {
            value1: "",
            value2: "",
            value3: "",
            value4: "",
            value5: ""
          }//保险的额度
        },
        rules: {
          age: {
            validator: CheckInt,
            trigger: "blur"
          }
        },
        show: false,
        tel: null //受邀手机号
      };
    },
    watch: {
      "form.otherInsurance"() {
        this.show = !this.show;
      }
    },
    methods: {
      submit() {
        this.$router.push({
          path: "/person/contrastList"
        });
      }
    }
  };
</script>
