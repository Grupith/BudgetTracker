import React from 'react'

export const InitialBudget = ({ initialBudget }) => {
    return (
        <div className='initialBudget'>
            <p>Your initial budget was <span>${initialBudget}</span></p>
        </div>
    )
}


