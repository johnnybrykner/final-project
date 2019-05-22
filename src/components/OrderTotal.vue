<template>
  <div>
    <!-- <v-layout mb-1 v-if="totals.beforeDiscount">
      <span>Before discount</span>
      <v-spacer />
      <product-price :price="totals.beforeDiscount" />
    </v-layout>
    <v-layout mb-1 v-if="totals.discount">
      <span>Discount</span>
      <v-spacer />
      <product-price :price="totals.discount" />
    </v-layout>
    <v-layout mb-4 v-if="totals.shipping">
      <span>Delivery</span>
      <v-spacer />
      <span class="mr-2">
        from
      </span>
      <product-price :price="totals.shipping" />
    </v-layout>
    <v-layout v-if="totals.total">
      <span>Grand total</span>
      <v-spacer />
      <product-price :price="totals.total" large bold />
    </v-layout> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class OrderTotal extends Vue {}
</script>

<style scoped lang="scss">
.v-list {
  padding: 0 !important;
}
.v-divider {
  margin-left: -24px;
}
.v-list__tile {
  padding: 0;
  height: 2rem;
}
</style>
