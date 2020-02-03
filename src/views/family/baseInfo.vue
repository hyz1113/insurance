<template>
  <div>
    <div class="bgf p-10 ">
      <el-divider>
        <el-link type="info" plain size="mini">个人基本信息</el-link>
      </el-divider>
      <base-baseform
              :formConfig="formConfig"
              :formData="formData"
              labelWidth="90px"
      ></base-baseform>
      <base-baseform
              :formConfig="formConfigA"
              :formData="formData"
              labelWidth="185px"
      ></base-baseform>
    </div>
    <div class="bgf p-10 m-t-10">
      <el-divider>
        <el-link type="info" plain size="mini">配偶基本信息</el-link>
      </el-divider>
      <base-baseform
              :formConfig="formConfigff"
              :formData="formDataff"
              labelWidth="80px"
      ></base-baseform>
      <base-baseform
              :formConfig="formConfigffA"
              :formData="formDataff"
              labelWidth="185px"
      ></base-baseform>
    </div>

    <div class="bgf p-10 m-t-10">
      <el-divider>
        <el-link type="info" plain size="mini">大孩基本信息</el-link>
      </el-divider>
      <base-baseform
              :formConfig="formConfigffChild"
              :formData="formDataffChild"
              labelWidth="80px"
      ></base-baseform>
      <base-baseform
              :formConfig="formConfigffChildA"
              :formData="formDataffChild"
              labelWidth="185px"
      ></base-baseform>
    </div>

    <div class="bgf p-10 m-t-10">
      <el-divider>
        <el-link type="info" plain size="mini">二孩基本信息</el-link>
      </el-divider>
      <base-baseform
              :formConfig="formConfigScChild"
              :formData="formDataScChild"
              labelWidth="80px"
      ></base-baseform>
      <base-baseform
              :formConfig="formConfigScChildA"
              :formData="formDataScChild"
              labelWidth="185px"
      ></base-baseform>
    </div>

    <div class="bgf p-10 m-t-10">
      <el-divider>
        <el-link type="info" plain size="mini">家庭综合项</el-link>
      </el-divider>
      <base-baseform
              :formConfig="formConfigfamily"
              :formData="formDatafamily"
              labelWidth="200px"
              :rules="rules1"
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
    value = Number(value);
    let reg = /^\d+(\.\d{1})?$/;
    if (!reg.test(value)) {
      callback(new Error("只能有一位小数"));
      return;
    }
    if (!(value > 0 && value<9999)) {
      callback(new Error("输入范围0-9999 单位为万元/年"));
      return;
    }
    callback();
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
          },
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
          },
          {
            type: "checkbox",
            label: "",
            value: "insuranceType",
            tip: "",
            hide: false,
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
          },
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
          },
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
        formData: {
          name: "",
          sex: 1,
          age: "",
          medicalSafe: 1,
          insuranceType: [],
          othermedical: 1,
          healthCheck: 1
        },

        ////配偶项
        formConfigff: [
          {
            type: "input",
            label: "配偶昵称",
            value: "name",
            tip: "请输入配偶昵称"
          },
          {
            type: "input",
            label: "配偶年龄",
            value: "age",
            tip: "请输入配偶年龄"
          }
        ],
        formConfigffA: [
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
          },
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
          },
          {
            type: "checkbox",
            label: "",
            value: "insuranceType",
            tip: "",
            hide: false,
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
          },
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
          },
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
        formDataff: {
          name: "",
          sex: 1,
          age: "",
          medicalSafe: 1,
          insuranceType: [],
          othermedical: 1,
          healthCheck: 1
        },

        ////大孩项
        formConfigffChild: [
          {
            type: "input",
            label: "大孩昵称",
            value: "name",
            tip: "请输入大孩昵称"
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
            label: "大孩年龄",
            value: "age",
            tip: "未满1周岁填0岁"
          }
        ],
        formConfigffChildA: [
          {
            type: "radio",
            label: "有无一老一小险",
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
          },
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
          },
          {
            type: "checkbox",
            label: "",
            value: "insuranceType",
            tip: "",
            hide: false,
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
          },
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
          },
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
        formDataffChild: {
          name: "",
          sex: 1,
          age: "",
          medicalSafe: 1,
          insuranceType: [],
          othermedical: 1,
          healthCheck: 1
        },

        ////二孩项
        formConfigScChild: [
          {
            type: "input",
            label: "大孩昵称",
            value: "name",
            tip: "请输入大孩昵称"
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
            label: "大孩年龄",
            value: "age",
            tip: "未满1周岁填0岁"
          }
        ],
        formConfigScChildA: [
          {
            type: "radio",
            label: "有无一老一小险",
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
          },
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
          },
          {
            type: "checkbox",
            label: "",
            value: "insuranceType",
            tip: "",
            hide: false,
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
          },
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
          },
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
        formDataScChild: {
          name: "",
          sex: 1,
          age: "",
          medicalSafe: 1,
          insuranceType: [],
          othermedical: 1,
          healthCheck: 1
        },

        ////家庭综合项
        formConfigfamily: [
          {
            type: "input",
            label: "家庭税后收入约（万/年）",
            value: "familyIncome",
            tip: "请输入家庭税后收入"
          },
          {
            type: "select",
            label: "家庭收入稳定性",
            value: "inComestable",
            tip: "请输入家庭税后收入",
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
            label: "房贷或房租支出约（万/年）",
            value: "housePay",
            tip: "请输入"
          },
          {
            type: "input",
            label: "其他贷款偿付支出约（万/年）",
            value: "otherPay",
            tip: "请输入"
          },
          {
            type: "input",
            label: "孩子教育投入支出约（万/年）",
            value: "childEduPay",
            tip: "请输入"
          },
          {
            type: "input",
            label: "家庭理财投入支出约（万/年）",
            value: "familyMm",
            tip: "请输入"
          }
        ],

        formDatafamily: {
          familyIncome: null,
          inComestable: [],
          housePay: null,
          otherPay: null,
          childEduPay: null,
          othermedical: null,
          familyMm: null
        },
        rules1: {
          familyIncome: {
            validator: CheckInt,
            trigger: "blur"
          },
          housePay: {
            validator: CheckInt,
            trigger: "blur"
          },
          otherPay: {
            validator: CheckInt,
            trigger: "blur"
          },
          childEduPay: {
            validator: CheckInt,
            trigger: "blur"
          },
          familyMm: {
            validator: CheckInt,
            trigger: "blur"
          }
        },

        tel: null //受邀手机号
      };
    },
    methods: {

      submit() {
        this.$router.push({
          path: "/family/contrastList"
        });
      }
    }
  };
</script>
