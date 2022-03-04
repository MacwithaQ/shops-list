import { StyleSheet, Text, View } from "react-native";
import { Button, Box, Center, Image } from "native-base";
import { baseURL } from "../stores/instance";
import NumericInput from "react-native-numeric-input";
import { useState } from "react";
import cartStore from "../stores/cartStore";

const ProductItem = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const handleAdd = () => {
    cartStore.addCart({ product, quantity });
  };
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
        <NumericInput
          type="up-down"
          minValue={1}
          initValue={quantity}
          quantity={quantity}
          setQuantity={setQuantity}
          onChange={(value) => setQuantity(value)}
        />
        <Button
          size="lg"
          variant="subtle"
          colorScheme="primary"
          onPress={handleAdd}
        >
          Add
        </Button>
      </Center>
    </Box>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
