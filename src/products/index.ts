import { getters } from "./getters";

export const state = {
  categories: ["sale", "electronics", "outdoors"],
  products: [
    {
      name: 'Sharp 50" UHD TV',
      price: 2499,
      category: ["electronics"],
      stock: 5,
      promo: "",
      image:
        `https://bilkadk.imgix.net/medias/sys_master/root/hae/hb2/11354062749726.jpg?w=${getters.getWidth()}&auto=format&fm=jpg`,
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
      stock: 12,
      promo: {
        name: "showcase"
      },
      image:
        `https://bilkadk.imgix.net/medias/sys_master/root/h8b/h91/9807195242526/iPhone8-Family-GB-EN-SCREEN.jpg?w=${getters.getWidth()}&auto=format&fm=jpg`,
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
      stock: 2,
      promo: {
        name: "sale",
        price: 3318,
        save: 319
      },
      image:
        `https://bilkadk.imgix.net/medias/sys_master/root/h37/hf0/9075133480990.jpg?w=${getters.getWidth()}&auto=format&fm=jpg`,
      specific: {
        fuel: "gas",
        screen: '4.7"',
        storage: "64GB",
        camera: "12MP"
      }
    }
  ]
};

const namespaced: boolean = true;

export const catalog = {
  namespaced,
  state,
  getters
};
