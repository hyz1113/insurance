const routes = [
  {
    path: "/family/baseInfo",
    name: "familybaseInfo",
    meta:{
      title:'家庭基本信息',
    },
    component: () => import("../../../views/family/baseInfo")
  },
  {
    path: "/family/contrastList",
    name: "contrastList",
    meta:{
      title:'家庭基本信息',
    },
    component: () => import("../../../views/family/contrastList")
  },
  {
    path: "/family/case",
    name: "familycase",
    meta:{
      title:'家庭基本信息',
    },
    component: () => import("../../../views/family/case")
  }
];


export default routes;
