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
          value: "babynickname",
          tip: "请输入宝贝昵称"
        },
        {
          type: "radio",
          label: "性别",
          value: "babygender",
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
          value: "babyage",
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
        babynickname:null,
        babygender:1,
        familyincome:null,
        invitenumber:null,
        babyage:null,
      },
    };
  },
  watch: {
    "form.otherInsurance"() {
      this.formConfigD[1].hide = !this.formConfigD[1].hide;
    }
  },
  methods: {
    getTel(tel) {
      this.form.invitenumber=tel;
    },
    submit() {
      let that=this;
      this.$axios.post('/api', this.form).then(
        data => {
          debugger
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
