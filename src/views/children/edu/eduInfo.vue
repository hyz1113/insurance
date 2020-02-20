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
  const CheckMoney = (rule, value, callback) => {
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
  const CheckInt = (rule, value, callback) => {
    //debugger;
    value = Number(value);
    if (!(value >=0 && value < 18)) {
      callback(new Error("年龄需大于等于0岁小于18岁!"));
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
          },
          familyIncome: {
            validator: CheckMoney,
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
            type: "input",
            label: "家庭税后收入约（万/年）",
            value: "familyincome",
            tip: "请输入家庭税后收入"
          }
        ],

        form: {
          nickname: null,
          gender: null,
          familyincome: null,
          invitenumber: null,
          age: null
        }
      };
    },
    watch: {
      "form.otherInsurance"() {
        this.formConfigD[1].hide = !this.formConfigD[1].hide;
      }
    },
    methods: {
      getTel(tel) {
        this.form.invitenumber = tel;
      },
      submit() {
        let that = this;
        let newForm = JSON.parse(JSON.stringify(this.form));

        let dataParam = {}; //重置新的提交字段名
        for (let i in newForm) {
          // if (i == "bsdetail") {
          //   dataParam[`${i}`] = newForm[i];
          //   continue;
          // }
          dataParam[`baby.${i}`] = newForm[i];
        }
        this.$axios.post("/childedu", this.$qs.stringify(dataParam)).then(
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
