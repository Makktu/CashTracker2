import { StyleSheet, Text, View, Alert } from 'react-native';
import Input from './Input';
import React, { useState } from 'react';
import Button from '../UI/Button';
import getItemDate from '../../util/date';

export default function ExpenseForm({
  onCancel,
  onSubmit,
  isEditing,
  defaultValues = null,
}) {
  const [inputValues, setInputValues] = useState({
    amount: defaultValues ? defaultValues.amount.toFixed(2).toString() : '',
    date: defaultValues ? getItemDate(defaultValues.date, true) : '',
    description: defaultValues ? defaultValues.description : '',
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((currentInputVals) => {
      return {
        ...currentInputVals,
        [inputIdentifier]: enteredValue,
      };
    });
    console.log(inputIdentifier, enteredValue);
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputValues.amount,
      date: new Date(inputValues.date),
      description: inputValues.description,
    };

    // ! INPUT VALIDATION CHECKER AND WARNING-ISSUER +++++++++++++++++++++++++
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      let warningString = 'These fields are not filled in correctly:\n\n';
      if (!amountIsValid) {
        warningString += 'Amount\n';
      }
      if (!dateIsValid) {
        warningString += 'Date\n';
      }
      if (!descriptionIsValid) {
        warningString += 'Description';
      }

      Alert.alert('Invalid input!', `${warningString}`);
      return;
    }
    // !++++++++++++++++++++++++++++++++++++++++++++++++

    onSubmit(expenseData);
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
            onChangeText: inputChangedHandler.bind(this, 'amount'),
            value: inputValues.amount,
          }}
          extraStyle={{ marginRight: 4 }}
        />
        <Input
          overallStyle={styles.rowInput}
          label='Date'
          textInputConfig={{
            keyboardType: 'numeric',
            maxLength: 10,
            placeholder: 'YYYY-MM-DD',
            placeholderTextColor: 'black',
            onChangeText: inputChangedHandler.bind(this, 'date'),
            value: inputValues.date,
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
          value: inputValues.description,
          onChangeText: inputChangedHandler.bind(this, 'description'),
        }}
        extraStyle={{
          minHeight: 100,
          marginBottom: 10,
          textAlignVertical: 'top',
        }}
      />
      <View style={styles.buttonsContainer}>
        <Button style={styles.buttons} mode='flat' whenPressed={onCancel}>
          Cancel
        </Button>
        <Button style={styles.buttons} mode='' whenPressed={submitHandler}>
          {isEditing ? 'Update' : 'Add'}
        </Button>
      </View>
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
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttons: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
