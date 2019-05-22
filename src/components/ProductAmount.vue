<template>
  <v-layout align-center justify-space-between class="slider">
    <v-btn
      class="ma-0"
      fab
      small
      @click.native="itemRemoved"
      ref="increase-quantity"
    >
      <v-icon v-if="product.amount === 1">clear</v-icon>
      <v-icon>exposure_neg_1</v-icon>
    </v-btn>
    <h3>
      {{ product.amount }}
    </h3>
    <v-btn
      class="ma-0"
      fab
      small
      @click.native="itemAdded"
      ref="decrease-quantity"
    >
      <v-icon>exposure_plus_1</v-icon>
    </v-btn>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Product } from "@/types";

@Component
export default class ProductAmount extends Vue {
  @Prop({ required: true }) product!: Product;

  itemAdded() {
    this.$store.commit("cart/addToCart", this.product);
    this.$store.dispatch("cart/countPrice");
  }

  itemRemoved() {
    this.$store.commit("cart/removeFromCart", this.product);
    this.$store.dispatch("cart/countPrice");
    this.$emit("item-removed");
  }
}
</script>

<style lang="scss" scoped>
.slider {
  border-radius: 50px;
  background-color: $light-grey;
}
</style>
