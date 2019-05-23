<template>
  <div class="receipt">
    <div class="processing" v-if="loading">
      <v-progress-circular
        :size="50"
        color="blue"
        indeterminate
        class="px-5"
      />
      <h1>
        Your order is being processed
      </h1>
    </div>
    <div v-else class="success">
      <div class="d-flex mt-5">
        <v-icon class="px-3" x-large>
          done_outline
        </v-icon>
        <h1>
          Thank you for your order!
        </h1>
      </div>
      <v-btn class="secondary" large depressed to="/">
        Back to shop
      </v-btn>
    </div>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Receipt extends Vue {
  loading = true;

  created() {
    setTimeout(() => this.loading = false, 7000);
  }
}
</script>

<style lang="scss" scoped>
@keyframes colorize {
  0% {
    background-color: $white;
  }
  20% {
    background-color: $light-grey;
  }
  40% {
    background-color: $dark-grey;
  }
  60% {
    background-color: $secondary;
  }
  80% {
    background-color: $primary;
  }
  100% {
    background-color: $accent;
  }
}
*:not(.material-icons) {
  font-family: "OS", sans-serif;
  font-weight: 600;
}
.receipt {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;
  animation-name: colorize;
  animation-duration: 7s;
  animation-fill-mode: forwards;
  .processing {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  .success {
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
}
</style>

