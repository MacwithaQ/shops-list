import { StyleSheet, Text, View } from "react-native";
import { Box, Center, VStack, Image } from "native-base";
import React from "react";
import { baseURL } from "../stores/instance";

const CartItem = ({ item }) => {
  return (
    <Box
      alignSelf="center"
      bg="primary.500"
      p="2"
      m="1"
      _text={{
        fontSize: "md",
        fontWeight: "medium",
        color: "warmGray.50",
        letterSpacing: "lg",
      }}
    >
      <Center>
        <Text>{`${item.product.name}`}</Text>
        <Text>Price</Text>
        <Text>{`$${item.product.price}`}</Text>
        <Text>Quantity</Text>
        <Text>{`${item.quantity}`}</Text>
        <Text>Total Price:</Text>
        <Text>{`$${item.product.price * item.quantity}`}</Text>
        <Image
          alt="item image"
          source={{ uri: item.product.image }}
          size="lg"
        />
      </Center>
    </Box>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
