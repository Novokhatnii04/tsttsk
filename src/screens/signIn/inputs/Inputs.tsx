import React from "react";
import { Control, FieldValues } from "react-hook-form";
import { View, StyleSheet } from "react-native";
import NumberInput from "../../../shared/ui/inputs/NumberInput";
import { rulesPhone } from "../../../resources/inputRules";

interface InputsProps {
  control: Control<FieldValues>;
}

const Inputs: React.FC<InputsProps> = ({ control }) => {

  return (
    <View style={styles.inputWrapper}>
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

export default Inputs;
