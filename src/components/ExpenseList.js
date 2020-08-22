import React from 'react';
import ExpenseItem from './ExpenseItem';
import { MdDelete } from 'react-icons/md';

const ExpenseList = ({ expenses, handleEdit, handleDelete, handleClearExpenses }) => {
    return (
        <>
            <ul className="list">
                {
                    expenses.map(expense => {
                        return <ExpenseItem
                            key={expense.id}
                            expense={expense}
                            handleEdit={handleEdit}
                            handleDelete={handleDelete}
                        />
                    })
                }
            </ul>
            {
                expenses.length > 0 &&
                <button
                    className="btn"
                    onClick={handleClearExpenses}
                >
                    Clear Expenses
                    <MdDelete className="btn-icon" />
                </button>
            }
        </>
    )
}

export default ExpenseList;