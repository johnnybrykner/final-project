<template>
  <v-card class="checkout-panel" :class="{ blurred: isDisabled }">
    <v-card-title class="pb-2">
      <v-container pa-0>
        <v-layout>
          <v-flex v-if="readonly" icon align-self-baseline shrink>
            <v-icon large color="green" class="font-weight-black">done</v-icon>
          </v-flex>
          <v-divider v-if="readonly" vertical light></v-divider>
          <v-flex align-self-baseline>
            <h2 class="pl-3">{{ title }}</h2>
          </v-flex>
          <v-flex shrink align-self-start v-if="readonly">
            <v-btn
              flat
              small
              color="blue"
              class="ma-0"
              depressed
              @click.native="editStep"
            >
              Edit<v-icon>chevron_right</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-title>
    <v-divider light class="mr-4" v-if="!isDisabled"></v-divider>
    <v-card-text v-if="!isDisabled">
      <slot name="readonly" v-if="readonly"></slot>
      <slot v-else></slot>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { mapGetters } from "vuex";
@Component({
  computed: {
    ...mapGetters("checkout", ["whichStep"])
  }
})
export default class CheckoutPanel extends Vue {
  whichStep!: number;
  @Prop({ type: String, required: true })
  title!: string;
  @Prop({ type: String, required: true })
  stepName!: string;
  @Prop({ type: Number, required: true })
  stepNumber!: number;
  @Prop({ type: Boolean, default: false })
  readonly!: boolean;
  get isDisabled() {
    return this.stepNumber > this.whichStep;
  }
  editStep() {
    this.$store.commit("checkout/unsetStep", this.stepName);
  }
}
</script>

<style lang="scss" scoped>
.blurred {
  filter: blur(1px);
}
*:not(.material-icons) {
  font-family: "OS", sans-serif;
}
</style>
