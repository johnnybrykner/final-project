import Vue from "vue";
import Vuex from "vuex";
import Vuetify from "vuetify";
import ProductAmount from "@/components/ProductAmount.vue";
import { shallowMount, Wrapper, createLocalVue } from "@vue/test-utils";

const localVue = createLocalVue();
localVue.use(Vuex);

const mutations = {
  removeFromCart: jest.fn()
};

const store = new Vuex.Store({ mutations });

describe("ProductAmount", () => {
  beforeEach(() => {
    Vue.use(Vuetify);
  });

  it("removes a product to cart upon button press", () => {
    const wrapper: Wrapper<ProductAmount> = shallowMount(ProductAmount, {
      store,
      localVue,
      propsData: {
        product: {
          name: "Name",
          price: 9999,
          className: "Name",
          category: ["categoryName"],
          amount: 1,
          stock: 5,
          promo: "",
          image: "imageSource"
        }
      }
    });

    wrapper.find({ ref: "decrease-quantity" }).trigger("click");
    expect(wrapper.find('h3')!.text()).toBe("0");
  });
});
