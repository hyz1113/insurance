<template>
  <div>
    <div class="table-block m-t-10 row-align-center" v-show="ishide">
      <el-button
              type="text"
              round
              size="mini"
              class="row-align-center"
              @click="$router.push({ path: '/'})"
      >返回首页
      </el-button>
    </div>
    <div class="copyright m-t-10">
      <b class="m-r-10">安心选·保险规划师工具</b><br/>
      <span>v2.1 公开内测版</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "pagefooter",
    data() {
      return {
        ishide: false
      };
    },
    watch: {
      "$route.path": function(to, form) {
        if (to === "/") {
          this.ishide = false;
        } else {
          this.ishide = true;
        }
      }
    }
  };
</script>
