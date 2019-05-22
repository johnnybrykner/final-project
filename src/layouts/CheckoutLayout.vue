<template>
  <div>
    <checkout-header />
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CheckoutHeader from "@/components/CheckoutHeader.vue";
import { ProductCategory } from "@/types";

@Component({
  components: {
    CheckoutHeader
  }
})
export default class CheckoutLayout extends Vue {}
</script>
