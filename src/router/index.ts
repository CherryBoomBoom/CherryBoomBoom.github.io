import Vue from "vue";
import Router from "vue-router";
import krabbyPatty from "../components/krabby-patty/App.vue";
import krabbyPattyDocument from "../components/krabby-patty/document.vue";
import colorPicker from "../components/color-picker/App.vue";
import colorPickerHome from "../components/color-picker/home.vue";
// import notFound from "../components/noFound.vue";
import krabbyPattyHistory from "../components/krabby-patty/history.vue";

Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {path:'/',redirect: '/krabby-patty/document'},
    {
      path: "/krabby-patty",
      component: krabbyPatty,
      redirect: '/krabby-patty/document',
      children:[
        {path: "document",component: krabbyPattyDocument},
				{ path: "history", component: krabbyPattyHistory},
      ]
    },
    {
      path: "/color-picker",
      component: colorPicker,
      redirect: '/color-picker/home',
      children:[
        {path: "home",component: colorPickerHome},
      ]
    },
    {
      path: "*",
      component: krabbyPatty
    }
  ]
});
