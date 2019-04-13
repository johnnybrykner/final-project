import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import MiniCartItem from "@/components/MiniCartItem.vue";
import { mount, Wrapper, createLocalVue } from "@vue/test-utils";

const localVue = createLocalVue();
localVue.use(Vuex);

const mutations = {
  removeFromCart: jest.fn()
};

const store = new Vuex.Store({ mutations });

describe("MiniCartItem", () => {
  beforeEach(() => {
    Vue.use(Vuetify);
  });

  it("removes a product to cart upon button press", () => {
    const wrapper: Wrapper<MiniCartItem> = mount(MiniCartItem, {
      store,
      localVue,
      propsData: {
        product: {
          name: "Name",
          price: 9999,
          className: "Name",
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
    expect(cart).toContain("div.Name");

    wrapper.find({ ref: "remove-from-cart" }).trigger("click");
    expect(cart).not.toContain("div.Name");
  });
});
