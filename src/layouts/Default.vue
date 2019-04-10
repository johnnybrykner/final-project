<template>
  <div>
    <default-header @toggle-cart="cartSlide" @toggle-menu="menuSlide" />
    <v-navigation-drawer v-model="cart" absolute temporary right>
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
import SliderNavigation from "@/components/SliderNavigation.vue";

@Component({
  components: {
    DefaultHeader,
    SliderNavigation
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
