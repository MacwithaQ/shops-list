import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView, View } from "react-native";
import { NativeBaseProvider } from "native-base";
import ShopDetail from "./components/ShopDetail";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./components/Home";
import RootNavigator from "./components/Navigation";
import GradientContainer from "./components/GradientContainer";
export default function App() {
  return (
    <NativeBaseProvider>
      <RootNavigator />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 50,
    padding: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
