import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import DefaultLayout from "./layouts/DefaultLayout.vue";
import CheckoutLayout from "./layouts/CheckoutLayout.vue";
import "./assets/style.scss";

Vue.component("default-layout", DefaultLayout);
Vue.component("checkout-layout", CheckoutLayout);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
