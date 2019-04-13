<template>
  <div>
    <default-header @toggle-cart="cartSlide" @toggle-menu="menuSlide" />
    <v-navigation-drawer v-model="cart" fixed temporary right ref="cart-slider">
      <mini-cart @close-cart="cartSlide" />
    </v-navigation-drawer>
    <v-navigation-drawer v-model="menu" fixed temporary>
      <slider-navigation />
    </v-navigation-drawer>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DefaultHeader from "@/components/DefaultHeader.vue";
import MiniCart from "@/components/MiniCart.vue";
import SliderNavigation from "@/components/SliderNavigation.vue";
import { Product } from "@/types";

@Component({
  components: {
    DefaultHeader,
    SliderNavigation,
    MiniCart
  }
})
export default class DefaulLayout extends Vue {
  cart: boolean = false;
  menu: boolean = false;

  cartSlide(): void {
    this.cart = !this.cart;
  }

  menuSlide(): void {
    this.menu = !this.menu;
  }
}
</script>
