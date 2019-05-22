import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import { Product } from "@/types";

@Module
export default class Cart extends VuexModule {
  static namespaced = true;

  currentCart: Product[] = [];

  subTotal: number = 0;

  get getCart(): Product[] {
    return this.currentCart;
  }
  get cartPrice(): number {
    return this.subTotal;
  }
  get getTotalProducts(): number {
    return this.currentCart.reduce(
      (total, current) => total + current.amount,
      0
    );
  }

  @Action({ commit: "setTotal" })
  countPrice() {
    let subTotal = 0;
    for (let item of this.currentCart) {
      subTotal += item.price * item.amount;
    }
    return subTotal;
  }

  @Mutation
  addToCart(item: Product) {
    if (this.currentCart.includes(item)) {
      let index: number = this.currentCart.indexOf(item);
      this.currentCart[index].amount++;
    } else {
      item.amount = 1;
      this.currentCart.push(item);
    }
    localStorage.setItem("currentCart", JSON.stringify(this.currentCart));
  }
  @Mutation
  removeFromCart(item: Product) {
    let index: number = this.currentCart.indexOf(item);
    this.currentCart[index].amount > 1
      ? this.currentCart[index].amount--
      : this.currentCart.splice(index, 1);
    localStorage.setItem("currentCart", JSON.stringify(this.currentCart));
  }
  @Mutation
  setCart(cart: Product[]) {
    this.currentCart = cart;
  }
  @Mutation
  setTotal(subTotal: number) {
    this.subTotal = subTotal;
  }
  @Mutation
  emptyCart() {
    this.currentCart = [];
  }
}
