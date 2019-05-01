<template>
  <div>
    <product-card
      v-for="(product, i) in category"
      :key="i"
      :product="product"
    />
  </div>
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

