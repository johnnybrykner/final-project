import { Module, VuexModule } from "vuex-module-decorators";
import { Product } from "@/types";

@Module
export default class Cart extends VuexModule {
  static namespaced = true;

  categories: string[] = ["sale", "electronics", "outdoors", "pets"];
  products: Product[] = [
    {
      name: 'Sharp 50" UHD TV',
      price: 2499,
      category: ["electronics"],
      amount: 0,
      stock: 5,
      promo: "",
      color: "black",
      image: `https://bilkadk.imgix.net/medias/sys_master/root/hae/hb2/11354062749726.jpg?w=${
        this.getViewport
      }&auto=format&fm=jpg`,
      specific: {
        technology: "LED",
        energy: "A+",
        height: "69.8cm",
        weight: "12.2kg",
        screen: '50"',
        ports: ["HDMI", "USB"],
        resolution: "4K - 3840x2160"
      }
    },
    {
      name: "Apple iPhone 8 64GB",
      price: 5118,
      category: ["electronics"],
      amount: 0,
      stock: 12,
      promo: {
        name: "showcase"
      },
      color: "gold",
      image: `https://bilkadk.imgix.net/medias/sys_master/root/h8b/h91/9807195242526/iPhone8-Family-GB-EN-SCREEN.jpg?w=${
        this.getViewport
      }&auto=format&fm=jpg`,
      specific: {
        os: "iOS",
        screen: '4.7"',
        storage: "64GB",
        camera: "12MP"
      }
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
      specific: {
        fuel: "gas"
      }
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
      specific: {
        breed: "Middle-size"
      }
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
      specific: {
        chip: "H1"
      }
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
      specific: {
        chip: "Fancy Samsung"
      }
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
      specific: {
        os: "Andriod, for now",
        screen: '6.1"',
        storage: "128GB",
        camera: "40MP"
      }
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
