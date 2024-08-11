import React from "react";
import { StyleSheet, SafeAreaView, View, Image } from "react-native";
import FadeInView from "../../widgets/FadeWrapper/FadeInView";
import ButtonsWrapper from "./ui/ButtonsWrapper";
import WelcomeImage from "../../../assets/images/welcomePage/WelcomeImage";
import { StatusBar } from "expo-status-bar";
import Title from "../../shared/ui/title/Title";
import Description from "../../shared/ui/description/Description";

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <FadeInView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <WelcomeImage />
          <View style={styles.textInfo}>
            <Title modify="">Welcome to App</Title>
            <Description modify="">
              Lorem ipsum dolor sit amet consectetur. A ut pellentesque amet
              phasellus augue. Neque at felis pulvinar malesuada varius egestas
              dis cras.{" "}
            </Description>
          </View>
          <ButtonsWrapper navigation={navigation} />
        </View>
      </SafeAreaView>
    </FadeInView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    width: "100%",
    gap: 32,
  },
  image: {
    width: 440,
    height: 330,
  },
  textInfo: {
    width: "80%",
    flexDirection: "column",
    gap: 16,
  },
});
