import React, { useState, useRef } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

const SecureCodeInput: React.FC = () => {
  const [code, setCode] = useState<string[]>(["0", "0", "0", "0", "0", "0"]);

  const inputs = useRef<(TextInput | null)[]>([]);

  const handleChangeText = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text || "0"; // если ничего не введено, оставить "0"
    setCode(newCode);

    if (text && index < code.length - 1 && inputs.current[index + 1]) {
      inputs.current[index + 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Secure Code</Text>
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <>
            <TextInput
              key={index}
              ref={(input) => (inputs.current[index] = input)}
              style={[
                styles.input,
                {
                  borderColor: digit !== "0" ? "#A180DC" : "#EEE8F0",
                },
              ]}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChangeText(text, index)}
            />
            {index === 2 && <Text style={styles.dash}>-</Text>}
          </>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 12,
    fontWeight: "500",
    marginBottom: 6,
    color: "#344054",
    lineHeight: 16,
    alignSelf: "flex-start",
    marginLeft: 4,
  },
  codeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: 52,
    height: 64,
    borderWidth: 1,
    borderRadius: 8,
    textAlign: "center",
    fontSize: 40,
    marginHorizontal: 4,
    fontFamily: "OutfitRegular",
    color: "#C4C5C6",
    fontWeight: "600",
  },
  dash: {
    fontWeight: "600",
    color: "#C4C5C6",
    fontSize: 40,
    height: "100%",
  },
});

export default SecureCodeInput;
