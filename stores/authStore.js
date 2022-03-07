import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  user = null;

  signup = async (user, navigation) => {
    try {
      const res = await instance.post("/users/signup", user);
      const { token } = res.data;
      console.log(token);
      this.setUser(token);
      navigation.navigate("Shops List");
    } catch (error) {
      console.log(error);
    }
  };

  signin = async (user, navigation) => {
    try {
      const res = await instance.post("/users/signin", user);
      const { token } = res.data;
      this.setUser(token);
      navigation.navigate("Shops List");
    } catch (error) {
      console.log(error);
    }
  };

  signout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      this.user = null;
    } catch (error) {
      console.log(error);
    }
  };

  setUser = async (token) => {
    try {
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      await AsyncStorage.setItem("token", token);
      this.user = decode(token);
    } catch (error) {
      console.log(error);
    }
  };

  checkForToken = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      const decodedToken = decode(token);
      if (Date.now() < +decodedToken.exp) {
        this.user = decodedToken;
      } else {
        await AsyncStorage.removeItem("token");
        this.user = null;
      }
    }
  };

  constructor() {
    makeAutoObservable(this);
  }
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
