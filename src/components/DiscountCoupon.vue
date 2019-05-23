<template>
  <v-card>
    <v-card-title class="pa-0">
      <v-icon v-if="added" large class="accent--text pa-2 font-weight-black">
        done
      </v-icon>
      <v-divider v-if="added" vertical light />
      <h4 class="grow text-xs-center py-2">
        Discount coupon or gift card?
      </h4>
    </v-card-title>
    <v-divider light />
    <v-card-text v-if="!adding" class="d-flex">
      <v-btn
        flat
        small
        class="ma-0 secondary--text"
        depressed
        @click.native="adding = true"
      >
        <span v-if="added === false">
          Add
        </span>
        <span v-else>
          Edit
        </span>
        <v-icon>chevron_right</v-icon>
      </v-btn>
    </v-card-text>
    <v-card-actions v-else>
      <v-text-field
        label="Enter code"
        :value="this.added ? this.code : ''"
        append-icon="done"
        append-outer-icon="clear"
        @click:append="applyCode"
        @click:append-outer="cancelCode"
        counter
        v-model="code"
      />
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { DiscountInterface } from "@/types.ts";
@Component
export default class DiscountCoupon extends Vue {
  adding = false;
  added = false;
  code = "";
  applyCode() {
    this.$store.commit("checkout/setCoupon", {
      applied: true,
      code: this.code
    });
    this.added = true;
    this.adding = false;
  }
  cancelCode() {
    this.$store.commit("checkout/setCoupon", {
      applied: false,
      coupon: ""
    });
    this.added = false;
    this.adding = false;
  }
}
</script>

<style lang="scss" scoped>
*:not(.material-icons) {
  font-family: "OS", sans-serif;
}
</style>
