import Vue from "vue";
import Vuex from "vuex";
import catalog from "./modules/catalog";
import checkout from "./modules/checkout";
import cart from "./modules/cart";

Vue.use(Vuex);

const store = {
  modules: {
    cart,
    catalog,
    checkout
  }
};

export default new Vuex.Store(store);
