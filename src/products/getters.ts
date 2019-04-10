import { Product } from "@/types"

export const getters = {
  getCategories(state: any): string[] {
    return state.categories;
  },
  getProducts(state: any): Product[] {
    return state.products;
  },
  getWidth(): number {
    return window.innerWidth;
  }
};
