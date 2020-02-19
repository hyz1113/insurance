<template>
  <div>
    <div class="bgf p-10 ">
      <el-divider>
        <el-link type="info" plain size="mini">孩子基本信息</el-link>
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
              :formConfig="formConfigD"
              :formData="form"
              :rules="rules"
              labelWidth="130px"
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
      <base-inputTel @getTel="getTel"></base-inputTel>

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
        rules: {
          age: {
            validator: CheckInt,
            trigger: "blur"
          }
        },
        formConfig: [
          {
            type: "input",
            label: "宝贝昵称",
            value: "nickname",
            tip: "请输入宝贝昵称"
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
            tip: "未满1周岁填0岁"
          },
          {
            type: "radio",
            label: "有无一老一小险",
            value: "oldsmallinsure",
            tip: "请选择有无一老一小险",
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
            type: "select",
            label: "家庭收入稳定性",
            value: "householdincomestab",
            tip: "请选择家庭收入稳定性",
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
          nickname: "",
          gender: null,
          age: null,
          oldsmallinsure: null,
          householdincomestab: null,
          comminsurance: null,
          chronicdisease: null,
          physicalexam: null,
          bsdetail: {
            seriousillness: "",
            consumermedical: "",
            accident: "",
            life: "",
            endowment: ""
          },//重疾病险
          invitenumber: null,

          insuranceType: [], //商业保险类型
          otherInMoneyList: {
            seriousillness: "",
            consumermedical: "",
            accident: "",
            life: "",
            endowment: ""
          } //保险的额度
        },
        show: false
      };
    },
    watch: {
      "form.comminsurance"() {
        this.show = !this.show;
        this.resiteBsdetail();
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
    methods: {
      getTel(tel) {
        this.form.invitenumber = tel;
      },

      resiteBsdetail() {
        let keySel = Object.keys(this.form.otherInMoneyList);
        let that = this;
        keySel.forEach(item => {
          if (that.form[item]) {
            that.form[item] = "";
            //delete that.form[item];
          }
        });
        this.form.bsdetail.seriousillness = "";
        this.form.bsdetail.consumermedical = "";
        this.form.bsdetail.accident = "";
        this.form.bsdetail.life = "";
        this.form.bsdetail.endowment = "";
        this.form.insuranceType = [];
      },
      submit() {
        let sltKey = Object.keys(this.form.otherInMoneyList);
        let that = this;
        sltKey.forEach(item => {
          if (that.form[item]) {
            that.form.bsdetail[item] = that.form[item];
            delete that.form[item];
          }
        });
        let newForm = JSON.parse(JSON.stringify(this.form));
        delete newForm.insuranceType;
        delete newForm.otherInMoneyList;

        let dataParam = {}; //重置新的提交字段名
        for (let i in newForm) {
          // if (i == "bsdetail") {
          //   dataParam[`${i}`] = newForm[i];
          //   continue;
          // }
          dataParam[`baby.${i}`] = newForm[i];
        }
        this.$axios.post("/api", dataParam).then(
          data => {
            console.log(data);
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
