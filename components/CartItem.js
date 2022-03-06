import { StyleSheet, Text, View } from "react-native";
import { Box, Center, VStack, Image, Button } from "native-base";
import React from "react";
import { baseURL } from "../stores/instance";
import cartStore from "../stores/cartStore";

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
          source={{ uri: baseURL + item.product.image }}
          size="lg"
        />
        <Button
          size="lg"
          variant="subtle"
          colorScheme="primary"
          onPress={() => {
            cartStore.removeItemFromCart(item.product._id);
          }}
        >
          Delete
        </Button>
      </Center>
    </Box>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
