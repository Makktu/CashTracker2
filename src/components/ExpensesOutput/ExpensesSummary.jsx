import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../admin-files/styles';

export default function ExpensesSummary({ expenses, periodName }) {
  const expensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}: </Text>
      <Text style={styles.sum}>£{expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: 'row',
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  period: {
    fontSize: 18,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontSize: 22,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary500,
  },
});
