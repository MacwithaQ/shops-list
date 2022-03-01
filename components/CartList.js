import { StyleSheet, View } from "react-native";
import { Text, Center, ScrollView, VStack } from "native-base";
import CartItem from "./CartItem";
import cartStore from "../stores/cartStore";
import { observer } from "mobx-react";

const CartList = () => {
  const cartList = cartStore.items.map((item) => (
    <CartItem key={item._id} item={item} />
  ));
  return (
    <View>
      <Center>
        <Text m="1" fontSize="xl"></Text>
        <VStack>{cartList}</VStack>
      </Center>
    </View>
  );
};

export default observer(CartList);

const styles = StyleSheet.create({});
