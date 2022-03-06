import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

class CartStore {
  constructor() {
    makeAutoObservable(this);
  }
  items = [];

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
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch function for getting items
  fetchCart = async () => {
    try {
      const items = await AsyncStorage.getItem("myCart");
      return items != null ? (this.items = JSON.parse(items)) : null;
    } catch (e) {
      console.log(e);
    }
  };

  // Function to remove item from cart
  removeItemFromCart = async (productId) => {
    this.items = this.items.filter(({ product }) => product._id !== productId);
    console.log(this.items);
    const items = JSON.stringify(this.items);
    try {
      await AsyncStorage.setItem("myCart", items);
    } catch (error) {
      console.log(error);
    }
  };

  // Checkout function
  checkOutFromCart = async () => {
    this.items = [];
    const items = JSON.stringify(this.items);
    try {
      await AsyncStorage.setItem("myCart", items);
    } catch (error) {
      console.log(error);
    }
    Alert.alert("Thank you for shopping with us!");
  };

  // calculated totalQuantity
  get totalQuantity() {
    return this.items
      .map((item) => item.quantity)
      .reduce((acc, cur) => acc + cur, 0);
  }
}

const cartStore = new CartStore();
cartStore.fetchCart();
export default cartStore;
