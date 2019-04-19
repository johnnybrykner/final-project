<template>
  <v-card class="ma-4">
    <v-img :src="product.image" />
    <v-card-title class="pa-3">
      <div>
        <h3 class="mb-0">{{ product.name }}</h3>
        <div>description incoming</div>
      </div>
    </v-card-title>
    <v-card-actions class="d-flex justify-space-between pa-3">
      <v-flex xs6>
        <v-btn class="primary black--text" ref="add-to-cart" @click.native="addToCart">
          Add to cart
        </v-btn>
      </v-flex>
      <v-flex xs6>
        <v-layout column align-end>
          <span class="dark-grey--text caption" v-if="product.category.includes('sale')"
            >Was kr. {{ product.promo.before }}</span
          >
          <h3 class="secondary--text">kr. {{ product.price }}</h3>
        </v-layout>
      </v-flex>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Product } from "@/types";

@Component
export default class ProductCard extends Vue {
  @Prop({ required: true }) product!: Product;

  addToCart() {
    this.$store.commit("cart/addToCart", this.product);
  }
}
</script>
