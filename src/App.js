import React, { useReducer, useState, useEffect } from 'react';

import './style.css';

const initialState = {
  session: 25,
  break: 5,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'SUB':
      if (state.session > 1) {
        return {
          ...state,
          session: state.session - 1,
        };
      } else {
        return state;
      }
    case 'ADD':
      if (state.session < 60) {
        return {
          ...state,
          session: state.session + 1,
        };
      } else {
        return state;
      }
    case 'BSUB':
      if (state.break > 1) {
        return {
          ...state,
          break: state.break - 1,
        };
      } else {
        return state;
      }

    case 'BAD':
      if (state.break < 60) {
        return {
          ...state,
          break: state.break + 1,
        };
      } else {
        return state;
      }

    case 'COUNTDOWN':
    // decrement session count

    default:
      throw new Error();
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [minutes, setMinutes] = useState(state.session);
  const [seconds, setSeconds] = useState(60);
  const [isStarted, setIsStarted] = useState(false, {
    effect:
      (() => {
        setSeconds(seconds - 1);
      },
      [seconds]),
  });
  const [isPaused, setIsPaused] = useState(false);

  const handleAdd = () => {
    dispatch({ type: 'ADD' });
  };
  const handleSub = () => {
    dispatch({ type: 'SUB' });
  };
  const handleBreakAdd = () => {
    dispatch({ type: 'BAD' });
  };
  const handleBreakSub = () => {
    dispatch({ type: 'BSUB' });
  };

  const startCount = () => {
    setIsStarted(true);
  };

  return (
    <div className="master">
      <h1>25 + 5 Clock</h1>
      <div id="time-left">
        <div id="timer-label">
          <h1>Session</h1>
        </div>
        <div className="timeCount">
          <p>{minutes} </p> <p>{seconds} </p>
        </div>
      </div>
      <div className="btn">
        <button id="start_stop" onClick={startCount}>
          {!isStarted ? 'Start' : 'Pause'}
        </button>
        <button id="reset">Reset </button>
      </div>
      <div className="menue">
        <div id="break-label">
          <h1>Break Length</h1>

          <div id="break-length">
            <p>{state.break}</p>
          </div>
          <button id="break-increment" className="add" onClick={handleBreakAdd}>
            +
          </button>
          <button
            id="break-decrement"
            className="remove"
            onClick={handleBreakSub}
          >
            -
          </button>
        </div>

        <div id="session-label">
          <h1>Session Length</h1>

          <div id="session-length">
            <p>{state.session}</p>
          </div>
          <button id="session-increment" className="add" onClick={handleAdd}>
            +
          </button>
          <button id="session-decrement" className="remove" onClick={handleSub}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}
