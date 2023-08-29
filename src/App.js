import React, { useReducer, useState } from 'react';
import Countdown from 'react-countdown';
import './style.css';

const initialState = {
  scount: 25,
  bcount: 5,
  maxLimit: 60,
  seconds: '00',
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'SUB':
      if (state.scount > 1) {
        return {
          ...state,
          scount: state.scount - 1,
        };
      } else {
        return state;
      }
    case 'ADD':
      if (state.scount < state.maxLimit) {
        return {
          ...state,
          scount: state.scount + 1,
        };
      } else {
        return state;
      }
    case 'BSUB':
      if (state.bcount > 1) {
        return {
          ...state,
          bcount: state.bcount - 1,
        };
      } else {
        return state;
      }

    case 'BAD':
      if (state.bcount < state.maxLimit) {
        return {
          ...state,
          bcount: state.bcount + 1,
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

export default function App(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

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
  const startCount = () => {};
  const Completionist = () => {
    let x = handleSub();
    return x;
  };
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <p>{seconds}</p>;
    }
  };

  return (
    <div className="master">
      <h1>25 + 5 Clock</h1>
      <div className="menue">
        <div id="break-label">
          <h1>Break Length</h1>

          <div id="break-length">
            <p>{state.bcount}</p>
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
            <p>{state.scount}</p>
          </div>
          <button id="session-increment" className="add" onClick={handleAdd}>
            +
          </button>
          <button id="session-decrement" className="remove" onClick={handleSub}>
            -
          </button>
        </div>
      </div>

      <div id="time-left">
        <div id="timer-label">
          <h1>Session</h1>
        </div>
        <div className="timeCount">
          <p>{state.scount} </p>

          <Countdown date={Date.now() + 5000} renderer={renderer} />
        </div>
      </div>
      <div className="btn">
        <button id="start_stop" onClick={startCount}>
          Play
        </button>
        <button id="reset">Reset </button>
      </div>
    </div>
  );
}
