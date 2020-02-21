<template>
  <div>
    <el-link type="success">身份验证【本次内测仅针对受邀用户开放】</el-link>
    <div class="m-t-10 row-align-left">
      <el-input
        size="mini"
        v-model="tel"
        placeholder="请输入受邀手机号"
      ></el-input>
      <el-button @click="checkTel" type="primary" size="mini">验证 </el-button>
    </div>
  </div>
</template>

<script>
import { isValidPhone } from "@/utils/RegExp.js";

export default {
  name: "inputTel",
  data() {
    return {
      tel: ""
    };
  },
  methods: {
    checkTel() {

      if (!this.tel) {
        this.$message("请输入受邀手机号！");
        return;
      } else if (!isValidPhone(this.tel)) {
        this.$message("手机号输入错误");
        this.tel='';
        return;
      }
      this.$message("可以提交您的信息了！");
      this.$emit('getTel',this.tel);
    }
  }
};
</script>
