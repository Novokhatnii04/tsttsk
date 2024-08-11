import { FC, ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

interface ITitle {
  children: ReactNode;
  modify?: string;
}

const Title: FC<ITitle> = ({ children }) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
    lineHeight: 38,
    fontWeight: 600,
    color: "#14171D",
    fontFamily: 'OutfitBold',
  },
});

export default Title;
