import { FC, ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

interface ILinkText {
  children: ReactNode;
  modify?: string;
  modifyStyles?: any;
  onPress?: () => void;
}

const LinkText: FC<ILinkText> = ({ children, modifyStyles, onPress }) => {
  return <Text onPress={onPress} style={[styles.text, modifyStyles]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    lineHeight: 20,
    fontWeight: 600,
    color: "#00D1AC",
    fontFamily: "OutfitBold",
    textDecorationLine: "underline",
  },
});

export default LinkText;
