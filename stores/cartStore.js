import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";

class CartStore {
  constructor() {
    makeAutoObservable(this);
  }
  items = [];

  totalQuantity = 0;

  addCart = async ({ product, quantity }) => {
    try {
      const foundProduct = this.items.find(
        (item) => item.product.name === product.name
      );
      if (foundProduct) {
        foundProduct.quantity = foundProduct.quantity + quantity;
      } else {
        const item = {
          product: product,
          quantity: quantity,
        };
        this.items.push(item);
      }
      await AsyncStorage.setItem("myCart", JSON.stringify(this.items));
      this.totalQuantity = this.items
        .map((item) => item.quantity)
        .reduce((partialSum, a) => partialSum + a, 0);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch function for getting items
  fetchCart = async () => {
    try {
      const items = await AsyncStorage.getItem("myCart");
      return items != null
        ? (this.items = JSON.parse(items))(
            (this.totalQuantity = this.items
              .map((item) => item.quantity)
              .reduce((partialSum, a) => partialSum + a, 0))
          )
        : null;
    } catch (e) {
      console.log(e);
    }
  };
}

const cartStore = new CartStore();
cartStore.fetchCart();
export default cartStore;
