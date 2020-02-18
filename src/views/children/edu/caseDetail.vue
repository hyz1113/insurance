<template>
  <div>
    <div class="bgf">
      <el-divider>
        <el-link type="info" plain size="mini">国内教育金方案</el-link>
      </el-divider>
    </div>


    <div class="bgf p-10 ">
      <div class="title">
        <el-link class="f-12-i"
        >预算万元左右  国内上学无忧
        </el-link>
      </div>
      <div class="table-block row-align-center">
        <el-link class="title text-center row-align-center" type="warning"
        >0岁宝宝，共存10万
        </el-link>
      </div>
      <base-table
              :countCulumn="countCulumn"
              :showSummary="true"
              :tableConfig="tableConfig"
              :tableData="tableData"
      ></base-table>

      <div class="table-block m-t-10 row-align-center">
        <el-button
                type="success"
                round
                size="mini"
                class="row-align-center"
                @click="$router.push({ path: '/children/healty/economicCase' })"
        >经济型方案 点击进入
        </el-button>
      </div>
    </div>


    <div class="bgf p-10 m-t-10">
      <div class="title"><b class="b">保护伞所需险种概述：</b></div>
      <div class="article-block">
        <p>
          1、传统教育金：在保险金的返还上，完全是针对教育阶段而定，通常会在孩子进入高中、
          大学两个重要时间节点开始每年返还保险金，到孩子大学毕业或创业阶段再一次性返还一笔费用，保证孩子在每一个重要的教育阶段，都能获得一笔稳定的资金支持。</p>
        <p>
          2、新型教育金：通常具有较强的投资理财功能，属于理财型保险，如万能险、投连险等，不仅可以作为孩子上学期间的教育费用，也可以在结婚时做婚嫁金，年老时转换为养老金。 </p>

      </div>
    </div>


    <div class="bgf p-10 m-t-10">
      <div class="title"><b class="b">少儿保护伞进阶型方案：</b></div>
      <div class="title">
        <el-link type="success" class="f-12-i"
        >预算三千元左右 给娃一辈子的重疾保障
        </el-link>
      </div>
      <base-table
              :tableConfig="tableConfig"
              :tableData="tableData"
      ></base-table>

      <div class="table-block m-t-10 row-align-center">
        <el-button
                type="success"
                round
                size="mini"
                class="row-align-center"
                @click="$router.push({ path: '/children/healty/advancedCase' })"
        >进阶型方案详解 点击进入
        </el-button>
      </div>
    </div>

    <div class="bgf p-10 m-t-10">
      <div class="title"><b class="b">少儿保护伞充分保障型方案：</b></div>
      <div class="title">
        <el-link type="success" class="f-12-i"
        >每年5000元左右 坐拥400万+顶配保障
        </el-link>
      </div>
      <base-table
              :tableConfig="tableConfig"
              :tableData="tableData"
      ></base-table>
      <base-tableFooter
              :tableData="tableData"
              :resource="tableData"
              label="payment"
      ></base-tableFooter>
      <div class="table-block m-t-10 row-align-center">
        <el-button
                type="success"
                round
                size="mini"
                class="row-align-center"
                @click="$router.push({ path: '/children/healty/securityCase' })"
        >充分保障型方案详解 点击进入
        </el-button>
      </div>
    </div>

    <div class="bgf p-10 m-t-10">
      <div class="title"><b class="b">最后结束语：</b></div>
      <div class="article-block">
        根据您所填信息建议您使用：
        <b class="g-error">
          进阶型方案
        </b>
        <p>不存在百搭的保险方案，每个家庭、每个人都很独特，挑选合适自己的。</p>
        <p>
          最后的最后，给孩子买保险前，先把大人的保险买了！毕竟，孩子最大的依靠，不是保险，是父母。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "case",
    data() {
      return {
        countCulumn: ["age0"],
        tableConfig: [
          {
            label: "时间",
            value: "time",
            width: "80px"
          },
          {
            label: "一次性存100万",
            value: "onceIncome",
            width: "80px"
          },
          {
            label: "分5年每年存20万",
            value: "year5",
            width: "80px"
          },
          {
            label: "分10年每年存10万",
            value: "year10"
          }
        ],
        tableData: [
          {
            time: "大学18-21岁领取部分",
            onceIncome: "2万*4年",
            year5: "2万*4年",
            year10: "2万*4年"
          },
          {
            time: "深造22-24岁",
            onceIncome: "2万*3年",
            year5: "2万*3年",
            year10: "2万*3年"
          },
          {
            time: "满期领取剩余部分",
            onceIncome: "113200元",
            year5: "77560元",
            year10: "52490元"
          },
          {
            time: "累计可领取",
            onceIncome: "253200元",
            year5: "217560元",
            year10: "192490元"
          }
        ]
      };
    },
    mounted() {
      let record1 = {
        label: "大孩男宝10岁",
        value: "age0",
        width: "30px"
      };
      let record2 = {
        label: "二孩男宝15岁",
        value: "age5",
        width: "30px"
      };
      switch (this.$store.state.hasChildNum) {
        case 0: {
          this.countCulumn.push("age5");
          this.tableConfig[5].secondTh[0].label = "男宝10岁";
        }
          break;
        case 1: {
          this.tableConfig[5].secondTh[0] = {
            label: "男宝10岁",
            value: "age0",
            width: "30px"
          };
        }
          break;
        case 2: {
          this.countCulumn.push("age5");
          this.tableConfig[5].secondTh[0] = record1;
          this.tableConfig[5].secondTh.push(record2);
        }
          break;
      }
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
