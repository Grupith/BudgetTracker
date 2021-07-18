import React from 'react';

const AddExpense = ({ setAddExpense, expense, setExpense, price, setPrice, items, setItems }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const newExpense = {
            id: new Date().getTime(),
            expense: expense,
            price: price,
        }
        setItems([...items].concat(newExpense));
        setAddExpense(false);
    }


    return (
        <form className='addExpenseWrapper' onSubmit={handleSubmit}>
            <input type='text' placeholder='Add Expense' onChange={(e) => setExpense(e.target.value)} />
            <input type='number' placeholder='Price' className='priceWrapper' onChange={(e) => setPrice(e.target.value)} />
            <button type='submit'>+</button>
        </form>
    )
}

export default AddExpense;
