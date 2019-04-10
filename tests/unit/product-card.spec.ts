import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import ProductCard from "@/components/ProductCard.vue";
import { shallowMount, Wrapper } from "@vue/test-utils";

describe("ProductCard", () => {
  beforeEach(() => {
    Vue.use(Vuetify);
  });

  it("adds a product to cart upon button press", () => {
    const wrapper: Wrapper<ProductCard> = shallowMount(ProductCard, {
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
  
    wrapper.find({ ref: "add-to-cart" }).trigger("click");
    expect
  });
});
