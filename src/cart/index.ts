import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";
import { Product } from "@/types"

export const state: Product[] = [];

const namespaced: boolean = true;

export const cart = {
  namespaced,
  state,
  actions,
  mutations,
  getters
};