import Vue from "vue";

/**
  获取某个组件渲染的Dom根元素
*/
export default function (comp, props) {
  //comp 组件 props  组件渲染的dom
  const vm = new Vue({
    render: h => h(comp, { props })
  })
  const el = vm.$mount();
  //挂载到dom树上，主要是在于生成根节点
  return vm.$el;
  //$el为真实dom，获取根节点
}