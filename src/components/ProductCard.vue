<template>
  <div class="product mx-4">
    <v-hover>
      <v-card slot-scope="{ hover }">
        <v-img contain :max-height="300" :src="product.image"> 
          <v-expand-transition>
            <router-link :to="`/products/${product.category[0]}/${product.slug}`" v-if="hover" class="overlay secondary white--text">
              <h3>Go to product</h3>
            </router-link>
          </v-expand-transition>
        </v-img>
        <v-card-title class="pa-3">
          <div>
            <h4 class="mb-0">{{ product.name }}</h4>
            <div>Most definitely worth the purchase</div>
          </div>
        </v-card-title>
        <v-card-actions class="d-flex justify-space-between pa-3">
          <v-flex xs6>
            <v-btn
              class="primary black--text"
              ref="add-to-cart"
              @click.native="addToCart"
            >
              Add to cart
            </v-btn>
          </v-flex>
          <v-flex xs6>
            <v-layout column align-end>
              <span
                class="dark-grey--text caption"
                v-if="product.category.includes('sale')"
                >Was kr. {{ product.promo.before }}</span
              >
              <h3 class="secondary--text">kr. {{ product.price }}</h3>
            </v-layout>
          </v-flex>
        </v-card-actions>
      </v-card>
    </v-hover>
    <v-snackbar v-model="snackbar" :timeout="4000">
      Product added to cart!
      <v-btn @click.native="cancel" class="secondary">
        Remove
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Product } from "@/types";

@Component
export default class ProductCard extends Vue {
  @Prop({ required: true }) product!: Product;

  snackbar: boolean = false;

  cancel() {
    this.$store.commit("cart/removeFromCart", this.product);
    this.$store.dispatch("cart/countPrice");
    this.snackbar = false;
  }

  addToCart() {
    this.$store.commit("cart/addToCart", this.product);
    this.$store.dispatch("cart/countPrice");
    this.snackbar = true;
  }
}
</script>

<style lang="scss" scoped>
.product {
  height: 500px;
  .v-card {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    .overlay {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 0;
      opacity: .75;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
