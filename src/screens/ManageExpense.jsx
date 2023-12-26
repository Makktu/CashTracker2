import { StyleSheet, Text, View } from 'react-native';
import { useLayoutEffect } from 'react';
import { GlobalStyles } from '../admin-files/styles';
import IconButton from '../components/UI/IconButton';
import Button from '../components/UI/Button';

export default function ManageExpense({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'New Expense ',
    });
  }, [navigation, isEditing]);

  const cancelHandler = () => {
    console.log('cancel');
  };

  const confirmHandler = () => {
    isEditing ? console.log('Editing') : console.log('Adding New');
  };

  return (
    <View style={styles.container}>
      <Button mode='flat' whenPressed={cancelHandler}>
        Cancel
      </Button>
      <Button mode='' whenPressed={confirmHandler}>
        {isEditing ? 'Update' : 'Add'}
      </Button>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon='trash'
            size={32}
            color={GlobalStyles.colors.error500}
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
