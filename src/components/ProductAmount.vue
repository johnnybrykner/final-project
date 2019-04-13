<template>
  <v-layout align-center justify-space-between class="slider">
    <v-btn class="ma-0" fab small @click.native="$store.commit('cart/removeFromCart', product)">
      <v-icon v-if="product.amount === 1">close</v-icon>
      <v-icon>exposure_neg_1</v-icon>
    </v-btn>
    <h3>
      {{ product.amount }}
    </h3>
    <v-btn class="ma-0" fab small @click.native="$store.commit('cart/addToCart', product)">
      <v-icon>exposure_plus_1</v-icon>
    </v-btn>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Product } from "@/types";

@Component
export default class MiniCartItem extends Vue {
  @Prop({ required: true }) product!: Product;
}
</script>

<style lang="scss" scoped>
.slider {
  border-radius: 50px;
  background-color: $grey;
}
</style>
