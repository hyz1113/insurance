import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import partRouter from "./partRouter";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  ...partRouter
];

const router = new VueRouter({
  mode: "hash",
  routes,
  // 跳转路由后滚动行为
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  }
});

export default router;
