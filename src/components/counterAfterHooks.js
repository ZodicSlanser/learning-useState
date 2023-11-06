import React from "react";

function CounterFc() {
  const [counter, setCounter] = React.useState(0);

  const handleIncrement = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div className="counter-container">
      <h1>Counter: {counter}</h1>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default CounterFc;