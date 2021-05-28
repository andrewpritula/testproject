import React, { Fragment } from 'react';
import useTimer from '../../hook/UseTimer';
import './Css/clock.css';

function Clock() {
  const timer = useTimer(new Date());

  return (
    <>
      {timer.toLocaleTimeString()}
    </>
  );
}

export default Clock;
