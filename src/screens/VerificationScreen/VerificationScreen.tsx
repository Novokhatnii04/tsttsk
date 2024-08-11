import { View, StyleSheet, Alert } from "react-native";
import Title from "../../shared/ui/title/Title";
import Description from "../../shared/ui/description/Description";
import { FieldValues, SubmitHandler } from "react-hook-form";

const SignUpContent = ({ navigation }: any) => {
  const navigateHandler = (route: string) => navigation.navigate(route);

  const submitHandler: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    Alert.alert("Succsess", "Welcome new user :)", [
      {
        text: "Okay",
        style: "destructive",
        onPress: () => navigateHandler("Welcome"),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titles}>
        <Title modifyStyles={{ fontSize: 24, lineHeight: 28 }}>
          Welcome to App
        </Title>
        <Description modify="smallGrey">
          Enter the confirmation code that will be sent to you by SMS
        </Description>
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
});

export default SignUpContent;
