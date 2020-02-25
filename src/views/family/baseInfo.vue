<template>
  <div>
    <div class="bgf p-10 ">
      <el-divider>
        <el-link type="info" plain size="mini">个人基本信息</el-link>
      </el-divider>
      <base-baseform
              ref="form1"
              :rules="rules1"
              :formConfig="formConfig"
              :formData="formData"
              labelWidth="90px"
      ></base-baseform>
      <base-baseform
              ref="form2"
              :rules="rules1"
              :formConfig="formConfigA"
              :formData="formData"
              labelWidth="145px"
      ></base-baseform>
      <div class="clear ovh" v-show="show">
        <div class="pull-left list-check-height" style="width: 120px;">
          <base-baseform
                  ref="form3"
                  :rules="rules1"
                  :formConfig="formConfigA1"
                  :formData="formData"
                  labelWidth="15px"
          ></base-baseform>
        </div>
        <div class="pull-left">
          <base-baseform
                  ref="form4"
                  :rules="rules1"
                  :formConfig="formConfigA2"
                  :formData="formData"
                  labelWidth="15px"
          ></base-baseform>
        </div>
      </div>

      <base-baseform
              ref="form5"
              :rules="rules1"
              :formConfig="formConfigB"
              :formData="formData"
              labelWidth="180px"
      ></base-baseform>
      <base-baseform
              ref="form6"
              :rules="rules1"
              :formConfig="formConfigC"
              :formData="formData"
              labelWidth="180px"
      ></base-baseform>
    </div>
    <div class="bgf p-10 m-t-10">
      <el-divider>
        <el-link type="info" plain size="mini">配偶基本信息</el-link>
      </el-divider>
      <base-baseform
              ref="form7"
              :rules="rules2"
              :formConfig="formConfigff"
              :formData="formDataff"
              labelWidth="80px"
      ></base-baseform>
      <base-baseform
              ref="form8"
              :rules="rules2"
              :formConfig="formConfigffA"
              :formData="formDataff"
              labelWidth="145px"
      ></base-baseform>

      <div class="clear ovh" v-show="showff">
        <div class="pull-left list-check-height" style="width: 120px;">
          <base-baseform
                  ref="form9"
                  :rules="rules2"
                  :formConfig="formConfigffA1"
                  :formData="formDataff"
                  labelWidth="15px"
          ></base-baseform>
        </div>
        <div class="pull-left">
          <base-baseform
                  ref="form10"
                  :rules="rules2"
                  :formConfig="formConfigffA2"
                  :formData="formDataff"
                  labelWidth="15px"
          ></base-baseform>
        </div>
      </div>

      <base-baseform
              ref="form11"
              :rules="rules2"
              :formConfig="formConfigffB"
              :formData="formDataff"
              labelWidth="180px"
      ></base-baseform>
    </div>



    <div class="bgf p-10 m-t-10" v-show="isFirst">
      <el-divider>
        <el-link type="info" plain size="mini">大孩基本信息</el-link>
      </el-divider>
      <base-baseform
              ref="form13"
              :rules="rules3"
              :formConfig="formConfigffChild"
              :formData="formDataffChild"
              labelWidth="80px"
      ></base-baseform>
      <base-baseform
              ref="form14"
              :rules="rules3"
              :formConfig="formConfigffChildA"
              :formData="formDataffChild"
              labelWidth="145px"
      ></base-baseform>
      <div class="clear ovh" v-show="showffChild">
        <div class="pull-left list-check-height" style="width: 120px;">
          <base-baseform
                  ref="form15"
                  :rules="rules3"
                  :formConfig="formConfigffChildA1"
                  :formData="formDataffChild"
                  labelWidth="15px"
          ></base-baseform>
        </div>
        <div class="pull-left">
          <base-baseform
                  ref="form16"
                  :rules="rules3"
                  :formConfig="formConfigffChildA2"
                  :formData="formDataffChild"
                  labelWidth="15px"
          ></base-baseform>
        </div>
      </div>
      <base-baseform
              ref="form17"
              :rules="rules3"
              :formConfig="formConfigffChildB"
              :formData="formDataffChild"
              labelWidth="180px"
      ></base-baseform>
    </div>

    <div class="bgf p-10 m-t-10" v-show="hasSecond">
      <el-divider>
        <el-link type="info" plain size="mini">二孩基本信息</el-link>
      </el-divider>
      <base-baseform
              ref="form18"
              :rules="rules4"
              :formConfig="formConfigScChild"
              :formData="formDataScChild"
              labelWidth="80px"
      ></base-baseform>
      <base-baseform
              ref="form19"
              :rules="rules4"
              :formConfig="formConfigScChildA"
              :formData="formDataScChild"
              labelWidth="145px"
      ></base-baseform>
      <div class="clear ovh" v-show="showScChild">
        <div class="pull-left list-check-height" style="width: 120px;">
          <base-baseform
                  ref="form20"
                  :rules="rules4"
                  :formConfig="formConfigScChildA1"
                  :formData="formDataScChild"
                  labelWidth="15px"
          ></base-baseform>
        </div>
        <div class="pull-left">
          <base-baseform
                  ref="form21"
                  :rules="rules4"
                  :formConfig="formConfigScChildA2"
                  :formData="formDataScChild"
                  labelWidth="15px"
          ></base-baseform>
        </div>
      </div>
      <base-baseform
              ref="form22"
              :rules="rules4"
              :formConfig="formConfigScChildB"
              :formData="formDataScChild"
              labelWidth="180px"
      ></base-baseform>
    </div>

    <div class="bgf p-10 m-t-10">
      <el-divider>
        <el-link type="info" plain size="mini">家庭综合项</el-link>
      </el-divider>
      <base-baseform
              ref="form12"
              :rules="rules5"
              :formConfig="formConfigfamily"
              :formData="formDatafamily"
              labelWidth="200px"
      ></base-baseform>
    </div>



    <div class="bgf p-10 m-t-10 no-bottom">
      <base-inputTel @getTel="getTel"></base-inputTel>
      <div class="m-t-10 row-align-center">
        <el-button
                :disabled="isSubmit"
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
    if (!(value > 0 && value < 9999)) {
      callback(new Error("输入范围0-9999 单位为万元/年"));
      return;
    }
    callback();
  };
  export default {
    name: "personbaseInfo",
    data: () => {
      return {
        isFirst: false,
        hasSecond: false,
        show: false,
        showff: false,
        showffChild: false,
        showScChild: false,
        ////个人项
        formConfig: [
          {
            type: "input",
            label: "昵称",
            value: "nickname",
            tip: "请输入昵称"
          },
          {
            type: "radio",
            label: "性别",
            value: "gender",
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
            value: "socialsecurity",
            option: {
              disabled: false,
              data: [
                {
                  label: "有",
                  value: 1
                },
                {
                  label: "无",
                  value: 0
                }
              ]
            }
          },
          {
            type: "radio",
            label: "有无买过商业保险",
            value: "comminsurance",
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
                  value: 0
                }
              ]
            }
          }
        ],
        formConfigA1: [
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
                  value: "seriousillness"
                },
                {
                  label: "消费型医疗险",
                  value: "consumermedical"
                },
                {
                  label: "意外险",
                  value: "accident"
                },
                {
                  label: "寿险",
                  value: "life"
                },
                {
                  label: "养老险",
                  value: "endowment"
                }
              ]
            }
          }
        ],
        formConfigA2: [
          {
            type: "input",
            label: "",
            disabled: true,
            value: "seriousillness",
            tip: "保额（万）[保障上限]"
          },
          {
            type: "input",
            label: "",
            disabled: true,
            value: "consumermedical",
            tip: "保额（万）[保障上限]"
          },
          {
            type: "input",
            label: "",
            disabled: true,
            value: "accident",
            tip: "保额（万）[保障上限]"
          },
          {
            type: "input",
            label: "",
            disabled: true,
            value: "life",
            tip: "保额（万）[保障上限]"
          },
          {
            type: "input",
            label: "",
            disabled: true,
            value: "endowment",
            tip: "保额（万）[保障上限]"
          }
        ],
        formConfigB: [
          {
            type: "radio",
            label: "有无慢性病或家族遗传病史",
            value: "chronicdisease",
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
                  value: 0
                }
              ]
            }
          }
        ],
        formConfigC: [
          {
            type: "radio",
            label: "体检结果是否有异常",
            value: "physicalexam",
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
                  value: 0
                }
              ]
            }
          }
        ],
        formData: {
          nickname: "",
          gender: null,
          age: null,
          socialsecurity: null,
          comminsurance: null,
          invitenumber: null,
          physicalexam: null,
          chronicdisease: null,
          bsdetail: {
            seriousillness: "",
            consumermedical: "",
            accident: "",
            life: "",
            endowment: ""
          },//重疾病险
          insuranceType: [],
          otherInMoneyList: {
            seriousillness: "",
            consumermedical: "",
            accident: "",
            life: "",
            endowment: ""
          } //保险的额度

        },

        ////配偶项
        formConfigff: [
          {
            type: "input",
            label: "配偶昵称",
            value: "nickname",
            tip: "请输入配偶昵称"
          },
          {
            type: "radio",
            label: "性别",
            value: "gender",
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
            label: "配偶年龄",
            value: "age",
            tip: "请输入配偶年龄"
          }
        ],
        formConfigffA: [
          {
            type: "radio",
            label: "有无社保/新农村医疗",
            value: "socialsecurity",
            option: {
              disabled: false,
              data: [
                {
                  label: "有",
                  value: 1
                },
                {
                  label: "无",
                  value: 0
                }
              ]
            }
          },
          {
            type: "radio",
            label: "有无买过商业保险",
            value: "comminsurance",
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
                  value: 0
                }
              ]
            }
          }
        ],
        formConfigffA1: [
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
                  value: "seriousillness"
                },
                {
                  label: "消费型医疗险",
                  value: "consumermedical"
                },
                {
                  label: "意外险",
                  value: "accident"
                },
                {
                  label: "寿险",
                  value: "life"
                },
                {
                  label: "养老险",
                  value: "endowment"
                }
              ]
            }
          }
        ],
        formConfigffA2: [
          {
            type: "input",
            label: "",
            disabled: true,
            value: "seriousillness",
            tip: "保额（万）[保障上限]"
          },
          {
            type: "input",
            label: "",
            disabled: true,
            value: "consumermedical",
            tip: "保额（万）[保障上限]"
          },
          {
            type: "input",
            label: "",
            disabled: true,
            value: "accident",
            tip: "保额（万）[保障上限]"
          },
          {
            type: "input",
            label: "",
            disabled: true,
            value: "life",
            tip: "保额（万）[保障上限]"
          },
          {
            type: "input",
            label: "",
            disabled: true,
            value: "endowment",
            tip: "保额（万）[保障上限]"
          }
        ],
        formConfigffB: [
          {
            type: "radio",
            label: "有无慢性病或家族遗传病史",
            value: "chronicdisease",
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
                  value: 0
                }
              ]
            }
          },
          {
            type: "radio",
            label: "体检结果是否有异常",
            value: "physicalexam",
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
                  value: 0
                }
              ]
            }
          }
        ],
        formDataff: {
          nickname: "",
          gender: null,
          age: null,
          socialsecurity: null,
          comminsurance: null,
          physicalexam: null,
          chronicdisease: null,
          bsdetail: {
            seriousillness: "",
            consumermedical: "",
            accident: "",
            life: "",
            endowment: ""
          },//重疾病险
          insuranceType: [],
          otherInMoneyList: {
            seriousillness: "",
            consumermedical: "",
            accident: "",
            life: "",
            endowment: ""
          } //保险的额度
        },

        ////大孩项
        formConfigffChild: [
          {
            type: "input",
            label: "大孩昵称",
            value: "nickname",
            tip: "请输入大孩昵称"
          },
          {
            type: "radio",
            label: "性别",
            value: "gender",
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
            value: "oldsmallinsure",
            option: {
              disabled: false,
              data: [
                {
                  label: "有",
                  value: 1
                },
                {
                  label: "无",
                  value: 0
                }
              ]
            }
          },
          {
            type: "radio",
            label: "有无买过商业保险",
            value: "comminsurance",
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
                  value: 0
                }
              ]
            }
          }

        ],
        formConfigffChildA1: [
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
                  value: "seriousillness"
                },
                {
                  label: "消费型医疗险",
                  value: "consumermedical"
                },
                {
                  label: "意外险",
                  value: "accident"
                },
                {
                  label: "寿险",
                  value: "life"
                },
                {
                  label: "养老险",
                  value: "endowment"
                }
              ]
            }
          }
        ],
        formConfigffChildA2: [
          {
            type: "input",
            label: "",
            disabled: true,
            value: "seriousillness",
            tip: "保额（万）[保障上限]"
          },
          {
            type: "input",
            label: "",
            disabled: true,
            value: "consumermedical",
            tip: "保额（万）[保障上限]"
          },
          {
            type: "input",
            label: "",
            disabled: true,
            value: "accident",
            tip: "保额（万）[保障上限]"
          },
          {
            type: "input",
            label: "",
            disabled: true,
            value: "life",
            tip: "保额（万）[保障上限]"
          },
          {
            type: "input",
            label: "",
            disabled: true,
            value: "endowment",
            tip: "保额（万）[保障上限]"
          }
        ],
        formConfigffChildB: [
          {
            type: "radio",
            label: "有无慢性病或家族遗传病史",
            value: "chronicdisease",
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
                  value: 0
                }
              ]
            }
          },
          {
            type: "radio",
            label: "体检结果是否有异常",
            value: "physicalexam",
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
                  value: 0
                }
              ]
            }
          }
        ],
        formDataffChild: {
          nickname: "",
          gender: null,
          age: null,
          socialsecurity: null,
          comminsurance: null,
          oldsmallinsure: null,
          physicalexam: null,
          chronicdisease: null,
          bsdetail: {
            seriousillness: "",
            consumermedical: "",
            accident: "",
            life: "",
            endowment: ""
          },//重疾病险
          insuranceType: [],
          otherInMoneyList: {
            seriousillness: "",
            consumermedical: "",
            accident: "",
            life: "",
            endowment: ""
          } //保险的额度
        },

        ////二孩项
        formConfigScChild: [
          {
            type: "input",
            label: "二孩昵称",
            value: "nickname",
            tip: "请输入大孩昵称"
          },
          {
            type: "radio",
            label: "性别",
            value: "gender",
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
            label: "二孩年龄",
            value: "age",
            tip: "未满1周岁填0岁"
          }
        ],
        formConfigScChildA: [
          {
            type: "radio",
            label: "有无一老一小险",
            value: "oldsmallinsure",
            option: {
              disabled: false,
              data: [
                {
                  label: "有",
                  value: 1
                },
                {
                  label: "无",
                  value: 0
                }
              ]
            }
          },
          {
            type: "radio",
            label: "有无买过商业保险",
            value: "comminsurance",
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
                  value: 0
                }
              ]
            }
          }
        ],
        formConfigScChildA1: [
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
                  value: "seriousillness"
                },
                {
                  label: "消费型医疗险",
                  value: "consumermedical"
                },
                {
                  label: "意外险",
                  value: "accident"
                },
                {
                  label: "寿险",
                  value: "life"
                },
                {
                  label: "养老险",
                  value: "endowment"
                }
              ]
            }
          }
        ],
        formConfigScChildA2: [
          {
            type: "input",
            label: "",
            disabled: true,
            value: "seriousillness",
            tip: "保额（万）[保障上限]"
          },
          {
            type: "input",
            label: "",
            disabled: true,
            value: "consumermedical",
            tip: "保额（万）[保障上限]"
          },
          {
            type: "input",
            label: "",
            disabled: true,
            value: "accident",
            tip: "保额（万）[保障上限]"
          },
          {
            type: "input",
            label: "",
            disabled: true,
            value: "life",
            tip: "保额（万）[保障上限]"
          },
          {
            type: "input",
            label: "",
            disabled: true,
            value: "endowment",
            tip: "保额（万）[保障上限]"
          }
        ],
        formConfigScChildB: [
          {
            type: "radio",
            label: "有无慢性病或家族遗传病史",
            value: "chronicdisease",
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
                  value: 0
                }
              ]
            }
          },
          {
            type: "radio",
            label: "体检结果是否有异常",
            value: "physicalexam",
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
                  value: 0
                }
              ]
            }
          }
        ],
        formDataScChild: {
          nickname: "",
          gender: null,
          age: null,
          socialsecurity: null,
          comminsurance: null,
          oldsmallinsure: null,
          physicalexam: null,
          chronicdisease: null,
          bsdetail: {
            seriousillness: "",
            consumermedical: "",
            accident: "",
            life: "",
            endowment: ""
          },//重疾病险
          insuranceType: [],
          otherInMoneyList: {
            seriousillness: "",
            consumermedical: "",
            accident: "",
            life: "",
            endowment: ""
          } //保险的额度
        },

        ////家庭综合项
        formConfigfamily: [
          {
            type: "input",
            label: "家庭税后收入约（万/年）",
            value: "familyincome",
            tip: "请输入家庭税后收入"
          },
          {
            type: "select",
            label: "家庭收入稳定性",
            value: "householdincomestab",
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
            value: "housingex",
            tip: "请输入"
          },
          {
            type: "input",
            label: "其他贷款偿付支出约（万/年）",
            value: "otherloan",
            tip: "请输入"
          },
          {
            type: "input",
            label: "孩子教育投入支出约（万/年）",
            value: "childreneducation",
            tip: "请输入"
          },
          {
            type: "input",
            label: "家庭理财投入支出约（万/年）",
            value: "householdfinancial",
            tip: "请输入"
          }
        ],

        formDatafamily: {
          householdfinancial: null,
          childreneducation: null,
          otherloan: null,
          housingex: null,
          householdincomestab: null,
          familyincome: null
        },
        isSubmit: false,
        rules1: {
          age: {
            required: true,
            trigger: "blur",
            message: '请输入年龄',
          },
          socialsecurity: {
            required: true,
            trigger: "blur",
            message:'请选择有无社保/新农村医疗'
          },
          nickname: [
            { trigger: "blur",message: '请选择填写昵称',required: true },
            { min: 1, max: 10, message: "长度在 1 到 10 个字符", trigger: "blur" }
          ],
          gender:{
            required: true,
            trigger: "blur",
            message: '请选择性别',
          },
          comminsurance:{
            required: true,
            trigger: "blur",
            message: '请选择有无买过商业保险',
          },
          chronicdisease:{
            required: true,
            trigger: "blur",
            message: '请选择有无慢性病或家族遗传病史',
          },
          physicalexam:{
            required: true,
            trigger: "blur",
            message: '请选择体检结果是否有异常',
          }
        },
        rules2: {
          age: {
            required: true,
            trigger: "blur",
            message: '请输入年龄',
          },
          socialsecurity: {
            required: true,
            trigger: "blur",
            message:'请选择有无社保/新农村医疗'
          },
          nickname: [
            { trigger: "blur",message: '请选择填写昵称',required: true },
            { min: 1, max: 10, message: "长度在 1 到 10 个字符", trigger: "blur" }
          ],
          gender:{
            required: true,
            trigger: "blur",
            message: '请选择性别',
          },
          comminsurance:{
            required: true,
            trigger: "blur",
            message: '请选择有无买过商业保险',
          },
          chronicdisease:{
            required: true,
            trigger: "blur",
            message: '请选择有无慢性病或家族遗传病史',
          },
          physicalexam:{
            required: true,
            trigger: "blur",
            message: '请选择体检结果是否有异常',
          }
        },
        rules3: {
          age: {
            required: true,
            trigger: "blur",
            message: '请输入年龄',
          },
          nickname: [
            { trigger: "blur",message: '请选择填写昵称',required: true },
            { min: 1, max: 10, message: "长度在 1 到 10 个字符", trigger: "blur" }
          ],
          gender:{
            required: true,
            trigger: "blur",
            message: '请选择性别',
          },

          oldsmallinsure:{
            required: true,
            trigger: "blur",
            message: '请选择有无一老一小险',
          },

          comminsurance:{
            required: true,
            trigger: "blur",
            message: '请选择有无买过商业保险',
          },
          chronicdisease:{
            required: true,
            trigger: "blur",
            message: '请选择有无慢性病或家族遗传病史',
          },
          physicalexam:{
            required: true,
            trigger: "blur",
            message: '请选择体检结果是否有异常',
          }
        },
        rules4: {
          age: {
            required: true,
            trigger: "blur",
            message: '请输入年龄',
          },
          nickname: [
            { trigger: "blur",message: '请选择填写昵称',required: true },
            { min: 1, max: 10, message: "长度在 1 到 10 个字符", trigger: "blur" }
          ],
          gender:{
            required: true,
            trigger: "blur",
            message: '请选择性别',
          },

          oldsmallinsure:{
            required: true,
            trigger: "blur",
            message: '请选择有无一老一小险',
          },

          comminsurance:{
            required: true,
            trigger: "blur",
            message: '请选择有无买过商业保险',
          },
          chronicdisease:{
            required: true,
            trigger: "blur",
            message: '请选择有无慢性病或家族遗传病史',
          },
          physicalexam:{
            required: true,
            trigger: "blur",
            message: '请选择体检结果是否有异常',
          }
        },
        rules5: {

          householdfinancial: {
            validator: CheckInt,
            trigger: "blur",
            required: true,
            message: '请输入家庭理财投入支出约',
          },
          childreneducation: {
            validator: CheckInt,
            required: true,
            trigger: "blur",
            message: '请输入孩子教育投入支出',
          },
          otherloan: {
            validator: CheckInt,
            trigger: "blur",
            required: true,
            message: '请输入其他贷款偿付支出',
          },
          housingex: {
            validator: CheckInt,
            required: true,
            trigger: "blur",
            message: '请输入房贷或房租支出约'
          },
          familyincome: {
            validator: CheckInt,
            trigger: "blur",
            required: true,
            message:"家庭税后收入"
          },
          householdincomestab:{
            required: true,
            trigger: "blur",
            message: '请选择家庭收入稳定性',
          }
        }
      };
    },
    mounted() {
      //debugger
      const value = this.$store.state.hasChildNum;
      if (value == 1) {
        this.isFirst = true;
      }
      if (value == 2) {
        this.hasSecond = true;
        this.isFirst = true;
      }
    },
    watch: {
      "formData.comminsurance"() {
        this.show = this.formData.comminsurance ? true : false;
        this.resiteBsdetail(this.formData);
      },
      "formData.insuranceType"() {
        this.changeSelCheck(this.formData, this.formConfigA2);
      },
      "formDataff.comminsurance"() {
        this.showff = this.formDataff.comminsurance ? true : false;
        this.resiteBsdetail(this.formDataff);
      },
      "formDataff.insuranceType"() {
        this.changeSelCheck(this.formDataff, this.formConfigffA2);
      },
      "formDataffChild.comminsurance"() {
        this.showffChild = this.formDataffChild.comminsurance ? true : false;
        this.resiteBsdetail(this.formDataffChild);
      },
      "formDataffChild.insuranceType"() {
        this.changeSelCheck(this.formDataffChild, this.formConfigffChildA2);
      },
      "formDataScChild.comminsurance"() {
        this.showScChild = this.formDataScChild.comminsurance ? true : false;
        ;
        this.resiteBsdetail(this.formDataScChild);
      },
      "formDataScChild.insuranceType"() {
        this.changeSelCheck(this.formDataScChild, this.formConfigScChildA2);
      }
    },
    methods: {
      changeSelCheck(formName, objDis) {
        let allValue = Object.values(formName.insuranceType);
        objDis.map(item => {
          item.disabled = true;
        });

        objDis.map(item => {
          allValue.forEach(im => {
            if (item.value == im) {
              item.disabled = false;
            }
          });
        });
      },
      getTel(tel) {
        this.formData.invitenumber = tel;
        this.isSubmit = false;
      },

      dealPerson(formData, str) {
        let sltKey = Object.keys(formData.otherInMoneyList);
        sltKey.forEach(item => {
          if (formData[item]) {
            formData.bsdetail[item] = formData[item];
            delete formData[item];
          }
        });
        let newForm = JSON.parse(JSON.stringify(formData));
        delete newForm.insuranceType;
        delete newForm.otherInMoneyList;

        let dataParam = {}; //重置新的提交字段名
        for (let i in newForm) {
          // if (i == "bsdetail") {
          //   dataParam[`${i}`] = newForm[i];
          //   continue;
          // }
          dataParam[`${str}.${i}`] = newForm[i];
        }
        return dataParam;
      },
      dealFamily(formData, str) {
        let dataParam = {}; //重置新的提交字段名
        let newForm = JSON.parse(JSON.stringify(formData));
        for (let i in newForm) {
          dataParam[`${str}.${i}`] = newForm[i];
        }
        return dataParam;
      },
      resiteFormBsdetail(formName){
        formName.insuranceType.forEach(item=>{
          formName.bsdetail[item]=formName.bsdetail[item]!=''?formName.bsdetail[item]:0;
        })
      },
      submit() {
        let that = this;
        let formObj = [];
        for (let i = 1; i < 12; i++) {
          formObj.push(this.$refs[`form${i}`]);
        }
        if(this.isFirst){
          for (let i = 13; i <= 17; i++) {
            formObj.push(this.$refs[`form${i}`]);
          }
        }
        if(this.hasSecond){
          for (let i = 18; i <= 22; i++) {
            formObj.push(this.$refs[`form${i}`]);
          }
        }
        formObj.push(this.$refs[`form12`]); //家庭综合项
        let isSuccess = this.validateForm(formObj);

        if (!isSuccess) {
          this.$message("11 请正确填写表单");
          return;
        }

        this.resiteFormBsdetail(this.formData);
        this.resiteFormBsdetail(this.formDataff);
        this.resiteFormBsdetail(this.formDataffChild);
        this.resiteFormBsdetail(this.formDataScChild);



        let formData = { ...this.dealFamily(this.formDatafamily, "family"), ...this.dealPerson(this.formData, "my"), ...this.dealPerson(this.formDataff, "spouse"), ...this.dealPerson(this.formDataffChild, "baby"), ...this.dealPerson(this.formDataScChild, "secbaby") };



        this.$axios.post("/familyinfo", this.$qs.stringify(formData)).then(
          data => {
            that.$router.push({
              path: "/confirmPg"
            });
          },
          err => {
            console.log(err);
          }
        );
      }
    }
  };
</script>
