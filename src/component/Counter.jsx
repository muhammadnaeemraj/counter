import React, { useReducer } from "react";

const initialState = 1;
const reducer = (state, action) => {
  if (action == "increment") {
    return state + 1;
  } else if (action == "decrement") {
    return state - 1;
  } else {
    return state;
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h3>Press for increment red and for decrement black button</h3>
      <h2>{count}</h2>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
    </>
  );
};

export default Counter;
