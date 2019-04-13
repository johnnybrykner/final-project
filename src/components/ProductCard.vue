<template>
  <v-card class="ma-4">
    <v-img :src="product.image" />
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ product.name }}</h3>
        <div>description incoming</div>
      </div>
    </v-card-title>
    <v-card-actions class="d-flex justify-space-between">
      <v-flex xs6>
        <v-btn class="primary text--black" ref="add-to-cart" @click.native="addToCart">
          Add to cart
        </v-btn>
      </v-flex>
      <v-flex xs6 d-flex align-center justify-space-around>
        <span class="text--grey caption" v-if="product.category.includes('sale')"
          >Was kr. {{ product.promo.before }}</span
        >
        <v-chip label disabled class="secondary text--black">kr. {{ product.price }}</v-chip>
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
