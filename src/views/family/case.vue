<template>
  <div>
    <div class="bgf p-10">
      <el-divider>
        <el-link type="info" plain size="mini">家庭保护伞规划</el-link>
      </el-divider>
      <div class="title"><b class="b">规划前言</b></div>
      <div class="article-block">
        我们面临的风险，不外乎生病+意外，能提供保护伞的保险，只需要根据经济状况进行额度或年限调整即可。
        严肃提醒：买任何商业保险前，最好先把医保给办喽。大病小病、门诊住院，都能报销一些。手握医保，买商业医疗险也更便宜。

      </div>
    </div>


    <div class="bgf p-10 m-t-10">
      <div class="title"><b class="b">家庭保护伞规划所需险种概述：</b></div>
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
      <div class="title"><b class="b">家庭保护伞（成人）经济型方案：</b></div>
      <div class="title">
        <el-link type="success" class="f-12-i"
          >预算千元左右 保障不差白菜价
        </el-link>
      </div>
      <base-table
        :showSummary="true"
        :countCulumn="countCulumn"
        :tableConfig="tableConfig"
        :tableData="tableData"
      ></base-table>
      <base-tableFooter
        :tableData="tableData"
        :resource="tableData"
        label="payment"
      ></base-tableFooter>
    </div>

    <div class="bgf p-10 m-t-10">
      <div class="title"><b class="b">家庭保护伞（成人）进阶型方案：</b></div>
      <div class="title">
        <el-link type="success" class="f-12-i"
          >预算三千元左右 给娃一辈子的重疾保障
        </el-link>
      </div>
      <base-table
        :showSummary="true"
        :countCulumn="countCulumn"
        :tableConfig="tableConfig"
        :tableData="tableData"
      ></base-table>
      <base-tableFooter
        :tableData="tableData"
        :resource="tableData"
        label="payment"
      ></base-tableFooter>
    </div>

    <div class="bgf p-10 m-t-10">
      <div class="title">
        <b class="b">家庭保护伞（成人）充分保障型方案：</b>
      </div>
      <div class="title">
        <el-link type="success" class="f-12-i"
          >每年5000元左右 坐拥400万+顶配保障
        </el-link>
      </div>
      <base-table
        :showSummary="true"
        :countCulumn="countCulumn"
        :tableConfig="tableConfig"
        :tableData="tableData"
      ></base-table>
      <base-tableFooter
        :tableData="tableData"
        :resource="tableData"
        label="payment"
      ></base-tableFooter>
    </div>

    <div class="m-t-10 row-align-center" v-if="$store.state.hasChildNum">
      <el-button
        class="row-align-center"
        size="mini"
        type="success"
        @click="goCase"
        >下一页 孩子的保障方案
      </el-button>
    </div>

    <div class="bgf p-10 m-t-10">
      <div class="title"><b class="b">最后结束语：</b></div>
      <div class="article-block">
        根据您所填信息建议您使用：
        <b class="g-error">
          {{$store.state.insurType}}
        </b>
        <p>不存在百搭的保险方案，每个家庭、每个人都很独特，挑选合适自己的。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "case",
  data() {
    return {
      countCulumn: ["age0", "age5"],
      tableConfig: [
        {
          label: "产品",
          value: "name",
          width: "40px"
        },
        {
          label: "产品名称",
          value: "prod"
        },
        {
          label: "保额",
          value: "person",
          width: "40px"
        },
        {
          label: "保额期限",
          value: "insuranceDate",
          width: "40px"
        },
        {
          label: "缴费年限",
          value: "payment",
          width: "40px"
        },
        {
          label: "年缴保费",
          value: "yearPayment",
          width: "50px",
          secondTh: [
            {
              label: "30岁男",
              value: "age0"
            },
            {
              label: "30岁女",
              value: "age5"
            }
          ]
        }
      ],
      tableData: [
        {
          name: "中国人保",
          prod: "好医保·长期医疗（新版）",
          person: "256",
          insuranceDate: "1年",
          payment: "20",
          age0: '23元',
          age5: '23元',
          yearPayment: "15岁"
        },
        {
          name: "复星联合健康",
          prod: "超越保长期医疗险计划1（专家版）",
          person: "316",
          insuranceDate: "1年",
          payment: "20",
          age0: '23元',
          age5: '23元',
          yearPayment: "15岁"
        },
        {
          name: "微保&泰康人寿",
          prod: "微医保·长期医疗险",
          person: "196",
          insuranceDate: "1年",
          payment: "20",
          age0: '23元',
          age5: '23元',
          yearPayment: "15岁"
        },
        {
          name: "众慧相互",
          prod: "慧享e生",
          person: "256",
          insuranceDate: "1年",
          payment: "20",
          age0: '23元',
          age5: '23元',
          yearPayment: "15岁"
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
    },
    goCase() {
      this.$router.push({ path: "/children/healty/case" });
    }
  }
};
</script>
