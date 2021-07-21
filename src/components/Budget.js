import React from 'react';

export const Budget = ({ budgetAmount }) => {
    return (
        <div>
            <h3 className='budgetAmount'>${Math.round(budgetAmount * 100) / 100}</h3>
        </div>
    )
}
