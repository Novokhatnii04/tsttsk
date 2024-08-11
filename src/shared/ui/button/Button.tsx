import React, { FC, ReactNode } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface IButton {
  onPress: () => void;
  children: ReactNode;
  modifier?: "primary" | "secondary";
}

const Button: FC<IButton> = ({ onPress, children, modifier = "primary" }) => {
  const buttonStyle =
    modifier === "primary" ? styles.primaryButton : styles.secondaryButton;
  const textStyle =
    modifier === "primary"
      ? styles.primaryButtonText
      : styles.secondaryButtonText;

  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 44,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryButton: {
    backgroundColor: "#FFFFFF",
    borderColor: "#C4C5C6",
    borderWidth: 1,
    borderStyle: "solid",
  },
  secondaryButton: {
    backgroundColor: "#30B0C7",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 24,
    textAlign: "center",
  },
  primaryButtonText: {
    color: "#14171D",
  },
  secondaryButtonText: {
    color: "#FFFFFF",
  },
});

export default Button;
