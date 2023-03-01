// 入口文件
// import "./mock";//MOCKjs在开发完成时会删除
import "./styles/global.less";
import "./eventBus"
import "./api/banner";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//由于每个组件都需要用到所有在项目请求时就加载
store.dispatch("setting/fetchSetting");

import showMessage from "./utils/showMessage";
Vue.prototype.$showMessage = showMessage;

//自定义组件
import vLoading from "./directives/loading"
Vue.directive("loading", vLoading);

//懒加载
import vLazy from "./directives/lazy";
Vue.directive("lazy", vLazy);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
