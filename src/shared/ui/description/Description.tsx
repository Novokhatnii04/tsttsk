import { FC, ReactNode } from "react";
import { StyleSheet, Text } from "react-native";

interface IDescription {
  children: ReactNode;
  modify?: string;
  modifyStyles?: any;
}

const Description: FC<IDescription> = ({ children, modifyStyles }) => {
  return <Text style={[styles.text, modifyStyles]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 400,
    color: "#14171D",
    fontFamily: "InterRegular",
  },
});

export default Description;
