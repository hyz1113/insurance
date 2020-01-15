<template>
  <div>
    <div class="banner-index">
      <img
              src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1578932775976&di=a29f5f057ea87de4f08db2b8c4b2512d&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D2506197831%2C1636712722%26fm%3D214%26gp%3D0.jpg"
      />
    </div>
    <div class="bgf p-tag">
      <p>
        为了给你提供专业且适合的个人/家庭保险解决方案，需要对您的实际情况和具体需求进行了解，问卷填答时10分钟左右，我们回做好信息保密，请您如实填写......
      </p>
      <router-link to="/about" class="align-right">
        <el-button type="text" plain size="mini">案例展示—点击查看</el-button>
      </router-link>
    </div>
    <div class="m-t-10 bgf">
      <div class="bgf p-10">
        <el-divider>
          <el-link type="info" plain size="mini">选择为谁规划</el-link>
        </el-divider>
        <div class="form-home">
          <el-form ref="form" :model="form" label-width="0px" size="mini">
            <el-form-item label="" prop="resource">
              <el-radio-group v-model="form.resource">
                <el-radio :label="1">以孩子的健康为主做长期规划</el-radio>
                <el-radio :label="2">以孩子教育金为主做长期规划</el-radio>
              </el-radio-group>
            </el-form-item>
           <el-form-item>
              <div class="text-center f-12 g-c">更多规划类型算法陆续开发中</div>
            </el-form-item>
            <el-form-item class="text-center">
              <el-button type="success" plain @click="onSubmit" size="mini"
              >下一步
              </el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        form: {
          resource: "",
          type: []
        }
      };
    },
    watch: {
      "form.resource"() {
        if (this.form.resource != 3) {
          this.form.type = [];
        }
      }
    },
    methods: {
      onSubmit() {
        let pathL = "/children";
        switch (this.form.resource) {
          case 1: {
            pathL = `${pathL}/eduInfo`;
          }
            break;
          case 2: {
            pathL = `${pathL}/healty/healtyInfo`;
          }
            break;

        }
        this.$router.push({
          path: pathL
        });
      }
    }
  };
</script>
