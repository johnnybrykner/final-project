<template>
  <v-toolbar class="secondary">
    <div ref="icon-menu-toggle" @click="toggleMenu">
      <v-toolbar-side-icon />
    </div>
    <v-spacer />
    <v-toolbar-title>notBilka</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-btn
        flat
        class="px-0"
        ref="icon-cart-toggle"
        @click.native="toggleCart"
      >
        <v-badge right class="text--black">
          <template v-slot:badge>
            <span class="text--white">{{ getCart.length }}</span>
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
