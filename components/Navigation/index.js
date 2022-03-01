import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import ShopDetail from "../ShopDetail";
import Home from "../Home";
import ShopList from "../ShopList";
import CartList from "../CartList";
import { NavigationContainer } from "@react-navigation/native";
import CartButton from "../buttons/CartButton";

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Shops List"
          component={ShopList}
          options={{
            headerLeft: () => null,
          }}
        />
        <Stack.Screen
          name="Shop Detail"
          component={ShopDetail}
          options={{
            headerRight: () => <CartButton />,
          }}
        />
        <Stack.Screen
          name="Cart"
          component={CartList}
          options={{
            headerRight: () => <CartButton />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});

// options={{ headerShown: false }}
