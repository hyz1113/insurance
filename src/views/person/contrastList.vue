<template>
  <div>
    <div class="bgf">
      <el-divider>
        <el-link type="info" plain size="mini">保险产品对比流程</el-link>
      </el-divider>
    </div>
    <div class="bgf p-10">
      <div class="title">1、对比流程采用的保险产品来自以下保险公司</div>
      <div class="p-10">
        <img class="w-100-c" src="../../assets/1.png" />
      </div>
    </div>

    <div class="bgf p-10 m-t-10">
      <div class="title">2、知识普及：</div>
      <div class="article-block">
        在中国开办的保险公司均由中国银保监会托底，中国政府做信任背书，均有偿付能力，不存在破产无法兑现偿付的问题。真实的差别是产品保障范围、价格及附加服务的差异。本规划工具采用的对比产品均为目前市场上销售的合规产品。
      </div>
    </div>

    <div class="bgf p-10 m-t-10">
      <div class="title">3、市场在售重疾类产品对比（价格排名）：</div>
      <div class="table-block row-align-center">
        <el-link class="title text-center row-align-center" type="warning"
          >成人重疾险价格排名</el-link
        >
      </div>
      <div>
        <el-table
          :data="tableData"
          height="250"
          :row-class-name="tableRowClassName"
        >
          <el-table-column prop="name" label="公司"></el-table-column>
          <el-table-column prop="prod" label="产品"></el-table-column>
          <el-table-column prop="person" label="30岁男性（50万）">
          </el-table-column>
        </el-table>
      </div>
    </div>

    <div class="bgf p-10 m-t-10">
      <div class="title">4、市场在售医疗险对比（性价比排名）：</div>
      <div class="table-block row-align-center">
        <el-link class="title text-center row-align-center" type="warning"
          >百万医疗险价格排名</el-link
        >
      </div>
      <div>
        <el-table
          :data="tableData1"
          height="250"
          :row-class-name="tableRowClassName"
        >
          <el-table-column prop="name" label="公司"></el-table-column>
          <el-table-column prop="prod" label="产品"></el-table-column>
          <el-table-column
            prop="person"
            label="30岁男性（50万）"
          ></el-table-column>
          <el-table-column prop="special" label="产品亮点"></el-table-column>
          <el-table-column prop="level" label="等级"> </el-table-column>
        </el-table>
      </div>
    </div>

    <div class="bgf p-10 m-t-10">
      <div class="title">5、市场在售成人重疾险排名（性价比排名）：</div>
      <div class="table-block row-align-center">
        <el-link class="title text-center row-align-center" type="warning"
          >百万医疗险价格排名</el-link
        >
      </div>
      <div>
        <el-table
          :data="tableData1"
          height="250"
          :row-class-name="tableRowClassName"
        >
          <el-table-column prop="prod" label="产品"></el-table-column>
          <el-table-column
            prop="person"
            label="30岁男性（50万）"
          ></el-table-column>
          <el-table-column prop="special" label="产品亮点"></el-table-column>
          <el-table-column prop="level" label="等级"> </el-table-column>
        </el-table>
      </div>
      <div class="m-t-10 row-align-center">
        <el-button
          class="row-align-center"
          size="mini"
          type="success"
          @click="$router.push({ path: '/person/case' })"
          >下一步 规划方案</el-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contrastList",
  data() {
    return {
      tableData: [
        {
          name: "中国人保",
          prod: "好医保·长期医疗（新版）",
          person: "256"
        },
        {
          name: "复星联合健康",
          prod: "超越保长期医疗险计划1（专家版）",
          person: "316"
        },
        {
          name: "微保&泰康人寿",
          prod: "微医保·长期医疗险",
          person: "196"
        },
        {
          name: "众慧相互",
          prod: "慧享e生",
          person: "256"
        }
      ],
      tableData1: [
        {
          name: "中国人保",
          prod: "好医保·长期医疗（新版）",
          person: "256",
          special: "性价比高",
          level: "A"
        },
        {
          name: "中国人保",
          prod: "好医保·长期医疗（新版）",
          person: "256",
          special: "性价比高",
          level: "A"
        },
        {
          name: "中国人保",
          prod: "好医保·长期医疗（新版）",
          person: "256",
          special: "性价比高",
          level: "A"
        },
        {
          name: "中国人保",
          prod: "好医保·长期医疗（新版）",
          person: "256",
          special: "性价比高",
          level: "A"
        }
      ]
    };
  },
  methods: {
    tableRowClassName({ rowIndex }) {
      if (rowIndex % 2 == 0) {
        return "event-row";
      }
      return "";
    }
  }
};
</script>
