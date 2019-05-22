<template>
  <v-container grid-list-xl>
    <v-layout
      :column="$vuetify.breakpoint.xs"
      :wrap="$vuetify.breakpoint.xs"
      :row="$vuetify.breakpoint.smAndUp"
      :nowrap="$vuetify.breakpoint.smAndUp"
      class="pa-0"
    >
      <v-flex xs12 sm6 v-for="(method, i) in deliveryMethods" :key="i">
        <v-btn
          large
          :class="method.class"
          class="ma-0 delivery-button"
          @click.native="activeOption = method.data"
        >
          <v-icon large>
            {{ method.icon }}
          </v-icon>
          <div class="delivery-description">
            <span>
              {{ method.data.method }}
            </span>
            <span class="caption">
              {{ method.subtitle }}
            </span>
          </div>
        </v-btn>
      </v-flex>
    </v-layout>

    <v-layout
      v-if="activeOption.method === 'Delivery to address'"
      column
      nowrap
    >
      <v-flex xs12 pb-0>
        <h3>
          Delivery address
        </h3>
      </v-flex>
      <v-flex class="address-field" xs12>
        <span>
          {{
            activeUser.firstName +
              " " +
              activeUser.lastName +
              ", " +
              (hasBeenSet ? activeOption.address : activeUser.address)
          }}
        </span>
        <v-btn
          flat
          small
          class="ma-0 secondary--text"
          depressed
          :disabled="editing"
          @click.native="editing = true"
        >
          Edit<v-icon>chevron_right</v-icon>
        </v-btn>
      </v-flex>
      <v-flex xs12 v-if="editing">
        <v-text-field
          label="Address"
          append-icon="done"
          @click:append="updateAddress"
          v-model="activeOption.address"
        />
      </v-flex>
    </v-layout>

    <v-layout column nowrap v-if="activeOption.method === 'Pakkeshop delivery'">
      <v-flex xs12 pb-0>
        <h3>
          Delivery place
        </h3>
      </v-flex>
      <v-flex pb-0 class="address-field" xs12>
        <span>{{
          activeUser.firstName +
            " " +
            activeUser.lastName +
            ", " +
            "Posthus Q8, Silkeborgvej 306, 8230 Åbyhøj"
        }}</span>
        <v-btn flat small class="ma-0 secondary--text" depressed>
          Edit<v-icon>chevron_right</v-icon>
        </v-btn>
      </v-flex>
      <v-flex pt-0 xs12>
        <span class="em">Mon-Sun 06-23</span>
      </v-flex>
    </v-layout>

    <v-btn
      :disabled="editing"
      class="ma-0"
      v-if="activeOption.method"
      @click.native="deliverySelected"
    >
      Use delivery settings
    </v-btn>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { DeliveryMethod, UserDetails } from "@/types";
import { mapGetters } from "vuex";

@Component({
  computed: {
    ...mapGetters("checkout", ["activeUser"])
  }
})
export default class DeliveryDetails extends Vue {
  activeUser!: UserDetails;
  editing = false;
  get hasBeenSet() {
    return this.$store.state.checkout.deliveryDetails.method !== "";
  }
  deliveryMethods = [
    {
      icon: "home",
      subtitle: "2-4 days / Mon-Fri / Kr. 49",
      class: "address",
      data: {
        method: "Delivery to address",
        address: this.hasBeenSet
          ? this.$store.state.checkout.deliveryDetails.address
          : this.$store.state.checkout.userDetails.address,
        price: 49
      }
    },
    {
      icon: "room",
      subtitle: "1-3 days / Mon-Sat / Kr. 29",
      class: "pakkeshop",
      data: {
        method: "Pakkeshop delivery",
        address: "Posthus Q8, Silkeborgvej 306, 8230 Åbyhøj",
        price: 29
      }
    }
  ];
  activeOption: DeliveryMethod = {
    method: "",
    address: this.$store.state.checkout.userDetails.address,
    price: 49
  };
  stepName = this.$parent.$parent.$props.stepName;
  stepNumber = this.$parent.$parent.$props.stepNumber;
  deliverySelected() {
    this.$store.commit("checkout/setStep", this.stepName);
    this.$store.commit("checkout/setDelivery", this.activeOption);
    this.$store.dispatch("checkout/stepChange", this.stepNumber);
  }
  updateAddress() {
    this.$store.commit("checkout/setDelivery", this.activeOption);
    this.editing = false;
  }
}
</script>

<style lang="scss" scoped>
.d-flex > * {
  flex-grow: 0 !important;
}
.address-field {
  display: flex;
  justify-content: space-between;
}
::v-deep .delivery-button {
  width: 100%;
  height: 100px;
  .v-btn__content {
    display: flex;
    flex-flow: row nowrap;
    .delivery-description {
      display: flex;
      flex-flow: column nowrap;
    }
  }
}
</style>
