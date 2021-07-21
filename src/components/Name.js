import React from 'react'

export const Name = ({ name }) => {
    return (
        <div className='name'>
            <h1>Welcome <span>{name}!</span></h1>
        </div>
    )
}
