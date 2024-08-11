import React from "react";
import { Control, FieldError, FieldErrors, FieldValues } from "react-hook-form";
import { View, Text, StyleSheet } from "react-native";
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
    minLength: 3,
  };

  return (
    <View style={styles.inputWrapper}>
      <CustomTextInput
        title="Name"
        placeholder="Your name"
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
