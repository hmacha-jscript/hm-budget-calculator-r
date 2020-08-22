import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { v4 as uuid } from 'uuid';


const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 1600 },
  { id: uuid(), charge: "car payment", amount: 600 },
  { id: uuid(), charge: "credit card payment", amount: 1200 }
]

function App() {
  //state values - expenses
  const [expenses, setExpenses] = useState(initialExpenses);

  //state values - charge
  const [charge, setCharge] = useState('');

  //state values - amount
  const [amount, setAmount] = useState('');

  //state values - edit flag
  let [editMode, setEditMode] = useState(false);

  //state values - id
  let [expId, setExpId] = useState('');

  //functionality
  const handleExpenses = e => {
    e.preventDefault();
    if (!editMode) {
      const expense = {
        id: uuid(),
        charge: charge,
        amount: parseInt(amount)
      }
      setExpenses([...expenses, expense])
    } else {
      const expense = expenses.find(exp => exp.id === expId);
      expense.charge = e.target[0].value;
      expense.amount = parseInt(e.target[1].value);
      setExpenses([...expenses])
      //set to defaults
      setEditMode(false);
      setExpId('')
    }
    //set to defaults
    setCharge('');
    setAmount('');
  }

  const handleCharge = e => {
    setCharge(e.target.value)
  }

  const handleAmount = e => {
    setAmount(e.target.value)
  }

  const handleEdit = (id) => {
    const expense = expenses.find(exp => exp.id === id);
    setCharge(expense.charge);
    setAmount(expense.amount);
    setEditMode(true);
    setExpId(id);
  }

  const handleDelete = (id) => {
    const exps = expenses.filter(exp => exp.id !== id);
    setExpenses([...exps])
  }

  return (
    <>
      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm
          charge={charge}
          amount={amount}
          editMode={editMode}
          handleExpenses={handleExpenses}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
        />
        <ExpenseList
          expenses={expenses}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
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
