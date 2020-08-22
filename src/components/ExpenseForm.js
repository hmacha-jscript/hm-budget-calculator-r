import React from 'react';
import { MdSend } from 'react-icons/md';

const ExpenseForm = ({ charge, amount, editMode, handleExpenses, handleCharge, handleAmount }) => {
    return (
        <form onSubmit={handleExpenses}>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="charge">Charge</label>
                    <input
                        className="form-control"
                        type="text"
                        id="charge"
                        name="charge"
                        placeholder="e.g. rent"
                        value={charge}
                        onChange={handleCharge}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <input
                        className="form-control"
                        type="text"
                        id="amount"
                        name="amount"
                        placeholder="e.g. 100"
                        value={amount}
                        onChange={handleAmount}
                    />
                </div>
            </div>
            <button className={editMode ? "btn edit-btn" : "btn"}>
                {editMode ? 'Edit' : 'Submit'}
                <MdSend />
            </button>
        </form>
    )
}

export default ExpenseForm;