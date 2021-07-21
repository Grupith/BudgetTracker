import React from 'react';

export const AddBudget = ({ setBudgetAmount, setSubmit, setName }) => {
    return (
        <div className='formWrapper'>
            <form onSubmit={(e) => {
                e.preventDefault();
                setSubmit(true);
            }}>
                <label htmlFor='addName'>What is your name?</label>
                 <div className='addNameWrapper'>
                    <input type='text' autoFocus='true' autoComplete='off' name='addName' required onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='addBudgetFormWrapper'>
                    <label htmlFor='addbudget'>Set your budget amount</label>
                    <div className='addBudgetWrapper'>
                        <input type='number' name='addbudget' required onChange={(e) => setBudgetAmount(e.target.value)} />
                        <button type='submit'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

