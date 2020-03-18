<template>
  <div>
    <div class="bgf p-10 ">
      <el-divider>
        <el-link type="info" plain size="mini">孩子基本信息</el-link>
      </el-divider>
      <base-baseform
              ref="form1"
              :formConfig="formConfig"
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
        >下一步</el-button>
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
        isSubmit:true,
        rules: {
          age: {
            required: true,
            validator: CheckInt,
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
          familyincome:{
            validator: CheckMoney,
            required: true,
            trigger: "blur",
            message: '请输入家庭税后收入',
          },
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
    beforeRouteEnter(to,form,next){
      next(vm=>{
        vm.$axios.post("/page_visit", {
          "confirm_from":"babyedu_visit"
        });
      });
    },
    beforeRouteLeave(to,form,next){
      this.$axios.post("/page_back", {
        "confirm_from":"babyedu_back"
      })
      next();
    },
    mounted(){
      this.getTel();
    },
    methods: {
      getTel() {
        this.form.invitenumber = this.$store.state.userTel;
        this.isSubmit=false;
      },
      submit() {

        let formObj=[];
        formObj.push(this.$refs[`form1`]);
        let isSuccess = this.validateForm(formObj);
        if(this.form.age==null || this.form.age==''){
          this.$message("请填写年龄");
          return;
        }
        if (!isSuccess || this.form.age==null) {
          this.$message("请正确填写表单");
          return;
        }

        let that = this;
        let newForm = JSON.parse(JSON.stringify(this.form));

        let dataParam = {}; //重置新的提交字段名
        for (let i in newForm) {
          dataParam[`${i}`] = newForm[i];
        }

        this.$store.dispatch('resiteFamilyincome',this.form.familyincome)

        this.$axios.post("/childrenedu", dataParam).then(
          data => {
            console.log(data);
            that.$router.push({
              path: "/children/edu/eduContrastList",
              query: {
                age: that.form.age,
                sex: that.form.gender
              }
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
