import { View, StyleSheet, ImageBackground } from "react-native";
import { Button, Box, Center } from "native-base";

const Home = ({ navigation }) => {
  return (
    <Center flex={1}>
      <ImageBackground
        source={{
          uri: "https://ih1.redbubble.net/image.1044606327.9017/pp,840x830-pad,1000x1000,f8f8f8.jpg",
        }}
        resizeMode="cover"
        style={styles.image}
      >
        <View>
          <Box alignItems="center">
            <Button
              size="lg"
              variant="subtle"
              colorScheme="secondary"
              onPress={() => navigation.navigate("Shops List")}
            >
              Shops
            </Button>
          </Box>
        </View>
      </ImageBackground>
    </Center>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {},
  image: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
});
