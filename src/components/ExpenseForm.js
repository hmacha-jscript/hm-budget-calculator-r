import React from 'react';
import { MdSend } from 'react-icons/md';

const ExpenseForm = () => {
    return (
        <form>
            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="charge">Charge</label>
                    <input
                        className="form-control"
                        type="text"
                        id="charge"
                        name="charge"
                        placeholder="e.g. rent"
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
                    />
                </div>
            </div>
            <button className="btn">Submit <MdSend /> </button>
        </form>
    )
}

export default ExpenseForm;