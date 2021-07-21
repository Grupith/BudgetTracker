import React from 'react';

export const AddExpense = ({ setAddExpense, expense, setExpense, price, setPrice, items, setItems, budgetAmount, setBudgetAmount }) => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const newExpense = {
            id: new Date().getTime(),
            expense: expense,
            price: price,
        }
        setItems([...items].concat(newExpense));
        setBudgetAmount(budgetAmount - newExpense.price)
        setAddExpense(false);
    }


    return (
        <form className='addExpenseWrapper' onSubmit={handleSubmit}>
            <input type='text' required autoFocus='true' placeholder='Add Item...' onChange={(e) => setExpense(e.target.value)} />
            <input type='text' required placeholder='Price...' className='priceWrapper' onChange={(e) => setPrice(e.target.value)} />
            <button type='submit'>+</button>
            <p onClick={() => setAddExpense(false)}>Cancel</p>
        </form>
    )
}
