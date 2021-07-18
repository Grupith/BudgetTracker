import React from 'react';

const EditBudget = ({ setEditBudget, setBudgetAmount }) => {
    return (
        <div>
            <form className='editBudgetFormWrapper' onSubmit={() => setEditBudget(false)}>
                <label for='editbudget'>Edit your budget amount</label>
                <input name='editbudget' type='number' onChange={(e) => setBudgetAmount(e.target.value)}></input>
            </form>
        </div>
    )
}

export default EditBudget;
