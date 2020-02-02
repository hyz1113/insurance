import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue")
  },
  {
    path: "/person/baseInfo",
    name: "personbaseInfo",
    component: () => import("../views/person/baseInfo")
  },
  {
    path: "/person/contrastList",
    name: "contrastList",
    component: () => import("../views/person/contrastList")
  },
  {
    path: "/person/case",
    name: "case",
    component: () => import("../views/person/case")
  },
  {
    path: "/children/index",
    name: "childrenIndex",
    component: () => import("../views/children/index")
  },
  {
    path: "/children/eduInfo",
    name: "eduInfo",
    component: () => import("../views/children/eduInfo")
  },
  {
    path: "/children/edu/eduContrastList",
    name: "eduContrastList",
    component: () => import("../views/children/edu/eduContrastList")
  },
  {
    path: "/children/healty/healtyInfo",
    name: "healtyInfo",
    component: () => import("../views/children/healty/healtyInfo")
  },
  {
    path: "/children/healty/healtyContrastList",
    name: "healtyContrastList",
    component: () => import("../views/children/healty/healtyContrastList")
  },
  {
    path: "/children/healty/case",
    name: "healtyCase",
    component: () => import("../views/children/healty/case")
  },
  {
    path: "/children/healty/economicCase",
    name: "economicCase",
    component: () => import("../views/children/healty/economicCase")
  },
  {
    path: "/children/healty/advancedCase",
    name: "advancedCase",
    component: () => import("../views/children/healty/advancedCase")
  },
  {
    path: "/children/healty/securityCase",
    name: "securityCase",
    component: () => import("../views/children/healty/securityCase")
  },
  {
    path: "/family/baseInfo",
    name: "personbaseInfo",
    component: () => import("../views/family/baseInfo")
  },
  {
    path: "/family/contrastList",
    name: "contrastList",
    component: () => import("../views/family/contrastList")
  },
  {
    path: "/family/case",
    name: "familycase",
    component: () => import("../views/family/case")
  },

];

const router = new VueRouter({
  mode: "hash",
  routes
});

export default router;
