import React, { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="bg-gray-900  border-pink-300 border-2 rounded-lg text-center mt-10">
      <button
        type="button"
        className="
        bg-purple-500
        m-10
        p-3
        rounded-md
        "
        onClick={() => setCount(count + 1)}
      >
        Inc counter
      </button>

      <h1>{count}</h1>
      <button
        type="button"
        className="
         bg-purple-500
        m-10
        p-3
        rounded-md
        
        "
        onClick={() => (count > 0 ? setCount(count - 1) : "")}
      >
        dec counter
      </button>
    </div>
  );
};

export default State;
