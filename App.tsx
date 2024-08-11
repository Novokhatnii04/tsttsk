import { StyleSheet } from "react-native";
import FadeInView from "./src/widgets/FadeWrapper/FadeInView";
import Navigation from "./src/app/navigation/Navigation";
import { loadFonts } from "./assets/fonts/Fonts";
import { useEffect } from "react";

export default function App() {
  
  useEffect(() => {
    loadFonts();
  }, []);

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
