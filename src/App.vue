<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import { Product } from "@/types";

const defaultLayout = "default";

@Component({
  computed: {
    ...mapGetters("cart", ["getCart"])
  }
})
export default class App extends Vue {
  get layout(): string {
    return `${this.$route.meta.layout || defaultLayout}-layout`;
  }

  getCart!: Product[];

  created() {
    const parsed = localStorage.getItem("currentCart");
    if (parsed !== null) {
      this.$store.commit("cart/setCart", JSON.parse(parsed));
    }
  }
}
</script>
