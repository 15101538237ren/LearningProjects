import React, { Fragment } from 'react';
import Day from './Day';
function Month({ month }) {
  return (
    <div className='flex-1 flex flex-col'>
      {month.map((row, i) => (
        <div className='grid grid-cols-7' key={i}>
          {row.map((day, idx) => (
            <Day key={idx} day={day} rowIndex={i} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Month;
