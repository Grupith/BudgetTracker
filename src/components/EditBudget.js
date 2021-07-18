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
                <div className='cancelSubmitWrapper'>
                    <button type='submit'>Submit</button>
                    <p onClick={() => setEditBudget(false)}>Cancel</p>
                </div>
            </form>
        </div>
    )
}

export default EditBudget;
