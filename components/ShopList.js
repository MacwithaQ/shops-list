import { View } from "react-native";
import { Text, Center, ScrollView } from "native-base";
import shopStore from "../stores/shopStore";
import ShopItem from "./ShopItem";
import { observer } from "mobx-react";
import GradientContainer from "./GradientContainer";

const ShopList = ({ navigation }) => {
  const shopList = shopStore.shops.map((shop) => (
    <ShopItem shop={shop} navigation={navigation} />
  ));
  return (
    <View>
      <Center>
        <ScrollView m="5" height={300}>
          {shopList}
        </ScrollView>
      </Center>
    </View>
  );
};

export default observer(ShopList);
