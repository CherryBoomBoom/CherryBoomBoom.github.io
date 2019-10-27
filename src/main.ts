import Vue from "vue";
import App from "./App.vue";
import router from "./router/index";
import {store} from "./store";
import iView from "iview";
import LoadingBar from 'iview/src/components/loading-bar';
import "iview/dist/styles/iview.css";
import axios from './function/request'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios);
Vue.config.productionTip = false;
router.beforeEach((to, from, next) => {
  LoadingBar.start();
  next();
});

router.afterEach(route => {
  LoadingBar.finish();
});
Vue.use(iView);
new Vue({
  el: "#app",
  store,
  router,
  render: h => h(App)
}).$mount('#app');
