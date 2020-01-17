<template>
  <div>
    <div class="bgf">
      <el-divider>
        <el-link type="info" plain size="mini">少儿经济型方案</el-link>
      </el-divider>
      <div class="bgf p-10 m-t-10">
        <div class="title"><b class="b">少儿保护伞经济型方案：</b></div>
        <div class="title">
          <el-link type="success" class="f-12-i"
          >预算千元左右 保障不差白菜价
          </el-link
          >
        </div>
        <base-table
                :countCulumn="countCulumn"
                showSummary="true"
                :tableConfig="tableConfig"
                :tableData="tableData"
        ></base-table>
        <base-tableFooter
                :tableData="tableData"
                :resource="tableData"
                label="payment"
        ></base-tableFooter>
        <div class="table-block m-t-10 row-align-center">
          <el-button type="success" round size="mini" class="row-align-center"
                     @click="$router.push({path:'/children/healty/economicCase'})">经济型方案 点击进入
          </el-button>
        </div>
      </div>

      <div class="bgf p-10 m-t-10">
        <div class="bg-light-green p-10">

          <div class="title text-center">
            <b class="b">意外险</b>
          </div>

          <div class="article-block">
            <p>产品名称：平安少儿综合意外险 基础版</p>
            <p>承保公司：中国平安</p>
            <p>平安少儿综合意外险 ，可以闭眼买的儿童意外险，来自平安，每年保费只要60块。
            </p>
            <p>不幸意外死亡，赔20万；意外伤残，按伤残等级赔钱。</p>
            <p>当然，娃的意外险，重点关注意外医疗。小顽童挺优秀，0元起赔，报销比例100%，最高报1万，社保外的自费项目也能报。</p>
            <div class="title text-center">
              <b class="g-error text-center b">
                你若购买首年保费：60元
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "economicCase",
    data() {
      return {
        countCulumn: ["age0", "age5"],
        tableConfig: [
          {
            label: "保险类型",
            value: "type"
          },
          {
            label: "产品名称",
            value: "name"
          },
          {
            label: "保额",
            value: "money"
          },
          {
            label: "保障期限",
            value: "year"
          },
          {
            label: "缴费年限",
            value: "yearValue"
          },
          {
            label: "年交保费（男宝）",
            secondTh: [
              {
                label: "0岁",
                value: "age0"
              },
              {
                label: "5岁",
                value: "age5"
              }
            ]
          }
        ],
        tableData: [
          {
            type: "中国人保",
            name: "好医保·长期医疗（新版）",
            money: 21,
            year: 12,
            yearValue: 12,
            age0: 23,
            age5: 24
          },
          {
            type: "中国人保",
            name: "好医保·长期医疗（新版）",
            money: 21,
            year: 12,
            yearValue: 12,
            age0: 66,
            age5: "78"
          }
        ]
      };
    }
  };
</script>

<style scoped>

</style>
