//入口
import HelloWorld from "./HelloWorld.vue";

export default {
  install: function(Vue) {
    Vue.component("zn-upload", HelloWorld);
  }
};
// 需要自行处理浏览器引入和模块引入的问题
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component("zn-upload", HelloWorld);
}
