import Vue from "vue";
import Vuex from "vuex";
import { catalog } from "./products/index";
import { cart } from "./cart/index";

Vue.use(Vuex);

const store = {
  modules: {
    cart,
    catalog
  }
};

export default new Vuex.Store(store);
