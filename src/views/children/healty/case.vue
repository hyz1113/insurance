<template>
  <div>
    <div class="bgf">
      <el-divider>
        <el-link type="info" plain size="mini">少儿保护伞规划</el-link>
      </el-divider>
    </div>

    <div class="bgf p-10">
      <div class="title"><b class="b">规划前言</b></div>
      <div class="article-block">
        孩子面临的风险，不外乎生病+意外，能提供保护伞的保险，只需要根据经济状况进行额度或年限调整即可。
        严肃提醒：买任何商业保险前，先把少儿医保给办喽。大病小病、门诊住院，都能报销一些。手握医保，买商业医疗险也更便宜。
        <p class="g-error">
          【您的孩子已有一老一小少儿医保，不要忘记续保即可】（此句话为动态显示或隐藏）
        </p>
      </div>
    </div>

    <div class="bgf p-10 m-t-10">
      <div class="title"><b class="b">保护伞所需险种概述：</b></div>
      <div class="article-block">
        <p>
          1、重疾险：主攻烧钱的重疾，比如儿童高发的白血病。符合理赔条件，直接赔钱，不用等报销。买多少保额，赔多少钱。这笔钱，娃治病用得上。大人请假照顾孩子，断了收入，也能用这笔钱补偿损失。
        </p>
        <p>
          2、百万医疗险：意外住院、生病住院，都能报销，最高能报几百万。和重疾险搭档，就算孩子遭遇大病大灾，不用卖房，不用求人，不用因为没钱放弃治疗。但百万医疗险有1万免赔额，社保报销完，先自费1万，剩下的再100%报销。
        </p>
        <p>
          3、小额住院医疗险：买1万保额、0免赔额的产品，填补百万医疗险不报的那1万块。小额医疗险貌似更实用？可以抛弃百万医疗险？No，我们买保险，优先抵御自己承受不住的风险，而不是这几百几千的「小钱」。所以小额医疗险：要么是配角，用来填补百万医疗险的1万元缺口。要么是备胎，买不起百万医疗险，用它过渡。
        </p>
        <p>
          4、意外险：保各种意外，意外死亡、伤残，也是直接赔钱，意外受伤能报销。
        </p>
      </div>
    </div>

    <div class="bgf p-10 m-t-10">
      <div class="bg-light-green p-10">
        <div class="title text-center">
          <b class="b">不建议给孩子买什么保险？</b>
        </div>
        <div class="title text-center">(0~18岁)</div>
        <div class="row-align-center ">
          <div class="column-align-left">
            <el-button type="success" size="mini" round>寿险</el-button>
            <p class="f-12 lh20 m-t-10">孩子不承担家庭经济责任，不需要买寿险</p>
          </div>
          <div class="column-align-left">
            <el-button type="success" size="mini" round>返还型重疾险</el-button>
            <p class="f-12 lh20 m-t-10">
              太贵，不如把保额做高，保障做足，省下来的钱拿去理财能赚更多
            </p>
          </div>
        </div>
        <div class="row-align-center ">
          <div class="column-align-left">
            <el-button type="success" size="mini" round>长期意外险</el-button>
            <p class="f-12 lh20 m-t-10">
              每年花几十块钱就能搞定的事，没必要花一两千
            </p>
          </div>
          <div class="column-align-left">
            <el-button type="success" size="mini" round>组合型保险</el-button>
            <p class="f-12 lh20 m-t-10">
              寿险、意外险、医疗险、重疾险等捆绑销售的保险，容易买到【歪瓜裂枣】、多花冤枉钱
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bgf p-10 m-t-10">
      <div class="title"><b class="b">少儿保护伞经济型方案：</b></div>
      <div class="title">
        <el-link type="success" class="f-12-i"
          >预算千元左右 保障不差白菜价
        </el-link>
      </div>
      <base-table
        :countCulumn="countCulumn"
        :showSummary="true"
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
          @click="$router.push({ path: '/children/healty/economicCase' })"
          >经济型方案 点击进入
        </el-button>
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
        :countCulumn="countCulumn"
        :showSummary="true"
        :tableConfig="tableConfig"
        :tableData="tableData1"
      ></base-table>
      <base-tableFooter
        :tableData="tableData1"
        :resource="tableData1"
        label="payment"
      ></base-tableFooter>
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
        :countCulumn="countCulumn"
        :showSummary="true"
        :tableConfig="tableConfig"
        :tableData="tableData2"
      ></base-table>
      <base-tableFooter
        :tableData="tableData2"
        :resource="tableData2"
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
      countCulumn: ["year_payment"],
      tableConfig: [
        {
          label: "保险类型",
          value: "insure_version",
          width: "40px"
        },
        {
          label: "产品名称",
          value: "insure_name",
          width: "50px"
        },
        {
          label: "保额",
          value: "insure_quota",
          width: "50px"
        },
        {
          label: "保障期限",
          value: "insure_endyear",
          width: "40px"
        },
        {
          label: "缴费年限",
          value: "paytotal_year",
          width: "40px"
        },
        {
          label: "年交保费",
          width: "60px",
          value: "year_payment",
          secondTh: [
            {
              label: "男宝0岁",
              value: "year_payment",
              width: "30px"
            }
          ]
        }
      ],
      tableData: [],
      tableData1: [],
      tableData2: []
    };
  },
  mounted() {
    if (this.$store.state.formType == "family") {
      this.dealTableHeader(this.$store.state.baseinfo);
    } else {
      this.dealTableParam();
    }
    this.reSiteTableData();
  },
  methods: {
    dealTableParam() {
      let val = this.$route.query;
      let sex;
      sex = val.sex == 1 ? "男" : "女";
      this.tableConfig[5].secondTh[0] = {
        label: `${val.sex}宝${val.age}岁`,
        value: "year_payment",
        width: "30px"
      };
    },
    dealTableHeader(data) {
      let val;
      val = data;
      switch (this.$store.state.hasChildNum) {
        // case 0: {
        //   let sex = data.sex == 1 ? "男" : "女";
        //   this.countCulumn.push("age5");
        //   this.tableConfig[5].secondTh[0].label = `${sex}宝${val.age}岁`;
        // }
        //   break;
        case 1:
          {
            let sex1 = val.childFirst_sex == 1 ? "男" : "女";
            this.tableConfig[5].secondTh[0] = {
              label: `${sex1}宝${val.childFirst_age}岁`,
              value: "year_payment",
              width: "30px"
            };
          }
          break;
        case 2:
          {
            let sex1 = val.childFirst_sex == 1 ? "男" : "女";
            let sex2 = val.childSecond_sex == 1 ? "男" : "女";
            let record1 = {
              label: `大孩${sex1}宝${val.childFirst_age}岁`,
              value: "year_payment",
              width: "30px"
            };
            let record2 = {
              label: `二孩${sex2}宝${val.childSecond_age}岁`,
              value: "year_payment01",
              width: "30px"
            };
            this.countCulumn.push("year_payment01");
            this.tableConfig[5].secondTh[0] = record1;
            this.tableConfig[5].secondTh.push(record2);
          }
          break;
      }
    },
    reSiteTableData() {
      let tableData;
      debugger;
      if (this.$store.state.formType == "family") {
        switch (this.$store.state.hasChildNum) {
          case 1:
            {
              tableData = this.$store.state.formResponseData.data.baby;
            }
            break;
          case 2:
            {
              tableData = this.$store.state.formResponseData.data.baby;
              let tableDataScBaby = this.$store.state.formResponseData.data
                .secbaby;
              for (let i in tableData) {
                tableData[i].forEach(item => {
                  tableDataScBaby[i].forEach(itm => {
                    item["year_payment01"] = itm.pay_year;
                  });
                });
              }

              debugger;
            }
            break;
        }
      } else {
        tableData = this.$store.state.formResponseData.data;
      }
      debugger;
      this.tableData = this.dealTableData(tableData.cheapInsure); //经济型
      this.tableData1 = this.dealTableData(tableData.mediumInsure); //进阶型
      this.tableData2 = this.dealTableData(tableData.highInsure); //豪华型
    },
    tableRowClassName({ rowIndex }) {
      if (rowIndex % 2 == 0) {
        return "event-row";
      }
      return "";
    }
  }
};
</script>
