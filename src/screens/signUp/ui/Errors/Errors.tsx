import React from "react";
import { FieldError, FieldErrors } from "react-hook-form";
import { View, Text, StyleSheet } from "react-native";

interface ErrorsProps {
  errors: FieldErrors;
}

const Errors: React.FC<ErrorsProps> = ({ errors }) => {
  return (
    <>
      {Object.keys(errors).length > 0 ? (
        <View style={styles.errorContainer}>
          {errors.Name && (
            <Text style={styles.errorText}>
              Error: Name is required and must be at least 3 characters long.
            </Text>
          )}
          {errors['E-mail'] && (
            <Text style={styles.errorText}>
              Error: {(errors['E-mail'] as FieldError)?.message}
            </Text>
          )}
          {errors.Password && (
            <Text style={styles.errorText}>
              Error: {(errors.Password as FieldError)?.message}
            </Text>
          )}
        </View>
      ) : (
        <View style={styles.errorContainer}></View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    paddingTop: 16,
    paddingLeft: 16,
    borderRadius: 4,
    marginHorizontal: 16,
  },
  errorText: {
    color: "red",
  },
});

export default Errors;
