<template>
  <v-card class="ma-4">
    <v-img :src="product.image" />
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{ product.name }}</h3>
        <div>description incoming</div>
      </div>
    </v-card-title>
    <v-card-actions class="d-flex justify-space-between">
      <v-flex xs6>
        <v-btn
          flat 
          color="primary"
          ref="add-to-cart"
        >
          Add to cart
        </v-btn>
      </v-flex>
      <v-flex xs4>
        <v-chip disabled v-if="product.category.includes('sale')">kr. {{ product.promo.price }}</v-chip>
        <v-chip color="primary">kr. {{ product.price }}</v-chip>
      </v-flex>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class ProductCard extends Vue {
  @Prop({ type: Object, required: true }) product!: Object;
}
</script>
