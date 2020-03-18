<template>
  <div>
    <div class="bgf p-10 ">
      <el-divider>
        <el-link type="info" plain size="mini">个人基本信息</el-link>
      </el-divider>
      <base-baseform
        ref="form1"
        :formConfig="formConfig"
        :formData="form"
        :rules="rules"
        labelWidth="130px"
      ></base-baseform>
    </div>
    <div class="bgf p-10 m-t-10 no-bottom">
      <base-baseform
        ref="form2"
        :formConfig="formConfigA"
        :formData="form"
        :rules="rules"
        labelWidth="190px"
      ></base-baseform>
    </div>

    <div class="bgf p-10 m-t-10 no-bottom">
      <base-baseform
        ref="form3"
        :formConfig="formConfigB"
        :formData="form"
        :rules="rules"
        labelWidth="190px"
      ></base-baseform>
    </div>

    <div class="bgf p-10 m-t-10 no-bottom">
      <base-baseform
        ref="form4"
        :formConfig="formConfigC"
        :formData="form"
        :rules="rules"
        labelWidth="190px"
      ></base-baseform>
    </div>

    <div class="bgf p-10 m-t-10 no-bottom">
      <base-baseform
        ref="form5"
        :formConfig="formConfigD"
        :formData="form"
        :rules="rules"
        labelWidth="180px"
      ></base-baseform>
    </div>

    <div class="clear ovh bgf" v-show="show">
      <div class="pull-left list-check-height" style="width: 140px;">
        <base-baseform
          ref="form6"
          :formConfig="formConfigD1"
          :formData="form"
          :rules="rules"
          labelWidth="15px"
        ></base-baseform>
      </div>
      <div class="pull-left">
        <base-baseform
          ref="form7"
          :formConfig="formConfigD2"
          :formData="form"
          :rules="rules"
          labelWidth="15px"
        ></base-baseform>
      </div>
    </div>

    <div class="bgf p-10 m-t-10 no-bottom">
      <base-baseform
        ref="form8"
        :formConfig="formConfigE"
        :formData="form"
        :rules="rules"
        labelWidth="180px"
      ></base-baseform>
    </div>

    <div class="bgf p-10 m-t-10 no-bottom">
      <base-baseform
        ref="form9"
        :formConfig="formConfigF"
        :formData="form"
        :rules="rules"
        labelWidth="180px"
      ></base-baseform>
    </div>

    <div class="bgf p-10 m-t-10 no-bottom">

      <div class="m-t-10 row-align-center">
        <el-button
          :disabled="isSubmit"
          class="row-align-center"
          size="mini"
          type="success"
          @click="submit"
          >下一步
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
        本工具目前为公开内测版本,允许安心选跟踪联系表单满意度
      </div>
    </div>
  </div>
</template>

