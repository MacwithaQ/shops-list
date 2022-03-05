import { StyleSheet, View } from "react-native";
import { Text, Center, ScrollView } from "native-base";
import ProductItem from "./ProductItem";
import { observer } from "mobx-react";

const ProductList = ({ products }) => {
  const productList = products.map((product) => (
    <ProductItem product={product} />
  ));
  return (
    <View>
      <Center>
        <Text m="1" fontSize="xl">
          ProductList
        </Text>
        <View>{productList}</View>
      </Center>
    </View>
  );
};

export default observer(ProductList);
