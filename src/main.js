import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import VueAxios from "vue-axios";
import firebase from "firebase/app";
import auth from "firebase/auth";
import database from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDp4GL4Nw99FYa9UJJkDsU-ckyIbzWAhmM",
  authDomain: "valentinna-salon.firebaseapp.com",
  databaseURL: "https://valentinna-salon-default-rtdb.firebaseio.com",
  projectId: "valentinna-salon",
  storageBucket: "valentinna-salon.appspot.com",
  messagingSenderId: "494052773622",
  appId: "1:494052773622:web:7d0aab8ddba68c3cfc66d7"
};
firebase.initializeApp(firebaseConfig);

Vue.use(VueAxios, axios);
Vue.use(firebase, auth, database);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
