import Vue from "vue";
import Router from "vue-router";
import krabbyPatty from "../components/krabby-patty/App.vue";
import krabbyPattyDocument from "../components/krabby-patty/document.vue";
import notFound from "../components/noFound.vue";

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
      ]
    },
    {
      path: "*",
      component: notFound
    }
  ]
});
