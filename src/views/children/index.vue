<template>
  <div>
    <div class="banner-index">
      <img src="../../assets/banner.jpg"/>
    </div>
    <div class="bgf p-tag">
      <p>
        安心选：收集上千产品信息，人工智能云计算量体裁衣，给一份适合你的保险规划。
      </p>
      <p>
        需要对您的实际情况进行了解，问卷填答耗时3分钟左右，我们会做好信息保密.
      </p>
      <!--<router-link to="/" class="align-right">-->
      <!--<el-button type="text" plain size="mini">案例展示—点击查看</el-button>-->
      <!--</router-link>-->
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
              </el-button>
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
        if (this.form.resource) {
          switch (this.form.resource) {
            case 2: {
              pathL = `${pathL}/edu/eduInfo`;
            }
              break;
            case 1: {
              pathL = `${pathL}/healty/healtyInfo`;
            }
              break;
          }
        } else {
          this.$message("请选择规划项！");
          return;
        }

        this.$router.push({
          path: pathL
        });
      }
    }
  };
</script>
