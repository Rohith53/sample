import React, { useReducer } from 'react';

const transactionReducer = (state, action) => {
  switch (action.type) {
    case 'withdrew':
      return state - action.payload;
    case 'deposit':
      return state + action.payload;
    default:
      return state;
  }
};

export default function Reducer() {
  const [state, dispatch] = useReducer(transactionReducer, 1000);

  const withdraw = (amount) => {
    dispatch({ type: 'withdrew', payload: amount });
  };

  const deposit = (amount) => {
    dispatch({ type: 'deposit', payload: amount });
  };

  return (
    <div>
      <h3>{`balance is ${state}`}</h3>
      <button onClick={() => deposit(500)}>DEPOSIT</button>
      <button onClick={() => withdraw(500)}>WITHDRAW</button>
    </div>
  );
}