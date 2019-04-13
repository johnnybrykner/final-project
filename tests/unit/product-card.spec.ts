import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import cart from "@/modules/cart";
import "lodash.clonedeep";
import * as _ from "lodash";
import ProductCard from "@/components/ProductCard.vue";
import { mount, Wrapper, createLocalVue } from "@vue/test-utils";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("ProductCard", () => {
  let store: any;
  
  beforeEach(() => {
    Vue.use(Vuetify);
    store = new Vuex.Store(_.cloneDeep(cart));
  });

  it("adds a product to cart upon button press", () => {
    const wrapper: Wrapper<ProductCard> = mount(ProductCard, {
      store,
      localVue,
      propsData: {
        product: {
          name: "Name",
          price: 9999,
          category: ["categoryName"],
          amount: 0,
          stock: 5,
          promo: "",
          image: "imageSource"
        }
      }
    });
    const cart = wrapper.find({ ref: "cart-slider" });

    wrapper.find({ ref: "add-to-cart" }).trigger("click");
    expect(store.currentCart.amount).toEqual(1);
    expect(cart).toContain("div.product");
  });
});
