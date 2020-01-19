<template>
  <div>
    <div class="bgf">
      <el-divider>
        <el-link type="info" plain size="mini">少儿教育金规划</el-link>
      </el-divider>
    </div>
    <div class="bgf p-10">
      <div class="title"><b class="b">规划前言</b></div>
      <div class="article-block">
        <p>
          保险规划作为一个理财行为，本质上就是解决我们人生中可能面临的各种经济问题。
        </p>
        <p>
          教育金保险，简单来说就是提前为孩子存一笔钱，这笔钱可用于解决孩子在不同阶段的教育费用。通常是根据自己的保费预算和孩子未来受教育的预期来选择险种和金额。
        </p>
        <p>
          也就是说，教育金保险是为孩子教育设立一个专门的账户，最大的特点是强制储蓄，专款专用。一旦为孩子建立了教育保险计划，就必须每年存入约定的金额，从而保证这个储蓄计划一定能够完成。
        </p>
        <p>
          另外，教育金还有一项区别于其他理财产品的功能：保费豁免。保费豁免，指一旦投保的家长遭受不幸，身故或者全残，保险公司将豁免所有未交保费，保单原应享有权益的子女，可以继续得到保障和资助。没有保费豁免的教育金都不能买。
        </p>
        <p>
          作为家庭支柱，大择最担心的不是将来负担不起孩子上学的费用，而是如果有一天，万一不幸发生了点什么，没有办法供孩子上学。所以在给孩子买教育金时，是否有保费豁免也是一个着重关注点。
        </p>
        <p><b>教育金保险不是必须品，优先级一定要靠后。</b></p>

        <p>
          <b>规划结论：</b>
          根据您的情况，我们的初步建议是：<b class="g-error">暂时不要考虑</b>
          教育金保险。
        </p>
      </div>
    </div>

    <div class="bgf p-10 m-t-10">
      <div class="title"><b class="b">教育金规划所需险种概述</b></div>
      <div class="article-block">
        <p>
          1、传统教育金：在保险金的返还上，完全是针对教育阶段而定，通常会在孩子进入高中、
          大学两个重要时间节点开始每年返还保险金，到孩子大学毕业或创业阶段再一次性返还一笔费用，保证孩子在每一个重要的教育阶段，都能获得一笔稳定的资金支持。
        </p>
        <p>
          2、新型教育金：通常具有较强的投资理财功能，属于理财型保险，如万能险、投连险等，不仅可以作为孩子上学期间的教育费用，也可以在结婚时做婚嫁金，年老时转换为养老金。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contrastList",
  data() {
    return {
      tableConfig: [
        {
          label: "公司",
          value: "name"
        },
        {
          label: "产品",
          value: "prod"
        },
        {
          label: "0岁男宝宝保障50万(保障期限)",
          value: "person"
        },
        {
          label: "保费",
          value: "person"
        }
      ],
      tableConfig1: [
        {
          label: "公司",
          value: "name"
        },
        {
          label: "产品",
          value: "prod"
        },
        {
          label: "产品亮点",
          value: "special"
        },
        {
          label: "等级",
          value: "level"
        }
      ],
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
