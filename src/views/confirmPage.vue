<template>
  <div>
    <div class="bgf p-10 ">
      <el-divider>
        <el-link type="info" plain size="mini">安心选</el-link>
      </el-divider>
      <div class="bgf m-t-10 no-bottom text-center">
        我们需要的不是一张保单，而是一份保险规划！
      </div>

      <div class="bgf p-10 m-t-10 no-bottom">
        <p class="text-center">问卷信息已上传服务端</p>
        <p class="text-center">保险规划计算中</p>
        <div class="m-t-10 article-block">
           <p>
             系统将匹配生成您的3套保险规划方案，稍晚将由工作人员电话联系您，将规划方案的电子版提供给您。并提供方案的详细解释回访服务。
           </p>
           <p> 感谢您对安心选保险规划师的试用，您的体验反馈将是我们软件优化的重要依据。请将体验中的优点及不足之处告知回访工作人员，再次感谢！
           </p>
        </div>
      </div>
      <div class="m-t-10 row-align-center">
        <el-button
                class="row-align-center"
                size="mini"
                type="info"
                @click="$router.push({path:'/'})"
        >返回首页
        </el-button>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "confirmPage"
  };
</script>

