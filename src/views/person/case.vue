<template>
  <div>
    <div class="bgf">
      <el-divider>
        <el-link type="info" plain size="mini">个人保护伞规划</el-link>
      </el-divider>
    </div>

    <div class="bgf p-10">
      <div class="title"><b class="b">规划前言</b></div>
      <div class="article-block">
        我们面临的风险，不外乎生病+意外，能提供保护伞的保险，只需要根据经济状况进行额度或年限调整即可。
        严肃提醒：买任何商业保险前，最好先把医保给办喽。大病小病、门诊住院，都能报销一些。手握医保，买商业医疗险也更便宜。
        <p class="g-error">
          【您的医保目前是在保状态，不要忘记续保即可】（此句话为动态显示或隐藏）
        </p>
      </div>
    </div>

    <div class="bgf p-10 m-t-10">
      <div class="title"><b class="b">个人保护伞规划所需险种概述：</b></div>
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
      <div class="title"><b class="b">个人保护伞经济型方案：</b></div>
      <div class="title">
        <el-link type="success" class="f-12-i"
          >预算千元左右 保障不差白菜价</el-link
        >
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
    </div>

    <div class="bgf p-10 m-t-10">
      <div class="title"><b class="b">个人保护伞进阶型方案：</b></div>
      <div class="title">
        <el-link type="success" class="f-12-i"
          >预算三千元左右 给娃一辈子的重疾保障</el-link
        >
      </div>
      <base-table
        :showSummary="true"
        :countCulumn="countCulumn"
        :tableConfig="tableConfig"
        :tableData="tableData1"
      ></base-table>
      <base-tableFooter
        :tableData="tableData1"
        :resource="tableData1"
        label="payment"
      ></base-tableFooter>
    </div>

    <div class="bgf p-10 m-t-10">
      <div class="title"><b class="b">个人保护伞充分保障型方案：</b></div>
      <div class="title">
        <el-link type="success" class="f-12-i"
          >每年5000元左右 坐拥400万+顶配保障</el-link
        >
      </div>
      <base-table
        :showSummary="true"
        :countCulumn="countCulumn"
        :tableConfig="tableConfig"
        :tableData="tableData2"
      ></base-table>
      <base-tableFooter
        :tableData="tableData2"
        :resource="tableData2"
        label="payment"
      ></base-tableFooter>
    </div>

    <div class="bgf p-10 m-t-10">
      <div class="title"><b class="b">最后结束语：</b></div>
      <div class="article-block">
        根据您所填信息建议您使用：
        <b class="g-error">
          进阶型方案
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
      countCulumn: ["year_payment"],
      tableConfig: [
        {
          label: "保险类型",
          value: "insure_version",
          width: "50px"
        },
        {
          label: "产品名称",
          value: "insure_name"
        },
        {
          label: "保额",
          value: "insure_quota",
          width: "50px"
        },
        {
          label: "保额期限",
          value: "insure_endyear",
          width: "40px"
        },
        {
          label: "缴费年限",
          value: "paytotal_year",
          width: "40px"
        },
        {
          label: "年缴保费(元)",
          value: "year_payment",
          width: "86px",
          secondTh: [
            {
              label: "",
              value: "year_payment",
              width: "30px"
            }
          ]
        }
      ],
      tableData: [],
      tableData1: [],
      tableData2: [],
    };
  },
  mounted(){
    this.reSiteTableData();
  },
  methods: {
    reSiteTableData(){
      let val=this.$route.query;
      let sex=val.sex==1?'男':'女';
      this.tableConfig[5].secondTh[0].label=`${sex} 性 ${val.age}岁`;
      let tableData=this.$store.state.formResponseData.data;
      this.tableData=this.dealTableData(tableData.cheapInsure); //经济型
      this.tableData1=this.dealTableData(tableData.mediumInsure);//进阶型
      this.tableData2=this.dealTableData(tableData.highInsure);//豪华型

    },

    dealType(row){
      let obj={
        type:'',
        time:'',
      };
      switch (row.insure_version) {
        case 0:{ obj.type='意外险'; obj.time=row.pay_year;}break;
        case 1:{obj.type='重疾险'; obj.time=row.pay_year;}break;
        case 2:{obj.type='百万医疗险'; obj.time=row.ensure_pay;}break;
        case 3:{obj.type='寿险'; obj.time=row.pay_year;}break;
        case 4:{obj.type='少儿小额医疗'; obj.time=row.ensure_pay;}break;
      }

      return obj;
    },
    dealTableData(data){
      let tableData=[];
      let that=this;
      if(data.length){
        for(let i in  data){
          let item=data[i];
          let rowData=that.dealType(item);
          item.insure_version=rowData.type;
          item.year_payment=rowData.time;
          let insuranceTime=item.insure_desc.includes('/')?item.insure_desc.split('/'):'';
          item.insure_endyear=insuranceTime?insuranceTime[0].replace('保障',''):"";
          item.paytotal_year=insuranceTime?insuranceTime[1].replace('缴费',''):"";
          tableData.push(item);
        }
      }

      return tableData;
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
