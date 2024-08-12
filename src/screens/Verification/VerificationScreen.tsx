import { View, StyleSheet, Alert } from "react-native";
import Title from "../../shared/ui/title/Title";
import Description from "../../shared/ui/description/Description";
import { useEffect, useLayoutEffect, useState } from "react";
import { getPinData } from "../../app/procceses/GetPinData";
import VerificationInput from "../../shared/ui/inputs/VerificationInput";
import LinkText from "../../shared/ui/linkText/LinkText";
import Button from "../../shared/ui/button/Button";

interface IAuthPin {
  validateNumber: string;
}

const SignUpContent = ({ navigation }: any) => {
  const navigateHandler = (route: string) => navigation.navigate(route);
  const [authPin, setAuthPin] = useState<IAuthPin | string>("");
  const [currentInputPin, setCurrentInputPin] = useState("");

  const getPinHandler = async () => {
    const pinData = await getPinData(navigateHandler);
    if (pinData) setAuthPin(JSON.parse(pinData));
    console.log(pinData);
  };

  useLayoutEffect(() => {
    getPinHandler();
  }, []);

  useEffect(() => {
    if (authPin && currentInputPin.length === 6) {
      const { validateNumber }: any = authPin;
      if (validateNumber === currentInputPin) {
        successValidateHandler();
      }
    }
  }, [currentInputPin, authPin]);

  const successValidateHandler = () => {
    const { validateNumber }: any = authPin;

    if (validateNumber === currentInputPin) {
      Alert.alert("Welcome new user :)", "You can do it again!", [
        {
          text: "Done",
          style: "destructive",
          onPress: navigateHandler("Welcome"),
        },
      ]);
    } else {
      Alert.alert(
        "Incorrect Code",
        "The code you entered is incorrect. Please try again.",
        [
          {
            text: "Retry",
            style: "destructive",
          },
        ]
      );
    }
  };

  const onChangeInputHandler = (code: string[]) => {
    const InputPin = code.join("");
    setCurrentInputPin(InputPin);
  };

  const buttonStyles = {
    marginTop: 32,
    opacity: currentInputPin.length === 6 ? 1 : 0.25,
    pointerEvents: currentInputPin.length === 6 ? "auto" : "none",
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
        <View style={styles.validateWrapper}>
          <VerificationInput onChangeInput={onChangeInputHandler} />
        </View>
        <LinkText onPress={getPinHandler} modifyStyles={{ marginTop: 32 }}>
          Resend the Code
        </LinkText>
        <Button
          modifier="secondary"
          modifyStyles={buttonStyles}
          onPress={successValidateHandler}
        >
          Sign up
        </Button>
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
  validateWrapper: {
    marginTop: 40,
  },
});

export default SignUpContent;
