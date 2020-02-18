import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import partRouter from "./partRouter";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta:{
      title:'保险方案推荐',
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
  document.title = to.matched[ 0 ].meta.title;
  next();
})


export default router;
