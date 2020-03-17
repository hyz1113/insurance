import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import CaseShow from "@/views/caseShow.vue";
import confirmPg from "@/views/confirmPage.vue";
import partRouter from "./partRouter";
import axios from "axios";

import { get, post} from "@/utils/request.js";

Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.$axios = axios;


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "保险方案推荐"
    }
  },
  {
    path: "/case",
    name: "home",
    component: CaseShow,
    meta: {
      title: "案例展示"
    }
  },
  {
    path: "/confirmPg",
    name: "confirmpg",
    component: confirmPg,
    meta: {
      title: "安心选"
    }
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


// 路由拦截,设置页面显示title
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
});



export default router;
