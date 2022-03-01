import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CartButton = () => {
  const navigation = useNavigation();
  return (
    <Ionicons
      name="ios-cart"
      size={24}
      color="black"
      style={styles.button}
      onPress={() => navigation.navigate("Cart")}
    />
  );
};

export default CartButton;

const styles = StyleSheet.create({
  button: {
    margin: 10,
    marginRight: 25,
  },
});
