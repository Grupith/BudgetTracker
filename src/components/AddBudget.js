import React from 'react';

const AddBudget = ({ setBudgetAmount, setSubmit, setEditBudget }) => {
    return (
        <div className='formWrapper'>
            <form onSubmit={(e) => {
                e.preventDefault();
                setSubmit(true);
                setEditBudget(false);
            }}>
                <label for='addbudget'>Set your budget for the week</label>
                <input type='number' name='addbudget' onChange={(e) => setBudgetAmount(e.target.value)} />
            </form>
        </div>
    )
}

export default AddBudget;
