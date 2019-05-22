import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";
import {
  CheckoutStatus,
  DeliveryMethod,
  PaymentChoice,
  DiscountInterface,
  UserDetails
} from "@/types";

@Module
export default class Checkout extends VuexModule {
  static namespaced = true;

  currentStep = 1;
  checkoutSteps: CheckoutStatus = {
    loggedIn: false,
    deliverySet: false,
    paymentSet: false
  };
  userDetails: UserDetails = {
    firstName: "",
    lastName: "",
    address: ""
  };
  deliveryDetails: DeliveryMethod = {
    method: "",
    address: "",
    price: 0
  };
  paymentMethod: PaymentChoice = {
    method: "",
    saveForLater: "No"
  };
  discountApplied: DiscountInterface = {
    applied: false,
    coupon: ""
  };

  get checkoutStatus(): CheckoutStatus {
    return this.checkoutSteps;
  }
  get whichStep(): number {
    return this.currentStep;
  }
  get activeUser(): UserDetails {
    return this.userDetails;
  }

  @Action({ commit: "goToStep" })
  stepChange(activeStep: number) {
    if (activeStep === this.currentStep) {
      return activeStep + 1;
    }
    return this.currentStep;
  }

  @Mutation
  setStep(step: string) {
    this.checkoutSteps[step] = true;
  }
  @Mutation
  unsetStep(step: string) {
    this.checkoutSteps[step] = false;
  }
  @Mutation
  goToStep(step: number) {
    this.currentStep = step;
  }
  @Mutation
  setUser(data: UserDetails) {
    this.userDetails = data;
  }
  @Mutation
  setDelivery(data: DeliveryMethod) {
    this.deliveryDetails = data;
  }
  @Mutation
  setPayment(data: PaymentChoice) {
    this.paymentMethod = data;
  }
  @Mutation
  setCoupon(data: DiscountInterface) {
    this.discountApplied = data;
  }
}
