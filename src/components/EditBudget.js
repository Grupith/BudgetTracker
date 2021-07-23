import React from 'react';

export const EditBudget = ({ setEditBudget, setBudgetAmount, setItems }) => {
    return (
        <div>
            <form className='editBudgetFormWrapper' onSubmit={() => {
                setEditBudget(false)
                setItems([]);
            }}>
                <input name='editbudget' type='number' autoFocus={true} required onChange={(e) => setBudgetAmount(e.target.value)}></input>
                <p><span style={{color:"red", fontWeight:"600"}}>Warning:</span> This will reset your expenses.</p>
                <div className='cancelSubmitWrapper'>
                    <button type='submit'>Submit</button>
                    <p onClick={() => setEditBudget(false)}>Cancel</p>
                </div>
            </form>
        </div>
    )
}
