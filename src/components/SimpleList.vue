<template>
  <v-container pa-0 grid-list-sm>
    <v-layout row wrap v-for="(listItem, index) in listItems" :key="index">
      <v-flex xs12 md5 pt-1 pb-0 grey--text>{{ listItem.label }}</v-flex>
      <v-flex xs12 md7 pb-1 pt-0>{{ listItem.value }}</v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({})
export default class SimpleList extends Vue {
  @Prop({ type: Array }) listItems!: Array<any>;
}
</script>

<style lang="scss" scoped></style>
