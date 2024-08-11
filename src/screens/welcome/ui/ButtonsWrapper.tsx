import { View, StyleSheet } from "react-native";
import ButtonUI from "../../../shared/ui/button/Button";

const Button = ({ navigation }: any) => {
  const navigateToSignUp = () => navigation.navigate("SignUp");
  const navigateToSignIn = () => navigation.navigate("SignIn");

  return (
    <View style={styles.container}>
      <ButtonUI modifier="secondary" onPress={navigateToSignIn}>
        Login
      </ButtonUI>
      <ButtonUI modifier="primary" onPress={navigateToSignUp}>
        Register
      </ButtonUI>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 358,
    maxWidth: 343,
    height: 96,
    gap: 8,
  },
});

export default Button;
