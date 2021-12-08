import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Agenda from "../views/Agenda.vue"
import Encuentranos from "../views/Encuentranos.vue";
import Admin from "../views/Admin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Agenda",
    name: "Agenda",
    component: Agenda,
  },
  {
    path: "/Encuentranos",
    name: "Encuentranos",
    component: Encuentranos,
  },
  {
    path: "/Admin",
    name: "Admin",
    component: Admin,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
