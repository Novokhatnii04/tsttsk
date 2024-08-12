import axios from "axios";
import { Alert } from "react-native";

export const getPinData = async (errorHandler: (route: string) => void) => {
    try {
      const res = await axios.get("http://demo9309717.mockable.io/authNumber", {
        responseType: "json",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = JSON.stringify(res.data);
      return data;
    } catch (err) {
      console.log(`Error: ${err}`);
      Alert.alert(
        "PIN Code Not Received",
        "We're sorry, but there was an issue retrieving your PIN code. Please check your internet connection and try again.",
        [
          {
            text: "Okay",
            style: "destructive",
            onPress: () => errorHandler("Welcome"),
          },
        ]
      );
    }
  };
