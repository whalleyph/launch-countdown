import React from "react";

function Countdown() {
  const [Count, setCount] = React.useState(5);

  function decrement() {
    Count > 0 ? setCount((count) => count - 1) : setCount(0);
  }

  return (
    <div className="countdown-content">
      <div>
        <h2>{Count}</h2>
        <h2>Debug: {Count}</h2>
      </div>
      <div className="buttons">
        <button onClick={decrement} className="button">
          Decrement
        </button>
        <button onClick={(prevCount) => setCount(5)} className="button">
          Reset
        </button>
      </div>
    </div>
  );
}

export { Countdown };
