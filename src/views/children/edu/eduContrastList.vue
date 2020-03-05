<template>
  <div>
    <div class="bgf p-10">
      <el-divider>
        <el-link type="info" plain size="mini">保险产品对比流程</el-link>
      </el-divider>
    </div>
    <div class="bgf p-10">
      <div class="title">1、对比流程采用的保险产品来自以下保险公司。</div>
      <div class="p-10">
        <img class="w-100-c" src="../../../assets/1.png" />
      </div>
    </div>

    <div class="bgf p-10 m-t-10">
      <div class="title">2、知识普及：</div>
      <div class="article-block">
        在中国开办的保险公司均由中国银保监会托底，中国政府做信任背书，均有偿付能力，不存在破产无法兑现偿付的问题。真实的差别是产品保障范围、价格及附加服务的差异。本规划工具采用的对比产品均为目前市场上销售的合规产品。
      </div>
    </div>

    <div class="bgf p-10 m-t-10">
      <div class="title">3、市场在售教育金产品对比（收益率倍数排名）:</div>

      <div class="m-t-10">
        <base-table
          :tableConfig="tableConfig"
          :tableData="tableData"
        ></base-table>
      </div>
    </div>

    <div class="bgf p-10 m-t-10">
      <div class="title">4、市场在售教育金对比（性价比排名）：</div>
      <div class="table-block row-align-center">
        <el-link class="title text-center row-align-center" type="warning"
          >少儿百万医疗险性价比排名
        </el-link>
      </div>

      <div class="m-t-10">
        <base-table
          :tableConfig="tableConfig1"
          :tableData="tableData1"
        ></base-table>
      </div>
      <div class="m-t-10 row-align-center">
        <el-button
          class="row-align-center"
          size="mini"
          type="success"
          @click="
            $router.push({
              path: '/children/edu/case',
              query: { age: $route.query.age, sex: $route.query.sex }
            })
          "
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
          label: "产品名称",
          value: "prod",
          width: "60"
        },
        {
          label: "公司",
          value: "name",
          width: "60"
        },
        {
          label: "投入保费",
          value: "price"
        },
        {
          label: "领取总额",
          value: "total",
          width: "70"
        },
        {
          label: "年化收益",
          value: "income",
          width: "60"
        }
      ],
      tableConfig1: [
        {
          label: "产品名称",
          value: "prod"
        },
        {
          label: "承保公司",
          value: "name"
        },
        {
          label: "领取时间",
          value: "time"
        },
        {
          label: "等级",
          value: "level"
        }
      ],
      tableData: [
        {
          prod: "天天向上少儿年金保险",
          name: "信美人寿相互保险社",
          price: "7600*10年=76000",
          total: "160000",
          income: "11.05%"
        },
        {
          prod: "筑梦未来",
          name: "恒安标准人寿",
          price: "30000*5年=150000",
          total: "313280",
          income: "10.89%"
        },
        {
          prod: "聚财金生",
          name: "同方全球",
          price: "30000*5年=150000",
          total: "306310",
          income: "10.42%"
        },
        {
          prod: "大富翁教育金",
          name: "渤海人寿",
          price: "30000*5年=150000",
          total: "305498",
          income: "10.37%"
        },
        {
          prod: "星宝贝",
          name: "复兴联合",
          price: "10000*10年=100000",
          total: "203546",
          income: "10.35%"
        },
        {
          prod: "全民保·教育金",
          name: "泰康人寿",
          price: "30000*5年=150000",
          total: "282400",
          income: "8.83%"
        },
        {
          prod: "珍爱未来B",
          name: "招商信诺",
          price: "30000*5年=150000",
          total: "275761",
          income: "8.38%"
        },
        {
          prod: "状元树",
          name: "中国太平",
          price: "10605*10年=106050",
          total: "190056",
          income: "7.92%"
        },
        {
          prod: "珍爱未来",
          name: "招商信诺",
          price: "10699*10年=106990",
          total: "180000",
          income: "6.82%"
        },
        {
          prod: "状元宝",
          name: "华泰",
          price: "10000*10年=100000",
          total: "168191",
          income: "6.82%"
        },
        {
          prod: "华泰状元宝少儿教育金（万能型）",
          name: "华泰保险",
          price: "11339*10年=113390",
          total: "190712",
          income: "6.82%"
        },
        {
          prod: "优才宝贝",
          name: "人保寿",
          price: "10000*10年=100000",
          total: "163154",
          income: "6.32%"
        },
        {
          prod: "平安蔚来星少儿年金保险",
          name: "平安人寿",
          price: "6120*10年=61200",
          total: "100000",
          income: "6.34%"
        },
        {
          prod: "智慧英才",
          name: "中国平安",
          price: "10381*10年=103810",
          total: "160000",
          income: "5.41%"
        },
        {
          prod: "英才宝贝",
          name: "中英人寿",
          price: "10452*10年=104520",
          total: "160000",
          income: "5.31%"
        },
        {
          prod: "国寿安心宝少儿年金保险",
          name: "中国人寿",
          price: "23400*10年=234000",
          total: "324000",
          income: "3.85%"
        },
        {
          prod: "全能英才",
          name: "平安人寿",
          price: "10286*10年=102860",
          total: "141250",
          income: "3.73%"
        },
        {
          prod: "国寿岁岁赢少儿年金保险",
          name: "中国人寿",
          price: "13800*10年=1380000",
          total: "188000",
          income: "3.62%"
        },
        {
          prod: "新华成长阳光少儿教育年金保险",
          name: "新华保险",
          price: "38700*10年=387000",
          total: "490000",
          income: "2.66%"
        },
        {
          prod: "华彩前程",
          name: "德华安顾",
          price: "10241*10年=102410",
          total: "130000",
          income: "2.69%"
        },
        {
          prod: "中银星",
          name: "中银三星",
          price: "11290*10年=112900",
          total: "140000",
          income: "2.40%"
        },
        {
          prod: "成长安心",
          name: "中美大都会",
          price: "11100*10年=111000",
          total: "132000",
          income: "1.89%"
        }
      ],
      tableData1: [
        {
          name: "聚财金生",
          prod: "同方全球",
          time: "5年后可领取 满期20岁",
          level: "A"
        },
        {
          name: "星宝贝",
          prod: "复兴联合",
          time: "15-24岁 满期30岁",
          level: "A"
        },
        {
          name: "大富翁教育金",
          prod: "渤海人寿",
          time: "18-21岁 满期21岁",
          level: "A"
        },
        {
          name: "全民保·教育金",
          prod: "泰康人寿",
          time: "18-21岁 满期22岁",
          level: "A"
        },
        {
          name: "天天向上少儿年金保险",
          prod: "信美人寿相互保险社",
          time: "18-24岁 满期30岁",
          level: "A"
        },
        {
          name: "筑梦未来",
          prod: "恒安标准人寿",
          time: "18-21岁 满期22岁",
          level: "A"
        },
        {
          name: "珍爱未来B",
          prod: "招商信诺",
          time: "18-21岁 满期25岁",
          level: "B"
        },
        {
          name: "珍爱未来",
          prod: "招商信诺",
          time: "18-21岁 满期25岁",
          level: "B"
        },
        {
          name: "状元树",
          prod: "中国太平",
          time: "18-24岁 满期30岁",
          level: "B"
        },
        {
          name: "状元宝",
          prod: "华泰",
          time: "18-24岁 满期30岁",
          level: "B"
        },
        {
          name: "平安蔚来星少儿年金保险",
          prod: "平安人寿",
          time: "18-21岁 满期22岁",
          level: "B"
        },
        {
          name: "华泰状元宝少儿教育金（万能型）",
          prod: "华泰保险",
          time: "18-21岁 满期25岁",
          level: "B"
        },
        {
          name: "优才宝贝",
          prod: "人保寿",
          time: "18-24岁 满期25岁",
          level: "B"
        },
        {
          name: "智慧英才",
          prod: "中国平安",
          time: "5年后可领取 满期30岁",
          level: "B"
        },
        {
          name: "英才宝贝",
          prod: "中英人寿",
          time: "15-24岁 满期30岁",
          level: "C"
        },
        {
          name: "国寿安心宝少儿年金保险",
          prod: "中国人寿",
          time: "18-24岁 满期30岁",
          level: "C"
        },
        {
          name: "全能英才",
          prod: "平安人寿",
          time: "5年后可领取 满期30岁",
          level: "C"
        },
        {
          name: "国寿岁岁赢少儿年金保险",
          prod: "中国人寿",
          time: "18-24岁 满期25岁",
          level: "C"
        },
        {
          name: "新华成长阳光少儿教育年金保险",
          prod: "新华保险",
          time: "15-21岁 25岁 满期28岁",
          level: "C"
        },
        {
          name: "成长安心",
          prod: "大都会",
          time: "15-21岁 25岁 满期30岁",
          level: "C"
        },
        {
          name: "华彩前程",
          prod: "德华安顾",
          time: "18-21岁 满期25岁",
          level: "D"
        },
        {
          name: "中银星",
          prod: "中银三星",
          time: "18-24岁 满期28岁",
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
