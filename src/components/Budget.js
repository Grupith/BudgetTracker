import React from 'react';

export const Budget = ({ budgetAmount }) => {
    return (
        <div>
            <h3 className='budgetAmount'>${budgetAmount}</h3>
        </div>
    )
}
