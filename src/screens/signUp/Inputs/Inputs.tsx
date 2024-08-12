import React from "react";
import { Control, FieldValues } from "react-hook-form";
import { View, StyleSheet } from "react-native";
import CustomInput from "../../../shared/ui/inputs/TextInput";
import NumberInput from "../../../shared/ui/inputs/NumberInput";
import { rulesPhone, rulesNames } from "../../../app/resources/inputRules";

interface ErrorsProps {
  control: Control<FieldValues>;
}

const Errors: React.FC<ErrorsProps> = ({ control }) => {
  return (
    <View style={styles.inputWrapper}>
      <CustomInput
        title="Name"
        placeholder="Enter name"
        rules={rulesNames}
        control={control}
      />
      <CustomInput
        title="Last Name"
        placeholder="Enter last name"
        rules={rulesNames}
        control={control}
      />
      <NumberInput
        title="Phone Number"
        placeholder="+33 222 111 2222"
        rules={rulesPhone}
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
