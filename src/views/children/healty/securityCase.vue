<template>
  <div>
    <div class="bgf">
      <el-divider>
        <el-link type="info" plain size="mini">少儿充分保障型方案</el-link>
      </el-divider>
      <div class="bgf p-10 m-t-10">
        <div class="title">
          <el-link type="success" class="f-12-i"
            >每年5000元左右 坐拥400万+顶配保障
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
            <b class="b">终身重疾险 </b>
          </div>

          <div class="article-block">
            <p>产品名称：慧馨安-健康保少儿版</p>
            <p>承保公司：昆仑健康保险</p>
            <p>终身儿童重疾险的「顶配」。终身保，还加上了儿童特定疾病。</p>
            <p>
              这是一款典型的少儿重疾险，含有全面的轻、重、中疾病保障，并对于少儿多发的白血病、严重手足口、川崎病等等实施了双赔约定。
            </p>
            <p>
              第一点：常见轻疾的覆盖，昆仑健康的慧馨安健康保少儿重疾险，对于高发重症对应的5类重疾都提供，且值得一提的是把【轻微脑中风后遗症】划分到中症赔付里，之前赔基本保额30%提升到赔保额50%，也其他少儿重疾险对于这类疾病就是买30万，本身只赔9万元，现在这款产品对于轻微脑中风后遗症可以赔15万，这是一大亮点。
            </p>
            <p>
              第二点：白血病是否翻倍赔，少儿目前第一首发重疾是白血病，如果是做骨髓移植+康排异治疗，医疗费轻松上百万，在这款产品中，白血病即属于“恶性肿瘤”，也属于“少儿特定疾病”，可以赔双赔保额，也就是重疾保额买50万元，赔100万元。
            </p>
            <p>
              第三点：特色亮点，附加恶性肿瘤保险金：疾病定义宽松，对于癌症的转移、持续、复发都能赔，且首次发生癌症，间隔3年赔付保额100%，非癌症间隔180天就能赔付基本保额。孩子年龄小，未来的路还有诸多不确定因素，加上恶性肿瘤多赔约定，相对会更保险；
            </p>
            <p>
              特别关爱保险金：这一条区别于其他的同类产品，约定为22-70周岁，轻疾、重疾和中症能够翻倍保额，还是非常实用，适用于孩子长大之后如果发生慢性病，买健康险就比较困难了，这条可以加大重疾保额使用。
            </p>
            <p>
              对于全面保障的需求而言，从风险规避、终身全面保障等多个维度来看，这款产品比较适合家庭经济条件丰厚且对孩子未来健康规划偏完美型的用户选择。
            </p>
            <p>
              此外，如对保障的额度对还不够满意，作为重疾险，其实还可的以在购买慧馨安-健康保少儿版的基础之上再选择同时购买妈咪宝贝的基础款每年增加500元的保费，保额则再增加50万。
            </p>

            <div class="title text-center">
              <b class="g-error text-center b">
                你若购买首年保费：3500元
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
          </div>
          <p>
            <img src="../../../assets/u46.jpg" class="w-100-c" />
          </p>
          <div class="article-block">
            <p>全家一起下单，一家子共享1万免赔额，但全家得同时符合健康告知！</p>
            <p>
              尊享e生2019版，健康告知严格到哭，不符合的就投奔尊享e生旗舰版吧。健告宽松一点，保障略有差异，但也能全家共享免赔额。
            </p>
            <p>
              儿童投保方案，没优选旗舰版，是因为5-10岁的孩子，2019版保费更低。
            </p>
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
  name: "securityCase",
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
