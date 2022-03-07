import { Alert, StyleSheet, Text, View } from "react-native";
import { Badge, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";
import cartStore from "../../stores/cartStore";
import authStore from "../../stores/authStore";

const CartButton = () => {
  const navigation = useNavigation();
  const handlePress = () => {
    if (authStore.user) {
      navigation.navigate("Cart");
    } else {
      Alert.alert("Please sign in to access cart");
      navigation.navigate("Sign In");
    }
  };
  return (
    <VStack>
      {cartStore.totalQuantity > 0 && (
        <Badge // bg="red.400"
          colorScheme="danger"
          rounded="full"
          mb={-6}
          mr={2}
          zIndex={1}
          variant="solid"
          alignSelf="flex-end"
          _text={{
            fontSize: 12,
          }}
        >
          {cartStore.totalQuantity}
        </Badge>
      )}

      <Ionicons
        name="ios-cart"
        size={24}
        color="black"
        style={styles.button}
        onPress={handlePress}
      />
    </VStack>
  );
};

export default observer(CartButton);

const styles = StyleSheet.create({
  button: {
    margin: 10,
    marginRight: 25,
  },
});
