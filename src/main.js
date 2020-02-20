import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { get, post,qs } from "@/utils/request.js";
import "@/styles/css.scss";
import axios from "axios";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import baseFunc from '@/utils/global_func.js'

// 引用基础组件
import "@/components";

document.domain === "localhost" ? "localhost" : process.env.VUE_APP_DOMAIN;

Vue.use(ElementUI);


Vue.prototype.$get = get;
Vue.prototype.$post = post;
Vue.prototype.$qs = qs;
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

//公共函数 start
Vue.use(baseFunc);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
