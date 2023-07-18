import React, { useState } from "react";

export const Counter = () => {
  const [counter, setCounter] = useState<number>(0);
  const [isCounterEnabled, setisCounterEnabled] = useState<boolean>(true);

  const onButtonClick = (isIncrement: boolean) => {
    setCounter(isIncrement ? counter + 1 : counter - 1);
    // isIncrement ? setCounter(counter + 1) : setCounter(counter - 1);
  };

  const toggleCounterAvailabilty = () => setisCounterEnabled(!isCounterEnabled);

  return (
    <div className="counter">

      <button onClick={toggleCounterAvailabilty}>
        {isCounterEnabled ? "Hide" : "Show"}
      </button>

      {isCounterEnabled && <h1>counter : {counter}</h1>}

      {counter < 10 && <button onClick={() => onButtonClick(true)}>+</button>}
      
      <button onClick={() => onButtonClick(false)}>-</button>
    </div>
  );
};

// rafc
