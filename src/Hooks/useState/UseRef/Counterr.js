import React, { useState, useEffect, useRef } from 'react';

function Counterr() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(0);

  useEffect(() => {
    prevCountRef.current = count; // Update ref value with current count after each render
  }, [count]);

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <h2>Previous Count: {prevCountRef.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count  - 1)}>Decrement</button>
    </div>
  );
}

export default Counterr;




// Using useRef for Storing Previous State
// Keeping track of previous value   Save previous state without causing re-renders.