import { StyleSheet, Text, View } from "react-native";
import {
  Center,
  Box,
  Heading,
  VStack,
  HStack,
  FormControl,
  Input,
  Button,
} from "native-base";
import { useState } from "react";
import authStore from "../../stores/authStore";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    user: "",
    password: "",
  });

  const handleChangefirstName = (firstname) => {
    setUser({ ...user, firstName: firstname });
  };
  const handleChangelastName = (lastname) => {
    setUser({ ...user, lastName: lastname });
  };
  const handleChangeEmail = (email) => {
    setUser({ ...user, email: email });
  };
  const handleChangeUser = (userName) => {
    setUser({ ...user, user: userName });
  };
  const handleChangePassword = (passWord) => {
    setUser({ ...user, password: passWord });
  };

  const handleSubmit = () => {
    authStore.signup(user, navigation);
  };

  return (
    <Center w="100%">
      <Box safeArea p="2" w="90%" maxW="290" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        >
          Welcome
        </Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        >
          Sign up to continue!
        </Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>First Name</FormControl.Label>
            <Input onChangeText={handleChangefirstName} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Last Name</FormControl.Label>
            <Input onChangeText={handleChangelastName} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Email</FormControl.Label>
            <Input onChangeText={handleChangeEmail} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <Input onChangeText={handleChangeUser} />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" onChangeText={handleChangePassword} />
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={handleSubmit}>
            Sign up
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default Signup;

const styles = StyleSheet.create({
  authContainer: {
    justifyContent: "center",
  },
});
