<template>
  <div>
    <default-header @toggle-cart="cartSlide" @toggle-menu="menuSlide" />
    <v-navigation-drawer v-model="cart" absolute temporary right ref="cart-slider">
      <mini-cart-item v-for="(product, i) in getCart" :key="i" :product="getCart[i]" />
    </v-navigation-drawer>
    <v-navigation-drawer v-model="menu" absolute temporary>
      <slider-navigation />
    </v-navigation-drawer>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import DefaultHeader from "@/components/DefaultHeader.vue";
import MiniCartItem from "@/components/MiniCartItem.vue";
import SliderNavigation from "@/components/SliderNavigation.vue";
import { mapGetters } from "vuex";
import { Product } from '@/types';

@Component({
  components: {
    DefaultHeader,
    SliderNavigation,
    MiniCartItem
  },
  computed: {
    ...mapGetters("cart", [
      "getCart"
    ])
  }
})
export default class DefaulLayout extends Vue {
  getCart!: Product[];

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
