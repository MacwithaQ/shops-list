import { StyleSheet, View, ScrollView } from "react-native";
import { Image, Center, Text } from "native-base";
import { observer } from "mobx-react";
import shopStore from "../stores/shopStore";
import ProductList from "./ProductList";
import { baseURL } from "../stores/instance";

const ShopDetail = ({ route }) => {
  const { shop } = route.params;
  console.log(shop.products);
  return (
    <ScrollView style={styles.mainView}>
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
    </ScrollView>
  );
};

export default ShopDetail;

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  mainView: {
    height: "100%",
  },
});
