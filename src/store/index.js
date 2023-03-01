import Vue from 'vue';
import { Store, install } from 'vuex';
import banner from './banner';
import setting from './setting';
import about from './about';
import project from "./project";

//如果没有使用cdn
if (!window.Vuex) {
  install(Vue); // 使用一个vue插件
}

export default new Store({
  modules: {
    banner,
    setting,
    about,
    project
  },
  strict: true,
});