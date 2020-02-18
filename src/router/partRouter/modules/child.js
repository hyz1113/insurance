const routes = [
  {
    path: "/children/index",
    name: "childrenIndex",
    meta:{
      title:'少儿健康险计划',
    },
    component: () => import("../../../views/children")
  },
  {
    path: "/children/edu/eduInfo",
    name: "eduInfo",
    meta:{
      title:'少儿教育金计划',
    },
    component: () => import("../../../views/children/edu/eduInfo")
  },
  {
    path: "/children/edu/eduContrastList",
    name: "eduContrastList",
    meta:{
      title:'教育金计划详情',
    },
    component: () => import("../../../views/children/edu/eduContrastList")
  },
  {
    path: "/children/edu/case",
    name: "educase",
    meta:{
      title:'教育金方案',
    },
    component: () => import("../../../views/children/edu/case")
  },
  {
    path: "/children/edu/caseDetail",
    name: "educase",
    meta:{
      title:'教育金方案详情',
    },
    component: () => import("../../../views/children/edu/caseDetail")
  },
  {
    path: "/children/healty/healtyInfo",
    name: "healtyInfo",
    meta:{
      title:'健康险计划详情',
    },
    component: () => import("../../../views/children/healty/healtyInfo")
  },
  {
    path: "/children/healty/healtyContrastList",
    name: "healtyContrastList",
    meta:{
      title:'健康险计划',
    },
    component: () => import("../../../views/children/healty/healtyContrastList")
  },
  {
    path: "/children/healty/case",
    name: "healtyCase",
    meta:{
      title:'健康险计划详情',
    },
    component: () => import("../../../views/children/healty/case")
  },
  {
    path: "/children/healty/economicCase",
    name: "economicCase",
    meta:{
      title:'少儿经济型计划',
    },
    component: () => import("../../../views/children/healty/economicCase")
  },
  {
    path: "/children/healty/advancedCase",
    name: "advancedCase",
    meta:{
      title:'少儿进阶型计划',
    },
    component: () => import("../../../views/children/healty/advancedCase")
  },
  {
    path: "/children/healty/securityCase",
    name: "securityCase",
    meta:{
      title:'少儿保障型计划',
    },
    component: () => import("../../../views/children/healty/securityCase")
  }
];


export default routes;
