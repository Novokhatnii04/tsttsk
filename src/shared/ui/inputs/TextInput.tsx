import React, { FC } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Control, Controller, FieldValues } from "react-hook-form";
import Warning from "../../../../assets/images/authBackground/Warning";

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
    fontSize: 15,
    fontWeight: "400",
    marginBottom: 8,
    color: "#606773",
    lineHeight: 24,
    marginLeft: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    height: 56,
    borderColor: "#CED5E0",
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 10,
    flex: 1,
  },
  iconContainer: {
    position: "absolute",
    right: 10,
  },
});

export default AuthTextInput;
