import axios from 'axios';

const BACKEND_URL =
  'https://tracker-example-96868-default-rtdb.firebaseio.com/';

export function storeExpense(expenseData) {
  axios.post(`${BACKEND_URL}/expenses.json`, expenseData);
  console.log('posted');
}

export async function fetchExpenses() {
  const response = await axios.get(`${BACKEND_URL}/expenses.json`);

  if (!response) {
    console.log('error');
    return;
  }

  const expenses = [];

  console.log(response.data);

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  console.log(expenses);
  return expenses;
}
