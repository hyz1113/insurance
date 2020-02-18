const routes = [
  {
    path: "/person/baseInfo",
    name: "personbaseInfo",
    meta:{
      title:'个人投保规划',
    },
    component: () => import("../../../views/person/baseInfo")
  },
  {
    path: "/person/contrastList",
    name: "contrastList",
    meta:{
      title:'个人险种对比',
    },
    component: () => import("../../../views/person/contrastList")
  },
  {
    path: "/person/case",
    name: "personcase",
    meta:{
      title:'个人投保险种确认页',
    },
    component: () => import("../../../views/person/case")
  }
];

export default routes;
