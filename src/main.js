import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from 'bootstrap-vue'
import firebase from "firebase/app";
import "firebase/firestore";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);
Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyBFMv2jNRPNAdkQA6Oal2dmZy5THaqJhi0",
  authDomain: "db-cs313-and-cs346.firebaseapp.com",
  projectId: "db-cs313-and-cs346",
  storageBucket: "db-cs313-and-cs346.appspot.com",
  messagingSenderId: "27957051530",
  appId: "1:27957051530:web:67481c12639f368ad3ad73",
  measurementId: "G-QCJPG5DYD9"
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
