import React from 'react';

const Budget = ({ budgetAmount }) => {
    return (
        <div>
            <h3 className='budgetAmount'>${budgetAmount}</h3>
        </div>
    )
}

export default Budget;
