<template>
  <v-layout column wrap>
    <v-flex xs12>
      <h4>
        Invoice Address
      </h4>
      <span>
        {{
          activeUser.firstName +
            " " +
            activeUser.lastName +
            ", " +
            activeUser.address
        }}
      </span>
    </v-flex>
    <v-flex xs12>
      <h4>
        Payment Method
      </h4>
      <v-radio-group v-model="activeMethod.method">
        <v-radio
          v-for="(payment, i) in payments"
          :key="i"
          :value="payment.title"
        >
          <template v-slot:label>
            <v-layout row nowrap>
              <v-flex align-self-center>
                <span>{{ payment.title }}</span>
              </v-flex>
              <v-flex d-flex align-center>
                <v-img
                  class="ml-2"
                  height="32"
                  width="32"
                  v-for="(icon, i) in payment.icons"
                  :key="i"
                  :src="icon"
                  contain
                />
              </v-flex>
            </v-layout>
          </template>
        </v-radio>
      </v-radio-group>
    </v-flex>
    <v-flex xs12 v-if="activeMethod.method === 'Credit Card'">
      <h4>
        Payment Card
      </h4>
      <v-checkbox v-model="activeMethod.saveForLater" value="Yes">
        <template v-slot:label>
          <span>Save for future use</span>
        </template>
      </v-checkbox>
    </v-flex>
    <v-flex xs12>
      <v-btn
        class="ma-0"
        :disabled="activeMethod.method === ''"
        @click.native="paymentSelected"
      >
        Use this payment method
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { PaymentChoice, UserDetails } from "@/types";
import { mapGetters } from "vuex";

@Component({
  computed: {
    ...mapGetters("checkout", ["activeUser"])
  }
})
export default class PaymentMethod extends Vue {
  activeUser!: UserDetails;
  activeMethod: PaymentChoice = {
    method: "",
    saveForLater: "No"
  };
  payments = [
    {
      title: "Credit Card",
      icons: [
        "/img/icons/dankort.svg",
        "/img/icons/visa.svg",
        "/img/icons/mastercard.svg",
        "/img/icons/maestro.svg",
        "/img/icons/jcb.svg"
      ]
    },
    {
      title: "MobilePay",
      icons: ["/img/icons/mobilepay.svg"]
    }
  ];
  stepName = this.$parent.$parent.$props.stepName;
  stepNumber = this.$parent.$parent.$props.stepNumber;
  paymentSelected() {
    this.$store.commit("checkout/setStep", this.stepName);
    this.$store.commit("checkout/setPayment", this.activeMethod);
    this.$store.dispatch("checkout/stepChange", this.stepNumber);
  }
}
</script>
