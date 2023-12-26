import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { GlobalStyles } from '../../admin-files/styles';

export default function ExpenseItem({ id, amount, description, date }) {
  const navigation = useNavigation();

  const expensePressHandler = () => {
    navigation.navigate('Manage Expense', {
      expenseId: id,
    });
  };

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseStyle}>
        <View>
          <Text style={styles.descriptionStyle}>{description}</Text>
          <Text style={styles.dateStyle}>{date}</Text>
        </View>
        <View style={styles.amountSection}>
          <Text style={styles.cashStyle}>£{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  expenseStyle: {
    backgroundColor: GlobalStyles.colors.primary500,
    padding: 12,
    marginVertical: 2,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 3,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  cashStyle: {
    color: GlobalStyles.colors.primary500,
    fontSize: 18,
    fontWeight: 'bold',
  },
  descriptionStyle: {
    color: GlobalStyles.colors.primary50,
    fontSize: 18,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  dateStyle: {
    color: '#00ff4c',
    fontSize: 14,
    fontWeight: 'bold',
  },
  amountSection: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: 'white',
    borderRadius: 4,
    minWidth: 98,
  },
  pressed: {
    opacity: 0.75,
  },
});
