<template>
  <div>
    <div class="banner-index">
      <img src="../assets/2.png" />
    </div>
    <div class="bgf p-tag">
      <p>
        为了给你提供专业且适合的个人/家庭保险解决方案，需要对您的实际情况和具体需求进行了解，问卷填答时10分钟左右，我们回做好信息保密，请您如实填写......
      </p>
      <router-link to="/" class="align-right">
        <el-button type="text" plain size="mini">案例展示—点击查看</el-button>
      </router-link>
    </div>
    <div class="m-t-10 bgf">
      <div class="bgf p-10">
        <el-divider>
          <el-link type="info" plain size="mini">选择为谁规划</el-link>
        </el-divider>
        <div class="form-home">
          <el-form ref="form" :model="form" label-width="40px" size="mini">
            <el-form-item label="" prop="resource">
              <el-radio-group v-model="form.resource">
                <el-radio :label="1">为自己做个人规划</el-radio><br/>
                <el-radio :label="2">为孩子做长期规划</el-radio><br/>
                <el-radio :label="3">以家庭为单位做规划</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item class="m-l-50" v-show="form.resource == 3">
              <el-checkbox-group v-model="form.type">
                <el-checkbox :label="1" name="type">夫妻2人家庭</el-checkbox>
                <el-checkbox :label="2" name="type"
                >夫妻3人家庭（1小孩）
                </el-checkbox
                >
                <el-checkbox :label="3" name="type"
                >夫妻4人家庭（2小孩）
                </el-checkbox
                >
              </el-checkbox-group>
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
        let pathL = "/baseInfo";
        if(this.form.resource){switch (this.form.resource) {
          case 1: {
            pathL = `/person${pathL}`;
          }
            break;
          case 2: {
            pathL = `/children/index`;

          }
            break;
          case 3: {
            pathL = `/family${pathL}`;

          }
            break;
        }

        }else {
          this.$message('请选择规划项');
          return;
        }
        this.$router.push({
          path: pathL,
          query: {
            name: this.form.resource,
            value: [...this.form.type]
          }
        });

      }
    }
  };
</script>
