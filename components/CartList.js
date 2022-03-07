import { Alert, StyleSheet, View } from "react-native";
import { Text, Center, ScrollView, VStack, Button } from "native-base";
import CartItem from "./CartItem";
import cartStore from "../stores/cartStore";
import { observer } from "mobx-react";
import authStore from "../stores/authStore";

const CartList = ({ navigation }) => {
  const cartList = cartStore.items.map((item) => (
    <CartItem key={item._id} item={item} />
  ));

  const handleSignOut = () => {
    authStore.signout();
    Alert.alert("Signed Out");
    navigation.navigate("Sign In");
  };
  return (
    <View>
      <Center>
        <Text m="1" fontSize="xl"></Text>
        <ScrollView>
          <VStack>{cartList}</VStack>
          <Button
            size="lg"
            variant="subtle"
            colorScheme="primary"
            onPress={() => {
              cartStore.checkOutFromCart(navigation);
            }}
          >
            Checkout
          </Button>
          <Button
            size="lg"
            m={1}
            variant="subtle"
            colorScheme="primary"
            onPress={handleSignOut}
          >
            Sign Out
          </Button>
        </ScrollView>
      </Center>
    </View>
  );
};

export default observer(CartList);

const styles = StyleSheet.create({
  scroller: {
    width: "100%",
  },
});
