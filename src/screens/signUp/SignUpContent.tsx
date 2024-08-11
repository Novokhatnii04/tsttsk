import { View, StyleSheet, Alert } from "react-native";

import Button from "../../shared/ui/button/Button";
import Inputs from "./Inputs/Inputs";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Title from "../../shared/ui/title/Title";
import Description from "../../shared/ui/description/Description";
import LinkText from "../../shared/ui/linkText/LinkText";

const SignUpContent = ({ navigation }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const navigateHandler = (route: string) => navigation.navigate(route);

  return (
    <View style={styles.container}>
      <View style={styles.titles}>
        <Title modifyStyles={{ fontSize: 24, lineHeight: 28 }}>
          Welcome to App
        </Title>
        <Description modify="smallGrey">Please enter your details.</Description>
      </View>
      <Inputs control={control} />
      <Button
        modifier="secondary"
        onPress={handleSubmit(() => navigateHandler("Verification"))}
      >
        Continue
      </Button>
      <View style={styles.linkText}>
        <Description modifyStyles={{ fontSize: 14, color: "#727477" }}>
          Do you have an account?
        </Description>
        <LinkText
          onPress={() => navigateHandler("SignIn")}
          modifyStyles={{ fontSize: 14 }}
        >
          Login
        </LinkText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    justifyContent: "flex-start",
    paddingHorizontal: 16,
    backgroundColor: "white",
  },
  titles: {
    marginTop: 167,
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    marginBottom: 40,
  },
  linkText: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignUpContent;
