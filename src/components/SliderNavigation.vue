<template>
  <v-list class="pa-0">
    <v-list-tile
      class="px-4 py-2 elevation-1"
      v-for="(item, i) in navCategories"
      :key="i"
    >
      <router-link :to="item.to" v-if="item.type === 'nav'">
        {{ item.title }}
      </router-link>
      <v-expansion-panel v-else>
        <v-expansion-panel-content>
          <template v-slot:header>
            Categories
          </template>
          <v-list>
            <v-layout column wrap>
              <v-list-tile v-for="(category, i) in productCategories" :key="i">
                <router-link :to="category.to">
                  {{ category.title }}
                </router-link>
              </v-list-tile>
            </v-layout>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-list-tile>
  </v-list>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { NavCategory, ProductCategory } from "@/types";

@Component
export default class SliderNavigation extends Vue {
  navCategories: NavCategory[] = [
    {
      type: "nav",
      title: "Home",
      to: "/"
    },
    {
      type: "nav",
      title: "Cart",
      to: "/cart"
    },
    {
      type: "nav",
      title: "Checkout",
      to: "/checkout"
    },
    {
      type: "product",
      title: "Categories"
    }
  ];
  productCategories: ProductCategory[] = [
    {
      title: "Electronics",
      to: "/products/electronics"
    },
    {
      title: "Outdoors",
      to: "/products/outdoors"
    }
  ];
}
</script>

<style lang="scss" scoped>
::v-deep .v-expansion-panel {
  max-height: 100%;
  box-shadow: none;
  .v-expansion-panel__header {
    padding: 0;
  }
  .v-expansion-panel__container {
    background-color: transparent;
  }
}
a {
  text-decoration: none;
  color: $black;
}
</style>
