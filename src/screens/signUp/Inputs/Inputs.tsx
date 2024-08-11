import React from "react";
import { Control, FieldError, FieldErrors, FieldValues } from "react-hook-form";
import { View, Text, StyleSheet } from "react-native";
import CustomInput from "../../../shared/ui/inputs/TextInput";

interface ErrorsProps {
  control: Control<FieldValues>;
}

const Errors: React.FC<ErrorsProps> = ({ control }) => {
  const rules = {
    required: {
      value: true,
      message: "Password is required",
    },
    minLength: 3,
  };

  return (
    <View style={styles.inputWrapper}>
      <CustomInput
        title="Name"
        placeholder="Enter name"
        rules={rules}
        control={control}
      />
      <CustomInput
        title="Last Name"
        placeholder="Enter last name"
        rules={rules}
        control={control}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    height: "auto",
    flexDirection: "column",
    gap: 20,
  },
});

export default Errors;
