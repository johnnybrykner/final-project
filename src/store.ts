import Vue from "vue";
import Vuex from "vuex";
import catalog from "./modules/catalog";
import cart from "./modules/cart";

Vue.use(Vuex);

const store = {
  modules: {
    cart,
    catalog
  }
};

export default new Vuex.Store(store);
