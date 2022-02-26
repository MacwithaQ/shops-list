import { StyleSheet, View } from "react-native";
import { Image, Center, Text } from "native-base";
import { observer } from "mobx-react";
import shopStore from "../stores/shopStore";
import ProductList from "./ProductList";
import { baseURL } from "../stores/instance";

const ShopDetail = ({ route }) => {
  const { shop } = route.params;
  return (
    <View>
      <Center>
        <Text fontSize="4xl" m="2">
          {shop.name}
        </Text>
        <Image
          alt="shop image"
          source={{ uri: baseURL + shop.image }}
          size="2xl"
        />
        <ProductList products={shop.products} />
      </Center>
    </View>
  );
};

export default ShopDetail;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
});
