<template>
  <product-list :category="getCategorized" />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProductList from "@/components/ProductList.vue";
import { mapGetters } from "vuex";
import { Product } from "@/types";

@Component({
  computed: {
    ...mapGetters("catalog", ["getProducts"])
  },
  components: {
    ProductList
  }
})
export default class Category extends Vue {
  getProducts!: Product[];

  get getCategorized() {
    return this.getProducts.filter(product =>
      product.category.includes(this.$route.params.category)
    );
  }
}
</script>