<script>
const CheckInt = (rule, value, callback) => {
  //debugger;
  value = Number(value);
  //debugger;
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
          hide: false,
          value: "nickname",
          tip: "请输入昵称"
        },
        {
          type: "radio",
          label: "性别",
          value: "gender",
          tip: "请选择性别",
          hide: false,
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
          hide: false,
          value: "age",
          tip: "请输入年龄"
        },
        {
          type: "select",
          label: "职业发展预期",
          value: "jobfeature",
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
          value: "atincome",
          hide: false,
          tip: "请输入税后收入"
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
        }
      ],
      formConfigB: [
        {
          type: "input",
          label: "房贷或房租支出（万/年）",
          value: "housingex",
          tip: "请输入"
        }
      ],
      formConfigC: [
        {
          type: "input",
          label: "其他贷款偿付支出（万/年）",
          value: "otherloan",
          tip: "其他贷款偿付支出"
        }
      ],
      formConfigD: [
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
      formConfigD2: [
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
      formConfigE: [
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
      formConfigF: [
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
      form: {
        nickname: "", //本人昵称
        gender: null, // 本人性别
        age: null, //
        jobfeature: null, //职业发展规划
        atincome: null,
        socialsecurity: null,
        housingex: null,
        otherloan: null,
        comminsurance: null,
        chronicdisease: null,
        physicalexam: null,
        bsdetail: {
          seriousillness: "",
          consumermedical: "",
          accident: "",
          life: "",
          endowment: ""
        }, //重疾病险
        invitenumber: null,
        insuranceType: [],
        otherInMoneyList: {
          seriousillness: "",
          consumermedical: "",
          accident: "",
          life: "",
          endowment: ""
        } //保险的额度
      },
      rules: {
        age: {
          required: true,
          validator: CheckInt,
          trigger: "blur"
        },
        nickname: [
          { trigger: "blur", message: "请选择填写昵称", required: true },
          { min: 1, max: 10, message: "长度在 1 到 10 个字符", trigger: "blur" }
        ],
        gender: {
          required: true,
          trigger: "blur",
          message: "请选择性别"
        },
        jobfeature: {
          required: true,
          trigger: "blur",
          message: "请选择职业发展规划"
        },
        atincome: {
          required: true,
          trigger: "blur",
          message: "请选择税后收入"
        },
        socialsecurity: {
          required: true,
          trigger: "blur",
          message: "请选择有无社保/新农村医疗"
        },
        housingex: {
          required: true,
          trigger: "blur",
          message: "请输入房贷或房租支出"
        },
        otherloan: {
          required: true,
          trigger: "blur",
          message: "请选择其他贷款偿付支出"
        },
        comminsurance: {
          required: true,
          trigger: "blur",
          message: "请选择有无买过商业保险"
        },
        chronicdisease: {
          required: true,
          trigger: "blur",
          message: "请选择有无慢性病或遗传病史"
        },
        physicalexam: {
          required: true,
          trigger: "blur",
          message: "请选择体检结果是否有异常"
        }
      },
      show: false,
      isSubmit: true
    };
  },
  watch: {
    "form.comminsurance"() {
      this.show = this.form.comminsurance ? true : false;
      this.resiteBsdetail(this.form);
    },
    "form.insuranceType"() {
      let allValue = Object.values(this.form.insuranceType);
      this.formConfigD2.map(item => {
        item.disabled = true;
      });

      this.formConfigD2.map(item => {
        allValue.forEach(im => {
          if (item.value == im) {
            item.disabled = false;
          }
        });
      });
    }
  },
  beforeRouteEnter(to,form,next){
    next(vm=>{
      vm.$axios.post("/page_visit", {
        "confirm_from":"person_visit"
      });
    });
  },
  beforeRouteLeave(to,form,next){
    this.$axios.post("/page_back", {
      "confirm_from":"person_back"
    })
    next();
  },
  mounted(){
    this.getTel();
  },
  methods: {
    getTel() {
      this.form.invitenumber = this.$store.state.userTel;
      this.isSubmit = false;
    },

    submit() {
      let that = this;
      let formObj = [];
      for (let i = 1; i <= 9; i++) {
        formObj.push(this.$refs[`form${i}`]);
      }
      if (this.form.comminsurance && !this.form.insuranceType.length) {
        this.$message("请选择商业保险中对应险种！");
        return;
      }
      let isSuccess = this.validateForm(formObj);
      if (!isSuccess) {
        this.$message("请正确填写表单");
        return;
      }
      let sltKey = Object.keys(this.form.otherInMoneyList);
      sltKey.forEach(item => {
        if (that.form[item]) {
          that.form.bsdetail[item] = that.form[item];
          delete that.form[item];
        }
      });

      this.form.insuranceType.forEach(item => {
        that.form.bsdetail[item] =
          that.form.bsdetail[item] != "" ? that.form.bsdetail[item] : 0;
      });

      let newForm = JSON.parse(JSON.stringify(this.form));
      delete newForm.insuranceType;
      delete newForm.otherInMoneyList;

      let dataParam = {}; //重置新的提交字段名
      for (let i in newForm) {
        dataParam[`${i}`] = newForm[i];
      }
      this.$store.dispatch('resiteInsurType',this.form.jobfeature);
      this.$store.dispatch('resiteShowFontFg',this.form.socialsecurity);

      this.$axios.post("/personalinfo", dataParam).then(
        data => {
          that.$router.push({
            path: "/person/contrastList",
            query: {
              age: that.form.age,
              income: that.form.atincome,
              sex: that.form.gender
            }
          });
          that.$store.dispatch("resiteFormData", data);
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>
