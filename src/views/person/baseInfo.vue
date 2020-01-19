<template>
  <div>
    <div class="bgf p-10 ">
      <el-divider>
        <el-link type="info" plain size="mini">个人基本信息</el-link>
      </el-divider>
      <el-form
        ref="form"
        :model="form"
        label-position="left"
        label-width="100px"
        size="mini"
      >
        <el-form-item label="昵称">
          <el-input v-model="form.name" placeholder="请输入昵称"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group
            v-model="form.sex"
            size="small"
            placeholder="请选择性别"
          >
            <el-radio :label="1" class="w-30">男</el-radio>
            <el-radio :label="2" class="w-30">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="职业发展预期">
          <el-select v-model="form.jobs" placeholder="请选择职业发展预期">
            <el-option
              v-for="(item, index) in jobsPlan"
              :key="index"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="税后收入">
          <el-input v-model="form.salary"></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="bgf p-10 m-t-10 no-bottom">
      <el-form
        :model="form"
        label-position="left"
        label-width="160px"
        size="mini"
      >
        <el-form-item label="有无社保/新农村医疗">
          <el-radio-group v-model="form.medicalSafe" size="small">
            <el-radio :label="1" class="w-30">有</el-radio>
            <el-radio :label="2" class="w-30">无</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>

    <div class="bgf p-10 m-t-10 no-bottom">
      <el-form
        :model="form"
        label-position="left"
        label-width="160px"
        size="mini"
      >
        <el-form-item label="房贷或房租支出">
          <el-radio-group v-model="form.payHouse" size="small">
            <el-radio :label="1" class="w-30">有</el-radio>
            <el-radio :label="2" class="w-30">无</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>

    <div class="bgf p-10 m-t-10 no-bottom">
      <el-form
        :model="form"
        label-position="left"
        label-width="160px"
        size="mini"
      >
        <el-form-item label="其他贷款偿付支出">
          <el-radio-group v-model="form.otherPay" size="small">
            <el-radio :label="1" class="w-30">有</el-radio>
            <el-radio :label="2" class="w-30">无</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>

    <div class="bgf p-10 m-t-10 no-bottom">
      <el-form
        :model="form"
        label-position="left"
        label-width="160px"
        size="mini"
      >
        <el-form-item label="有无买过商业保险">
          <el-radio-group v-model="form.otherInsurance" size="small">
            <el-radio :label="1" class="w-30">有</el-radio>
            <el-radio :label="2" class="w-30">无</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div class="m-l-50 m-t-10">
        <el-checkbox-group v-model="form.insuranceType">
          <el-checkbox class="w-100-c" :label="1" name="type"
            >重疾险
          </el-checkbox>
          <el-checkbox class="w-100-c" :label="2" name="type"
            >消费型医疗险
          </el-checkbox>
          <el-checkbox class="w-100-c" :label="3" name="type"
            >意外险
          </el-checkbox>
          <el-checkbox class="w-100-c" :label="4" name="type"
            >寿险
          </el-checkbox>
          <el-checkbox class="w-100-c" :label="5" name="type"
            >养老险
          </el-checkbox>
        </el-checkbox-group>
      </div>
    </div>

    <div class="bgf p-10 m-t-10 no-bottom">
      <el-form
        :model="form"
        label-position="left"
        label-width="220px"
        size="mini"
      >
        <el-form-item label="有无慢性病或家族遗传病史">
          <el-radio-group v-model="form.othermedical" size="small">
            <el-radio :label="1" class="w-30">有</el-radio>
            <el-radio :label="2" class="w-30">无</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div class="f-12">（评估未来健康风险值）</div>
    </div>

    <div class="bgf p-10 m-t-10 no-bottom">
      <el-form
        :model="form"
        label-position="left"
        label-width="220px"
        size="mini"
      >
        <el-form-item label="体检结果是否有异常(最近一次)">
          <el-radio-group v-model="form.healthCheck" size="small">
            <el-radio :label="1" class="w-30">有</el-radio>
            <el-radio :label="2" class="w-30">无</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </div>

    <div class="bgf p-10 m-t-10 no-bottom">
      <el-link type="success">身份验证【本次内测仅针对受邀用户开放】</el-link>

      <div class="m-t-10 row-align-left">
        <el-input
          size="mini"
          v-model="tel"
          placeholder="请输入受邀手机号"
        ></el-input>
        <el-button @click="checkTel" type="primary" size="mini"
          >验证
        </el-button>
      </div>
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
export default {
  name: "personbaseInfo",
  data: () => {
    return {
      jobsPlan: [
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
      ],
      form: {
        name: "",
        sex: 1,
        age: 1,
        jobs: 1,
        salary: 1000, //工资
        medicalSafe: 1, //医保
        payHouse: 1, //买房支出
        otherPay: 1, //其他支出
        otherInsurance: 2, //有无买其他保险
        othermedical: 2, //有无其他疾病
        healthCheck: 1, //健康检查
        insuranceType: [] //商业保险类型
      },
      tel: null //受邀手机号
    };
  },
  methods: {
    checkTel() {
      if (!this.tel) {
        this.$message("请输入受邀手机号！");
      } else {
        console.log("dd");
      }
    },
    submit() {
      this.$router.push({
        path: "/person/contrastList"
      });
    }
  }
};
</script>
