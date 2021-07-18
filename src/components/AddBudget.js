import React from 'react';

const AddBudget = ({ setBudgetAmount, setSubmit }) => {
    return (
        <div className='formWrapper'>
            <form onSubmit={(e) => {
                e.preventDefault();
                setSubmit(true);
            }}>
                <label htmlFor='addbudget'>Set your budget amount</label>
                <input type='number' name='addbudget' onChange={(e) => setBudgetAmount(e.target.value)} />
            </form>
        </div>
    )
}

export default AddBudget;
