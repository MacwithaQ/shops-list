import { View, Text } from "react-native";
import shopStore from "../stores/shopStore";
import ShopItem from "./ShopItem";
import { observer } from "mobx-react";

const ShopList = () => {
  const shopList = shopStore.shops.map((shop) => <ShopItem shop={shop} />);
  return <View>{shopList}</View>;
};

export default observer(ShopList);
