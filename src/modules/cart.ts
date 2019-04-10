import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { Product } from "@/types"

@Module
export default class Cart extends VuexModule {
  static namespaced = true;

  currentCart: Product[] = [];

  get getCart(): Product[] {
    return this.currentCart;
  };

  @Mutation
  addToCart(item: Product) {
    this.currentCart.push(item);
  };
};