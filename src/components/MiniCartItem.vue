<template>
  <v-container class="product">
    <v-layout row nowrap align-self-center ma-0>
      <v-flex xs12 md4 pa-0 d-flex>
        <img :src="product.image" class="align-self-center px-3" />
      </v-flex>
      <v-flex xs12 md8 v-if="$vuetify.breakpoint.mdAndUp">
        <v-layout column wrap>
          <v-flex xs12>
            <h4>{{ product.name }}</h4>
          </v-flex>
          <v-flex d-flex justify-start caption py-0>
            <span class="grey--text">
              Color:
            </span>
            <span class="ml-3">
              {{ product.color }}
            </span>
          </v-flex>
          <v-flex d-flex justify-start caption py-0>
            <span class="grey--text">
              Amount:
            </span>
            <span class="ml-3">
              2
            </span>
          </v-flex>
          <v-flex d-flex justify-end py-3>
            <span
              v-if="product.promo.before"
              class="align-self-end"
            >
              {{ product.price.before }}
            </span>
            <span
              class="align-self-end ml-3"
            >
              {{ product.price }}
            </span>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-divider v-if="$vuetify.breakpoint.mdAndUp" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Product } from '@/types';

@Component
export default class MiniCartItem extends Vue {
  @Prop({ required: true }) product!: Product;
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
.d-flex > * {
  flex-grow: 0 !important;
}
</style>