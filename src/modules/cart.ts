import { Module, VuexModule, Mutation } from "vuex-module-decorators";
import { Product } from "@/types";

@Module
export default class Cart extends VuexModule {
  static namespaced = true;

  currentCart: Product[] = [];

  get getCart(): Product[] {
    return this.currentCart;
  }
  get getTotalProducts(): number {
    return this.currentCart.reduce((total, current) => total + current.amount, 0);
  }

  @Mutation
  addToCart(item: Product) {
    if (this.currentCart.includes(item)) {
      let index: number = this.currentCart.indexOf(item);
      this.currentCart[index].amount ++;
    }
    else {
      item.amount = 1;
      this.currentCart.push(item);
    }
    localStorage.setItem("currentCart", JSON.stringify(this.currentCart));
  };
  @Mutation
  removeFromCart(item: Product) {
    let index: number = this.currentCart.indexOf(item);
    this.currentCart[index].amount > 1 ? this.currentCart[index].amount -- : this.currentCart.splice(index, 1);
    localStorage.setItem("currentCart", JSON.stringify(this.currentCart));
  };
  @Mutation
  setCart(cart: Product[]) {
    this.currentCart = cart;
  }
}
