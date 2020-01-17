<template>
  <div>
    <el-table
            border
            :show-summary="showSummary"
            :data="tableData"
            :height="height"
            :row-class-name="tableRowClassName"
            :summary-method="getSummaries"
    >
      <el-table-column v-for="(item,index) in tableConfig"
                       :prop="item.value?item.value:''"
                       :key="index"
                       :label="item.label">
        <template v-if="item.secondTh">
          <el-table-column v-for="(itm,inx) in item.secondTh"
                           :key="inx"
                           :prop="itm.value?itm.value:''"
                           :label="itm.label"
          ></el-table-column>
        </template>
      </el-table-column>
      <!--<el-table-column-->
      <!--prop="person"-->
      <!--label="30岁男性（50万）"-->
      <!--&gt;</el-table-column>-->
      <!--<el-table-column prop="special" label="产品亮点"></el-table-column>-->
      <!--<el-table-column prop="level" label="等级"></el-table-column>-->
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "BaseTable",
    props: {
      tableData: {
        require: true,
        default: []
      },
      tableConfig: {
        require: true,
        default: []
      },
      countCulumn: {
        require: false,
        default() {
          return [];
        }
      },
      height: {
        require: false,
        default: "auto"
      },
      showSummary: {
        require: false,
        default: false
      }
    },
    created() {

    },
    data() {
      return {};
    },
    methods: {
      tableRowClassName({ rowIndex }) {
        if (rowIndex % 2 == 0) {
          return "event-row";
        }
        return "";
      },
      getSummaries(param) {
        //debugger
        const { columns, data } = param;
        const sums = [];
        const countArr = this.countCulumn.join(",");
        console.log(countArr);
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = "总计";
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (countArr.includes(column.property)) {
            sums[index] = values.reduce((prev, curr) => {
              console.log(prev, curr);
              return prev + curr;

            }, 0);
            sums[index] += " 元";
          } else {
            sums[index] = "";
          }
        });

        return sums;

      }
    }
  };
</script>

<style scoped>

</style>
