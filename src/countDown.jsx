import React, { useState, useEffect } from 'react';

function Countdown() {
  const [secondsRemaining, setSecondsRemaining] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      if (secondsRemaining > 0) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsRemaining]);

  return (
    <div>
      <h1>Countdown</h1>
      <h2>Seconds remaining: {secondsRemaining}</h2>
    </div>
  );
}

export default Countdown;
