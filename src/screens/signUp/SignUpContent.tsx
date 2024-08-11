import { View, StyleSheet, ScrollView, Alert } from "react-native";

import Button from "../../shared/ui/button/Button";
import NameInput from "./ui/Inputs/NameInput";
import EmailInput from "./ui/Inputs/EmailInput";

import {
  FieldErrors,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";

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
        <NameInput control={control} />
        <EmailInput control={control} />
        <View style={styles.buttonWrapper}>
          <Button onPress={handleSubmit(submitHandler)}>Continue</Button>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "80%",
    gap: 16,
  },
  buttonWrapper: {
    paddingHorizontal: 16,
    position: "absolute",
    width: "100%",
    bottom: 0,
  },
});

export default SignUpContent;
