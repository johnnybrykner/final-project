<template>
  <v-toolbar>
    <router-link to="/cart">
      Back to cart
    </router-link>
    <v-spacer />
    <v-toolbar-title>notBilka</v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-icon>
        lock
      </v-icon>
      <span v-if="$vuetify.breakpoint.smAndUp">
        Totally secure
      </span>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { NavCategory, ProductCategory } from "@/types";

@Component
export default class CheckoutHeader extends Vue {
  
}
</script>

