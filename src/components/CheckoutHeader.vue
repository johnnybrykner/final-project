<template>
  <v-toolbar>
    <router-link to="/">
      <v-icon>
        chevron_left
      </v-icon>
      <span class="hidden-sm-and-down">
        Continue shopping
      </span>
    </router-link>
    <v-spacer />
    <v-toolbar-title class="ml-0 logo">notBilka</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-icon>
        lock
      </v-icon>
      <span class="hidden-sm-and-down">
        Totally secure
      </span>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { NavCategory, ProductCategory } from "@/types";

@Component
export default class CheckoutHeader extends Vue {}
</script>

<style lang="scss" scoped>
*:not(.material-icons) {
  font-family: "OS", sans-serif;
  font-weight: 600;
}
::v-deep .v-toolbar__items {
  align-items: center;
}
</style>
