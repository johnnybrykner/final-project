<template>
  <v-toolbar class="secondary">
    <div ref="icon-menu-toggle" @click="toggleMenu">
      <v-toolbar-side-icon />
    </div>
    <v-toolbar-title class="ml-0 logo">notBilka</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn
        flat
        class="px-0"
        ref="icon-cart-toggle"
        @click.native="toggleCart"
      >
        <v-badge right class="black--text">
          <template v-slot:badge>
            <span class="white--text">{{ getCart.length }}</span>
          </template>
          <v-icon>
            shopping_cart
          </v-icon>
        </v-badge>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Product } from "@/types";
import { mapGetters } from "vuex";

@Component({
  computed: {
    ...mapGetters("cart", ["getCart"])
  }
})
export default class DefaultHeader extends Vue {
  getCart!: Product[];

  toggleCart(): void {
    this.$emit("toggle-cart");
  }

  toggleMenu(): void {
    this.$emit("toggle-menu");
  }
}
</script>

<style lang="scss" scoped>
.logo {
  font-family: "OS", sans-serif;
  font-weight: 600;
}
</style>
