import React from 'react';

const EditBudget = ({ setEditBudget, setBudgetAmount, setItems }) => {
    return (
        <div>
            <form className='editBudgetFormWrapper' onSubmit={() => {
                setEditBudget(false)
                setItems([]);
            }}>
                <input name='editbudget' type='number' onChange={(e) => setBudgetAmount(e.target.value)}></input>
                <p>Warning: This will reset your expenses.</p>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default EditBudget;
