import React from "react";

const ChildComponent = (props) => {
  return (
    <div>
      <button
        type="button"
        onClick={() => props.greetHandler("child")}
        className="bg-green-500 px-10 py-2 my-10 rounded-lg"
      >
        Greet Parent
      </button>
    </div>
  );
};

export default ChildComponent;
