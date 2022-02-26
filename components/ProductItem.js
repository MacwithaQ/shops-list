import { StyleSheet, Text, View } from "react-native";
import { Box, Center, Image } from "native-base";
import React from "react";
import { baseURL } from "../stores/instance";

const ProductItem = ({ product }) => {
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
        {product.name}
        <Image
          alt="shop image"
          source={{ uri: baseURL + product.image }}
          size="xl"
        />
      </Center>
    </Box>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
