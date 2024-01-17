import { StyleSheet, Text, View, TextInput } from 'react-native';
import { GlobalStyles } from '../../admin-files/styles';
import React from 'react';

export default function Input({
  label,
  textInputConfig,
  extraStyle,
  overallStyle,
}) {
  return (
    <View style={[styles.inputContainer, overallStyle]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={[styles.textInput, extraStyle]} {...textInputConfig} />
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
});
