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
            <b class="b">定期重疾险</b>
          </div>

          <div class="article-block">
            <p>产品名称：妈咪保贝（基础款）</p>
            <p>承保公司：复星联合健康保险</p>
            <p>
              预算有限的家庭，建议给娃买定期重疾险，保30年。保费便宜，等孩子二十来岁再补充新的重疾险，一般不难
            </p>
            <p>
              定期重疾险，一年也就几百块钱。这里选了新晋性价比之王，妈咪保贝。
            </p>
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
            <p>
              要是先得了某种轻症或中症，保险公司不仅赔钱，还能免掉后续的保费，但保单依然有效~
            </p>
            <p>
              妈咪保贝还有一个「忠诚客户权益」，定期重疾险到期后，可以续保「复联」旗下的其他终身重疾险。
            </p>
            <p>
              万一孩子在这30年间，身体出现异常、再也买不到其他重疾险，至少还有「复联」家的产品可买。
            </p>
            <div class="title text-center">
              <b class="g-error text-center b">
                你若购买首年保费：500元
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
            <p>产品名称：好医保·长期医疗险</p>
            <p>承保公司：支付宝保险公司</p>
            <p>
              平安小顽童，可以闭眼买的儿童意外险，来自平安，每年保费只要60块。
            </p>
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
            <b class="b">百万医疗险备选产品</b>
          </div>

          <div class="article-block">
            <p>产品名称：好医保·长期医疗险2</p>
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
            <p>
              平安小顽童，可以闭眼买的儿童意外险，来自平安，每年保费只要60块。
            </p>

            <p>不幸意外死亡，赔20万；意外伤残，按伤残等级赔钱。</p>
            <p>
              当然，娃的意外险，重点关注意外医疗。小顽童挺优秀，0元起赔，报销比例100%，最高报1万，社保外的自费项目也能报。
            </p>

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
      countCulumn: ["age0"],
      tableConfig: [
        {
          label: "保险类型",
          value: "type",
          width: "40px"
        },
        {
          label: "产品名称",
          value: "name"
        },
        {
          label: "保额",
          value: "money",
          width: "50px"
        },
        {
          label: "保障期限",
          value: "year",
          width: "40px"
        },
        {
          label: "缴费年限",
          value: "yearValue",
          width: "40px"
        },
        {
          label: "年交保费",
          width: "60px",
          secondTh: [
            {
              label: "男宝0岁",
              value: "age0",
              width: "30px"
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
          age0: "23元",
          age5: "24元"
        },
        {
          type: "中国人保",
          name: "好医保·长期医疗（新版）",
          money: 21,
          year: 12,
          yearValue: 12,
          age0: "23元",
          age5: "24元"
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
      case 0:
        {
          this.countCulumn.push("age5");
          this.tableConfig[5].secondTh[0].label = "男宝10岁";
        }
        break;
      case 1:
        {
          this.tableConfig[5].secondTh[0] = {
            label: "男宝10岁",
            value: "age0",
            width: "30px"
          };
        }
        break;
      case 2:
        {
          this.countCulumn.push("age5");
          this.tableConfig[5].secondTh[0] = record1;
          this.tableConfig[5].secondTh.push(record2);
        }
        break;
    }
  }
};
</script>
