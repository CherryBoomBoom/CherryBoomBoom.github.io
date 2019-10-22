import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import {store} from "./store";
import iView from "iview";
import "iview/dist/styles/iview.css";
import axios from './function/request'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios);
// import { Tabs, TabPane, Tag,DatePicker } from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
// Vue.use(Tabs);
// Vue.use(TabPane);
// Vue.use(Tag);
// Vue.use(DatePicker);
Vue.use(iView);
new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
}).$mount('#app');
