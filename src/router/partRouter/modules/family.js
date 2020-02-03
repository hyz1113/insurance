const routes = [
  {
    path: "/family/baseInfo",
    name: "familybaseInfo",
    component: () => import("../../../views/family/baseInfo")
  },
  {
    path: "/family/contrastList",
    name: "contrastList",
    component: () => import("../../../views/family/contrastList")
  },
  {
    path: "/family/case",
    name: "familycase",
    component: () => import("../../../views/family/case")
  }
];


export default routes;
