import React, { useReducer, useState, useEffect } from 'react';

import './style.css';

const initialState = {
  sessionLength: 2,
  breakLength: 5,
  countSeconds: 6,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Session--':
      if (state.sessionLength > 1) {
        return {
          ...state,
          sessionLength: state.sessionLength - 1,
        };
      } else {
        return state;
      }
    case 'Session++':
      if (state.sessionLength < 60) {
        return {
          ...state,
          sessionLength: state.sessionLength + 1,
        };
      } else {
        return state;
      }
    case 'Break--':
      if (state.breakLength > 1) {
        return {
          ...state,
          breakLength: state.breakLength - 1,
        };
      } else {
        return state;
      }

    case 'Break++':
      if (state.breakLength < 60) {
        return {
          ...state,
          breakLength: state.breakLength + 1,
        };
      } else {
        return state;
      }

    case 'Start-Count':
      console.log('hi');
    case 'Pause-Count':
    // Pause the countdown.
    case 'Add-delay':
    // Add break to the countdown.

    case 'Reset':
      // Stop the countdown and reset the timer.
      return initialState;

    default:
      throw new Error();
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [delay, setDelay] = useState(state.breakLength);
  const [paused, setpaused] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(state.countSeconds);
  const [minutes, setMinutes] = useState(state.sessionLength);

  useEffect(() => {
    const interval = setInterval(() => {
      if (secondsRemaining > 0 && secondsRemaining < 61 && !paused) {
        setSecondsRemaining(secondsRemaining - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);
    if (secondsRemaining === 0 && !paused) {
      setMinutes(minutes - 1);
      setSecondsRemaining(6);
    }
    if (minutes <= 0 && secondsRemaining === 0) {
      audio.play();

      setpaused(true);
      setMinutes('00');
      setSecondsRemaining('00');
    }

    return () => clearInterval(interval);
  }, [secondsRemaining, minutes]);

  const audio = new Audio();
  audio.src = 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3';

  const handleSessionAdd = () => {
    dispatch({ type: 'Session++' });
  };
  const handleSessionSub = () => {
    dispatch({ type: 'Session--' });
  };
  const handlebreakAdd = () => {
    dispatch({ type: 'Break++' });
  };
  const handlebreakSub = () => {
    dispatch({ type: 'Break--' });
  };
  const handleReset = () => {
    dispatch({ type: 'Reset' });
  };
  const handleStart = () => {
    dispatch({ type: 'Start-Count' });
    setpaused(!paused);
  };

  return (
    <div className="master">
      <h1>25 + 5 Clock</h1>
      <div id="time-left">
        <div id="timer-label">
          <h1>Time Left</h1>
        </div>
        <div className="timeCount">
          <p>{minutes} </p> <p>{secondsRemaining}</p>
        </div>
      </div>
      <div className="btn">
        <button id="start_stop" onClick={handleStart}>
          {!paused ? 'Start' : 'Pause'}
        </button>
        <button id="reset" onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className="menue">
        <div id="break-label">
          <h1>Break Length</h1>

          <div id="break-length">
            <p>{state.breakLength}</p>
          </div>
          <div className="btn2">
            <button
              id="break-increment"
              className="add"
              onClick={handlebreakAdd}
            >
              +
            </button>
            <button
              id="break-decrement"
              className="remove"
              onClick={handlebreakSub}
            >
              -
            </button>
          </div>
        </div>

        <div id="session-label">
          <h1>Session Length</h1>

          <div id="session-length">
            <p>{state.sessionLength}</p>
          </div>
          <div className="btn2">
            <button
              id="session-increment"
              className="add"
              onClick={handleSessionAdd}
            >
              +
            </button>
            <button
              id="session-decrement"
              className="remove"
              onClick={handleSessionSub}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
