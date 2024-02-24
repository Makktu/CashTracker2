import { StyleSheet, TextInput, View } from 'react-native';
import { useContext, useLayoutEffect } from 'react';
import { GlobalStyles } from '../admin-files/styles';
import IconButton from '../components/UI/IconButton';
import ExpenseForm from '../components/manageExpense/ExpenseForm';
import { ExpensesContext } from '../../store/expenses-context';
import { storeExpense } from '../util/http';

export default function ManageExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expensesCtx.expenses.find(
    (expense) => expense.id == editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'New Expense ',
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = (expenseData) => {
    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, expenseData);
    } else {
      storeExpense(expenseData);
      expensesCtx.addExpense(expenseData);
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        onSubmit={confirmHandler}
        isEditing={isEditing}
        defaultValues={selectedExpense}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon='trash'
            size={32}
            color={GlobalStyles.colors.error500}
            whenPressed={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
  headText: {
    color: 'white',
    fontSize: 12,
  },
  iconContainer: {
    alignItems: 'flex-end',
  },
});
