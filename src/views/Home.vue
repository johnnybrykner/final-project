<template>
  <main-tabs />
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MainTabs from "@/components/MainTabs.vue";

@Component({
  components: {
    MainTabs
  }
})
export default class Home extends Vue {}
</script>
