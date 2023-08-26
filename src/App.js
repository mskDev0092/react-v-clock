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

      <div id="break-label"> Break Length </div>
      <div id="break-length"> 5 </div>
      <button id="break-increment" onClick={handleAdd}>
        +
      </button>
      <button id="break-decrement" onClick={handleSub}>
        -
      </button>

      <div id="session-label"> Session Length </div>
      <div id="session-length"> {state.count} </div>
      <button id="session-increment" onClick={handleAdd}>
        +
      </button>
      <button id="session-decrement" onClick={handleSub}>
        -
      </button>

      <div id="timer-label">Session</div>
      <div id="time-left">{state.count} : 00</div>

      <button id="start_stop">Play </button>
      <button id="reset">Reset </button>

      <audio id="beep"> </audio>
    </div>
  );
}
