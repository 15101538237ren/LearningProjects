import './App.css';
import React, { Fragment, useState, useContext, useEffect } from 'react';
import { getMonth } from './util';
import CalendarHeader from './components/CalendarHeader';
import SideBar from './components/SideBar';
import EventModal from './components/EventModal';
import Month from './components/Month';
import GlobalContext from './contexts/GlobalContext';
function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <Fragment>
      <div className='h-screen flex flex-col'>
        {showEventModal && <EventModal />}
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
