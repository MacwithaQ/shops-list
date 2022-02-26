import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import ShopDetail from "../ShopDetail";
import Home from "../Home";
import ShopList from "../ShopList";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Shops List" component={ShopList} />
        <Stack.Screen name="Shop Detail" component={ShopDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});

// options={{ headerShown: false }}
