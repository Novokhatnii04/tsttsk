import React, { useState, useRef, useEffect, FC } from "react";
import { View, TextInput, StyleSheet, Text, Keyboard } from "react-native";

interface ISecureCode {
  onChangeInput: (code: string[]) => void;
}

const SecureCodeInput: FC<ISecureCode> = ({ onChangeInput }) => {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);

  const inputs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    onChangeInput(code);
  }, [code]);

  const handleChangeText = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < code.length - 1 && inputs.current[index + 1]) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace") {
      if (code[index] === "") {
        if (index > 0) {
          inputs.current[index - 1]?.focus();
          const newCode = [...code];
          newCode[index - 1] = "";
          setCode(newCode);
        }
      } else {
        const newCode = [...code];
        newCode[index] = "";
        setCode(newCode);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Secure Code</Text>
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <View key={index} style={styles.inputWrapper}>
            <TextInput
              ref={(input) => (inputs.current[index] = input)}
              style={[
                styles.input,
                {
                  borderColor: digit !== "" ? "#A180DC" : "#EEE8F0",
                },
              ]}
              placeholder="0"
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChangeText(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
            />
            {index === 2 && <Text style={styles.dash}>-</Text>}
          </View>
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
  inputWrapper: {
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
    color: "#30B0C7",
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
