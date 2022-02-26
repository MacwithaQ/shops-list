import { View } from "react-native";
import { Button, Box } from "native-base";
import GradientContainer from "./GradientContainer";
import ShopList from "./ShopList";

const Home = ({ navigation }) => {
  return (
    <View>
      <Box alignItems="center">
        <Button onPress={() => navigation.navigate("Shops List")}>
          Click Me
        </Button>
      </Box>
    </View>
  );
};

export default Home;
