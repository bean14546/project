import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TableTime from "../views/TableTime.vue";
import TableTime2 from "../views/TableTime2.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import Maps from "../views/Map.vue";
import Maps2 from "../views/Map2.vue";
Vue.use(VueRouter);

const routes = [{
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/tabletime",
    name: "TableTime",
    component: TableTime
  },
  {
    path: "/tabletime2",
    name: "TableTime2",
    component: TableTime2
  },
  {
    path: "/map",
    name: "Map",
    component: Maps
  },
  {
    path: "/map2",
    name: "Map2",
    component: Maps2
  },
  {
    path: "/",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/signup",
    name: "SignIn",
    component: SignUp
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;