<template>
  <v-container pt-0>
    <v-layout column wrap>
      <v-flex xs12>
        <v-container pa-0>
          <v-layout column nowrap justify-space-between>
            <v-btn
              small
              fab
              flat
              class="align-self-end"
              @click.native="closeCart"
            >
              <v-icon>close</v-icon>
            </v-btn>
            <v-flex xs12>
              <h2 class="text-xs-center">
                {{ getTotalProducts + " " + itemOrItems }} in cart
              </h2>
            </v-flex>
            <v-flex xs12>
              <v-divider />
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
      <v-flex xs12 pt-2>
        <div v-for="(product, i) in getCart" :key="i">
          <mini-cart-item @item-removed="isCartEmpty" :product="product" />
          <v-divider class="my-2" />
        </div>
      </v-flex>
      <v-flex xs12>
        <h3 v-if="getCart" class="my-3">Total Kr. {{ cartPrice }}</h3>
        <v-btn
          :disabled="!getCart.length"
          to="/checkout"
          block
          class="accent ma-0 pa-0"
        >
          Go to checkout
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MiniCartItem from "@/components/MiniCartItem.vue";
import { mapGetters } from "vuex";
import { Product } from "@/types";

@Component({
  components: {
    MiniCartItem
  },
  computed: {
    ...mapGetters("cart", ["getCart", "cartPrice", "getTotalProducts"])
  }
})
export default class MiniCart extends Vue {
  getCart!: Product[];
  cartPrice!: number;
  getTotalProducts!: number;

  closeCart() {
    this.$emit("close-cart");
  }

  isCartEmpty() {
    if (this.getCart.length === 0) {
      this.closeCart();
    }
  }

  get itemOrItems() {
    if (this.getTotalProducts === 1) {
      return "item";
    }
    return "items";
  }
}
</script>

<style lang="scss" scoped>
div,
span {
  font-family: "OS", sans-serif;
}
</style>
