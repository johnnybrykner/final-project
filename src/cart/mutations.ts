import { Product } from '@/types';

export const mutations = {
  changeCart(state: any, item: Product) {
    state.cart += item;
  }
}