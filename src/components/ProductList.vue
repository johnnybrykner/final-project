<template>
  <v-layout row wrap>
    <v-flex class="my-2" xs12 sm6 lg4 v-for="(product, i) in category" :key="i">
      <product-card :product="product" />
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ProductCard from "@/components/ProductCard.vue";
import { Product } from "@/types";

@Component({
  components: {
    ProductCard
  }
})
export default class ProductList extends Vue {
  @Prop({ required: true }) category!: Product[];
}
</script>

<style lang="scss" scoped>
* {
  font-family: "OS", sans-serif;
}
</style>
