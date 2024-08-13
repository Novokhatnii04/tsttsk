import { StyleSheet } from "react-native";
import FadeInView from "./src/widgets/FadeWrapper/FadeInView";
import Navigation from "./src/app/navigation/Navigation";
import { loadFonts } from "./assets/fonts/Fonts";
import { useLayoutEffect, useState } from "react";
import * as Font from "expo-font";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useLayoutEffect(() => {
    (async function () {
      await Font.loadAsync(loadFonts);
      setFontsLoaded(true);
    })()
  }, []);

  if (!fontsLoaded) {
    return null; 
  }

  return (
    <FadeInView style={styles.fadeInView}>
      <Navigation />
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  fadeInView: {
    flex: 1,
  },
});
