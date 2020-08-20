import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { v4 as uuid } from 'uuid';


const initialExpenses = [
  { id: uuid(), chanrge: "rent", amount: 1600 },
  { id: uuid(), chanrge: "car payment", amount: 600 },
  { id: uuid(), chanrge: "credit card payment", amount: 1200 }
]

function App() {
  const result = useState(initialExpenses);
  const expenses = result[0]
  // const setExpenses = result[1]
  return (
    <>
      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>total spending : <span className="total">
        ${
          expenses.reduce((acc, item) => {
            return acc += item.amount
          }, 0)
        }
      </span>
      </h1>
    </>
  );
}

export default App;
