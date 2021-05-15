import React, { Fragment } from 'react';
import useTimer from '../../hook/UseTimer';
import './Css/clock.css';

function Clock(props) {
  const timer = useTimer(new Date());

  return (
    <Fragment>
      {timer.toLocaleTimeString()}
    </Fragment>
  );
}

export default Clock;