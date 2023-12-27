import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import { ExpensesContext } from '../../store/expenses-context';

export default function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <View style={styles.container}>
      <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod='TOTAL' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2521FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
