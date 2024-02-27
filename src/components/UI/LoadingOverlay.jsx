import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../admin-files/styles';

export default function LoadingOverlay() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color='white' style={styles.indicator} />
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
  indicator: {
    transform: [{ scaleX: 2 }, { scaleY: 2 }],
  },
});
