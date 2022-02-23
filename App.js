import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button } from "react-native";
import Home from "./components/Home";
import ShopList from "./components/ShopList";
import { NativeBaseProvider, Text, Box } from "native-base";
import ProductList from "./components/ProductList";

export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Button
          onPress={() => alert("Hello World!")}
          title="Press Me"
          color="blue"
          accessibilityLabel="Learn more about this purple button"
        />
        <ShopList />
        <ProductList />
        <StatusBar style="auto" />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EB5E55",
    alignItems: "center",
    justifyContent: "center",
  },
});
