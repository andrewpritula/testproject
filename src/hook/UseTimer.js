import React from 'react';

function useTimer(currentDate) {
    const [date, setDate] = React.useState(currentDate);
    
    React.useEffect(() => {
      let timerID = setInterval( () => tick(), 1000 );
      return function cleanup() {
          clearInterval(timerID);
        };
     });
    
    function tick() {
      setDate(new Date());
     }
    
    return date;
}

export default useTimer;