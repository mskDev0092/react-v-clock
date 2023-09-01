import React, { useReducer, useState, useEffect } from 'react';

import './style.css';

const initialState = {
  sessionLength: 25,
  breakLength: 5,
  seconds: 60,
};
const reducer = (state, action) => {
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
    // decrement seconds from 60 - 0
    // decrement 1 minute if seconds reach zero
    // decrement sessionLength count till 0
    case 'Add-delay':
    // Delay count when start count ends based on set break length
    // Restart session based on previous state

    case 'Reset':
    // Reset the app to default values

    default:
      throw new Error();
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [minutes, setMinutes] = useState(state.sessionLength);
  const [seconds, setSeconds] = useState(state.seconds);
  const [isRunning, setIsRunning] = useState(false);

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

  return (
    <div className="master">
      <h1>25 + 5 Clock</h1>
      <div id="time-left">
        <div id="timer-label">
          <h1>Time Left</h1>
        </div>
        <div className="timeCount">
          <p>{minutes} </p> <p>{seconds}</p>
        </div>
      </div>
      <div className="btn">
        <button id="start_stop" onClick={() => setIsRunning(!isRunning)}>
          {!isRunning ? 'Start' : 'Pause'}
        </button>
        <button id="reset">Reset </button>
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
