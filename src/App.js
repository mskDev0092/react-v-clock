import React, { useReducer } from 'react';
import './style.css';

const initialState = {
  scount: 25,
  bcount: 5,
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
      return {
        ...state,
        scount: state.scount + 1,
      };
    case 'BSUB':
      if (state.bcount > 0) {
        return {
          ...state,
          bcount: state.bcount - 1,
        };
      } else {
        return state;
      }

    case 'BAD':
      return {
        ...state,
        bcount: state.bcount + 1,
      };

    default:
      return state;
  }
};

export default function App() {
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
  return (
    <div>
      <h1>25 + 5 Clock</h1>
      <div className="menue">
        <div id="break-label">
          <h1>Break Length</h1>

          <div id="break-length"> {state.bcount} </div>
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

          <div id="session-length"> {state.scount} </div>
          <button id="session-increment" className="add" onClick={handleAdd}>
            +
          </button>
          <button id="session-decrement" className="remove" onClick={handleSub}>
            -
          </button>
        </div>
      </div>

      <div id="time-left">
        <div className="timeCount">
          <div id="timer-label">
            <h1>Session</h1>
          </div>
          <h2>{state.scount}</h2> <h3> 00 </h3>
        </div>
      </div>
      <div className="btn">
        <button id="start_stop">Play </button>
        <button id="reset">Reset </button>
      </div>
      <audio id="beep"> </audio>
    </div>
  );
}
