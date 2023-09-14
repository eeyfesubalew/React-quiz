import { useReducer, useState } from "react";

const initialState = {
  count: 0,
  step: 1,
};

function stateReducer(state, action) {
  switch (action.type) {
    case "inc":
      return { count: state.count + state.step };
    case "dec":
      return { count: state.count - state.step };
    default:
      throw new Error("Could not find the value");
  }
}

function DateCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const [state, dispatch] = useReducer(stateReducer, initialState);
  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  // const dec = function () {
  //   // setCount((count) => count - 1);
  //   setCount((count) => count - step);
  // };

  // const inc = function () {
  //   // setCount((count) => count + 1);
  //   setCount((count) => count + step);
  // };

  const defineCount = function (e) {
    setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    setStep(Number(e.target.value));
  };

  const reset = function () {
    setCount(0);
    setStep(1);
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        {/* <button onClick={dec}>-</button> */}
        <button onClick={() => dispatch({ type: "dec" })}>-</button>
        <input value={state.count} onChange={defineCount} />
        <button onClick={() => dispatch({ type: "inc" })}>+</button>
        {/* <button onClick={inc}>+</button> */}
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
