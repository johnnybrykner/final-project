import { Module, VuexModule } from "vuex-module-decorators";
import { Product } from "@/types";

@Module
export default class Catalog extends VuexModule {
  static namespaced = true;

  categories: string[] = ["sale", "electronics", "outdoors", "pets"];
  products: Product[] = [
    {
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
    },
    {
      name: "Apple iPhone 8 64GB",
      price: 5118,
      category: ["electronics"],
      amount: 0,
      stock: 12,
      color: "gold",
      image: `https://bilkadk.imgix.net/medias/sys_master/root/h8b/h91/9807195242526/iPhone8-Family-GB-EN-SCREEN.jpg?w=${
        this.getViewport
      }&auto=format&fm=jpg`,
      slug: "apple-iphone-8-64gb"
    },
    {
      name: "Weber Q3000",
      price: 2999,
      category: ["outdoors", "sale"],
      amount: 0,
      stock: 2,
      promo: {
        name: "sale",
        before: 3318,
        save: 319
      },
      color: "charcoal",
      image: `https://bilkadk.imgix.net/medias/sys_master/root/h37/hf0/9075133480990.jpg?w=${
        this.getViewport
      }&auto=format&fm=jpg`,
      slug: "weber-q3000"
    },
    {
      name: "Pedigree Vital Protection Maxi",
      price: 245,
      category: ["pets", "sale"],
      amount: 0,
      stock: 10,
      promo: {
        name: "sale",
        before: 399,
        save: 154
      },
      image: `https://bilkadk.imgix.net/medias/sys_master/root/h14/h65/9405001695262/82013200320.jpg?w=${
        this.getViewport
      }&auto=format&fm=jpg`,
      slug: "pedigree-vital-protection-maxi"
    },
    {
      name: "Apple Airpods 2019",
      price: 1379,
      category: ["electronics"],
      color: "white",
      amount: 0,
      stock: 15,
      image: `https://bilkadk.imgix.net/medias/sys_master/root/h3f/h4a/11513026379806.png?w=${
        this.getViewport
      }&auto=format&fm=jpg`,
      slug: "apple-airpods-2019"
    },
    {
      name: "Samsung Galaxy Buds",
      price: 1199,
      category: ["electronics"],
      color: "white",
      amount: 0,
      stock: 7,
      image: `https://bilkadk.imgix.net/medias/sys_master/root/h78/h02/11506618990622/SM-R170-001-Front-White-result.png?w=${
        this.getViewport
      }&auto=format&fm=jpg`,
      slug: "samsung-galaxy-buds"
    },
    {
      name: "Huawei P30 128GB Dual Sim",
      price: 5088,
      category: ["electronics"],
      color: "blue",
      amount: 0,
      stock: 0,
      image: `https://bilkadk.imgix.net/medias/sys_master/root/hb1/h76/11669769617438/Elle-Aurora-Front-Unlock-result.jpg?w=${
        this.getViewport
      }&auto=format&fm=jpg`,
      slug: "huawei-p30-128gb-dual-sim"
    },
    {
      name: "Nokia 3310 - 3G",
      price: 442,
      category: ["electronics", "sale"],
      color: "grey",
      amount: 0,
      promo: {
        name: "sale",
        before: 599,
        save: 157
      },
      stock: 12,
      image: `https://bilkadk.imgix.net/medias/sys_master/root/h1f/hdf/9995533123614/Charcoal.jpg?w=${
        this.getViewport
      }&auto=format&fm=jpg`,
      slug: "nokia-3310-3g"
    },
    {
      name: "Grouw robot lawnmower - 500 m2 App Control",
      price: 3495,
      category: ["electronics", "outdoors"],
      color: "black",
      amount: 0,
      stock: 2,
      image: `https://bilkadk.imgix.net/medias/sys_master/root/hfe/h79/10807462559774.jpg?w=${
        this.getViewport
      }&auto=format&fm=jpg`,
      slug: "grouw-robot-lawnmower-500m2-app-control"
    },
    {
      name: "Dog pillow",
      price: 300,
      category: ["pets"],
      color: "grey",
      amount: 0,
      stock: 25,
      image: `https://bilkadk.imgix.net/medias/sys_master/root/hbe/hdf/9455030730782/70584-4.jpg?w=${
        this.getViewport
      }&auto=format&fm=jpg`,
      slug: "dog-pillow"
    },
    {
      name: "Tennis balls for poochies",
      price: 39,
      category: ["pets"],
      color: "orange/blue",
      amount: 0,
      stock: 50,
      image: `https://bilkadk.imgix.net/medias/sys_master/root/hb1/h33/10859545362462/NERF-4pack-Tennisballs-w-squeak-EAN-5708063562330-Art.-79954201.jpg?w=${
        this.getViewport
      }&auto=format&fm=jpg`,
      slug: "tennis-balls-for-poochies"
    }
  ];

  get getCategories(): string[] {
    return this.categories;
  }
  get getProducts(): Product[] {
    return this.products;
  }
  get getViewport(): number {
    return window.innerWidth;
  }
}
