<template>
  <div>
    <div class="bgf p-10">
      <el-divider>
        <el-link type="info" plain size="mini">保险产品对比流程</el-link>
      </el-divider>
    </div>
    <div class="bgf p-10">
      <div class="title">1、对比流程采用的保险产品来自以下保险公司。</div>
      <div class="p-10">
        <img class="w-100-c" src="../../../assets/1.png" />
      </div>
    </div>

    <div class="bgf p-10 m-t-10">
      <div class="title">2、知识普及：</div>
      <div class="article-block">
        在中国开办的保险公司均由中国银保监会托底，中国政府做信任背书，均有偿付能力，不存在破产无法兑现偿付的问题。真实的差别是产品保障范围、价格及附加服务的差异。本规划工具采用的对比产品均为目前市场上销售的合规产品。
      </div>
    </div>

    <div class="bgf p-10 m-t-10">
      <div class="title">3、市场在售少儿重疾类产品对比（价格排名）：</div>
      <div class="table-block">
        <el-button type="primary" round size="mini">下载本表</el-button>
      </div>
      <div class="m-t-10">
        <base-table
          :tableConfig="tableConfig"
          :tableData="tableData"
        ></base-table>
      </div>
    </div>

    <div class="bgf p-10 m-t-10">
      <div class="title">4、市场在售少儿医疗险对比（性价比排名）：</div>
      <div class="table-block row-align-center">
        <el-link class="title text-center row-align-center" type="warning"
          >少儿百万医疗险性价比排名
        </el-link>
      </div>
      <div class="table-block">
        <el-button type="primary" round size="mini">下载本表</el-button>
      </div>
      <div class="m-t-10">
        <base-table
          :tableConfig="tableConfig1"
          :tableData="tableData1"
        ></base-table>
      </div>
    </div>

    <div class="bgf p-10 m-t-10">
      <div class="title">5、市场在售少儿重疾险排名（性价比排名）：</div>
      <div class="table-block row-align-center">
        <el-link class="title text-center row-align-center" type="warning"
          >少儿重疾险性价比排名
        </el-link>
      </div>
      <div class="table-block">
        <el-button type="primary" round size="mini">下载本表</el-button>
      </div>

      <div class="m-t-10">
        <base-table
          :tableConfig="tableConfig2"
          :tableData="tableData2"
        ></base-table>
      </div>
      <div class="m-t-10 row-align-center">
        <el-button
          class="row-align-center"
          size="mini"
          type="success"
          @click="goCase"
          >下一步 规划方案
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contrastList",
  data() {
    return {
      tableConfig: [
        {
          label: "公司",
          value: "name"
        },
        {
          label: "产品",
          value: "desc"
        },
        {
          label: "0岁男宝宝保障50万",
          value: "year",
          secondTh: [
            {
              label: "(保障期限)",
              value: "year"
            }
          ]
        },
        {
          label: "保费",
          value: "money"
        }
      ],
      tableConfig1: [
        {
          label: "公司",
          value: "name",
          width: "60px"
        },
        {
          label: "产品",
          value: "prod",
          width: "60px"
        },
        {
          label: "0岁宝宝有社保",
          value: "money",
          width: "60px"
        },
        {
          label: "产品亮点",
          value: "desc"
        },
        {
          label: "等级",
          value: "level"
        }
      ],
      tableConfig2: [
        {
          label: "公司",
          value: "name",
          width: "60px"
        },
        {
          label: "产品",
          value: "prod",
          width: "60px"
        },
        {
          label: "产品亮点",
          value: "desc"
        },
        {
          label: "等级",
          value: "level"
        }
      ],
      tableData: [
        {
          name: "和谐健康",
          desc: "大黄蜂（长期医疗版）",
          year: "30年",
          money: "410"
        },
        { name: "复星联合健康", desc: "妈咪保贝", year: "30年", money: "430" },
        { name: "横琴人寿", desc: "大黄蜂3号", year: "30年", money: "570" },
        { name: "瑞泰人寿", desc: "晴天保保", year: "30年", money: "575" },
        { name: "百年人寿", desc: "大黄蜂2号", year: "30年", money: "615" },
        { name: "瑞华保险", desc: "瑞华小佩奇", year: "30年", money: "640" },
        { name: "和谐健康", desc: "慧馨安", year: "30年", money: "665" },
        { name: "国华人寿", desc: "国华至尊保", year: "终身", money: "1486" },
        { name: "大家保险", desc: "超惠保", year: "终身", money: "1635" },
        { name: "和泰人寿", desc: "超级玛丽2020", year: "终身", money: "1890" },
        { name: "百年人寿", desc: "康惠保2020", year: "终身", money: "1900" },
        {
          name: "昆仑健康保险",
          desc: "慧馨安健康保",
          year: "终身",
          money: "1915"
        },
        {
          name: "弘康人寿",
          desc: "健康一生重疾A",
          year: "终身",
          money: "1940"
        },
        { name: "横琴人寿", desc: "大黄蜂3号", year: "终身", money: "1950" },
        { name: "瑞华保险", desc: "康瑞宝", year: "终身", money: "2010" },
        { name: "三峡人寿", desc: "达尔文2号", year: "终身", money: "2050" },
        {
          name: "信泰保险",
          desc: "超级玛丽2020MAX",
          year: "终身",
          money: "2055"
        },
        { name: "复星联合健康", desc: "妈咪保贝", year: "终身", money: "2100" },
        {
          name: "百年人寿",
          desc: "康惠保（旗舰版）",
          year: "终身",
          money: "2100"
        },
        {
          name: "昆仑健康保险",
          desc: "昆仑健康保",
          year: "终身",
          money: "2145"
        },
        { name: "百年人寿", desc: "康惠保", year: "终身", money: "2200" },
        { name: "中国人保", desc: "百病安心", year: "终身", money: "2266" },
        {
          name: "瑞泰人寿",
          desc: "超级玛丽（全民版）",
          year: "终身",
          money: "2295"
        },
        {
          name: "信美相互",
          desc: "爱加倍健康保障",
          year: "终身",
          money: "2355"
        },
        { name: "招商仁和人寿", desc: "仁爱相伴", year: "终身", money: "2435" },
        { name: "国华人寿", desc: "健康福重疾险", year: "终身", money: "2501" },
        {
          name: "泰康养老",
          desc: "健康有约约智选版",
          year: "终身",
          money: "2700"
        },
        { name: "国华人寿", desc: "盖世英雄", year: "终身", money: "2867" },
        { name: "弘康人寿", desc: "弘康倍倍加", year: "终身", money: "2955" },
        {
          name: "瑞泰人寿",
          desc: "小雨伞超级玛丽",
          year: "终身",
          money: "2965"
        },
        { name: "中国太平", desc: "福禄康瑞", year: "终身", money: "2966" },
        {
          name: "瑞泰人寿",
          desc: "多倍宝宝（原阿童木）",
          year: "终身",
          money: "2970"
        },
        { name: "长生人寿", desc: "长生福优加", year: "终身", money: "3035" },
        { name: "百年人寿", desc: "超倍保", year: "终身", money: "3050" },
        {
          name: "华夏人寿",
          desc: "常青树(多倍版)",
          year: "终身",
          money: "3066"
        },
        { name: "海保人寿", desc: "倍加尔保", year: "终身", money: "3085" },
        {
          name: "复星联合健康",
          desc: "备哆分1号",
          year: "终身",
          money: "3140"
        },
        {
          name: "光大永明",
          desc: "超级玛丽旗舰版",
          year: "终身",
          money: "3150"
        },
        { name: "广大永明", desc: "可爱多重疾", year: "终身", money: "3165" },
        { name: "光大永明", desc: "达尔文超越者", year: "终身", money: "3165" },
        { name: "光大永明", desc: "嘉多保", year: "终身", money: "3195" },
        { name: "同方全球", desc: "同佑E生", year: "终身", money: "3200" },
        {
          name: "同方全球",
          desc: "康健一生（多倍保）",
          year: "终身",
          money: "3233"
        },
        {
          name: "信泰保险",
          desc: "完美人生守护（尊享版）",
          year: "终身",
          money: "3285"
        },
        { name: "阳光人寿", desc: "i保C款", year: "终身", money: "3302" },
        {
          name: "百年人寿",
          desc: "康惠保（多倍版）",
          year: "终身",
          money: "3365"
        },
        { name: "泰康人寿", desc: "乐康宝", year: "终身", money: "3400" },
        { name: "弘康人寿", desc: "哆啦A保", year: "终身", money: "3411" },
        { name: "中英人寿", desc: "爱相随", year: "终身", money: "3443" },
        { name: "复星保德信", desc: "星满意重疾", year: "终身", money: "3495" },
        { name: "复星联合健康", desc: "倍吉星", year: "终身", money: "3505" },
        { name: "横琴人寿", desc: "横琴优康", year: "终身", money: "3550" },
        { name: "天安人寿", desc: "健康源（2019）", year: "", money: "" },
        { name: "增强版", desc: "", year: "终身", money: "3665" },
        { name: "信泰保险", desc: "百万守护", year: "终身", money: "3675" },
        {
          name: "中国平安",
          desc: "小福星（新版）",
          year: "终身",
          money: "3698"
        },
        {
          name: "太平洋保险",
          desc: "金诺人生(2018)",
          year: "终身",
          money: "3800"
        },
        { name: "泰康人寿", desc: "健康百分百D", year: "终身", money: "3950" },
        { name: "泰康人寿", desc: "惠健康", year: "终身", money: "4000" },
        {
          name: "新华保险",
          desc: "健康无忧（尊享）",
          year: "终身",
          money: "4053"
        },
        { name: "长城人寿", desc: "吉康人生", year: "终身", money: "4100" },
        {
          name: "太平洋保险",
          desc: "金福人生（少儿版）",
          year: "终身",
          money: "4100"
        },
        {
          name: "中国人寿",
          desc: "少儿国寿福（庆典版）",
          year: "终身",
          money: "4180"
        },
        {
          name: "招商仁和人寿",
          desc: "爱倍护重疾",
          year: "终身",
          money: "4363"
        },
        {
          name: "中国友邦",
          desc: "全佑一生（倍呵护）",
          year: "终身",
          money: "4496"
        },
        { name: "泰康人寿", desc: "健康百分百C", year: "终身", money: "4500" },
        { name: "信泰保险", desc: "如意久久", year: "终身", money: "4765" },
        { name: "中国人寿", desc: "康宁2019", year: "终身", money: "5000" },
        {
          name: "中国人保",
          desc: "少儿无忧人生2019",
          year: "终身",
          money: "5250"
        },
        { name: "弘康人寿", desc: "臻爱520", year: "终身", money: "5400" },
        {
          name: "新华保险",
          desc: "多倍重疾（青少年版）",
          year: "终身",
          money: "5778"
        }
      ],
      tableData1: [
        {
          name: "中国人保",
          prod: "好医保·长期医疗（新版）",
          money: "609",
          desc: "性价比高保证续保6年",
          level: "A"
        },
        {
          name: "复星联合健康",
          prod: "超越保长期医疗险计划1（专家版）",
          money: "845",
          desc: "6年保证续保可选特需部、国际部、VIP部医疗",
          level: "A"
        },
        {
          name: "微保&泰康人寿",
          prod: "微医保·长期医疗险",
          money: "731",
          desc: "6年期产品，6年不涨价",
          level: "A"
        },
        {
          name: "平安保险",
          prod: "平安e生保（保证续保版）",
          money: "1096",
          desc: "6年保证续保",
          level: "A"
        },
        {
          name: "众安保险",
          prod: "尊享e生旗舰版",
          money: "766",
          desc: "不限公立医院增值服务充足",
          level: "A"
        },
        {
          name: "复星联合健康",
          prod: "钢铁侠",
          money: "662",
          desc: "保证5年续保",
          level: "A"
        },
        {
          name: "太平洋财险",
          prod: "太享e保",
          money: "406",
          desc: "额外100万共享免赔额",
          level: "B"
        },
        {
          name: "众慧相互",
          prod: "慧享e生",
          money: "460",
          desc: "有家庭保障慧享一家",
          level: "B"
        },
        {
          name: "华夏保险",
          prod: "医保通",
          money: "621",
          desc: "有人工审核",
          level: "B"
        },
        {
          name: "安心财险",
          prod: "一起慧99",
          money: "891",
          desc: "0免赔",
          level: "B"
        },
        {
          name: "阳光财险",
          prod: "爱健康",
          money: "578",
          desc: "恶性肿瘤0免赔",
          level: "B"
        },
        {
          name: "和谐健康",
          prod: "尊崇佰万医疗",
          money: "680",
          desc: "25种重大疾病赔付1万",
          level: "B"
        },
        {
          name: "安心财险",
          prod: "安心e生",
          money: "661",
          desc: "安心一家共享500万保额",
          level: "B"
        },
        {
          name: "复星保德德信",
          prod: "悦享守护",
          money: "959",
          desc: "免赔额5000元",
          level: "B"
        },
        {
          name: "泰康在线",
          prod: "百万安康",
          money: "659",
          desc: "恶性肿瘤0免赔",
          level: "B"
        },
        {
          name: "福得生命",
          prod: "i无忧",
          money: "760",
          desc: "三年内保证续保",
          level: "B"
        },
        {
          name: "中英人寿",
          prod: "百依百顺",
          money: "693",
          desc: "健康咨询预约挂号，陪诊服务",
          level: "C"
        },
        {
          name: "国华人寿",
          prod: "小米千万医疗",
          money: "718",
          desc: "恶性肿瘤500万",
          level: "C"
        },
        {
          name: "太平保险",
          prod: "太平医保无忧2019版",
          money: "980",
          desc: "增值服务全",
          level: "C"
        },
        {
          name: "安联保险",
          prod: "安联臻爱医疗险(感恩版)-升级版",
          money: "962",
          desc: "早产儿可买，健康告知未问询",
          level: "C"
        },
        {
          name: "华海财险",
          prod: "e生无忧",
          money: "748",
          desc: "/",
          level: "C"
        },
        {
          name: "大地财险",
          prod: "天地关爱（大地康行）",
          money: "950",
          desc: "可以附加交通工具赔付",
          level: "C"
        },
        {
          name: "安利人寿",
          prod: "畅享一生",
          money: "1035",
          desc: "社保可以抵扣1万免赔",
          level: "C"
        },
        {
          name: "永安财险",
          prod: "乐健e活",
          money: "1029",
          desc: "住院津贴200元每天",
          level: "C"
        },
        {
          name: "信诚人寿",
          prod: "小棉袄百万医疗",
          money: "1147",
          desc: "免赔额6000元",
          level: "C"
        },
        {
          name: "信泰人寿",
          prod: "全民百万e保",
          money: "1093",
          desc: "恶性肿瘤先赔付1万",
          level: "C"
        },
        {
          name: "同方全球",
          prod: "御护一生",
          money: "2522",
          desc: "相对免赔额1万社保可以抵扣",
          level: "D"
        },
        {
          name: "华泰财险",
          prod: "百万医疗",
          money: "2220",
          desc: "意外住院津贴100元每天",
          level: "D"
        }
      ],
      tableData2: [
        {
          name: "复星联合健康",
          prod: "妈咪保贝",
          desc:
            "少儿长期重疾首选，重疾不分组可二次赔付，特定少儿疾病多倍赔，可附加罕见疾病，经济压力大可选保30年期限",
          level: "A"
        },
        {
          name: "昆仑健康保险",
          prod: "慧馨安健康保",
          desc: "少儿终生重疾，22-70周岁保额翻倍，癌症二次赔付",
          level: "A"
        },
        {
          name: "百年人寿",
          prod: "大黄蜂2号",
          desc: "投保前11年重疾保额每年5%递增，保30年适合经济压力大的家庭",
          level: "A"
        },
        {
          name: "横琴人寿",
          prod: "大黄蜂3号",
          desc:
            "少儿终生重疾，投保前20年赔150%，可选分组3次赔付，经济压力大可选保30年期限",
          level: "A"
        },
        {
          name: "瑞泰人寿",
          prod: "晴天保保",
          desc: "投保前11年，每两年重疾保额递增15%，保30年适合经济压力大的家庭",
          level: "A"
        },
        {
          name: "瑞华保险",
          prod: "瑞华小佩奇",
          desc:
            "少儿特定重疾3次赔付，先天性疾病也能赔付，保30年适合经济压力大家庭",
          level: "A"
        },
        {
          name: "三峡人寿",
          prod: "达尔文2号",
          desc: "60岁前确诊，额外赔50%，可选癌症二次赔付120%保额",
          level: "A"
        },
        {
          name: "百年人寿",
          prod: "康惠保2020",
          desc:
            "前10年额外赔50%；11-15年额外赔35%。轻/中症赔付后重疾保额增加25%，可加癌症2次赔，少儿特定疾病",
          level: "A"
        },
        {
          name: "百年人寿",
          prod: "康惠保（旗舰版）",
          desc: "投保前10年额外50%保额，癌症二次赔付，少儿特定疾病多倍赔付",
          level: "A"
        },
        {
          name: "瑞泰人寿",
          prod: "多倍宝宝（原阿童木）",
          desc: "重疾5组多次赔付，12种特定重疾，7岁前，额外赔",
          level: "A"
        },
        {
          name: "信泰保险",
          prod: "超级玛丽2020MAX",
          desc: "60岁前确诊，额外赔50%，特定重疾2次赔",
          level: "A"
        },
        {
          name: "和泰人寿",
          prod: "超级玛丽2020",
          desc:
            "0-40岁投保前15年额外赔50%保额，可选癌症二次赔，可选特定良性肿瘤并手术治疗赔",
          level: "A"
        },
        {
          name: "复星联合健康",
          prod: "倍吉星",
          desc:
            "重疾不分组可赔3次，可选癌症二次赔付100%；可选特定疾病失能保险金",
          level: "A"
        },
        {
          name: "光大永明",
          prod: "嘉多保",
          desc: "重疾分6组，赔6次保额，前10年额外赔20%，可选癌症三次赔付",
          level: "A"
        },
        {
          name: "信泰保险",
          prod: "完美人生守护（尊享版）",
          desc: "重疾分组6次赔付，可选少儿特定疾病多倍赔。可选癌症2次赔",
          level: "A"
        },
        {
          name: "百年人寿",
          prod: "超倍保",
          desc: "前10年重疾额外50%，重疾分组赔5次，可选癌症、心脑血管疾病2次赔",
          level: "A"
        },
        {
          name: "光大永明",
          prod: "超级玛丽旗舰版",
          desc: "0-40岁投保，前10年额外35%，可选癌症二次赔付",
          level: "B"
        },
        {
          name: "光大永明",
          prod: "达尔文超越者",
          desc:
            "0-40岁投保，前15年额外35%，可选癌症二次赔付，可选少儿特定恶性肿瘤额外赔付",
          level: "B"
        },
        {
          name: "昆仑健康保险",
          prod: "昆仑健康保",
          desc:
            "可选癌症二次赔付，重大疾病医疗津贴保险金，少儿特定疾病保险金（额外100%保额）",
          level: "B"
        },
        {
          name: "复星联合健康",
          prod: "备哆分1号",
          desc: "重疾分6组最多赔6次保额，可选癌症二次赔付",
          level: "B"
        },
        {
          name: "瑞华保险",
          prod: "康瑞宝",
          desc: "0-40岁投保，前10年额外赔30%保额，不同器官原位癌可多次赔付",
          level: "B"
        },
        {
          name: "大家保险",
          prod: "超惠保",
          desc: "可选特定疾病额外赔付，健康告知宽松",
          level: "B"
        },
        {
          name: "和谐健康",
          prod: "大黄蜂（长期医疗版）",
          desc: "轻症赔付后，重疾额外赔50%，保30年适合经济压力大家庭",
          level: "B"
        },
        {
          name: "瑞泰人寿",
          prod: "超级玛丽（全民版）",
          desc: "轻症赔付后，重疾保额增加30%;加费可选高发癌症二次赔付",
          level: "B"
        },
        {
          name: "海保人寿",
          prod: "倍加尔保",
          desc: "重疾，分6组，最多赔6次保额，后期现金价值高",
          level: "B"
        },
        {
          name: "和谐健康",
          prod: "慧馨安",
          desc: "健康告知宽松，保30年适合经济压力大的家庭",
          level: "B"
        },
        {
          name: "弘康人寿",
          prod: "弘康倍倍加",
          desc: "重疾分6组，最多赔付6次，可附加癌症二次赔付",
          level: "B"
        },
        {
          name: "弘康人寿",
          prod: "健康一生重疾A",
          desc: "健康告知宽松，对肝病友好",
          level: "B"
        },
        {
          name: "同方全球",
          prod: "同佑E生",
          desc: "保障全面，18岁后有身故责任",
          level: "B"
        },
        {
          name: "信美相互",
          prod: "爱加倍健康保障",
          desc: "中症轻症为可选责任，缴费灵活",
          level: "B"
        },
        {
          name: "广大永明",
          prod: "可爱多重疾",
          desc:
            "40岁以下，保单前15年额外赔付35%重疾保额；可选癌症二次赔，可选少儿特定癌症多倍赔，18岁后有身故责任",
          level: "B"
        },
        {
          name: "弘康人寿",
          prod: "臻爱520",
          desc:
            "重疾保额每年增长5%，连续20年；重疾分6组最高赔付6次，18岁后有身故责任",
          level: "B"
        },
        {
          name: "弘康人寿",
          prod: "哆啦A保",
          desc: "重疾分6组，多次赔付，健康告知宽松，乙肝患者有望投保",
          level: "B"
        },
        {
          name: "百年人寿",
          prod: "康惠保（多倍版）",
          desc: "重疾不分组二次赔付",
          level: "C"
        },
        {
          name: "横琴人寿",
          prod: "横琴优康",
          desc: "重疾分4组3次赔付",
          level: "C"
        },
        {
          name: "长生人寿",
          prod: "长生福优加",
          desc: "重疾不分组可选2次赔付",
          level: "C"
        },
        {
          name: "瑞泰人寿",
          prod: "小雨伞超级玛丽",
          desc: "可选癌症二次赔付，可选18岁后身故责任",
          level: "C"
        },
        {
          name: "泰康养老",
          prod: "健康有约约智选版",
          desc: "品牌团险，公司团体购买性价比高",
          level: "C"
        },
        {
          name: "泰康人寿",
          prod: "惠健康",
          desc: "品牌公司，特定疾病额外赔付，18岁后身故赔付",
          level: "C"
        },
        {
          name: "天安人寿",
          prod: "健康源（2019）增强版",
          desc: "重疾6组，赔付6次，癌症二次赔付，保单前10年多赔",
          level: "C"
        },
        {
          name: "信泰保险",
          prod: "如意久久",
          desc: "重疾6组，赔付6次，少儿特定疾病多倍赔付，18岁后有身故责任",
          level: "C"
        },
        {
          name: "华夏人寿",
          prod: "常青树(多倍版)",
          desc: "重疾分组最多赔付6次，18岁后身故责任",
          level: "C"
        },
        {
          name: "国华人寿",
          prod: "健康福重疾险",
          desc: "前10年额外赔付30%，可附加特定疾病翻倍和癌症多次赔",
          level: "C"
        },
        {
          name: "招商仁和人寿",
          prod: "仁爱相伴",
          desc: "6种特定癌症额外赔付",
          level: "C"
        },
        {
          name: "国华人寿",
          prod: "国华至尊保",
          desc: "无轻症责任，只保重疾，适合只考虑重大疾病的",
          level: "C"
        },
        {
          name: "复星保德信",
          prod: "星满意重疾",
          desc:
            "重疾赔付赔付5次，首次100%保额，此后每次赔付在上一次基础上增加10%;轻症赔付3次，首次20%保额，第2次30%保额，第3次40%保额。",
          level: "C"
        },
        {
          name: "中国太平",
          prod: "福禄康瑞2018",
          desc: "投保规则比较宽松，最高投保年龄高达65周岁 保障责任充足",
          level: "C"
        },
        {
          name: "泰康人寿",
          prod: "健康百分百C+",
          desc: "品牌公司，保障全面，18岁后有身故责任",
          level: "C"
        },
        {
          name: "新华保险",
          prod: "健康无忧（尊享）",
          desc:
            "等待期内轻症出险不终止合同;等待期内患重症赔付;前10年关爱保险金;6种特定疾病额外给付",
          level: "C"
        },
        {
          name: "太平洋保险",
          prod: "金福人生（少儿版）",
          desc: "大品牌，18岁前少儿特定疾病多倍赔付",
          level: "C"
        },
        {
          name: "中国人寿",
          prod: "少儿国寿福（庆典版）",
          desc:
            "　60种特定疾病不分组，确诊赔付1次20%基本保额，累计可赔3次，没有间隔期15种少儿疾病不分组，确诊赔1次100%基本保额",
          level: "C"
        },
        {
          name: "新华保险",
          prod: "多倍重疾（青少年版）",
          desc: "三次癌症的赔偿；前10年双倍赔付；特定疾病额外赔付",
          level: "C"
        },
        {
          name: "泰康人寿",
          prod: "健康百分百D",
          desc: "品牌公司，轻症赔付次数多，无间隔期，18岁后有身故责任",
          level: "C"
        },
        {
          name: "中国人寿",
          prod: "康宁2019",
          desc: "品牌公司，少儿特定疾病多倍赔付，18岁后有身故责任。",
          level: "C"
        },
        {
          name: "中英人寿",
          prod: "爱相随",
          desc: "重疾分组，2次赔付，18岁后有身故责任",
          level: "C"
        },
        {
          name: "长城人寿",
          prod: "吉康人生",
          desc: "重疾赔付2次，18岁后身故责任",
          level: "C"
        },
        {
          name: "信泰保险",
          prod: "百万守护",
          desc: "重疾分6组，赔付6次赔付后保额递增，癌症三次赔付",
          level: "C"
        },
        {
          name: "招商仁和人寿",
          prod: "爱倍护重疾",
          desc: "重疾赔付1次，症赔付3次，18岁后有身故责任",
          level: "C"
        },
        {
          name: "国华人寿",
          prod: "盖世英雄",
          desc: "可附加特定疾病",
          level: "C"
        },
        {
          name: "百年人寿",
          prod: "康惠保",
          desc: "产品简单，可加投保人豁免",
          level: "C"
        },
        {
          name: "中国人保",
          prod: "百病安心",
          desc: "品牌公司，身故返还保费",
          level: "C"
        },
        {
          name: "泰康人寿",
          prod: "乐康宝",
          desc: "品牌公司，保障全面",
          level: "C"
        },
        {
          name: "阳光人寿",
          prod: "i保C款",
          desc: "品牌公司，轻症赔付次数多",
          level: "C"
        },
        {
          name: "同方全球",
          prod: "康健一生（多倍保）",
          desc: "重疾分组3次赔付，轻症分组",
          level: "C"
        },
        {
          name: "太平洋保险",
          prod: "金诺人生(2018)",
          desc: "品牌公司，18岁后有身故责任",
          level: "D"
        },
        {
          name: "中国友邦",
          prod: "全佑一生（倍呵护）",
          desc: "18岁后身故赔付保额，60岁后长期护理金",
          level: "D"
        },
        {
          name: "中国人保",
          prod: "少儿无忧人生2019",
          desc: "重疾分组3次赔付，18岁后身故赔付",
          level: "D"
        },
        {
          name: "中国平安",
          prod: "小福星（新版）",
          desc: "大品牌，特定重疾额外赔付",
          level: "D"
        }
      ]
    };
  },
  methods: {
    tableRowClassName({ rowIndex }) {
      if (rowIndex % 2 == 0) {
        return "event-row";
      }
      return "";
    },
    goCase() {
      if (this.$store.state.formType == "family") {
        this.$router.push({
          path: "/family/case",
          query: {
            age: this.$route.query.age,
            sex: this.$route.query.sex
          }
        });
      } else {
        this.$router.push({
          path: "/children/healty/case",
          query: {
            age: this.$route.query.age,
            sex: this.$route.query.sex
          }
        });
      }
    }
  }
};
</script>
