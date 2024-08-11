import React from "react";
import { Control, FieldValues } from "react-hook-form";
import { View, StyleSheet } from "react-native";
import CustomTextInput from "../../../../shared/ui/inputs/TextInput";

interface ErrorsProps {
  control: Control<FieldValues>;
}

const Errors: React.FC<ErrorsProps> = ({ control }) => {
  const rules = {
    required: {
      value: true,
      message: "Password is required",
    },
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      message: "Invalid email address",
    },
  };

  return (
    <View style={styles.inputWrapper}>
      <CustomTextInput
        title="E-mail"
        placeholder="Your e-mail"
        control={control}
        rules={rules}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    height: "auto",
    paddingHorizontal: 16,
  },
});

export default Errors;
