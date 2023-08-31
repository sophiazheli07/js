import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStoreType } from "./redux/types";
import { Todos } from "./components/Todos";

function App() {
  const counter = useSelector((store: { counter: number }) => store.counter);
  const dispatch = useDispatch();

  const increment = () => dispatch({ type: "INCREMENT_COUNTER" });
  const decrement = () => dispatch({ type: "DECREMENT_COUNTER" });
  const update = (newCounter: number) =>
    dispatch({ type: "UPDATE_COUNTER", payload: newCounter });
  return (
    <div>
      <h1>Redux {counter}</h1>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>

      <p>
        {[10, 20, 30].map((n) => (
          <button key={n} onClick={() => update(n)}>Update to {n}</button>
        ))}
      </p>
      <Todos/>
    </div>

  );
}

export default App;
