import React from 'react';

const AddBudget = () => {
    return (
        <div className='formWrapper'>
            <form>
                <label for='addbudget'>Set your budget amount</label>
                <input type='number' name='addbudget' />
            </form>
        </div>
    )
}

export default AddBudget;
