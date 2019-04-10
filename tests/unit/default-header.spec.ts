import Vue from "vue";
import Vuetify from "vuetify";
import VueRouter from "vue-router";
import DefaultHeader from "@/components/DefaultHeader.vue";
import { shallowMount, Wrapper, createLocalVue } from "@vue/test-utils";

describe("DefaultHeader", () => {
  beforeEach(() => {
    Vue.use(Vuetify);
  });

  it("emits an event when you click the cart icon", () => {
    const localVue = createLocalVue();
    const wrapper: Wrapper<DefaultHeader> = shallowMount(DefaultHeader, {
      localVue
    });

    wrapper.find({ ref: "icon-cart-toggle" }).trigger("click");
    expect(wrapper.emitted("toggle-cart")).toBeTruthy();
  });

  it("emits an event when you click the menu icon", () => {
    const localVue = createLocalVue();
    const wrapper: Wrapper<DefaultHeader> = shallowMount(DefaultHeader, {
      localVue
    });

    wrapper.find({ ref: "icon-menu-toggle" }).trigger("click");
    expect(wrapper.emitted("toggle-menu")).toBeTruthy();
  });
});
