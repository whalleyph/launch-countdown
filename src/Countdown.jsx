import React from "react";

function Countdown() {
  const [Count, setCount] = React.useState(5);
  const [Emoji, setEmoji] = React.useState("👩🏽‍🚀");

  function decrement() {
    Count > 0 ? setCount((count) => count - 1) : setCount(0);
    Count > 1 ? setEmoji("👩🏽‍🚀") : setEmoji("🚀")
  }

  return (
    <div className="countdown-content">
      <div>
        <h2>{Count > 1 ? Count : Emoji}</h2>
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
