import React from "react";

const ClickHandler = () => {
  const clickHandler = (event, count = 1) => {
    console.log("button clicked", count, event);
  };
  return (
    <div>
      <button
        type="button"
        className="
        bg-purple-500
        p-3
        mt-10
        rounded-md
        text-center
        mr-10
        "
        onClick={clickHandler}
      >
        Click
      </button>
      <button
        type="button"
        className="
        bg-purple-500
        p-3
        mt-10
        rounded-md
        text-center
        "
        onClick={(e) => {
          clickHandler(e, 5);
        }}
      >
        Click 5
      </button>
    </div>
  );
};

export default ClickHandler;
