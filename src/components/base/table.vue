<template>
  <div>
    <el-table
            :data="tableData"
            :height="height"
            :row-class-name="tableRowClassName"
    >
      <el-table-column v-for="(item,index) in tableConfig"
                       :prop="item.value"
                       :key="index"
                       :label="item.label"></el-table-column>
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
      height:{
        require: false,
        default: 'auto'
      }
    },
    created() {

    },
    data() {
      return {

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

<style scoped>

</style>
