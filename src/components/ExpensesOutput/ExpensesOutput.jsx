import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import ExpensesSummary from './ExpensesSummary';
import ExpensesList from './ExpensesList';
import { GlobalStyles } from '../../admin-files/styles';

export default function ExpensesOutput({
  expenses,
  expensesPeriod,
  fallbackText = '',
}) {
  let content = <Text style={styles.fallback}>{fallbackText}</Text>;

  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {expenses.length > 0 ? (
        <ExpensesList expenses={expenses} />
      ) : (
        <View style={styles.fallbackContainer}>{content}</View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
    width: '100%',
  },
  fallback: {
    color: 'white',
    fontSize: 30,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
