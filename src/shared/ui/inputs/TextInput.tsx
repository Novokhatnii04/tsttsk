import React, { FC } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Control, Controller, FieldValues } from "react-hook-form";
import Warning from "../../../../assets/images/auth/Warning";

interface IAuthInput {
  title: string;
  placeholder: string;
  control: Control<FieldValues>;
  rules: any;
}

const AuthTextInput: FC<IAuthInput> = ({
  title,
  placeholder,
  control,
  rules,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Controller
        name={title}
        control={control}
        render={({ field: { onChange, onBlur, value }, fieldState }) => (
          <View style={styles.inputContainer}>
            <TextInput
              style={[
                styles.input,
                fieldState.invalid && { borderColor: "red" },
              ]}
              placeholder={placeholder}
              autoCapitalize="none"
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
            />
            {fieldState.invalid && (
              <TouchableOpacity style={styles.iconContainer}>
                <Warning size={20} color="red" />
              </TouchableOpacity>
            )}
          </View>
        )}
        rules={rules}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
  },
  title: {
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 6,
    color: "#344054",
    lineHeight: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  input: {
    height: 40,
    borderColor: "#D0D5DD",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 14,
    flex: 1,
  },
  iconContainer: {
    position: "absolute",
    right: 10,
  },
});

export default AuthTextInput;
