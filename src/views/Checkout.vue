<template>
  <v-container class="checkout" :mt-5="$vuetify.breakpoint.mdAndUp" grid-list-lg pa-0>
    <v-layout class="nada warning ma-0" v-if="cartPrice === 0">
      <h4 class="text-xs-center">
        Are you sure you want to check out with NOTHING?
      </h4>
    </v-layout>
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
          <v-card-title class="grand-total">
            <div v-if="deliveryCost">
              <span class="em">
                {{ "Delivery: " + "Kr. " + deliveryCost }}
              </span>
              <v-divider light class="mb-2" />
            </div>
            <div v-if="discountCoupon.applied">
              <span class="em">
                {{ discountCoupon.code + ": 20% OFF" }}
              </span>
              <v-divider light class="mb-2" />
            </div>
            <h3 class="secondary--text">Total Kr. {{ Math.round(finalPrice) }}</h3>
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
            to="/receipt"
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
import { CheckoutStatus, DiscountInterface } from "@/types.ts";
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
    ...mapGetters("checkout", ["checkoutStatus", "discountCoupon"]),
    ...mapGetters("cart", ["cartPrice"])
  }
})
export default class Checkout extends Vue {
  checkoutStatus!: CheckoutStatus;
  cartPrice!: number;
  discountCoupon!: DiscountInterface;
  get flowIncomplete() {
    return Object.values(this.checkoutStatus).includes(false);
  }
  checked = false;
  checkout() {
    localStorage.removeItem("currentCart");
    this.$store.commit("cart/emptyCart");
  }
  get deliveryCost() {
    return this.$store.state.checkout.deliveryDetails.price;
  }
  get finalPrice() {
    let multiplier = 100;
    if (this.discountCoupon.applied) {
      multiplier = 80;
    }
    return ((this.cartPrice + this.deliveryCost) / 100) * multiplier;
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
.nada {
  h4 {
    width: 100%;
  }
}
.grand-total {
  flex-flow: column nowrap;
  align-items: baseline;
}
@media (min-width: 960px) {
  .checkout {
    max-width: 1264px;
  }
}
</style>
