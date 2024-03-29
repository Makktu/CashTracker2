import { StyleSheet, Text, View } from 'react-native';
import Button from './Button';
import React from 'react';
import { GlobalStyles } from '../../admin-files/styles';

export default function ErrorOverlay({ message, onConfirm }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occurred.</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onConfirm}>OK</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  text: {
    textAlign: 'center',
    marginBottom: 8,
    color: GlobalStyles.colors.primary100,
    fontSize: 22,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});
