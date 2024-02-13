import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  let initDate = new Date();
  initDate.setDate(initDate.getDate() + count);

  function handleStepPlus() {
    setStep((step) => step + 1);
  }

  function handleStepMinus() {
    setStep((step) => step - 1);
  }

  function handleCountPlus() {
    const state = step;
    setCount((count) => count + state);
  }

  function handleCountMinus() {
    const state = step;
    setCount((count) => count - state);
  }

  return (
    <div className="App">
      <div className="step-counter counter">
        <button className="minus" onClick={step > 1 ? handleStepMinus : null}>
          -
        </button>
        <span>Step: {step}</span>
        <button className="plus" onClick={handleStepPlus}>
          +
        </button>
      </div>

      <div className="count counter">
        <button className="minus" onClick={handleCountMinus}>
          -
        </button>
        <span>Count: {count}</span>
        <button className="plus" onClick={handleCountPlus}>
          +
        </button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is"
            : count > 0
            ? `${count} days from today is`
            : `${Math.abs(count)} days ago was`}{" "}
        </span>{" "}
        <span>{initDate.toDateString()}</span>
      </p>
    </div>
  );
}

export default App;
