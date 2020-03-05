<template>
  <div>
    <div class="bgf p-10">
      <el-divider>
        <el-link type="info" plain size="mini">少儿教育金规划</el-link>
      </el-divider>
    </div>

    <div class="bgf p-10">
      <div class="title"><b class="b">规划前言</b></div>
      <div class="article-block">
        <p>保险规划作为一个理财行为，本质上就是解决我们人生中可能面临的各种经济问题。 </p>

        <p>教育金保险，简单来说就是提前为孩子存一笔钱，这笔钱可用于解决孩子在不同阶段的教育费用。通常是根据自己的保费预算和孩子未来受教育的预期来选择险种和金额。 </p>

        <p>也就是说，教育金保险是为孩子教育设立一个专门的账户，最大的特点是强制储蓄，专款专用。一旦为孩子建立了教育保险计划，就必须每年存入约定的金额，从而保证这个储蓄计划一定能够完成。 </p>

        <p>另外，教育金还有一项区别于其他理财产品的功能：保费豁免。保费豁免，指一旦投保的家长遭受不幸，身故或者全残，保险公司将豁免所有未交保费，保单原应享有权益的子女，可以继续得到保障和资助。<b
                class="g-error">没有保费豁免的教育金都不能买。</b>

          作为家庭支柱，大择最担心的不是将来负担不起孩子上学的费用，而是如果有一天，万一不幸发生了点什么，没有办法供孩子上学。所以在给孩子买教育金时，是否有保费豁免也是一个着重关注点。 </p>

        <p>教育金保险不是必须品，优先级一定要靠后。</p>
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
      <div class="title"><b class="b">少儿教育金国内上学版方案：</b></div>
      <div class="title">
        <el-link class="f-12-i"
        >产品：天天向上教育金
        </el-link>
      </div>
      <div class="title">
        <el-link type="success" class="f-12-i text-center"
        >预算万元左右 国内上学无忧
        </el-link>
      </div>

      <div class="table-block row-align-center">
        <el-link class="title text-center row-align-center" type="warning"
        >0岁宝宝，共存10万
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
                @click="$router.push({ path: '/children/edu/caseDetail'})"
        >方案详解   点击进入
        </el-button>
      </div>
    </div>

    <div class="bgf p-10">
      <div class="title"><b class="b">少儿教育金国外上学版方案：</b></div>
      <div class="title">
        <el-link type="success" class="f-12-i"
        >预算10万左右  国外上学任意选
        </el-link>
      </div>
      <base-table
              :tableConfig="tableConfig1"
              :tableData="tableData1"
      ></base-table>
    </div>



    <div class="bgf p-10 m-t-10">
      <div class="title"><b class="b">最后结束语：</b></div>
      <div class="article-block">
        根据您所填信息建议您使用：
        <b class="g-error">
          {{$store.state.familyincome}}
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
        tableConfig: [
          {
            label: "时间",
            value: "time"
          },
          {
            label: "一次性存10万",
            value: "onceIncome",
            width: "60px"
          },
          {
            label: "分5年每年存2万",
            value: "year5",
            width: "80px"
          },
          {
            label: "分10年每年存1万",
            value: "year10",
            width: "90px"
          }
        ],
        tableConfig1: [
          {
            label: "时间",
            value: "time"
          },
          {
            label: "一次性存100万",
            value: "onceIncome",
            width: "60px"
          },
          {
            label: "分5年每年存20万",
            value: "year5",
            width: "80px"
          },
          {
            label: "分10年每年存10万",
            value: "year10",
            width:"90px"
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
        ],
        tableData1: [
          {
            time: "大学18-21岁领取部分",
            onceIncome: "20万*4年",
            year5: "20万*4年",
            year10: "20万*4年"
          },
          {
            time: "深造22-24岁",
            onceIncome: "20万*3年",
            year5: "20万*3年",
            year10: "20万*3年"
          },
          {
            time: "满期领取剩余部分",
            onceIncome: "1132000元",
            year5: "775600元",
            year10: "524900元"
          },
          {
            time: "累计可领取",
            onceIncome: "2532000元",
            year5: "2175600元",
            year10: "1924900元"
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
