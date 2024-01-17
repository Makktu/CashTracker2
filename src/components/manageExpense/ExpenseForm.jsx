import { StyleSheet, Text, TextInput, View } from 'react-native';
import Input from './Input';
import React, { useState } from 'react';

export default function ExpenseForm() {
  const [inputValues, setInputValues] = useState({
    amountValue: 0,
    dateValue: 'TODAY',
    descriptionValue: 'Placeholder',
  });

  function amountChangedHandler(enteredAmount) {
    setAmountValue(enteredAmount);
  }

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.topOfForm}>
        <Input
          overallStyle={styles.rowInput}
          label='Amount'
          textInputConfig={{
            keyboardType: 'decimal-pad',
            maxLength: 20,
            onChangeText: amountChangedHandler,
            value: inputValues.amountValue.toString(),
          }}
          extraStyle={{ marginRight: 4 }}
        />
        <Input
          overallStyle={styles.rowInput}
          label='Date'
          textInputConfig={{
            keyboardType: 'numeric',
            maxLength: 10,
            placeholder: 'DD-MM-YYYY',
            placeholderTextColor: 'black',
            onChangeText: () => {},
            value: inputValues.dateValue,
          }}
        />
      </View>

      <Input
        label='Description'
        textInputConfig={{
          keyboardType: 'default',
          maxLength: 150,
          multiline: true,
          autoCorrect: false,
          value: inputValues.descriptionValue,
        }}
        extraStyle={{
          minHeight: 100,
          marginBottom: 10,
          textAlignVertical: 'top',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    marginTop: 40,
  },
  title: {
    marginBottom: 30,
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  topOfForm: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: {
    flex: 1,
  },
});
