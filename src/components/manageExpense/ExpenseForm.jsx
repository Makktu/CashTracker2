import { StyleSheet, Text, View, Alert } from 'react-native';
import Input from './Input';
import React, { useState } from 'react';
import Button from '../UI/Button';
import getItemDate from '../../util/date';
import { GlobalStyles } from '../../admin-files/styles';

export default function ExpenseForm({
  onCancel,
  onSubmit,
  isEditing,
  defaultValues = null,
}) {
  // setting state +++++++++++++++++++++++++
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toFixed(2).toString() : '',
      isValid: true,
    },
    date: {
      value: defaultValues ? getItemDate(defaultValues.date, true) : '',
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : '',
      isValid: true,
    },
  });
  // +++++++++++++++++++++++++++++++++++++++

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
    console.log(inputIdentifier, enteredValue);
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    // ! INPUT VALIDATION CHECKER AND WARNING-ISSUER +++++++++++++++++++++++++
    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs((currentInputs) => {
        return {
          amount: { value: currentInputs.amount.value, isValid: amountIsValid },
          date: { value: currentInputs.date.value, isValid: dateIsValid },
          description: {
            value: currentInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }
    // !++++++++++++++++++++++++++++++++++++++++++++++++

    onSubmit(expenseData);
  }

  const formIsInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  console.log(formIsInvalid);

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.topOfForm}>
        <Input
          isValid={inputs.amount.isValid}
          overallStyle={styles.rowInput}
          label='Amount'
          textInputConfig={{
            keyboardType: 'decimal-pad',
            maxLength: 20,
            onChangeText: inputChangedHandler.bind(this, 'amount'),
            value: inputs.amount.value,
          }}
          extraStyle={{ marginRight: 4 }}
        />
        <Input
          isValid={inputs.date.isValid}
          overallStyle={styles.rowInput}
          label='Date'
          textInputConfig={{
            keyboardType: 'numeric',
            maxLength: 10,
            placeholder: 'YYYY-MM-DD',
            placeholderTextColor: 'black',
            onChangeText: inputChangedHandler.bind(this, 'date'),
            value: inputs.date.value,
          }}
        />
      </View>
      <Input
        isValid={inputs.description.isValid}
        label='Description'
        textInputConfig={{
          keyboardType: 'default',
          maxLength: 150,
          multiline: true,
          autoCorrect: false,
          value: inputs.description.value,
          onChangeText: inputChangedHandler.bind(this, 'description'),
        }}
        extraStyle={{
          minHeight: 100,
          marginBottom: 10,
          textAlignVertical: 'top',
        }}
      />

      <View style={styles.errorContainer}>
        {formIsInvalid && <Text style={styles.error}>CHECK YOUR INPUTS!</Text>}
      </View>

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
  errorContainer: {
    marginVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
  },
  error: {
    fontSize: 28,
    color: GlobalStyles.colors.error500,
    fontWeight: 'bold',
  },
});
