import { StyleSheet, Text, View, TextInput } from 'react-native';
import { GlobalStyles } from '../../admin-files/styles';
import React from 'react';

export default function Input({
  label,
  textInputConfig,
  extraStyle,
  overallStyle,
  isValid,
}) {
  return (
    <View style={[styles.inputContainer, overallStyle]}>
      <Text style={[styles.label, !isValid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput
        style={[styles.textInput, extraStyle, !isValid && styles.invalidInput]}
        {...textInputConfig}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    color: GlobalStyles.colors.primary100,
    fontSize: 18,
    marginBottom: 4,
  },
  textInput: {
    backgroundColor: GlobalStyles.colors.primary100,
    height: 40,
    color: GlobalStyles.colors.primary700,
    fontSize: 20,
    borderRadius: 8,
    padding: 6,
  },
  invalidLabel: {
    color: GlobalStyles.colors.error500,
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error50,
  },
});
