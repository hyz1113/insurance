import Vue from "vue";
//import upperFirst from "lodash/upperFirst";
//import camelCase from "lodash/camelCase";
const requireComponent = require.context(
  // 其组件目录的相对路径
  "./base",
  // 是否查询其子目录
  false,
  // "_base-"  .vue文件
  /.vue$/
);

console.log(requireComponent.keys());
requireComponent.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponent(fileName);
  const componentName = 'base-'+fileName.replace("./", "").replace(/.vue$/, "");

  Vue.component(componentName, componentConfig.default || componentConfig);
});
