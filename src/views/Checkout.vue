<template>
  <v-container grid-list-lg pa-0>
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

        <div class="text-xs-center hidden-sm-and-down">
          <v-checkbox
            v-model="checked"
            label="I accept notBilka's data protection and usage terms."
          ></v-checkbox>
          <v-btn :disabled="!checked || flowIncomplete" large block
            >Go to payment</v-btn
          >
        </div>
      </v-flex>
      <v-flex xs12 md6 lg5>
        <cart-summary />
        <order-total />
        <discount-coupon class="my-3" />
        <div class="hidden-md-and-up">
          <v-checkbox
            v-model="checked"
            label="I accept notBilka's data protection and usage terms."
          ></v-checkbox>
          <v-btn :disabled="!checked || flowIncomplete" large block
            >Go to payment</v-btn
          >
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import CartSummary from "@/components/CartSummary.vue";
import OrderTotal from "@/components/OrderTotal.vue";
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
    OrderTotal,
    CartSummary,
    CheckoutPanel,
    UserCredentials,
    DeliveryDetails,
    SimpleList,
    PaymentMethod,
    DiscountCoupon
  },
  computed: {
    ...mapGetters("checkout", ["checkoutStatus"])
  }
})
export default class Checkout extends Vue {
  checkoutStatus!: CheckoutStatus;
  get flowIncomplete() {
    return Object.values(this.checkoutStatus).includes(false);
  }
  checked = false;

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
.v-input.v-input--checkbox {
  justify-content: center;
}
</style>
