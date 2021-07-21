import React from 'react';

export const AddBudget = ({ setBudgetAmount, setSubmit }) => {
    return (
        <div className='formWrapper'>
            <form onSubmit={(e) => {
                e.preventDefault();
                setSubmit(true);
            }}>
                <label htmlFor='addbudget'>Set your budget amount</label>
                 <div className='addBudgetWrapper'>
                    <input type='number' name='addbudget' required onChange={(e) => setBudgetAmount(e.target.value)} />
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

