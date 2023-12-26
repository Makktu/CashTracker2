import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';
import getItemDate from '../../util/date';
import ExpenseItem from './ExpenseItem';

function renderExpenseItem(itemData) {
  const itemDate = getItemDate(itemData.item.date);

  const pressHandler = () => {
    console.log('PRESSED');
  };
  return (
    <View style={styles.expenseItemStyle}>
      <ExpenseItem
        id={itemData.item.id}
        amount={itemData.item.amount}
        description={itemData.item.description}
        date={itemDate}
        whenPressed={pressHandler}
      />
    </View>
  );
}

export default function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  expenseItemStyle: {
    marginVertical: 6,
  },
  expenseCash: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  expenseDescription: {
    fontSize: 24,
  },
  expenseCash: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
});
