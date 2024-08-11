import { FC, ReactNode } from "react";
import { StyleSheet, Text, TextStyle } from "react-native";

interface IDescription {
  children: ReactNode;
  modify?: keyof typeof styles;
  modifyStyles?: TextStyle;
}

const Description: FC<IDescription> = ({ children, modify, modifyStyles }) => {
  return (
    <Text style={[styles.text, modify && styles[modify], modifyStyles]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "400",
    color: "#14171D",
    fontFamily: "InterRegular",
  },
  smallGrey: {
    fontSize: 16,
    color: "#667085",
    lineHeight: 22,
    textAlign: "center",
    paddingHorizontal: 16,
  },
});

export default Description;
