<template>
  <div class="table-footer m-t-10">
    <b class="m-r-10">安心选</b>
    <span>做最硬核的评测 说最真的话</span>
    <!--<span class="count">总计 {{count}}元</span>-->
  </div>
</template>

<script>
export default {
  name: "tableFooter",
  props: {
    tableData: {
      require: true,
      default: []
    },
    label: {
      require: true,
      default: ""
    }
  },
  data() {
    return {
      count: 0
    };
  },
  mounted() {
    this.calc();
  },
  methods: {
    calc() {
      let that = this;
      this.tableData.forEach(item => {
        Object.keys(item).forEach(itm => {
          if (itm == that.label) {
            that.count += Number(item[itm]);
          }
        });
      });
    }
  }
};
</script>

<style scoped></style>
