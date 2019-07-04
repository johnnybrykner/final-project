<template>
  <v-container grid-list-xl :mt-5="$vuetify.breakpoint.mdAndUp">
    <v-layout :column="$vuetify.breakpoint.smAndDown">
      <v-flex xs12 md7>
        <v-img :src="product.image" />
      </v-flex>

      <v-flex xs12 md5 offset-md1>
        <h1>{{ product.name }}</h1>
        <div class="mb-4">
          Most definitely worth the purchase
        </div>
        <v-select
          box
          v-model="quantity"
          class="white"
          :items="quantities"
          label="Amount"
        ></v-select>
        <v-divider />
        <v-layout column nowrap>
          <v-flex xs12 d-flex justify-end align-end class="secondary--text h3">
            {{ 'kr.' + product.price }}
          </v-flex>
          <v-flex xs12 mb-2>
            <v-layout class="action__options">
              <v-flex xs12 class="cart">
                <v-btn
                  @click.prevent="addToCart"
                  depressed
                  block
                  class="secondary"
                >
                  Add to cart
                </v-btn>
                <section class="d-flex justify-space-between availability">
                  <h5 class="caption">
                    In stock online
                  </h5>
                  <span class="caption">
                    Quick delivery
                  </span>
                </section>
              </v-flex>
            </v-layout>
          </v-flex>

          <v-divider />

          <v-flex xs12>
            <v-layout column nowrap>
              <v-flex xs12 d-flex pb-0>
                <span class="caption">
                  Can be financed for as low as
                  <em class="caption font-weight-bold"
                    >kr.111,12 per month.</em
                  >
                </span>
                <router-link to="/" class="caption justify-self-end">
                  <h5>
                    See options
                  </h5>
                </router-link>
              </v-flex>
              <v-flex xs12 py-0>
                <span class="caption grey--text">
                  Monthly cost may vary in accordance to our terms and conditions
                </span>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";

@Component({
  computed: {
    ...mapGetters("catalog", ["getViewport"])
  }
})
export default class Product extends Vue {
  getViewport!: number;
  quantity = 5;
  quantities = [1, 2, 3, 4, 5];
  product = {
      name: 'Sharp 50" UHD TV',
      price: 2499,
      category: ["electronics"],
      amount: 0,
      stock: 5,
      color: "black",
      image: `https://bilkadk.imgix.net/medias/sys_master/root/hae/hb2/11354062749726.jpg?w=${
        this.getViewport
      }&auto=format&fm=jpg`,
      slug: "sharp-50-uhd-tv"
    };

  get productByName() {
    return this.$store.state.Catalog.products.find((product: any) => {
      return product.slug === this.$route.params;
    })
  }

  addToCart() {
    for (let i = 0; i < this.quantity; i++) {
      this.$store.commit("cart/addToCart", this.product)
    }
  }

  // created() {
  //   this.product = 
  // }
}
</script>

<style lang="scss">
*:not(.material-icons) {
  font-family: "OS", sans-serif;
  font-weight: 600;
}
.availability * {
  flex-grow: 0!important;
}
</style>

