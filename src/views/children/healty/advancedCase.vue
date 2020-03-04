<template>
  <div>
    <div class="bgf">
      <el-divider>
        <el-link type="info" plain size="mini">少儿进阶型方案</el-link>
      </el-divider>
      <div class="bgf p-10 m-t-10">
        <div class="title">
          <el-link type="success" class="f-12-i"
            >预算三千元左右 给娃一辈子的重疾保障
          </el-link>
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
        <div class="bg-light-green p-10">
          <div class="title text-center">
            <b class="b">意外险</b>
          </div>

          <div class="article-block">
            <p>产品名称：平安少儿综合意外险 基础版</p>
            <p>承保公司：中国平安</p>
            <p>
              平安少儿综合意外险
              ，可以闭眼买的儿童意外险，来自平安，每年保费只要60块。
            </p>
            <p>不幸意外死亡，赔20万；意外伤残，按伤残等级赔钱。</p>
            <p>
              当然，娃的意外险，重点关注意外医疗。小顽童挺优秀，0元起赔，报销比例100%，最高报1万，社保外的自费项目也能报。
            </p>
            <div class="title text-center">
              <b class="g-error text-center b">
                你若购买首年保费：60元
              </b>
            </div>

            <div class="table-block m-t-10 row-align-center">
              <el-button
                type="success"
                round
                size="mini"
                class="row-align-center"
                @click="$router.push({ path: '/children/healty/economicCase' })"
                >该款产品在线销售通道----点击进入
              </el-button>
            </div>
          </div>
        </div>
      </div>

      <div class="bgf p-10">
        <div class="bg-light-green p-10">
          <div class="title text-center">
            <b class="b">意外险备选产品</b>
          </div>

          <div class="article-block">
            <p>产品名称：平安小顽童2</p>
            <p>承保公司：中国平安</p>
            <p>
              平安小顽童，可以闭眼买的儿童意外险，来自平安，每年保费只要60块。
            </p>
            <p>不幸意外死亡，赔20万；意外伤残，按伤残等级赔钱。</p>
            <p>
              当然，娃的意外险，重点关注意外医疗。小顽童挺优秀，0元起赔，报销比例100%，最高报1万，社保外的自费项目也能报。
            </p>
            <div class="title text-center">
              <b class="g-error text-center b">
                你若购买首年保费：70元
              </b>
            </div>

            <div class="table-block m-t-10 row-align-center">
              <el-button
                type="success"
                round
                size="mini"
                class="row-align-center"
                @click="$router.push({ path: '/' })"
                >备选产品在线销售通道----点击进入
              </el-button>
            </div>
          </div>
        </div>
      </div>

      <div class="bgf p-10">
        <div class="bg-light-green p-10">
          <div class="title text-center">
            <b class="b">终身重疾险 </b>
          </div>

          <div class="article-block">
            <p>产品名称：妈咪保贝</p>
            <p>承保公司：复星联合健康保险</p>
            <p>终身儿童重疾险的「顶配」。终身保，还加上了儿童特定疾病。</p>
            <p>当然，罕见病的发病率极低，属于锦上添花。</p>
          </div>
          <div>
            <p>
              <img src="../../../assets/u24.png" class="w-100-c" />
            </p>
          </div>
          <div class="article-block">
            <p>
              妈咪保贝，第一款保中症的儿童重疾险，重中轻疾病保障齐全，重疾赔1次，中症、轻症都可以赔2次。不幸死亡，退已交保费。
            </p>
            <p>18种少儿特定重疾，额外赔50万。加上重疾保额，一共赔100万。</p>
            <p>
              而且，这些疾病的含金量相当高。16种少儿高发的疾病，妈咪保贝覆盖了15种。
            </p>
            <p>
              另外，5种少儿罕见病，额外赔100万。这5种罕见病也在重疾清单里，得了罕见病，加上重疾保额，一共赔150万。
            </p>
            <div class="title text-center">
              <b class="g-error text-center b">
                你若购买首年保费：2460元
              </b>
            </div>

            <div class="table-block m-t-10 row-align-center">
              <el-button
                type="success"
                round
                size="mini"
                class="row-align-center"
                @click="$router.push({ path: '/' })"
                >该款产品在线销售通道----点击进入
              </el-button>
            </div>
          </div>
        </div>
      </div>

      <div class="bgf p-10">
        <div class="bg-light-green p-10">
          <div class="title text-center">
            <b class="b">百万医疗险</b>
          </div>

          <div class="article-block">
            <p>产品名称：尊享e生2019版</p>
            <p>承保公司：众安保险公司</p>
            <p>
              尊享e生2019版。住院报销额度更高，增值服务更多，质子重离子能100%报销。
            </p>
            <div>
              <p>
                <img src="../../../assets/u25.jpg" class="w-100-c" />
              </p>
            </div>
            <p>全家一起下单，一家子共享1万免赔额，但全家得同时符合健康告知！</p>
            <p>尊享e生2019版，健康告知严格到哭，不符合的就投奔尊享e生旗舰版吧。健告宽松一点，保障略有差异，但也能全家共享免赔额。</p>
            <p>儿童投保方案，没优选旗舰版，是因为5-10岁的孩子，2019版保费更低。</p>


            <div class="title text-center">
              <b class="g-error text-center b">
                你若购买首年保费：266元
              </b>
            </div>

            <div class="table-block m-t-10 row-align-center">
              <el-button
                type="success"
                round
                size="mini"
                class="row-align-center"
                @click="$router.push({ path: '/' })"
                >备选产品在线销售通道----点击进入
              </el-button>
            </div>
          </div>
        </div>
      </div>

      <div class="bgf p-10">
        <div class="bg-light-green p-10">
          <div class="title text-center">
            <b class="b">百万医疗险备选产品</b>
          </div>

          <div class="article-block">
            <p>产品名称：好医保·长期医疗险</p>
            <p>承保公司：支付宝保险公司</p>
            <p>
              好医保·长期医疗，保障全，保费低，健康告知宽松。住院最高可以报销200万，社保不报的自费药、进口药，都能报销。
            </p>

            <p>
              注意有1万免赔额，社保报销完，再自费1万，其他的好医保100%报销。不过保证6年续保，6年共享1万免赔额，6年内累计住院、自费破万就能报，变相降低理赔门槛。
            </p>
            <p>
              如果是因为癌症等100种重疾住院，最高能报销400万，0免赔额。质子重离子治疗，也能报销60%，这是治疗癌症最先进的技术。
            </p>
            <div class="title text-center">
              <b class="g-error text-center b">
                你若购买首年保费：166元
              </b>
            </div>

            <div class="table-block m-t-10 row-align-center">
              <el-button
                type="success"
                round
                size="mini"
                class="row-align-center"
                @click="$router.push({ path: '/' })"
                >备选产品在线销售通道----点击进入
              </el-button>
            </div>
          </div>
        </div>
      </div>

      <div class="bgf p-10">
        <div class="bg-light-green p-10">
          <div class="title text-center">
            <b class="b">小额住院医疗险</b>
          </div>

          <div class="article-block">
            <p>产品名称：平安少儿住院万元护</p>
            <p>承保公司：中国平安</p>
            <p>平安少儿住院万元护，只要有医保，保费通通只要100块。</p>

            <p>一年内，在二级及以上公立医院住院，0免赔额，累计能报销1万。</p>
            <p>社保范围内的费用报销90%，社保不管的自费药报销60%。</p>
            <p>
              还附赠一份意外保障，1万保额，意外死亡赔1万，意外伤残按伤残等级赔钱。
            </p>
            <div class="title text-center">
              <b class="g-error text-center b">
                你若购买首年保费：100元
              </b>
            </div>

            <div class="table-block m-t-10 row-align-center">
              <el-button
                type="success"
                round
                size="mini"
                class="row-align-center"
                @click="$router.push({ path: '/' })"
                >备选产品在线销售通道----点击进入
              </el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="bgf p-10">
        <div class="bg-light-green p-10">
          <div class="title text-center">
            <b class="b">小额住院医疗险备选产品</b>
          </div>

          <div class="article-block">
            <p>产品名称：平安少儿住院万元护</p>
            <p>承保公司：中国平安</p>
            <p>平安小顽童，可以闭眼买的儿童意外险，来自平安，每年保费只要60块。</p>

            <p>不幸意外死亡，赔20万；意外伤残，按伤残等级赔钱。</p>
            <p>当然，娃的意外险，重点关注意外医疗。小顽童挺优秀，0元起赔，报销比例100%，最高报1万，社保外的自费项目也能报。</p>

            <div class="title text-center">
              <b class="g-error text-center b">
                你若购买首年保费：120元
              </b>
            </div>

            <div class="table-block m-t-10 row-align-center">
              <el-button
                      type="success"
                      round
                      size="mini"
                      class="row-align-center"
                      @click="$router.push({ path: '/' })"
              >备选产品在线销售通道----点击进入
              </el-button>
            </div>
          </div>
        </div>
      </div>

      <div class="bgf p-10">
        <div class="title text-center"><b class="b">最后结束语：</b></div>
        <div class="article-block">
          根据您所填信息建议您使用：
          <b class="g-error">
            进阶型方案
          </b>
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
      countCulumn: ["year_payment"],
      tableConfig: [
        {
          label: "保险类型",
          value: "insure_ver"
        },
        {
          label: "产品名称",
          value: "insure_name",
          width: "50px"
        },
        {
          label: "保额",
          value: "insure_quota",
          width: "50px"
        },
        {
          label: "保障期限",
          value: "insure_endyear",
          width: "40px"
        },
        {
          label: "缴费年限",
          value: "paytotal_year",
          width: "40px"
        },
        {
          label: "年交保费",
          width: "60px",
          value: "year_payment",
          secondTh: [
            {
              label: "男宝0岁",
              value: "year_payment",
              width: "30px"
            }
          ]
        }
      ],
      tableData: []
    };
  },
  mounted() {
    if (this.$store.state.formType == "family") {
      this.dealTableHeader(this.$store.state.baseinfo);
    } else {
      this.dealTableParam();
    }
    this.reSiteTableData();
  },
  methods: {
    dealTableParam() {
      let val = this.$route.query;
      let sex;
      sex = val.sex == 1 ? "男" : "女";
      this.tableConfig[5].secondTh[0] = {
        label: `${sex}宝${val.age}岁`,
        value: "year_payment",
        width: "30px"
      };
    },
    dealTableHeader(data) {
      let val;
      val = data;

      switch (this.$store.state.hasChildNum) {
        case 1:
        {
          let sex1 = val.childFirst_sex == 1 ? "男" : "女";
          this.tableConfig[5].secondTh[0] = {
            label: `${sex1}宝${val.childFirst_age}岁`,
            value: "year_payment"
          };
        }
          break;
        case 2:
        {
          let sex1 = val.childFirst_sex == 1 ? "男" : "女";
          let sex2 = val.childSecond_sex == 1 ? "男" : "女";
          let record1 = {
            label: `大孩${sex1}宝${val.childFirst_age}岁`,
            value: "year_payment",
            width: "30px"
          };
          let record2 = {
            label: `二孩${sex2}宝${val.childSecond_age}岁`,
            value: "year_payment01",
            width: "30px"
          };
          this.countCulumn.push("year_payment01");
          this.tableConfig[5].secondTh[0] = record1;
          this.tableConfig[5].secondTh.push(record2);
        }
          break;
      }
    },
    reSiteTableData() {
      this.tableData = this.$store.state.childCasetableData; //经济型
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
