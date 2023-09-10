import React, { useReducer, useEffect, useState } from 'react';

import './style.css';

const initialState = {
  sessionLength: 2,
  breakLength: 1,
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

    case 'Reset':
      return initialState;

    default:
      return state;
  }
};

export default function CountDownTimer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [count, setCount] = useState(state.countSeconds);
  const [minutes, setMinutes] = useState(state.sessionLength);
  const [delay, setDelay] = useState(true);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (play === true) {
      setTimeout(() => {
        // Start count
        if (count > 0) {
          setCount((count) => count - 1);
        }
        // Reset count and decrement 1 minute
        if (count === 0) {
          setMinutes((minutes) => minutes - 1);
          setCount(state.countSeconds);
        }

        if (minutes === 0 && count === 0 && delay === true) {
          audio.play();
          // Set the minutes and count to 0.
          setCount(0);
          setMinutes(0);

          setTimeout(() => {
            // After 5 seconds, run the following function.
            setCount(state.countSeconds);
            setMinutes(state.breakLength);
            setDelay(false);
          }, 5000);
        }
        if (minutes === 0 && count === 0 && delay === false) {
          setCount(state.countSeconds);
          setMinutes(state.sessionLength);
          setDelay(true);
        }
      }, 1000);
    }
  }, [count, minutes, play]);

  const handleSessionAdd = () => {
    if (play === false) {
      dispatch({ type: 'Session++' });
    }
  };
  const handleSessionSub = () => {
    if (play === false) {
      dispatch({ type: 'Session--' });
    }
  };
  const handlebreakAdd = () => {
    if (play === false) {
      dispatch({ type: 'Break++' });
    }
  };
  const handlebreakSub = () => {
    if (play === false) {
      dispatch({ type: 'Break--' });
    }
  };
  const handleReset = () => {
    dispatch({ type: 'Reset' });
  };
  const handleStart = () => {
    setPlay(true);
    console.log(play);
  };
  const handlePause = () => {
    setPlay(false);
    console.log(play);
  };
  const audio = new Audio();
  audio.src =
    'https://cdn.jsdelivr.net/gh/mskDev0092/react-v-clock@main/clock-alarm-8761.mp3';

  return (
    <div className="master">
      <h1>25 + 5 Clock</h1>
      <div id="time-left">
        <div id="timer-label">
          <h1>Time Left</h1>
        </div>
        <div className="timeCount">
          <p>{minutes < 10 ? '0' + minutes : minutes} </p>
          <p>{count < 10 ? '0' + count : count}</p>
        </div>
      </div>
      <div className="btn">
        <button id="start" onClick={handleStart}>
          Start
        </button>
        <button id="stop" onClick={handlePause}>
          Pause
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
