<template>

  <el-table
      size="mini"
      border
      :show-summary="showSummary"
      :data="tableData"
      :row-class-name="tableRowClassName"
      :summary-method="getSummaries"
    >
      <el-table-column
        v-for="(item, index) in tableConfig"
        :prop="item.value ? item.value : ''"
        :key="index"
        :width="item.width ? item.width : ''"
        :label="item.label"
        align='center'
      >
        <template v-if="item.secondTh">
          <el-table-column
            align='center'
            v-for="(itm, inx) in item.secondTh"
            :key="inx"
            :prop="itm.value ? itm.value : ''"
            :width="item.width ? item.width : ''"
            :label="itm.label"
          ></el-table-column>
        </template>
      </el-table-column>
     </el-table>

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
  created() {},
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
      const { columns, data } = param;
      const sums = [];
      const countArr = this.countCulumn.join(",");
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "总计";
          return;
        }
        const values = data.map(item => {
          return parseFloat(item[column.property])
        });

        if (countArr.includes(column.property)) {
          sums[index] = values.reduce((prev, curr) => {
            if(typeof curr=='number' && !isNaN(curr)){
              return prev + curr;
            }else{
              return prev;
            }
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

<style scoped></style>
