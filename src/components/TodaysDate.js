import React from 'react';
import moment from 'moment';

export const TodaysDate = () => {

    const todaysDate = moment().format('dddd MMMM Do YYYY');
    console.log(todaysDate);

    return (
        <div className='todaysDateWrapper'>
            <h5 className='todaysDate'>Today is...</h5>
            <h5 className='actualDate'>{todaysDate}</h5>
        </div>
    )
}
