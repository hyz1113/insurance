const routes = [
  {
    path: "/person/baseInfo",
    name: "personbaseInfo",
    component: () => import("../../../views/person/baseInfo")
  },
  {
    path: "/person/contrastList",
    name: "contrastList",
    component: () => import("../../../views/person/contrastList")
  },
  {
    path: "/person/case",
    name: "personcase",
    component: () => import("../../../views/person/case")
  }
];

export default routes;
