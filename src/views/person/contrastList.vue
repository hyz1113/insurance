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
          >成人重疾险价格排名
        </el-link>
      </div>
      <div>
        <base-table
          :tableConfig="tableConfig"
          :tableData="tableData"
        ></base-table>
      </div>
    </div>

    <div class="bgf p-10 m-t-10">
      <div class="title">4、市场在售医疗险对比（性价比排名）：</div>
      <div class="table-block row-align-center">
        <el-link class="title text-center row-align-center" type="warning"
          >百万医疗险（性价比排名）
        </el-link>
      </div>
      <div>
        <base-table
          :tableConfig="tableConfig1"
          :tableData="tableData1"
        ></base-table>
      </div>
    </div>

    <div class="bgf p-10 m-t-10">
      <div class="title">5、市场在售成人重疾险排名（性价比排名）：</div>
      <div class="table-block row-align-center">
        <el-link class="title text-center row-align-center" type="warning"
          >成人重疾险性价比排名
        </el-link>
      </div>
      <div>
        <base-table
          :tableConfig="tableConfig2"
          :tableData="tableData2"
        ></base-table>
      </div>
      <div class="m-t-10 row-align-center">
        <el-button
          class="row-align-center"
          size="mini"
          type="success"
          @click="$router.push({ path: '/person/case' })"
          >下一步 规划方案
        </el-button>
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
          value: "prod",
          width:'88px'
        },
        {
          label: "30岁男性 50万",
          value: "money",
          width:'100px'
        }
      ],
      tableConfig1: [
        {
          label: "公司",
          value: "name",
          width: "40px"
        },
        {
          label: "产品",
          value: "prod"
        },
        {
          label: "30岁（有社保）",
          value: "money",
          width: "80px"
        },
        {
          label: "产品亮点",
          value: "desc",

        },
        {
          label: "等级",
          value: "level",
          width: "40px"
        }
      ],
      tableConfig2: [
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
          value: "desc"
        },
        {
          label: "等级",
          value: "level"
        }
      ],
      tableData: [
        {
          name: "大家保险（原安邦保险）",
          prod: "超惠保",
          money: "4390"
        },
        {
          name: "昆仑保险",
          prod: "健康保2",
          money: "5199"
        },

        {
          name: "和泰人寿",
          prod: "超级玛丽2020",
          money: "5210"
        },
        {
          name: "百年人寿",
          prod: "康惠保2020",
          money: "5265"
        },
        {
          name: "三峡人寿",
          prod: "达尔文2号",
          money: "5455"
        },
        {
          name: "华夏人寿",
          prod: "常青树 (多倍版)",
          money: "8060"
        },

        {
          name: "泰康人寿",
          prod: "惠健康",
          money: "8360"
        },
        {
          name: "中国人寿",
          prod: "国寿福 (臻享版)",
          money: "9056"
        },

        {
          name: "友邦保险",
          prod: "欣悦一生成人版（2019",
          money: "9720"
        },

        {
          name: "中国平安",
          prod: "平安福 2019 II",
          money: "17"
        }
      ],
      tableData1:[
        {
          name: "中国人保",
          prod: "好医保·长期医疗（新版）",
          money: "259",
          desc: "性价比高保证续保6年",
          level: "A"
        },
        {
          name: "复星联合健康",
          prod: "超越保长期医疗险计划1（专家版）",
          money: "365",
          desc: "6年保证续保可选特需部、国际部、VIP部医疗",
          level: "A"
        },
        {
          name: "微保&amp;泰康人寿",
          prod: "微医保·长期医疗险",
          money: "405",
          desc: "6年期产品，6年不涨价",
          level: "A"
        },
        {
          name: "平安保险",
          prod: "平安e生保（保证续保版）",
          money: "366",
          desc: "6年保证续保",
          level: "A"
        },
        {
          name: "众安保险",
          prod: "尊享e生旗舰版",
          money: "306",
          desc: "不限公立医院增值服务充足",
          level: "A"
        },
        {
          name: "复星联合健康",
          prod: "钢铁侠",
          money: "369",
          desc: "保证5年续保",
          level: "A"
        },
        {
          name: "太平洋财险",
          prod: "太享e保",
          money: "269",
          desc: "额外100万共享免赔额",
          level: "B"
        },
        {
          name: "众慧相互",
          prod: "慧享e生",
          money: "225",
          desc: "有家庭保障慧享一家",
          level: "B"
        },
        {
          name: "华夏保险",
          prod: "医保通",
          money: "308",
          desc: "有人工审核",
          level: "B"
        },
        {
          name: "安心财险",
          prod: "一起慧99",
          money: "589",
          desc: "0免赔",
          level: "B"
        },
        {
          name: "阳光财险",
          prod: "爱健康",
          money: "278",
          desc: "恶性肿瘤0免赔",
          level: "B"
        },
        {
          name: "和谐健康",
          prod: "尊崇佰万医疗",
          money: "220",
          desc: "25种重大疾病赔付1万",
          level: "B"
        },
        {
          name: "安心财险",
          prod: "安心e生",
          money: "277",
          desc: "安心一家共享500万保额",
          level: "B"
        },
        {
          name: "复星保德德信",
          prod: "悦享守护",
          money: "368",
          desc: "免赔额5000元",
          level: "B"
        },
        {
          name: "泰康在线",
          prod: "百万安康",
          money: "265",
          desc: "恶性肿瘤0免赔",
          level: "B"
        },
        {
          name: "福得生命",
          prod: "i无忧",
          money: "313",
          desc: "三年内保证续保",
          level: "B"
        },
        {
          name: "中英人寿",
          prod: "百依百顺",
          money: "278",
          desc: "健康咨询预约挂号，陪诊服务",
          level: "C"
        },
        {
          name: "国华人寿",
          prod: "小米千万医疗",
          money: "279",
          desc: "恶性肿瘤500万",
          level: "C"
        },
        {
          name: "太平保险",
          prod: "太平医保无忧2019版",
          money: "371",
          desc: "增值服务全",
          level: "C"
        },
        {
          name: "安联保险",
          prod: "安联臻爱医疗险(感恩版)-升级版",
          money: "430",
          desc: "早产儿可买，健康告知未问询",
          level: "C"
        },
        {
          name: "华海财险",
          prod: "e生无忧",
          money: "288",
          desc: "/",
          level: "C"
        },
        {
          name: "大地财险",
          prod: "天地关爱（大地康行）",
          money: "435",
          desc: "可以附加交通工具赔付",
          level: "C"
        },
        {
          name: "安利人寿",
          prod: "畅享一生",
          money: "274",
          desc: "社保可以抵扣1万免赔",
          level: "C"
        },
        {
          name: "永安财险",
          prod: "乐健e活",
          money: "421",
          desc: "住院津贴200元每天",
          level: "C"
        },
        {
          name: "信诚人寿",
          prod: "小棉袄百万医疗",
          money: "349",
          desc: "免赔额6000元",
          level: "C"
        },
        {
          name: "信泰人寿",
          prod: "全民百万e保",
          money: "349",
          desc: "恶性肿瘤先赔付1万",
          level: "C"
        },
        {
          name: "同方全球",
          prod: "御护一生",
          money: "1370",
          desc: "相对免赔额1万社保可以抵扣",
          level: "D"
        },
        {
          name: "华泰财险",
          prod: "百万医疗",
          money: "636",
          desc: "意外住院津贴100元每天",
          level: "D"
        }
      ],
      tableData2:[
        {
          name: "三峡人寿",
          prod: "达尔文2号",
          desc: "60岁前额外50%保额；轻中症赔付比例高；癌症二次赔付120%",
          level: "A"
        },
        {
          name: "和泰人寿",
          prod: "超级玛丽2020",
          desc: "0-40岁投保前15年额外50%保额，可选特定良性肿瘤赔付，癌症二次赔付，保费豁免功能",
          level: "A"
        },
        {
          name: "百年人寿",
          prod: "康惠保2020",
          desc: "前10年额外赔50%，11-15年额外赔35%，癌症二次赔付，特定疾病额外赔",
          level: "A"
        },
        {
          name: "昆仑保险",
          prod: "健康保2.0",
          desc: "癌症二次赔付，成人特定疾病额外赔付，有豁免责任",
          level: "A"
        },
        {
          name: "大家保险（原安邦保险）",
          prod: "超惠保",
          desc: "价格便宜",
          level: "B"
        },
        {
          name: "华夏人寿",
          prod: "常青树(多倍版)",
          desc: "重疾分组6次赔付",
          level: "C"
        },
        {
          name: "泰康人寿",
          prod: "惠健康",
          desc: "品牌公司，符合条件可转年金",
          level: "C"
        },
        {
          name: "中国人寿",
          prod: "国寿福(臻享版)",
          desc: "品牌公司，特定交通工具意外身故赔付高",
          level: "C"
        },
        {
          name: "友邦保险",
          prod: "欣悦一生成人版（2019）",
          desc: "加费可以附加癌症三次赔付",
          level: "C"
        },
        {
          name: "中国平安",
          prod: "平安福 2019II",
          desc: "品牌公司",
          level: "D"
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
