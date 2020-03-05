<template>
  <div>
    <div class="bgf p-10">
      <el-divider>
        <el-link type="info" plain size="mini">国内教育金方案</el-link>
      </el-divider>
    </div>


    <div class="bgf p-10 ">
      <div class="title">
        <el-link class="f-12-i"
        >预算万元左右 国内上学无忧
        </el-link>
      </div>
      <div class="table-block row-align-center">
        <el-link class="title text-center row-align-center" type="warning"
        >0岁宝宝，共存10万
        </el-link>
      </div>
      <base-table
              :tableConfig="tableConfig"
              :tableData="tableData"
      ></base-table>
    </div>


    <div class="bgf p-10 m-t-10">
      <div class="title"><b class="b">方案详解：</b></div>
      <div>
        <p>
          <img src="../../../assets/u26.jpg" class="w-100-c"/>
        </p>
      </div>
      <div class="article-block">
        <p>承保公司：</p>
        <p>
          信美人寿相互保险社（简称“信美相互”）
          于2017年5月5日正式获得中国保监会开业批复，是国内首家成立的相互人寿保险组织，主要发起会员为<b class="g-error">阿里巴巴蚂蚁金服、天弘基金等九家企业</b>。作为一家相互保险社，信美同样接受银保监会的监管：
        </p>
        <p>
          天天向上，有大学、深造、大学&深造三个计划可选，不管选哪个，都能领教育金、满期金，如果不幸身故，有身故保险金。
        </p>
        <p>表里信息有点多，看不懂也没关系，下边给你介绍重点： </p>
        <p class="g-error"> 1、回报高，拿到手的钱多</p>
        <p class="g-error">2、现金价值高，有急用也不怕</p>
        <p class="g-error">3、可灵活转计划、追加保费</p>
      </div>
    </div>


    <div class="bgf p-10 m-t-10">
      <div class="title"><b class="b">天天向上，好在哪？</b></div>
      <div class="article-block">
        <p>
          作为孩子的教育金，要求很严格，必须符合这几个原则：
        </p>
        <p>1、不仅要安全，拿到手的钱还要多，如果交10万只能领12万，那都懒得操心。</p>
        <p>2、能保证一定的现金流，有十万火急的事，也能拿一笔钱救急。</p>
        <p>3、产品要灵活，人的想法都是会变的，最好产品也能根据自己的意愿来调整。</p>
        <p>天天向上是款年金保险，交多少钱、拿多少钱、什么时候拿，合同里白纸黑字都写着，即使外面的经济形势不好，它该给多少就是多少，童叟无欺。</p>
        <p>安全性这点，一点都不用担心。在回报、灵活性、福利等方面，也是同类产品中出众的：</p>
        <p class="g-error">1、回报高，拿到手的钱多</p>
        <p>正常情况下，娃拿到手的钱要比交上去的保费多很多。</p>
        <p>举个例子，给刚出生的小公主买【大学教育金】计划，年交5万，连交3年，一共投入15万。</p>
        <p>孩子上大学，18、19、20、21岁时，每年能拿3万，4年一共12万，这些钱可以用来交学费、当生活费。</p>

        <p>30岁时，再一次性拿25万的满期金，可以拿来成家或者创业。</p>
        <p>一共拿到手12+25=37万，接近所交保费的2.5倍。</p>
        <p>有的朋友可能听过IRR（内部回报率），上面的情况，IRR有3.7%。</p>
        <p>不同购买情况会有区别，IRR最高能到4%，而且是长期复利，在同类产品里表现很优秀。</p>
        <p>如果孩子不幸身故，保险公司也会给一笔钱，在已交保费和现金价值里，挑多的那个给。</p>

        <p>还是前面的例子，假设不幸28岁身故，那时现金价值24万，超过已交保费，这个钱会给到家长。这份保单一共拿了大学12万+身故24万=36万。</p>

        <p class="g-error">2、现金价值高，有急用也不怕</p>

        <p>很多家长会担心，交这么多钱进去，得到娃上大学才能领，中途有事要用钱怎么办？</p>

        <p>有现金价值，这也不是问题。</p>

        <p>它有两种操作方法，一是退保，直接拿到当时的现价，但退了之后不能再领教育金，非特殊情况，都不建议退。</p>

        <p>还可以选择保单贷款来救急，最多贷现金价值的80%出来。</p>

        <p>现金价值越高，能贷的钱越多，而天天向上的一大亮点就是现金价值很高。</p>

        <p>给0岁女孩买大学教育金，分3年交费，第4年现金价值就超过所交保费。</p>

        <p>如果一次性交费，首年现金价值就达到保费的99.864%，交10万，现价99864元，第二年就能超过10万，最高能贷8万出来：</p>
      </div>
      <div>
        <p>
          <img src="../../../assets/u27.jpg" class="w-100-c"/>
        </p>
      </div>

      <div class="article-block">
        <p>贷款流程也很简单、便捷，在保险公司的APP上就能申请，通过后一般1个工作日就能到账。</p>

        <p>一次最长能贷180天，到期归还本息就行。到期后资金周转有问题，还可以续贷。</p>

        <p>贷款利率还很低，现在仅为年化4.98%（具体以贷款时利率为准），应急没问题。</p>

        <p>而且，只要正常还上，贷款不会影响到保单利益，该涨的现金价值依旧涨，该拿的钱照样拿。</p>

        <p class="g-error">3、可灵活转计划、追加保费</p>

        <p>天天向上这款产品，设计很灵活，想换计划改领钱时间，或者觉得买少了，多加点钱进去，都OK。</p>

        <p>天天向上一共有三种计划可选，领钱的时间不一样，大学教育金是18岁开始领4年，深造教育金是22岁开始领3年，大学&深造教育金是18岁开始领7年。</p>

        <p>现在选了大学教育金计划，以后想转深造，或者大学&深造计划，也可以。</p>

        <p>在娃18岁前，向保险公司申请变更就行。</p>

        <p>后面经济宽裕了，想增加教育金保额，还可以追加保费。不过，目前只有趸交的才可以追加。（以后可能会有变动，具体以保险公司当时的规则为准，建议当下就买好买足）</p>


        <p>追加金额最低100元起，年龄符合要求就行。比如，买的是大学教育金，孩子未满12周岁就能追加。</p>

      </div>

    </div>


    <div class="bgf p-10 m-t-10">
      <div class="title"><b class="b">最后结束语：</b></div>
      <div class="article-block">
        此套方案为国内教育方案：
        <b class="g-error">
          国内教育方案
        </b>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "case",
    data() {
      return {

        tableConfig: [
          {
            label: "时间",
            value: "time",
            width: "80px"
          },
          {
            label: "一次性存100万",
            value: "onceIncome",
            width: "80px"
          },
          {
            label: "分5年每年存20万",
            value: "year5",
            width: "80px"
          },
          {
            label: "分10年每年存10万",
            value: "year10"
          }
        ],
        tableData: [
          {
            time: "大学18-21岁领取部分",
            onceIncome: "2万*4年",
            year5: "2万*4年",
            year10: "2万*4年"
          },
          {
            time: "深造22-24岁",
            onceIncome: "2万*3年",
            year5: "2万*3年",
            year10: "2万*3年"
          },
          {
            time: "满期领取剩余部分",
            onceIncome: "113200元",
            year5: "77560元",
            year10: "52490元"
          },
          {
            time: "累计可领取",
            onceIncome: "253200元",
            year5: "217560元",
            year10: "192490元"
          }
        ]
      };
    },
    mounted() {
      let record1 = {
        label: "大孩男宝10岁",
        value: "age0",
        width: "30px"
      };
      let record2 = {
        label: "二孩男宝15岁",
        value: "age5",
        width: "30px"
      };
      switch (this.$store.state.hasChildNum) {
        case 0: {
          this.countCulumn.push("age5");
          this.tableConfig[5].secondTh[0].label = "男宝10岁";
        }
          break;
        case 1: {
          this.tableConfig[5].secondTh[0] = {
            label: "男宝10岁",
            value: "age0",
            width: "30px"
          };
        }
          break;
        case 2: {
          this.countCulumn.push("age5");
          this.tableConfig[5].secondTh[0] = record1;
          this.tableConfig[5].secondTh.push(record2);
        }
          break;
      }
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
