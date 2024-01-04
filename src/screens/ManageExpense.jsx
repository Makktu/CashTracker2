import { StyleSheet, View } from 'react-native';
import { useContext, useLayoutEffect } from 'react';
import { GlobalStyles } from '../admin-files/styles';
import IconButton from '../components/UI/IconButton';
import Button from '../components/UI/Button';
import { ExpensesContext } from '../../store/expenses-context';

export default function ManageExpense({ route, navigation }) {
  const expensesCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'New Expense ',
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    console.log(editedExpenseId);
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Button style={styles.buttons} mode='flat' whenPressed={cancelHandler}>
          Cancel
        </Button>
        <Button style={styles.buttons} mode='' whenPressed={confirmHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>

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
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
