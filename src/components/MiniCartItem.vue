<template>
  <v-container class="pa-0 mini-product">
    <v-layout row nowrap align-self-center fill-height ma-0>
      <v-flex xs12 md4 pa-0 d-flex justify-center>
        <img :src="product.image" class="align-self-center px-3" />
      </v-flex>
      <v-flex xs12 md8 v-if="!minimal">
        <v-layout column nowrap fill-height justify-space-around>
          <v-flex>
            <h4>{{ product.name }}</h4>
          </v-flex>
          <v-flex d-flex justify-start caption py-0 v-if="product.color">
            <span class="dark-grey--text">
              Color:
            </span>
            <span class="ml-3">
              {{ product.color }}
            </span>
          </v-flex>
          <v-flex d-flex justify-start caption py-0 v-if="summary">
            <span class="dark-grey--text">
              Quantity
            </span>
            <span class="ml-3">
              {{ product.amount }}
            </span>
          </v-flex>
          <v-flex d-flex py-2 justify-end>
            <span
              v-if="product.promo.before"
              class="dark-grey--text caption align-self-center"
            >
              Was {{ product.promo.before }}
            </span>
            <h4 class="secondary--text ml-2">Kr. {{ product.price }}</h4>
          </v-flex>
          <v-flex py-0 v-if="!summary">
            <span>
              <product-amount
                :product="product"
                @item-removed="$emit('item-removed')"
              />
            </span>
          </v-flex>
        </v-layout>
      </v-flex>
      <div class="quantity-phone em" v-if="minimal && summary">
        {{ "x" + product.amount }}
      </div>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ProductAmount from "@/components/ProductAmount.vue";
import { Product } from "@/types";

@Component({
  components: {
    ProductAmount
  }
})
export default class MiniCartItem extends Vue {
  @Prop({ required: true }) product!: Product;
  @Prop({ type: Boolean }) summary!: boolean;
  @Prop({ type: Boolean }) minimal!: boolean;
}
</script>

<style lang="scss" scoped>
img {
  max-height: 100%;
  max-width: 100%;
}
.d-flex > * {
  flex-grow: 0 !important;
}
.mini-product {
  position: relative;
  height: 150px;
  .quantity-phone {
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>
