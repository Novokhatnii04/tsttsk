import * as Font from "expo-font";

export const loadFonts = async () => {
  await Font.loadAsync({
    OutfitRegular: require("./Outfit/Outfit-Regular.ttf"),
    OutfitBold: require("./Outfit/Outfit-Bold.ttf"),
    OutfitExtraBold: require("./Outfit/Outfit-ExtraBold.ttf"),
    InterRegular: require("./Inter/Inter-Regular.ttf"),
  });
};
