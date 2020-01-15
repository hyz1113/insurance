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
  }

];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
