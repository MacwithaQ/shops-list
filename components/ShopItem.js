import { Center } from "native-base";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { HStack } from "native-base";
import ShopDetail from "./ShopDetail";
import { baseURL } from "../stores/instance";

const ShopItem = ({ shop, navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate("Shop Detail", { shop })}>
      <HStack p="2">
        <Center>
          <Text>{shop.name}</Text>
          <Image style={styles.image} source={{ uri: baseURL + shop.image }} />
        </Center>
      </HStack>
    </Pressable>
  );
};

export default ShopItem;

// rnfes to create a new
const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
  },
});
