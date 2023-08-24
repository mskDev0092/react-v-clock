import React, { useReducer } from 'react';
import './style.css';

const initialState = {
  count: 0,
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
      <h1>Hello StackBlitz! {state.count}</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSub}>-</button>
    </div>
  );
}
