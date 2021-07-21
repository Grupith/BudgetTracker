import React from 'react';
import { DateTime } from 'luxon';

export const TodaysDate = () => {

   const dt = DateTime.local().toLocaleString(DateTime.DATE_HUGE);

    return (
        <div className='todaysDateWrapper'>
            <h5 className='todaysDate'>Today is...</h5>
            <h5 className='actualDate'>{dt}</h5>
        </div>
    )
}
