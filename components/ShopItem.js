import { Center } from "native-base";
import { Text, View, Image, StyleSheet } from "react-native";

const ShopItem = ({ shop }) => {
  return (
    <View>
      <Text>{shop.name}</Text>
      <Image style={styles.image} source={{ uri: shop.image }} />
    </View>
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
