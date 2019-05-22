<template>
  <v-container :mt-5="$vuetify.breakpoint.mdAndUp" grid-list-lg pa-0>
    <v-layout row wrap>
      <v-flex xs12 md6 lg7>
        <checkout-panel
          :title="user.header"
          stepName="loggedIn"
          :readonly="checkoutStatus.loggedIn"
          :stepNumber="1"
        >
          <template #readonly>
            <simple-list :list-items="user.listItems"></simple-list>
          </template>
          <user-credentials />
        </checkout-panel>

        <checkout-panel
          :title="delivery.header"
          stepName="deliverySet"
          :readonly="checkoutStatus.deliverySet"
          :stepNumber="2"
        >
          <template #readonly>
            <simple-list :list-items="delivery.listItems"></simple-list>
          </template>
          <delivery-details />
        </checkout-panel>

        <checkout-panel
          :title="payment.header"
          stepName="paymentSet"
          :readonly="checkoutStatus.paymentSet"
          :stepNumber="3"
        >
          <template #readonly>
            <simple-list :list-items="payment.listItems"></simple-list>
          </template>
          <payment-method />
        </checkout-panel>
      </v-flex>
      <v-flex xs12 md6 lg5>
        <cart-summary />
        <v-card class="pl-2">
          <v-card-title>
            <h3 class="secondary--text">Total Kr. {{ cartPrice }}</h3>
          </v-card-title>
        </v-card>
        <discount-coupon class="my-3" />
        <div class="px-4">
          <v-checkbox
            v-model="checked"
            label="I accept notBilka's data protection and usage terms."
          />
          <v-btn
            class="accent"
            :disabled="!checked || flowIncomplete"
            large
            block
            to="/"
            @click.native="checkout"
            >Approve and proceed</v-btn
          >
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CartSummary from "@/components/CartSummary.vue";
import CheckoutPanel from "@/components/CheckoutPanel.vue";
import UserCredentials from "@/components/UserCredentials.vue";
import DeliveryDetails from "@/components/DeliveryDetails.vue";
import SimpleList from "@/components/SimpleList.vue";
import PaymentMethod from "@/components/PaymentMethod.vue";
import DiscountCoupon from "@/components/DiscountCoupon.vue";
import { CheckoutStatus } from "@/types.ts";
import { mapGetters } from "vuex";

@Component({
  components: {
    CartSummary,
    CheckoutPanel,
    UserCredentials,
    DeliveryDetails,
    SimpleList,
    PaymentMethod,
    DiscountCoupon
  },
  computed: {
    ...mapGetters("checkout", ["checkoutStatus"]),
    ...mapGetters("cart", ["cartPrice"])
  }
})
export default class Checkout extends Vue {
  checkoutStatus!: CheckoutStatus;
  cartPrice!: number;
  get flowIncomplete() {
    return Object.values(this.checkoutStatus).includes(false);
  }
  checked = false;
  checkout() {
    localStorage.removeItem("currentCart");
    this.$store.commit("cart/emptyCart");
  }

  get user() {
    return {
      header: "Your information",
      listItems: [
        {
          label: "First name",
          value: this.$store.state.checkout.userDetails.firstName
        },
        {
          label: "Surname",
          value: this.$store.state.checkout.userDetails.lastName
        },
        {
          label: "Address",
          value: this.$store.state.checkout.userDetails.address
        }
      ]
    };
  }
  get delivery() {
    return {
      header: "Delivery",
      listItems: [
        {
          label: "Method",
          value: this.$store.state.checkout.deliveryDetails.method
        },
        {
          label: "Delivery address",
          value: this.$store.state.checkout.deliveryDetails.address
        },
        {
          label: "Price",
          value: this.$store.state.checkout.deliveryDetails.price
        }
      ]
    };
  }
  get payment() {
    return {
      header: "Payment",
      listItems: [
        {
          label: "Invoice address",
          value: this.$store.state.checkout.userDetails.address
        },
        {
          label: "Payment method",
          value: this.$store.state.checkout.paymentMethod.method
        },
        {
          label: "Save card",
          value: this.$store.state.checkout.paymentMethod.saveForLater
        }
      ]
    };
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none;
  padding: 0;
}
.checkout-panel:not(:last-of-type) {
  margin-bottom: 2rem;
}
*:not(.material-icons) {
  font-family: "OS", sans-serif;
}
</style>
