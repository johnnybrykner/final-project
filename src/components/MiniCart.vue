<template>
  <div>
    <v-container px-1 pt-1 pb-0>
      <v-layout column nowrap>
        <v-btn small fab class="align-self-end" @click.native="closeCart">
          <v-icon>close</v-icon>
        </v-btn>
        <v-flex xs12>
          <h1 class="text-xs-center">
            {{ getCart.length + " " + itemOrItems }} in cart
          </h1>
        </v-flex>
        <v-flex xs12>
          <v-divider />
        </v-flex>
      </v-layout>
    </v-container>
    <mini-cart-item
      v-for="(product, i) in getCart"
      :key="i"
      :product="product"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import MiniCartItem from "@/components/MiniCartItem.vue";
import { mapGetters } from "vuex";
import { Product } from "@/types";

@Component({
  components: {
    MiniCartItem
  },
  computed: {
    ...mapGetters("cart", ["getCart"])
  }
})
export default class MiniCart extends Vue {
  getCart!: Product[];

  closeCart(): void {
    this.$emit("close-cart");
  }

  get itemOrItems() {
    if (this.getCart.length === 1) {
      return "item";
    }
    return "items";
  }
}
</script>
