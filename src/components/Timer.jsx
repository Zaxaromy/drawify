import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(300);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <div className="timer-wrapper">
      <span className="timer">
        {minutes}
        :
        {remainingSeconds < 10 ? '0' : ''}
        {remainingSeconds}
      </span>
    </div>
  );
}

export default Timer;
