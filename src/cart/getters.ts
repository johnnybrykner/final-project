import { Product } from '@/types';

export const getters = {
  getCart(state: any): Product[] {
    return state.cart;
  }
}