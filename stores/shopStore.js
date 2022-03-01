import { makeAutoObservable } from "mobx";
import { baseURL, instance } from "./instance";

class ShopStore {
  constructor() {
    makeAutoObservable(this);
    // this will turn our class into a mobx store and all components can observe the changes that happen in the store
  }
  shops = [];

  fetchShops = async () => {
    try {
      const response = await instance.get("/shops");
      this.shops = response.data;
    } catch (error) {
      console.log("ShopStore -> fetchShops -> error", error);
    }
  };

  // fetchProducts = async () => {
  //   try {
  //     const response = await instance.get(/shopproducts)
  //   }
  // }
}

const shopStore = new ShopStore();

shopStore.fetchShops();

export default shopStore;
