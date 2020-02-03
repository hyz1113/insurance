const routes = [
  {
    path: "/children/index",
    name: "childrenIndex",
    component: () => import("../../../views/children")
  },
  {
    path: "/children/eduInfo",
    name: "eduInfo",
    component: () => import("../../../views/children/eduInfo")
  },
  {
    path: "/children/edu/eduContrastList",
    name: "eduContrastList",
    component: () => import("../../../views/children/edu/eduContrastList")
  },
  {
    path: "/children/healty/healtyInfo",
    name: "healtyInfo",
    component: () => import("../../../views/children/healty/healtyInfo")
  },
  {
    path: "/children/healty/healtyContrastList",
    name: "healtyContrastList",
    component: () => import("../../../views/children/healty/healtyContrastList")
  },
  {
    path: "/children/healty/case",
    name: "healtyCase",
    component: () => import("../../../views/children/healty/case")
  },
  {
    path: "/children/healty/economicCase",
    name: "economicCase",
    component: () => import("../../../views/children/healty/economicCase")
  },
  {
    path: "/children/healty/advancedCase",
    name: "advancedCase",
    component: () => import("../../../views/children/healty/advancedCase")
  },
  {
    path: "/children/healty/securityCase",
    name: "securityCase",
    component: () => import("../../../views/children/healty/securityCase")
  }
];


export default routes;
