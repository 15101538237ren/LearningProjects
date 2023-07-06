import './App.css';
import React, { Fragment, useState } from 'react';
import { getMonth } from './util';
import CalendarHeader from './components/CalendarHeader';
import SideBar from './components/SideBar';
import Month from './components/Month';
function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  return (
    <Fragment>
      <div className='h-screen flex flex-cols'>
        <CalendarHeader />
        <div className='flex flex-1'>
          <SideBar />
          <Month month={currentMonth} />
        </div>
      </div>
    </Fragment>
  );
}

export default App;
