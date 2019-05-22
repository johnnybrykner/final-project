<template>
  <v-container pa-0>
    <v-layout wrap>
      <v-flex xs12>
        <v-form>
          <v-container>
            <v-layout
              :wrap="$vuetify.breakpoint.xs"
              :nowrap="$vuetify.breakpoint.smAndUp"
            >
              <v-flex xs12 md4>
                <v-text-field
                  v-model="user.firstName"
                  label="First name"
                  required
                />
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field
                  v-model="user.lastName"
                  label="Last name"
                  required
                />
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field v-model="user.address" label="Address" required />
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
      </v-flex>
      <v-flex xs12>
        <v-btn class="mx-3" :disabled="!isValid" @click.native="userSet">
          Continue as {{ user.firstName }}
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { UserDetails } from "@/types";

@Component
export default class UserCredentials extends Vue {
  user: UserDetails = {
    firstName: this.$store.state.checkout.userDetails.firstName,
    lastName: this.$store.state.checkout.userDetails.lastName,
    address: this.$store.state.checkout.userDetails.address
  };

  get isValid() {
    return (
      this.user.firstName !== "" &&
      this.user.lastName !== "" &&
      this.user.address !== ""
    );
  }

  stepName = this.$parent.$parent.$props.stepName;
  stepNumber = this.$parent.$parent.$props.stepNumber;

  userSet() {
    this.$store.commit("checkout/setStep", this.stepName);
    this.$store.commit("checkout/setUser", this.user);
    this.$store.dispatch("checkout/stepChange", this.stepNumber);
  }
}
</script>
