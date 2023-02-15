"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Current count: {count}</div>
      <button
        className="btn"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase count
      </button>
    </>
  );
}
