import Vue from "vue";
import Vuex from "vuex"
import Vuetify from "vuetify";
import ProductCard from "@/components/ProductCard.vue";
import { shallowMount, Wrapper, createLocalVue } from "@vue/test-utils";

const localVue = createLocalVue();
localVue.use(Vuex);

const mutations = {
  addToCart: jest.fn()
}

const store = new Vuex.Store({ mutations })

describe("ProductCard", () => {
  beforeEach(() => {
    Vue.use(Vuetify);
  });

  it("adds a product to cart upon button press", () => {
    const wrapper: Wrapper<ProductCard> = shallowMount(ProductCard, {
      store, localVue,
      propsData: {
        product: {
          name: 'Name',
          price: 9999,
          category: ["categoryName"],
          stock: 5,
          promo: "",
          image: "imageSource"
        }
      }
    });
    const cart = wrapper.find({ ref: "cart-slider" });
    console.log(cart);
  
    wrapper.find({ ref: "add-to-cart" }).trigger("click");
    expect(cart).toContain("div.product");
  });
});
