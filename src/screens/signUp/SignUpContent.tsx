import { View, StyleSheet, ScrollView, Alert } from "react-native";

import Button from "../../shared/ui/button/Button";
import Inputs from "./Inputs/Inputs";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Title from "../../shared/ui/title/Title";
import Description from "../../shared/ui/description/Description";

const SignUpContent = ({ navigation }: any) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const navigateHandler = () => navigation.navigate("Welcome");

  const submitHandler: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    Alert.alert("Succsess", "Welcome new user :)", [
      { text: "Okay", style: "destructive", onPress: navigateHandler },
    ]);
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.titles}>
          <Title modifyStyles={{ fontSize: 24, lineHeight: 28 }}>
            Welcome to App
          </Title>
          <Description
            modifyStyles={{ fontSize: 16, color: "#667085", lineHeight: 22 }}
          >
            Please enter your details.
          </Description>
        </View>
        <Inputs control={control} />
        <Button modifier="secondary" onPress={handleSubmit(submitHandler)}>
          Continue
        </Button>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  titles: {
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    marginBottom: 40
  },
});

export default SignUpContent;
