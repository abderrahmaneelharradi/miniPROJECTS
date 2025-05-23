import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("without a dependency");
  });

  useEffect(() => {
    console.log("with an empty dependency");
  }, []);

  useEffect(() => {
    console.log("with a count dependency");
  }, [count]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="design">
      <p>Counter: {count}</p>
      <button onClick={increment}>Add +1</button>
      <button onClick={decrement}>Minus -1</button>
      <button onClick={reset}>Clear</button>
    </div>
  );
}

export default Counter;