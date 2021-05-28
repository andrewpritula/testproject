import React from 'react';

function useTimer(currentDate) {
  const [date, setDate] = React.useState(currentDate);
  
  function tick() {
    setDate(new Date());
  }

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });
    
  return date;
}

export default useTimer;
