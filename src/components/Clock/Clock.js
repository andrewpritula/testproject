import React from 'react'
import { useState, useEffect } from 'react';
import './Css/clock.css'

function Clock(props) {
  const [date, setDate] = useState(new Date());

 //Replaces componentDidMount and componentWillUnmount
 useEffect(() => {
  var timerID = setInterval( () => tick(), 1000 );

  return function cleanup() {
      clearInterval(timerID);
    };
 });

   function tick() {
    setDate(new Date());
   }

   return (
      <div className='clock'>
        {date.toLocaleTimeString()}
      </div>
    );
}

export default Clock;