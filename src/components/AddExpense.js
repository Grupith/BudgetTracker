import React from 'react';

const AddExpense = () => {
    return (
        <form className='addExpenseWrapper' onSubmit={(e) => {
            e.preventDefault();
        }}>
            <input type='text' placeholder='Add Expense' />
            <input type='number' placeholder='Price' className='priceWrapper' />
            <button type='submit'>+</button>
        </form>
    )
}

export default AddExpense;
