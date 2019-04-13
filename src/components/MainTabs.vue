<template>
  <v-tabs v-model="active" fixed-tabs>
    <v-tab v-for="(category, i) in getCategories" :key="i" ripple>{{
      category
    }}</v-tab>
    <v-tab-item v-for="(category, i) in getCategories" :key="i">
      <product-card
        v-for="(product, i) in categorizedProducts[i]"
        :key="i"
        :product="product"
      ></product-card>
    </v-tab-item>
  </v-tabs>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProductCard from "@/components/ProductCard.vue";
import { Product } from "@/types";
import { mapGetters } from "vuex";

@Component({
  components: {
    ProductCard
  },
  computed: {
    ...mapGetters("catalog", ["getCategories", "getProducts"])
  }
})
export default class MainTabs extends Vue {
  active = null;
  getCategories!: string[];
  getProducts!: Product[];

  get categorizedProducts() {
    let categorized: any[] = [];
    for (let i = 0; i < this.getCategories.length; i++) {
      categorized[i] = this.getProducts.filter(product =>
        product.category.includes(this.getCategories[i])
      );
    }
    return categorized;
  }
}
</script>
