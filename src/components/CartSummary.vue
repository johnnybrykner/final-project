<template>
  <v-card>
    <v-list class="pb-0">
      <h2 class="mx-3 pa-2">
        {{ getTotalProducts + " " + productOrProducts }}
      </h2>
      <v-divider class="mr-4" />
      <v-list class="py-4 mini-cart__list">
        <template v-for="(product, index, xedni) in getCart">
          <mini-cart-item
            :minimal="$vuetify.breakpoint.smAndDown"
            summary
            class="pa-0 mr-3 ml-0 mini-cart__item"
            :product="product"
            :key="index"
          />
          <v-divider class="hidden-sm-and-down mr-4" :key="xedni" />
        </template>
      </v-list>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import MiniCartItem from "@/components/MiniCartItem.vue";
import { mapGetters } from "vuex";
import { Product } from "@/types";

@Component({
  components: {
    MiniCartItem
  },
  computed: {
    ...mapGetters("cart", ["getCart", "getTotalProducts"])
  }
})
export default class CartSummary extends Vue {
  getCart!: Product[];
  getTotalProducts!: number;

  get productOrProducts() {
    if (this.getCart.length > 1) {
      return "Products";
    }
    return "Product";
  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: "OS", sans-serif;
}
.mini-cart__list {
  overflow-x: auto;
  display: flex;
  justify-content: flex-start;
  .mini-cart__item {
    display: flex;
    flex: 0 0 150px;
    border: solid 1px $light-grey;
    &:first-of-type {
      margin-left: 2rem !important;
    }
  }
}
@media (min-width: 960px) {
  .mini-cart__list {
    display: block;
    overflow: hidden;
    padding: 0 !important;
    .v-divider:last-of-type {
      margin-right: 0 !important;
    }
    .mini-cart__item {
      display: block;
      border: none;
      margin: 0 !important;
      padding: 1rem 2rem 0 2rem !important;
      &:first-of-type {
        margin-left: 0 !important;
      }
    }
  }
}
</style>
