import React, { useReducer } from 'react';
import './style.css';

const initialState = {
  count: 25,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'SUB':
      if (state.count > 0) {
        return {
          ...state,
          count: state.count - 1,
        };
      } else {
        return state;
      }
    case 'ADD':
      return {
        ...state,
        count: state.count + 1,
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

  return (
    <div>
      <h1>25 + 5 Clock</h1>
      <div className="menue">
        
        <div id="break-label">
          <h1>Break Length</h1>

          <div id="break-length"> 5 </div>
          <button id="break-increment" className="add" onClick={handleAdd}>
            +
          </button>
          <button id="break-decrement" className="remove" onClick={handleSub}>
            -
          </button>
        </div>

        <div id="session-label">
          <h1>Session Length</h1>

          <div id="session-length"> {state.count} </div>
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
          <h2>{state.count}</h2> <h3> 00 </h3>
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
