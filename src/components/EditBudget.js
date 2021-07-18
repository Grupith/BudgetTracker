import React from 'react';

const EditBudget = ({ setEditBudget, setBudgetAmount }) => {
    return (
        <div>
            <form className='editBudgetFormWrapper' onSubmit={() => setEditBudget(false)}>
                <input name='editbudget' type='number' onChange={(e) => setBudgetAmount(e.target.value)}></input>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default EditBudget;
