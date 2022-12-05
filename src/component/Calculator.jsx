import React from "react";
import { useRef, useState } from "react";

function Calculator() {
  let inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const Add = (e) => {
    e.preventDefault();
    setResult((res) => res + Number(inputRef.current.value));
  };
  const Sub = (e) => {
    e.preventDefault();
    setResult((res) => res - Number(inputRef.current.value));
  };
  const Mul = (e) => {
    e.preventDefault();
    setResult((res) => res * Number(inputRef.current.value));
  };
  const Div = (e) => {
    e.preventDefault();
    setResult((res) => res / Number(inputRef.current.value));
  };
  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = null;
  };
  const resetResult = (e) => {
    e.preventDefault();
    setResult(()=> 0 * Number(inputRef.current.value));
  };
  return (
    <>
      <div className="cal">
        <h1>Simple Calculator</h1>
        <form>
          <p ref={resultRef}>{result}</p>
          {/* <br /> */}
          <input type="number" placeholder="Type a Number" ref={inputRef} />
          <br /><br />
          <button onClick={Add}>Addition</button>
          <button onClick={Sub}>Subtract</button>
          <button onClick={Mul}>Multiplication</button>
          <button onClick={Div}>Division</button>
          <br />
          <button onClick={resetInput}>Reset Input</button>
          <button onClick={resetResult}>Reset Result</button>
        </form>
      </div>
    </>
  );
}
export default Calculator;

