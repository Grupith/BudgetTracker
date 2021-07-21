import React from 'react'

export const Reset = ({setSubmit, setBudgetAmount, setItems}) => {
    return (
        <div>
            <button className='resetButton' onClick={() => {
                setSubmit(false);
                setBudgetAmount(0);
                setItems([]);
                localStorage.clear();
            }}>Reset</button>
        </div>
    )
}
